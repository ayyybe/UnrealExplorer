using System;
using UnrealExplorer.Core.Memory;
using UnrealExplorer.Core.Reflection;
using UnrealExplorer.Core.Reflection.Fields;

namespace UnrealExplorer.Core.Engine.ClassHelpers
{
    public class FField : HelperBase
    {
        public FField(Struct internalStruct, IMemoryReader reader, IntPtr obj) : base(internalStruct, reader, obj) { }
        
        public IntPtr VfTable => InternalStruct.Get<PointerField>("VfTable").GetValue(Reader, Obj);
        
        public IntPtr ClassPtr => InternalStruct.Get<PointerField>("Class").GetValue(Reader, Obj);
        public FFieldClass Class => new(ResolveStruct("FFieldClass"), Reader, ClassPtr);

        public FFieldVariant Owner
        {
            get
            {
                var field = InternalStruct.Get<StructField>("Owner");
                return new FFieldVariant(field.InnerStruct, Reader, field.GetPointer(Obj));
            }
        }
        
        public IntPtr NextPtr => InternalStruct.Get<PointerField>("Next").GetValue(Reader, Obj);
        public FField Next => new(InternalStruct, Reader, NextPtr);

        public FName Name
        {
            get
            {
                var field = InternalStruct.Get<StructField>("Name");
                return new FName(field.InnerStruct, Reader, field.GetPointer(Obj));
            }
        }
        
        public int Flags => InternalStruct.Get<Int32Field>("Flags").GetValue(Reader, Obj);
    }
}