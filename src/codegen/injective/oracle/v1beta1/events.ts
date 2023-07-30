import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@cosmology/helpers";
export interface SetChainlinkPriceEvent {
  feedId: string;
  answer: string;
  timestamp: Long;
}
export interface SetChainlinkPriceEventSDKType {
  feed_id: string;
  answer: string;
  timestamp: Long;
}
/** Event type upon set ref */

export interface SetBandPriceEvent {
  relayer: string;
  symbol: string;
  price: string;
  resolveTime: Long;
  requestId: Long;
}
/** Event type upon set ref */

export interface SetBandPriceEventSDKType {
  relayer: string;
  symbol: string;
  price: string;
  resolve_time: Long;
  request_id: Long;
}
export interface SetBandIBCPriceEvent {
  relayer: string;
  symbols: string[];
  prices: string[];
  resolveTime: Long;
  requestId: Long;
  clientId: Long;
}
export interface SetBandIBCPriceEventSDKType {
  relayer: string;
  symbols: string[];
  prices: string[];
  resolve_time: Long;
  request_id: Long;
  client_id: Long;
}
export interface EventBandIBCAckSuccess {
  ackResult: string;
  clientId: Long;
}
export interface EventBandIBCAckSuccessSDKType {
  ack_result: string;
  client_id: Long;
}
export interface EventBandIBCAckError {
  ackError: string;
  clientId: Long;
}
export interface EventBandIBCAckErrorSDKType {
  ack_error: string;
  client_id: Long;
}
export interface EventBandIBCResponseTimeout {
  clientId: Long;
}
export interface EventBandIBCResponseTimeoutSDKType {
  client_id: Long;
}
export interface SetPriceFeedPriceEvent {
  relayer: string;
  base: string;
  quote: string;
  /** price defines the price of the oracle base and quote */

  price: string;
}
export interface SetPriceFeedPriceEventSDKType {
  relayer: string;
  base: string;
  quote: string;
  /** price defines the price of the oracle base and quote */

  price: string;
}
export interface SetProviderPriceEvent {
  provider: string;
  relayer: string;
  symbol: string;
  price: string;
}
export interface SetProviderPriceEventSDKType {
  provider: string;
  relayer: string;
  symbol: string;
  price: string;
}
export interface SetCoinbasePriceEvent {
  symbol: string;
  price: string;
  timestamp: Long;
}
export interface SetCoinbasePriceEventSDKType {
  symbol: string;
  price: string;
  timestamp: Long;
}

function createBaseSetChainlinkPriceEvent(): SetChainlinkPriceEvent {
  return {
    feedId: "",
    answer: "",
    timestamp: Long.UZERO
  };
}

export const SetChainlinkPriceEvent = {
  encode(message: SetChainlinkPriceEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.feedId !== "") {
      writer.uint32(10).string(message.feedId);
    }

    if (message.answer !== "") {
      writer.uint32(18).string(message.answer);
    }

    if (!message.timestamp.isZero()) {
      writer.uint32(24).uint64(message.timestamp);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetChainlinkPriceEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetChainlinkPriceEvent();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.feedId = reader.string();
          break;

        case 2:
          message.answer = reader.string();
          break;

        case 3:
          message.timestamp = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<SetChainlinkPriceEvent>): SetChainlinkPriceEvent {
    const message = createBaseSetChainlinkPriceEvent();
    message.feedId = object.feedId ?? "";
    message.answer = object.answer ?? "";
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? Long.fromValue(object.timestamp) : Long.UZERO;
    return message;
  }

};

function createBaseSetBandPriceEvent(): SetBandPriceEvent {
  return {
    relayer: "",
    symbol: "",
    price: "",
    resolveTime: Long.UZERO,
    requestId: Long.UZERO
  };
}

