using System.Text.Json.Serialization;

namespace UnrealExplorer.Core.Reflection.Json
{
    public struct JsonReflectorConfig
    {
        [JsonPropertyName("structs")]
        public JsonStructInfo[] Structs { get; set; }
    }
}