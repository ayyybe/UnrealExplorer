using System;
using System.Globalization;
using System.IO;
using System.Xml;
using UnrealExplorer.Core.Engine;
using UnrealExplorer.Core.Engine.ClassHelpers;
using UnrealExplorer.Core.Memory;
using UnrealExplorer.Core.Reflection;
using UnrealExplorer.Core.Reflection.Fields;
using UnrealExplorer.Core.Reflection.Json;

// ReSharper disable ArrangeTypeMemberModifiers
// ReSharper disable UnusedMember.Local

// This is a collection of random unorganized snippets to quickly test new features during development.
// Actual, structured, stable tests are located in UnrealExplorer.Tests.
namespace TestApp
{
    internal static class Program
    {
        static void Main()
        {
	        UnrealPropDumpTest();

            Console.ReadLine();
        }

        static string ReadConsoleString(string prompt)
        {
            Console.Write(prompt);
            return Console.ReadLine();
        }

        static int ReadConsoleInt(string prompt)
        {
            var input = 0;
            var valid = false;

            //PointerField<Int32Field> yeet;

            while (!valid)
            {
                Console.Write(prompt);
                valid = int.TryParse(Console.ReadLine(), out input);
            }

            return input;
        }

        static IntPtr ReadConsoleIntPtrHex(string prompt)
        {
            IntPtr input;

            while (true)
            {
                Console.Write(prompt);
                if (IntPtr.TryParse(Console.ReadLine(), NumberStyles.HexNumber, null, out input)) break;
            }

            return input;
        }

        static void TESTING_ReadBytes()
        {
            int pid = ReadConsoleInt("Enter pid: ");
            var address = ReadConsoleIntPtrHex("Enter address (hex): ");
            int size = ReadConsoleInt("Enter size: ");

            var process = Process.Open(pid);
            byte[] data = process.ReadMemory(address, size);
            process.ReadMemoryIntoBuffer(address, ref data, 1200000, 24345623);

            Console.WriteLine("data: " + BitConverter.ToString(data));
        }

        static byte[] ConvertHexStringToByteArray(string hexString)
        {
            if (hexString.Length % 2 != 0)
                throw new ArgumentException(string.Format(CultureInfo.InvariantCulture,
                    "The binary key cannot have an odd number of digits: {0}", hexString));

            var data = new byte[hexString.Length / 2];
            for (var index = 0; index < data.Length; index++)
            {
                string byteValue = hexString.Substring(index * 2, 2);
                data[index] = byte.Parse(byteValue, NumberStyles.HexNumber, CultureInfo.InvariantCulture);
            }

            return data;
        }

        static void TESTING_WriteBytes()
        {
            int pid = ReadConsoleInt("Enter pid: ");
            var address = ReadConsoleIntPtrHex("Enter address to write at (hex): ");

            while (true)
            {
                byte[] data = ConvertHexStringToByteArray(ReadConsoleString("Enter data to write (hex): "));
                var process = Process.Open(pid);
                process.WriteMemory(address, data);
            }
            // ReSharper disable once FunctionNeverReturns
        }

        static void StructFieldEnumeratorTesting()
        {
	        var reflector = new JsonReflector();
	        // TODO: TRY NULL SUPER ARRAY
	        reflector.ReadAndLoadJson(
@"{
	""structs"": [
		{
			""name"": ""Asdf"",
			""super"": ""yeA"",
			""fields"": [
				{ ""qwerty1"": ""int"" },
				{ ""asdf2"": ""int"" },
				{ ""yeeee3"": ""int"" }
			]
		},
		{
			""name"": ""yeA"",
			""super"": ""hmm"",
			""fields"": [
				{ ""yeahmm"": ""int"" },
				{ ""mmno"": ""int"" }
			]
		},
		{
			""name"": ""hmm"",
			""fields"": [
				{ ""yhhhh"": ""int"" },
				{ ""oki"": ""int"" }
			]
		}
	]
}");
	        
	        var Asdf = reflector.LoadStruct("Asdf");

	        foreach (var field in Asdf)
	        {
		        Console.WriteLine(field.Name + " @ " + field.Offset + " (" + field.Size + ")");
	        }
        }

