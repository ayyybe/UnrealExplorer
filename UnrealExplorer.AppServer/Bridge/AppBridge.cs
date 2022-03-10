using System;
using UnrealExplorer.AppServer.Extensions;
using UnrealExplorer.AppServer.Services;
using UnrealExplorer.AppServer.Services.Memory;
using UnrealExplorer.Common.Protos.Errors;
using UnrealExplorer.Common.Protos.Processes;
using UnrealExplorer.Common.Protos.Subscriptions;

namespace UnrealExplorer.AppServer.Bridge
{
    // TODO: make disposable..?
    public class AppBridge
    {
        private IBridgeDispatcher dispatcher;
        private ProcessManager processManager;
        private MemoryWatcher memoryWatcher;
        
        public AppBridge(IBridgeDispatcher dispatcher)
        {
            this.dispatcher = dispatcher;
            processManager = new ProcessManager();
            memoryWatcher = new MemoryWatcher(processManager);
            
            this.dispatcher.OnMessage += OnMessage;
            memoryWatcher.Start();
        }

        private void OnMessage(object sender, BridgeMessage msg)
        {
            //var dispatcher = (TcpBridgeDispatcher) sender;

            Console.WriteLine(
                $"[Bridge] Received message: {msg.Token} ({msg.Token:X}) [+{msg.Data?.Length ?? 0} bytes]");

            // TODO: figure out some way to break it up and/or refactor some of the boilerplate out of the common pattern ("parse args, try x, catch bridge exception, catch other exceptions, finally send response")
            switch (msg.Token)
            {
                case MessageToken.Ping:
                    dispatcher.Send(MessageToken.Pong, null);
                    break;
                
                case MessageToken.RequestProcessList:
                    dispatcher.Send(MessageToken.ProcessList, ProcessManager.GetProcessList());
                    break;
                
                case MessageToken.RequestAppList:
                    dispatcher.Send(MessageToken.AppList, ProcessManager.GetAppList());
                    break;

                case MessageToken.OpenProcess:
                {
                    var args = OpenProcess.Parser.ParseFrom(msg.Data);
                    OpenProcessResponse response;

                    try
                    {
                        processManager.Open((int) args.ProcessId);
                    }
                    catch (BridgeException e)
                    {
                        response = new OpenProcessResponse
                        {
                            Result =
                            {
                                Status = e.Code,
                                Message = e.Message
                            },
                            ProcessId = args.ProcessId
                        };
                        dispatcher.Send(MessageToken.OpenProcessResponse, response);
                        return;
                    }
                    catch (Exception e)
                    {
                        response = new OpenProcessResponse
                        {
                            Result =
                            {
                                Status = ErrorCode.Failed,
                                Message = e.Message
                            },
                            ProcessId = args.ProcessId
                        };
                        dispatcher.Send(MessageToken.OpenProcessResponse, response);
                        return;
                    }

                    response = new OpenProcessResponse
                    {
                        Result =
                        {
                            Status = ErrorCode.Success,
                            Message = null
                        },
                        ProcessId = args.ProcessId
                    };
                    dispatcher.Send(MessageToken.OpenProcessResponse, response);
                    break;
                }

                case MessageToken.CloseProcess:
                {
                    var args = CloseProcess.Parser.ParseFrom(msg.Data);
                    CloseProcessResponse response;

                    try
                    {
                        processManager.Close((int) args.ProcessId);
                    }
                    catch (BridgeException e)
                    {
                        response = new CloseProcessResponse
                        {
                            Result =
                            {
                                Status = e.Code,
                                Message = e.Message
                            },
                            ProcessId = args.ProcessId
                        };
                        dispatcher.Send(MessageToken.CloseProcessResponse, response);
                        return;
                    }
                    catch (Exception e)
                    {
                        response = new CloseProcessResponse
                        {
                            Result =
                            {
                                Status = ErrorCode.Failed,
                                Message = e.Message
                            },
                            ProcessId = args.ProcessId
                        };
                        dispatcher.Send(MessageToken.CloseProcessResponse, response);
                        return;
                    }

                    response = new CloseProcessResponse
                    {
                        Result =
                        {
                            Status = ErrorCode.Success,
                            Message = null
                        },
                        ProcessId = args.ProcessId
                    };
                    dispatcher.Send(MessageToken.CloseProcessResponse, response);
                    break;
                }

                case MessageToken.MemorySubscribe:
                {
                    var args = MemorySubscribe.Parser.ParseFrom(msg.Data);
                    MemorySubscribeResponse response = null;

                    try
                    {
                        uint @ref = memoryWatcher.Subscribe(args);

                        response = new MemorySubscribeResponse
                        {
                            Result =
                            {
                                Status = ErrorCode.Success,
                                Message = null
                            },
                            Ref = @ref,
                            RequestRef = args.RequestRef
                        };
                    }
                    catch (BridgeException e)
                    {
                        response = new MemorySubscribeResponse
                        {
                            Result =
                            {
                                Status = e.Code,
                                Message = e.Message
                            },
                            RequestRef = args.RequestRef
                        };
                    }
                    catch (Exception e)
                    {
                        response = new MemorySubscribeResponse
                        {
                            Result =
                            {
                                Status = ErrorCode.Failed,
                                Message = e.Message
                            },
                            RequestRef = args.RequestRef
                        };
                    }
                    finally
                    {
                        dispatcher.Send(MessageToken.MemorySubscribeResponse, response);
                    }
                    break;
                }

                case MessageToken.MemoryUnsubscribe:
                {
                    var args = MemoryUnsubscribe.Parser.ParseFrom(msg.Data);
                    MemoryUnsubscribeResponse response = null;

                    try
                    {
                        memoryWatcher.Unsubscribe(args.Ref);

                        response = new MemoryUnsubscribeResponse
                        {
                            Result =
                            {
                                Status = ErrorCode.Success,
                                Message = null
                            },
                            Ref = args.Ref
                        };
                    }
                    catch (BridgeException e)
                    {
                        response = new MemoryUnsubscribeResponse
                        {
                            Result =
                            {
                                Status = e.Code,
                                Message = e.Message
                            },
                            Ref = args.Ref
                        };
                    }
                    catch (Exception e)
                    {
                        response = new MemoryUnsubscribeResponse
                        {
                            Result =
                            {
                                Status = ErrorCode.Failed,
                                Message = e.Message
                            },
                            Ref = args.Ref
                        };
                    }
                    finally
                    {
                        dispatcher.Send(MessageToken.MemorySubscribeResponse, response);
                    }
                    break;
                }
                
                case MessageToken.MemoryUnsubscribeAll:
                    break;

                case MessageToken.NoOp:
                case MessageToken.Pong:
                case MessageToken.ProcessList:
                case MessageToken.AppList:
                case MessageToken.OpenProcessResponse:
                case MessageToken.CloseProcessResponse:
                case MessageToken.RequestEngineInfo:
                case MessageToken.EngineInfo:
                case MessageToken.MemorySubscribeResponse:
                case MessageToken.MemoryUnsubscribeResponse:
                case MessageToken.MemoryUnsubscribeAllResponse:
                case MessageToken.MemoryUpdate:
                case MessageToken.EditValue:
                case MessageToken.DEBUG_ReadBytes:
                case MessageToken.DEBUG_ReadBytesResponse:
                case MessageToken.DEBUG_WriteBytes:
                case MessageToken.DEBUG_WriteBytesResponse:
                    // Unimplemented or inappropriate token for client usage
                    break;
                default:
                    //throw new ArgumentOutOfRangeException();
                    Console.WriteLine($"WARNING: Received unrecognized bridge token (0x{msg.Token:X})");
                    break;
            }
        }
    }
}