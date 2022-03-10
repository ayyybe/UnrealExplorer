using System;
using System.IO;
using System.Text.Json;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using UnrealExplorer.Core.Reflection.Fields;

namespace UnrealExplorer.Core.Reflection.Json
{
    public class JsonReflector
    {
        private JsonReflectorConfig config;
        
        public ReflectionContext Context { get; }

        public JsonReflector() : this(new ReflectionContext()) { }
        
        public JsonReflector(ReflectionContext context)
        {
            Context = context;
        }

        public void Read(JsonReflectorConfig reflectorConfig)
        {
            config = reflectorConfig;
        }

        public void ReadFile(string filename)
        {
            ReadFileAsync(filename).Wait();
        }

        public void ReadAndLoadFile(string filename)
        {
            ReadFile(filename);
            Load();
        }

        public async Task ReadFileAsync(string filename)
        {
            await using var fs = File.OpenRead(filename);
            Read(await JsonSerializer.DeserializeAsync<JsonReflectorConfig>(fs));
        }

        public async Task ReadAndLoadFileAsync(string filename)
        {
            await ReadFileAsync(filename);
            Load();
        }

        public void ReadJson(string json)
        {
            Read(JsonSerializer.Deserialize<JsonReflectorConfig>(json));
        }

        public void ReadAndLoadJson(string json)
        {
            ReadJson(json);
            Load();
        }

        public void Load()
        {
            foreach (var structInfo in config.Structs)
            {
                //Context.Add(GetStruct(structInfo.Name));
                LoadStruct(structInfo);
            }
        }
        
        public Struct LoadStruct(string name)
        {
            var existingStruct = Context.ResolveStruct(name);
            if (existingStruct != null)
            {
                return existingStruct;
            }
            
            foreach (var structInfo in config.Structs)
            {
                if (structInfo.Name == name)
                {
                    return LoadStruct(structInfo);
                }
            }

            throw new JsonException($"Reference to unknown struct \"{name}\"");
        }

        private int GetInheritedSize(JsonStructInfo structInfo)
        {
            if (structInfo.Super == "UObject") { } // REMOVEME
            //return structInfo.Super.Sum(superName => LoadStruct(superName).Size);
            return structInfo.Super == null ? 0 : LoadStruct(structInfo.Super).Size;
        }
        
        public Struct LoadStruct(JsonStructInfo structInfo)
        {
            var existingStruct = Context.ResolveStruct(structInfo.Name);
            if (existingStruct != null)
            {
                return existingStruct;
            }
            
            var @struct = new Struct(Context, structInfo.Name, structInfo.Super);
            Context.Add(@struct);

            int offset = GetInheritedSize(structInfo);
            foreach (var fieldInfo in structInfo.Fields)
            {
                var field = CreateTypedField(fieldInfo.Type, fieldInfo.Name, offset);
                @struct.Add(field);
                offset += field.Size;
            }

            return @struct;
        }
        
        private static readonly Regex ArrayTypeRegex = new(@"^(.+)\[([0-9]*)\]$");

        private Lazy<Field> LazyCreateTypedField(string type, string name = null, int offset = 0)
            => new(() => CreateTypedField(type, name, offset));

        private Field CreateTypedField(string type, string name = null, int offset = 0)
        {
            if (type.EndsWith('*'))
            {
                return new PointerField(name, offset, LazyCreateTypedField(type.Remove(type.Length - 1)));
            }

            var arrayMatch = ArrayTypeRegex.Match(type);
            if (arrayMatch.Success)
            {
                string innerType = arrayMatch.Groups[1].Value;
                int count = int.Parse(arrayMatch.Groups[2].Value);
                return new ArrayField(name, offset, CreateTypedField(innerType), count);
            }

            return type switch
            {
                "bool" => new BoolField(name, offset),
                "int8" => new Int8Field(name, offset),
                "uint8" or "char" => new UInt8Field(name, offset),
                "int16" => new Int16Field(name, offset),
                "uint16" => new UInt16Field(name, offset),
                "int" or "int32" => new Int32Field(name, offset),
                "uint" or "uint32" => new UInt32Field(name, offset),
                "int64" => new Int64Field(name, offset),
                "uint64" => new UInt64Field(name, offset),
                "float" => new FloatField(name, offset),
                "double" => new DoubleField(name, offset),
                "void" => new VoidField(name, offset),
                _ => new StructField(name, offset, LoadStruct(type))
            };
        }
    }
}