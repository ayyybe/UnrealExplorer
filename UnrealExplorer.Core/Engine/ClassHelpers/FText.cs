using System;
using System.Text;
using UnrealExplorer.Core.Extensions;
using UnrealExplorer.Core.Memory;
using UnrealExplorer.Core.Reflection;
using UnrealExplorer.Core.Reflection.Fields;

namespace UnrealExplorer.Core.Engine.ClassHelpers
{
    public class FText : HelperBase
    {
        public FText(Struct internalStruct, IMemoryReader reader, IntPtr obj) : base(internalStruct, reader, obj) { }
        
        public IntPtr TextDataPtr => InternalStruct.Get<PointerField>("TextData").GetValue(Reader, Obj);
        public TTextData TextData => new(ResolveStruct("TTextData"), Reader, TextDataPtr);

        public override string ToString() => TextData.LocalizedString.ToString();
    }
}