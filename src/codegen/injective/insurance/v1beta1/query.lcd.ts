import { LCDClient } from "@osmonauts/lcd";
import { QueryInsuranceParamsRequest, QueryInsuranceParamsResponseSDKType, QueryInsuranceFundRequest, QueryInsuranceFundResponseSDKType, QueryInsuranceFundsRequest, QueryInsuranceFundsResponseSDKType, QueryEstimatedRedemptionsRequest, QueryEstimatedRedemptionsResponseSDKType, QueryPendingRedemptionsRequest, QueryPendingRedemptionsResponseSDKType, QueryModuleStateRequest, QueryModuleStateResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;

  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.insuranceParams = this.insuranceParams.bind(this);
    this.insuranceFund = this.insuranceFund.bind(this);
    this.insuranceFunds = this.insuranceFunds.bind(this);
    this.estimatedRedemptions = this.estimatedRedemptions.bind(this);
    this.pendingRedemptions = this.pendingRedemptions.bind(this);
    this.insuranceModuleState = this.insuranceModuleState.bind(this);
  }
  /* Retrieves insurance params */


  async insuranceParams(_params: QueryInsuranceParamsRequest = {}): Promise<QueryInsuranceParamsResponseSDKType> {
    const endpoint = `injective/insurance/v1beta1/params`;
    return await this.req.get<QueryInsuranceParamsResponseSDKType>(endpoint);
  }
  /* Retrieves individual insurance fund information from market id */


  async insuranceFund(params: QueryInsuranceFundRequest): Promise<QueryInsuranceFundResponseSDKType> {
    const endpoint = `injective/insurance/v1beta1/insurance_fund/${params.marketId}`;
    return await this.req.get<QueryInsuranceFundResponseSDKType>(endpoint);
  }
  /* Retrieves all insurance funds */


  async insuranceFunds(_params: QueryInsuranceFundsRequest = {}): Promise<QueryInsuranceFundsResponseSDKType> {
    const endpoint = `injective/insurance/v1beta1/insurance_funds`;
    return await this.req.get<QueryInsuranceFundsResponseSDKType>(endpoint);
  }
  /* Retrives the value of insurance fund share token at current price (not pending redemption) */


  async estimatedRedemptions(params: QueryEstimatedRedemptionsRequest): Promise<QueryEstimatedRedemptionsResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.marketId !== "undefined") {
      options.params.marketId = params.marketId;
    }

    if (typeof params?.address !== "undefined") {
      options.params.address = params.address;
    }

    const endpoint = `injective/insurance/v1beta1/estimated_redemptions`;
    return await this.req.get<QueryEstimatedRedemptionsResponseSDKType>(endpoint, options);
  }
  /* Retrieves pending redemptions' share token at current price */


  async pendingRedemptions(params: QueryPendingRedemptionsRequest): Promise<QueryPendingRedemptionsResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.marketId !== "undefined") {
      options.params.marketId = params.marketId;
    }

    if (typeof params?.address !== "undefined") {
      options.params.address = params.address;
    }

    const endpoint = `injective/insurance/v1beta1/pending_redemptions`;
    return await this.req.get<QueryPendingRedemptionsResponseSDKType>(endpoint, options);
  }
  /* Retrieves the entire insurance module's state */


  async insuranceModuleState(_params: QueryModuleStateRequest = {}): Promise<QueryModuleStateResponseSDKType> {
    const endpoint = `injective/insurance/v1beta1/module_state`;
    return await this.req.get<QueryModuleStateResponseSDKType>(endpoint);
  }

}