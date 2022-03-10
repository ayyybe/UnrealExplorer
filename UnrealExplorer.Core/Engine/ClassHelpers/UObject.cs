using System;
using System.Text;
using UnrealExplorer.Core.Memory;
using UnrealExplorer.Core.Reflection;
using UnrealExplorer.Core.Reflection.Fields;
using Process = System.Diagnostics.Process;

namespace UnrealExplorer.Core.Engine.ClassHelpers
{
    public class UObject : HelperBase
    {
        public UObject(Struct internalStruct, IMemoryReader reader, IntPtr obj) : base(internalStruct, reader, obj) { }

        public IntPtr VfTable => InternalStruct.Get<PointerField>("VfTable").GetValue(Reader, Obj);

        public int Flags =>  InternalStruct.Get<Int32Field>("Flags").GetValue(Reader, Obj);

        public int InternalIndex =>  InternalStruct.Get<Int32Field>("InternalIndex").GetValue(Reader, Obj);

        public IntPtr ClassPtr => InternalStruct.Get<PointerField>("Class").GetValue(Reader, Obj);
        public UClass Class => new(ResolveStruct("UClass"), Reader, ClassPtr);

        public FName Name
        {
            get
            {
                var field = InternalStruct.Get<StructField>("Name");
                return new FName(field.InnerStruct, Reader, field.GetPointer(Obj));
            }
        }
        
        public IntPtr OuterPtr => InternalStruct.Get<PointerField>("Outer").GetValue(Reader, Obj);
        public UObject Outer => new(ResolveStruct("UObject"), Reader, OuterPtr);

        public string GetFullName()
        {
            string outerChain = "";

            for (UObject cur = Outer; cur.Obj != IntPtr.Zero; cur = cur.Outer)
            {
                outerChain = cur.Name + "." + outerChain;
            }

            return Class.Name + " " + outerChain + Name;
        }
    }
}