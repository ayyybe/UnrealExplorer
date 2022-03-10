using System;
using UnrealExplorer.Core.Extensions;
using UnrealExplorer.Core.Memory;

namespace UnrealExplorer.Core.Reflection.Fields
{
    public class FloatField : ValueField<float>
    {
        public FloatField() { }

        public FloatField(string name, int offset) : base(name, offset) { }

        public override int Size => sizeof(float);

        public override bool GetValue(IMemoryReader reader, IntPtr obj, out float value)
        {
            return reader.ReadFloat(GetPointer(obj), out value);
        }

        public override bool SetValue(IMemoryWriter writer, IntPtr obj, float value)
        {
            return writer.WriteMemory(GetPointer(obj), value);
        }
    }
}