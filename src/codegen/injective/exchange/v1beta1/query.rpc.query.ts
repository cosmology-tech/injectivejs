import { Rpc } from "@cosmology/helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryExchangeParamsRequest, QueryExchangeParamsResponse, QuerySubaccountDepositsRequest, QuerySubaccountDepositsResponse, QuerySubaccountDepositRequest, QuerySubaccountDepositResponse, QueryExchangeBalancesRequest, QueryExchangeBalancesResponse, QuerySpotMarketsRequest, QuerySpotMarketsResponse, QuerySpotMarketRequest, QuerySpotMarketResponse, QuerySpotOrderbookRequest, QuerySpotOrderbookResponse, QueryTraderSpotOrdersRequest, QueryTraderSpotOrdersResponse, QuerySpotOrdersByHashesRequest, QuerySpotOrdersByHashesResponse, QuerySubaccountOrdersRequest, QuerySubaccountOrdersResponse, QuerySpotMidPriceAndTOBRequest, QuerySpotMidPriceAndTOBResponse, QueryDerivativeMidPriceAndTOBRequest, QueryDerivativeMidPriceAndTOBResponse, QueryDerivativeOrderbookRequest, QueryDerivativeOrderbookResponse, QueryTraderDerivativeOrdersRequest, QueryTraderDerivativeOrdersResponse, QueryDerivativeOrdersByHashesRequest, QueryDerivativeOrdersByHashesResponse, QueryDerivativeMarketsRequest, QueryDerivativeMarketsResponse, QueryDerivativeMarketRequest, QueryDerivativeMarketResponse, QueryDerivativeMarketAddressRequest, QueryDerivativeMarketAddressResponse, QuerySubaccountTradeNonceRequest, QuerySubaccountTradeNonceResponse, QueryModuleStateRequest, QueryModuleStateResponse, QueryPositionsRequest, QueryPositionsResponse, QuerySubaccountPositionsRequest, QuerySubaccountPositionsResponse, QuerySubaccountPositionInMarketRequest, QuerySubaccountPositionInMarketResponse, QuerySubaccountEffectivePositionInMarketRequest, QuerySubaccountEffectivePositionInMarketResponse, QueryPerpetualMarketInfoRequest, QueryPerpetualMarketInfoResponse, QueryExpiryFuturesMarketInfoRequest, QueryExpiryFuturesMarketInfoResponse, QueryPerpetualMarketFundingRequest, QueryPerpetualMarketFundingResponse, QuerySubaccountOrderMetadataRequest, QuerySubaccountOrderMetadataResponse, QueryTradeRewardPointsRequest, QueryTradeRewardPointsResponse, QueryTradeRewardCampaignRequest, QueryTradeRewardCampaignResponse, QueryFeeDiscountAccountInfoRequest, QueryFeeDiscountAccountInfoResponse, QueryFeeDiscountScheduleRequest, QueryFeeDiscountScheduleResponse, QueryBalanceMismatchesRequest, QueryBalanceMismatchesResponse, QueryBalanceWithBalanceHoldsRequest, QueryBalanceWithBalanceHoldsResponse, QueryFeeDiscountTierStatisticsRequest, QueryFeeDiscountTierStatisticsResponse, NinjaVaultInfosRequest, NinjaVaultInfosResponse, QueryMarketIDFromVaultRequest, QueryMarketIDFromVaultResponse, QueryHistoricalTradeRecordsRequest, QueryHistoricalTradeRecordsResponse, QueryIsOptedOutOfRewardsRequest, QueryIsOptedOutOfRewardsResponse, QueryOptedOutOfRewardsAccountsRequest, QueryOptedOutOfRewardsAccountsResponse, QueryMarketVolatilityRequest, QueryMarketVolatilityResponse, QueryBinaryMarketsRequest, QueryBinaryMarketsResponse, QueryTraderDerivativeConditionalOrdersRequest, QueryTraderDerivativeConditionalOrdersResponse } from "./query";
/** Query defines the RPC service */

export interface Query {
  queryExchangeParams(request?: QueryExchangeParamsRequest): Promise<QueryExchangeParamsResponse>;
  /*Retrieves exchange params*/

  subaccountDeposits(request: QuerySubaccountDepositsRequest): Promise<QuerySubaccountDepositsResponse>;
  /*Retrieves a Subaccount's Deposits*/

  subaccountDeposit(request: QuerySubaccountDepositRequest): Promise<QuerySubaccountDepositResponse>;
  /*Retrieves a Subaccount's Deposits*/

  exchangeBalances(request?: QueryExchangeBalancesRequest): Promise<QueryExchangeBalancesResponse>;
  /*Retrieves all of the balances of all users on the exchange.*/

  spotMarkets(request: QuerySpotMarketsRequest): Promise<QuerySpotMarketsResponse>;
  /*Retrieves a list of spot markets.*/

  spotMarket(request: QuerySpotMarketRequest): Promise<QuerySpotMarketResponse>;
  /*Retrieves a spot market by ticker*/

  spotOrderbook(request: QuerySpotOrderbookRequest): Promise<QuerySpotOrderbookResponse>;
  /*Retrieves a spot market's orderbook by marketID*/

