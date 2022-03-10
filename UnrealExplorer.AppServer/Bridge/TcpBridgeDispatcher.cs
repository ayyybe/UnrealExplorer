using System;
using System.Net.Sockets;
using System.Net;

namespace UnrealExplorer.AppServer.Bridge
{
    // Implemented as a synchronous, single-client TCP server
    public class TcpBridgeDispatcher : IBridgeDispatcher
    {
        public event EventHandler<BridgeMessage> OnMessage;

        private Socket curClient;

        private const int MaxLengthBytes = 4;

        public void Send(BridgeMessage msg) => Send(msg.Token, msg.Data);

        public void Send(MessageToken token, byte[] data)
        {
            if (data is {Length: > 0})
            {
                curClient.Send(new[] {(byte) token});
                curClient.Send(EncodeVarint((uint) data.Length));
                curClient.Send(data);
            }
            else
            {
                curClient.Send(new byte[] {(byte) token, 0x00});
            }
        }

        public void Kick()
        {
            try
            {
                curClient.Shutdown(SocketShutdown.Both);
            }
            finally
            {
                curClient.Close();
            }
        }

        public void StartListening(int port)
        {
            var ipAddress = IPAddress.Any;
            var localEndpoint = new IPEndPoint(ipAddress, port);

            while (true)
            {
                try
                {
                    // use a one-off listener each time so that
                    // only one client can connect at a time, with no backlog
                    Socket listener = new Socket(ipAddress.AddressFamily, SocketType.Stream, ProtocolType.Tcp);
                    listener.Bind(localEndpoint);
                    listener.Listen(0);

                    curClient = listener.Accept();
                    Console.WriteLine("[Dispatcher] client connected");
                    //listener.shutdown TODO: test this
                    listener.Close();

                    while (curClient.Connected)
                    {
                        // Buffer for reading single bytes
                        var byteBuffer = new byte[1];

                        // Read token
                        if (curClient.Receive(byteBuffer) == 0) break;
                        var token = (MessageToken) byteBuffer[0];
                        Console.WriteLine("[Dispatcher] dbg in token     : " + token + " (" + byteBuffer[0].ToString("X2") + ")");

                        // Read varint length
                        // TODO: try to refactor this out to make it reusable & testable (VarintDecoder or something)
                        // TODO: or at least move the actual math parts somewhere else
                        uint dataLength = 0;
                        var curLengthByte = 0;

                        while (true)
                        {
                            // read next byte into varint
                            if (curClient.Receive(byteBuffer) == 0) break;
                            dataLength |= (uint) (byteBuffer[0] & 127) << 7 * curLengthByte++;

                            // break out if this is the last byte or if we're over the limit
                            if (byteBuffer[0] < 128 || curLengthByte >= MaxLengthBytes) break;
                        }

                        // If the client hit the limit, kick them and move onto the next client
                        if (curLengthByte >= MaxLengthBytes)
                        {
                            Kick();
                            Console.WriteLine($"[Dispatcher] kicked client: invalid msg size (cut off @ {dataLength})");
                            break;
                        }

                        Console.WriteLine("[Dispatcher] dbg in dataLength: " + dataLength);

                        // Read data
                        byte[] data = null;
                        if (dataLength > 0)
                        {
                            data = new byte[dataLength];
                            if (curClient.Receive(data) == 0) break;
                            Console.WriteLine("[Dispatcher] dbg in data      : " + Convert.ToHexString(data));
                        }

                        // Dispatch message
                        OnMessage?.Invoke(this, new BridgeMessage(token, data));
                    }
                }
                catch (Exception e)
                {
                    Console.WriteLine("[Dispatcher] client loop error: " + e);
                }
                
                Console.WriteLine("[Dispatcher] client disconnected");
            }
        }

        // TODO: move to some util class/project
        private static byte[] EncodeVarint(uint value)
        {
            var buffer = new byte[MaxLengthBytes];
            var byteCount = 0;

            while (value > 127)
            {
                buffer[byteCount++] = (byte) ((value & 0x7f) | 0x80);
                value >>= 7;
            }

            buffer[byteCount++] = (byte) value;

            var result = new byte[byteCount];
            Buffer.BlockCopy(buffer, 0, result, 0, byteCount);

            return result;
        }
    }
}