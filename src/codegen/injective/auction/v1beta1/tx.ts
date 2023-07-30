import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@cosmology/helpers";
/** Bid defines a SDK message for placing a bid for an auction */

export interface MsgBid {
  sender: string;
  /** amount of the bid in INJ tokens */

  bidAmount: Coin;
  /** the current auction round being bid on */

  round: Long;
}
/** Bid defines a SDK message for placing a bid for an auction */

export interface MsgBidSDKType {
  sender: string;
  /** amount of the bid in INJ tokens */

  bid_amount: CoinSDKType;
  /** the current auction round being bid on */

  round: Long;
}
export interface MsgBidResponse { }
export interface MsgBidResponseSDKType { }

function createBaseMsgBid(): MsgBid {
  return {
    sender: "",
    bidAmount: undefined,
    round: Long.UZERO
  };
}

export const MsgBid = {
  encode(message: MsgBid, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    if (message.bidAmount !== undefined) {
      Coin.encode(message.bidAmount, writer.uint32(18).fork()).ldelim();
    }

    if (!message.round.isZero()) {
      writer.uint32(24).uint64(message.round);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBid {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBid();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.bidAmount = Coin.decode(reader, reader.uint32());
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

  fromPartial(object: DeepPartial<MsgBid>): MsgBid {
    const message = createBaseMsgBid();
    message.sender = object.sender ?? "";
    message.bidAmount = object.bidAmount !== undefined && object.bidAmount !== null ? Coin.fromPartial(object.bidAmount) : undefined;
    message.round = object.round !== undefined && object.round !== null ? Long.fromValue(object.round) : Long.UZERO;
    return message;
  }

};

function createBaseMsgBidResponse(): MsgBidResponse {
  return {};
}

export const MsgBidResponse = {
  encode(_: MsgBidResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBidResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBidResponse();

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

  fromPartial(_: DeepPartial<MsgBidResponse>): MsgBidResponse {
    const message = createBaseMsgBidResponse();
    return message;
  }

};