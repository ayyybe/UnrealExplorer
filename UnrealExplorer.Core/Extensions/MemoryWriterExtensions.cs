using System;
using System.Text;
using UnrealExplorer.Core.Memory;

namespace UnrealExplorer.Core.Extensions
{
    public static class MemoryWriterExtensions
    {
        public static bool WriteMemory(this IMemoryWriter writer, IntPtr address, bool value)
        {
            return writer.WriteMemory(address, BitConverter.GetBytes(value));
        }

        public static bool WriteMemory(this IMemoryWriter writer, IntPtr address, sbyte value)
        {
            return writer.WriteMemory(address, new[] {(byte) value});
        }

        public static bool WriteMemory(this IMemoryWriter writer, IntPtr address, byte value)
        {
            return writer.WriteMemory(address, new[] {value});
        }

        public static bool WriteMemory(this IMemoryWriter writer, IntPtr address, short value)
        {
            return writer.WriteMemory(address, BitConverter.GetBytes(value));
        }

        public static bool WriteMemory(this IMemoryWriter writer, IntPtr address, ushort value)
        {
            return writer.WriteMemory(address, BitConverter.GetBytes(value));
        }

        public static bool WriteMemory(this IMemoryWriter writer, IntPtr address, int value)
        {
            return writer.WriteMemory(address, BitConverter.GetBytes(value));
        }

        public static bool WriteMemory(this IMemoryWriter writer, IntPtr address, uint value)
        {
            return writer.WriteMemory(address, BitConverter.GetBytes(value));
        }

        public static bool WriteMemory(this IMemoryWriter writer, IntPtr address, long value)
        {
            return writer.WriteMemory(address, BitConverter.GetBytes(value));
        }

        public static bool WriteMemory(this IMemoryWriter writer, IntPtr address, ulong value)
        {
            return writer.WriteMemory(address, BitConverter.GetBytes(value));
        }

        public static bool WriteMemory(this IMemoryWriter writer, IntPtr address, float value)
        {
            return writer.WriteMemory(address, BitConverter.GetBytes(value));
        }

        public static bool WriteMemory(this IMemoryWriter writer, IntPtr address, double value)
        {
            return writer.WriteMemory(address, BitConverter.GetBytes(value));
        }

        // TODO: 32 bit support
        public static bool WriteMemory(this IMemoryWriter writer, IntPtr address, IntPtr value)
        {
            return writer.WriteMemory(address, BitConverter.GetBytes(value.ToInt64()));
        }

        public static bool WriteMemory(this IMemoryWriter writer, IntPtr address, string value, Encoding encoding)
        {
            return writer.WriteMemory(address, encoding.GetBytes(value));
        }
    }
}