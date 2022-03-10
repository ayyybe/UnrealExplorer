using System;
using UnrealExplorer.Core.Extensions;
using UnrealExplorer.Core.Memory;

namespace UnrealExplorer.Core.Reflection.Fields
{
    public class DoubleField : ValueField<double>
    {
        public DoubleField() { }

        public DoubleField(string name, int offset) : base(name, offset) { }

        public override int Size => sizeof(double);

        public override bool GetValue(IMemoryReader reader, IntPtr obj, out double value)
        {
            return reader.ReadDouble(GetPointer(obj), out value);
        }

        public override bool SetValue(IMemoryWriter writer, IntPtr obj, double value)
        {
            return writer.WriteMemory(GetPointer(obj), value);
        }
    }
}