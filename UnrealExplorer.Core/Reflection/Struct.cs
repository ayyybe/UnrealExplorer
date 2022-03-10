using System.Collections;
using System.Collections.Generic;
using System.Linq;
using UnrealExplorer.Core.Reflection.Fields;

namespace UnrealExplorer.Core.Reflection
{
    public class Struct : IEnumerable<Field>
    {
        public Struct(ReflectionContext context, string name = null, string superName = null)
        {
            Context = context;
            Name = name;
            SuperName = superName;
        }

        public Struct(string name = null, string superName = null) : this(null, name, superName) { }

        public ReflectionContext Context { get; }

        public string SuperName { get; }
        //public string[] SuperNames { get; }

        public Struct Super => Context?.ResolveStruct(SuperName);
        //public IEnumerable<Struct> Super => SuperNames.Select(superName => Context?.ResolveStruct(superName));

        public string Name { get; }

        // TODO: maybe turn this into a private field so that we can keep track of all changes and dont have to compute size every time its needed
        public Dictionary<string, Field> Fields { get; } = new();

        public int Size
        {
            get
            {
                if (Fields.Count == 0) return Super.Size;
                
                var lastField = Fields.Values.Aggregate((a, b) => a.Offset > b.Offset ? a : b);
                return lastField.Offset + lastField.Size;
            }
        }

        public Field this[string key] => Get(key);

        public IEnumerator<Field> GetEnumerator()
        {
            return new StructFieldEnumerator(this);
        }

        IEnumerator IEnumerable.GetEnumerator()
        {
            return GetEnumerator();
        }

        public void Add(Field field)
        {
            Fields.Add(field.Name, field);
        }

        public TField Get<TField>(string name) where TField : Field
        {
            return (TField)Get(name);
        }

        public Field Get(string name)
        {
            if (Fields.ContainsKey(name))
            {
                return Fields[name];
            }

            for (var cur = this; !string.IsNullOrEmpty(cur.SuperName); cur = cur.Super)
            {
                var nextFields = cur.Super.Fields;
                if (nextFields.ContainsKey(name))
                {
                    return nextFields[name];
                }
            }
                
            throw new KeyNotFoundException();
        }
    }
}