  traderSpotOrders(request: QueryTraderSpotOrdersRequest): Promise<QueryTraderSpotOrdersResponse>;
  /*Retrieves a trader's spot orders*/

  spotOrdersByHashes(request: QuerySpotOrdersByHashesRequest): Promise<QuerySpotOrdersByHashesResponse>;
  /*Retrieves spot orders corresponding to specified order hashes for a given subaccountID and marketID*/

  subaccountOrders(request: QuerySubaccountOrdersRequest): Promise<QuerySubaccountOrdersResponse>;
  /*Retrieves subaccount's orders*/

  traderSpotTransientOrders(request: QueryTraderSpotOrdersRequest): Promise<QueryTraderSpotOrdersResponse>;
  /*Retrieves a trader's transient spot orders*/

  spotMidPriceAndTOB(request: QuerySpotMidPriceAndTOBRequest): Promise<QuerySpotMidPriceAndTOBResponse>;
  /*Retrieves a spot market's mid-price*/

  derivativeMidPriceAndTOB(request: QueryDerivativeMidPriceAndTOBRequest): Promise<QueryDerivativeMidPriceAndTOBResponse>;
  /*Retrieves a derivative market's mid-price*/

  derivativeOrderbook(request: QueryDerivativeOrderbookRequest): Promise<QueryDerivativeOrderbookResponse>;
  /*Retrieves a derivative market's orderbook by marketID*/

  traderDerivativeOrders(request: QueryTraderDerivativeOrdersRequest): Promise<QueryTraderDerivativeOrdersResponse>;
  /*Retrieves a trader's derivative orders*/

  derivativeOrdersByHashes(request: QueryDerivativeOrdersByHashesRequest): Promise<QueryDerivativeOrdersByHashesResponse>;
  /*Retrieves a trader's derivative orders*/

  traderDerivativeTransientOrders(request: QueryTraderDerivativeOrdersRequest): Promise<QueryTraderDerivativeOrdersResponse>;
  /*Retrieves a trader's transient derivative orders*/

  derivativeMarkets(request: QueryDerivativeMarketsRequest): Promise<QueryDerivativeMarketsResponse>;
  /*Retrieves a list of derivative markets.*/

  derivativeMarket(request: QueryDerivativeMarketRequest): Promise<QueryDerivativeMarketResponse>;
  /*Retrieves a derivative market by ticker*/

  derivativeMarketAddress(request: QueryDerivativeMarketAddressRequest): Promise<QueryDerivativeMarketAddressResponse>;
  /*Retrieves a derivative market's corresponding address for fees that contribute to the market's insurance fund*/

  subaccountTradeNonce(request: QuerySubaccountTradeNonceRequest): Promise<QuerySubaccountTradeNonceResponse>;
  /*Retrieves a subaccount's trade nonce*/

  exchangeModuleState(request?: QueryModuleStateRequest): Promise<QueryModuleStateResponse>;
  /*Retrieves the entire exchange module's state*/

  positions(request?: QueryPositionsRequest): Promise<QueryPositionsResponse>;
  /*Retrieves the entire exchange module's positions*/

  subaccountPositions(request: QuerySubaccountPositionsRequest): Promise<QuerySubaccountPositionsResponse>;
  /*Retrieves subaccount's positions*/

  subaccountPositionInMarket(request: QuerySubaccountPositionInMarketRequest): Promise<QuerySubaccountPositionInMarketResponse>;
  /*Retrieves subaccount's position in market*/

  subaccountEffectivePositionInMarket(request: QuerySubaccountEffectivePositionInMarketRequest): Promise<QuerySubaccountEffectivePositionInMarketResponse>;
  /*Retrieves subaccount's position in market*/

  perpetualMarketInfo(request: QueryPerpetualMarketInfoRequest): Promise<QueryPerpetualMarketInfoResponse>;
  /*Retrieves perpetual market info*/

  expiryFuturesMarketInfo(request: QueryExpiryFuturesMarketInfoRequest): Promise<QueryExpiryFuturesMarketInfoResponse>;
  /*Retrieves expiry market info*/

  perpetualMarketFunding(request: QueryPerpetualMarketFundingRequest): Promise<QueryPerpetualMarketFundingResponse>;
  /*Retrieves perpetual market funding*/

  subaccountOrderMetadata(request: QuerySubaccountOrderMetadataRequest): Promise<QuerySubaccountOrderMetadataResponse>;
  /*Retrieves subaccount's order metadata*/

  tradeRewardPoints(request: QueryTradeRewardPointsRequest): Promise<QueryTradeRewardPointsResponse>;
  /*Retrieves the account and total trade rewards points*/

  pendingTradeRewardPoints(request: QueryTradeRewardPointsRequest): Promise<QueryTradeRewardPointsResponse>;
  /*Retrieves the pending account and total trade rewards points*/

  tradeRewardCampaign(request?: QueryTradeRewardCampaignRequest): Promise<QueryTradeRewardCampaignResponse>;
  /*Retrieves the trade reward campaign*/

  feeDiscountAccountInfo(request: QueryFeeDiscountAccountInfoRequest): Promise<QueryFeeDiscountAccountInfoResponse>;
  /*Retrieves the account's fee discount info*/

