using System;
using System.ComponentModel;
using System.Runtime.InteropServices;
using System.Text;
using Microsoft.Win32.SafeHandles;
using UnrealExplorer.Core.Win32;

namespace UnrealExplorer.Core.Memory
{
    public class Process : IDisposable, IMemoryReaderWriter
    {
        private readonly SafeProcessHandle handle;

        public Process(IntPtr handle, bool ownsHandle = false)
        {
            this.handle = new SafeProcessHandle(handle, ownsHandle);
        }

        public IntPtr GetBaseAddress()
        {
            int pid = ProcessThreadsApi.GetProcessId(handle);
            return System.Diagnostics.Process.GetProcessById(pid).MainModule?.BaseAddress ?? IntPtr.Zero;
        }

        public void Dispose()
        {
            handle.Dispose();
            GC.SuppressFinalize(this);
        }

        public byte[] ReadMemory(IntPtr address, int size)
        {
            if (size < 0) throw new ArgumentOutOfRangeException(nameof(size));

            ReadMemory(address, size, out byte[] data);
            return data;
        }

        public bool ReadMemory(IntPtr address, int size, out byte[] buffer)
        {
            if (size < 0) throw new ArgumentOutOfRangeException(nameof(size));

            buffer = new byte[size];
            return ReadMemoryIntoBuffer(address, ref buffer);
        }

        public bool ReadMemoryIntoBuffer(IntPtr address, ref byte[] buffer)
        {
            return ReadMemoryIntoBuffer(address, ref buffer, 0, buffer.Length);
        }

        public bool ReadMemoryIntoBuffer(IntPtr address, ref byte[] buffer, int offset, int length)
        {
            if (buffer == null) throw new ArgumentNullException(nameof(buffer));
            if (offset < 0) throw new ArgumentOutOfRangeException(nameof(offset));
            if (length < 0) throw new ArgumentOutOfRangeException(nameof(length));
            if (offset + length > buffer.Length)
                throw new ArgumentException("Offset and length are out of bounds for the given buffer.");

            var offsetBuffer = new ArrayWithOffset(buffer, offset);
            bool result = MemoryApi.ReadProcessMemory(handle, address, offsetBuffer, length, out _);

            // TODO: remove or add a proper logging system for debug stuff
            //Console.WriteLine("ReadProcessMemory result: " + result + " (" + bytesRead + " bytes read)");
            //Console.WriteLine("result buffer: " + BitConverter.ToString(buffer));

            if (!result) Array.Clear(buffer, offset, buffer.Length);

            return result;
        }

        public bool WriteMemory(IntPtr address, byte[] data)
        {
            if (data == null) throw new ArgumentNullException(nameof(data));
            bool result = MemoryApi.WriteProcessMemory(handle, address, data, data.Length, out _);

            // TODO: remove or add a proper logging system for debug stuff
            //Console.WriteLine("WriteProcessMemory result: " + result + " (" + bytesWritten + " bytes written)");

            return result;
        }

        public static Process Open(int id)
        {
            const int access = ProcessThreadsApi.PROCESS_VM_RW;
            var handle = ProcessThreadsApi.OpenProcess(access, false, id);
            if (handle == IntPtr.Zero)
            {
                throw new Win32Exception(Marshal.GetLastWin32Error());
            }
            return new Process(handle, true);
        }
    }
}