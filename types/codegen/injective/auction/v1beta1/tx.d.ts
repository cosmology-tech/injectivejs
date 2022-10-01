import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
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
export interface MsgBidResponse {
}
export interface MsgBidResponseSDKType {
}
export declare const MsgBid: {
    encode(message: MsgBid, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBid;
    fromPartial(object: DeepPartial<MsgBid>): MsgBid;
};
export declare const MsgBidResponse: {
    encode(_: MsgBidResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBidResponse;
    fromPartial(_: DeepPartial<MsgBidResponse>): MsgBidResponse;
};
