using System;

namespace UnrealExplorer.Core.Memory
{
    public class MemoryBuffer : IMemoryReaderWriter
    {
        private byte[] bufferData;

        public MemoryBuffer(int size)
        {
            if (size < 0) throw new ArgumentOutOfRangeException(nameof(size));

            bufferData = new byte[size];
        }

        public MemoryBuffer(byte[] data)
        {
            bufferData = data ?? throw new ArgumentNullException(nameof(data));
        }

        public MemoryBuffer(IMemoryReader reader, IntPtr address, int length)
        {
            if (reader == null) throw new ArgumentNullException(nameof(reader));
            if (length < 0) throw new ArgumentOutOfRangeException(nameof(length));

            bufferData = new byte[length];
            UpdateFrom(reader, address);
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

            if (address.ToInt64() + length > bufferData.Length)
            {
                Array.Clear(buffer, offset, buffer.Length);
                return false;
            }

            Array.Copy(bufferData, 0, buffer, offset, length);
            return true;
        }

        public bool WriteMemory(IntPtr address, byte[] data)
        {
            if (data == null) throw new ArgumentNullException(nameof(data));

            if (address.ToInt64() + data.Length > bufferData.Length) return false;

            Array.Copy(data, bufferData, data.Length);
            return true;
        }

        public bool UpdateFrom(IMemoryReader reader, IntPtr address)
        {
            if (reader == null) throw new ArgumentNullException(nameof(reader));

            return reader.ReadMemoryIntoBuffer(address, ref bufferData);
        }
    }
}