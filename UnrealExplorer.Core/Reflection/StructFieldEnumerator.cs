using System;
using System.Collections;
using System.Collections.Generic;
using System.Diagnostics;
using UnrealExplorer.Core.Reflection.Fields;

namespace UnrealExplorer.Core.Reflection
{
    // TODO TODO TODO!!!: allow multiple Supers in Struct, and update this enumerator to support multiple Supers
    // Enumerates all fields in a struct, including those in its super struct.
    public class StructFieldEnumerator : IEnumerator<Field>
    {
        private readonly Struct @struct;
        private Struct curStruct;
        private IEnumerator<Field> curFieldEnumerator;

        public StructFieldEnumerator(Struct @struct)
        {
            this.@struct = @struct;
            Reset();
        }

        public Field Current => curFieldEnumerator.Current;

        object IEnumerator.Current => Current;

        public void Dispose()
        {
            GC.SuppressFinalize(this);
        }

        public bool MoveNext()
        {
            // Try to advance the current enumerator
            if (curFieldEnumerator.MoveNext()) return true;
            
            // If no super, stop enumerating
            if (curStruct.Super == null) return false;
            
            // Switch to next super
            curStruct = curStruct.Super;
            curFieldEnumerator = curStruct.Fields.Values.GetEnumerator();
            return curFieldEnumerator.MoveNext();
        }

        public void Reset()
        {
            curStruct = @struct;
            curFieldEnumerator = curStruct.Fields.Values.GetEnumerator();
        }
    }
}