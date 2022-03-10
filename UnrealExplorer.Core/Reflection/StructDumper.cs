using System;
using System.Collections.Generic;
using System.IO;
using UnrealExplorer.Core.Extensions;
using UnrealExplorer.Core.Memory;
using UnrealExplorer.Core.Reflection.Fields;

namespace UnrealExplorer.Core.Reflection
{
    /// <summary>
    ///     Utility class to recursively read and dump reflected struct instances in a human-readable format.
    /// </summary>
    public class StructDumper
    {
        private const string ReadFailedMsg = "< !! Read failed !! >";
        private const string UnsupportedFieldMsg = "< !! Unsupported field type !! >";
        private const string AlreadyDumpedMsg = "< !! Already dumped; skipping !! >";
        private const string GetValueNotFoundMsg = "< !! ValueField<T>.GetValue not found !! >";
        
        private readonly bool dumpChildren;
        private readonly HashSet<IntPtr> dumpedPointers = new();
        private readonly TextWriter @out;
        private readonly bool skipRepeats;
        private int indentLevel;

        public StructDumper(TextWriter @out, bool dumpChildren = true, bool skipRepeats = true)
        {
            this.@out = @out;
            this.dumpChildren = dumpChildren;
            this.skipRepeats = skipRepeats;
        }

        private string Indent => "".PadLeft(4 * indentLevel);

        public void DumpInstance(Struct @struct, IMemoryReader reader, IntPtr obj, string instanceName = null)
        {
            SerializeStructValues(@struct, reader, obj, instanceName);
            @out.WriteLine();
        }

        private void AddIndent()
        {
            ++indentLevel;
        }

        private void DropIndent()
        {
            --indentLevel;
        }


        // Prints a struct entry with all of its field value entries
        private void SerializeStructValues(Struct @struct, IMemoryReader reader, IntPtr obj, string instanceName)
        {
            @out.WriteLine("{0}{1:X16} <{2}> {3}", Indent, obj, @struct.Name, instanceName);

            AddIndent();

            foreach (var field in @struct) SerializeFieldValue(field, reader, obj);

            DropIndent();
        }

        // Prints a generic field value entry
        private void SerializeFieldValue(Field field, IMemoryReader reader, IntPtr obj)
        {
            @out.Write("{0}{1:X16} ", Indent, field.GetPointer(obj));

            @out.Write("(");
            ProcessFieldType(field);
            @out.Write(")");

            @out.Write(string.IsNullOrEmpty(field.Name) ? " = " : " {0} = ", field.Name);

            ProcessCommon(field, reader, obj);
        }

        // Prints an array field element value entry
        private void SerializeArrayFieldElementValue(ArrayField arrayField, IMemoryReader reader, IntPtr obj, int index)
        {
            var pointer = arrayField.GetPointerAt(obj, index);

            @out.Write("{0}[{1}] {2:X16}", Indent, index, pointer);

            @out.Write(" (");
            ProcessFieldType(arrayField.InnerField);
            @out.Write(") ");

            ProcessCommon(arrayField.InnerField, reader, pointer);
        }

        // Resolves and prints the type of a field
        private void ProcessFieldType(Field field)
        {
            @out.Write(field.GetType().Name);
            while (field is PointerField pField)
            {
                @out.Write("->");
                @out.Write(pField.InnerField.Name);
                field = pField.InnerField;
            }
        }

        // Evaluates and prints the value of a field with a newline
        private void ProcessCommon(Field field, IMemoryReader reader, IntPtr obj)
        {
            switch (field)
            {
                case PointerField pField when pField.GetValue(reader, obj, out var pointer):
                {
                    @out.WriteLine("{0:X16} {1}", pointer, pField.InnerField.GetType().Name);

                    if (dumpChildren || pField.InnerField is not StructField)
                    {
                        AddIndent();

                        if (!skipRepeats || dumpedPointers.Add(pointer))
                            SerializeFieldValue(pField.InnerField, reader, pointer);
                        else
                            @out.WriteLine(Indent + AlreadyDumpedMsg);

                        DropIndent();
                    }

                    break;
                }
                case PointerField:
                    @out.WriteLine(ReadFailedMsg);
                    break;
                case StructField structField:
                {
                    @out.WriteLine("<{0}>", structField.InnerStruct.Name);
                    AddIndent();
                    foreach (var structInnerField in structField.InnerStruct)
                        SerializeFieldValue(structInnerField, reader, obj);
                    DropIndent();
                    break;
                }
                case ArrayField arrayField:
                {
                    @out.WriteLine("{0}[{1}]", arrayField.InnerField.GetType().Name, arrayField.Count);
                    AddIndent();
                    for (var i = 0; i < arrayField.Count; i++)
                        //SerializeFieldValue(arrayField.InnerField, reader, arrayField.GetPointerAt(obj, i));
                        SerializeArrayFieldElementValue(arrayField, reader, obj, i);
                    DropIndent();
                    break;
                }
                default:
                {
                    // We can use .NET reflection to implement all other ValueTypes through their GetValue methods and use their default ToString implementations
                    // reflectionception \(^-^)/

                    var t = field.GetType();

                    if (t.IsSubclassOfRawGeneric(typeof(ValueField<>), out var baseT))
                    {
                        var getValueMethod = t.GetMethod("GetValue",
                            new[]
                            {
                                typeof(IMemoryReader), typeof(IntPtr), baseT.GetGenericArguments()[0].MakeByRefType()
                            });
                        var getValueParams = new object[] {reader, obj, null};
                        var getValueReturn = (bool?) getValueMethod?.Invoke(field, getValueParams);

                        if (getValueReturn == true)
                        {
                            object fieldValue = getValueParams[2];
                            @out.WriteLine(fieldValue);
                        }
                        else if (getValueReturn == false)
                        {
                            @out.WriteLine(ReadFailedMsg);
                        }
                        else
                        {
                            @out.WriteLine(GetValueNotFoundMsg);
                        }
                    }
                    else
                    {
                        @out.WriteLine(UnsupportedFieldMsg);
                    }

                    break;
                }
            }
        }
    }
}