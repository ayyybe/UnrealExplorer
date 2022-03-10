namespace UnrealExplorer.AppServer.Services.Memory
{
    public class MemorySubscription
    {
        public MemorySubscriptionParams Params { get; }
        public byte[] LastData { get; set; }

        public MemorySubscription(MemorySubscriptionParams @params)
        {
            Params = @params;
        }
    }
}