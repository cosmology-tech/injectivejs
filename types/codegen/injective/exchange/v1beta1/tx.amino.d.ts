import { AminoMsg } from "@cosmjs/amino";
import { MsgDeposit, MsgWithdraw, MsgInstantSpotMarketLaunch, MsgInstantPerpetualMarketLaunch, MsgInstantExpiryFuturesMarketLaunch, MsgCreateSpotLimitOrder, MsgBatchCreateSpotLimitOrders, MsgCreateSpotMarketOrder, MsgCancelSpotOrder, MsgBatchCancelSpotOrders, MsgBatchUpdateOrders, MsgExec, MsgCreateDerivativeLimitOrder, MsgBatchCreateDerivativeLimitOrders, MsgCreateDerivativeMarketOrder, MsgCancelDerivativeOrder, MsgBatchCancelDerivativeOrders, MsgInstantBinaryOptionsMarketLaunch, MsgCreateBinaryOptionsLimitOrder, MsgCreateBinaryOptionsMarketOrder, MsgCancelBinaryOptionsOrder, MsgBatchCancelBinaryOptionsOrders, MsgSubaccountTransfer, MsgExternalTransfer, MsgLiquidatePosition, MsgIncreasePositionMargin, MsgRewardsOptOut, MsgAdminUpdateBinaryOptionsMarket } from "./tx";
export interface AminoMsgDeposit extends AminoMsg {
    type: "exchange/MsgDeposit";
    value: {
        sender: string;
        subaccount_id: string;
        amount: {
            denom: string;
            amount: string;
        };
    };
}
export interface AminoMsgWithdraw extends AminoMsg {
    type: "exchange/MsgWithdraw";
    value: {
        sender: string;
        subaccount_id: string;
        amount: {
            denom: string;
            amount: string;
        };
    };
}
export interface AminoMsgInstantSpotMarketLaunch extends AminoMsg {
    type: "exchange/MsgInstantSpotMarketLaunch";
    value: {
        sender: string;
        ticker: string;
        base_denom: string;
        quote_denom: string;
        min_price_tick_size: string;
        min_quantity_tick_size: string;
    };
}
export interface AminoMsgInstantPerpetualMarketLaunch extends AminoMsg {
    type: "exchange/MsgInstantPerpetualMarketLaunch";
    value: {
        sender: string;
        ticker: string;
        quote_denom: string;
        oracle_base: string;
        oracle_quote: string;
        oracle_scale_factor: number;
        oracle_type: number;
        maker_fee_rate: string;
        taker_fee_rate: string;
        initial_margin_ratio: string;
        maintenance_margin_ratio: string;
        min_price_tick_size: string;
        min_quantity_tick_size: string;
    };
}
export interface AminoMsgInstantExpiryFuturesMarketLaunch extends AminoMsg {
    type: "exchange/MsgInstantExpiryFuturesMarketLaunch";
    value: {
        sender: string;
        ticker: string;
        quote_denom: string;
        oracle_base: string;
        oracle_quote: string;
        oracle_type: number;
        oracle_scale_factor: number;
        expiry: string;
        maker_fee_rate: string;
        taker_fee_rate: string;
        initial_margin_ratio: string;
        maintenance_margin_ratio: string;
        min_price_tick_size: string;
        min_quantity_tick_size: string;
    };
}
export interface AminoMsgCreateSpotLimitOrder extends AminoMsg {
    type: "exchange/MsgCreateSpotLimitOrder";
    value: {
        sender: string;
        order: {
            market_id: string;
            order_info: {
                subaccount_id: string;
                fee_recipient: string;
                price: string;
                quantity: string;
            };
            order_type: number;
            trigger_price: string;
        };
    };
}
export interface AminoMsgBatchCreateSpotLimitOrders extends AminoMsg {
    type: "exchange/MsgBatchCreateSpotLimitOrders";
    value: {
        sender: string;
        orders: {
            market_id: string;
            order_info: {
                subaccount_id: string;
                fee_recipient: string;
                price: string;
                quantity: string;
            };
            order_type: number;
            trigger_price: string;
        }[];
    };
}
export interface AminoMsgCreateSpotMarketOrder extends AminoMsg {
    type: "exchange/MsgCreateSpotMarketOrder";
    value: {
        sender: string;
        order: {
            market_id: string;
            order_info: {
                subaccount_id: string;
                fee_recipient: string;
                price: string;
                quantity: string;
            };
            order_type: number;
            trigger_price: string;
        };
    };
}
export interface AminoMsgCancelSpotOrder extends AminoMsg {
    type: "exchange/MsgCancelSpotOrder";
    value: {
        sender: string;
        market_id: string;
        subaccount_id: string;
        order_hash: string;
    };
}
export interface AminoMsgBatchCancelSpotOrders extends AminoMsg {
    type: "exchange/MsgBatchCancelSpotOrders";
    value: {
        sender: string;
        data: {
            market_id: string;
            subaccount_id: string;
            order_hash: string;
            order_mask: number;
        }[];
    };
}
export interface AminoMsgBatchUpdateOrders extends AminoMsg {
    type: "exchange/MsgBatchUpdateOrders";
    value: {
        sender: string;
        subaccount_id: string;
        spot_market_ids_to_cancel_all: string[];
        derivative_market_ids_to_cancel_all: string[];
        spot_orders_to_cancel: {
            market_id: string;
            subaccount_id: string;
            order_hash: string;
            order_mask: number;
        }[];
        derivative_orders_to_cancel: {
            market_id: string;
            subaccount_id: string;
            order_hash: string;
            order_mask: number;
        }[];
        spot_orders_to_create: {
            market_id: string;
            order_info: {
                subaccount_id: string;
                fee_recipient: string;
                price: string;
                quantity: string;
            };
            order_type: number;
            trigger_price: string;
        }[];
        derivative_orders_to_create: {
            market_id: string;
            order_info: {
                subaccount_id: string;
                fee_recipient: string;
                price: string;
                quantity: string;
            };
            order_type: number;
            margin: string;
            trigger_price: string;
        }[];
        binary_options_orders_to_cancel: {
            market_id: string;
            subaccount_id: string;
            order_hash: string;
            order_mask: number;
        }[];
        binary_options_market_ids_to_cancel_all: string[];
        binary_options_orders_to_create: {
            market_id: string;
            order_info: {
                subaccount_id: string;
                fee_recipient: string;
                price: string;
                quantity: string;
            };
            order_type: number;
            margin: string;
            trigger_price: string;
        }[];
    };
}
export interface AminoMsgExec extends AminoMsg {
    type: "exchange/MsgExec";
    value: {
        sender: string;
        bank_funds: {
            denom: string;
            amount: string;
        }[];
        deposits_subaccount_id: string;
        deposit_funds: {
            denom: string;
            amount: string;
        }[];
        contract_address: string;
        data: string;
    };
}
export interface AminoMsgCreateDerivativeLimitOrder extends AminoMsg {
    type: "exchange/MsgCreateDerivativeLimitOrder";
    value: {
        sender: string;
        order: {
            market_id: string;
            order_info: {
                subaccount_id: string;
                fee_recipient: string;
                price: string;
                quantity: string;
            };
            order_type: number;
            margin: string;
            trigger_price: string;
        };
    };
}
export interface AminoMsgBatchCreateDerivativeLimitOrders extends AminoMsg {
    type: "exchange/MsgBatchCreateDerivativeLimitOrders";
    value: {
        sender: string;
        orders: {
            market_id: string;
            order_info: {
                subaccount_id: string;
                fee_recipient: string;
                price: string;
                quantity: string;
            };
            order_type: number;
            margin: string;
            trigger_price: string;
        }[];
    };
}
export interface AminoMsgCreateDerivativeMarketOrder extends AminoMsg {
    type: "exchange/MsgCreateDerivativeMarketOrder";
    value: {
        sender: string;
        order: {
            market_id: string;
            order_info: {
                subaccount_id: string;
                fee_recipient: string;
                price: string;
                quantity: string;
            };
            order_type: number;
            margin: string;
            trigger_price: string;
        };
    };
}
export interface AminoMsgCancelDerivativeOrder extends AminoMsg {
    type: "exchange/MsgCancelDerivativeOrder";
    value: {
        sender: string;
        market_id: string;
        subaccount_id: string;
        order_hash: string;
        order_mask: number;
    };
}
export interface AminoMsgBatchCancelDerivativeOrders extends AminoMsg {
    type: "exchange/MsgBatchCancelDerivativeOrders";
    value: {
        sender: string;
        data: {
            market_id: string;
            subaccount_id: string;
            order_hash: string;
            order_mask: number;
        }[];
    };
}
export interface AminoMsgInstantBinaryOptionsMarketLaunch extends AminoMsg {
    type: "exchange/MsgInstantBinaryOptionsMarketLaunch";
    value: {
        sender: string;
        ticker: string;
        oracle_symbol: string;
        oracle_provider: string;
        oracle_type: number;
        oracle_scale_factor: number;
        maker_fee_rate: string;
        taker_fee_rate: string;
        expiration_timestamp: string;
        settlement_timestamp: string;
        admin: string;
        quote_denom: string;
        min_price_tick_size: string;
        min_quantity_tick_size: string;
    };
}
export interface AminoMsgCreateBinaryOptionsLimitOrder extends AminoMsg {
    type: "exchange/MsgCreateBinaryOptionsLimitOrder";
    value: {
        sender: string;
        order: {
            market_id: string;
            order_info: {
                subaccount_id: string;
                fee_recipient: string;
                price: string;
                quantity: string;
            };
            order_type: number;
            margin: string;
            trigger_price: string;
        };
    };
}
export interface AminoMsgCreateBinaryOptionsMarketOrder extends AminoMsg {
    type: "exchange/MsgCreateBinaryOptionsMarketOrder";
    value: {
        sender: string;
        order: {
            market_id: string;
            order_info: {
                subaccount_id: string;
                fee_recipient: string;
                price: string;
                quantity: string;
            };
            order_type: number;
            margin: string;
            trigger_price: string;
        };
    };
}
export interface AminoMsgCancelBinaryOptionsOrder extends AminoMsg {
    type: "exchange/MsgCancelBinaryOptionsOrder";
    value: {
        sender: string;
        market_id: string;
        subaccount_id: string;
        order_hash: string;
        order_mask: number;
    };
}
export interface AminoMsgBatchCancelBinaryOptionsOrders extends AminoMsg {
    type: "exchange/MsgBatchCancelBinaryOptionsOrders";
    value: {
        sender: string;
        data: {
            market_id: string;
            subaccount_id: string;
            order_hash: string;
            order_mask: number;
        }[];
    };
}
export interface AminoMsgSubaccountTransfer extends AminoMsg {
    type: "exchange/MsgSubaccountTransfer";
    value: {
        sender: string;
        source_subaccount_id: string;
        destination_subaccount_id: string;
        amount: {
            denom: string;
            amount: string;
        };
    };
}
export interface AminoMsgExternalTransfer extends AminoMsg {
    type: "exchange/MsgExternalTransfer";
    value: {
        sender: string;
        source_subaccount_id: string;
        destination_subaccount_id: string;
        amount: {
            denom: string;
            amount: string;
        };
    };
}
export interface AminoMsgLiquidatePosition extends AminoMsg {
    type: "exchange/MsgLiquidatePosition";
    value: {
        sender: string;
        subaccount_id: string;
        market_id: string;
        order: {
            market_id: string;
            order_info: {
                subaccount_id: string;
                fee_recipient: string;
                price: string;
                quantity: string;
            };
            order_type: number;
            margin: string;
            trigger_price: string;
        };
    };
}
export interface AminoMsgIncreasePositionMargin extends AminoMsg {
    type: "exchange/MsgIncreasePositionMargin";
    value: {
        sender: string;
        source_subaccount_id: string;
        destination_subaccount_id: string;
        market_id: string;
        amount: string;
    };
}
export interface AminoMsgRewardsOptOut extends AminoMsg {
    type: "/injective.exchange.v1beta1.MsgRewardsOptOut";
    value: {
        sender: string;
    };
}
export interface AminoMsgAdminUpdateBinaryOptionsMarket extends AminoMsg {
    type: "exchange/MsgAdminUpdateBinaryOptionsMarket";
    value: {
        sender: string;
        market_id: string;
        settlement_price: string;
        expiration_timestamp: string;
        settlement_timestamp: string;
        status: number;
    };
}
export declare const AminoConverter: {
    "/injective.exchange.v1beta1.MsgDeposit": {
        aminoType: string;
        toAmino: ({ sender, subaccountId, amount }: MsgDeposit) => AminoMsgDeposit["value"];
        fromAmino: ({ sender, subaccount_id, amount }: AminoMsgDeposit["value"]) => MsgDeposit;
    };
    "/injective.exchange.v1beta1.MsgWithdraw": {
        aminoType: string;
        toAmino: ({ sender, subaccountId, amount }: MsgWithdraw) => AminoMsgWithdraw["value"];
        fromAmino: ({ sender, subaccount_id, amount }: AminoMsgWithdraw["value"]) => MsgWithdraw;
    };
    "/injective.exchange.v1beta1.MsgInstantSpotMarketLaunch": {
        aminoType: string;
        toAmino: ({ sender, ticker, baseDenom, quoteDenom, minPriceTickSize, minQuantityTickSize }: MsgInstantSpotMarketLaunch) => AminoMsgInstantSpotMarketLaunch["value"];
        fromAmino: ({ sender, ticker, base_denom, quote_denom, min_price_tick_size, min_quantity_tick_size }: AminoMsgInstantSpotMarketLaunch["value"]) => MsgInstantSpotMarketLaunch;
    };
    "/injective.exchange.v1beta1.MsgInstantPerpetualMarketLaunch": {
        aminoType: string;
        toAmino: ({ sender, ticker, quoteDenom, oracleBase, oracleQuote, oracleScaleFactor, oracleType, makerFeeRate, takerFeeRate, initialMarginRatio, maintenanceMarginRatio, minPriceTickSize, minQuantityTickSize }: MsgInstantPerpetualMarketLaunch) => AminoMsgInstantPerpetualMarketLaunch["value"];
        fromAmino: ({ sender, ticker, quote_denom, oracle_base, oracle_quote, oracle_scale_factor, oracle_type, maker_fee_rate, taker_fee_rate, initial_margin_ratio, maintenance_margin_ratio, min_price_tick_size, min_quantity_tick_size }: AminoMsgInstantPerpetualMarketLaunch["value"]) => MsgInstantPerpetualMarketLaunch;
    };
    "/injective.exchange.v1beta1.MsgInstantExpiryFuturesMarketLaunch": {
        aminoType: string;
        toAmino: ({ sender, ticker, quoteDenom, oracleBase, oracleQuote, oracleType, oracleScaleFactor, expiry, makerFeeRate, takerFeeRate, initialMarginRatio, maintenanceMarginRatio, minPriceTickSize, minQuantityTickSize }: MsgInstantExpiryFuturesMarketLaunch) => AminoMsgInstantExpiryFuturesMarketLaunch["value"];
        fromAmino: ({ sender, ticker, quote_denom, oracle_base, oracle_quote, oracle_type, oracle_scale_factor, expiry, maker_fee_rate, taker_fee_rate, initial_margin_ratio, maintenance_margin_ratio, min_price_tick_size, min_quantity_tick_size }: AminoMsgInstantExpiryFuturesMarketLaunch["value"]) => MsgInstantExpiryFuturesMarketLaunch;
    };
    "/injective.exchange.v1beta1.MsgCreateSpotLimitOrder": {
        aminoType: string;
        toAmino: ({ sender, order }: MsgCreateSpotLimitOrder) => AminoMsgCreateSpotLimitOrder["value"];
        fromAmino: ({ sender, order }: AminoMsgCreateSpotLimitOrder["value"]) => MsgCreateSpotLimitOrder;
    };
    "/injective.exchange.v1beta1.MsgBatchCreateSpotLimitOrders": {
        aminoType: string;
        toAmino: ({ sender, orders }: MsgBatchCreateSpotLimitOrders) => AminoMsgBatchCreateSpotLimitOrders["value"];
        fromAmino: ({ sender, orders }: AminoMsgBatchCreateSpotLimitOrders["value"]) => MsgBatchCreateSpotLimitOrders;
    };
    "/injective.exchange.v1beta1.MsgCreateSpotMarketOrder": {
        aminoType: string;
        toAmino: ({ sender, order }: MsgCreateSpotMarketOrder) => AminoMsgCreateSpotMarketOrder["value"];
        fromAmino: ({ sender, order }: AminoMsgCreateSpotMarketOrder["value"]) => MsgCreateSpotMarketOrder;
    };
    "/injective.exchange.v1beta1.MsgCancelSpotOrder": {
        aminoType: string;
        toAmino: ({ sender, marketId, subaccountId, orderHash }: MsgCancelSpotOrder) => AminoMsgCancelSpotOrder["value"];
        fromAmino: ({ sender, market_id, subaccount_id, order_hash }: AminoMsgCancelSpotOrder["value"]) => MsgCancelSpotOrder;
    };
    "/injective.exchange.v1beta1.MsgBatchCancelSpotOrders": {
        aminoType: string;
        toAmino: ({ sender, data }: MsgBatchCancelSpotOrders) => AminoMsgBatchCancelSpotOrders["value"];
        fromAmino: ({ sender, data }: AminoMsgBatchCancelSpotOrders["value"]) => MsgBatchCancelSpotOrders;
    };
    "/injective.exchange.v1beta1.MsgBatchUpdateOrders": {
        aminoType: string;
        toAmino: ({ sender, subaccountId, spotMarketIdsToCancelAll, derivativeMarketIdsToCancelAll, spotOrdersToCancel, derivativeOrdersToCancel, spotOrdersToCreate, derivativeOrdersToCreate, binaryOptionsOrdersToCancel, binaryOptionsMarketIdsToCancelAll, binaryOptionsOrdersToCreate }: MsgBatchUpdateOrders) => AminoMsgBatchUpdateOrders["value"];
        fromAmino: ({ sender, subaccount_id, spot_market_ids_to_cancel_all, derivative_market_ids_to_cancel_all, spot_orders_to_cancel, derivative_orders_to_cancel, spot_orders_to_create, derivative_orders_to_create, binary_options_orders_to_cancel, binary_options_market_ids_to_cancel_all, binary_options_orders_to_create }: AminoMsgBatchUpdateOrders["value"]) => MsgBatchUpdateOrders;
    };
    "/injective.exchange.v1beta1.MsgExec": {
        aminoType: string;
        toAmino: ({ sender, bankFunds, depositsSubaccountId, depositFunds, contractAddress, data }: MsgExec) => AminoMsgExec["value"];
        fromAmino: ({ sender, bank_funds, deposits_subaccount_id, deposit_funds, contract_address, data }: AminoMsgExec["value"]) => MsgExec;
    };
    "/injective.exchange.v1beta1.MsgCreateDerivativeLimitOrder": {
        aminoType: string;
        toAmino: ({ sender, order }: MsgCreateDerivativeLimitOrder) => AminoMsgCreateDerivativeLimitOrder["value"];
        fromAmino: ({ sender, order }: AminoMsgCreateDerivativeLimitOrder["value"]) => MsgCreateDerivativeLimitOrder;
    };
    "/injective.exchange.v1beta1.MsgBatchCreateDerivativeLimitOrders": {
        aminoType: string;
        toAmino: ({ sender, orders }: MsgBatchCreateDerivativeLimitOrders) => AminoMsgBatchCreateDerivativeLimitOrders["value"];
        fromAmino: ({ sender, orders }: AminoMsgBatchCreateDerivativeLimitOrders["value"]) => MsgBatchCreateDerivativeLimitOrders;
    };
    "/injective.exchange.v1beta1.MsgCreateDerivativeMarketOrder": {
        aminoType: string;
        toAmino: ({ sender, order }: MsgCreateDerivativeMarketOrder) => AminoMsgCreateDerivativeMarketOrder["value"];
        fromAmino: ({ sender, order }: AminoMsgCreateDerivativeMarketOrder["value"]) => MsgCreateDerivativeMarketOrder;
    };
    "/injective.exchange.v1beta1.MsgCancelDerivativeOrder": {
        aminoType: string;
        toAmino: ({ sender, marketId, subaccountId, orderHash, orderMask }: MsgCancelDerivativeOrder) => AminoMsgCancelDerivativeOrder["value"];
        fromAmino: ({ sender, market_id, subaccount_id, order_hash, order_mask }: AminoMsgCancelDerivativeOrder["value"]) => MsgCancelDerivativeOrder;
    };
    "/injective.exchange.v1beta1.MsgBatchCancelDerivativeOrders": {
        aminoType: string;
        toAmino: ({ sender, data }: MsgBatchCancelDerivativeOrders) => AminoMsgBatchCancelDerivativeOrders["value"];
        fromAmino: ({ sender, data }: AminoMsgBatchCancelDerivativeOrders["value"]) => MsgBatchCancelDerivativeOrders;
    };
    "/injective.exchange.v1beta1.MsgInstantBinaryOptionsMarketLaunch": {
        aminoType: string;
        toAmino: ({ sender, ticker, oracleSymbol, oracleProvider, oracleType, oracleScaleFactor, makerFeeRate, takerFeeRate, expirationTimestamp, settlementTimestamp, admin, quoteDenom, minPriceTickSize, minQuantityTickSize }: MsgInstantBinaryOptionsMarketLaunch) => AminoMsgInstantBinaryOptionsMarketLaunch["value"];
        fromAmino: ({ sender, ticker, oracle_symbol, oracle_provider, oracle_type, oracle_scale_factor, maker_fee_rate, taker_fee_rate, expiration_timestamp, settlement_timestamp, admin, quote_denom, min_price_tick_size, min_quantity_tick_size }: AminoMsgInstantBinaryOptionsMarketLaunch["value"]) => MsgInstantBinaryOptionsMarketLaunch;
    };
    "/injective.exchange.v1beta1.MsgCreateBinaryOptionsLimitOrder": {
        aminoType: string;
        toAmino: ({ sender, order }: MsgCreateBinaryOptionsLimitOrder) => AminoMsgCreateBinaryOptionsLimitOrder["value"];
        fromAmino: ({ sender, order }: AminoMsgCreateBinaryOptionsLimitOrder["value"]) => MsgCreateBinaryOptionsLimitOrder;
    };
    "/injective.exchange.v1beta1.MsgCreateBinaryOptionsMarketOrder": {
        aminoType: string;
        toAmino: ({ sender, order }: MsgCreateBinaryOptionsMarketOrder) => AminoMsgCreateBinaryOptionsMarketOrder["value"];
        fromAmino: ({ sender, order }: AminoMsgCreateBinaryOptionsMarketOrder["value"]) => MsgCreateBinaryOptionsMarketOrder;
    };
    "/injective.exchange.v1beta1.MsgCancelBinaryOptionsOrder": {
        aminoType: string;
        toAmino: ({ sender, marketId, subaccountId, orderHash, orderMask }: MsgCancelBinaryOptionsOrder) => AminoMsgCancelBinaryOptionsOrder["value"];
        fromAmino: ({ sender, market_id, subaccount_id, order_hash, order_mask }: AminoMsgCancelBinaryOptionsOrder["value"]) => MsgCancelBinaryOptionsOrder;
    };
    "/injective.exchange.v1beta1.MsgBatchCancelBinaryOptionsOrders": {
        aminoType: string;
        toAmino: ({ sender, data }: MsgBatchCancelBinaryOptionsOrders) => AminoMsgBatchCancelBinaryOptionsOrders["value"];
        fromAmino: ({ sender, data }: AminoMsgBatchCancelBinaryOptionsOrders["value"]) => MsgBatchCancelBinaryOptionsOrders;
    };
    "/injective.exchange.v1beta1.MsgSubaccountTransfer": {
        aminoType: string;
        toAmino: ({ sender, sourceSubaccountId, destinationSubaccountId, amount }: MsgSubaccountTransfer) => AminoMsgSubaccountTransfer["value"];
        fromAmino: ({ sender, source_subaccount_id, destination_subaccount_id, amount }: AminoMsgSubaccountTransfer["value"]) => MsgSubaccountTransfer;
    };
    "/injective.exchange.v1beta1.MsgExternalTransfer": {
        aminoType: string;
        toAmino: ({ sender, sourceSubaccountId, destinationSubaccountId, amount }: MsgExternalTransfer) => AminoMsgExternalTransfer["value"];
        fromAmino: ({ sender, source_subaccount_id, destination_subaccount_id, amount }: AminoMsgExternalTransfer["value"]) => MsgExternalTransfer;
    };
    "/injective.exchange.v1beta1.MsgLiquidatePosition": {
        aminoType: string;
        toAmino: ({ sender, subaccountId, marketId, order }: MsgLiquidatePosition) => AminoMsgLiquidatePosition["value"];
        fromAmino: ({ sender, subaccount_id, market_id, order }: AminoMsgLiquidatePosition["value"]) => MsgLiquidatePosition;
    };
    "/injective.exchange.v1beta1.MsgIncreasePositionMargin": {
        aminoType: string;
        toAmino: ({ sender, sourceSubaccountId, destinationSubaccountId, marketId, amount }: MsgIncreasePositionMargin) => AminoMsgIncreasePositionMargin["value"];
        fromAmino: ({ sender, source_subaccount_id, destination_subaccount_id, market_id, amount }: AminoMsgIncreasePositionMargin["value"]) => MsgIncreasePositionMargin;
    };
    "/injective.exchange.v1beta1.MsgRewardsOptOut": {
        aminoType: string;
        toAmino: ({ sender }: MsgRewardsOptOut) => AminoMsgRewardsOptOut["value"];
        fromAmino: ({ sender }: AminoMsgRewardsOptOut["value"]) => MsgRewardsOptOut;
    };
    "/injective.exchange.v1beta1.MsgAdminUpdateBinaryOptionsMarket": {
        aminoType: string;
        toAmino: ({ sender, marketId, settlementPrice, expirationTimestamp, settlementTimestamp, status }: MsgAdminUpdateBinaryOptionsMarket) => AminoMsgAdminUpdateBinaryOptionsMarket["value"];
        fromAmino: ({ sender, market_id, settlement_price, expiration_timestamp, settlement_timestamp, status }: AminoMsgAdminUpdateBinaryOptionsMarket["value"]) => MsgAdminUpdateBinaryOptionsMarket;
    };
};
