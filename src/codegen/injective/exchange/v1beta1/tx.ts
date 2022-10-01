import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { OracleType, OracleTypeSDKType } from "../../oracle/v1beta1/oracle";
import { SpotOrder, SpotOrderSDKType, DerivativeOrder, DerivativeOrderSDKType, MarketStatus, MarketStatusSDKType, TradingRewardCampaignInfo, TradingRewardCampaignInfoSDKType, CampaignRewardPool, CampaignRewardPoolSDKType, FeeDiscountSchedule, FeeDiscountScheduleSDKType } from "./exchange";
import { CommunityPoolSpendProposal, CommunityPoolSpendProposalSDKType } from "../../../cosmos/distribution/v1beta1/distribution";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
export enum ExchangeType {
  EXCHANGE_UNSPECIFIED = 0,
  SPOT = 1,
  DERIVATIVES = 2,
  UNRECOGNIZED = -1,
}
export enum ExchangeTypeSDKType {
  EXCHANGE_UNSPECIFIED = 0,
  SPOT = 1,
  DERIVATIVES = 2,
  UNRECOGNIZED = -1,
}
export function exchangeTypeFromJSON(object: any): ExchangeType {
  switch (object) {
    case 0:
    case "EXCHANGE_UNSPECIFIED":
      return ExchangeType.EXCHANGE_UNSPECIFIED;

    case 1:
    case "SPOT":
      return ExchangeType.SPOT;

    case 2:
    case "DERIVATIVES":
      return ExchangeType.DERIVATIVES;

    case -1:
    case "UNRECOGNIZED":
    default:
      return ExchangeType.UNRECOGNIZED;
  }
}
export function exchangeTypeToJSON(object: ExchangeType): string {
  switch (object) {
    case ExchangeType.EXCHANGE_UNSPECIFIED:
      return "EXCHANGE_UNSPECIFIED";

    case ExchangeType.SPOT:
      return "SPOT";

    case ExchangeType.DERIVATIVES:
      return "DERIVATIVES";

    default:
      return "UNKNOWN";
  }
}
/** MsgDeposit defines a SDK message for transferring coins from the sender's bank balance into the subaccount's exchange deposits */

export interface MsgDeposit {
  sender: string;
  /**
   * (Optional) bytes32 subaccount ID to deposit funds into. If empty, the coin will be deposited to the sender's default
   * subaccount address.
   */

  subaccountId: string;
  amount: Coin;
}
/** MsgDeposit defines a SDK message for transferring coins from the sender's bank balance into the subaccount's exchange deposits */

export interface MsgDepositSDKType {
  sender: string;
  /**
   * (Optional) bytes32 subaccount ID to deposit funds into. If empty, the coin will be deposited to the sender's default
   * subaccount address.
   */

  subaccount_id: string;
  amount: CoinSDKType;
}
/** MsgDepositResponse defines the Msg/Deposit response type. */

export interface MsgDepositResponse {}
/** MsgDepositResponse defines the Msg/Deposit response type. */

export interface MsgDepositResponseSDKType {}
/** MsgWithdraw defines a SDK message for withdrawing coins from a subaccount's deposits to the user's bank balance */

export interface MsgWithdraw {
  sender: string;
  /** bytes32 subaccount ID to withdraw funds from */

  subaccountId: string;
  amount: Coin;
}
/** MsgWithdraw defines a SDK message for withdrawing coins from a subaccount's deposits to the user's bank balance */

export interface MsgWithdrawSDKType {
  sender: string;
  /** bytes32 subaccount ID to withdraw funds from */

  subaccount_id: string;
  amount: CoinSDKType;
}
/** MsgWithdraw defines the Msg/Withdraw response type. */

export interface MsgWithdrawResponse {}
/** MsgWithdraw defines the Msg/Withdraw response type. */

export interface MsgWithdrawResponseSDKType {}
/** MsgCreateSpotLimitOrder defines a SDK message for creating a new spot limit order. */

export interface MsgCreateSpotLimitOrder {
  sender: string;
  order: SpotOrder;
}
/** MsgCreateSpotLimitOrder defines a SDK message for creating a new spot limit order. */

export interface MsgCreateSpotLimitOrderSDKType {
  sender: string;
  order: SpotOrderSDKType;
}
/** MsgCreateSpotLimitOrderResponse defines the Msg/CreateSpotOrder response type. */

export interface MsgCreateSpotLimitOrderResponse {
  orderHash: string;
}
/** MsgCreateSpotLimitOrderResponse defines the Msg/CreateSpotOrder response type. */

export interface MsgCreateSpotLimitOrderResponseSDKType {
  order_hash: string;
}
/** MsgBatchCreateSpotLimitOrders defines a SDK message for creating a new batch of spot limit orders. */

export interface MsgBatchCreateSpotLimitOrders {
  sender: string;
  orders: SpotOrder[];
}
/** MsgBatchCreateSpotLimitOrders defines a SDK message for creating a new batch of spot limit orders. */

export interface MsgBatchCreateSpotLimitOrdersSDKType {
  sender: string;
  orders: SpotOrderSDKType[];
}
/** MsgBatchCreateSpotLimitOrdersResponse defines the Msg/BatchCreateSpotLimitOrders response type. */

export interface MsgBatchCreateSpotLimitOrdersResponse {
  orderHashes: string[];
}
/** MsgBatchCreateSpotLimitOrdersResponse defines the Msg/BatchCreateSpotLimitOrders response type. */

export interface MsgBatchCreateSpotLimitOrdersResponseSDKType {
  order_hashes: string[];
}
/** MsgInstantSpotMarketLaunch defines a SDK message for creating a new spot market by paying listing fee without governance */

export interface MsgInstantSpotMarketLaunch {
  sender: string;
  /** Ticker for the spot market. */

  ticker: string;
  /** type of coin to use as the base currency */

  baseDenom: string;
  /** type of coin to use as the quote currency */

  quoteDenom: string;
  /** min_price_tick_size defines the minimum tick size of the order's price */

  minPriceTickSize: string;
  /** min_quantity_tick_size defines the minimum tick size of the order's quantity */

  minQuantityTickSize: string;
}
/** MsgInstantSpotMarketLaunch defines a SDK message for creating a new spot market by paying listing fee without governance */

export interface MsgInstantSpotMarketLaunchSDKType {
  sender: string;
  /** Ticker for the spot market. */

  ticker: string;
  /** type of coin to use as the base currency */

  base_denom: string;
  /** type of coin to use as the quote currency */

  quote_denom: string;
  /** min_price_tick_size defines the minimum tick size of the order's price */

  min_price_tick_size: string;
  /** min_quantity_tick_size defines the minimum tick size of the order's quantity */

  min_quantity_tick_size: string;
}
/** MsgInstantSpotMarketLaunchResponse defines the Msg/InstantSpotMarketLaunch response type. */

export interface MsgInstantSpotMarketLaunchResponse {}
/** MsgInstantSpotMarketLaunchResponse defines the Msg/InstantSpotMarketLaunch response type. */

export interface MsgInstantSpotMarketLaunchResponseSDKType {}
/** MsgInstantPerpetualMarketLaunch defines a SDK message for creating a new perpetual futures market by paying listing fee without governance */

export interface MsgInstantPerpetualMarketLaunch {
  sender: string;
  /** Ticker for the derivative market. */

  ticker: string;
  /** type of coin to use as the base currency */

  quoteDenom: string;
  /** Oracle base currency */

  oracleBase: string;
  /** Oracle quote currency */

  oracleQuote: string;
  /** Scale factor for oracle prices. */

  oracleScaleFactor: number;
  /** Oracle type */

  oracleType: OracleType;
  /** maker_fee_rate defines the trade fee rate for makers on the perpetual market */

  makerFeeRate: string;
  /** taker_fee_rate defines the trade fee rate for takers on the perpetual market */

  takerFeeRate: string;
  /** initial_margin_ratio defines the initial margin ratio for the perpetual market */

  initialMarginRatio: string;
  /** maintenance_margin_ratio defines the maintenance margin ratio for the perpetual market */

  maintenanceMarginRatio: string;
  /** min_price_tick_size defines the minimum tick size of the order's price and margin */

  minPriceTickSize: string;
  /** min_quantity_tick_size defines the minimum tick size of the order's quantity */

  minQuantityTickSize: string;
}
/** MsgInstantPerpetualMarketLaunch defines a SDK message for creating a new perpetual futures market by paying listing fee without governance */

export interface MsgInstantPerpetualMarketLaunchSDKType {
  sender: string;
  /** Ticker for the derivative market. */

  ticker: string;
  /** type of coin to use as the base currency */

  quote_denom: string;
  /** Oracle base currency */

  oracle_base: string;
  /** Oracle quote currency */

  oracle_quote: string;
  /** Scale factor for oracle prices. */

  oracle_scale_factor: number;
  /** Oracle type */

  oracle_type: OracleTypeSDKType;
  /** maker_fee_rate defines the trade fee rate for makers on the perpetual market */

  maker_fee_rate: string;
  /** taker_fee_rate defines the trade fee rate for takers on the perpetual market */

  taker_fee_rate: string;
  /** initial_margin_ratio defines the initial margin ratio for the perpetual market */

  initial_margin_ratio: string;
  /** maintenance_margin_ratio defines the maintenance margin ratio for the perpetual market */

  maintenance_margin_ratio: string;
  /** min_price_tick_size defines the minimum tick size of the order's price and margin */

  min_price_tick_size: string;
  /** min_quantity_tick_size defines the minimum tick size of the order's quantity */

  min_quantity_tick_size: string;
}
/** MsgInstantPerpetualMarketLaunchResponse defines the Msg/InstantPerpetualMarketLaunchResponse response type. */

export interface MsgInstantPerpetualMarketLaunchResponse {}
/** MsgInstantPerpetualMarketLaunchResponse defines the Msg/InstantPerpetualMarketLaunchResponse response type. */

export interface MsgInstantPerpetualMarketLaunchResponseSDKType {}
/** MsgInstantBinaryOptionsMarketLaunch defines a SDK message for creating a new perpetual futures market by paying listing fee without governance */

export interface MsgInstantBinaryOptionsMarketLaunch {
  sender: string;
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
  /** maker_fee_rate defines the trade fee rate for makers on the perpetual market */

  makerFeeRate: string;
  /** taker_fee_rate defines the trade fee rate for takers on the perpetual market */

  takerFeeRate: string;
  /** expiration timestamp */

  expirationTimestamp: Long;
  /** expiration timestamp */

  settlementTimestamp: Long;
  /** admin of the market */

  admin: string;
  /** Address of the quote currency denomination for the binary options contract */

  quoteDenom: string;
  /** min_price_tick_size defines the minimum tick size that the price and margin required for orders in the market */

  minPriceTickSize: string;
  /** min_quantity_tick_size defines the minimum tick size of the quantity required for orders in the market */

  minQuantityTickSize: string;
}
/** MsgInstantBinaryOptionsMarketLaunch defines a SDK message for creating a new perpetual futures market by paying listing fee without governance */

export interface MsgInstantBinaryOptionsMarketLaunchSDKType {
  sender: string;
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
  /** maker_fee_rate defines the trade fee rate for makers on the perpetual market */

  maker_fee_rate: string;
  /** taker_fee_rate defines the trade fee rate for takers on the perpetual market */

  taker_fee_rate: string;
  /** expiration timestamp */

  expiration_timestamp: Long;
  /** expiration timestamp */

  settlement_timestamp: Long;
  /** admin of the market */

  admin: string;
  /** Address of the quote currency denomination for the binary options contract */

  quote_denom: string;
  /** min_price_tick_size defines the minimum tick size that the price and margin required for orders in the market */

  min_price_tick_size: string;
  /** min_quantity_tick_size defines the minimum tick size of the quantity required for orders in the market */

  min_quantity_tick_size: string;
}
/** MsgInstantBinaryOptionsMarketLaunchResponse defines the Msg/InstantBinaryOptionsMarketLaunchResponse response type. */

export interface MsgInstantBinaryOptionsMarketLaunchResponse {}
/** MsgInstantBinaryOptionsMarketLaunchResponse defines the Msg/InstantBinaryOptionsMarketLaunchResponse response type. */

export interface MsgInstantBinaryOptionsMarketLaunchResponseSDKType {}
/** MsgInstantExpiryFuturesMarketLaunch defines a SDK message for creating a new expiry futures market by paying listing fee without governance */

export interface MsgInstantExpiryFuturesMarketLaunch {
  sender: string;
  /** Ticker for the derivative market. */

  ticker: string;
  /** type of coin to use as the quote currency */

  quoteDenom: string;
  /** Oracle base currency */

  oracleBase: string;
  /** Oracle quote currency */

  oracleQuote: string;
  /** Oracle type */

  oracleType: OracleType;
  /** Scale factor for oracle prices. */

  oracleScaleFactor: number;
  /** Expiration time of the market */

  expiry: Long;
  /** maker_fee_rate defines the trade fee rate for makers on the expiry futures market */

  makerFeeRate: string;
  /** taker_fee_rate defines the trade fee rate for takers on the expiry futures market */

  takerFeeRate: string;
  /** initial_margin_ratio defines the initial margin ratio for the derivative market */

  initialMarginRatio: string;
  /** maintenance_margin_ratio defines the maintenance margin ratio for the derivative market */

  maintenanceMarginRatio: string;
  /** min_price_tick_size defines the minimum tick size of the order's price and margin */

  minPriceTickSize: string;
  /** min_quantity_tick_size defines the minimum tick size of the order's quantity */

  minQuantityTickSize: string;
}
/** MsgInstantExpiryFuturesMarketLaunch defines a SDK message for creating a new expiry futures market by paying listing fee without governance */

export interface MsgInstantExpiryFuturesMarketLaunchSDKType {
  sender: string;
  /** Ticker for the derivative market. */

  ticker: string;
  /** type of coin to use as the quote currency */

  quote_denom: string;
  /** Oracle base currency */

  oracle_base: string;
  /** Oracle quote currency */

  oracle_quote: string;
  /** Oracle type */

  oracle_type: OracleTypeSDKType;
  /** Scale factor for oracle prices. */

  oracle_scale_factor: number;
  /** Expiration time of the market */

  expiry: Long;
  /** maker_fee_rate defines the trade fee rate for makers on the expiry futures market */

  maker_fee_rate: string;
  /** taker_fee_rate defines the trade fee rate for takers on the expiry futures market */

  taker_fee_rate: string;
  /** initial_margin_ratio defines the initial margin ratio for the derivative market */

  initial_margin_ratio: string;
  /** maintenance_margin_ratio defines the maintenance margin ratio for the derivative market */

  maintenance_margin_ratio: string;
  /** min_price_tick_size defines the minimum tick size of the order's price and margin */

  min_price_tick_size: string;
  /** min_quantity_tick_size defines the minimum tick size of the order's quantity */

  min_quantity_tick_size: string;
}
/** MsgInstantExpiryFuturesMarketLaunchResponse defines the Msg/InstantExpiryFuturesMarketLaunch response type. */

export interface MsgInstantExpiryFuturesMarketLaunchResponse {}
/** MsgInstantExpiryFuturesMarketLaunchResponse defines the Msg/InstantExpiryFuturesMarketLaunch response type. */

export interface MsgInstantExpiryFuturesMarketLaunchResponseSDKType {}
/** MsgCreateSpotMarketOrder defines a SDK message for creating a new spot market order. */

export interface MsgCreateSpotMarketOrder {
  sender: string;
  order: SpotOrder;
}
/** MsgCreateSpotMarketOrder defines a SDK message for creating a new spot market order. */

export interface MsgCreateSpotMarketOrderSDKType {
  sender: string;
  order: SpotOrderSDKType;
}
/** MsgCreateSpotMarketOrderResponse defines the Msg/CreateSpotMarketLimitOrder response type. */

export interface MsgCreateSpotMarketOrderResponse {
  orderHash: string;
}
/** MsgCreateSpotMarketOrderResponse defines the Msg/CreateSpotMarketLimitOrder response type. */

export interface MsgCreateSpotMarketOrderResponseSDKType {
  order_hash: string;
}
/** A Cosmos-SDK MsgCreateDerivativeLimitOrder */

export interface MsgCreateDerivativeLimitOrder {
  sender: string;
  order: DerivativeOrder;
}
/** A Cosmos-SDK MsgCreateDerivativeLimitOrder */

export interface MsgCreateDerivativeLimitOrderSDKType {
  sender: string;
  order: DerivativeOrderSDKType;
}
/** MsgCreateDerivativeLimitOrderResponse defines the Msg/CreateDerivativeMarketOrder response type. */

export interface MsgCreateDerivativeLimitOrderResponse {
  orderHash: string;
}
/** MsgCreateDerivativeLimitOrderResponse defines the Msg/CreateDerivativeMarketOrder response type. */

export interface MsgCreateDerivativeLimitOrderResponseSDKType {
  order_hash: string;
}
/** A Cosmos-SDK MsgCreateBinaryOptionsLimitOrder */

export interface MsgCreateBinaryOptionsLimitOrder {
  sender: string;
  order: DerivativeOrder;
}
/** A Cosmos-SDK MsgCreateBinaryOptionsLimitOrder */

export interface MsgCreateBinaryOptionsLimitOrderSDKType {
  sender: string;
  order: DerivativeOrderSDKType;
}
/** MsgCreateBinaryOptionsLimitOrderResponse defines the Msg/CreateBinaryOptionsLimitOrder response type. */

export interface MsgCreateBinaryOptionsLimitOrderResponse {
  orderHash: string;
}
/** MsgCreateBinaryOptionsLimitOrderResponse defines the Msg/CreateBinaryOptionsLimitOrder response type. */

export interface MsgCreateBinaryOptionsLimitOrderResponseSDKType {
  order_hash: string;
}
/** A Cosmos-SDK MsgBatchCreateDerivativeLimitOrders */

export interface MsgBatchCreateDerivativeLimitOrders {
  sender: string;
  orders: DerivativeOrder[];
}
/** A Cosmos-SDK MsgBatchCreateDerivativeLimitOrders */

export interface MsgBatchCreateDerivativeLimitOrdersSDKType {
  sender: string;
  orders: DerivativeOrderSDKType[];
}
/** MsgBatchCreateDerivativeLimitOrdersResponse defines the Msg/BatchCreateDerivativeLimitOrders response type. */

export interface MsgBatchCreateDerivativeLimitOrdersResponse {
  orderHashes: string[];
}
/** MsgBatchCreateDerivativeLimitOrdersResponse defines the Msg/BatchCreateDerivativeLimitOrders response type. */

export interface MsgBatchCreateDerivativeLimitOrdersResponseSDKType {
  order_hashes: string[];
}
/** MsgCancelSpotOrder defines the Msg/CancelSpotOrder response type. */

export interface MsgCancelSpotOrder {
  sender: string;
  marketId: string;
  subaccountId: string;
  orderHash: string;
}
/** MsgCancelSpotOrder defines the Msg/CancelSpotOrder response type. */

export interface MsgCancelSpotOrderSDKType {
  sender: string;
  market_id: string;
  subaccount_id: string;
  order_hash: string;
}
/** MsgCancelSpotOrderResponse defines the Msg/CancelSpotOrder response type. */

export interface MsgCancelSpotOrderResponse {}
/** MsgCancelSpotOrderResponse defines the Msg/CancelSpotOrder response type. */

export interface MsgCancelSpotOrderResponseSDKType {}
/** MsgBatchCancelSpotOrders defines the Msg/BatchCancelSpotOrders response type. */

export interface MsgBatchCancelSpotOrders {
  sender: string;
  data: OrderData[];
}
/** MsgBatchCancelSpotOrders defines the Msg/BatchCancelSpotOrders response type. */

