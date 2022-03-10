import * as $protobuf from "protobufjs";
/** Properties of a RequestEngineInfo. */
export interface IRequestEngineInfo {

    /** RequestEngineInfo processId */
    processId?: (number|null);
}

/** Represents a RequestEngineInfo. */
export class RequestEngineInfo implements IRequestEngineInfo {

    /**
     * Constructs a new RequestEngineInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRequestEngineInfo);

    /** RequestEngineInfo processId. */
    public processId: number;

    /**
     * Creates a new RequestEngineInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RequestEngineInfo instance
     */
    public static create(properties?: IRequestEngineInfo): RequestEngineInfo;

    /**
     * Encodes the specified RequestEngineInfo message. Does not implicitly {@link RequestEngineInfo.verify|verify} messages.
     * @param message RequestEngineInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRequestEngineInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified RequestEngineInfo message, length delimited. Does not implicitly {@link RequestEngineInfo.verify|verify} messages.
     * @param message RequestEngineInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IRequestEngineInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RequestEngineInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RequestEngineInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RequestEngineInfo;

    /**
     * Decodes a RequestEngineInfo message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns RequestEngineInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RequestEngineInfo;

    /**
     * Verifies a RequestEngineInfo message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a RequestEngineInfo message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns RequestEngineInfo
     */
    public static fromObject(object: { [k: string]: any }): RequestEngineInfo;

    /**
     * Creates a plain object from a RequestEngineInfo message. Also converts values to other types if specified.
     * @param message RequestEngineInfo
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: RequestEngineInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this RequestEngineInfo to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an EngineInfo. */
export interface IEngineInfo {

    /** EngineInfo processId */
    processId?: (number|null);
}

/** Represents an EngineInfo. */
export class EngineInfo implements IEngineInfo {

    /**
     * Constructs a new EngineInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: IEngineInfo);

    /** EngineInfo processId. */
    public processId: number;

    /**
     * Creates a new EngineInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns EngineInfo instance
     */
    public static create(properties?: IEngineInfo): EngineInfo;

    /**
     * Encodes the specified EngineInfo message. Does not implicitly {@link EngineInfo.verify|verify} messages.
     * @param message EngineInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IEngineInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified EngineInfo message, length delimited. Does not implicitly {@link EngineInfo.verify|verify} messages.
     * @param message EngineInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IEngineInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an EngineInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns EngineInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EngineInfo;

    /**
     * Decodes an EngineInfo message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns EngineInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EngineInfo;

    /**
     * Verifies an EngineInfo message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an EngineInfo message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns EngineInfo
     */
    public static fromObject(object: { [k: string]: any }): EngineInfo;

    /**
     * Creates a plain object from an EngineInfo message. Also converts values to other types if specified.
     * @param message EngineInfo
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: EngineInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this EngineInfo to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** ErrorCode enum. */
export enum ErrorCode {
    Success = 0,
    Failed = 1,
    UnknownError = 2,
    AccessDenied = 3,
    ProcessNotOpen = 10,
    ProcessAlreadyOpen = 11,
    ReadFailed = 20,
    WriteFailed = 21
}

/** Represents a Reply. */
export class Reply implements IReply {

    /**
     * Constructs a new Reply.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReply);

    /** Reply status. */
    public status: ErrorCode;

    /** Reply message. */
    public message: string;

    /**
     * Creates a new Reply instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Reply instance
     */
    public static create(properties?: IReply): Reply;

    /**
     * Encodes the specified Reply message. Does not implicitly {@link Reply.verify|verify} messages.
     * @param message Reply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Reply message, length delimited. Does not implicitly {@link Reply.verify|verify} messages.
     * @param message Reply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Reply message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Reply;

    /**
     * Decodes a Reply message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Reply;

    /**
     * Verifies a Reply message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Reply message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Reply
     */
    public static fromObject(object: { [k: string]: any }): Reply;

    /**
     * Creates a plain object from a Reply message. Also converts values to other types if specified.
     * @param message Reply
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Reply, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Reply to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a ProcessInfo. */
export class ProcessInfo implements IProcessInfo {

