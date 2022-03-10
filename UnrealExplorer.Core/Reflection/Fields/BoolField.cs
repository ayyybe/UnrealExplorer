using System;
using UnrealExplorer.Core.Extensions;
using UnrealExplorer.Core.Memory;

namespace UnrealExplorer.Core.Reflection.Fields
{
    public class BoolField : ValueField<bool>
    {
        public BoolField() { }

        public BoolField(string name, int offset) : base(name, offset) { }

        public override int Size => sizeof(bool);

        public override bool GetValue(IMemoryReader reader, IntPtr obj, out bool value)
        {
            return reader.ReadBool(GetPointer(obj), out value);
        }

        public override bool SetValue(IMemoryWriter writer, IntPtr obj, bool value)
        {
            return writer.WriteMemory(GetPointer(obj), value);
        }
    }
}