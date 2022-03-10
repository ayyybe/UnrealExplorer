using System;
using System.Linq;
using System.Runtime.InteropServices;
using NUnit.Framework;
using UnrealExplorer.Core.Memory;

namespace UnrealExplorer.Tests.Core.Memory
{
    [TestFixture]
    public class ProcessTests
    {
        [SetUp]
        public void SetUp()
        {
            // Set up a Process object to read/write memory of the current process
            var rawHandle = System.Diagnostics.Process.GetCurrentProcess().Handle;
            thisProc = new Process(rawHandle);
        }

        private Process thisProc;

        [Test]
        public void ReadZerosFromMemory([Values(0, 1, 10, 100, 1000, 10000)] int n)
        {
            // Create zero-filled byte array
            var managedData = new byte[n];

            // Copy to unmanaged memory
            var unmanagedData = Marshal.AllocHGlobal(n);
            Marshal.Copy(managedData, 0, unmanagedData, n);

            // Try to read the data from memory
            byte[] data = thisProc.ReadMemory(unmanagedData, n);

            // Free unmanaged memory
            Marshal.FreeHGlobal(unmanagedData);

            // Compare data read from memory to the original data
            Assert.That(data, Is.EqualTo(managedData));
        }

        [Test]
        public void ReadRandomDataFromMemory([Values(0, 1, 10, 100, 1000, 10000)] int n)
        {
            // Write deterministic "random" data to a byte array
            var managedData = new byte[n];
            TestContext.CurrentContext.Random.NextBytes(managedData);

            // Copy to unmanaged memory
            var unmanagedData = Marshal.AllocHGlobal(n);
            Marshal.Copy(managedData, 0, unmanagedData, n);

            // Try to read the data from memory
            byte[] data = thisProc.ReadMemory(unmanagedData, n);

            // Free unmanaged memory
            Marshal.FreeHGlobal(unmanagedData);

            // Compare data read from memory to the original data
            Assert.That(data, Is.EqualTo(managedData));
        }

        [TestCase(100, 0, 0)]
        [TestCase(100, 100, 0)]
        [TestCase(100, 0, 100)]
        [TestCase(100, 0, 20)]
        [TestCase(100, 30, 20)]
        public void ReadRandomDataFromMemoryIntoBufferWithOffset(int outBufferLength, int offset, int readLength)
        {
            // Write deterministic "random" data to a byte array
            var managedData = new byte[readLength];
            TestContext.CurrentContext.Random.NextBytes(managedData);

            // Copy to unmanaged memory
            var unmanagedData = Marshal.AllocHGlobal(managedData.Length);
            Marshal.Copy(managedData, 0, unmanagedData, managedData.Length);

            // Prepare output buffer with deterministic "random" data
            var outBuffer = new byte[outBufferLength];
            TestContext.CurrentContext.Random.NextBytes(outBuffer);

            // Construct expected result array
            byte[] expectedData = outBuffer.ToArray();
            managedData.CopyTo(expectedData, offset);

            // Try to read the data from memory
            thisProc.ReadMemoryIntoBuffer(unmanagedData, ref outBuffer, offset, readLength);

            // Free unmanaged memory
            Marshal.FreeHGlobal(unmanagedData);

            // Compare data read from memory to the expected data
            Assert.That(outBuffer, Is.EqualTo(expectedData));
        }

        [Test]
        public void ReadMemoryIntoNullBuffer()
        {
            byte[] outBuffer = null;
            Assert.Throws<ArgumentNullException>(() => thisProc.ReadMemoryIntoBuffer(IntPtr.Zero, ref outBuffer, 0, 0));
        }

        [TestCase(0, 1, 0)]
        [TestCase(0, 1, 10)]
        [TestCase(100, 101, 0)]
        [TestCase(100, 101, 10)]
        [TestCase(100, 101, 100)]
        [TestCase(100, 101, 101)]
        [TestCase(100, 101, 1000)]
        [TestCase(100, 1000, 0)]
        [TestCase(100, 1000, 10)]
        [TestCase(100, 1000, 100)]
        [TestCase(100, 1000, 101)]
        [TestCase(100, 1000, 1000)]
        public void ReadMemoryIntoBufferWithInvalidOffset(int outBufferLength, int offset, int readLength)
        {
            var outBuffer = new byte[outBufferLength];
            Assert.Throws<ArgumentException>(() =>
                thisProc.ReadMemoryIntoBuffer(IntPtr.Zero, ref outBuffer, offset, readLength));
        }

        [TestCase(0, 0, 1)]
        [TestCase(0, 0, 10)]
        [TestCase(100, 0, 101)]
        [TestCase(100, 0, 1000)]
        [TestCase(100, 100, 1)]
        [TestCase(100, 100, 1000)]
        [TestCase(100, 50, 51)]
        [TestCase(100, 50, 100)]
        [TestCase(100, 50, 101)]
        [TestCase(100, 50, 1000)]
        public void ReadMemoryIntoBufferWithInvalidLength(int outBufferLength, int offset, int readLength)
        {
            var outBuffer = new byte[outBufferLength];
            Assert.Throws<ArgumentException>(() =>
                thisProc.ReadMemoryIntoBuffer(IntPtr.Zero, ref outBuffer, offset, readLength));
        }

        [Test]
        public void WriteZerosToMemory([Values(0, 1, 10, 100, 1000, 10000)] int n)
        {
            var zeros = new byte[n];
            byte[] ones = Enumerable.Repeat((byte) 0xFF, n).ToArray();

            // Allocate unmanaged memory and fill with ones
            var unmanagedData = Marshal.AllocHGlobal(n);
            Marshal.Copy(unmanagedData, ones, 0, n);

            // Write zeros
            thisProc.WriteMemory(unmanagedData, zeros);

            // Move to managed array
            var managedData = new byte[n];
            Marshal.Copy(unmanagedData, managedData, 0, n);
            Marshal.FreeHGlobal(unmanagedData);

            // Verify written data
            Assert.That(managedData, Is.EqualTo(zeros));
        }

        [Test]
        public void WriteRandomDataToMemory([Values(0, 1, 10, 100, 1000, 10000)] int n)
        {
            // Generate deterministic "random" data
            var data = new byte[n];
            TestContext.CurrentContext.Random.NextBytes(data);

            // Allocate and write to unmanaged memory
            var unmanagedData = Marshal.AllocHGlobal(n);
            thisProc.WriteMemory(unmanagedData, data);

            // Move to managed array
            var managedData = new byte[n];
            Marshal.Copy(unmanagedData, managedData, 0, n);
            Marshal.FreeHGlobal(unmanagedData);

            // Verify written data
            Assert.That(managedData, Is.EqualTo(data));
        }
    }
}