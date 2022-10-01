import { Params, ParamsSDKType, SpotMarket, SpotMarketSDKType, DerivativeMarket, DerivativeMarketSDKType, PerpetualMarketInfo, PerpetualMarketInfoSDKType, DerivativeMarketSettlementInfo, DerivativeMarketSettlementInfoSDKType, TradingRewardCampaignInfo, TradingRewardCampaignInfoSDKType, CampaignRewardPool, CampaignRewardPoolSDKType, FeeDiscountSchedule, FeeDiscountScheduleSDKType, TradeRecords, TradeRecordsSDKType, BinaryOptionsMarket, BinaryOptionsMarketSDKType, FeeDiscountTierTTL, FeeDiscountTierTTLSDKType, SpotLimitOrder, SpotLimitOrderSDKType, DerivativeLimitOrder, DerivativeLimitOrderSDKType, DerivativeMarketOrder, DerivativeMarketOrderSDKType, Deposit, DepositSDKType, Position, PositionSDKType, SubaccountTradeNonce, SubaccountTradeNonceSDKType, ExpiryFuturesMarketInfo, ExpiryFuturesMarketInfoSDKType, PerpetualMarketFunding, PerpetualMarketFundingSDKType } from "./exchange";
import { DenomDecimals, DenomDecimalsSDKType } from "./tx";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
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

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    spotMarkets: [],
    derivativeMarkets: [],
    spotOrderbook: [],
    derivativeOrderbook: [],
    balances: [],
    positions: [],
    subaccountTradeNonces: [],
    expiryFuturesMarketInfoState: [],
    perpetualMarketInfo: [],
    perpetualMarketFundingState: [],
    derivativeMarketSettlementScheduled: [],
    isSpotExchangeEnabled: false,
    isDerivativesExchangeEnabled: false,
    tradingRewardCampaignInfo: undefined,
    tradingRewardPoolCampaignSchedule: [],
    tradingRewardCampaignAccountPoints: [],
    feeDiscountSchedule: undefined,
    feeDiscountAccountTierTtl: [],
    feeDiscountBucketVolumeAccounts: [],
    isFirstFeeCycleFinished: false,
    pendingTradingRewardPoolCampaignSchedule: [],
    pendingTradingRewardCampaignAccountPoints: [],
    rewardsOptOutAddresses: [],
    historicalTradeRecords: [],
    binaryOptionsMarkets: [],
    binaryOptionsMarketIdsScheduledForSettlement: [],
    spotMarketIdsScheduledToForceClose: [],
    denomDecimals: [],
    conditionalDerivativeOrderbooks: []
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.spotMarkets) {
      SpotMarket.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    for (const v of message.derivativeMarkets) {
      DerivativeMarket.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    for (const v of message.spotOrderbook) {
      SpotOrderBook.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    for (const v of message.derivativeOrderbook) {
      DerivativeOrderBook.encode(v!, writer.uint32(42).fork()).ldelim();
    }

    for (const v of message.balances) {
      Balance.encode(v!, writer.uint32(50).fork()).ldelim();
    }

    for (const v of message.positions) {
      DerivativePosition.encode(v!, writer.uint32(58).fork()).ldelim();
    }

    for (const v of message.subaccountTradeNonces) {
      SubaccountNonce.encode(v!, writer.uint32(66).fork()).ldelim();
    }

    for (const v of message.expiryFuturesMarketInfoState) {
      ExpiryFuturesMarketInfoState.encode(v!, writer.uint32(74).fork()).ldelim();
    }

    for (const v of message.perpetualMarketInfo) {
      PerpetualMarketInfo.encode(v!, writer.uint32(82).fork()).ldelim();
    }

    for (const v of message.perpetualMarketFundingState) {
      PerpetualMarketFundingState.encode(v!, writer.uint32(90).fork()).ldelim();
    }

    for (const v of message.derivativeMarketSettlementScheduled) {
      DerivativeMarketSettlementInfo.encode(v!, writer.uint32(98).fork()).ldelim();
    }

    if (message.isSpotExchangeEnabled === true) {
      writer.uint32(104).bool(message.isSpotExchangeEnabled);
    }

    if (message.isDerivativesExchangeEnabled === true) {
      writer.uint32(112).bool(message.isDerivativesExchangeEnabled);
    }

    if (message.tradingRewardCampaignInfo !== undefined) {
      TradingRewardCampaignInfo.encode(message.tradingRewardCampaignInfo, writer.uint32(122).fork()).ldelim();
    }

    for (const v of message.tradingRewardPoolCampaignSchedule) {
      CampaignRewardPool.encode(v!, writer.uint32(130).fork()).ldelim();
    }

    for (const v of message.tradingRewardCampaignAccountPoints) {
      TradingRewardCampaignAccountPoints.encode(v!, writer.uint32(138).fork()).ldelim();
    }

    if (message.feeDiscountSchedule !== undefined) {
      FeeDiscountSchedule.encode(message.feeDiscountSchedule, writer.uint32(146).fork()).ldelim();
    }

    for (const v of message.feeDiscountAccountTierTtl) {
      FeeDiscountAccountTierTTL.encode(v!, writer.uint32(154).fork()).ldelim();
    }

    for (const v of message.feeDiscountBucketVolumeAccounts) {
      FeeDiscountBucketVolumeAccounts.encode(v!, writer.uint32(162).fork()).ldelim();
    }

    if (message.isFirstFeeCycleFinished === true) {
      writer.uint32(168).bool(message.isFirstFeeCycleFinished);
    }

    for (const v of message.pendingTradingRewardPoolCampaignSchedule) {
      CampaignRewardPool.encode(v!, writer.uint32(178).fork()).ldelim();
    }

    for (const v of message.pendingTradingRewardCampaignAccountPoints) {
      TradingRewardCampaignAccountPendingPoints.encode(v!, writer.uint32(186).fork()).ldelim();
    }

    for (const v of message.rewardsOptOutAddresses) {
      writer.uint32(194).string(v!);
    }

    for (const v of message.historicalTradeRecords) {
      TradeRecords.encode(v!, writer.uint32(202).fork()).ldelim();
    }

    for (const v of message.binaryOptionsMarkets) {
      BinaryOptionsMarket.encode(v!, writer.uint32(210).fork()).ldelim();
    }

    for (const v of message.binaryOptionsMarketIdsScheduledForSettlement) {
      writer.uint32(218).string(v!);
    }

    for (const v of message.spotMarketIdsScheduledToForceClose) {
      writer.uint32(226).string(v!);
    }

    for (const v of message.denomDecimals) {
      DenomDecimals.encode(v!, writer.uint32(234).fork()).ldelim();
    }

    for (const v of message.conditionalDerivativeOrderbooks) {
      ConditionalDerivativeOrderBook.encode(v!, writer.uint32(242).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;

        case 2:
          message.spotMarkets.push(SpotMarket.decode(reader, reader.uint32()));
          break;

        case 3:
          message.derivativeMarkets.push(DerivativeMarket.decode(reader, reader.uint32()));
          break;

        case 4:
          message.spotOrderbook.push(SpotOrderBook.decode(reader, reader.uint32()));
          break;

        case 5:
          message.derivativeOrderbook.push(DerivativeOrderBook.decode(reader, reader.uint32()));
          break;

        case 6:
          message.balances.push(Balance.decode(reader, reader.uint32()));
          break;

        case 7:
          message.positions.push(DerivativePosition.decode(reader, reader.uint32()));
          break;

        case 8:
          message.subaccountTradeNonces.push(SubaccountNonce.decode(reader, reader.uint32()));
          break;

        case 9:
          message.expiryFuturesMarketInfoState.push(ExpiryFuturesMarketInfoState.decode(reader, reader.uint32()));
          break;

        case 10:
          message.perpetualMarketInfo.push(PerpetualMarketInfo.decode(reader, reader.uint32()));
          break;

        case 11:
          message.perpetualMarketFundingState.push(PerpetualMarketFundingState.decode(reader, reader.uint32()));
          break;

        case 12:
          message.derivativeMarketSettlementScheduled.push(DerivativeMarketSettlementInfo.decode(reader, reader.uint32()));
          break;

        case 13:
          message.isSpotExchangeEnabled = reader.bool();
          break;

        case 14:
          message.isDerivativesExchangeEnabled = reader.bool();
          break;

        case 15:
          message.tradingRewardCampaignInfo = TradingRewardCampaignInfo.decode(reader, reader.uint32());
          break;

        case 16:
          message.tradingRewardPoolCampaignSchedule.push(CampaignRewardPool.decode(reader, reader.uint32()));
          break;

        case 17:
          message.tradingRewardCampaignAccountPoints.push(TradingRewardCampaignAccountPoints.decode(reader, reader.uint32()));
          break;

        case 18:
          message.feeDiscountSchedule = FeeDiscountSchedule.decode(reader, reader.uint32());
          break;

        case 19:
          message.feeDiscountAccountTierTtl.push(FeeDiscountAccountTierTTL.decode(reader, reader.uint32()));
          break;

        case 20:
          message.feeDiscountBucketVolumeAccounts.push(FeeDiscountBucketVolumeAccounts.decode(reader, reader.uint32()));
          break;

        case 21:
          message.isFirstFeeCycleFinished = reader.bool();
          break;

        case 22:
          message.pendingTradingRewardPoolCampaignSchedule.push(CampaignRewardPool.decode(reader, reader.uint32()));
          break;

        case 23:
          message.pendingTradingRewardCampaignAccountPoints.push(TradingRewardCampaignAccountPendingPoints.decode(reader, reader.uint32()));
          break;

        case 24:
          message.rewardsOptOutAddresses.push(reader.string());
          break;

        case 25:
          message.historicalTradeRecords.push(TradeRecords.decode(reader, reader.uint32()));
          break;

        case 26:
          message.binaryOptionsMarkets.push(BinaryOptionsMarket.decode(reader, reader.uint32()));
          break;

        case 27:
          message.binaryOptionsMarketIdsScheduledForSettlement.push(reader.string());
          break;

        case 28:
          message.spotMarketIdsScheduledToForceClose.push(reader.string());
          break;

        case 29:
          message.denomDecimals.push(DenomDecimals.decode(reader, reader.uint32()));
          break;

        case 30:
          message.conditionalDerivativeOrderbooks.push(ConditionalDerivativeOrderBook.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.spotMarkets = object.spotMarkets?.map(e => SpotMarket.fromPartial(e)) || [];
    message.derivativeMarkets = object.derivativeMarkets?.map(e => DerivativeMarket.fromPartial(e)) || [];
    message.spotOrderbook = object.spotOrderbook?.map(e => SpotOrderBook.fromPartial(e)) || [];
    message.derivativeOrderbook = object.derivativeOrderbook?.map(e => DerivativeOrderBook.fromPartial(e)) || [];
    message.balances = object.balances?.map(e => Balance.fromPartial(e)) || [];
    message.positions = object.positions?.map(e => DerivativePosition.fromPartial(e)) || [];
    message.subaccountTradeNonces = object.subaccountTradeNonces?.map(e => SubaccountNonce.fromPartial(e)) || [];
    message.expiryFuturesMarketInfoState = object.expiryFuturesMarketInfoState?.map(e => ExpiryFuturesMarketInfoState.fromPartial(e)) || [];
    message.perpetualMarketInfo = object.perpetualMarketInfo?.map(e => PerpetualMarketInfo.fromPartial(e)) || [];
    message.perpetualMarketFundingState = object.perpetualMarketFundingState?.map(e => PerpetualMarketFundingState.fromPartial(e)) || [];
    message.derivativeMarketSettlementScheduled = object.derivativeMarketSettlementScheduled?.map(e => DerivativeMarketSettlementInfo.fromPartial(e)) || [];
    message.isSpotExchangeEnabled = object.isSpotExchangeEnabled ?? false;
    message.isDerivativesExchangeEnabled = object.isDerivativesExchangeEnabled ?? false;
    message.tradingRewardCampaignInfo = object.tradingRewardCampaignInfo !== undefined && object.tradingRewardCampaignInfo !== null ? TradingRewardCampaignInfo.fromPartial(object.tradingRewardCampaignInfo) : undefined;
    message.tradingRewardPoolCampaignSchedule = object.tradingRewardPoolCampaignSchedule?.map(e => CampaignRewardPool.fromPartial(e)) || [];
    message.tradingRewardCampaignAccountPoints = object.tradingRewardCampaignAccountPoints?.map(e => TradingRewardCampaignAccountPoints.fromPartial(e)) || [];
    message.feeDiscountSchedule = object.feeDiscountSchedule !== undefined && object.feeDiscountSchedule !== null ? FeeDiscountSchedule.fromPartial(object.feeDiscountSchedule) : undefined;
    message.feeDiscountAccountTierTtl = object.feeDiscountAccountTierTtl?.map(e => FeeDiscountAccountTierTTL.fromPartial(e)) || [];
    message.feeDiscountBucketVolumeAccounts = object.feeDiscountBucketVolumeAccounts?.map(e => FeeDiscountBucketVolumeAccounts.fromPartial(e)) || [];
    message.isFirstFeeCycleFinished = object.isFirstFeeCycleFinished ?? false;
    message.pendingTradingRewardPoolCampaignSchedule = object.pendingTradingRewardPoolCampaignSchedule?.map(e => CampaignRewardPool.fromPartial(e)) || [];
    message.pendingTradingRewardCampaignAccountPoints = object.pendingTradingRewardCampaignAccountPoints?.map(e => TradingRewardCampaignAccountPendingPoints.fromPartial(e)) || [];
    message.rewardsOptOutAddresses = object.rewardsOptOutAddresses?.map(e => e) || [];
    message.historicalTradeRecords = object.historicalTradeRecords?.map(e => TradeRecords.fromPartial(e)) || [];
    message.binaryOptionsMarkets = object.binaryOptionsMarkets?.map(e => BinaryOptionsMarket.fromPartial(e)) || [];
    message.binaryOptionsMarketIdsScheduledForSettlement = object.binaryOptionsMarketIdsScheduledForSettlement?.map(e => e) || [];
    message.spotMarketIdsScheduledToForceClose = object.spotMarketIdsScheduledToForceClose?.map(e => e) || [];
    message.denomDecimals = object.denomDecimals?.map(e => DenomDecimals.fromPartial(e)) || [];
    message.conditionalDerivativeOrderbooks = object.conditionalDerivativeOrderbooks?.map(e => ConditionalDerivativeOrderBook.fromPartial(e)) || [];
    return message;
  }

};

function createBaseFeeDiscountAccountTierTTL(): FeeDiscountAccountTierTTL {
  return {
    account: "",
    tierTtl: undefined
  };
}

export const FeeDiscountAccountTierTTL = {
  encode(message: FeeDiscountAccountTierTTL, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }

    if (message.tierTtl !== undefined) {
      FeeDiscountTierTTL.encode(message.tierTtl, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FeeDiscountAccountTierTTL {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeeDiscountAccountTierTTL();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.account = reader.string();
          break;

        case 2:
          message.tierTtl = FeeDiscountTierTTL.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<FeeDiscountAccountTierTTL>): FeeDiscountAccountTierTTL {
    const message = createBaseFeeDiscountAccountTierTTL();
    message.account = object.account ?? "";
    message.tierTtl = object.tierTtl !== undefined && object.tierTtl !== null ? FeeDiscountTierTTL.fromPartial(object.tierTtl) : undefined;
    return message;
  }

};

function createBaseFeeDiscountBucketVolumeAccounts(): FeeDiscountBucketVolumeAccounts {
  return {
    bucketStartTimestamp: Long.ZERO,
    accountVolume: []
  };
}

export const FeeDiscountBucketVolumeAccounts = {
  encode(message: FeeDiscountBucketVolumeAccounts, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.bucketStartTimestamp.isZero()) {
      writer.uint32(8).int64(message.bucketStartTimestamp);
    }

    for (const v of message.accountVolume) {
      AccountVolume.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FeeDiscountBucketVolumeAccounts {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeeDiscountBucketVolumeAccounts();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.bucketStartTimestamp = (reader.int64() as Long);
          break;

        case 2:
          message.accountVolume.push(AccountVolume.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<FeeDiscountBucketVolumeAccounts>): FeeDiscountBucketVolumeAccounts {
    const message = createBaseFeeDiscountBucketVolumeAccounts();
    message.bucketStartTimestamp = object.bucketStartTimestamp !== undefined && object.bucketStartTimestamp !== null ? Long.fromValue(object.bucketStartTimestamp) : Long.ZERO;
    message.accountVolume = object.accountVolume?.map(e => AccountVolume.fromPartial(e)) || [];
    return message;
  }

};

function createBaseAccountVolume(): AccountVolume {
  return {
    account: "",
    volume: ""
  };
}

export const AccountVolume = {
  encode(message: AccountVolume, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }

    if (message.volume !== "") {
      writer.uint32(18).string(message.volume);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccountVolume {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountVolume();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.account = reader.string();
          break;

        case 2:
          message.volume = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<AccountVolume>): AccountVolume {
    const message = createBaseAccountVolume();
    message.account = object.account ?? "";
    message.volume = object.volume ?? "";
    return message;
  }

};

function createBaseTradingRewardCampaignAccountPoints(): TradingRewardCampaignAccountPoints {
  return {
    account: "",
    points: ""
  };
}

export const TradingRewardCampaignAccountPoints = {
  encode(message: TradingRewardCampaignAccountPoints, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }

    if (message.points !== "") {
      writer.uint32(18).string(message.points);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TradingRewardCampaignAccountPoints {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTradingRewardCampaignAccountPoints();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.account = reader.string();
          break;

        case 2:
          message.points = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<TradingRewardCampaignAccountPoints>): TradingRewardCampaignAccountPoints {
    const message = createBaseTradingRewardCampaignAccountPoints();
    message.account = object.account ?? "";
    message.points = object.points ?? "";
    return message;
  }

};

function createBaseTradingRewardCampaignAccountPendingPoints(): TradingRewardCampaignAccountPendingPoints {
  return {
    rewardPoolStartTimestamp: Long.ZERO,
    accountPoints: []
  };
}

export const TradingRewardCampaignAccountPendingPoints = {
  encode(message: TradingRewardCampaignAccountPendingPoints, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.rewardPoolStartTimestamp.isZero()) {
      writer.uint32(8).int64(message.rewardPoolStartTimestamp);
    }

    for (const v of message.accountPoints) {
      TradingRewardCampaignAccountPoints.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TradingRewardCampaignAccountPendingPoints {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTradingRewardCampaignAccountPendingPoints();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.rewardPoolStartTimestamp = (reader.int64() as Long);
          break;

        case 2:
          message.accountPoints.push(TradingRewardCampaignAccountPoints.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<TradingRewardCampaignAccountPendingPoints>): TradingRewardCampaignAccountPendingPoints {
    const message = createBaseTradingRewardCampaignAccountPendingPoints();
    message.rewardPoolStartTimestamp = object.rewardPoolStartTimestamp !== undefined && object.rewardPoolStartTimestamp !== null ? Long.fromValue(object.rewardPoolStartTimestamp) : Long.ZERO;
    message.accountPoints = object.accountPoints?.map(e => TradingRewardCampaignAccountPoints.fromPartial(e)) || [];
    return message;
  }

};

function createBaseSpotOrderBook(): SpotOrderBook {
  return {
    marketId: "",
    isBuySide: false,
    orders: []
  };
}

export const SpotOrderBook = {
  encode(message: SpotOrderBook, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }

    if (message.isBuySide === true) {
      writer.uint32(16).bool(message.isBuySide);
    }

    for (const v of message.orders) {
      SpotLimitOrder.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SpotOrderBook {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSpotOrderBook();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;

        case 2:
          message.isBuySide = reader.bool();
          break;

        case 3:
          message.orders.push(SpotLimitOrder.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<SpotOrderBook>): SpotOrderBook {
    const message = createBaseSpotOrderBook();
    message.marketId = object.marketId ?? "";
    message.isBuySide = object.isBuySide ?? false;
    message.orders = object.orders?.map(e => SpotLimitOrder.fromPartial(e)) || [];
    return message;
  }

};

function createBaseDerivativeOrderBook(): DerivativeOrderBook {
  return {
    marketId: "",
    isBuySide: false,
    orders: []
  };
}

export const DerivativeOrderBook = {
  encode(message: DerivativeOrderBook, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }

    if (message.isBuySide === true) {
      writer.uint32(16).bool(message.isBuySide);
    }

    for (const v of message.orders) {
      DerivativeLimitOrder.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DerivativeOrderBook {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDerivativeOrderBook();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;

        case 2:
          message.isBuySide = reader.bool();
          break;

        case 3:
          message.orders.push(DerivativeLimitOrder.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<DerivativeOrderBook>): DerivativeOrderBook {
    const message = createBaseDerivativeOrderBook();
    message.marketId = object.marketId ?? "";
    message.isBuySide = object.isBuySide ?? false;
    message.orders = object.orders?.map(e => DerivativeLimitOrder.fromPartial(e)) || [];
    return message;
  }

};

function createBaseConditionalDerivativeOrderBook(): ConditionalDerivativeOrderBook {
  return {
    marketId: "",
    limitBuyOrders: [],
    marketBuyOrders: [],
    limitSellOrders: [],
    marketSellOrders: []
  };
}

export const ConditionalDerivativeOrderBook = {
  encode(message: ConditionalDerivativeOrderBook, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }

    for (const v of message.limitBuyOrders) {
      DerivativeLimitOrder.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    for (const v of message.marketBuyOrders) {
      DerivativeMarketOrder.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    for (const v of message.limitSellOrders) {
      DerivativeLimitOrder.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    for (const v of message.marketSellOrders) {
      DerivativeMarketOrder.encode(v!, writer.uint32(42).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConditionalDerivativeOrderBook {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConditionalDerivativeOrderBook();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;

        case 2:
          message.limitBuyOrders.push(DerivativeLimitOrder.decode(reader, reader.uint32()));
          break;

        case 3:
          message.marketBuyOrders.push(DerivativeMarketOrder.decode(reader, reader.uint32()));
          break;

        case 4:
          message.limitSellOrders.push(DerivativeLimitOrder.decode(reader, reader.uint32()));
          break;

        case 5:
          message.marketSellOrders.push(DerivativeMarketOrder.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<ConditionalDerivativeOrderBook>): ConditionalDerivativeOrderBook {
    const message = createBaseConditionalDerivativeOrderBook();
    message.marketId = object.marketId ?? "";
    message.limitBuyOrders = object.limitBuyOrders?.map(e => DerivativeLimitOrder.fromPartial(e)) || [];
    message.marketBuyOrders = object.marketBuyOrders?.map(e => DerivativeMarketOrder.fromPartial(e)) || [];
    message.limitSellOrders = object.limitSellOrders?.map(e => DerivativeLimitOrder.fromPartial(e)) || [];
    message.marketSellOrders = object.marketSellOrders?.map(e => DerivativeMarketOrder.fromPartial(e)) || [];
    return message;
  }

};

function createBaseBalance(): Balance {
  return {
    subaccountId: "",
    denom: "",
    deposits: undefined
  };
}

export const Balance = {
  encode(message: Balance, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.subaccountId !== "") {
      writer.uint32(10).string(message.subaccountId);
    }

    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }

    if (message.deposits !== undefined) {
      Deposit.encode(message.deposits, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Balance {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBalance();

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
          message.deposits = Deposit.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Balance>): Balance {
    const message = createBaseBalance();
    message.subaccountId = object.subaccountId ?? "";
    message.denom = object.denom ?? "";
    message.deposits = object.deposits !== undefined && object.deposits !== null ? Deposit.fromPartial(object.deposits) : undefined;
    return message;
  }

};

function createBaseDerivativePosition(): DerivativePosition {
  return {
    subaccountId: "",
    marketId: "",
    position: undefined
  };
}

export const DerivativePosition = {
  encode(message: DerivativePosition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.subaccountId !== "") {
      writer.uint32(10).string(message.subaccountId);
    }

    if (message.marketId !== "") {
      writer.uint32(18).string(message.marketId);
    }

    if (message.position !== undefined) {
      Position.encode(message.position, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DerivativePosition {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDerivativePosition();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.subaccountId = reader.string();
          break;

        case 2:
          message.marketId = reader.string();
          break;

        case 3:
          message.position = Position.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<DerivativePosition>): DerivativePosition {
    const message = createBaseDerivativePosition();
    message.subaccountId = object.subaccountId ?? "";
    message.marketId = object.marketId ?? "";
    message.position = object.position !== undefined && object.position !== null ? Position.fromPartial(object.position) : undefined;
    return message;
  }

};

function createBaseSubaccountNonce(): SubaccountNonce {
  return {
    subaccountId: "",
    subaccountTradeNonce: undefined
  };
}

export const SubaccountNonce = {
  encode(message: SubaccountNonce, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.subaccountId !== "") {
      writer.uint32(10).string(message.subaccountId);
    }

    if (message.subaccountTradeNonce !== undefined) {
      SubaccountTradeNonce.encode(message.subaccountTradeNonce, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SubaccountNonce {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubaccountNonce();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.subaccountId = reader.string();
          break;

        case 2:
          message.subaccountTradeNonce = SubaccountTradeNonce.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<SubaccountNonce>): SubaccountNonce {
    const message = createBaseSubaccountNonce();
    message.subaccountId = object.subaccountId ?? "";
    message.subaccountTradeNonce = object.subaccountTradeNonce !== undefined && object.subaccountTradeNonce !== null ? SubaccountTradeNonce.fromPartial(object.subaccountTradeNonce) : undefined;
    return message;
  }

};

function createBaseExpiryFuturesMarketInfoState(): ExpiryFuturesMarketInfoState {
  return {
    marketId: "",
    marketInfo: undefined
  };
}

export const ExpiryFuturesMarketInfoState = {
  encode(message: ExpiryFuturesMarketInfoState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }

    if (message.marketInfo !== undefined) {
      ExpiryFuturesMarketInfo.encode(message.marketInfo, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExpiryFuturesMarketInfoState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExpiryFuturesMarketInfoState();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;

        case 2:
          message.marketInfo = ExpiryFuturesMarketInfo.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<ExpiryFuturesMarketInfoState>): ExpiryFuturesMarketInfoState {
    const message = createBaseExpiryFuturesMarketInfoState();
    message.marketId = object.marketId ?? "";
    message.marketInfo = object.marketInfo !== undefined && object.marketInfo !== null ? ExpiryFuturesMarketInfo.fromPartial(object.marketInfo) : undefined;
    return message;
  }

};

function createBasePerpetualMarketFundingState(): PerpetualMarketFundingState {
  return {
    marketId: "",
    funding: undefined
  };
}

export const PerpetualMarketFundingState = {
  encode(message: PerpetualMarketFundingState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }

    if (message.funding !== undefined) {
      PerpetualMarketFunding.encode(message.funding, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PerpetualMarketFundingState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePerpetualMarketFundingState();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;

        case 2:
          message.funding = PerpetualMarketFunding.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<PerpetualMarketFundingState>): PerpetualMarketFundingState {
    const message = createBasePerpetualMarketFundingState();
    message.marketId = object.marketId ?? "";
    message.funding = object.funding !== undefined && object.funding !== null ? PerpetualMarketFunding.fromPartial(object.funding) : undefined;
    return message;
  }

};