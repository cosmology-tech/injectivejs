import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { OracleType, OracleTypeSDKType } from "../../oracle/v1beta1/oracle";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
export enum MarketStatus {
  Unspecified = 0,
  Active = 1,
  Paused = 2,
  Demolished = 3,
  Expired = 4,
  UNRECOGNIZED = -1,
}
export enum MarketStatusSDKType {
  Unspecified = 0,
  Active = 1,
  Paused = 2,
  Demolished = 3,
  Expired = 4,
  UNRECOGNIZED = -1,
}
export function marketStatusFromJSON(object: any): MarketStatus {
  switch (object) {
    case 0:
    case "Unspecified":
      return MarketStatus.Unspecified;

    case 1:
    case "Active":
      return MarketStatus.Active;

    case 2:
    case "Paused":
      return MarketStatus.Paused;

    case 3:
    case "Demolished":
      return MarketStatus.Demolished;

    case 4:
    case "Expired":
      return MarketStatus.Expired;

    case -1:
    case "UNRECOGNIZED":
    default:
      return MarketStatus.UNRECOGNIZED;
  }
}
export function marketStatusToJSON(object: MarketStatus): string {
  switch (object) {
    case MarketStatus.Unspecified:
      return "Unspecified";

    case MarketStatus.Active:
      return "Active";

    case MarketStatus.Paused:
      return "Paused";

    case MarketStatus.Demolished:
      return "Demolished";

    case MarketStatus.Expired:
      return "Expired";

    default:
      return "UNKNOWN";
  }
}
export enum OrderType {
  UNSPECIFIED = 0,
  BUY = 1,
  SELL = 2,
  STOP_BUY = 3,
  STOP_SELL = 4,
  TAKE_BUY = 5,
  TAKE_SELL = 6,
  BUY_PO = 7,
  SELL_PO = 8,
  UNRECOGNIZED = -1,
}
export enum OrderTypeSDKType {
  UNSPECIFIED = 0,
  BUY = 1,
  SELL = 2,
  STOP_BUY = 3,
  STOP_SELL = 4,
  TAKE_BUY = 5,
  TAKE_SELL = 6,
  BUY_PO = 7,
  SELL_PO = 8,
  UNRECOGNIZED = -1,
}
export function orderTypeFromJSON(object: any): OrderType {
  switch (object) {
    case 0:
    case "UNSPECIFIED":
      return OrderType.UNSPECIFIED;

    case 1:
    case "BUY":
      return OrderType.BUY;

    case 2:
    case "SELL":
      return OrderType.SELL;

    case 3:
    case "STOP_BUY":
      return OrderType.STOP_BUY;

    case 4:
    case "STOP_SELL":
      return OrderType.STOP_SELL;

    case 5:
    case "TAKE_BUY":
      return OrderType.TAKE_BUY;

    case 6:
    case "TAKE_SELL":
      return OrderType.TAKE_SELL;

    case 7:
    case "BUY_PO":
      return OrderType.BUY_PO;

    case 8:
    case "SELL_PO":
      return OrderType.SELL_PO;

    case -1:
    case "UNRECOGNIZED":
    default:
      return OrderType.UNRECOGNIZED;
  }
}
export function orderTypeToJSON(object: OrderType): string {
  switch (object) {
    case OrderType.UNSPECIFIED:
      return "UNSPECIFIED";

    case OrderType.BUY:
      return "BUY";

    case OrderType.SELL:
      return "SELL";

    case OrderType.STOP_BUY:
      return "STOP_BUY";

    case OrderType.STOP_SELL:
      return "STOP_SELL";

    case OrderType.TAKE_BUY:
      return "TAKE_BUY";

    case OrderType.TAKE_SELL:
      return "TAKE_SELL";

    case OrderType.BUY_PO:
      return "BUY_PO";

    case OrderType.SELL_PO:
      return "SELL_PO";

    default:
      return "UNKNOWN";
  }
}
export enum ExecutionType {
  UnspecifiedExecutionType = 0,
  Market = 1,
  LimitFill = 2,
  LimitMatchRestingOrder = 3,
  LimitMatchNewOrder = 4,
  MarketLiquidation = 5,
  ExpiryMarketSettlement = 6,
  UNRECOGNIZED = -1,
}
export enum ExecutionTypeSDKType {
  UnspecifiedExecutionType = 0,
  Market = 1,
  LimitFill = 2,
  LimitMatchRestingOrder = 3,
  LimitMatchNewOrder = 4,
  MarketLiquidation = 5,
  ExpiryMarketSettlement = 6,
  UNRECOGNIZED = -1,
}
export function executionTypeFromJSON(object: any): ExecutionType {
  switch (object) {
    case 0:
    case "UnspecifiedExecutionType":
      return ExecutionType.UnspecifiedExecutionType;

    case 1:
    case "Market":
      return ExecutionType.Market;

    case 2:
    case "LimitFill":
      return ExecutionType.LimitFill;

    case 3:
    case "LimitMatchRestingOrder":
      return ExecutionType.LimitMatchRestingOrder;

    case 4:
    case "LimitMatchNewOrder":
      return ExecutionType.LimitMatchNewOrder;

    case 5:
    case "MarketLiquidation":
      return ExecutionType.MarketLiquidation;

    case 6:
    case "ExpiryMarketSettlement":
      return ExecutionType.ExpiryMarketSettlement;

    case -1:
    case "UNRECOGNIZED":
    default:
      return ExecutionType.UNRECOGNIZED;
  }
}
export function executionTypeToJSON(object: ExecutionType): string {
  switch (object) {
    case ExecutionType.UnspecifiedExecutionType:
      return "UnspecifiedExecutionType";

    case ExecutionType.Market:
      return "Market";

    case ExecutionType.LimitFill:
      return "LimitFill";

    case ExecutionType.LimitMatchRestingOrder:
      return "LimitMatchRestingOrder";

    case ExecutionType.LimitMatchNewOrder:
      return "LimitMatchNewOrder";

    case ExecutionType.MarketLiquidation:
      return "MarketLiquidation";

    case ExecutionType.ExpiryMarketSettlement:
      return "ExpiryMarketSettlement";

    default:
      return "UNKNOWN";
  }
}
export enum OrderMask {
  UNUSED = 0,
  ANY = 1,
  REGULAR = 2,
  CONDITIONAL = 4,

  /** DIRECTION_BUY_OR_HIGHER - for conditional orders means HIGHER */
  DIRECTION_BUY_OR_HIGHER = 8,

  /** DIRECTION_SELL_OR_LOWER - for conditional orders means LOWER */
  DIRECTION_SELL_OR_LOWER = 16,
  TYPE_MARKET = 32,
  TYPE_LIMIT = 64,
  UNRECOGNIZED = -1,
}
export enum OrderMaskSDKType {
  UNUSED = 0,
  ANY = 1,
  REGULAR = 2,
  CONDITIONAL = 4,

  /** DIRECTION_BUY_OR_HIGHER - for conditional orders means HIGHER */
  DIRECTION_BUY_OR_HIGHER = 8,

  /** DIRECTION_SELL_OR_LOWER - for conditional orders means LOWER */
  DIRECTION_SELL_OR_LOWER = 16,
  TYPE_MARKET = 32,
  TYPE_LIMIT = 64,
  UNRECOGNIZED = -1,
}
export function orderMaskFromJSON(object: any): OrderMask {
  switch (object) {
    case 0:
    case "UNUSED":
      return OrderMask.UNUSED;

    case 1:
    case "ANY":
      return OrderMask.ANY;

    case 2:
    case "REGULAR":
      return OrderMask.REGULAR;

    case 4:
    case "CONDITIONAL":
      return OrderMask.CONDITIONAL;

    case 8:
    case "DIRECTION_BUY_OR_HIGHER":
      return OrderMask.DIRECTION_BUY_OR_HIGHER;

    case 16:
    case "DIRECTION_SELL_OR_LOWER":
      return OrderMask.DIRECTION_SELL_OR_LOWER;

    case 32:
    case "TYPE_MARKET":
      return OrderMask.TYPE_MARKET;

    case 64:
    case "TYPE_LIMIT":
      return OrderMask.TYPE_LIMIT;

    case -1:
    case "UNRECOGNIZED":
    default:
      return OrderMask.UNRECOGNIZED;
  }
}
export function orderMaskToJSON(object: OrderMask): string {
  switch (object) {
    case OrderMask.UNUSED:
      return "UNUSED";

    case OrderMask.ANY:
      return "ANY";

    case OrderMask.REGULAR:
      return "REGULAR";

    case OrderMask.CONDITIONAL:
      return "CONDITIONAL";

    case OrderMask.DIRECTION_BUY_OR_HIGHER:
      return "DIRECTION_BUY_OR_HIGHER";

    case OrderMask.DIRECTION_SELL_OR_LOWER:
      return "DIRECTION_SELL_OR_LOWER";

    case OrderMask.TYPE_MARKET:
      return "TYPE_MARKET";

    case OrderMask.TYPE_LIMIT:
      return "TYPE_LIMIT";

    default:
      return "UNKNOWN";
  }
}
export interface Params {
  /** spot_market_instant_listing_fee defines the expedited fee in INJ required to create a spot market by bypassing governance */
  spotMarketInstantListingFee: Coin;
  /** derivative_market_instant_listing_fee defines the expedited fee in INJ required to create a derivative market by bypassing governance */

  derivativeMarketInstantListingFee: Coin;
  /** default_spot_maker_fee defines the default exchange trade fee for makers on a spot market */

  defaultSpotMakerFeeRate: string;
  /** default_spot_taker_fee_rate defines the default exchange trade fee rate for takers on a new spot market */

  defaultSpotTakerFeeRate: string;
  /** default_derivative_maker_fee defines the default exchange trade fee for makers on a new derivative market */

  defaultDerivativeMakerFeeRate: string;
  /** default_derivative_taker_fee defines the default exchange trade fee for takers on a new derivative market */

  defaultDerivativeTakerFeeRate: string;
  /** default_initial_margin_ratio defines the default initial margin ratio on a new derivative market */

  defaultInitialMarginRatio: string;
  /** default_maintenance_margin_ratio defines the default maintenance margin ratio on a new derivative market */

  defaultMaintenanceMarginRatio: string;
  /** default_funding_interval defines the default funding interval on a derivative market */

  defaultFundingInterval: Long;
  /** funding_multiple defines the timestamp multiple that the funding timestamp should be a multiple of */

  fundingMultiple: Long;
  /** relayer_fee_share_rate defines the trade fee share percentage that goes to relayers */

  relayerFeeShareRate: string;
  /** default_hourly_funding_rate_cap defines the default maximum absolute value of the hourly funding rate */

  defaultHourlyFundingRateCap: string;
  /** hourly_interest_rate defines the hourly interest rate */

  defaultHourlyInterestRate: string;
  /** max_derivative_order_side_count defines the maximum number of derivative active orders a subaccount can have for a given orderbook side */

  maxDerivativeOrderSideCount: number;
  /** inj_reward_staked_requirement_threshold defines the threshold on INJ rewards after which one also needs staked INJ to receive more */

  injRewardStakedRequirementThreshold: string;
  /** the trading_rewards_vesting_duration defines the vesting times for trading rewards */

  tradingRewardsVestingDuration: Long;
  /** liquidator_reward_share_rate defines the ratio of the split of the surplus collateral that goes to the liquidator */

  liquidatorRewardShareRate: string;
  /** binary_options_market_instant_listing_fee defines the expedited fee in INJ required to create a derivative market by bypassing governance */

  binaryOptionsMarketInstantListingFee: Coin;
}
export interface ParamsSDKType {
  /** spot_market_instant_listing_fee defines the expedited fee in INJ required to create a spot market by bypassing governance */
  spot_market_instant_listing_fee: CoinSDKType;
  /** derivative_market_instant_listing_fee defines the expedited fee in INJ required to create a derivative market by bypassing governance */

  derivative_market_instant_listing_fee: CoinSDKType;
  /** default_spot_maker_fee defines the default exchange trade fee for makers on a spot market */

  default_spot_maker_fee_rate: string;
  /** default_spot_taker_fee_rate defines the default exchange trade fee rate for takers on a new spot market */

  default_spot_taker_fee_rate: string;
  /** default_derivative_maker_fee defines the default exchange trade fee for makers on a new derivative market */

  default_derivative_maker_fee_rate: string;
  /** default_derivative_taker_fee defines the default exchange trade fee for takers on a new derivative market */

  default_derivative_taker_fee_rate: string;
  /** default_initial_margin_ratio defines the default initial margin ratio on a new derivative market */

  default_initial_margin_ratio: string;
  /** default_maintenance_margin_ratio defines the default maintenance margin ratio on a new derivative market */

  default_maintenance_margin_ratio: string;
  /** default_funding_interval defines the default funding interval on a derivative market */

  default_funding_interval: Long;
  /** funding_multiple defines the timestamp multiple that the funding timestamp should be a multiple of */

  funding_multiple: Long;
  /** relayer_fee_share_rate defines the trade fee share percentage that goes to relayers */

