using System;
using UnrealExplorer.Core.Extensions;
using UnrealExplorer.Core.Memory;

namespace UnrealExplorer.Core.Reflection.Fields
{
    public class Int64Field : ValueField<long>
    {
        public Int64Field() { }

        public Int64Field(string name, int offset) : base(name, offset) { }

        public override int Size => sizeof(long);

        public override bool GetValue(IMemoryReader reader, IntPtr obj, out long value)
        {
            return reader.ReadInt64(GetPointer(obj), out value);
        }

        public override bool SetValue(IMemoryWriter writer, IntPtr obj, long value)
        {
            return writer.WriteMemory(GetPointer(obj), value);
        }
    }
}