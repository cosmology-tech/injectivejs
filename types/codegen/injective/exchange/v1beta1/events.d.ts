import { ExecutionType, ExecutionTypeSDKType, TradeLog, TradeLogSDKType, DerivativeTradeLog, DerivativeTradeLogSDKType, SubaccountPosition, SubaccountPositionSDKType, BinaryOptionsMarket, BinaryOptionsMarketSDKType, SpotLimitOrder, SpotLimitOrderSDKType, DerivativeLimitOrder, DerivativeLimitOrderSDKType, SpotMarket, SpotMarketSDKType, DerivativeMarket, DerivativeMarketSDKType, PerpetualMarketInfo, PerpetualMarketInfoSDKType, PerpetualMarketFunding, PerpetualMarketFundingSDKType, ExpiryFuturesMarketInfo, ExpiryFuturesMarketInfoSDKType, DepositUpdate, DepositUpdateSDKType, DerivativeMarketOrder, DerivativeMarketOrderSDKType, FeeDiscountSchedule, FeeDiscountScheduleSDKType, TradingRewardCampaignInfo, TradingRewardCampaignInfoSDKType, CampaignRewardPool, CampaignRewardPoolSDKType, AccountRewards, AccountRewardsSDKType, DerivativeOrder, DerivativeOrderSDKType } from "./exchange";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
export interface EventBatchSpotExecution {
    marketId: string;
    isBuy: boolean;
    executionType: ExecutionType;
    trades: TradeLog[];
}
export interface EventBatchSpotExecutionSDKType {
    market_id: string;
    is_buy: boolean;
    executionType: ExecutionTypeSDKType;
    trades: TradeLogSDKType[];
}
export interface EventBatchDerivativeExecution {
    marketId: string;
    isBuy: boolean;
    isLiquidation: boolean;
    /** nil for time expiry futures */
    cumulativeFunding?: string;
    executionType: ExecutionType;
    trades: DerivativeTradeLog[];
}
export interface EventBatchDerivativeExecutionSDKType {
    market_id: string;
    is_buy: boolean;
    is_liquidation: boolean;
    /** nil for time expiry futures */
    cumulative_funding?: string;
    executionType: ExecutionTypeSDKType;
    trades: DerivativeTradeLogSDKType[];
}
export interface EventLostFundsFromLiquidation {
    marketId: string;
    subaccountId: Uint8Array;
    lostFundsFromAvailableDuringPayout: string;
    lostFundsFromOrderCancels: string;
}
export interface EventLostFundsFromLiquidationSDKType {
    market_id: string;
    subaccount_id: Uint8Array;
    lost_funds_from_available_during_payout: string;
    lost_funds_from_order_cancels: string;
}
export interface EventBatchDerivativePosition {
    marketId: string;
    positions: SubaccountPosition[];
}
export interface EventBatchDerivativePositionSDKType {
    market_id: string;
    positions: SubaccountPositionSDKType[];
}
export interface EventDerivativeMarketPaused {
    marketId: string;
    settlePrice: string;
    totalMissingFunds: string;
    missingFundsRate: string;
}
export interface EventDerivativeMarketPausedSDKType {
    market_id: string;
    settle_price: string;
    total_missing_funds: string;
    missing_funds_rate: string;
}
export interface EventBinaryOptionsMarketUpdate {
    market: BinaryOptionsMarket;
}
export interface EventBinaryOptionsMarketUpdateSDKType {
    market: BinaryOptionsMarketSDKType;
}
export interface EventNewSpotOrders {
    marketId: string;
    buyOrders: SpotLimitOrder[];
    sellOrders: SpotLimitOrder[];
}
export interface EventNewSpotOrdersSDKType {
    market_id: string;
    buy_orders: SpotLimitOrderSDKType[];
    sell_orders: SpotLimitOrderSDKType[];
}
export interface EventNewDerivativeOrders {
    marketId: string;
    buyOrders: DerivativeLimitOrder[];
    sellOrders: DerivativeLimitOrder[];
}
export interface EventNewDerivativeOrdersSDKType {
    market_id: string;
    buy_orders: DerivativeLimitOrderSDKType[];
    sell_orders: DerivativeLimitOrderSDKType[];
}
export interface EventCancelSpotOrder {
    marketId: string;
    order: SpotLimitOrder;
}
export interface EventCancelSpotOrderSDKType {
    market_id: string;
    order: SpotLimitOrderSDKType;
}
export interface EventSpotMarketUpdate {
    market: SpotMarket;
}
export interface EventSpotMarketUpdateSDKType {
    market: SpotMarketSDKType;
}
export interface EventPerpetualMarketUpdate {
    market: DerivativeMarket;
    perpetualMarketInfo?: PerpetualMarketInfo;
    funding?: PerpetualMarketFunding;
}
export interface EventPerpetualMarketUpdateSDKType {
    market: DerivativeMarketSDKType;
    perpetual_market_info?: PerpetualMarketInfoSDKType;
    funding?: PerpetualMarketFundingSDKType;
}
export interface EventExpiryFuturesMarketUpdate {
    market: DerivativeMarket;
    expiryFuturesMarketInfo?: ExpiryFuturesMarketInfo;
}
export interface EventExpiryFuturesMarketUpdateSDKType {
    market: DerivativeMarketSDKType;
    expiry_futures_market_info?: ExpiryFuturesMarketInfoSDKType;
}
export interface EventPerpetualMarketFundingUpdate {
    marketId: string;
    funding: PerpetualMarketFunding;
    isHourlyFunding: boolean;
    fundingRate?: string;
    markPrice?: string;
}
export interface EventPerpetualMarketFundingUpdateSDKType {
    market_id: string;
    funding: PerpetualMarketFundingSDKType;
    is_hourly_funding: boolean;
    funding_rate?: string;
    mark_price?: string;
}
export interface EventSubaccountDeposit {
    srcAddress: string;
    subaccountId: Uint8Array;
    amount: Coin;
}
export interface EventSubaccountDepositSDKType {
    src_address: string;
    subaccount_id: Uint8Array;
    amount: CoinSDKType;
}
export interface EventSubaccountWithdraw {
    subaccountId: Uint8Array;
    dstAddress: string;
    amount: Coin;
}
export interface EventSubaccountWithdrawSDKType {
    subaccount_id: Uint8Array;
    dst_address: string;
    amount: CoinSDKType;
}
export interface EventSubaccountBalanceTransfer {
    srcSubaccountId: string;
    dstSubaccountId: string;
    amount: Coin;
}
export interface EventSubaccountBalanceTransferSDKType {
    src_subaccount_id: string;
    dst_subaccount_id: string;
    amount: CoinSDKType;
}
export interface EventBatchDepositUpdate {
    depositUpdates: DepositUpdate[];
}
export interface EventBatchDepositUpdateSDKType {
    deposit_updates: DepositUpdateSDKType[];
}
export interface DerivativeMarketOrderCancel {
    marketOrder?: DerivativeMarketOrder;
    cancelQuantity: string;
}
export interface DerivativeMarketOrderCancelSDKType {
    market_order?: DerivativeMarketOrderSDKType;
    cancel_quantity: string;
}
export interface EventCancelDerivativeOrder {
    marketId: string;
    isLimitCancel: boolean;
    limitOrder?: DerivativeLimitOrder;
    marketOrderCancel?: DerivativeMarketOrderCancel;
}
export interface EventCancelDerivativeOrderSDKType {
    market_id: string;
    isLimitCancel: boolean;
    limit_order?: DerivativeLimitOrderSDKType;
    market_order_cancel?: DerivativeMarketOrderCancelSDKType;
}
export interface EventFeeDiscountSchedule {
    schedule: FeeDiscountSchedule;
}
export interface EventFeeDiscountScheduleSDKType {
    schedule: FeeDiscountScheduleSDKType;
}
export interface EventTradingRewardCampaignUpdate {
    campaignInfo: TradingRewardCampaignInfo;
    campaignRewardPools: CampaignRewardPool[];
}
export interface EventTradingRewardCampaignUpdateSDKType {
    campaign_info: TradingRewardCampaignInfoSDKType;
    campaign_reward_pools: CampaignRewardPoolSDKType[];
}
export interface EventTradingRewardDistribution {
    accountRewards: AccountRewards[];
}
export interface EventTradingRewardDistributionSDKType {
    account_rewards: AccountRewardsSDKType[];
}
export interface EventNewConditionalDerivativeOrder {
    marketId: string;
    order: DerivativeOrder;
    hash: Uint8Array;
    isMarket: boolean;
}
export interface EventNewConditionalDerivativeOrderSDKType {
    market_id: string;
    order: DerivativeOrderSDKType;
    hash: Uint8Array;
    is_market: boolean;
}
export interface EventCancelConditionalDerivativeOrder {
    marketId: string;
    isLimitCancel: boolean;
    limitOrder?: DerivativeLimitOrder;
    marketOrder?: DerivativeMarketOrder;
}
export interface EventCancelConditionalDerivativeOrderSDKType {
    market_id: string;
    isLimitCancel: boolean;
    limit_order?: DerivativeLimitOrderSDKType;
    market_order?: DerivativeMarketOrderSDKType;
}
export interface EventConditionalDerivativeOrderTrigger {
    marketId: Uint8Array;
    isLimitTrigger: boolean;
    triggeredOrderHash: Uint8Array;
    placedOrderHash: Uint8Array;
}
export interface EventConditionalDerivativeOrderTriggerSDKType {
    market_id: Uint8Array;
    isLimitTrigger: boolean;
    triggered_order_hash: Uint8Array;
    placed_order_hash: Uint8Array;
}
export interface EventOrderFail {
    account: Uint8Array;
    hashes: Uint8Array[];
    flags: number[];
}
export interface EventOrderFailSDKType {
    account: Uint8Array;
    hashes: Uint8Array[];
    flags: number[];
}
export declare const EventBatchSpotExecution: {
    encode(message: EventBatchSpotExecution, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventBatchSpotExecution;
    fromPartial(object: DeepPartial<EventBatchSpotExecution>): EventBatchSpotExecution;
};
export declare const EventBatchDerivativeExecution: {
    encode(message: EventBatchDerivativeExecution, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventBatchDerivativeExecution;
    fromPartial(object: DeepPartial<EventBatchDerivativeExecution>): EventBatchDerivativeExecution;
};
export declare const EventLostFundsFromLiquidation: {
    encode(message: EventLostFundsFromLiquidation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventLostFundsFromLiquidation;
    fromPartial(object: DeepPartial<EventLostFundsFromLiquidation>): EventLostFundsFromLiquidation;
};
export declare const EventBatchDerivativePosition: {
    encode(message: EventBatchDerivativePosition, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventBatchDerivativePosition;
    fromPartial(object: DeepPartial<EventBatchDerivativePosition>): EventBatchDerivativePosition;
};
export declare const EventDerivativeMarketPaused: {
    encode(message: EventDerivativeMarketPaused, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventDerivativeMarketPaused;
    fromPartial(object: DeepPartial<EventDerivativeMarketPaused>): EventDerivativeMarketPaused;
};
export declare const EventBinaryOptionsMarketUpdate: {
    encode(message: EventBinaryOptionsMarketUpdate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventBinaryOptionsMarketUpdate;
    fromPartial(object: DeepPartial<EventBinaryOptionsMarketUpdate>): EventBinaryOptionsMarketUpdate;
};
export declare const EventNewSpotOrders: {
    encode(message: EventNewSpotOrders, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventNewSpotOrders;
    fromPartial(object: DeepPartial<EventNewSpotOrders>): EventNewSpotOrders;
};
export declare const EventNewDerivativeOrders: {
    encode(message: EventNewDerivativeOrders, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventNewDerivativeOrders;
    fromPartial(object: DeepPartial<EventNewDerivativeOrders>): EventNewDerivativeOrders;
};
export declare const EventCancelSpotOrder: {
    encode(message: EventCancelSpotOrder, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventCancelSpotOrder;
    fromPartial(object: DeepPartial<EventCancelSpotOrder>): EventCancelSpotOrder;
};
export declare const EventSpotMarketUpdate: {
    encode(message: EventSpotMarketUpdate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventSpotMarketUpdate;
    fromPartial(object: DeepPartial<EventSpotMarketUpdate>): EventSpotMarketUpdate;
};
export declare const EventPerpetualMarketUpdate: {
    encode(message: EventPerpetualMarketUpdate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventPerpetualMarketUpdate;
    fromPartial(object: DeepPartial<EventPerpetualMarketUpdate>): EventPerpetualMarketUpdate;
};
export declare const EventExpiryFuturesMarketUpdate: {
    encode(message: EventExpiryFuturesMarketUpdate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventExpiryFuturesMarketUpdate;
    fromPartial(object: DeepPartial<EventExpiryFuturesMarketUpdate>): EventExpiryFuturesMarketUpdate;
};
export declare const EventPerpetualMarketFundingUpdate: {
    encode(message: EventPerpetualMarketFundingUpdate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventPerpetualMarketFundingUpdate;
    fromPartial(object: DeepPartial<EventPerpetualMarketFundingUpdate>): EventPerpetualMarketFundingUpdate;
};
export declare const EventSubaccountDeposit: {
    encode(message: EventSubaccountDeposit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventSubaccountDeposit;
    fromPartial(object: DeepPartial<EventSubaccountDeposit>): EventSubaccountDeposit;
};
export declare const EventSubaccountWithdraw: {
    encode(message: EventSubaccountWithdraw, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventSubaccountWithdraw;
    fromPartial(object: DeepPartial<EventSubaccountWithdraw>): EventSubaccountWithdraw;
};
export declare const EventSubaccountBalanceTransfer: {
    encode(message: EventSubaccountBalanceTransfer, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventSubaccountBalanceTransfer;
    fromPartial(object: DeepPartial<EventSubaccountBalanceTransfer>): EventSubaccountBalanceTransfer;
};
export declare const EventBatchDepositUpdate: {
    encode(message: EventBatchDepositUpdate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventBatchDepositUpdate;
    fromPartial(object: DeepPartial<EventBatchDepositUpdate>): EventBatchDepositUpdate;
};
export declare const DerivativeMarketOrderCancel: {
    encode(message: DerivativeMarketOrderCancel, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DerivativeMarketOrderCancel;
    fromPartial(object: DeepPartial<DerivativeMarketOrderCancel>): DerivativeMarketOrderCancel;
};
export declare const EventCancelDerivativeOrder: {
    encode(message: EventCancelDerivativeOrder, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventCancelDerivativeOrder;
    fromPartial(object: DeepPartial<EventCancelDerivativeOrder>): EventCancelDerivativeOrder;
};
export declare const EventFeeDiscountSchedule: {
    encode(message: EventFeeDiscountSchedule, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventFeeDiscountSchedule;
    fromPartial(object: DeepPartial<EventFeeDiscountSchedule>): EventFeeDiscountSchedule;
};
export declare const EventTradingRewardCampaignUpdate: {
    encode(message: EventTradingRewardCampaignUpdate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventTradingRewardCampaignUpdate;
    fromPartial(object: DeepPartial<EventTradingRewardCampaignUpdate>): EventTradingRewardCampaignUpdate;
};
export declare const EventTradingRewardDistribution: {
    encode(message: EventTradingRewardDistribution, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventTradingRewardDistribution;
    fromPartial(object: DeepPartial<EventTradingRewardDistribution>): EventTradingRewardDistribution;
};
export declare const EventNewConditionalDerivativeOrder: {
    encode(message: EventNewConditionalDerivativeOrder, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventNewConditionalDerivativeOrder;
    fromPartial(object: DeepPartial<EventNewConditionalDerivativeOrder>): EventNewConditionalDerivativeOrder;
};
export declare const EventCancelConditionalDerivativeOrder: {
    encode(message: EventCancelConditionalDerivativeOrder, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventCancelConditionalDerivativeOrder;
    fromPartial(object: DeepPartial<EventCancelConditionalDerivativeOrder>): EventCancelConditionalDerivativeOrder;
};
export declare const EventConditionalDerivativeOrderTrigger: {
    encode(message: EventConditionalDerivativeOrderTrigger, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventConditionalDerivativeOrderTrigger;
    fromPartial(object: DeepPartial<EventConditionalDerivativeOrderTrigger>): EventConditionalDerivativeOrderTrigger;
};
export declare const EventOrderFail: {
    encode(message: EventOrderFail, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventOrderFail;
    fromPartial(object: DeepPartial<EventOrderFail>): EventOrderFail;
};
