using System;
using System.Text.Json.Serialization;
using UnrealExplorer.Core.Reflection.Json;

namespace UnrealExplorer.Core.Reflection.Fields
{
    // TODO [JsonConverter((typeof(FieldJsonConverter)))]
    public abstract class Field
    {
        protected Field() { }

        protected Field(string name, int offset)
        {
            Name = name;
            Offset = offset;
        }

        public string Name { get; }

        public int Offset { get; private set; }

        public abstract int Size { get; }

        public IntPtr GetPointer(IntPtr obj)
        {
            return obj + Offset;
        }

        public Field Clone()
        {
            return (Field)MemberwiseClone();
        }

        public Field GetOffsetField(int offset)
        {
            var offsetField = Clone();
            offsetField.Offset += offset;
            return offsetField;
        }
    }
}