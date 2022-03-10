using System.Text.Json.Serialization;

namespace UnrealExplorer.Core.Reflection.Json
{
    // TODO: make JsonExplicitFieldInfo or similar w/ defined offset... then add "explicitFields" array to json schema
    [JsonConverter(typeof(JsonShorthandFieldInfoConverter))]
    public struct JsonShorthandFieldInfo
    {
        public string Name { get; set; }
        
        public string Type { get; set; }
    }
}