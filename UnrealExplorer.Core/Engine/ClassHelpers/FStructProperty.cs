using System;
using UnrealExplorer.Core.Memory;
using UnrealExplorer.Core.Reflection;
using UnrealExplorer.Core.Reflection.Fields;

namespace UnrealExplorer.Core.Engine.ClassHelpers
{
    public class FStructProperty : FProperty
    {
        public FStructProperty(Struct internalStruct, IMemoryReader reader, IntPtr obj) : base(internalStruct, reader, obj) { }

        public IntPtr StructPtr => InternalStruct.Get<PointerField>("Struct").GetValue(Reader, Obj);
        public UStruct Struct => new(ResolveStruct("UStruct"), Reader, StructPtr);
    }
}