using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using Google.Protobuf;
using UnrealExplorer.AppServer.Bridge;
using UnrealExplorer.AppServer.Native;
using UnrealExplorer.Common.Protos.Errors;
using UnrealExplorer.Common.Protos.Processes;
using UnrealExplorer.Core.Memory;

namespace UnrealExplorer.AppServer.Services
{
    public class ProcessManager
    {
        public Dictionary<int, Process> OpenProcesses { get; } = new();

        public Process Open(int pid)
        {
            if (OpenProcesses.ContainsKey(pid))
            {
                throw new BridgeException(ErrorCode.ProcessAlreadyOpen);
            }
            
            var proc = Process.Open(pid);
            OpenProcesses.Add(pid, proc);
            return proc;
        }

        public void Close(int pid)
        {
            if (!OpenProcesses.ContainsKey(pid))
            {
                throw new BridgeException(ErrorCode.ProcessNotOpen);
            }

            var proc = OpenProcesses[pid];
            OpenProcesses.Remove(pid);
            proc.Dispose();
        }

        public static IEnumerable<ProcessInfo> GetProcesses()
        {
            var sysProcesses = System.Diagnostics.Process.GetProcesses();
            return sysProcesses
                .Select(TryConstructProcessInfo)
                .Where(info => info != null);
        }

        public static ProcessList GetProcessList()
        {
            var list = new ProcessList();
            list.Processes.Add(GetProcesses());
            return list;
        }

        public static IEnumerable<AppInfo> GetApps()
        {
            var sysProcesses = System.Diagnostics.Process.GetProcesses();
            return sysProcesses
                .Select(TryConstructAppInfo)
                .Where(info => info != null);
        }

        public static AppList GetAppList()
        {
            var list = new AppList();
            list.Apps.Add(GetApps());
            return list;
        }

        private static AppInfo TryConstructAppInfo(System.Diagnostics.Process sp)
        {
            var procInfo = TryConstructProcessInfo(sp);
            if (procInfo is null || string.IsNullOrEmpty(sp.MainWindowTitle)) return null;

            var info = new AppInfo
            {
                AppName = sp.MainWindowTitle,
                Process = procInfo
            };

            return info;
        }

        private static ProcessInfo TryConstructProcessInfo(System.Diagnostics.Process sp)
        {
            try
            {
                string path = sp.MainModule?.FileName;
                var info = new ProcessInfo
                {
                    ExecutablePath = path,
                    IconPng = ByteString.CopyFrom(IProcessUtils.Instance.GetFileIconPng(path)),
                    Name = sp.ProcessName,
                    ProcessArch = IProcessUtils.Instance.GetProcessArchitecture(sp.Handle),
                    ProcessId = (uint) sp.Id
                };

                return info;
            }
            catch (Win32Exception)
            {
                return null;
            }
        }
    }
}