using Google.Protobuf;
using UnrealExplorer.AppServer.Bridge;

namespace UnrealExplorer.AppServer.Extensions
{
    public static class BridgeDispatcherExtensions
    {
        public static void Send(this IBridgeDispatcher @this, BridgeMessage msg) => @this.Send(msg.Token, msg.Data);

        public static void Send<T>(this IBridgeDispatcher @this, MessageToken token, IMessage<T> dataMessage) where T : IMessage<T> =>
            @this.Send(token, dataMessage.ToByteArray());
    }
}