using System;
using System.Text;
using UnrealExplorer.Core.Extensions;
using UnrealExplorer.Core.Memory;
using UnrealExplorer.Core.Reflection;
using UnrealExplorer.Core.Reflection.Fields;

namespace UnrealExplorer.Core.Engine.ClassHelpers
{
    public class FString : TArray
    {
        public FString(Struct internalStruct, IMemoryReader reader, IntPtr obj) : base(internalStruct, reader, obj) { }
        
        public override string ToString() => Reader.ReadString(DataPtr, Encoding.Unicode, Count * 2);
    }
}