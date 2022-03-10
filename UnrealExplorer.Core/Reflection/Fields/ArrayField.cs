using System;

namespace UnrealExplorer.Core.Reflection.Fields
{
    public class ArrayField : Field, IFieldWrapper
    {
        public ArrayField(Field innerField, int count) : this(null, 0, innerField, count) { }

        public ArrayField(string name, int offset, Field innerField, int count) : base(name, offset)
        {
            InnerField = innerField;
            Count = count;
        }

        public int Count { get; }

        public override int Size => Count * InnerField.Size;

        public Field InnerField { get; }

        public IntPtr GetPointerAt(IntPtr obj, int index)
        {
            return GetPointer(obj) + index * InnerField.Size;
        }
    }
}