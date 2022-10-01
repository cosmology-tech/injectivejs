import { SubaccountOrderData, SubaccountOrderDataSDKType, SubaccountOrderbookMetadata, SubaccountOrderbookMetadataSDKType, Params, ParamsSDKType, Deposit, DepositSDKType, SpotMarket, SpotMarketSDKType, PerpetualMarketInfo, PerpetualMarketInfoSDKType, PerpetualMarketFunding, PerpetualMarketFundingSDKType, DerivativeMarket, DerivativeMarketSDKType, ExpiryFuturesMarketInfo, ExpiryFuturesMarketInfoSDKType, Position, PositionSDKType, TradingRewardCampaignInfo, TradingRewardCampaignInfoSDKType, CampaignRewardPool, CampaignRewardPoolSDKType, FeeDiscountTierInfo, FeeDiscountTierInfoSDKType, FeeDiscountTierTTL, FeeDiscountTierTTLSDKType, FeeDiscountSchedule, FeeDiscountScheduleSDKType, TradeRecords, TradeRecordsSDKType, TradeRecord, TradeRecordSDKType, BinaryOptionsMarket, BinaryOptionsMarketSDKType } from "./exchange";
import { Balance, BalanceSDKType, DerivativePosition, DerivativePositionSDKType, GenesisState, GenesisStateSDKType } from "./genesis";
import { MetadataStatistics, MetadataStatisticsSDKType } from "../../oracle/v1beta1/oracle";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
/** CancellationStrategy is the list of cancellation strategies. */

export enum CancellationStrategy {
  /** UnspecifiedOrder - just cancelling in random order in most efficient way */
  UnspecifiedOrder = 0,

  /** FromWorstToBest - e.g. for buy orders from lowest to highest price */
  FromWorstToBest = 1,

  /** FromBestToWorst - e.g. for buy orders from higest to lowest price */
  FromBestToWorst = 2,
  UNRECOGNIZED = -1,
}
/** CancellationStrategy is the list of cancellation strategies. */

export enum CancellationStrategySDKType {
  /** UnspecifiedOrder - just cancelling in random order in most efficient way */
  UnspecifiedOrder = 0,

  /** FromWorstToBest - e.g. for buy orders from lowest to highest price */
  FromWorstToBest = 1,

  /** FromBestToWorst - e.g. for buy orders from higest to lowest price */
  FromBestToWorst = 2,
  UNRECOGNIZED = -1,
}
export function cancellationStrategyFromJSON(object: any): CancellationStrategy {
  switch (object) {
    case 0:
    case "UnspecifiedOrder":
      return CancellationStrategy.UnspecifiedOrder;

    case 1:
    case "FromWorstToBest":
      return CancellationStrategy.FromWorstToBest;

    case 2:
    case "FromBestToWorst":
      return CancellationStrategy.FromBestToWorst;

    case -1:
    case "UNRECOGNIZED":
    default:
      return CancellationStrategy.UNRECOGNIZED;
  }
}
export function cancellationStrategyToJSON(object: CancellationStrategy): string {
  switch (object) {
    case CancellationStrategy.UnspecifiedOrder:
      return "UnspecifiedOrder";

    case CancellationStrategy.FromWorstToBest:
      return "FromWorstToBest";

    case CancellationStrategy.FromBestToWorst:
      return "FromBestToWorst";

    default:
      return "UNKNOWN";
  }
}
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

export interface QueryExchangeParamsRequest {}
/** QueryExchangeParamsRequest is the request type for the Query/ExchangeParams RPC method. */

export interface QueryExchangeParamsRequestSDKType {}
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

export interface QueryExchangeBalancesRequest {}
/** QueryExchangeBalancesRequest is the request type for the Query/ExchangeBalances RPC method. */

export interface QueryExchangeBalancesRequestSDKType {}
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

export interface QueryModuleStateRequest {}
/** QueryModuleStateRequest is the request type for the Query/ExchangeModuleState RPC method. */

export interface QueryModuleStateRequestSDKType {}
/** QueryModuleStateResponse is the response type for the Query/ExchangeModuleState RPC method. */

export interface QueryModuleStateResponse {
  state: GenesisState;
}
/** QueryModuleStateResponse is the response type for the Query/ExchangeModuleState RPC method. */

export interface QueryModuleStateResponseSDKType {
  state: GenesisStateSDKType;
}
/** QueryPositionsRequest is the request type for the Query/Positions RPC method. */

export interface QueryPositionsRequest {}
/** QueryPositionsRequest is the request type for the Query/Positions RPC method. */

export interface QueryPositionsRequestSDKType {}
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

export interface QueryTradeRewardCampaignRequest {}
/** QueryTradeRewardCampaignRequest is the request type for the Query/TradeRewardCampaign RPC method. */

export interface QueryTradeRewardCampaignRequestSDKType {}
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

export interface QueryOptedOutOfRewardsAccountsRequest {}
/** QueryRegisteredDMMsRequest is the request type for the Query/RegisteredDMMs RPC method. */

export interface QueryOptedOutOfRewardsAccountsRequestSDKType {}
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

export interface QueryFeeDiscountScheduleRequest {}
/** QueryFeeDiscountScheduleRequest is the request type for the Query/FeeDiscountSchedule RPC method. */

export interface QueryFeeDiscountScheduleRequestSDKType {}
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

export interface QueryBalanceWithBalanceHoldsRequest {}
/** QueryBalanceWithBalanceHoldsRequest is the request type for the Query/QueryBalanceWithBalanceHolds RPC method. */

export interface QueryBalanceWithBalanceHoldsRequestSDKType {}
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

export interface QueryFeeDiscountTierStatisticsRequest {}
/** QueryFeeDiscountTierStatisticsRequest is the request type for the Query/QueryFeeDiscountTierStatistics RPC method. */

export interface QueryFeeDiscountTierStatisticsRequestSDKType {}
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

export interface NinjaVaultInfosRequest {}
/** NinjaVaultInfosRequest is the request type for the Query/NinjaVaultInfos RPC method. */

export interface NinjaVaultInfosRequestSDKType {}
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

function createBaseSubaccount(): Subaccount {
  return {
    trader: "",
    subaccountNonce: 0
  };
}

export const Subaccount = {
  encode(message: Subaccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.trader !== "") {
      writer.uint32(10).string(message.trader);
    }

    if (message.subaccountNonce !== 0) {
      writer.uint32(16).uint32(message.subaccountNonce);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Subaccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubaccount();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.trader = reader.string();
          break;

        case 2:
          message.subaccountNonce = reader.uint32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Subaccount>): Subaccount {
    const message = createBaseSubaccount();
    message.trader = object.trader ?? "";
    message.subaccountNonce = object.subaccountNonce ?? 0;
    return message;
  }

};

function createBaseQuerySubaccountOrdersRequest(): QuerySubaccountOrdersRequest {
  return {
    subaccountId: "",
    marketId: ""
  };
}

