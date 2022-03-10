using System;

namespace UnrealExplorer.Core.Memory
{
    public interface IMemoryWriter
    {
        /// <summary>
        ///     Writes <paramref name="data" /> to the <paramref name="address" /> in memory.
        /// </summary>
        /// <param name="address">The address to write to.</param>
        /// <param name="data">The data to write.</param>
        /// <returns>True if the write succeeds, false if it fails.</returns>
        bool WriteMemory(IntPtr address, byte[] data);
    }
}