import { Params, ParamsSDKType, Bid, BidSDKType } from "./auction";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@cosmology/helpers";
/** GenesisState defines the auction module's genesis state. */

export interface GenesisState {
  /** params defines all the parameters of related to auction. */
  params: Params;
  /** current auction round */

  auctionRound: Long;
  /** current highest bid */

  highestBid: Bid;
  /** auction ending timestamp */

  auctionEndingTimestamp: Long;
}
/** GenesisState defines the auction module's genesis state. */

export interface GenesisStateSDKType {
  /** params defines all the parameters of related to auction. */
  params: ParamsSDKType;
  /** current auction round */

  auction_round: Long;
  /** current highest bid */

  highest_bid: BidSDKType;
  /** auction ending timestamp */

  auction_ending_timestamp: Long;
}

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    auctionRound: Long.UZERO,
    highestBid: undefined,
    auctionEndingTimestamp: Long.ZERO
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    if (!message.auctionRound.isZero()) {
      writer.uint32(16).uint64(message.auctionRound);
    }

    if (message.highestBid !== undefined) {
      Bid.encode(message.highestBid, writer.uint32(26).fork()).ldelim();
    }

    if (!message.auctionEndingTimestamp.isZero()) {
      writer.uint32(32).int64(message.auctionEndingTimestamp);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;

        case 2:
          message.auctionRound = (reader.uint64() as Long);
          break;

        case 3:
          message.highestBid = Bid.decode(reader, reader.uint32());
          break;

        case 4:
          message.auctionEndingTimestamp = (reader.int64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.auctionRound = object.auctionRound !== undefined && object.auctionRound !== null ? Long.fromValue(object.auctionRound) : Long.UZERO;
    message.highestBid = object.highestBid !== undefined && object.highestBid !== null ? Bid.fromPartial(object.highestBid) : undefined;
    message.auctionEndingTimestamp = object.auctionEndingTimestamp !== undefined && object.auctionEndingTimestamp !== null ? Long.fromValue(object.auctionEndingTimestamp) : Long.ZERO;
    return message;
  }

};