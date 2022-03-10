using System;
using System.ComponentModel;
using System.Drawing;
using System.Drawing.Imaging;
using System.IO;
using System.Runtime.InteropServices;
using Microsoft.Win32.SafeHandles;
using UnrealExplorer.Common.Protos.Processes;

namespace UnrealExplorer.AppServer.Native.Windows
{
    [System.Runtime.Versioning.SupportedOSPlatformAttribute("windows")]
    public class WindowsProcessUtils : IProcessUtils
    {
        [DllImport("kernel32.dll", SetLastError = true, CallingConvention = CallingConvention.Winapi)]
        [return: MarshalAs(UnmanagedType.Bool)]
        private static extern bool IsWow64Process(
            [In] IntPtr processHandle,
            [Out, MarshalAs(UnmanagedType.Bool)] out bool wow64Process
        );
        
        public ProcessInfo.Types.CpuType GetProcessArchitecture(IntPtr handle)
        {
            if (IsWow64Process(handle, out bool is64))
            {
                return is64 ? ProcessInfo.Types.CpuType.X64 : ProcessInfo.Types.CpuType.X86;
            }

            throw new Win32Exception(Marshal.GetLastWin32Error(), "IsWow64Process failed");
        }

        public byte[] GetFileIconPng(string path)
        {
            try
            {
                var icon = Icon.ExtractAssociatedIcon(path);
                if (icon == null) return null;
                var bitmap = icon.ToBitmap();

                using var stream = new MemoryStream();
                bitmap.Save(stream, ImageFormat.Png);
                return stream.ToArray();
            }
            catch (Exception)
            {
                return null;
            }
        }
    }
}