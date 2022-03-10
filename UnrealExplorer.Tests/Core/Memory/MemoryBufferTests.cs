using System;
using System.Linq;
using NUnit.Framework;
using UnrealExplorer.Core.Memory;

namespace UnrealExplorer.Tests.Core.Memory
{
    [TestFixture]
    public class MemoryBufferTests
    {
        [Test]
        public void ReadZerosFromMemory([Values(0, 1, 10, 100, 1000, 10000)] int n)
        {
            var testData = new byte[n];
            var buffer = new MemoryBuffer(testData);

            byte[] data = buffer.ReadMemory(IntPtr.Zero, n);

            Assert.That(data, Is.EqualTo(testData));
        }

        [Test]
        public void ReadRandomDataFromMemory([Values(0, 1, 10, 100, 1000, 10000)] int n)
        {
            var testData = new byte[n];
            TestContext.CurrentContext.Random.NextBytes(testData);
            var buffer = new MemoryBuffer(testData);

            byte[] data = buffer.ReadMemory(IntPtr.Zero, n);

            Assert.That(data, Is.EqualTo(testData));
        }

        [TestCase(100, 0, 0)]
        [TestCase(100, 100, 0)]
        [TestCase(100, 0, 100)]
        [TestCase(100, 0, 20)]
        [TestCase(100, 30, 20)]
        public void ReadRandomDataFromMemoryIntoBufferWithOffset(int outBufferLength, int offset, int readLength)
        {
            var testData = new byte[readLength];
            TestContext.CurrentContext.Random.NextBytes(testData);
            var buffer = new MemoryBuffer(testData);

            var outBuffer = new byte[outBufferLength];
            TestContext.CurrentContext.Random.NextBytes(outBuffer);

            byte[] expectedData = outBuffer.ToArray();
            testData.CopyTo(expectedData, offset);

            buffer.ReadMemoryIntoBuffer(IntPtr.Zero, ref outBuffer, offset, readLength);

            // Compare data read from memory to the expected data
            Assert.That(outBuffer, Is.EqualTo(expectedData));
        }

        [Test]
        public void ReadMemoryIntoNullBuffer()
        {
            var buffer = new MemoryBuffer(0);
            byte[] outBuffer = null;
            Assert.Throws<ArgumentNullException>(() => buffer.ReadMemoryIntoBuffer(IntPtr.Zero, ref outBuffer, 0, 0));
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
            var buffer = new MemoryBuffer(readLength);
            var outBuffer = new byte[outBufferLength];
            Assert.Throws<ArgumentException>(() =>
                buffer.ReadMemoryIntoBuffer(IntPtr.Zero, ref outBuffer, offset, readLength));
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
            var buffer = new MemoryBuffer(readLength);
            var outBuffer = new byte[outBufferLength];
            Assert.Throws<ArgumentException>(() =>
                buffer.ReadMemoryIntoBuffer(IntPtr.Zero, ref outBuffer, offset, readLength));
        }

        [Test]
        public void WriteZerosToMemory([Values(0, 1, 10, 100, 1000, 10000)] int n)
        {
            var zeros = new byte[n];
            byte[] ones = Enumerable.Repeat((byte) 0xFF, n).ToArray();

            // Init buffer with ones
            var buffer = new MemoryBuffer(ones);

            // Write zeros
            buffer.WriteMemory(IntPtr.Zero, zeros);

            // Verify written data
            byte[] data = buffer.ReadMemory(IntPtr.Zero, n);
            Assert.That(data, Is.EqualTo(zeros));
        }

        [Test]
        public void WriteRandomDataToMemory([Values(0, 1, 10, 100, 1000, 10000)] int n)
        {
            // Init buffer with zeros
            var buffer = new MemoryBuffer(n);

            // Write random data
            var testData = new byte[n];
            TestContext.CurrentContext.Random.NextBytes(testData);
            buffer.WriteMemory(IntPtr.Zero, testData);

            // Verify written data
            byte[] data = buffer.ReadMemory(IntPtr.Zero, n);
            Assert.That(data, Is.EqualTo(testData));
        }

        [Test]
        public void UpdateFromMemoryBufferWithRandomData([Values(0, 1, 10, 100, 1000, 10000)] int n)
        {
            // Write random data
            var testData = new byte[n];
            TestContext.CurrentContext.Random.NextBytes(testData);
            var testDataBuffer = new MemoryBuffer(testData);

            // Update from
            var buffer = new MemoryBuffer(n);
            buffer.UpdateFrom(testDataBuffer, IntPtr.Zero);

            // Verify written data
            byte[] data = buffer.ReadMemory(IntPtr.Zero, n);
            Assert.That(data, Is.EqualTo(testData));
        }

        [Test]
        public void ConstructFromMemoryBufferWithRandomData([Values(0, 1, 10, 100, 1000, 10000)] int n)
        {
            // Write random data
            var testData = new byte[n];
            TestContext.CurrentContext.Random.NextBytes(testData);
            var testDataBuffer = new MemoryBuffer(testData);

            // Update from
            var buffer = new MemoryBuffer(testDataBuffer, IntPtr.Zero, n);

            // Verify written data
            byte[] data = buffer.ReadMemory(IntPtr.Zero, n);
            Assert.That(data, Is.EqualTo(testData));
        }
    }
}