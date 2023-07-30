import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { OracleType, OracleTypeSDKType } from "../../oracle/v1beta1/oracle";
import { SpotOrder, SpotOrderSDKType, DerivativeOrder, DerivativeOrderSDKType, MarketStatus, MarketStatusSDKType, TradingRewardCampaignInfo, TradingRewardCampaignInfoSDKType, CampaignRewardPool, CampaignRewardPoolSDKType, FeeDiscountSchedule, FeeDiscountScheduleSDKType } from "./exchange";
import { CommunityPoolSpendProposal, CommunityPoolSpendProposalSDKType } from "../../../cosmos/distribution/v1beta1/distribution";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@cosmology/helpers";
export declare enum ExchangeType {
    EXCHANGE_UNSPECIFIED = 0,
    SPOT = 1,
    DERIVATIVES = 2,
    UNRECOGNIZED = -1
}
export declare enum ExchangeTypeSDKType {
    EXCHANGE_UNSPECIFIED = 0,
    SPOT = 1,
    DERIVATIVES = 2,
    UNRECOGNIZED = -1
}
export declare function exchangeTypeFromJSON(object: any): ExchangeType;
export declare function exchangeTypeToJSON(object: ExchangeType): string;
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
export interface MsgDepositResponse {
}
/** MsgDepositResponse defines the Msg/Deposit response type. */
export interface MsgDepositResponseSDKType {
}
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
export interface MsgWithdrawResponse {
}
/** MsgWithdraw defines the Msg/Withdraw response type. */
export interface MsgWithdrawResponseSDKType {
}
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
export interface MsgInstantSpotMarketLaunchResponse {
}
/** MsgInstantSpotMarketLaunchResponse defines the Msg/InstantSpotMarketLaunch response type. */
export interface MsgInstantSpotMarketLaunchResponseSDKType {
}
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
export interface MsgInstantPerpetualMarketLaunchResponse {
}
/** MsgInstantPerpetualMarketLaunchResponse defines the Msg/InstantPerpetualMarketLaunchResponse response type. */
export interface MsgInstantPerpetualMarketLaunchResponseSDKType {
}
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
export interface MsgInstantBinaryOptionsMarketLaunchResponse {
}
/** MsgInstantBinaryOptionsMarketLaunchResponse defines the Msg/InstantBinaryOptionsMarketLaunchResponse response type. */
export interface MsgInstantBinaryOptionsMarketLaunchResponseSDKType {
}
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
export interface MsgInstantExpiryFuturesMarketLaunchResponse {
}
/** MsgInstantExpiryFuturesMarketLaunchResponse defines the Msg/InstantExpiryFuturesMarketLaunch response type. */
export interface MsgInstantExpiryFuturesMarketLaunchResponseSDKType {
}
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
export interface MsgCancelSpotOrderResponse {
}
/** MsgCancelSpotOrderResponse defines the Msg/CancelSpotOrder response type. */
export interface MsgCancelSpotOrderResponseSDKType {
}
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
export interface MsgCancelDerivativeOrderResponse {
}
/** MsgCancelDerivativeOrderResponse defines the Msg/CancelDerivativeOrderResponse response type. */
export interface MsgCancelDerivativeOrderResponseSDKType {
}
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
export interface MsgCancelBinaryOptionsOrderResponse {
}
/** MsgCancelBinaryOptionsOrderResponse defines the Msg/CancelBinaryOptionsOrderResponse response type. */
export interface MsgCancelBinaryOptionsOrderResponseSDKType {
}
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
export interface MsgSubaccountTransferResponse {
}
/** MsgSubaccountTransferResponse defines the Msg/SubaccountTransfer response type. */
export interface MsgSubaccountTransferResponseSDKType {
}
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
export interface MsgExternalTransferResponse {
}
/** MsgExternalTransferResponse defines the Msg/ExternalTransfer response type. */
export interface MsgExternalTransferResponseSDKType {
}
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
export interface MsgLiquidatePositionResponse {
}
/** MsgLiquidatePositionResponse defines the Msg/LiquidatePosition response type. */
export interface MsgLiquidatePositionResponseSDKType {
}
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
export interface MsgIncreasePositionMarginResponse {
}
/** MsgIncreasePositionMarginResponse defines the Msg/IncreasePositionMargin response type. */
export interface MsgIncreasePositionMarginResponseSDKType {
}
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
export interface MsgExecResponse {
}
/** MsgExecResponse defines the Msg/Exec response type. */
export interface MsgExecResponseSDKType {
}
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
export interface MsgRewardsOptOutResponse {
}
/** MsgRewardsOptOutResponse defines the Msg/RewardsOptOut response type. */
export interface MsgRewardsOptOutResponseSDKType {
}
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
export interface MsgAdminUpdateBinaryOptionsMarketResponse {
}
/** MsgAdminUpdateBinaryOptionsMarketResponse is the response for AdminUpdateBinaryOptionsMarket rpc method */
export interface MsgAdminUpdateBinaryOptionsMarketResponseSDKType {
}
export declare const MsgDeposit: {
    encode(message: MsgDeposit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeposit;
    fromPartial(object: DeepPartial<MsgDeposit>): MsgDeposit;
};
export declare const MsgDepositResponse: {
    encode(_: MsgDepositResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDepositResponse;
    fromPartial(_: DeepPartial<MsgDepositResponse>): MsgDepositResponse;
};
export declare const MsgWithdraw: {
    encode(message: MsgWithdraw, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdraw;
    fromPartial(object: DeepPartial<MsgWithdraw>): MsgWithdraw;
};
export declare const MsgWithdrawResponse: {
    encode(_: MsgWithdrawResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawResponse;
    fromPartial(_: DeepPartial<MsgWithdrawResponse>): MsgWithdrawResponse;
};
export declare const MsgCreateSpotLimitOrder: {
    encode(message: MsgCreateSpotLimitOrder, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateSpotLimitOrder;
    fromPartial(object: DeepPartial<MsgCreateSpotLimitOrder>): MsgCreateSpotLimitOrder;
};
export declare const MsgCreateSpotLimitOrderResponse: {
    encode(message: MsgCreateSpotLimitOrderResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateSpotLimitOrderResponse;
    fromPartial(object: DeepPartial<MsgCreateSpotLimitOrderResponse>): MsgCreateSpotLimitOrderResponse;
};
export declare const MsgBatchCreateSpotLimitOrders: {
    encode(message: MsgBatchCreateSpotLimitOrders, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBatchCreateSpotLimitOrders;
    fromPartial(object: DeepPartial<MsgBatchCreateSpotLimitOrders>): MsgBatchCreateSpotLimitOrders;
};
export declare const MsgBatchCreateSpotLimitOrdersResponse: {
    encode(message: MsgBatchCreateSpotLimitOrdersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBatchCreateSpotLimitOrdersResponse;
    fromPartial(object: DeepPartial<MsgBatchCreateSpotLimitOrdersResponse>): MsgBatchCreateSpotLimitOrdersResponse;
};
export declare const MsgInstantSpotMarketLaunch: {
    encode(message: MsgInstantSpotMarketLaunch, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgInstantSpotMarketLaunch;
    fromPartial(object: DeepPartial<MsgInstantSpotMarketLaunch>): MsgInstantSpotMarketLaunch;
};
export declare const MsgInstantSpotMarketLaunchResponse: {
    encode(_: MsgInstantSpotMarketLaunchResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgInstantSpotMarketLaunchResponse;
    fromPartial(_: DeepPartial<MsgInstantSpotMarketLaunchResponse>): MsgInstantSpotMarketLaunchResponse;
};
export declare const MsgInstantPerpetualMarketLaunch: {
    encode(message: MsgInstantPerpetualMarketLaunch, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgInstantPerpetualMarketLaunch;
    fromPartial(object: DeepPartial<MsgInstantPerpetualMarketLaunch>): MsgInstantPerpetualMarketLaunch;
};
export declare const MsgInstantPerpetualMarketLaunchResponse: {
    encode(_: MsgInstantPerpetualMarketLaunchResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgInstantPerpetualMarketLaunchResponse;
    fromPartial(_: DeepPartial<MsgInstantPerpetualMarketLaunchResponse>): MsgInstantPerpetualMarketLaunchResponse;
};
export declare const MsgInstantBinaryOptionsMarketLaunch: {
    encode(message: MsgInstantBinaryOptionsMarketLaunch, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgInstantBinaryOptionsMarketLaunch;
    fromPartial(object: DeepPartial<MsgInstantBinaryOptionsMarketLaunch>): MsgInstantBinaryOptionsMarketLaunch;
};
export declare const MsgInstantBinaryOptionsMarketLaunchResponse: {
    encode(_: MsgInstantBinaryOptionsMarketLaunchResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgInstantBinaryOptionsMarketLaunchResponse;
    fromPartial(_: DeepPartial<MsgInstantBinaryOptionsMarketLaunchResponse>): MsgInstantBinaryOptionsMarketLaunchResponse;
};
export declare const MsgInstantExpiryFuturesMarketLaunch: {
    encode(message: MsgInstantExpiryFuturesMarketLaunch, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgInstantExpiryFuturesMarketLaunch;
    fromPartial(object: DeepPartial<MsgInstantExpiryFuturesMarketLaunch>): MsgInstantExpiryFuturesMarketLaunch;
};
export declare const MsgInstantExpiryFuturesMarketLaunchResponse: {
    encode(_: MsgInstantExpiryFuturesMarketLaunchResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgInstantExpiryFuturesMarketLaunchResponse;
    fromPartial(_: DeepPartial<MsgInstantExpiryFuturesMarketLaunchResponse>): MsgInstantExpiryFuturesMarketLaunchResponse;
};
export declare const MsgCreateSpotMarketOrder: {
    encode(message: MsgCreateSpotMarketOrder, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateSpotMarketOrder;
    fromPartial(object: DeepPartial<MsgCreateSpotMarketOrder>): MsgCreateSpotMarketOrder;
};
export declare const MsgCreateSpotMarketOrderResponse: {
    encode(message: MsgCreateSpotMarketOrderResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateSpotMarketOrderResponse;
    fromPartial(object: DeepPartial<MsgCreateSpotMarketOrderResponse>): MsgCreateSpotMarketOrderResponse;
};
export declare const MsgCreateDerivativeLimitOrder: {
    encode(message: MsgCreateDerivativeLimitOrder, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateDerivativeLimitOrder;
    fromPartial(object: DeepPartial<MsgCreateDerivativeLimitOrder>): MsgCreateDerivativeLimitOrder;
};
export declare const MsgCreateDerivativeLimitOrderResponse: {
    encode(message: MsgCreateDerivativeLimitOrderResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateDerivativeLimitOrderResponse;
    fromPartial(object: DeepPartial<MsgCreateDerivativeLimitOrderResponse>): MsgCreateDerivativeLimitOrderResponse;
};
export declare const MsgCreateBinaryOptionsLimitOrder: {
    encode(message: MsgCreateBinaryOptionsLimitOrder, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateBinaryOptionsLimitOrder;
    fromPartial(object: DeepPartial<MsgCreateBinaryOptionsLimitOrder>): MsgCreateBinaryOptionsLimitOrder;
};
export declare const MsgCreateBinaryOptionsLimitOrderResponse: {
    encode(message: MsgCreateBinaryOptionsLimitOrderResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateBinaryOptionsLimitOrderResponse;
    fromPartial(object: DeepPartial<MsgCreateBinaryOptionsLimitOrderResponse>): MsgCreateBinaryOptionsLimitOrderResponse;
};
export declare const MsgBatchCreateDerivativeLimitOrders: {
    encode(message: MsgBatchCreateDerivativeLimitOrders, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBatchCreateDerivativeLimitOrders;
    fromPartial(object: DeepPartial<MsgBatchCreateDerivativeLimitOrders>): MsgBatchCreateDerivativeLimitOrders;
};
export declare const MsgBatchCreateDerivativeLimitOrdersResponse: {
    encode(message: MsgBatchCreateDerivativeLimitOrdersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBatchCreateDerivativeLimitOrdersResponse;
    fromPartial(object: DeepPartial<MsgBatchCreateDerivativeLimitOrdersResponse>): MsgBatchCreateDerivativeLimitOrdersResponse;
};
export declare const MsgCancelSpotOrder: {
    encode(message: MsgCancelSpotOrder, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelSpotOrder;
    fromPartial(object: DeepPartial<MsgCancelSpotOrder>): MsgCancelSpotOrder;
};
export declare const MsgCancelSpotOrderResponse: {
    encode(_: MsgCancelSpotOrderResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelSpotOrderResponse;
    fromPartial(_: DeepPartial<MsgCancelSpotOrderResponse>): MsgCancelSpotOrderResponse;
};
export declare const MsgBatchCancelSpotOrders: {
    encode(message: MsgBatchCancelSpotOrders, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBatchCancelSpotOrders;
    fromPartial(object: DeepPartial<MsgBatchCancelSpotOrders>): MsgBatchCancelSpotOrders;
};
export declare const MsgBatchCancelSpotOrdersResponse: {
    encode(message: MsgBatchCancelSpotOrdersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBatchCancelSpotOrdersResponse;
    fromPartial(object: DeepPartial<MsgBatchCancelSpotOrdersResponse>): MsgBatchCancelSpotOrdersResponse;
};
export declare const MsgBatchCancelBinaryOptionsOrders: {
    encode(message: MsgBatchCancelBinaryOptionsOrders, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBatchCancelBinaryOptionsOrders;
    fromPartial(object: DeepPartial<MsgBatchCancelBinaryOptionsOrders>): MsgBatchCancelBinaryOptionsOrders;
};
export declare const MsgBatchCancelBinaryOptionsOrdersResponse: {
    encode(message: MsgBatchCancelBinaryOptionsOrdersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBatchCancelBinaryOptionsOrdersResponse;
    fromPartial(object: DeepPartial<MsgBatchCancelBinaryOptionsOrdersResponse>): MsgBatchCancelBinaryOptionsOrdersResponse;
};
export declare const MsgBatchUpdateOrders: {
    encode(message: MsgBatchUpdateOrders, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBatchUpdateOrders;
    fromPartial(object: DeepPartial<MsgBatchUpdateOrders>): MsgBatchUpdateOrders;
};
export declare const MsgBatchUpdateOrdersResponse: {
    encode(message: MsgBatchUpdateOrdersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBatchUpdateOrdersResponse;
    fromPartial(object: DeepPartial<MsgBatchUpdateOrdersResponse>): MsgBatchUpdateOrdersResponse;
};
export declare const MsgCreateDerivativeMarketOrder: {
    encode(message: MsgCreateDerivativeMarketOrder, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateDerivativeMarketOrder;
    fromPartial(object: DeepPartial<MsgCreateDerivativeMarketOrder>): MsgCreateDerivativeMarketOrder;
};
export declare const MsgCreateDerivativeMarketOrderResponse: {
    encode(message: MsgCreateDerivativeMarketOrderResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateDerivativeMarketOrderResponse;
    fromPartial(object: DeepPartial<MsgCreateDerivativeMarketOrderResponse>): MsgCreateDerivativeMarketOrderResponse;
};
export declare const MsgCreateBinaryOptionsMarketOrder: {
    encode(message: MsgCreateBinaryOptionsMarketOrder, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateBinaryOptionsMarketOrder;
    fromPartial(object: DeepPartial<MsgCreateBinaryOptionsMarketOrder>): MsgCreateBinaryOptionsMarketOrder;
};
export declare const MsgCreateBinaryOptionsMarketOrderResponse: {
    encode(message: MsgCreateBinaryOptionsMarketOrderResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateBinaryOptionsMarketOrderResponse;
    fromPartial(object: DeepPartial<MsgCreateBinaryOptionsMarketOrderResponse>): MsgCreateBinaryOptionsMarketOrderResponse;
};
export declare const MsgCancelDerivativeOrder: {
    encode(message: MsgCancelDerivativeOrder, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelDerivativeOrder;
    fromPartial(object: DeepPartial<MsgCancelDerivativeOrder>): MsgCancelDerivativeOrder;
};
export declare const MsgCancelDerivativeOrderResponse: {
    encode(_: MsgCancelDerivativeOrderResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelDerivativeOrderResponse;
    fromPartial(_: DeepPartial<MsgCancelDerivativeOrderResponse>): MsgCancelDerivativeOrderResponse;
};
export declare const MsgCancelBinaryOptionsOrder: {
    encode(message: MsgCancelBinaryOptionsOrder, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelBinaryOptionsOrder;
    fromPartial(object: DeepPartial<MsgCancelBinaryOptionsOrder>): MsgCancelBinaryOptionsOrder;
};
export declare const MsgCancelBinaryOptionsOrderResponse: {
    encode(_: MsgCancelBinaryOptionsOrderResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelBinaryOptionsOrderResponse;
    fromPartial(_: DeepPartial<MsgCancelBinaryOptionsOrderResponse>): MsgCancelBinaryOptionsOrderResponse;
};
export declare const OrderData: {
    encode(message: OrderData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OrderData;
    fromPartial(object: DeepPartial<OrderData>): OrderData;
};
export declare const MsgBatchCancelDerivativeOrders: {
    encode(message: MsgBatchCancelDerivativeOrders, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBatchCancelDerivativeOrders;
    fromPartial(object: DeepPartial<MsgBatchCancelDerivativeOrders>): MsgBatchCancelDerivativeOrders;
};
export declare const MsgBatchCancelDerivativeOrdersResponse: {
    encode(message: MsgBatchCancelDerivativeOrdersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBatchCancelDerivativeOrdersResponse;
    fromPartial(object: DeepPartial<MsgBatchCancelDerivativeOrdersResponse>): MsgBatchCancelDerivativeOrdersResponse;
};
export declare const MsgSubaccountTransfer: {
    encode(message: MsgSubaccountTransfer, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubaccountTransfer;
    fromPartial(object: DeepPartial<MsgSubaccountTransfer>): MsgSubaccountTransfer;
};
export declare const MsgSubaccountTransferResponse: {
    encode(_: MsgSubaccountTransferResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubaccountTransferResponse;
    fromPartial(_: DeepPartial<MsgSubaccountTransferResponse>): MsgSubaccountTransferResponse;
};
export declare const MsgExternalTransfer: {
    encode(message: MsgExternalTransfer, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgExternalTransfer;
    fromPartial(object: DeepPartial<MsgExternalTransfer>): MsgExternalTransfer;
};
export declare const MsgExternalTransferResponse: {
    encode(_: MsgExternalTransferResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgExternalTransferResponse;
    fromPartial(_: DeepPartial<MsgExternalTransferResponse>): MsgExternalTransferResponse;
};
export declare const MsgLiquidatePosition: {
    encode(message: MsgLiquidatePosition, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgLiquidatePosition;
    fromPartial(object: DeepPartial<MsgLiquidatePosition>): MsgLiquidatePosition;
};
export declare const MsgLiquidatePositionResponse: {
    encode(_: MsgLiquidatePositionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgLiquidatePositionResponse;
    fromPartial(_: DeepPartial<MsgLiquidatePositionResponse>): MsgLiquidatePositionResponse;
};
export declare const MsgIncreasePositionMargin: {
    encode(message: MsgIncreasePositionMargin, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgIncreasePositionMargin;
    fromPartial(object: DeepPartial<MsgIncreasePositionMargin>): MsgIncreasePositionMargin;
};
export declare const MsgIncreasePositionMarginResponse: {
    encode(_: MsgIncreasePositionMarginResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgIncreasePositionMarginResponse;
    fromPartial(_: DeepPartial<MsgIncreasePositionMarginResponse>): MsgIncreasePositionMarginResponse;
};
export declare const MsgExec: {
    encode(message: MsgExec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgExec;
    fromPartial(object: DeepPartial<MsgExec>): MsgExec;
};
export declare const MsgExecResponse: {
    encode(_: MsgExecResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgExecResponse;
    fromPartial(_: DeepPartial<MsgExecResponse>): MsgExecResponse;
};
export declare const SpotMarketParamUpdateProposal: {
    encode(message: SpotMarketParamUpdateProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SpotMarketParamUpdateProposal;
    fromPartial(object: DeepPartial<SpotMarketParamUpdateProposal>): SpotMarketParamUpdateProposal;
};
export declare const ExchangeEnableProposal: {
    encode(message: ExchangeEnableProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ExchangeEnableProposal;
    fromPartial(object: DeepPartial<ExchangeEnableProposal>): ExchangeEnableProposal;
};
export declare const BatchExchangeModificationProposal: {
    encode(message: BatchExchangeModificationProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BatchExchangeModificationProposal;
    fromPartial(object: DeepPartial<BatchExchangeModificationProposal>): BatchExchangeModificationProposal;
};
export declare const SpotMarketLaunchProposal: {
    encode(message: SpotMarketLaunchProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SpotMarketLaunchProposal;
    fromPartial(object: DeepPartial<SpotMarketLaunchProposal>): SpotMarketLaunchProposal;
};
export declare const PerpetualMarketLaunchProposal: {
    encode(message: PerpetualMarketLaunchProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PerpetualMarketLaunchProposal;
    fromPartial(object: DeepPartial<PerpetualMarketLaunchProposal>): PerpetualMarketLaunchProposal;
};
export declare const BinaryOptionsMarketLaunchProposal: {
    encode(message: BinaryOptionsMarketLaunchProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BinaryOptionsMarketLaunchProposal;
    fromPartial(object: DeepPartial<BinaryOptionsMarketLaunchProposal>): BinaryOptionsMarketLaunchProposal;
};
export declare const ExpiryFuturesMarketLaunchProposal: {
    encode(message: ExpiryFuturesMarketLaunchProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ExpiryFuturesMarketLaunchProposal;
    fromPartial(object: DeepPartial<ExpiryFuturesMarketLaunchProposal>): ExpiryFuturesMarketLaunchProposal;
};
export declare const DerivativeMarketParamUpdateProposal: {
    encode(message: DerivativeMarketParamUpdateProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DerivativeMarketParamUpdateProposal;
    fromPartial(object: DeepPartial<DerivativeMarketParamUpdateProposal>): DerivativeMarketParamUpdateProposal;
};
export declare const MarketForcedSettlementProposal: {
    encode(message: MarketForcedSettlementProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MarketForcedSettlementProposal;
    fromPartial(object: DeepPartial<MarketForcedSettlementProposal>): MarketForcedSettlementProposal;
};
export declare const UpdateDenomDecimalsProposal: {
    encode(message: UpdateDenomDecimalsProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateDenomDecimalsProposal;
    fromPartial(object: DeepPartial<UpdateDenomDecimalsProposal>): UpdateDenomDecimalsProposal;
};
export declare const DenomDecimals: {
    encode(message: DenomDecimals, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DenomDecimals;
    fromPartial(object: DeepPartial<DenomDecimals>): DenomDecimals;
};
export declare const BinaryOptionsMarketParamUpdateProposal: {
    encode(message: BinaryOptionsMarketParamUpdateProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BinaryOptionsMarketParamUpdateProposal;
    fromPartial(object: DeepPartial<BinaryOptionsMarketParamUpdateProposal>): BinaryOptionsMarketParamUpdateProposal;
};
export declare const ProviderOracleParams: {
    encode(message: ProviderOracleParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ProviderOracleParams;
    fromPartial(object: DeepPartial<ProviderOracleParams>): ProviderOracleParams;
};
export declare const OracleParams: {
    encode(message: OracleParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OracleParams;
    fromPartial(object: DeepPartial<OracleParams>): OracleParams;
};
export declare const TradingRewardCampaignLaunchProposal: {
    encode(message: TradingRewardCampaignLaunchProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TradingRewardCampaignLaunchProposal;
    fromPartial(object: DeepPartial<TradingRewardCampaignLaunchProposal>): TradingRewardCampaignLaunchProposal;
};
export declare const TradingRewardCampaignUpdateProposal: {
    encode(message: TradingRewardCampaignUpdateProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TradingRewardCampaignUpdateProposal;
    fromPartial(object: DeepPartial<TradingRewardCampaignUpdateProposal>): TradingRewardCampaignUpdateProposal;
};
export declare const RewardPointUpdate: {
    encode(message: RewardPointUpdate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RewardPointUpdate;
    fromPartial(object: DeepPartial<RewardPointUpdate>): RewardPointUpdate;
};
export declare const TradingRewardPendingPointsUpdateProposal: {
    encode(message: TradingRewardPendingPointsUpdateProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TradingRewardPendingPointsUpdateProposal;
    fromPartial(object: DeepPartial<TradingRewardPendingPointsUpdateProposal>): TradingRewardPendingPointsUpdateProposal;
};
export declare const FeeDiscountProposal: {
    encode(message: FeeDiscountProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FeeDiscountProposal;
    fromPartial(object: DeepPartial<FeeDiscountProposal>): FeeDiscountProposal;
};
export declare const BatchCommunityPoolSpendProposal: {
    encode(message: BatchCommunityPoolSpendProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BatchCommunityPoolSpendProposal;
    fromPartial(object: DeepPartial<BatchCommunityPoolSpendProposal>): BatchCommunityPoolSpendProposal;
};
export declare const MsgRewardsOptOut: {
    encode(message: MsgRewardsOptOut, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRewardsOptOut;
    fromPartial(object: DeepPartial<MsgRewardsOptOut>): MsgRewardsOptOut;
};
export declare const MsgRewardsOptOutResponse: {
    encode(_: MsgRewardsOptOutResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRewardsOptOutResponse;
    fromPartial(_: DeepPartial<MsgRewardsOptOutResponse>): MsgRewardsOptOutResponse;
};
export declare const MsgAdminUpdateBinaryOptionsMarket: {
    encode(message: MsgAdminUpdateBinaryOptionsMarket, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAdminUpdateBinaryOptionsMarket;
    fromPartial(object: DeepPartial<MsgAdminUpdateBinaryOptionsMarket>): MsgAdminUpdateBinaryOptionsMarket;
};
export declare const MsgAdminUpdateBinaryOptionsMarketResponse: {
    encode(_: MsgAdminUpdateBinaryOptionsMarketResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAdminUpdateBinaryOptionsMarketResponse;
    fromPartial(_: DeepPartial<MsgAdminUpdateBinaryOptionsMarketResponse>): MsgAdminUpdateBinaryOptionsMarketResponse;
};
