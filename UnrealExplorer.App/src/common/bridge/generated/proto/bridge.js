/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.RequestEngineInfo = (function() {

    /**
     * Properties of a RequestEngineInfo.
     * @exports IRequestEngineInfo
     * @interface IRequestEngineInfo
     * @property {number|null} [processId] RequestEngineInfo processId
     */

    /**
     * Constructs a new RequestEngineInfo.
     * @exports RequestEngineInfo
     * @classdesc Represents a RequestEngineInfo.
     * @implements IRequestEngineInfo
     * @constructor
     * @param {IRequestEngineInfo=} [properties] Properties to set
     */
    function RequestEngineInfo(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * RequestEngineInfo processId.
     * @member {number} processId
     * @memberof RequestEngineInfo
     * @instance
     */
    RequestEngineInfo.prototype.processId = 0;

    /**
     * Creates a new RequestEngineInfo instance using the specified properties.
     * @function create
     * @memberof RequestEngineInfo
     * @static
     * @param {IRequestEngineInfo=} [properties] Properties to set
     * @returns {RequestEngineInfo} RequestEngineInfo instance
     */
    RequestEngineInfo.create = function create(properties) {
        return new RequestEngineInfo(properties);
    };

    /**
     * Encodes the specified RequestEngineInfo message. Does not implicitly {@link RequestEngineInfo.verify|verify} messages.
     * @function encode
     * @memberof RequestEngineInfo
     * @static
     * @param {IRequestEngineInfo} message RequestEngineInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RequestEngineInfo.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.processId != null && Object.hasOwnProperty.call(message, "processId"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.processId);
        return writer;
    };

    /**
     * Encodes the specified RequestEngineInfo message, length delimited. Does not implicitly {@link RequestEngineInfo.verify|verify} messages.
     * @function encodeDelimited
     * @memberof RequestEngineInfo
     * @static
     * @param {IRequestEngineInfo} message RequestEngineInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RequestEngineInfo.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a RequestEngineInfo message from the specified reader or buffer.
     * @function decode
     * @memberof RequestEngineInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {RequestEngineInfo} RequestEngineInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RequestEngineInfo.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.RequestEngineInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.processId = reader.uint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a RequestEngineInfo message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof RequestEngineInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {RequestEngineInfo} RequestEngineInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RequestEngineInfo.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a RequestEngineInfo message.
     * @function verify
     * @memberof RequestEngineInfo
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    RequestEngineInfo.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.processId != null && message.hasOwnProperty("processId"))
            if (!$util.isInteger(message.processId))
                return "processId: integer expected";
        return null;
    };

    /**
     * Creates a RequestEngineInfo message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof RequestEngineInfo
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {RequestEngineInfo} RequestEngineInfo
     */
    RequestEngineInfo.fromObject = function fromObject(object) {
        if (object instanceof $root.RequestEngineInfo)
            return object;
        var message = new $root.RequestEngineInfo();
        if (object.processId != null)
            message.processId = object.processId >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a RequestEngineInfo message. Also converts values to other types if specified.
     * @function toObject
     * @memberof RequestEngineInfo
     * @static
     * @param {RequestEngineInfo} message RequestEngineInfo
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    RequestEngineInfo.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.processId = 0;
        if (message.processId != null && message.hasOwnProperty("processId"))
            object.processId = message.processId;
        return object;
    };

    /**
     * Converts this RequestEngineInfo to JSON.
     * @function toJSON
     * @memberof RequestEngineInfo
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    RequestEngineInfo.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return RequestEngineInfo;
})();

$root.EngineInfo = (function() {

    /**
     * Properties of an EngineInfo.
     * @exports IEngineInfo
     * @interface IEngineInfo
     * @property {number|null} [processId] EngineInfo processId
     */

    /**
     * Constructs a new EngineInfo.
     * @exports EngineInfo
     * @classdesc Represents an EngineInfo.
     * @implements IEngineInfo
     * @constructor
     * @param {IEngineInfo=} [properties] Properties to set
     */
    function EngineInfo(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * EngineInfo processId.
     * @member {number} processId
     * @memberof EngineInfo
     * @instance
     */
    EngineInfo.prototype.processId = 0;

    /**
     * Creates a new EngineInfo instance using the specified properties.
     * @function create
     * @memberof EngineInfo
     * @static
     * @param {IEngineInfo=} [properties] Properties to set
     * @returns {EngineInfo} EngineInfo instance
     */
    EngineInfo.create = function create(properties) {
        return new EngineInfo(properties);
    };

    /**
     * Encodes the specified EngineInfo message. Does not implicitly {@link EngineInfo.verify|verify} messages.
     * @function encode
     * @memberof EngineInfo
     * @static
     * @param {IEngineInfo} message EngineInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EngineInfo.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.processId != null && Object.hasOwnProperty.call(message, "processId"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.processId);
        return writer;
    };

    /**
     * Encodes the specified EngineInfo message, length delimited. Does not implicitly {@link EngineInfo.verify|verify} messages.
     * @function encodeDelimited
     * @memberof EngineInfo
     * @static
     * @param {IEngineInfo} message EngineInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EngineInfo.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an EngineInfo message from the specified reader or buffer.
     * @function decode
     * @memberof EngineInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {EngineInfo} EngineInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EngineInfo.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EngineInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.processId = reader.uint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an EngineInfo message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof EngineInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {EngineInfo} EngineInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EngineInfo.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an EngineInfo message.
     * @function verify
     * @memberof EngineInfo
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    EngineInfo.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.processId != null && message.hasOwnProperty("processId"))
            if (!$util.isInteger(message.processId))
                return "processId: integer expected";
        return null;
    };

    /**
     * Creates an EngineInfo message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof EngineInfo
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {EngineInfo} EngineInfo
     */
    EngineInfo.fromObject = function fromObject(object) {
        if (object instanceof $root.EngineInfo)
            return object;
        var message = new $root.EngineInfo();
        if (object.processId != null)
            message.processId = object.processId >>> 0;
        return message;
    };

    /**
     * Creates a plain object from an EngineInfo message. Also converts values to other types if specified.
     * @function toObject
     * @memberof EngineInfo
     * @static
     * @param {EngineInfo} message EngineInfo
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    EngineInfo.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.processId = 0;
        if (message.processId != null && message.hasOwnProperty("processId"))
            object.processId = message.processId;
        return object;
    };

    /**
     * Converts this EngineInfo to JSON.
     * @function toJSON
     * @memberof EngineInfo
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    EngineInfo.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return EngineInfo;
})();

/**
 * ErrorCode enum.
 * @exports ErrorCode
 * @enum {number}
 * @property {number} Success=0 Success value
 * @property {number} Failed=1 Failed value
 * @property {number} UnknownError=2 UnknownError value
 * @property {number} AccessDenied=3 AccessDenied value
 * @property {number} ProcessNotOpen=10 ProcessNotOpen value
 * @property {number} ProcessAlreadyOpen=11 ProcessAlreadyOpen value
 * @property {number} ReadFailed=20 ReadFailed value
 * @property {number} WriteFailed=21 WriteFailed value
 */
$root.ErrorCode = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "Success"] = 0;
    values[valuesById[1] = "Failed"] = 1;
    values[valuesById[2] = "UnknownError"] = 2;
    values[valuesById[3] = "AccessDenied"] = 3;
    values[valuesById[10] = "ProcessNotOpen"] = 10;
    values[valuesById[11] = "ProcessAlreadyOpen"] = 11;
    values[valuesById[20] = "ReadFailed"] = 20;
    values[valuesById[21] = "WriteFailed"] = 21;
    return values;
})();

$root.Reply = (function() {

    /**
     * Properties of a Reply.
     * @exports IReply
     * @interface IReply
     * @property {ErrorCode|null} [status] Reply status
     * @property {string|null} [message] Reply message
     */

    /**
     * Constructs a new Reply.
     * @exports Reply
     * @classdesc Represents a Reply.
     * @implements IReply
     * @constructor
     * @param {IReply=} [properties] Properties to set
     */
    function Reply(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Reply status.
     * @member {ErrorCode} status
     * @memberof Reply
     * @instance
     */
    Reply.prototype.status = 0;

    /**
     * Reply message.
     * @member {string} message
     * @memberof Reply
     * @instance
     */
    Reply.prototype.message = "";

    /**
     * Creates a new Reply instance using the specified properties.
     * @function create
     * @memberof Reply
     * @static
     * @param {IReply=} [properties] Properties to set
     * @returns {Reply} Reply instance
     */
    Reply.create = function create(properties) {
        return new Reply(properties);
    };

    /**
     * Encodes the specified Reply message. Does not implicitly {@link Reply.verify|verify} messages.
     * @function encode
     * @memberof Reply
     * @static
     * @param {IReply} message Reply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Reply.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.status != null && Object.hasOwnProperty.call(message, "status"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.status);
        if (message.message != null && Object.hasOwnProperty.call(message, "message"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.message);
        return writer;
    };

    /**
     * Encodes the specified Reply message, length delimited. Does not implicitly {@link Reply.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Reply
     * @static
     * @param {IReply} message Reply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Reply.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Reply message from the specified reader or buffer.
     * @function decode
     * @memberof Reply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Reply} Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Reply.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Reply();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.status = reader.int32();
                break;
            case 2:
                message.message = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Reply message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Reply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Reply} Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Reply.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Reply message.
     * @function verify
     * @memberof Reply
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Reply.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.status != null && message.hasOwnProperty("status"))
            switch (message.status) {
            default:
                return "status: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 10:
            case 11:
            case 20:
            case 21:
                break;
            }
        if (message.message != null && message.hasOwnProperty("message"))
            if (!$util.isString(message.message))
                return "message: string expected";
        return null;
    };

    /**
     * Creates a Reply message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Reply
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Reply} Reply
     */
    Reply.fromObject = function fromObject(object) {
        if (object instanceof $root.Reply)
            return object;
        var message = new $root.Reply();
        switch (object.status) {
        case "Success":
        case 0:
            message.status = 0;
            break;
        case "Failed":
        case 1:
            message.status = 1;
            break;
        case "UnknownError":
        case 2:
            message.status = 2;
            break;
        case "AccessDenied":
        case 3:
            message.status = 3;
            break;
        case "ProcessNotOpen":
        case 10:
            message.status = 10;
            break;
        case "ProcessAlreadyOpen":
        case 11:
            message.status = 11;
            break;
        case "ReadFailed":
        case 20:
            message.status = 20;
            break;
        case "WriteFailed":
        case 21:
            message.status = 21;
            break;
        }
        if (object.message != null)
            message.message = String(object.message);
        return message;
    };

    /**
     * Creates a plain object from a Reply message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Reply
     * @static
     * @param {Reply} message Reply
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Reply.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.status = options.enums === String ? "Success" : 0;
            object.message = "";
        }
        if (message.status != null && message.hasOwnProperty("status"))
            object.status = options.enums === String ? $root.ErrorCode[message.status] : message.status;
        if (message.message != null && message.hasOwnProperty("message"))
            object.message = message.message;
        return object;
    };

    /**
     * Converts this Reply to JSON.
     * @function toJSON
     * @memberof Reply
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Reply.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Reply;
})();

$root.ProcessInfo = (function() {

    /**
     * Properties of a ProcessInfo.
     * @exports IProcessInfo
     * @interface IProcessInfo
     * @property {number|null} [processId] ProcessInfo processId
     * @property {string|null} [name] ProcessInfo name
     * @property {string|null} [executablePath] ProcessInfo executablePath
     * @property {Uint8Array|null} [iconPng] ProcessInfo iconPng
     * @property {ProcessInfo.CpuType|null} [processArch] ProcessInfo processArch
     */

    /**
     * Constructs a new ProcessInfo.
     * @exports ProcessInfo
     * @classdesc Represents a ProcessInfo.
     * @implements IProcessInfo
     * @constructor
     * @param {IProcessInfo=} [properties] Properties to set
     */
    function ProcessInfo(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ProcessInfo processId.
     * @member {number} processId
     * @memberof ProcessInfo
     * @instance
     */
    ProcessInfo.prototype.processId = 0;

    /**
     * ProcessInfo name.
     * @member {string} name
     * @memberof ProcessInfo
     * @instance
     */
    ProcessInfo.prototype.name = "";

    /**
     * ProcessInfo executablePath.
     * @member {string} executablePath
     * @memberof ProcessInfo
     * @instance
     */
    ProcessInfo.prototype.executablePath = "";

    /**
     * ProcessInfo iconPng.
     * @member {Uint8Array} iconPng
     * @memberof ProcessInfo
     * @instance
     */
    ProcessInfo.prototype.iconPng = $util.newBuffer([]);

    /**
     * ProcessInfo processArch.
     * @member {ProcessInfo.CpuType} processArch
     * @memberof ProcessInfo
     * @instance
     */
    ProcessInfo.prototype.processArch = 0;

    /**
     * Creates a new ProcessInfo instance using the specified properties.
     * @function create
     * @memberof ProcessInfo
     * @static
     * @param {IProcessInfo=} [properties] Properties to set
     * @returns {ProcessInfo} ProcessInfo instance
     */
    ProcessInfo.create = function create(properties) {
        return new ProcessInfo(properties);
    };

    /**
     * Encodes the specified ProcessInfo message. Does not implicitly {@link ProcessInfo.verify|verify} messages.
     * @function encode
     * @memberof ProcessInfo
     * @static
     * @param {IProcessInfo} message ProcessInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ProcessInfo.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.processId != null && Object.hasOwnProperty.call(message, "processId"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.processId);
        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
        if (message.executablePath != null && Object.hasOwnProperty.call(message, "executablePath"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.executablePath);
        if (message.iconPng != null && Object.hasOwnProperty.call(message, "iconPng"))
            writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.iconPng);
        if (message.processArch != null && Object.hasOwnProperty.call(message, "processArch"))
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.processArch);
        return writer;
    };

    /**
     * Encodes the specified ProcessInfo message, length delimited. Does not implicitly {@link ProcessInfo.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ProcessInfo
     * @static
     * @param {IProcessInfo} message ProcessInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ProcessInfo.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ProcessInfo message from the specified reader or buffer.
     * @function decode
     * @memberof ProcessInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ProcessInfo} ProcessInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ProcessInfo.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ProcessInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.processId = reader.uint32();
                break;
            case 2:
                message.name = reader.string();
                break;
            case 3:
                message.executablePath = reader.string();
                break;
            case 4:
                message.iconPng = reader.bytes();
                break;
            case 5:
                message.processArch = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ProcessInfo message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ProcessInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ProcessInfo} ProcessInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ProcessInfo.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ProcessInfo message.
     * @function verify
     * @memberof ProcessInfo
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ProcessInfo.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.processId != null && message.hasOwnProperty("processId"))
            if (!$util.isInteger(message.processId))
                return "processId: integer expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        if (message.executablePath != null && message.hasOwnProperty("executablePath"))
            if (!$util.isString(message.executablePath))
                return "executablePath: string expected";
        if (message.iconPng != null && message.hasOwnProperty("iconPng"))
            if (!(message.iconPng && typeof message.iconPng.length === "number" || $util.isString(message.iconPng)))
                return "iconPng: buffer expected";
        if (message.processArch != null && message.hasOwnProperty("processArch"))
            switch (message.processArch) {
            default:
                return "processArch: enum value expected";
            case 0:
            case 1:
                break;
            }
        return null;
    };

    /**
     * Creates a ProcessInfo message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ProcessInfo
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ProcessInfo} ProcessInfo
     */
    ProcessInfo.fromObject = function fromObject(object) {
        if (object instanceof $root.ProcessInfo)
            return object;
        var message = new $root.ProcessInfo();
        if (object.processId != null)
            message.processId = object.processId >>> 0;
        if (object.name != null)
            message.name = String(object.name);
        if (object.executablePath != null)
            message.executablePath = String(object.executablePath);
        if (object.iconPng != null)
            if (typeof object.iconPng === "string")
                $util.base64.decode(object.iconPng, message.iconPng = $util.newBuffer($util.base64.length(object.iconPng)), 0);
            else if (object.iconPng.length)
                message.iconPng = object.iconPng;
        switch (object.processArch) {
        case "X64":
        case 0:
            message.processArch = 0;
            break;
        case "X86":
        case 1:
            message.processArch = 1;
            break;
        }
        return message;
    };

    /**
     * Creates a plain object from a ProcessInfo message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ProcessInfo
     * @static
     * @param {ProcessInfo} message ProcessInfo
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ProcessInfo.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.processId = 0;
            object.name = "";
            object.executablePath = "";
            if (options.bytes === String)
                object.iconPng = "";
            else {
                object.iconPng = [];
                if (options.bytes !== Array)
                    object.iconPng = $util.newBuffer(object.iconPng);
            }
            object.processArch = options.enums === String ? "X64" : 0;
        }
        if (message.processId != null && message.hasOwnProperty("processId"))
            object.processId = message.processId;
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        if (message.executablePath != null && message.hasOwnProperty("executablePath"))
            object.executablePath = message.executablePath;
        if (message.iconPng != null && message.hasOwnProperty("iconPng"))
            object.iconPng = options.bytes === String ? $util.base64.encode(message.iconPng, 0, message.iconPng.length) : options.bytes === Array ? Array.prototype.slice.call(message.iconPng) : message.iconPng;
        if (message.processArch != null && message.hasOwnProperty("processArch"))
            object.processArch = options.enums === String ? $root.ProcessInfo.CpuType[message.processArch] : message.processArch;
        return object;
    };

    /**
     * Converts this ProcessInfo to JSON.
     * @function toJSON
     * @memberof ProcessInfo
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ProcessInfo.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * CpuType enum.
     * @name ProcessInfo.CpuType
     * @enum {number}
     * @property {number} X64=0 X64 value
     * @property {number} X86=1 X86 value
     */
    ProcessInfo.CpuType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "X64"] = 0;
        values[valuesById[1] = "X86"] = 1;
        return values;
    })();

    return ProcessInfo;
})();

