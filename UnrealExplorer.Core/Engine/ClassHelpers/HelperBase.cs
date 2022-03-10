using System;
using UnrealExplorer.Core.Memory;
using UnrealExplorer.Core.Reflection;

namespace UnrealExplorer.Core.Engine.ClassHelpers
{
    public abstract class HelperBase : IEquatable<HelperBase>
    {
        protected Struct InternalStruct { get; }

        protected IMemoryReader Reader { get; }
        
        protected IntPtr Obj { get; }

        protected HelperBase(Struct internalStruct, IMemoryReader reader, IntPtr obj)
        {
            InternalStruct = internalStruct;
            Reader = reader;
            Obj = obj;
        }

        public Struct ResolveStruct(string name) => InternalStruct.Context.ResolveStruct(name);

        public IMemoryReader GetReader() => Reader;

        public IntPtr GetPointer() => Obj;

        public bool Equals(HelperBase other)
        {
            if (ReferenceEquals(null, other)) return false;
            if (ReferenceEquals(this, other)) return true;
            return Equals(Reader, other.Reader) && Equals(InternalStruct, other.InternalStruct) && Obj.Equals(other.Obj);
        }

        public override bool Equals(object obj)
        {
            if (ReferenceEquals(null, obj)) return false;
            if (ReferenceEquals(this, obj)) return true;
            if (obj.GetType() != this.GetType()) return false;
            return Equals((HelperBase) obj);
        }

        public override int GetHashCode()
        {
            return HashCode.Combine(Reader, InternalStruct, Obj);
        }

        public static bool operator ==(HelperBase left, HelperBase right)
        {
            return Equals(left, right);
        }

        public static bool operator !=(HelperBase left, HelperBase right)
        {
            return !Equals(left, right);
        }
    }
}