export interface MsgBatchCancelSpotOrdersSDKType {
  sender: string;
  data: OrderDataSDKType[];
}
/** MsgBatchCancelSpotOrdersResponse defines the Msg/BatchCancelSpotOrders response type. */

export interface MsgBatchCancelSpotOrdersResponse {
  success: boolean[];
}
/** MsgBatchCancelSpotOrdersResponse defines the Msg/BatchCancelSpotOrders response type. */

export interface MsgBatchCancelSpotOrdersResponseSDKType {
  success: boolean[];
}
/** MsgBatchCancelBinaryOptionsOrders defines the Msg/BatchCancelBinaryOptionsOrders response type. */

export interface MsgBatchCancelBinaryOptionsOrders {
  sender: string;
  data: OrderData[];
}
/** MsgBatchCancelBinaryOptionsOrders defines the Msg/BatchCancelBinaryOptionsOrders response type. */

export interface MsgBatchCancelBinaryOptionsOrdersSDKType {
  sender: string;
  data: OrderDataSDKType[];
}
/** BatchCancelBinaryOptionsOrdersResponse defines the Msg/BatchCancelBinaryOptionsOrders response type. */

export interface MsgBatchCancelBinaryOptionsOrdersResponse {
  success: boolean[];
}
/** BatchCancelBinaryOptionsOrdersResponse defines the Msg/BatchCancelBinaryOptionsOrders response type. */

export interface MsgBatchCancelBinaryOptionsOrdersResponseSDKType {
  success: boolean[];
}
/** MsgBatchUpdateOrders defines the Msg/BatchUpdateOrders response type. */

export interface MsgBatchUpdateOrders {
  sender: string;
  /** subaccount_id only used for the spot_market_ids_to_cancel_all and derivative_market_ids_to_cancel_all. */

  subaccountId: string;
  spotMarketIdsToCancelAll: string[];
  derivativeMarketIdsToCancelAll: string[];
  spotOrdersToCancel?: OrderData[];
  derivativeOrdersToCancel?: OrderData[];
  spotOrdersToCreate?: SpotOrder[];
  derivativeOrdersToCreate?: DerivativeOrder[];
  binaryOptionsOrdersToCancel?: OrderData[];
  binaryOptionsMarketIdsToCancelAll: string[];
  binaryOptionsOrdersToCreate?: DerivativeOrder[];
}
/** MsgBatchUpdateOrders defines the Msg/BatchUpdateOrders response type. */

export interface MsgBatchUpdateOrdersSDKType {
  sender: string;
  /** subaccount_id only used for the spot_market_ids_to_cancel_all and derivative_market_ids_to_cancel_all. */

  subaccount_id: string;
  spot_market_ids_to_cancel_all: string[];
  derivative_market_ids_to_cancel_all: string[];
  spot_orders_to_cancel?: OrderDataSDKType[];
  derivative_orders_to_cancel?: OrderDataSDKType[];
  spot_orders_to_create?: SpotOrderSDKType[];
  derivative_orders_to_create?: DerivativeOrderSDKType[];
  binary_options_orders_to_cancel?: OrderDataSDKType[];
  binary_options_market_ids_to_cancel_all: string[];
  binary_options_orders_to_create?: DerivativeOrderSDKType[];
}
/** MsgBatchUpdateOrdersResponse defines the Msg/BatchUpdateOrders response type. */

export interface MsgBatchUpdateOrdersResponse {
  spotCancelSuccess: boolean[];
  derivativeCancelSuccess: boolean[];
  spotOrderHashes: string[];
  derivativeOrderHashes: string[];
  binaryOptionsCancelSuccess: boolean[];
  binaryOptionsOrderHashes: string[];
}
/** MsgBatchUpdateOrdersResponse defines the Msg/BatchUpdateOrders response type. */

export interface MsgBatchUpdateOrdersResponseSDKType {
  spot_cancel_success: boolean[];
  derivative_cancel_success: boolean[];
  spot_order_hashes: string[];
  derivative_order_hashes: string[];
  binary_options_cancel_success: boolean[];
  binary_options_order_hashes: string[];
}
/** A Cosmos-SDK MsgCreateDerivativeMarketOrder */

export interface MsgCreateDerivativeMarketOrder {
  sender: string;
  order: DerivativeOrder;
}
/** A Cosmos-SDK MsgCreateDerivativeMarketOrder */

export interface MsgCreateDerivativeMarketOrderSDKType {
  sender: string;
  order: DerivativeOrderSDKType;
}
/** MsgCreateDerivativeMarketOrderResponse defines the Msg/CreateDerivativeMarketOrder response type. */

export interface MsgCreateDerivativeMarketOrderResponse {
  orderHash: string;
}
/** MsgCreateDerivativeMarketOrderResponse defines the Msg/CreateDerivativeMarketOrder response type. */

export interface MsgCreateDerivativeMarketOrderResponseSDKType {
  order_hash: string;
}
/** A Cosmos-SDK MsgCreateBinaryOptionsMarketOrder */

export interface MsgCreateBinaryOptionsMarketOrder {
  sender: string;
  order: DerivativeOrder;
}
/** A Cosmos-SDK MsgCreateBinaryOptionsMarketOrder */

export interface MsgCreateBinaryOptionsMarketOrderSDKType {
  sender: string;
  order: DerivativeOrderSDKType;
}
/** MsgCreateBinaryOptionsMarketOrderResponse defines the Msg/CreateBinaryOptionsMarketOrder response type. */

export interface MsgCreateBinaryOptionsMarketOrderResponse {
  orderHash: string;
}
/** MsgCreateBinaryOptionsMarketOrderResponse defines the Msg/CreateBinaryOptionsMarketOrder response type. */

export interface MsgCreateBinaryOptionsMarketOrderResponseSDKType {
  order_hash: string;
}
/** MsgCancelDerivativeOrder defines the Msg/CancelDerivativeOrder response type. */

export interface MsgCancelDerivativeOrder {
  sender: string;
  marketId: string;
  subaccountId: string;
  orderHash: string;
  /** bitwise combination of OrderMask enum values */

  orderMask: number;
}
/** MsgCancelDerivativeOrder defines the Msg/CancelDerivativeOrder response type. */

export interface MsgCancelDerivativeOrderSDKType {
  sender: string;
  market_id: string;
  subaccount_id: string;
  order_hash: string;
  /** bitwise combination of OrderMask enum values */

  order_mask: number;
}
/** MsgCancelDerivativeOrderResponse defines the Msg/CancelDerivativeOrderResponse response type. */

export interface MsgCancelDerivativeOrderResponse {}
/** MsgCancelDerivativeOrderResponse defines the Msg/CancelDerivativeOrderResponse response type. */

export interface MsgCancelDerivativeOrderResponseSDKType {}
/** MsgCancelBinaryOptionsOrder defines the Msg/CancelBinaryOptionsOrder response type. */

export interface MsgCancelBinaryOptionsOrder {
  sender: string;
  marketId: string;
  subaccountId: string;
  orderHash: string;
  /** bitwise combination of OrderMask enum values */

  orderMask: number;
}
/** MsgCancelBinaryOptionsOrder defines the Msg/CancelBinaryOptionsOrder response type. */

export interface MsgCancelBinaryOptionsOrderSDKType {
  sender: string;
  market_id: string;
  subaccount_id: string;
  order_hash: string;
  /** bitwise combination of OrderMask enum values */

  order_mask: number;
}
/** MsgCancelBinaryOptionsOrderResponse defines the Msg/CancelBinaryOptionsOrderResponse response type. */

export interface MsgCancelBinaryOptionsOrderResponse {}
/** MsgCancelBinaryOptionsOrderResponse defines the Msg/CancelBinaryOptionsOrderResponse response type. */

export interface MsgCancelBinaryOptionsOrderResponseSDKType {}
export interface OrderData {
  marketId: string;
  subaccountId: string;
  orderHash: string;
  /** bitwise combination of OrderMask enum values */

  orderMask: number;
}
export interface OrderDataSDKType {
  market_id: string;
  subaccount_id: string;
  order_hash: string;
  /** bitwise combination of OrderMask enum values */

  order_mask: number;
}
/** MsgBatchCancelDerivativeOrders defines the Msg/CancelDerivativeOrders response type. */

export interface MsgBatchCancelDerivativeOrders {
  sender: string;
  data: OrderData[];
}
/** MsgBatchCancelDerivativeOrders defines the Msg/CancelDerivativeOrders response type. */

export interface MsgBatchCancelDerivativeOrdersSDKType {
  sender: string;
  data: OrderDataSDKType[];
}
/** MsgBatchCancelDerivativeOrdersResponse defines the Msg/CancelDerivativeOrderResponse response type. */

export interface MsgBatchCancelDerivativeOrdersResponse {
  success: boolean[];
}
/** MsgBatchCancelDerivativeOrdersResponse defines the Msg/CancelDerivativeOrderResponse response type. */

export interface MsgBatchCancelDerivativeOrdersResponseSDKType {
  success: boolean[];
}
/** A Cosmos-SDK MsgSubaccountTransfer */

export interface MsgSubaccountTransfer {
  sender: string;
  sourceSubaccountId: string;
  destinationSubaccountId: string;
  amount: Coin;
}
/** A Cosmos-SDK MsgSubaccountTransfer */

export interface MsgSubaccountTransferSDKType {
  sender: string;
  source_subaccount_id: string;
  destination_subaccount_id: string;
  amount: CoinSDKType;
}
/** MsgSubaccountTransferResponse defines the Msg/SubaccountTransfer response type. */

export interface MsgSubaccountTransferResponse {}
/** MsgSubaccountTransferResponse defines the Msg/SubaccountTransfer response type. */

export interface MsgSubaccountTransferResponseSDKType {}
/** A Cosmos-SDK MsgExternalTransfer */

export interface MsgExternalTransfer {
  sender: string;
  sourceSubaccountId: string;
  destinationSubaccountId: string;
  amount: Coin;
}
/** A Cosmos-SDK MsgExternalTransfer */

export interface MsgExternalTransferSDKType {
  sender: string;
  source_subaccount_id: string;
  destination_subaccount_id: string;
  amount: CoinSDKType;
}
/** MsgExternalTransferResponse defines the Msg/ExternalTransfer response type. */

export interface MsgExternalTransferResponse {}
/** MsgExternalTransferResponse defines the Msg/ExternalTransfer response type. */

export interface MsgExternalTransferResponseSDKType {}
/** A Cosmos-SDK MsgLiquidatePosition */

export interface MsgLiquidatePosition {
  sender: string;
  subaccountId: string;
  marketId: string;
  /** optional order to provide for liquidation */

  order?: DerivativeOrder;
}
/** A Cosmos-SDK MsgLiquidatePosition */

export interface MsgLiquidatePositionSDKType {
  sender: string;
  subaccount_id: string;
  market_id: string;
  /** optional order to provide for liquidation */

  order?: DerivativeOrderSDKType;
}
/** MsgLiquidatePositionResponse defines the Msg/LiquidatePosition response type. */

export interface MsgLiquidatePositionResponse {}
/** MsgLiquidatePositionResponse defines the Msg/LiquidatePosition response type. */

export interface MsgLiquidatePositionResponseSDKType {}
/** A Cosmos-SDK MsgIncreasePositionMargin */

export interface MsgIncreasePositionMargin {
  sender: string;
  sourceSubaccountId: string;
  destinationSubaccountId: string;
  marketId: string;
  /** amount defines the amount of margin to add to the position */

  amount: string;
}
/** A Cosmos-SDK MsgIncreasePositionMargin */

export interface MsgIncreasePositionMarginSDKType {
  sender: string;
  source_subaccount_id: string;
  destination_subaccount_id: string;
  market_id: string;
  /** amount defines the amount of margin to add to the position */

  amount: string;
}
/** MsgIncreasePositionMarginResponse defines the Msg/IncreasePositionMargin response type. */

export interface MsgIncreasePositionMarginResponse {}
/** MsgIncreasePositionMarginResponse defines the Msg/IncreasePositionMargin response type. */

export interface MsgIncreasePositionMarginResponseSDKType {}
/** MsgExec defines the Msg/Exec message type */

export interface MsgExec {
  sender: string;
  /** bank_funds defines the user's coins used to fund the execution */

  bankFunds: Coin[];
  /** deposits_subaccount_id defines the user's subaccountID to fund the execution */

  depositsSubaccountId: string;
  /** deposit_funds defines the fund amounts to fund the execution */

  depositFunds: Coin[];
  /** contract_address defines the contract address to execute */

  contractAddress: string;
  /** data defines the call data used when executing the contract */

  data: string;
}
/** MsgExec defines the Msg/Exec message type */

export interface MsgExecSDKType {
  sender: string;
  /** bank_funds defines the user's coins used to fund the execution */

  bank_funds: CoinSDKType[];
  /** deposits_subaccount_id defines the user's subaccountID to fund the execution */

  deposits_subaccount_id: string;
  /** deposit_funds defines the fund amounts to fund the execution */

  deposit_funds: CoinSDKType[];
  /** contract_address defines the contract address to execute */

  contract_address: string;
  /** data defines the call data used when executing the contract */

  data: string;
}
/** MsgExecResponse defines the Msg/Exec response type. */

export interface MsgExecResponse {}
/** MsgExecResponse defines the Msg/Exec response type. */

export interface MsgExecResponseSDKType {}
export interface SpotMarketParamUpdateProposal {
  title: string;
  description: string;
  marketId: string;
  /** maker_fee_rate defines the trade fee rate for makers on the spot market */

  makerFeeRate?: string;
  /** taker_fee_rate defines the trade fee rate for takers on the spot market */

  takerFeeRate?: string;
  /** relayer_fee_share_rate defines the relayer fee share rate for the spot market */

  relayerFeeShareRate?: string;
  /** min_price_tick_size defines the minimum tick size of the order's price and margin */

  minPriceTickSize?: string;
  /** min_quantity_tick_size defines the minimum tick size of the order's quantity */

  minQuantityTickSize?: string;
  status: MarketStatus;
}
export interface SpotMarketParamUpdateProposalSDKType {
  title: string;
  description: string;
  market_id: string;
  /** maker_fee_rate defines the trade fee rate for makers on the spot market */

  maker_fee_rate?: string;
  /** taker_fee_rate defines the trade fee rate for takers on the spot market */

  taker_fee_rate?: string;
  /** relayer_fee_share_rate defines the relayer fee share rate for the spot market */

  relayer_fee_share_rate?: string;
  /** min_price_tick_size defines the minimum tick size of the order's price and margin */

  min_price_tick_size?: string;
  /** min_quantity_tick_size defines the minimum tick size of the order's quantity */

  min_quantity_tick_size?: string;
  status: MarketStatusSDKType;
}
export interface ExchangeEnableProposal {
  title: string;
  description: string;
  exchangeType: ExchangeType;
}
export interface ExchangeEnableProposalSDKType {
  title: string;
  description: string;
  exchangeType: ExchangeTypeSDKType;
}
export interface BatchExchangeModificationProposal {
  title: string;
  description: string;
  spotMarketParamUpdateProposals: SpotMarketParamUpdateProposal[];
  derivativeMarketParamUpdateProposals: DerivativeMarketParamUpdateProposal[];
  spotMarketLaunchProposals: SpotMarketLaunchProposal[];
  perpetualMarketLaunchProposals: PerpetualMarketLaunchProposal[];
  expiryFuturesMarketLaunchProposals: ExpiryFuturesMarketLaunchProposal[];
  tradingRewardCampaignUpdateProposal: TradingRewardCampaignUpdateProposal;
  binaryOptionsMarketLaunchProposals: BinaryOptionsMarketLaunchProposal[];
  binaryOptionsParamUpdateProposals: BinaryOptionsMarketParamUpdateProposal[];
  denomDecimalsUpdateProposal: UpdateDenomDecimalsProposal;
}
export interface BatchExchangeModificationProposalSDKType {
  title: string;
  description: string;
  spot_market_param_update_proposals: SpotMarketParamUpdateProposalSDKType[];
  derivative_market_param_update_proposals: DerivativeMarketParamUpdateProposalSDKType[];
  spot_market_launch_proposals: SpotMarketLaunchProposalSDKType[];
  perpetual_market_launch_proposals: PerpetualMarketLaunchProposalSDKType[];
  expiry_futures_market_launch_proposals: ExpiryFuturesMarketLaunchProposalSDKType[];
  trading_reward_campaign_update_proposal: TradingRewardCampaignUpdateProposalSDKType;
  binary_options_market_launch_proposals: BinaryOptionsMarketLaunchProposalSDKType[];
  binary_options_param_update_proposals: BinaryOptionsMarketParamUpdateProposalSDKType[];
  denom_decimals_update_proposal: UpdateDenomDecimalsProposalSDKType;
}
/** SpotMarketLaunchProposal defines a SDK message for proposing a new spot market through governance */

export interface SpotMarketLaunchProposal {
  title: string;
  description: string;
  /** Ticker for the spot market. */

  ticker: string;
  /** type of coin to use as the base currency */

  baseDenom: string;
  /** type of coin to use as the quote currency */

  quoteDenom: string;
  /** min_price_tick_size defines the minimum tick size of the order's price */

  minPriceTickSize: string;
  /** min_quantity_tick_size defines the minimum tick size of the order's quantity */

  minQuantityTickSize: string;
  /** maker_fee_rate defines the fee percentage makers pay when trading */

  makerFeeRate?: string;
  /** taker_fee_rate defines the fee percentage takers pay when trading */

  takerFeeRate?: string;
}
/** SpotMarketLaunchProposal defines a SDK message for proposing a new spot market through governance */

export interface SpotMarketLaunchProposalSDKType {
  title: string;
  description: string;
  /** Ticker for the spot market. */

  ticker: string;
  /** type of coin to use as the base currency */

  base_denom: string;
  /** type of coin to use as the quote currency */

  quote_denom: string;
  /** min_price_tick_size defines the minimum tick size of the order's price */

  min_price_tick_size: string;
  /** min_quantity_tick_size defines the minimum tick size of the order's quantity */

  min_quantity_tick_size: string;
  /** maker_fee_rate defines the fee percentage makers pay when trading */

  maker_fee_rate?: string;
  /** taker_fee_rate defines the fee percentage takers pay when trading */

  taker_fee_rate?: string;
}
/** PerpetualMarketLaunchProposal defines a SDK message for proposing a new perpetual futures market through governance */

export interface PerpetualMarketLaunchProposal {
  title: string;
  description: string;
  /** Ticker for the derivative market. */

  ticker: string;
  /** type of coin to use as the base currency */

  quoteDenom: string;
  /** Oracle base currency */

  oracleBase: string;
  /** Oracle quote currency */

  oracleQuote: string;
  /** Scale factor for oracle prices. */

  oracleScaleFactor: number;
  /** Oracle type */

  oracleType: OracleType;
  /** initial_margin_ratio defines the initial margin ratio for the derivative market */

  initialMarginRatio: string;
  /** maintenance_margin_ratio defines the maintenance margin ratio for the derivative market */

  maintenanceMarginRatio: string;
  /** maker_fee_rate defines the exchange trade fee for makers for the derivative market */

  makerFeeRate: string;
  /** taker_fee_rate defines the exchange trade fee for takers for the derivative market */

  takerFeeRate: string;
  /** min_price_tick_size defines the minimum tick size of the order's price and margin */

  minPriceTickSize: string;
  /** min_quantity_tick_size defines the minimum tick size of the order's quantity */

  minQuantityTickSize: string;
}
/** PerpetualMarketLaunchProposal defines a SDK message for proposing a new perpetual futures market through governance */

export interface PerpetualMarketLaunchProposalSDKType {
  title: string;
  description: string;
  /** Ticker for the derivative market. */

  ticker: string;
  /** type of coin to use as the base currency */

  quote_denom: string;
  /** Oracle base currency */

  oracle_base: string;
  /** Oracle quote currency */

  oracle_quote: string;
  /** Scale factor for oracle prices. */

