import { LCDClient } from "@cosmology/lcd";
import { QueryInsuranceParamsRequest, QueryInsuranceParamsResponseSDKType, QueryInsuranceFundRequest, QueryInsuranceFundResponseSDKType, QueryInsuranceFundsRequest, QueryInsuranceFundsResponseSDKType, QueryEstimatedRedemptionsRequest, QueryEstimatedRedemptionsResponseSDKType, QueryPendingRedemptionsRequest, QueryPendingRedemptionsResponseSDKType, QueryModuleStateRequest, QueryModuleStateResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    insuranceParams(_params?: QueryInsuranceParamsRequest): Promise<QueryInsuranceParamsResponseSDKType>;
    insuranceFund(params: QueryInsuranceFundRequest): Promise<QueryInsuranceFundResponseSDKType>;
    insuranceFunds(_params?: QueryInsuranceFundsRequest): Promise<QueryInsuranceFundsResponseSDKType>;
    estimatedRedemptions(params: QueryEstimatedRedemptionsRequest): Promise<QueryEstimatedRedemptionsResponseSDKType>;
    pendingRedemptions(params: QueryPendingRedemptionsRequest): Promise<QueryPendingRedemptionsResponseSDKType>;
    insuranceModuleState(_params?: QueryModuleStateRequest): Promise<QueryModuleStateResponseSDKType>;
}
