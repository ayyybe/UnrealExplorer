using System.Text.Json.Serialization;

namespace UnrealExplorer.Core.Reflection.Json
{
    public struct JsonStructInfo
    {
        [JsonPropertyName("name")]
        public string Name { get; set; }
        
        [JsonPropertyName("super")]
        public string Super { get; set; }
        
        [JsonPropertyName("fields")]
        public JsonShorthandFieldInfo[] Fields { get; set; }
        
        // TODO: JsonExplicitFieldInfo
        // public JsonExplicitFieldInfo[] ExplicitFields { get; set; }
    }
}