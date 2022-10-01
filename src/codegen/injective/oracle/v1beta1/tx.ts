import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
/** MsgRelayProviderPrice defines a SDK message for setting a price through the provider oracle. */

export interface MsgRelayProviderPrices {
  sender: string;
  provider: string;
  symbols: string[];
  prices: string[];
}
/** MsgRelayProviderPrice defines a SDK message for setting a price through the provider oracle. */

export interface MsgRelayProviderPricesSDKType {
  sender: string;
  provider: string;
  symbols: string[];
  prices: string[];
}
export interface MsgRelayProviderPricesResponse {}
export interface MsgRelayProviderPricesResponseSDKType {}
/** MsgRelayPriceFeedPrice defines a SDK message for setting a price through the pricefeed oracle. */

export interface MsgRelayPriceFeedPrice {
  sender: string;
  base: string[];
  quote: string[];
  /** price defines the price of the oracle base and quote */

  price: string[];
}
/** MsgRelayPriceFeedPrice defines a SDK message for setting a price through the pricefeed oracle. */

export interface MsgRelayPriceFeedPriceSDKType {
  sender: string;
  base: string[];
  quote: string[];
  /** price defines the price of the oracle base and quote */

  price: string[];
}
export interface MsgRelayPriceFeedPriceResponse {}
export interface MsgRelayPriceFeedPriceResponseSDKType {}
export interface MsgRelayBandRates {
  relayer: string;
  symbols: string[];
  rates: Long[];
  resolveTimes: Long[];
  requestIDs: Long[];
}
export interface MsgRelayBandRatesSDKType {
  relayer: string;
  symbols: string[];
  rates: Long[];
  resolve_times: Long[];
  requestIDs: Long[];
}
export interface MsgRelayBandRatesResponse {}
export interface MsgRelayBandRatesResponseSDKType {}
/** MsgRelayCoinbaseMessages defines a SDK message for relaying price messages from Coinbase API. */

export interface MsgRelayCoinbaseMessages {
  sender: string;
  messages: Uint8Array[];
  signatures: Uint8Array[];
}
/** MsgRelayCoinbaseMessages defines a SDK message for relaying price messages from Coinbase API. */

export interface MsgRelayCoinbaseMessagesSDKType {
  sender: string;
  messages: Uint8Array[];
  signatures: Uint8Array[];
}
export interface MsgRelayCoinbaseMessagesResponse {}
export interface MsgRelayCoinbaseMessagesResponseSDKType {}
/** MsgRequestBandIBCRates defines a SDK message for requesting data from BandChain using IBC. */

export interface MsgRequestBandIBCRates {
  sender: string;
  requestId: Long;
}
/** MsgRequestBandIBCRates defines a SDK message for requesting data from BandChain using IBC. */

export interface MsgRequestBandIBCRatesSDKType {
  sender: string;
  request_id: Long;
}
/** MsgRequestDataResponse defines the Msg/RequestBandIBCRates response type. */

export interface MsgRequestBandIBCRatesResponse {}
/** MsgRequestDataResponse defines the Msg/RequestBandIBCRates response type. */

export interface MsgRequestBandIBCRatesResponseSDKType {}

function createBaseMsgRelayProviderPrices(): MsgRelayProviderPrices {
  return {
    sender: "",
    provider: "",
    symbols: [],
    prices: []
  };
}

