using System;
using UnrealExplorer.Core.Memory;
using UnrealExplorer.Core.Reflection;
using UnrealExplorer.Core.Reflection.Fields;

namespace UnrealExplorer.Core.Engine.ClassHelpers
{
    public class FFieldVariant : HelperBase
    {
        public FFieldVariant(Struct internalStruct, IMemoryReader reader, IntPtr obj) : base(internalStruct, reader, obj) { }
        
        public IntPtr ContainerPtr => InternalStruct.Get<PointerField>("Container").GetValue(Reader, Obj);
        public FField Field => new(ResolveStruct("FField"), Reader, ContainerPtr);
        public UObject Object => new(ResolveStruct("UObject"), Reader, ContainerPtr);
        
        public bool IsUObject => InternalStruct.Get<BoolField>("IsUObject").GetValue(Reader, Obj);
    }
}