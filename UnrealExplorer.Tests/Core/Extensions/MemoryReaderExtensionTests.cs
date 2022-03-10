using System;
using System.Text;
using Moq;
using NUnit.Framework;
using UnrealExplorer.Core.Extensions;
using UnrealExplorer.Core.Memory;

namespace UnrealExplorer.Tests.Core.Extensions
{
    [TestFixture]
    public class MemoryReaderExtensionTests
    {
        [Test]
        public void ReadInt8(
            [Values(0, 1, -1, 99, -99, sbyte.MinValue, sbyte.MaxValue)]
            sbyte mockValue)
        {
            var mockReader = new Mock<IMemoryReader>();
            var mockData = new[] {(byte) mockValue};
            mockReader.Setup(r => r.ReadMemory(It.IsAny<IntPtr>(), sizeof(sbyte), out mockData)).Returns(true);

            sbyte data = mockReader.Object.ReadInt8(IntPtr.Zero);

            mockReader.VerifyAll();
            Assert.That(data, Is.EqualTo(mockValue));
        }

        [Test]
        public void ReadUInt8(
            [Values(0, 1, 99, 222, byte.MinValue, byte.MaxValue)]
            byte mockValue)
        {
            var mockReader = new Mock<IMemoryReader>();
            byte[] mockData = {mockValue};
            mockReader.Setup(r => r.ReadMemory(It.IsAny<IntPtr>(), sizeof(byte), out mockData)).Returns(true);

            byte data = mockReader.Object.ReadUInt8(IntPtr.Zero);

            mockReader.VerifyAll();
            Assert.That(data, Is.EqualTo(mockValue));
        }

        [Test]
        public void ReadInt16(
            [Values(0, 1, -1, 99, -99, 9999, -9999, short.MinValue, short.MaxValue)]
            short mockValue)
        {
            var mockReader = new Mock<IMemoryReader>();
            byte[] mockData = BitConverter.GetBytes(mockValue);
            mockReader.Setup(r => r.ReadMemory(It.IsAny<IntPtr>(), sizeof(short), out mockData)).Returns(true);

            short data = mockReader.Object.ReadInt16(IntPtr.Zero);

            mockReader.VerifyAll();
            Assert.That(data, Is.EqualTo(mockValue));
        }

        [Test]
        public void ReadUInt16(
            [Values((ushort) 0, (ushort) 1, (ushort) 99, (ushort) 9999, (ushort) 33333, ushort.MinValue,
                ushort.MaxValue)]
            ushort mockValue)
        {
            var mockReader = new Mock<IMemoryReader>();
            byte[] mockData = BitConverter.GetBytes(mockValue);
            mockReader.Setup(r => r.ReadMemory(It.IsAny<IntPtr>(), sizeof(ushort), out mockData)).Returns(true);

            ushort data = mockReader.Object.ReadUInt16(IntPtr.Zero);

            mockReader.VerifyAll();
            Assert.That(data, Is.EqualTo(mockValue));
        }

        [Test]
        public void ReadInt32(
            [Values(0, 1, -1, 9999, -9999, 1111111111, -1111111111, int.MinValue, int.MaxValue)]
            int mockValue)
        {
            var mockReader = new Mock<IMemoryReader>();
            byte[] mockData = BitConverter.GetBytes(mockValue);
            mockReader.Setup(r => r.ReadMemory(It.IsAny<IntPtr>(), sizeof(int), out mockData)).Returns(true);

            int data = mockReader.Object.ReadInt32(IntPtr.Zero);

            mockReader.VerifyAll();
            Assert.That(data, Is.EqualTo(mockValue));
        }

        [Test]
        public void ReadUInt32(
            [Values(0u, 1u, 9999u, 1111111111u, 2222222222u, uint.MinValue, uint.MaxValue)]
            uint mockValue)
        {
            var mockReader = new Mock<IMemoryReader>();
            byte[] mockData = BitConverter.GetBytes(mockValue);
            mockReader.Setup(r => r.ReadMemory(It.IsAny<IntPtr>(), sizeof(uint), out mockData)).Returns(true);

            uint data = mockReader.Object.ReadUInt32(IntPtr.Zero);

            mockReader.VerifyAll();
            Assert.That(data, Is.EqualTo(mockValue));
        }

