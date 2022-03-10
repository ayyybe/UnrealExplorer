using System;
using UnrealExplorer.Core.Extensions;
using UnrealExplorer.Core.Memory;

namespace UnrealExplorer.Core.Reflection.Fields
{
    public class PointerField : ValueField<IntPtr>, IFieldWrapper
    {
        public PointerField(Field innerField) : this(null, 0, innerField) { }

        private readonly Lazy<Field> lazyInnerField;
        private readonly Field innerField;

        public PointerField(string name, int offset, Field innerField) : base(name, offset)
        {
            this.innerField = innerField;
        }

        public PointerField(string name, int offset, Lazy<Field> lazyInnerField) : base(name, offset)
        {
            this.lazyInnerField = lazyInnerField;
        }

        public override int Size => sizeof(long); // TODO: 32 bit support (IntPtr.Size)

        public Field InnerField => innerField ?? lazyInnerField.Value;

        public override bool GetValue(IMemoryReader reader, IntPtr obj, out IntPtr value)
        {
            return reader.ReadIntPtr(GetPointer(obj), out value);
        }

        public override bool SetValue(IMemoryWriter writer, IntPtr obj, IntPtr value)
        {
            return writer.WriteMemory(GetPointer(obj), value);
        }
    }
}