        static void HelperTestThing()
        {
	        const int pid = 2548;
	        var uobjPtr = new IntPtr(0x000001993C8F8080);
	        var proc = Process.Open(pid);
	        
	        var reflector = new JsonReflector();
	        reflector.ReadAndLoadJson(
@"{
	""structs"": [
		{
			""name"": ""UObject"",
			""fields"": [
				{ ""VTable"": ""void*"" },
				{ ""Flags"": ""int32"" },
				{ ""InternalIndex"": ""int32"" },
				{ ""Class"": ""UClass*"" },
				{ ""Name"": ""FName"" },
				{ ""Outer"": ""UObject*"" }
			]
		},
		{
			""name"": ""UClass"",
			""super"": ""UObject"",
			""fields"": []
		},
		{
			""name"": ""FName"",
			""fields"": [
				{ ""Index"": ""int32"" },
				{ ""Number"": ""int32"" }
			]
		}
	]
}");

	        var sUObject = reflector.LoadStruct("UObject");

	        var uobj = new UObject(sUObject, proc, uobjPtr);
	        var uobjclass = new UClass(sUObject, proc, uobj.ClassPtr);
	        
	        Console.WriteLine("uobj.Name.Index: " + uobj.Name.Index);
	        Console.WriteLine("uobj.Name.Number: " + uobj.Name.Number);
	        Console.WriteLine("uobjclass.Name.Index: " + uobjclass.Name.Index);
	        Console.WriteLine("uobjclass.Name.Number: " + uobjclass.Name.Number);
	        
	        Console.WriteLine("===============================");

	        //uobj.Name.Index = 12345;
	        //uobjclass.Name.Index = 275;
	        
	        Console.WriteLine("uobj.Name.Index: " + uobj.Name.Index);
	        Console.WriteLine("uobj.Name.Number: " + uobj.Name.Number);
	        Console.WriteLine("uobjclass.Name.Index: " + uobjclass.Name.Index);
	        Console.WriteLine("uobjclass.Name.Number: " + uobjclass.Name.Number);
        }

        static void TESTING_ReflectionStuff()
        {
            // ReSharper disable InconsistentNaming
            // Copy this info from a running TestAppCpp instance
            // =================================================

            const int pid = 18312;
            var ts1_zero = (IntPtr)0x0000005573FDF428;
            var ts1_values1 = (IntPtr)0x0000005573FDF478;
            var ts2_zero = (IntPtr)0x0000005573FDF4C8;
            var ts2_values1 = (IntPtr)0x0000005573FDF518;
            var ts3_zero = (IntPtr)0x0000005573FDF550;
            var ts3_values1 = (IntPtr)0x0000005573FDF5E0;

            // =================================================
            // ReSharper restore InconsistentNaming

            var proc = Process.Open(pid);

            // Define structs
            /*var ctx = new ReflectionContext();

            var ts1 = new Struct(ctx, "test_struct1")
            {
                new Int32Field("FirstAsdf", 0x0),
                new Int32Field("QwertyTwo", 0x4),
                new BoolField("yeet_skeet", 0x8),
                new BoolField("nu", 0x9),
                new FloatField("FloatyBoi", 0xC),
                new DoubleField("DoubleTrouble", 0x10),
                new Int64Field("LongBoi", 0x18),
                new Int64Field("LongBoiTwo", 0x20),
                new UInt64Field("NoU", 0x28)
            };

            var ts2 = new Struct(ctx, "test_struct2")
            {
                new Int32Field("FirstInt", 0x0),
                new Int16Field("SecondInt16", 0x4),
                new PointerField("ThirdIntPtr", 0x8, new Int32Field()),
                new PointerField("FourthBytePtr", 0x10, new UInt8Field())
            };

            var ts3 = new Struct(ctx, "test_struct3", "test_struct2")
            {
                new UInt64Field("NotFirstUltraLongBoi", 0x18),
                new PointerField("PitterPatter", 0x20, new StructField(ts1)),
                new ArrayField("Digits", 0x28, new Int32Field(), 10)
            };

            ctx.Add(ts1);
            ctx.Add(ts2);
            ctx.Add(ts3);*/
            var json = 
@"{
	""structs"": [
		{
			""name"": ""test_struct1"",
			""fields"": [
				{ ""FirstAsdf"": ""int"" },
				{ ""QwertyTwo"": ""int"" },
				{ ""yeet_skeet"": ""bool"" },
				{ ""nu"": ""bool"" },
				{ ""pad_1"": ""uint8[2]"" },
				{ ""FloatyBoi"": ""float"" },
				{ ""DoubleTrouble"": ""double"" },
				{ ""LongBoi"": ""int64"" },
				{ ""LongBoiTwo"": ""int64"" },
				{ ""NoU"": ""uint64"" }
			]
		},
		{
			""name"": ""test_struct2"",
			""fields"": [
				{ ""FirstInt"": ""int"" },
				{ ""SecondInt16"": ""int16"" },
				{ ""pad_1"": ""uint8[2]"" },
				{ ""ThirdIntPtr"": ""int*"" },
				{ ""FourthBytePtr"": ""uint8*"" }
			]
		},
		{
			""name"": ""test_struct3"",
			""super"": ""test_struct2"",
			""fields"": [
				{ ""NotFirstUltraLongBoi"": ""uint64"" },
				{ ""PitterPatter"": ""test_struct1*"" },
				{ ""Digits"": ""int[10]"" }
			]
		},
		{
			""name"": ""test_struct4"",
			""fields"": [
				{ ""AsdfTest"": ""int"" },
				{ ""SelfReferenceTest"": ""test_struct4*"" }
			]
		}
	]
}";

