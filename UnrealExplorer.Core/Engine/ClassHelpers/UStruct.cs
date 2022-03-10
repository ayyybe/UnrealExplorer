using System;
using UnrealExplorer.Core.Memory;
using UnrealExplorer.Core.Reflection;
using UnrealExplorer.Core.Reflection.Fields;

namespace UnrealExplorer.Core.Engine.ClassHelpers
{
    public class UStruct : UField
    {
        public UStruct(Struct internalStruct, IMemoryReader reader, IntPtr obj) : base(internalStruct, reader, obj) { }

        public IntPtr SuperStructPtr => InternalStruct.Get<PointerField>("SuperStruct").GetValue(Reader, Obj);
        public UStruct SuperStruct => new(InternalStruct, Reader, SuperStructPtr);
        
        public IntPtr ChildrenPtr => InternalStruct.Get<PointerField>("Children").GetValue(Reader, Obj);
        public UField Children => new(ResolveStruct("UField"), Reader, ChildrenPtr);
        
        public IntPtr ChildPropertiesPtr => InternalStruct.Get<PointerField>("ChildProperties").GetValue(Reader, Obj);
        public FField ChildProperties => new(ResolveStruct("FField"), Reader, ChildPropertiesPtr);
        
        public int PropertiesSize => InternalStruct.Get<Int32Field>("PropertiesSize").GetValue(Reader, Obj);
        
        public int MinAlignment => InternalStruct.Get<Int32Field>("MinAlignment").GetValue(Reader, Obj);

        public TArray Script
        {
            get
            {
                var field = InternalStruct.Get<StructField>("Script");
                return new TArray(field.InnerStruct, Reader, field.GetPointer(Obj));
            }
        }
        
        public IntPtr PropertyLinkPtr => InternalStruct.Get<PointerField>("PropertyLink").GetValue(Reader, Obj);
        public FProperty PropertyLink => new(ResolveStruct("FProperty"), Reader, PropertyLinkPtr);
        
        public IntPtr RefLinkPtr => InternalStruct.Get<PointerField>("RefLink").GetValue(Reader, Obj);
        public FProperty RefLink => new(ResolveStruct("FProperty"), Reader, RefLinkPtr);
        
        public IntPtr DestructorLinkPtr => InternalStruct.Get<PointerField>("DestructorLink").GetValue(Reader, Obj);
        public FProperty DestructorLink => new(ResolveStruct("FProperty"), Reader, DestructorLinkPtr);
        
        public IntPtr PostConstructLinkPtr => InternalStruct.Get<PointerField>("PostConstructLink").GetValue(Reader, Obj);
        public FProperty PostConstructLink => new(ResolveStruct("FProperty"), Reader, PostConstructLinkPtr);
        
        public TArray ScriptAndPropertyObjectReferences
        {
            get
            {
                var field = InternalStruct.Get<StructField>("ScriptAndPropertyObjectReferences");
                return new TArray(field.InnerStruct, Reader, field.GetPointer(Obj));
            }
        }
        
        public IntPtr UnresolvedScriptPropertiesPtr => InternalStruct.Get<PointerField>("UnresolvedScriptProperties").GetValue(Reader, Obj);
        
        public IntPtr UnversionedSchemaPtr => InternalStruct.Get<PointerField>("UnversionedSchema").GetValue(Reader, Obj);
    }
}