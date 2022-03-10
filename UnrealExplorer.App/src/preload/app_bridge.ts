import { Socket } from 'net'
import { contextBridge } from 'electron';
import BridgeDispatcher from '../common/bridge/bridge_dispatcher'
import BridgeProxy from '../common/bridge/bridge_proxy'

const client = new Socket()
const bridge = new BridgeDispatcher(client)

const connectListeners: (() => void)[] = []
const disconnectListeners: (() => void)[] = []
const errorListeners: ((err: Error) => void)[] = []

const bridgeProxy: BridgeProxy = {
    emit: (token, data) => bridge.emit(token, data),
    on: (token, listener) => bridge.on(token, listener),
    off: (token, listener) => bridge.off(token, listener),
    onAll: (listener) => bridge.onAll(listener),
    offAll: (listener) => bridge.offAll(listener),

    onConnect: (listener: () => void) => connectListeners.push(listener),
    onDisconnect: (listener: () => void) => disconnectListeners.push(listener),
    onError: (listener: (err: Error) => void) => errorListeners.push(listener)
}

function connect() {
    client.connect(1337, '127.0.0.1')
}

let connectTimer: NodeJS.Timer | undefined

function delayedConnect() {
    if (!connectTimer) {
        connectTimer = setInterval(connect, 1000)
    }
}

function clearConnectTimer() {
    clearInterval(connectTimer)
    connectTimer = undefined
}

client.on('error', err => {
    console.log('Bridge connection error:', err)
    errorListeners.forEach(listener => listener(err))
    delayedConnect()
})

client.on('close', () => {
    console.log('Bridge connection closed')
    disconnectListeners.forEach(listener => listener())
    delayedConnect()
})

client.on('end', () => {
    console.log('Bridge connection ended')
    disconnectListeners.forEach(listener => listener())
    delayedConnect()
})

client.on('connect', () => {
    clearConnectTimer()
    console.log('Connected to bridge')
    connectListeners.forEach(listener => listener())
    //client.write(Buffer.from([0x01, 0x00]))
    //client.write(Buffer.from([0x01, 0x00]))
    //client.write(Buffer.from([0x03, 0x00]))
    //client.write(Buffer.from([0x03, 0x00]))
    //client.write(Buffer.from([0x03, 0x00]))
    //client.write(Buffer.from([0x01, 0x00]))
    //setTimeout(() => client.write(Buffer.from([0x01, 0x00])), 2000)
    //setTimeout(() => client.write(Buffer.from([0x01, 0x00])), 5000)
    //setTimeout(() => client.write(Buffer.from([0x01, 0x00, 0x03, 0x00])), 6000)
    //setTimeout(() => client.write(Buffer.from([0x01, 0x00])), 7000)
    //setTimeout(() => client.write(Buffer.from([0x01, 0x00])), 8000)
    //setTimeout(() => client.write(Buffer.from([0x01, 0x00, 0x03, 0x00])), 9000)
    //setTimeout(() => client.write(Buffer.from([0x01, 0x00])), 10000)
})

contextBridge.exposeInMainWorld('AppBridge', bridgeProxy)

connect()