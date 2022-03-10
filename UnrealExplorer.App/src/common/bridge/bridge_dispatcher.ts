import { Socket } from 'net'
import MessageQueue from './message_queue'
import MessageToken from './message_token'

class BridgeDispatcher {
    socket: Socket
    queue: MessageQueue
    listeners: ((data: Buffer | undefined) => void)[][]
    globalListeners: ((token: MessageToken, data: Buffer | undefined) => void)[]

    private _messageCallbackBound = this._messageCallback.bind(this)

    constructor(socket: Socket) {
        this.socket = socket
        this.queue = new MessageQueue(this._messageCallbackBound)
        this.listeners = []
        this.globalListeners = []

        this.socket.on('data', data => {
            this.queue.push(data)
        })
    }

    emit(token: MessageToken, data: Buffer | undefined) {
        if (data && data.length > 0) {
            console.log('dbg out token:', token)
            console.log('dbg out length:', encodeVarint(data.length))
            console.log('dbg out data:', data)
            console.log('')
            this.socket.write(Buffer.from([ token ]))
            this.socket.write(encodeVarint(data.length))
            this.socket.write(data)
        } else {
            console.log('dbg out token (+ 0 data):', Buffer.from([ token, 0x00 ]))
            console.log('')
            this.socket.write(Buffer.from([ token, 0x00 ]))
        }
    }

    on(token: MessageToken, listener: (data: Buffer | undefined) => void) {
        if (!this.listeners[token]) {
            this.listeners[token] = []
        }

        this.listeners[token].push(listener)
    }

    off(token: MessageToken, listener: (data: Buffer | undefined) => void) {
        if (!this.listeners[token]) {
            return
        }

        this.listeners[token] = this.listeners[token].filter(l => l !== listener)
    }

    onAll(listener: (token: MessageToken, data: Buffer | undefined) => void) {
        this.globalListeners.push(listener)
    }

    offAll(listener: (token: MessageToken, data: Buffer | undefined) => void) {
        this.globalListeners = this.globalListeners.filter(l => l !== listener)
    }

    private _messageCallback(token: MessageToken, data: Buffer | undefined) {
        this._internalEmit(token, data)
    }

    private _internalEmit(token: MessageToken, data: Buffer | undefined) {
        this.globalListeners.forEach(listener => listener(token, data))
        if (this.listeners[token]) {
            this.listeners[token].forEach(listener => listener(data))
        }
    }
}

function encodeVarint(value: number): Buffer {
    let out: number[] = []

    while (value > 127) {
        out.push((value & 0x7f) | 0x80)
        value = value >>> 7
    }
    out.push(value)

    return Buffer.from(out)
}

export default BridgeDispatcher