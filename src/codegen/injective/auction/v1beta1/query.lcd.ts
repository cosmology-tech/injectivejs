import { LCDClient } from "@osmonauts/lcd";
import { QueryAuctionParamsRequest, QueryAuctionParamsResponseSDKType, QueryCurrentAuctionBasketRequest, QueryCurrentAuctionBasketResponseSDKType, QueryModuleStateRequest, QueryModuleStateResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;

  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.auctionParams = this.auctionParams.bind(this);
    this.currentAuctionBasket = this.currentAuctionBasket.bind(this);
    this.auctionModuleState = this.auctionModuleState.bind(this);
  }
  /* Retrieves auction params */


  async auctionParams(_params: QueryAuctionParamsRequest = {}): Promise<QueryAuctionParamsResponseSDKType> {
    const endpoint = `injective/auction/v1beta1/params`;
    return await this.req.get<QueryAuctionParamsResponseSDKType>(endpoint);
  }
  /* Retrieves current auction basket with current highest bid and bidder */


  async currentAuctionBasket(_params: QueryCurrentAuctionBasketRequest = {}): Promise<QueryCurrentAuctionBasketResponseSDKType> {
    const endpoint = `injective/auction/v1beta1/basket`;
    return await this.req.get<QueryCurrentAuctionBasketResponseSDKType>(endpoint);
  }
  /* Retrieves the entire auction module's state */


  async auctionModuleState(_params: QueryModuleStateRequest = {}): Promise<QueryModuleStateResponseSDKType> {
    const endpoint = `injective/auction/v1beta1/module_state`;
    return await this.req.get<QueryModuleStateResponseSDKType>(endpoint);
  }

}