  feeDiscountSchedule(request?: QueryFeeDiscountScheduleRequest): Promise<QueryFeeDiscountScheduleResponse>;
  /*Retrieves the fee discount schedule*/

  balanceMismatches(request: QueryBalanceMismatchesRequest): Promise<QueryBalanceMismatchesResponse>;
  /*Retrieves mismatches between available vs. total balance*/

  balanceWithBalanceHolds(request?: QueryBalanceWithBalanceHoldsRequest): Promise<QueryBalanceWithBalanceHoldsResponse>;
  /*Retrieves available and total balances with balance holds*/

  feeDiscountTierStatistics(request?: QueryFeeDiscountTierStatisticsRequest): Promise<QueryFeeDiscountTierStatisticsResponse>;
  /*Retrieves fee discount tier stats*/

  ninjaVaultInfos(request?: NinjaVaultInfosRequest): Promise<NinjaVaultInfosResponse>;
  /*Retrieves market making pool info*/

  queryMarketIDFromVault(request: QueryMarketIDFromVaultRequest): Promise<QueryMarketIDFromVaultResponse>;
  /*QueryMarketIDFromVault returns the market ID for a given vault subaccount ID*/

  historicalTradeRecords(request: QueryHistoricalTradeRecordsRequest): Promise<QueryHistoricalTradeRecordsResponse>;
  /*Retrieves historical trade records for a given market ID*/

  isOptedOutOfRewards(request: QueryIsOptedOutOfRewardsRequest): Promise<QueryIsOptedOutOfRewardsResponse>;
  /*Retrieves if the account is opted out of rewards*/

  optedOutOfRewardsAccounts(request?: QueryOptedOutOfRewardsAccountsRequest): Promise<QueryOptedOutOfRewardsAccountsResponse>;
  /*Retrieves all accounts opted out of rewards*/

  marketVolatility(request: QueryMarketVolatilityRequest): Promise<QueryMarketVolatilityResponse>;
  /*MarketVolatility computes the volatility for spot and derivative markets trading history.*/

  binaryOptionsMarkets(request: QueryBinaryMarketsRequest): Promise<QueryBinaryMarketsResponse>;
  /*Retrieves a spot market's orderbook by marketID*/

