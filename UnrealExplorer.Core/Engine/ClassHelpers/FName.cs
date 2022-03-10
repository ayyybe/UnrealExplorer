using System;
using System.Reflection.Emit;
using UnrealExplorer.Core.Memory;
using UnrealExplorer.Core.Reflection;
using UnrealExplorer.Core.Reflection.Fields;

namespace UnrealExplorer.Core.Engine.ClassHelpers
{
    public class FName : HelperBase, IEquatable<FName>
    {
        public FName(Struct internalStruct, IMemoryReader reader, IntPtr obj) : base(internalStruct, reader, obj) { }
        
        public int Index => InternalStruct.Get<Int32Field>("Index").GetValue(Reader, Obj);

        public int Number => InternalStruct.Get<Int32Field>("Number").GetValue(Reader, Obj);

        public override string ToString()
        {
            if (InternalStruct.Context is EngineContext engine)
            {
                return engine.GNameEntryAllocator.GetById(Index).AnsiName;
            }
            
            return $"<FName Index={Index} Number={Number}>";
        }

        public bool Equals(FName other)
        {
            if (ReferenceEquals(null, other)) return false;
            if (ReferenceEquals(this, other)) return true;
            return Equals((HelperBase) other) || ToString().Equals(other.ToString());
        }

        public override bool Equals(object obj)
        {
            if (ReferenceEquals(null, obj)) return false;
            if (ReferenceEquals(this, obj)) return true;
            if (obj.GetType() != this.GetType()) return false;
            return Equals((FName) obj);
        }

        public override int GetHashCode()
        {
            throw new NotImplementedException();
        }

        public static bool operator ==(FName left, FName right)
        {
            return Equals(left, right);
        }

        public static bool operator !=(FName left, FName right)
        {
            return !Equals(left, right);
        }
    }
}