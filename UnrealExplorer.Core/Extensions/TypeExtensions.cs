using System;

namespace UnrealExplorer.Core.Extensions
{
    public static class TypeExtensions
    {
        public static bool IsSubclassOfGenericType(this Type type)
        {
            while (type != null && type != typeof(object))
            {
                if (type.IsGenericType) return true;

                type = type.BaseType;
            }

            return false;
        }

        public static bool IsSubclassOfRawGeneric(this Type type, Type rawBaseType, out Type baseType)
        {
            while (type != null && type != typeof(object))
            {
                var rawType = type.IsGenericType ? type.GetGenericTypeDefinition() : type;

                if (rawType == rawBaseType)
                {
                    baseType = type;
                    return true;
                }

                type = type.BaseType;
            }

            baseType = null;
            return false;
        }

        public static bool IsSubclassOfRawGeneric(this Type type, Type baseType)
        {
            return IsSubclassOfRawGeneric(type, baseType, out _);
        }
    }
}