$root.ProcessList = (function() {

    /**
     * Properties of a ProcessList.
     * @exports IProcessList
     * @interface IProcessList
     * @property {Array.<IProcessInfo>|null} [processes] ProcessList processes
     */

    /**
     * Constructs a new ProcessList.
     * @exports ProcessList
     * @classdesc Represents a ProcessList.
     * @implements IProcessList
     * @constructor
     * @param {IProcessList=} [properties] Properties to set
     */
    function ProcessList(properties) {
        this.processes = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ProcessList processes.
     * @member {Array.<IProcessInfo>} processes
     * @memberof ProcessList
     * @instance
     */
    ProcessList.prototype.processes = $util.emptyArray;

    /**
     * Creates a new ProcessList instance using the specified properties.
     * @function create
     * @memberof ProcessList
     * @static
     * @param {IProcessList=} [properties] Properties to set
     * @returns {ProcessList} ProcessList instance
     */
    ProcessList.create = function create(properties) {
        return new ProcessList(properties);
    };

    /**
     * Encodes the specified ProcessList message. Does not implicitly {@link ProcessList.verify|verify} messages.
     * @function encode
     * @memberof ProcessList
     * @static
     * @param {IProcessList} message ProcessList message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ProcessList.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.processes != null && message.processes.length)
            for (var i = 0; i < message.processes.length; ++i)
                $root.ProcessInfo.encode(message.processes[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified ProcessList message, length delimited. Does not implicitly {@link ProcessList.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ProcessList
     * @static
     * @param {IProcessList} message ProcessList message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ProcessList.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ProcessList message from the specified reader or buffer.
     * @function decode
     * @memberof ProcessList
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ProcessList} ProcessList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ProcessList.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ProcessList();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.processes && message.processes.length))
                    message.processes = [];
                message.processes.push($root.ProcessInfo.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ProcessList message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ProcessList
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ProcessList} ProcessList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ProcessList.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ProcessList message.
     * @function verify
     * @memberof ProcessList
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ProcessList.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.processes != null && message.hasOwnProperty("processes")) {
            if (!Array.isArray(message.processes))
                return "processes: array expected";
            for (var i = 0; i < message.processes.length; ++i) {
                var error = $root.ProcessInfo.verify(message.processes[i]);
                if (error)
                    return "processes." + error;
            }
        }
        return null;
    };

    /**
     * Creates a ProcessList message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ProcessList
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ProcessList} ProcessList
     */
    ProcessList.fromObject = function fromObject(object) {
        if (object instanceof $root.ProcessList)
            return object;
        var message = new $root.ProcessList();
        if (object.processes) {
            if (!Array.isArray(object.processes))
                throw TypeError(".ProcessList.processes: array expected");
            message.processes = [];
            for (var i = 0; i < object.processes.length; ++i) {
                if (typeof object.processes[i] !== "object")
                    throw TypeError(".ProcessList.processes: object expected");
                message.processes[i] = $root.ProcessInfo.fromObject(object.processes[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a ProcessList message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ProcessList
     * @static
     * @param {ProcessList} message ProcessList
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ProcessList.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.processes = [];
        if (message.processes && message.processes.length) {
            object.processes = [];
            for (var j = 0; j < message.processes.length; ++j)
                object.processes[j] = $root.ProcessInfo.toObject(message.processes[j], options);
        }
        return object;
    };

    /**
     * Converts this ProcessList to JSON.
     * @function toJSON
     * @memberof ProcessList
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ProcessList.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ProcessList;
})();

$root.AppInfo = (function() {

    /**
     * Properties of an AppInfo.
     * @exports IAppInfo
     * @interface IAppInfo
     * @property {IProcessInfo|null} [process] AppInfo process
     * @property {string|null} [appName] AppInfo appName
     */

    /**
     * Constructs a new AppInfo.
     * @exports AppInfo
     * @classdesc Represents an AppInfo.
     * @implements IAppInfo
     * @constructor
     * @param {IAppInfo=} [properties] Properties to set
     */
    function AppInfo(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * AppInfo process.
     * @member {IProcessInfo|null|undefined} process
     * @memberof AppInfo
     * @instance
     */
    AppInfo.prototype.process = null;

    /**
     * AppInfo appName.
     * @member {string} appName
     * @memberof AppInfo
     * @instance
     */
    AppInfo.prototype.appName = "";

    /**
     * Creates a new AppInfo instance using the specified properties.
     * @function create
     * @memberof AppInfo
     * @static
     * @param {IAppInfo=} [properties] Properties to set
     * @returns {AppInfo} AppInfo instance
     */
    AppInfo.create = function create(properties) {
        return new AppInfo(properties);
    };

    /**
     * Encodes the specified AppInfo message. Does not implicitly {@link AppInfo.verify|verify} messages.
     * @function encode
     * @memberof AppInfo
     * @static
     * @param {IAppInfo} message AppInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AppInfo.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.process != null && Object.hasOwnProperty.call(message, "process"))
            $root.ProcessInfo.encode(message.process, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.appName != null && Object.hasOwnProperty.call(message, "appName"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.appName);
        return writer;
    };

    /**
     * Encodes the specified AppInfo message, length delimited. Does not implicitly {@link AppInfo.verify|verify} messages.
     * @function encodeDelimited
     * @memberof AppInfo
     * @static
     * @param {IAppInfo} message AppInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AppInfo.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an AppInfo message from the specified reader or buffer.
     * @function decode
     * @memberof AppInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {AppInfo} AppInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AppInfo.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AppInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.process = $root.ProcessInfo.decode(reader, reader.uint32());
                break;
            case 2:
                message.appName = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an AppInfo message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof AppInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {AppInfo} AppInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AppInfo.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an AppInfo message.
     * @function verify
     * @memberof AppInfo
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    AppInfo.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.process != null && message.hasOwnProperty("process")) {
            var error = $root.ProcessInfo.verify(message.process);
            if (error)
                return "process." + error;
        }
        if (message.appName != null && message.hasOwnProperty("appName"))
            if (!$util.isString(message.appName))
                return "appName: string expected";
        return null;
    };

    /**
     * Creates an AppInfo message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof AppInfo
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {AppInfo} AppInfo
     */
    AppInfo.fromObject = function fromObject(object) {
        if (object instanceof $root.AppInfo)
            return object;
        var message = new $root.AppInfo();
        if (object.process != null) {
            if (typeof object.process !== "object")
                throw TypeError(".AppInfo.process: object expected");
            message.process = $root.ProcessInfo.fromObject(object.process);
        }
        if (object.appName != null)
            message.appName = String(object.appName);
        return message;
    };

    /**
     * Creates a plain object from an AppInfo message. Also converts values to other types if specified.
     * @function toObject
     * @memberof AppInfo
     * @static
     * @param {AppInfo} message AppInfo
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    AppInfo.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.process = null;
            object.appName = "";
        }
        if (message.process != null && message.hasOwnProperty("process"))
            object.process = $root.ProcessInfo.toObject(message.process, options);
        if (message.appName != null && message.hasOwnProperty("appName"))
            object.appName = message.appName;
        return object;
    };

    /**
     * Converts this AppInfo to JSON.
     * @function toJSON
     * @memberof AppInfo
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    AppInfo.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return AppInfo;
})();

$root.AppList = (function() {

    /**
     * Properties of an AppList.
     * @exports IAppList
     * @interface IAppList
     * @property {Array.<IAppInfo>|null} [apps] AppList apps
     */

    /**
     * Constructs a new AppList.
     * @exports AppList
     * @classdesc Represents an AppList.
     * @implements IAppList
     * @constructor
     * @param {IAppList=} [properties] Properties to set
     */
    function AppList(properties) {
        this.apps = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * AppList apps.
     * @member {Array.<IAppInfo>} apps
     * @memberof AppList
     * @instance
     */
    AppList.prototype.apps = $util.emptyArray;

    /**
     * Creates a new AppList instance using the specified properties.
     * @function create
     * @memberof AppList
     * @static
     * @param {IAppList=} [properties] Properties to set
     * @returns {AppList} AppList instance
     */
    AppList.create = function create(properties) {
        return new AppList(properties);
    };

    /**
     * Encodes the specified AppList message. Does not implicitly {@link AppList.verify|verify} messages.
     * @function encode
     * @memberof AppList
     * @static
     * @param {IAppList} message AppList message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AppList.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.apps != null && message.apps.length)
            for (var i = 0; i < message.apps.length; ++i)
                $root.AppInfo.encode(message.apps[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified AppList message, length delimited. Does not implicitly {@link AppList.verify|verify} messages.
     * @function encodeDelimited
     * @memberof AppList
     * @static
     * @param {IAppList} message AppList message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AppList.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an AppList message from the specified reader or buffer.
     * @function decode
     * @memberof AppList
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {AppList} AppList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AppList.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AppList();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.apps && message.apps.length))
                    message.apps = [];
                message.apps.push($root.AppInfo.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an AppList message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof AppList
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {AppList} AppList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AppList.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an AppList message.
     * @function verify
     * @memberof AppList
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    AppList.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.apps != null && message.hasOwnProperty("apps")) {
            if (!Array.isArray(message.apps))
                return "apps: array expected";
            for (var i = 0; i < message.apps.length; ++i) {
                var error = $root.AppInfo.verify(message.apps[i]);
                if (error)
                    return "apps." + error;
            }
        }
        return null;
    };

    /**
     * Creates an AppList message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof AppList
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {AppList} AppList
     */
    AppList.fromObject = function fromObject(object) {
        if (object instanceof $root.AppList)
            return object;
        var message = new $root.AppList();
        if (object.apps) {
            if (!Array.isArray(object.apps))
                throw TypeError(".AppList.apps: array expected");
            message.apps = [];
            for (var i = 0; i < object.apps.length; ++i) {
                if (typeof object.apps[i] !== "object")
                    throw TypeError(".AppList.apps: object expected");
                message.apps[i] = $root.AppInfo.fromObject(object.apps[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from an AppList message. Also converts values to other types if specified.
     * @function toObject
     * @memberof AppList
     * @static
     * @param {AppList} message AppList
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    AppList.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.apps = [];
        if (message.apps && message.apps.length) {
            object.apps = [];
            for (var j = 0; j < message.apps.length; ++j)
                object.apps[j] = $root.AppInfo.toObject(message.apps[j], options);
        }
        return object;
    };

    /**
     * Converts this AppList to JSON.
     * @function toJSON
     * @memberof AppList
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    AppList.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return AppList;
})();

$root.OpenProcess = (function() {

    /**
     * Properties of an OpenProcess.
     * @exports IOpenProcess
     * @interface IOpenProcess
     * @property {number|null} [processId] OpenProcess processId
     */

    /**
     * Constructs a new OpenProcess.
     * @exports OpenProcess
     * @classdesc Represents an OpenProcess.
     * @implements IOpenProcess
     * @constructor
     * @param {IOpenProcess=} [properties] Properties to set
     */
    function OpenProcess(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * OpenProcess processId.
     * @member {number} processId
     * @memberof OpenProcess
     * @instance
     */
    OpenProcess.prototype.processId = 0;

    /**
     * Creates a new OpenProcess instance using the specified properties.
     * @function create
     * @memberof OpenProcess
     * @static
     * @param {IOpenProcess=} [properties] Properties to set
     * @returns {OpenProcess} OpenProcess instance
     */
    OpenProcess.create = function create(properties) {
        return new OpenProcess(properties);
    };

    /**
     * Encodes the specified OpenProcess message. Does not implicitly {@link OpenProcess.verify|verify} messages.
     * @function encode
     * @memberof OpenProcess
     * @static
     * @param {IOpenProcess} message OpenProcess message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    OpenProcess.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.processId != null && Object.hasOwnProperty.call(message, "processId"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.processId);
        return writer;
    };

    /**
     * Encodes the specified OpenProcess message, length delimited. Does not implicitly {@link OpenProcess.verify|verify} messages.
     * @function encodeDelimited
     * @memberof OpenProcess
     * @static
     * @param {IOpenProcess} message OpenProcess message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    OpenProcess.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an OpenProcess message from the specified reader or buffer.
     * @function decode
     * @memberof OpenProcess
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {OpenProcess} OpenProcess
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    OpenProcess.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.OpenProcess();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.processId = reader.uint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an OpenProcess message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof OpenProcess
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {OpenProcess} OpenProcess
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    OpenProcess.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an OpenProcess message.
     * @function verify
     * @memberof OpenProcess
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    OpenProcess.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.processId != null && message.hasOwnProperty("processId"))
            if (!$util.isInteger(message.processId))
                return "processId: integer expected";
        return null;
    };

    /**
     * Creates an OpenProcess message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof OpenProcess
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {OpenProcess} OpenProcess
     */
    OpenProcess.fromObject = function fromObject(object) {
        if (object instanceof $root.OpenProcess)
            return object;
        var message = new $root.OpenProcess();
        if (object.processId != null)
            message.processId = object.processId >>> 0;
        return message;
    };

    /**
     * Creates a plain object from an OpenProcess message. Also converts values to other types if specified.
     * @function toObject
     * @memberof OpenProcess
     * @static
     * @param {OpenProcess} message OpenProcess
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    OpenProcess.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.processId = 0;
        if (message.processId != null && message.hasOwnProperty("processId"))
            object.processId = message.processId;
        return object;
    };

    /**
     * Converts this OpenProcess to JSON.
     * @function toJSON
     * @memberof OpenProcess
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    OpenProcess.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return OpenProcess;
})();

$root.OpenProcessResponse = (function() {

    /**
     * Properties of an OpenProcessResponse.
     * @exports IOpenProcessResponse
     * @interface IOpenProcessResponse
     * @property {IReply|null} [result] OpenProcessResponse result
     * @property {number|null} [processId] OpenProcessResponse processId
     */

    /**
     * Constructs a new OpenProcessResponse.
     * @exports OpenProcessResponse
     * @classdesc Represents an OpenProcessResponse.
     * @implements IOpenProcessResponse
     * @constructor
     * @param {IOpenProcessResponse=} [properties] Properties to set
     */
    function OpenProcessResponse(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * OpenProcessResponse result.
     * @member {IReply|null|undefined} result
     * @memberof OpenProcessResponse
     * @instance
     */
    OpenProcessResponse.prototype.result = null;

    /**
     * OpenProcessResponse processId.
     * @member {number} processId
     * @memberof OpenProcessResponse
     * @instance
     */
    OpenProcessResponse.prototype.processId = 0;

    /**
     * Creates a new OpenProcessResponse instance using the specified properties.
     * @function create
     * @memberof OpenProcessResponse
     * @static
     * @param {IOpenProcessResponse=} [properties] Properties to set
     * @returns {OpenProcessResponse} OpenProcessResponse instance
     */
    OpenProcessResponse.create = function create(properties) {
        return new OpenProcessResponse(properties);
    };

    /**
     * Encodes the specified OpenProcessResponse message. Does not implicitly {@link OpenProcessResponse.verify|verify} messages.
     * @function encode
     * @memberof OpenProcessResponse
     * @static
     * @param {IOpenProcessResponse} message OpenProcessResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    OpenProcessResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.result != null && Object.hasOwnProperty.call(message, "result"))
            $root.Reply.encode(message.result, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.processId != null && Object.hasOwnProperty.call(message, "processId"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.processId);
        return writer;
    };

    /**
     * Encodes the specified OpenProcessResponse message, length delimited. Does not implicitly {@link OpenProcessResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof OpenProcessResponse
     * @static
     * @param {IOpenProcessResponse} message OpenProcessResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    OpenProcessResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an OpenProcessResponse message from the specified reader or buffer.
     * @function decode
     * @memberof OpenProcessResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {OpenProcessResponse} OpenProcessResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    OpenProcessResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.OpenProcessResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.result = $root.Reply.decode(reader, reader.uint32());
                break;
            case 2:
                message.processId = reader.uint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an OpenProcessResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof OpenProcessResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {OpenProcessResponse} OpenProcessResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    OpenProcessResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an OpenProcessResponse message.
     * @function verify
     * @memberof OpenProcessResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    OpenProcessResponse.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.result != null && message.hasOwnProperty("result")) {
            var error = $root.Reply.verify(message.result);
            if (error)
                return "result." + error;
        }
        if (message.processId != null && message.hasOwnProperty("processId"))
            if (!$util.isInteger(message.processId))
                return "processId: integer expected";
        return null;
    };

    /**
     * Creates an OpenProcessResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof OpenProcessResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {OpenProcessResponse} OpenProcessResponse
     */
    OpenProcessResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.OpenProcessResponse)
            return object;
        var message = new $root.OpenProcessResponse();
        if (object.result != null) {
            if (typeof object.result !== "object")
                throw TypeError(".OpenProcessResponse.result: object expected");
            message.result = $root.Reply.fromObject(object.result);
        }
        if (object.processId != null)
            message.processId = object.processId >>> 0;
        return message;
    };

    /**
     * Creates a plain object from an OpenProcessResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof OpenProcessResponse
     * @static
     * @param {OpenProcessResponse} message OpenProcessResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    OpenProcessResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.result = null;
            object.processId = 0;
        }
        if (message.result != null && message.hasOwnProperty("result"))
            object.result = $root.Reply.toObject(message.result, options);
        if (message.processId != null && message.hasOwnProperty("processId"))
            object.processId = message.processId;
        return object;
    };

    /**
     * Converts this OpenProcessResponse to JSON.
     * @function toJSON
     * @memberof OpenProcessResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    OpenProcessResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return OpenProcessResponse;
})();

$root.CloseProcess = (function() {

    /**
     * Properties of a CloseProcess.
     * @exports ICloseProcess
     * @interface ICloseProcess
     * @property {number|null} [processId] CloseProcess processId
     */

    /**
     * Constructs a new CloseProcess.
     * @exports CloseProcess
     * @classdesc Represents a CloseProcess.
     * @implements ICloseProcess
     * @constructor
     * @param {ICloseProcess=} [properties] Properties to set
     */
    function CloseProcess(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * CloseProcess processId.
     * @member {number} processId
     * @memberof CloseProcess
     * @instance
     */
    CloseProcess.prototype.processId = 0;

    /**
     * Creates a new CloseProcess instance using the specified properties.
     * @function create
     * @memberof CloseProcess
     * @static
     * @param {ICloseProcess=} [properties] Properties to set
     * @returns {CloseProcess} CloseProcess instance
     */
    CloseProcess.create = function create(properties) {
        return new CloseProcess(properties);
    };

    /**
     * Encodes the specified CloseProcess message. Does not implicitly {@link CloseProcess.verify|verify} messages.
     * @function encode
     * @memberof CloseProcess
     * @static
     * @param {ICloseProcess} message CloseProcess message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CloseProcess.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.processId != null && Object.hasOwnProperty.call(message, "processId"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.processId);
        return writer;
    };

    /**
     * Encodes the specified CloseProcess message, length delimited. Does not implicitly {@link CloseProcess.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CloseProcess
     * @static
     * @param {ICloseProcess} message CloseProcess message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CloseProcess.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CloseProcess message from the specified reader or buffer.
     * @function decode
     * @memberof CloseProcess
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CloseProcess} CloseProcess
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CloseProcess.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CloseProcess();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.processId = reader.uint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a CloseProcess message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CloseProcess
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CloseProcess} CloseProcess
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CloseProcess.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CloseProcess message.
     * @function verify
     * @memberof CloseProcess
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CloseProcess.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.processId != null && message.hasOwnProperty("processId"))
            if (!$util.isInteger(message.processId))
                return "processId: integer expected";
        return null;
    };

    /**
     * Creates a CloseProcess message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CloseProcess
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CloseProcess} CloseProcess
     */
    CloseProcess.fromObject = function fromObject(object) {
        if (object instanceof $root.CloseProcess)
            return object;
        var message = new $root.CloseProcess();
        if (object.processId != null)
            message.processId = object.processId >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a CloseProcess message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CloseProcess
     * @static
     * @param {CloseProcess} message CloseProcess
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CloseProcess.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.processId = 0;
        if (message.processId != null && message.hasOwnProperty("processId"))
            object.processId = message.processId;
        return object;
    };

    /**
     * Converts this CloseProcess to JSON.
     * @function toJSON
     * @memberof CloseProcess
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CloseProcess.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return CloseProcess;
})();

$root.CloseProcessResponse = (function() {

    /**
     * Properties of a CloseProcessResponse.
     * @exports ICloseProcessResponse
     * @interface ICloseProcessResponse
     * @property {IReply|null} [result] CloseProcessResponse result
     * @property {number|null} [processId] CloseProcessResponse processId
     */

    /**
     * Constructs a new CloseProcessResponse.
     * @exports CloseProcessResponse
     * @classdesc Represents a CloseProcessResponse.
     * @implements ICloseProcessResponse
     * @constructor
     * @param {ICloseProcessResponse=} [properties] Properties to set
     */
    function CloseProcessResponse(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * CloseProcessResponse result.
     * @member {IReply|null|undefined} result
     * @memberof CloseProcessResponse
     * @instance
     */
    CloseProcessResponse.prototype.result = null;

    /**
     * CloseProcessResponse processId.
     * @member {number} processId
     * @memberof CloseProcessResponse
     * @instance
     */
    CloseProcessResponse.prototype.processId = 0;

    /**
     * Creates a new CloseProcessResponse instance using the specified properties.
     * @function create
     * @memberof CloseProcessResponse
     * @static
     * @param {ICloseProcessResponse=} [properties] Properties to set
     * @returns {CloseProcessResponse} CloseProcessResponse instance
     */
    CloseProcessResponse.create = function create(properties) {
        return new CloseProcessResponse(properties);
    };

    /**
     * Encodes the specified CloseProcessResponse message. Does not implicitly {@link CloseProcessResponse.verify|verify} messages.
     * @function encode
     * @memberof CloseProcessResponse
     * @static
     * @param {ICloseProcessResponse} message CloseProcessResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CloseProcessResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.result != null && Object.hasOwnProperty.call(message, "result"))
            $root.Reply.encode(message.result, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.processId != null && Object.hasOwnProperty.call(message, "processId"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.processId);
        return writer;
    };

    /**
     * Encodes the specified CloseProcessResponse message, length delimited. Does not implicitly {@link CloseProcessResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CloseProcessResponse
     * @static
     * @param {ICloseProcessResponse} message CloseProcessResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CloseProcessResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CloseProcessResponse message from the specified reader or buffer.
     * @function decode
     * @memberof CloseProcessResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CloseProcessResponse} CloseProcessResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CloseProcessResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CloseProcessResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.result = $root.Reply.decode(reader, reader.uint32());
                break;
            case 2:
                message.processId = reader.uint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a CloseProcessResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CloseProcessResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CloseProcessResponse} CloseProcessResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CloseProcessResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CloseProcessResponse message.
     * @function verify
     * @memberof CloseProcessResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CloseProcessResponse.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.result != null && message.hasOwnProperty("result")) {
            var error = $root.Reply.verify(message.result);
            if (error)
                return "result." + error;
        }
        if (message.processId != null && message.hasOwnProperty("processId"))
            if (!$util.isInteger(message.processId))
                return "processId: integer expected";
        return null;
    };

    /**
     * Creates a CloseProcessResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CloseProcessResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CloseProcessResponse} CloseProcessResponse
     */
    CloseProcessResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.CloseProcessResponse)
            return object;
        var message = new $root.CloseProcessResponse();
        if (object.result != null) {
            if (typeof object.result !== "object")
                throw TypeError(".CloseProcessResponse.result: object expected");
            message.result = $root.Reply.fromObject(object.result);
        }
        if (object.processId != null)
            message.processId = object.processId >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a CloseProcessResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CloseProcessResponse
     * @static
     * @param {CloseProcessResponse} message CloseProcessResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CloseProcessResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.result = null;
            object.processId = 0;
        }
        if (message.result != null && message.hasOwnProperty("result"))
            object.result = $root.Reply.toObject(message.result, options);
        if (message.processId != null && message.hasOwnProperty("processId"))
            object.processId = message.processId;
        return object;
    };

    /**
     * Converts this CloseProcessResponse to JSON.
     * @function toJSON
     * @memberof CloseProcessResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CloseProcessResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return CloseProcessResponse;
})();

$root.MemorySubscribe = (function() {

    /**
     * Properties of a MemorySubscribe.
     * @exports IMemorySubscribe
     * @interface IMemorySubscribe
     * @property {number|null} [processId] MemorySubscribe processId
     * @property {number|Long|null} [startAddress] MemorySubscribe startAddress
     * @property {number|null} [byteCount] MemorySubscribe byteCount
     * @property {number|null} [requestRef] MemorySubscribe requestRef
     */

    /**
     * Constructs a new MemorySubscribe.
     * @exports MemorySubscribe
     * @classdesc Represents a MemorySubscribe.
     * @implements IMemorySubscribe
     * @constructor
     * @param {IMemorySubscribe=} [properties] Properties to set
     */
    function MemorySubscribe(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * MemorySubscribe processId.
     * @member {number} processId
     * @memberof MemorySubscribe
     * @instance
     */
    MemorySubscribe.prototype.processId = 0;

    /**
     * MemorySubscribe startAddress.
     * @member {number|Long} startAddress
     * @memberof MemorySubscribe
     * @instance
     */
    MemorySubscribe.prototype.startAddress = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * MemorySubscribe byteCount.
     * @member {number} byteCount
     * @memberof MemorySubscribe
     * @instance
     */
    MemorySubscribe.prototype.byteCount = 0;

    /**
     * MemorySubscribe requestRef.
     * @member {number} requestRef
     * @memberof MemorySubscribe
     * @instance
     */
    MemorySubscribe.prototype.requestRef = 0;

    /**
     * Creates a new MemorySubscribe instance using the specified properties.
     * @function create
     * @memberof MemorySubscribe
     * @static
     * @param {IMemorySubscribe=} [properties] Properties to set
     * @returns {MemorySubscribe} MemorySubscribe instance
     */
    MemorySubscribe.create = function create(properties) {
        return new MemorySubscribe(properties);
    };

    /**
     * Encodes the specified MemorySubscribe message. Does not implicitly {@link MemorySubscribe.verify|verify} messages.
     * @function encode
     * @memberof MemorySubscribe
     * @static
     * @param {IMemorySubscribe} message MemorySubscribe message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MemorySubscribe.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.processId != null && Object.hasOwnProperty.call(message, "processId"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.processId);
        if (message.startAddress != null && Object.hasOwnProperty.call(message, "startAddress"))
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.startAddress);
        if (message.byteCount != null && Object.hasOwnProperty.call(message, "byteCount"))
            writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.byteCount);
        if (message.requestRef != null && Object.hasOwnProperty.call(message, "requestRef"))
            writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.requestRef);
        return writer;
    };

    /**
     * Encodes the specified MemorySubscribe message, length delimited. Does not implicitly {@link MemorySubscribe.verify|verify} messages.
     * @function encodeDelimited
     * @memberof MemorySubscribe
     * @static
     * @param {IMemorySubscribe} message MemorySubscribe message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MemorySubscribe.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a MemorySubscribe message from the specified reader or buffer.
     * @function decode
     * @memberof MemorySubscribe
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {MemorySubscribe} MemorySubscribe
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MemorySubscribe.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.MemorySubscribe();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.processId = reader.uint32();
                break;
            case 2:
                message.startAddress = reader.int64();
                break;
            case 3:
                message.byteCount = reader.uint32();
                break;
            case 4:
                message.requestRef = reader.uint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a MemorySubscribe message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof MemorySubscribe
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {MemorySubscribe} MemorySubscribe
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MemorySubscribe.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a MemorySubscribe message.
     * @function verify
     * @memberof MemorySubscribe
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    MemorySubscribe.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.processId != null && message.hasOwnProperty("processId"))
            if (!$util.isInteger(message.processId))
                return "processId: integer expected";
        if (message.startAddress != null && message.hasOwnProperty("startAddress"))
            if (!$util.isInteger(message.startAddress) && !(message.startAddress && $util.isInteger(message.startAddress.low) && $util.isInteger(message.startAddress.high)))
                return "startAddress: integer|Long expected";
        if (message.byteCount != null && message.hasOwnProperty("byteCount"))
            if (!$util.isInteger(message.byteCount))
                return "byteCount: integer expected";
        if (message.requestRef != null && message.hasOwnProperty("requestRef"))
            if (!$util.isInteger(message.requestRef))
                return "requestRef: integer expected";
        return null;
    };

    /**
     * Creates a MemorySubscribe message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof MemorySubscribe
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {MemorySubscribe} MemorySubscribe
     */
    MemorySubscribe.fromObject = function fromObject(object) {
        if (object instanceof $root.MemorySubscribe)
            return object;
        var message = new $root.MemorySubscribe();
        if (object.processId != null)
            message.processId = object.processId >>> 0;
        if (object.startAddress != null)
            if ($util.Long)
                (message.startAddress = $util.Long.fromValue(object.startAddress)).unsigned = false;
            else if (typeof object.startAddress === "string")
                message.startAddress = parseInt(object.startAddress, 10);
            else if (typeof object.startAddress === "number")
                message.startAddress = object.startAddress;
            else if (typeof object.startAddress === "object")
                message.startAddress = new $util.LongBits(object.startAddress.low >>> 0, object.startAddress.high >>> 0).toNumber();
        if (object.byteCount != null)
            message.byteCount = object.byteCount >>> 0;
        if (object.requestRef != null)
            message.requestRef = object.requestRef >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a MemorySubscribe message. Also converts values to other types if specified.
     * @function toObject
     * @memberof MemorySubscribe
     * @static
     * @param {MemorySubscribe} message MemorySubscribe
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    MemorySubscribe.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.processId = 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.startAddress = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.startAddress = options.longs === String ? "0" : 0;
            object.byteCount = 0;
            object.requestRef = 0;
        }
        if (message.processId != null && message.hasOwnProperty("processId"))
            object.processId = message.processId;
        if (message.startAddress != null && message.hasOwnProperty("startAddress"))
            if (typeof message.startAddress === "number")
                object.startAddress = options.longs === String ? String(message.startAddress) : message.startAddress;
            else
                object.startAddress = options.longs === String ? $util.Long.prototype.toString.call(message.startAddress) : options.longs === Number ? new $util.LongBits(message.startAddress.low >>> 0, message.startAddress.high >>> 0).toNumber() : message.startAddress;
        if (message.byteCount != null && message.hasOwnProperty("byteCount"))
            object.byteCount = message.byteCount;
        if (message.requestRef != null && message.hasOwnProperty("requestRef"))
            object.requestRef = message.requestRef;
        return object;
    };

    /**
     * Converts this MemorySubscribe to JSON.
     * @function toJSON
     * @memberof MemorySubscribe
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    MemorySubscribe.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return MemorySubscribe;
})();

$root.MemorySubscribeResponse = (function() {

    /**
     * Properties of a MemorySubscribeResponse.
     * @exports IMemorySubscribeResponse
     * @interface IMemorySubscribeResponse
     * @property {IReply|null} [result] MemorySubscribeResponse result
     * @property {number|null} [ref] MemorySubscribeResponse ref
     * @property {number|null} [requestRef] MemorySubscribeResponse requestRef
     */

    /**
     * Constructs a new MemorySubscribeResponse.
     * @exports MemorySubscribeResponse
     * @classdesc Represents a MemorySubscribeResponse.
     * @implements IMemorySubscribeResponse
     * @constructor
     * @param {IMemorySubscribeResponse=} [properties] Properties to set
     */
    function MemorySubscribeResponse(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * MemorySubscribeResponse result.
     * @member {IReply|null|undefined} result
     * @memberof MemorySubscribeResponse
     * @instance
     */
    MemorySubscribeResponse.prototype.result = null;

    /**
     * MemorySubscribeResponse ref.
     * @member {number} ref
     * @memberof MemorySubscribeResponse
     * @instance
     */
    MemorySubscribeResponse.prototype.ref = 0;

    /**
     * MemorySubscribeResponse requestRef.
     * @member {number} requestRef
     * @memberof MemorySubscribeResponse
     * @instance
     */
    MemorySubscribeResponse.prototype.requestRef = 0;

    /**
     * Creates a new MemorySubscribeResponse instance using the specified properties.
     * @function create
     * @memberof MemorySubscribeResponse
     * @static
     * @param {IMemorySubscribeResponse=} [properties] Properties to set
     * @returns {MemorySubscribeResponse} MemorySubscribeResponse instance
     */
    MemorySubscribeResponse.create = function create(properties) {
        return new MemorySubscribeResponse(properties);
    };

    /**
     * Encodes the specified MemorySubscribeResponse message. Does not implicitly {@link MemorySubscribeResponse.verify|verify} messages.
     * @function encode
     * @memberof MemorySubscribeResponse
     * @static
     * @param {IMemorySubscribeResponse} message MemorySubscribeResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MemorySubscribeResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.result != null && Object.hasOwnProperty.call(message, "result"))
            $root.Reply.encode(message.result, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.ref != null && Object.hasOwnProperty.call(message, "ref"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.ref);
        if (message.requestRef != null && Object.hasOwnProperty.call(message, "requestRef"))
            writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.requestRef);
        return writer;
    };

    /**
     * Encodes the specified MemorySubscribeResponse message, length delimited. Does not implicitly {@link MemorySubscribeResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof MemorySubscribeResponse
     * @static
     * @param {IMemorySubscribeResponse} message MemorySubscribeResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MemorySubscribeResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a MemorySubscribeResponse message from the specified reader or buffer.
     * @function decode
     * @memberof MemorySubscribeResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {MemorySubscribeResponse} MemorySubscribeResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MemorySubscribeResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.MemorySubscribeResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.result = $root.Reply.decode(reader, reader.uint32());
                break;
            case 2:
                message.ref = reader.uint32();
                break;
            case 3:
                message.requestRef = reader.uint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a MemorySubscribeResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof MemorySubscribeResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {MemorySubscribeResponse} MemorySubscribeResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MemorySubscribeResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a MemorySubscribeResponse message.
     * @function verify
     * @memberof MemorySubscribeResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    MemorySubscribeResponse.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.result != null && message.hasOwnProperty("result")) {
            var error = $root.Reply.verify(message.result);
            if (error)
                return "result." + error;
        }
        if (message.ref != null && message.hasOwnProperty("ref"))
            if (!$util.isInteger(message.ref))
                return "ref: integer expected";
        if (message.requestRef != null && message.hasOwnProperty("requestRef"))
            if (!$util.isInteger(message.requestRef))
                return "requestRef: integer expected";
        return null;
    };

    /**
     * Creates a MemorySubscribeResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof MemorySubscribeResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {MemorySubscribeResponse} MemorySubscribeResponse
     */
    MemorySubscribeResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.MemorySubscribeResponse)
            return object;
        var message = new $root.MemorySubscribeResponse();
        if (object.result != null) {
            if (typeof object.result !== "object")
                throw TypeError(".MemorySubscribeResponse.result: object expected");
            message.result = $root.Reply.fromObject(object.result);
        }
        if (object.ref != null)
            message.ref = object.ref >>> 0;
        if (object.requestRef != null)
            message.requestRef = object.requestRef >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a MemorySubscribeResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof MemorySubscribeResponse
     * @static
     * @param {MemorySubscribeResponse} message MemorySubscribeResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    MemorySubscribeResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.result = null;
            object.ref = 0;
            object.requestRef = 0;
        }
        if (message.result != null && message.hasOwnProperty("result"))
            object.result = $root.Reply.toObject(message.result, options);
        if (message.ref != null && message.hasOwnProperty("ref"))
            object.ref = message.ref;
        if (message.requestRef != null && message.hasOwnProperty("requestRef"))
            object.requestRef = message.requestRef;
        return object;
    };

    /**
     * Converts this MemorySubscribeResponse to JSON.
     * @function toJSON
     * @memberof MemorySubscribeResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    MemorySubscribeResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return MemorySubscribeResponse;
})();

$root.MemoryUnsubscribe = (function() {

    /**
     * Properties of a MemoryUnsubscribe.
     * @exports IMemoryUnsubscribe
     * @interface IMemoryUnsubscribe
     * @property {number|null} [ref] MemoryUnsubscribe ref
     */

    /**
     * Constructs a new MemoryUnsubscribe.
     * @exports MemoryUnsubscribe
     * @classdesc Represents a MemoryUnsubscribe.
     * @implements IMemoryUnsubscribe
     * @constructor
     * @param {IMemoryUnsubscribe=} [properties] Properties to set
     */
    function MemoryUnsubscribe(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * MemoryUnsubscribe ref.
     * @member {number} ref
     * @memberof MemoryUnsubscribe
     * @instance
     */
    MemoryUnsubscribe.prototype.ref = 0;

    /**
     * Creates a new MemoryUnsubscribe instance using the specified properties.
     * @function create
     * @memberof MemoryUnsubscribe
     * @static
     * @param {IMemoryUnsubscribe=} [properties] Properties to set
     * @returns {MemoryUnsubscribe} MemoryUnsubscribe instance
     */
    MemoryUnsubscribe.create = function create(properties) {
        return new MemoryUnsubscribe(properties);
    };

    /**
     * Encodes the specified MemoryUnsubscribe message. Does not implicitly {@link MemoryUnsubscribe.verify|verify} messages.
     * @function encode
     * @memberof MemoryUnsubscribe
     * @static
     * @param {IMemoryUnsubscribe} message MemoryUnsubscribe message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MemoryUnsubscribe.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.ref != null && Object.hasOwnProperty.call(message, "ref"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.ref);
        return writer;
    };

    /**
     * Encodes the specified MemoryUnsubscribe message, length delimited. Does not implicitly {@link MemoryUnsubscribe.verify|verify} messages.
     * @function encodeDelimited
     * @memberof MemoryUnsubscribe
     * @static
     * @param {IMemoryUnsubscribe} message MemoryUnsubscribe message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MemoryUnsubscribe.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a MemoryUnsubscribe message from the specified reader or buffer.
     * @function decode
     * @memberof MemoryUnsubscribe
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {MemoryUnsubscribe} MemoryUnsubscribe
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MemoryUnsubscribe.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.MemoryUnsubscribe();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.ref = reader.uint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a MemoryUnsubscribe message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof MemoryUnsubscribe
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {MemoryUnsubscribe} MemoryUnsubscribe
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MemoryUnsubscribe.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a MemoryUnsubscribe message.
     * @function verify
     * @memberof MemoryUnsubscribe
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    MemoryUnsubscribe.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.ref != null && message.hasOwnProperty("ref"))
            if (!$util.isInteger(message.ref))
                return "ref: integer expected";
        return null;
    };

    /**
     * Creates a MemoryUnsubscribe message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof MemoryUnsubscribe
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {MemoryUnsubscribe} MemoryUnsubscribe
     */
    MemoryUnsubscribe.fromObject = function fromObject(object) {
        if (object instanceof $root.MemoryUnsubscribe)
            return object;
        var message = new $root.MemoryUnsubscribe();
        if (object.ref != null)
            message.ref = object.ref >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a MemoryUnsubscribe message. Also converts values to other types if specified.
     * @function toObject
     * @memberof MemoryUnsubscribe
     * @static
     * @param {MemoryUnsubscribe} message MemoryUnsubscribe
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    MemoryUnsubscribe.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.ref = 0;
        if (message.ref != null && message.hasOwnProperty("ref"))
            object.ref = message.ref;
        return object;
    };

    /**
     * Converts this MemoryUnsubscribe to JSON.
     * @function toJSON
     * @memberof MemoryUnsubscribe
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    MemoryUnsubscribe.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return MemoryUnsubscribe;
})();

$root.MemoryUnsubscribeResponse = (function() {

    /**
     * Properties of a MemoryUnsubscribeResponse.
     * @exports IMemoryUnsubscribeResponse
     * @interface IMemoryUnsubscribeResponse
     * @property {IReply|null} [result] MemoryUnsubscribeResponse result
     * @property {number|null} [ref] MemoryUnsubscribeResponse ref
     */

    /**
     * Constructs a new MemoryUnsubscribeResponse.
     * @exports MemoryUnsubscribeResponse
     * @classdesc Represents a MemoryUnsubscribeResponse.
     * @implements IMemoryUnsubscribeResponse
     * @constructor
     * @param {IMemoryUnsubscribeResponse=} [properties] Properties to set
     */
    function MemoryUnsubscribeResponse(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * MemoryUnsubscribeResponse result.
     * @member {IReply|null|undefined} result
     * @memberof MemoryUnsubscribeResponse
     * @instance
     */
    MemoryUnsubscribeResponse.prototype.result = null;

    /**
     * MemoryUnsubscribeResponse ref.
     * @member {number} ref
     * @memberof MemoryUnsubscribeResponse
     * @instance
     */
    MemoryUnsubscribeResponse.prototype.ref = 0;

    /**
     * Creates a new MemoryUnsubscribeResponse instance using the specified properties.
     * @function create
     * @memberof MemoryUnsubscribeResponse
     * @static
     * @param {IMemoryUnsubscribeResponse=} [properties] Properties to set
     * @returns {MemoryUnsubscribeResponse} MemoryUnsubscribeResponse instance
     */
    MemoryUnsubscribeResponse.create = function create(properties) {
        return new MemoryUnsubscribeResponse(properties);
    };

    /**
     * Encodes the specified MemoryUnsubscribeResponse message. Does not implicitly {@link MemoryUnsubscribeResponse.verify|verify} messages.
     * @function encode
     * @memberof MemoryUnsubscribeResponse
     * @static
     * @param {IMemoryUnsubscribeResponse} message MemoryUnsubscribeResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MemoryUnsubscribeResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.result != null && Object.hasOwnProperty.call(message, "result"))
            $root.Reply.encode(message.result, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.ref != null && Object.hasOwnProperty.call(message, "ref"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.ref);
        return writer;
    };

    /**
     * Encodes the specified MemoryUnsubscribeResponse message, length delimited. Does not implicitly {@link MemoryUnsubscribeResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof MemoryUnsubscribeResponse
     * @static
     * @param {IMemoryUnsubscribeResponse} message MemoryUnsubscribeResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MemoryUnsubscribeResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a MemoryUnsubscribeResponse message from the specified reader or buffer.
     * @function decode
     * @memberof MemoryUnsubscribeResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {MemoryUnsubscribeResponse} MemoryUnsubscribeResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MemoryUnsubscribeResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.MemoryUnsubscribeResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.result = $root.Reply.decode(reader, reader.uint32());
                break;
            case 2:
                message.ref = reader.uint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a MemoryUnsubscribeResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof MemoryUnsubscribeResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {MemoryUnsubscribeResponse} MemoryUnsubscribeResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MemoryUnsubscribeResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a MemoryUnsubscribeResponse message.
     * @function verify
     * @memberof MemoryUnsubscribeResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    MemoryUnsubscribeResponse.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.result != null && message.hasOwnProperty("result")) {
            var error = $root.Reply.verify(message.result);
            if (error)
                return "result." + error;
        }
        if (message.ref != null && message.hasOwnProperty("ref"))
            if (!$util.isInteger(message.ref))
                return "ref: integer expected";
        return null;
    };

    /**
     * Creates a MemoryUnsubscribeResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof MemoryUnsubscribeResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {MemoryUnsubscribeResponse} MemoryUnsubscribeResponse
     */
    MemoryUnsubscribeResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.MemoryUnsubscribeResponse)
            return object;
        var message = new $root.MemoryUnsubscribeResponse();
        if (object.result != null) {
            if (typeof object.result !== "object")
                throw TypeError(".MemoryUnsubscribeResponse.result: object expected");
            message.result = $root.Reply.fromObject(object.result);
        }
        if (object.ref != null)
            message.ref = object.ref >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a MemoryUnsubscribeResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof MemoryUnsubscribeResponse
     * @static
     * @param {MemoryUnsubscribeResponse} message MemoryUnsubscribeResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    MemoryUnsubscribeResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.result = null;
            object.ref = 0;
        }
        if (message.result != null && message.hasOwnProperty("result"))
            object.result = $root.Reply.toObject(message.result, options);
        if (message.ref != null && message.hasOwnProperty("ref"))
            object.ref = message.ref;
        return object;
    };

    /**
     * Converts this MemoryUnsubscribeResponse to JSON.
     * @function toJSON
     * @memberof MemoryUnsubscribeResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    MemoryUnsubscribeResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return MemoryUnsubscribeResponse;
})();

$root.MemoryUpdate = (function() {

    /**
     * Properties of a MemoryUpdate.
     * @exports IMemoryUpdate
     * @interface IMemoryUpdate
     * @property {number|null} [subscriptionRef] MemoryUpdate subscriptionRef
     * @property {Uint8Array|null} [newData] MemoryUpdate newData
     */

    /**
     * Constructs a new MemoryUpdate.
     * @exports MemoryUpdate
     * @classdesc Represents a MemoryUpdate.
     * @implements IMemoryUpdate
     * @constructor
     * @param {IMemoryUpdate=} [properties] Properties to set
     */
    function MemoryUpdate(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * MemoryUpdate subscriptionRef.
     * @member {number} subscriptionRef
     * @memberof MemoryUpdate
     * @instance
     */
    MemoryUpdate.prototype.subscriptionRef = 0;

    /**
     * MemoryUpdate newData.
     * @member {Uint8Array} newData
     * @memberof MemoryUpdate
     * @instance
     */
    MemoryUpdate.prototype.newData = $util.newBuffer([]);

    /**
     * Creates a new MemoryUpdate instance using the specified properties.
     * @function create
     * @memberof MemoryUpdate
     * @static
     * @param {IMemoryUpdate=} [properties] Properties to set
     * @returns {MemoryUpdate} MemoryUpdate instance
     */
    MemoryUpdate.create = function create(properties) {
        return new MemoryUpdate(properties);
    };

    /**
     * Encodes the specified MemoryUpdate message. Does not implicitly {@link MemoryUpdate.verify|verify} messages.
     * @function encode
     * @memberof MemoryUpdate
     * @static
     * @param {IMemoryUpdate} message MemoryUpdate message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MemoryUpdate.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.subscriptionRef != null && Object.hasOwnProperty.call(message, "subscriptionRef"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.subscriptionRef);
        if (message.newData != null && Object.hasOwnProperty.call(message, "newData"))
            writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.newData);
        return writer;
    };

    /**
     * Encodes the specified MemoryUpdate message, length delimited. Does not implicitly {@link MemoryUpdate.verify|verify} messages.
     * @function encodeDelimited
     * @memberof MemoryUpdate
     * @static
     * @param {IMemoryUpdate} message MemoryUpdate message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MemoryUpdate.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a MemoryUpdate message from the specified reader or buffer.
     * @function decode
     * @memberof MemoryUpdate
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {MemoryUpdate} MemoryUpdate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MemoryUpdate.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.MemoryUpdate();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.subscriptionRef = reader.uint32();
                break;
            case 2:
                message.newData = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a MemoryUpdate message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof MemoryUpdate
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {MemoryUpdate} MemoryUpdate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MemoryUpdate.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a MemoryUpdate message.
     * @function verify
     * @memberof MemoryUpdate
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    MemoryUpdate.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.subscriptionRef != null && message.hasOwnProperty("subscriptionRef"))
            if (!$util.isInteger(message.subscriptionRef))
                return "subscriptionRef: integer expected";
        if (message.newData != null && message.hasOwnProperty("newData"))
            if (!(message.newData && typeof message.newData.length === "number" || $util.isString(message.newData)))
                return "newData: buffer expected";
        return null;
    };

    /**
     * Creates a MemoryUpdate message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof MemoryUpdate
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {MemoryUpdate} MemoryUpdate
     */
    MemoryUpdate.fromObject = function fromObject(object) {
        if (object instanceof $root.MemoryUpdate)
            return object;
        var message = new $root.MemoryUpdate();
        if (object.subscriptionRef != null)
            message.subscriptionRef = object.subscriptionRef >>> 0;
        if (object.newData != null)
            if (typeof object.newData === "string")
                $util.base64.decode(object.newData, message.newData = $util.newBuffer($util.base64.length(object.newData)), 0);
            else if (object.newData.length)
                message.newData = object.newData;
        return message;
    };

    /**
     * Creates a plain object from a MemoryUpdate message. Also converts values to other types if specified.
     * @function toObject
     * @memberof MemoryUpdate
     * @static
     * @param {MemoryUpdate} message MemoryUpdate
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    MemoryUpdate.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.subscriptionRef = 0;
            if (options.bytes === String)
                object.newData = "";
            else {
                object.newData = [];
                if (options.bytes !== Array)
                    object.newData = $util.newBuffer(object.newData);
            }
        }
        if (message.subscriptionRef != null && message.hasOwnProperty("subscriptionRef"))
            object.subscriptionRef = message.subscriptionRef;
        if (message.newData != null && message.hasOwnProperty("newData"))
            object.newData = options.bytes === String ? $util.base64.encode(message.newData, 0, message.newData.length) : options.bytes === Array ? Array.prototype.slice.call(message.newData) : message.newData;
        return object;
    };

    /**
     * Converts this MemoryUpdate to JSON.
     * @function toJSON
     * @memberof MemoryUpdate
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    MemoryUpdate.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return MemoryUpdate;
})();

$root.ObjectSubscribe = (function() {

    /**
     * Properties of an ObjectSubscribe.
     * @exports IObjectSubscribe
     * @interface IObjectSubscribe
     * @property {number|null} [processId] ObjectSubscribe processId
     * @property {number|Long|null} [objectAddress] ObjectSubscribe objectAddress
     * @property {boolean|null} [watchStructs] ObjectSubscribe watchStructs
     */

    /**
     * Constructs a new ObjectSubscribe.
     * @exports ObjectSubscribe
     * @classdesc Represents an ObjectSubscribe.
     * @implements IObjectSubscribe
     * @constructor
     * @param {IObjectSubscribe=} [properties] Properties to set
     */
    function ObjectSubscribe(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ObjectSubscribe processId.
     * @member {number} processId
     * @memberof ObjectSubscribe
     * @instance
     */
    ObjectSubscribe.prototype.processId = 0;

    /**
     * ObjectSubscribe objectAddress.
     * @member {number|Long} objectAddress
     * @memberof ObjectSubscribe
     * @instance
     */
    ObjectSubscribe.prototype.objectAddress = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * ObjectSubscribe watchStructs.
     * @member {boolean} watchStructs
     * @memberof ObjectSubscribe
     * @instance
     */
    ObjectSubscribe.prototype.watchStructs = false;

    /**
     * Creates a new ObjectSubscribe instance using the specified properties.
     * @function create
     * @memberof ObjectSubscribe
     * @static
     * @param {IObjectSubscribe=} [properties] Properties to set
     * @returns {ObjectSubscribe} ObjectSubscribe instance
     */
    ObjectSubscribe.create = function create(properties) {
        return new ObjectSubscribe(properties);
    };

    /**
     * Encodes the specified ObjectSubscribe message. Does not implicitly {@link ObjectSubscribe.verify|verify} messages.
     * @function encode
     * @memberof ObjectSubscribe
     * @static
     * @param {IObjectSubscribe} message ObjectSubscribe message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ObjectSubscribe.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.processId != null && Object.hasOwnProperty.call(message, "processId"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.processId);
        if (message.objectAddress != null && Object.hasOwnProperty.call(message, "objectAddress"))
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.objectAddress);
        if (message.watchStructs != null && Object.hasOwnProperty.call(message, "watchStructs"))
            writer.uint32(/* id 3, wireType 0 =*/24).bool(message.watchStructs);
        return writer;
    };

    /**
     * Encodes the specified ObjectSubscribe message, length delimited. Does not implicitly {@link ObjectSubscribe.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ObjectSubscribe
     * @static
     * @param {IObjectSubscribe} message ObjectSubscribe message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ObjectSubscribe.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an ObjectSubscribe message from the specified reader or buffer.
     * @function decode
     * @memberof ObjectSubscribe
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ObjectSubscribe} ObjectSubscribe
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ObjectSubscribe.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ObjectSubscribe();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.processId = reader.uint32();
                break;
            case 2:
                message.objectAddress = reader.int64();
                break;
            case 3:
                message.watchStructs = reader.bool();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an ObjectSubscribe message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ObjectSubscribe
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ObjectSubscribe} ObjectSubscribe
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ObjectSubscribe.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an ObjectSubscribe message.
     * @function verify
     * @memberof ObjectSubscribe
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ObjectSubscribe.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.processId != null && message.hasOwnProperty("processId"))
            if (!$util.isInteger(message.processId))
                return "processId: integer expected";
        if (message.objectAddress != null && message.hasOwnProperty("objectAddress"))
            if (!$util.isInteger(message.objectAddress) && !(message.objectAddress && $util.isInteger(message.objectAddress.low) && $util.isInteger(message.objectAddress.high)))
                return "objectAddress: integer|Long expected";
        if (message.watchStructs != null && message.hasOwnProperty("watchStructs"))
            if (typeof message.watchStructs !== "boolean")
                return "watchStructs: boolean expected";
        return null;
    };

    /**
     * Creates an ObjectSubscribe message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ObjectSubscribe
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ObjectSubscribe} ObjectSubscribe
     */
    ObjectSubscribe.fromObject = function fromObject(object) {
        if (object instanceof $root.ObjectSubscribe)
            return object;
        var message = new $root.ObjectSubscribe();
        if (object.processId != null)
            message.processId = object.processId >>> 0;
        if (object.objectAddress != null)
            if ($util.Long)
                (message.objectAddress = $util.Long.fromValue(object.objectAddress)).unsigned = false;
            else if (typeof object.objectAddress === "string")
                message.objectAddress = parseInt(object.objectAddress, 10);
            else if (typeof object.objectAddress === "number")
                message.objectAddress = object.objectAddress;
            else if (typeof object.objectAddress === "object")
                message.objectAddress = new $util.LongBits(object.objectAddress.low >>> 0, object.objectAddress.high >>> 0).toNumber();
        if (object.watchStructs != null)
            message.watchStructs = Boolean(object.watchStructs);
        return message;
    };

    /**
     * Creates a plain object from an ObjectSubscribe message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ObjectSubscribe
     * @static
     * @param {ObjectSubscribe} message ObjectSubscribe
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ObjectSubscribe.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.processId = 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.objectAddress = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.objectAddress = options.longs === String ? "0" : 0;
            object.watchStructs = false;
        }
        if (message.processId != null && message.hasOwnProperty("processId"))
            object.processId = message.processId;
        if (message.objectAddress != null && message.hasOwnProperty("objectAddress"))
            if (typeof message.objectAddress === "number")
                object.objectAddress = options.longs === String ? String(message.objectAddress) : message.objectAddress;
            else
                object.objectAddress = options.longs === String ? $util.Long.prototype.toString.call(message.objectAddress) : options.longs === Number ? new $util.LongBits(message.objectAddress.low >>> 0, message.objectAddress.high >>> 0).toNumber() : message.objectAddress;
        if (message.watchStructs != null && message.hasOwnProperty("watchStructs"))
            object.watchStructs = message.watchStructs;
        return object;
    };

    /**
     * Converts this ObjectSubscribe to JSON.
     * @function toJSON
     * @memberof ObjectSubscribe
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ObjectSubscribe.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ObjectSubscribe;
})();

$root.ObjectSubscribeResponse = (function() {

    /**
     * Properties of an ObjectSubscribeResponse.
     * @exports IObjectSubscribeResponse
     * @interface IObjectSubscribeResponse
     * @property {IReply|null} [result] ObjectSubscribeResponse result
     * @property {number|null} [ref] ObjectSubscribeResponse ref
     */

    /**
     * Constructs a new ObjectSubscribeResponse.
     * @exports ObjectSubscribeResponse
     * @classdesc Represents an ObjectSubscribeResponse.
     * @implements IObjectSubscribeResponse
     * @constructor
     * @param {IObjectSubscribeResponse=} [properties] Properties to set
     */
    function ObjectSubscribeResponse(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ObjectSubscribeResponse result.
     * @member {IReply|null|undefined} result
     * @memberof ObjectSubscribeResponse
     * @instance
     */
    ObjectSubscribeResponse.prototype.result = null;

    /**
     * ObjectSubscribeResponse ref.
     * @member {number} ref
     * @memberof ObjectSubscribeResponse
     * @instance
     */
    ObjectSubscribeResponse.prototype.ref = 0;

    /**
     * Creates a new ObjectSubscribeResponse instance using the specified properties.
     * @function create
     * @memberof ObjectSubscribeResponse
     * @static
     * @param {IObjectSubscribeResponse=} [properties] Properties to set
     * @returns {ObjectSubscribeResponse} ObjectSubscribeResponse instance
     */
    ObjectSubscribeResponse.create = function create(properties) {
        return new ObjectSubscribeResponse(properties);
    };

    /**
     * Encodes the specified ObjectSubscribeResponse message. Does not implicitly {@link ObjectSubscribeResponse.verify|verify} messages.
     * @function encode
     * @memberof ObjectSubscribeResponse
     * @static
     * @param {IObjectSubscribeResponse} message ObjectSubscribeResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ObjectSubscribeResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.result != null && Object.hasOwnProperty.call(message, "result"))
            $root.Reply.encode(message.result, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.ref != null && Object.hasOwnProperty.call(message, "ref"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.ref);
        return writer;
    };

    /**
     * Encodes the specified ObjectSubscribeResponse message, length delimited. Does not implicitly {@link ObjectSubscribeResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ObjectSubscribeResponse
     * @static
     * @param {IObjectSubscribeResponse} message ObjectSubscribeResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ObjectSubscribeResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an ObjectSubscribeResponse message from the specified reader or buffer.
     * @function decode
     * @memberof ObjectSubscribeResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ObjectSubscribeResponse} ObjectSubscribeResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ObjectSubscribeResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ObjectSubscribeResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.result = $root.Reply.decode(reader, reader.uint32());
                break;
            case 2:
                message.ref = reader.uint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an ObjectSubscribeResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ObjectSubscribeResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ObjectSubscribeResponse} ObjectSubscribeResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ObjectSubscribeResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an ObjectSubscribeResponse message.
     * @function verify
     * @memberof ObjectSubscribeResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ObjectSubscribeResponse.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.result != null && message.hasOwnProperty("result")) {
            var error = $root.Reply.verify(message.result);
            if (error)
                return "result." + error;
        }
        if (message.ref != null && message.hasOwnProperty("ref"))
            if (!$util.isInteger(message.ref))
                return "ref: integer expected";
        return null;
    };

    /**
     * Creates an ObjectSubscribeResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ObjectSubscribeResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ObjectSubscribeResponse} ObjectSubscribeResponse
     */
    ObjectSubscribeResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.ObjectSubscribeResponse)
            return object;
        var message = new $root.ObjectSubscribeResponse();
        if (object.result != null) {
            if (typeof object.result !== "object")
                throw TypeError(".ObjectSubscribeResponse.result: object expected");
            message.result = $root.Reply.fromObject(object.result);
        }
        if (object.ref != null)
            message.ref = object.ref >>> 0;
        return message;
    };

    /**
     * Creates a plain object from an ObjectSubscribeResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ObjectSubscribeResponse
     * @static
     * @param {ObjectSubscribeResponse} message ObjectSubscribeResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ObjectSubscribeResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.result = null;
            object.ref = 0;
        }
        if (message.result != null && message.hasOwnProperty("result"))
            object.result = $root.Reply.toObject(message.result, options);
        if (message.ref != null && message.hasOwnProperty("ref"))
            object.ref = message.ref;
        return object;
    };

    /**
     * Converts this ObjectSubscribeResponse to JSON.
     * @function toJSON
     * @memberof ObjectSubscribeResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ObjectSubscribeResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ObjectSubscribeResponse;
})();

$root.ObjectUnsubscribe = (function() {

    /**
     * Properties of an ObjectUnsubscribe.
     * @exports IObjectUnsubscribe
     * @interface IObjectUnsubscribe
     * @property {number|null} [ref] ObjectUnsubscribe ref
     */

    /**
     * Constructs a new ObjectUnsubscribe.
     * @exports ObjectUnsubscribe
     * @classdesc Represents an ObjectUnsubscribe.
     * @implements IObjectUnsubscribe
     * @constructor
     * @param {IObjectUnsubscribe=} [properties] Properties to set
     */
    function ObjectUnsubscribe(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ObjectUnsubscribe ref.
     * @member {number} ref
     * @memberof ObjectUnsubscribe
     * @instance
     */
    ObjectUnsubscribe.prototype.ref = 0;

    /**
     * Creates a new ObjectUnsubscribe instance using the specified properties.
     * @function create
     * @memberof ObjectUnsubscribe
     * @static
     * @param {IObjectUnsubscribe=} [properties] Properties to set
     * @returns {ObjectUnsubscribe} ObjectUnsubscribe instance
     */
    ObjectUnsubscribe.create = function create(properties) {
        return new ObjectUnsubscribe(properties);
    };

    /**
     * Encodes the specified ObjectUnsubscribe message. Does not implicitly {@link ObjectUnsubscribe.verify|verify} messages.
     * @function encode
     * @memberof ObjectUnsubscribe
     * @static
     * @param {IObjectUnsubscribe} message ObjectUnsubscribe message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ObjectUnsubscribe.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.ref != null && Object.hasOwnProperty.call(message, "ref"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.ref);
        return writer;
    };

    /**
     * Encodes the specified ObjectUnsubscribe message, length delimited. Does not implicitly {@link ObjectUnsubscribe.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ObjectUnsubscribe
     * @static
     * @param {IObjectUnsubscribe} message ObjectUnsubscribe message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ObjectUnsubscribe.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an ObjectUnsubscribe message from the specified reader or buffer.
     * @function decode
     * @memberof ObjectUnsubscribe
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ObjectUnsubscribe} ObjectUnsubscribe
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ObjectUnsubscribe.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ObjectUnsubscribe();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.ref = reader.uint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an ObjectUnsubscribe message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ObjectUnsubscribe
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ObjectUnsubscribe} ObjectUnsubscribe
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ObjectUnsubscribe.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an ObjectUnsubscribe message.
     * @function verify
     * @memberof ObjectUnsubscribe
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ObjectUnsubscribe.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.ref != null && message.hasOwnProperty("ref"))
            if (!$util.isInteger(message.ref))
                return "ref: integer expected";
        return null;
    };

    /**
     * Creates an ObjectUnsubscribe message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ObjectUnsubscribe
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ObjectUnsubscribe} ObjectUnsubscribe
     */
    ObjectUnsubscribe.fromObject = function fromObject(object) {
        if (object instanceof $root.ObjectUnsubscribe)
            return object;
        var message = new $root.ObjectUnsubscribe();
        if (object.ref != null)
            message.ref = object.ref >>> 0;
        return message;
    };

    /**
     * Creates a plain object from an ObjectUnsubscribe message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ObjectUnsubscribe
     * @static
     * @param {ObjectUnsubscribe} message ObjectUnsubscribe
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ObjectUnsubscribe.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.ref = 0;
        if (message.ref != null && message.hasOwnProperty("ref"))
            object.ref = message.ref;
        return object;
    };

    /**
     * Converts this ObjectUnsubscribe to JSON.
     * @function toJSON
     * @memberof ObjectUnsubscribe
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ObjectUnsubscribe.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ObjectUnsubscribe;
})();

$root.ObjectUnsubscribeResponse = (function() {

    /**
     * Properties of an ObjectUnsubscribeResponse.
     * @exports IObjectUnsubscribeResponse
     * @interface IObjectUnsubscribeResponse
     * @property {IReply|null} [result] ObjectUnsubscribeResponse result
     * @property {number|null} [ref] ObjectUnsubscribeResponse ref
     */

    /**
     * Constructs a new ObjectUnsubscribeResponse.
     * @exports ObjectUnsubscribeResponse
     * @classdesc Represents an ObjectUnsubscribeResponse.
     * @implements IObjectUnsubscribeResponse
     * @constructor
     * @param {IObjectUnsubscribeResponse=} [properties] Properties to set
     */
    function ObjectUnsubscribeResponse(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ObjectUnsubscribeResponse result.
     * @member {IReply|null|undefined} result
     * @memberof ObjectUnsubscribeResponse
     * @instance
     */
    ObjectUnsubscribeResponse.prototype.result = null;

    /**
     * ObjectUnsubscribeResponse ref.
     * @member {number} ref
     * @memberof ObjectUnsubscribeResponse
     * @instance
     */
    ObjectUnsubscribeResponse.prototype.ref = 0;

    /**
     * Creates a new ObjectUnsubscribeResponse instance using the specified properties.
     * @function create
     * @memberof ObjectUnsubscribeResponse
     * @static
     * @param {IObjectUnsubscribeResponse=} [properties] Properties to set
     * @returns {ObjectUnsubscribeResponse} ObjectUnsubscribeResponse instance
     */
    ObjectUnsubscribeResponse.create = function create(properties) {
        return new ObjectUnsubscribeResponse(properties);
    };

    /**
     * Encodes the specified ObjectUnsubscribeResponse message. Does not implicitly {@link ObjectUnsubscribeResponse.verify|verify} messages.
     * @function encode
     * @memberof ObjectUnsubscribeResponse
     * @static
     * @param {IObjectUnsubscribeResponse} message ObjectUnsubscribeResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ObjectUnsubscribeResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.result != null && Object.hasOwnProperty.call(message, "result"))
            $root.Reply.encode(message.result, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.ref != null && Object.hasOwnProperty.call(message, "ref"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.ref);
        return writer;
    };

    /**
     * Encodes the specified ObjectUnsubscribeResponse message, length delimited. Does not implicitly {@link ObjectUnsubscribeResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ObjectUnsubscribeResponse
     * @static
     * @param {IObjectUnsubscribeResponse} message ObjectUnsubscribeResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ObjectUnsubscribeResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an ObjectUnsubscribeResponse message from the specified reader or buffer.
     * @function decode
     * @memberof ObjectUnsubscribeResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ObjectUnsubscribeResponse} ObjectUnsubscribeResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ObjectUnsubscribeResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ObjectUnsubscribeResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.result = $root.Reply.decode(reader, reader.uint32());
                break;
            case 2:
                message.ref = reader.uint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an ObjectUnsubscribeResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ObjectUnsubscribeResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ObjectUnsubscribeResponse} ObjectUnsubscribeResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ObjectUnsubscribeResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an ObjectUnsubscribeResponse message.
     * @function verify
     * @memberof ObjectUnsubscribeResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ObjectUnsubscribeResponse.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.result != null && message.hasOwnProperty("result")) {
            var error = $root.Reply.verify(message.result);
            if (error)
                return "result." + error;
        }
        if (message.ref != null && message.hasOwnProperty("ref"))
            if (!$util.isInteger(message.ref))
                return "ref: integer expected";
        return null;
    };

    /**
     * Creates an ObjectUnsubscribeResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ObjectUnsubscribeResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ObjectUnsubscribeResponse} ObjectUnsubscribeResponse
     */
    ObjectUnsubscribeResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.ObjectUnsubscribeResponse)
            return object;
        var message = new $root.ObjectUnsubscribeResponse();
        if (object.result != null) {
            if (typeof object.result !== "object")
                throw TypeError(".ObjectUnsubscribeResponse.result: object expected");
            message.result = $root.Reply.fromObject(object.result);
        }
        if (object.ref != null)
            message.ref = object.ref >>> 0;
        return message;
    };

    /**
     * Creates a plain object from an ObjectUnsubscribeResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ObjectUnsubscribeResponse
     * @static
     * @param {ObjectUnsubscribeResponse} message ObjectUnsubscribeResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ObjectUnsubscribeResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.result = null;
            object.ref = 0;
        }
        if (message.result != null && message.hasOwnProperty("result"))
            object.result = $root.Reply.toObject(message.result, options);
        if (message.ref != null && message.hasOwnProperty("ref"))
            object.ref = message.ref;
        return object;
    };

    /**
     * Converts this ObjectUnsubscribeResponse to JSON.
     * @function toJSON
     * @memberof ObjectUnsubscribeResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ObjectUnsubscribeResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ObjectUnsubscribeResponse;
})();

module.exports = $root;
