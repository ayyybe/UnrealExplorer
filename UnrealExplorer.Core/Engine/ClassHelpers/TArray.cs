using System;
using UnrealExplorer.Core.Memory;
using UnrealExplorer.Core.Reflection;
using UnrealExplorer.Core.Reflection.Fields;

namespace UnrealExplorer.Core.Engine.ClassHelpers
{
    public class TArray : HelperBase
    {
        public TArray(Struct internalStruct, IMemoryReader reader, IntPtr obj) : base(internalStruct, reader, obj) { }

        public IntPtr DataPtr => InternalStruct.Get<PointerField>("Data").GetValue(Reader, Obj);

        public int Count => InternalStruct.Get<Int32Field>("Count").GetValue(Reader, Obj);

        public int Max => InternalStruct.Get<Int32Field>("Max").GetValue(Reader, Obj);
    }
}