export const MsgRelayProviderPrices = {
  encode(message: MsgRelayProviderPrices, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    if (message.provider !== "") {
      writer.uint32(18).string(message.provider);
    }

    for (const v of message.symbols) {
      writer.uint32(26).string(v!);
    }

    for (const v of message.prices) {
      writer.uint32(34).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRelayProviderPrices {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRelayProviderPrices();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.provider = reader.string();
          break;

        case 3:
          message.symbols.push(reader.string());
          break;

        case 4:
          message.prices.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgRelayProviderPrices>): MsgRelayProviderPrices {
    const message = createBaseMsgRelayProviderPrices();
    message.sender = object.sender ?? "";
    message.provider = object.provider ?? "";
    message.symbols = object.symbols?.map(e => e) || [];
    message.prices = object.prices?.map(e => e) || [];
    return message;
  }

};

function createBaseMsgRelayProviderPricesResponse(): MsgRelayProviderPricesResponse {
  return {};
}

export const MsgRelayProviderPricesResponse = {
  encode(_: MsgRelayProviderPricesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRelayProviderPricesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRelayProviderPricesResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(_: DeepPartial<MsgRelayProviderPricesResponse>): MsgRelayProviderPricesResponse {
    const message = createBaseMsgRelayProviderPricesResponse();
    return message;
  }

};

function createBaseMsgRelayPriceFeedPrice(): MsgRelayPriceFeedPrice {
  return {
    sender: "",
    base: [],
    quote: [],
    price: []
  };
}

export const MsgRelayPriceFeedPrice = {
  encode(message: MsgRelayPriceFeedPrice, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    for (const v of message.base) {
      writer.uint32(18).string(v!);
    }

    for (const v of message.quote) {
      writer.uint32(26).string(v!);
    }

    for (const v of message.price) {
      writer.uint32(34).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRelayPriceFeedPrice {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRelayPriceFeedPrice();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.base.push(reader.string());
          break;

        case 3:
          message.quote.push(reader.string());
          break;

        case 4:
          message.price.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgRelayPriceFeedPrice>): MsgRelayPriceFeedPrice {
    const message = createBaseMsgRelayPriceFeedPrice();
    message.sender = object.sender ?? "";
    message.base = object.base?.map(e => e) || [];
    message.quote = object.quote?.map(e => e) || [];
    message.price = object.price?.map(e => e) || [];
    return message;
  }

};

function createBaseMsgRelayPriceFeedPriceResponse(): MsgRelayPriceFeedPriceResponse {
  return {};
}

export const MsgRelayPriceFeedPriceResponse = {
  encode(_: MsgRelayPriceFeedPriceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRelayPriceFeedPriceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRelayPriceFeedPriceResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(_: DeepPartial<MsgRelayPriceFeedPriceResponse>): MsgRelayPriceFeedPriceResponse {
    const message = createBaseMsgRelayPriceFeedPriceResponse();
    return message;
  }

};

function createBaseMsgRelayBandRates(): MsgRelayBandRates {
  return {
    relayer: "",
    symbols: [],
    rates: [],
    resolveTimes: [],
    requestIDs: []
  };
}

export const MsgRelayBandRates = {
  encode(message: MsgRelayBandRates, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.relayer !== "") {
      writer.uint32(10).string(message.relayer);
    }

    for (const v of message.symbols) {
      writer.uint32(18).string(v!);
    }

    writer.uint32(26).fork();

    for (const v of message.rates) {
      writer.uint64(v);
    }

    writer.ldelim();
    writer.uint32(34).fork();

    for (const v of message.resolveTimes) {
      writer.uint64(v);
    }

    writer.ldelim();
    writer.uint32(42).fork();

    for (const v of message.requestIDs) {
      writer.uint64(v);
    }

    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRelayBandRates {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRelayBandRates();

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
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;

            while (reader.pos < end2) {
              message.rates.push((reader.uint64() as Long));
            }
          } else {
            message.rates.push((reader.uint64() as Long));
          }

          break;

        case 4:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;

            while (reader.pos < end2) {
              message.resolveTimes.push((reader.uint64() as Long));
            }
          } else {
            message.resolveTimes.push((reader.uint64() as Long));
          }

          break;

        case 5:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;

            while (reader.pos < end2) {
              message.requestIDs.push((reader.uint64() as Long));
            }
          } else {
            message.requestIDs.push((reader.uint64() as Long));
          }

          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgRelayBandRates>): MsgRelayBandRates {
    const message = createBaseMsgRelayBandRates();
    message.relayer = object.relayer ?? "";
    message.symbols = object.symbols?.map(e => e) || [];
    message.rates = object.rates?.map(e => Long.fromValue(e)) || [];
    message.resolveTimes = object.resolveTimes?.map(e => Long.fromValue(e)) || [];
    message.requestIDs = object.requestIDs?.map(e => Long.fromValue(e)) || [];
    return message;
  }

};

function createBaseMsgRelayBandRatesResponse(): MsgRelayBandRatesResponse {
  return {};
}

export const MsgRelayBandRatesResponse = {
  encode(_: MsgRelayBandRatesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRelayBandRatesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRelayBandRatesResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(_: DeepPartial<MsgRelayBandRatesResponse>): MsgRelayBandRatesResponse {
    const message = createBaseMsgRelayBandRatesResponse();
    return message;
  }

};

function createBaseMsgRelayCoinbaseMessages(): MsgRelayCoinbaseMessages {
  return {
    sender: "",
    messages: [],
    signatures: []
  };
}

export const MsgRelayCoinbaseMessages = {
  encode(message: MsgRelayCoinbaseMessages, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    for (const v of message.messages) {
      writer.uint32(18).bytes(v!);
    }

    for (const v of message.signatures) {
      writer.uint32(26).bytes(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRelayCoinbaseMessages {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRelayCoinbaseMessages();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.messages.push(reader.bytes());
          break;

        case 3:
          message.signatures.push(reader.bytes());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgRelayCoinbaseMessages>): MsgRelayCoinbaseMessages {
    const message = createBaseMsgRelayCoinbaseMessages();
    message.sender = object.sender ?? "";
    message.messages = object.messages?.map(e => e) || [];
    message.signatures = object.signatures?.map(e => e) || [];
    return message;
  }

};

function createBaseMsgRelayCoinbaseMessagesResponse(): MsgRelayCoinbaseMessagesResponse {
  return {};
}

export const MsgRelayCoinbaseMessagesResponse = {
  encode(_: MsgRelayCoinbaseMessagesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRelayCoinbaseMessagesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRelayCoinbaseMessagesResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(_: DeepPartial<MsgRelayCoinbaseMessagesResponse>): MsgRelayCoinbaseMessagesResponse {
    const message = createBaseMsgRelayCoinbaseMessagesResponse();
    return message;
  }

};

function createBaseMsgRequestBandIBCRates(): MsgRequestBandIBCRates {
  return {
    sender: "",
    requestId: Long.UZERO
  };
}

export const MsgRequestBandIBCRates = {
  encode(message: MsgRequestBandIBCRates, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    if (!message.requestId.isZero()) {
      writer.uint32(16).uint64(message.requestId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRequestBandIBCRates {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRequestBandIBCRates();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.requestId = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgRequestBandIBCRates>): MsgRequestBandIBCRates {
    const message = createBaseMsgRequestBandIBCRates();
    message.sender = object.sender ?? "";
    message.requestId = object.requestId !== undefined && object.requestId !== null ? Long.fromValue(object.requestId) : Long.UZERO;
    return message;
  }

};

function createBaseMsgRequestBandIBCRatesResponse(): MsgRequestBandIBCRatesResponse {
  return {};
}

export const MsgRequestBandIBCRatesResponse = {
  encode(_: MsgRequestBandIBCRatesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRequestBandIBCRatesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRequestBandIBCRatesResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(_: DeepPartial<MsgRequestBandIBCRatesResponse>): MsgRequestBandIBCRatesResponse {
    const message = createBaseMsgRequestBandIBCRatesResponse();
    return message;
  }

};