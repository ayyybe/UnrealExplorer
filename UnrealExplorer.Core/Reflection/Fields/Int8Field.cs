using System;
using UnrealExplorer.Core.Extensions;
using UnrealExplorer.Core.Memory;

namespace UnrealExplorer.Core.Reflection.Fields
{
    public class Int8Field : ValueField<sbyte>
    {
        public Int8Field() { }

        public Int8Field(string name, int offset) : base(name, offset) { }

        public override int Size => sizeof(sbyte);

        public override bool GetValue(IMemoryReader reader, IntPtr obj, out sbyte value)
        {
            return reader.ReadInt8(GetPointer(obj), out value);
        }

        public override bool SetValue(IMemoryWriter writer, IntPtr obj, sbyte value)
        {
            return writer.WriteMemory(GetPointer(obj), value);
        }
    }
}