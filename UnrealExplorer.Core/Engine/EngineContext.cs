using System;
using UnrealExplorer.Core.Engine.ClassHelpers;
using UnrealExplorer.Core.Extensions;
using UnrealExplorer.Core.Memory;
using UnrealExplorer.Core.Reflection;

namespace UnrealExplorer.Core.Engine
{
    public class EngineContext : ReflectionContext
    {
        public IMemoryReader Reader { get; }
        
        public IntPtr GNames { get; }
        
        public IntPtr GObjects { get; }

        public FNameEntryAllocator GNameEntryAllocator =>
            new FNameEntryAllocator(ResolveStruct("FNameEntryAllocator"), Reader, GNames);

        public EngineContext(IMemoryReader reader, IntPtr gNames, IntPtr gObjects)
        {
            Reader = reader;
            GNames = gNames;
            GObjects = gObjects;
        }

        public static EngineContext WithOffsets(Process proc, int gNamesOffset, int gObjectsOffset)
        {
            IntPtr baseAddress = proc.GetBaseAddress();
            IntPtr gNames = baseAddress + gNamesOffset;
            IntPtr gObjects = baseAddress + gObjectsOffset;

            return new EngineContext(proc, gNames, gObjects);
        }
        
        
    }
}