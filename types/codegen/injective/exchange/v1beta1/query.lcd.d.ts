import { LCDClient } from "@cosmology/lcd";
import { QueryExchangeParamsRequest, QueryExchangeParamsResponseSDKType, QuerySubaccountDepositsRequest, QuerySubaccountDepositsResponseSDKType, QuerySubaccountDepositRequest, QuerySubaccountDepositResponseSDKType, QueryExchangeBalancesRequest, QueryExchangeBalancesResponseSDKType, QuerySpotMarketsRequest, QuerySpotMarketsResponseSDKType, QuerySpotMarketRequest, QuerySpotMarketResponseSDKType, QuerySpotOrderbookRequest, QuerySpotOrderbookResponseSDKType, QueryTraderSpotOrdersRequest, QueryTraderSpotOrdersResponseSDKType, QuerySpotOrdersByHashesRequest, QuerySpotOrdersByHashesResponseSDKType, QuerySubaccountOrdersRequest, QuerySubaccountOrdersResponseSDKType, QuerySpotMidPriceAndTOBRequest, QuerySpotMidPriceAndTOBResponseSDKType, QueryDerivativeMidPriceAndTOBRequest, QueryDerivativeMidPriceAndTOBResponseSDKType, QueryDerivativeOrderbookRequest, QueryDerivativeOrderbookResponseSDKType, QueryTraderDerivativeOrdersRequest, QueryTraderDerivativeOrdersResponseSDKType, QueryDerivativeOrdersByHashesRequest, QueryDerivativeOrdersByHashesResponseSDKType, QueryDerivativeMarketsRequest, QueryDerivativeMarketsResponseSDKType, QueryDerivativeMarketRequest, QueryDerivativeMarketResponseSDKType, QueryDerivativeMarketAddressRequest, QueryDerivativeMarketAddressResponseSDKType, QuerySubaccountTradeNonceRequest, QuerySubaccountTradeNonceResponseSDKType, QueryModuleStateRequest, QueryModuleStateResponseSDKType, QueryPositionsRequest, QueryPositionsResponseSDKType, QuerySubaccountPositionsRequest, QuerySubaccountPositionsResponseSDKType, QuerySubaccountPositionInMarketRequest, QuerySubaccountPositionInMarketResponseSDKType, QuerySubaccountEffectivePositionInMarketRequest, QuerySubaccountEffectivePositionInMarketResponseSDKType, QueryPerpetualMarketInfoRequest, QueryPerpetualMarketInfoResponseSDKType, QueryExpiryFuturesMarketInfoRequest, QueryExpiryFuturesMarketInfoResponseSDKType, QueryPerpetualMarketFundingRequest, QueryPerpetualMarketFundingResponseSDKType, QuerySubaccountOrderMetadataRequest, QuerySubaccountOrderMetadataResponseSDKType, QueryTradeRewardPointsRequest, QueryTradeRewardPointsResponseSDKType, QueryTradeRewardCampaignRequest, QueryTradeRewardCampaignResponseSDKType, QueryFeeDiscountAccountInfoRequest, QueryFeeDiscountAccountInfoResponseSDKType, QueryFeeDiscountScheduleRequest, QueryFeeDiscountScheduleResponseSDKType, QueryBalanceMismatchesRequest, QueryBalanceMismatchesResponseSDKType, QueryBalanceWithBalanceHoldsRequest, QueryBalanceWithBalanceHoldsResponseSDKType, QueryFeeDiscountTierStatisticsRequest, QueryFeeDiscountTierStatisticsResponseSDKType, NinjaVaultInfosRequest, NinjaVaultInfosResponseSDKType, QueryMarketIDFromVaultRequest, QueryMarketIDFromVaultResponseSDKType, QueryHistoricalTradeRecordsRequest, QueryHistoricalTradeRecordsResponseSDKType, QueryIsOptedOutOfRewardsRequest, QueryIsOptedOutOfRewardsResponseSDKType, QueryOptedOutOfRewardsAccountsRequest, QueryOptedOutOfRewardsAccountsResponseSDKType, QueryMarketVolatilityRequest, QueryMarketVolatilityResponseSDKType, QueryBinaryMarketsRequest, QueryBinaryMarketsResponseSDKType, QueryTraderDerivativeConditionalOrdersRequest, QueryTraderDerivativeConditionalOrdersResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    queryExchangeParams(_params?: QueryExchangeParamsRequest): Promise<QueryExchangeParamsResponseSDKType>;
    subaccountDeposits(params: QuerySubaccountDepositsRequest): Promise<QuerySubaccountDepositsResponseSDKType>;
    subaccountDeposit(params: QuerySubaccountDepositRequest): Promise<QuerySubaccountDepositResponseSDKType>;
    exchangeBalances(_params?: QueryExchangeBalancesRequest): Promise<QueryExchangeBalancesResponseSDKType>;
    spotMarkets(params: QuerySpotMarketsRequest): Promise<QuerySpotMarketsResponseSDKType>;
    spotMarket(params: QuerySpotMarketRequest): Promise<QuerySpotMarketResponseSDKType>;
    spotOrderbook(params: QuerySpotOrderbookRequest): Promise<QuerySpotOrderbookResponseSDKType>;
    traderSpotOrders(params: QueryTraderSpotOrdersRequest): Promise<QueryTraderSpotOrdersResponseSDKType>;
    spotOrdersByHashes(params: QuerySpotOrdersByHashesRequest): Promise<QuerySpotOrdersByHashesResponseSDKType>;
    subaccountOrders(params: QuerySubaccountOrdersRequest): Promise<QuerySubaccountOrdersResponseSDKType>;
    traderSpotTransientOrders(params: QueryTraderSpotOrdersRequest): Promise<QueryTraderSpotOrdersResponseSDKType>;
    spotMidPriceAndTOB(params: QuerySpotMidPriceAndTOBRequest): Promise<QuerySpotMidPriceAndTOBResponseSDKType>;
    derivativeMidPriceAndTOB(params: QueryDerivativeMidPriceAndTOBRequest): Promise<QueryDerivativeMidPriceAndTOBResponseSDKType>;
    derivativeOrderbook(params: QueryDerivativeOrderbookRequest): Promise<QueryDerivativeOrderbookResponseSDKType>;
    traderDerivativeOrders(params: QueryTraderDerivativeOrdersRequest): Promise<QueryTraderDerivativeOrdersResponseSDKType>;
    derivativeOrdersByHashes(params: QueryDerivativeOrdersByHashesRequest): Promise<QueryDerivativeOrdersByHashesResponseSDKType>;
    traderDerivativeTransientOrders(params: QueryTraderDerivativeOrdersRequest): Promise<QueryTraderDerivativeOrdersResponseSDKType>;
    derivativeMarkets(params: QueryDerivativeMarketsRequest): Promise<QueryDerivativeMarketsResponseSDKType>;
    derivativeMarket(params: QueryDerivativeMarketRequest): Promise<QueryDerivativeMarketResponseSDKType>;
    derivativeMarketAddress(params: QueryDerivativeMarketAddressRequest): Promise<QueryDerivativeMarketAddressResponseSDKType>;
    subaccountTradeNonce(params: QuerySubaccountTradeNonceRequest): Promise<QuerySubaccountTradeNonceResponseSDKType>;
    exchangeModuleState(_params?: QueryModuleStateRequest): Promise<QueryModuleStateResponseSDKType>;
    positions(_params?: QueryPositionsRequest): Promise<QueryPositionsResponseSDKType>;
    subaccountPositions(params: QuerySubaccountPositionsRequest): Promise<QuerySubaccountPositionsResponseSDKType>;
    subaccountPositionInMarket(params: QuerySubaccountPositionInMarketRequest): Promise<QuerySubaccountPositionInMarketResponseSDKType>;
    subaccountEffectivePositionInMarket(params: QuerySubaccountEffectivePositionInMarketRequest): Promise<QuerySubaccountEffectivePositionInMarketResponseSDKType>;
    perpetualMarketInfo(params: QueryPerpetualMarketInfoRequest): Promise<QueryPerpetualMarketInfoResponseSDKType>;
    expiryFuturesMarketInfo(params: QueryExpiryFuturesMarketInfoRequest): Promise<QueryExpiryFuturesMarketInfoResponseSDKType>;
    perpetualMarketFunding(params: QueryPerpetualMarketFundingRequest): Promise<QueryPerpetualMarketFundingResponseSDKType>;
    subaccountOrderMetadata(params: QuerySubaccountOrderMetadataRequest): Promise<QuerySubaccountOrderMetadataResponseSDKType>;
    tradeRewardPoints(params: QueryTradeRewardPointsRequest): Promise<QueryTradeRewardPointsResponseSDKType>;
    pendingTradeRewardPoints(params: QueryTradeRewardPointsRequest): Promise<QueryTradeRewardPointsResponseSDKType>;
    tradeRewardCampaign(_params?: QueryTradeRewardCampaignRequest): Promise<QueryTradeRewardCampaignResponseSDKType>;
    feeDiscountAccountInfo(params: QueryFeeDiscountAccountInfoRequest): Promise<QueryFeeDiscountAccountInfoResponseSDKType>;
    feeDiscountSchedule(_params?: QueryFeeDiscountScheduleRequest): Promise<QueryFeeDiscountScheduleResponseSDKType>;
    balanceMismatches(params: QueryBalanceMismatchesRequest): Promise<QueryBalanceMismatchesResponseSDKType>;
    balanceWithBalanceHolds(_params?: QueryBalanceWithBalanceHoldsRequest): Promise<QueryBalanceWithBalanceHoldsResponseSDKType>;
    feeDiscountTierStatistics(_params?: QueryFeeDiscountTierStatisticsRequest): Promise<QueryFeeDiscountTierStatisticsResponseSDKType>;
    ninjaVaultInfos(_params?: NinjaVaultInfosRequest): Promise<NinjaVaultInfosResponseSDKType>;
    queryMarketIDFromVault(params: QueryMarketIDFromVaultRequest): Promise<QueryMarketIDFromVaultResponseSDKType>;
    historicalTradeRecords(params: QueryHistoricalTradeRecordsRequest): Promise<QueryHistoricalTradeRecordsResponseSDKType>;
    isOptedOutOfRewards(params: QueryIsOptedOutOfRewardsRequest): Promise<QueryIsOptedOutOfRewardsResponseSDKType>;
    optedOutOfRewardsAccounts(_params?: QueryOptedOutOfRewardsAccountsRequest): Promise<QueryOptedOutOfRewardsAccountsResponseSDKType>;
    marketVolatility(params: QueryMarketVolatilityRequest): Promise<QueryMarketVolatilityResponseSDKType>;
    binaryOptionsMarkets(params: QueryBinaryMarketsRequest): Promise<QueryBinaryMarketsResponseSDKType>;
    traderDerivativeConditionalOrders(params: QueryTraderDerivativeConditionalOrdersRequest): Promise<QueryTraderDerivativeConditionalOrdersResponseSDKType>;
}
