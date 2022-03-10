using System.Collections.Generic;

namespace UnrealExplorer.Core.Reflection
{
    public class ReflectionContext
    {
        public Dictionary<string, Struct> ReflectedStructs { get; } = new();

        public Struct ResolveStruct(string name)
        {
            return string.IsNullOrEmpty(name) ? null : ReflectedStructs.GetValueOrDefault(name);
        }

        public void Add(Struct @struct)
        {
            ReflectedStructs.Add(@struct.Name, @struct);
        }
    }
}