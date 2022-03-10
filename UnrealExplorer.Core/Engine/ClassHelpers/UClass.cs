using System;
using UnrealExplorer.Core.Memory;
using UnrealExplorer.Core.Reflection;

namespace UnrealExplorer.Core.Engine.ClassHelpers
{
    public class UClass : UStruct
    {
        public UClass(Struct internalStruct, IMemoryReader reader, IntPtr obj) : base(internalStruct, reader, obj) { }
    }
}