import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryFeedConfigRequest, QueryFeedConfigResponseSDKType, QueryFeedConfigInfoRequest, QueryFeedConfigInfoResponseSDKType, QueryLatestRoundRequest, QueryLatestRoundResponseSDKType, QueryLatestTransmissionDetailsRequest, QueryLatestTransmissionDetailsResponseSDKType, QueryOwedAmountRequest, QueryOwedAmountResponseSDKType, QueryModuleStateRequest, QueryModuleStateResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;

  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.feedConfig = this.feedConfig.bind(this);
    this.feedConfigInfo = this.feedConfigInfo.bind(this);
    this.latestRound = this.latestRound.bind(this);
    this.latestTransmissionDetails = this.latestTransmissionDetails.bind(this);
    this.owedAmount = this.owedAmount.bind(this);
    this.ocrModuleState = this.ocrModuleState.bind(this);
  }
  /* Params */


  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `chainlink/ocr/v1beta1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* Retrieves the OCR FeedConfig for a given FeedId */


  async feedConfig(params: QueryFeedConfigRequest): Promise<QueryFeedConfigResponseSDKType> {
    const endpoint = `chainlink/ocr/v1beta1/feed_config/${params.feedId}`;
    return await this.req.get<QueryFeedConfigResponseSDKType>(endpoint);
  }
  /* Retrieves the OCR FeedConfigInfo for a given FeedId */


  async feedConfigInfo(params: QueryFeedConfigInfoRequest): Promise<QueryFeedConfigInfoResponseSDKType> {
    const endpoint = `chainlink/ocr/v1beta1/feed_config_info/${params.feedId}`;
    return await this.req.get<QueryFeedConfigInfoResponseSDKType>(endpoint);
  }
  /* Retrieves latest round ID and data, including median answer for that round */


  async latestRound(params: QueryLatestRoundRequest): Promise<QueryLatestRoundResponseSDKType> {
    const endpoint = `chainlink/ocr/v1beta1/latest_round/${params.feedId}`;
    return await this.req.get<QueryLatestRoundResponseSDKType>(endpoint);
  }
  /* LatestTransmissionDetails returns details about the latest trasmission recorded on chain for the given feed ID. */


  async latestTransmissionDetails(params: QueryLatestTransmissionDetailsRequest): Promise<QueryLatestTransmissionDetailsResponseSDKType> {
    const endpoint = `chainlink/ocr/v1beta1/latest_transmission_details/${params.feedId}`;
    return await this.req.get<QueryLatestTransmissionDetailsResponseSDKType>(endpoint);
  }
  /* Retrieves transmitter's owed amount */


  async owedAmount(params: QueryOwedAmountRequest): Promise<QueryOwedAmountResponseSDKType> {
    const endpoint = `chainlink/ocr/v1beta1/owed_amount/${params.transmitter}`;
    return await this.req.get<QueryOwedAmountResponseSDKType>(endpoint);
  }
  /* Retrieves the entire OCR module's state */


  async ocrModuleState(_params: QueryModuleStateRequest = {}): Promise<QueryModuleStateResponseSDKType> {
    const endpoint = `chainlink/ocr/v1beta1/module_state`;
    return await this.req.get<QueryModuleStateResponseSDKType>(endpoint);
  }

}