import { oracleTypeFromJSON } from "../../oracle/v1beta1/oracle";
import { orderTypeFromJSON, marketStatusFromJSON } from "./exchange";
import { AminoMsg } from "@cosmjs/amino";
import { Long } from "@osmonauts/helpers";
import { MsgDeposit, MsgWithdraw, MsgInstantSpotMarketLaunch, MsgInstantPerpetualMarketLaunch, MsgInstantExpiryFuturesMarketLaunch, MsgCreateSpotLimitOrder, MsgBatchCreateSpotLimitOrders, MsgCreateSpotMarketOrder, MsgCancelSpotOrder, MsgBatchCancelSpotOrders, MsgBatchUpdateOrders, MsgExec, MsgCreateDerivativeLimitOrder, MsgBatchCreateDerivativeLimitOrders, MsgCreateDerivativeMarketOrder, MsgCancelDerivativeOrder, MsgBatchCancelDerivativeOrders, MsgInstantBinaryOptionsMarketLaunch, MsgCreateBinaryOptionsLimitOrder, MsgCreateBinaryOptionsMarketOrder, MsgCancelBinaryOptionsOrder, MsgBatchCancelBinaryOptionsOrders, MsgSubaccountTransfer, MsgExternalTransfer, MsgLiquidatePosition, MsgIncreasePositionMargin, MsgRewardsOptOut, MsgAdminUpdateBinaryOptionsMarket } from "./tx";
export interface AminoMsgDeposit extends AminoMsg {
  type: "/injective.exchange.v1beta1.MsgDeposit";
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
  type: "/injective.exchange.v1beta1.MsgWithdraw";
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
  type: "/injective.exchange.v1beta1.MsgInstantSpotMarketLaunch";
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
  type: "/injective.exchange.v1beta1.MsgInstantPerpetualMarketLaunch";
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
  type: "/injective.exchange.v1beta1.MsgInstantExpiryFuturesMarketLaunch";
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
  type: "/injective.exchange.v1beta1.MsgCreateSpotLimitOrder";
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
  type: "/injective.exchange.v1beta1.MsgBatchCreateSpotLimitOrders";
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
  type: "/injective.exchange.v1beta1.MsgCreateSpotMarketOrder";
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
  type: "/injective.exchange.v1beta1.MsgCancelSpotOrder";
  value: {
    sender: string;
    market_id: string;
    subaccount_id: string;
    order_hash: string;
  };
}
export interface AminoMsgBatchCancelSpotOrders extends AminoMsg {
  type: "/injective.exchange.v1beta1.MsgBatchCancelSpotOrders";
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
  type: "/injective.exchange.v1beta1.MsgBatchUpdateOrders";
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
  type: "/injective.exchange.v1beta1.MsgExec";
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
  type: "/injective.exchange.v1beta1.MsgCreateDerivativeLimitOrder";
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
  type: "/injective.exchange.v1beta1.MsgBatchCreateDerivativeLimitOrders";
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
  type: "/injective.exchange.v1beta1.MsgCreateDerivativeMarketOrder";
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
  type: "/injective.exchange.v1beta1.MsgCancelDerivativeOrder";
  value: {
    sender: string;
    market_id: string;
    subaccount_id: string;
    order_hash: string;
    order_mask: number;
  };
}
export interface AminoMsgBatchCancelDerivativeOrders extends AminoMsg {
  type: "/injective.exchange.v1beta1.MsgBatchCancelDerivativeOrders";
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
  type: "/injective.exchange.v1beta1.MsgInstantBinaryOptionsMarketLaunch";
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
  type: "/injective.exchange.v1beta1.MsgCreateBinaryOptionsLimitOrder";
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
  type: "/injective.exchange.v1beta1.MsgCreateBinaryOptionsMarketOrder";
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
  type: "/injective.exchange.v1beta1.MsgCancelBinaryOptionsOrder";
  value: {
    sender: string;
    market_id: string;
    subaccount_id: string;
    order_hash: string;
    order_mask: number;
  };
}
export interface AminoMsgBatchCancelBinaryOptionsOrders extends AminoMsg {
  type: "/injective.exchange.v1beta1.MsgBatchCancelBinaryOptionsOrders";
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
  type: "/injective.exchange.v1beta1.MsgSubaccountTransfer";
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
  type: "/injective.exchange.v1beta1.MsgExternalTransfer";
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
  type: "/injective.exchange.v1beta1.MsgLiquidatePosition";
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
  type: "/injective.exchange.v1beta1.MsgIncreasePositionMargin";
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
  type: "/injective.exchange.v1beta1.MsgAdminUpdateBinaryOptionsMarket";
  value: {
    sender: string;
    market_id: string;
    settlement_price: string;
    expiration_timestamp: string;
    settlement_timestamp: string;
    status: number;
  };
}
export const AminoConverter = {
  "/injective.exchange.v1beta1.MsgDeposit": {
    aminoType: "/injective.exchange.v1beta1.MsgDeposit",
    toAmino: ({
      sender,
      subaccountId,
      amount
    }: MsgDeposit): AminoMsgDeposit["value"] => {
      return {
        sender,
        subaccount_id: subaccountId,
        amount: {
          denom: amount.denom,
          amount: Long.fromNumber(amount.amount).toString()
        }
      };
    },
    fromAmino: ({
      sender,
      subaccount_id,
      amount
    }: AminoMsgDeposit["value"]): MsgDeposit => {
      return {
        sender,
        subaccountId: subaccount_id,
        amount: {
          denom: amount.denom,
          amount: amount.amount
        }
      };
    }
  },
  "/injective.exchange.v1beta1.MsgWithdraw": {
    aminoType: "/injective.exchange.v1beta1.MsgWithdraw",
    toAmino: ({
      sender,
      subaccountId,
      amount
    }: MsgWithdraw): AminoMsgWithdraw["value"] => {
      return {
        sender,
        subaccount_id: subaccountId,
        amount: {
          denom: amount.denom,
          amount: Long.fromNumber(amount.amount).toString()
        }
      };
    },
    fromAmino: ({
      sender,
      subaccount_id,
      amount
    }: AminoMsgWithdraw["value"]): MsgWithdraw => {
      return {
        sender,
        subaccountId: subaccount_id,
        amount: {
          denom: amount.denom,
          amount: amount.amount
        }
      };
    }
  },
  "/injective.exchange.v1beta1.MsgInstantSpotMarketLaunch": {
    aminoType: "/injective.exchange.v1beta1.MsgInstantSpotMarketLaunch",
    toAmino: ({
      sender,
      ticker,
      baseDenom,
      quoteDenom,
      minPriceTickSize,
      minQuantityTickSize
    }: MsgInstantSpotMarketLaunch): AminoMsgInstantSpotMarketLaunch["value"] => {
      return {
        sender,
        ticker,
        base_denom: baseDenom,
        quote_denom: quoteDenom,
        min_price_tick_size: minPriceTickSize,
        min_quantity_tick_size: minQuantityTickSize
      };
    },
    fromAmino: ({
      sender,
      ticker,
      base_denom,
      quote_denom,
      min_price_tick_size,
      min_quantity_tick_size
    }: AminoMsgInstantSpotMarketLaunch["value"]): MsgInstantSpotMarketLaunch => {
      return {
        sender,
        ticker,
        baseDenom: base_denom,
        quoteDenom: quote_denom,
        minPriceTickSize: min_price_tick_size,
        minQuantityTickSize: min_quantity_tick_size
      };
    }
  },
  "/injective.exchange.v1beta1.MsgInstantPerpetualMarketLaunch": {
    aminoType: "/injective.exchange.v1beta1.MsgInstantPerpetualMarketLaunch",
    toAmino: ({
      sender,
      ticker,
      quoteDenom,
      oracleBase,
      oracleQuote,
      oracleScaleFactor,
      oracleType,
      makerFeeRate,
      takerFeeRate,
      initialMarginRatio,
      maintenanceMarginRatio,
      minPriceTickSize,
      minQuantityTickSize
    }: MsgInstantPerpetualMarketLaunch): AminoMsgInstantPerpetualMarketLaunch["value"] => {
      return {
        sender,
        ticker,
        quote_denom: quoteDenom,
        oracle_base: oracleBase,
        oracle_quote: oracleQuote,
        oracle_scale_factor: oracleScaleFactor,
        oracle_type: oracleType,
        maker_fee_rate: makerFeeRate,
        taker_fee_rate: takerFeeRate,
        initial_margin_ratio: initialMarginRatio,
        maintenance_margin_ratio: maintenanceMarginRatio,
        min_price_tick_size: minPriceTickSize,
        min_quantity_tick_size: minQuantityTickSize
      };
    },
    fromAmino: ({
      sender,
      ticker,
      quote_denom,
      oracle_base,
      oracle_quote,
      oracle_scale_factor,
      oracle_type,
      maker_fee_rate,
      taker_fee_rate,
      initial_margin_ratio,
      maintenance_margin_ratio,
      min_price_tick_size,
      min_quantity_tick_size
    }: AminoMsgInstantPerpetualMarketLaunch["value"]): MsgInstantPerpetualMarketLaunch => {
      return {
        sender,
        ticker,
        quoteDenom: quote_denom,
        oracleBase: oracle_base,
        oracleQuote: oracle_quote,
        oracleScaleFactor: oracle_scale_factor,
        oracleType: oracleTypeFromJSON(oracle_type),
        makerFeeRate: maker_fee_rate,
        takerFeeRate: taker_fee_rate,
        initialMarginRatio: initial_margin_ratio,
        maintenanceMarginRatio: maintenance_margin_ratio,
        minPriceTickSize: min_price_tick_size,
        minQuantityTickSize: min_quantity_tick_size
      };
    }
  },
  "/injective.exchange.v1beta1.MsgInstantExpiryFuturesMarketLaunch": {
    aminoType: "/injective.exchange.v1beta1.MsgInstantExpiryFuturesMarketLaunch",
    toAmino: ({
      sender,
      ticker,
      quoteDenom,
      oracleBase,
      oracleQuote,
      oracleType,
      oracleScaleFactor,
      expiry,
      makerFeeRate,
      takerFeeRate,
      initialMarginRatio,
      maintenanceMarginRatio,
      minPriceTickSize,
      minQuantityTickSize
    }: MsgInstantExpiryFuturesMarketLaunch): AminoMsgInstantExpiryFuturesMarketLaunch["value"] => {
      return {
        sender,
        ticker,
        quote_denom: quoteDenom,
        oracle_base: oracleBase,
        oracle_quote: oracleQuote,
        oracle_type: oracleType,
        oracle_scale_factor: oracleScaleFactor,
        expiry: expiry.toString(),
        maker_fee_rate: makerFeeRate,
        taker_fee_rate: takerFeeRate,
        initial_margin_ratio: initialMarginRatio,
        maintenance_margin_ratio: maintenanceMarginRatio,
        min_price_tick_size: minPriceTickSize,
        min_quantity_tick_size: minQuantityTickSize
      };
    },
    fromAmino: ({
      sender,
      ticker,
      quote_denom,
      oracle_base,
      oracle_quote,
      oracle_type,
      oracle_scale_factor,
      expiry,
      maker_fee_rate,
      taker_fee_rate,
      initial_margin_ratio,
      maintenance_margin_ratio,
      min_price_tick_size,
      min_quantity_tick_size
    }: AminoMsgInstantExpiryFuturesMarketLaunch["value"]): MsgInstantExpiryFuturesMarketLaunch => {
      return {
        sender,
        ticker,
        quoteDenom: quote_denom,
        oracleBase: oracle_base,
        oracleQuote: oracle_quote,
        oracleType: oracleTypeFromJSON(oracle_type),
        oracleScaleFactor: oracle_scale_factor,
        expiry: Long.fromString(expiry),
        makerFeeRate: maker_fee_rate,
        takerFeeRate: taker_fee_rate,
        initialMarginRatio: initial_margin_ratio,
        maintenanceMarginRatio: maintenance_margin_ratio,
        minPriceTickSize: min_price_tick_size,
        minQuantityTickSize: min_quantity_tick_size
      };
    }
  },
  "/injective.exchange.v1beta1.MsgCreateSpotLimitOrder": {
    aminoType: "/injective.exchange.v1beta1.MsgCreateSpotLimitOrder",
    toAmino: ({
      sender,
      order
    }: MsgCreateSpotLimitOrder): AminoMsgCreateSpotLimitOrder["value"] => {
      return {
        sender,
        order: {
          market_id: order.marketId,
          order_info: {
            subaccount_id: order.orderInfo.subaccountId,
            fee_recipient: order.orderInfo.feeRecipient,
            price: order.orderInfo.price,
            quantity: order.orderInfo.quantity
          },
          order_type: order.orderType,
          trigger_price: order.triggerPrice
        }
      };
    },
    fromAmino: ({
      sender,
      order
    }: AminoMsgCreateSpotLimitOrder["value"]): MsgCreateSpotLimitOrder => {
      return {
        sender,
        order: {
          marketId: order.market_id,
          orderInfo: {
            subaccountId: order.order_info.subaccount_id,
            feeRecipient: order.order_info.fee_recipient,
            price: order.order_info.price,
            quantity: order.order_info.quantity
          },
          orderType: orderTypeFromJSON(order.order_type),
          triggerPrice: order.trigger_price
        }
      };
    }
  },
  "/injective.exchange.v1beta1.MsgBatchCreateSpotLimitOrders": {
    aminoType: "/injective.exchange.v1beta1.MsgBatchCreateSpotLimitOrders",
    toAmino: ({
      sender,
      orders
    }: MsgBatchCreateSpotLimitOrders): AminoMsgBatchCreateSpotLimitOrders["value"] => {
      return {
        sender,
        orders: orders.map(el0 => ({
          market_id: el0.marketId,
          order_info: {
            subaccount_id: el0.orderInfo.subaccountId,
            fee_recipient: el0.orderInfo.feeRecipient,
            price: el0.orderInfo.price,
            quantity: el0.orderInfo.quantity
          },
          order_type: el0.orderType,
          trigger_price: el0.triggerPrice
        }))
      };
    },
    fromAmino: ({
      sender,
      orders
    }: AminoMsgBatchCreateSpotLimitOrders["value"]): MsgBatchCreateSpotLimitOrders => {
      return {
        sender,
        orders: orders.map(el0 => ({
          marketId: el0.market_id,
          orderInfo: {
            subaccountId: el0.order_info.subaccount_id,
            feeRecipient: el0.order_info.fee_recipient,
            price: el0.order_info.price,
            quantity: el0.order_info.quantity
          },
          orderType: orderTypeFromJSON(el0.order_type),
          triggerPrice: el0.trigger_price
        }))
      };
    }
  },
  "/injective.exchange.v1beta1.MsgCreateSpotMarketOrder": {
    aminoType: "/injective.exchange.v1beta1.MsgCreateSpotMarketOrder",
    toAmino: ({
      sender,
      order
    }: MsgCreateSpotMarketOrder): AminoMsgCreateSpotMarketOrder["value"] => {
      return {
        sender,
        order: {
          market_id: order.marketId,
          order_info: {
            subaccount_id: order.orderInfo.subaccountId,
            fee_recipient: order.orderInfo.feeRecipient,
            price: order.orderInfo.price,
            quantity: order.orderInfo.quantity
          },
          order_type: order.orderType,
          trigger_price: order.triggerPrice
        }
      };
    },
    fromAmino: ({
      sender,
      order
    }: AminoMsgCreateSpotMarketOrder["value"]): MsgCreateSpotMarketOrder => {
      return {
        sender,
        order: {
          marketId: order.market_id,
          orderInfo: {
            subaccountId: order.order_info.subaccount_id,
            feeRecipient: order.order_info.fee_recipient,
            price: order.order_info.price,
            quantity: order.order_info.quantity
          },
          orderType: orderTypeFromJSON(order.order_type),
          triggerPrice: order.trigger_price
        }
      };
    }
  },
  "/injective.exchange.v1beta1.MsgCancelSpotOrder": {
    aminoType: "/injective.exchange.v1beta1.MsgCancelSpotOrder",
    toAmino: ({
      sender,
      marketId,
      subaccountId,
      orderHash
    }: MsgCancelSpotOrder): AminoMsgCancelSpotOrder["value"] => {
      return {
        sender,
        market_id: marketId,
        subaccount_id: subaccountId,
        order_hash: orderHash
      };
    },
    fromAmino: ({
      sender,
      market_id,
      subaccount_id,
      order_hash
    }: AminoMsgCancelSpotOrder["value"]): MsgCancelSpotOrder => {
      return {
        sender,
        marketId: market_id,
        subaccountId: subaccount_id,
        orderHash: order_hash
      };
    }
  },
  "/injective.exchange.v1beta1.MsgBatchCancelSpotOrders": {
    aminoType: "/injective.exchange.v1beta1.MsgBatchCancelSpotOrders",
    toAmino: ({
      sender,
      data
    }: MsgBatchCancelSpotOrders): AminoMsgBatchCancelSpotOrders["value"] => {
      return {
        sender,
        data: data.map(el0 => ({
          market_id: el0.marketId,
          subaccount_id: el0.subaccountId,
          order_hash: el0.orderHash,
          order_mask: el0.orderMask
        }))
      };
    },
    fromAmino: ({
      sender,
      data
    }: AminoMsgBatchCancelSpotOrders["value"]): MsgBatchCancelSpotOrders => {
      return {
        sender,
        data: data.map(el0 => ({
          marketId: el0.market_id,
          subaccountId: el0.subaccount_id,
          orderHash: el0.order_hash,
          orderMask: el0.order_mask
        }))
      };
    }
  },
  "/injective.exchange.v1beta1.MsgBatchUpdateOrders": {
    aminoType: "/injective.exchange.v1beta1.MsgBatchUpdateOrders",
    toAmino: ({
      sender,
      subaccountId,
      spotMarketIdsToCancelAll,
      derivativeMarketIdsToCancelAll,
      spotOrdersToCancel,
      derivativeOrdersToCancel,
      spotOrdersToCreate,
      derivativeOrdersToCreate,
      binaryOptionsOrdersToCancel,
      binaryOptionsMarketIdsToCancelAll,
      binaryOptionsOrdersToCreate
    }: MsgBatchUpdateOrders): AminoMsgBatchUpdateOrders["value"] => {
      return {
        sender,
        subaccount_id: subaccountId,
        spot_market_ids_to_cancel_all: spotMarketIdsToCancelAll,
        derivative_market_ids_to_cancel_all: derivativeMarketIdsToCancelAll,
        spot_orders_to_cancel: spotOrdersToCancel.map(el0 => ({
          market_id: el0.marketId,
          subaccount_id: el0.subaccountId,
          order_hash: el0.orderHash,
          order_mask: el0.orderMask
        })),
        derivative_orders_to_cancel: derivativeOrdersToCancel.map(el0 => ({
          market_id: el0.marketId,
          subaccount_id: el0.subaccountId,
          order_hash: el0.orderHash,
          order_mask: el0.orderMask
        })),
        spot_orders_to_create: spotOrdersToCreate.map(el0 => ({
          market_id: el0.marketId,
          order_info: {
            subaccount_id: el0.orderInfo.subaccountId,
            fee_recipient: el0.orderInfo.feeRecipient,
            price: el0.orderInfo.price,
            quantity: el0.orderInfo.quantity
          },
          order_type: el0.orderType,
          trigger_price: el0.triggerPrice
        })),
        derivative_orders_to_create: derivativeOrdersToCreate.map(el0 => ({
          market_id: el0.marketId,
          order_info: {
            subaccount_id: el0.orderInfo.subaccountId,
            fee_recipient: el0.orderInfo.feeRecipient,
            price: el0.orderInfo.price,
            quantity: el0.orderInfo.quantity
          },
          order_type: el0.orderType,
          margin: el0.margin,
          trigger_price: el0.triggerPrice
        })),
        binary_options_orders_to_cancel: binaryOptionsOrdersToCancel.map(el0 => ({
          market_id: el0.marketId,
          subaccount_id: el0.subaccountId,
          order_hash: el0.orderHash,
          order_mask: el0.orderMask
        })),
        binary_options_market_ids_to_cancel_all: binaryOptionsMarketIdsToCancelAll,
        binary_options_orders_to_create: binaryOptionsOrdersToCreate.map(el0 => ({
          market_id: el0.marketId,
          order_info: {
            subaccount_id: el0.orderInfo.subaccountId,
            fee_recipient: el0.orderInfo.feeRecipient,
            price: el0.orderInfo.price,
            quantity: el0.orderInfo.quantity
          },
          order_type: el0.orderType,
          margin: el0.margin,
          trigger_price: el0.triggerPrice
        }))
      };
    },
    fromAmino: ({
      sender,
      subaccount_id,
      spot_market_ids_to_cancel_all,
      derivative_market_ids_to_cancel_all,
      spot_orders_to_cancel,
      derivative_orders_to_cancel,
      spot_orders_to_create,
      derivative_orders_to_create,
      binary_options_orders_to_cancel,
      binary_options_market_ids_to_cancel_all,
      binary_options_orders_to_create
    }: AminoMsgBatchUpdateOrders["value"]): MsgBatchUpdateOrders => {
      return {
        sender,
        subaccountId: subaccount_id,
        spotMarketIdsToCancelAll: spot_market_ids_to_cancel_all,
        derivativeMarketIdsToCancelAll: derivative_market_ids_to_cancel_all,
        spotOrdersToCancel: spot_orders_to_cancel.map(el0 => ({
          marketId: el0.market_id,
          subaccountId: el0.subaccount_id,
          orderHash: el0.order_hash,
          orderMask: el0.order_mask
        })),
        derivativeOrdersToCancel: derivative_orders_to_cancel.map(el0 => ({
          marketId: el0.market_id,
          subaccountId: el0.subaccount_id,
          orderHash: el0.order_hash,
          orderMask: el0.order_mask
        })),
        spotOrdersToCreate: spot_orders_to_create.map(el0 => ({
          marketId: el0.market_id,
          orderInfo: {
            subaccountId: el0.order_info.subaccount_id,
            feeRecipient: el0.order_info.fee_recipient,
            price: el0.order_info.price,
            quantity: el0.order_info.quantity
          },
          orderType: orderTypeFromJSON(el0.order_type),
          triggerPrice: el0.trigger_price
        })),
        derivativeOrdersToCreate: derivative_orders_to_create.map(el0 => ({
          marketId: el0.market_id,
          orderInfo: {
            subaccountId: el0.order_info.subaccount_id,
            feeRecipient: el0.order_info.fee_recipient,
            price: el0.order_info.price,
            quantity: el0.order_info.quantity
          },
          orderType: orderTypeFromJSON(el0.order_type),
          margin: el0.margin,
          triggerPrice: el0.trigger_price
        })),
        binaryOptionsOrdersToCancel: binary_options_orders_to_cancel.map(el0 => ({
          marketId: el0.market_id,
          subaccountId: el0.subaccount_id,
          orderHash: el0.order_hash,
          orderMask: el0.order_mask
        })),
        binaryOptionsMarketIdsToCancelAll: binary_options_market_ids_to_cancel_all,
        binaryOptionsOrdersToCreate: binary_options_orders_to_create.map(el0 => ({
          marketId: el0.market_id,
          orderInfo: {
            subaccountId: el0.order_info.subaccount_id,
            feeRecipient: el0.order_info.fee_recipient,
            price: el0.order_info.price,
            quantity: el0.order_info.quantity
          },
          orderType: orderTypeFromJSON(el0.order_type),
          margin: el0.margin,
          triggerPrice: el0.trigger_price
        }))
      };
    }
  },
  "/injective.exchange.v1beta1.MsgExec": {
    aminoType: "/injective.exchange.v1beta1.MsgExec",
    toAmino: ({
      sender,
      bankFunds,
      depositsSubaccountId,
      depositFunds,
      contractAddress,
      data
    }: MsgExec): AminoMsgExec["value"] => {
      return {
        sender,
        bank_funds: bankFunds.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        })),
        deposits_subaccount_id: depositsSubaccountId,
        deposit_funds: depositFunds.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        })),
        contract_address: contractAddress,
        data
      };
    },
    fromAmino: ({
      sender,
      bank_funds,
      deposits_subaccount_id,
      deposit_funds,
      contract_address,
      data
    }: AminoMsgExec["value"]): MsgExec => {
      return {
        sender,
        bankFunds: bank_funds.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        })),
        depositsSubaccountId: deposits_subaccount_id,
        depositFunds: deposit_funds.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        })),
        contractAddress: contract_address,
        data
      };
    }
  },
  "/injective.exchange.v1beta1.MsgCreateDerivativeLimitOrder": {
    aminoType: "/injective.exchange.v1beta1.MsgCreateDerivativeLimitOrder",
    toAmino: ({
      sender,
      order
    }: MsgCreateDerivativeLimitOrder): AminoMsgCreateDerivativeLimitOrder["value"] => {
      return {
        sender,
        order: {
          market_id: order.marketId,
          order_info: {
            subaccount_id: order.orderInfo.subaccountId,
            fee_recipient: order.orderInfo.feeRecipient,
            price: order.orderInfo.price,
            quantity: order.orderInfo.quantity
          },
          order_type: order.orderType,
          margin: order.margin,
          trigger_price: order.triggerPrice
        }
      };
    },
    fromAmino: ({
      sender,
      order
    }: AminoMsgCreateDerivativeLimitOrder["value"]): MsgCreateDerivativeLimitOrder => {
      return {
        sender,
        order: {
          marketId: order.market_id,
          orderInfo: {
            subaccountId: order.order_info.subaccount_id,
            feeRecipient: order.order_info.fee_recipient,
            price: order.order_info.price,
            quantity: order.order_info.quantity
          },
          orderType: orderTypeFromJSON(order.order_type),
          margin: order.margin,
          triggerPrice: order.trigger_price
        }
      };
    }
  },
  "/injective.exchange.v1beta1.MsgBatchCreateDerivativeLimitOrders": {
    aminoType: "/injective.exchange.v1beta1.MsgBatchCreateDerivativeLimitOrders",
    toAmino: ({
      sender,
      orders
    }: MsgBatchCreateDerivativeLimitOrders): AminoMsgBatchCreateDerivativeLimitOrders["value"] => {
      return {
        sender,
        orders: orders.map(el0 => ({
          market_id: el0.marketId,
          order_info: {
            subaccount_id: el0.orderInfo.subaccountId,
            fee_recipient: el0.orderInfo.feeRecipient,
            price: el0.orderInfo.price,
            quantity: el0.orderInfo.quantity
          },
          order_type: el0.orderType,
          margin: el0.margin,
          trigger_price: el0.triggerPrice
        }))
      };
    },
    fromAmino: ({
      sender,
      orders
    }: AminoMsgBatchCreateDerivativeLimitOrders["value"]): MsgBatchCreateDerivativeLimitOrders => {
      return {
        sender,
        orders: orders.map(el0 => ({
          marketId: el0.market_id,
          orderInfo: {
            subaccountId: el0.order_info.subaccount_id,
            feeRecipient: el0.order_info.fee_recipient,
            price: el0.order_info.price,
            quantity: el0.order_info.quantity
          },
          orderType: orderTypeFromJSON(el0.order_type),
          margin: el0.margin,
          triggerPrice: el0.trigger_price
        }))
      };
    }
  },
  "/injective.exchange.v1beta1.MsgCreateDerivativeMarketOrder": {
    aminoType: "/injective.exchange.v1beta1.MsgCreateDerivativeMarketOrder",
    toAmino: ({
      sender,
      order
    }: MsgCreateDerivativeMarketOrder): AminoMsgCreateDerivativeMarketOrder["value"] => {
      return {
        sender,
        order: {
          market_id: order.marketId,
          order_info: {
            subaccount_id: order.orderInfo.subaccountId,
            fee_recipient: order.orderInfo.feeRecipient,
            price: order.orderInfo.price,
            quantity: order.orderInfo.quantity
          },
          order_type: order.orderType,
          margin: order.margin,
          trigger_price: order.triggerPrice
        }
      };
    },
    fromAmino: ({
      sender,
      order
    }: AminoMsgCreateDerivativeMarketOrder["value"]): MsgCreateDerivativeMarketOrder => {
      return {
        sender,
        order: {
          marketId: order.market_id,
          orderInfo: {
            subaccountId: order.order_info.subaccount_id,
            feeRecipient: order.order_info.fee_recipient,
            price: order.order_info.price,
            quantity: order.order_info.quantity
          },
          orderType: orderTypeFromJSON(order.order_type),
          margin: order.margin,
          triggerPrice: order.trigger_price
        }
      };
    }
  },
  "/injective.exchange.v1beta1.MsgCancelDerivativeOrder": {
    aminoType: "/injective.exchange.v1beta1.MsgCancelDerivativeOrder",
    toAmino: ({
      sender,
      marketId,
      subaccountId,
      orderHash,
      orderMask
    }: MsgCancelDerivativeOrder): AminoMsgCancelDerivativeOrder["value"] => {
      return {
        sender,
        market_id: marketId,
        subaccount_id: subaccountId,
        order_hash: orderHash,
        order_mask: orderMask
      };
    },
    fromAmino: ({
      sender,
      market_id,
      subaccount_id,
      order_hash,
      order_mask
    }: AminoMsgCancelDerivativeOrder["value"]): MsgCancelDerivativeOrder => {
      return {
        sender,
        marketId: market_id,
        subaccountId: subaccount_id,
        orderHash: order_hash,
        orderMask: order_mask
      };
    }
  },
  "/injective.exchange.v1beta1.MsgBatchCancelDerivativeOrders": {
    aminoType: "/injective.exchange.v1beta1.MsgBatchCancelDerivativeOrders",
    toAmino: ({
      sender,
      data
    }: MsgBatchCancelDerivativeOrders): AminoMsgBatchCancelDerivativeOrders["value"] => {
      return {
        sender,
        data: data.map(el0 => ({
          market_id: el0.marketId,
          subaccount_id: el0.subaccountId,
          order_hash: el0.orderHash,
          order_mask: el0.orderMask
        }))
      };
    },
    fromAmino: ({
      sender,
      data
    }: AminoMsgBatchCancelDerivativeOrders["value"]): MsgBatchCancelDerivativeOrders => {
      return {
        sender,
        data: data.map(el0 => ({
          marketId: el0.market_id,
          subaccountId: el0.subaccount_id,
          orderHash: el0.order_hash,
          orderMask: el0.order_mask
        }))
      };
    }
  },
  "/injective.exchange.v1beta1.MsgInstantBinaryOptionsMarketLaunch": {
    aminoType: "/injective.exchange.v1beta1.MsgInstantBinaryOptionsMarketLaunch",
    toAmino: ({
      sender,
      ticker,
      oracleSymbol,
      oracleProvider,
      oracleType,
      oracleScaleFactor,
      makerFeeRate,
      takerFeeRate,
      expirationTimestamp,
      settlementTimestamp,
      admin,
      quoteDenom,
      minPriceTickSize,
      minQuantityTickSize
    }: MsgInstantBinaryOptionsMarketLaunch): AminoMsgInstantBinaryOptionsMarketLaunch["value"] => {
      return {
        sender,
        ticker,
        oracle_symbol: oracleSymbol,
        oracle_provider: oracleProvider,
        oracle_type: oracleType,
        oracle_scale_factor: oracleScaleFactor,
        maker_fee_rate: makerFeeRate,
        taker_fee_rate: takerFeeRate,
        expiration_timestamp: expirationTimestamp.toString(),
        settlement_timestamp: settlementTimestamp.toString(),
        admin,
        quote_denom: quoteDenom,
        min_price_tick_size: minPriceTickSize,
        min_quantity_tick_size: minQuantityTickSize
      };
    },
    fromAmino: ({
      sender,
      ticker,
      oracle_symbol,
      oracle_provider,
      oracle_type,
      oracle_scale_factor,
      maker_fee_rate,
      taker_fee_rate,
      expiration_timestamp,
      settlement_timestamp,
      admin,
      quote_denom,
      min_price_tick_size,
      min_quantity_tick_size
    }: AminoMsgInstantBinaryOptionsMarketLaunch["value"]): MsgInstantBinaryOptionsMarketLaunch => {
      return {
        sender,
        ticker,
        oracleSymbol: oracle_symbol,
        oracleProvider: oracle_provider,
        oracleType: oracleTypeFromJSON(oracle_type),
        oracleScaleFactor: oracle_scale_factor,
        makerFeeRate: maker_fee_rate,
        takerFeeRate: taker_fee_rate,
        expirationTimestamp: Long.fromString(expiration_timestamp),
        settlementTimestamp: Long.fromString(settlement_timestamp),
        admin,
        quoteDenom: quote_denom,
        minPriceTickSize: min_price_tick_size,
        minQuantityTickSize: min_quantity_tick_size
      };
    }
  },
  "/injective.exchange.v1beta1.MsgCreateBinaryOptionsLimitOrder": {
    aminoType: "/injective.exchange.v1beta1.MsgCreateBinaryOptionsLimitOrder",
    toAmino: ({
      sender,
      order
    }: MsgCreateBinaryOptionsLimitOrder): AminoMsgCreateBinaryOptionsLimitOrder["value"] => {
      return {
        sender,
        order: {
          market_id: order.marketId,
          order_info: {
            subaccount_id: order.orderInfo.subaccountId,
            fee_recipient: order.orderInfo.feeRecipient,
            price: order.orderInfo.price,
            quantity: order.orderInfo.quantity
          },
          order_type: order.orderType,
          margin: order.margin,
          trigger_price: order.triggerPrice
        }
      };
    },
    fromAmino: ({
      sender,
      order
    }: AminoMsgCreateBinaryOptionsLimitOrder["value"]): MsgCreateBinaryOptionsLimitOrder => {
      return {
        sender,
        order: {
          marketId: order.market_id,
          orderInfo: {
            subaccountId: order.order_info.subaccount_id,
            feeRecipient: order.order_info.fee_recipient,
            price: order.order_info.price,
            quantity: order.order_info.quantity
          },
          orderType: orderTypeFromJSON(order.order_type),
          margin: order.margin,
          triggerPrice: order.trigger_price
        }
      };
    }
  },
  "/injective.exchange.v1beta1.MsgCreateBinaryOptionsMarketOrder": {
    aminoType: "/injective.exchange.v1beta1.MsgCreateBinaryOptionsMarketOrder",
    toAmino: ({
      sender,
      order
    }: MsgCreateBinaryOptionsMarketOrder): AminoMsgCreateBinaryOptionsMarketOrder["value"] => {
      return {
        sender,
        order: {
          market_id: order.marketId,
          order_info: {
            subaccount_id: order.orderInfo.subaccountId,
            fee_recipient: order.orderInfo.feeRecipient,
            price: order.orderInfo.price,
            quantity: order.orderInfo.quantity
          },
          order_type: order.orderType,
          margin: order.margin,
          trigger_price: order.triggerPrice
        }
      };
    },
    fromAmino: ({
      sender,
      order
    }: AminoMsgCreateBinaryOptionsMarketOrder["value"]): MsgCreateBinaryOptionsMarketOrder => {
      return {
        sender,
        order: {
          marketId: order.market_id,
          orderInfo: {
            subaccountId: order.order_info.subaccount_id,
            feeRecipient: order.order_info.fee_recipient,
            price: order.order_info.price,
            quantity: order.order_info.quantity
          },
          orderType: orderTypeFromJSON(order.order_type),
          margin: order.margin,
          triggerPrice: order.trigger_price
        }
      };
    }
  },
  "/injective.exchange.v1beta1.MsgCancelBinaryOptionsOrder": {
    aminoType: "/injective.exchange.v1beta1.MsgCancelBinaryOptionsOrder",
    toAmino: ({
      sender,
      marketId,
      subaccountId,
      orderHash,
      orderMask
    }: MsgCancelBinaryOptionsOrder): AminoMsgCancelBinaryOptionsOrder["value"] => {
      return {
        sender,
        market_id: marketId,
        subaccount_id: subaccountId,
        order_hash: orderHash,
        order_mask: orderMask
      };
    },
    fromAmino: ({
      sender,
      market_id,
      subaccount_id,
      order_hash,
      order_mask
    }: AminoMsgCancelBinaryOptionsOrder["value"]): MsgCancelBinaryOptionsOrder => {
      return {
        sender,
        marketId: market_id,
        subaccountId: subaccount_id,
        orderHash: order_hash,
        orderMask: order_mask
      };
    }
  },
  "/injective.exchange.v1beta1.MsgBatchCancelBinaryOptionsOrders": {
    aminoType: "/injective.exchange.v1beta1.MsgBatchCancelBinaryOptionsOrders",
    toAmino: ({
      sender,
      data
    }: MsgBatchCancelBinaryOptionsOrders): AminoMsgBatchCancelBinaryOptionsOrders["value"] => {
      return {
        sender,
        data: data.map(el0 => ({
          market_id: el0.marketId,
          subaccount_id: el0.subaccountId,
          order_hash: el0.orderHash,
          order_mask: el0.orderMask
        }))
      };
    },
    fromAmino: ({
      sender,
      data
    }: AminoMsgBatchCancelBinaryOptionsOrders["value"]): MsgBatchCancelBinaryOptionsOrders => {
      return {
        sender,
        data: data.map(el0 => ({
          marketId: el0.market_id,
          subaccountId: el0.subaccount_id,
          orderHash: el0.order_hash,
          orderMask: el0.order_mask
        }))
      };
    }
  },
  "/injective.exchange.v1beta1.MsgSubaccountTransfer": {
    aminoType: "/injective.exchange.v1beta1.MsgSubaccountTransfer",
    toAmino: ({
      sender,
      sourceSubaccountId,
      destinationSubaccountId,
      amount
    }: MsgSubaccountTransfer): AminoMsgSubaccountTransfer["value"] => {
      return {
        sender,
        source_subaccount_id: sourceSubaccountId,
        destination_subaccount_id: destinationSubaccountId,
        amount: {
          denom: amount.denom,
          amount: Long.fromNumber(amount.amount).toString()
        }
      };
    },
    fromAmino: ({
      sender,
      source_subaccount_id,
      destination_subaccount_id,
      amount
    }: AminoMsgSubaccountTransfer["value"]): MsgSubaccountTransfer => {
      return {
        sender,
        sourceSubaccountId: source_subaccount_id,
        destinationSubaccountId: destination_subaccount_id,
        amount: {
          denom: amount.denom,
          amount: amount.amount
        }
      };
    }
  },
  "/injective.exchange.v1beta1.MsgExternalTransfer": {
    aminoType: "/injective.exchange.v1beta1.MsgExternalTransfer",
    toAmino: ({
      sender,
      sourceSubaccountId,
      destinationSubaccountId,
      amount
    }: MsgExternalTransfer): AminoMsgExternalTransfer["value"] => {
      return {
        sender,
        source_subaccount_id: sourceSubaccountId,
        destination_subaccount_id: destinationSubaccountId,
        amount: {
          denom: amount.denom,
          amount: Long.fromNumber(amount.amount).toString()
        }
      };
    },
    fromAmino: ({
      sender,
      source_subaccount_id,
      destination_subaccount_id,
      amount
    }: AminoMsgExternalTransfer["value"]): MsgExternalTransfer => {
      return {
        sender,
        sourceSubaccountId: source_subaccount_id,
        destinationSubaccountId: destination_subaccount_id,
        amount: {
          denom: amount.denom,
          amount: amount.amount
        }
      };
    }
  },
  "/injective.exchange.v1beta1.MsgLiquidatePosition": {
    aminoType: "/injective.exchange.v1beta1.MsgLiquidatePosition",
    toAmino: ({
      sender,
      subaccountId,
      marketId,
      order
    }: MsgLiquidatePosition): AminoMsgLiquidatePosition["value"] => {
      return {
        sender,
        subaccount_id: subaccountId,
        market_id: marketId,
        order: {
          market_id: order.marketId,
          order_info: {
            subaccount_id: order.orderInfo.subaccountId,
            fee_recipient: order.orderInfo.feeRecipient,
            price: order.orderInfo.price,
            quantity: order.orderInfo.quantity
          },
          order_type: order.orderType,
          margin: order.margin,
          trigger_price: order.triggerPrice
        }
      };
    },
    fromAmino: ({
      sender,
      subaccount_id,
      market_id,
      order
    }: AminoMsgLiquidatePosition["value"]): MsgLiquidatePosition => {
      return {
        sender,
        subaccountId: subaccount_id,
        marketId: market_id,
        order: {
          marketId: order.market_id,
          orderInfo: {
            subaccountId: order.order_info.subaccount_id,
            feeRecipient: order.order_info.fee_recipient,
            price: order.order_info.price,
            quantity: order.order_info.quantity
          },
          orderType: orderTypeFromJSON(order.order_type),
          margin: order.margin,
          triggerPrice: order.trigger_price
        }
      };
    }
  },
  "/injective.exchange.v1beta1.MsgIncreasePositionMargin": {
    aminoType: "/injective.exchange.v1beta1.MsgIncreasePositionMargin",
    toAmino: ({
      sender,
      sourceSubaccountId,
      destinationSubaccountId,
      marketId,
      amount
    }: MsgIncreasePositionMargin): AminoMsgIncreasePositionMargin["value"] => {
      return {
        sender,
        source_subaccount_id: sourceSubaccountId,
        destination_subaccount_id: destinationSubaccountId,
        market_id: marketId,
        amount
      };
    },
    fromAmino: ({
      sender,
      source_subaccount_id,
      destination_subaccount_id,
      market_id,
      amount
    }: AminoMsgIncreasePositionMargin["value"]): MsgIncreasePositionMargin => {
      return {
        sender,
        sourceSubaccountId: source_subaccount_id,
        destinationSubaccountId: destination_subaccount_id,
        marketId: market_id,
        amount
      };
    }
  },
  "/injective.exchange.v1beta1.MsgRewardsOptOut": {
    aminoType: "/injective.exchange.v1beta1.MsgRewardsOptOut",
    toAmino: ({
      sender
    }: MsgRewardsOptOut): AminoMsgRewardsOptOut["value"] => {
      return {
        sender
      };
    },
    fromAmino: ({
      sender
    }: AminoMsgRewardsOptOut["value"]): MsgRewardsOptOut => {
      return {
        sender
      };
    }
  },
  "/injective.exchange.v1beta1.MsgAdminUpdateBinaryOptionsMarket": {
    aminoType: "/injective.exchange.v1beta1.MsgAdminUpdateBinaryOptionsMarket",
    toAmino: ({
      sender,
      marketId,
      settlementPrice,
      expirationTimestamp,
      settlementTimestamp,
      status
    }: MsgAdminUpdateBinaryOptionsMarket): AminoMsgAdminUpdateBinaryOptionsMarket["value"] => {
      return {
        sender,
        market_id: marketId,
        settlement_price: settlementPrice,
        expiration_timestamp: expirationTimestamp.toString(),
        settlement_timestamp: settlementTimestamp.toString(),
        status
      };
    },
    fromAmino: ({
      sender,
      market_id,
      settlement_price,
      expiration_timestamp,
      settlement_timestamp,
      status
    }: AminoMsgAdminUpdateBinaryOptionsMarket["value"]): MsgAdminUpdateBinaryOptionsMarket => {
      return {
        sender,
        marketId: market_id,
        settlementPrice: settlement_price,
        expirationTimestamp: Long.fromString(expiration_timestamp),
        settlementTimestamp: Long.fromString(settlement_timestamp),
        status: marketStatusFromJSON(status)
      };
    }
  }
};