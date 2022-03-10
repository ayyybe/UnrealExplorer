using System;
using UnrealExplorer.Core.Extensions;
using UnrealExplorer.Core.Memory;

namespace UnrealExplorer.Core.Reflection.Fields
{
    public class Int16Field : ValueField<short>
    {
        public Int16Field() { }

        public Int16Field(string name, int offset) : base(name, offset) { }

        public override int Size => sizeof(short);

        public override bool GetValue(IMemoryReader reader, IntPtr obj, out short value)
        {
            return reader.ReadInt16(GetPointer(obj), out value);
        }

        public override bool SetValue(IMemoryWriter writer, IntPtr obj, short value)
        {
            return writer.WriteMemory(GetPointer(obj), value);
        }
    }
}