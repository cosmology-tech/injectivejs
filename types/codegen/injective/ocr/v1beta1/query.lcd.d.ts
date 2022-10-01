import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryFeedConfigRequest, QueryFeedConfigResponseSDKType, QueryFeedConfigInfoRequest, QueryFeedConfigInfoResponseSDKType, QueryLatestRoundRequest, QueryLatestRoundResponseSDKType, QueryLatestTransmissionDetailsRequest, QueryLatestTransmissionDetailsResponseSDKType, QueryOwedAmountRequest, QueryOwedAmountResponseSDKType, QueryModuleStateRequest, QueryModuleStateResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    feedConfig(params: QueryFeedConfigRequest): Promise<QueryFeedConfigResponseSDKType>;
    feedConfigInfo(params: QueryFeedConfigInfoRequest): Promise<QueryFeedConfigInfoResponseSDKType>;
    latestRound(params: QueryLatestRoundRequest): Promise<QueryLatestRoundResponseSDKType>;
    latestTransmissionDetails(params: QueryLatestTransmissionDetailsRequest): Promise<QueryLatestTransmissionDetailsResponseSDKType>;
    owedAmount(params: QueryOwedAmountRequest): Promise<QueryOwedAmountResponseSDKType>;
    ocrModuleState(_params?: QueryModuleStateRequest): Promise<QueryModuleStateResponseSDKType>;
}
