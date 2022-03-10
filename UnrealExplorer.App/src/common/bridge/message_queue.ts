import MessageToken from './message_token'

// cut off point for varint encoded msg length
// effective max data size = 2^7n
const MAX_LENGTH_BYTES = 4

enum BufferState {
    ReadingToken,
    ReadingLength,
    ReadingData,
    Corrupted
}

// Buffers message data until it is ready to be dispatched
// (because Node.js sockets don't have a synchronous API =_=)
class MessageQueue {
    chunks: Buffer[] = []
    state = BufferState.ReadingToken
    curToken = MessageToken.NoOp
    curLengthByte = 0
    curLength = 0
    processing = false
    
    messageCallback

    constructor(messageCallback: (token: MessageToken, data: Buffer | undefined) => void) {
        this.messageCallback = messageCallback
    }

    push(data: Buffer) {
        this.chunks.push(data)
        this.processing = true
        while (this.chunks.length > 0 && this.processing) {
            this.processBuffer()
        }
        this.processing = false
    }

    private abortProcessing() {
        this.state = BufferState.Corrupted
        console.log('buffer corrupted :(')
    }

    private reset(clearBuffer: boolean) {
        if (clearBuffer) {
            this.chunks = []
        }
        this.state = BufferState.ReadingToken
        this.curToken = MessageToken.NoOp
        this.curLengthByte = 0
        this.curLength = 0
    }

    private dispatchMessage(token: MessageToken, data: Buffer | undefined) {
        // prepare buffer to read next message
        this.reset(false)

        // dispatch
        this.messageCallback(token, data)
    }

    private processBuffer() {
        if (this.chunks.length === 0) {
            return
        }

        if (this.state === BufferState.Corrupted) {
            return
        } else if (this.state === BufferState.ReadingToken) {
            this.readToken()
        } else if (this.state === BufferState.ReadingLength) {
            this.readLength()
        } else if (this.state === BufferState.ReadingData) {
            this.readData()
        }

        // moved to loop in push() to avoid stack overflow
        /*if (this.chunks.length > 0) {
            this.processBuffer()
        }*/
    }

    private readByte() {
        const byte = this.chunks[0][0]

        if (this.chunks[0].length === 1) {
            this.chunks.shift()
        } else {
            this.chunks[0] = this.chunks[0].subarray(1)
        }

        return byte
    }

    private readToken() {
        this.curToken = this.readByte()
        this.state = BufferState.ReadingLength
        console.log('dbg in token:', this.curToken)
    }

    private readLength() {
        const byte = this.readByte()
        console.log('dbg in length (raw #' + this.curLengthByte + '):', byte)
        this.curLength = (this.curLength | (byte & 127) << 7 * this.curLengthByte++) >>> 0
        
        // end of varint
        if (byte < 128) {
            this.state = BufferState.ReadingData
            console.log('dbg in length (decoded):', this.curLength)

            // if we're not expecting any data,
            // dispatch the message now to avoid waiting
            // for the next chunk to be received/processed
            if (this.curLength === 0) {
                this.dispatchMessage(this.curToken, undefined)
            }
        }
        
        // varint is unreasonably long;
        // either the client is sending bad data
        // or something in this class broke
        else if (this.curLengthByte >= MAX_LENGTH_BYTES) {
            console.log('[!!] unexpectedly large msg size')
            this.abortProcessing()
        }
    }

    private readData() {
        // enumerate buffered chunks until we have enough to grab the data from
        console.log('curLength:', this.curLength)
        let totalLength = 0
        for (let i = 0; i < this.chunks.length; i++) {
            totalLength += this.chunks[i].length
            console.log('totalLength:', totalLength)

            // easy case:
            // data is chunk-aligned and we can just chop off the chunks we need
            if (totalLength === this.curLength) {
                const data = Buffer.concat(this.chunks.splice(0, i+1))
                //console.log('dbg in data [case1]:', data)
                console.log('dbg in data.length [case1]:', data.length)
                this.dispatchMessage(this.curToken, data)
                return
            }
            
            // annoying case:
            // data partially steps into a chunk,
            // so we have to remove the first few filled chunks (if applicable)
            // then remove only the desired portion of the last chunk
            else if (totalLength > this.curLength) {
                let dataChunks: Buffer[] = []

                if (i > 0) {
                    dataChunks = this.chunks.splice(0, i)
                }

                dataChunks.push(this.chunks[0].slice(0, this.curLength))
                this.chunks[0] = this.chunks[0].subarray(this.curLength)
                
                const data = Buffer.concat(dataChunks)
                //console.log('dbg in data [case2]:', data)
                console.log('dbg in data.length [case2]:', data.length)
                this.dispatchMessage(this.curToken, data)
                return
            }
        }

        // stop processing until we have enough data
        this.processing = false
    }
}

export default MessageQueue