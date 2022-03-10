using System;
using System.Runtime.InteropServices;
using Microsoft.Win32.SafeHandles;

namespace UnrealExplorer.Core.Win32
{
    // TODO: Abstract native implementations and add support for linux/mac
    internal static class MemoryApi
    {
        [DllImport("kernel32.dll")]
        public static extern bool ReadProcessMemory(SafeProcessHandle hProcess, IntPtr lpBaseAddress, byte[] lpBuffer,
            int nSize, out int lpNumberOfBytesRead);

        // version of ReadProcessMemory that accepts an ArrayWithOffset
        [DllImport("kernel32.dll")]
        public static extern bool ReadProcessMemory(SafeProcessHandle hProcess, IntPtr lpBaseAddress,
            [In, Out] ArrayWithOffset lpBuffer, int nSize, out int lpNumberOfBytesRead);

        [DllImport("kernel32.dll")]
        public static extern bool WriteProcessMemory(SafeProcessHandle hProcess, IntPtr lpBaseAddress, byte[] lpBuffer,
            int nSize, out int lpNumberOfBytesWritten);
    }
}