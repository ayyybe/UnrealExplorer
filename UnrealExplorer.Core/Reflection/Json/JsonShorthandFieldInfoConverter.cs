using System;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace UnrealExplorer.Core.Reflection.Json
{
    public class JsonShorthandFieldInfoConverter : JsonConverter<JsonShorthandFieldInfo>
    {
        public override JsonShorthandFieldInfo Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
        {
            if (reader.TokenType != JsonTokenType.StartObject)
            {
                throw new JsonException();
            }
            
            if (!reader.Read() ||
                reader.TokenType != JsonTokenType.PropertyName)
            {
                throw new JsonException();
            }
            
            string fieldName = reader.GetString();
            
            if (!reader.Read() ||
                reader.TokenType != JsonTokenType.String)
            {
                throw new JsonException();
            }
            
            string fieldType = reader.GetString();

            if (!reader.Read() ||
                reader.TokenType != JsonTokenType.EndObject)
            {
                throw new JsonException();
            }
            
            return new JsonShorthandFieldInfo {Name = fieldName, Type = fieldType};
        }

        public override void Write(Utf8JsonWriter writer, JsonShorthandFieldInfo value, JsonSerializerOptions options)
        {
            writer.WriteStartObject();
            writer.WriteString(value.Name, value.Type);
            writer.WriteEndObject();
        }
    }
}