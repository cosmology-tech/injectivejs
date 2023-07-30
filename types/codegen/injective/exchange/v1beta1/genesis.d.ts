import { Params, ParamsSDKType, SpotMarket, SpotMarketSDKType, DerivativeMarket, DerivativeMarketSDKType, PerpetualMarketInfo, PerpetualMarketInfoSDKType, DerivativeMarketSettlementInfo, DerivativeMarketSettlementInfoSDKType, TradingRewardCampaignInfo, TradingRewardCampaignInfoSDKType, CampaignRewardPool, CampaignRewardPoolSDKType, FeeDiscountSchedule, FeeDiscountScheduleSDKType, TradeRecords, TradeRecordsSDKType, BinaryOptionsMarket, BinaryOptionsMarketSDKType, FeeDiscountTierTTL, FeeDiscountTierTTLSDKType, SpotLimitOrder, SpotLimitOrderSDKType, DerivativeLimitOrder, DerivativeLimitOrderSDKType, DerivativeMarketOrder, DerivativeMarketOrderSDKType, Deposit, DepositSDKType, Position, PositionSDKType, SubaccountTradeNonce, SubaccountTradeNonceSDKType, ExpiryFuturesMarketInfo, ExpiryFuturesMarketInfoSDKType, PerpetualMarketFunding, PerpetualMarketFundingSDKType } from "./exchange";
import { DenomDecimals, DenomDecimalsSDKType } from "./tx";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@cosmology/helpers";
/** GenesisState defines the exchange module's genesis state. */
export interface GenesisState {
    /** params defines all the parameters of related to exchange. */
    params: Params;
    /** spot_markets is an array containing the genesis trade pairs */
    spotMarkets: SpotMarket[];
    /** derivative_markets is an array containing the genesis derivative markets */
    derivativeMarkets: DerivativeMarket[];
    /** spot_orderbook defines the spot exchange limit orderbook active at genesis. */
    spotOrderbook: SpotOrderBook[];
    /** derivative_orderbook defines the derivative exchange limit orderbook active at genesis. */
    derivativeOrderbook: DerivativeOrderBook[];
    /** balances defines the exchange users balances active at genesis. */
    balances: Balance[];
    /** positions defines the exchange derivative positions at genesis */
    positions: DerivativePosition[];
    /** subaccount_trade_nonces defines the subaccount trade nonces for the subaccounts at genesis */
    subaccountTradeNonces: SubaccountNonce[];
    /** expiry_futures_market_info defines the market info for the expiry futures markets at genesis */
    expiryFuturesMarketInfoState: ExpiryFuturesMarketInfoState[];
    /** perpetual_market_info defines the market info for the perpetual derivative markets at genesis */
    perpetualMarketInfo: PerpetualMarketInfo[];
    /** perpetual_market_funding_state defines the funding state for the perpetual derivative markets at genesis */
    perpetualMarketFundingState: PerpetualMarketFundingState[];
    /** derivative_market_settlement_scheduled defines the scheduled markets for settlement at genesis */
    derivativeMarketSettlementScheduled: DerivativeMarketSettlementInfo[];
    /** sets spot markets as enabled */
    isSpotExchangeEnabled: boolean;
    /** sets derivative markets as enabled */
    isDerivativesExchangeEnabled: boolean;
    /** the current trading reward campaign info */
    tradingRewardCampaignInfo: TradingRewardCampaignInfo;
    /** the current and upcoming trading reward campaign pools */
    tradingRewardPoolCampaignSchedule: CampaignRewardPool[];
    /** the current trading reward account points */
    tradingRewardCampaignAccountPoints: TradingRewardCampaignAccountPoints[];
    /** the fee discount schedule */
    feeDiscountSchedule: FeeDiscountSchedule;
    /** the cached fee discount account tiers with TTL */
    feeDiscountAccountTierTtl: FeeDiscountAccountTierTTL[];
    /** the fee discount paid by accounts in all buckets */
    feeDiscountBucketVolumeAccounts: FeeDiscountBucketVolumeAccounts[];
    /** sets the first fee cycle as finished */
    isFirstFeeCycleFinished: boolean;
    /** the current and upcoming trading reward campaign pending pools */
    pendingTradingRewardPoolCampaignSchedule: CampaignRewardPool[];
    /** the pending trading reward account points */
    pendingTradingRewardCampaignAccountPoints: TradingRewardCampaignAccountPendingPoints[];
    /** the addresses opting out of trading rewards */
    rewardsOptOutAddresses: string[];
    historicalTradeRecords: TradeRecords[];
    /** binary_options_markets is an array containing the genesis binary options markets */
    binaryOptionsMarkets: BinaryOptionsMarket[];
    /** binary_options_markets_scheduled_for_settlement contains the marketIDs of binary options markets scheduled for next-block settlement */
    binaryOptionsMarketIdsScheduledForSettlement: string[];
    /** spot_market_ids_scheduled_to_force_close defines the scheduled markets for forced closings at genesis */
    spotMarketIdsScheduledToForceClose: string[];
    /** denom_decimals defines the denom decimals for the exchange. */
    denomDecimals: DenomDecimals[];
    /** conditional_derivative_orderbook contains conditional orderbooks for all markets (both lmit and market conditional orders) */
    conditionalDerivativeOrderbooks: ConditionalDerivativeOrderBook[];
}
/** GenesisState defines the exchange module's genesis state. */
export interface GenesisStateSDKType {
    /** params defines all the parameters of related to exchange. */
    params: ParamsSDKType;
    /** spot_markets is an array containing the genesis trade pairs */
    spot_markets: SpotMarketSDKType[];
    /** derivative_markets is an array containing the genesis derivative markets */
    derivative_markets: DerivativeMarketSDKType[];
    /** spot_orderbook defines the spot exchange limit orderbook active at genesis. */
    spot_orderbook: SpotOrderBookSDKType[];
    /** derivative_orderbook defines the derivative exchange limit orderbook active at genesis. */
    derivative_orderbook: DerivativeOrderBookSDKType[];
    /** balances defines the exchange users balances active at genesis. */
    balances: BalanceSDKType[];
    /** positions defines the exchange derivative positions at genesis */
    positions: DerivativePositionSDKType[];
    /** subaccount_trade_nonces defines the subaccount trade nonces for the subaccounts at genesis */
    subaccount_trade_nonces: SubaccountNonceSDKType[];
    /** expiry_futures_market_info defines the market info for the expiry futures markets at genesis */
    expiry_futures_market_info_state: ExpiryFuturesMarketInfoStateSDKType[];
    /** perpetual_market_info defines the market info for the perpetual derivative markets at genesis */
    perpetual_market_info: PerpetualMarketInfoSDKType[];
    /** perpetual_market_funding_state defines the funding state for the perpetual derivative markets at genesis */
    perpetual_market_funding_state: PerpetualMarketFundingStateSDKType[];
    /** derivative_market_settlement_scheduled defines the scheduled markets for settlement at genesis */
    derivative_market_settlement_scheduled: DerivativeMarketSettlementInfoSDKType[];
    /** sets spot markets as enabled */
    is_spot_exchange_enabled: boolean;
    /** sets derivative markets as enabled */
    is_derivatives_exchange_enabled: boolean;
    /** the current trading reward campaign info */
    trading_reward_campaign_info: TradingRewardCampaignInfoSDKType;
    /** the current and upcoming trading reward campaign pools */
    trading_reward_pool_campaign_schedule: CampaignRewardPoolSDKType[];
    /** the current trading reward account points */
    trading_reward_campaign_account_points: TradingRewardCampaignAccountPointsSDKType[];
    /** the fee discount schedule */
    fee_discount_schedule: FeeDiscountScheduleSDKType;
    /** the cached fee discount account tiers with TTL */
    fee_discount_account_tier_ttl: FeeDiscountAccountTierTTLSDKType[];
    /** the fee discount paid by accounts in all buckets */
    fee_discount_bucket_volume_accounts: FeeDiscountBucketVolumeAccountsSDKType[];
    /** sets the first fee cycle as finished */
    is_first_fee_cycle_finished: boolean;
    /** the current and upcoming trading reward campaign pending pools */
    pending_trading_reward_pool_campaign_schedule: CampaignRewardPoolSDKType[];
    /** the pending trading reward account points */
    pending_trading_reward_campaign_account_points: TradingRewardCampaignAccountPendingPointsSDKType[];
    /** the addresses opting out of trading rewards */
    rewards_opt_out_addresses: string[];
    historical_trade_records: TradeRecordsSDKType[];
    /** binary_options_markets is an array containing the genesis binary options markets */
    binary_options_markets: BinaryOptionsMarketSDKType[];
    /** binary_options_markets_scheduled_for_settlement contains the marketIDs of binary options markets scheduled for next-block settlement */
    binary_options_market_ids_scheduled_for_settlement: string[];
    /** spot_market_ids_scheduled_to_force_close defines the scheduled markets for forced closings at genesis */
    spot_market_ids_scheduled_to_force_close: string[];
    /** denom_decimals defines the denom decimals for the exchange. */
    denom_decimals: DenomDecimalsSDKType[];
    /** conditional_derivative_orderbook contains conditional orderbooks for all markets (both lmit and market conditional orders) */
    conditional_derivative_orderbooks: ConditionalDerivativeOrderBookSDKType[];
}
export interface FeeDiscountAccountTierTTL {
    account: string;
    tierTtl: FeeDiscountTierTTL;
}
export interface FeeDiscountAccountTierTTLSDKType {
    account: string;
    tier_ttl: FeeDiscountTierTTLSDKType;
}
export interface FeeDiscountBucketVolumeAccounts {
    bucketStartTimestamp: Long;
    accountVolume: AccountVolume[];
}
export interface FeeDiscountBucketVolumeAccountsSDKType {
    bucket_start_timestamp: Long;
    account_volume: AccountVolumeSDKType[];
}
export interface AccountVolume {
    account: string;
    volume: string;
}
export interface AccountVolumeSDKType {
    account: string;
    volume: string;
}
export interface TradingRewardCampaignAccountPoints {
    account: string;
    points: string;
}
export interface TradingRewardCampaignAccountPointsSDKType {
    account: string;
    points: string;
}
export interface TradingRewardCampaignAccountPendingPoints {
    rewardPoolStartTimestamp: Long;
    accountPoints: TradingRewardCampaignAccountPoints[];
}
export interface TradingRewardCampaignAccountPendingPointsSDKType {
    reward_pool_start_timestamp: Long;
    account_points: TradingRewardCampaignAccountPointsSDKType[];
}
/** Spot Exchange Limit Orderbook */
export interface SpotOrderBook {
    marketId: string;
    isBuySide: boolean;
    orders: SpotLimitOrder[];
}
/** Spot Exchange Limit Orderbook */
export interface SpotOrderBookSDKType {
    market_id: string;
    isBuySide: boolean;
    orders: SpotLimitOrderSDKType[];
}
/** Derivative Exchange Limit Orderbook */
export interface DerivativeOrderBook {
    marketId: string;
    isBuySide: boolean;
    orders: DerivativeLimitOrder[];
}
/** Derivative Exchange Limit Orderbook */
export interface DerivativeOrderBookSDKType {
    market_id: string;
    isBuySide: boolean;
    orders: DerivativeLimitOrderSDKType[];
}
/** Orderbook containing limit & market conditional orders */
export interface ConditionalDerivativeOrderBook {
    marketId: string;
    limitBuyOrders: DerivativeLimitOrder[];
    marketBuyOrders: DerivativeMarketOrder[];
    limitSellOrders: DerivativeLimitOrder[];
    marketSellOrders: DerivativeMarketOrder[];
}
/** Orderbook containing limit & market conditional orders */
export interface ConditionalDerivativeOrderBookSDKType {
    market_id: string;
    limit_buy_orders: DerivativeLimitOrderSDKType[];
    market_buy_orders: DerivativeMarketOrderSDKType[];
    limit_sell_orders: DerivativeLimitOrderSDKType[];
    market_sell_orders: DerivativeMarketOrderSDKType[];
}
export interface Balance {
    subaccountId: string;
    denom: string;
    deposits: Deposit;
}
export interface BalanceSDKType {
    subaccount_id: string;
    denom: string;
    deposits: DepositSDKType;
}
export interface DerivativePosition {
    subaccountId: string;
    marketId: string;
    position: Position;
}
export interface DerivativePositionSDKType {
    subaccount_id: string;
    market_id: string;
    position: PositionSDKType;
}
export interface SubaccountNonce {
    subaccountId: string;
    subaccountTradeNonce: SubaccountTradeNonce;
}
export interface SubaccountNonceSDKType {
    subaccount_id: string;
    subaccount_trade_nonce: SubaccountTradeNonceSDKType;
}
export interface ExpiryFuturesMarketInfoState {
    marketId: string;
    marketInfo: ExpiryFuturesMarketInfo;
}
export interface ExpiryFuturesMarketInfoStateSDKType {
    market_id: string;
    market_info: ExpiryFuturesMarketInfoSDKType;
}
export interface PerpetualMarketFundingState {
    marketId: string;
    funding: PerpetualMarketFunding;
}
export interface PerpetualMarketFundingStateSDKType {
    market_id: string;
    funding: PerpetualMarketFundingSDKType;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
export declare const FeeDiscountAccountTierTTL: {
    encode(message: FeeDiscountAccountTierTTL, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FeeDiscountAccountTierTTL;
    fromPartial(object: DeepPartial<FeeDiscountAccountTierTTL>): FeeDiscountAccountTierTTL;
};
export declare const FeeDiscountBucketVolumeAccounts: {
    encode(message: FeeDiscountBucketVolumeAccounts, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FeeDiscountBucketVolumeAccounts;
    fromPartial(object: DeepPartial<FeeDiscountBucketVolumeAccounts>): FeeDiscountBucketVolumeAccounts;
};
export declare const AccountVolume: {
    encode(message: AccountVolume, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AccountVolume;
    fromPartial(object: DeepPartial<AccountVolume>): AccountVolume;
};
export declare const TradingRewardCampaignAccountPoints: {
    encode(message: TradingRewardCampaignAccountPoints, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TradingRewardCampaignAccountPoints;
    fromPartial(object: DeepPartial<TradingRewardCampaignAccountPoints>): TradingRewardCampaignAccountPoints;
};
export declare const TradingRewardCampaignAccountPendingPoints: {
    encode(message: TradingRewardCampaignAccountPendingPoints, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TradingRewardCampaignAccountPendingPoints;
    fromPartial(object: DeepPartial<TradingRewardCampaignAccountPendingPoints>): TradingRewardCampaignAccountPendingPoints;
};
export declare const SpotOrderBook: {
    encode(message: SpotOrderBook, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SpotOrderBook;
    fromPartial(object: DeepPartial<SpotOrderBook>): SpotOrderBook;
};
export declare const DerivativeOrderBook: {
    encode(message: DerivativeOrderBook, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DerivativeOrderBook;
    fromPartial(object: DeepPartial<DerivativeOrderBook>): DerivativeOrderBook;
};
export declare const ConditionalDerivativeOrderBook: {
    encode(message: ConditionalDerivativeOrderBook, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ConditionalDerivativeOrderBook;
    fromPartial(object: DeepPartial<ConditionalDerivativeOrderBook>): ConditionalDerivativeOrderBook;
};
export declare const Balance: {
    encode(message: Balance, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Balance;
    fromPartial(object: DeepPartial<Balance>): Balance;
};
export declare const DerivativePosition: {
    encode(message: DerivativePosition, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DerivativePosition;
    fromPartial(object: DeepPartial<DerivativePosition>): DerivativePosition;
};
export declare const SubaccountNonce: {
    encode(message: SubaccountNonce, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SubaccountNonce;
    fromPartial(object: DeepPartial<SubaccountNonce>): SubaccountNonce;
};
export declare const ExpiryFuturesMarketInfoState: {
    encode(message: ExpiryFuturesMarketInfoState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ExpiryFuturesMarketInfoState;
    fromPartial(object: DeepPartial<ExpiryFuturesMarketInfoState>): ExpiryFuturesMarketInfoState;
};
export declare const PerpetualMarketFundingState: {
    encode(message: PerpetualMarketFundingState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PerpetualMarketFundingState;
    fromPartial(object: DeepPartial<PerpetualMarketFundingState>): PerpetualMarketFundingState;
};
