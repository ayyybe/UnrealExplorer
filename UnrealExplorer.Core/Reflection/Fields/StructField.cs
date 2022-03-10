namespace UnrealExplorer.Core.Reflection.Fields
{
    public class StructField : Field
    {
        public StructField(Struct innerStruct) : this(null, 0, innerStruct) { }

        public StructField(string name, int offset, Struct innerStruct) : base(name, offset)
        {
            InnerStruct = innerStruct;
        }

        public Struct InnerStruct { get; }

        public override int Size => InnerStruct.Size;
    }
}