using System;

namespace UnrealExplorer.AppServer.Services.Memory
{
    public readonly struct MemorySubscriptionParams
    {
        public uint Ref { get; }
        public int ProcessId { get; }
        public IntPtr StartAddress { get; }
        public int ByteCount { get; }
        
        public MemorySubscriptionParams(uint @ref, int processId, IntPtr startAddress, int byteCount)
        {
            Ref = @ref;
            ProcessId = processId;
            StartAddress = startAddress;
            ByteCount = byteCount;
        }

        public override string ToString()
        {
            return $"[ref {Ref}; pid {ProcessId} @ {StartAddress:X16} ({ByteCount} bytes)]";
        }
    }
}