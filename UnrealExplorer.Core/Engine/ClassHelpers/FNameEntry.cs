using System;
using System.Text;
using UnrealExplorer.Core.Extensions;
using UnrealExplorer.Core.Memory;
using UnrealExplorer.Core.Reflection;
using UnrealExplorer.Core.Reflection.Fields;

namespace UnrealExplorer.Core.Engine.ClassHelpers
{
    public class FNameEntry : HelperBase
    {
        public FNameEntry(Struct internalStruct, IMemoryReader reader, IntPtr obj) : base(internalStruct, reader, obj) { }
        
        private const int NameSize = 1024;

        public ushort Header => InternalStruct.Get<UInt16Field>("Header").GetValue(Reader, Obj);

        public bool IsWide => (Header & 1) == 1;

        public ushort LowercaseProbeHash => (ushort) (Header >> 1 & ((1 << 5) - 1));

        public ushort Len => (ushort) (Header >> 6);
        
        public IntPtr NamePtr => InternalStruct.Get<ArrayField>("Name").GetPointer(Obj);
        public string AnsiName => Reader.ReadString(NamePtr, Encoding.Default, Len);
        public string WideName => Reader.ReadString(NamePtr, Encoding.Unicode, Len * 2);
    }
}