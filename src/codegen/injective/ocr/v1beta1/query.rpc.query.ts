import { Rpc } from "@cosmology/helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryFeedConfigRequest, QueryFeedConfigResponse, QueryFeedConfigInfoRequest, QueryFeedConfigInfoResponse, QueryLatestRoundRequest, QueryLatestRoundResponse, QueryLatestTransmissionDetailsRequest, QueryLatestTransmissionDetailsResponse, QueryOwedAmountRequest, QueryOwedAmountResponse, QueryModuleStateRequest, QueryModuleStateResponse } from "./query";
/** Query defines the RPC service */

export interface Query {
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /*null*/

  feedConfig(request: QueryFeedConfigRequest): Promise<QueryFeedConfigResponse>;
  /*Retrieves the OCR FeedConfig for a given FeedId*/

  feedConfigInfo(request: QueryFeedConfigInfoRequest): Promise<QueryFeedConfigInfoResponse>;
  /*Retrieves the OCR FeedConfigInfo for a given FeedId*/

  latestRound(request: QueryLatestRoundRequest): Promise<QueryLatestRoundResponse>;
  /*Retrieves latest round ID and data, including median answer for that round*/

  latestTransmissionDetails(request: QueryLatestTransmissionDetailsRequest): Promise<QueryLatestTransmissionDetailsResponse>;
  /*LatestTransmissionDetails returns details about the latest trasmission recorded on chain for the given feed ID.*/

  owedAmount(request: QueryOwedAmountRequest): Promise<QueryOwedAmountResponse>;
  /*Retrieves transmitter's owed amount*/

  ocrModuleState(request?: QueryModuleStateRequest): Promise<QueryModuleStateResponse>;
  /*Retrieves the entire OCR module's state*/

}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.feedConfig = this.feedConfig.bind(this);
    this.feedConfigInfo = this.feedConfigInfo.bind(this);
    this.latestRound = this.latestRound.bind(this);
    this.latestTransmissionDetails = this.latestTransmissionDetails.bind(this);
    this.owedAmount = this.owedAmount.bind(this);
    this.ocrModuleState = this.ocrModuleState.bind(this);
  }

  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("injective.ocr.v1beta1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  feedConfig(request: QueryFeedConfigRequest): Promise<QueryFeedConfigResponse> {
    const data = QueryFeedConfigRequest.encode(request).finish();
    const promise = this.rpc.request("injective.ocr.v1beta1.Query", "FeedConfig", data);
    return promise.then(data => QueryFeedConfigResponse.decode(new _m0.Reader(data)));
  }

  feedConfigInfo(request: QueryFeedConfigInfoRequest): Promise<QueryFeedConfigInfoResponse> {
    const data = QueryFeedConfigInfoRequest.encode(request).finish();
    const promise = this.rpc.request("injective.ocr.v1beta1.Query", "FeedConfigInfo", data);
    return promise.then(data => QueryFeedConfigInfoResponse.decode(new _m0.Reader(data)));
  }

  latestRound(request: QueryLatestRoundRequest): Promise<QueryLatestRoundResponse> {
    const data = QueryLatestRoundRequest.encode(request).finish();
    const promise = this.rpc.request("injective.ocr.v1beta1.Query", "LatestRound", data);
    return promise.then(data => QueryLatestRoundResponse.decode(new _m0.Reader(data)));
  }

  latestTransmissionDetails(request: QueryLatestTransmissionDetailsRequest): Promise<QueryLatestTransmissionDetailsResponse> {
    const data = QueryLatestTransmissionDetailsRequest.encode(request).finish();
    const promise = this.rpc.request("injective.ocr.v1beta1.Query", "LatestTransmissionDetails", data);
    return promise.then(data => QueryLatestTransmissionDetailsResponse.decode(new _m0.Reader(data)));
  }

  owedAmount(request: QueryOwedAmountRequest): Promise<QueryOwedAmountResponse> {
    const data = QueryOwedAmountRequest.encode(request).finish();
    const promise = this.rpc.request("injective.ocr.v1beta1.Query", "OwedAmount", data);
    return promise.then(data => QueryOwedAmountResponse.decode(new _m0.Reader(data)));
  }

  ocrModuleState(request: QueryModuleStateRequest = {}): Promise<QueryModuleStateResponse> {
    const data = QueryModuleStateRequest.encode(request).finish();
    const promise = this.rpc.request("injective.ocr.v1beta1.Query", "OcrModuleState", data);
    return promise.then(data => QueryModuleStateResponse.decode(new _m0.Reader(data)));
  }

}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },

    feedConfig(request: QueryFeedConfigRequest): Promise<QueryFeedConfigResponse> {
      return queryService.feedConfig(request);
    },

    feedConfigInfo(request: QueryFeedConfigInfoRequest): Promise<QueryFeedConfigInfoResponse> {
      return queryService.feedConfigInfo(request);
    },

    latestRound(request: QueryLatestRoundRequest): Promise<QueryLatestRoundResponse> {
      return queryService.latestRound(request);
    },

    latestTransmissionDetails(request: QueryLatestTransmissionDetailsRequest): Promise<QueryLatestTransmissionDetailsResponse> {
      return queryService.latestTransmissionDetails(request);
    },

    owedAmount(request: QueryOwedAmountRequest): Promise<QueryOwedAmountResponse> {
      return queryService.owedAmount(request);
    },

    ocrModuleState(request?: QueryModuleStateRequest): Promise<QueryModuleStateResponse> {
      return queryService.ocrModuleState(request);
    }

  };
};