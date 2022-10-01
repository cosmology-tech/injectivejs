import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryAuctionParamsRequest, QueryAuctionParamsResponse, QueryCurrentAuctionBasketRequest, QueryCurrentAuctionBasketResponse, QueryModuleStateRequest, QueryModuleStateResponse } from "./query";
/** Query defines the RPC service */

export interface Query {
  auctionParams(request?: QueryAuctionParamsRequest): Promise<QueryAuctionParamsResponse>;
  /*Retrieves auction params*/

  currentAuctionBasket(request?: QueryCurrentAuctionBasketRequest): Promise<QueryCurrentAuctionBasketResponse>;
  /*Retrieves current auction basket with current highest bid and bidder*/

  auctionModuleState(request?: QueryModuleStateRequest): Promise<QueryModuleStateResponse>;
  /*Retrieves the entire auction module's state*/

}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.auctionParams = this.auctionParams.bind(this);
    this.currentAuctionBasket = this.currentAuctionBasket.bind(this);
    this.auctionModuleState = this.auctionModuleState.bind(this);
  }

  auctionParams(request: QueryAuctionParamsRequest = {}): Promise<QueryAuctionParamsResponse> {
    const data = QueryAuctionParamsRequest.encode(request).finish();
    const promise = this.rpc.request("injective.auction.v1beta1.Query", "AuctionParams", data);
    return promise.then(data => QueryAuctionParamsResponse.decode(new _m0.Reader(data)));
  }

  currentAuctionBasket(request: QueryCurrentAuctionBasketRequest = {}): Promise<QueryCurrentAuctionBasketResponse> {
    const data = QueryCurrentAuctionBasketRequest.encode(request).finish();
    const promise = this.rpc.request("injective.auction.v1beta1.Query", "CurrentAuctionBasket", data);
    return promise.then(data => QueryCurrentAuctionBasketResponse.decode(new _m0.Reader(data)));
  }

  auctionModuleState(request: QueryModuleStateRequest = {}): Promise<QueryModuleStateResponse> {
    const data = QueryModuleStateRequest.encode(request).finish();
    const promise = this.rpc.request("injective.auction.v1beta1.Query", "AuctionModuleState", data);
    return promise.then(data => QueryModuleStateResponse.decode(new _m0.Reader(data)));
  }

}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    auctionParams(request?: QueryAuctionParamsRequest): Promise<QueryAuctionParamsResponse> {
      return queryService.auctionParams(request);
    },

    currentAuctionBasket(request?: QueryCurrentAuctionBasketRequest): Promise<QueryCurrentAuctionBasketResponse> {
      return queryService.currentAuctionBasket(request);
    },

    auctionModuleState(request?: QueryModuleStateRequest): Promise<QueryModuleStateResponse> {
      return queryService.auctionModuleState(request);
    }

  };
};