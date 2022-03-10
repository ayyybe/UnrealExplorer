import MessageToken from "./message_token";

interface BridgeProxy {
    emit: (token: MessageToken, data: Buffer | undefined) => void
    on: (token: MessageToken, listener: (data: Buffer | undefined) => void) => void
    off: (token: MessageToken, listener: (data: Buffer | undefined) => void) => void
    onAll: (listener: (token: MessageToken, data: Buffer | undefined) => void) => void
    offAll: (listener: (token: MessageToken, data: Buffer | undefined) => void) => void

    onConnect: (listener: () => void) => void
    onDisconnect: (listener: () => void) => void
    onError: (listener: (err: Error) => void) => void
}

export default BridgeProxy