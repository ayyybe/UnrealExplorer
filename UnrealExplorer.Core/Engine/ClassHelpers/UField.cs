using System;
using UnrealExplorer.Core.Memory;
using UnrealExplorer.Core.Reflection;
using UnrealExplorer.Core.Reflection.Fields;

namespace UnrealExplorer.Core.Engine.ClassHelpers
{
    public class UField : UObject
    {
        public UField(Struct internalStruct, IMemoryReader reader, IntPtr obj) : base(internalStruct, reader, obj) { }
        
        public IntPtr NextPtr => InternalStruct.Get<PointerField>("Next").GetValue(Reader, Obj);
        public UField Next => new(InternalStruct, Reader, NextPtr);
    }
}