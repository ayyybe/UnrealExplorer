using System;
using UnrealExplorer.Core.Memory;
using UnrealExplorer.Core.Reflection;
using UnrealExplorer.Core.Reflection.Fields;

namespace UnrealExplorer.Core.Engine.ClassHelpers
{
    public class TTextData : HelperBase
    {
        public TTextData(Struct internalStruct, IMemoryReader reader, IntPtr obj) : base(internalStruct, reader, obj) { }
        
        public IntPtr VfTable => InternalStruct.Get<PointerField>("VfTable").GetValue(Reader, Obj);
        
        public IntPtr LocalizedStringPtr => InternalStruct.Get<PointerField>("LocalizedString").GetValue(Reader, Obj);
        public FString LocalizedString => new(ResolveStruct("FString"), Reader, LocalizedStringPtr);
    }
}