    /**
     * Constructs a new ProcessInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProcessInfo);

    /** ProcessInfo processId. */
    public processId: number;

    /** ProcessInfo name. */
    public name: string;

    /** ProcessInfo executablePath. */
    public executablePath: string;

    /** ProcessInfo iconPng. */
    public iconPng: Uint8Array;

    /** ProcessInfo processArch. */
    public processArch: ProcessInfo.CpuType;

    /**
     * Creates a new ProcessInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProcessInfo instance
     */
    public static create(properties?: IProcessInfo): ProcessInfo;

    /**
     * Encodes the specified ProcessInfo message. Does not implicitly {@link ProcessInfo.verify|verify} messages.
     * @param message ProcessInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProcessInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ProcessInfo message, length delimited. Does not implicitly {@link ProcessInfo.verify|verify} messages.
     * @param message ProcessInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProcessInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProcessInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProcessInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProcessInfo;

    /**
     * Decodes a ProcessInfo message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ProcessInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ProcessInfo;

    /**
     * Verifies a ProcessInfo message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ProcessInfo message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ProcessInfo
     */
    public static fromObject(object: { [k: string]: any }): ProcessInfo;

    /**
     * Creates a plain object from a ProcessInfo message. Also converts values to other types if specified.
     * @param message ProcessInfo
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ProcessInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ProcessInfo to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace ProcessInfo {

    /** CpuType enum. */
    enum CpuType {
        X64 = 0,
        X86 = 1
    }
}

/** Represents a ProcessList. */
export class ProcessList implements IProcessList {

    /**
     * Constructs a new ProcessList.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProcessList);

    /** ProcessList processes. */
    public processes: IProcessInfo[];

    /**
     * Creates a new ProcessList instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProcessList instance
     */
    public static create(properties?: IProcessList): ProcessList;

    /**
     * Encodes the specified ProcessList message. Does not implicitly {@link ProcessList.verify|verify} messages.
     * @param message ProcessList message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProcessList, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ProcessList message, length delimited. Does not implicitly {@link ProcessList.verify|verify} messages.
     * @param message ProcessList message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProcessList, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProcessList message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProcessList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProcessList;

    /**
     * Decodes a ProcessList message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ProcessList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ProcessList;

    /**
     * Verifies a ProcessList message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ProcessList message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ProcessList
     */
    public static fromObject(object: { [k: string]: any }): ProcessList;

    /**
     * Creates a plain object from a ProcessList message. Also converts values to other types if specified.
     * @param message ProcessList
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ProcessList, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ProcessList to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents an AppInfo. */
export class AppInfo implements IAppInfo {

    /**
     * Constructs a new AppInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: IAppInfo);

    /** AppInfo process. */
    public process?: (IProcessInfo|null);

    /** AppInfo appName. */
    public appName: string;

    /**
     * Creates a new AppInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns AppInfo instance
     */
    public static create(properties?: IAppInfo): AppInfo;

    /**
     * Encodes the specified AppInfo message. Does not implicitly {@link AppInfo.verify|verify} messages.
     * @param message AppInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IAppInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified AppInfo message, length delimited. Does not implicitly {@link AppInfo.verify|verify} messages.
     * @param message AppInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IAppInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an AppInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns AppInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AppInfo;

    /**
     * Decodes an AppInfo message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns AppInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AppInfo;

    /**
     * Verifies an AppInfo message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an AppInfo message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns AppInfo
     */
    public static fromObject(object: { [k: string]: any }): AppInfo;

    /**
     * Creates a plain object from an AppInfo message. Also converts values to other types if specified.
     * @param message AppInfo
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: AppInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this AppInfo to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents an AppList. */
export class AppList implements IAppList {

    /**
     * Constructs a new AppList.
     * @param [properties] Properties to set
     */
    constructor(properties?: IAppList);

    /** AppList apps. */
    public apps: IAppInfo[];

    /**
     * Creates a new AppList instance using the specified properties.
     * @param [properties] Properties to set
     * @returns AppList instance
     */
    public static create(properties?: IAppList): AppList;

