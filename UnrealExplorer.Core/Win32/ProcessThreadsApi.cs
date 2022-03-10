using System;
using System.Diagnostics.CodeAnalysis;
using System.Runtime.InteropServices;
using Microsoft.Win32.SafeHandles;

namespace UnrealExplorer.Core.Win32
{
    // TODO: Abstract native implementations and add support for linux/mac
    [SuppressMessage("ReSharper", "InconsistentNaming")]
    internal static class ProcessThreadsApi
    {
        public const int PROCESS_VM_OPERATION = 0x0008;
        public const int PROCESS_VM_READ = 0x0010;
        public const int PROCESS_VM_WRITE = 0x0020;

        public const int PROCESS_VM_RW = PROCESS_VM_READ | PROCESS_VM_OPERATION | PROCESS_VM_WRITE;

        [DllImport("kernel32.dll")]
        public static extern IntPtr OpenProcess(int dwDesiredAccess, bool bInheritHandle, int dwProcessId);
        
        [DllImport("kernel32.dll")]
        public static extern int GetProcessId(SafeProcessHandle handle);
    }
}