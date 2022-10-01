import { Params, ParamsSDKType, Bid, BidSDKType } from "./auction";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
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
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
