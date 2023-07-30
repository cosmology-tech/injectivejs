import { Rpc } from "@cosmology/helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryFeedConfigRequest, QueryFeedConfigResponse, QueryFeedConfigInfoRequest, QueryFeedConfigInfoResponse, QueryLatestRoundRequest, QueryLatestRoundResponse, QueryLatestTransmissionDetailsRequest, QueryLatestTransmissionDetailsResponse, QueryOwedAmountRequest, QueryOwedAmountResponse, QueryModuleStateRequest, QueryModuleStateResponse } from "./query";
/** Query defines the RPC service */
export interface Query {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    feedConfig(request: QueryFeedConfigRequest): Promise<QueryFeedConfigResponse>;
    feedConfigInfo(request: QueryFeedConfigInfoRequest): Promise<QueryFeedConfigInfoResponse>;
    latestRound(request: QueryLatestRoundRequest): Promise<QueryLatestRoundResponse>;
    latestTransmissionDetails(request: QueryLatestTransmissionDetailsRequest): Promise<QueryLatestTransmissionDetailsResponse>;
    owedAmount(request: QueryOwedAmountRequest): Promise<QueryOwedAmountResponse>;
    ocrModuleState(request?: QueryModuleStateRequest): Promise<QueryModuleStateResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    feedConfig(request: QueryFeedConfigRequest): Promise<QueryFeedConfigResponse>;
    feedConfigInfo(request: QueryFeedConfigInfoRequest): Promise<QueryFeedConfigInfoResponse>;
    latestRound(request: QueryLatestRoundRequest): Promise<QueryLatestRoundResponse>;
    latestTransmissionDetails(request: QueryLatestTransmissionDetailsRequest): Promise<QueryLatestTransmissionDetailsResponse>;
    owedAmount(request: QueryOwedAmountRequest): Promise<QueryOwedAmountResponse>;
    ocrModuleState(request?: QueryModuleStateRequest): Promise<QueryModuleStateResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    feedConfig(request: QueryFeedConfigRequest): Promise<QueryFeedConfigResponse>;
    feedConfigInfo(request: QueryFeedConfigInfoRequest): Promise<QueryFeedConfigInfoResponse>;
    latestRound(request: QueryLatestRoundRequest): Promise<QueryLatestRoundResponse>;
    latestTransmissionDetails(request: QueryLatestTransmissionDetailsRequest): Promise<QueryLatestTransmissionDetailsResponse>;
    owedAmount(request: QueryOwedAmountRequest): Promise<QueryOwedAmountResponse>;
    ocrModuleState(request?: QueryModuleStateRequest): Promise<QueryModuleStateResponse>;
};
