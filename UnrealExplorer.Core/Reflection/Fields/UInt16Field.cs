using System;
using UnrealExplorer.Core.Extensions;
using UnrealExplorer.Core.Memory;

namespace UnrealExplorer.Core.Reflection.Fields
{
    public class UInt16Field : ValueField<ushort>
    {
        public UInt16Field() { }

        public UInt16Field(string name, int offset) : base(name, offset) { }

        public override int Size => sizeof(ushort);

        public override bool GetValue(IMemoryReader reader, IntPtr obj, out ushort value)
        {
            return reader.ReadUInt16(GetPointer(obj), out value);
        }

        public override bool SetValue(IMemoryWriter writer, IntPtr obj, ushort value)
        {
            return writer.WriteMemory(GetPointer(obj), value);
        }
    }
}