    /**
     * Encodes the specified AppList message. Does not implicitly {@link AppList.verify|verify} messages.
     * @param message AppList message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IAppList, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified AppList message, length delimited. Does not implicitly {@link AppList.verify|verify} messages.
     * @param message AppList message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IAppList, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an AppList message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns AppList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AppList;

    /**
     * Decodes an AppList message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns AppList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AppList;

    /**
     * Verifies an AppList message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an AppList message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns AppList
     */
    public static fromObject(object: { [k: string]: any }): AppList;

    /**
     * Creates a plain object from an AppList message. Also converts values to other types if specified.
     * @param message AppList
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: AppList, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this AppList to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents an OpenProcess. */
export class OpenProcess implements IOpenProcess {

    /**
     * Constructs a new OpenProcess.
     * @param [properties] Properties to set
     */
    constructor(properties?: IOpenProcess);

    /** OpenProcess processId. */
    public processId: number;

    /**
     * Creates a new OpenProcess instance using the specified properties.
     * @param [properties] Properties to set
     * @returns OpenProcess instance
     */
    public static create(properties?: IOpenProcess): OpenProcess;

    /**
     * Encodes the specified OpenProcess message. Does not implicitly {@link OpenProcess.verify|verify} messages.
     * @param message OpenProcess message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IOpenProcess, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified OpenProcess message, length delimited. Does not implicitly {@link OpenProcess.verify|verify} messages.
     * @param message OpenProcess message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IOpenProcess, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an OpenProcess message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns OpenProcess
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): OpenProcess;

    /**
     * Decodes an OpenProcess message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns OpenProcess
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): OpenProcess;

    /**
     * Verifies an OpenProcess message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an OpenProcess message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns OpenProcess
     */
    public static fromObject(object: { [k: string]: any }): OpenProcess;

    /**
     * Creates a plain object from an OpenProcess message. Also converts values to other types if specified.
     * @param message OpenProcess
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: OpenProcess, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this OpenProcess to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents an OpenProcessResponse. */
export class OpenProcessResponse implements IOpenProcessResponse {

    /**
     * Constructs a new OpenProcessResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IOpenProcessResponse);

    /** OpenProcessResponse result. */
    public result?: (IReply|null);

    /** OpenProcessResponse processId. */
    public processId: number;

    /**
     * Creates a new OpenProcessResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns OpenProcessResponse instance
     */
    public static create(properties?: IOpenProcessResponse): OpenProcessResponse;

    /**
     * Encodes the specified OpenProcessResponse message. Does not implicitly {@link OpenProcessResponse.verify|verify} messages.
     * @param message OpenProcessResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IOpenProcessResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified OpenProcessResponse message, length delimited. Does not implicitly {@link OpenProcessResponse.verify|verify} messages.
     * @param message OpenProcessResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IOpenProcessResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an OpenProcessResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns OpenProcessResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): OpenProcessResponse;

    /**
     * Decodes an OpenProcessResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns OpenProcessResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): OpenProcessResponse;

    /**
     * Verifies an OpenProcessResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an OpenProcessResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns OpenProcessResponse
     */
    public static fromObject(object: { [k: string]: any }): OpenProcessResponse;

    /**
     * Creates a plain object from an OpenProcessResponse message. Also converts values to other types if specified.
     * @param message OpenProcessResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: OpenProcessResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this OpenProcessResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a CloseProcess. */
export class CloseProcess implements ICloseProcess {

    /**
     * Constructs a new CloseProcess.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICloseProcess);

    /** CloseProcess processId. */
    public processId: number;

    /**
     * Creates a new CloseProcess instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CloseProcess instance
     */
    public static create(properties?: ICloseProcess): CloseProcess;

    /**
     * Encodes the specified CloseProcess message. Does not implicitly {@link CloseProcess.verify|verify} messages.
     * @param message CloseProcess message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICloseProcess, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CloseProcess message, length delimited. Does not implicitly {@link CloseProcess.verify|verify} messages.
     * @param message CloseProcess message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICloseProcess, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CloseProcess message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CloseProcess
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CloseProcess;

    /**
     * Decodes a CloseProcess message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CloseProcess
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CloseProcess;

    /**
     * Verifies a CloseProcess message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CloseProcess message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CloseProcess
     */
    public static fromObject(object: { [k: string]: any }): CloseProcess;

