using System;
using UnrealExplorer.Core.Memory;
using UnrealExplorer.Core.Reflection;
using UnrealExplorer.Core.Reflection.Fields;

namespace UnrealExplorer.Core.Engine.ClassHelpers
{
    public class FFieldClass : HelperBase
    {
        public FFieldClass(Struct internalStruct, IMemoryReader reader, IntPtr obj) : base(internalStruct, reader, obj) { }
        
        public FName Name
        {
            get
            {
                var field = InternalStruct.Get<StructField>("Name");
                return new FName(field.InnerStruct, Reader, field.GetPointer(Obj));
            }
        }
        
        public ulong Id => InternalStruct.Get<UInt64Field>("Id").GetValue(Reader, Obj);
        
        public ulong CastFlags => InternalStruct.Get<UInt64Field>("CastFlags").GetValue(Reader, Obj);
        
        public int ClassFlags => InternalStruct.Get<Int32Field>("ClassFlags").GetValue(Reader, Obj);
        
        public IntPtr SuperClassPtr => InternalStruct.Get<PointerField>("SuperClass").GetValue(Reader, Obj);
        public FFieldClass SuperClass => new(InternalStruct, Reader, SuperClassPtr);
        
        public IntPtr DefaultObjectPtr => InternalStruct.Get<PointerField>("DefaultObject").GetValue(Reader, Obj);
        public FField DefaultObject => new(ResolveStruct("FField"), Reader, DefaultObjectPtr);
        
        public IntPtr ConstructFnPtr => InternalStruct.Get<PointerField>("ConstructFn").GetValue(Reader, Obj);
        
        public int UniqueNameIndexCounter => InternalStruct.Get<Int32Field>("UniqueNameIndexCounter").GetValue(Reader, Obj);
    }
}