namespace UnrealExplorer.AppServer.Bridge
{
    // TODO: replace this w/ a protobuf enum/msg or figure out some other better way to move to UX.Common
    public enum MessageToken : byte
    {
        NoOp = 0,
        Ping = 1,
        Pong = 2,
        RequestProcessList = 3,
        ProcessList = 4,
        RequestAppList = 5,
        AppList = 6,
        OpenProcess = 7,
        OpenProcessResponse = 8,
        CloseProcess = 9,
        CloseProcessResponse = 10,
        RequestEngineInfo = 11,
        EngineInfo = 12,
        MemorySubscribe = 13,
        MemorySubscribeResponse = 14,
        MemoryUnsubscribe = 15,
        MemoryUnsubscribeResponse = 16,
        MemoryUnsubscribeAll = 17,
        MemoryUnsubscribeAllResponse = 18,
        MemoryUpdate = 19,
        EditValue = 20,
        
        // ReSharper disable InconsistentNaming
        DEBUG_ReadBytes = 101,
        DEBUG_ReadBytesResponse = 102,
        DEBUG_WriteBytes = 103,
        DEBUG_WriteBytesResponse = 104,
        
        
        // ReSharper enable InconsistentNaming
    }
 }