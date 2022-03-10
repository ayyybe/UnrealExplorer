using System;

namespace UnrealExplorer.Core.Memory
{
    public interface IMemoryReader
    {
        /// <summary>
        ///     Reads <paramref name="size" /> bytes from the <paramref name="address" /> in memory.
        /// </summary>
        /// <param name="address">The address to read from.</param>
        /// <param name="size">The number of bytes to read.</param>
        /// <returns>A byte array containing the read data. If the read fails, it will be filled with zeros.</returns>
        byte[] ReadMemory(IntPtr address, int size);

        /// <summary>
        ///     Reads <paramref name="size" /> bytes from the <paramref name="address" /> in memory.
        /// </summary>
        /// <param name="address">The address to read from.</param>
        /// <param name="size">The number of bytes to read.</param>
        /// <param name="buffer">The output buffer containing the read data. If the read fails, it will be filled with zeros.</param>
        /// <returns>True if the read succeeds, false if it fails.</returns>
        bool ReadMemory(IntPtr address, int size, out byte[] buffer);

        /// <summary>
        ///     Reads memory from the <paramref name="address" /> into the <paramref name="buffer" />.
        /// </summary>
        /// <param name="address">The address to read from.</param>
        /// <param name="buffer">The output buffer to write to. If the read fails, it will be filled with zeros.</param>
        /// <returns>True if the read succeeds, false if it fails.</returns>
        bool ReadMemoryIntoBuffer(IntPtr address, ref byte[] buffer);

        /// <summary>
        ///     Reads memory from the <paramref name="address" /> into the <paramref name="buffer" />.
        /// </summary>
        /// <param name="address">The address to read from.</param>
        /// <param name="buffer">The output buffer to write to. If the read fails, it will be filled with zeros.</param>
        /// <param name="offset">The start offset to write at.</param>
        /// <param name="length">The number of bytes to read.</param>
        /// <returns>True if the read succeeds, false if it fails.</returns>
        bool ReadMemoryIntoBuffer(IntPtr address, ref byte[] buffer, int offset, int length);
    }
}