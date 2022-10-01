import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
export interface Params {
  /** auction_period_duration defines the auction period duration */
  auctionPeriod: Long;
  /** min_next_bid_increment_rate defines the minimum increment rate for new bids */

  minNextBidIncrementRate: string;
}
export interface ParamsSDKType {
  /** auction_period_duration defines the auction period duration */
  auction_period: Long;
  /** min_next_bid_increment_rate defines the minimum increment rate for new bids */

  min_next_bid_increment_rate: string;
}
export interface Bid {
  bidder: string;
  amount: string;
}
export interface BidSDKType {
  bidder: string;
  amount: string;
}
export interface EventBid {
  /** bidder describes the address of bidder */
  bidder: string;
  /** amount describes the amount the bidder put on the auction */

  amount: string;
  /** round defines the round number of auction */

  round: Long;
}
export interface EventBidSDKType {
  /** bidder describes the address of bidder */
  bidder: string;
  /** amount describes the amount the bidder put on the auction */

  amount: string;
  /** round defines the round number of auction */

  round: Long;
}
export interface EventAuctionResult {
  /** winner describes the address of the winner */
  winner: string;
  /** amount describes the amount the winner get from the auction */

  amount: string;
  /** round defines the round number of auction */

  round: Long;
}
export interface EventAuctionResultSDKType {
  /** winner describes the address of the winner */
  winner: string;
  /** amount describes the amount the winner get from the auction */

  amount: string;
  /** round defines the round number of auction */

  round: Long;
}
export interface EventAuctionStart {
  /** round defines the round number of auction */
  round: Long;
  /** ending_timestamp describes auction end time */

  endingTimestamp: Long;
  /** new_basket describes auction module balance at the time of new auction start */

  newBasket: Coin[];
}
export interface EventAuctionStartSDKType {
  /** round defines the round number of auction */
  round: Long;
  /** ending_timestamp describes auction end time */

  ending_timestamp: Long;
  /** new_basket describes auction module balance at the time of new auction start */

  new_basket: CoinSDKType[];
}

function createBaseParams(): Params {
  return {
    auctionPeriod: Long.ZERO,
    minNextBidIncrementRate: ""
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.auctionPeriod.isZero()) {
      writer.uint32(8).int64(message.auctionPeriod);
    }

    if (message.minNextBidIncrementRate !== "") {
      writer.uint32(18).string(message.minNextBidIncrementRate);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.auctionPeriod = (reader.int64() as Long);
          break;

        case 2:
          message.minNextBidIncrementRate = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.auctionPeriod = object.auctionPeriod !== undefined && object.auctionPeriod !== null ? Long.fromValue(object.auctionPeriod) : Long.ZERO;
    message.minNextBidIncrementRate = object.minNextBidIncrementRate ?? "";
    return message;
  }

};

function createBaseBid(): Bid {
  return {
    bidder: "",
    amount: ""
  };
}

export const Bid = {
  encode(message: Bid, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bidder !== "") {
      writer.uint32(10).string(message.bidder);
    }

    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Bid {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBid();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.bidder = reader.string();
          break;

        case 2:
          message.amount = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Bid>): Bid {
    const message = createBaseBid();
    message.bidder = object.bidder ?? "";
    message.amount = object.amount ?? "";
    return message;
  }

};

function createBaseEventBid(): EventBid {
  return {
    bidder: "",
    amount: "",
    round: Long.UZERO
  };
}

export const EventBid = {
  encode(message: EventBid, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bidder !== "") {
      writer.uint32(10).string(message.bidder);
    }

    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }

    if (!message.round.isZero()) {
      writer.uint32(24).uint64(message.round);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventBid {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventBid();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.bidder = reader.string();
          break;

        case 2:
          message.amount = reader.string();
          break;

        case 3:
          message.round = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<EventBid>): EventBid {
    const message = createBaseEventBid();
    message.bidder = object.bidder ?? "";
    message.amount = object.amount ?? "";
    message.round = object.round !== undefined && object.round !== null ? Long.fromValue(object.round) : Long.UZERO;
    return message;
  }

};

function createBaseEventAuctionResult(): EventAuctionResult {
  return {
    winner: "",
    amount: "",
    round: Long.UZERO
  };
}

export const EventAuctionResult = {
  encode(message: EventAuctionResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.winner !== "") {
      writer.uint32(10).string(message.winner);
    }

    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }

    if (!message.round.isZero()) {
      writer.uint32(24).uint64(message.round);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventAuctionResult {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventAuctionResult();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.winner = reader.string();
          break;

        case 2:
          message.amount = reader.string();
          break;

        case 3:
          message.round = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<EventAuctionResult>): EventAuctionResult {
    const message = createBaseEventAuctionResult();
    message.winner = object.winner ?? "";
    message.amount = object.amount ?? "";
    message.round = object.round !== undefined && object.round !== null ? Long.fromValue(object.round) : Long.UZERO;
    return message;
  }

};

function createBaseEventAuctionStart(): EventAuctionStart {
  return {
    round: Long.UZERO,
    endingTimestamp: Long.ZERO,
    newBasket: []
  };
}

export const EventAuctionStart = {
  encode(message: EventAuctionStart, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.round.isZero()) {
      writer.uint32(8).uint64(message.round);
    }

    if (!message.endingTimestamp.isZero()) {
      writer.uint32(16).int64(message.endingTimestamp);
    }

    for (const v of message.newBasket) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventAuctionStart {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventAuctionStart();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.round = (reader.uint64() as Long);
          break;

        case 2:
          message.endingTimestamp = (reader.int64() as Long);
          break;

        case 3:
          message.newBasket.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<EventAuctionStart>): EventAuctionStart {
    const message = createBaseEventAuctionStart();
    message.round = object.round !== undefined && object.round !== null ? Long.fromValue(object.round) : Long.UZERO;
    message.endingTimestamp = object.endingTimestamp !== undefined && object.endingTimestamp !== null ? Long.fromValue(object.endingTimestamp) : Long.ZERO;
    message.newBasket = object.newBasket?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }

};