using System;

namespace UnrealExplorer.AppServer.Bridge
{
    public interface IBridgeDispatcher
    {
        public event EventHandler<BridgeMessage> OnMessage;

        public void Send(MessageToken token, byte[] data);
        public void Kick();
    }
}