  relayer_fee_share_rate: string;
  /** default_hourly_funding_rate_cap defines the default maximum absolute value of the hourly funding rate */

  default_hourly_funding_rate_cap: string;
  /** hourly_interest_rate defines the hourly interest rate */

  default_hourly_interest_rate: string;
  /** max_derivative_order_side_count defines the maximum number of derivative active orders a subaccount can have for a given orderbook side */

  max_derivative_order_side_count: number;
  /** inj_reward_staked_requirement_threshold defines the threshold on INJ rewards after which one also needs staked INJ to receive more */

  inj_reward_staked_requirement_threshold: string;
  /** the trading_rewards_vesting_duration defines the vesting times for trading rewards */

  trading_rewards_vesting_duration: Long;
  /** liquidator_reward_share_rate defines the ratio of the split of the surplus collateral that goes to the liquidator */

  liquidator_reward_share_rate: string;
  /** binary_options_market_instant_listing_fee defines the expedited fee in INJ required to create a derivative market by bypassing governance */

  binary_options_market_instant_listing_fee: CoinSDKType;
}
/** An object describing a derivative market in the Injective Futures Protocol. */

export interface DerivativeMarket {
  /** Ticker for the derivative contract. */
  ticker: string;
  /** Oracle base currency */

  oracleBase: string;
  /** Oracle quote currency */

  oracleQuote: string;
  /** Oracle type */

  oracleType: OracleType;
  /** Scale factor for oracle prices. */

  oracleScaleFactor: number;
  /** Address of the quote currency denomination for the derivative contract */

  quoteDenom: string;
  /** Unique market ID. */

  marketId: string;
  /** initial_margin_ratio defines the initial margin ratio of a derivative market */

  initialMarginRatio: string;
  /** maintenance_margin_ratio defines the maintenance margin ratio of a derivative market */

  maintenanceMarginRatio: string;
  /** maker_fee_rate defines the maker fee rate of a derivative market */

  makerFeeRate: string;
  /** taker_fee_rate defines the taker fee rate of a derivative market */

  takerFeeRate: string;
  /** relayer_fee_share_rate defines the percentage of the transaction fee shared with the relayer in a derivative market */

  relayerFeeShareRate: string;
  /** true if the market is a perpetual market. false if the market is an expiry futures market */

  isPerpetual: boolean;
  /** Status of the market */

  status: MarketStatus;
  /** min_price_tick_size defines the minimum tick size that the price and margin required for orders in the market */

  minPriceTickSize: string;
  /** min_quantity_tick_size defines the minimum tick size of the quantity required for orders in the market */

  minQuantityTickSize: string;
}
/** An object describing a derivative market in the Injective Futures Protocol. */

export interface DerivativeMarketSDKType {
  /** Ticker for the derivative contract. */
  ticker: string;
  /** Oracle base currency */

  oracle_base: string;
  /** Oracle quote currency */

  oracle_quote: string;
  /** Oracle type */

  oracle_type: OracleTypeSDKType;
  /** Scale factor for oracle prices. */

  oracle_scale_factor: number;
  /** Address of the quote currency denomination for the derivative contract */

  quote_denom: string;
  /** Unique market ID. */

  market_id: string;
  /** initial_margin_ratio defines the initial margin ratio of a derivative market */

  initial_margin_ratio: string;
  /** maintenance_margin_ratio defines the maintenance margin ratio of a derivative market */

  maintenance_margin_ratio: string;
  /** maker_fee_rate defines the maker fee rate of a derivative market */

  maker_fee_rate: string;
  /** taker_fee_rate defines the taker fee rate of a derivative market */

  taker_fee_rate: string;
  /** relayer_fee_share_rate defines the percentage of the transaction fee shared with the relayer in a derivative market */

  relayer_fee_share_rate: string;
  /** true if the market is a perpetual market. false if the market is an expiry futures market */

  isPerpetual: boolean;
  /** Status of the market */

  status: MarketStatusSDKType;
  /** min_price_tick_size defines the minimum tick size that the price and margin required for orders in the market */

  min_price_tick_size: string;
  /** min_quantity_tick_size defines the minimum tick size of the quantity required for orders in the market */

  min_quantity_tick_size: string;
}
/** An object describing a binary options market in Injective Protocol. */

export interface BinaryOptionsMarket {
  /** Ticker for the derivative contract. */
  ticker: string;
  /** Oracle symbol */

  oracleSymbol: string;
  /** Oracle Provider */

  oracleProvider: string;
  /** Oracle type */

  oracleType: OracleType;
  /** Scale factor for oracle prices. */

  oracleScaleFactor: number;
  /** expiration timestamp */

  expirationTimestamp: Long;
  /** expiration timestamp */

  settlementTimestamp: Long;
  /** admin of the market */

  admin: string;
  /** Address of the quote currency denomination for the binary options contract */

  quoteDenom: string;
  /** Unique market ID. */

  marketId: string;
  /** maker_fee_rate defines the maker fee rate of a binary options market */

  makerFeeRate: string;
  /** taker_fee_rate defines the taker fee rate of a derivative market */

  takerFeeRate: string;
  /** relayer_fee_share_rate defines the percentage of the transaction fee shared with the relayer in a derivative market */

  relayerFeeShareRate: string;
  /** Status of the market */

  status: MarketStatus;
  /** min_price_tick_size defines the minimum tick size that the price and margin required for orders in the market */

  minPriceTickSize: string;
  /** min_quantity_tick_size defines the minimum tick size of the quantity required for orders in the market */

  minQuantityTickSize: string;
  settlementPrice?: string;
}
/** An object describing a binary options market in Injective Protocol. */

export interface BinaryOptionsMarketSDKType {
  /** Ticker for the derivative contract. */
  ticker: string;
  /** Oracle symbol */

  oracle_symbol: string;
  /** Oracle Provider */

  oracle_provider: string;
  /** Oracle type */

  oracle_type: OracleTypeSDKType;
  /** Scale factor for oracle prices. */

  oracle_scale_factor: number;
  /** expiration timestamp */

  expiration_timestamp: Long;
  /** expiration timestamp */

  settlement_timestamp: Long;
  /** admin of the market */

  admin: string;
  /** Address of the quote currency denomination for the binary options contract */

  quote_denom: string;
  /** Unique market ID. */

  market_id: string;
  /** maker_fee_rate defines the maker fee rate of a binary options market */

  maker_fee_rate: string;
  /** taker_fee_rate defines the taker fee rate of a derivative market */

  taker_fee_rate: string;
  /** relayer_fee_share_rate defines the percentage of the transaction fee shared with the relayer in a derivative market */

  relayer_fee_share_rate: string;
  /** Status of the market */

  status: MarketStatusSDKType;
  /** min_price_tick_size defines the minimum tick size that the price and margin required for orders in the market */

  min_price_tick_size: string;
  /** min_quantity_tick_size defines the minimum tick size of the quantity required for orders in the market */

  min_quantity_tick_size: string;
  settlement_price?: string;
}
export interface ExpiryFuturesMarketInfo {
  /** market ID. */
  marketId: string;
  /** expiration_timestamp defines the expiration time for a time expiry futures market. */

  expirationTimestamp: Long;
  /** expiration_twap_start_timestamp defines the start time of the TWAP calculation window */

  twapStartTimestamp: Long;
  /** expiration_twap_start_price_cumulative defines the cumulative price for the start of the TWAP window */

  expirationTwapStartPriceCumulative: string;
  /** settlement_price defines the settlement price for a time expiry futures market. */

  settlementPrice: string;
}
export interface ExpiryFuturesMarketInfoSDKType {
  /** market ID. */
  market_id: string;
  /** expiration_timestamp defines the expiration time for a time expiry futures market. */

  expiration_timestamp: Long;
  /** expiration_twap_start_timestamp defines the start time of the TWAP calculation window */

  twap_start_timestamp: Long;
  /** expiration_twap_start_price_cumulative defines the cumulative price for the start of the TWAP window */

  expiration_twap_start_price_cumulative: string;
  /** settlement_price defines the settlement price for a time expiry futures market. */

  settlement_price: string;
}
export interface PerpetualMarketInfo {
  /** market ID. */
  marketId: string;
  /** hourly_funding_rate_cap defines the maximum absolute value of the hourly funding rate */

  hourlyFundingRateCap: string;
  /** hourly_interest_rate defines the hourly interest rate */

  hourlyInterestRate: string;
  /** next_funding_timestamp defines the next funding timestamp in seconds of a perpetual market */

  nextFundingTimestamp: Long;
  /** funding_interval defines the next funding interval in seconds of a perpetual market. */

  fundingInterval: Long;
}
export interface PerpetualMarketInfoSDKType {
  /** market ID. */
  market_id: string;
  /** hourly_funding_rate_cap defines the maximum absolute value of the hourly funding rate */

  hourly_funding_rate_cap: string;
  /** hourly_interest_rate defines the hourly interest rate */

  hourly_interest_rate: string;
  /** next_funding_timestamp defines the next funding timestamp in seconds of a perpetual market */

  next_funding_timestamp: Long;
  /** funding_interval defines the next funding interval in seconds of a perpetual market. */

  funding_interval: Long;
}
export interface PerpetualMarketFunding {
  /** cumulative_funding defines the cumulative funding of a perpetual market. */
  cumulativeFunding: string;
  /** cumulative_price defines the cumulative price for the current hour up to the last timestamp */

  cumulativePrice: string;
  lastTimestamp: Long;
}
export interface PerpetualMarketFundingSDKType {
  /** cumulative_funding defines the cumulative funding of a perpetual market. */
  cumulative_funding: string;
  /** cumulative_price defines the cumulative price for the current hour up to the last timestamp */

  cumulative_price: string;
  last_timestamp: Long;
}
export interface DerivativeMarketSettlementInfo {
  /** market ID. */
  marketId: string;
  /** settlement_price defines the settlement price */

  settlementPrice: string;
  /** starting_deficit defines starting deficit */

  startingDeficit: string;
}
export interface DerivativeMarketSettlementInfoSDKType {
  /** market ID. */
  market_id: string;
  /** settlement_price defines the settlement price */

  settlement_price: string;
  /** starting_deficit defines starting deficit */

  starting_deficit: string;
}
export interface NextFundingTimestamp {
  nextTimestamp: Long;
}
export interface NextFundingTimestampSDKType {
  next_timestamp: Long;
}
/** An object describing trade pair of two assets. */

export interface SpotMarket {
  /** A name of the pair in format AAA/BBB, where AAA is base asset, BBB is quote asset. */
  ticker: string;
  /** Coin denom used for the base asset */

  baseDenom: string;
  /** Coin used for the quote asset */

  quoteDenom: string;
  /** maker_fee_rate defines the fee percentage makers pay when trading */

  makerFeeRate: string;
  /** taker_fee_rate defines the fee percentage takers pay when trading */

  takerFeeRate: string;
  /** relayer_fee_share_rate defines the percentage of the transaction fee shared with the relayer in a derivative market */

  relayerFeeShareRate: string;
  /** Unique market ID. */

  marketId: string;
  /** Status of the market */

  status: MarketStatus;
  /** min_price_tick_size defines the minimum tick size that the price required for orders in the market */

  minPriceTickSize: string;
  /** min_quantity_tick_size defines the minimum tick size of the quantity required for orders in the market */

  minQuantityTickSize: string;
}
/** An object describing trade pair of two assets. */

export interface SpotMarketSDKType {
  /** A name of the pair in format AAA/BBB, where AAA is base asset, BBB is quote asset. */
  ticker: string;
  /** Coin denom used for the base asset */

  base_denom: string;
  /** Coin used for the quote asset */

  quote_denom: string;
  /** maker_fee_rate defines the fee percentage makers pay when trading */

  maker_fee_rate: string;
  /** taker_fee_rate defines the fee percentage takers pay when trading */

  taker_fee_rate: string;
  /** relayer_fee_share_rate defines the percentage of the transaction fee shared with the relayer in a derivative market */

  relayer_fee_share_rate: string;
  /** Unique market ID. */

  market_id: string;
  /** Status of the market */

  status: MarketStatusSDKType;
  /** min_price_tick_size defines the minimum tick size that the price required for orders in the market */

  min_price_tick_size: string;
  /** min_quantity_tick_size defines the minimum tick size of the quantity required for orders in the market */

  min_quantity_tick_size: string;
}
/** A subaccount's deposit for a given base currency */

export interface Deposit {
  availableBalance: string;
  totalBalance: string;
}
/** A subaccount's deposit for a given base currency */

export interface DepositSDKType {
  available_balance: string;
  total_balance: string;
}
export interface SubaccountTradeNonce {
  nonce: number;
}
export interface SubaccountTradeNonceSDKType {
  nonce: number;
}
export interface OrderInfo {
  /** bytes32 subaccount ID that created the order */
  subaccountId: string;
  /** address fee_recipient address that will receive fees for the order */

  feeRecipient: string;
  /** price of the order */

  price: string;
  /** quantity of the order */

  quantity: string;
}
export interface OrderInfoSDKType {
  /** bytes32 subaccount ID that created the order */
  subaccount_id: string;
  /** address fee_recipient address that will receive fees for the order */

