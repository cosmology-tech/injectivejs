import { Params, ParamsSDKType } from "./auction";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { GenesisState, GenesisStateSDKType } from "./genesis";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@cosmology/helpers";
/** QueryAuctionParamsRequest is the request type for the Query/AuctionParams RPC method. */

export interface QueryAuctionParamsRequest { }
/** QueryAuctionParamsRequest is the request type for the Query/AuctionParams RPC method. */

export interface QueryAuctionParamsRequestSDKType { }
/** QueryAuctionParamsRequest is the response type for the Query/AuctionParams RPC method. */

export interface QueryAuctionParamsResponse {
  params: Params;
}
/** QueryAuctionParamsRequest is the response type for the Query/AuctionParams RPC method. */

export interface QueryAuctionParamsResponseSDKType {
  params: ParamsSDKType;
}
/** QueryCurrentAuctionBasketRequest is the request type for the Query/CurrentAuctionBasket RPC method. */

export interface QueryCurrentAuctionBasketRequest { }
/** QueryCurrentAuctionBasketRequest is the request type for the Query/CurrentAuctionBasket RPC method. */

export interface QueryCurrentAuctionBasketRequestSDKType { }
/** QueryCurrentAuctionBasketResponse is the response type for the Query/CurrentAuctionBasket RPC method. */

export interface QueryCurrentAuctionBasketResponse {
  /** amount describes the amount put on auction */
  amount: Coin[];
  /** auctionRound describes current auction round */

  auctionRound: Long;
  /** auctionClosingTime describes auction close time for the round */

  auctionClosingTime: Long;
  /** highestBidder describes highest bidder on current round */

  highestBidder: string;
  /** highestBidAmount describes highest bid amount on current round */

  highestBidAmount: string;
}
/** QueryCurrentAuctionBasketResponse is the response type for the Query/CurrentAuctionBasket RPC method. */

export interface QueryCurrentAuctionBasketResponseSDKType {
  /** amount describes the amount put on auction */
  amount: CoinSDKType[];
  /** auctionRound describes current auction round */

  auctionRound: Long;
  /** auctionClosingTime describes auction close time for the round */

  auctionClosingTime: Long;
  /** highestBidder describes highest bidder on current round */

  highestBidder: string;
  /** highestBidAmount describes highest bid amount on current round */

  highestBidAmount: string;
}
/** QueryModuleStateRequest is the request type for the Query/AuctionModuleState RPC method. */

export interface QueryModuleStateRequest { }
/** QueryModuleStateRequest is the request type for the Query/AuctionModuleState RPC method. */

export interface QueryModuleStateRequestSDKType { }
/** QueryModuleStateResponse is the response type for the Query/AuctionModuleState RPC method. */

export interface QueryModuleStateResponse {
  state: GenesisState;
}
/** QueryModuleStateResponse is the response type for the Query/AuctionModuleState RPC method. */

export interface QueryModuleStateResponseSDKType {
  state: GenesisStateSDKType;
}

function createBaseQueryAuctionParamsRequest(): QueryAuctionParamsRequest {
  return {};
}

export const QueryAuctionParamsRequest = {
  encode(_: QueryAuctionParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAuctionParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAuctionParamsRequest();

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

  fromPartial(_: DeepPartial<QueryAuctionParamsRequest>): QueryAuctionParamsRequest {
    const message = createBaseQueryAuctionParamsRequest();
    return message;
  }

};

function createBaseQueryAuctionParamsResponse(): QueryAuctionParamsResponse {
  return {
    params: undefined
  };
}

export const QueryAuctionParamsResponse = {
  encode(message: QueryAuctionParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAuctionParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAuctionParamsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryAuctionParamsResponse>): QueryAuctionParamsResponse {
    const message = createBaseQueryAuctionParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }

};

function createBaseQueryCurrentAuctionBasketRequest(): QueryCurrentAuctionBasketRequest {
  return {};
}

export const QueryCurrentAuctionBasketRequest = {
  encode(_: QueryCurrentAuctionBasketRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCurrentAuctionBasketRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCurrentAuctionBasketRequest();

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

  fromPartial(_: DeepPartial<QueryCurrentAuctionBasketRequest>): QueryCurrentAuctionBasketRequest {
    const message = createBaseQueryCurrentAuctionBasketRequest();
    return message;
  }

};

function createBaseQueryCurrentAuctionBasketResponse(): QueryCurrentAuctionBasketResponse {
  return {
    amount: [],
    auctionRound: Long.UZERO,
    auctionClosingTime: Long.ZERO,
    highestBidder: "",
    highestBidAmount: ""
  };
}

export const QueryCurrentAuctionBasketResponse = {
  encode(message: QueryCurrentAuctionBasketResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (!message.auctionRound.isZero()) {
      writer.uint32(16).uint64(message.auctionRound);
    }

    if (!message.auctionClosingTime.isZero()) {
      writer.uint32(24).int64(message.auctionClosingTime);
    }

    if (message.highestBidder !== "") {
      writer.uint32(34).string(message.highestBidder);
    }

    if (message.highestBidAmount !== "") {
      writer.uint32(42).string(message.highestBidAmount);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCurrentAuctionBasketResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCurrentAuctionBasketResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;

        case 2:
          message.auctionRound = (reader.uint64() as Long);
          break;

        case 3:
          message.auctionClosingTime = (reader.int64() as Long);
          break;

        case 4:
          message.highestBidder = reader.string();
          break;

        case 5:
          message.highestBidAmount = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryCurrentAuctionBasketResponse>): QueryCurrentAuctionBasketResponse {
    const message = createBaseQueryCurrentAuctionBasketResponse();
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    message.auctionRound = object.auctionRound !== undefined && object.auctionRound !== null ? Long.fromValue(object.auctionRound) : Long.UZERO;
    message.auctionClosingTime = object.auctionClosingTime !== undefined && object.auctionClosingTime !== null ? Long.fromValue(object.auctionClosingTime) : Long.ZERO;
    message.highestBidder = object.highestBidder ?? "";
    message.highestBidAmount = object.highestBidAmount ?? "";
    return message;
  }

};

function createBaseQueryModuleStateRequest(): QueryModuleStateRequest {
  return {};
}

export const QueryModuleStateRequest = {
  encode(_: QueryModuleStateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryModuleStateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryModuleStateRequest();

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

  fromPartial(_: DeepPartial<QueryModuleStateRequest>): QueryModuleStateRequest {
    const message = createBaseQueryModuleStateRequest();
    return message;
  }

};

function createBaseQueryModuleStateResponse(): QueryModuleStateResponse {
  return {
    state: undefined
  };
}

export const QueryModuleStateResponse = {
  encode(message: QueryModuleStateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.state !== undefined) {
      GenesisState.encode(message.state, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryModuleStateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryModuleStateResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.state = GenesisState.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryModuleStateResponse>): QueryModuleStateResponse {
    const message = createBaseQueryModuleStateResponse();
    message.state = object.state !== undefined && object.state !== null ? GenesisState.fromPartial(object.state) : undefined;
    return message;
  }

};