using System;
using UnrealExplorer.Core.Memory;

namespace UnrealExplorer.Core.Reflection.Fields
{
    public abstract class ValueField<T> : Field where T : struct
    {
        protected ValueField() { }

        protected ValueField(string name, int offset) : base(name, offset) { }

        public abstract bool GetValue(IMemoryReader reader, IntPtr obj, out T value);
        public abstract bool SetValue(IMemoryWriter writer, IntPtr obj, T value);

        public T GetValue(IMemoryReader reader, IntPtr obj)
        {
            GetValue(reader, obj, out var value);
            return value;
        }

        public bool GetValue(IMemoryReader reader, out T value)
        {
            return GetValue(reader, IntPtr.Zero, out value);
        }

        public T GetValue(IMemoryReader reader)
        {
            return GetValue(reader, (IntPtr) 0);
        }

        public bool SetValue(IMemoryWriter writer, T value)
        {
            return SetValue(writer, IntPtr.Zero, value);
        }
        
        // TODO: remove these vvv ?

        public bool GetValueAt(IMemoryReader reader, IntPtr obj, int arrayIndex, out T value)
        {
            return GetValue(reader, obj + Size * arrayIndex, out value);
        }

        public bool GetValueAt(IMemoryReader reader, int arrayIndex, out T value)
        {
            return GetValueAt(reader, IntPtr.Zero, arrayIndex, out value);
        }

        public T GetValueAt(IMemoryReader reader, IntPtr obj, int arrayIndex)
        {
            return GetValue(reader, obj + Size * arrayIndex);
        }

        public T GetValueAt(IMemoryReader reader, int arrayIndex)
        {
            return GetValueAt(reader, IntPtr.Zero, arrayIndex);
        }

        public bool SetValueAt(IMemoryWriter writer, IntPtr obj, int arrayIndex, T value)
        {
            return SetValue(writer, obj + Size * arrayIndex, value);
        }

        public bool SetValueAt(IMemoryWriter writer, int arrayIndex, T value)
        {
            return SetValueAt(writer, IntPtr.Zero, arrayIndex, value);
        }
    }
}