using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using UnrealExplorer.Core.Engine.ClassHelpers;

namespace UnrealExplorer.Core.Engine
{
    // TODO: unsupported property types listed below:
    
    // pretty high prio, just tedious to figure out how to implement
    //   MapProperty
    //   SetProperty
    
    // all implemented the same iirc, just need to implement GObjects stuff for index lookup
    //   LazyObjectProperty
    //   SoftObjectProperty
    //   SoftClassProperty
    //   WeakObjectProperty
    
    // misc
    //   FieldPathProperty
    //   DelegateProperty
    //   InterfaceProperty
    //   MulticastInlineDelegateProperty
    //   MulticastSparseDelegateProperty
    
    /// <summary>
    ///     Utility class to recursively read and dump reflected UE4 object properties in a human-readable format.
    /// </summary>
    public class PropertyDumper
    {
        private readonly bool dumpChildren;
        private readonly HashSet<IntPtr> dumpedObjects = new();
        private readonly TextWriter @out;
        private int indentLevel;

        public PropertyDumper(TextWriter @out, bool dumpChildren = false)
        {
            this.@out = @out;
            this.dumpChildren = dumpChildren;
        }

        private string Indent => "".PadLeft(4 * indentLevel);

        public void DumpObject(UObject obj)
        {
            @out.WriteLine("{0:X16} {1}", obj.GetPointer(), obj.GetFullName());
            
            IntPtr ptr = obj.GetPointer();
            for (FProperty prop = obj.Class.PropertyLink;
                prop.GetPointer() != IntPtr.Zero;
                prop = prop.PropertyLinkNext)
            {
                SerializeProperty(prop, ptr);
            }
        }

        private void AddIndent()
        {
            ++indentLevel;
        }

        private void DropIndent()
        {
            --indentLevel;
        }

        private void SerializeProperty(FProperty prop, IntPtr obj)
        {
            AddIndent();

            @out.Write("{0}0x{1:X4} [Owner: {2}] ({3}) {4} = ",
                Indent,
                prop.Offset,
                prop.Owner.IsUObject ? prop.Owner.Object.Name : prop.Owner.Field.Name,
                prop.Class.Name,
                prop.Name);

            ProcessCommon(prop, obj);

            DropIndent();
        }

        private void SerializeArrayElement(FProperty innerProp, IntPtr data, int index)
        {
            AddIndent();
            
            @out.Write("{0}[{1}] ({2}) = ",
                Indent,
                index,
                innerProp.Class.Name);
            
            ProcessCommon(innerProp, data + index * innerProp.ElementSize);
            
            DropIndent();
        }