  oracle_scale_factor: number;
  /** Oracle type */

  oracle_type: OracleTypeSDKType;
  /** initial_margin_ratio defines the initial margin ratio for the derivative market */

  initial_margin_ratio: string;
  /** maintenance_margin_ratio defines the maintenance margin ratio for the derivative market */

  maintenance_margin_ratio: string;
  /** maker_fee_rate defines the exchange trade fee for makers for the derivative market */

  maker_fee_rate: string;
  /** taker_fee_rate defines the exchange trade fee for takers for the derivative market */

  taker_fee_rate: string;
  /** min_price_tick_size defines the minimum tick size of the order's price and margin */

  min_price_tick_size: string;
  /** min_quantity_tick_size defines the minimum tick size of the order's quantity */

  min_quantity_tick_size: string;
}
export interface BinaryOptionsMarketLaunchProposal {
  title: string;
  description: string;
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
  /** maker_fee_rate defines the maker fee rate of a binary options market */

  makerFeeRate: string;
  /** taker_fee_rate defines the taker fee rate of a derivative market */

  takerFeeRate: string;
  /** min_price_tick_size defines the minimum tick size that the price and margin required for orders in the market */

  minPriceTickSize: string;
  /** min_quantity_tick_size defines the minimum tick size of the quantity required for orders in the market */

  minQuantityTickSize: string;
}
export interface BinaryOptionsMarketLaunchProposalSDKType {
  title: string;
  description: string;
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
  /** maker_fee_rate defines the maker fee rate of a binary options market */

  maker_fee_rate: string;
  /** taker_fee_rate defines the taker fee rate of a derivative market */

  taker_fee_rate: string;
  /** min_price_tick_size defines the minimum tick size that the price and margin required for orders in the market */

  min_price_tick_size: string;
  /** min_quantity_tick_size defines the minimum tick size of the quantity required for orders in the market */

  min_quantity_tick_size: string;
}
/** ExpiryFuturesMarketLaunchProposal defines a SDK message for proposing a new expiry futures market through governance */

export interface ExpiryFuturesMarketLaunchProposal {
  title: string;
  description: string;
  /** Ticker for the derivative market. */

  ticker: string;
  /** type of coin to use as the quote currency */

  quoteDenom: string;
  /** Oracle base currency */

  oracleBase: string;
  /** Oracle quote currency */

  oracleQuote: string;
  /** Scale factor for oracle prices. */

  oracleScaleFactor: number;
  /** Oracle type */

  oracleType: OracleType;
  /** Expiration time of the market */

  expiry: Long;
  /** initial_margin_ratio defines the initial margin ratio for the derivative market */

  initialMarginRatio: string;
  /** maintenance_margin_ratio defines the maintenance margin ratio for the derivative market */

  maintenanceMarginRatio: string;
  /** maker_fee_rate defines the exchange trade fee for makers for the derivative market */

  makerFeeRate: string;
  /** taker_fee_rate defines the exchange trade fee for takers for the derivative market */

  takerFeeRate: string;
  /** min_price_tick_size defines the minimum tick size of the order's price and margin */

  minPriceTickSize: string;
  /** min_quantity_tick_size defines the minimum tick size of the order's quantity */

  minQuantityTickSize: string;
}
/** ExpiryFuturesMarketLaunchProposal defines a SDK message for proposing a new expiry futures market through governance */

export interface ExpiryFuturesMarketLaunchProposalSDKType {
  title: string;
  description: string;
  /** Ticker for the derivative market. */

  ticker: string;
  /** type of coin to use as the quote currency */

  quote_denom: string;
  /** Oracle base currency */

  oracle_base: string;
  /** Oracle quote currency */

  oracle_quote: string;
  /** Scale factor for oracle prices. */

  oracle_scale_factor: number;
  /** Oracle type */

  oracle_type: OracleTypeSDKType;
  /** Expiration time of the market */

  expiry: Long;
  /** initial_margin_ratio defines the initial margin ratio for the derivative market */

  initial_margin_ratio: string;
  /** maintenance_margin_ratio defines the maintenance margin ratio for the derivative market */

  maintenance_margin_ratio: string;
  /** maker_fee_rate defines the exchange trade fee for makers for the derivative market */

  maker_fee_rate: string;
  /** taker_fee_rate defines the exchange trade fee for takers for the derivative market */

  taker_fee_rate: string;
  /** min_price_tick_size defines the minimum tick size of the order's price and margin */

  min_price_tick_size: string;
  /** min_quantity_tick_size defines the minimum tick size of the order's quantity */

  min_quantity_tick_size: string;
}
export interface DerivativeMarketParamUpdateProposal {
  title: string;
  description: string;
  marketId: string;
  /** initial_margin_ratio defines the initial margin ratio for the derivative market */

  initialMarginRatio?: string;
  /** maintenance_margin_ratio defines the maintenance margin ratio for the derivative market */

  maintenanceMarginRatio?: string;
  /** maker_fee_rate defines the exchange trade fee for makers for the derivative market */

  makerFeeRate?: string;
  /** taker_fee_rate defines the exchange trade fee for takers for the derivative market */

  takerFeeRate?: string;
  /** relayer_fee_share_rate defines the relayer fee share rate for the derivative market */

  relayerFeeShareRate?: string;
  /** min_price_tick_size defines the minimum tick size of the order's price and margin */

  minPriceTickSize?: string;
  /** min_quantity_tick_size defines the minimum tick size of the order's quantity */

  minQuantityTickSize?: string;
  /** hourly_interest_rate defines the hourly interest rate */

  HourlyInterestRate?: string;
  /** hourly_funding_rate_cap defines the maximum absolute value of the hourly funding rate */

  HourlyFundingRateCap?: string;
  status: MarketStatus;
  oracleParams: OracleParams;
}
export interface DerivativeMarketParamUpdateProposalSDKType {
  title: string;
  description: string;
  market_id: string;
  /** initial_margin_ratio defines the initial margin ratio for the derivative market */

  initial_margin_ratio?: string;
  /** maintenance_margin_ratio defines the maintenance margin ratio for the derivative market */

  maintenance_margin_ratio?: string;
  /** maker_fee_rate defines the exchange trade fee for makers for the derivative market */

  maker_fee_rate?: string;
  /** taker_fee_rate defines the exchange trade fee for takers for the derivative market */

  taker_fee_rate?: string;
  /** relayer_fee_share_rate defines the relayer fee share rate for the derivative market */

  relayer_fee_share_rate?: string;
  /** min_price_tick_size defines the minimum tick size of the order's price and margin */

  min_price_tick_size?: string;
  /** min_quantity_tick_size defines the minimum tick size of the order's quantity */

  min_quantity_tick_size?: string;
  /** hourly_interest_rate defines the hourly interest rate */

  HourlyInterestRate?: string;
  /** hourly_funding_rate_cap defines the maximum absolute value of the hourly funding rate */

  HourlyFundingRateCap?: string;
  status: MarketStatusSDKType;
  oracle_params: OracleParamsSDKType;
}
export interface MarketForcedSettlementProposal {
  title: string;
  description: string;
  marketId: string;
  settlementPrice?: string;
}
export interface MarketForcedSettlementProposalSDKType {
  title: string;
  description: string;
  market_id: string;
  settlement_price?: string;
}
export interface UpdateDenomDecimalsProposal {
  title: string;
  description: string;
  denomDecimals: DenomDecimals[];
}
export interface UpdateDenomDecimalsProposalSDKType {
  title: string;
  description: string;
  denom_decimals: DenomDecimalsSDKType[];
}
export interface DenomDecimals {
  denom: string;
  decimals: Long;
}
export interface DenomDecimalsSDKType {
  denom: string;
  decimals: Long;
}
export interface BinaryOptionsMarketParamUpdateProposal {
  title: string;
  description: string;
  marketId: string;
  /** maker_fee_rate defines the exchange trade fee for makers for the derivative market */

  makerFeeRate?: string;
  /** taker_fee_rate defines the exchange trade fee for takers for the derivative market */

  takerFeeRate?: string;
  /** relayer_fee_share_rate defines the relayer fee share rate for the derivative market */

  relayerFeeShareRate?: string;
  /** min_price_tick_size defines the minimum tick size of the order's price and margin */

  minPriceTickSize?: string;
  /** min_quantity_tick_size defines the minimum tick size of the order's quantity */

  minQuantityTickSize?: string;
  /** expiration timestamp */

  expirationTimestamp: Long;
  /** expiration timestamp */

  settlementTimestamp: Long;
  /** new price at which market will be settled */

  settlementPrice?: string;
  /** admin of the market */

  admin: string;
  status: MarketStatus;
  oracleParams: ProviderOracleParams;
}
export interface BinaryOptionsMarketParamUpdateProposalSDKType {
  title: string;
  description: string;
  market_id: string;
  /** maker_fee_rate defines the exchange trade fee for makers for the derivative market */

  maker_fee_rate?: string;
  /** taker_fee_rate defines the exchange trade fee for takers for the derivative market */

  taker_fee_rate?: string;
  /** relayer_fee_share_rate defines the relayer fee share rate for the derivative market */

  relayer_fee_share_rate?: string;
  /** min_price_tick_size defines the minimum tick size of the order's price and margin */

  min_price_tick_size?: string;
  /** min_quantity_tick_size defines the minimum tick size of the order's quantity */

  min_quantity_tick_size?: string;
  /** expiration timestamp */

  expiration_timestamp: Long;
  /** expiration timestamp */

  settlement_timestamp: Long;
  /** new price at which market will be settled */

  settlement_price?: string;
  /** admin of the market */

  admin: string;
  status: MarketStatusSDKType;
  oracle_params: ProviderOracleParamsSDKType;
}
export interface ProviderOracleParams {
  /** Oracle base currency */
  symbol: string;
  /** Oracle quote currency */

  provider: string;
  /** Scale factor for oracle prices. */

  oracleScaleFactor: number;
  /** Oracle type */

  oracleType: OracleType;
}
export interface ProviderOracleParamsSDKType {
  /** Oracle base currency */
  symbol: string;
  /** Oracle quote currency */

  provider: string;
  /** Scale factor for oracle prices. */

  oracle_scale_factor: number;
  /** Oracle type */

  oracle_type: OracleTypeSDKType;
}
export interface OracleParams {
  /** Oracle base currency */
  oracleBase: string;
  /** Oracle quote currency */

  oracleQuote: string;
  /** Scale factor for oracle prices. */

  oracleScaleFactor: number;
  /** Oracle type */

  oracleType: OracleType;
}
export interface OracleParamsSDKType {
  /** Oracle base currency */
  oracle_base: string;
  /** Oracle quote currency */

  oracle_quote: string;
  /** Scale factor for oracle prices. */

  oracle_scale_factor: number;
  /** Oracle type */

  oracle_type: OracleTypeSDKType;
}
export interface TradingRewardCampaignLaunchProposal {
  title: string;
  description: string;
  campaignInfo: TradingRewardCampaignInfo;
  campaignRewardPools: CampaignRewardPool[];
}
export interface TradingRewardCampaignLaunchProposalSDKType {
  title: string;
  description: string;
  campaign_info: TradingRewardCampaignInfoSDKType;
  campaign_reward_pools: CampaignRewardPoolSDKType[];
}
export interface TradingRewardCampaignUpdateProposal {
  title: string;
  description: string;
  campaignInfo: TradingRewardCampaignInfo;
  campaignRewardPoolsAdditions: CampaignRewardPool[];
  campaignRewardPoolsUpdates: CampaignRewardPool[];
}
export interface TradingRewardCampaignUpdateProposalSDKType {
  title: string;
  description: string;
  campaign_info: TradingRewardCampaignInfoSDKType;
  campaign_reward_pools_additions: CampaignRewardPoolSDKType[];
  campaign_reward_pools_updates: CampaignRewardPoolSDKType[];
}
export interface RewardPointUpdate {
  accountAddress: string;
  /** new_points overwrites the current trading reward points for the account */

  newPoints: string;
}
export interface RewardPointUpdateSDKType {
  account_address: string;
  /** new_points overwrites the current trading reward points for the account */

  new_points: string;
}
export interface TradingRewardPendingPointsUpdateProposal {
  title: string;
  description: string;
  pendingPoolTimestamp: Long;
  rewardPointUpdates: RewardPointUpdate[];
}
export interface TradingRewardPendingPointsUpdateProposalSDKType {
  title: string;
  description: string;
  pending_pool_timestamp: Long;
  reward_point_updates: RewardPointUpdateSDKType[];
}
export interface FeeDiscountProposal {
  title: string;
  description: string;
  schedule: FeeDiscountSchedule;
}
export interface FeeDiscountProposalSDKType {
  title: string;
  description: string;
  schedule: FeeDiscountScheduleSDKType;
}
export interface BatchCommunityPoolSpendProposal {
  title: string;
  description: string;
  proposals: CommunityPoolSpendProposal[];
}
export interface BatchCommunityPoolSpendProposalSDKType {
  title: string;
  description: string;
  proposals: CommunityPoolSpendProposalSDKType[];
}
/** A Cosmos-SDK MsgRewardsOptOut */

export interface MsgRewardsOptOut {
  sender: string;
}
/** A Cosmos-SDK MsgRewardsOptOut */

export interface MsgRewardsOptOutSDKType {
  sender: string;
}
/** MsgRewardsOptOutResponse defines the Msg/RewardsOptOut response type. */

export interface MsgRewardsOptOutResponse {}
/** MsgRewardsOptOutResponse defines the Msg/RewardsOptOut response type. */

export interface MsgRewardsOptOutResponseSDKType {}
/** MsgAdminUpdateBinaryOptionsMarket is used by the market Admin to operate the market */

export interface MsgAdminUpdateBinaryOptionsMarket {
  sender: string;
  marketId: string;
  /** new price at which market will be settled */

  settlementPrice?: string;
  /** expiration timestamp */

  expirationTimestamp: Long;
  /** expiration timestamp */

  settlementTimestamp: Long;
  /** Status of the market */

  status: MarketStatus;
}
/** MsgAdminUpdateBinaryOptionsMarket is used by the market Admin to operate the market */

export interface MsgAdminUpdateBinaryOptionsMarketSDKType {
  sender: string;
  market_id: string;
  /** new price at which market will be settled */

  settlement_price?: string;
  /** expiration timestamp */

  expiration_timestamp: Long;
  /** expiration timestamp */

  settlement_timestamp: Long;
  /** Status of the market */

  status: MarketStatusSDKType;
}
/** MsgAdminUpdateBinaryOptionsMarketResponse is the response for AdminUpdateBinaryOptionsMarket rpc method */

export interface MsgAdminUpdateBinaryOptionsMarketResponse {}
/** MsgAdminUpdateBinaryOptionsMarketResponse is the response for AdminUpdateBinaryOptionsMarket rpc method */

export interface MsgAdminUpdateBinaryOptionsMarketResponseSDKType {}

function createBaseMsgDeposit(): MsgDeposit {
  return {
    sender: "",
    subaccountId: "",
    amount: undefined
  };
}

export const MsgDeposit = {
  encode(message: MsgDeposit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    if (message.subaccountId !== "") {
      writer.uint32(18).string(message.subaccountId);
    }

    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeposit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeposit();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.subaccountId = reader.string();
          break;

        case 3:
          message.amount = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgDeposit>): MsgDeposit {
    const message = createBaseMsgDeposit();
    message.sender = object.sender ?? "";
    message.subaccountId = object.subaccountId ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  }

};

function createBaseMsgDepositResponse(): MsgDepositResponse {
  return {};
}

