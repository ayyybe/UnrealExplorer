using System;
using UnrealExplorer.Core.Extensions;
using UnrealExplorer.Core.Memory;

namespace UnrealExplorer.Core.Reflection.Fields
{
    public class UInt32Field : ValueField<uint>
    {
        public UInt32Field() { }

        public UInt32Field(string name, int offset) : base(name, offset) { }

        public override int Size => sizeof(uint);

        public override bool GetValue(IMemoryReader reader, IntPtr obj, out uint value)
        {
            return reader.ReadUInt32(GetPointer(obj), out value);
        }

        public override bool SetValue(IMemoryWriter writer, IntPtr obj, uint value)
        {
            return writer.WriteMemory(GetPointer(obj), value);
        }
    }
}