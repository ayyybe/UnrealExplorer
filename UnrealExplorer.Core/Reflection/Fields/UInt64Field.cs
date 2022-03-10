using System;
using UnrealExplorer.Core.Extensions;
using UnrealExplorer.Core.Memory;

namespace UnrealExplorer.Core.Reflection.Fields
{
    public class UInt64Field : ValueField<ulong>
    {
        public UInt64Field() { }

        public UInt64Field(string name, int offset) : base(name, offset) { }

        public override int Size => sizeof(ulong);

        public override bool GetValue(IMemoryReader reader, IntPtr obj, out ulong value)
        {
            return reader.ReadUInt64(GetPointer(obj), out value);
        }

        public override bool SetValue(IMemoryWriter writer, IntPtr obj, ulong value)
        {
            return writer.WriteMemory(GetPointer(obj), value);
        }
    }
}