export const MsgDepositResponse = {
  encode(_: MsgDepositResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDepositResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDepositResponse();

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

  fromPartial(_: DeepPartial<MsgDepositResponse>): MsgDepositResponse {
    const message = createBaseMsgDepositResponse();
    return message;
  }

};

function createBaseMsgWithdraw(): MsgWithdraw {
  return {
    sender: "",
    subaccountId: "",
    amount: undefined
  };
}

export const MsgWithdraw = {
  encode(message: MsgWithdraw, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    if (message.subaccountId !== "") {
      writer.uint32(18).string(message.subaccountId);
    }

    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdraw {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdraw();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.subaccountId = reader.string();
          break;

        case 3:
          message.amount = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgWithdraw>): MsgWithdraw {
    const message = createBaseMsgWithdraw();
    message.sender = object.sender ?? "";
    message.subaccountId = object.subaccountId ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  }

};

function createBaseMsgWithdrawResponse(): MsgWithdrawResponse {
  return {};
}

export const MsgWithdrawResponse = {
  encode(_: MsgWithdrawResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawResponse();

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

  fromPartial(_: DeepPartial<MsgWithdrawResponse>): MsgWithdrawResponse {
    const message = createBaseMsgWithdrawResponse();
    return message;
  }

};

function createBaseMsgCreateSpotLimitOrder(): MsgCreateSpotLimitOrder {
  return {
    sender: "",
    order: undefined
  };
}

export const MsgCreateSpotLimitOrder = {
  encode(message: MsgCreateSpotLimitOrder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    if (message.order !== undefined) {
      SpotOrder.encode(message.order, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateSpotLimitOrder {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateSpotLimitOrder();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.order = SpotOrder.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgCreateSpotLimitOrder>): MsgCreateSpotLimitOrder {
    const message = createBaseMsgCreateSpotLimitOrder();
    message.sender = object.sender ?? "";
    message.order = object.order !== undefined && object.order !== null ? SpotOrder.fromPartial(object.order) : undefined;
    return message;
  }

};

function createBaseMsgCreateSpotLimitOrderResponse(): MsgCreateSpotLimitOrderResponse {
  return {
    orderHash: ""
  };
}

export const MsgCreateSpotLimitOrderResponse = {
  encode(message: MsgCreateSpotLimitOrderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.orderHash !== "") {
      writer.uint32(10).string(message.orderHash);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateSpotLimitOrderResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateSpotLimitOrderResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.orderHash = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgCreateSpotLimitOrderResponse>): MsgCreateSpotLimitOrderResponse {
    const message = createBaseMsgCreateSpotLimitOrderResponse();
    message.orderHash = object.orderHash ?? "";
    return message;
  }

};

function createBaseMsgBatchCreateSpotLimitOrders(): MsgBatchCreateSpotLimitOrders {
  return {
    sender: "",
    orders: []
  };
}

export const MsgBatchCreateSpotLimitOrders = {
  encode(message: MsgBatchCreateSpotLimitOrders, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    for (const v of message.orders) {
      SpotOrder.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBatchCreateSpotLimitOrders {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBatchCreateSpotLimitOrders();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.orders.push(SpotOrder.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgBatchCreateSpotLimitOrders>): MsgBatchCreateSpotLimitOrders {
    const message = createBaseMsgBatchCreateSpotLimitOrders();
    message.sender = object.sender ?? "";
    message.orders = object.orders?.map(e => SpotOrder.fromPartial(e)) || [];
    return message;
  }

};

function createBaseMsgBatchCreateSpotLimitOrdersResponse(): MsgBatchCreateSpotLimitOrdersResponse {
  return {
    orderHashes: []
  };
}

export const MsgBatchCreateSpotLimitOrdersResponse = {
  encode(message: MsgBatchCreateSpotLimitOrdersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.orderHashes) {
      writer.uint32(10).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBatchCreateSpotLimitOrdersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBatchCreateSpotLimitOrdersResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.orderHashes.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgBatchCreateSpotLimitOrdersResponse>): MsgBatchCreateSpotLimitOrdersResponse {
    const message = createBaseMsgBatchCreateSpotLimitOrdersResponse();
    message.orderHashes = object.orderHashes?.map(e => e) || [];
    return message;
  }

};

function createBaseMsgInstantSpotMarketLaunch(): MsgInstantSpotMarketLaunch {
  return {
    sender: "",
    ticker: "",
    baseDenom: "",
    quoteDenom: "",
    minPriceTickSize: "",
    minQuantityTickSize: ""
  };
}

export const MsgInstantSpotMarketLaunch = {
  encode(message: MsgInstantSpotMarketLaunch, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    if (message.ticker !== "") {
      writer.uint32(18).string(message.ticker);
    }

    if (message.baseDenom !== "") {
      writer.uint32(26).string(message.baseDenom);
    }

    if (message.quoteDenom !== "") {
      writer.uint32(34).string(message.quoteDenom);
    }

    if (message.minPriceTickSize !== "") {
      writer.uint32(42).string(message.minPriceTickSize);
    }

    if (message.minQuantityTickSize !== "") {
      writer.uint32(50).string(message.minQuantityTickSize);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgInstantSpotMarketLaunch {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgInstantSpotMarketLaunch();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.ticker = reader.string();
          break;

        case 3:
          message.baseDenom = reader.string();
          break;

        case 4:
          message.quoteDenom = reader.string();
          break;

        case 5:
          message.minPriceTickSize = reader.string();
          break;

        case 6:
          message.minQuantityTickSize = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgInstantSpotMarketLaunch>): MsgInstantSpotMarketLaunch {
    const message = createBaseMsgInstantSpotMarketLaunch();
    message.sender = object.sender ?? "";
    message.ticker = object.ticker ?? "";
    message.baseDenom = object.baseDenom ?? "";
    message.quoteDenom = object.quoteDenom ?? "";
    message.minPriceTickSize = object.minPriceTickSize ?? "";
    message.minQuantityTickSize = object.minQuantityTickSize ?? "";
    return message;
  }

};

function createBaseMsgInstantSpotMarketLaunchResponse(): MsgInstantSpotMarketLaunchResponse {
  return {};
}

export const MsgInstantSpotMarketLaunchResponse = {
  encode(_: MsgInstantSpotMarketLaunchResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgInstantSpotMarketLaunchResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgInstantSpotMarketLaunchResponse();

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

  fromPartial(_: DeepPartial<MsgInstantSpotMarketLaunchResponse>): MsgInstantSpotMarketLaunchResponse {
    const message = createBaseMsgInstantSpotMarketLaunchResponse();
    return message;
  }

};

function createBaseMsgInstantPerpetualMarketLaunch(): MsgInstantPerpetualMarketLaunch {
  return {
    sender: "",
    ticker: "",
    quoteDenom: "",
    oracleBase: "",
    oracleQuote: "",
    oracleScaleFactor: 0,
    oracleType: 0,
    makerFeeRate: "",
    takerFeeRate: "",
    initialMarginRatio: "",
    maintenanceMarginRatio: "",
    minPriceTickSize: "",
    minQuantityTickSize: ""
  };
}

export const MsgInstantPerpetualMarketLaunch = {
  encode(message: MsgInstantPerpetualMarketLaunch, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    if (message.ticker !== "") {
      writer.uint32(18).string(message.ticker);
    }

    if (message.quoteDenom !== "") {
      writer.uint32(26).string(message.quoteDenom);
    }

    if (message.oracleBase !== "") {
      writer.uint32(34).string(message.oracleBase);
    }

    if (message.oracleQuote !== "") {
      writer.uint32(42).string(message.oracleQuote);
    }

    if (message.oracleScaleFactor !== 0) {
      writer.uint32(48).uint32(message.oracleScaleFactor);
    }

    if (message.oracleType !== 0) {
      writer.uint32(56).int32(message.oracleType);
    }

    if (message.makerFeeRate !== "") {
      writer.uint32(66).string(message.makerFeeRate);
    }

    if (message.takerFeeRate !== "") {
      writer.uint32(74).string(message.takerFeeRate);
    }

    if (message.initialMarginRatio !== "") {
      writer.uint32(82).string(message.initialMarginRatio);
    }

    if (message.maintenanceMarginRatio !== "") {
      writer.uint32(90).string(message.maintenanceMarginRatio);
    }

    if (message.minPriceTickSize !== "") {
      writer.uint32(98).string(message.minPriceTickSize);
    }

    if (message.minQuantityTickSize !== "") {
      writer.uint32(106).string(message.minQuantityTickSize);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgInstantPerpetualMarketLaunch {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgInstantPerpetualMarketLaunch();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.ticker = reader.string();
          break;

        case 3:
          message.quoteDenom = reader.string();
          break;

        case 4:
          message.oracleBase = reader.string();
          break;

        case 5:
          message.oracleQuote = reader.string();
          break;

        case 6:
          message.oracleScaleFactor = reader.uint32();
          break;

        case 7:
          message.oracleType = (reader.int32() as any);
          break;

        case 8:
          message.makerFeeRate = reader.string();
          break;

        case 9:
          message.takerFeeRate = reader.string();
          break;

        case 10:
          message.initialMarginRatio = reader.string();
          break;

        case 11:
          message.maintenanceMarginRatio = reader.string();
          break;

        case 12:
          message.minPriceTickSize = reader.string();
          break;

        case 13:
          message.minQuantityTickSize = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgInstantPerpetualMarketLaunch>): MsgInstantPerpetualMarketLaunch {
    const message = createBaseMsgInstantPerpetualMarketLaunch();
    message.sender = object.sender ?? "";
    message.ticker = object.ticker ?? "";
    message.quoteDenom = object.quoteDenom ?? "";
    message.oracleBase = object.oracleBase ?? "";
    message.oracleQuote = object.oracleQuote ?? "";
    message.oracleScaleFactor = object.oracleScaleFactor ?? 0;
    message.oracleType = object.oracleType ?? 0;
    message.makerFeeRate = object.makerFeeRate ?? "";
    message.takerFeeRate = object.takerFeeRate ?? "";
    message.initialMarginRatio = object.initialMarginRatio ?? "";
    message.maintenanceMarginRatio = object.maintenanceMarginRatio ?? "";
    message.minPriceTickSize = object.minPriceTickSize ?? "";
    message.minQuantityTickSize = object.minQuantityTickSize ?? "";
    return message;
  }

};

function createBaseMsgInstantPerpetualMarketLaunchResponse(): MsgInstantPerpetualMarketLaunchResponse {
  return {};
}

export const MsgInstantPerpetualMarketLaunchResponse = {
  encode(_: MsgInstantPerpetualMarketLaunchResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgInstantPerpetualMarketLaunchResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgInstantPerpetualMarketLaunchResponse();

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

  fromPartial(_: DeepPartial<MsgInstantPerpetualMarketLaunchResponse>): MsgInstantPerpetualMarketLaunchResponse {
    const message = createBaseMsgInstantPerpetualMarketLaunchResponse();
    return message;
  }

};

function createBaseMsgInstantBinaryOptionsMarketLaunch(): MsgInstantBinaryOptionsMarketLaunch {
  return {
    sender: "",
    ticker: "",
    oracleSymbol: "",
    oracleProvider: "",
    oracleType: 0,
    oracleScaleFactor: 0,
    makerFeeRate: "",
    takerFeeRate: "",
    expirationTimestamp: Long.ZERO,
    settlementTimestamp: Long.ZERO,
    admin: "",
    quoteDenom: "",
    minPriceTickSize: "",
    minQuantityTickSize: ""
  };
}

export const MsgInstantBinaryOptionsMarketLaunch = {
  encode(message: MsgInstantBinaryOptionsMarketLaunch, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    if (message.ticker !== "") {
      writer.uint32(18).string(message.ticker);
    }

    if (message.oracleSymbol !== "") {
      writer.uint32(26).string(message.oracleSymbol);
    }

    if (message.oracleProvider !== "") {
      writer.uint32(34).string(message.oracleProvider);
    }

    if (message.oracleType !== 0) {
      writer.uint32(40).int32(message.oracleType);
    }

    if (message.oracleScaleFactor !== 0) {
      writer.uint32(48).uint32(message.oracleScaleFactor);
    }

    if (message.makerFeeRate !== "") {
      writer.uint32(58).string(message.makerFeeRate);
    }

    if (message.takerFeeRate !== "") {
      writer.uint32(66).string(message.takerFeeRate);
    }

    if (!message.expirationTimestamp.isZero()) {
      writer.uint32(72).int64(message.expirationTimestamp);
    }

    if (!message.settlementTimestamp.isZero()) {
      writer.uint32(80).int64(message.settlementTimestamp);
    }

    if (message.admin !== "") {
      writer.uint32(90).string(message.admin);
    }

    if (message.quoteDenom !== "") {
      writer.uint32(98).string(message.quoteDenom);
    }

    if (message.minPriceTickSize !== "") {
      writer.uint32(106).string(message.minPriceTickSize);
    }

    if (message.minQuantityTickSize !== "") {
      writer.uint32(114).string(message.minQuantityTickSize);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgInstantBinaryOptionsMarketLaunch {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgInstantBinaryOptionsMarketLaunch();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.ticker = reader.string();
          break;

        case 3:
          message.oracleSymbol = reader.string();
          break;

        case 4:
          message.oracleProvider = reader.string();
          break;

        case 5:
          message.oracleType = (reader.int32() as any);
          break;

        case 6:
          message.oracleScaleFactor = reader.uint32();
          break;

        case 7:
          message.makerFeeRate = reader.string();
          break;

        case 8:
          message.takerFeeRate = reader.string();
          break;

        case 9:
          message.expirationTimestamp = (reader.int64() as Long);
          break;

        case 10:
          message.settlementTimestamp = (reader.int64() as Long);
          break;

        case 11:
          message.admin = reader.string();
          break;

        case 12:
          message.quoteDenom = reader.string();
          break;

        case 13:
          message.minPriceTickSize = reader.string();
          break;

        case 14:
          message.minQuantityTickSize = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgInstantBinaryOptionsMarketLaunch>): MsgInstantBinaryOptionsMarketLaunch {
    const message = createBaseMsgInstantBinaryOptionsMarketLaunch();
    message.sender = object.sender ?? "";
    message.ticker = object.ticker ?? "";
    message.oracleSymbol = object.oracleSymbol ?? "";
    message.oracleProvider = object.oracleProvider ?? "";
    message.oracleType = object.oracleType ?? 0;
    message.oracleScaleFactor = object.oracleScaleFactor ?? 0;
    message.makerFeeRate = object.makerFeeRate ?? "";
    message.takerFeeRate = object.takerFeeRate ?? "";
    message.expirationTimestamp = object.expirationTimestamp !== undefined && object.expirationTimestamp !== null ? Long.fromValue(object.expirationTimestamp) : Long.ZERO;
    message.settlementTimestamp = object.settlementTimestamp !== undefined && object.settlementTimestamp !== null ? Long.fromValue(object.settlementTimestamp) : Long.ZERO;
    message.admin = object.admin ?? "";
    message.quoteDenom = object.quoteDenom ?? "";
    message.minPriceTickSize = object.minPriceTickSize ?? "";
    message.minQuantityTickSize = object.minQuantityTickSize ?? "";
    return message;
  }

};

function createBaseMsgInstantBinaryOptionsMarketLaunchResponse(): MsgInstantBinaryOptionsMarketLaunchResponse {
  return {};
}

export const MsgInstantBinaryOptionsMarketLaunchResponse = {
  encode(_: MsgInstantBinaryOptionsMarketLaunchResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgInstantBinaryOptionsMarketLaunchResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgInstantBinaryOptionsMarketLaunchResponse();

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

  fromPartial(_: DeepPartial<MsgInstantBinaryOptionsMarketLaunchResponse>): MsgInstantBinaryOptionsMarketLaunchResponse {
    const message = createBaseMsgInstantBinaryOptionsMarketLaunchResponse();
    return message;
  }

};

function createBaseMsgInstantExpiryFuturesMarketLaunch(): MsgInstantExpiryFuturesMarketLaunch {
  return {
    sender: "",
    ticker: "",
    quoteDenom: "",
    oracleBase: "",
    oracleQuote: "",
    oracleType: 0,
    oracleScaleFactor: 0,
    expiry: Long.ZERO,
    makerFeeRate: "",
    takerFeeRate: "",
    initialMarginRatio: "",
    maintenanceMarginRatio: "",
    minPriceTickSize: "",
    minQuantityTickSize: ""
  };
}

export const MsgInstantExpiryFuturesMarketLaunch = {
  encode(message: MsgInstantExpiryFuturesMarketLaunch, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    if (message.ticker !== "") {
      writer.uint32(18).string(message.ticker);
    }

    if (message.quoteDenom !== "") {
      writer.uint32(26).string(message.quoteDenom);
    }

    if (message.oracleBase !== "") {
      writer.uint32(34).string(message.oracleBase);
    }

    if (message.oracleQuote !== "") {
      writer.uint32(42).string(message.oracleQuote);
    }

    if (message.oracleType !== 0) {
      writer.uint32(48).int32(message.oracleType);
    }

    if (message.oracleScaleFactor !== 0) {
      writer.uint32(56).uint32(message.oracleScaleFactor);
    }

    if (!message.expiry.isZero()) {
      writer.uint32(64).int64(message.expiry);
    }

    if (message.makerFeeRate !== "") {
      writer.uint32(74).string(message.makerFeeRate);
    }

    if (message.takerFeeRate !== "") {
      writer.uint32(82).string(message.takerFeeRate);
    }

    if (message.initialMarginRatio !== "") {
      writer.uint32(90).string(message.initialMarginRatio);
    }

    if (message.maintenanceMarginRatio !== "") {
      writer.uint32(98).string(message.maintenanceMarginRatio);
    }

    if (message.minPriceTickSize !== "") {
      writer.uint32(106).string(message.minPriceTickSize);
    }

    if (message.minQuantityTickSize !== "") {
      writer.uint32(114).string(message.minQuantityTickSize);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgInstantExpiryFuturesMarketLaunch {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgInstantExpiryFuturesMarketLaunch();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.ticker = reader.string();
          break;

        case 3:
          message.quoteDenom = reader.string();
          break;

        case 4:
          message.oracleBase = reader.string();
          break;

        case 5:
          message.oracleQuote = reader.string();
          break;

        case 6:
          message.oracleType = (reader.int32() as any);
          break;

        case 7:
          message.oracleScaleFactor = reader.uint32();
          break;

        case 8:
          message.expiry = (reader.int64() as Long);
          break;

        case 9:
          message.makerFeeRate = reader.string();
          break;

        case 10:
          message.takerFeeRate = reader.string();
          break;

        case 11:
          message.initialMarginRatio = reader.string();
          break;

        case 12:
          message.maintenanceMarginRatio = reader.string();
          break;

        case 13:
          message.minPriceTickSize = reader.string();
          break;

        case 14:
          message.minQuantityTickSize = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgInstantExpiryFuturesMarketLaunch>): MsgInstantExpiryFuturesMarketLaunch {
    const message = createBaseMsgInstantExpiryFuturesMarketLaunch();
    message.sender = object.sender ?? "";
    message.ticker = object.ticker ?? "";
    message.quoteDenom = object.quoteDenom ?? "";
    message.oracleBase = object.oracleBase ?? "";
    message.oracleQuote = object.oracleQuote ?? "";
    message.oracleType = object.oracleType ?? 0;
    message.oracleScaleFactor = object.oracleScaleFactor ?? 0;
    message.expiry = object.expiry !== undefined && object.expiry !== null ? Long.fromValue(object.expiry) : Long.ZERO;
    message.makerFeeRate = object.makerFeeRate ?? "";
    message.takerFeeRate = object.takerFeeRate ?? "";
    message.initialMarginRatio = object.initialMarginRatio ?? "";
    message.maintenanceMarginRatio = object.maintenanceMarginRatio ?? "";
    message.minPriceTickSize = object.minPriceTickSize ?? "";
    message.minQuantityTickSize = object.minQuantityTickSize ?? "";
    return message;
  }

};

function createBaseMsgInstantExpiryFuturesMarketLaunchResponse(): MsgInstantExpiryFuturesMarketLaunchResponse {
  return {};
}

export const MsgInstantExpiryFuturesMarketLaunchResponse = {
  encode(_: MsgInstantExpiryFuturesMarketLaunchResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgInstantExpiryFuturesMarketLaunchResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgInstantExpiryFuturesMarketLaunchResponse();

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

  fromPartial(_: DeepPartial<MsgInstantExpiryFuturesMarketLaunchResponse>): MsgInstantExpiryFuturesMarketLaunchResponse {
    const message = createBaseMsgInstantExpiryFuturesMarketLaunchResponse();
    return message;
  }

};

function createBaseMsgCreateSpotMarketOrder(): MsgCreateSpotMarketOrder {
  return {
    sender: "",
    order: undefined
  };
}

export const MsgCreateSpotMarketOrder = {
  encode(message: MsgCreateSpotMarketOrder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    if (message.order !== undefined) {
      SpotOrder.encode(message.order, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateSpotMarketOrder {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateSpotMarketOrder();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.order = SpotOrder.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgCreateSpotMarketOrder>): MsgCreateSpotMarketOrder {
    const message = createBaseMsgCreateSpotMarketOrder();
    message.sender = object.sender ?? "";
    message.order = object.order !== undefined && object.order !== null ? SpotOrder.fromPartial(object.order) : undefined;
    return message;
  }

};

function createBaseMsgCreateSpotMarketOrderResponse(): MsgCreateSpotMarketOrderResponse {
  return {
    orderHash: ""
  };
}

export const MsgCreateSpotMarketOrderResponse = {
  encode(message: MsgCreateSpotMarketOrderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.orderHash !== "") {
      writer.uint32(10).string(message.orderHash);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateSpotMarketOrderResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateSpotMarketOrderResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.orderHash = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgCreateSpotMarketOrderResponse>): MsgCreateSpotMarketOrderResponse {
    const message = createBaseMsgCreateSpotMarketOrderResponse();
    message.orderHash = object.orderHash ?? "";
    return message;
  }

};

function createBaseMsgCreateDerivativeLimitOrder(): MsgCreateDerivativeLimitOrder {
  return {
    sender: "",
    order: undefined
  };
}

export const MsgCreateDerivativeLimitOrder = {
  encode(message: MsgCreateDerivativeLimitOrder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    if (message.order !== undefined) {
      DerivativeOrder.encode(message.order, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateDerivativeLimitOrder {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateDerivativeLimitOrder();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.order = DerivativeOrder.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgCreateDerivativeLimitOrder>): MsgCreateDerivativeLimitOrder {
    const message = createBaseMsgCreateDerivativeLimitOrder();
    message.sender = object.sender ?? "";
    message.order = object.order !== undefined && object.order !== null ? DerivativeOrder.fromPartial(object.order) : undefined;
    return message;
  }

};

function createBaseMsgCreateDerivativeLimitOrderResponse(): MsgCreateDerivativeLimitOrderResponse {
  return {
    orderHash: ""
  };
}

export const MsgCreateDerivativeLimitOrderResponse = {
  encode(message: MsgCreateDerivativeLimitOrderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.orderHash !== "") {
      writer.uint32(10).string(message.orderHash);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateDerivativeLimitOrderResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateDerivativeLimitOrderResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.orderHash = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgCreateDerivativeLimitOrderResponse>): MsgCreateDerivativeLimitOrderResponse {
    const message = createBaseMsgCreateDerivativeLimitOrderResponse();
    message.orderHash = object.orderHash ?? "";
    return message;
  }

};

function createBaseMsgCreateBinaryOptionsLimitOrder(): MsgCreateBinaryOptionsLimitOrder {
  return {
    sender: "",
    order: undefined
  };
}

export const MsgCreateBinaryOptionsLimitOrder = {
  encode(message: MsgCreateBinaryOptionsLimitOrder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    if (message.order !== undefined) {
      DerivativeOrder.encode(message.order, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateBinaryOptionsLimitOrder {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateBinaryOptionsLimitOrder();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.order = DerivativeOrder.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgCreateBinaryOptionsLimitOrder>): MsgCreateBinaryOptionsLimitOrder {
    const message = createBaseMsgCreateBinaryOptionsLimitOrder();
    message.sender = object.sender ?? "";
    message.order = object.order !== undefined && object.order !== null ? DerivativeOrder.fromPartial(object.order) : undefined;
    return message;
  }

};

function createBaseMsgCreateBinaryOptionsLimitOrderResponse(): MsgCreateBinaryOptionsLimitOrderResponse {
  return {
    orderHash: ""
  };
}

export const MsgCreateBinaryOptionsLimitOrderResponse = {
  encode(message: MsgCreateBinaryOptionsLimitOrderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.orderHash !== "") {
      writer.uint32(10).string(message.orderHash);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateBinaryOptionsLimitOrderResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateBinaryOptionsLimitOrderResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.orderHash = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgCreateBinaryOptionsLimitOrderResponse>): MsgCreateBinaryOptionsLimitOrderResponse {
    const message = createBaseMsgCreateBinaryOptionsLimitOrderResponse();
    message.orderHash = object.orderHash ?? "";
    return message;
  }

};

function createBaseMsgBatchCreateDerivativeLimitOrders(): MsgBatchCreateDerivativeLimitOrders {
  return {
    sender: "",
    orders: []
  };
}

export const MsgBatchCreateDerivativeLimitOrders = {
  encode(message: MsgBatchCreateDerivativeLimitOrders, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    for (const v of message.orders) {
      DerivativeOrder.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBatchCreateDerivativeLimitOrders {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBatchCreateDerivativeLimitOrders();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.orders.push(DerivativeOrder.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgBatchCreateDerivativeLimitOrders>): MsgBatchCreateDerivativeLimitOrders {
    const message = createBaseMsgBatchCreateDerivativeLimitOrders();
    message.sender = object.sender ?? "";
    message.orders = object.orders?.map(e => DerivativeOrder.fromPartial(e)) || [];
    return message;
  }

};

function createBaseMsgBatchCreateDerivativeLimitOrdersResponse(): MsgBatchCreateDerivativeLimitOrdersResponse {
  return {
    orderHashes: []
  };
}

export const MsgBatchCreateDerivativeLimitOrdersResponse = {
  encode(message: MsgBatchCreateDerivativeLimitOrdersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.orderHashes) {
      writer.uint32(10).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBatchCreateDerivativeLimitOrdersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBatchCreateDerivativeLimitOrdersResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.orderHashes.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgBatchCreateDerivativeLimitOrdersResponse>): MsgBatchCreateDerivativeLimitOrdersResponse {
    const message = createBaseMsgBatchCreateDerivativeLimitOrdersResponse();
    message.orderHashes = object.orderHashes?.map(e => e) || [];
    return message;
  }

};

function createBaseMsgCancelSpotOrder(): MsgCancelSpotOrder {
  return {
    sender: "",
    marketId: "",
    subaccountId: "",
    orderHash: ""
  };
}

export const MsgCancelSpotOrder = {
  encode(message: MsgCancelSpotOrder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    if (message.marketId !== "") {
      writer.uint32(18).string(message.marketId);
    }

    if (message.subaccountId !== "") {
      writer.uint32(26).string(message.subaccountId);
    }

    if (message.orderHash !== "") {
      writer.uint32(34).string(message.orderHash);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelSpotOrder {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelSpotOrder();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.marketId = reader.string();
          break;

        case 3:
          message.subaccountId = reader.string();
          break;

        case 4:
          message.orderHash = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgCancelSpotOrder>): MsgCancelSpotOrder {
    const message = createBaseMsgCancelSpotOrder();
    message.sender = object.sender ?? "";
    message.marketId = object.marketId ?? "";
    message.subaccountId = object.subaccountId ?? "";
    message.orderHash = object.orderHash ?? "";
    return message;
  }

};

function createBaseMsgCancelSpotOrderResponse(): MsgCancelSpotOrderResponse {
  return {};
}

export const MsgCancelSpotOrderResponse = {
  encode(_: MsgCancelSpotOrderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelSpotOrderResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelSpotOrderResponse();

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

  fromPartial(_: DeepPartial<MsgCancelSpotOrderResponse>): MsgCancelSpotOrderResponse {
    const message = createBaseMsgCancelSpotOrderResponse();
    return message;
  }

};

function createBaseMsgBatchCancelSpotOrders(): MsgBatchCancelSpotOrders {
  return {
    sender: "",
    data: []
  };
}

export const MsgBatchCancelSpotOrders = {
  encode(message: MsgBatchCancelSpotOrders, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    for (const v of message.data) {
      OrderData.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBatchCancelSpotOrders {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBatchCancelSpotOrders();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.data.push(OrderData.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgBatchCancelSpotOrders>): MsgBatchCancelSpotOrders {
    const message = createBaseMsgBatchCancelSpotOrders();
    message.sender = object.sender ?? "";
    message.data = object.data?.map(e => OrderData.fromPartial(e)) || [];
    return message;
  }

};

function createBaseMsgBatchCancelSpotOrdersResponse(): MsgBatchCancelSpotOrdersResponse {
  return {
    success: []
  };
}

export const MsgBatchCancelSpotOrdersResponse = {
  encode(message: MsgBatchCancelSpotOrdersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();

    for (const v of message.success) {
      writer.bool(v);
    }

    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBatchCancelSpotOrdersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBatchCancelSpotOrdersResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;

            while (reader.pos < end2) {
              message.success.push(reader.bool());
            }
          } else {
            message.success.push(reader.bool());
          }

          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgBatchCancelSpotOrdersResponse>): MsgBatchCancelSpotOrdersResponse {
    const message = createBaseMsgBatchCancelSpotOrdersResponse();
    message.success = object.success?.map(e => e) || [];
    return message;
  }

};

function createBaseMsgBatchCancelBinaryOptionsOrders(): MsgBatchCancelBinaryOptionsOrders {
  return {
    sender: "",
    data: []
  };
}

export const MsgBatchCancelBinaryOptionsOrders = {
  encode(message: MsgBatchCancelBinaryOptionsOrders, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    for (const v of message.data) {
      OrderData.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBatchCancelBinaryOptionsOrders {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBatchCancelBinaryOptionsOrders();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.data.push(OrderData.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgBatchCancelBinaryOptionsOrders>): MsgBatchCancelBinaryOptionsOrders {
    const message = createBaseMsgBatchCancelBinaryOptionsOrders();
    message.sender = object.sender ?? "";
    message.data = object.data?.map(e => OrderData.fromPartial(e)) || [];
    return message;
  }

};

function createBaseMsgBatchCancelBinaryOptionsOrdersResponse(): MsgBatchCancelBinaryOptionsOrdersResponse {
  return {
    success: []
  };
}

export const MsgBatchCancelBinaryOptionsOrdersResponse = {
  encode(message: MsgBatchCancelBinaryOptionsOrdersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();

    for (const v of message.success) {
      writer.bool(v);
    }

    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBatchCancelBinaryOptionsOrdersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBatchCancelBinaryOptionsOrdersResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;

            while (reader.pos < end2) {
              message.success.push(reader.bool());
            }
          } else {
            message.success.push(reader.bool());
          }

          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgBatchCancelBinaryOptionsOrdersResponse>): MsgBatchCancelBinaryOptionsOrdersResponse {
    const message = createBaseMsgBatchCancelBinaryOptionsOrdersResponse();
    message.success = object.success?.map(e => e) || [];
    return message;
  }

};

function createBaseMsgBatchUpdateOrders(): MsgBatchUpdateOrders {
  return {
    sender: "",
    subaccountId: "",
    spotMarketIdsToCancelAll: [],
    derivativeMarketIdsToCancelAll: [],
    spotOrdersToCancel: undefined,
    derivativeOrdersToCancel: undefined,
    spotOrdersToCreate: undefined,
    derivativeOrdersToCreate: undefined,
    binaryOptionsOrdersToCancel: undefined,
    binaryOptionsMarketIdsToCancelAll: [],
    binaryOptionsOrdersToCreate: undefined
  };
}

export const MsgBatchUpdateOrders = {
  encode(message: MsgBatchUpdateOrders, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    if (message.subaccountId !== "") {
      writer.uint32(18).string(message.subaccountId);
    }

    for (const v of message.spotMarketIdsToCancelAll) {
      writer.uint32(26).string(v!);
    }

    for (const v of message.derivativeMarketIdsToCancelAll) {
      writer.uint32(34).string(v!);
    }

    for (const v of message.spotOrdersToCancel) {
      OrderData.encode(v!, writer.uint32(42).fork()).ldelim();
    }

    for (const v of message.derivativeOrdersToCancel) {
      OrderData.encode(v!, writer.uint32(50).fork()).ldelim();
    }

    for (const v of message.spotOrdersToCreate) {
      SpotOrder.encode(v!, writer.uint32(58).fork()).ldelim();
    }

    for (const v of message.derivativeOrdersToCreate) {
      DerivativeOrder.encode(v!, writer.uint32(66).fork()).ldelim();
    }

    for (const v of message.binaryOptionsOrdersToCancel) {
      OrderData.encode(v!, writer.uint32(74).fork()).ldelim();
    }

    for (const v of message.binaryOptionsMarketIdsToCancelAll) {
      writer.uint32(82).string(v!);
    }

    for (const v of message.binaryOptionsOrdersToCreate) {
      DerivativeOrder.encode(v!, writer.uint32(90).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBatchUpdateOrders {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBatchUpdateOrders();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.subaccountId = reader.string();
          break;

        case 3:
          message.spotMarketIdsToCancelAll.push(reader.string());
          break;

        case 4:
          message.derivativeMarketIdsToCancelAll.push(reader.string());
          break;

        case 5:
          message.spotOrdersToCancel.push(OrderData.decode(reader, reader.uint32()));
          break;

        case 6:
          message.derivativeOrdersToCancel.push(OrderData.decode(reader, reader.uint32()));
          break;

        case 7:
          message.spotOrdersToCreate.push(SpotOrder.decode(reader, reader.uint32()));
          break;

        case 8:
          message.derivativeOrdersToCreate.push(DerivativeOrder.decode(reader, reader.uint32()));
          break;

        case 9:
          message.binaryOptionsOrdersToCancel.push(OrderData.decode(reader, reader.uint32()));
          break;

        case 10:
          message.binaryOptionsMarketIdsToCancelAll.push(reader.string());
          break;

        case 11:
          message.binaryOptionsOrdersToCreate.push(DerivativeOrder.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgBatchUpdateOrders>): MsgBatchUpdateOrders {
    const message = createBaseMsgBatchUpdateOrders();
    message.sender = object.sender ?? "";
    message.subaccountId = object.subaccountId ?? "";
    message.spotMarketIdsToCancelAll = object.spotMarketIdsToCancelAll?.map(e => e) || [];
    message.derivativeMarketIdsToCancelAll = object.derivativeMarketIdsToCancelAll?.map(e => e) || [];
    message.spotOrdersToCancel = object.spotOrdersToCancel?.map(e => OrderData.fromPartial(e)) || [];
    message.derivativeOrdersToCancel = object.derivativeOrdersToCancel?.map(e => OrderData.fromPartial(e)) || [];
    message.spotOrdersToCreate = object.spotOrdersToCreate?.map(e => SpotOrder.fromPartial(e)) || [];
    message.derivativeOrdersToCreate = object.derivativeOrdersToCreate?.map(e => DerivativeOrder.fromPartial(e)) || [];
    message.binaryOptionsOrdersToCancel = object.binaryOptionsOrdersToCancel?.map(e => OrderData.fromPartial(e)) || [];
    message.binaryOptionsMarketIdsToCancelAll = object.binaryOptionsMarketIdsToCancelAll?.map(e => e) || [];
    message.binaryOptionsOrdersToCreate = object.binaryOptionsOrdersToCreate?.map(e => DerivativeOrder.fromPartial(e)) || [];
    return message;
  }

};

function createBaseMsgBatchUpdateOrdersResponse(): MsgBatchUpdateOrdersResponse {
  return {
    spotCancelSuccess: [],
    derivativeCancelSuccess: [],
    spotOrderHashes: [],
    derivativeOrderHashes: [],
    binaryOptionsCancelSuccess: [],
    binaryOptionsOrderHashes: []
  };
}

export const MsgBatchUpdateOrdersResponse = {
  encode(message: MsgBatchUpdateOrdersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();

    for (const v of message.spotCancelSuccess) {
      writer.bool(v);
    }

    writer.ldelim();
    writer.uint32(18).fork();

    for (const v of message.derivativeCancelSuccess) {
      writer.bool(v);
    }

    writer.ldelim();

    for (const v of message.spotOrderHashes) {
      writer.uint32(26).string(v!);
    }

    for (const v of message.derivativeOrderHashes) {
      writer.uint32(34).string(v!);
    }

    writer.uint32(42).fork();

    for (const v of message.binaryOptionsCancelSuccess) {
      writer.bool(v);
    }

    writer.ldelim();

    for (const v of message.binaryOptionsOrderHashes) {
      writer.uint32(50).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBatchUpdateOrdersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBatchUpdateOrdersResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;

            while (reader.pos < end2) {
              message.spotCancelSuccess.push(reader.bool());
            }
          } else {
            message.spotCancelSuccess.push(reader.bool());
          }

          break;

        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;

            while (reader.pos < end2) {
              message.derivativeCancelSuccess.push(reader.bool());
            }
          } else {
            message.derivativeCancelSuccess.push(reader.bool());
          }

          break;

        case 3:
          message.spotOrderHashes.push(reader.string());
          break;

        case 4:
          message.derivativeOrderHashes.push(reader.string());
          break;

        case 5:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;

            while (reader.pos < end2) {
              message.binaryOptionsCancelSuccess.push(reader.bool());
            }
          } else {
            message.binaryOptionsCancelSuccess.push(reader.bool());
          }

          break;

        case 6:
          message.binaryOptionsOrderHashes.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgBatchUpdateOrdersResponse>): MsgBatchUpdateOrdersResponse {
    const message = createBaseMsgBatchUpdateOrdersResponse();
    message.spotCancelSuccess = object.spotCancelSuccess?.map(e => e) || [];
    message.derivativeCancelSuccess = object.derivativeCancelSuccess?.map(e => e) || [];
    message.spotOrderHashes = object.spotOrderHashes?.map(e => e) || [];
    message.derivativeOrderHashes = object.derivativeOrderHashes?.map(e => e) || [];
    message.binaryOptionsCancelSuccess = object.binaryOptionsCancelSuccess?.map(e => e) || [];
    message.binaryOptionsOrderHashes = object.binaryOptionsOrderHashes?.map(e => e) || [];
    return message;
  }

};

function createBaseMsgCreateDerivativeMarketOrder(): MsgCreateDerivativeMarketOrder {
  return {
    sender: "",
    order: undefined
  };
}

export const MsgCreateDerivativeMarketOrder = {
  encode(message: MsgCreateDerivativeMarketOrder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    if (message.order !== undefined) {
      DerivativeOrder.encode(message.order, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateDerivativeMarketOrder {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateDerivativeMarketOrder();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.order = DerivativeOrder.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgCreateDerivativeMarketOrder>): MsgCreateDerivativeMarketOrder {
    const message = createBaseMsgCreateDerivativeMarketOrder();
    message.sender = object.sender ?? "";
    message.order = object.order !== undefined && object.order !== null ? DerivativeOrder.fromPartial(object.order) : undefined;
    return message;
  }

};

function createBaseMsgCreateDerivativeMarketOrderResponse(): MsgCreateDerivativeMarketOrderResponse {
  return {
    orderHash: ""
  };
}

export const MsgCreateDerivativeMarketOrderResponse = {
  encode(message: MsgCreateDerivativeMarketOrderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.orderHash !== "") {
      writer.uint32(10).string(message.orderHash);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateDerivativeMarketOrderResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateDerivativeMarketOrderResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.orderHash = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgCreateDerivativeMarketOrderResponse>): MsgCreateDerivativeMarketOrderResponse {
    const message = createBaseMsgCreateDerivativeMarketOrderResponse();
    message.orderHash = object.orderHash ?? "";
    return message;
  }

};

function createBaseMsgCreateBinaryOptionsMarketOrder(): MsgCreateBinaryOptionsMarketOrder {
  return {
    sender: "",
    order: undefined
  };
}

export const MsgCreateBinaryOptionsMarketOrder = {
  encode(message: MsgCreateBinaryOptionsMarketOrder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    if (message.order !== undefined) {
      DerivativeOrder.encode(message.order, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateBinaryOptionsMarketOrder {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateBinaryOptionsMarketOrder();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.order = DerivativeOrder.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgCreateBinaryOptionsMarketOrder>): MsgCreateBinaryOptionsMarketOrder {
    const message = createBaseMsgCreateBinaryOptionsMarketOrder();
    message.sender = object.sender ?? "";
    message.order = object.order !== undefined && object.order !== null ? DerivativeOrder.fromPartial(object.order) : undefined;
    return message;
  }

};

function createBaseMsgCreateBinaryOptionsMarketOrderResponse(): MsgCreateBinaryOptionsMarketOrderResponse {
  return {
    orderHash: ""
  };
}

export const MsgCreateBinaryOptionsMarketOrderResponse = {
  encode(message: MsgCreateBinaryOptionsMarketOrderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.orderHash !== "") {
      writer.uint32(10).string(message.orderHash);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateBinaryOptionsMarketOrderResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateBinaryOptionsMarketOrderResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.orderHash = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgCreateBinaryOptionsMarketOrderResponse>): MsgCreateBinaryOptionsMarketOrderResponse {
    const message = createBaseMsgCreateBinaryOptionsMarketOrderResponse();
    message.orderHash = object.orderHash ?? "";
    return message;
  }

};

function createBaseMsgCancelDerivativeOrder(): MsgCancelDerivativeOrder {
  return {
    sender: "",
    marketId: "",
    subaccountId: "",
    orderHash: "",
    orderMask: 0
  };
}

export const MsgCancelDerivativeOrder = {
  encode(message: MsgCancelDerivativeOrder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    if (message.marketId !== "") {
      writer.uint32(18).string(message.marketId);
    }

    if (message.subaccountId !== "") {
      writer.uint32(26).string(message.subaccountId);
    }

    if (message.orderHash !== "") {
      writer.uint32(34).string(message.orderHash);
    }

    if (message.orderMask !== 0) {
      writer.uint32(40).int32(message.orderMask);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelDerivativeOrder {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelDerivativeOrder();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.marketId = reader.string();
          break;

        case 3:
          message.subaccountId = reader.string();
          break;

        case 4:
          message.orderHash = reader.string();
          break;

        case 5:
          message.orderMask = reader.int32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgCancelDerivativeOrder>): MsgCancelDerivativeOrder {
    const message = createBaseMsgCancelDerivativeOrder();
    message.sender = object.sender ?? "";
    message.marketId = object.marketId ?? "";
    message.subaccountId = object.subaccountId ?? "";
    message.orderHash = object.orderHash ?? "";
    message.orderMask = object.orderMask ?? 0;
    return message;
  }

};

function createBaseMsgCancelDerivativeOrderResponse(): MsgCancelDerivativeOrderResponse {
  return {};
}

export const MsgCancelDerivativeOrderResponse = {
  encode(_: MsgCancelDerivativeOrderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelDerivativeOrderResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelDerivativeOrderResponse();

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

  fromPartial(_: DeepPartial<MsgCancelDerivativeOrderResponse>): MsgCancelDerivativeOrderResponse {
    const message = createBaseMsgCancelDerivativeOrderResponse();
    return message;
  }

};

function createBaseMsgCancelBinaryOptionsOrder(): MsgCancelBinaryOptionsOrder {
  return {
    sender: "",
    marketId: "",
    subaccountId: "",
    orderHash: "",
    orderMask: 0
  };
}

export const MsgCancelBinaryOptionsOrder = {
  encode(message: MsgCancelBinaryOptionsOrder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    if (message.marketId !== "") {
      writer.uint32(18).string(message.marketId);
    }

    if (message.subaccountId !== "") {
      writer.uint32(26).string(message.subaccountId);
    }

    if (message.orderHash !== "") {
      writer.uint32(34).string(message.orderHash);
    }

    if (message.orderMask !== 0) {
      writer.uint32(40).int32(message.orderMask);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelBinaryOptionsOrder {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelBinaryOptionsOrder();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.marketId = reader.string();
          break;

        case 3:
          message.subaccountId = reader.string();
          break;

        case 4:
          message.orderHash = reader.string();
          break;

        case 5:
          message.orderMask = reader.int32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgCancelBinaryOptionsOrder>): MsgCancelBinaryOptionsOrder {
    const message = createBaseMsgCancelBinaryOptionsOrder();
    message.sender = object.sender ?? "";
    message.marketId = object.marketId ?? "";
    message.subaccountId = object.subaccountId ?? "";
    message.orderHash = object.orderHash ?? "";
    message.orderMask = object.orderMask ?? 0;
    return message;
  }

};

function createBaseMsgCancelBinaryOptionsOrderResponse(): MsgCancelBinaryOptionsOrderResponse {
  return {};
}

export const MsgCancelBinaryOptionsOrderResponse = {
  encode(_: MsgCancelBinaryOptionsOrderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelBinaryOptionsOrderResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelBinaryOptionsOrderResponse();

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

  fromPartial(_: DeepPartial<MsgCancelBinaryOptionsOrderResponse>): MsgCancelBinaryOptionsOrderResponse {
    const message = createBaseMsgCancelBinaryOptionsOrderResponse();
    return message;
  }

};

function createBaseOrderData(): OrderData {
  return {
    marketId: "",
    subaccountId: "",
    orderHash: "",
    orderMask: 0
  };
}

export const OrderData = {
  encode(message: OrderData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }

    if (message.subaccountId !== "") {
      writer.uint32(18).string(message.subaccountId);
    }

    if (message.orderHash !== "") {
      writer.uint32(26).string(message.orderHash);
    }

    if (message.orderMask !== 0) {
      writer.uint32(32).int32(message.orderMask);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OrderData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrderData();

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
          message.orderHash = reader.string();
          break;

        case 4:
          message.orderMask = reader.int32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<OrderData>): OrderData {
    const message = createBaseOrderData();
    message.marketId = object.marketId ?? "";
    message.subaccountId = object.subaccountId ?? "";
    message.orderHash = object.orderHash ?? "";
    message.orderMask = object.orderMask ?? 0;
    return message;
  }

};

function createBaseMsgBatchCancelDerivativeOrders(): MsgBatchCancelDerivativeOrders {
  return {
    sender: "",
    data: []
  };
}

export const MsgBatchCancelDerivativeOrders = {
  encode(message: MsgBatchCancelDerivativeOrders, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    for (const v of message.data) {
      OrderData.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBatchCancelDerivativeOrders {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBatchCancelDerivativeOrders();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.data.push(OrderData.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgBatchCancelDerivativeOrders>): MsgBatchCancelDerivativeOrders {
    const message = createBaseMsgBatchCancelDerivativeOrders();
    message.sender = object.sender ?? "";
    message.data = object.data?.map(e => OrderData.fromPartial(e)) || [];
    return message;
  }

};

function createBaseMsgBatchCancelDerivativeOrdersResponse(): MsgBatchCancelDerivativeOrdersResponse {
  return {
    success: []
  };
}

export const MsgBatchCancelDerivativeOrdersResponse = {
  encode(message: MsgBatchCancelDerivativeOrdersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();

    for (const v of message.success) {
      writer.bool(v);
    }

    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBatchCancelDerivativeOrdersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBatchCancelDerivativeOrdersResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;

            while (reader.pos < end2) {
              message.success.push(reader.bool());
            }
          } else {
            message.success.push(reader.bool());
          }

          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgBatchCancelDerivativeOrdersResponse>): MsgBatchCancelDerivativeOrdersResponse {
    const message = createBaseMsgBatchCancelDerivativeOrdersResponse();
    message.success = object.success?.map(e => e) || [];
    return message;
  }

};

function createBaseMsgSubaccountTransfer(): MsgSubaccountTransfer {
  return {
    sender: "",
    sourceSubaccountId: "",
    destinationSubaccountId: "",
    amount: undefined
  };
}

export const MsgSubaccountTransfer = {
  encode(message: MsgSubaccountTransfer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    if (message.sourceSubaccountId !== "") {
      writer.uint32(18).string(message.sourceSubaccountId);
    }

    if (message.destinationSubaccountId !== "") {
      writer.uint32(26).string(message.destinationSubaccountId);
    }

    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubaccountTransfer {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubaccountTransfer();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.sourceSubaccountId = reader.string();
          break;

        case 3:
          message.destinationSubaccountId = reader.string();
          break;

        case 4:
          message.amount = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgSubaccountTransfer>): MsgSubaccountTransfer {
    const message = createBaseMsgSubaccountTransfer();
    message.sender = object.sender ?? "";
    message.sourceSubaccountId = object.sourceSubaccountId ?? "";
    message.destinationSubaccountId = object.destinationSubaccountId ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  }

};

function createBaseMsgSubaccountTransferResponse(): MsgSubaccountTransferResponse {
  return {};
}

export const MsgSubaccountTransferResponse = {
  encode(_: MsgSubaccountTransferResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubaccountTransferResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubaccountTransferResponse();

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

  fromPartial(_: DeepPartial<MsgSubaccountTransferResponse>): MsgSubaccountTransferResponse {
    const message = createBaseMsgSubaccountTransferResponse();
    return message;
  }

};

function createBaseMsgExternalTransfer(): MsgExternalTransfer {
  return {
    sender: "",
    sourceSubaccountId: "",
    destinationSubaccountId: "",
    amount: undefined
  };
}

export const MsgExternalTransfer = {
  encode(message: MsgExternalTransfer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    if (message.sourceSubaccountId !== "") {
      writer.uint32(18).string(message.sourceSubaccountId);
    }

    if (message.destinationSubaccountId !== "") {
      writer.uint32(26).string(message.destinationSubaccountId);
    }

    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgExternalTransfer {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExternalTransfer();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.sourceSubaccountId = reader.string();
          break;

        case 3:
          message.destinationSubaccountId = reader.string();
          break;

        case 4:
          message.amount = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgExternalTransfer>): MsgExternalTransfer {
    const message = createBaseMsgExternalTransfer();
    message.sender = object.sender ?? "";
    message.sourceSubaccountId = object.sourceSubaccountId ?? "";
    message.destinationSubaccountId = object.destinationSubaccountId ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  }

};

function createBaseMsgExternalTransferResponse(): MsgExternalTransferResponse {
  return {};
}

export const MsgExternalTransferResponse = {
  encode(_: MsgExternalTransferResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgExternalTransferResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExternalTransferResponse();

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

  fromPartial(_: DeepPartial<MsgExternalTransferResponse>): MsgExternalTransferResponse {
    const message = createBaseMsgExternalTransferResponse();
    return message;
  }

};

function createBaseMsgLiquidatePosition(): MsgLiquidatePosition {
  return {
    sender: "",
    subaccountId: "",
    marketId: "",
    order: undefined
  };
}

export const MsgLiquidatePosition = {
  encode(message: MsgLiquidatePosition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    if (message.subaccountId !== "") {
      writer.uint32(18).string(message.subaccountId);
    }

    if (message.marketId !== "") {
      writer.uint32(26).string(message.marketId);
    }

    if (message.order !== undefined) {
      DerivativeOrder.encode(message.order, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgLiquidatePosition {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLiquidatePosition();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.subaccountId = reader.string();
          break;

        case 3:
          message.marketId = reader.string();
          break;

        case 4:
          message.order = DerivativeOrder.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgLiquidatePosition>): MsgLiquidatePosition {
    const message = createBaseMsgLiquidatePosition();
    message.sender = object.sender ?? "";
    message.subaccountId = object.subaccountId ?? "";
    message.marketId = object.marketId ?? "";
    message.order = object.order !== undefined && object.order !== null ? DerivativeOrder.fromPartial(object.order) : undefined;
    return message;
  }

};

function createBaseMsgLiquidatePositionResponse(): MsgLiquidatePositionResponse {
  return {};
}

export const MsgLiquidatePositionResponse = {
  encode(_: MsgLiquidatePositionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgLiquidatePositionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLiquidatePositionResponse();

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

  fromPartial(_: DeepPartial<MsgLiquidatePositionResponse>): MsgLiquidatePositionResponse {
    const message = createBaseMsgLiquidatePositionResponse();
    return message;
  }

};

function createBaseMsgIncreasePositionMargin(): MsgIncreasePositionMargin {
  return {
    sender: "",
    sourceSubaccountId: "",
    destinationSubaccountId: "",
    marketId: "",
    amount: ""
  };
}

export const MsgIncreasePositionMargin = {
  encode(message: MsgIncreasePositionMargin, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    if (message.sourceSubaccountId !== "") {
      writer.uint32(18).string(message.sourceSubaccountId);
    }

    if (message.destinationSubaccountId !== "") {
      writer.uint32(26).string(message.destinationSubaccountId);
    }

    if (message.marketId !== "") {
      writer.uint32(34).string(message.marketId);
    }

    if (message.amount !== "") {
      writer.uint32(42).string(message.amount);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgIncreasePositionMargin {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgIncreasePositionMargin();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.sourceSubaccountId = reader.string();
          break;

        case 3:
          message.destinationSubaccountId = reader.string();
          break;

        case 4:
          message.marketId = reader.string();
          break;

        case 5:
          message.amount = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgIncreasePositionMargin>): MsgIncreasePositionMargin {
    const message = createBaseMsgIncreasePositionMargin();
    message.sender = object.sender ?? "";
    message.sourceSubaccountId = object.sourceSubaccountId ?? "";
    message.destinationSubaccountId = object.destinationSubaccountId ?? "";
    message.marketId = object.marketId ?? "";
    message.amount = object.amount ?? "";
    return message;
  }

};

function createBaseMsgIncreasePositionMarginResponse(): MsgIncreasePositionMarginResponse {
  return {};
}

export const MsgIncreasePositionMarginResponse = {
  encode(_: MsgIncreasePositionMarginResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgIncreasePositionMarginResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgIncreasePositionMarginResponse();

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

  fromPartial(_: DeepPartial<MsgIncreasePositionMarginResponse>): MsgIncreasePositionMarginResponse {
    const message = createBaseMsgIncreasePositionMarginResponse();
    return message;
  }

};

function createBaseMsgExec(): MsgExec {
  return {
    sender: "",
    bankFunds: [],
    depositsSubaccountId: "",
    depositFunds: [],
    contractAddress: "",
    data: ""
  };
}

export const MsgExec = {
  encode(message: MsgExec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    for (const v of message.bankFunds) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    if (message.depositsSubaccountId !== "") {
      writer.uint32(26).string(message.depositsSubaccountId);
    }

    for (const v of message.depositFunds) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    if (message.contractAddress !== "") {
      writer.uint32(42).string(message.contractAddress);
    }

    if (message.data !== "") {
      writer.uint32(50).string(message.data);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgExec {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExec();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.bankFunds.push(Coin.decode(reader, reader.uint32()));
          break;

        case 3:
          message.depositsSubaccountId = reader.string();
          break;

        case 4:
          message.depositFunds.push(Coin.decode(reader, reader.uint32()));
          break;

        case 5:
          message.contractAddress = reader.string();
          break;

        case 6:
          message.data = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgExec>): MsgExec {
    const message = createBaseMsgExec();
    message.sender = object.sender ?? "";
    message.bankFunds = object.bankFunds?.map(e => Coin.fromPartial(e)) || [];
    message.depositsSubaccountId = object.depositsSubaccountId ?? "";
    message.depositFunds = object.depositFunds?.map(e => Coin.fromPartial(e)) || [];
    message.contractAddress = object.contractAddress ?? "";
    message.data = object.data ?? "";
    return message;
  }

};

function createBaseMsgExecResponse(): MsgExecResponse {
  return {};
}

export const MsgExecResponse = {
  encode(_: MsgExecResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgExecResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExecResponse();

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

  fromPartial(_: DeepPartial<MsgExecResponse>): MsgExecResponse {
    const message = createBaseMsgExecResponse();
    return message;
  }

};

function createBaseSpotMarketParamUpdateProposal(): SpotMarketParamUpdateProposal {
  return {
    title: "",
    description: "",
    marketId: "",
    makerFeeRate: undefined,
    takerFeeRate: undefined,
    relayerFeeShareRate: undefined,
    minPriceTickSize: undefined,
    minQuantityTickSize: undefined,
    status: 0
  };
}

export const SpotMarketParamUpdateProposal = {
  encode(message: SpotMarketParamUpdateProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    if (message.marketId !== "") {
      writer.uint32(26).string(message.marketId);
    }

    if (message.makerFeeRate !== undefined) {
      writer.uint32(34).string(message.makerFeeRate);
    }

    if (message.takerFeeRate !== undefined) {
      writer.uint32(42).string(message.takerFeeRate);
    }

    if (message.relayerFeeShareRate !== undefined) {
      writer.uint32(50).string(message.relayerFeeShareRate);
    }

    if (message.minPriceTickSize !== undefined) {
      writer.uint32(58).string(message.minPriceTickSize);
    }

    if (message.minQuantityTickSize !== undefined) {
      writer.uint32(66).string(message.minQuantityTickSize);
    }

    if (message.status !== 0) {
      writer.uint32(72).int32(message.status);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SpotMarketParamUpdateProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSpotMarketParamUpdateProposal();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;

        case 2:
          message.description = reader.string();
          break;

        case 3:
          message.marketId = reader.string();
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
          message.minPriceTickSize = reader.string();
          break;

        case 8:
          message.minQuantityTickSize = reader.string();
          break;

        case 9:
          message.status = (reader.int32() as any);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<SpotMarketParamUpdateProposal>): SpotMarketParamUpdateProposal {
    const message = createBaseSpotMarketParamUpdateProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.marketId = object.marketId ?? "";
    message.makerFeeRate = object.makerFeeRate ?? undefined;
    message.takerFeeRate = object.takerFeeRate ?? undefined;
    message.relayerFeeShareRate = object.relayerFeeShareRate ?? undefined;
    message.minPriceTickSize = object.minPriceTickSize ?? undefined;
    message.minQuantityTickSize = object.minQuantityTickSize ?? undefined;
    message.status = object.status ?? 0;
    return message;
  }

};

function createBaseExchangeEnableProposal(): ExchangeEnableProposal {
  return {
    title: "",
    description: "",
    exchangeType: 0
  };
}

export const ExchangeEnableProposal = {
  encode(message: ExchangeEnableProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    if (message.exchangeType !== 0) {
      writer.uint32(24).int32(message.exchangeType);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExchangeEnableProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExchangeEnableProposal();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;

        case 2:
          message.description = reader.string();
          break;

        case 3:
          message.exchangeType = (reader.int32() as any);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<ExchangeEnableProposal>): ExchangeEnableProposal {
    const message = createBaseExchangeEnableProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.exchangeType = object.exchangeType ?? 0;
    return message;
  }

};

function createBaseBatchExchangeModificationProposal(): BatchExchangeModificationProposal {
  return {
    title: "",
    description: "",
    spotMarketParamUpdateProposals: [],
    derivativeMarketParamUpdateProposals: [],
    spotMarketLaunchProposals: [],
    perpetualMarketLaunchProposals: [],
    expiryFuturesMarketLaunchProposals: [],
    tradingRewardCampaignUpdateProposal: undefined,
    binaryOptionsMarketLaunchProposals: [],
    binaryOptionsParamUpdateProposals: [],
    denomDecimalsUpdateProposal: undefined
  };
}

export const BatchExchangeModificationProposal = {
  encode(message: BatchExchangeModificationProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    for (const v of message.spotMarketParamUpdateProposals) {
      SpotMarketParamUpdateProposal.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    for (const v of message.derivativeMarketParamUpdateProposals) {
      DerivativeMarketParamUpdateProposal.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    for (const v of message.spotMarketLaunchProposals) {
      SpotMarketLaunchProposal.encode(v!, writer.uint32(42).fork()).ldelim();
    }

    for (const v of message.perpetualMarketLaunchProposals) {
      PerpetualMarketLaunchProposal.encode(v!, writer.uint32(50).fork()).ldelim();
    }

    for (const v of message.expiryFuturesMarketLaunchProposals) {
      ExpiryFuturesMarketLaunchProposal.encode(v!, writer.uint32(58).fork()).ldelim();
    }

    if (message.tradingRewardCampaignUpdateProposal !== undefined) {
      TradingRewardCampaignUpdateProposal.encode(message.tradingRewardCampaignUpdateProposal, writer.uint32(66).fork()).ldelim();
    }

    for (const v of message.binaryOptionsMarketLaunchProposals) {
      BinaryOptionsMarketLaunchProposal.encode(v!, writer.uint32(74).fork()).ldelim();
    }

    for (const v of message.binaryOptionsParamUpdateProposals) {
      BinaryOptionsMarketParamUpdateProposal.encode(v!, writer.uint32(82).fork()).ldelim();
    }

    if (message.denomDecimalsUpdateProposal !== undefined) {
      UpdateDenomDecimalsProposal.encode(message.denomDecimalsUpdateProposal, writer.uint32(90).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BatchExchangeModificationProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBatchExchangeModificationProposal();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;

        case 2:
          message.description = reader.string();
          break;

        case 3:
          message.spotMarketParamUpdateProposals.push(SpotMarketParamUpdateProposal.decode(reader, reader.uint32()));
          break;

        case 4:
          message.derivativeMarketParamUpdateProposals.push(DerivativeMarketParamUpdateProposal.decode(reader, reader.uint32()));
          break;

        case 5:
          message.spotMarketLaunchProposals.push(SpotMarketLaunchProposal.decode(reader, reader.uint32()));
          break;

        case 6:
          message.perpetualMarketLaunchProposals.push(PerpetualMarketLaunchProposal.decode(reader, reader.uint32()));
          break;

        case 7:
          message.expiryFuturesMarketLaunchProposals.push(ExpiryFuturesMarketLaunchProposal.decode(reader, reader.uint32()));
          break;

        case 8:
          message.tradingRewardCampaignUpdateProposal = TradingRewardCampaignUpdateProposal.decode(reader, reader.uint32());
          break;

        case 9:
          message.binaryOptionsMarketLaunchProposals.push(BinaryOptionsMarketLaunchProposal.decode(reader, reader.uint32()));
          break;

        case 10:
          message.binaryOptionsParamUpdateProposals.push(BinaryOptionsMarketParamUpdateProposal.decode(reader, reader.uint32()));
          break;

        case 11:
          message.denomDecimalsUpdateProposal = UpdateDenomDecimalsProposal.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<BatchExchangeModificationProposal>): BatchExchangeModificationProposal {
    const message = createBaseBatchExchangeModificationProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.spotMarketParamUpdateProposals = object.spotMarketParamUpdateProposals?.map(e => SpotMarketParamUpdateProposal.fromPartial(e)) || [];
    message.derivativeMarketParamUpdateProposals = object.derivativeMarketParamUpdateProposals?.map(e => DerivativeMarketParamUpdateProposal.fromPartial(e)) || [];
    message.spotMarketLaunchProposals = object.spotMarketLaunchProposals?.map(e => SpotMarketLaunchProposal.fromPartial(e)) || [];
    message.perpetualMarketLaunchProposals = object.perpetualMarketLaunchProposals?.map(e => PerpetualMarketLaunchProposal.fromPartial(e)) || [];
    message.expiryFuturesMarketLaunchProposals = object.expiryFuturesMarketLaunchProposals?.map(e => ExpiryFuturesMarketLaunchProposal.fromPartial(e)) || [];
    message.tradingRewardCampaignUpdateProposal = object.tradingRewardCampaignUpdateProposal !== undefined && object.tradingRewardCampaignUpdateProposal !== null ? TradingRewardCampaignUpdateProposal.fromPartial(object.tradingRewardCampaignUpdateProposal) : undefined;
    message.binaryOptionsMarketLaunchProposals = object.binaryOptionsMarketLaunchProposals?.map(e => BinaryOptionsMarketLaunchProposal.fromPartial(e)) || [];
    message.binaryOptionsParamUpdateProposals = object.binaryOptionsParamUpdateProposals?.map(e => BinaryOptionsMarketParamUpdateProposal.fromPartial(e)) || [];
    message.denomDecimalsUpdateProposal = object.denomDecimalsUpdateProposal !== undefined && object.denomDecimalsUpdateProposal !== null ? UpdateDenomDecimalsProposal.fromPartial(object.denomDecimalsUpdateProposal) : undefined;
    return message;
  }

};

function createBaseSpotMarketLaunchProposal(): SpotMarketLaunchProposal {
  return {
    title: "",
    description: "",
    ticker: "",
    baseDenom: "",
    quoteDenom: "",
    minPriceTickSize: "",
    minQuantityTickSize: "",
    makerFeeRate: undefined,
    takerFeeRate: undefined
  };
}

export const SpotMarketLaunchProposal = {
  encode(message: SpotMarketLaunchProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    if (message.ticker !== "") {
      writer.uint32(26).string(message.ticker);
    }

    if (message.baseDenom !== "") {
      writer.uint32(34).string(message.baseDenom);
    }

    if (message.quoteDenom !== "") {
      writer.uint32(42).string(message.quoteDenom);
    }

    if (message.minPriceTickSize !== "") {
      writer.uint32(50).string(message.minPriceTickSize);
    }

    if (message.minQuantityTickSize !== "") {
      writer.uint32(58).string(message.minQuantityTickSize);
    }

    if (message.makerFeeRate !== undefined) {
      writer.uint32(66).string(message.makerFeeRate);
    }

    if (message.takerFeeRate !== undefined) {
      writer.uint32(74).string(message.takerFeeRate);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SpotMarketLaunchProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSpotMarketLaunchProposal();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;

        case 2:
          message.description = reader.string();
          break;

        case 3:
          message.ticker = reader.string();
          break;

        case 4:
          message.baseDenom = reader.string();
          break;

        case 5:
          message.quoteDenom = reader.string();
          break;

        case 6:
          message.minPriceTickSize = reader.string();
          break;

        case 7:
          message.minQuantityTickSize = reader.string();
          break;

        case 8:
          message.makerFeeRate = reader.string();
          break;

        case 9:
          message.takerFeeRate = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<SpotMarketLaunchProposal>): SpotMarketLaunchProposal {
    const message = createBaseSpotMarketLaunchProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.ticker = object.ticker ?? "";
    message.baseDenom = object.baseDenom ?? "";
    message.quoteDenom = object.quoteDenom ?? "";
    message.minPriceTickSize = object.minPriceTickSize ?? "";
    message.minQuantityTickSize = object.minQuantityTickSize ?? "";
    message.makerFeeRate = object.makerFeeRate ?? undefined;
    message.takerFeeRate = object.takerFeeRate ?? undefined;
    return message;
  }

};

function createBasePerpetualMarketLaunchProposal(): PerpetualMarketLaunchProposal {
  return {
    title: "",
    description: "",
    ticker: "",
    quoteDenom: "",
    oracleBase: "",
    oracleQuote: "",
    oracleScaleFactor: 0,
    oracleType: 0,
    initialMarginRatio: "",
    maintenanceMarginRatio: "",
    makerFeeRate: "",
    takerFeeRate: "",
    minPriceTickSize: "",
    minQuantityTickSize: ""
  };
}

export const PerpetualMarketLaunchProposal = {
  encode(message: PerpetualMarketLaunchProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    if (message.ticker !== "") {
      writer.uint32(26).string(message.ticker);
    }

    if (message.quoteDenom !== "") {
      writer.uint32(34).string(message.quoteDenom);
    }

    if (message.oracleBase !== "") {
      writer.uint32(42).string(message.oracleBase);
    }

    if (message.oracleQuote !== "") {
      writer.uint32(50).string(message.oracleQuote);
    }

    if (message.oracleScaleFactor !== 0) {
      writer.uint32(56).uint32(message.oracleScaleFactor);
    }

    if (message.oracleType !== 0) {
      writer.uint32(64).int32(message.oracleType);
    }

    if (message.initialMarginRatio !== "") {
      writer.uint32(74).string(message.initialMarginRatio);
    }

    if (message.maintenanceMarginRatio !== "") {
      writer.uint32(82).string(message.maintenanceMarginRatio);
    }

    if (message.makerFeeRate !== "") {
      writer.uint32(90).string(message.makerFeeRate);
    }

    if (message.takerFeeRate !== "") {
      writer.uint32(98).string(message.takerFeeRate);
    }

    if (message.minPriceTickSize !== "") {
      writer.uint32(106).string(message.minPriceTickSize);
    }

    if (message.minQuantityTickSize !== "") {
      writer.uint32(114).string(message.minQuantityTickSize);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PerpetualMarketLaunchProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePerpetualMarketLaunchProposal();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;

        case 2:
          message.description = reader.string();
          break;

        case 3:
          message.ticker = reader.string();
          break;

        case 4:
          message.quoteDenom = reader.string();
          break;

        case 5:
          message.oracleBase = reader.string();
          break;

        case 6:
          message.oracleQuote = reader.string();
          break;

        case 7:
          message.oracleScaleFactor = reader.uint32();
          break;

        case 8:
          message.oracleType = (reader.int32() as any);
          break;

        case 9:
          message.initialMarginRatio = reader.string();
          break;

        case 10:
          message.maintenanceMarginRatio = reader.string();
          break;

        case 11:
          message.makerFeeRate = reader.string();
          break;

        case 12:
          message.takerFeeRate = reader.string();
          break;

        case 13:
          message.minPriceTickSize = reader.string();
          break;

        case 14:
          message.minQuantityTickSize = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<PerpetualMarketLaunchProposal>): PerpetualMarketLaunchProposal {
    const message = createBasePerpetualMarketLaunchProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.ticker = object.ticker ?? "";
    message.quoteDenom = object.quoteDenom ?? "";
    message.oracleBase = object.oracleBase ?? "";
    message.oracleQuote = object.oracleQuote ?? "";
    message.oracleScaleFactor = object.oracleScaleFactor ?? 0;
    message.oracleType = object.oracleType ?? 0;
    message.initialMarginRatio = object.initialMarginRatio ?? "";
    message.maintenanceMarginRatio = object.maintenanceMarginRatio ?? "";
    message.makerFeeRate = object.makerFeeRate ?? "";
    message.takerFeeRate = object.takerFeeRate ?? "";
    message.minPriceTickSize = object.minPriceTickSize ?? "";
    message.minQuantityTickSize = object.minQuantityTickSize ?? "";
    return message;
  }

};

function createBaseBinaryOptionsMarketLaunchProposal(): BinaryOptionsMarketLaunchProposal {
  return {
    title: "",
    description: "",
    ticker: "",
    oracleSymbol: "",
    oracleProvider: "",
    oracleType: 0,
    oracleScaleFactor: 0,
    expirationTimestamp: Long.ZERO,
    settlementTimestamp: Long.ZERO,
    admin: "",
    quoteDenom: "",
    makerFeeRate: "",
    takerFeeRate: "",
    minPriceTickSize: "",
    minQuantityTickSize: ""
  };
}

export const BinaryOptionsMarketLaunchProposal = {
  encode(message: BinaryOptionsMarketLaunchProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    if (message.ticker !== "") {
      writer.uint32(26).string(message.ticker);
    }

    if (message.oracleSymbol !== "") {
      writer.uint32(34).string(message.oracleSymbol);
    }

    if (message.oracleProvider !== "") {
      writer.uint32(42).string(message.oracleProvider);
    }

    if (message.oracleType !== 0) {
      writer.uint32(48).int32(message.oracleType);
    }

    if (message.oracleScaleFactor !== 0) {
      writer.uint32(56).uint32(message.oracleScaleFactor);
    }

    if (!message.expirationTimestamp.isZero()) {
      writer.uint32(64).int64(message.expirationTimestamp);
    }

    if (!message.settlementTimestamp.isZero()) {
      writer.uint32(72).int64(message.settlementTimestamp);
    }

    if (message.admin !== "") {
      writer.uint32(82).string(message.admin);
    }

    if (message.quoteDenom !== "") {
      writer.uint32(90).string(message.quoteDenom);
    }

    if (message.makerFeeRate !== "") {
      writer.uint32(98).string(message.makerFeeRate);
    }

    if (message.takerFeeRate !== "") {
      writer.uint32(106).string(message.takerFeeRate);
    }

    if (message.minPriceTickSize !== "") {
      writer.uint32(114).string(message.minPriceTickSize);
    }

    if (message.minQuantityTickSize !== "") {
      writer.uint32(122).string(message.minQuantityTickSize);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BinaryOptionsMarketLaunchProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBinaryOptionsMarketLaunchProposal();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;

        case 2:
          message.description = reader.string();
          break;

        case 3:
          message.ticker = reader.string();
          break;

        case 4:
          message.oracleSymbol = reader.string();
          break;

        case 5:
          message.oracleProvider = reader.string();
          break;

        case 6:
          message.oracleType = (reader.int32() as any);
          break;

        case 7:
          message.oracleScaleFactor = reader.uint32();
          break;

        case 8:
          message.expirationTimestamp = (reader.int64() as Long);
          break;

        case 9:
          message.settlementTimestamp = (reader.int64() as Long);
          break;

        case 10:
          message.admin = reader.string();
          break;

        case 11:
          message.quoteDenom = reader.string();
          break;

        case 12:
          message.makerFeeRate = reader.string();
          break;

        case 13:
          message.takerFeeRate = reader.string();
          break;

        case 14:
          message.minPriceTickSize = reader.string();
          break;

        case 15:
          message.minQuantityTickSize = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<BinaryOptionsMarketLaunchProposal>): BinaryOptionsMarketLaunchProposal {
    const message = createBaseBinaryOptionsMarketLaunchProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.ticker = object.ticker ?? "";
    message.oracleSymbol = object.oracleSymbol ?? "";
    message.oracleProvider = object.oracleProvider ?? "";
    message.oracleType = object.oracleType ?? 0;
    message.oracleScaleFactor = object.oracleScaleFactor ?? 0;
    message.expirationTimestamp = object.expirationTimestamp !== undefined && object.expirationTimestamp !== null ? Long.fromValue(object.expirationTimestamp) : Long.ZERO;
    message.settlementTimestamp = object.settlementTimestamp !== undefined && object.settlementTimestamp !== null ? Long.fromValue(object.settlementTimestamp) : Long.ZERO;
    message.admin = object.admin ?? "";
    message.quoteDenom = object.quoteDenom ?? "";
    message.makerFeeRate = object.makerFeeRate ?? "";
    message.takerFeeRate = object.takerFeeRate ?? "";
    message.minPriceTickSize = object.minPriceTickSize ?? "";
    message.minQuantityTickSize = object.minQuantityTickSize ?? "";
    return message;
  }

};

function createBaseExpiryFuturesMarketLaunchProposal(): ExpiryFuturesMarketLaunchProposal {
  return {
    title: "",
    description: "",
    ticker: "",
    quoteDenom: "",
    oracleBase: "",
    oracleQuote: "",
    oracleScaleFactor: 0,
    oracleType: 0,
    expiry: Long.ZERO,
    initialMarginRatio: "",
    maintenanceMarginRatio: "",
    makerFeeRate: "",
    takerFeeRate: "",
    minPriceTickSize: "",
    minQuantityTickSize: ""
  };
}

export const ExpiryFuturesMarketLaunchProposal = {
  encode(message: ExpiryFuturesMarketLaunchProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    if (message.ticker !== "") {
      writer.uint32(26).string(message.ticker);
    }

    if (message.quoteDenom !== "") {
      writer.uint32(34).string(message.quoteDenom);
    }

    if (message.oracleBase !== "") {
      writer.uint32(42).string(message.oracleBase);
    }

    if (message.oracleQuote !== "") {
      writer.uint32(50).string(message.oracleQuote);
    }

    if (message.oracleScaleFactor !== 0) {
      writer.uint32(56).uint32(message.oracleScaleFactor);
    }

    if (message.oracleType !== 0) {
      writer.uint32(64).int32(message.oracleType);
    }

    if (!message.expiry.isZero()) {
      writer.uint32(72).int64(message.expiry);
    }

    if (message.initialMarginRatio !== "") {
      writer.uint32(82).string(message.initialMarginRatio);
    }

    if (message.maintenanceMarginRatio !== "") {
      writer.uint32(90).string(message.maintenanceMarginRatio);
    }

    if (message.makerFeeRate !== "") {
      writer.uint32(98).string(message.makerFeeRate);
    }

    if (message.takerFeeRate !== "") {
      writer.uint32(106).string(message.takerFeeRate);
    }

    if (message.minPriceTickSize !== "") {
      writer.uint32(114).string(message.minPriceTickSize);
    }

    if (message.minQuantityTickSize !== "") {
      writer.uint32(122).string(message.minQuantityTickSize);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExpiryFuturesMarketLaunchProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExpiryFuturesMarketLaunchProposal();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;

        case 2:
          message.description = reader.string();
          break;

        case 3:
          message.ticker = reader.string();
          break;

        case 4:
          message.quoteDenom = reader.string();
          break;

        case 5:
          message.oracleBase = reader.string();
          break;

        case 6:
          message.oracleQuote = reader.string();
          break;

        case 7:
          message.oracleScaleFactor = reader.uint32();
          break;

        case 8:
          message.oracleType = (reader.int32() as any);
          break;

        case 9:
          message.expiry = (reader.int64() as Long);
          break;

        case 10:
          message.initialMarginRatio = reader.string();
          break;

        case 11:
          message.maintenanceMarginRatio = reader.string();
          break;

        case 12:
          message.makerFeeRate = reader.string();
          break;

        case 13:
          message.takerFeeRate = reader.string();
          break;

        case 14:
          message.minPriceTickSize = reader.string();
          break;

        case 15:
          message.minQuantityTickSize = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<ExpiryFuturesMarketLaunchProposal>): ExpiryFuturesMarketLaunchProposal {
    const message = createBaseExpiryFuturesMarketLaunchProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.ticker = object.ticker ?? "";
    message.quoteDenom = object.quoteDenom ?? "";
    message.oracleBase = object.oracleBase ?? "";
    message.oracleQuote = object.oracleQuote ?? "";
    message.oracleScaleFactor = object.oracleScaleFactor ?? 0;
    message.oracleType = object.oracleType ?? 0;
    message.expiry = object.expiry !== undefined && object.expiry !== null ? Long.fromValue(object.expiry) : Long.ZERO;
    message.initialMarginRatio = object.initialMarginRatio ?? "";
    message.maintenanceMarginRatio = object.maintenanceMarginRatio ?? "";
    message.makerFeeRate = object.makerFeeRate ?? "";
    message.takerFeeRate = object.takerFeeRate ?? "";
    message.minPriceTickSize = object.minPriceTickSize ?? "";
    message.minQuantityTickSize = object.minQuantityTickSize ?? "";
    return message;
  }

};

function createBaseDerivativeMarketParamUpdateProposal(): DerivativeMarketParamUpdateProposal {
  return {
    title: "",
    description: "",
    marketId: "",
    initialMarginRatio: undefined,
    maintenanceMarginRatio: undefined,
    makerFeeRate: undefined,
    takerFeeRate: undefined,
    relayerFeeShareRate: undefined,
    minPriceTickSize: undefined,
    minQuantityTickSize: undefined,
    HourlyInterestRate: undefined,
    HourlyFundingRateCap: undefined,
    status: 0,
    oracleParams: undefined
  };
}

export const DerivativeMarketParamUpdateProposal = {
  encode(message: DerivativeMarketParamUpdateProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    if (message.marketId !== "") {
      writer.uint32(26).string(message.marketId);
    }

    if (message.initialMarginRatio !== undefined) {
      writer.uint32(34).string(message.initialMarginRatio);
    }

    if (message.maintenanceMarginRatio !== undefined) {
      writer.uint32(42).string(message.maintenanceMarginRatio);
    }

    if (message.makerFeeRate !== undefined) {
      writer.uint32(50).string(message.makerFeeRate);
    }

    if (message.takerFeeRate !== undefined) {
      writer.uint32(58).string(message.takerFeeRate);
    }

    if (message.relayerFeeShareRate !== undefined) {
      writer.uint32(66).string(message.relayerFeeShareRate);
    }

    if (message.minPriceTickSize !== undefined) {
      writer.uint32(74).string(message.minPriceTickSize);
    }

    if (message.minQuantityTickSize !== undefined) {
      writer.uint32(82).string(message.minQuantityTickSize);
    }

    if (message.HourlyInterestRate !== undefined) {
      writer.uint32(90).string(message.HourlyInterestRate);
    }

    if (message.HourlyFundingRateCap !== undefined) {
      writer.uint32(98).string(message.HourlyFundingRateCap);
    }

    if (message.status !== 0) {
      writer.uint32(104).int32(message.status);
    }

    if (message.oracleParams !== undefined) {
      OracleParams.encode(message.oracleParams, writer.uint32(114).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DerivativeMarketParamUpdateProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDerivativeMarketParamUpdateProposal();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;

        case 2:
          message.description = reader.string();
          break;

        case 3:
          message.marketId = reader.string();
          break;

        case 4:
          message.initialMarginRatio = reader.string();
          break;

        case 5:
          message.maintenanceMarginRatio = reader.string();
          break;

        case 6:
          message.makerFeeRate = reader.string();
          break;

        case 7:
          message.takerFeeRate = reader.string();
          break;

        case 8:
          message.relayerFeeShareRate = reader.string();
          break;

        case 9:
          message.minPriceTickSize = reader.string();
          break;

        case 10:
          message.minQuantityTickSize = reader.string();
          break;

        case 11:
          message.HourlyInterestRate = reader.string();
          break;

        case 12:
          message.HourlyFundingRateCap = reader.string();
          break;

        case 13:
          message.status = (reader.int32() as any);
          break;

        case 14:
          message.oracleParams = OracleParams.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<DerivativeMarketParamUpdateProposal>): DerivativeMarketParamUpdateProposal {
    const message = createBaseDerivativeMarketParamUpdateProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.marketId = object.marketId ?? "";
    message.initialMarginRatio = object.initialMarginRatio ?? undefined;
    message.maintenanceMarginRatio = object.maintenanceMarginRatio ?? undefined;
    message.makerFeeRate = object.makerFeeRate ?? undefined;
    message.takerFeeRate = object.takerFeeRate ?? undefined;
    message.relayerFeeShareRate = object.relayerFeeShareRate ?? undefined;
    message.minPriceTickSize = object.minPriceTickSize ?? undefined;
    message.minQuantityTickSize = object.minQuantityTickSize ?? undefined;
    message.HourlyInterestRate = object.HourlyInterestRate ?? undefined;
    message.HourlyFundingRateCap = object.HourlyFundingRateCap ?? undefined;
    message.status = object.status ?? 0;
    message.oracleParams = object.oracleParams !== undefined && object.oracleParams !== null ? OracleParams.fromPartial(object.oracleParams) : undefined;
    return message;
  }

};

function createBaseMarketForcedSettlementProposal(): MarketForcedSettlementProposal {
  return {
    title: "",
    description: "",
    marketId: "",
    settlementPrice: undefined
  };
}

export const MarketForcedSettlementProposal = {
  encode(message: MarketForcedSettlementProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    if (message.marketId !== "") {
      writer.uint32(26).string(message.marketId);
    }

    if (message.settlementPrice !== undefined) {
      writer.uint32(34).string(message.settlementPrice);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MarketForcedSettlementProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMarketForcedSettlementProposal();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;

        case 2:
          message.description = reader.string();
          break;

        case 3:
          message.marketId = reader.string();
          break;

        case 4:
          message.settlementPrice = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MarketForcedSettlementProposal>): MarketForcedSettlementProposal {
    const message = createBaseMarketForcedSettlementProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.marketId = object.marketId ?? "";
    message.settlementPrice = object.settlementPrice ?? undefined;
    return message;
  }

};

function createBaseUpdateDenomDecimalsProposal(): UpdateDenomDecimalsProposal {
  return {
    title: "",
    description: "",
    denomDecimals: []
  };
}

export const UpdateDenomDecimalsProposal = {
  encode(message: UpdateDenomDecimalsProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    for (const v of message.denomDecimals) {
      DenomDecimals.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateDenomDecimalsProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateDenomDecimalsProposal();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;

        case 2:
          message.description = reader.string();
          break;

        case 3:
          message.denomDecimals.push(DenomDecimals.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<UpdateDenomDecimalsProposal>): UpdateDenomDecimalsProposal {
    const message = createBaseUpdateDenomDecimalsProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.denomDecimals = object.denomDecimals?.map(e => DenomDecimals.fromPartial(e)) || [];
    return message;
  }

};

function createBaseDenomDecimals(): DenomDecimals {
  return {
    denom: "",
    decimals: Long.UZERO
  };
}

export const DenomDecimals = {
  encode(message: DenomDecimals, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    if (!message.decimals.isZero()) {
      writer.uint32(16).uint64(message.decimals);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DenomDecimals {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDenomDecimals();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;

        case 2:
          message.decimals = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<DenomDecimals>): DenomDecimals {
    const message = createBaseDenomDecimals();
    message.denom = object.denom ?? "";
    message.decimals = object.decimals !== undefined && object.decimals !== null ? Long.fromValue(object.decimals) : Long.UZERO;
    return message;
  }

};

function createBaseBinaryOptionsMarketParamUpdateProposal(): BinaryOptionsMarketParamUpdateProposal {
  return {
    title: "",
    description: "",
    marketId: "",
    makerFeeRate: undefined,
    takerFeeRate: undefined,
    relayerFeeShareRate: undefined,
    minPriceTickSize: undefined,
    minQuantityTickSize: undefined,
    expirationTimestamp: Long.ZERO,
    settlementTimestamp: Long.ZERO,
    settlementPrice: undefined,
    admin: "",
    status: 0,
    oracleParams: undefined
  };
}

export const BinaryOptionsMarketParamUpdateProposal = {
  encode(message: BinaryOptionsMarketParamUpdateProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    if (message.marketId !== "") {
      writer.uint32(26).string(message.marketId);
    }

    if (message.makerFeeRate !== undefined) {
      writer.uint32(34).string(message.makerFeeRate);
    }

    if (message.takerFeeRate !== undefined) {
      writer.uint32(42).string(message.takerFeeRate);
    }

    if (message.relayerFeeShareRate !== undefined) {
      writer.uint32(50).string(message.relayerFeeShareRate);
    }

    if (message.minPriceTickSize !== undefined) {
      writer.uint32(58).string(message.minPriceTickSize);
    }

    if (message.minQuantityTickSize !== undefined) {
      writer.uint32(66).string(message.minQuantityTickSize);
    }

    if (!message.expirationTimestamp.isZero()) {
      writer.uint32(72).int64(message.expirationTimestamp);
    }

    if (!message.settlementTimestamp.isZero()) {
      writer.uint32(80).int64(message.settlementTimestamp);
    }

    if (message.settlementPrice !== undefined) {
      writer.uint32(90).string(message.settlementPrice);
    }

    if (message.admin !== "") {
      writer.uint32(98).string(message.admin);
    }

    if (message.status !== 0) {
      writer.uint32(104).int32(message.status);
    }

    if (message.oracleParams !== undefined) {
      ProviderOracleParams.encode(message.oracleParams, writer.uint32(114).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BinaryOptionsMarketParamUpdateProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBinaryOptionsMarketParamUpdateProposal();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;

        case 2:
          message.description = reader.string();
          break;

        case 3:
          message.marketId = reader.string();
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
          message.minPriceTickSize = reader.string();
          break;

        case 8:
          message.minQuantityTickSize = reader.string();
          break;

        case 9:
          message.expirationTimestamp = (reader.int64() as Long);
          break;

        case 10:
          message.settlementTimestamp = (reader.int64() as Long);
          break;

        case 11:
          message.settlementPrice = reader.string();
          break;

        case 12:
          message.admin = reader.string();
          break;

        case 13:
          message.status = (reader.int32() as any);
          break;

        case 14:
          message.oracleParams = ProviderOracleParams.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<BinaryOptionsMarketParamUpdateProposal>): BinaryOptionsMarketParamUpdateProposal {
    const message = createBaseBinaryOptionsMarketParamUpdateProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.marketId = object.marketId ?? "";
    message.makerFeeRate = object.makerFeeRate ?? undefined;
    message.takerFeeRate = object.takerFeeRate ?? undefined;
    message.relayerFeeShareRate = object.relayerFeeShareRate ?? undefined;
    message.minPriceTickSize = object.minPriceTickSize ?? undefined;
    message.minQuantityTickSize = object.minQuantityTickSize ?? undefined;
    message.expirationTimestamp = object.expirationTimestamp !== undefined && object.expirationTimestamp !== null ? Long.fromValue(object.expirationTimestamp) : Long.ZERO;
    message.settlementTimestamp = object.settlementTimestamp !== undefined && object.settlementTimestamp !== null ? Long.fromValue(object.settlementTimestamp) : Long.ZERO;
    message.settlementPrice = object.settlementPrice ?? undefined;
    message.admin = object.admin ?? "";
    message.status = object.status ?? 0;
    message.oracleParams = object.oracleParams !== undefined && object.oracleParams !== null ? ProviderOracleParams.fromPartial(object.oracleParams) : undefined;
    return message;
  }

};

function createBaseProviderOracleParams(): ProviderOracleParams {
  return {
    symbol: "",
    provider: "",
    oracleScaleFactor: 0,
    oracleType: 0
  };
}

export const ProviderOracleParams = {
  encode(message: ProviderOracleParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.symbol !== "") {
      writer.uint32(10).string(message.symbol);
    }

    if (message.provider !== "") {
      writer.uint32(18).string(message.provider);
    }

    if (message.oracleScaleFactor !== 0) {
      writer.uint32(24).uint32(message.oracleScaleFactor);
    }

    if (message.oracleType !== 0) {
      writer.uint32(32).int32(message.oracleType);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProviderOracleParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProviderOracleParams();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.symbol = reader.string();
          break;

        case 2:
          message.provider = reader.string();
          break;

        case 3:
          message.oracleScaleFactor = reader.uint32();
          break;

        case 4:
          message.oracleType = (reader.int32() as any);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<ProviderOracleParams>): ProviderOracleParams {
    const message = createBaseProviderOracleParams();
    message.symbol = object.symbol ?? "";
    message.provider = object.provider ?? "";
    message.oracleScaleFactor = object.oracleScaleFactor ?? 0;
    message.oracleType = object.oracleType ?? 0;
    return message;
  }

};

function createBaseOracleParams(): OracleParams {
  return {
    oracleBase: "",
    oracleQuote: "",
    oracleScaleFactor: 0,
    oracleType: 0
  };
}

export const OracleParams = {
  encode(message: OracleParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.oracleBase !== "") {
      writer.uint32(10).string(message.oracleBase);
    }

    if (message.oracleQuote !== "") {
      writer.uint32(18).string(message.oracleQuote);
    }

    if (message.oracleScaleFactor !== 0) {
      writer.uint32(24).uint32(message.oracleScaleFactor);
    }

    if (message.oracleType !== 0) {
      writer.uint32(32).int32(message.oracleType);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OracleParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOracleParams();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.oracleBase = reader.string();
          break;

        case 2:
          message.oracleQuote = reader.string();
          break;

        case 3:
          message.oracleScaleFactor = reader.uint32();
          break;

        case 4:
          message.oracleType = (reader.int32() as any);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<OracleParams>): OracleParams {
    const message = createBaseOracleParams();
    message.oracleBase = object.oracleBase ?? "";
    message.oracleQuote = object.oracleQuote ?? "";
    message.oracleScaleFactor = object.oracleScaleFactor ?? 0;
    message.oracleType = object.oracleType ?? 0;
    return message;
  }

};

function createBaseTradingRewardCampaignLaunchProposal(): TradingRewardCampaignLaunchProposal {
  return {
    title: "",
    description: "",
    campaignInfo: undefined,
    campaignRewardPools: []
  };
}

export const TradingRewardCampaignLaunchProposal = {
  encode(message: TradingRewardCampaignLaunchProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    if (message.campaignInfo !== undefined) {
      TradingRewardCampaignInfo.encode(message.campaignInfo, writer.uint32(26).fork()).ldelim();
    }

    for (const v of message.campaignRewardPools) {
      CampaignRewardPool.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TradingRewardCampaignLaunchProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTradingRewardCampaignLaunchProposal();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;

        case 2:
          message.description = reader.string();
          break;

        case 3:
          message.campaignInfo = TradingRewardCampaignInfo.decode(reader, reader.uint32());
          break;

        case 4:
          message.campaignRewardPools.push(CampaignRewardPool.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<TradingRewardCampaignLaunchProposal>): TradingRewardCampaignLaunchProposal {
    const message = createBaseTradingRewardCampaignLaunchProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.campaignInfo = object.campaignInfo !== undefined && object.campaignInfo !== null ? TradingRewardCampaignInfo.fromPartial(object.campaignInfo) : undefined;
    message.campaignRewardPools = object.campaignRewardPools?.map(e => CampaignRewardPool.fromPartial(e)) || [];
    return message;
  }

};

function createBaseTradingRewardCampaignUpdateProposal(): TradingRewardCampaignUpdateProposal {
  return {
    title: "",
    description: "",
    campaignInfo: undefined,
    campaignRewardPoolsAdditions: [],
    campaignRewardPoolsUpdates: []
  };
}

export const TradingRewardCampaignUpdateProposal = {
  encode(message: TradingRewardCampaignUpdateProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    if (message.campaignInfo !== undefined) {
      TradingRewardCampaignInfo.encode(message.campaignInfo, writer.uint32(26).fork()).ldelim();
    }

    for (const v of message.campaignRewardPoolsAdditions) {
      CampaignRewardPool.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    for (const v of message.campaignRewardPoolsUpdates) {
      CampaignRewardPool.encode(v!, writer.uint32(42).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TradingRewardCampaignUpdateProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTradingRewardCampaignUpdateProposal();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;

        case 2:
          message.description = reader.string();
          break;

        case 3:
          message.campaignInfo = TradingRewardCampaignInfo.decode(reader, reader.uint32());
          break;

        case 4:
          message.campaignRewardPoolsAdditions.push(CampaignRewardPool.decode(reader, reader.uint32()));
          break;

        case 5:
          message.campaignRewardPoolsUpdates.push(CampaignRewardPool.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<TradingRewardCampaignUpdateProposal>): TradingRewardCampaignUpdateProposal {
    const message = createBaseTradingRewardCampaignUpdateProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.campaignInfo = object.campaignInfo !== undefined && object.campaignInfo !== null ? TradingRewardCampaignInfo.fromPartial(object.campaignInfo) : undefined;
    message.campaignRewardPoolsAdditions = object.campaignRewardPoolsAdditions?.map(e => CampaignRewardPool.fromPartial(e)) || [];
    message.campaignRewardPoolsUpdates = object.campaignRewardPoolsUpdates?.map(e => CampaignRewardPool.fromPartial(e)) || [];
    return message;
  }

};

function createBaseRewardPointUpdate(): RewardPointUpdate {
  return {
    accountAddress: "",
    newPoints: ""
  };
}

export const RewardPointUpdate = {
  encode(message: RewardPointUpdate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountAddress !== "") {
      writer.uint32(10).string(message.accountAddress);
    }

    if (message.newPoints !== "") {
      writer.uint32(98).string(message.newPoints);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RewardPointUpdate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRewardPointUpdate();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.accountAddress = reader.string();
          break;

        case 12:
          message.newPoints = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<RewardPointUpdate>): RewardPointUpdate {
    const message = createBaseRewardPointUpdate();
    message.accountAddress = object.accountAddress ?? "";
    message.newPoints = object.newPoints ?? "";
    return message;
  }

};

function createBaseTradingRewardPendingPointsUpdateProposal(): TradingRewardPendingPointsUpdateProposal {
  return {
    title: "",
    description: "",
    pendingPoolTimestamp: Long.ZERO,
    rewardPointUpdates: []
  };
}

export const TradingRewardPendingPointsUpdateProposal = {
  encode(message: TradingRewardPendingPointsUpdateProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    if (!message.pendingPoolTimestamp.isZero()) {
      writer.uint32(24).int64(message.pendingPoolTimestamp);
    }

    for (const v of message.rewardPointUpdates) {
      RewardPointUpdate.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TradingRewardPendingPointsUpdateProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTradingRewardPendingPointsUpdateProposal();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;

        case 2:
          message.description = reader.string();
          break;

        case 3:
          message.pendingPoolTimestamp = (reader.int64() as Long);
          break;

        case 4:
          message.rewardPointUpdates.push(RewardPointUpdate.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<TradingRewardPendingPointsUpdateProposal>): TradingRewardPendingPointsUpdateProposal {
    const message = createBaseTradingRewardPendingPointsUpdateProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.pendingPoolTimestamp = object.pendingPoolTimestamp !== undefined && object.pendingPoolTimestamp !== null ? Long.fromValue(object.pendingPoolTimestamp) : Long.ZERO;
    message.rewardPointUpdates = object.rewardPointUpdates?.map(e => RewardPointUpdate.fromPartial(e)) || [];
    return message;
  }

};

function createBaseFeeDiscountProposal(): FeeDiscountProposal {
  return {
    title: "",
    description: "",
    schedule: undefined
  };
}

export const FeeDiscountProposal = {
  encode(message: FeeDiscountProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    if (message.schedule !== undefined) {
      FeeDiscountSchedule.encode(message.schedule, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FeeDiscountProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeeDiscountProposal();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;

        case 2:
          message.description = reader.string();
          break;

        case 3:
          message.schedule = FeeDiscountSchedule.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<FeeDiscountProposal>): FeeDiscountProposal {
    const message = createBaseFeeDiscountProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.schedule = object.schedule !== undefined && object.schedule !== null ? FeeDiscountSchedule.fromPartial(object.schedule) : undefined;
    return message;
  }

};

function createBaseBatchCommunityPoolSpendProposal(): BatchCommunityPoolSpendProposal {
  return {
    title: "",
    description: "",
    proposals: []
  };
}

export const BatchCommunityPoolSpendProposal = {
  encode(message: BatchCommunityPoolSpendProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    for (const v of message.proposals) {
      CommunityPoolSpendProposal.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BatchCommunityPoolSpendProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBatchCommunityPoolSpendProposal();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;

        case 2:
          message.description = reader.string();
          break;

        case 3:
          message.proposals.push(CommunityPoolSpendProposal.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<BatchCommunityPoolSpendProposal>): BatchCommunityPoolSpendProposal {
    const message = createBaseBatchCommunityPoolSpendProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.proposals = object.proposals?.map(e => CommunityPoolSpendProposal.fromPartial(e)) || [];
    return message;
  }

};

function createBaseMsgRewardsOptOut(): MsgRewardsOptOut {
  return {
    sender: ""
  };
}

export const MsgRewardsOptOut = {
  encode(message: MsgRewardsOptOut, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRewardsOptOut {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRewardsOptOut();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgRewardsOptOut>): MsgRewardsOptOut {
    const message = createBaseMsgRewardsOptOut();
    message.sender = object.sender ?? "";
    return message;
  }

};

function createBaseMsgRewardsOptOutResponse(): MsgRewardsOptOutResponse {
  return {};
}

export const MsgRewardsOptOutResponse = {
  encode(_: MsgRewardsOptOutResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRewardsOptOutResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRewardsOptOutResponse();

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

  fromPartial(_: DeepPartial<MsgRewardsOptOutResponse>): MsgRewardsOptOutResponse {
    const message = createBaseMsgRewardsOptOutResponse();
    return message;
  }

};

function createBaseMsgAdminUpdateBinaryOptionsMarket(): MsgAdminUpdateBinaryOptionsMarket {
  return {
    sender: "",
    marketId: "",
    settlementPrice: undefined,
    expirationTimestamp: Long.ZERO,
    settlementTimestamp: Long.ZERO,
    status: 0
  };
}

export const MsgAdminUpdateBinaryOptionsMarket = {
  encode(message: MsgAdminUpdateBinaryOptionsMarket, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    if (message.marketId !== "") {
      writer.uint32(18).string(message.marketId);
    }

    if (message.settlementPrice !== undefined) {
      writer.uint32(26).string(message.settlementPrice);
    }

    if (!message.expirationTimestamp.isZero()) {
      writer.uint32(32).int64(message.expirationTimestamp);
    }

    if (!message.settlementTimestamp.isZero()) {
      writer.uint32(40).int64(message.settlementTimestamp);
    }

    if (message.status !== 0) {
      writer.uint32(48).int32(message.status);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAdminUpdateBinaryOptionsMarket {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAdminUpdateBinaryOptionsMarket();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.marketId = reader.string();
          break;

        case 3:
          message.settlementPrice = reader.string();
          break;

        case 4:
          message.expirationTimestamp = (reader.int64() as Long);
          break;

        case 5:
          message.settlementTimestamp = (reader.int64() as Long);
          break;

        case 6:
          message.status = (reader.int32() as any);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgAdminUpdateBinaryOptionsMarket>): MsgAdminUpdateBinaryOptionsMarket {
    const message = createBaseMsgAdminUpdateBinaryOptionsMarket();
    message.sender = object.sender ?? "";
    message.marketId = object.marketId ?? "";
    message.settlementPrice = object.settlementPrice ?? undefined;
    message.expirationTimestamp = object.expirationTimestamp !== undefined && object.expirationTimestamp !== null ? Long.fromValue(object.expirationTimestamp) : Long.ZERO;
    message.settlementTimestamp = object.settlementTimestamp !== undefined && object.settlementTimestamp !== null ? Long.fromValue(object.settlementTimestamp) : Long.ZERO;
    message.status = object.status ?? 0;
    return message;
  }

};

function createBaseMsgAdminUpdateBinaryOptionsMarketResponse(): MsgAdminUpdateBinaryOptionsMarketResponse {
  return {};
}

export const MsgAdminUpdateBinaryOptionsMarketResponse = {
  encode(_: MsgAdminUpdateBinaryOptionsMarketResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAdminUpdateBinaryOptionsMarketResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAdminUpdateBinaryOptionsMarketResponse();

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

  fromPartial(_: DeepPartial<MsgAdminUpdateBinaryOptionsMarketResponse>): MsgAdminUpdateBinaryOptionsMarketResponse {
    const message = createBaseMsgAdminUpdateBinaryOptionsMarketResponse();
    return message;
  }

};