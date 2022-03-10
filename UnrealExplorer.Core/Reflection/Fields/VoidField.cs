using System;
using UnrealExplorer.Core.Extensions;
using UnrealExplorer.Core.Memory;

namespace UnrealExplorer.Core.Reflection.Fields
{
    public class VoidField : Field
    {
        public VoidField() { }

        public VoidField(string name, int offset) : base(name, offset) { }

        public override int Size => 0;
    }
}