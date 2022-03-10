using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Google.Protobuf;
using UnrealExplorer.AppServer.Bridge;
using UnrealExplorer.Common.Protos.Errors;
using UnrealExplorer.Common.Protos.Subscriptions;

namespace UnrealExplorer.AppServer.Services.Memory
{
    public class MemoryWatcher
    {
        public event EventHandler<MemoryUpdate> OnUpdate;
        public event EventHandler<BridgeException> OnUpdateError;
        
        private ProcessManager processManager;
        private Dictionary<uint, MemorySubscription> subscriptions;
        private CancellationTokenSource taskCts;
        private uint refCounter;

        public MemoryWatcher(ProcessManager processManager)
        {
            this.processManager = processManager;
            subscriptions = new Dictionary<uint, MemorySubscription>();
            taskCts = new CancellationTokenSource();
            refCounter = 0;
        }

        public uint Subscribe(MemorySubscribe subRequest)
        {
            return Subscribe((int)subRequest.ProcessId, new IntPtr(subRequest.StartAddress), (int)subRequest.ByteCount);
        }

        public uint Subscribe(int pid, IntPtr startAddress, int byteCount)
        {
            if (!processManager.OpenProcesses.ContainsKey(pid))
            {
                Console.Out.WriteLine("[MemoryWatcher] invalid process in sub request");
                throw new BridgeException(ErrorCode.ProcessNotOpen, "Requested process is not currently open");
            }
            
            uint @ref = nextRef();
            var subParams = new MemorySubscriptionParams(@ref, pid, startAddress, byteCount);
            var sub = new MemorySubscription(subParams);
            subscriptions.Add(@ref, sub);
            Console.Out.WriteLine("[MemoryWatcher] created new subscription: " + subParams);
            return @ref;
        }

        public void Unsubscribe(uint @ref)
        {
            if (!subscriptions.ContainsKey(@ref))
            {
                Console.Out.WriteLine("[MemoryWatcher] invalid ref in unsub request");
                throw new BridgeException(ErrorCode.RefNotFound, "The referenced subscription could not be found");
            }

            var subParams = subscriptions[@ref].Params;
            subscriptions.Remove(@ref);
            Console.Out.WriteLine("[MemoryWatcher] removed subscription: " + subParams);
        }

        public void UnsubscribeAll()
        {
            subscriptions.Clear();
            Console.Out.WriteLine("[MemoryWatcher] cleared all subscriptions");
        }

        public void Start()
        {
            Console.Out.WriteLine("[MemoryWatcher] starting...");
            var task = Task.Run(watchTask, taskCts.Token);
        }

        public void Stop()
        {
            Console.Out.WriteLine("[MemoryWatcher] stopping...");
            taskCts.Cancel();
        }

        private async Task watchTask()
        {
            Console.Out.WriteLine("[MemoryWatcher] entered watchTask");
            try
            {
                while (true)
                {
                    taskCts.Token.ThrowIfCancellationRequested();

                    foreach (var sub in subscriptions.Values)
                    {
                        taskCts.Token.ThrowIfCancellationRequested();

                        // TODO: (general) what happens to a Process/process handle when it's physically closed (as in, manually closing its window or terminating it)?
                        // if process is closed, throw error & forcefully cancel subscription
                        if (!processManager.OpenProcesses.ContainsKey(sub.Params.ProcessId))
                        {
                            await Console.Out.WriteLineAsync("[MemoryWatcher] subscribed process is no longer open");
                            OnUpdateError?.Invoke(this,
                                new BridgeException(ErrorCode.ProcessNotOpen, "Subscribed process is no longer open"));
                            subscriptions.Remove(sub.Params.Ref);
                            continue;
                        }

                        var proc = processManager.OpenProcesses[sub.Params.ProcessId];
                        byte[] newData = proc.ReadMemory(sub.Params.StartAddress, sub.Params.ByteCount);

                        if (sub.LastData is null || !newData.SequenceEqual(sub.LastData))
                        {
                            Console.Out.WriteLine("[MemoryWatcher] subscription update detected " + sub.Params);
                            sub.LastData = newData;

                            var update = new MemoryUpdate
                            {
                                SubscriptionRef = sub.Params.Ref,
                                NewData = ByteString.CopyFrom(newData)
                            };

                            OnUpdate?.Invoke(this, update);
                        }
                    }

                    // TODO: don't hardcode delay
                    await Task.Delay(200);
                }
            }
            catch (OperationCanceledException e)
            {
                await Console.Out.WriteLineAsync("[MemoryWatcher] watch loop task cancelled: " + e.Message);
            }
            catch (Exception e)
            {
                await Console.Out.WriteLineAsync("[MemoryWatcher] unhandled exception in watch loop: " + e);
            }
            finally
            {
                // no cleanup needed for now
            }
        }

        private uint nextRef()
        {
            return refCounter++;
        }
    }
}