    /**
     * Creates a plain object from a CloseProcess message. Also converts values to other types if specified.
     * @param message CloseProcess
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CloseProcess, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CloseProcess to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a CloseProcessResponse. */
export class CloseProcessResponse implements ICloseProcessResponse {

    /**
     * Constructs a new CloseProcessResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICloseProcessResponse);

    /** CloseProcessResponse result. */
    public result?: (IReply|null);

    /** CloseProcessResponse processId. */
    public processId: number;

    /**
     * Creates a new CloseProcessResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CloseProcessResponse instance
     */
    public static create(properties?: ICloseProcessResponse): CloseProcessResponse;

    /**
     * Encodes the specified CloseProcessResponse message. Does not implicitly {@link CloseProcessResponse.verify|verify} messages.
     * @param message CloseProcessResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICloseProcessResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CloseProcessResponse message, length delimited. Does not implicitly {@link CloseProcessResponse.verify|verify} messages.
     * @param message CloseProcessResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICloseProcessResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CloseProcessResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CloseProcessResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CloseProcessResponse;

    /**
     * Decodes a CloseProcessResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CloseProcessResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CloseProcessResponse;

    /**
     * Verifies a CloseProcessResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CloseProcessResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CloseProcessResponse
     */
    public static fromObject(object: { [k: string]: any }): CloseProcessResponse;

    /**
     * Creates a plain object from a CloseProcessResponse message. Also converts values to other types if specified.
     * @param message CloseProcessResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CloseProcessResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CloseProcessResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a MemorySubscribe. */
export class MemorySubscribe implements IMemorySubscribe {

    /**
     * Constructs a new MemorySubscribe.
     * @param [properties] Properties to set
     */
    constructor(properties?: IMemorySubscribe);

    /** MemorySubscribe processId. */
    public processId: number;

    /** MemorySubscribe startAddress. */
    public startAddress: (number|Long);

    /** MemorySubscribe byteCount. */
    public byteCount: number;

    /** MemorySubscribe requestRef. */
    public requestRef: number;

    /**
     * Creates a new MemorySubscribe instance using the specified properties.
     * @param [properties] Properties to set
     * @returns MemorySubscribe instance
     */
    public static create(properties?: IMemorySubscribe): MemorySubscribe;

    /**
     * Encodes the specified MemorySubscribe message. Does not implicitly {@link MemorySubscribe.verify|verify} messages.
     * @param message MemorySubscribe message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IMemorySubscribe, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified MemorySubscribe message, length delimited. Does not implicitly {@link MemorySubscribe.verify|verify} messages.
     * @param message MemorySubscribe message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IMemorySubscribe, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a MemorySubscribe message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns MemorySubscribe
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): MemorySubscribe;

    /**
     * Decodes a MemorySubscribe message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns MemorySubscribe
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): MemorySubscribe;

    /**
     * Verifies a MemorySubscribe message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a MemorySubscribe message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns MemorySubscribe
     */
    public static fromObject(object: { [k: string]: any }): MemorySubscribe;

    /**
     * Creates a plain object from a MemorySubscribe message. Also converts values to other types if specified.
     * @param message MemorySubscribe
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: MemorySubscribe, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this MemorySubscribe to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a MemorySubscribeResponse. */
export class MemorySubscribeResponse implements IMemorySubscribeResponse {

    /**
     * Constructs a new MemorySubscribeResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IMemorySubscribeResponse);

    /** MemorySubscribeResponse result. */
    public result?: (IReply|null);

    /** MemorySubscribeResponse ref. */
    public ref: number;

    /** MemorySubscribeResponse requestRef. */
    public requestRef: number;

    /**
     * Creates a new MemorySubscribeResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns MemorySubscribeResponse instance
     */
    public static create(properties?: IMemorySubscribeResponse): MemorySubscribeResponse;

