using System;
using System.Net.Sockets;
using System.Threading.Tasks;
using UnrealExplorer.AppServer.Bridge;
using UnrealExplorer.AppServer.Services;
using UnrealExplorer.AppServer.Services.Memory;

namespace UnrealExplorer.AppServer
{
    // Internal backend server for UX.App
    internal static class Program
    {
        static void Main(string[] args)
        {
            var pm = new ProcessManager();
            var mw = new MemoryWatcher(pm);

            var pid = 0x33D0;
            var address = new IntPtr(0x1C803F07BC0);
            pm.Open(pid);

            uint @ref = mw.Subscribe(pid, address, 50);

            mw.OnUpdate += (sender, update) =>
            {
                Console.Out.WriteLine("update: " + update);
            };

            mw.OnUpdateError += (sender, exception) =>
            {
                Console.Out.WriteLine("update error: " + exception);
            };
            
            mw.Start();

            ///////////////////////////
            
            Console.WriteLine("Hello World!");

            var dispatcher = new TcpBridgeDispatcher();
            var bridge = new AppBridge(dispatcher);
            
            dispatcher.StartListening(1337);
        }
    }
}