export const QuerySubaccountOrdersRequest = {
  encode(message: QuerySubaccountOrdersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.subaccountId !== "") {
      writer.uint32(10).string(message.subaccountId);
    }

    if (message.marketId !== "") {
      writer.uint32(18).string(message.marketId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySubaccountOrdersRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySubaccountOrdersRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.subaccountId = reader.string();
          break;

        case 2:
          message.marketId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QuerySubaccountOrdersRequest>): QuerySubaccountOrdersRequest {
    const message = createBaseQuerySubaccountOrdersRequest();
    message.subaccountId = object.subaccountId ?? "";
    message.marketId = object.marketId ?? "";
    return message;
  }

};

function createBaseQuerySubaccountOrdersResponse(): QuerySubaccountOrdersResponse {
  return {
    buyOrders: [],
    sellOrders: []
  };
}

export const QuerySubaccountOrdersResponse = {
  encode(message: QuerySubaccountOrdersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.buyOrders) {
      SubaccountOrderData.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.sellOrders) {
      SubaccountOrderData.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySubaccountOrdersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySubaccountOrdersResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.buyOrders.push(SubaccountOrderData.decode(reader, reader.uint32()));
          break;

        case 2:
          message.sellOrders.push(SubaccountOrderData.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QuerySubaccountOrdersResponse>): QuerySubaccountOrdersResponse {
    const message = createBaseQuerySubaccountOrdersResponse();
    message.buyOrders = object.buyOrders?.map(e => SubaccountOrderData.fromPartial(e)) || [];
    message.sellOrders = object.sellOrders?.map(e => SubaccountOrderData.fromPartial(e)) || [];
    return message;
  }

};

function createBaseSubaccountOrderbookMetadataWithMarket(): SubaccountOrderbookMetadataWithMarket {
  return {
    metadata: undefined,
    marketId: "",
    isBuy: false
  };
}

export const SubaccountOrderbookMetadataWithMarket = {
  encode(message: SubaccountOrderbookMetadataWithMarket, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.metadata !== undefined) {
      SubaccountOrderbookMetadata.encode(message.metadata, writer.uint32(10).fork()).ldelim();
    }

    if (message.marketId !== "") {
      writer.uint32(18).string(message.marketId);
    }

    if (message.isBuy === true) {
      writer.uint32(24).bool(message.isBuy);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SubaccountOrderbookMetadataWithMarket {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubaccountOrderbookMetadataWithMarket();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.metadata = SubaccountOrderbookMetadata.decode(reader, reader.uint32());
          break;

        case 2:
          message.marketId = reader.string();
          break;

        case 3:
          message.isBuy = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<SubaccountOrderbookMetadataWithMarket>): SubaccountOrderbookMetadataWithMarket {
    const message = createBaseSubaccountOrderbookMetadataWithMarket();
    message.metadata = object.metadata !== undefined && object.metadata !== null ? SubaccountOrderbookMetadata.fromPartial(object.metadata) : undefined;
    message.marketId = object.marketId ?? "";
    message.isBuy = object.isBuy ?? false;
    return message;
  }

};

function createBaseQueryExchangeParamsRequest(): QueryExchangeParamsRequest {
  return {};
}

export const QueryExchangeParamsRequest = {
  encode(_: QueryExchangeParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryExchangeParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryExchangeParamsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(_: DeepPartial<QueryExchangeParamsRequest>): QueryExchangeParamsRequest {
    const message = createBaseQueryExchangeParamsRequest();
    return message;
  }

};

function createBaseQueryExchangeParamsResponse(): QueryExchangeParamsResponse {
  return {
    params: undefined
  };
}

export const QueryExchangeParamsResponse = {
  encode(message: QueryExchangeParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryExchangeParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryExchangeParamsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryExchangeParamsResponse>): QueryExchangeParamsResponse {
    const message = createBaseQueryExchangeParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }

};

function createBaseQuerySubaccountDepositsRequest(): QuerySubaccountDepositsRequest {
  return {
    subaccountId: "",
    subaccount: undefined
  };
}

export const QuerySubaccountDepositsRequest = {
  encode(message: QuerySubaccountDepositsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.subaccountId !== "") {
      writer.uint32(10).string(message.subaccountId);
    }

    if (message.subaccount !== undefined) {
      Subaccount.encode(message.subaccount, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySubaccountDepositsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySubaccountDepositsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.subaccountId = reader.string();
          break;

        case 2:
          message.subaccount = Subaccount.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QuerySubaccountDepositsRequest>): QuerySubaccountDepositsRequest {
    const message = createBaseQuerySubaccountDepositsRequest();
    message.subaccountId = object.subaccountId ?? "";
    message.subaccount = object.subaccount !== undefined && object.subaccount !== null ? Subaccount.fromPartial(object.subaccount) : undefined;
    return message;
  }

};

function createBaseQuerySubaccountDepositsResponse_DepositsEntry(): QuerySubaccountDepositsResponse_DepositsEntry {
  return {
    key: "",
    value: undefined
  };
}

export const QuerySubaccountDepositsResponse_DepositsEntry = {
  encode(message: QuerySubaccountDepositsResponse_DepositsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }

    if (message.value !== undefined) {
      Deposit.encode(message.value, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySubaccountDepositsResponse_DepositsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySubaccountDepositsResponse_DepositsEntry();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;

        case 2:
          message.value = Deposit.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QuerySubaccountDepositsResponse_DepositsEntry>): QuerySubaccountDepositsResponse_DepositsEntry {
    const message = createBaseQuerySubaccountDepositsResponse_DepositsEntry();
    message.key = object.key ?? "";
    message.value = object.value !== undefined && object.value !== null ? Deposit.fromPartial(object.value) : undefined;
    return message;
  }

};

function createBaseQuerySubaccountDepositsResponse(): QuerySubaccountDepositsResponse {
  return {
    deposits: {}
  };
}

export const QuerySubaccountDepositsResponse = {
  encode(message: QuerySubaccountDepositsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    Object.entries(message.deposits).forEach(([key, value]) => {
      QuerySubaccountDepositsResponse_DepositsEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(10).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySubaccountDepositsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySubaccountDepositsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          const entry1 = QuerySubaccountDepositsResponse_DepositsEntry.decode(reader, reader.uint32());

          if (entry1.value !== undefined) {
            message.deposits[entry1.key] = entry1.value;
          }

          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QuerySubaccountDepositsResponse>): QuerySubaccountDepositsResponse {
    const message = createBaseQuerySubaccountDepositsResponse();
    message.deposits = Object.entries(object.deposits ?? {}).reduce<{
      [key: string]: Deposit;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = Deposit.fromPartial(value);
      }

      return acc;
    }, {});
    return message;
  }

};

function createBaseQueryExchangeBalancesRequest(): QueryExchangeBalancesRequest {
  return {};
}

export const QueryExchangeBalancesRequest = {
  encode(_: QueryExchangeBalancesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryExchangeBalancesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryExchangeBalancesRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(_: DeepPartial<QueryExchangeBalancesRequest>): QueryExchangeBalancesRequest {
    const message = createBaseQueryExchangeBalancesRequest();
    return message;
  }

};

function createBaseQueryExchangeBalancesResponse(): QueryExchangeBalancesResponse {
  return {
    balances: []
  };
}

export const QueryExchangeBalancesResponse = {
  encode(message: QueryExchangeBalancesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.balances) {
      Balance.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryExchangeBalancesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryExchangeBalancesResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.balances.push(Balance.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryExchangeBalancesResponse>): QueryExchangeBalancesResponse {
    const message = createBaseQueryExchangeBalancesResponse();
    message.balances = object.balances?.map(e => Balance.fromPartial(e)) || [];
    return message;
  }

};

function createBaseQuerySubaccountDepositRequest(): QuerySubaccountDepositRequest {
  return {
    subaccountId: "",
    denom: ""
  };
}

export const QuerySubaccountDepositRequest = {
  encode(message: QuerySubaccountDepositRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.subaccountId !== "") {
      writer.uint32(10).string(message.subaccountId);
    }

    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySubaccountDepositRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySubaccountDepositRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.subaccountId = reader.string();
          break;

        case 2:
          message.denom = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QuerySubaccountDepositRequest>): QuerySubaccountDepositRequest {
    const message = createBaseQuerySubaccountDepositRequest();
    message.subaccountId = object.subaccountId ?? "";
    message.denom = object.denom ?? "";
    return message;
  }

};

function createBaseQuerySubaccountDepositResponse(): QuerySubaccountDepositResponse {
  return {
    deposits: undefined
  };
}

export const QuerySubaccountDepositResponse = {
  encode(message: QuerySubaccountDepositResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.deposits !== undefined) {
      Deposit.encode(message.deposits, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySubaccountDepositResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySubaccountDepositResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.deposits = Deposit.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QuerySubaccountDepositResponse>): QuerySubaccountDepositResponse {
    const message = createBaseQuerySubaccountDepositResponse();
    message.deposits = object.deposits !== undefined && object.deposits !== null ? Deposit.fromPartial(object.deposits) : undefined;
    return message;
  }

};

function createBaseQuerySpotMarketsRequest(): QuerySpotMarketsRequest {
  return {
    status: ""
  };
}

export const QuerySpotMarketsRequest = {
  encode(message: QuerySpotMarketsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== "") {
      writer.uint32(10).string(message.status);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySpotMarketsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySpotMarketsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.status = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QuerySpotMarketsRequest>): QuerySpotMarketsRequest {
    const message = createBaseQuerySpotMarketsRequest();
    message.status = object.status ?? "";
    return message;
  }

};

function createBaseQuerySpotMarketsResponse(): QuerySpotMarketsResponse {
  return {
    markets: []
  };
}

export const QuerySpotMarketsResponse = {
  encode(message: QuerySpotMarketsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.markets) {
      SpotMarket.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySpotMarketsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySpotMarketsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.markets.push(SpotMarket.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QuerySpotMarketsResponse>): QuerySpotMarketsResponse {
    const message = createBaseQuerySpotMarketsResponse();
    message.markets = object.markets?.map(e => SpotMarket.fromPartial(e)) || [];
    return message;
  }

};

function createBaseQuerySpotMarketRequest(): QuerySpotMarketRequest {
  return {
    marketId: ""
  };
}

export const QuerySpotMarketRequest = {
  encode(message: QuerySpotMarketRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySpotMarketRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySpotMarketRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QuerySpotMarketRequest>): QuerySpotMarketRequest {
    const message = createBaseQuerySpotMarketRequest();
    message.marketId = object.marketId ?? "";
    return message;
  }

};

function createBaseQuerySpotMarketResponse(): QuerySpotMarketResponse {
  return {
    market: undefined
  };
}

export const QuerySpotMarketResponse = {
  encode(message: QuerySpotMarketResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.market !== undefined) {
      SpotMarket.encode(message.market, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySpotMarketResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySpotMarketResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.market = SpotMarket.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QuerySpotMarketResponse>): QuerySpotMarketResponse {
    const message = createBaseQuerySpotMarketResponse();
    message.market = object.market !== undefined && object.market !== null ? SpotMarket.fromPartial(object.market) : undefined;
    return message;
  }

};

function createBaseQuerySpotOrderbookRequest(): QuerySpotOrderbookRequest {
  return {
    marketId: "",
    limit: Long.UZERO
  };
}

export const QuerySpotOrderbookRequest = {
  encode(message: QuerySpotOrderbookRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }

    if (!message.limit.isZero()) {
      writer.uint32(16).uint64(message.limit);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySpotOrderbookRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySpotOrderbookRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;

        case 2:
          message.limit = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QuerySpotOrderbookRequest>): QuerySpotOrderbookRequest {
    const message = createBaseQuerySpotOrderbookRequest();
    message.marketId = object.marketId ?? "";
    message.limit = object.limit !== undefined && object.limit !== null ? Long.fromValue(object.limit) : Long.UZERO;
    return message;
  }

};

function createBaseQuerySpotOrderbookResponse(): QuerySpotOrderbookResponse {
  return {
    buysPriceLevel: [],
    sellsPriceLevel: []
  };
}

export const QuerySpotOrderbookResponse = {
  encode(message: QuerySpotOrderbookResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.buysPriceLevel) {
      PriceLevel.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.sellsPriceLevel) {
      PriceLevel.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySpotOrderbookResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySpotOrderbookResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.buysPriceLevel.push(PriceLevel.decode(reader, reader.uint32()));
          break;

        case 2:
          message.sellsPriceLevel.push(PriceLevel.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QuerySpotOrderbookResponse>): QuerySpotOrderbookResponse {
    const message = createBaseQuerySpotOrderbookResponse();
    message.buysPriceLevel = object.buysPriceLevel?.map(e => PriceLevel.fromPartial(e)) || [];
    message.sellsPriceLevel = object.sellsPriceLevel?.map(e => PriceLevel.fromPartial(e)) || [];
    return message;
  }

};

function createBaseQuerySpotOrdersByHashesRequest(): QuerySpotOrdersByHashesRequest {
  return {
    marketId: "",
    subaccountId: "",
    orderHashes: []
  };
}

export const QuerySpotOrdersByHashesRequest = {
  encode(message: QuerySpotOrdersByHashesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }

    if (message.subaccountId !== "") {
      writer.uint32(18).string(message.subaccountId);
    }

    for (const v of message.orderHashes) {
      writer.uint32(26).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySpotOrdersByHashesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySpotOrdersByHashesRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;

        case 2:
          message.subaccountId = reader.string();
          break;

        case 3:
          message.orderHashes.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QuerySpotOrdersByHashesRequest>): QuerySpotOrdersByHashesRequest {
    const message = createBaseQuerySpotOrdersByHashesRequest();
    message.marketId = object.marketId ?? "";
    message.subaccountId = object.subaccountId ?? "";
    message.orderHashes = object.orderHashes?.map(e => e) || [];
    return message;
  }

};

function createBaseQuerySpotOrdersByHashesResponse(): QuerySpotOrdersByHashesResponse {
  return {
    orders: []
  };
}

export const QuerySpotOrdersByHashesResponse = {
  encode(message: QuerySpotOrdersByHashesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.orders) {
      TrimmedSpotLimitOrder.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySpotOrdersByHashesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySpotOrdersByHashesResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.orders.push(TrimmedSpotLimitOrder.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QuerySpotOrdersByHashesResponse>): QuerySpotOrdersByHashesResponse {
    const message = createBaseQuerySpotOrdersByHashesResponse();
    message.orders = object.orders?.map(e => TrimmedSpotLimitOrder.fromPartial(e)) || [];
    return message;
  }

};

function createBaseQueryTraderSpotOrdersRequest(): QueryTraderSpotOrdersRequest {
  return {
    marketId: "",
    subaccountId: ""
  };
}

export const QueryTraderSpotOrdersRequest = {
  encode(message: QueryTraderSpotOrdersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }

    if (message.subaccountId !== "") {
      writer.uint32(18).string(message.subaccountId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTraderSpotOrdersRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTraderSpotOrdersRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;

        case 2:
          message.subaccountId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryTraderSpotOrdersRequest>): QueryTraderSpotOrdersRequest {
    const message = createBaseQueryTraderSpotOrdersRequest();
    message.marketId = object.marketId ?? "";
    message.subaccountId = object.subaccountId ?? "";
    return message;
  }

};

function createBaseTrimmedSpotLimitOrder(): TrimmedSpotLimitOrder {
  return {
    price: "",
    quantity: "",
    fillable: "",
    isBuy: false,
    orderHash: ""
  };
}

export const TrimmedSpotLimitOrder = {
  encode(message: TrimmedSpotLimitOrder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.price !== "") {
      writer.uint32(10).string(message.price);
    }

    if (message.quantity !== "") {
      writer.uint32(18).string(message.quantity);
    }

    if (message.fillable !== "") {
      writer.uint32(26).string(message.fillable);
    }

    if (message.isBuy === true) {
      writer.uint32(32).bool(message.isBuy);
    }

    if (message.orderHash !== "") {
      writer.uint32(42).string(message.orderHash);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TrimmedSpotLimitOrder {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTrimmedSpotLimitOrder();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.price = reader.string();
          break;

        case 2:
          message.quantity = reader.string();
          break;

        case 3:
          message.fillable = reader.string();
          break;

        case 4:
          message.isBuy = reader.bool();
          break;

        case 5:
          message.orderHash = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<TrimmedSpotLimitOrder>): TrimmedSpotLimitOrder {
    const message = createBaseTrimmedSpotLimitOrder();
    message.price = object.price ?? "";
    message.quantity = object.quantity ?? "";
    message.fillable = object.fillable ?? "";
    message.isBuy = object.isBuy ?? false;
    message.orderHash = object.orderHash ?? "";
    return message;
  }

};

function createBaseQueryTraderSpotOrdersResponse(): QueryTraderSpotOrdersResponse {
  return {
    orders: []
  };
}

export const QueryTraderSpotOrdersResponse = {
  encode(message: QueryTraderSpotOrdersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.orders) {
      TrimmedSpotLimitOrder.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTraderSpotOrdersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTraderSpotOrdersResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.orders.push(TrimmedSpotLimitOrder.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryTraderSpotOrdersResponse>): QueryTraderSpotOrdersResponse {
    const message = createBaseQueryTraderSpotOrdersResponse();
    message.orders = object.orders?.map(e => TrimmedSpotLimitOrder.fromPartial(e)) || [];
    return message;
  }

};

function createBaseQuerySpotMidPriceAndTOBRequest(): QuerySpotMidPriceAndTOBRequest {
  return {
    marketId: ""
  };
}

export const QuerySpotMidPriceAndTOBRequest = {
  encode(message: QuerySpotMidPriceAndTOBRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySpotMidPriceAndTOBRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySpotMidPriceAndTOBRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QuerySpotMidPriceAndTOBRequest>): QuerySpotMidPriceAndTOBRequest {
    const message = createBaseQuerySpotMidPriceAndTOBRequest();
    message.marketId = object.marketId ?? "";
    return message;
  }

};

function createBaseQuerySpotMidPriceAndTOBResponse(): QuerySpotMidPriceAndTOBResponse {
  return {
    midPrice: undefined,
    bestBuyPrice: undefined,
    bestSellPrice: undefined
  };
}

export const QuerySpotMidPriceAndTOBResponse = {
  encode(message: QuerySpotMidPriceAndTOBResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.midPrice !== undefined) {
      writer.uint32(10).string(message.midPrice);
    }

    if (message.bestBuyPrice !== undefined) {
      writer.uint32(18).string(message.bestBuyPrice);
    }

    if (message.bestSellPrice !== undefined) {
      writer.uint32(26).string(message.bestSellPrice);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySpotMidPriceAndTOBResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySpotMidPriceAndTOBResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.midPrice = reader.string();
          break;

        case 2:
          message.bestBuyPrice = reader.string();
          break;

        case 3:
          message.bestSellPrice = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QuerySpotMidPriceAndTOBResponse>): QuerySpotMidPriceAndTOBResponse {
    const message = createBaseQuerySpotMidPriceAndTOBResponse();
    message.midPrice = object.midPrice ?? undefined;
    message.bestBuyPrice = object.bestBuyPrice ?? undefined;
    message.bestSellPrice = object.bestSellPrice ?? undefined;
    return message;
  }

};

function createBaseQueryDerivativeMidPriceAndTOBRequest(): QueryDerivativeMidPriceAndTOBRequest {
  return {
    marketId: ""
  };
}

export const QueryDerivativeMidPriceAndTOBRequest = {
  encode(message: QueryDerivativeMidPriceAndTOBRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDerivativeMidPriceAndTOBRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDerivativeMidPriceAndTOBRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryDerivativeMidPriceAndTOBRequest>): QueryDerivativeMidPriceAndTOBRequest {
    const message = createBaseQueryDerivativeMidPriceAndTOBRequest();
    message.marketId = object.marketId ?? "";
    return message;
  }

};

function createBaseQueryDerivativeMidPriceAndTOBResponse(): QueryDerivativeMidPriceAndTOBResponse {
  return {
    midPrice: undefined,
    bestBuyPrice: undefined,
    bestSellPrice: undefined
  };
}

export const QueryDerivativeMidPriceAndTOBResponse = {
  encode(message: QueryDerivativeMidPriceAndTOBResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.midPrice !== undefined) {
      writer.uint32(10).string(message.midPrice);
    }

    if (message.bestBuyPrice !== undefined) {
      writer.uint32(18).string(message.bestBuyPrice);
    }

    if (message.bestSellPrice !== undefined) {
      writer.uint32(26).string(message.bestSellPrice);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDerivativeMidPriceAndTOBResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDerivativeMidPriceAndTOBResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.midPrice = reader.string();
          break;

        case 2:
          message.bestBuyPrice = reader.string();
          break;

        case 3:
          message.bestSellPrice = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryDerivativeMidPriceAndTOBResponse>): QueryDerivativeMidPriceAndTOBResponse {
    const message = createBaseQueryDerivativeMidPriceAndTOBResponse();
    message.midPrice = object.midPrice ?? undefined;
    message.bestBuyPrice = object.bestBuyPrice ?? undefined;
    message.bestSellPrice = object.bestSellPrice ?? undefined;
    return message;
  }

};

function createBaseQueryDerivativeOrderbookRequest(): QueryDerivativeOrderbookRequest {
  return {
    marketId: "",
    limit: Long.UZERO
  };
}

export const QueryDerivativeOrderbookRequest = {
  encode(message: QueryDerivativeOrderbookRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }

    if (!message.limit.isZero()) {
      writer.uint32(16).uint64(message.limit);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDerivativeOrderbookRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDerivativeOrderbookRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;

        case 2:
          message.limit = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryDerivativeOrderbookRequest>): QueryDerivativeOrderbookRequest {
    const message = createBaseQueryDerivativeOrderbookRequest();
    message.marketId = object.marketId ?? "";
    message.limit = object.limit !== undefined && object.limit !== null ? Long.fromValue(object.limit) : Long.UZERO;
    return message;
  }

};

function createBaseQueryDerivativeOrderbookResponse(): QueryDerivativeOrderbookResponse {
  return {
    buysPriceLevel: [],
    sellsPriceLevel: []
  };
}

export const QueryDerivativeOrderbookResponse = {
  encode(message: QueryDerivativeOrderbookResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.buysPriceLevel) {
      PriceLevel.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.sellsPriceLevel) {
      PriceLevel.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDerivativeOrderbookResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDerivativeOrderbookResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.buysPriceLevel.push(PriceLevel.decode(reader, reader.uint32()));
          break;

        case 2:
          message.sellsPriceLevel.push(PriceLevel.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryDerivativeOrderbookResponse>): QueryDerivativeOrderbookResponse {
    const message = createBaseQueryDerivativeOrderbookResponse();
    message.buysPriceLevel = object.buysPriceLevel?.map(e => PriceLevel.fromPartial(e)) || [];
    message.sellsPriceLevel = object.sellsPriceLevel?.map(e => PriceLevel.fromPartial(e)) || [];
    return message;
  }

};

function createBaseQueryTraderSpotOrdersToCancelUpToAmountRequest(): QueryTraderSpotOrdersToCancelUpToAmountRequest {
  return {
    marketId: "",
    subaccountId: "",
    baseAmount: "",
    quoteAmount: "",
    strategy: 0,
    referencePrice: undefined
  };
}

export const QueryTraderSpotOrdersToCancelUpToAmountRequest = {
  encode(message: QueryTraderSpotOrdersToCancelUpToAmountRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }

    if (message.subaccountId !== "") {
      writer.uint32(18).string(message.subaccountId);
    }

    if (message.baseAmount !== "") {
      writer.uint32(26).string(message.baseAmount);
    }

    if (message.quoteAmount !== "") {
      writer.uint32(34).string(message.quoteAmount);
    }

    if (message.strategy !== 0) {
      writer.uint32(40).int32(message.strategy);
    }

    if (message.referencePrice !== undefined) {
      writer.uint32(50).string(message.referencePrice);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTraderSpotOrdersToCancelUpToAmountRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTraderSpotOrdersToCancelUpToAmountRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;

        case 2:
          message.subaccountId = reader.string();
          break;

        case 3:
          message.baseAmount = reader.string();
          break;

        case 4:
          message.quoteAmount = reader.string();
          break;

        case 5:
          message.strategy = (reader.int32() as any);
          break;

        case 6:
          message.referencePrice = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryTraderSpotOrdersToCancelUpToAmountRequest>): QueryTraderSpotOrdersToCancelUpToAmountRequest {
    const message = createBaseQueryTraderSpotOrdersToCancelUpToAmountRequest();
    message.marketId = object.marketId ?? "";
    message.subaccountId = object.subaccountId ?? "";
    message.baseAmount = object.baseAmount ?? "";
    message.quoteAmount = object.quoteAmount ?? "";
    message.strategy = object.strategy ?? 0;
    message.referencePrice = object.referencePrice ?? undefined;
    return message;
  }

};

function createBaseQueryTraderDerivativeOrdersToCancelUpToAmountRequest(): QueryTraderDerivativeOrdersToCancelUpToAmountRequest {
  return {
    marketId: "",
    subaccountId: "",
    quoteAmount: "",
    strategy: 0,
    referencePrice: undefined
  };
}

export const QueryTraderDerivativeOrdersToCancelUpToAmountRequest = {
  encode(message: QueryTraderDerivativeOrdersToCancelUpToAmountRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }

    if (message.subaccountId !== "") {
      writer.uint32(18).string(message.subaccountId);
    }

    if (message.quoteAmount !== "") {
      writer.uint32(26).string(message.quoteAmount);
    }

    if (message.strategy !== 0) {
      writer.uint32(32).int32(message.strategy);
    }

    if (message.referencePrice !== undefined) {
      writer.uint32(42).string(message.referencePrice);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTraderDerivativeOrdersToCancelUpToAmountRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTraderDerivativeOrdersToCancelUpToAmountRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;

        case 2:
          message.subaccountId = reader.string();
          break;

        case 3:
          message.quoteAmount = reader.string();
          break;

        case 4:
          message.strategy = (reader.int32() as any);
          break;

        case 5:
          message.referencePrice = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryTraderDerivativeOrdersToCancelUpToAmountRequest>): QueryTraderDerivativeOrdersToCancelUpToAmountRequest {
    const message = createBaseQueryTraderDerivativeOrdersToCancelUpToAmountRequest();
    message.marketId = object.marketId ?? "";
    message.subaccountId = object.subaccountId ?? "";
    message.quoteAmount = object.quoteAmount ?? "";
    message.strategy = object.strategy ?? 0;
    message.referencePrice = object.referencePrice ?? undefined;
    return message;
  }

};

function createBaseQueryTraderDerivativeOrdersRequest(): QueryTraderDerivativeOrdersRequest {
  return {
    marketId: "",
    subaccountId: ""
  };
}

export const QueryTraderDerivativeOrdersRequest = {
  encode(message: QueryTraderDerivativeOrdersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }

    if (message.subaccountId !== "") {
      writer.uint32(18).string(message.subaccountId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTraderDerivativeOrdersRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTraderDerivativeOrdersRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;

        case 2:
          message.subaccountId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryTraderDerivativeOrdersRequest>): QueryTraderDerivativeOrdersRequest {
    const message = createBaseQueryTraderDerivativeOrdersRequest();
    message.marketId = object.marketId ?? "";
    message.subaccountId = object.subaccountId ?? "";
    return message;
  }

};

function createBaseTrimmedDerivativeLimitOrder(): TrimmedDerivativeLimitOrder {
  return {
    price: "",
    quantity: "",
    margin: "",
    fillable: "",
    isBuy: false,
    orderHash: ""
  };
}

export const TrimmedDerivativeLimitOrder = {
  encode(message: TrimmedDerivativeLimitOrder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.price !== "") {
      writer.uint32(10).string(message.price);
    }

    if (message.quantity !== "") {
      writer.uint32(18).string(message.quantity);
    }

    if (message.margin !== "") {
      writer.uint32(26).string(message.margin);
    }

    if (message.fillable !== "") {
      writer.uint32(34).string(message.fillable);
    }

    if (message.isBuy === true) {
      writer.uint32(40).bool(message.isBuy);
    }

    if (message.orderHash !== "") {
      writer.uint32(50).string(message.orderHash);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TrimmedDerivativeLimitOrder {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTrimmedDerivativeLimitOrder();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.price = reader.string();
          break;

        case 2:
          message.quantity = reader.string();
          break;

        case 3:
          message.margin = reader.string();
          break;

        case 4:
          message.fillable = reader.string();
          break;

        case 5:
          message.isBuy = reader.bool();
          break;

        case 6:
          message.orderHash = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<TrimmedDerivativeLimitOrder>): TrimmedDerivativeLimitOrder {
    const message = createBaseTrimmedDerivativeLimitOrder();
    message.price = object.price ?? "";
    message.quantity = object.quantity ?? "";
    message.margin = object.margin ?? "";
    message.fillable = object.fillable ?? "";
    message.isBuy = object.isBuy ?? false;
    message.orderHash = object.orderHash ?? "";
    return message;
  }

};

function createBaseQueryTraderDerivativeOrdersResponse(): QueryTraderDerivativeOrdersResponse {
  return {
    orders: []
  };
}

export const QueryTraderDerivativeOrdersResponse = {
  encode(message: QueryTraderDerivativeOrdersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.orders) {
      TrimmedDerivativeLimitOrder.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTraderDerivativeOrdersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTraderDerivativeOrdersResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.orders.push(TrimmedDerivativeLimitOrder.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryTraderDerivativeOrdersResponse>): QueryTraderDerivativeOrdersResponse {
    const message = createBaseQueryTraderDerivativeOrdersResponse();
    message.orders = object.orders?.map(e => TrimmedDerivativeLimitOrder.fromPartial(e)) || [];
    return message;
  }

};

function createBaseQueryDerivativeOrdersByHashesRequest(): QueryDerivativeOrdersByHashesRequest {
  return {
    marketId: "",
    subaccountId: "",
    orderHashes: []
  };
}

export const QueryDerivativeOrdersByHashesRequest = {
  encode(message: QueryDerivativeOrdersByHashesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }

    if (message.subaccountId !== "") {
      writer.uint32(18).string(message.subaccountId);
    }

    for (const v of message.orderHashes) {
      writer.uint32(26).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDerivativeOrdersByHashesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDerivativeOrdersByHashesRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;

        case 2:
          message.subaccountId = reader.string();
          break;

        case 3:
          message.orderHashes.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryDerivativeOrdersByHashesRequest>): QueryDerivativeOrdersByHashesRequest {
    const message = createBaseQueryDerivativeOrdersByHashesRequest();
    message.marketId = object.marketId ?? "";
    message.subaccountId = object.subaccountId ?? "";
    message.orderHashes = object.orderHashes?.map(e => e) || [];
    return message;
  }

};

function createBaseQueryDerivativeOrdersByHashesResponse(): QueryDerivativeOrdersByHashesResponse {
  return {
    orders: []
  };
}

export const QueryDerivativeOrdersByHashesResponse = {
  encode(message: QueryDerivativeOrdersByHashesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.orders) {
      TrimmedDerivativeLimitOrder.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDerivativeOrdersByHashesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDerivativeOrdersByHashesResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.orders.push(TrimmedDerivativeLimitOrder.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryDerivativeOrdersByHashesResponse>): QueryDerivativeOrdersByHashesResponse {
    const message = createBaseQueryDerivativeOrdersByHashesResponse();
    message.orders = object.orders?.map(e => TrimmedDerivativeLimitOrder.fromPartial(e)) || [];
    return message;
  }

};

function createBaseQueryDerivativeMarketsRequest(): QueryDerivativeMarketsRequest {
  return {
    status: ""
  };
}

export const QueryDerivativeMarketsRequest = {
  encode(message: QueryDerivativeMarketsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== "") {
      writer.uint32(10).string(message.status);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDerivativeMarketsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDerivativeMarketsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.status = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryDerivativeMarketsRequest>): QueryDerivativeMarketsRequest {
    const message = createBaseQueryDerivativeMarketsRequest();
    message.status = object.status ?? "";
    return message;
  }

};

function createBasePriceLevel(): PriceLevel {
  return {
    price: "",
    quantity: ""
  };
}

export const PriceLevel = {
  encode(message: PriceLevel, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.price !== "") {
      writer.uint32(10).string(message.price);
    }

    if (message.quantity !== "") {
      writer.uint32(18).string(message.quantity);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PriceLevel {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePriceLevel();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.price = reader.string();
          break;

        case 2:
          message.quantity = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<PriceLevel>): PriceLevel {
    const message = createBasePriceLevel();
    message.price = object.price ?? "";
    message.quantity = object.quantity ?? "";
    return message;
  }

};

function createBasePerpetualMarketState(): PerpetualMarketState {
  return {
    marketInfo: undefined,
    fundingInfo: undefined
  };
}

export const PerpetualMarketState = {
  encode(message: PerpetualMarketState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketInfo !== undefined) {
      PerpetualMarketInfo.encode(message.marketInfo, writer.uint32(10).fork()).ldelim();
    }

    if (message.fundingInfo !== undefined) {
      PerpetualMarketFunding.encode(message.fundingInfo, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PerpetualMarketState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePerpetualMarketState();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.marketInfo = PerpetualMarketInfo.decode(reader, reader.uint32());
          break;

        case 2:
          message.fundingInfo = PerpetualMarketFunding.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<PerpetualMarketState>): PerpetualMarketState {
    const message = createBasePerpetualMarketState();
    message.marketInfo = object.marketInfo !== undefined && object.marketInfo !== null ? PerpetualMarketInfo.fromPartial(object.marketInfo) : undefined;
    message.fundingInfo = object.fundingInfo !== undefined && object.fundingInfo !== null ? PerpetualMarketFunding.fromPartial(object.fundingInfo) : undefined;
    return message;
  }

};

function createBaseFullDerivativeMarket(): FullDerivativeMarket {
  return {
    market: undefined,
    perpetualInfo: undefined,
    futuresInfo: undefined,
    markPrice: ""
  };
}

export const FullDerivativeMarket = {
  encode(message: FullDerivativeMarket, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.market !== undefined) {
      DerivativeMarket.encode(message.market, writer.uint32(10).fork()).ldelim();
    }

    if (message.perpetualInfo !== undefined) {
      PerpetualMarketState.encode(message.perpetualInfo, writer.uint32(18).fork()).ldelim();
    }

    if (message.futuresInfo !== undefined) {
      ExpiryFuturesMarketInfo.encode(message.futuresInfo, writer.uint32(26).fork()).ldelim();
    }

    if (message.markPrice !== "") {
      writer.uint32(34).string(message.markPrice);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FullDerivativeMarket {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFullDerivativeMarket();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.market = DerivativeMarket.decode(reader, reader.uint32());
          break;

        case 2:
          message.perpetualInfo = PerpetualMarketState.decode(reader, reader.uint32());
          break;

        case 3:
          message.futuresInfo = ExpiryFuturesMarketInfo.decode(reader, reader.uint32());
          break;

        case 4:
          message.markPrice = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<FullDerivativeMarket>): FullDerivativeMarket {
    const message = createBaseFullDerivativeMarket();
    message.market = object.market !== undefined && object.market !== null ? DerivativeMarket.fromPartial(object.market) : undefined;
    message.perpetualInfo = object.perpetualInfo !== undefined && object.perpetualInfo !== null ? PerpetualMarketState.fromPartial(object.perpetualInfo) : undefined;
    message.futuresInfo = object.futuresInfo !== undefined && object.futuresInfo !== null ? ExpiryFuturesMarketInfo.fromPartial(object.futuresInfo) : undefined;
    message.markPrice = object.markPrice ?? "";
    return message;
  }

};

function createBaseQueryDerivativeMarketsResponse(): QueryDerivativeMarketsResponse {
  return {
    markets: []
  };
}

export const QueryDerivativeMarketsResponse = {
  encode(message: QueryDerivativeMarketsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.markets) {
      FullDerivativeMarket.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDerivativeMarketsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDerivativeMarketsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.markets.push(FullDerivativeMarket.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryDerivativeMarketsResponse>): QueryDerivativeMarketsResponse {
    const message = createBaseQueryDerivativeMarketsResponse();
    message.markets = object.markets?.map(e => FullDerivativeMarket.fromPartial(e)) || [];
    return message;
  }

};

function createBaseQueryDerivativeMarketRequest(): QueryDerivativeMarketRequest {
  return {
    marketId: ""
  };
}

export const QueryDerivativeMarketRequest = {
  encode(message: QueryDerivativeMarketRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDerivativeMarketRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDerivativeMarketRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryDerivativeMarketRequest>): QueryDerivativeMarketRequest {
    const message = createBaseQueryDerivativeMarketRequest();
    message.marketId = object.marketId ?? "";
    return message;
  }

};

function createBaseQueryDerivativeMarketResponse(): QueryDerivativeMarketResponse {
  return {
    market: undefined
  };
}

export const QueryDerivativeMarketResponse = {
  encode(message: QueryDerivativeMarketResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.market !== undefined) {
      FullDerivativeMarket.encode(message.market, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDerivativeMarketResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDerivativeMarketResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.market = FullDerivativeMarket.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryDerivativeMarketResponse>): QueryDerivativeMarketResponse {
    const message = createBaseQueryDerivativeMarketResponse();
    message.market = object.market !== undefined && object.market !== null ? FullDerivativeMarket.fromPartial(object.market) : undefined;
    return message;
  }

};

function createBaseQueryDerivativeMarketAddressRequest(): QueryDerivativeMarketAddressRequest {
  return {
    marketId: ""
  };
}

export const QueryDerivativeMarketAddressRequest = {
  encode(message: QueryDerivativeMarketAddressRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDerivativeMarketAddressRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDerivativeMarketAddressRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryDerivativeMarketAddressRequest>): QueryDerivativeMarketAddressRequest {
    const message = createBaseQueryDerivativeMarketAddressRequest();
    message.marketId = object.marketId ?? "";
    return message;
  }

};

function createBaseQueryDerivativeMarketAddressResponse(): QueryDerivativeMarketAddressResponse {
  return {
    address: "",
    subaccountId: ""
  };
}

export const QueryDerivativeMarketAddressResponse = {
  encode(message: QueryDerivativeMarketAddressResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }

    if (message.subaccountId !== "") {
      writer.uint32(18).string(message.subaccountId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDerivativeMarketAddressResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDerivativeMarketAddressResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;

        case 2:
          message.subaccountId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryDerivativeMarketAddressResponse>): QueryDerivativeMarketAddressResponse {
    const message = createBaseQueryDerivativeMarketAddressResponse();
    message.address = object.address ?? "";
    message.subaccountId = object.subaccountId ?? "";
    return message;
  }

};

function createBaseQuerySubaccountTradeNonceRequest(): QuerySubaccountTradeNonceRequest {
  return {
    subaccountId: ""
  };
}

export const QuerySubaccountTradeNonceRequest = {
  encode(message: QuerySubaccountTradeNonceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.subaccountId !== "") {
      writer.uint32(10).string(message.subaccountId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySubaccountTradeNonceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySubaccountTradeNonceRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.subaccountId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QuerySubaccountTradeNonceRequest>): QuerySubaccountTradeNonceRequest {
    const message = createBaseQuerySubaccountTradeNonceRequest();
    message.subaccountId = object.subaccountId ?? "";
    return message;
  }

};

function createBaseQuerySubaccountPositionsRequest(): QuerySubaccountPositionsRequest {
  return {
    subaccountId: ""
  };
}

export const QuerySubaccountPositionsRequest = {
  encode(message: QuerySubaccountPositionsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.subaccountId !== "") {
      writer.uint32(10).string(message.subaccountId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySubaccountPositionsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySubaccountPositionsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.subaccountId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QuerySubaccountPositionsRequest>): QuerySubaccountPositionsRequest {
    const message = createBaseQuerySubaccountPositionsRequest();
    message.subaccountId = object.subaccountId ?? "";
    return message;
  }

};

function createBaseQuerySubaccountPositionInMarketRequest(): QuerySubaccountPositionInMarketRequest {
  return {
    subaccountId: "",
    marketId: ""
  };
}

export const QuerySubaccountPositionInMarketRequest = {
  encode(message: QuerySubaccountPositionInMarketRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.subaccountId !== "") {
      writer.uint32(10).string(message.subaccountId);
    }

    if (message.marketId !== "") {
      writer.uint32(18).string(message.marketId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySubaccountPositionInMarketRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySubaccountPositionInMarketRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.subaccountId = reader.string();
          break;

        case 2:
          message.marketId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QuerySubaccountPositionInMarketRequest>): QuerySubaccountPositionInMarketRequest {
    const message = createBaseQuerySubaccountPositionInMarketRequest();
    message.subaccountId = object.subaccountId ?? "";
    message.marketId = object.marketId ?? "";
    return message;
  }

};

function createBaseQuerySubaccountEffectivePositionInMarketRequest(): QuerySubaccountEffectivePositionInMarketRequest {
  return {
    subaccountId: "",
    marketId: ""
  };
}

export const QuerySubaccountEffectivePositionInMarketRequest = {
  encode(message: QuerySubaccountEffectivePositionInMarketRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.subaccountId !== "") {
      writer.uint32(10).string(message.subaccountId);
    }

    if (message.marketId !== "") {
      writer.uint32(18).string(message.marketId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySubaccountEffectivePositionInMarketRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySubaccountEffectivePositionInMarketRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.subaccountId = reader.string();
          break;

        case 2:
          message.marketId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QuerySubaccountEffectivePositionInMarketRequest>): QuerySubaccountEffectivePositionInMarketRequest {
    const message = createBaseQuerySubaccountEffectivePositionInMarketRequest();
    message.subaccountId = object.subaccountId ?? "";
    message.marketId = object.marketId ?? "";
    return message;
  }

};

function createBaseQuerySubaccountOrderMetadataRequest(): QuerySubaccountOrderMetadataRequest {
  return {
    subaccountId: ""
  };
}

export const QuerySubaccountOrderMetadataRequest = {
  encode(message: QuerySubaccountOrderMetadataRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.subaccountId !== "") {
      writer.uint32(10).string(message.subaccountId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySubaccountOrderMetadataRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySubaccountOrderMetadataRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.subaccountId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QuerySubaccountOrderMetadataRequest>): QuerySubaccountOrderMetadataRequest {
    const message = createBaseQuerySubaccountOrderMetadataRequest();
    message.subaccountId = object.subaccountId ?? "";
    return message;
  }

};

function createBaseQuerySubaccountPositionsResponse(): QuerySubaccountPositionsResponse {
  return {
    state: []
  };
}

export const QuerySubaccountPositionsResponse = {
  encode(message: QuerySubaccountPositionsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.state) {
      DerivativePosition.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySubaccountPositionsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySubaccountPositionsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.state.push(DerivativePosition.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QuerySubaccountPositionsResponse>): QuerySubaccountPositionsResponse {
    const message = createBaseQuerySubaccountPositionsResponse();
    message.state = object.state?.map(e => DerivativePosition.fromPartial(e)) || [];
    return message;
  }

};

function createBaseQuerySubaccountPositionInMarketResponse(): QuerySubaccountPositionInMarketResponse {
  return {
    state: undefined
  };
}

export const QuerySubaccountPositionInMarketResponse = {
  encode(message: QuerySubaccountPositionInMarketResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.state !== undefined) {
      Position.encode(message.state, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySubaccountPositionInMarketResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySubaccountPositionInMarketResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.state = Position.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QuerySubaccountPositionInMarketResponse>): QuerySubaccountPositionInMarketResponse {
    const message = createBaseQuerySubaccountPositionInMarketResponse();
    message.state = object.state !== undefined && object.state !== null ? Position.fromPartial(object.state) : undefined;
    return message;
  }

};

function createBaseEffectivePosition(): EffectivePosition {
  return {
    isLong: false,
    quantity: "",
    entryPrice: "",
    effectiveMargin: ""
  };
}

export const EffectivePosition = {
  encode(message: EffectivePosition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.isLong === true) {
      writer.uint32(8).bool(message.isLong);
    }

    if (message.quantity !== "") {
      writer.uint32(18).string(message.quantity);
    }

    if (message.entryPrice !== "") {
      writer.uint32(26).string(message.entryPrice);
    }

    if (message.effectiveMargin !== "") {
      writer.uint32(34).string(message.effectiveMargin);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EffectivePosition {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEffectivePosition();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.isLong = reader.bool();
          break;

        case 2:
          message.quantity = reader.string();
          break;

        case 3:
          message.entryPrice = reader.string();
          break;

        case 4:
          message.effectiveMargin = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<EffectivePosition>): EffectivePosition {
    const message = createBaseEffectivePosition();
    message.isLong = object.isLong ?? false;
    message.quantity = object.quantity ?? "";
    message.entryPrice = object.entryPrice ?? "";
    message.effectiveMargin = object.effectiveMargin ?? "";
    return message;
  }

};

function createBaseQuerySubaccountEffectivePositionInMarketResponse(): QuerySubaccountEffectivePositionInMarketResponse {
  return {
    state: undefined
  };
}

export const QuerySubaccountEffectivePositionInMarketResponse = {
  encode(message: QuerySubaccountEffectivePositionInMarketResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.state !== undefined) {
      EffectivePosition.encode(message.state, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySubaccountEffectivePositionInMarketResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySubaccountEffectivePositionInMarketResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.state = EffectivePosition.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QuerySubaccountEffectivePositionInMarketResponse>): QuerySubaccountEffectivePositionInMarketResponse {
    const message = createBaseQuerySubaccountEffectivePositionInMarketResponse();
    message.state = object.state !== undefined && object.state !== null ? EffectivePosition.fromPartial(object.state) : undefined;
    return message;
  }

};

function createBaseQueryPerpetualMarketInfoRequest(): QueryPerpetualMarketInfoRequest {
  return {
    marketId: ""
  };
}

export const QueryPerpetualMarketInfoRequest = {
  encode(message: QueryPerpetualMarketInfoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPerpetualMarketInfoRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPerpetualMarketInfoRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryPerpetualMarketInfoRequest>): QueryPerpetualMarketInfoRequest {
    const message = createBaseQueryPerpetualMarketInfoRequest();
    message.marketId = object.marketId ?? "";
    return message;
  }

};

function createBaseQueryPerpetualMarketInfoResponse(): QueryPerpetualMarketInfoResponse {
  return {
    info: undefined
  };
}

export const QueryPerpetualMarketInfoResponse = {
  encode(message: QueryPerpetualMarketInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.info !== undefined) {
      PerpetualMarketInfo.encode(message.info, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPerpetualMarketInfoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPerpetualMarketInfoResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.info = PerpetualMarketInfo.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryPerpetualMarketInfoResponse>): QueryPerpetualMarketInfoResponse {
    const message = createBaseQueryPerpetualMarketInfoResponse();
    message.info = object.info !== undefined && object.info !== null ? PerpetualMarketInfo.fromPartial(object.info) : undefined;
    return message;
  }

};

function createBaseQueryExpiryFuturesMarketInfoRequest(): QueryExpiryFuturesMarketInfoRequest {
  return {
    marketId: ""
  };
}

export const QueryExpiryFuturesMarketInfoRequest = {
  encode(message: QueryExpiryFuturesMarketInfoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryExpiryFuturesMarketInfoRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryExpiryFuturesMarketInfoRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryExpiryFuturesMarketInfoRequest>): QueryExpiryFuturesMarketInfoRequest {
    const message = createBaseQueryExpiryFuturesMarketInfoRequest();
    message.marketId = object.marketId ?? "";
    return message;
  }

};

function createBaseQueryExpiryFuturesMarketInfoResponse(): QueryExpiryFuturesMarketInfoResponse {
  return {
    info: undefined
  };
}

export const QueryExpiryFuturesMarketInfoResponse = {
  encode(message: QueryExpiryFuturesMarketInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.info !== undefined) {
      ExpiryFuturesMarketInfo.encode(message.info, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryExpiryFuturesMarketInfoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryExpiryFuturesMarketInfoResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.info = ExpiryFuturesMarketInfo.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryExpiryFuturesMarketInfoResponse>): QueryExpiryFuturesMarketInfoResponse {
    const message = createBaseQueryExpiryFuturesMarketInfoResponse();
    message.info = object.info !== undefined && object.info !== null ? ExpiryFuturesMarketInfo.fromPartial(object.info) : undefined;
    return message;
  }

};

function createBaseQueryPerpetualMarketFundingRequest(): QueryPerpetualMarketFundingRequest {
  return {
    marketId: ""
  };
}

export const QueryPerpetualMarketFundingRequest = {
  encode(message: QueryPerpetualMarketFundingRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPerpetualMarketFundingRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPerpetualMarketFundingRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryPerpetualMarketFundingRequest>): QueryPerpetualMarketFundingRequest {
    const message = createBaseQueryPerpetualMarketFundingRequest();
    message.marketId = object.marketId ?? "";
    return message;
  }

};

function createBaseQueryPerpetualMarketFundingResponse(): QueryPerpetualMarketFundingResponse {
  return {
    state: undefined
  };
}

export const QueryPerpetualMarketFundingResponse = {
  encode(message: QueryPerpetualMarketFundingResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.state !== undefined) {
      PerpetualMarketFunding.encode(message.state, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPerpetualMarketFundingResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPerpetualMarketFundingResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.state = PerpetualMarketFunding.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryPerpetualMarketFundingResponse>): QueryPerpetualMarketFundingResponse {
    const message = createBaseQueryPerpetualMarketFundingResponse();
    message.state = object.state !== undefined && object.state !== null ? PerpetualMarketFunding.fromPartial(object.state) : undefined;
    return message;
  }

};

function createBaseQuerySubaccountOrderMetadataResponse(): QuerySubaccountOrderMetadataResponse {
  return {
    metadata: []
  };
}

export const QuerySubaccountOrderMetadataResponse = {
  encode(message: QuerySubaccountOrderMetadataResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.metadata) {
      SubaccountOrderbookMetadataWithMarket.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySubaccountOrderMetadataResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySubaccountOrderMetadataResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.metadata.push(SubaccountOrderbookMetadataWithMarket.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QuerySubaccountOrderMetadataResponse>): QuerySubaccountOrderMetadataResponse {
    const message = createBaseQuerySubaccountOrderMetadataResponse();
    message.metadata = object.metadata?.map(e => SubaccountOrderbookMetadataWithMarket.fromPartial(e)) || [];
    return message;
  }

};

function createBaseQuerySubaccountTradeNonceResponse(): QuerySubaccountTradeNonceResponse {
  return {
    nonce: 0
  };
}

export const QuerySubaccountTradeNonceResponse = {
  encode(message: QuerySubaccountTradeNonceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nonce !== 0) {
      writer.uint32(8).uint32(message.nonce);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySubaccountTradeNonceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySubaccountTradeNonceResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.nonce = reader.uint32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QuerySubaccountTradeNonceResponse>): QuerySubaccountTradeNonceResponse {
    const message = createBaseQuerySubaccountTradeNonceResponse();
    message.nonce = object.nonce ?? 0;
    return message;
  }

};

function createBaseQueryModuleStateRequest(): QueryModuleStateRequest {
  return {};
}

export const QueryModuleStateRequest = {
  encode(_: QueryModuleStateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryModuleStateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryModuleStateRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(_: DeepPartial<QueryModuleStateRequest>): QueryModuleStateRequest {
    const message = createBaseQueryModuleStateRequest();
    return message;
  }

};

function createBaseQueryModuleStateResponse(): QueryModuleStateResponse {
  return {
    state: undefined
  };
}

export const QueryModuleStateResponse = {
  encode(message: QueryModuleStateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.state !== undefined) {
      GenesisState.encode(message.state, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryModuleStateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryModuleStateResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.state = GenesisState.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryModuleStateResponse>): QueryModuleStateResponse {
    const message = createBaseQueryModuleStateResponse();
    message.state = object.state !== undefined && object.state !== null ? GenesisState.fromPartial(object.state) : undefined;
    return message;
  }

};

function createBaseQueryPositionsRequest(): QueryPositionsRequest {
  return {};
}

export const QueryPositionsRequest = {
  encode(_: QueryPositionsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPositionsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPositionsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(_: DeepPartial<QueryPositionsRequest>): QueryPositionsRequest {
    const message = createBaseQueryPositionsRequest();
    return message;
  }

};

function createBaseQueryPositionsResponse(): QueryPositionsResponse {
  return {
    state: []
  };
}

export const QueryPositionsResponse = {
  encode(message: QueryPositionsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.state) {
      DerivativePosition.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPositionsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPositionsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.state.push(DerivativePosition.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryPositionsResponse>): QueryPositionsResponse {
    const message = createBaseQueryPositionsResponse();
    message.state = object.state?.map(e => DerivativePosition.fromPartial(e)) || [];
    return message;
  }

};

function createBaseQueryTradeRewardPointsRequest(): QueryTradeRewardPointsRequest {
  return {
    accounts: [],
    pendingPoolTimestamp: Long.ZERO
  };
}

export const QueryTradeRewardPointsRequest = {
  encode(message: QueryTradeRewardPointsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.accounts) {
      writer.uint32(10).string(v!);
    }

    if (!message.pendingPoolTimestamp.isZero()) {
      writer.uint32(16).int64(message.pendingPoolTimestamp);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTradeRewardPointsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTradeRewardPointsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.accounts.push(reader.string());
          break;

        case 2:
          message.pendingPoolTimestamp = (reader.int64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryTradeRewardPointsRequest>): QueryTradeRewardPointsRequest {
    const message = createBaseQueryTradeRewardPointsRequest();
    message.accounts = object.accounts?.map(e => e) || [];
    message.pendingPoolTimestamp = object.pendingPoolTimestamp !== undefined && object.pendingPoolTimestamp !== null ? Long.fromValue(object.pendingPoolTimestamp) : Long.ZERO;
    return message;
  }

};

function createBaseQueryTradeRewardPointsResponse(): QueryTradeRewardPointsResponse {
  return {
    accountTradeRewardPoints: []
  };
}

export const QueryTradeRewardPointsResponse = {
  encode(message: QueryTradeRewardPointsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.accountTradeRewardPoints) {
      writer.uint32(10).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTradeRewardPointsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTradeRewardPointsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.accountTradeRewardPoints.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryTradeRewardPointsResponse>): QueryTradeRewardPointsResponse {
    const message = createBaseQueryTradeRewardPointsResponse();
    message.accountTradeRewardPoints = object.accountTradeRewardPoints?.map(e => e) || [];
    return message;
  }

};

function createBaseQueryTradeRewardCampaignRequest(): QueryTradeRewardCampaignRequest {
  return {};
}

export const QueryTradeRewardCampaignRequest = {
  encode(_: QueryTradeRewardCampaignRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTradeRewardCampaignRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTradeRewardCampaignRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(_: DeepPartial<QueryTradeRewardCampaignRequest>): QueryTradeRewardCampaignRequest {
    const message = createBaseQueryTradeRewardCampaignRequest();
    return message;
  }

};

function createBaseQueryTradeRewardCampaignResponse(): QueryTradeRewardCampaignResponse {
  return {
    tradingRewardCampaignInfo: undefined,
    tradingRewardPoolCampaignSchedule: [],
    totalTradeRewardPoints: "",
    pendingTradingRewardPoolCampaignSchedule: [],
    pendingTotalTradeRewardPoints: []
  };
}

export const QueryTradeRewardCampaignResponse = {
  encode(message: QueryTradeRewardCampaignResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tradingRewardCampaignInfo !== undefined) {
      TradingRewardCampaignInfo.encode(message.tradingRewardCampaignInfo, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.tradingRewardPoolCampaignSchedule) {
      CampaignRewardPool.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    if (message.totalTradeRewardPoints !== "") {
      writer.uint32(26).string(message.totalTradeRewardPoints);
    }

    for (const v of message.pendingTradingRewardPoolCampaignSchedule) {
      CampaignRewardPool.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    for (const v of message.pendingTotalTradeRewardPoints) {
      writer.uint32(42).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTradeRewardCampaignResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTradeRewardCampaignResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.tradingRewardCampaignInfo = TradingRewardCampaignInfo.decode(reader, reader.uint32());
          break;

        case 2:
          message.tradingRewardPoolCampaignSchedule.push(CampaignRewardPool.decode(reader, reader.uint32()));
          break;

        case 3:
          message.totalTradeRewardPoints = reader.string();
          break;

        case 4:
          message.pendingTradingRewardPoolCampaignSchedule.push(CampaignRewardPool.decode(reader, reader.uint32()));
          break;

        case 5:
          message.pendingTotalTradeRewardPoints.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryTradeRewardCampaignResponse>): QueryTradeRewardCampaignResponse {
    const message = createBaseQueryTradeRewardCampaignResponse();
    message.tradingRewardCampaignInfo = object.tradingRewardCampaignInfo !== undefined && object.tradingRewardCampaignInfo !== null ? TradingRewardCampaignInfo.fromPartial(object.tradingRewardCampaignInfo) : undefined;
    message.tradingRewardPoolCampaignSchedule = object.tradingRewardPoolCampaignSchedule?.map(e => CampaignRewardPool.fromPartial(e)) || [];
    message.totalTradeRewardPoints = object.totalTradeRewardPoints ?? "";
    message.pendingTradingRewardPoolCampaignSchedule = object.pendingTradingRewardPoolCampaignSchedule?.map(e => CampaignRewardPool.fromPartial(e)) || [];
    message.pendingTotalTradeRewardPoints = object.pendingTotalTradeRewardPoints?.map(e => e) || [];
    return message;
  }

};

function createBaseQueryIsOptedOutOfRewardsRequest(): QueryIsOptedOutOfRewardsRequest {
  return {
    account: ""
  };
}

export const QueryIsOptedOutOfRewardsRequest = {
  encode(message: QueryIsOptedOutOfRewardsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryIsOptedOutOfRewardsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIsOptedOutOfRewardsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.account = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryIsOptedOutOfRewardsRequest>): QueryIsOptedOutOfRewardsRequest {
    const message = createBaseQueryIsOptedOutOfRewardsRequest();
    message.account = object.account ?? "";
    return message;
  }

};

function createBaseQueryIsOptedOutOfRewardsResponse(): QueryIsOptedOutOfRewardsResponse {
  return {
    isOptedOut: false
  };
}

export const QueryIsOptedOutOfRewardsResponse = {
  encode(message: QueryIsOptedOutOfRewardsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.isOptedOut === true) {
      writer.uint32(8).bool(message.isOptedOut);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryIsOptedOutOfRewardsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIsOptedOutOfRewardsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.isOptedOut = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryIsOptedOutOfRewardsResponse>): QueryIsOptedOutOfRewardsResponse {
    const message = createBaseQueryIsOptedOutOfRewardsResponse();
    message.isOptedOut = object.isOptedOut ?? false;
    return message;
  }

};

function createBaseQueryOptedOutOfRewardsAccountsRequest(): QueryOptedOutOfRewardsAccountsRequest {
  return {};
}

export const QueryOptedOutOfRewardsAccountsRequest = {
  encode(_: QueryOptedOutOfRewardsAccountsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryOptedOutOfRewardsAccountsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOptedOutOfRewardsAccountsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(_: DeepPartial<QueryOptedOutOfRewardsAccountsRequest>): QueryOptedOutOfRewardsAccountsRequest {
    const message = createBaseQueryOptedOutOfRewardsAccountsRequest();
    return message;
  }

};

function createBaseQueryOptedOutOfRewardsAccountsResponse(): QueryOptedOutOfRewardsAccountsResponse {
  return {
    accounts: []
  };
}

export const QueryOptedOutOfRewardsAccountsResponse = {
  encode(message: QueryOptedOutOfRewardsAccountsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.accounts) {
      writer.uint32(10).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryOptedOutOfRewardsAccountsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOptedOutOfRewardsAccountsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.accounts.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryOptedOutOfRewardsAccountsResponse>): QueryOptedOutOfRewardsAccountsResponse {
    const message = createBaseQueryOptedOutOfRewardsAccountsResponse();
    message.accounts = object.accounts?.map(e => e) || [];
    return message;
  }

};

function createBaseQueryFeeDiscountAccountInfoRequest(): QueryFeeDiscountAccountInfoRequest {
  return {
    account: ""
  };
}

export const QueryFeeDiscountAccountInfoRequest = {
  encode(message: QueryFeeDiscountAccountInfoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFeeDiscountAccountInfoRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFeeDiscountAccountInfoRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.account = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryFeeDiscountAccountInfoRequest>): QueryFeeDiscountAccountInfoRequest {
    const message = createBaseQueryFeeDiscountAccountInfoRequest();
    message.account = object.account ?? "";
    return message;
  }

};

function createBaseQueryFeeDiscountAccountInfoResponse(): QueryFeeDiscountAccountInfoResponse {
  return {
    tierLevel: Long.UZERO,
    accountInfo: undefined,
    accountTtl: undefined
  };
}

export const QueryFeeDiscountAccountInfoResponse = {
  encode(message: QueryFeeDiscountAccountInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.tierLevel.isZero()) {
      writer.uint32(8).uint64(message.tierLevel);
    }

    if (message.accountInfo !== undefined) {
      FeeDiscountTierInfo.encode(message.accountInfo, writer.uint32(18).fork()).ldelim();
    }

    if (message.accountTtl !== undefined) {
      FeeDiscountTierTTL.encode(message.accountTtl, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFeeDiscountAccountInfoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFeeDiscountAccountInfoResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.tierLevel = (reader.uint64() as Long);
          break;

        case 2:
          message.accountInfo = FeeDiscountTierInfo.decode(reader, reader.uint32());
          break;

        case 3:
          message.accountTtl = FeeDiscountTierTTL.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryFeeDiscountAccountInfoResponse>): QueryFeeDiscountAccountInfoResponse {
    const message = createBaseQueryFeeDiscountAccountInfoResponse();
    message.tierLevel = object.tierLevel !== undefined && object.tierLevel !== null ? Long.fromValue(object.tierLevel) : Long.UZERO;
    message.accountInfo = object.accountInfo !== undefined && object.accountInfo !== null ? FeeDiscountTierInfo.fromPartial(object.accountInfo) : undefined;
    message.accountTtl = object.accountTtl !== undefined && object.accountTtl !== null ? FeeDiscountTierTTL.fromPartial(object.accountTtl) : undefined;
    return message;
  }

};

function createBaseQueryFeeDiscountScheduleRequest(): QueryFeeDiscountScheduleRequest {
  return {};
}

export const QueryFeeDiscountScheduleRequest = {
  encode(_: QueryFeeDiscountScheduleRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFeeDiscountScheduleRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFeeDiscountScheduleRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(_: DeepPartial<QueryFeeDiscountScheduleRequest>): QueryFeeDiscountScheduleRequest {
    const message = createBaseQueryFeeDiscountScheduleRequest();
    return message;
  }

};

function createBaseQueryFeeDiscountScheduleResponse(): QueryFeeDiscountScheduleResponse {
  return {
    feeDiscountSchedule: undefined
  };
}

export const QueryFeeDiscountScheduleResponse = {
  encode(message: QueryFeeDiscountScheduleResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.feeDiscountSchedule !== undefined) {
      FeeDiscountSchedule.encode(message.feeDiscountSchedule, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFeeDiscountScheduleResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFeeDiscountScheduleResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.feeDiscountSchedule = FeeDiscountSchedule.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryFeeDiscountScheduleResponse>): QueryFeeDiscountScheduleResponse {
    const message = createBaseQueryFeeDiscountScheduleResponse();
    message.feeDiscountSchedule = object.feeDiscountSchedule !== undefined && object.feeDiscountSchedule !== null ? FeeDiscountSchedule.fromPartial(object.feeDiscountSchedule) : undefined;
    return message;
  }

};

function createBaseQueryBalanceMismatchesRequest(): QueryBalanceMismatchesRequest {
  return {
    dustFactor: Long.ZERO
  };
}

export const QueryBalanceMismatchesRequest = {
  encode(message: QueryBalanceMismatchesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.dustFactor.isZero()) {
      writer.uint32(8).int64(message.dustFactor);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBalanceMismatchesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBalanceMismatchesRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.dustFactor = (reader.int64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryBalanceMismatchesRequest>): QueryBalanceMismatchesRequest {
    const message = createBaseQueryBalanceMismatchesRequest();
    message.dustFactor = object.dustFactor !== undefined && object.dustFactor !== null ? Long.fromValue(object.dustFactor) : Long.ZERO;
    return message;
  }

};

function createBaseBalanceMismatch(): BalanceMismatch {
  return {
    subaccountId: "",
    denom: "",
    available: "",
    total: "",
    balanceHold: "",
    expectedTotal: "",
    difference: ""
  };
}

export const BalanceMismatch = {
  encode(message: BalanceMismatch, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.subaccountId !== "") {
      writer.uint32(10).string(message.subaccountId);
    }

    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }

    if (message.available !== "") {
      writer.uint32(26).string(message.available);
    }

    if (message.total !== "") {
      writer.uint32(34).string(message.total);
    }

    if (message.balanceHold !== "") {
      writer.uint32(42).string(message.balanceHold);
    }

    if (message.expectedTotal !== "") {
      writer.uint32(50).string(message.expectedTotal);
    }

    if (message.difference !== "") {
      writer.uint32(58).string(message.difference);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BalanceMismatch {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBalanceMismatch();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.subaccountId = reader.string();
          break;

        case 2:
          message.denom = reader.string();
          break;

        case 3:
          message.available = reader.string();
          break;

        case 4:
          message.total = reader.string();
          break;

        case 5:
          message.balanceHold = reader.string();
          break;

        case 6:
          message.expectedTotal = reader.string();
          break;

        case 7:
          message.difference = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<BalanceMismatch>): BalanceMismatch {
    const message = createBaseBalanceMismatch();
    message.subaccountId = object.subaccountId ?? "";
    message.denom = object.denom ?? "";
    message.available = object.available ?? "";
    message.total = object.total ?? "";
    message.balanceHold = object.balanceHold ?? "";
    message.expectedTotal = object.expectedTotal ?? "";
    message.difference = object.difference ?? "";
    return message;
  }

};

function createBaseQueryBalanceMismatchesResponse(): QueryBalanceMismatchesResponse {
  return {
    balanceMismatches: []
  };
}

export const QueryBalanceMismatchesResponse = {
  encode(message: QueryBalanceMismatchesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.balanceMismatches) {
      BalanceMismatch.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBalanceMismatchesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBalanceMismatchesResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.balanceMismatches.push(BalanceMismatch.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryBalanceMismatchesResponse>): QueryBalanceMismatchesResponse {
    const message = createBaseQueryBalanceMismatchesResponse();
    message.balanceMismatches = object.balanceMismatches?.map(e => BalanceMismatch.fromPartial(e)) || [];
    return message;
  }

};

function createBaseQueryBalanceWithBalanceHoldsRequest(): QueryBalanceWithBalanceHoldsRequest {
  return {};
}

export const QueryBalanceWithBalanceHoldsRequest = {
  encode(_: QueryBalanceWithBalanceHoldsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBalanceWithBalanceHoldsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBalanceWithBalanceHoldsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(_: DeepPartial<QueryBalanceWithBalanceHoldsRequest>): QueryBalanceWithBalanceHoldsRequest {
    const message = createBaseQueryBalanceWithBalanceHoldsRequest();
    return message;
  }

};

function createBaseBalanceWithMarginHold(): BalanceWithMarginHold {
  return {
    subaccountId: "",
    denom: "",
    available: "",
    total: "",
    balanceHold: ""
  };
}

export const BalanceWithMarginHold = {
  encode(message: BalanceWithMarginHold, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.subaccountId !== "") {
      writer.uint32(10).string(message.subaccountId);
    }

    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }

    if (message.available !== "") {
      writer.uint32(26).string(message.available);
    }

    if (message.total !== "") {
      writer.uint32(34).string(message.total);
    }

    if (message.balanceHold !== "") {
      writer.uint32(42).string(message.balanceHold);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BalanceWithMarginHold {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBalanceWithMarginHold();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.subaccountId = reader.string();
          break;

        case 2:
          message.denom = reader.string();
          break;

        case 3:
          message.available = reader.string();
          break;

        case 4:
          message.total = reader.string();
          break;

        case 5:
          message.balanceHold = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<BalanceWithMarginHold>): BalanceWithMarginHold {
    const message = createBaseBalanceWithMarginHold();
    message.subaccountId = object.subaccountId ?? "";
    message.denom = object.denom ?? "";
    message.available = object.available ?? "";
    message.total = object.total ?? "";
    message.balanceHold = object.balanceHold ?? "";
    return message;
  }

};

function createBaseQueryBalanceWithBalanceHoldsResponse(): QueryBalanceWithBalanceHoldsResponse {
  return {
    balanceWithBalanceHolds: []
  };
}

export const QueryBalanceWithBalanceHoldsResponse = {
  encode(message: QueryBalanceWithBalanceHoldsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.balanceWithBalanceHolds) {
      BalanceWithMarginHold.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBalanceWithBalanceHoldsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBalanceWithBalanceHoldsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.balanceWithBalanceHolds.push(BalanceWithMarginHold.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryBalanceWithBalanceHoldsResponse>): QueryBalanceWithBalanceHoldsResponse {
    const message = createBaseQueryBalanceWithBalanceHoldsResponse();
    message.balanceWithBalanceHolds = object.balanceWithBalanceHolds?.map(e => BalanceWithMarginHold.fromPartial(e)) || [];
    return message;
  }

};

function createBaseQueryFeeDiscountTierStatisticsRequest(): QueryFeeDiscountTierStatisticsRequest {
  return {};
}

export const QueryFeeDiscountTierStatisticsRequest = {
  encode(_: QueryFeeDiscountTierStatisticsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFeeDiscountTierStatisticsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFeeDiscountTierStatisticsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(_: DeepPartial<QueryFeeDiscountTierStatisticsRequest>): QueryFeeDiscountTierStatisticsRequest {
    const message = createBaseQueryFeeDiscountTierStatisticsRequest();
    return message;
  }

};

function createBaseTierStatistic(): TierStatistic {
  return {
    tier: Long.UZERO,
    count: Long.UZERO
  };
}

export const TierStatistic = {
  encode(message: TierStatistic, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.tier.isZero()) {
      writer.uint32(8).uint64(message.tier);
    }

    if (!message.count.isZero()) {
      writer.uint32(16).uint64(message.count);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TierStatistic {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTierStatistic();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.tier = (reader.uint64() as Long);
          break;

        case 2:
          message.count = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<TierStatistic>): TierStatistic {
    const message = createBaseTierStatistic();
    message.tier = object.tier !== undefined && object.tier !== null ? Long.fromValue(object.tier) : Long.UZERO;
    message.count = object.count !== undefined && object.count !== null ? Long.fromValue(object.count) : Long.UZERO;
    return message;
  }

};

function createBaseQueryFeeDiscountTierStatisticsResponse(): QueryFeeDiscountTierStatisticsResponse {
  return {
    statistics: []
  };
}

export const QueryFeeDiscountTierStatisticsResponse = {
  encode(message: QueryFeeDiscountTierStatisticsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.statistics) {
      TierStatistic.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFeeDiscountTierStatisticsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFeeDiscountTierStatisticsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.statistics.push(TierStatistic.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryFeeDiscountTierStatisticsResponse>): QueryFeeDiscountTierStatisticsResponse {
    const message = createBaseQueryFeeDiscountTierStatisticsResponse();
    message.statistics = object.statistics?.map(e => TierStatistic.fromPartial(e)) || [];
    return message;
  }

};

function createBaseNinjaVaultInfosRequest(): NinjaVaultInfosRequest {
  return {};
}

export const NinjaVaultInfosRequest = {
  encode(_: NinjaVaultInfosRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NinjaVaultInfosRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNinjaVaultInfosRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(_: DeepPartial<NinjaVaultInfosRequest>): NinjaVaultInfosRequest {
    const message = createBaseNinjaVaultInfosRequest();
    return message;
  }

};

function createBaseNinjaVaultInfosResponse(): NinjaVaultInfosResponse {
  return {
    masterAddresses: [],
    derivativeAddresses: [],
    spotAddresses: [],
    cw20Addresses: []
  };
}

export const NinjaVaultInfosResponse = {
  encode(message: NinjaVaultInfosResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.masterAddresses) {
      writer.uint32(10).string(v!);
    }

    for (const v of message.derivativeAddresses) {
      writer.uint32(18).string(v!);
    }

    for (const v of message.spotAddresses) {
      writer.uint32(26).string(v!);
    }

    for (const v of message.cw20Addresses) {
      writer.uint32(34).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NinjaVaultInfosResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNinjaVaultInfosResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.masterAddresses.push(reader.string());
          break;

        case 2:
          message.derivativeAddresses.push(reader.string());
          break;

        case 3:
          message.spotAddresses.push(reader.string());
          break;

        case 4:
          message.cw20Addresses.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<NinjaVaultInfosResponse>): NinjaVaultInfosResponse {
    const message = createBaseNinjaVaultInfosResponse();
    message.masterAddresses = object.masterAddresses?.map(e => e) || [];
    message.derivativeAddresses = object.derivativeAddresses?.map(e => e) || [];
    message.spotAddresses = object.spotAddresses?.map(e => e) || [];
    message.cw20Addresses = object.cw20Addresses?.map(e => e) || [];
    return message;
  }

};

function createBaseQueryMarketIDFromVaultRequest(): QueryMarketIDFromVaultRequest {
  return {
    vaultSubaccountId: ""
  };
}

export const QueryMarketIDFromVaultRequest = {
  encode(message: QueryMarketIDFromVaultRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.vaultSubaccountId !== "") {
      writer.uint32(10).string(message.vaultSubaccountId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryMarketIDFromVaultRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMarketIDFromVaultRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.vaultSubaccountId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryMarketIDFromVaultRequest>): QueryMarketIDFromVaultRequest {
    const message = createBaseQueryMarketIDFromVaultRequest();
    message.vaultSubaccountId = object.vaultSubaccountId ?? "";
    return message;
  }

};

function createBaseQueryMarketIDFromVaultResponse(): QueryMarketIDFromVaultResponse {
  return {
    marketId: ""
  };
}

export const QueryMarketIDFromVaultResponse = {
  encode(message: QueryMarketIDFromVaultResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryMarketIDFromVaultResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMarketIDFromVaultResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryMarketIDFromVaultResponse>): QueryMarketIDFromVaultResponse {
    const message = createBaseQueryMarketIDFromVaultResponse();
    message.marketId = object.marketId ?? "";
    return message;
  }

};

function createBaseQueryHistoricalTradeRecordsRequest(): QueryHistoricalTradeRecordsRequest {
  return {
    marketId: ""
  };
}

export const QueryHistoricalTradeRecordsRequest = {
  encode(message: QueryHistoricalTradeRecordsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryHistoricalTradeRecordsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryHistoricalTradeRecordsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryHistoricalTradeRecordsRequest>): QueryHistoricalTradeRecordsRequest {
    const message = createBaseQueryHistoricalTradeRecordsRequest();
    message.marketId = object.marketId ?? "";
    return message;
  }

};

function createBaseQueryHistoricalTradeRecordsResponse(): QueryHistoricalTradeRecordsResponse {
  return {
    tradeRecords: []
  };
}

export const QueryHistoricalTradeRecordsResponse = {
  encode(message: QueryHistoricalTradeRecordsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.tradeRecords) {
      TradeRecords.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryHistoricalTradeRecordsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryHistoricalTradeRecordsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.tradeRecords.push(TradeRecords.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryHistoricalTradeRecordsResponse>): QueryHistoricalTradeRecordsResponse {
    const message = createBaseQueryHistoricalTradeRecordsResponse();
    message.tradeRecords = object.tradeRecords?.map(e => TradeRecords.fromPartial(e)) || [];
    return message;
  }

};

function createBaseTradeHistoryOptions(): TradeHistoryOptions {
  return {
    tradeGroupingSec: Long.UZERO,
    maxAge: Long.UZERO,
    includeRawHistory: false,
    includeMetadata: false
  };
}

export const TradeHistoryOptions = {
  encode(message: TradeHistoryOptions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.tradeGroupingSec.isZero()) {
      writer.uint32(8).uint64(message.tradeGroupingSec);
    }

    if (!message.maxAge.isZero()) {
      writer.uint32(16).uint64(message.maxAge);
    }

    if (message.includeRawHistory === true) {
      writer.uint32(32).bool(message.includeRawHistory);
    }

    if (message.includeMetadata === true) {
      writer.uint32(40).bool(message.includeMetadata);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TradeHistoryOptions {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTradeHistoryOptions();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.tradeGroupingSec = (reader.uint64() as Long);
          break;

        case 2:
          message.maxAge = (reader.uint64() as Long);
          break;

        case 4:
          message.includeRawHistory = reader.bool();
          break;

        case 5:
          message.includeMetadata = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<TradeHistoryOptions>): TradeHistoryOptions {
    const message = createBaseTradeHistoryOptions();
    message.tradeGroupingSec = object.tradeGroupingSec !== undefined && object.tradeGroupingSec !== null ? Long.fromValue(object.tradeGroupingSec) : Long.UZERO;
    message.maxAge = object.maxAge !== undefined && object.maxAge !== null ? Long.fromValue(object.maxAge) : Long.UZERO;
    message.includeRawHistory = object.includeRawHistory ?? false;
    message.includeMetadata = object.includeMetadata ?? false;
    return message;
  }

};

function createBaseQueryMarketVolatilityRequest(): QueryMarketVolatilityRequest {
  return {
    marketId: "",
    tradeHistoryOptions: undefined
  };
}

export const QueryMarketVolatilityRequest = {
  encode(message: QueryMarketVolatilityRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }

    if (message.tradeHistoryOptions !== undefined) {
      TradeHistoryOptions.encode(message.tradeHistoryOptions, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryMarketVolatilityRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMarketVolatilityRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;

        case 2:
          message.tradeHistoryOptions = TradeHistoryOptions.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryMarketVolatilityRequest>): QueryMarketVolatilityRequest {
    const message = createBaseQueryMarketVolatilityRequest();
    message.marketId = object.marketId ?? "";
    message.tradeHistoryOptions = object.tradeHistoryOptions !== undefined && object.tradeHistoryOptions !== null ? TradeHistoryOptions.fromPartial(object.tradeHistoryOptions) : undefined;
    return message;
  }

};

function createBaseQueryMarketVolatilityResponse(): QueryMarketVolatilityResponse {
  return {
    volatility: "",
    historyMetadata: undefined,
    rawHistory: []
  };
}

export const QueryMarketVolatilityResponse = {
  encode(message: QueryMarketVolatilityResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.volatility !== "") {
      writer.uint32(10).string(message.volatility);
    }

    if (message.historyMetadata !== undefined) {
      MetadataStatistics.encode(message.historyMetadata, writer.uint32(18).fork()).ldelim();
    }

    for (const v of message.rawHistory) {
      TradeRecord.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryMarketVolatilityResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMarketVolatilityResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.volatility = reader.string();
          break;

        case 2:
          message.historyMetadata = MetadataStatistics.decode(reader, reader.uint32());
          break;

        case 3:
          message.rawHistory.push(TradeRecord.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryMarketVolatilityResponse>): QueryMarketVolatilityResponse {
    const message = createBaseQueryMarketVolatilityResponse();
    message.volatility = object.volatility ?? "";
    message.historyMetadata = object.historyMetadata !== undefined && object.historyMetadata !== null ? MetadataStatistics.fromPartial(object.historyMetadata) : undefined;
    message.rawHistory = object.rawHistory?.map(e => TradeRecord.fromPartial(e)) || [];
    return message;
  }

};

function createBaseQueryBinaryMarketsRequest(): QueryBinaryMarketsRequest {
  return {
    status: ""
  };
}

export const QueryBinaryMarketsRequest = {
  encode(message: QueryBinaryMarketsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== "") {
      writer.uint32(10).string(message.status);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBinaryMarketsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBinaryMarketsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.status = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryBinaryMarketsRequest>): QueryBinaryMarketsRequest {
    const message = createBaseQueryBinaryMarketsRequest();
    message.status = object.status ?? "";
    return message;
  }

};

function createBaseQueryBinaryMarketsResponse(): QueryBinaryMarketsResponse {
  return {
    markets: []
  };
}

export const QueryBinaryMarketsResponse = {
  encode(message: QueryBinaryMarketsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.markets) {
      BinaryOptionsMarket.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBinaryMarketsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBinaryMarketsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.markets.push(BinaryOptionsMarket.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryBinaryMarketsResponse>): QueryBinaryMarketsResponse {
    const message = createBaseQueryBinaryMarketsResponse();
    message.markets = object.markets?.map(e => BinaryOptionsMarket.fromPartial(e)) || [];
    return message;
  }

};

function createBaseQueryTraderDerivativeConditionalOrdersRequest(): QueryTraderDerivativeConditionalOrdersRequest {
  return {
    subaccountId: "",
    marketId: ""
  };
}

export const QueryTraderDerivativeConditionalOrdersRequest = {
  encode(message: QueryTraderDerivativeConditionalOrdersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.subaccountId !== "") {
      writer.uint32(10).string(message.subaccountId);
    }

    if (message.marketId !== "") {
      writer.uint32(18).string(message.marketId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTraderDerivativeConditionalOrdersRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTraderDerivativeConditionalOrdersRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.subaccountId = reader.string();
          break;

        case 2:
          message.marketId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryTraderDerivativeConditionalOrdersRequest>): QueryTraderDerivativeConditionalOrdersRequest {
    const message = createBaseQueryTraderDerivativeConditionalOrdersRequest();
    message.subaccountId = object.subaccountId ?? "";
    message.marketId = object.marketId ?? "";
    return message;
  }

};

function createBaseTrimmedDerivativeConditionalOrder(): TrimmedDerivativeConditionalOrder {
  return {
    price: "",
    quantity: "",
    margin: "",
    triggerPrice: "",
    isBuy: false,
    isLimit: false,
    orderHash: ""
  };
}

export const TrimmedDerivativeConditionalOrder = {
  encode(message: TrimmedDerivativeConditionalOrder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.price !== "") {
      writer.uint32(10).string(message.price);
    }

    if (message.quantity !== "") {
      writer.uint32(18).string(message.quantity);
    }

    if (message.margin !== "") {
      writer.uint32(26).string(message.margin);
    }

    if (message.triggerPrice !== "") {
      writer.uint32(34).string(message.triggerPrice);
    }

    if (message.isBuy === true) {
      writer.uint32(40).bool(message.isBuy);
    }

    if (message.isLimit === true) {
      writer.uint32(48).bool(message.isLimit);
    }

    if (message.orderHash !== "") {
      writer.uint32(58).string(message.orderHash);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TrimmedDerivativeConditionalOrder {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTrimmedDerivativeConditionalOrder();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.price = reader.string();
          break;

        case 2:
          message.quantity = reader.string();
          break;

        case 3:
          message.margin = reader.string();
          break;

        case 4:
          message.triggerPrice = reader.string();
          break;

        case 5:
          message.isBuy = reader.bool();
          break;

        case 6:
          message.isLimit = reader.bool();
          break;

        case 7:
          message.orderHash = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<TrimmedDerivativeConditionalOrder>): TrimmedDerivativeConditionalOrder {
    const message = createBaseTrimmedDerivativeConditionalOrder();
    message.price = object.price ?? "";
    message.quantity = object.quantity ?? "";
    message.margin = object.margin ?? "";
    message.triggerPrice = object.triggerPrice ?? "";
    message.isBuy = object.isBuy ?? false;
    message.isLimit = object.isLimit ?? false;
    message.orderHash = object.orderHash ?? "";
    return message;
  }

};

function createBaseQueryTraderDerivativeConditionalOrdersResponse(): QueryTraderDerivativeConditionalOrdersResponse {
  return {
    orders: []
  };
}

export const QueryTraderDerivativeConditionalOrdersResponse = {
  encode(message: QueryTraderDerivativeConditionalOrdersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.orders) {
      TrimmedDerivativeConditionalOrder.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTraderDerivativeConditionalOrdersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTraderDerivativeConditionalOrdersResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.orders.push(TrimmedDerivativeConditionalOrder.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryTraderDerivativeConditionalOrdersResponse>): QueryTraderDerivativeConditionalOrdersResponse {
    const message = createBaseQueryTraderDerivativeConditionalOrdersResponse();
    message.orders = object.orders?.map(e => TrimmedDerivativeConditionalOrder.fromPartial(e)) || [];
    return message;
  }

};