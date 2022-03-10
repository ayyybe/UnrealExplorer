using System;
using System.Dynamic;
using System.Runtime.InteropServices;
using Microsoft.Win32.SafeHandles;
using UnrealExplorer.AppServer.Native.Windows;
using UnrealExplorer.Common.Protos.Processes;

namespace UnrealExplorer.AppServer.Native
{
    public interface IProcessUtils
    {
        public ProcessInfo.Types.CpuType GetProcessArchitecture(IntPtr handle);

        public byte[] GetFileIconPng(string path);

        // TODO: make a dedicated native class manager to avoid cluttering every native interface w/ instance stuff
        private static IProcessUtils _instance;
        public static IProcessUtils Instance
        {
            get
            {
                if (_instance != null)
                {
                    return _instance;
                }

                if (RuntimeInformation.IsOSPlatform(OSPlatform.Windows))
                {
                    _instance = new WindowsProcessUtils();
                    return _instance;
                }

                if (RuntimeInformation.IsOSPlatform(OSPlatform.Linux))
                {
                    // TODO
                }

                if (RuntimeInformation.IsOSPlatform(OSPlatform.OSX))
                {
                    // TODO
                }

                throw new PlatformNotSupportedException();
            }
        }
    }
}