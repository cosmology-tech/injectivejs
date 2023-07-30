import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@cosmology/helpers";
/** base header ak message type, we can cast the bytes into corresponding message response type */

export interface TxResponseGenericMessage {
  header: string;
  data: Uint8Array;
}
/** base header ak message type, we can cast the bytes into corresponding message response type */

export interface TxResponseGenericMessageSDKType {
  header: string;
  data: Uint8Array;
}
/** improvised message to unpack length prefixed messages in tx response data */

export interface TxResponseData {
  messages: TxResponseGenericMessage[];
}
/** improvised message to unpack length prefixed messages in tx response data */

export interface TxResponseDataSDKType {
  messages: TxResponseGenericMessageSDKType[];
}

function createBaseTxResponseGenericMessage(): TxResponseGenericMessage {
  return {
    header: "",
    data: new Uint8Array()
  };
}

export const TxResponseGenericMessage = {
  encode(message: TxResponseGenericMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.header !== "") {
      writer.uint32(10).string(message.header);
    }

    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TxResponseGenericMessage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTxResponseGenericMessage();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.header = reader.string();
          break;

        case 2:
          message.data = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<TxResponseGenericMessage>): TxResponseGenericMessage {
    const message = createBaseTxResponseGenericMessage();
    message.header = object.header ?? "";
    message.data = object.data ?? new Uint8Array();
    return message;
  }

};

function createBaseTxResponseData(): TxResponseData {
  return {
    messages: []
  };
}

export const TxResponseData = {
  encode(message: TxResponseData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.messages) {
      TxResponseGenericMessage.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TxResponseData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTxResponseData();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.messages.push(TxResponseGenericMessage.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<TxResponseData>): TxResponseData {
    const message = createBaseTxResponseData();
    message.messages = object.messages?.map(e => TxResponseGenericMessage.fromPartial(e)) || [];
    return message;
  }

};