        [Test]
        public void ReadInt64(
            [Values(0L, 1L, -1L, 9999L, -9999L, 888888888888888888L, -888888888888888888L, long.MinValue,
                long.MaxValue)]
            long mockValue)
        {
            var mockReader = new Mock<IMemoryReader>();
            byte[] mockData = BitConverter.GetBytes(mockValue);
            mockReader.Setup(r => r.ReadMemory(It.IsAny<IntPtr>(), sizeof(long), out mockData)).Returns(true);

            long data = mockReader.Object.ReadInt64(IntPtr.Zero);

            mockReader.VerifyAll();
            Assert.That(data, Is.EqualTo(mockValue));
        }

        [Test]
        public void ReadUInt64(
            [Values(0UL, 1UL, 9999UL, 888888888888888888UL, 999999999999999999UL, ulong.MinValue, ulong.MaxValue)]
            ulong mockValue)
        {
            var mockReader = new Mock<IMemoryReader>();
            byte[] mockData = BitConverter.GetBytes(mockValue);
            mockReader.Setup(r => r.ReadMemory(It.IsAny<IntPtr>(), sizeof(ulong), out mockData)).Returns(true);

            ulong data = mockReader.Object.ReadUInt64(IntPtr.Zero);

            mockReader.VerifyAll();
            Assert.That(data, Is.EqualTo(mockValue));
        }

        [Test]
        public void ReadFloat(
            [Values(0.0f, 123.45f, float.Epsilon, float.NaN, float.PositiveInfinity, float.NegativeInfinity,
                float.MinValue, float.MaxValue)]
            float mockValue)
        {
            var mockReader = new Mock<IMemoryReader>();
            byte[] mockData = BitConverter.GetBytes(mockValue);
            mockReader.Setup(r => r.ReadMemory(It.IsAny<IntPtr>(), sizeof(float), out mockData)).Returns(true);

            float data = mockReader.Object.ReadFloat(IntPtr.Zero);

            mockReader.VerifyAll();
            Assert.That(data, Is.EqualTo(mockValue));
        }

        [Test]
        public void ReadDouble(
            [Values(0.0, 123.45, double.Epsilon, double.NaN, double.PositiveInfinity, double.NegativeInfinity,
                double.MinValue, double.MaxValue)]
            double mockValue)
        {
            var mockReader = new Mock<IMemoryReader>();
            byte[] mockData = BitConverter.GetBytes(mockValue);
            mockReader.Setup(r => r.ReadMemory(It.IsAny<IntPtr>(), sizeof(double), out mockData)).Returns(true);

            double data = mockReader.Object.ReadDouble(IntPtr.Zero);

            mockReader.VerifyAll();
            Assert.That(data, Is.EqualTo(mockValue));
        }

        [Test]
        public void ReadIntPtr(
            [Values(0L, 1L, -1L, 9999L, -9999L, 888888888888888888L, -888888888888888888L, long.MinValue,
                long.MaxValue)]
            long mockValue)
        {
            // TODO: add 32 bit tests if/when 32 bit support is added
            var mockReader = new Mock<IMemoryReader>();
            byte[] mockData = BitConverter.GetBytes(mockValue);
            mockReader.Setup(r => r.ReadMemory(It.IsAny<IntPtr>(), sizeof(long), out mockData)).Returns(true);

            var data = mockReader.Object.ReadIntPtr(IntPtr.Zero);

            mockReader.VerifyAll();
            Assert.That(data, Is.EqualTo((IntPtr) mockValue));
        }

        [TestCase("")]
        [TestCase("\0")]
        [TestCase("\0", 0)]
        [TestCase("Hello World!")]
        [TestCase("Hello World!\0")]
        [TestCase("Hello World!\0", 12)]
        [TestCase("Hello \0World!")]
        [TestCase("Hello \0World!", 6)]
        [TestCase("Hello \0World!\0")]
        [TestCase("Hello \0World!\0", 6)]
        public void ReadStringUTF8(string mockValue, int nullTerminatedLength = -1)
        {
            bool nullTerminated = nullTerminatedLength > -1;
            byte[] mockData = Encoding.UTF8.GetBytes(mockValue);

            var mockReader = new Mock<IMemoryReader>();
            mockReader
                .Setup(r => r.ReadMemory(It.IsAny<IntPtr>(), mockData.Length, out mockData))
                .Returns(true);

            string result = mockReader.Object.ReadString(IntPtr.Zero, Encoding.UTF8, mockData.Length, nullTerminated);
            string expectedResult = nullTerminated ? mockValue.Remove(nullTerminatedLength) : mockValue;

            mockReader.VerifyAll();
            Assert.That(result, Is.EqualTo(expectedResult));
        }
    }
}