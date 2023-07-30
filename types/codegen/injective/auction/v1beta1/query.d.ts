import { Params, ParamsSDKType } from "./auction";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { GenesisState, GenesisStateSDKType } from "./genesis";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@cosmology/helpers";
/** QueryAuctionParamsRequest is the request type for the Query/AuctionParams RPC method. */
export interface QueryAuctionParamsRequest {
}
/** QueryAuctionParamsRequest is the request type for the Query/AuctionParams RPC method. */
export interface QueryAuctionParamsRequestSDKType {
}
/** QueryAuctionParamsRequest is the response type for the Query/AuctionParams RPC method. */
export interface QueryAuctionParamsResponse {
    params: Params;
}
/** QueryAuctionParamsRequest is the response type for the Query/AuctionParams RPC method. */
export interface QueryAuctionParamsResponseSDKType {
    params: ParamsSDKType;
}
/** QueryCurrentAuctionBasketRequest is the request type for the Query/CurrentAuctionBasket RPC method. */
export interface QueryCurrentAuctionBasketRequest {
}
/** QueryCurrentAuctionBasketRequest is the request type for the Query/CurrentAuctionBasket RPC method. */
export interface QueryCurrentAuctionBasketRequestSDKType {
}
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
export interface QueryModuleStateRequest {
}
/** QueryModuleStateRequest is the request type for the Query/AuctionModuleState RPC method. */
export interface QueryModuleStateRequestSDKType {
}
/** QueryModuleStateResponse is the response type for the Query/AuctionModuleState RPC method. */
export interface QueryModuleStateResponse {
    state: GenesisState;
}
/** QueryModuleStateResponse is the response type for the Query/AuctionModuleState RPC method. */
export interface QueryModuleStateResponseSDKType {
    state: GenesisStateSDKType;
}
export declare const QueryAuctionParamsRequest: {
    encode(_: QueryAuctionParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAuctionParamsRequest;
    fromPartial(_: DeepPartial<QueryAuctionParamsRequest>): QueryAuctionParamsRequest;
};
export declare const QueryAuctionParamsResponse: {
    encode(message: QueryAuctionParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAuctionParamsResponse;
    fromPartial(object: DeepPartial<QueryAuctionParamsResponse>): QueryAuctionParamsResponse;
};
export declare const QueryCurrentAuctionBasketRequest: {
    encode(_: QueryCurrentAuctionBasketRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCurrentAuctionBasketRequest;
    fromPartial(_: DeepPartial<QueryCurrentAuctionBasketRequest>): QueryCurrentAuctionBasketRequest;
};
export declare const QueryCurrentAuctionBasketResponse: {
    encode(message: QueryCurrentAuctionBasketResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCurrentAuctionBasketResponse;
    fromPartial(object: DeepPartial<QueryCurrentAuctionBasketResponse>): QueryCurrentAuctionBasketResponse;
};
export declare const QueryModuleStateRequest: {
    encode(_: QueryModuleStateRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryModuleStateRequest;
    fromPartial(_: DeepPartial<QueryModuleStateRequest>): QueryModuleStateRequest;
};
export declare const QueryModuleStateResponse: {
    encode(message: QueryModuleStateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryModuleStateResponse;
    fromPartial(object: DeepPartial<QueryModuleStateResponse>): QueryModuleStateResponse;
};
