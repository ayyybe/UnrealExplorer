using System;

namespace UnrealExplorer.AppServer.Bridge
{
    public class BridgeMessage : EventArgs
    {
        public MessageToken Token { get; }
        public byte[] Data { get; }

        public BridgeMessage(MessageToken token, byte[] data)
        {
            Token = token;
            Data = data;
        }
    }
}