export const SetBandPriceEvent = {
  encode(message: SetBandPriceEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.relayer !== "") {
      writer.uint32(10).string(message.relayer);
    }

    if (message.symbol !== "") {
      writer.uint32(18).string(message.symbol);
    }

    if (message.price !== "") {
      writer.uint32(26).string(message.price);
    }

    if (!message.resolveTime.isZero()) {
      writer.uint32(32).uint64(message.resolveTime);
    }

    if (!message.requestId.isZero()) {
      writer.uint32(40).uint64(message.requestId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetBandPriceEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetBandPriceEvent();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.relayer = reader.string();
          break;

        case 2:
          message.symbol = reader.string();
          break;

        case 3:
          message.price = reader.string();
          break;

        case 4:
          message.resolveTime = (reader.uint64() as Long);
          break;

        case 5:
          message.requestId = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<SetBandPriceEvent>): SetBandPriceEvent {
    const message = createBaseSetBandPriceEvent();
    message.relayer = object.relayer ?? "";
    message.symbol = object.symbol ?? "";
    message.price = object.price ?? "";
    message.resolveTime = object.resolveTime !== undefined && object.resolveTime !== null ? Long.fromValue(object.resolveTime) : Long.UZERO;
    message.requestId = object.requestId !== undefined && object.requestId !== null ? Long.fromValue(object.requestId) : Long.UZERO;
    return message;
  }

};

function createBaseSetBandIBCPriceEvent(): SetBandIBCPriceEvent {
  return {
    relayer: "",
    symbols: [],
    prices: [],
    resolveTime: Long.UZERO,
    requestId: Long.UZERO,
    clientId: Long.ZERO
  };
}

export const SetBandIBCPriceEvent = {
  encode(message: SetBandIBCPriceEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.relayer !== "") {
      writer.uint32(10).string(message.relayer);
    }

    for (const v of message.symbols) {
      writer.uint32(18).string(v!);
    }

    for (const v of message.prices) {
      writer.uint32(26).string(v!);
    }

    if (!message.resolveTime.isZero()) {
      writer.uint32(32).uint64(message.resolveTime);
    }

    if (!message.requestId.isZero()) {
      writer.uint32(40).uint64(message.requestId);
    }

    if (!message.clientId.isZero()) {
      writer.uint32(48).int64(message.clientId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetBandIBCPriceEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetBandIBCPriceEvent();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.relayer = reader.string();
          break;

        case 2:
          message.symbols.push(reader.string());
          break;

        case 3:
          message.prices.push(reader.string());
          break;

        case 4:
          message.resolveTime = (reader.uint64() as Long);
          break;

        case 5:
          message.requestId = (reader.uint64() as Long);
          break;

        case 6:
          message.clientId = (reader.int64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<SetBandIBCPriceEvent>): SetBandIBCPriceEvent {
    const message = createBaseSetBandIBCPriceEvent();
    message.relayer = object.relayer ?? "";
    message.symbols = object.symbols?.map(e => e) || [];
    message.prices = object.prices?.map(e => e) || [];
    message.resolveTime = object.resolveTime !== undefined && object.resolveTime !== null ? Long.fromValue(object.resolveTime) : Long.UZERO;
    message.requestId = object.requestId !== undefined && object.requestId !== null ? Long.fromValue(object.requestId) : Long.UZERO;
    message.clientId = object.clientId !== undefined && object.clientId !== null ? Long.fromValue(object.clientId) : Long.ZERO;
    return message;
  }

};

function createBaseEventBandIBCAckSuccess(): EventBandIBCAckSuccess {
  return {
    ackResult: "",
    clientId: Long.ZERO
  };
}

export const EventBandIBCAckSuccess = {
  encode(message: EventBandIBCAckSuccess, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ackResult !== "") {
      writer.uint32(10).string(message.ackResult);
    }

    if (!message.clientId.isZero()) {
      writer.uint32(16).int64(message.clientId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventBandIBCAckSuccess {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventBandIBCAckSuccess();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.ackResult = reader.string();
          break;

        case 2:
          message.clientId = (reader.int64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<EventBandIBCAckSuccess>): EventBandIBCAckSuccess {
    const message = createBaseEventBandIBCAckSuccess();
    message.ackResult = object.ackResult ?? "";
    message.clientId = object.clientId !== undefined && object.clientId !== null ? Long.fromValue(object.clientId) : Long.ZERO;
    return message;
  }

};

function createBaseEventBandIBCAckError(): EventBandIBCAckError {
  return {
    ackError: "",
    clientId: Long.ZERO
  };
}

export const EventBandIBCAckError = {
  encode(message: EventBandIBCAckError, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ackError !== "") {
      writer.uint32(10).string(message.ackError);
    }

    if (!message.clientId.isZero()) {
      writer.uint32(16).int64(message.clientId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventBandIBCAckError {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventBandIBCAckError();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.ackError = reader.string();
          break;

        case 2:
          message.clientId = (reader.int64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<EventBandIBCAckError>): EventBandIBCAckError {
    const message = createBaseEventBandIBCAckError();
    message.ackError = object.ackError ?? "";
    message.clientId = object.clientId !== undefined && object.clientId !== null ? Long.fromValue(object.clientId) : Long.ZERO;
    return message;
  }

};

function createBaseEventBandIBCResponseTimeout(): EventBandIBCResponseTimeout {
  return {
    clientId: Long.ZERO
  };
}

export const EventBandIBCResponseTimeout = {
  encode(message: EventBandIBCResponseTimeout, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.clientId.isZero()) {
      writer.uint32(8).int64(message.clientId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventBandIBCResponseTimeout {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventBandIBCResponseTimeout();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.clientId = (reader.int64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<EventBandIBCResponseTimeout>): EventBandIBCResponseTimeout {
    const message = createBaseEventBandIBCResponseTimeout();
    message.clientId = object.clientId !== undefined && object.clientId !== null ? Long.fromValue(object.clientId) : Long.ZERO;
    return message;
  }

};

function createBaseSetPriceFeedPriceEvent(): SetPriceFeedPriceEvent {
  return {
    relayer: "",
    base: "",
    quote: "",
    price: ""
  };
}

export const SetPriceFeedPriceEvent = {
  encode(message: SetPriceFeedPriceEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.relayer !== "") {
      writer.uint32(10).string(message.relayer);
    }

    if (message.base !== "") {
      writer.uint32(18).string(message.base);
    }

    if (message.quote !== "") {
      writer.uint32(26).string(message.quote);
    }

    if (message.price !== "") {
      writer.uint32(34).string(message.price);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetPriceFeedPriceEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetPriceFeedPriceEvent();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.relayer = reader.string();
          break;

        case 2:
          message.base = reader.string();
          break;

        case 3:
          message.quote = reader.string();
          break;

        case 4:
          message.price = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<SetPriceFeedPriceEvent>): SetPriceFeedPriceEvent {
    const message = createBaseSetPriceFeedPriceEvent();
    message.relayer = object.relayer ?? "";
    message.base = object.base ?? "";
    message.quote = object.quote ?? "";
    message.price = object.price ?? "";
    return message;
  }

};

function createBaseSetProviderPriceEvent(): SetProviderPriceEvent {
  return {
    provider: "",
    relayer: "",
    symbol: "",
    price: ""
  };
}

export const SetProviderPriceEvent = {
  encode(message: SetProviderPriceEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.provider !== "") {
      writer.uint32(10).string(message.provider);
    }

    if (message.relayer !== "") {
      writer.uint32(18).string(message.relayer);
    }

    if (message.symbol !== "") {
      writer.uint32(26).string(message.symbol);
    }

    if (message.price !== "") {
      writer.uint32(34).string(message.price);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetProviderPriceEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetProviderPriceEvent();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.provider = reader.string();
          break;

        case 2:
          message.relayer = reader.string();
          break;

        case 3:
          message.symbol = reader.string();
          break;

        case 4:
          message.price = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<SetProviderPriceEvent>): SetProviderPriceEvent {
    const message = createBaseSetProviderPriceEvent();
    message.provider = object.provider ?? "";
    message.relayer = object.relayer ?? "";
    message.symbol = object.symbol ?? "";
    message.price = object.price ?? "";
    return message;
  }

};

function createBaseSetCoinbasePriceEvent(): SetCoinbasePriceEvent {
  return {
    symbol: "",
    price: "",
    timestamp: Long.UZERO
  };
}

export const SetCoinbasePriceEvent = {
  encode(message: SetCoinbasePriceEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.symbol !== "") {
      writer.uint32(10).string(message.symbol);
    }

    if (message.price !== "") {
      writer.uint32(18).string(message.price);
    }

    if (!message.timestamp.isZero()) {
      writer.uint32(24).uint64(message.timestamp);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetCoinbasePriceEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetCoinbasePriceEvent();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.symbol = reader.string();
          break;

        case 2:
          message.price = reader.string();
          break;

        case 3:
          message.timestamp = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<SetCoinbasePriceEvent>): SetCoinbasePriceEvent {
    const message = createBaseSetCoinbasePriceEvent();
    message.symbol = object.symbol ?? "";
    message.price = object.price ?? "";
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? Long.fromValue(object.timestamp) : Long.UZERO;
    return message;
  }

};