            var reflector = new JsonReflector();
            reflector.ReadAndLoadJson(json);

            var ts1 = reflector.LoadStruct("test_struct1");
            var ts2 = reflector.LoadStruct("test_struct2");
            var ts3 = reflector.LoadStruct("test_struct3");
            var ts4 = reflector.LoadStruct("test_struct4");

            // Dump instances
            var dumper = new StructDumper(Console.Out, skipRepeats: false);

            dumper.DumpInstance(ts1, proc, ts1_zero, nameof(ts1_zero));
            dumper.DumpInstance(ts1, proc, ts1_values1, nameof(ts1_values1));

            dumper.DumpInstance(ts2, proc, ts2_zero, nameof(ts2_zero));
            dumper.DumpInstance(ts2, proc, ts2_values1, nameof(ts2_values1));

            dumper.DumpInstance(ts3, proc, ts3_zero, nameof(ts3_zero));
            dumper.DumpInstance(ts3, proc, ts3_values1, nameof(ts3_values1));
        }

        static void UnrealPropDumpTest()
        {
	        const int pid = 13820;
	        var obj = new IntPtr(0x00000137F071B380);
	        var proc = Process.Open(pid);
	        
	        var engine = EngineContext.WithOffsets(proc, 0x3E02780, 0x3E1AFA0);
	        
	        var reflector = new JsonReflector(engine);
	        reflector.ReadAndLoadJson(
		        @"{
	""structs"": [
		{
			""name"": ""UObject"",
			""fields"": [
				{ ""VTable"": ""void*"" },
				{ ""Flags"": ""int32"" },
				{ ""InternalIndex"": ""int32"" },
				{ ""Class"": ""UClass*"" },
				{ ""Name"": ""FName"" },
				{ ""Outer"": ""UObject*"" }
			]
		},
		{
			""name"": ""UField"",
			""super"": ""UObject"",
			""fields"": [
				{ ""Next"": ""UField*"" }
			]
		},
		{
			""name"": ""UStruct"",
			""super"": ""UField"",
			""fields"": [
				{ ""_super2"": ""FStructBaseChain"" },
				{ ""SuperField"": ""UStruct*"" },
				{ ""Children"": ""UField*"" },
				{ ""ChildProperties"": ""FField*"" },
				{ ""PropertySize"": ""int32"" },
				{ ""MinAlignment"": ""int32"" },
				{ ""Script"": ""TArray"" },
				{ ""PropertyLink"": ""FProperty*"" },
				{ ""RefLink"": ""FProperty*"" },
				{ ""DestructorLink"": ""FProperty*"" },
				{ ""PostConstructLink"": ""FProperty*"" },
				{ ""ScriptAndPropertyObjectReferences"": ""TArray"" },
				{ ""UnresolvedScriptProperties"": ""void*"" },
				{ ""UnversionedSchema"": ""void*"" }
			]
		},
		{
			""name"": ""UClass"",
			""super"": ""UStruct"",
			""fields"": []
		},
		{
			""name"": ""TArray"",
			""fields"": [
				{ ""Data"": ""void*"" },
				{ ""Count"": ""int32"" },
				{ ""Max"": ""int32"" }
			]
		},
		{
			""name"": ""FString"",
			""super"": ""TArray"",
			""fields"": []
		},
		{
			""name"": ""FName"",
			""fields"": [
				{ ""Index"": ""int32"" },
				{ ""Number"": ""int32"" }
			]
		},
		{
			""name"": ""FNameEntry"",
			""fields"": [
				{ ""Header"": ""uint16"" },
				{ ""Name"": ""uint16[1024]"" }
			]
		},
		{
			""name"": ""FNameEntryAllocator"",
			""fields"": [
				{ ""frwLock"": ""int64"" },
				{ ""CurrentBlock"": ""int"" },
				{ ""CurrentByteCursor"": ""int"" },
				{ ""Blocks"": ""uint8*[8192]"" }
			]
		},
		{
			""name"": ""FStructBaseChain"",
			""fields"": [
				{ ""StructBaseChainArray"": ""void*"" },
				{ ""NumStructBasesInChainMinusOne"": ""int"" },
				{ ""pad"": ""uint8[4]"" }
			]
		},
		{
			""name"": ""FFieldClass"",
			""fields"": [
				{ ""Name"": ""FName"" },
				{ ""Id"": ""uint64"" },
				{ ""CastFlags"": ""uint64"" },
				{ ""ClassFlags"": ""uint32"" },
				{ ""pad"": ""uint8[4]"" },
				{ ""SuperClass"": ""FFieldClass*"" },
				{ ""DefaultObject"": ""FField*"" },
				{ ""ConstructFn"": ""FField*"" },
				{ ""UniqueNameIndexCounter"": ""int32"" }
			]
		},
		{
			""name"": ""FFieldVariant"",
			""fields"": [
				{ ""Container"": ""void*"" },
				{ ""IsUObject"": ""bool"" },
				{ ""pad"": ""uint8[7]"" }
			]
		},
		{
			""name"": ""FField"",
			""fields"": [
				{ ""VfTable"": ""void*"" },
				{ ""Class"": ""FFieldClass*"" },
				{ ""Owner"": ""FFieldVariant"" },
				{ ""Next"": ""FField*"" },
				{ ""Name"": ""FName"" },
				{ ""Flag"": ""int32"" },
				{ ""pad"": ""uint8[4]"" }
			]
		},
		{
			""name"": ""FProperty"",
			""super"": ""FField"",
			""fields"": [
				{ ""ArrayDim"": ""int32"" },
				{ ""ElementSize"": ""int32"" },
				{ ""PropertyFlags"": ""int64"" },
				{ ""RepIndex"": ""uint16"" },
				{ ""BlueprintReplicationCondition"": ""uint8"" },
				{ ""pad"": ""uint8"" },
				{ ""Offset"": ""int32"" },
				{ ""RepNotifyFunc"": ""FName"" },
				{ ""PropertyLinkNext"": ""FProperty*"" },
				{ ""NextRef"": ""FProperty*"" },
				{ ""DestructorLinkNext"": ""FProperty*"" },
				{ ""PostConstructLinkNext"": ""FProperty*"" }
			]
		},
		{
			""name"": ""FArrayProperty"",
			""super"": ""FProperty"",
			""fields"": [
				{ ""Inner"": ""FProperty*"" },
				{ ""ArrayFlags"": ""int32"" }
			]
		},
		{
			""name"": ""FStructProperty"",
			""super"": ""FProperty"",
			""fields"": [
				{ ""Struct"": ""UStruct*"" }
			]
		},
		{
			""name"": ""FText"",
			""fields"": [
				{ ""TextData"": ""TTextData*"" }
			]
		},
		{
			""name"": ""TTextData"",
			""fields"": [
				{ ""VfTable"": ""void*"" },
				{ ""LocalizedString"": ""FString*"" }
			]
		},
		{
			""name"": ""UEnum"",
			""super"": ""UField"",
			""fields"": [
				{ ""CppType"": ""FString"" },
				{ ""Names"": ""TArray"" }
			]
		},
		{
			""name"": ""EnumNameData"",
			""fields"": [
				{ ""Key"": ""FName"" },
				{ ""Value"": ""int64"" }
			]
		},
		{
			""name"": ""FEnumProperty"",
			""super"": ""FProperty"",
			""fields"": [
				{ ""UnderlyingProp"": ""FProperty*"" },
				{ ""Enum"": ""UEnum*"" }
			]
		}
	]
}");
	        reflector.LoadStruct("UStruct");
	        var uObj = new UObject(reflector.LoadStruct("UObject"), proc, obj);

	        using StreamWriter writer = File.CreateText("UX_props.txt");
	        var dumper = new PropertyDumper(writer, true);
	        
	        dumper.DumpObject(uObj);
	        
	        
	        //FString testtt = new(reflector.LoadStruct("FString"), proc, new IntPtr(0x000001127EB1BA00 + 0x0300));
	        //Console.Out.WriteLine($"FString(\"{testtt}\") Count={testtt.Count} Max={testtt.Max}");
        }
    }
}