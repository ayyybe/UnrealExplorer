using System;
using System.ComponentModel.Design;
using UnrealExplorer.Core.Memory;
using UnrealExplorer.Core.Reflection;
using UnrealExplorer.Core.Reflection.Fields;

namespace UnrealExplorer.Core.Engine.ClassHelpers
{
    public class FNameEntryAllocator : HelperBase
    {
        public FNameEntryAllocator(Struct internalStruct, IMemoryReader reader, IntPtr obj) : base(internalStruct, reader, obj) { }
        
        private const int Stride = 0x02; // TODO: WITH_CASE_PRESERVING_NAME support (0x04)
        
        public int CurrentBlock => InternalStruct.Get<Int32Field>("CurrentBlock").GetValue(Reader, Obj);
        
        public int CurrentByteCursor => InternalStruct.Get<Int32Field>("CurrentByteCursor").GetValue(Reader, Obj);

        private ArrayField BlocksField => InternalStruct.Get<ArrayField>("Blocks");
        private PointerField BlocksInnerField => (PointerField)BlocksField.InnerField;

        public int NumBlocks()
        {
            return CurrentBlock + 1;
        }

        private FNameEntry GetByBlockAndOffset(int block, ushort offset)
        {
            IntPtr entryPtr = BlocksInnerField.GetValue(Reader, BlocksField.GetPointerAt(Obj, block)) + offset * Stride;
            return new FNameEntry(ResolveStruct("FNameEntry"), Reader, entryPtr);
        }
        
        public FNameEntry GetById(int key)
        {
            int block = key >> 16;
            ushort offset = (ushort)key;
            
            if (!IsValidIndex(key, block, offset))
            {
                return GetByBlockAndOffset(0, 0); // "None"
            }

            return GetByBlockAndOffset(block, offset);
        }

        public bool IsValidIndex(int key)
        {
            int block = key >> 16;
            ushort offset = (ushort)key;
            return IsValidIndex(key, block, offset);
        }

        private bool IsValidIndex(int key, int block, ushort offset)
        {
            return key >= 0 &&
                   block < NumBlocks() &&
                   offset * Stride < 0x1FFFE;
        }
    }
}