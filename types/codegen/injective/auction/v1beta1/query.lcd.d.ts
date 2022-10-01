import { LCDClient } from "@osmonauts/lcd";
import { QueryAuctionParamsRequest, QueryAuctionParamsResponseSDKType, QueryCurrentAuctionBasketRequest, QueryCurrentAuctionBasketResponseSDKType, QueryModuleStateRequest, QueryModuleStateResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    auctionParams(_params?: QueryAuctionParamsRequest): Promise<QueryAuctionParamsResponseSDKType>;
    currentAuctionBasket(_params?: QueryCurrentAuctionBasketRequest): Promise<QueryCurrentAuctionBasketResponseSDKType>;
    auctionModuleState(_params?: QueryModuleStateRequest): Promise<QueryModuleStateResponseSDKType>;
}