        private void ProcessCommon(FProperty prop, IntPtr propBase)
        {
            FName propType = prop.Class.Name;

            switch (propType.ToString())
            {
                case "BoolProperty":
                    @out.WriteLine(prop.GetBoolValue(propBase) ? "true" : "false");
                    break;
                case "ByteProperty":
                    @out.WriteLine("{0:X2}", prop.GetUInt8Value(propBase));
                    break;
                case "Int8Property":
                    @out.WriteLine(prop.GetInt8Value(propBase));
                    break;
                case "UInt8Property":
                    @out.WriteLine(prop.GetUInt8Value(propBase));
                    break;
                case "Int16Property":
                    @out.WriteLine(prop.GetInt16Value(propBase));
                    break;
                case "UInt16Property":
                    @out.WriteLine(prop.GetUInt16Value(propBase));
                    break;
                case "IntProperty":
                case "Int32Property":
                    @out.WriteLine(prop.GetInt32Value(propBase));
                    break;
                case "UInt32Property":
                    @out.WriteLine(prop.GetUInt32Value(propBase));
                    break;
                case "Int64Property":
                    @out.WriteLine(prop.GetInt64Value(propBase));
                    break;
                case "UInt64Property":
                    @out.WriteLine(prop.GetUInt64Value(propBase));
                    break;
                case "FloatProperty":
                    @out.WriteLine(prop.GetFloatValue(propBase));
                    break;
                case "DoubleProperty":
                    @out.WriteLine(prop.GetDoubleValue(propBase));
                    break;

                case "NameProperty":
                {
                    FName name = prop.GetFNameValue(propBase);
                    @out.WriteLine($"FName(\"{name}\") Index={name.Index} Number={name.Number}");
                    break;
                }

                case "StrProperty":
                {
                    FString str = prop.GetFStringValue(propBase);
                    @out.WriteLine($"FString(\"{str}\") Count={str.Count} Max={str.Max}");
                    break;
                }

                case "TextProperty":
                {
                    FText text = prop.GetFTextValue(propBase);
                    @out.WriteLine($"FText(\"{text}\")");
                    break;
                }

                case "ObjectProperty":
                case "ClassProperty":
                {
                    UObject propObj = prop.GetUObjectValue(propBase);
                    IntPtr propObjPtr = propObj.GetPointer();
                    
                    @out.Write("{0:X16} {1}", propObj.GetPointer(), propObj.GetFullName());
                    
                    if (dumpChildren && propObjPtr != IntPtr.Zero)
                    {
                        if (dumpedObjects.Add(propObjPtr))
                        {
                            @out.WriteLine();
                            for (FProperty childProp = propObj.Class.PropertyLink;
                                childProp.GetPointer() != IntPtr.Zero;
                                childProp = childProp.PropertyLinkNext)
                            {
                                SerializeProperty(childProp, propObjPtr);
                            }
                        }
                        else
                        {
                            @out.WriteLine(" [Already dumped; skipping]");
                        }
                    }
                    else
                    {
                        @out.WriteLine();
                    }

                    break;
                }

                /*case "LazyObjectProperty":
                case "SoftObjectProperty":
                case "SoftClassProperty":
                case "WeakObjectProperty":
                {
                    int propObjIndex = prop.GetInt32Value(propBase);
                    UObject propObj = // TODO: GetGlobalObjects().GetByIndex(propObjIndex);
                    IntPtr propObjPtr = propObj.GetPointer();
                    
                    @out.Write("FWeakObjectPtr to {0:X16} {1}", propObj.GetPointer(), propObj.GetFullName());
                    
                    if (dumpChildren && propObjPtr != IntPtr.Zero)
                    {
                        if (dumpedObjects.Add(propObjPtr))
                        {
                            @out.WriteLine();
                            for (FProperty childProp = propObj.Class.PropertyLink;
                                childProp.GetPointer() != IntPtr.Zero;
                                childProp = childProp.PropertyLinkNext)
                            {
                                SerializeProperty(childProp, propObjPtr);
                            }
                        }
                        else
                        {
                            @out.WriteLine(" [Already dumped; skipping]");
                        }
                    }
                    else
                    {
                        @out.WriteLine();
                    }

                    break;
                }*/

                case "StructProperty":
                {
                    FStructProperty structProp = new FStructProperty(
                        prop.ResolveStruct("FStructProperty"),
                        prop.GetReader(),
                        prop.GetPointer());
                    UStruct @struct = structProp.Struct;
                    IntPtr data = prop.GetPropertyValuePtr(propBase);

                    @out.WriteLine("{0:X16} {1}{{...}}", data, @struct.GetFullName());

                    for (FProperty childProp = @struct.PropertyLink;
                        childProp.GetPointer() != IntPtr.Zero;
                        childProp = childProp.PropertyLinkNext)
                    {
                        SerializeProperty(childProp, data);
                    }

                    break;
                }

                case "EnumProperty":
                {
                    FEnumProperty enumProp = new FEnumProperty(
                        prop.ResolveStruct("FEnumProperty"),
                        prop.GetReader(),
                        prop.GetPointer());
                    FName underlyingPropType = enumProp.UnderlyingProp.Class.Name;

                    if (underlyingPropType.ToString() == "ByteProperty")
                    {
                        byte value = prop.GetUInt8Value(propBase);
                        FName name = enumProp.Enum.GetNameFromValue(value);

                        @out.WriteLine("{0} ({1:X2})", name?.ToString() ?? "<Unknown value name>", value);
                    }
                    else
                    {
                        @out.WriteLine("<Unsupported UnderlyingProp type \"{0}\">", underlyingPropType);
                    }
                    
                    break;
                }

                case "ArrayProperty":
                {
                    FArrayProperty arrayProp = new FArrayProperty(
                        prop.ResolveStruct("FArrayProperty"),
                        prop.GetReader(),
                        prop.GetPointer());
                    TArray array = prop.GetTArrayValue(propBase);
                    
                    @out.WriteLine("Array<{0}> Count={1} Max={2}",
                        arrayProp.Inner.Class.Name,
                        array.Count,
                        array.Max);

                    for (int i = 0; i < array.Count; i++)
                    {
                        SerializeArrayElement(arrayProp.Inner, array.DataPtr, i);
                    }
                    
                    break;
                }

                default:
                    @out.WriteLine("<Unsupported property type>");
                    break;
            }

            ;
        }

        //private void ProcessObject() {}
    }
}