using System;
using UnrealExplorer.Core.Memory;
using UnrealExplorer.Core.Reflection;
using UnrealExplorer.Core.Reflection.Fields;

namespace UnrealExplorer.Core.Engine.ClassHelpers
{
    public class FEnumProperty : FProperty
    {
        public FEnumProperty(Struct internalStruct, IMemoryReader reader, IntPtr obj) : base(internalStruct, reader, obj) { }

        public IntPtr UnderlyingPropPtr => InternalStruct.Get<PointerField>("UnderlyingProp").GetValue(Reader, Obj);
        public FProperty UnderlyingProp => new(ResolveStruct("FProperty"), Reader, UnderlyingPropPtr);
        
        public IntPtr EnumPtr => InternalStruct.Get<PointerField>("Enum").GetValue(Reader, Obj);
        public UEnum Enum => new(ResolveStruct("UEnum"), Reader, EnumPtr);
    }
}