    /**
     * Encodes the specified MemorySubscribeResponse message. Does not implicitly {@link MemorySubscribeResponse.verify|verify} messages.
     * @param message MemorySubscribeResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IMemorySubscribeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified MemorySubscribeResponse message, length delimited. Does not implicitly {@link MemorySubscribeResponse.verify|verify} messages.
     * @param message MemorySubscribeResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IMemorySubscribeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a MemorySubscribeResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns MemorySubscribeResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): MemorySubscribeResponse;

    /**
     * Decodes a MemorySubscribeResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns MemorySubscribeResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): MemorySubscribeResponse;

    /**
     * Verifies a MemorySubscribeResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a MemorySubscribeResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns MemorySubscribeResponse
     */
    public static fromObject(object: { [k: string]: any }): MemorySubscribeResponse;

    /**
     * Creates a plain object from a MemorySubscribeResponse message. Also converts values to other types if specified.
     * @param message MemorySubscribeResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: MemorySubscribeResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this MemorySubscribeResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a MemoryUnsubscribe. */
export class MemoryUnsubscribe implements IMemoryUnsubscribe {

    /**
     * Constructs a new MemoryUnsubscribe.
     * @param [properties] Properties to set
     */
    constructor(properties?: IMemoryUnsubscribe);

    /** MemoryUnsubscribe ref. */
    public ref: number;

    /**
     * Creates a new MemoryUnsubscribe instance using the specified properties.
     * @param [properties] Properties to set
     * @returns MemoryUnsubscribe instance
     */
    public static create(properties?: IMemoryUnsubscribe): MemoryUnsubscribe;

    /**
     * Encodes the specified MemoryUnsubscribe message. Does not implicitly {@link MemoryUnsubscribe.verify|verify} messages.
     * @param message MemoryUnsubscribe message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IMemoryUnsubscribe, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified MemoryUnsubscribe message, length delimited. Does not implicitly {@link MemoryUnsubscribe.verify|verify} messages.
     * @param message MemoryUnsubscribe message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IMemoryUnsubscribe, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a MemoryUnsubscribe message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns MemoryUnsubscribe
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): MemoryUnsubscribe;

    /**
     * Decodes a MemoryUnsubscribe message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns MemoryUnsubscribe
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): MemoryUnsubscribe;

    /**
     * Verifies a MemoryUnsubscribe message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a MemoryUnsubscribe message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns MemoryUnsubscribe
     */
    public static fromObject(object: { [k: string]: any }): MemoryUnsubscribe;

    /**
     * Creates a plain object from a MemoryUnsubscribe message. Also converts values to other types if specified.
     * @param message MemoryUnsubscribe
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: MemoryUnsubscribe, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this MemoryUnsubscribe to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a MemoryUnsubscribeResponse. */
export class MemoryUnsubscribeResponse implements IMemoryUnsubscribeResponse {

    /**
     * Constructs a new MemoryUnsubscribeResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IMemoryUnsubscribeResponse);

    /** MemoryUnsubscribeResponse result. */
    public result?: (IReply|null);

    /** MemoryUnsubscribeResponse ref. */
    public ref: number;

    /**
     * Creates a new MemoryUnsubscribeResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns MemoryUnsubscribeResponse instance
     */
    public static create(properties?: IMemoryUnsubscribeResponse): MemoryUnsubscribeResponse;

    /**
     * Encodes the specified MemoryUnsubscribeResponse message. Does not implicitly {@link MemoryUnsubscribeResponse.verify|verify} messages.
     * @param message MemoryUnsubscribeResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IMemoryUnsubscribeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified MemoryUnsubscribeResponse message, length delimited. Does not implicitly {@link MemoryUnsubscribeResponse.verify|verify} messages.
     * @param message MemoryUnsubscribeResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IMemoryUnsubscribeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a MemoryUnsubscribeResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns MemoryUnsubscribeResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): MemoryUnsubscribeResponse;

    /**
     * Decodes a MemoryUnsubscribeResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns MemoryUnsubscribeResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): MemoryUnsubscribeResponse;

    /**
     * Verifies a MemoryUnsubscribeResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a MemoryUnsubscribeResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns MemoryUnsubscribeResponse
     */
    public static fromObject(object: { [k: string]: any }): MemoryUnsubscribeResponse;