  fee_recipient: string;
  /** price of the order */

  price: string;
  /** quantity of the order */

  quantity: string;
}
export interface SpotOrder {
  /** market_id represents the unique ID of the market */
  marketId: string;
  /** order_info contains the information of the order */

  orderInfo: OrderInfo;
  /** order types */

  orderType: OrderType;
  /** trigger_price is the trigger price used by stop/take orders */

  triggerPrice?: string;
}
export interface SpotOrderSDKType {
  /** market_id represents the unique ID of the market */
  market_id: string;
  /** order_info contains the information of the order */

  order_info: OrderInfoSDKType;
  /** order types */

  order_type: OrderTypeSDKType;
  /** trigger_price is the trigger price used by stop/take orders */

  trigger_price?: string;
}
/** A valid Spot limit order with Metadata. */

export interface SpotLimitOrder {
  /** order_info contains the information of the order */
  orderInfo: OrderInfo;
  /** order types */

  orderType: OrderType;
  /** the amount of the quantity remaining fillable */

  fillable: string;
  /** trigger_price is the trigger price used by stop/take orders */

  triggerPrice?: string;
  orderHash: Uint8Array;
}
/** A valid Spot limit order with Metadata. */

export interface SpotLimitOrderSDKType {
  /** order_info contains the information of the order */
  order_info: OrderInfoSDKType;
  /** order types */

  order_type: OrderTypeSDKType;
  /** the amount of the quantity remaining fillable */

  fillable: string;
  /** trigger_price is the trigger price used by stop/take orders */

  trigger_price?: string;
  order_hash: Uint8Array;
}
/** A valid Spot market order with Metadata. */

export interface SpotMarketOrder {
  /** order_info contains the information of the order */
  orderInfo: OrderInfo;
  balanceHold: string;
  orderHash: Uint8Array;
  /** order types */

  orderType: OrderType;
  /** trigger_price is the trigger price used by stop/take orders */

  triggerPrice?: string;
}
/** A valid Spot market order with Metadata. */

export interface SpotMarketOrderSDKType {
  /** order_info contains the information of the order */
  order_info: OrderInfoSDKType;
  balance_hold: string;
  order_hash: Uint8Array;
  /** order types */

  order_type: OrderTypeSDKType;
  /** trigger_price is the trigger price used by stop/take orders */

  trigger_price?: string;
}
export interface DerivativeOrder {
  /** market_id represents the unique ID of the market */
  marketId: string;
  /** order_info contains the information of the order */

  orderInfo: OrderInfo;
  /** order types */

  orderType: OrderType;
  /** margin is the margin used by the limit order */

  margin: string;
  /** trigger_price is the trigger price used by stop/take orders */

  triggerPrice?: string;
}
export interface DerivativeOrderSDKType {
  /** market_id represents the unique ID of the market */
  market_id: string;
  /** order_info contains the information of the order */

  order_info: OrderInfoSDKType;
  /** order types */

  order_type: OrderTypeSDKType;
  /** margin is the margin used by the limit order */

  margin: string;
  /** trigger_price is the trigger price used by stop/take orders */

  trigger_price?: string;
}
export interface SubaccountOrderbookMetadata {
  vanillaLimitOrderCount: number;
  reduceOnlyLimitOrderCount: number;
  /** AggregateReduceOnlyQuantity is the aggregate fillable quantity of the subaccount's reduce-only limit orders in the given direction. */

  aggregateReduceOnlyQuantity: string;
  /** AggregateVanillaQuantity is the aggregate fillable quantity of the subaccount's vanilla limit orders in the given direction. */

  aggregateVanillaQuantity: string;
  vanillaConditionalOrderCount: number;
  reduceOnlyConditionalOrderCount: number;
}
export interface SubaccountOrderbookMetadataSDKType {
  vanilla_limit_order_count: number;
  reduce_only_limit_order_count: number;
  /** AggregateReduceOnlyQuantity is the aggregate fillable quantity of the subaccount's reduce-only limit orders in the given direction. */

  aggregate_reduce_only_quantity: string;
  /** AggregateVanillaQuantity is the aggregate fillable quantity of the subaccount's vanilla limit orders in the given direction. */

  aggregate_vanilla_quantity: string;
  vanilla_conditional_order_count: number;
  reduce_only_conditional_order_count: number;
}
export interface SubaccountOrder {
  /** price of the order */
  price: string;
  /** the amount of the quantity remaining fillable */

  quantity: string;
  isReduceOnly: boolean;
}
export interface SubaccountOrderSDKType {
  /** price of the order */
  price: string;
  /** the amount of the quantity remaining fillable */

  quantity: string;
  isReduceOnly: boolean;
}
export interface SubaccountOrderData {
  order: SubaccountOrder;
  orderHash: Uint8Array;
}
export interface SubaccountOrderDataSDKType {
  order: SubaccountOrderSDKType;
  order_hash: Uint8Array;
}
/** A valid Derivative limit order with Metadata. */

export interface DerivativeLimitOrder {
  /** order_info contains the information of the order */
  orderInfo: OrderInfo;
  /** order types */

  orderType: OrderType;
  /** margin is the margin used by the limit order */

  margin: string;
  /** the amount of the quantity remaining fillable */

  fillable: string;
  /** trigger_price is the trigger price used by stop/take orders */

  triggerPrice?: string;
  orderHash: Uint8Array;
}
/** A valid Derivative limit order with Metadata. */

export interface DerivativeLimitOrderSDKType {
  /** order_info contains the information of the order */
  order_info: OrderInfoSDKType;
  /** order types */

  order_type: OrderTypeSDKType;
  /** margin is the margin used by the limit order */

  margin: string;
  /** the amount of the quantity remaining fillable */

  fillable: string;
  /** trigger_price is the trigger price used by stop/take orders */

  trigger_price?: string;
  order_hash: Uint8Array;
}
/** A valid Derivative market order with Metadata. */

export interface DerivativeMarketOrder {
  /** order_info contains the information of the order */
  orderInfo: OrderInfo;
  /** order types */

  orderType: OrderType;
  margin: string;
  marginHold: string;
  /** trigger_price is the trigger price used by stop/take orders */

  triggerPrice?: string;
  orderHash: Uint8Array;
}
/** A valid Derivative market order with Metadata. */

export interface DerivativeMarketOrderSDKType {
  /** order_info contains the information of the order */
  order_info: OrderInfoSDKType;
  /** order types */

  order_type: OrderTypeSDKType;
  margin: string;
  margin_hold: string;
  /** trigger_price is the trigger price used by stop/take orders */

  trigger_price?: string;
  order_hash: Uint8Array;
}
export interface Position {
  isLong: boolean;
  quantity: string;
  entryPrice: string;
  margin: string;
  cumulativeFundingEntry: string;
}
export interface PositionSDKType {
  isLong: boolean;
  quantity: string;
  entry_price: string;
  margin: string;
  cumulative_funding_entry: string;
}
export interface MarketOrderIndicator {
  /** market_id represents the unique ID of the market */
  marketId: string;
  isBuy: boolean;
}
export interface MarketOrderIndicatorSDKType {
  /** market_id represents the unique ID of the market */
  market_id: string;
  isBuy: boolean;
}
export interface TradeLog {
  quantity: string;
  price: string;
  /** bytes32 subaccount ID that executed the trade */

  subaccountId: Uint8Array;
  fee: string;
  orderHash: Uint8Array;
  feeRecipientAddress?: Uint8Array;
}
export interface TradeLogSDKType {
  quantity: string;
  price: string;
  /** bytes32 subaccount ID that executed the trade */

  subaccount_id: Uint8Array;
  fee: string;
  order_hash: Uint8Array;
  fee_recipient_address?: Uint8Array;
}
export interface PositionDelta {
  isLong: boolean;
  executionQuantity: string;
  executionMargin: string;
  executionPrice: string;
}
export interface PositionDeltaSDKType {
  is_long: boolean;
  execution_quantity: string;
  execution_margin: string;
  execution_price: string;
}
export interface DerivativeTradeLog {
  subaccountId: Uint8Array;
  positionDelta: PositionDelta;
  payout: string;
  fee: string;
  orderHash: Uint8Array;
  feeRecipientAddress?: Uint8Array;
}
export interface DerivativeTradeLogSDKType {
  subaccount_id: Uint8Array;
  position_delta: PositionDeltaSDKType;
  payout: string;
  fee: string;
  order_hash: Uint8Array;
  fee_recipient_address?: Uint8Array;
}
export interface SubaccountPosition {
  position: Position;
  subaccountId: Uint8Array;
}
export interface SubaccountPositionSDKType {
  position: PositionSDKType;
  subaccount_id: Uint8Array;
}
export interface SubaccountDeposit {
  subaccountId: Uint8Array;
  deposit: Deposit;
}
export interface SubaccountDepositSDKType {
  subaccount_id: Uint8Array;
  deposit: DepositSDKType;
}
export interface DepositUpdate {
  denom: string;
  deposits: SubaccountDeposit[];
}
export interface DepositUpdateSDKType {
  denom: string;
  deposits: SubaccountDepositSDKType[];
}
export interface PointsMultiplier {
  makerPointsMultiplier: string;
  takerPointsMultiplier: string;
}
export interface PointsMultiplierSDKType {
  maker_points_multiplier: string;
  taker_points_multiplier: string;
}
export interface TradingRewardCampaignBoostInfo {
  boostedSpotMarketIds: string[];
  spotMarketMultipliers: PointsMultiplier[];
  boostedDerivativeMarketIds: string[];
  derivativeMarketMultipliers: PointsMultiplier[];
}
export interface TradingRewardCampaignBoostInfoSDKType {
  boosted_spot_market_ids: string[];
  spot_market_multipliers: PointsMultiplierSDKType[];
  boosted_derivative_market_ids: string[];
  derivative_market_multipliers: PointsMultiplierSDKType[];
}
export interface CampaignRewardPool {
  startTimestamp: Long;
  /** max_campaign_rewards are the maximum reward amounts to be disbursed at the end of the campaign */

  maxCampaignRewards: Coin[];
}
export interface CampaignRewardPoolSDKType {
  start_timestamp: Long;
  /** max_campaign_rewards are the maximum reward amounts to be disbursed at the end of the campaign */

  max_campaign_rewards: CoinSDKType[];
}
export interface TradingRewardCampaignInfo {
  /** number of seconds of the duration of each campaign */
  campaignDurationSeconds: Long;
  /** the trading fee quote denoms which will be counted for the rewards */

  quoteDenoms: string[];
  /** the optional boost info for markets */

  tradingRewardBoostInfo: TradingRewardCampaignBoostInfo;
  /** the marketIDs which are disqualified from being rewarded */

  disqualifiedMarketIds: string[];
}
export interface TradingRewardCampaignInfoSDKType {
  /** number of seconds of the duration of each campaign */
  campaign_duration_seconds: Long;
  /** the trading fee quote denoms which will be counted for the rewards */

  quote_denoms: string[];
  /** the optional boost info for markets */

  trading_reward_boost_info: TradingRewardCampaignBoostInfoSDKType;
  /** the marketIDs which are disqualified from being rewarded */

  disqualified_market_ids: string[];
}
export interface FeeDiscountTierInfo {
  makerDiscountRate: string;
  takerDiscountRate: string;
  stakedAmount: string;
  volume: string;
}
export interface FeeDiscountTierInfoSDKType {
  maker_discount_rate: string;
  taker_discount_rate: string;
  staked_amount: string;
  volume: string;
}
export interface FeeDiscountSchedule {
  bucketCount: Long;
  bucketDuration: Long;
  /** the trading fee quote denoms which will be counted for the fee paid contribution */

  quoteDenoms: string[];
  /** the fee discount tiers */

  tierInfos: FeeDiscountTierInfo[];
  /** the marketIDs which are disqualified from contributing to the fee paid amount */

  disqualifiedMarketIds: string[];
}
export interface FeeDiscountScheduleSDKType {
  bucket_count: Long;
  bucket_duration: Long;
  /** the trading fee quote denoms which will be counted for the fee paid contribution */

  quote_denoms: string[];
  /** the fee discount tiers */

  tier_infos: FeeDiscountTierInfoSDKType[];
  /** the marketIDs which are disqualified from contributing to the fee paid amount */

  disqualified_market_ids: string[];
}
export interface FeeDiscountTierTTL {
  tier: Long;
  ttlTimestamp: Long;
}
export interface FeeDiscountTierTTLSDKType {
  tier: Long;
  ttl_timestamp: Long;
}
export interface AccountRewards {
  account: string;
  rewards: Coin[];
}
export interface AccountRewardsSDKType {
  account: string;
  rewards: CoinSDKType[];
}
export interface TradeRecords {
  marketId: string;
  latestTradeRecords: TradeRecord[];
}
export interface TradeRecordsSDKType {
  market_id: string;
  latest_trade_records: TradeRecordSDKType[];
}
export interface SubaccountIDs {
  subaccountIds: Uint8Array[];
}
export interface SubaccountIDsSDKType {
  subaccount_ids: Uint8Array[];
}
export interface TradeRecord {
  timestamp: Long;
  price: string;
  quantity: string;
}
export interface TradeRecordSDKType {
  timestamp: Long;
  price: string;
  quantity: string;
}

