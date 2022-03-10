using System;
using UnrealExplorer.Core.Extensions;
using UnrealExplorer.Core.Memory;

namespace UnrealExplorer.Core.Reflection.Fields
{
    public class UInt8Field : ValueField<byte>
    {
        public UInt8Field() { }

        public UInt8Field(string name, int offset) : base(name, offset) { }

        public override int Size => sizeof(byte);

        public override bool GetValue(IMemoryReader reader, IntPtr obj, out byte value)
        {
            return reader.ReadUInt8(GetPointer(obj), out value);
        }

        public override bool SetValue(IMemoryWriter writer, IntPtr obj, byte value)
        {
            return writer.WriteMemory(GetPointer(obj), value);
        }
    }
}