    /**
     * Creates a plain object from a MemoryUnsubscribeResponse message. Also converts values to other types if specified.
     * @param message MemoryUnsubscribeResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: MemoryUnsubscribeResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this MemoryUnsubscribeResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a MemoryUpdate. */
export class MemoryUpdate implements IMemoryUpdate {

    /**
     * Constructs a new MemoryUpdate.
     * @param [properties] Properties to set
     */
    constructor(properties?: IMemoryUpdate);

    /** MemoryUpdate subscriptionRef. */
    public subscriptionRef: number;

    /** MemoryUpdate newData. */
    public newData: Uint8Array;

    /**
     * Creates a new MemoryUpdate instance using the specified properties.
     * @param [properties] Properties to set
     * @returns MemoryUpdate instance
     */
    public static create(properties?: IMemoryUpdate): MemoryUpdate;

    /**
     * Encodes the specified MemoryUpdate message. Does not implicitly {@link MemoryUpdate.verify|verify} messages.
     * @param message MemoryUpdate message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IMemoryUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified MemoryUpdate message, length delimited. Does not implicitly {@link MemoryUpdate.verify|verify} messages.
     * @param message MemoryUpdate message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IMemoryUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a MemoryUpdate message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns MemoryUpdate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): MemoryUpdate;

    /**
     * Decodes a MemoryUpdate message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns MemoryUpdate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): MemoryUpdate;

    /**
     * Verifies a MemoryUpdate message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a MemoryUpdate message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns MemoryUpdate
     */
    public static fromObject(object: { [k: string]: any }): MemoryUpdate;

    /**
     * Creates a plain object from a MemoryUpdate message. Also converts values to other types if specified.
     * @param message MemoryUpdate
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: MemoryUpdate, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this MemoryUpdate to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents an ObjectSubscribe. */
export class ObjectSubscribe implements IObjectSubscribe {

    /**
     * Constructs a new ObjectSubscribe.
     * @param [properties] Properties to set
     */
    constructor(properties?: IObjectSubscribe);

    /** ObjectSubscribe processId. */
    public processId: number;

    /** ObjectSubscribe objectAddress. */
    public objectAddress: (number|Long);

    /** ObjectSubscribe watchStructs. */
    public watchStructs: boolean;

    /**
     * Creates a new ObjectSubscribe instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ObjectSubscribe instance
     */
    public static create(properties?: IObjectSubscribe): ObjectSubscribe;

    /**
     * Encodes the specified ObjectSubscribe message. Does not implicitly {@link ObjectSubscribe.verify|verify} messages.
     * @param message ObjectSubscribe message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IObjectSubscribe, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ObjectSubscribe message, length delimited. Does not implicitly {@link ObjectSubscribe.verify|verify} messages.
     * @param message ObjectSubscribe message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IObjectSubscribe, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an ObjectSubscribe message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ObjectSubscribe
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ObjectSubscribe;

    /**
     * Decodes an ObjectSubscribe message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ObjectSubscribe
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ObjectSubscribe;

    /**
     * Verifies an ObjectSubscribe message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an ObjectSubscribe message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ObjectSubscribe
     */
    public static fromObject(object: { [k: string]: any }): ObjectSubscribe;

    /**
     * Creates a plain object from an ObjectSubscribe message. Also converts values to other types if specified.
     * @param message ObjectSubscribe
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ObjectSubscribe, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ObjectSubscribe to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents an ObjectSubscribeResponse. */
export class ObjectSubscribeResponse implements IObjectSubscribeResponse {

    /**
     * Constructs a new ObjectSubscribeResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IObjectSubscribeResponse);

    /** ObjectSubscribeResponse result. */
    public result?: (IReply|null);

    /** ObjectSubscribeResponse ref. */
    public ref: number;

    /**
     * Creates a new ObjectSubscribeResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ObjectSubscribeResponse instance
     */
    public static create(properties?: IObjectSubscribeResponse): ObjectSubscribeResponse;