function createBaseParams(): Params {
  return {
    spotMarketInstantListingFee: undefined,
    derivativeMarketInstantListingFee: undefined,
    defaultSpotMakerFeeRate: "",
    defaultSpotTakerFeeRate: "",
    defaultDerivativeMakerFeeRate: "",
    defaultDerivativeTakerFeeRate: "",
    defaultInitialMarginRatio: "",
    defaultMaintenanceMarginRatio: "",
    defaultFundingInterval: Long.ZERO,
    fundingMultiple: Long.ZERO,
    relayerFeeShareRate: "",
    defaultHourlyFundingRateCap: "",
    defaultHourlyInterestRate: "",
    maxDerivativeOrderSideCount: 0,
    injRewardStakedRequirementThreshold: "",
    tradingRewardsVestingDuration: Long.ZERO,
    liquidatorRewardShareRate: "",
    binaryOptionsMarketInstantListingFee: undefined
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.spotMarketInstantListingFee !== undefined) {
      Coin.encode(message.spotMarketInstantListingFee, writer.uint32(10).fork()).ldelim();
    }

    if (message.derivativeMarketInstantListingFee !== undefined) {
      Coin.encode(message.derivativeMarketInstantListingFee, writer.uint32(18).fork()).ldelim();
    }

    if (message.defaultSpotMakerFeeRate !== "") {
      writer.uint32(26).string(message.defaultSpotMakerFeeRate);
    }

    if (message.defaultSpotTakerFeeRate !== "") {
      writer.uint32(34).string(message.defaultSpotTakerFeeRate);
    }

    if (message.defaultDerivativeMakerFeeRate !== "") {
      writer.uint32(42).string(message.defaultDerivativeMakerFeeRate);
    }

    if (message.defaultDerivativeTakerFeeRate !== "") {
      writer.uint32(50).string(message.defaultDerivativeTakerFeeRate);
    }

    if (message.defaultInitialMarginRatio !== "") {
      writer.uint32(58).string(message.defaultInitialMarginRatio);
    }

    if (message.defaultMaintenanceMarginRatio !== "") {
      writer.uint32(66).string(message.defaultMaintenanceMarginRatio);
    }

    if (!message.defaultFundingInterval.isZero()) {
      writer.uint32(72).int64(message.defaultFundingInterval);
    }

    if (!message.fundingMultiple.isZero()) {
      writer.uint32(80).int64(message.fundingMultiple);
    }

    if (message.relayerFeeShareRate !== "") {
      writer.uint32(90).string(message.relayerFeeShareRate);
    }

    if (message.defaultHourlyFundingRateCap !== "") {
      writer.uint32(98).string(message.defaultHourlyFundingRateCap);
    }

    if (message.defaultHourlyInterestRate !== "") {
      writer.uint32(106).string(message.defaultHourlyInterestRate);
    }

    if (message.maxDerivativeOrderSideCount !== 0) {
      writer.uint32(112).uint32(message.maxDerivativeOrderSideCount);
    }

    if (message.injRewardStakedRequirementThreshold !== "") {
      writer.uint32(122).string(message.injRewardStakedRequirementThreshold);
    }

    if (!message.tradingRewardsVestingDuration.isZero()) {
      writer.uint32(128).int64(message.tradingRewardsVestingDuration);
    }

    if (message.liquidatorRewardShareRate !== "") {
      writer.uint32(138).string(message.liquidatorRewardShareRate);
    }

    if (message.binaryOptionsMarketInstantListingFee !== undefined) {
      Coin.encode(message.binaryOptionsMarketInstantListingFee, writer.uint32(146).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.spotMarketInstantListingFee = Coin.decode(reader, reader.uint32());
          break;

        case 2:
          message.derivativeMarketInstantListingFee = Coin.decode(reader, reader.uint32());
          break;

        case 3:
          message.defaultSpotMakerFeeRate = reader.string();
          break;

        case 4:
          message.defaultSpotTakerFeeRate = reader.string();
          break;

        case 5:
          message.defaultDerivativeMakerFeeRate = reader.string();
          break;

        case 6:
          message.defaultDerivativeTakerFeeRate = reader.string();
          break;

        case 7:
          message.defaultInitialMarginRatio = reader.string();
          break;

        case 8:
          message.defaultMaintenanceMarginRatio = reader.string();
          break;

        case 9:
          message.defaultFundingInterval = (reader.int64() as Long);
          break;

        case 10:
          message.fundingMultiple = (reader.int64() as Long);
          break;

        case 11:
          message.relayerFeeShareRate = reader.string();
          break;

        case 12:
          message.defaultHourlyFundingRateCap = reader.string();
          break;

        case 13:
          message.defaultHourlyInterestRate = reader.string();
          break;

        case 14:
          message.maxDerivativeOrderSideCount = reader.uint32();
          break;

        case 15:
          message.injRewardStakedRequirementThreshold = reader.string();
          break;

        case 16:
          message.tradingRewardsVestingDuration = (reader.int64() as Long);
          break;

        case 17:
          message.liquidatorRewardShareRate = reader.string();
          break;

        case 18:
          message.binaryOptionsMarketInstantListingFee = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.spotMarketInstantListingFee = object.spotMarketInstantListingFee !== undefined && object.spotMarketInstantListingFee !== null ? Coin.fromPartial(object.spotMarketInstantListingFee) : undefined;
    message.derivativeMarketInstantListingFee = object.derivativeMarketInstantListingFee !== undefined && object.derivativeMarketInstantListingFee !== null ? Coin.fromPartial(object.derivativeMarketInstantListingFee) : undefined;
    message.defaultSpotMakerFeeRate = object.defaultSpotMakerFeeRate ?? "";
    message.defaultSpotTakerFeeRate = object.defaultSpotTakerFeeRate ?? "";
    message.defaultDerivativeMakerFeeRate = object.defaultDerivativeMakerFeeRate ?? "";
    message.defaultDerivativeTakerFeeRate = object.defaultDerivativeTakerFeeRate ?? "";
    message.defaultInitialMarginRatio = object.defaultInitialMarginRatio ?? "";
    message.defaultMaintenanceMarginRatio = object.defaultMaintenanceMarginRatio ?? "";
    message.defaultFundingInterval = object.defaultFundingInterval !== undefined && object.defaultFundingInterval !== null ? Long.fromValue(object.defaultFundingInterval) : Long.ZERO;
    message.fundingMultiple = object.fundingMultiple !== undefined && object.fundingMultiple !== null ? Long.fromValue(object.fundingMultiple) : Long.ZERO;
    message.relayerFeeShareRate = object.relayerFeeShareRate ?? "";
    message.defaultHourlyFundingRateCap = object.defaultHourlyFundingRateCap ?? "";
    message.defaultHourlyInterestRate = object.defaultHourlyInterestRate ?? "";
    message.maxDerivativeOrderSideCount = object.maxDerivativeOrderSideCount ?? 0;
    message.injRewardStakedRequirementThreshold = object.injRewardStakedRequirementThreshold ?? "";
    message.tradingRewardsVestingDuration = object.tradingRewardsVestingDuration !== undefined && object.tradingRewardsVestingDuration !== null ? Long.fromValue(object.tradingRewardsVestingDuration) : Long.ZERO;
    message.liquidatorRewardShareRate = object.liquidatorRewardShareRate ?? "";
    message.binaryOptionsMarketInstantListingFee = object.binaryOptionsMarketInstantListingFee !== undefined && object.binaryOptionsMarketInstantListingFee !== null ? Coin.fromPartial(object.binaryOptionsMarketInstantListingFee) : undefined;
    return message;
  }

};

function createBaseDerivativeMarket(): DerivativeMarket {
  return {
    ticker: "",
    oracleBase: "",
    oracleQuote: "",
    oracleType: 0,
    oracleScaleFactor: 0,
    quoteDenom: "",
    marketId: "",
    initialMarginRatio: "",
    maintenanceMarginRatio: "",
    makerFeeRate: "",
    takerFeeRate: "",
    relayerFeeShareRate: "",
    isPerpetual: false,
    status: 0,
    minPriceTickSize: "",
    minQuantityTickSize: ""
  };
}

export const DerivativeMarket = {
  encode(message: DerivativeMarket, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ticker !== "") {
      writer.uint32(10).string(message.ticker);
    }

    if (message.oracleBase !== "") {
      writer.uint32(18).string(message.oracleBase);
    }

    if (message.oracleQuote !== "") {
      writer.uint32(26).string(message.oracleQuote);
    }

    if (message.oracleType !== 0) {
      writer.uint32(32).int32(message.oracleType);
    }

    if (message.oracleScaleFactor !== 0) {
      writer.uint32(40).uint32(message.oracleScaleFactor);
    }

    if (message.quoteDenom !== "") {
      writer.uint32(50).string(message.quoteDenom);
    }

    if (message.marketId !== "") {
      writer.uint32(58).string(message.marketId);
    }

    if (message.initialMarginRatio !== "") {
      writer.uint32(66).string(message.initialMarginRatio);
    }

    if (message.maintenanceMarginRatio !== "") {
      writer.uint32(74).string(message.maintenanceMarginRatio);
    }

    if (message.makerFeeRate !== "") {
      writer.uint32(82).string(message.makerFeeRate);
    }

    if (message.takerFeeRate !== "") {
      writer.uint32(90).string(message.takerFeeRate);
    }

    if (message.relayerFeeShareRate !== "") {
      writer.uint32(98).string(message.relayerFeeShareRate);
    }

    if (message.isPerpetual === true) {
      writer.uint32(104).bool(message.isPerpetual);
    }

    if (message.status !== 0) {
      writer.uint32(112).int32(message.status);
    }

    if (message.minPriceTickSize !== "") {
      writer.uint32(122).string(message.minPriceTickSize);
    }

    if (message.minQuantityTickSize !== "") {
      writer.uint32(130).string(message.minQuantityTickSize);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DerivativeMarket {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDerivativeMarket();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.ticker = reader.string();
          break;

        case 2:
          message.oracleBase = reader.string();
          break;

        case 3:
          message.oracleQuote = reader.string();
          break;

        case 4:
          message.oracleType = (reader.int32() as any);
          break;

        case 5:
          message.oracleScaleFactor = reader.uint32();
          break;

        case 6:
          message.quoteDenom = reader.string();
          break;

        case 7:
          message.marketId = reader.string();
          break;

        case 8:
          message.initialMarginRatio = reader.string();
          break;

        case 9:
          message.maintenanceMarginRatio = reader.string();
          break;

        case 10:
          message.makerFeeRate = reader.string();
          break;

        case 11:
          message.takerFeeRate = reader.string();
          break;

        case 12:
          message.relayerFeeShareRate = reader.string();
          break;

        case 13:
          message.isPerpetual = reader.bool();
          break;

        case 14:
          message.status = (reader.int32() as any);
          break;

        case 15:
          message.minPriceTickSize = reader.string();
          break;

        case 16:
          message.minQuantityTickSize = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<DerivativeMarket>): DerivativeMarket {
    const message = createBaseDerivativeMarket();
    message.ticker = object.ticker ?? "";
    message.oracleBase = object.oracleBase ?? "";
    message.oracleQuote = object.oracleQuote ?? "";
    message.oracleType = object.oracleType ?? 0;
    message.oracleScaleFactor = object.oracleScaleFactor ?? 0;
    message.quoteDenom = object.quoteDenom ?? "";
    message.marketId = object.marketId ?? "";
    message.initialMarginRatio = object.initialMarginRatio ?? "";
    message.maintenanceMarginRatio = object.maintenanceMarginRatio ?? "";
    message.makerFeeRate = object.makerFeeRate ?? "";
    message.takerFeeRate = object.takerFeeRate ?? "";
    message.relayerFeeShareRate = object.relayerFeeShareRate ?? "";
    message.isPerpetual = object.isPerpetual ?? false;
    message.status = object.status ?? 0;
    message.minPriceTickSize = object.minPriceTickSize ?? "";
    message.minQuantityTickSize = object.minQuantityTickSize ?? "";
    return message;
  }

};

function createBaseBinaryOptionsMarket(): BinaryOptionsMarket {
  return {
    ticker: "",
    oracleSymbol: "",
    oracleProvider: "",
    oracleType: 0,
    oracleScaleFactor: 0,
    expirationTimestamp: Long.ZERO,
    settlementTimestamp: Long.ZERO,
    admin: "",
    quoteDenom: "",
    marketId: "",
    makerFeeRate: "",
    takerFeeRate: "",
    relayerFeeShareRate: "",
    status: 0,
    minPriceTickSize: "",
    minQuantityTickSize: "",
    settlementPrice: undefined
  };
}

export const BinaryOptionsMarket = {
  encode(message: BinaryOptionsMarket, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ticker !== "") {
      writer.uint32(10).string(message.ticker);
    }

    if (message.oracleSymbol !== "") {
      writer.uint32(18).string(message.oracleSymbol);
    }

    if (message.oracleProvider !== "") {
      writer.uint32(26).string(message.oracleProvider);
    }

    if (message.oracleType !== 0) {
      writer.uint32(32).int32(message.oracleType);
    }

    if (message.oracleScaleFactor !== 0) {
      writer.uint32(40).uint32(message.oracleScaleFactor);
    }

    if (!message.expirationTimestamp.isZero()) {
      writer.uint32(48).int64(message.expirationTimestamp);
    }

    if (!message.settlementTimestamp.isZero()) {
      writer.uint32(56).int64(message.settlementTimestamp);
    }

    if (message.admin !== "") {
      writer.uint32(66).string(message.admin);
    }

    if (message.quoteDenom !== "") {
      writer.uint32(74).string(message.quoteDenom);
    }

    if (message.marketId !== "") {
      writer.uint32(82).string(message.marketId);
    }

    if (message.makerFeeRate !== "") {
      writer.uint32(90).string(message.makerFeeRate);
    }

    if (message.takerFeeRate !== "") {
      writer.uint32(98).string(message.takerFeeRate);
    }

    if (message.relayerFeeShareRate !== "") {
      writer.uint32(106).string(message.relayerFeeShareRate);
    }

    if (message.status !== 0) {
      writer.uint32(112).int32(message.status);
    }

    if (message.minPriceTickSize !== "") {
      writer.uint32(122).string(message.minPriceTickSize);
    }

    if (message.minQuantityTickSize !== "") {
      writer.uint32(130).string(message.minQuantityTickSize);
    }

    if (message.settlementPrice !== undefined) {
      writer.uint32(138).string(message.settlementPrice);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BinaryOptionsMarket {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBinaryOptionsMarket();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.ticker = reader.string();
          break;

        case 2:
          message.oracleSymbol = reader.string();
          break;

        case 3:
          message.oracleProvider = reader.string();
          break;

        case 4:
          message.oracleType = (reader.int32() as any);
          break;

        case 5:
          message.oracleScaleFactor = reader.uint32();
          break;

        case 6:
          message.expirationTimestamp = (reader.int64() as Long);
          break;

        case 7:
          message.settlementTimestamp = (reader.int64() as Long);
          break;

        case 8:
          message.admin = reader.string();
          break;

        case 9:
          message.quoteDenom = reader.string();
          break;

        case 10:
          message.marketId = reader.string();
          break;

        case 11:
          message.makerFeeRate = reader.string();
          break;

        case 12:
          message.takerFeeRate = reader.string();
          break;

        case 13:
          message.relayerFeeShareRate = reader.string();
          break;

        case 14:
          message.status = (reader.int32() as any);
          break;

        case 15:
          message.minPriceTickSize = reader.string();
          break;

        case 16:
          message.minQuantityTickSize = reader.string();
          break;

        case 17:
          message.settlementPrice = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<BinaryOptionsMarket>): BinaryOptionsMarket {
    const message = createBaseBinaryOptionsMarket();
    message.ticker = object.ticker ?? "";
    message.oracleSymbol = object.oracleSymbol ?? "";
    message.oracleProvider = object.oracleProvider ?? "";
    message.oracleType = object.oracleType ?? 0;
    message.oracleScaleFactor = object.oracleScaleFactor ?? 0;
    message.expirationTimestamp = object.expirationTimestamp !== undefined && object.expirationTimestamp !== null ? Long.fromValue(object.expirationTimestamp) : Long.ZERO;
    message.settlementTimestamp = object.settlementTimestamp !== undefined && object.settlementTimestamp !== null ? Long.fromValue(object.settlementTimestamp) : Long.ZERO;
    message.admin = object.admin ?? "";
    message.quoteDenom = object.quoteDenom ?? "";
    message.marketId = object.marketId ?? "";
    message.makerFeeRate = object.makerFeeRate ?? "";
    message.takerFeeRate = object.takerFeeRate ?? "";
    message.relayerFeeShareRate = object.relayerFeeShareRate ?? "";
    message.status = object.status ?? 0;
    message.minPriceTickSize = object.minPriceTickSize ?? "";
    message.minQuantityTickSize = object.minQuantityTickSize ?? "";
    message.settlementPrice = object.settlementPrice ?? undefined;
    return message;
  }

};

function createBaseExpiryFuturesMarketInfo(): ExpiryFuturesMarketInfo {
  return {
    marketId: "",
    expirationTimestamp: Long.ZERO,
    twapStartTimestamp: Long.ZERO,
    expirationTwapStartPriceCumulative: "",
    settlementPrice: ""
  };
}

export const ExpiryFuturesMarketInfo = {
  encode(message: ExpiryFuturesMarketInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }

    if (!message.expirationTimestamp.isZero()) {
      writer.uint32(16).int64(message.expirationTimestamp);
    }

    if (!message.twapStartTimestamp.isZero()) {
      writer.uint32(24).int64(message.twapStartTimestamp);
    }

    if (message.expirationTwapStartPriceCumulative !== "") {
      writer.uint32(34).string(message.expirationTwapStartPriceCumulative);
    }

    if (message.settlementPrice !== "") {
      writer.uint32(42).string(message.settlementPrice);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExpiryFuturesMarketInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExpiryFuturesMarketInfo();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;

        case 2:
          message.expirationTimestamp = (reader.int64() as Long);
          break;

        case 3:
          message.twapStartTimestamp = (reader.int64() as Long);
          break;

        case 4:
          message.expirationTwapStartPriceCumulative = reader.string();
          break;

        case 5:
          message.settlementPrice = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<ExpiryFuturesMarketInfo>): ExpiryFuturesMarketInfo {
    const message = createBaseExpiryFuturesMarketInfo();
    message.marketId = object.marketId ?? "";
    message.expirationTimestamp = object.expirationTimestamp !== undefined && object.expirationTimestamp !== null ? Long.fromValue(object.expirationTimestamp) : Long.ZERO;
    message.twapStartTimestamp = object.twapStartTimestamp !== undefined && object.twapStartTimestamp !== null ? Long.fromValue(object.twapStartTimestamp) : Long.ZERO;
    message.expirationTwapStartPriceCumulative = object.expirationTwapStartPriceCumulative ?? "";
    message.settlementPrice = object.settlementPrice ?? "";
    return message;
  }

};

function createBasePerpetualMarketInfo(): PerpetualMarketInfo {
  return {
    marketId: "",
    hourlyFundingRateCap: "",
    hourlyInterestRate: "",
    nextFundingTimestamp: Long.ZERO,
    fundingInterval: Long.ZERO
  };
}

export const PerpetualMarketInfo = {
  encode(message: PerpetualMarketInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }

    if (message.hourlyFundingRateCap !== "") {
      writer.uint32(18).string(message.hourlyFundingRateCap);
    }

    if (message.hourlyInterestRate !== "") {
      writer.uint32(26).string(message.hourlyInterestRate);
    }

    if (!message.nextFundingTimestamp.isZero()) {
      writer.uint32(32).int64(message.nextFundingTimestamp);
    }

    if (!message.fundingInterval.isZero()) {
      writer.uint32(40).int64(message.fundingInterval);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PerpetualMarketInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePerpetualMarketInfo();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;

        case 2:
          message.hourlyFundingRateCap = reader.string();
          break;

        case 3:
          message.hourlyInterestRate = reader.string();
          break;

        case 4:
          message.nextFundingTimestamp = (reader.int64() as Long);
          break;

        case 5:
          message.fundingInterval = (reader.int64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<PerpetualMarketInfo>): PerpetualMarketInfo {
    const message = createBasePerpetualMarketInfo();
    message.marketId = object.marketId ?? "";
    message.hourlyFundingRateCap = object.hourlyFundingRateCap ?? "";
    message.hourlyInterestRate = object.hourlyInterestRate ?? "";
    message.nextFundingTimestamp = object.nextFundingTimestamp !== undefined && object.nextFundingTimestamp !== null ? Long.fromValue(object.nextFundingTimestamp) : Long.ZERO;
    message.fundingInterval = object.fundingInterval !== undefined && object.fundingInterval !== null ? Long.fromValue(object.fundingInterval) : Long.ZERO;
    return message;
  }

};

function createBasePerpetualMarketFunding(): PerpetualMarketFunding {
  return {
    cumulativeFunding: "",
    cumulativePrice: "",
    lastTimestamp: Long.ZERO
  };
}

export const PerpetualMarketFunding = {
  encode(message: PerpetualMarketFunding, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cumulativeFunding !== "") {
      writer.uint32(10).string(message.cumulativeFunding);
    }

    if (message.cumulativePrice !== "") {
      writer.uint32(18).string(message.cumulativePrice);
    }

    if (!message.lastTimestamp.isZero()) {
      writer.uint32(24).int64(message.lastTimestamp);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PerpetualMarketFunding {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePerpetualMarketFunding();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.cumulativeFunding = reader.string();
          break;

        case 2:
          message.cumulativePrice = reader.string();
          break;

        case 3:
          message.lastTimestamp = (reader.int64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<PerpetualMarketFunding>): PerpetualMarketFunding {
    const message = createBasePerpetualMarketFunding();
    message.cumulativeFunding = object.cumulativeFunding ?? "";
    message.cumulativePrice = object.cumulativePrice ?? "";
    message.lastTimestamp = object.lastTimestamp !== undefined && object.lastTimestamp !== null ? Long.fromValue(object.lastTimestamp) : Long.ZERO;
    return message;
  }

};

function createBaseDerivativeMarketSettlementInfo(): DerivativeMarketSettlementInfo {
  return {
    marketId: "",
    settlementPrice: "",
    startingDeficit: ""
  };
}

export const DerivativeMarketSettlementInfo = {
  encode(message: DerivativeMarketSettlementInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }

    if (message.settlementPrice !== "") {
      writer.uint32(18).string(message.settlementPrice);
    }

    if (message.startingDeficit !== "") {
      writer.uint32(26).string(message.startingDeficit);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DerivativeMarketSettlementInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDerivativeMarketSettlementInfo();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;

        case 2:
          message.settlementPrice = reader.string();
          break;

        case 3:
          message.startingDeficit = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<DerivativeMarketSettlementInfo>): DerivativeMarketSettlementInfo {
    const message = createBaseDerivativeMarketSettlementInfo();
    message.marketId = object.marketId ?? "";
    message.settlementPrice = object.settlementPrice ?? "";
    message.startingDeficit = object.startingDeficit ?? "";
    return message;
  }

};

function createBaseNextFundingTimestamp(): NextFundingTimestamp {
  return {
    nextTimestamp: Long.ZERO
  };
}

export const NextFundingTimestamp = {
  encode(message: NextFundingTimestamp, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.nextTimestamp.isZero()) {
      writer.uint32(8).int64(message.nextTimestamp);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NextFundingTimestamp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNextFundingTimestamp();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.nextTimestamp = (reader.int64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<NextFundingTimestamp>): NextFundingTimestamp {
    const message = createBaseNextFundingTimestamp();
    message.nextTimestamp = object.nextTimestamp !== undefined && object.nextTimestamp !== null ? Long.fromValue(object.nextTimestamp) : Long.ZERO;
    return message;
  }

};

function createBaseSpotMarket(): SpotMarket {
  return {
    ticker: "",
    baseDenom: "",
    quoteDenom: "",
    makerFeeRate: "",
    takerFeeRate: "",
    relayerFeeShareRate: "",
    marketId: "",
    status: 0,
    minPriceTickSize: "",
    minQuantityTickSize: ""
  };
}

export const SpotMarket = {
  encode(message: SpotMarket, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ticker !== "") {
      writer.uint32(10).string(message.ticker);
    }

    if (message.baseDenom !== "") {
      writer.uint32(18).string(message.baseDenom);
    }

    if (message.quoteDenom !== "") {
      writer.uint32(26).string(message.quoteDenom);
    }

    if (message.makerFeeRate !== "") {
      writer.uint32(34).string(message.makerFeeRate);
    }

    if (message.takerFeeRate !== "") {
      writer.uint32(42).string(message.takerFeeRate);
    }

    if (message.relayerFeeShareRate !== "") {
      writer.uint32(50).string(message.relayerFeeShareRate);
    }

    if (message.marketId !== "") {
      writer.uint32(58).string(message.marketId);
    }

    if (message.status !== 0) {
      writer.uint32(64).int32(message.status);
    }

    if (message.minPriceTickSize !== "") {
      writer.uint32(74).string(message.minPriceTickSize);
    }

    if (message.minQuantityTickSize !== "") {
      writer.uint32(82).string(message.minQuantityTickSize);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SpotMarket {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSpotMarket();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.ticker = reader.string();
          break;

        case 2:
          message.baseDenom = reader.string();
          break;

        case 3:
          message.quoteDenom = reader.string();
          break;

        case 4:
          message.makerFeeRate = reader.string();
          break;

        case 5:
          message.takerFeeRate = reader.string();
          break;

        case 6:
          message.relayerFeeShareRate = reader.string();
          break;

        case 7:
          message.marketId = reader.string();
          break;

        case 8:
          message.status = (reader.int32() as any);
          break;

        case 9:
          message.minPriceTickSize = reader.string();
          break;

        case 10:
          message.minQuantityTickSize = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<SpotMarket>): SpotMarket {
    const message = createBaseSpotMarket();
    message.ticker = object.ticker ?? "";
    message.baseDenom = object.baseDenom ?? "";
    message.quoteDenom = object.quoteDenom ?? "";
    message.makerFeeRate = object.makerFeeRate ?? "";
    message.takerFeeRate = object.takerFeeRate ?? "";
    message.relayerFeeShareRate = object.relayerFeeShareRate ?? "";
    message.marketId = object.marketId ?? "";
    message.status = object.status ?? 0;
    message.minPriceTickSize = object.minPriceTickSize ?? "";
    message.minQuantityTickSize = object.minQuantityTickSize ?? "";
    return message;
  }

};

function createBaseDeposit(): Deposit {
  return {
    availableBalance: "",
    totalBalance: ""
  };
}

export const Deposit = {
  encode(message: Deposit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.availableBalance !== "") {
      writer.uint32(10).string(message.availableBalance);
    }

    if (message.totalBalance !== "") {
      writer.uint32(18).string(message.totalBalance);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Deposit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeposit();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.availableBalance = reader.string();
          break;

        case 2:
          message.totalBalance = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Deposit>): Deposit {
    const message = createBaseDeposit();
    message.availableBalance = object.availableBalance ?? "";
    message.totalBalance = object.totalBalance ?? "";
    return message;
  }

};

function createBaseSubaccountTradeNonce(): SubaccountTradeNonce {
  return {
    nonce: 0
  };
}

export const SubaccountTradeNonce = {
  encode(message: SubaccountTradeNonce, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nonce !== 0) {
      writer.uint32(8).uint32(message.nonce);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SubaccountTradeNonce {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubaccountTradeNonce();

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

  fromPartial(object: DeepPartial<SubaccountTradeNonce>): SubaccountTradeNonce {
    const message = createBaseSubaccountTradeNonce();
    message.nonce = object.nonce ?? 0;
    return message;
  }

};

function createBaseOrderInfo(): OrderInfo {
  return {
    subaccountId: "",
    feeRecipient: "",
    price: "",
    quantity: ""
  };
}

export const OrderInfo = {
  encode(message: OrderInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.subaccountId !== "") {
      writer.uint32(10).string(message.subaccountId);
    }

    if (message.feeRecipient !== "") {
      writer.uint32(18).string(message.feeRecipient);
    }

    if (message.price !== "") {
      writer.uint32(26).string(message.price);
    }

    if (message.quantity !== "") {
      writer.uint32(34).string(message.quantity);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OrderInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrderInfo();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.subaccountId = reader.string();
          break;

        case 2:
          message.feeRecipient = reader.string();
          break;

        case 3:
          message.price = reader.string();
          break;

        case 4:
          message.quantity = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<OrderInfo>): OrderInfo {
    const message = createBaseOrderInfo();
    message.subaccountId = object.subaccountId ?? "";
    message.feeRecipient = object.feeRecipient ?? "";
    message.price = object.price ?? "";
    message.quantity = object.quantity ?? "";
    return message;
  }

};

function createBaseSpotOrder(): SpotOrder {
  return {
    marketId: "",
    orderInfo: undefined,
    orderType: 0,
    triggerPrice: undefined
  };
}

export const SpotOrder = {
  encode(message: SpotOrder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }

    if (message.orderInfo !== undefined) {
      OrderInfo.encode(message.orderInfo, writer.uint32(18).fork()).ldelim();
    }

    if (message.orderType !== 0) {
      writer.uint32(24).int32(message.orderType);
    }

    if (message.triggerPrice !== undefined) {
      writer.uint32(34).string(message.triggerPrice);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SpotOrder {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSpotOrder();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;

        case 2:
          message.orderInfo = OrderInfo.decode(reader, reader.uint32());
          break;

        case 3:
          message.orderType = (reader.int32() as any);
          break;

        case 4:
          message.triggerPrice = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<SpotOrder>): SpotOrder {
    const message = createBaseSpotOrder();
    message.marketId = object.marketId ?? "";
    message.orderInfo = object.orderInfo !== undefined && object.orderInfo !== null ? OrderInfo.fromPartial(object.orderInfo) : undefined;
    message.orderType = object.orderType ?? 0;
    message.triggerPrice = object.triggerPrice ?? undefined;
    return message;
  }

};

function createBaseSpotLimitOrder(): SpotLimitOrder {
  return {
    orderInfo: undefined,
    orderType: 0,
    fillable: "",
    triggerPrice: undefined,
    orderHash: new Uint8Array()
  };
}

export const SpotLimitOrder = {
  encode(message: SpotLimitOrder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.orderInfo !== undefined) {
      OrderInfo.encode(message.orderInfo, writer.uint32(10).fork()).ldelim();
    }

    if (message.orderType !== 0) {
      writer.uint32(16).int32(message.orderType);
    }

    if (message.fillable !== "") {
      writer.uint32(26).string(message.fillable);
    }

    if (message.triggerPrice !== undefined) {
      writer.uint32(34).string(message.triggerPrice);
    }

    if (message.orderHash.length !== 0) {
      writer.uint32(42).bytes(message.orderHash);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SpotLimitOrder {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSpotLimitOrder();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.orderInfo = OrderInfo.decode(reader, reader.uint32());
          break;

        case 2:
          message.orderType = (reader.int32() as any);
          break;

        case 3:
          message.fillable = reader.string();
          break;

        case 4:
          message.triggerPrice = reader.string();
          break;

        case 5:
          message.orderHash = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<SpotLimitOrder>): SpotLimitOrder {
    const message = createBaseSpotLimitOrder();
    message.orderInfo = object.orderInfo !== undefined && object.orderInfo !== null ? OrderInfo.fromPartial(object.orderInfo) : undefined;
    message.orderType = object.orderType ?? 0;
    message.fillable = object.fillable ?? "";
    message.triggerPrice = object.triggerPrice ?? undefined;
    message.orderHash = object.orderHash ?? new Uint8Array();
    return message;
  }

};

function createBaseSpotMarketOrder(): SpotMarketOrder {
  return {
    orderInfo: undefined,
    balanceHold: "",
    orderHash: new Uint8Array(),
    orderType: 0,
    triggerPrice: undefined
  };
}

export const SpotMarketOrder = {
  encode(message: SpotMarketOrder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.orderInfo !== undefined) {
      OrderInfo.encode(message.orderInfo, writer.uint32(10).fork()).ldelim();
    }

    if (message.balanceHold !== "") {
      writer.uint32(18).string(message.balanceHold);
    }

    if (message.orderHash.length !== 0) {
      writer.uint32(26).bytes(message.orderHash);
    }

    if (message.orderType !== 0) {
      writer.uint32(32).int32(message.orderType);
    }

    if (message.triggerPrice !== undefined) {
      writer.uint32(42).string(message.triggerPrice);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SpotMarketOrder {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSpotMarketOrder();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.orderInfo = OrderInfo.decode(reader, reader.uint32());
          break;

        case 2:
          message.balanceHold = reader.string();
          break;

        case 3:
          message.orderHash = reader.bytes();
          break;

        case 4:
          message.orderType = (reader.int32() as any);
          break;

        case 5:
          message.triggerPrice = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<SpotMarketOrder>): SpotMarketOrder {
    const message = createBaseSpotMarketOrder();
    message.orderInfo = object.orderInfo !== undefined && object.orderInfo !== null ? OrderInfo.fromPartial(object.orderInfo) : undefined;
    message.balanceHold = object.balanceHold ?? "";
    message.orderHash = object.orderHash ?? new Uint8Array();
    message.orderType = object.orderType ?? 0;
    message.triggerPrice = object.triggerPrice ?? undefined;
    return message;
  }

};

function createBaseDerivativeOrder(): DerivativeOrder {
  return {
    marketId: "",
    orderInfo: undefined,
    orderType: 0,
    margin: "",
    triggerPrice: undefined
  };
}

export const DerivativeOrder = {
  encode(message: DerivativeOrder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }

    if (message.orderInfo !== undefined) {
      OrderInfo.encode(message.orderInfo, writer.uint32(18).fork()).ldelim();
    }

    if (message.orderType !== 0) {
      writer.uint32(24).int32(message.orderType);
    }

    if (message.margin !== "") {
      writer.uint32(34).string(message.margin);
    }

    if (message.triggerPrice !== undefined) {
      writer.uint32(42).string(message.triggerPrice);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DerivativeOrder {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDerivativeOrder();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;

        case 2:
          message.orderInfo = OrderInfo.decode(reader, reader.uint32());
          break;

        case 3:
          message.orderType = (reader.int32() as any);
          break;

        case 4:
          message.margin = reader.string();
          break;

        case 5:
          message.triggerPrice = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<DerivativeOrder>): DerivativeOrder {
    const message = createBaseDerivativeOrder();
    message.marketId = object.marketId ?? "";
    message.orderInfo = object.orderInfo !== undefined && object.orderInfo !== null ? OrderInfo.fromPartial(object.orderInfo) : undefined;
    message.orderType = object.orderType ?? 0;
    message.margin = object.margin ?? "";
    message.triggerPrice = object.triggerPrice ?? undefined;
    return message;
  }

};

function createBaseSubaccountOrderbookMetadata(): SubaccountOrderbookMetadata {
  return {
    vanillaLimitOrderCount: 0,
    reduceOnlyLimitOrderCount: 0,
    aggregateReduceOnlyQuantity: "",
    aggregateVanillaQuantity: "",
    vanillaConditionalOrderCount: 0,
    reduceOnlyConditionalOrderCount: 0
  };
}

export const SubaccountOrderbookMetadata = {
  encode(message: SubaccountOrderbookMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.vanillaLimitOrderCount !== 0) {
      writer.uint32(8).uint32(message.vanillaLimitOrderCount);
    }

    if (message.reduceOnlyLimitOrderCount !== 0) {
      writer.uint32(16).uint32(message.reduceOnlyLimitOrderCount);
    }

    if (message.aggregateReduceOnlyQuantity !== "") {
      writer.uint32(26).string(message.aggregateReduceOnlyQuantity);
    }

    if (message.aggregateVanillaQuantity !== "") {
      writer.uint32(34).string(message.aggregateVanillaQuantity);
    }

    if (message.vanillaConditionalOrderCount !== 0) {
      writer.uint32(40).uint32(message.vanillaConditionalOrderCount);
    }

    if (message.reduceOnlyConditionalOrderCount !== 0) {
      writer.uint32(48).uint32(message.reduceOnlyConditionalOrderCount);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SubaccountOrderbookMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubaccountOrderbookMetadata();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.vanillaLimitOrderCount = reader.uint32();
          break;

        case 2:
          message.reduceOnlyLimitOrderCount = reader.uint32();
          break;

        case 3:
          message.aggregateReduceOnlyQuantity = reader.string();
          break;

        case 4:
          message.aggregateVanillaQuantity = reader.string();
          break;

        case 5:
          message.vanillaConditionalOrderCount = reader.uint32();
          break;

        case 6:
          message.reduceOnlyConditionalOrderCount = reader.uint32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<SubaccountOrderbookMetadata>): SubaccountOrderbookMetadata {
    const message = createBaseSubaccountOrderbookMetadata();
    message.vanillaLimitOrderCount = object.vanillaLimitOrderCount ?? 0;
    message.reduceOnlyLimitOrderCount = object.reduceOnlyLimitOrderCount ?? 0;
    message.aggregateReduceOnlyQuantity = object.aggregateReduceOnlyQuantity ?? "";
    message.aggregateVanillaQuantity = object.aggregateVanillaQuantity ?? "";
    message.vanillaConditionalOrderCount = object.vanillaConditionalOrderCount ?? 0;
    message.reduceOnlyConditionalOrderCount = object.reduceOnlyConditionalOrderCount ?? 0;
    return message;
  }

};

function createBaseSubaccountOrder(): SubaccountOrder {
  return {
    price: "",
    quantity: "",
    isReduceOnly: false
  };
}

export const SubaccountOrder = {
  encode(message: SubaccountOrder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.price !== "") {
      writer.uint32(10).string(message.price);
    }

    if (message.quantity !== "") {
      writer.uint32(18).string(message.quantity);
    }

    if (message.isReduceOnly === true) {
      writer.uint32(24).bool(message.isReduceOnly);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SubaccountOrder {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubaccountOrder();

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
          message.isReduceOnly = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<SubaccountOrder>): SubaccountOrder {
    const message = createBaseSubaccountOrder();
    message.price = object.price ?? "";
    message.quantity = object.quantity ?? "";
    message.isReduceOnly = object.isReduceOnly ?? false;
    return message;
  }

};

function createBaseSubaccountOrderData(): SubaccountOrderData {
  return {
    order: undefined,
    orderHash: new Uint8Array()
  };
}

export const SubaccountOrderData = {
  encode(message: SubaccountOrderData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.order !== undefined) {
      SubaccountOrder.encode(message.order, writer.uint32(10).fork()).ldelim();
    }

    if (message.orderHash.length !== 0) {
      writer.uint32(18).bytes(message.orderHash);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SubaccountOrderData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubaccountOrderData();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.order = SubaccountOrder.decode(reader, reader.uint32());
          break;

        case 2:
          message.orderHash = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<SubaccountOrderData>): SubaccountOrderData {
    const message = createBaseSubaccountOrderData();
    message.order = object.order !== undefined && object.order !== null ? SubaccountOrder.fromPartial(object.order) : undefined;
    message.orderHash = object.orderHash ?? new Uint8Array();
    return message;
  }

};

function createBaseDerivativeLimitOrder(): DerivativeLimitOrder {
  return {
    orderInfo: undefined,
    orderType: 0,
    margin: "",
    fillable: "",
    triggerPrice: undefined,
    orderHash: new Uint8Array()
  };
}

export const DerivativeLimitOrder = {
  encode(message: DerivativeLimitOrder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.orderInfo !== undefined) {
      OrderInfo.encode(message.orderInfo, writer.uint32(10).fork()).ldelim();
    }

    if (message.orderType !== 0) {
      writer.uint32(16).int32(message.orderType);
    }

    if (message.margin !== "") {
      writer.uint32(26).string(message.margin);
    }

    if (message.fillable !== "") {
      writer.uint32(34).string(message.fillable);
    }

    if (message.triggerPrice !== undefined) {
      writer.uint32(42).string(message.triggerPrice);
    }

    if (message.orderHash.length !== 0) {
      writer.uint32(50).bytes(message.orderHash);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DerivativeLimitOrder {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDerivativeLimitOrder();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.orderInfo = OrderInfo.decode(reader, reader.uint32());
          break;

        case 2:
          message.orderType = (reader.int32() as any);
          break;

        case 3:
          message.margin = reader.string();
          break;

        case 4:
          message.fillable = reader.string();
          break;

        case 5:
          message.triggerPrice = reader.string();
          break;

        case 6:
          message.orderHash = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<DerivativeLimitOrder>): DerivativeLimitOrder {
    const message = createBaseDerivativeLimitOrder();
    message.orderInfo = object.orderInfo !== undefined && object.orderInfo !== null ? OrderInfo.fromPartial(object.orderInfo) : undefined;
    message.orderType = object.orderType ?? 0;
    message.margin = object.margin ?? "";
    message.fillable = object.fillable ?? "";
    message.triggerPrice = object.triggerPrice ?? undefined;
    message.orderHash = object.orderHash ?? new Uint8Array();
    return message;
  }

};

function createBaseDerivativeMarketOrder(): DerivativeMarketOrder {
  return {
    orderInfo: undefined,
    orderType: 0,
    margin: "",
    marginHold: "",
    triggerPrice: undefined,
    orderHash: new Uint8Array()
  };
}

export const DerivativeMarketOrder = {
  encode(message: DerivativeMarketOrder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.orderInfo !== undefined) {
      OrderInfo.encode(message.orderInfo, writer.uint32(10).fork()).ldelim();
    }

    if (message.orderType !== 0) {
      writer.uint32(16).int32(message.orderType);
    }

    if (message.margin !== "") {
      writer.uint32(26).string(message.margin);
    }

    if (message.marginHold !== "") {
      writer.uint32(34).string(message.marginHold);
    }

    if (message.triggerPrice !== undefined) {
      writer.uint32(42).string(message.triggerPrice);
    }

    if (message.orderHash.length !== 0) {
      writer.uint32(50).bytes(message.orderHash);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DerivativeMarketOrder {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDerivativeMarketOrder();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.orderInfo = OrderInfo.decode(reader, reader.uint32());
          break;

        case 2:
          message.orderType = (reader.int32() as any);
          break;

        case 3:
          message.margin = reader.string();
          break;

        case 4:
          message.marginHold = reader.string();
          break;

        case 5:
          message.triggerPrice = reader.string();
          break;

        case 6:
          message.orderHash = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<DerivativeMarketOrder>): DerivativeMarketOrder {
    const message = createBaseDerivativeMarketOrder();
    message.orderInfo = object.orderInfo !== undefined && object.orderInfo !== null ? OrderInfo.fromPartial(object.orderInfo) : undefined;
    message.orderType = object.orderType ?? 0;
    message.margin = object.margin ?? "";
    message.marginHold = object.marginHold ?? "";
    message.triggerPrice = object.triggerPrice ?? undefined;
    message.orderHash = object.orderHash ?? new Uint8Array();
    return message;
  }

};

function createBasePosition(): Position {
  return {
    isLong: false,
    quantity: "",
    entryPrice: "",
    margin: "",
    cumulativeFundingEntry: ""
  };
}

export const Position = {
  encode(message: Position, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.isLong === true) {
      writer.uint32(8).bool(message.isLong);
    }

    if (message.quantity !== "") {
      writer.uint32(18).string(message.quantity);
    }

    if (message.entryPrice !== "") {
      writer.uint32(26).string(message.entryPrice);
    }

    if (message.margin !== "") {
      writer.uint32(34).string(message.margin);
    }

    if (message.cumulativeFundingEntry !== "") {
      writer.uint32(42).string(message.cumulativeFundingEntry);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Position {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePosition();

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
          message.margin = reader.string();
          break;

        case 5:
          message.cumulativeFundingEntry = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Position>): Position {
    const message = createBasePosition();
    message.isLong = object.isLong ?? false;
    message.quantity = object.quantity ?? "";
    message.entryPrice = object.entryPrice ?? "";
    message.margin = object.margin ?? "";
    message.cumulativeFundingEntry = object.cumulativeFundingEntry ?? "";
    return message;
  }

};

function createBaseMarketOrderIndicator(): MarketOrderIndicator {
  return {
    marketId: "",
    isBuy: false
  };
}

export const MarketOrderIndicator = {
  encode(message: MarketOrderIndicator, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }

    if (message.isBuy === true) {
      writer.uint32(16).bool(message.isBuy);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MarketOrderIndicator {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMarketOrderIndicator();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;

        case 2:
          message.isBuy = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MarketOrderIndicator>): MarketOrderIndicator {
    const message = createBaseMarketOrderIndicator();
    message.marketId = object.marketId ?? "";
    message.isBuy = object.isBuy ?? false;
    return message;
  }

};

function createBaseTradeLog(): TradeLog {
  return {
    quantity: "",
    price: "",
    subaccountId: new Uint8Array(),
    fee: "",
    orderHash: new Uint8Array(),
    feeRecipientAddress: undefined
  };
}

export const TradeLog = {
  encode(message: TradeLog, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.quantity !== "") {
      writer.uint32(10).string(message.quantity);
    }

    if (message.price !== "") {
      writer.uint32(18).string(message.price);
    }

    if (message.subaccountId.length !== 0) {
      writer.uint32(26).bytes(message.subaccountId);
    }

    if (message.fee !== "") {
      writer.uint32(34).string(message.fee);
    }

    if (message.orderHash.length !== 0) {
      writer.uint32(42).bytes(message.orderHash);
    }

    if (message.feeRecipientAddress !== undefined) {
      writer.uint32(50).bytes(message.feeRecipientAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TradeLog {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTradeLog();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.quantity = reader.string();
          break;

        case 2:
          message.price = reader.string();
          break;

        case 3:
          message.subaccountId = reader.bytes();
          break;

        case 4:
          message.fee = reader.string();
          break;

        case 5:
          message.orderHash = reader.bytes();
          break;

        case 6:
          message.feeRecipientAddress = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<TradeLog>): TradeLog {
    const message = createBaseTradeLog();
    message.quantity = object.quantity ?? "";
    message.price = object.price ?? "";
    message.subaccountId = object.subaccountId ?? new Uint8Array();
    message.fee = object.fee ?? "";
    message.orderHash = object.orderHash ?? new Uint8Array();
    message.feeRecipientAddress = object.feeRecipientAddress ?? undefined;
    return message;
  }

};

function createBasePositionDelta(): PositionDelta {
  return {
    isLong: false,
    executionQuantity: "",
    executionMargin: "",
    executionPrice: ""
  };
}

export const PositionDelta = {
  encode(message: PositionDelta, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.isLong === true) {
      writer.uint32(8).bool(message.isLong);
    }

    if (message.executionQuantity !== "") {
      writer.uint32(18).string(message.executionQuantity);
    }

    if (message.executionMargin !== "") {
      writer.uint32(26).string(message.executionMargin);
    }

    if (message.executionPrice !== "") {
      writer.uint32(34).string(message.executionPrice);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PositionDelta {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePositionDelta();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.isLong = reader.bool();
          break;

        case 2:
          message.executionQuantity = reader.string();
          break;

        case 3:
          message.executionMargin = reader.string();
          break;

        case 4:
          message.executionPrice = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<PositionDelta>): PositionDelta {
    const message = createBasePositionDelta();
    message.isLong = object.isLong ?? false;
    message.executionQuantity = object.executionQuantity ?? "";
    message.executionMargin = object.executionMargin ?? "";
    message.executionPrice = object.executionPrice ?? "";
    return message;
  }

};

function createBaseDerivativeTradeLog(): DerivativeTradeLog {
  return {
    subaccountId: new Uint8Array(),
    positionDelta: undefined,
    payout: "",
    fee: "",
    orderHash: new Uint8Array(),
    feeRecipientAddress: undefined
  };
}

export const DerivativeTradeLog = {
  encode(message: DerivativeTradeLog, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.subaccountId.length !== 0) {
      writer.uint32(10).bytes(message.subaccountId);
    }

    if (message.positionDelta !== undefined) {
      PositionDelta.encode(message.positionDelta, writer.uint32(18).fork()).ldelim();
    }

    if (message.payout !== "") {
      writer.uint32(26).string(message.payout);
    }

    if (message.fee !== "") {
      writer.uint32(34).string(message.fee);
    }

    if (message.orderHash.length !== 0) {
      writer.uint32(42).bytes(message.orderHash);
    }

    if (message.feeRecipientAddress !== undefined) {
      writer.uint32(50).bytes(message.feeRecipientAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DerivativeTradeLog {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDerivativeTradeLog();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.subaccountId = reader.bytes();
          break;

        case 2:
          message.positionDelta = PositionDelta.decode(reader, reader.uint32());
          break;

        case 3:
          message.payout = reader.string();
          break;

        case 4:
          message.fee = reader.string();
          break;

        case 5:
          message.orderHash = reader.bytes();
          break;

        case 6:
          message.feeRecipientAddress = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<DerivativeTradeLog>): DerivativeTradeLog {
    const message = createBaseDerivativeTradeLog();
    message.subaccountId = object.subaccountId ?? new Uint8Array();
    message.positionDelta = object.positionDelta !== undefined && object.positionDelta !== null ? PositionDelta.fromPartial(object.positionDelta) : undefined;
    message.payout = object.payout ?? "";
    message.fee = object.fee ?? "";
    message.orderHash = object.orderHash ?? new Uint8Array();
    message.feeRecipientAddress = object.feeRecipientAddress ?? undefined;
    return message;
  }

};

function createBaseSubaccountPosition(): SubaccountPosition {
  return {
    position: undefined,
    subaccountId: new Uint8Array()
  };
}

export const SubaccountPosition = {
  encode(message: SubaccountPosition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.position !== undefined) {
      Position.encode(message.position, writer.uint32(10).fork()).ldelim();
    }

    if (message.subaccountId.length !== 0) {
      writer.uint32(18).bytes(message.subaccountId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SubaccountPosition {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubaccountPosition();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.position = Position.decode(reader, reader.uint32());
          break;

        case 2:
          message.subaccountId = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<SubaccountPosition>): SubaccountPosition {
    const message = createBaseSubaccountPosition();
    message.position = object.position !== undefined && object.position !== null ? Position.fromPartial(object.position) : undefined;
    message.subaccountId = object.subaccountId ?? new Uint8Array();
    return message;
  }

};

function createBaseSubaccountDeposit(): SubaccountDeposit {
  return {
    subaccountId: new Uint8Array(),
    deposit: undefined
  };
}

export const SubaccountDeposit = {
  encode(message: SubaccountDeposit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.subaccountId.length !== 0) {
      writer.uint32(10).bytes(message.subaccountId);
    }

    if (message.deposit !== undefined) {
      Deposit.encode(message.deposit, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SubaccountDeposit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubaccountDeposit();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.subaccountId = reader.bytes();
          break;

        case 2:
          message.deposit = Deposit.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<SubaccountDeposit>): SubaccountDeposit {
    const message = createBaseSubaccountDeposit();
    message.subaccountId = object.subaccountId ?? new Uint8Array();
    message.deposit = object.deposit !== undefined && object.deposit !== null ? Deposit.fromPartial(object.deposit) : undefined;
    return message;
  }

};

function createBaseDepositUpdate(): DepositUpdate {
  return {
    denom: "",
    deposits: []
  };
}

export const DepositUpdate = {
  encode(message: DepositUpdate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    for (const v of message.deposits) {
      SubaccountDeposit.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DepositUpdate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDepositUpdate();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;

        case 2:
          message.deposits.push(SubaccountDeposit.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<DepositUpdate>): DepositUpdate {
    const message = createBaseDepositUpdate();
    message.denom = object.denom ?? "";
    message.deposits = object.deposits?.map(e => SubaccountDeposit.fromPartial(e)) || [];
    return message;
  }

};

function createBasePointsMultiplier(): PointsMultiplier {
  return {
    makerPointsMultiplier: "",
    takerPointsMultiplier: ""
  };
}

export const PointsMultiplier = {
  encode(message: PointsMultiplier, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.makerPointsMultiplier !== "") {
      writer.uint32(10).string(message.makerPointsMultiplier);
    }

    if (message.takerPointsMultiplier !== "") {
      writer.uint32(18).string(message.takerPointsMultiplier);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PointsMultiplier {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePointsMultiplier();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.makerPointsMultiplier = reader.string();
          break;

        case 2:
          message.takerPointsMultiplier = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<PointsMultiplier>): PointsMultiplier {
    const message = createBasePointsMultiplier();
    message.makerPointsMultiplier = object.makerPointsMultiplier ?? "";
    message.takerPointsMultiplier = object.takerPointsMultiplier ?? "";
    return message;
  }

};

function createBaseTradingRewardCampaignBoostInfo(): TradingRewardCampaignBoostInfo {
  return {
    boostedSpotMarketIds: [],
    spotMarketMultipliers: [],
    boostedDerivativeMarketIds: [],
    derivativeMarketMultipliers: []
  };
}

export const TradingRewardCampaignBoostInfo = {
  encode(message: TradingRewardCampaignBoostInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.boostedSpotMarketIds) {
      writer.uint32(10).string(v!);
    }

    for (const v of message.spotMarketMultipliers) {
      PointsMultiplier.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    for (const v of message.boostedDerivativeMarketIds) {
      writer.uint32(26).string(v!);
    }

    for (const v of message.derivativeMarketMultipliers) {
      PointsMultiplier.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TradingRewardCampaignBoostInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTradingRewardCampaignBoostInfo();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.boostedSpotMarketIds.push(reader.string());
          break;

        case 2:
          message.spotMarketMultipliers.push(PointsMultiplier.decode(reader, reader.uint32()));
          break;

        case 3:
          message.boostedDerivativeMarketIds.push(reader.string());
          break;

        case 4:
          message.derivativeMarketMultipliers.push(PointsMultiplier.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<TradingRewardCampaignBoostInfo>): TradingRewardCampaignBoostInfo {
    const message = createBaseTradingRewardCampaignBoostInfo();
    message.boostedSpotMarketIds = object.boostedSpotMarketIds?.map(e => e) || [];
    message.spotMarketMultipliers = object.spotMarketMultipliers?.map(e => PointsMultiplier.fromPartial(e)) || [];
    message.boostedDerivativeMarketIds = object.boostedDerivativeMarketIds?.map(e => e) || [];
    message.derivativeMarketMultipliers = object.derivativeMarketMultipliers?.map(e => PointsMultiplier.fromPartial(e)) || [];
    return message;
  }

};

function createBaseCampaignRewardPool(): CampaignRewardPool {
  return {
    startTimestamp: Long.ZERO,
    maxCampaignRewards: []
  };
}

export const CampaignRewardPool = {
  encode(message: CampaignRewardPool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.startTimestamp.isZero()) {
      writer.uint32(8).int64(message.startTimestamp);
    }

    for (const v of message.maxCampaignRewards) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CampaignRewardPool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCampaignRewardPool();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.startTimestamp = (reader.int64() as Long);
          break;

        case 2:
          message.maxCampaignRewards.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<CampaignRewardPool>): CampaignRewardPool {
    const message = createBaseCampaignRewardPool();
    message.startTimestamp = object.startTimestamp !== undefined && object.startTimestamp !== null ? Long.fromValue(object.startTimestamp) : Long.ZERO;
    message.maxCampaignRewards = object.maxCampaignRewards?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }

};

function createBaseTradingRewardCampaignInfo(): TradingRewardCampaignInfo {
  return {
    campaignDurationSeconds: Long.ZERO,
    quoteDenoms: [],
    tradingRewardBoostInfo: undefined,
    disqualifiedMarketIds: []
  };
}

export const TradingRewardCampaignInfo = {
  encode(message: TradingRewardCampaignInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.campaignDurationSeconds.isZero()) {
      writer.uint32(8).int64(message.campaignDurationSeconds);
    }

    for (const v of message.quoteDenoms) {
      writer.uint32(18).string(v!);
    }

    if (message.tradingRewardBoostInfo !== undefined) {
      TradingRewardCampaignBoostInfo.encode(message.tradingRewardBoostInfo, writer.uint32(26).fork()).ldelim();
    }

    for (const v of message.disqualifiedMarketIds) {
      writer.uint32(34).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TradingRewardCampaignInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTradingRewardCampaignInfo();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.campaignDurationSeconds = (reader.int64() as Long);
          break;

        case 2:
          message.quoteDenoms.push(reader.string());
          break;

        case 3:
          message.tradingRewardBoostInfo = TradingRewardCampaignBoostInfo.decode(reader, reader.uint32());
          break;

        case 4:
          message.disqualifiedMarketIds.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<TradingRewardCampaignInfo>): TradingRewardCampaignInfo {
    const message = createBaseTradingRewardCampaignInfo();
    message.campaignDurationSeconds = object.campaignDurationSeconds !== undefined && object.campaignDurationSeconds !== null ? Long.fromValue(object.campaignDurationSeconds) : Long.ZERO;
    message.quoteDenoms = object.quoteDenoms?.map(e => e) || [];
    message.tradingRewardBoostInfo = object.tradingRewardBoostInfo !== undefined && object.tradingRewardBoostInfo !== null ? TradingRewardCampaignBoostInfo.fromPartial(object.tradingRewardBoostInfo) : undefined;
    message.disqualifiedMarketIds = object.disqualifiedMarketIds?.map(e => e) || [];
    return message;
  }

};

function createBaseFeeDiscountTierInfo(): FeeDiscountTierInfo {
  return {
    makerDiscountRate: "",
    takerDiscountRate: "",
    stakedAmount: "",
    volume: ""
  };
}

export const FeeDiscountTierInfo = {
  encode(message: FeeDiscountTierInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.makerDiscountRate !== "") {
      writer.uint32(10).string(message.makerDiscountRate);
    }

    if (message.takerDiscountRate !== "") {
      writer.uint32(18).string(message.takerDiscountRate);
    }

    if (message.stakedAmount !== "") {
      writer.uint32(26).string(message.stakedAmount);
    }

    if (message.volume !== "") {
      writer.uint32(34).string(message.volume);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FeeDiscountTierInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeeDiscountTierInfo();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.makerDiscountRate = reader.string();
          break;

        case 2:
          message.takerDiscountRate = reader.string();
          break;

        case 3:
          message.stakedAmount = reader.string();
          break;

        case 4:
          message.volume = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<FeeDiscountTierInfo>): FeeDiscountTierInfo {
    const message = createBaseFeeDiscountTierInfo();
    message.makerDiscountRate = object.makerDiscountRate ?? "";
    message.takerDiscountRate = object.takerDiscountRate ?? "";
    message.stakedAmount = object.stakedAmount ?? "";
    message.volume = object.volume ?? "";
    return message;
  }

};

function createBaseFeeDiscountSchedule(): FeeDiscountSchedule {
  return {
    bucketCount: Long.UZERO,
    bucketDuration: Long.ZERO,
    quoteDenoms: [],
    tierInfos: [],
    disqualifiedMarketIds: []
  };
}

export const FeeDiscountSchedule = {
  encode(message: FeeDiscountSchedule, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.bucketCount.isZero()) {
      writer.uint32(8).uint64(message.bucketCount);
    }

    if (!message.bucketDuration.isZero()) {
      writer.uint32(16).int64(message.bucketDuration);
    }

    for (const v of message.quoteDenoms) {
      writer.uint32(26).string(v!);
    }

    for (const v of message.tierInfos) {
      FeeDiscountTierInfo.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    for (const v of message.disqualifiedMarketIds) {
      writer.uint32(42).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FeeDiscountSchedule {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeeDiscountSchedule();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.bucketCount = (reader.uint64() as Long);
          break;

        case 2:
          message.bucketDuration = (reader.int64() as Long);
          break;

        case 3:
          message.quoteDenoms.push(reader.string());
          break;

        case 4:
          message.tierInfos.push(FeeDiscountTierInfo.decode(reader, reader.uint32()));
          break;

        case 5:
          message.disqualifiedMarketIds.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<FeeDiscountSchedule>): FeeDiscountSchedule {
    const message = createBaseFeeDiscountSchedule();
    message.bucketCount = object.bucketCount !== undefined && object.bucketCount !== null ? Long.fromValue(object.bucketCount) : Long.UZERO;
    message.bucketDuration = object.bucketDuration !== undefined && object.bucketDuration !== null ? Long.fromValue(object.bucketDuration) : Long.ZERO;
    message.quoteDenoms = object.quoteDenoms?.map(e => e) || [];
    message.tierInfos = object.tierInfos?.map(e => FeeDiscountTierInfo.fromPartial(e)) || [];
    message.disqualifiedMarketIds = object.disqualifiedMarketIds?.map(e => e) || [];
    return message;
  }

};

function createBaseFeeDiscountTierTTL(): FeeDiscountTierTTL {
  return {
    tier: Long.UZERO,
    ttlTimestamp: Long.ZERO
  };
}

export const FeeDiscountTierTTL = {
  encode(message: FeeDiscountTierTTL, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.tier.isZero()) {
      writer.uint32(8).uint64(message.tier);
    }

    if (!message.ttlTimestamp.isZero()) {
      writer.uint32(16).int64(message.ttlTimestamp);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FeeDiscountTierTTL {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeeDiscountTierTTL();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.tier = (reader.uint64() as Long);
          break;

        case 2:
          message.ttlTimestamp = (reader.int64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<FeeDiscountTierTTL>): FeeDiscountTierTTL {
    const message = createBaseFeeDiscountTierTTL();
    message.tier = object.tier !== undefined && object.tier !== null ? Long.fromValue(object.tier) : Long.UZERO;
    message.ttlTimestamp = object.ttlTimestamp !== undefined && object.ttlTimestamp !== null ? Long.fromValue(object.ttlTimestamp) : Long.ZERO;
    return message;
  }

};

function createBaseAccountRewards(): AccountRewards {
  return {
    account: "",
    rewards: []
  };
}

export const AccountRewards = {
  encode(message: AccountRewards, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }

    for (const v of message.rewards) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccountRewards {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountRewards();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.account = reader.string();
          break;

        case 2:
          message.rewards.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<AccountRewards>): AccountRewards {
    const message = createBaseAccountRewards();
    message.account = object.account ?? "";
    message.rewards = object.rewards?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }

};

function createBaseTradeRecords(): TradeRecords {
  return {
    marketId: "",
    latestTradeRecords: []
  };
}

export const TradeRecords = {
  encode(message: TradeRecords, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }

    for (const v of message.latestTradeRecords) {
      TradeRecord.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TradeRecords {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTradeRecords();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;

        case 2:
          message.latestTradeRecords.push(TradeRecord.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<TradeRecords>): TradeRecords {
    const message = createBaseTradeRecords();
    message.marketId = object.marketId ?? "";
    message.latestTradeRecords = object.latestTradeRecords?.map(e => TradeRecord.fromPartial(e)) || [];
    return message;
  }

};

function createBaseSubaccountIDs(): SubaccountIDs {
  return {
    subaccountIds: []
  };
}

export const SubaccountIDs = {
  encode(message: SubaccountIDs, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.subaccountIds) {
      writer.uint32(10).bytes(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SubaccountIDs {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubaccountIDs();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.subaccountIds.push(reader.bytes());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<SubaccountIDs>): SubaccountIDs {
    const message = createBaseSubaccountIDs();
    message.subaccountIds = object.subaccountIds?.map(e => e) || [];
    return message;
  }

};

function createBaseTradeRecord(): TradeRecord {
  return {
    timestamp: Long.ZERO,
    price: "",
    quantity: ""
  };
}

export const TradeRecord = {
  encode(message: TradeRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.timestamp.isZero()) {
      writer.uint32(8).int64(message.timestamp);
    }

    if (message.price !== "") {
      writer.uint32(18).string(message.price);
    }

    if (message.quantity !== "") {
      writer.uint32(26).string(message.quantity);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TradeRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTradeRecord();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.timestamp = (reader.int64() as Long);
          break;

        case 2:
          message.price = reader.string();
          break;

        case 3:
          message.quantity = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<TradeRecord>): TradeRecord {
    const message = createBaseTradeRecord();
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? Long.fromValue(object.timestamp) : Long.ZERO;
    message.price = object.price ?? "";
    message.quantity = object.quantity ?? "";
    return message;
  }

};