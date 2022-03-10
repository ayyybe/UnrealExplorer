using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using UnrealExplorer.Core.Extensions;
using UnrealExplorer.Core.Memory;
using UnrealExplorer.Core.Reflection;
using UnrealExplorer.Core.Reflection.Fields;

namespace UnrealExplorer.Core.Engine.ClassHelpers
{
    public class UEnum : UField
    {
        public UEnum(Struct internalStruct, IMemoryReader reader, IntPtr obj) : base(internalStruct, reader, obj) { }
        
        public FString CppType
        {
            get
            {
                var field = InternalStruct.Get<StructField>("CppType");
                return new FString(field.InnerStruct, Reader, field.GetPointer(Obj));
            }
        }
        
        public TArray Names
        {
            get
            {
                var field = InternalStruct.Get<StructField>("Names");
                return new TArray(field.InnerStruct, Reader, field.GetPointer(Obj));
            }
        }

        private KeyValuePair<FName, Lazy<long>> CreateEntryPair(IntPtr data, Struct structFName, int entrySize, int i)
        {
            int offset = entrySize * i;

            FName name = new(structFName, Reader, data + offset);
            Lazy<long> value = new(() => Reader.ReadInt64(data + offset + structFName.Size));
                
            return new KeyValuePair<FName, Lazy<long>>(name, value);
        }

        public KeyValuePair<FName, Lazy<long>> GetEntry(int i)
        {
            TArray names = Names;
            IntPtr data = names.DataPtr;

            Struct structFName = ResolveStruct("FName");
            int entrySize = structFName.Size + Marshal.SizeOf<long>();

            return CreateEntryPair(data, structFName, entrySize, i);
        }

        public IList<KeyValuePair<FName, Lazy<long>>> GetEntries()
        {
            TArray names = Names;
            IntPtr data = names.DataPtr;

            Struct structFName = ResolveStruct("FName");
            int entrySize = structFName.Size + Marshal.SizeOf<long>();
            
            var entries = new List<KeyValuePair<FName, Lazy<long>>>();
            
            for (int i = 0; i < names.Count; i++)
            {
                entries.Add(CreateEntryPair(data, structFName, entrySize, i));
            }

            return entries;
        }

        public FName GetNameFromValue(long value)
        {
            return GetEntries().FirstOrDefault(entry => entry.Value.Value == value).Key;
        }

        public long GetValueFromName(FName name)
        {
            return GetEntries().FirstOrDefault(entry => entry.Key == name).Value.Value;
        }

        public long GetValueFromName(string name)
        {
            return GetEntries().FirstOrDefault(entry => entry.Key.ToString() == name).Value.Value;
        }
    }
}