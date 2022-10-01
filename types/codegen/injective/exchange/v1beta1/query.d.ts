import { SubaccountOrderData, SubaccountOrderDataSDKType, SubaccountOrderbookMetadata, SubaccountOrderbookMetadataSDKType, Params, ParamsSDKType, Deposit, DepositSDKType, SpotMarket, SpotMarketSDKType, PerpetualMarketInfo, PerpetualMarketInfoSDKType, PerpetualMarketFunding, PerpetualMarketFundingSDKType, DerivativeMarket, DerivativeMarketSDKType, ExpiryFuturesMarketInfo, ExpiryFuturesMarketInfoSDKType, Position, PositionSDKType, TradingRewardCampaignInfo, TradingRewardCampaignInfoSDKType, CampaignRewardPool, CampaignRewardPoolSDKType, FeeDiscountTierInfo, FeeDiscountTierInfoSDKType, FeeDiscountTierTTL, FeeDiscountTierTTLSDKType, FeeDiscountSchedule, FeeDiscountScheduleSDKType, TradeRecords, TradeRecordsSDKType, TradeRecord, TradeRecordSDKType, BinaryOptionsMarket, BinaryOptionsMarketSDKType } from "./exchange";
import { Balance, BalanceSDKType, DerivativePosition, DerivativePositionSDKType, GenesisState, GenesisStateSDKType } from "./genesis";
import { MetadataStatistics, MetadataStatisticsSDKType } from "../../oracle/v1beta1/oracle";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
/** CancellationStrategy is the list of cancellation strategies. */
export declare enum CancellationStrategy {
    /** UnspecifiedOrder - just cancelling in random order in most efficient way */
    UnspecifiedOrder = 0,
    /** FromWorstToBest - e.g. for buy orders from lowest to highest price */
    FromWorstToBest = 1,
    /** FromBestToWorst - e.g. for buy orders from higest to lowest price */
    FromBestToWorst = 2,
    UNRECOGNIZED = -1
}
/** CancellationStrategy is the list of cancellation strategies. */
export declare enum CancellationStrategySDKType {
    /** UnspecifiedOrder - just cancelling in random order in most efficient way */
    UnspecifiedOrder = 0,
    /** FromWorstToBest - e.g. for buy orders from lowest to highest price */
    FromWorstToBest = 1,
    /** FromBestToWorst - e.g. for buy orders from higest to lowest price */
    FromBestToWorst = 2,
    UNRECOGNIZED = -1
}
export declare function cancellationStrategyFromJSON(object: any): CancellationStrategy;
export declare function cancellationStrategyToJSON(object: CancellationStrategy): string;
export interface Subaccount {
    trader: string;
    subaccountNonce: number;
}
export interface SubaccountSDKType {
    trader: string;
    subaccount_nonce: number;
}
export interface QuerySubaccountOrdersRequest {
    subaccountId: string;
    marketId?: string;
}
export interface QuerySubaccountOrdersRequestSDKType {
    subaccount_id: string;
    market_id?: string;
}
export interface QuerySubaccountOrdersResponse {
    buyOrders: SubaccountOrderData[];
    sellOrders: SubaccountOrderData[];
}
export interface QuerySubaccountOrdersResponseSDKType {
    buy_orders: SubaccountOrderDataSDKType[];
    sell_orders: SubaccountOrderDataSDKType[];
}
export interface SubaccountOrderbookMetadataWithMarket {
    metadata: SubaccountOrderbookMetadata;
    marketId: string;
    isBuy: boolean;
}
export interface SubaccountOrderbookMetadataWithMarketSDKType {
    metadata: SubaccountOrderbookMetadataSDKType;
    market_id: string;
    isBuy: boolean;
}
/** QueryExchangeParamsRequest is the request type for the Query/ExchangeParams RPC method. */
export interface QueryExchangeParamsRequest {
}
/** QueryExchangeParamsRequest is the request type for the Query/ExchangeParams RPC method. */
export interface QueryExchangeParamsRequestSDKType {
}
/** QueryExchangeParamsRequest is the response type for the Query/ExchangeParams RPC method. */
export interface QueryExchangeParamsResponse {
    params: Params;
}
/** QueryExchangeParamsRequest is the response type for the Query/ExchangeParams RPC method. */
export interface QueryExchangeParamsResponseSDKType {
    params: ParamsSDKType;
}
/** QuerySubaccountDepositsRequest is the request type for the Query/SubaccountDeposits RPC method. */
export interface QuerySubaccountDepositsRequest {
    subaccountId?: string;
    subaccount?: Subaccount;
}
/** QuerySubaccountDepositsRequest is the request type for the Query/SubaccountDeposits RPC method. */
export interface QuerySubaccountDepositsRequestSDKType {
    subaccount_id?: string;
    subaccount?: SubaccountSDKType;
}
export interface QuerySubaccountDepositsResponse_DepositsEntry {
    key: string;
    value: Deposit;
}
export interface QuerySubaccountDepositsResponse_DepositsEntrySDKType {
    key: string;
    value: DepositSDKType;
}
/** QuerySubaccountDepositsResponse is the response type for the Query/SubaccountDeposits RPC method. */
export interface QuerySubaccountDepositsResponse {
    deposits: {
        [key: string]: Deposit;
    };
}
/** QuerySubaccountDepositsResponse is the response type for the Query/SubaccountDeposits RPC method. */
export interface QuerySubaccountDepositsResponseSDKType {
    deposits: {
        [key: string]: DepositSDKType;
    };
}
/** QueryExchangeBalancesRequest is the request type for the Query/ExchangeBalances RPC method. */
export interface QueryExchangeBalancesRequest {
}
/** QueryExchangeBalancesRequest is the request type for the Query/ExchangeBalances RPC method. */
export interface QueryExchangeBalancesRequestSDKType {
}
/** QuerySubaccountDepositsResponse is the response type for the Query/SubaccountDeposits RPC method. */
export interface QueryExchangeBalancesResponse {
    balances: Balance[];
}
/** QuerySubaccountDepositsResponse is the response type for the Query/SubaccountDeposits RPC method. */
export interface QueryExchangeBalancesResponseSDKType {
    balances: BalanceSDKType[];
}
/** QuerySubaccountDepositsRequest is the request type for the Query/SubaccountDeposits RPC method. */
export interface QuerySubaccountDepositRequest {
    subaccountId?: string;
    denom?: string;
}
/** QuerySubaccountDepositsRequest is the request type for the Query/SubaccountDeposits RPC method. */
export interface QuerySubaccountDepositRequestSDKType {
    subaccount_id?: string;
    denom?: string;
}
/** QuerySubaccountDepositsResponse is the response type for the Query/SubaccountDeposits RPC method. */
export interface QuerySubaccountDepositResponse {
    deposits: Deposit;
}
/** QuerySubaccountDepositsResponse is the response type for the Query/SubaccountDeposits RPC method. */
export interface QuerySubaccountDepositResponseSDKType {
    deposits: DepositSDKType;
}
/** QuerySpotMarketsRequest is the request type for the Query/SpotMarkets RPC method. */
export interface QuerySpotMarketsRequest {
    /** Status of the market, for convenience it is set to string - not enum */
    status?: string;
}
/** QuerySpotMarketsRequest is the request type for the Query/SpotMarkets RPC method. */
export interface QuerySpotMarketsRequestSDKType {
    /** Status of the market, for convenience it is set to string - not enum */
    status?: string;
}
/** QuerySpotMarketsResponse is the response type for the Query/SpotMarkets RPC method. */
export interface QuerySpotMarketsResponse {
    markets: SpotMarket[];
}
/** QuerySpotMarketsResponse is the response type for the Query/SpotMarkets RPC method. */
export interface QuerySpotMarketsResponseSDKType {
    markets: SpotMarketSDKType[];
}
/** QuerySpotMarketRequest is the request type for the Query/SpotMarket RPC method. */
export interface QuerySpotMarketRequest {
    /** Market ID for the market */
    marketId: string;
}
/** QuerySpotMarketRequest is the request type for the Query/SpotMarket RPC method. */
export interface QuerySpotMarketRequestSDKType {
    /** Market ID for the market */
    market_id: string;
}
/** QuerySpotMarketResponse is the response type for the Query/SpotMarket RPC method. */
export interface QuerySpotMarketResponse {
    market: SpotMarket;
}
/** QuerySpotMarketResponse is the response type for the Query/SpotMarket RPC method. */
export interface QuerySpotMarketResponseSDKType {
    market: SpotMarketSDKType;
}
/** QuerySpotOrderbookRequest is the request type for the Query/SpotOrderbook RPC method. */
export interface QuerySpotOrderbookRequest {
    /** Market ID for the market */
    marketId: string;
    limit?: Long;
}
/** QuerySpotOrderbookRequest is the request type for the Query/SpotOrderbook RPC method. */
export interface QuerySpotOrderbookRequestSDKType {
    /** Market ID for the market */
    market_id: string;
    limit?: Long;
}
/** QuerySpotOrderbookResponse is the response type for the Query/SpotOrderbook RPC method. */
export interface QuerySpotOrderbookResponse {
    buysPriceLevel: PriceLevel[];
    sellsPriceLevel: PriceLevel[];
}
/** QuerySpotOrderbookResponse is the response type for the Query/SpotOrderbook RPC method. */
export interface QuerySpotOrderbookResponseSDKType {
    buys_price_level: PriceLevelSDKType[];
    sells_price_level: PriceLevelSDKType[];
}
/** QueryTraderSpotOrdersRequest is the request type for the Query/TraderSpotOrders RPC method. */
export interface QuerySpotOrdersByHashesRequest {
    /** Market ID for the market */
    marketId: string;
    /** SubaccountID of the trader */
    subaccountId: string;
    /** the order hashes */
    orderHashes?: string[];
}
/** QueryTraderSpotOrdersRequest is the request type for the Query/TraderSpotOrders RPC method. */
export interface QuerySpotOrdersByHashesRequestSDKType {
    /** Market ID for the market */
    market_id: string;
    /** SubaccountID of the trader */
    subaccount_id: string;
    /** the order hashes */
    order_hashes?: string[];
}
/** QuerySpotOrdersByHashesResponse is the response type for the Query/SpotOrdersByHashes RPC method. */
export interface QuerySpotOrdersByHashesResponse {
    orders: TrimmedSpotLimitOrder[];
}
/** QuerySpotOrdersByHashesResponse is the response type for the Query/SpotOrdersByHashes RPC method. */
export interface QuerySpotOrdersByHashesResponseSDKType {
    orders: TrimmedSpotLimitOrderSDKType[];
}
/** QueryTraderSpotOrdersRequest is the request type for the Query/TraderSpotOrders RPC method. */
export interface QueryTraderSpotOrdersRequest {
    /** Market ID for the market */
    marketId: string;
    /** SubaccountID of the trader */
    subaccountId: string;
}
/** QueryTraderSpotOrdersRequest is the request type for the Query/TraderSpotOrders RPC method. */
export interface QueryTraderSpotOrdersRequestSDKType {
    /** Market ID for the market */
    market_id: string;
    /** SubaccountID of the trader */
    subaccount_id: string;
}
export interface TrimmedSpotLimitOrder {
    /** price of the order */
    price: string;
    /** quantity of the order */
    quantity: string;
    /** the amount of the quantity remaining fillable */
    fillable: string;
    /** true if the order is a buy */
    isBuy: boolean;
    orderHash: string;
}
export interface TrimmedSpotLimitOrderSDKType {
    /** price of the order */
    price: string;
    /** quantity of the order */
    quantity: string;
    /** the amount of the quantity remaining fillable */
    fillable: string;
    /** true if the order is a buy */
    isBuy: boolean;
    order_hash: string;
}
/** QueryTraderSpotOrdersResponse is the response type for the Query/TraderSpotOrders RPC method. */
export interface QueryTraderSpotOrdersResponse {
    orders: TrimmedSpotLimitOrder[];
}
/** QueryTraderSpotOrdersResponse is the response type for the Query/TraderSpotOrders RPC method. */
export interface QueryTraderSpotOrdersResponseSDKType {
    orders: TrimmedSpotLimitOrderSDKType[];
}
/** QuerySpotMidPriceAndTOBRequest is the request type for the Query/SpotMidPriceAndTOB RPC method. */
export interface QuerySpotMidPriceAndTOBRequest {
    /** Market ID for the market */
    marketId: string;
}
/** QuerySpotMidPriceAndTOBRequest is the request type for the Query/SpotMidPriceAndTOB RPC method. */
export interface QuerySpotMidPriceAndTOBRequestSDKType {
    /** Market ID for the market */
    market_id: string;
}
/** QuerySpotMidPriceAndTOBResponse is the response type for the Query/SpotMidPriceAndTOB RPC method. */
export interface QuerySpotMidPriceAndTOBResponse {
    /** mid price of the market */
    midPrice?: string;
    /** best buy price of the market */
    bestBuyPrice?: string;
    /** best sell price of the market */
    bestSellPrice?: string;
}
/** QuerySpotMidPriceAndTOBResponse is the response type for the Query/SpotMidPriceAndTOB RPC method. */
export interface QuerySpotMidPriceAndTOBResponseSDKType {
    /** mid price of the market */
    mid_price?: string;
    /** best buy price of the market */
    best_buy_price?: string;
    /** best sell price of the market */
    best_sell_price?: string;
}
/** QueryDerivativeMidPriceAndTOBRequest is the request type for the Query/GetDerivativeMidPriceAndTOB RPC method. */
export interface QueryDerivativeMidPriceAndTOBRequest {
    /** Market ID for the market */
    marketId: string;
}
/** QueryDerivativeMidPriceAndTOBRequest is the request type for the Query/GetDerivativeMidPriceAndTOB RPC method. */
export interface QueryDerivativeMidPriceAndTOBRequestSDKType {
    /** Market ID for the market */
    market_id: string;
}
/** QueryDerivativeMidPriceAndTOBResponse is the response type for the Query/GetDerivativeMidPriceAndTOB RPC method. */
export interface QueryDerivativeMidPriceAndTOBResponse {
    /** mid price of the market */
    midPrice?: string;
    /** best buy price of the market */
    bestBuyPrice?: string;
    /** best sell price of the market */
    bestSellPrice?: string;
}
/** QueryDerivativeMidPriceAndTOBResponse is the response type for the Query/GetDerivativeMidPriceAndTOB RPC method. */
export interface QueryDerivativeMidPriceAndTOBResponseSDKType {
    /** mid price of the market */
    mid_price?: string;
    /** best buy price of the market */
    best_buy_price?: string;
    /** best sell price of the market */
    best_sell_price?: string;
}
/** QueryDerivativeOrderbookRequest is the request type for the Query/DerivativeOrderbook RPC method. */
export interface QueryDerivativeOrderbookRequest {
    /** Market ID for the market */
    marketId: string;
    limit?: Long;
}
/** QueryDerivativeOrderbookRequest is the request type for the Query/DerivativeOrderbook RPC method. */
export interface QueryDerivativeOrderbookRequestSDKType {
    /** Market ID for the market */
    market_id: string;
    limit?: Long;
}
/** QueryDerivativeOrderbookResponse is the response type for the Query/DerivativeOrderbook RPC method. */
export interface QueryDerivativeOrderbookResponse {
    buysPriceLevel: PriceLevel[];
    sellsPriceLevel: PriceLevel[];
}
/** QueryDerivativeOrderbookResponse is the response type for the Query/DerivativeOrderbook RPC method. */
export interface QueryDerivativeOrderbookResponseSDKType {
    buys_price_level: PriceLevelSDKType[];
    sells_price_level: PriceLevelSDKType[];
}
/** QueryTraderSpotOrdersToCancelUpToAmountRequest is the request type for the Query/TraderSpotOrdersToCancelUpToAmountRequest RPC method. */
export interface QueryTraderSpotOrdersToCancelUpToAmountRequest {
    /** Market ID for the market */
    marketId: string;
    /** SubaccountID of the trader */
    subaccountId: string;
    /** the base amount to cancel (free up) */
    baseAmount: string;
    /** the quote amount to cancel (free up) */
    quoteAmount: string;
    /** The cancellation strategy */
    strategy: CancellationStrategy;
    /** The reference price for the cancellation strategy, e.g. mid price or mark price */
    referencePrice?: string;
}
/** QueryTraderSpotOrdersToCancelUpToAmountRequest is the request type for the Query/TraderSpotOrdersToCancelUpToAmountRequest RPC method. */
export interface QueryTraderSpotOrdersToCancelUpToAmountRequestSDKType {
    /** Market ID for the market */
    market_id: string;
    /** SubaccountID of the trader */
    subaccount_id: string;
    /** the base amount to cancel (free up) */
    base_amount: string;
    /** the quote amount to cancel (free up) */
    quote_amount: string;
    /** The cancellation strategy */
    strategy: CancellationStrategySDKType;
    /** The reference price for the cancellation strategy, e.g. mid price or mark price */
    reference_price?: string;
}
/** QueryTraderDerivativeOrdersToCancelUpToAmountRequest is the request type for the Query/TraderDerivativeOrdersToCancelUpToAmountRequest RPC method. */
export interface QueryTraderDerivativeOrdersToCancelUpToAmountRequest {
    /** Market ID for the market */
    marketId: string;
    /** SubaccountID of the trader */
    subaccountId: string;
    /** the quote amount to cancel (free up) */
    quoteAmount: string;
    /** The cancellation strategy */
    strategy: CancellationStrategy;
    /** The reference price for the cancellation strategy, e.g. mid price or mark price */
    referencePrice?: string;
}
/** QueryTraderDerivativeOrdersToCancelUpToAmountRequest is the request type for the Query/TraderDerivativeOrdersToCancelUpToAmountRequest RPC method. */
export interface QueryTraderDerivativeOrdersToCancelUpToAmountRequestSDKType {
    /** Market ID for the market */
    market_id: string;
    /** SubaccountID of the trader */
    subaccount_id: string;
    /** the quote amount to cancel (free up) */
    quote_amount: string;
    /** The cancellation strategy */
    strategy: CancellationStrategySDKType;
    /** The reference price for the cancellation strategy, e.g. mid price or mark price */
    reference_price?: string;
}
/** QueryTraderDerivativeOrdersRequest is the request type for the Query/TraderDerivativeOrders RPC method. */
export interface QueryTraderDerivativeOrdersRequest {
    /** Market ID for the market */
    marketId: string;
    /** SubaccountID of the trader */
    subaccountId: string;
}
/** QueryTraderDerivativeOrdersRequest is the request type for the Query/TraderDerivativeOrders RPC method. */
export interface QueryTraderDerivativeOrdersRequestSDKType {
    /** Market ID for the market */
    market_id: string;
    /** SubaccountID of the trader */
    subaccount_id: string;
}
export interface TrimmedDerivativeLimitOrder {
    /** price of the order */
    price: string;
    /** quantity of the order */
    quantity: string;
    /** margin of the order */
    margin: string;
    /** the amount of the quantity remaining fillable */
    fillable: string;
    /** true if the order is a buy */
    isBuy: boolean;
    orderHash: string;
}
export interface TrimmedDerivativeLimitOrderSDKType {
    /** price of the order */
    price: string;
    /** quantity of the order */
    quantity: string;
    /** margin of the order */
    margin: string;
    /** the amount of the quantity remaining fillable */
    fillable: string;
    /** true if the order is a buy */
    isBuy: boolean;
    order_hash: string;
}
/** QueryTraderDerivativeOrdersResponse is the response type for the Query/TraderDerivativeOrders RPC method. */
export interface QueryTraderDerivativeOrdersResponse {
    orders: TrimmedDerivativeLimitOrder[];
}
/** QueryTraderDerivativeOrdersResponse is the response type for the Query/TraderDerivativeOrders RPC method. */
export interface QueryTraderDerivativeOrdersResponseSDKType {
    orders: TrimmedDerivativeLimitOrderSDKType[];
}
/** QueryTraderDerivativeOrdersRequest is the request type for the Query/TraderDerivativeOrders RPC method. */
export interface QueryDerivativeOrdersByHashesRequest {
    /** Market ID for the market */
    marketId: string;
    /** SubaccountID of the trader */
    subaccountId: string;
    /** the order hashes */
    orderHashes?: string[];
}
/** QueryTraderDerivativeOrdersRequest is the request type for the Query/TraderDerivativeOrders RPC method. */
export interface QueryDerivativeOrdersByHashesRequestSDKType {
    /** Market ID for the market */
    market_id: string;
    /** SubaccountID of the trader */
    subaccount_id: string;
    /** the order hashes */
    order_hashes?: string[];
}
/** QueryDerivativeOrdersByHashesResponse is the response type for the Query/DerivativeOrdersByHashes RPC method. */
export interface QueryDerivativeOrdersByHashesResponse {
    orders: TrimmedDerivativeLimitOrder[];
}
/** QueryDerivativeOrdersByHashesResponse is the response type for the Query/DerivativeOrdersByHashes RPC method. */
export interface QueryDerivativeOrdersByHashesResponseSDKType {
    orders: TrimmedDerivativeLimitOrderSDKType[];
}
/** QueryDerivativeMarketsRequest is the request type for the Query/DerivativeMarkets RPC method. */
export interface QueryDerivativeMarketsRequest {
    /** Status of the market, for convenience it is set to string - not enum */
    status?: string;
}
/** QueryDerivativeMarketsRequest is the request type for the Query/DerivativeMarkets RPC method. */
export interface QueryDerivativeMarketsRequestSDKType {
    /** Status of the market, for convenience it is set to string - not enum */
    status?: string;
}
export interface PriceLevel {
    price: string;
    /** quantity */
    quantity: string;
}
export interface PriceLevelSDKType {
    price: string;
    /** quantity */
    quantity: string;
}
export interface PerpetualMarketState {
    marketInfo: PerpetualMarketInfo;
    fundingInfo: PerpetualMarketFunding;
}
export interface PerpetualMarketStateSDKType {
    market_info: PerpetualMarketInfoSDKType;
    funding_info: PerpetualMarketFundingSDKType;
}
export interface FullDerivativeMarket {
    market: DerivativeMarket;
    perpetualInfo?: PerpetualMarketState;
    futuresInfo?: ExpiryFuturesMarketInfo;
    markPrice: string;
}
export interface FullDerivativeMarketSDKType {
    market: DerivativeMarketSDKType;
    perpetual_info?: PerpetualMarketStateSDKType;
    futures_info?: ExpiryFuturesMarketInfoSDKType;
    mark_price: string;
}
/** QueryDerivativeMarketsResponse is the response type for the Query/DerivativeMarkets RPC method. */
export interface QueryDerivativeMarketsResponse {
    markets: FullDerivativeMarket[];
}
/** QueryDerivativeMarketsResponse is the response type for the Query/DerivativeMarkets RPC method. */
export interface QueryDerivativeMarketsResponseSDKType {
    markets: FullDerivativeMarketSDKType[];
}
/** QueryDerivativeMarketRequest is the request type for the Query/DerivativeMarket RPC method. */
export interface QueryDerivativeMarketRequest {
    /** Market ID for the market */
    marketId: string;
}
/** QueryDerivativeMarketRequest is the request type for the Query/DerivativeMarket RPC method. */
export interface QueryDerivativeMarketRequestSDKType {
    /** Market ID for the market */
    market_id: string;
}
/** QueryDerivativeMarketResponse is the response type for the Query/DerivativeMarket RPC method. */
export interface QueryDerivativeMarketResponse {
    market: FullDerivativeMarket;
}
/** QueryDerivativeMarketResponse is the response type for the Query/DerivativeMarket RPC method. */
export interface QueryDerivativeMarketResponseSDKType {
    market: FullDerivativeMarketSDKType;
}
/** QueryDerivativeMarketAddressRequest is the request type for the Query/DerivativeMarketAddress RPC method. */
export interface QueryDerivativeMarketAddressRequest {
    /** Market ID for the market */
    marketId: string;
}
/** QueryDerivativeMarketAddressRequest is the request type for the Query/DerivativeMarketAddress RPC method. */
export interface QueryDerivativeMarketAddressRequestSDKType {
    /** Market ID for the market */
    market_id: string;
}
/** QueryDerivativeMarketAddressResponse is the response type for the Query/DerivativeMarketAddress RPC method. */
export interface QueryDerivativeMarketAddressResponse {
    /** address for the market */
    address: string;
    /** subaccountID for the market */
    subaccountId: string;
}
/** QueryDerivativeMarketAddressResponse is the response type for the Query/DerivativeMarketAddress RPC method. */
export interface QueryDerivativeMarketAddressResponseSDKType {
    /** address for the market */
    address: string;
    /** subaccountID for the market */
    subaccount_id: string;
}
/** QuerySubaccountTradeNonceRequest is the request type for the Query/SubaccountTradeNonce RPC method. */
export interface QuerySubaccountTradeNonceRequest {
    subaccountId: string;
}
/** QuerySubaccountTradeNonceRequest is the request type for the Query/SubaccountTradeNonce RPC method. */
export interface QuerySubaccountTradeNonceRequestSDKType {
    subaccount_id: string;
}
/** QuerySubaccountPositionsRequest is the request type for the Query/SubaccountPositions RPC method. */
export interface QuerySubaccountPositionsRequest {
    subaccountId: string;
}
/** QuerySubaccountPositionsRequest is the request type for the Query/SubaccountPositions RPC method. */
export interface QuerySubaccountPositionsRequestSDKType {
    subaccount_id: string;
}
/** QuerySubaccountPositionInMarketRequest is the request type for the Query/SubaccountPositionInMarket RPC method. */
export interface QuerySubaccountPositionInMarketRequest {
    subaccountId: string;
    marketId: string;
}
/** QuerySubaccountPositionInMarketRequest is the request type for the Query/SubaccountPositionInMarket RPC method. */
export interface QuerySubaccountPositionInMarketRequestSDKType {
    subaccount_id: string;
    market_id: string;
}
/** QuerySubaccountEffectivePositionInMarketRequest is the request type for the Query/SubaccountEffectivePositionInMarket RPC method. */
export interface QuerySubaccountEffectivePositionInMarketRequest {
    subaccountId: string;
    marketId: string;
}
/** QuerySubaccountEffectivePositionInMarketRequest is the request type for the Query/SubaccountEffectivePositionInMarket RPC method. */
export interface QuerySubaccountEffectivePositionInMarketRequestSDKType {
    subaccount_id: string;
    market_id: string;
}
/** QuerySubaccountOrderMetadataRequest is the request type for the Query/SubaccountOrderMetadata RPC method. */
export interface QuerySubaccountOrderMetadataRequest {
    subaccountId: string;
}
/** QuerySubaccountOrderMetadataRequest is the request type for the Query/SubaccountOrderMetadata RPC method. */
export interface QuerySubaccountOrderMetadataRequestSDKType {
    subaccount_id: string;
}
/** QuerySubaccountPositionsResponse is the response type for the Query/SubaccountPositions RPC method. */
export interface QuerySubaccountPositionsResponse {
    state: DerivativePosition[];
}
/** QuerySubaccountPositionsResponse is the response type for the Query/SubaccountPositions RPC method. */
export interface QuerySubaccountPositionsResponseSDKType {
    state: DerivativePositionSDKType[];
}
/** QuerySubaccountPositionInMarketResponse is the response type for the Query/SubaccountPositionInMarket RPC method. */
export interface QuerySubaccountPositionInMarketResponse {
    state?: Position;
}
/** QuerySubaccountPositionInMarketResponse is the response type for the Query/SubaccountPositionInMarket RPC method. */
export interface QuerySubaccountPositionInMarketResponseSDKType {
    state?: PositionSDKType;
}
export interface EffectivePosition {
    isLong: boolean;
    quantity: string;
    entryPrice: string;
    effectiveMargin: string;
}
export interface EffectivePositionSDKType {
    is_long: boolean;
    quantity: string;
    entry_price: string;
    effective_margin: string;
}
/** QuerySubaccountEffectivePositionInMarketResponse is the response type for the Query/SubaccountEffectivePositionInMarket RPC method. */
export interface QuerySubaccountEffectivePositionInMarketResponse {
    state?: EffectivePosition;
}
/** QuerySubaccountEffectivePositionInMarketResponse is the response type for the Query/SubaccountEffectivePositionInMarket RPC method. */
export interface QuerySubaccountEffectivePositionInMarketResponseSDKType {
    state?: EffectivePositionSDKType;
}
/** QueryPerpetualMarketInfoRequest is the request type for the Query/PerpetualMarketInfo RPC method. */
export interface QueryPerpetualMarketInfoRequest {
    marketId: string;
}
/** QueryPerpetualMarketInfoRequest is the request type for the Query/PerpetualMarketInfo RPC method. */
export interface QueryPerpetualMarketInfoRequestSDKType {
    market_id: string;
}
/** QueryPerpetualMarketInfoResponse is the response type for the Query/PerpetualMarketInfo RPC method. */
export interface QueryPerpetualMarketInfoResponse {
    info: PerpetualMarketInfo;
}
/** QueryPerpetualMarketInfoResponse is the response type for the Query/PerpetualMarketInfo RPC method. */
export interface QueryPerpetualMarketInfoResponseSDKType {
    info: PerpetualMarketInfoSDKType;
}
/** QueryExpiryFuturesMarketInfoRequest is the request type for the Query/ ExpiryFuturesMarketInfo RPC method. */
export interface QueryExpiryFuturesMarketInfoRequest {
    marketId: string;
}
/** QueryExpiryFuturesMarketInfoRequest is the request type for the Query/ ExpiryFuturesMarketInfo RPC method. */
export interface QueryExpiryFuturesMarketInfoRequestSDKType {
    market_id: string;
}
/** QueryExpiryFuturesMarketInfoResponse is the response type for the Query/ ExpiryFuturesMarketInfo RPC method. */
export interface QueryExpiryFuturesMarketInfoResponse {
    info: ExpiryFuturesMarketInfo;
}
/** QueryExpiryFuturesMarketInfoResponse is the response type for the Query/ ExpiryFuturesMarketInfo RPC method. */
export interface QueryExpiryFuturesMarketInfoResponseSDKType {
    info: ExpiryFuturesMarketInfoSDKType;
}
/** QueryPerpetualMarketFundingRequest is the request type for the Query/PerpetualMarketFunding RPC method. */
export interface QueryPerpetualMarketFundingRequest {
    marketId: string;
}
/** QueryPerpetualMarketFundingRequest is the request type for the Query/PerpetualMarketFunding RPC method. */
export interface QueryPerpetualMarketFundingRequestSDKType {
    market_id: string;
}
/** QueryPerpetualMarketFundingResponse is the response type for the Query/PerpetualMarketFunding RPC method. */
export interface QueryPerpetualMarketFundingResponse {
    state: PerpetualMarketFunding;
}
/** QueryPerpetualMarketFundingResponse is the response type for the Query/PerpetualMarketFunding RPC method. */
export interface QueryPerpetualMarketFundingResponseSDKType {
    state: PerpetualMarketFundingSDKType;
}
/** QuerySubaccountOrderMetadataResponse is the response type for the Query/SubaccountOrderMetadata RPC method. */
export interface QuerySubaccountOrderMetadataResponse {
    metadata: SubaccountOrderbookMetadataWithMarket[];
}
/** QuerySubaccountOrderMetadataResponse is the response type for the Query/SubaccountOrderMetadata RPC method. */
export interface QuerySubaccountOrderMetadataResponseSDKType {
    metadata: SubaccountOrderbookMetadataWithMarketSDKType[];
}
/** QuerySubaccountTradeNonceResponse is the response type for the Query/SubaccountTradeNonce RPC method. */
export interface QuerySubaccountTradeNonceResponse {
    nonce: number;
}
/** QuerySubaccountTradeNonceResponse is the response type for the Query/SubaccountTradeNonce RPC method. */
export interface QuerySubaccountTradeNonceResponseSDKType {
    nonce: number;
}
/** QueryModuleStateRequest is the request type for the Query/ExchangeModuleState RPC method. */
export interface QueryModuleStateRequest {
}
/** QueryModuleStateRequest is the request type for the Query/ExchangeModuleState RPC method. */
export interface QueryModuleStateRequestSDKType {
}
/** QueryModuleStateResponse is the response type for the Query/ExchangeModuleState RPC method. */
export interface QueryModuleStateResponse {
    state: GenesisState;
}
/** QueryModuleStateResponse is the response type for the Query/ExchangeModuleState RPC method. */
export interface QueryModuleStateResponseSDKType {
    state: GenesisStateSDKType;
}
/** QueryPositionsRequest is the request type for the Query/Positions RPC method. */
export interface QueryPositionsRequest {
}
/** QueryPositionsRequest is the request type for the Query/Positions RPC method. */
export interface QueryPositionsRequestSDKType {
}
/** QueryPositionsResponse is the response type for the Query/Positions RPC method. */
export interface QueryPositionsResponse {
    state: DerivativePosition[];
}
/** QueryPositionsResponse is the response type for the Query/Positions RPC method. */
export interface QueryPositionsResponseSDKType {
    state: DerivativePositionSDKType[];
}
/** QueryTradeRewardPointsRequest is the request type for the Query/TradeRewardPoints RPC method. */
export interface QueryTradeRewardPointsRequest {
    accounts?: string[];
    pendingPoolTimestamp?: Long;
}
/** QueryTradeRewardPointsRequest is the request type for the Query/TradeRewardPoints RPC method. */
export interface QueryTradeRewardPointsRequestSDKType {
    accounts?: string[];
    pending_pool_timestamp?: Long;
}
/** QueryTradeRewardPointsResponse is the response type for the Query/TradeRewardPoints RPC method. */
export interface QueryTradeRewardPointsResponse {
    accountTradeRewardPoints: string[];
}
/** QueryTradeRewardPointsResponse is the response type for the Query/TradeRewardPoints RPC method. */
export interface QueryTradeRewardPointsResponseSDKType {
    account_trade_reward_points: string[];
}
/** QueryTradeRewardCampaignRequest is the request type for the Query/TradeRewardCampaign RPC method. */
export interface QueryTradeRewardCampaignRequest {
}
/** QueryTradeRewardCampaignRequest is the request type for the Query/TradeRewardCampaign RPC method. */
export interface QueryTradeRewardCampaignRequestSDKType {
}
/** QueryTradeRewardCampaignResponse is the response type for the Query/TradeRewardCampaign RPC method. */
export interface QueryTradeRewardCampaignResponse {
    tradingRewardCampaignInfo: TradingRewardCampaignInfo;
    tradingRewardPoolCampaignSchedule: CampaignRewardPool[];
    totalTradeRewardPoints: string;
    pendingTradingRewardPoolCampaignSchedule: CampaignRewardPool[];
    pendingTotalTradeRewardPoints: string[];
}
/** QueryTradeRewardCampaignResponse is the response type for the Query/TradeRewardCampaign RPC method. */
export interface QueryTradeRewardCampaignResponseSDKType {
    trading_reward_campaign_info: TradingRewardCampaignInfoSDKType;
    trading_reward_pool_campaign_schedule: CampaignRewardPoolSDKType[];
    total_trade_reward_points: string;
    pending_trading_reward_pool_campaign_schedule: CampaignRewardPoolSDKType[];
    pending_total_trade_reward_points: string[];
}
/** QueryIsRegisteredDMMRequest is the request type for the Query/IsRegisteredDMM RPC method. */
export interface QueryIsOptedOutOfRewardsRequest {
    account: string;
}
/** QueryIsRegisteredDMMRequest is the request type for the Query/IsRegisteredDMM RPC method. */
export interface QueryIsOptedOutOfRewardsRequestSDKType {
    account: string;
}
/** QueryIsRegisteredDMMResponse is the response type for the Query/IsRegisteredDMM RPC method. */
export interface QueryIsOptedOutOfRewardsResponse {
    isOptedOut: boolean;
}
/** QueryIsRegisteredDMMResponse is the response type for the Query/IsRegisteredDMM RPC method. */
export interface QueryIsOptedOutOfRewardsResponseSDKType {
    is_opted_out: boolean;
}
/** QueryRegisteredDMMsRequest is the request type for the Query/RegisteredDMMs RPC method. */
export interface QueryOptedOutOfRewardsAccountsRequest {
}
/** QueryRegisteredDMMsRequest is the request type for the Query/RegisteredDMMs RPC method. */
export interface QueryOptedOutOfRewardsAccountsRequestSDKType {
}
/** QueryRegisteredDMMsResponse is the response type for the Query/RegisteredDMMs RPC method. */
export interface QueryOptedOutOfRewardsAccountsResponse {
    accounts: string[];
}
/** QueryRegisteredDMMsResponse is the response type for the Query/RegisteredDMMs RPC method. */
export interface QueryOptedOutOfRewardsAccountsResponseSDKType {
    accounts: string[];
}
/** QueryFeeDiscountAccountInfoRequest is the request type for the Query/FeeDiscountAccountInfo RPC method. */
export interface QueryFeeDiscountAccountInfoRequest {
    account: string;
}
/** QueryFeeDiscountAccountInfoRequest is the request type for the Query/FeeDiscountAccountInfo RPC method. */
export interface QueryFeeDiscountAccountInfoRequestSDKType {
    account: string;
}
/** QueryFeeDiscountAccountInfoResponse is the response type for the Query/FeeDiscountAccountInfo RPC method. */
export interface QueryFeeDiscountAccountInfoResponse {
    tierLevel: Long;
    accountInfo: FeeDiscountTierInfo;
    accountTtl: FeeDiscountTierTTL;
}
/** QueryFeeDiscountAccountInfoResponse is the response type for the Query/FeeDiscountAccountInfo RPC method. */
export interface QueryFeeDiscountAccountInfoResponseSDKType {
    tier_level: Long;
    account_info: FeeDiscountTierInfoSDKType;
    account_ttl: FeeDiscountTierTTLSDKType;
}
/** QueryFeeDiscountScheduleRequest is the request type for the Query/FeeDiscountSchedule RPC method. */
export interface QueryFeeDiscountScheduleRequest {
}
/** QueryFeeDiscountScheduleRequest is the request type for the Query/FeeDiscountSchedule RPC method. */
export interface QueryFeeDiscountScheduleRequestSDKType {
}
/** QueryFeeDiscountScheduleResponse is the response type for the Query/FeeDiscountSchedule RPC method. */
export interface QueryFeeDiscountScheduleResponse {
    feeDiscountSchedule: FeeDiscountSchedule;
}
/** QueryFeeDiscountScheduleResponse is the response type for the Query/FeeDiscountSchedule RPC method. */
export interface QueryFeeDiscountScheduleResponseSDKType {
    fee_discount_schedule: FeeDiscountScheduleSDKType;
}
/** QueryBalanceMismatchesRequest is the request type for the Query/QueryBalanceMismatches RPC method. */
export interface QueryBalanceMismatchesRequest {
    dustFactor: Long;
}
/** QueryBalanceMismatchesRequest is the request type for the Query/QueryBalanceMismatches RPC method. */
export interface QueryBalanceMismatchesRequestSDKType {
    dust_factor: Long;
}
export interface BalanceMismatch {
    subaccountId: string;
    denom: string;
    available: string;
    total: string;
    balanceHold: string;
    expectedTotal: string;
    difference: string;
}
export interface BalanceMismatchSDKType {
    subaccountId: string;
    denom: string;
    available: string;
    total: string;
    balance_hold: string;
    expected_total: string;
    difference: string;
}
/** QueryBalanceMismatchesResponse is the response type for the Query/QueryBalanceMismatches RPC method. */
export interface QueryBalanceMismatchesResponse {
    balanceMismatches: BalanceMismatch[];
}
/** QueryBalanceMismatchesResponse is the response type for the Query/QueryBalanceMismatches RPC method. */
export interface QueryBalanceMismatchesResponseSDKType {
    balance_mismatches: BalanceMismatchSDKType[];
}
/** QueryBalanceWithBalanceHoldsRequest is the request type for the Query/QueryBalanceWithBalanceHolds RPC method. */
export interface QueryBalanceWithBalanceHoldsRequest {
}
/** QueryBalanceWithBalanceHoldsRequest is the request type for the Query/QueryBalanceWithBalanceHolds RPC method. */
export interface QueryBalanceWithBalanceHoldsRequestSDKType {
}
export interface BalanceWithMarginHold {
    subaccountId: string;
    denom: string;
    available: string;
    total: string;
    balanceHold: string;
}
export interface BalanceWithMarginHoldSDKType {
    subaccountId: string;
    denom: string;
    available: string;
    total: string;
    balance_hold: string;
}
/** QueryBalanceWithBalanceHoldsResponse is the response type for the Query/QueryBalanceWithBalanceHolds RPC method. */
export interface QueryBalanceWithBalanceHoldsResponse {
    balanceWithBalanceHolds: BalanceWithMarginHold[];
}
/** QueryBalanceWithBalanceHoldsResponse is the response type for the Query/QueryBalanceWithBalanceHolds RPC method. */
export interface QueryBalanceWithBalanceHoldsResponseSDKType {
    balance_with_balance_holds: BalanceWithMarginHoldSDKType[];
}
/** QueryFeeDiscountTierStatisticsRequest is the request type for the Query/QueryFeeDiscountTierStatistics RPC method. */
export interface QueryFeeDiscountTierStatisticsRequest {
}
/** QueryFeeDiscountTierStatisticsRequest is the request type for the Query/QueryFeeDiscountTierStatistics RPC method. */
export interface QueryFeeDiscountTierStatisticsRequestSDKType {
}
export interface TierStatistic {
    tier: Long;
    count: Long;
}
export interface TierStatisticSDKType {
    tier: Long;
    count: Long;
}
/** QueryFeeDiscountTierStatisticsResponse is the response type for the Query/QueryFeeDiscountTierStatistics RPC method. */
export interface QueryFeeDiscountTierStatisticsResponse {
    statistics: TierStatistic[];
}
/** QueryFeeDiscountTierStatisticsResponse is the response type for the Query/QueryFeeDiscountTierStatistics RPC method. */
export interface QueryFeeDiscountTierStatisticsResponseSDKType {
    statistics: TierStatisticSDKType[];
}
/** NinjaVaultInfosRequest is the request type for the Query/NinjaVaultInfos RPC method. */
export interface NinjaVaultInfosRequest {
}
/** NinjaVaultInfosRequest is the request type for the Query/NinjaVaultInfos RPC method. */
export interface NinjaVaultInfosRequestSDKType {
}
/** NinjaVaultInfosResponse is the response type for the Query/NinjaVaultInfos RPC method. */
export interface NinjaVaultInfosResponse {
    masterAddresses: string[];
    derivativeAddresses: string[];
    spotAddresses: string[];
    cw20Addresses: string[];
}
/** NinjaVaultInfosResponse is the response type for the Query/NinjaVaultInfos RPC method. */
export interface NinjaVaultInfosResponseSDKType {
    master_addresses: string[];
    derivative_addresses: string[];
    spot_addresses: string[];
    cw20_addresses: string[];
}
/** QueryMarketIDFromVaultRequest is the request type for the Query/QueryMarketIDFromVault RPC method. */
export interface QueryMarketIDFromVaultRequest {
    vaultSubaccountId: string;
}
/** QueryMarketIDFromVaultRequest is the request type for the Query/QueryMarketIDFromVault RPC method. */
export interface QueryMarketIDFromVaultRequestSDKType {
    vault_subaccount_id: string;
}
/** QueryMarketIDFromVaultResponse is the response type for the Query/QueryMarketIDFromVault RPC method. */
export interface QueryMarketIDFromVaultResponse {
    marketId: string;
}
/** QueryMarketIDFromVaultResponse is the response type for the Query/QueryMarketIDFromVault RPC method. */
export interface QueryMarketIDFromVaultResponseSDKType {
    market_id: string;
}
export interface QueryHistoricalTradeRecordsRequest {
    marketId?: string;
}
export interface QueryHistoricalTradeRecordsRequestSDKType {
    market_id?: string;
}
export interface QueryHistoricalTradeRecordsResponse {
    tradeRecords: TradeRecords[];
}
export interface QueryHistoricalTradeRecordsResponseSDKType {
    trade_records: TradeRecordsSDKType[];
}
/** TradeHistoryOptions are the optional params for Query/MarketVolatility RPC method. */
export interface TradeHistoryOptions {
    /** TradeGroupingSec of 0 means use the chain's default grouping */
    tradeGroupingSec: Long;
    /**
     * MaxAge restricts the trade records oldest age in seconds from the current block time to consider.
     * A value of 0 means use all the records present on the chain.
     */
    maxAge: Long;
    /** If IncludeRawHistory is true, the raw underlying data used for the computation is included in the response */
    includeRawHistory: boolean;
    /** If IncludeMetadata is true, metadata on the computation is included in the response */
    includeMetadata: boolean;
}
/** TradeHistoryOptions are the optional params for Query/MarketVolatility RPC method. */
export interface TradeHistoryOptionsSDKType {
    /** TradeGroupingSec of 0 means use the chain's default grouping */
    trade_grouping_sec: Long;
    /**
     * MaxAge restricts the trade records oldest age in seconds from the current block time to consider.
     * A value of 0 means use all the records present on the chain.
     */
    max_age: Long;
    /** If IncludeRawHistory is true, the raw underlying data used for the computation is included in the response */
    include_raw_history: boolean;
    /** If IncludeMetadata is true, metadata on the computation is included in the response */
    include_metadata: boolean;
}
/** QueryMarketVolatilityRequest are the request params for the Query/MarketVolatility RPC method. */
export interface QueryMarketVolatilityRequest {
    marketId: string;
    tradeHistoryOptions?: TradeHistoryOptions;
}
/** QueryMarketVolatilityRequest are the request params for the Query/MarketVolatility RPC method. */
export interface QueryMarketVolatilityRequestSDKType {
    market_id: string;
    trade_history_options?: TradeHistoryOptionsSDKType;
}
/** QueryMarketVolatilityResponse is the response type for the Query/MarketVolatility RPC method. */
export interface QueryMarketVolatilityResponse {
    volatility: string;
    historyMetadata: MetadataStatistics;
    rawHistory: TradeRecord[];
}
/** QueryMarketVolatilityResponse is the response type for the Query/MarketVolatility RPC method. */
export interface QueryMarketVolatilityResponseSDKType {
    volatility: string;
    history_metadata: MetadataStatisticsSDKType;
    raw_history: TradeRecordSDKType[];
}
/** QuerBinaryMarketsRequest is the request type for the Query/BinaryMarkets RPC method. */
export interface QueryBinaryMarketsRequest {
    /** Status of the market, for convenience it is set to string - not enum */
    status?: string;
}
/** QuerBinaryMarketsRequest is the request type for the Query/BinaryMarkets RPC method. */
export interface QueryBinaryMarketsRequestSDKType {
    /** Status of the market, for convenience it is set to string - not enum */
    status?: string;
}
/** QueryBinaryMarketsResponse is the response type for the Query/BinaryMarkets RPC method. */
export interface QueryBinaryMarketsResponse {
    markets: BinaryOptionsMarket[];
}
/** QueryBinaryMarketsResponse is the response type for the Query/BinaryMarkets RPC method. */
export interface QueryBinaryMarketsResponseSDKType {
    markets: BinaryOptionsMarketSDKType[];
}
/** QueryConditionalOrdersRequest is the request type for the Query/ConditionalOrders RPC method. */
export interface QueryTraderDerivativeConditionalOrdersRequest {
    subaccountId: string;
    marketId: string;
}
/** QueryConditionalOrdersRequest is the request type for the Query/ConditionalOrders RPC method. */
export interface QueryTraderDerivativeConditionalOrdersRequestSDKType {
    subaccount_id: string;
    market_id: string;
}
export interface TrimmedDerivativeConditionalOrder {
    /** price of the order */
    price: string;
    /** quantity of the order */
    quantity: string;
    /** margin of the order */
    margin: string;
    /** price to trigger the order */
    triggerPrice: string;
    /** true if the order is a buy */
    isBuy: boolean;
    isLimit: boolean;
    orderHash: string;
}
export interface TrimmedDerivativeConditionalOrderSDKType {
    /** price of the order */
    price: string;
    /** quantity of the order */
    quantity: string;
    /** margin of the order */
    margin: string;
    /** price to trigger the order */
    triggerPrice: string;
    /** true if the order is a buy */
    isBuy: boolean;
    isLimit: boolean;
    order_hash: string;
}
/** QueryTraderDerivativeOrdersResponse is the response type for the Query/TraderDerivativeOrders RPC method. */
export interface QueryTraderDerivativeConditionalOrdersResponse {
    orders: TrimmedDerivativeConditionalOrder[];
}
/** QueryTraderDerivativeOrdersResponse is the response type for the Query/TraderDerivativeOrders RPC method. */
export interface QueryTraderDerivativeConditionalOrdersResponseSDKType {
    orders: TrimmedDerivativeConditionalOrderSDKType[];
}
export declare const Subaccount: {
    encode(message: Subaccount, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Subaccount;
    fromPartial(object: DeepPartial<Subaccount>): Subaccount;
};
export declare const QuerySubaccountOrdersRequest: {
    encode(message: QuerySubaccountOrdersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySubaccountOrdersRequest;
    fromPartial(object: DeepPartial<QuerySubaccountOrdersRequest>): QuerySubaccountOrdersRequest;
};
export declare const QuerySubaccountOrdersResponse: {
    encode(message: QuerySubaccountOrdersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySubaccountOrdersResponse;
    fromPartial(object: DeepPartial<QuerySubaccountOrdersResponse>): QuerySubaccountOrdersResponse;
};
export declare const SubaccountOrderbookMetadataWithMarket: {
    encode(message: SubaccountOrderbookMetadataWithMarket, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SubaccountOrderbookMetadataWithMarket;
    fromPartial(object: DeepPartial<SubaccountOrderbookMetadataWithMarket>): SubaccountOrderbookMetadataWithMarket;
};
export declare const QueryExchangeParamsRequest: {
    encode(_: QueryExchangeParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryExchangeParamsRequest;
    fromPartial(_: DeepPartial<QueryExchangeParamsRequest>): QueryExchangeParamsRequest;
};
export declare const QueryExchangeParamsResponse: {
    encode(message: QueryExchangeParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryExchangeParamsResponse;
    fromPartial(object: DeepPartial<QueryExchangeParamsResponse>): QueryExchangeParamsResponse;
};
export declare const QuerySubaccountDepositsRequest: {
    encode(message: QuerySubaccountDepositsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySubaccountDepositsRequest;
    fromPartial(object: DeepPartial<QuerySubaccountDepositsRequest>): QuerySubaccountDepositsRequest;
};
export declare const QuerySubaccountDepositsResponse_DepositsEntry: {
    encode(message: QuerySubaccountDepositsResponse_DepositsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySubaccountDepositsResponse_DepositsEntry;
    fromPartial(object: DeepPartial<QuerySubaccountDepositsResponse_DepositsEntry>): QuerySubaccountDepositsResponse_DepositsEntry;
};
export declare const QuerySubaccountDepositsResponse: {
    encode(message: QuerySubaccountDepositsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySubaccountDepositsResponse;
    fromPartial(object: DeepPartial<QuerySubaccountDepositsResponse>): QuerySubaccountDepositsResponse;
};
export declare const QueryExchangeBalancesRequest: {
    encode(_: QueryExchangeBalancesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryExchangeBalancesRequest;
    fromPartial(_: DeepPartial<QueryExchangeBalancesRequest>): QueryExchangeBalancesRequest;
};
export declare const QueryExchangeBalancesResponse: {
    encode(message: QueryExchangeBalancesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryExchangeBalancesResponse;
    fromPartial(object: DeepPartial<QueryExchangeBalancesResponse>): QueryExchangeBalancesResponse;
};
export declare const QuerySubaccountDepositRequest: {
    encode(message: QuerySubaccountDepositRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySubaccountDepositRequest;
    fromPartial(object: DeepPartial<QuerySubaccountDepositRequest>): QuerySubaccountDepositRequest;
};
export declare const QuerySubaccountDepositResponse: {
    encode(message: QuerySubaccountDepositResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySubaccountDepositResponse;
    fromPartial(object: DeepPartial<QuerySubaccountDepositResponse>): QuerySubaccountDepositResponse;
};
export declare const QuerySpotMarketsRequest: {
    encode(message: QuerySpotMarketsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySpotMarketsRequest;
    fromPartial(object: DeepPartial<QuerySpotMarketsRequest>): QuerySpotMarketsRequest;
};
export declare const QuerySpotMarketsResponse: {
    encode(message: QuerySpotMarketsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySpotMarketsResponse;
    fromPartial(object: DeepPartial<QuerySpotMarketsResponse>): QuerySpotMarketsResponse;
};
export declare const QuerySpotMarketRequest: {
    encode(message: QuerySpotMarketRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySpotMarketRequest;
    fromPartial(object: DeepPartial<QuerySpotMarketRequest>): QuerySpotMarketRequest;
};
export declare const QuerySpotMarketResponse: {
    encode(message: QuerySpotMarketResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySpotMarketResponse;
    fromPartial(object: DeepPartial<QuerySpotMarketResponse>): QuerySpotMarketResponse;
};
export declare const QuerySpotOrderbookRequest: {
    encode(message: QuerySpotOrderbookRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySpotOrderbookRequest;
    fromPartial(object: DeepPartial<QuerySpotOrderbookRequest>): QuerySpotOrderbookRequest;
};
export declare const QuerySpotOrderbookResponse: {
    encode(message: QuerySpotOrderbookResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySpotOrderbookResponse;
    fromPartial(object: DeepPartial<QuerySpotOrderbookResponse>): QuerySpotOrderbookResponse;
};
export declare const QuerySpotOrdersByHashesRequest: {
    encode(message: QuerySpotOrdersByHashesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySpotOrdersByHashesRequest;
    fromPartial(object: DeepPartial<QuerySpotOrdersByHashesRequest>): QuerySpotOrdersByHashesRequest;
};
export declare const QuerySpotOrdersByHashesResponse: {
    encode(message: QuerySpotOrdersByHashesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySpotOrdersByHashesResponse;
    fromPartial(object: DeepPartial<QuerySpotOrdersByHashesResponse>): QuerySpotOrdersByHashesResponse;
};
export declare const QueryTraderSpotOrdersRequest: {
    encode(message: QueryTraderSpotOrdersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTraderSpotOrdersRequest;
    fromPartial(object: DeepPartial<QueryTraderSpotOrdersRequest>): QueryTraderSpotOrdersRequest;
};
export declare const TrimmedSpotLimitOrder: {
    encode(message: TrimmedSpotLimitOrder, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TrimmedSpotLimitOrder;
    fromPartial(object: DeepPartial<TrimmedSpotLimitOrder>): TrimmedSpotLimitOrder;
};
export declare const QueryTraderSpotOrdersResponse: {
    encode(message: QueryTraderSpotOrdersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTraderSpotOrdersResponse;
    fromPartial(object: DeepPartial<QueryTraderSpotOrdersResponse>): QueryTraderSpotOrdersResponse;
};
export declare const QuerySpotMidPriceAndTOBRequest: {
    encode(message: QuerySpotMidPriceAndTOBRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySpotMidPriceAndTOBRequest;
    fromPartial(object: DeepPartial<QuerySpotMidPriceAndTOBRequest>): QuerySpotMidPriceAndTOBRequest;
};
export declare const QuerySpotMidPriceAndTOBResponse: {
    encode(message: QuerySpotMidPriceAndTOBResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySpotMidPriceAndTOBResponse;
    fromPartial(object: DeepPartial<QuerySpotMidPriceAndTOBResponse>): QuerySpotMidPriceAndTOBResponse;
};
export declare const QueryDerivativeMidPriceAndTOBRequest: {
    encode(message: QueryDerivativeMidPriceAndTOBRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDerivativeMidPriceAndTOBRequest;
    fromPartial(object: DeepPartial<QueryDerivativeMidPriceAndTOBRequest>): QueryDerivativeMidPriceAndTOBRequest;
};
export declare const QueryDerivativeMidPriceAndTOBResponse: {
    encode(message: QueryDerivativeMidPriceAndTOBResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDerivativeMidPriceAndTOBResponse;
    fromPartial(object: DeepPartial<QueryDerivativeMidPriceAndTOBResponse>): QueryDerivativeMidPriceAndTOBResponse;
};
export declare const QueryDerivativeOrderbookRequest: {
    encode(message: QueryDerivativeOrderbookRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDerivativeOrderbookRequest;
    fromPartial(object: DeepPartial<QueryDerivativeOrderbookRequest>): QueryDerivativeOrderbookRequest;
};
export declare const QueryDerivativeOrderbookResponse: {
    encode(message: QueryDerivativeOrderbookResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDerivativeOrderbookResponse;
    fromPartial(object: DeepPartial<QueryDerivativeOrderbookResponse>): QueryDerivativeOrderbookResponse;
};
export declare const QueryTraderSpotOrdersToCancelUpToAmountRequest: {
    encode(message: QueryTraderSpotOrdersToCancelUpToAmountRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTraderSpotOrdersToCancelUpToAmountRequest;
    fromPartial(object: DeepPartial<QueryTraderSpotOrdersToCancelUpToAmountRequest>): QueryTraderSpotOrdersToCancelUpToAmountRequest;
};
export declare const QueryTraderDerivativeOrdersToCancelUpToAmountRequest: {
    encode(message: QueryTraderDerivativeOrdersToCancelUpToAmountRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTraderDerivativeOrdersToCancelUpToAmountRequest;
    fromPartial(object: DeepPartial<QueryTraderDerivativeOrdersToCancelUpToAmountRequest>): QueryTraderDerivativeOrdersToCancelUpToAmountRequest;
};
export declare const QueryTraderDerivativeOrdersRequest: {
    encode(message: QueryTraderDerivativeOrdersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTraderDerivativeOrdersRequest;
    fromPartial(object: DeepPartial<QueryTraderDerivativeOrdersRequest>): QueryTraderDerivativeOrdersRequest;
};
export declare const TrimmedDerivativeLimitOrder: {
    encode(message: TrimmedDerivativeLimitOrder, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TrimmedDerivativeLimitOrder;
    fromPartial(object: DeepPartial<TrimmedDerivativeLimitOrder>): TrimmedDerivativeLimitOrder;
};
export declare const QueryTraderDerivativeOrdersResponse: {
    encode(message: QueryTraderDerivativeOrdersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTraderDerivativeOrdersResponse;
    fromPartial(object: DeepPartial<QueryTraderDerivativeOrdersResponse>): QueryTraderDerivativeOrdersResponse;
};
export declare const QueryDerivativeOrdersByHashesRequest: {
    encode(message: QueryDerivativeOrdersByHashesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDerivativeOrdersByHashesRequest;
    fromPartial(object: DeepPartial<QueryDerivativeOrdersByHashesRequest>): QueryDerivativeOrdersByHashesRequest;
};
export declare const QueryDerivativeOrdersByHashesResponse: {
    encode(message: QueryDerivativeOrdersByHashesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDerivativeOrdersByHashesResponse;
    fromPartial(object: DeepPartial<QueryDerivativeOrdersByHashesResponse>): QueryDerivativeOrdersByHashesResponse;
};
export declare const QueryDerivativeMarketsRequest: {
    encode(message: QueryDerivativeMarketsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDerivativeMarketsRequest;
    fromPartial(object: DeepPartial<QueryDerivativeMarketsRequest>): QueryDerivativeMarketsRequest;
};
export declare const PriceLevel: {
    encode(message: PriceLevel, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PriceLevel;
    fromPartial(object: DeepPartial<PriceLevel>): PriceLevel;
};
export declare const PerpetualMarketState: {
    encode(message: PerpetualMarketState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PerpetualMarketState;
    fromPartial(object: DeepPartial<PerpetualMarketState>): PerpetualMarketState;
};
export declare const FullDerivativeMarket: {
    encode(message: FullDerivativeMarket, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FullDerivativeMarket;
    fromPartial(object: DeepPartial<FullDerivativeMarket>): FullDerivativeMarket;
};
export declare const QueryDerivativeMarketsResponse: {
    encode(message: QueryDerivativeMarketsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDerivativeMarketsResponse;
    fromPartial(object: DeepPartial<QueryDerivativeMarketsResponse>): QueryDerivativeMarketsResponse;
};
export declare const QueryDerivativeMarketRequest: {
    encode(message: QueryDerivativeMarketRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDerivativeMarketRequest;
    fromPartial(object: DeepPartial<QueryDerivativeMarketRequest>): QueryDerivativeMarketRequest;
};
export declare const QueryDerivativeMarketResponse: {
    encode(message: QueryDerivativeMarketResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDerivativeMarketResponse;
    fromPartial(object: DeepPartial<QueryDerivativeMarketResponse>): QueryDerivativeMarketResponse;
};
export declare const QueryDerivativeMarketAddressRequest: {
    encode(message: QueryDerivativeMarketAddressRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDerivativeMarketAddressRequest;
    fromPartial(object: DeepPartial<QueryDerivativeMarketAddressRequest>): QueryDerivativeMarketAddressRequest;
};
export declare const QueryDerivativeMarketAddressResponse: {
    encode(message: QueryDerivativeMarketAddressResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDerivativeMarketAddressResponse;
    fromPartial(object: DeepPartial<QueryDerivativeMarketAddressResponse>): QueryDerivativeMarketAddressResponse;
};
export declare const QuerySubaccountTradeNonceRequest: {
    encode(message: QuerySubaccountTradeNonceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySubaccountTradeNonceRequest;
    fromPartial(object: DeepPartial<QuerySubaccountTradeNonceRequest>): QuerySubaccountTradeNonceRequest;
};
export declare const QuerySubaccountPositionsRequest: {
    encode(message: QuerySubaccountPositionsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySubaccountPositionsRequest;
    fromPartial(object: DeepPartial<QuerySubaccountPositionsRequest>): QuerySubaccountPositionsRequest;
};
export declare const QuerySubaccountPositionInMarketRequest: {
    encode(message: QuerySubaccountPositionInMarketRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySubaccountPositionInMarketRequest;
    fromPartial(object: DeepPartial<QuerySubaccountPositionInMarketRequest>): QuerySubaccountPositionInMarketRequest;
};
export declare const QuerySubaccountEffectivePositionInMarketRequest: {
    encode(message: QuerySubaccountEffectivePositionInMarketRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySubaccountEffectivePositionInMarketRequest;
    fromPartial(object: DeepPartial<QuerySubaccountEffectivePositionInMarketRequest>): QuerySubaccountEffectivePositionInMarketRequest;
};
export declare const QuerySubaccountOrderMetadataRequest: {
    encode(message: QuerySubaccountOrderMetadataRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySubaccountOrderMetadataRequest;
    fromPartial(object: DeepPartial<QuerySubaccountOrderMetadataRequest>): QuerySubaccountOrderMetadataRequest;
};
export declare const QuerySubaccountPositionsResponse: {
    encode(message: QuerySubaccountPositionsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySubaccountPositionsResponse;
    fromPartial(object: DeepPartial<QuerySubaccountPositionsResponse>): QuerySubaccountPositionsResponse;
};
export declare const QuerySubaccountPositionInMarketResponse: {
    encode(message: QuerySubaccountPositionInMarketResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySubaccountPositionInMarketResponse;
    fromPartial(object: DeepPartial<QuerySubaccountPositionInMarketResponse>): QuerySubaccountPositionInMarketResponse;
};
export declare const EffectivePosition: {
    encode(message: EffectivePosition, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EffectivePosition;
    fromPartial(object: DeepPartial<EffectivePosition>): EffectivePosition;
};
export declare const QuerySubaccountEffectivePositionInMarketResponse: {
    encode(message: QuerySubaccountEffectivePositionInMarketResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySubaccountEffectivePositionInMarketResponse;
    fromPartial(object: DeepPartial<QuerySubaccountEffectivePositionInMarketResponse>): QuerySubaccountEffectivePositionInMarketResponse;
};
export declare const QueryPerpetualMarketInfoRequest: {
    encode(message: QueryPerpetualMarketInfoRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPerpetualMarketInfoRequest;
    fromPartial(object: DeepPartial<QueryPerpetualMarketInfoRequest>): QueryPerpetualMarketInfoRequest;
};
export declare const QueryPerpetualMarketInfoResponse: {
    encode(message: QueryPerpetualMarketInfoResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPerpetualMarketInfoResponse;
    fromPartial(object: DeepPartial<QueryPerpetualMarketInfoResponse>): QueryPerpetualMarketInfoResponse;
};
export declare const QueryExpiryFuturesMarketInfoRequest: {
    encode(message: QueryExpiryFuturesMarketInfoRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryExpiryFuturesMarketInfoRequest;
    fromPartial(object: DeepPartial<QueryExpiryFuturesMarketInfoRequest>): QueryExpiryFuturesMarketInfoRequest;
};
export declare const QueryExpiryFuturesMarketInfoResponse: {
    encode(message: QueryExpiryFuturesMarketInfoResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryExpiryFuturesMarketInfoResponse;
    fromPartial(object: DeepPartial<QueryExpiryFuturesMarketInfoResponse>): QueryExpiryFuturesMarketInfoResponse;
};
export declare const QueryPerpetualMarketFundingRequest: {
    encode(message: QueryPerpetualMarketFundingRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPerpetualMarketFundingRequest;
    fromPartial(object: DeepPartial<QueryPerpetualMarketFundingRequest>): QueryPerpetualMarketFundingRequest;
};
export declare const QueryPerpetualMarketFundingResponse: {
    encode(message: QueryPerpetualMarketFundingResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPerpetualMarketFundingResponse;
    fromPartial(object: DeepPartial<QueryPerpetualMarketFundingResponse>): QueryPerpetualMarketFundingResponse;
};
export declare const QuerySubaccountOrderMetadataResponse: {
    encode(message: QuerySubaccountOrderMetadataResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySubaccountOrderMetadataResponse;
    fromPartial(object: DeepPartial<QuerySubaccountOrderMetadataResponse>): QuerySubaccountOrderMetadataResponse;
};
export declare const QuerySubaccountTradeNonceResponse: {
    encode(message: QuerySubaccountTradeNonceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySubaccountTradeNonceResponse;
    fromPartial(object: DeepPartial<QuerySubaccountTradeNonceResponse>): QuerySubaccountTradeNonceResponse;
};
export declare const QueryModuleStateRequest: {
    encode(_: QueryModuleStateRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryModuleStateRequest;
    fromPartial(_: DeepPartial<QueryModuleStateRequest>): QueryModuleStateRequest;
};
export declare const QueryModuleStateResponse: {
    encode(message: QueryModuleStateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryModuleStateResponse;
    fromPartial(object: DeepPartial<QueryModuleStateResponse>): QueryModuleStateResponse;
};
export declare const QueryPositionsRequest: {
    encode(_: QueryPositionsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPositionsRequest;
    fromPartial(_: DeepPartial<QueryPositionsRequest>): QueryPositionsRequest;
};
export declare const QueryPositionsResponse: {
    encode(message: QueryPositionsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPositionsResponse;
    fromPartial(object: DeepPartial<QueryPositionsResponse>): QueryPositionsResponse;
};
export declare const QueryTradeRewardPointsRequest: {
    encode(message: QueryTradeRewardPointsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTradeRewardPointsRequest;
    fromPartial(object: DeepPartial<QueryTradeRewardPointsRequest>): QueryTradeRewardPointsRequest;
};
export declare const QueryTradeRewardPointsResponse: {
    encode(message: QueryTradeRewardPointsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTradeRewardPointsResponse;
    fromPartial(object: DeepPartial<QueryTradeRewardPointsResponse>): QueryTradeRewardPointsResponse;
};
export declare const QueryTradeRewardCampaignRequest: {
    encode(_: QueryTradeRewardCampaignRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTradeRewardCampaignRequest;
    fromPartial(_: DeepPartial<QueryTradeRewardCampaignRequest>): QueryTradeRewardCampaignRequest;
};
export declare const QueryTradeRewardCampaignResponse: {
    encode(message: QueryTradeRewardCampaignResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTradeRewardCampaignResponse;
    fromPartial(object: DeepPartial<QueryTradeRewardCampaignResponse>): QueryTradeRewardCampaignResponse;
};
export declare const QueryIsOptedOutOfRewardsRequest: {
    encode(message: QueryIsOptedOutOfRewardsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryIsOptedOutOfRewardsRequest;
    fromPartial(object: DeepPartial<QueryIsOptedOutOfRewardsRequest>): QueryIsOptedOutOfRewardsRequest;
};
export declare const QueryIsOptedOutOfRewardsResponse: {
    encode(message: QueryIsOptedOutOfRewardsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryIsOptedOutOfRewardsResponse;
    fromPartial(object: DeepPartial<QueryIsOptedOutOfRewardsResponse>): QueryIsOptedOutOfRewardsResponse;
};
export declare const QueryOptedOutOfRewardsAccountsRequest: {
    encode(_: QueryOptedOutOfRewardsAccountsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryOptedOutOfRewardsAccountsRequest;
    fromPartial(_: DeepPartial<QueryOptedOutOfRewardsAccountsRequest>): QueryOptedOutOfRewardsAccountsRequest;
};
export declare const QueryOptedOutOfRewardsAccountsResponse: {
    encode(message: QueryOptedOutOfRewardsAccountsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryOptedOutOfRewardsAccountsResponse;
    fromPartial(object: DeepPartial<QueryOptedOutOfRewardsAccountsResponse>): QueryOptedOutOfRewardsAccountsResponse;
};
export declare const QueryFeeDiscountAccountInfoRequest: {
    encode(message: QueryFeeDiscountAccountInfoRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryFeeDiscountAccountInfoRequest;
    fromPartial(object: DeepPartial<QueryFeeDiscountAccountInfoRequest>): QueryFeeDiscountAccountInfoRequest;
};
export declare const QueryFeeDiscountAccountInfoResponse: {
    encode(message: QueryFeeDiscountAccountInfoResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryFeeDiscountAccountInfoResponse;
    fromPartial(object: DeepPartial<QueryFeeDiscountAccountInfoResponse>): QueryFeeDiscountAccountInfoResponse;
};
export declare const QueryFeeDiscountScheduleRequest: {
    encode(_: QueryFeeDiscountScheduleRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryFeeDiscountScheduleRequest;
    fromPartial(_: DeepPartial<QueryFeeDiscountScheduleRequest>): QueryFeeDiscountScheduleRequest;
};
export declare const QueryFeeDiscountScheduleResponse: {
    encode(message: QueryFeeDiscountScheduleResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryFeeDiscountScheduleResponse;
    fromPartial(object: DeepPartial<QueryFeeDiscountScheduleResponse>): QueryFeeDiscountScheduleResponse;
};
export declare const QueryBalanceMismatchesRequest: {
    encode(message: QueryBalanceMismatchesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBalanceMismatchesRequest;
    fromPartial(object: DeepPartial<QueryBalanceMismatchesRequest>): QueryBalanceMismatchesRequest;
};
export declare const BalanceMismatch: {
    encode(message: BalanceMismatch, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BalanceMismatch;
    fromPartial(object: DeepPartial<BalanceMismatch>): BalanceMismatch;
};
export declare const QueryBalanceMismatchesResponse: {
    encode(message: QueryBalanceMismatchesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBalanceMismatchesResponse;
    fromPartial(object: DeepPartial<QueryBalanceMismatchesResponse>): QueryBalanceMismatchesResponse;
};
export declare const QueryBalanceWithBalanceHoldsRequest: {
    encode(_: QueryBalanceWithBalanceHoldsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBalanceWithBalanceHoldsRequest;
    fromPartial(_: DeepPartial<QueryBalanceWithBalanceHoldsRequest>): QueryBalanceWithBalanceHoldsRequest;
};
export declare const BalanceWithMarginHold: {
    encode(message: BalanceWithMarginHold, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BalanceWithMarginHold;
    fromPartial(object: DeepPartial<BalanceWithMarginHold>): BalanceWithMarginHold;
};
export declare const QueryBalanceWithBalanceHoldsResponse: {
    encode(message: QueryBalanceWithBalanceHoldsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBalanceWithBalanceHoldsResponse;
    fromPartial(object: DeepPartial<QueryBalanceWithBalanceHoldsResponse>): QueryBalanceWithBalanceHoldsResponse;
};
export declare const QueryFeeDiscountTierStatisticsRequest: {
    encode(_: QueryFeeDiscountTierStatisticsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryFeeDiscountTierStatisticsRequest;
    fromPartial(_: DeepPartial<QueryFeeDiscountTierStatisticsRequest>): QueryFeeDiscountTierStatisticsRequest;
};
export declare const TierStatistic: {
    encode(message: TierStatistic, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TierStatistic;
    fromPartial(object: DeepPartial<TierStatistic>): TierStatistic;
};
export declare const QueryFeeDiscountTierStatisticsResponse: {
    encode(message: QueryFeeDiscountTierStatisticsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryFeeDiscountTierStatisticsResponse;
    fromPartial(object: DeepPartial<QueryFeeDiscountTierStatisticsResponse>): QueryFeeDiscountTierStatisticsResponse;
};
export declare const NinjaVaultInfosRequest: {
    encode(_: NinjaVaultInfosRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): NinjaVaultInfosRequest;
    fromPartial(_: DeepPartial<NinjaVaultInfosRequest>): NinjaVaultInfosRequest;
};
export declare const NinjaVaultInfosResponse: {
    encode(message: NinjaVaultInfosResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): NinjaVaultInfosResponse;
    fromPartial(object: DeepPartial<NinjaVaultInfosResponse>): NinjaVaultInfosResponse;
};
export declare const QueryMarketIDFromVaultRequest: {
    encode(message: QueryMarketIDFromVaultRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryMarketIDFromVaultRequest;
    fromPartial(object: DeepPartial<QueryMarketIDFromVaultRequest>): QueryMarketIDFromVaultRequest;
};
export declare const QueryMarketIDFromVaultResponse: {
    encode(message: QueryMarketIDFromVaultResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryMarketIDFromVaultResponse;
    fromPartial(object: DeepPartial<QueryMarketIDFromVaultResponse>): QueryMarketIDFromVaultResponse;
};
export declare const QueryHistoricalTradeRecordsRequest: {
    encode(message: QueryHistoricalTradeRecordsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryHistoricalTradeRecordsRequest;
    fromPartial(object: DeepPartial<QueryHistoricalTradeRecordsRequest>): QueryHistoricalTradeRecordsRequest;
};
export declare const QueryHistoricalTradeRecordsResponse: {
    encode(message: QueryHistoricalTradeRecordsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryHistoricalTradeRecordsResponse;
    fromPartial(object: DeepPartial<QueryHistoricalTradeRecordsResponse>): QueryHistoricalTradeRecordsResponse;
};
export declare const TradeHistoryOptions: {
    encode(message: TradeHistoryOptions, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TradeHistoryOptions;
    fromPartial(object: DeepPartial<TradeHistoryOptions>): TradeHistoryOptions;
};
export declare const QueryMarketVolatilityRequest: {
    encode(message: QueryMarketVolatilityRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryMarketVolatilityRequest;
    fromPartial(object: DeepPartial<QueryMarketVolatilityRequest>): QueryMarketVolatilityRequest;
};
export declare const QueryMarketVolatilityResponse: {
    encode(message: QueryMarketVolatilityResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryMarketVolatilityResponse;
    fromPartial(object: DeepPartial<QueryMarketVolatilityResponse>): QueryMarketVolatilityResponse;
};
export declare const QueryBinaryMarketsRequest: {
    encode(message: QueryBinaryMarketsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBinaryMarketsRequest;
    fromPartial(object: DeepPartial<QueryBinaryMarketsRequest>): QueryBinaryMarketsRequest;
};
export declare const QueryBinaryMarketsResponse: {
    encode(message: QueryBinaryMarketsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBinaryMarketsResponse;
    fromPartial(object: DeepPartial<QueryBinaryMarketsResponse>): QueryBinaryMarketsResponse;
};
export declare const QueryTraderDerivativeConditionalOrdersRequest: {
    encode(message: QueryTraderDerivativeConditionalOrdersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTraderDerivativeConditionalOrdersRequest;
    fromPartial(object: DeepPartial<QueryTraderDerivativeConditionalOrdersRequest>): QueryTraderDerivativeConditionalOrdersRequest;
};
export declare const TrimmedDerivativeConditionalOrder: {
    encode(message: TrimmedDerivativeConditionalOrder, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TrimmedDerivativeConditionalOrder;
    fromPartial(object: DeepPartial<TrimmedDerivativeConditionalOrder>): TrimmedDerivativeConditionalOrder;
};
export declare const QueryTraderDerivativeConditionalOrdersResponse: {
    encode(message: QueryTraderDerivativeConditionalOrdersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTraderDerivativeConditionalOrdersResponse;
    fromPartial(object: DeepPartial<QueryTraderDerivativeConditionalOrdersResponse>): QueryTraderDerivativeConditionalOrdersResponse;
};
