using System;
using UnrealExplorer.Core.Memory;
using UnrealExplorer.Core.Reflection;
using UnrealExplorer.Core.Reflection.Fields;

namespace UnrealExplorer.Core.Engine.ClassHelpers
{
    public class FArrayProperty : FProperty
    {
        public FArrayProperty(Struct internalStruct, IMemoryReader reader, IntPtr obj) : base(internalStruct, reader, obj) { }

        public IntPtr InnerPtr => InternalStruct.Get<PointerField>("Inner").GetValue(Reader, Obj);
        public FProperty Inner => new(ResolveStruct("FProperty"), Reader, InnerPtr);
        
        public int ArrayFlags => InternalStruct.Get<Int32Field>("ArrayFlags").GetValue(Reader, Obj);
    }
}