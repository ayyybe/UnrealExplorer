using System;
using UnrealExplorer.Core.Extensions;
using UnrealExplorer.Core.Memory;

namespace UnrealExplorer.Core.Reflection.Fields
{
    public class Int32Field : ValueField<int>
    {
        public Int32Field() { }

        public Int32Field(string name, int offset) : base(name, offset) { }

        public override int Size => sizeof(int);

        public override bool GetValue(IMemoryReader reader, IntPtr obj, out int value)
        {
            return reader.ReadInt32(GetPointer(obj), out value);
        }

        public override bool SetValue(IMemoryWriter writer, IntPtr obj, int value)
        {
            return writer.WriteMemory(GetPointer(obj), value);
        }
    }
}