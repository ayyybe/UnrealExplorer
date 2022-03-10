using System;
using UnrealExplorer.Core.Extensions;
using UnrealExplorer.Core.Memory;
using UnrealExplorer.Core.Reflection;
using UnrealExplorer.Core.Reflection.Fields;

namespace UnrealExplorer.Core.Engine.ClassHelpers
{
    public class FProperty : FField
    {
        public FProperty(Struct internalStruct, IMemoryReader reader, IntPtr obj) : base(internalStruct, reader, obj) { }
        
        public int ArrayDim => InternalStruct.Get<Int32Field>("ArrayDim").GetValue(Reader, Obj);
        
        public int ElementSize => InternalStruct.Get<Int32Field>("ElementSize").GetValue(Reader, Obj);
        
        public long PropertyFlags => InternalStruct.Get<Int64Field>("PropertyFlags").GetValue(Reader, Obj);
        
        public ushort RepIndex => InternalStruct.Get<UInt16Field>("RepIndex").GetValue(Reader, Obj);
        
        public byte BlueprintReplicationCondition => InternalStruct.Get<UInt8Field>("BlueprintReplicationCondition").GetValue(Reader, Obj);
        
        public int Offset => InternalStruct.Get<Int32Field>("Offset").GetValue(Reader, Obj);
        
        public FName RepNotifyFunc
        {
            get
            {
                var field = InternalStruct.Get<StructField>("RepNotifyFunc");
                return new FName(field.InnerStruct, Reader, field.GetPointer(Obj));
            }
        }
        
        public IntPtr PropertyLinkNextPtr => InternalStruct.Get<PointerField>("PropertyLinkNext").GetValue(Reader, Obj);
        public FProperty PropertyLinkNext => new(InternalStruct, Reader, PropertyLinkNextPtr);
        
        public IntPtr NextRefPtr => InternalStruct.Get<PointerField>("NextRef").GetValue(Reader, Obj);
        public FProperty NextRef => new(InternalStruct, Reader, NextRefPtr);
        
        public IntPtr DestructorLinkNextPtr => InternalStruct.Get<PointerField>("DestructorLinkNext").GetValue(Reader, Obj);
        public FProperty DestructorLinkNext => new(InternalStruct, Reader, DestructorLinkNextPtr);
        
        public IntPtr PostConstructLinkNextPtr => InternalStruct.Get<PointerField>("PostConstructLinkNext").GetValue(Reader, Obj);
        public FProperty PostConstructLinkNext => new(InternalStruct, Reader, PostConstructLinkNextPtr);

        public IntPtr GetPropertyValuePtr(IntPtr propBase)
        {
            return propBase + Offset;
        }

        public bool GetBoolValue(IntPtr propBase) => Reader.ReadBool(GetPropertyValuePtr(propBase));
        public sbyte GetInt8Value(IntPtr propBase) => Reader.ReadInt8(GetPropertyValuePtr(propBase));
        public byte GetUInt8Value(IntPtr propBase) => Reader.ReadUInt8(GetPropertyValuePtr(propBase));
        public short GetInt16Value(IntPtr propBase) => Reader.ReadInt16(GetPropertyValuePtr(propBase));
        public ushort GetUInt16Value(IntPtr propBase) => Reader.ReadUInt16(GetPropertyValuePtr(propBase));
        public int GetInt32Value(IntPtr propBase) => Reader.ReadInt32(GetPropertyValuePtr(propBase));
        public uint GetUInt32Value(IntPtr propBase) => Reader.ReadUInt32(GetPropertyValuePtr(propBase));
        public long GetInt64Value(IntPtr propBase) => Reader.ReadInt64(GetPropertyValuePtr(propBase));
        public ulong GetUInt64Value(IntPtr propBase) => Reader.ReadUInt64(GetPropertyValuePtr(propBase));
        public float GetFloatValue(IntPtr propBase) => Reader.ReadFloat(GetPropertyValuePtr(propBase));
        public double GetDoubleValue(IntPtr propBase) => Reader.ReadDouble(GetPropertyValuePtr(propBase));
        
        public IntPtr GetIntPtrValue(IntPtr propBase) => Reader.ReadIntPtr(GetPropertyValuePtr(propBase));

        public UObject GetUObjectValue(IntPtr propBase) =>
            new(ResolveStruct("UObject"), Reader, GetIntPtrValue(propBase));
        
        public FName GetFNameValue(IntPtr propBase) =>
            new(ResolveStruct("FName"), Reader, GetPropertyValuePtr(propBase));
        
        public FString GetFStringValue(IntPtr propBase) =>
            new(ResolveStruct("FString"), Reader, GetPropertyValuePtr(propBase));
        
        public FText GetFTextValue(IntPtr propBase) =>
            new(ResolveStruct("FText"), Reader, GetPropertyValuePtr(propBase));
        
        public TArray GetTArrayValue(IntPtr propBase) =>
            new(ResolveStruct("TArray"), Reader, GetPropertyValuePtr(propBase));
    }
}