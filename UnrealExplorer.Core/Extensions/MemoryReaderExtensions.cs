using System;
using System.Text;
using UnrealExplorer.Core.Memory;

namespace UnrealExplorer.Core.Extensions
{
    public static class MemoryReaderExtensions
    {
        public static bool ReadBool(this IMemoryReader reader, IntPtr address, out bool value)
        {
            bool success = reader.ReadMemory(address, sizeof(bool), out byte[] data);
            value = BitConverter.ToBoolean(data, 0);
            return success;
        }

        public static bool ReadBool(this IMemoryReader reader, IntPtr address)
        {
            ReadBool(reader, address, out bool value);
            return value;
        }

        public static bool ReadInt8(this IMemoryReader reader, IntPtr address, out sbyte value)
        {
            bool success = reader.ReadMemory(address, sizeof(sbyte), out byte[] data);
            value = (sbyte) data[0];
            return success;
        }

        public static sbyte ReadInt8(this IMemoryReader reader, IntPtr address)
        {
            ReadInt8(reader, address, out sbyte value);
            return value;
        }

        public static bool ReadUInt8(this IMemoryReader reader, IntPtr address, out byte value)
        {
            bool success = reader.ReadMemory(address, sizeof(byte), out byte[] data);
            value = data[0];
            return success;
        }

        public static byte ReadUInt8(this IMemoryReader reader, IntPtr address)
        {
            ReadUInt8(reader, address, out byte value);
            return value;
        }

        public static bool ReadInt16(this IMemoryReader reader, IntPtr address, out short value)
        {
            bool success = reader.ReadMemory(address, sizeof(short), out byte[] data);
            value = BitConverter.ToInt16(data, 0);
            return success;
        }

        public static short ReadInt16(this IMemoryReader reader, IntPtr address)
        {
            ReadInt16(reader, address, out short value);
            return value;
        }

        public static bool ReadUInt16(this IMemoryReader reader, IntPtr address, out ushort value)
        {
            bool success = reader.ReadMemory(address, sizeof(ushort), out byte[] data);
            value = BitConverter.ToUInt16(data, 0);
            return success;
        }

        public static ushort ReadUInt16(this IMemoryReader reader, IntPtr address)
        {
            ReadUInt16(reader, address, out ushort value);
            return value;
        }

        public static bool ReadInt32(this IMemoryReader reader, IntPtr address, out int value)
        {
            bool success = reader.ReadMemory(address, sizeof(int), out byte[] data);
            value = BitConverter.ToInt32(data, 0);
            return success;
        }

        public static int ReadInt32(this IMemoryReader reader, IntPtr address)
        {
            ReadInt32(reader, address, out int value);
            return value;
        }

        public static bool ReadUInt32(this IMemoryReader reader, IntPtr address, out uint value)
        {
            bool success = reader.ReadMemory(address, sizeof(uint), out byte[] data);
            value = BitConverter.ToUInt32(data, 0);
            return success;
        }

        public static uint ReadUInt32(this IMemoryReader reader, IntPtr address)
        {
            ReadUInt32(reader, address, out uint value);
            return value;
        }

        public static bool ReadInt64(this IMemoryReader reader, IntPtr address, out long value)
        {
            bool success = reader.ReadMemory(address, sizeof(long), out byte[] data);
            value = BitConverter.ToInt64(data, 0);
            return success;
        }

        public static long ReadInt64(this IMemoryReader reader, IntPtr address)
        {
            ReadInt64(reader, address, out long value);
            return value;
        }

        public static bool ReadUInt64(this IMemoryReader reader, IntPtr address, out ulong value)
        {
            bool success = reader.ReadMemory(address, sizeof(ulong), out byte[] data);
            value = BitConverter.ToUInt64(data, 0);
            return success;
        }

        public static ulong ReadUInt64(this IMemoryReader reader, IntPtr address)
        {
            ReadUInt64(reader, address, out ulong value);
            return value;
        }

        public static bool ReadFloat(this IMemoryReader reader, IntPtr address, out float value)
        {
            bool success = reader.ReadMemory(address, sizeof(float), out byte[] data);
            value = BitConverter.ToSingle(data, 0);
            return success;
        }

        public static float ReadFloat(this IMemoryReader reader, IntPtr address)
        {
            ReadFloat(reader, address, out float value);
            return value;
        }

        public static bool ReadDouble(this IMemoryReader reader, IntPtr address, out double value)
        {
            bool success = reader.ReadMemory(address, sizeof(double), out byte[] data);
            value = BitConverter.ToDouble(data, 0);
            return success;
        }

        public static double ReadDouble(this IMemoryReader reader, IntPtr address)
        {
            ReadDouble(reader, address, out double value);
            return value;
        }

        public static bool ReadIntPtr(this IMemoryReader reader, IntPtr address, out IntPtr value)
        {
            // TODO: 32 bit support
            bool success = reader.ReadInt64(address, out long longValue);
            value = (IntPtr) longValue;
            return success;
        }

        public static IntPtr ReadIntPtr(this IMemoryReader reader, IntPtr address)
        {
            ReadIntPtr(reader, address, out var value);
            return value;
        }

        public static bool ReadString(this IMemoryReader reader, IntPtr address, Encoding encoding, int byteLength,
            bool nullTerminated, out string value)
        {
            if (encoding == null) throw new ArgumentNullException(nameof(encoding));
            if (byteLength < 0) throw new ArgumentOutOfRangeException(nameof(byteLength));

            bool success = reader.ReadMemory(address, byteLength, out byte[] data);

            // We don't catch any exceptions here to respect the fallback behavior defined in the encoding.
            value = encoding.GetString(data);

            if (!nullTerminated) return success;

            int nullIndex = value.IndexOf('\0');
            if (nullIndex > -1)
                // Chop string at the first null byte
                value = value.Remove(nullIndex);

            return success;
        }

        public static string ReadString(this IMemoryReader reader, IntPtr address, Encoding encoding, int byteLength,
            bool nullTerminated = true)
        {
            ReadString(reader, address, encoding, byteLength, nullTerminated, out string value);
            return value;
        }

        // TODO: version of ReadString accepting a charLength rather than byteLength, that reads & decodes byte-by-byte
        // ...probably wouldn't be particularly useful for now though
    }
}