  traderDerivativeConditionalOrders(request: QueryTraderDerivativeConditionalOrdersRequest): Promise<QueryTraderDerivativeConditionalOrdersResponse>;
  /*Retrieves a trader's derivative conditional orders*/

}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.queryExchangeParams = this.queryExchangeParams.bind(this);
    this.subaccountDeposits = this.subaccountDeposits.bind(this);
    this.subaccountDeposit = this.subaccountDeposit.bind(this);
    this.exchangeBalances = this.exchangeBalances.bind(this);
    this.spotMarkets = this.spotMarkets.bind(this);
    this.spotMarket = this.spotMarket.bind(this);
    this.spotOrderbook = this.spotOrderbook.bind(this);
    this.traderSpotOrders = this.traderSpotOrders.bind(this);
    this.spotOrdersByHashes = this.spotOrdersByHashes.bind(this);
    this.subaccountOrders = this.subaccountOrders.bind(this);
    this.traderSpotTransientOrders = this.traderSpotTransientOrders.bind(this);
    this.spotMidPriceAndTOB = this.spotMidPriceAndTOB.bind(this);
    this.derivativeMidPriceAndTOB = this.derivativeMidPriceAndTOB.bind(this);
    this.derivativeOrderbook = this.derivativeOrderbook.bind(this);
    this.traderDerivativeOrders = this.traderDerivativeOrders.bind(this);
    this.derivativeOrdersByHashes = this.derivativeOrdersByHashes.bind(this);
    this.traderDerivativeTransientOrders = this.traderDerivativeTransientOrders.bind(this);
    this.derivativeMarkets = this.derivativeMarkets.bind(this);
    this.derivativeMarket = this.derivativeMarket.bind(this);
    this.derivativeMarketAddress = this.derivativeMarketAddress.bind(this);
    this.subaccountTradeNonce = this.subaccountTradeNonce.bind(this);
    this.exchangeModuleState = this.exchangeModuleState.bind(this);
    this.positions = this.positions.bind(this);
    this.subaccountPositions = this.subaccountPositions.bind(this);
    this.subaccountPositionInMarket = this.subaccountPositionInMarket.bind(this);
    this.subaccountEffectivePositionInMarket = this.subaccountEffectivePositionInMarket.bind(this);
    this.perpetualMarketInfo = this.perpetualMarketInfo.bind(this);
    this.expiryFuturesMarketInfo = this.expiryFuturesMarketInfo.bind(this);
    this.perpetualMarketFunding = this.perpetualMarketFunding.bind(this);
    this.subaccountOrderMetadata = this.subaccountOrderMetadata.bind(this);
    this.tradeRewardPoints = this.tradeRewardPoints.bind(this);
    this.pendingTradeRewardPoints = this.pendingTradeRewardPoints.bind(this);
    this.tradeRewardCampaign = this.tradeRewardCampaign.bind(this);
    this.feeDiscountAccountInfo = this.feeDiscountAccountInfo.bind(this);
    this.feeDiscountSchedule = this.feeDiscountSchedule.bind(this);
    this.balanceMismatches = this.balanceMismatches.bind(this);
    this.balanceWithBalanceHolds = this.balanceWithBalanceHolds.bind(this);
    this.feeDiscountTierStatistics = this.feeDiscountTierStatistics.bind(this);
    this.ninjaVaultInfos = this.ninjaVaultInfos.bind(this);
    this.queryMarketIDFromVault = this.queryMarketIDFromVault.bind(this);
    this.historicalTradeRecords = this.historicalTradeRecords.bind(this);
    this.isOptedOutOfRewards = this.isOptedOutOfRewards.bind(this);
    this.optedOutOfRewardsAccounts = this.optedOutOfRewardsAccounts.bind(this);
    this.marketVolatility = this.marketVolatility.bind(this);
    this.binaryOptionsMarkets = this.binaryOptionsMarkets.bind(this);
    this.traderDerivativeConditionalOrders = this.traderDerivativeConditionalOrders.bind(this);
  }

  queryExchangeParams(request: QueryExchangeParamsRequest = {}): Promise<QueryExchangeParamsResponse> {
    const data = QueryExchangeParamsRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "QueryExchangeParams", data);
    return promise.then(data => QueryExchangeParamsResponse.decode(new _m0.Reader(data)));
  }

  subaccountDeposits(request: QuerySubaccountDepositsRequest): Promise<QuerySubaccountDepositsResponse> {
    const data = QuerySubaccountDepositsRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "SubaccountDeposits", data);
    return promise.then(data => QuerySubaccountDepositsResponse.decode(new _m0.Reader(data)));
  }

  subaccountDeposit(request: QuerySubaccountDepositRequest): Promise<QuerySubaccountDepositResponse> {
    const data = QuerySubaccountDepositRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "SubaccountDeposit", data);
    return promise.then(data => QuerySubaccountDepositResponse.decode(new _m0.Reader(data)));
  }

  exchangeBalances(request: QueryExchangeBalancesRequest = {}): Promise<QueryExchangeBalancesResponse> {
    const data = QueryExchangeBalancesRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "ExchangeBalances", data);
    return promise.then(data => QueryExchangeBalancesResponse.decode(new _m0.Reader(data)));
  }

  spotMarkets(request: QuerySpotMarketsRequest): Promise<QuerySpotMarketsResponse> {
    const data = QuerySpotMarketsRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "SpotMarkets", data);
    return promise.then(data => QuerySpotMarketsResponse.decode(new _m0.Reader(data)));
  }

  spotMarket(request: QuerySpotMarketRequest): Promise<QuerySpotMarketResponse> {
    const data = QuerySpotMarketRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "SpotMarket", data);
    return promise.then(data => QuerySpotMarketResponse.decode(new _m0.Reader(data)));
  }

  spotOrderbook(request: QuerySpotOrderbookRequest): Promise<QuerySpotOrderbookResponse> {
    const data = QuerySpotOrderbookRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "SpotOrderbook", data);
    return promise.then(data => QuerySpotOrderbookResponse.decode(new _m0.Reader(data)));
  }

  traderSpotOrders(request: QueryTraderSpotOrdersRequest): Promise<QueryTraderSpotOrdersResponse> {
    const data = QueryTraderSpotOrdersRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "TraderSpotOrders", data);
    return promise.then(data => QueryTraderSpotOrdersResponse.decode(new _m0.Reader(data)));
  }

  spotOrdersByHashes(request: QuerySpotOrdersByHashesRequest): Promise<QuerySpotOrdersByHashesResponse> {
    const data = QuerySpotOrdersByHashesRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "SpotOrdersByHashes", data);
    return promise.then(data => QuerySpotOrdersByHashesResponse.decode(new _m0.Reader(data)));
  }

  subaccountOrders(request: QuerySubaccountOrdersRequest): Promise<QuerySubaccountOrdersResponse> {
    const data = QuerySubaccountOrdersRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "SubaccountOrders", data);
    return promise.then(data => QuerySubaccountOrdersResponse.decode(new _m0.Reader(data)));
  }

  traderSpotTransientOrders(request: QueryTraderSpotOrdersRequest): Promise<QueryTraderSpotOrdersResponse> {
    const data = QueryTraderSpotOrdersRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "TraderSpotTransientOrders", data);
    return promise.then(data => QueryTraderSpotOrdersResponse.decode(new _m0.Reader(data)));
  }

  spotMidPriceAndTOB(request: QuerySpotMidPriceAndTOBRequest): Promise<QuerySpotMidPriceAndTOBResponse> {
    const data = QuerySpotMidPriceAndTOBRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "SpotMidPriceAndTOB", data);
    return promise.then(data => QuerySpotMidPriceAndTOBResponse.decode(new _m0.Reader(data)));
  }

  derivativeMidPriceAndTOB(request: QueryDerivativeMidPriceAndTOBRequest): Promise<QueryDerivativeMidPriceAndTOBResponse> {
    const data = QueryDerivativeMidPriceAndTOBRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "DerivativeMidPriceAndTOB", data);
    return promise.then(data => QueryDerivativeMidPriceAndTOBResponse.decode(new _m0.Reader(data)));
  }

  derivativeOrderbook(request: QueryDerivativeOrderbookRequest): Promise<QueryDerivativeOrderbookResponse> {
    const data = QueryDerivativeOrderbookRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "DerivativeOrderbook", data);
    return promise.then(data => QueryDerivativeOrderbookResponse.decode(new _m0.Reader(data)));
  }

  traderDerivativeOrders(request: QueryTraderDerivativeOrdersRequest): Promise<QueryTraderDerivativeOrdersResponse> {
    const data = QueryTraderDerivativeOrdersRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "TraderDerivativeOrders", data);
    return promise.then(data => QueryTraderDerivativeOrdersResponse.decode(new _m0.Reader(data)));
  }

  derivativeOrdersByHashes(request: QueryDerivativeOrdersByHashesRequest): Promise<QueryDerivativeOrdersByHashesResponse> {
    const data = QueryDerivativeOrdersByHashesRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "DerivativeOrdersByHashes", data);
    return promise.then(data => QueryDerivativeOrdersByHashesResponse.decode(new _m0.Reader(data)));
  }

  traderDerivativeTransientOrders(request: QueryTraderDerivativeOrdersRequest): Promise<QueryTraderDerivativeOrdersResponse> {
    const data = QueryTraderDerivativeOrdersRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "TraderDerivativeTransientOrders", data);
    return promise.then(data => QueryTraderDerivativeOrdersResponse.decode(new _m0.Reader(data)));
  }

  derivativeMarkets(request: QueryDerivativeMarketsRequest): Promise<QueryDerivativeMarketsResponse> {
    const data = QueryDerivativeMarketsRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "DerivativeMarkets", data);
    return promise.then(data => QueryDerivativeMarketsResponse.decode(new _m0.Reader(data)));
  }

  derivativeMarket(request: QueryDerivativeMarketRequest): Promise<QueryDerivativeMarketResponse> {
    const data = QueryDerivativeMarketRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "DerivativeMarket", data);
    return promise.then(data => QueryDerivativeMarketResponse.decode(new _m0.Reader(data)));
  }

  derivativeMarketAddress(request: QueryDerivativeMarketAddressRequest): Promise<QueryDerivativeMarketAddressResponse> {
    const data = QueryDerivativeMarketAddressRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "DerivativeMarketAddress", data);
    return promise.then(data => QueryDerivativeMarketAddressResponse.decode(new _m0.Reader(data)));
  }

  subaccountTradeNonce(request: QuerySubaccountTradeNonceRequest): Promise<QuerySubaccountTradeNonceResponse> {
    const data = QuerySubaccountTradeNonceRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "SubaccountTradeNonce", data);
    return promise.then(data => QuerySubaccountTradeNonceResponse.decode(new _m0.Reader(data)));
  }

  exchangeModuleState(request: QueryModuleStateRequest = {}): Promise<QueryModuleStateResponse> {
    const data = QueryModuleStateRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "ExchangeModuleState", data);
    return promise.then(data => QueryModuleStateResponse.decode(new _m0.Reader(data)));
  }

  positions(request: QueryPositionsRequest = {}): Promise<QueryPositionsResponse> {
    const data = QueryPositionsRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "Positions", data);
    return promise.then(data => QueryPositionsResponse.decode(new _m0.Reader(data)));
  }

  subaccountPositions(request: QuerySubaccountPositionsRequest): Promise<QuerySubaccountPositionsResponse> {
    const data = QuerySubaccountPositionsRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "SubaccountPositions", data);
    return promise.then(data => QuerySubaccountPositionsResponse.decode(new _m0.Reader(data)));
  }

  subaccountPositionInMarket(request: QuerySubaccountPositionInMarketRequest): Promise<QuerySubaccountPositionInMarketResponse> {
    const data = QuerySubaccountPositionInMarketRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "SubaccountPositionInMarket", data);
    return promise.then(data => QuerySubaccountPositionInMarketResponse.decode(new _m0.Reader(data)));
  }

  subaccountEffectivePositionInMarket(request: QuerySubaccountEffectivePositionInMarketRequest): Promise<QuerySubaccountEffectivePositionInMarketResponse> {
    const data = QuerySubaccountEffectivePositionInMarketRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "SubaccountEffectivePositionInMarket", data);
    return promise.then(data => QuerySubaccountEffectivePositionInMarketResponse.decode(new _m0.Reader(data)));
  }

  perpetualMarketInfo(request: QueryPerpetualMarketInfoRequest): Promise<QueryPerpetualMarketInfoResponse> {
    const data = QueryPerpetualMarketInfoRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "PerpetualMarketInfo", data);
    return promise.then(data => QueryPerpetualMarketInfoResponse.decode(new _m0.Reader(data)));
  }

  expiryFuturesMarketInfo(request: QueryExpiryFuturesMarketInfoRequest): Promise<QueryExpiryFuturesMarketInfoResponse> {
    const data = QueryExpiryFuturesMarketInfoRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "ExpiryFuturesMarketInfo", data);
    return promise.then(data => QueryExpiryFuturesMarketInfoResponse.decode(new _m0.Reader(data)));
  }

  perpetualMarketFunding(request: QueryPerpetualMarketFundingRequest): Promise<QueryPerpetualMarketFundingResponse> {
    const data = QueryPerpetualMarketFundingRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "PerpetualMarketFunding", data);
    return promise.then(data => QueryPerpetualMarketFundingResponse.decode(new _m0.Reader(data)));
  }

  subaccountOrderMetadata(request: QuerySubaccountOrderMetadataRequest): Promise<QuerySubaccountOrderMetadataResponse> {
    const data = QuerySubaccountOrderMetadataRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "SubaccountOrderMetadata", data);
    return promise.then(data => QuerySubaccountOrderMetadataResponse.decode(new _m0.Reader(data)));
  }

  tradeRewardPoints(request: QueryTradeRewardPointsRequest): Promise<QueryTradeRewardPointsResponse> {
    const data = QueryTradeRewardPointsRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "TradeRewardPoints", data);
    return promise.then(data => QueryTradeRewardPointsResponse.decode(new _m0.Reader(data)));
  }

  pendingTradeRewardPoints(request: QueryTradeRewardPointsRequest): Promise<QueryTradeRewardPointsResponse> {
    const data = QueryTradeRewardPointsRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "PendingTradeRewardPoints", data);
    return promise.then(data => QueryTradeRewardPointsResponse.decode(new _m0.Reader(data)));
  }

  tradeRewardCampaign(request: QueryTradeRewardCampaignRequest = {}): Promise<QueryTradeRewardCampaignResponse> {
    const data = QueryTradeRewardCampaignRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "TradeRewardCampaign", data);
    return promise.then(data => QueryTradeRewardCampaignResponse.decode(new _m0.Reader(data)));
  }

  feeDiscountAccountInfo(request: QueryFeeDiscountAccountInfoRequest): Promise<QueryFeeDiscountAccountInfoResponse> {
    const data = QueryFeeDiscountAccountInfoRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "FeeDiscountAccountInfo", data);
    return promise.then(data => QueryFeeDiscountAccountInfoResponse.decode(new _m0.Reader(data)));
  }

  feeDiscountSchedule(request: QueryFeeDiscountScheduleRequest = {}): Promise<QueryFeeDiscountScheduleResponse> {
    const data = QueryFeeDiscountScheduleRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "FeeDiscountSchedule", data);
    return promise.then(data => QueryFeeDiscountScheduleResponse.decode(new _m0.Reader(data)));
  }

  balanceMismatches(request: QueryBalanceMismatchesRequest): Promise<QueryBalanceMismatchesResponse> {
    const data = QueryBalanceMismatchesRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "BalanceMismatches", data);
    return promise.then(data => QueryBalanceMismatchesResponse.decode(new _m0.Reader(data)));
  }

  balanceWithBalanceHolds(request: QueryBalanceWithBalanceHoldsRequest = {}): Promise<QueryBalanceWithBalanceHoldsResponse> {
    const data = QueryBalanceWithBalanceHoldsRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "BalanceWithBalanceHolds", data);
    return promise.then(data => QueryBalanceWithBalanceHoldsResponse.decode(new _m0.Reader(data)));
  }

  feeDiscountTierStatistics(request: QueryFeeDiscountTierStatisticsRequest = {}): Promise<QueryFeeDiscountTierStatisticsResponse> {
    const data = QueryFeeDiscountTierStatisticsRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "FeeDiscountTierStatistics", data);
    return promise.then(data => QueryFeeDiscountTierStatisticsResponse.decode(new _m0.Reader(data)));
  }

  ninjaVaultInfos(request: NinjaVaultInfosRequest = {}): Promise<NinjaVaultInfosResponse> {
    const data = NinjaVaultInfosRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "NinjaVaultInfos", data);
    return promise.then(data => NinjaVaultInfosResponse.decode(new _m0.Reader(data)));
  }

  queryMarketIDFromVault(request: QueryMarketIDFromVaultRequest): Promise<QueryMarketIDFromVaultResponse> {
    const data = QueryMarketIDFromVaultRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "QueryMarketIDFromVault", data);
    return promise.then(data => QueryMarketIDFromVaultResponse.decode(new _m0.Reader(data)));
  }

  historicalTradeRecords(request: QueryHistoricalTradeRecordsRequest): Promise<QueryHistoricalTradeRecordsResponse> {
    const data = QueryHistoricalTradeRecordsRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "HistoricalTradeRecords", data);
    return promise.then(data => QueryHistoricalTradeRecordsResponse.decode(new _m0.Reader(data)));
  }

  isOptedOutOfRewards(request: QueryIsOptedOutOfRewardsRequest): Promise<QueryIsOptedOutOfRewardsResponse> {
    const data = QueryIsOptedOutOfRewardsRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "IsOptedOutOfRewards", data);
    return promise.then(data => QueryIsOptedOutOfRewardsResponse.decode(new _m0.Reader(data)));
  }

  optedOutOfRewardsAccounts(request: QueryOptedOutOfRewardsAccountsRequest = {}): Promise<QueryOptedOutOfRewardsAccountsResponse> {
    const data = QueryOptedOutOfRewardsAccountsRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "OptedOutOfRewardsAccounts", data);
    return promise.then(data => QueryOptedOutOfRewardsAccountsResponse.decode(new _m0.Reader(data)));
  }

  marketVolatility(request: QueryMarketVolatilityRequest): Promise<QueryMarketVolatilityResponse> {
    const data = QueryMarketVolatilityRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "MarketVolatility", data);
    return promise.then(data => QueryMarketVolatilityResponse.decode(new _m0.Reader(data)));
  }

  binaryOptionsMarkets(request: QueryBinaryMarketsRequest): Promise<QueryBinaryMarketsResponse> {
    const data = QueryBinaryMarketsRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "BinaryOptionsMarkets", data);
    return promise.then(data => QueryBinaryMarketsResponse.decode(new _m0.Reader(data)));
  }

  traderDerivativeConditionalOrders(request: QueryTraderDerivativeConditionalOrdersRequest): Promise<QueryTraderDerivativeConditionalOrdersResponse> {
    const data = QueryTraderDerivativeConditionalOrdersRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "TraderDerivativeConditionalOrders", data);
    return promise.then(data => QueryTraderDerivativeConditionalOrdersResponse.decode(new _m0.Reader(data)));
  }

}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    queryExchangeParams(request?: QueryExchangeParamsRequest): Promise<QueryExchangeParamsResponse> {
      return queryService.queryExchangeParams(request);
    },

    subaccountDeposits(request: QuerySubaccountDepositsRequest): Promise<QuerySubaccountDepositsResponse> {
      return queryService.subaccountDeposits(request);
    },

    subaccountDeposit(request: QuerySubaccountDepositRequest): Promise<QuerySubaccountDepositResponse> {
      return queryService.subaccountDeposit(request);
    },

    exchangeBalances(request?: QueryExchangeBalancesRequest): Promise<QueryExchangeBalancesResponse> {
      return queryService.exchangeBalances(request);
    },

    spotMarkets(request: QuerySpotMarketsRequest): Promise<QuerySpotMarketsResponse> {
      return queryService.spotMarkets(request);
    },

    spotMarket(request: QuerySpotMarketRequest): Promise<QuerySpotMarketResponse> {
      return queryService.spotMarket(request);
    },

    spotOrderbook(request: QuerySpotOrderbookRequest): Promise<QuerySpotOrderbookResponse> {
      return queryService.spotOrderbook(request);
    },

    traderSpotOrders(request: QueryTraderSpotOrdersRequest): Promise<QueryTraderSpotOrdersResponse> {
      return queryService.traderSpotOrders(request);
    },

    spotOrdersByHashes(request: QuerySpotOrdersByHashesRequest): Promise<QuerySpotOrdersByHashesResponse> {
      return queryService.spotOrdersByHashes(request);
    },

    subaccountOrders(request: QuerySubaccountOrdersRequest): Promise<QuerySubaccountOrdersResponse> {
      return queryService.subaccountOrders(request);
    },

    traderSpotTransientOrders(request: QueryTraderSpotOrdersRequest): Promise<QueryTraderSpotOrdersResponse> {
      return queryService.traderSpotTransientOrders(request);
    },

    spotMidPriceAndTOB(request: QuerySpotMidPriceAndTOBRequest): Promise<QuerySpotMidPriceAndTOBResponse> {
      return queryService.spotMidPriceAndTOB(request);
    },

    derivativeMidPriceAndTOB(request: QueryDerivativeMidPriceAndTOBRequest): Promise<QueryDerivativeMidPriceAndTOBResponse> {
      return queryService.derivativeMidPriceAndTOB(request);
    },

    derivativeOrderbook(request: QueryDerivativeOrderbookRequest): Promise<QueryDerivativeOrderbookResponse> {
      return queryService.derivativeOrderbook(request);
    },

    traderDerivativeOrders(request: QueryTraderDerivativeOrdersRequest): Promise<QueryTraderDerivativeOrdersResponse> {
      return queryService.traderDerivativeOrders(request);
    },

    derivativeOrdersByHashes(request: QueryDerivativeOrdersByHashesRequest): Promise<QueryDerivativeOrdersByHashesResponse> {
      return queryService.derivativeOrdersByHashes(request);
    },

    traderDerivativeTransientOrders(request: QueryTraderDerivativeOrdersRequest): Promise<QueryTraderDerivativeOrdersResponse> {
      return queryService.traderDerivativeTransientOrders(request);
    },

    derivativeMarkets(request: QueryDerivativeMarketsRequest): Promise<QueryDerivativeMarketsResponse> {
      return queryService.derivativeMarkets(request);
    },

    derivativeMarket(request: QueryDerivativeMarketRequest): Promise<QueryDerivativeMarketResponse> {
      return queryService.derivativeMarket(request);
    },

    derivativeMarketAddress(request: QueryDerivativeMarketAddressRequest): Promise<QueryDerivativeMarketAddressResponse> {
      return queryService.derivativeMarketAddress(request);
    },

    subaccountTradeNonce(request: QuerySubaccountTradeNonceRequest): Promise<QuerySubaccountTradeNonceResponse> {
      return queryService.subaccountTradeNonce(request);
    },

    exchangeModuleState(request?: QueryModuleStateRequest): Promise<QueryModuleStateResponse> {
      return queryService.exchangeModuleState(request);
    },

    positions(request?: QueryPositionsRequest): Promise<QueryPositionsResponse> {
      return queryService.positions(request);
    },

    subaccountPositions(request: QuerySubaccountPositionsRequest): Promise<QuerySubaccountPositionsResponse> {
      return queryService.subaccountPositions(request);
    },

    subaccountPositionInMarket(request: QuerySubaccountPositionInMarketRequest): Promise<QuerySubaccountPositionInMarketResponse> {
      return queryService.subaccountPositionInMarket(request);
    },

    subaccountEffectivePositionInMarket(request: QuerySubaccountEffectivePositionInMarketRequest): Promise<QuerySubaccountEffectivePositionInMarketResponse> {
      return queryService.subaccountEffectivePositionInMarket(request);
    },

    perpetualMarketInfo(request: QueryPerpetualMarketInfoRequest): Promise<QueryPerpetualMarketInfoResponse> {
      return queryService.perpetualMarketInfo(request);
    },

    expiryFuturesMarketInfo(request: QueryExpiryFuturesMarketInfoRequest): Promise<QueryExpiryFuturesMarketInfoResponse> {
      return queryService.expiryFuturesMarketInfo(request);
    },

    perpetualMarketFunding(request: QueryPerpetualMarketFundingRequest): Promise<QueryPerpetualMarketFundingResponse> {
      return queryService.perpetualMarketFunding(request);
    },

    subaccountOrderMetadata(request: QuerySubaccountOrderMetadataRequest): Promise<QuerySubaccountOrderMetadataResponse> {
      return queryService.subaccountOrderMetadata(request);
    },

    tradeRewardPoints(request: QueryTradeRewardPointsRequest): Promise<QueryTradeRewardPointsResponse> {
      return queryService.tradeRewardPoints(request);
    },

    pendingTradeRewardPoints(request: QueryTradeRewardPointsRequest): Promise<QueryTradeRewardPointsResponse> {
      return queryService.pendingTradeRewardPoints(request);
    },

    tradeRewardCampaign(request?: QueryTradeRewardCampaignRequest): Promise<QueryTradeRewardCampaignResponse> {
      return queryService.tradeRewardCampaign(request);
    },

    feeDiscountAccountInfo(request: QueryFeeDiscountAccountInfoRequest): Promise<QueryFeeDiscountAccountInfoResponse> {
      return queryService.feeDiscountAccountInfo(request);
    },

    feeDiscountSchedule(request?: QueryFeeDiscountScheduleRequest): Promise<QueryFeeDiscountScheduleResponse> {
      return queryService.feeDiscountSchedule(request);
    },

    balanceMismatches(request: QueryBalanceMismatchesRequest): Promise<QueryBalanceMismatchesResponse> {
      return queryService.balanceMismatches(request);
    },

    balanceWithBalanceHolds(request?: QueryBalanceWithBalanceHoldsRequest): Promise<QueryBalanceWithBalanceHoldsResponse> {
      return queryService.balanceWithBalanceHolds(request);
    },

    feeDiscountTierStatistics(request?: QueryFeeDiscountTierStatisticsRequest): Promise<QueryFeeDiscountTierStatisticsResponse> {
      return queryService.feeDiscountTierStatistics(request);
    },

    ninjaVaultInfos(request?: NinjaVaultInfosRequest): Promise<NinjaVaultInfosResponse> {
      return queryService.ninjaVaultInfos(request);
    },

    queryMarketIDFromVault(request: QueryMarketIDFromVaultRequest): Promise<QueryMarketIDFromVaultResponse> {
      return queryService.queryMarketIDFromVault(request);
    },

    historicalTradeRecords(request: QueryHistoricalTradeRecordsRequest): Promise<QueryHistoricalTradeRecordsResponse> {
      return queryService.historicalTradeRecords(request);
    },

    isOptedOutOfRewards(request: QueryIsOptedOutOfRewardsRequest): Promise<QueryIsOptedOutOfRewardsResponse> {
      return queryService.isOptedOutOfRewards(request);
    },

    optedOutOfRewardsAccounts(request?: QueryOptedOutOfRewardsAccountsRequest): Promise<QueryOptedOutOfRewardsAccountsResponse> {
      return queryService.optedOutOfRewardsAccounts(request);
    },

    marketVolatility(request: QueryMarketVolatilityRequest): Promise<QueryMarketVolatilityResponse> {
      return queryService.marketVolatility(request);
    },

    binaryOptionsMarkets(request: QueryBinaryMarketsRequest): Promise<QueryBinaryMarketsResponse> {
      return queryService.binaryOptionsMarkets(request);
    },

    traderDerivativeConditionalOrders(request: QueryTraderDerivativeConditionalOrdersRequest): Promise<QueryTraderDerivativeConditionalOrdersResponse> {
      return queryService.traderDerivativeConditionalOrders(request);
    }

  };
};