    /**
     * Encodes the specified ObjectSubscribeResponse message. Does not implicitly {@link ObjectSubscribeResponse.verify|verify} messages.
     * @param message ObjectSubscribeResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IObjectSubscribeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ObjectSubscribeResponse message, length delimited. Does not implicitly {@link ObjectSubscribeResponse.verify|verify} messages.
     * @param message ObjectSubscribeResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IObjectSubscribeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an ObjectSubscribeResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ObjectSubscribeResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ObjectSubscribeResponse;

    /**
     * Decodes an ObjectSubscribeResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ObjectSubscribeResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ObjectSubscribeResponse;

    /**
     * Verifies an ObjectSubscribeResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an ObjectSubscribeResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ObjectSubscribeResponse
     */
    public static fromObject(object: { [k: string]: any }): ObjectSubscribeResponse;

    /**
     * Creates a plain object from an ObjectSubscribeResponse message. Also converts values to other types if specified.
     * @param message ObjectSubscribeResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ObjectSubscribeResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ObjectSubscribeResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents an ObjectUnsubscribe. */
export class ObjectUnsubscribe implements IObjectUnsubscribe {

    /**
     * Constructs a new ObjectUnsubscribe.
     * @param [properties] Properties to set
     */
    constructor(properties?: IObjectUnsubscribe);

    /** ObjectUnsubscribe ref. */
    public ref: number;

    /**
     * Creates a new ObjectUnsubscribe instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ObjectUnsubscribe instance
     */
    public static create(properties?: IObjectUnsubscribe): ObjectUnsubscribe;

    /**
     * Encodes the specified ObjectUnsubscribe message. Does not implicitly {@link ObjectUnsubscribe.verify|verify} messages.
     * @param message ObjectUnsubscribe message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IObjectUnsubscribe, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ObjectUnsubscribe message, length delimited. Does not implicitly {@link ObjectUnsubscribe.verify|verify} messages.
     * @param message ObjectUnsubscribe message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IObjectUnsubscribe, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an ObjectUnsubscribe message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ObjectUnsubscribe
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ObjectUnsubscribe;

    /**
     * Decodes an ObjectUnsubscribe message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ObjectUnsubscribe
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ObjectUnsubscribe;

    /**
     * Verifies an ObjectUnsubscribe message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an ObjectUnsubscribe message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ObjectUnsubscribe
     */
    public static fromObject(object: { [k: string]: any }): ObjectUnsubscribe;

    /**
     * Creates a plain object from an ObjectUnsubscribe message. Also converts values to other types if specified.
     * @param message ObjectUnsubscribe
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ObjectUnsubscribe, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ObjectUnsubscribe to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents an ObjectUnsubscribeResponse. */
export class ObjectUnsubscribeResponse implements IObjectUnsubscribeResponse {

    /**
     * Constructs a new ObjectUnsubscribeResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IObjectUnsubscribeResponse);

    /** ObjectUnsubscribeResponse result. */
    public result?: (IReply|null);

    /** ObjectUnsubscribeResponse ref. */
    public ref: number;

    /**
     * Creates a new ObjectUnsubscribeResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ObjectUnsubscribeResponse instance
     */
    public static create(properties?: IObjectUnsubscribeResponse): ObjectUnsubscribeResponse;

    /**
     * Encodes the specified ObjectUnsubscribeResponse message. Does not implicitly {@link ObjectUnsubscribeResponse.verify|verify} messages.
     * @param message ObjectUnsubscribeResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IObjectUnsubscribeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ObjectUnsubscribeResponse message, length delimited. Does not implicitly {@link ObjectUnsubscribeResponse.verify|verify} messages.
     * @param message ObjectUnsubscribeResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IObjectUnsubscribeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an ObjectUnsubscribeResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ObjectUnsubscribeResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ObjectUnsubscribeResponse;

    /**
     * Decodes an ObjectUnsubscribeResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ObjectUnsubscribeResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ObjectUnsubscribeResponse;

    /**
     * Verifies an ObjectUnsubscribeResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an ObjectUnsubscribeResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ObjectUnsubscribeResponse
     */
    public static fromObject(object: { [k: string]: any }): ObjectUnsubscribeResponse;

    /**
     * Creates a plain object from an ObjectUnsubscribeResponse message. Also converts values to other types if specified.
     * @param message ObjectUnsubscribeResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ObjectUnsubscribeResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ObjectUnsubscribeResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}
