using System;
using UnrealExplorer.Common.Protos.Errors;

namespace UnrealExplorer.AppServer.Bridge
{
    public class BridgeException : Exception
    {
        public ErrorCode Code { get; }

        public BridgeException(ErrorCode code, string message = null) : base(message)
        {
            Code = code;
        }
    }
}