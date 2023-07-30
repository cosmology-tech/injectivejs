import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { OracleType, OracleTypeSDKType } from "../../oracle/v1beta1/oracle";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@cosmology/helpers";
export declare enum MarketStatus {
    Unspecified = 0,
    Active = 1,
    Paused = 2,
    Demolished = 3,
    Expired = 4,
    UNRECOGNIZED = -1
}
export declare enum MarketStatusSDKType {
    Unspecified = 0,
    Active = 1,
    Paused = 2,
    Demolished = 3,
    Expired = 4,
    UNRECOGNIZED = -1
}
export declare function marketStatusFromJSON(object: any): MarketStatus;
export declare function marketStatusToJSON(object: MarketStatus): string;
export declare enum OrderType {
    UNSPECIFIED = 0,
    BUY = 1,
    SELL = 2,
    STOP_BUY = 3,
    STOP_SELL = 4,
    TAKE_BUY = 5,
    TAKE_SELL = 6,
    BUY_PO = 7,
    SELL_PO = 8,
    UNRECOGNIZED = -1
}
export declare enum OrderTypeSDKType {
    UNSPECIFIED = 0,
    BUY = 1,
    SELL = 2,
    STOP_BUY = 3,
    STOP_SELL = 4,
    TAKE_BUY = 5,
    TAKE_SELL = 6,
    BUY_PO = 7,
    SELL_PO = 8,
    UNRECOGNIZED = -1
}
export declare function orderTypeFromJSON(object: any): OrderType;
export declare function orderTypeToJSON(object: OrderType): string;
export declare enum ExecutionType {
    UnspecifiedExecutionType = 0,
    Market = 1,
    LimitFill = 2,
    LimitMatchRestingOrder = 3,
    LimitMatchNewOrder = 4,
    MarketLiquidation = 5,
    ExpiryMarketSettlement = 6,
    UNRECOGNIZED = -1
}
export declare enum ExecutionTypeSDKType {
    UnspecifiedExecutionType = 0,
    Market = 1,
    LimitFill = 2,
    LimitMatchRestingOrder = 3,
    LimitMatchNewOrder = 4,
    MarketLiquidation = 5,
    ExpiryMarketSettlement = 6,
    UNRECOGNIZED = -1
}
export declare function executionTypeFromJSON(object: any): ExecutionType;
export declare function executionTypeToJSON(object: ExecutionType): string;
export declare enum OrderMask {
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
    UNRECOGNIZED = -1
}
export declare enum OrderMaskSDKType {
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
    UNRECOGNIZED = -1
}
export declare function orderMaskFromJSON(object: any): OrderMask;
export declare function orderMaskToJSON(object: OrderMask): string;
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
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromPartial(object: DeepPartial<Params>): Params;
};
export declare const DerivativeMarket: {
    encode(message: DerivativeMarket, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DerivativeMarket;
    fromPartial(object: DeepPartial<DerivativeMarket>): DerivativeMarket;
};
export declare const BinaryOptionsMarket: {
    encode(message: BinaryOptionsMarket, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BinaryOptionsMarket;
    fromPartial(object: DeepPartial<BinaryOptionsMarket>): BinaryOptionsMarket;
};
export declare const ExpiryFuturesMarketInfo: {
    encode(message: ExpiryFuturesMarketInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ExpiryFuturesMarketInfo;
    fromPartial(object: DeepPartial<ExpiryFuturesMarketInfo>): ExpiryFuturesMarketInfo;
};
export declare const PerpetualMarketInfo: {
    encode(message: PerpetualMarketInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PerpetualMarketInfo;
    fromPartial(object: DeepPartial<PerpetualMarketInfo>): PerpetualMarketInfo;
};
export declare const PerpetualMarketFunding: {
    encode(message: PerpetualMarketFunding, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PerpetualMarketFunding;
    fromPartial(object: DeepPartial<PerpetualMarketFunding>): PerpetualMarketFunding;
};
export declare const DerivativeMarketSettlementInfo: {
    encode(message: DerivativeMarketSettlementInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DerivativeMarketSettlementInfo;
    fromPartial(object: DeepPartial<DerivativeMarketSettlementInfo>): DerivativeMarketSettlementInfo;
};
export declare const NextFundingTimestamp: {
    encode(message: NextFundingTimestamp, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): NextFundingTimestamp;
    fromPartial(object: DeepPartial<NextFundingTimestamp>): NextFundingTimestamp;
};
export declare const SpotMarket: {
    encode(message: SpotMarket, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SpotMarket;
    fromPartial(object: DeepPartial<SpotMarket>): SpotMarket;
};
export declare const Deposit: {
    encode(message: Deposit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Deposit;
    fromPartial(object: DeepPartial<Deposit>): Deposit;
};
export declare const SubaccountTradeNonce: {
    encode(message: SubaccountTradeNonce, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SubaccountTradeNonce;
    fromPartial(object: DeepPartial<SubaccountTradeNonce>): SubaccountTradeNonce;
};
export declare const OrderInfo: {
    encode(message: OrderInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OrderInfo;
    fromPartial(object: DeepPartial<OrderInfo>): OrderInfo;
};
export declare const SpotOrder: {
    encode(message: SpotOrder, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SpotOrder;
    fromPartial(object: DeepPartial<SpotOrder>): SpotOrder;
};
export declare const SpotLimitOrder: {
    encode(message: SpotLimitOrder, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SpotLimitOrder;
    fromPartial(object: DeepPartial<SpotLimitOrder>): SpotLimitOrder;
};
export declare const SpotMarketOrder: {
    encode(message: SpotMarketOrder, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SpotMarketOrder;
    fromPartial(object: DeepPartial<SpotMarketOrder>): SpotMarketOrder;
};
export declare const DerivativeOrder: {
    encode(message: DerivativeOrder, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DerivativeOrder;
    fromPartial(object: DeepPartial<DerivativeOrder>): DerivativeOrder;
};
export declare const SubaccountOrderbookMetadata: {
    encode(message: SubaccountOrderbookMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SubaccountOrderbookMetadata;
    fromPartial(object: DeepPartial<SubaccountOrderbookMetadata>): SubaccountOrderbookMetadata;
};
export declare const SubaccountOrder: {
    encode(message: SubaccountOrder, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SubaccountOrder;
    fromPartial(object: DeepPartial<SubaccountOrder>): SubaccountOrder;
};
export declare const SubaccountOrderData: {
    encode(message: SubaccountOrderData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SubaccountOrderData;
    fromPartial(object: DeepPartial<SubaccountOrderData>): SubaccountOrderData;
};
export declare const DerivativeLimitOrder: {
    encode(message: DerivativeLimitOrder, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DerivativeLimitOrder;
    fromPartial(object: DeepPartial<DerivativeLimitOrder>): DerivativeLimitOrder;
};
export declare const DerivativeMarketOrder: {
    encode(message: DerivativeMarketOrder, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DerivativeMarketOrder;
    fromPartial(object: DeepPartial<DerivativeMarketOrder>): DerivativeMarketOrder;
};
export declare const Position: {
    encode(message: Position, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Position;
    fromPartial(object: DeepPartial<Position>): Position;
};
export declare const MarketOrderIndicator: {
    encode(message: MarketOrderIndicator, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MarketOrderIndicator;
    fromPartial(object: DeepPartial<MarketOrderIndicator>): MarketOrderIndicator;
};
export declare const TradeLog: {
    encode(message: TradeLog, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TradeLog;
    fromPartial(object: DeepPartial<TradeLog>): TradeLog;
};
export declare const PositionDelta: {
    encode(message: PositionDelta, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PositionDelta;
    fromPartial(object: DeepPartial<PositionDelta>): PositionDelta;
};
export declare const DerivativeTradeLog: {
    encode(message: DerivativeTradeLog, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DerivativeTradeLog;
    fromPartial(object: DeepPartial<DerivativeTradeLog>): DerivativeTradeLog;
};
export declare const SubaccountPosition: {
    encode(message: SubaccountPosition, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SubaccountPosition;
    fromPartial(object: DeepPartial<SubaccountPosition>): SubaccountPosition;
};
export declare const SubaccountDeposit: {
    encode(message: SubaccountDeposit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SubaccountDeposit;
    fromPartial(object: DeepPartial<SubaccountDeposit>): SubaccountDeposit;
};
export declare const DepositUpdate: {
    encode(message: DepositUpdate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DepositUpdate;
    fromPartial(object: DeepPartial<DepositUpdate>): DepositUpdate;
};
export declare const PointsMultiplier: {
    encode(message: PointsMultiplier, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PointsMultiplier;
    fromPartial(object: DeepPartial<PointsMultiplier>): PointsMultiplier;
};
export declare const TradingRewardCampaignBoostInfo: {
    encode(message: TradingRewardCampaignBoostInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TradingRewardCampaignBoostInfo;
    fromPartial(object: DeepPartial<TradingRewardCampaignBoostInfo>): TradingRewardCampaignBoostInfo;
};
export declare const CampaignRewardPool: {
    encode(message: CampaignRewardPool, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CampaignRewardPool;
    fromPartial(object: DeepPartial<CampaignRewardPool>): CampaignRewardPool;
};
export declare const TradingRewardCampaignInfo: {
    encode(message: TradingRewardCampaignInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TradingRewardCampaignInfo;
    fromPartial(object: DeepPartial<TradingRewardCampaignInfo>): TradingRewardCampaignInfo;
};
export declare const FeeDiscountTierInfo: {
    encode(message: FeeDiscountTierInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FeeDiscountTierInfo;
    fromPartial(object: DeepPartial<FeeDiscountTierInfo>): FeeDiscountTierInfo;
};
export declare const FeeDiscountSchedule: {
    encode(message: FeeDiscountSchedule, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FeeDiscountSchedule;
    fromPartial(object: DeepPartial<FeeDiscountSchedule>): FeeDiscountSchedule;
};
export declare const FeeDiscountTierTTL: {
    encode(message: FeeDiscountTierTTL, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FeeDiscountTierTTL;
    fromPartial(object: DeepPartial<FeeDiscountTierTTL>): FeeDiscountTierTTL;
};
export declare const AccountRewards: {
    encode(message: AccountRewards, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AccountRewards;
    fromPartial(object: DeepPartial<AccountRewards>): AccountRewards;
};
export declare const TradeRecords: {
    encode(message: TradeRecords, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TradeRecords;
    fromPartial(object: DeepPartial<TradeRecords>): TradeRecords;
};
export declare const SubaccountIDs: {
    encode(message: SubaccountIDs, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SubaccountIDs;
    fromPartial(object: DeepPartial<SubaccountIDs>): SubaccountIDs;
};
export declare const TradeRecord: {
    encode(message: TradeRecord, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TradeRecord;
    fromPartial(object: DeepPartial<TradeRecord>): TradeRecord;
};
