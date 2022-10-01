import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgDeposit, MsgWithdraw, MsgInstantSpotMarketLaunch, MsgInstantPerpetualMarketLaunch, MsgInstantExpiryFuturesMarketLaunch, MsgCreateSpotLimitOrder, MsgBatchCreateSpotLimitOrders, MsgCreateSpotMarketOrder, MsgCancelSpotOrder, MsgBatchCancelSpotOrders, MsgBatchUpdateOrders, MsgExec, MsgCreateDerivativeLimitOrder, MsgBatchCreateDerivativeLimitOrders, MsgCreateDerivativeMarketOrder, MsgCancelDerivativeOrder, MsgBatchCancelDerivativeOrders, MsgInstantBinaryOptionsMarketLaunch, MsgCreateBinaryOptionsLimitOrder, MsgCreateBinaryOptionsMarketOrder, MsgCancelBinaryOptionsOrder, MsgBatchCancelBinaryOptionsOrders, MsgSubaccountTransfer, MsgExternalTransfer, MsgLiquidatePosition, MsgIncreasePositionMargin, MsgRewardsOptOut, MsgAdminUpdateBinaryOptionsMarket } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/injective.exchange.v1beta1.MsgDeposit", MsgDeposit], ["/injective.exchange.v1beta1.MsgWithdraw", MsgWithdraw], ["/injective.exchange.v1beta1.MsgInstantSpotMarketLaunch", MsgInstantSpotMarketLaunch], ["/injective.exchange.v1beta1.MsgInstantPerpetualMarketLaunch", MsgInstantPerpetualMarketLaunch], ["/injective.exchange.v1beta1.MsgInstantExpiryFuturesMarketLaunch", MsgInstantExpiryFuturesMarketLaunch], ["/injective.exchange.v1beta1.MsgCreateSpotLimitOrder", MsgCreateSpotLimitOrder], ["/injective.exchange.v1beta1.MsgBatchCreateSpotLimitOrders", MsgBatchCreateSpotLimitOrders], ["/injective.exchange.v1beta1.MsgCreateSpotMarketOrder", MsgCreateSpotMarketOrder], ["/injective.exchange.v1beta1.MsgCancelSpotOrder", MsgCancelSpotOrder], ["/injective.exchange.v1beta1.MsgBatchCancelSpotOrders", MsgBatchCancelSpotOrders], ["/injective.exchange.v1beta1.MsgBatchUpdateOrders", MsgBatchUpdateOrders], ["/injective.exchange.v1beta1.MsgExec", MsgExec], ["/injective.exchange.v1beta1.MsgCreateDerivativeLimitOrder", MsgCreateDerivativeLimitOrder], ["/injective.exchange.v1beta1.MsgBatchCreateDerivativeLimitOrders", MsgBatchCreateDerivativeLimitOrders], ["/injective.exchange.v1beta1.MsgCreateDerivativeMarketOrder", MsgCreateDerivativeMarketOrder], ["/injective.exchange.v1beta1.MsgCancelDerivativeOrder", MsgCancelDerivativeOrder], ["/injective.exchange.v1beta1.MsgBatchCancelDerivativeOrders", MsgBatchCancelDerivativeOrders], ["/injective.exchange.v1beta1.MsgInstantBinaryOptionsMarketLaunch", MsgInstantBinaryOptionsMarketLaunch], ["/injective.exchange.v1beta1.MsgCreateBinaryOptionsLimitOrder", MsgCreateBinaryOptionsLimitOrder], ["/injective.exchange.v1beta1.MsgCreateBinaryOptionsMarketOrder", MsgCreateBinaryOptionsMarketOrder], ["/injective.exchange.v1beta1.MsgCancelBinaryOptionsOrder", MsgCancelBinaryOptionsOrder], ["/injective.exchange.v1beta1.MsgBatchCancelBinaryOptionsOrders", MsgBatchCancelBinaryOptionsOrders], ["/injective.exchange.v1beta1.MsgSubaccountTransfer", MsgSubaccountTransfer], ["/injective.exchange.v1beta1.MsgExternalTransfer", MsgExternalTransfer], ["/injective.exchange.v1beta1.MsgLiquidatePosition", MsgLiquidatePosition], ["/injective.exchange.v1beta1.MsgIncreasePositionMargin", MsgIncreasePositionMargin], ["/injective.exchange.v1beta1.MsgRewardsOptOut", MsgRewardsOptOut], ["/injective.exchange.v1beta1.MsgAdminUpdateBinaryOptionsMarket", MsgAdminUpdateBinaryOptionsMarket]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    deposit(value: MsgDeposit) {
      return {
        typeUrl: "/injective.exchange.v1beta1.MsgDeposit",
        value: MsgDeposit.encode(value).finish()
      };
    },

    withdraw(value: MsgWithdraw) {
      return {
        typeUrl: "/injective.exchange.v1beta1.MsgWithdraw",
        value: MsgWithdraw.encode(value).finish()
      };
    },

    instantSpotMarketLaunch(value: MsgInstantSpotMarketLaunch) {
      return {
        typeUrl: "/injective.exchange.v1beta1.MsgInstantSpotMarketLaunch",
        value: MsgInstantSpotMarketLaunch.encode(value).finish()
      };
    },

    instantPerpetualMarketLaunch(value: MsgInstantPerpetualMarketLaunch) {
      return {
        typeUrl: "/injective.exchange.v1beta1.MsgInstantPerpetualMarketLaunch",
        value: MsgInstantPerpetualMarketLaunch.encode(value).finish()
      };
    },

    instantExpiryFuturesMarketLaunch(value: MsgInstantExpiryFuturesMarketLaunch) {
      return {
        typeUrl: "/injective.exchange.v1beta1.MsgInstantExpiryFuturesMarketLaunch",
        value: MsgInstantExpiryFuturesMarketLaunch.encode(value).finish()
      };
    },

    createSpotLimitOrder(value: MsgCreateSpotLimitOrder) {
      return {
        typeUrl: "/injective.exchange.v1beta1.MsgCreateSpotLimitOrder",
        value: MsgCreateSpotLimitOrder.encode(value).finish()
      };
    },

    batchCreateSpotLimitOrders(value: MsgBatchCreateSpotLimitOrders) {
      return {
        typeUrl: "/injective.exchange.v1beta1.MsgBatchCreateSpotLimitOrders",
        value: MsgBatchCreateSpotLimitOrders.encode(value).finish()
      };
    },

    createSpotMarketOrder(value: MsgCreateSpotMarketOrder) {
      return {
        typeUrl: "/injective.exchange.v1beta1.MsgCreateSpotMarketOrder",
        value: MsgCreateSpotMarketOrder.encode(value).finish()
      };
    },

    cancelSpotOrder(value: MsgCancelSpotOrder) {
      return {
        typeUrl: "/injective.exchange.v1beta1.MsgCancelSpotOrder",
        value: MsgCancelSpotOrder.encode(value).finish()
      };
    },

    batchCancelSpotOrders(value: MsgBatchCancelSpotOrders) {
      return {
        typeUrl: "/injective.exchange.v1beta1.MsgBatchCancelSpotOrders",
        value: MsgBatchCancelSpotOrders.encode(value).finish()
      };
    },

    batchUpdateOrders(value: MsgBatchUpdateOrders) {
      return {
        typeUrl: "/injective.exchange.v1beta1.MsgBatchUpdateOrders",
        value: MsgBatchUpdateOrders.encode(value).finish()
      };
    },

    exec(value: MsgExec) {
      return {
        typeUrl: "/injective.exchange.v1beta1.MsgExec",
        value: MsgExec.encode(value).finish()
      };
    },

    createDerivativeLimitOrder(value: MsgCreateDerivativeLimitOrder) {
      return {
        typeUrl: "/injective.exchange.v1beta1.MsgCreateDerivativeLimitOrder",
        value: MsgCreateDerivativeLimitOrder.encode(value).finish()
      };
    },

    batchCreateDerivativeLimitOrders(value: MsgBatchCreateDerivativeLimitOrders) {
      return {
        typeUrl: "/injective.exchange.v1beta1.MsgBatchCreateDerivativeLimitOrders",
        value: MsgBatchCreateDerivativeLimitOrders.encode(value).finish()
      };
    },

    createDerivativeMarketOrder(value: MsgCreateDerivativeMarketOrder) {
      return {
        typeUrl: "/injective.exchange.v1beta1.MsgCreateDerivativeMarketOrder",
        value: MsgCreateDerivativeMarketOrder.encode(value).finish()
      };
    },

    cancelDerivativeOrder(value: MsgCancelDerivativeOrder) {
      return {
        typeUrl: "/injective.exchange.v1beta1.MsgCancelDerivativeOrder",
        value: MsgCancelDerivativeOrder.encode(value).finish()
      };
    },

    batchCancelDerivativeOrders(value: MsgBatchCancelDerivativeOrders) {
      return {
        typeUrl: "/injective.exchange.v1beta1.MsgBatchCancelDerivativeOrders",
        value: MsgBatchCancelDerivativeOrders.encode(value).finish()
      };
    },

    instantBinaryOptionsMarketLaunch(value: MsgInstantBinaryOptionsMarketLaunch) {
      return {
        typeUrl: "/injective.exchange.v1beta1.MsgInstantBinaryOptionsMarketLaunch",
        value: MsgInstantBinaryOptionsMarketLaunch.encode(value).finish()
      };
    },

    createBinaryOptionsLimitOrder(value: MsgCreateBinaryOptionsLimitOrder) {
      return {
        typeUrl: "/injective.exchange.v1beta1.MsgCreateBinaryOptionsLimitOrder",
        value: MsgCreateBinaryOptionsLimitOrder.encode(value).finish()
      };
    },

    createBinaryOptionsMarketOrder(value: MsgCreateBinaryOptionsMarketOrder) {
      return {
        typeUrl: "/injective.exchange.v1beta1.MsgCreateBinaryOptionsMarketOrder",
        value: MsgCreateBinaryOptionsMarketOrder.encode(value).finish()
      };
    },

    cancelBinaryOptionsOrder(value: MsgCancelBinaryOptionsOrder) {
      return {
        typeUrl: "/injective.exchange.v1beta1.MsgCancelBinaryOptionsOrder",
        value: MsgCancelBinaryOptionsOrder.encode(value).finish()
      };
    },

    batchCancelBinaryOptionsOrders(value: MsgBatchCancelBinaryOptionsOrders) {
      return {
        typeUrl: "/injective.exchange.v1beta1.MsgBatchCancelBinaryOptionsOrders",
        value: MsgBatchCancelBinaryOptionsOrders.encode(value).finish()
      };
    },

    subaccountTransfer(value: MsgSubaccountTransfer) {
      return {
        typeUrl: "/injective.exchange.v1beta1.MsgSubaccountTransfer",
        value: MsgSubaccountTransfer.encode(value).finish()
      };
    },

    externalTransfer(value: MsgExternalTransfer) {
      return {
        typeUrl: "/injective.exchange.v1beta1.MsgExternalTransfer",
        value: MsgExternalTransfer.encode(value).finish()
      };
    },

    liquidatePosition(value: MsgLiquidatePosition) {
      return {
        typeUrl: "/injective.exchange.v1beta1.MsgLiquidatePosition",
        value: MsgLiquidatePosition.encode(value).finish()
      };
    },

    increasePositionMargin(value: MsgIncreasePositionMargin) {
      return {
        typeUrl: "/injective.exchange.v1beta1.MsgIncreasePositionMargin",
        value: MsgIncreasePositionMargin.encode(value).finish()
      };
    },

    rewardsOptOut(value: MsgRewardsOptOut) {
      return {
        typeUrl: "/injective.exchange.v1beta1.MsgRewardsOptOut",
        value: MsgRewardsOptOut.encode(value).finish()
      };
    },

    adminUpdateBinaryOptionsMarket(value: MsgAdminUpdateBinaryOptionsMarket) {
      return {
        typeUrl: "/injective.exchange.v1beta1.MsgAdminUpdateBinaryOptionsMarket",
        value: MsgAdminUpdateBinaryOptionsMarket.encode(value).finish()
      };
    }

  },
  withTypeUrl: {
    deposit(value: MsgDeposit) {
      return {
        typeUrl: "/injective.exchange.v1beta1.MsgDeposit",
        value
      };
    },

    withdraw(value: MsgWithdraw) {
      return {
        typeUrl: "/injective.exchange.v1beta1.MsgWithdraw",
        value
      };
    },

    instantSpotMarketLaunch(value: MsgInstantSpotMarketLaunch) {
      return {
        typeUrl: "/injective.exchange.v1beta1.MsgInstantSpotMarketLaunch",
        value
      };
    },

    instantPerpetualMarketLaunch(value: MsgInstantPerpetualMarketLaunch) {
      return {
        typeUrl: "/injective.exchange.v1beta1.MsgInstantPerpetualMarketLaunch",
        value
      };
    },

    instantExpiryFuturesMarketLaunch(value: MsgInstantExpiryFuturesMarketLaunch) {
      return {
        typeUrl: "/injective.exchange.v1beta1.MsgInstantExpiryFuturesMarketLaunch",
        value
      };
    },

    createSpotLimitOrder(value: MsgCreateSpotLimitOrder) {
      return {
        typeUrl: "/injective.exchange.v1beta1.MsgCreateSpotLimitOrder",
        value
      };
    },

    batchCreateSpotLimitOrders(value: MsgBatchCreateSpotLimitOrders) {
      return {
        typeUrl: "/injective.exchange.v1beta1.MsgBatchCreateSpotLimitOrders",
        value
      };
    },

    createSpotMarketOrder(value: MsgCreateSpotMarketOrder) {
      return {
        typeUrl: "/injective.exchange.v1beta1.MsgCreateSpotMarketOrder",
        value
      };
    },

    cancelSpotOrder(value: MsgCancelSpotOrder) {
      return {
        typeUrl: "/injective.exchange.v1beta1.MsgCancelSpotOrder",
        value
      };
    },

    batchCancelSpotOrders(value: MsgBatchCancelSpotOrders) {
      return {
        typeUrl: "/injective.exchange.v1beta1.MsgBatchCancelSpotOrders",
        value
      };
    },

    batchUpdateOrders(value: MsgBatchUpdateOrders) {
      return {
        typeUrl: "/injective.exchange.v1beta1.MsgBatchUpdateOrders",
        value
      };
    },

    exec(value: MsgExec) {
      return {
        typeUrl: "/injective.exchange.v1beta1.MsgExec",
        value
      };
    },

    createDerivativeLimitOrder(value: MsgCreateDerivativeLimitOrder) {
      return {
        typeUrl: "/injective.exchange.v1beta1.MsgCreateDerivativeLimitOrder",
        value
      };
    },

    batchCreateDerivativeLimitOrders(value: MsgBatchCreateDerivativeLimitOrders) {
      return {
        typeUrl: "/injective.exchange.v1beta1.MsgBatchCreateDerivativeLimitOrders",
        value
      };
    },

    createDerivativeMarketOrder(value: MsgCreateDerivativeMarketOrder) {
      return {
        typeUrl: "/injective.exchange.v1beta1.MsgCreateDerivativeMarketOrder",
        value
      };
    },

    cancelDerivativeOrder(value: MsgCancelDerivativeOrder) {
      return {
        typeUrl: "/injective.exchange.v1beta1.MsgCancelDerivativeOrder",
        value
      };
    },

    batchCancelDerivativeOrders(value: MsgBatchCancelDerivativeOrders) {
      return {
        typeUrl: "/injective.exchange.v1beta1.MsgBatchCancelDerivativeOrders",
        value
      };
    },

    instantBinaryOptionsMarketLaunch(value: MsgInstantBinaryOptionsMarketLaunch) {
      return {
        typeUrl: "/injective.exchange.v1beta1.MsgInstantBinaryOptionsMarketLaunch",
        value
      };
    },

    createBinaryOptionsLimitOrder(value: MsgCreateBinaryOptionsLimitOrder) {
      return {
        typeUrl: "/injective.exchange.v1beta1.MsgCreateBinaryOptionsLimitOrder",
        value
      };
    },

    createBinaryOptionsMarketOrder(value: MsgCreateBinaryOptionsMarketOrder) {
      return {
        typeUrl: "/injective.exchange.v1beta1.MsgCreateBinaryOptionsMarketOrder",
        value
      };
    },

    cancelBinaryOptionsOrder(value: MsgCancelBinaryOptionsOrder) {
      return {
        typeUrl: "/injective.exchange.v1beta1.MsgCancelBinaryOptionsOrder",
        value
      };
    },

    batchCancelBinaryOptionsOrders(value: MsgBatchCancelBinaryOptionsOrders) {
      return {
        typeUrl: "/injective.exchange.v1beta1.MsgBatchCancelBinaryOptionsOrders",
        value
      };
    },

    subaccountTransfer(value: MsgSubaccountTransfer) {
      return {
        typeUrl: "/injective.exchange.v1beta1.MsgSubaccountTransfer",
        value
      };
    },

    externalTransfer(value: MsgExternalTransfer) {
      return {
        typeUrl: "/injective.exchange.v1beta1.MsgExternalTransfer",
        value
      };
    },

    liquidatePosition(value: MsgLiquidatePosition) {
      return {
        typeUrl: "/injective.exchange.v1beta1.MsgLiquidatePosition",
        value
      };
    },

    increasePositionMargin(value: MsgIncreasePositionMargin) {
      return {
        typeUrl: "/injective.exchange.v1beta1.MsgIncreasePositionMargin",
        value
      };
    },

    rewardsOptOut(value: MsgRewardsOptOut) {
      return {
        typeUrl: "/injective.exchange.v1beta1.MsgRewardsOptOut",
        value
      };
    },

    adminUpdateBinaryOptionsMarket(value: MsgAdminUpdateBinaryOptionsMarket) {
      return {
        typeUrl: "/injective.exchange.v1beta1.MsgAdminUpdateBinaryOptionsMarket",
        value
      };
    }

  },
  fromPartial: {
    deposit(value: MsgDeposit) {
      return {
        typeUrl: "/injective.exchange.v1beta1.MsgDeposit",
        value: MsgDeposit.fromPartial(value)
      };
    },

    withdraw(value: MsgWithdraw) {
      return {
        typeUrl: "/injective.exchange.v1beta1.MsgWithdraw",
        value: MsgWithdraw.fromPartial(value)
      };
    },

    instantSpotMarketLaunch(value: MsgInstantSpotMarketLaunch) {
      return {
        typeUrl: "/injective.exchange.v1beta1.MsgInstantSpotMarketLaunch",
        value: MsgInstantSpotMarketLaunch.fromPartial(value)
      };
    },

    instantPerpetualMarketLaunch(value: MsgInstantPerpetualMarketLaunch) {
      return {
        typeUrl: "/injective.exchange.v1beta1.MsgInstantPerpetualMarketLaunch",
        value: MsgInstantPerpetualMarketLaunch.fromPartial(value)
      };
    },

    instantExpiryFuturesMarketLaunch(value: MsgInstantExpiryFuturesMarketLaunch) {
      return {
        typeUrl: "/injective.exchange.v1beta1.MsgInstantExpiryFuturesMarketLaunch",
        value: MsgInstantExpiryFuturesMarketLaunch.fromPartial(value)
      };
    },

    createSpotLimitOrder(value: MsgCreateSpotLimitOrder) {
      return {
        typeUrl: "/injective.exchange.v1beta1.MsgCreateSpotLimitOrder",
        value: MsgCreateSpotLimitOrder.fromPartial(value)
      };
    },

    batchCreateSpotLimitOrders(value: MsgBatchCreateSpotLimitOrders) {
      return {
        typeUrl: "/injective.exchange.v1beta1.MsgBatchCreateSpotLimitOrders",
        value: MsgBatchCreateSpotLimitOrders.fromPartial(value)
      };
    },

    createSpotMarketOrder(value: MsgCreateSpotMarketOrder) {
      return {
        typeUrl: "/injective.exchange.v1beta1.MsgCreateSpotMarketOrder",
        value: MsgCreateSpotMarketOrder.fromPartial(value)
      };
    },

    cancelSpotOrder(value: MsgCancelSpotOrder) {
      return {
        typeUrl: "/injective.exchange.v1beta1.MsgCancelSpotOrder",
        value: MsgCancelSpotOrder.fromPartial(value)
      };
    },

    batchCancelSpotOrders(value: MsgBatchCancelSpotOrders) {
      return {
        typeUrl: "/injective.exchange.v1beta1.MsgBatchCancelSpotOrders",
        value: MsgBatchCancelSpotOrders.fromPartial(value)
      };
    },

    batchUpdateOrders(value: MsgBatchUpdateOrders) {
      return {
        typeUrl: "/injective.exchange.v1beta1.MsgBatchUpdateOrders",
        value: MsgBatchUpdateOrders.fromPartial(value)
      };
    },

    exec(value: MsgExec) {
      return {
        typeUrl: "/injective.exchange.v1beta1.MsgExec",
        value: MsgExec.fromPartial(value)
      };
    },

    createDerivativeLimitOrder(value: MsgCreateDerivativeLimitOrder) {
      return {
        typeUrl: "/injective.exchange.v1beta1.MsgCreateDerivativeLimitOrder",
        value: MsgCreateDerivativeLimitOrder.fromPartial(value)
      };
    },

    batchCreateDerivativeLimitOrders(value: MsgBatchCreateDerivativeLimitOrders) {
      return {
        typeUrl: "/injective.exchange.v1beta1.MsgBatchCreateDerivativeLimitOrders",
        value: MsgBatchCreateDerivativeLimitOrders.fromPartial(value)
      };
    },

    createDerivativeMarketOrder(value: MsgCreateDerivativeMarketOrder) {
      return {
        typeUrl: "/injective.exchange.v1beta1.MsgCreateDerivativeMarketOrder",
        value: MsgCreateDerivativeMarketOrder.fromPartial(value)
      };
    },

    cancelDerivativeOrder(value: MsgCancelDerivativeOrder) {
      return {
        typeUrl: "/injective.exchange.v1beta1.MsgCancelDerivativeOrder",
        value: MsgCancelDerivativeOrder.fromPartial(value)
      };
    },

    batchCancelDerivativeOrders(value: MsgBatchCancelDerivativeOrders) {
      return {
        typeUrl: "/injective.exchange.v1beta1.MsgBatchCancelDerivativeOrders",
        value: MsgBatchCancelDerivativeOrders.fromPartial(value)
      };
    },

    instantBinaryOptionsMarketLaunch(value: MsgInstantBinaryOptionsMarketLaunch) {
      return {
        typeUrl: "/injective.exchange.v1beta1.MsgInstantBinaryOptionsMarketLaunch",
        value: MsgInstantBinaryOptionsMarketLaunch.fromPartial(value)
      };
    },

    createBinaryOptionsLimitOrder(value: MsgCreateBinaryOptionsLimitOrder) {
      return {
        typeUrl: "/injective.exchange.v1beta1.MsgCreateBinaryOptionsLimitOrder",
        value: MsgCreateBinaryOptionsLimitOrder.fromPartial(value)
      };
    },

    createBinaryOptionsMarketOrder(value: MsgCreateBinaryOptionsMarketOrder) {
      return {
        typeUrl: "/injective.exchange.v1beta1.MsgCreateBinaryOptionsMarketOrder",
        value: MsgCreateBinaryOptionsMarketOrder.fromPartial(value)
      };
    },

    cancelBinaryOptionsOrder(value: MsgCancelBinaryOptionsOrder) {
      return {
        typeUrl: "/injective.exchange.v1beta1.MsgCancelBinaryOptionsOrder",
        value: MsgCancelBinaryOptionsOrder.fromPartial(value)
      };
    },

    batchCancelBinaryOptionsOrders(value: MsgBatchCancelBinaryOptionsOrders) {
      return {
        typeUrl: "/injective.exchange.v1beta1.MsgBatchCancelBinaryOptionsOrders",
        value: MsgBatchCancelBinaryOptionsOrders.fromPartial(value)
      };
    },

    subaccountTransfer(value: MsgSubaccountTransfer) {
      return {
        typeUrl: "/injective.exchange.v1beta1.MsgSubaccountTransfer",
        value: MsgSubaccountTransfer.fromPartial(value)
      };
    },

    externalTransfer(value: MsgExternalTransfer) {
      return {
        typeUrl: "/injective.exchange.v1beta1.MsgExternalTransfer",
        value: MsgExternalTransfer.fromPartial(value)
      };
    },

    liquidatePosition(value: MsgLiquidatePosition) {
      return {
        typeUrl: "/injective.exchange.v1beta1.MsgLiquidatePosition",
        value: MsgLiquidatePosition.fromPartial(value)
      };
    },

    increasePositionMargin(value: MsgIncreasePositionMargin) {
      return {
        typeUrl: "/injective.exchange.v1beta1.MsgIncreasePositionMargin",
        value: MsgIncreasePositionMargin.fromPartial(value)
      };
    },

    rewardsOptOut(value: MsgRewardsOptOut) {
      return {
        typeUrl: "/injective.exchange.v1beta1.MsgRewardsOptOut",
        value: MsgRewardsOptOut.fromPartial(value)
      };
    },

    adminUpdateBinaryOptionsMarket(value: MsgAdminUpdateBinaryOptionsMarket) {
      return {
        typeUrl: "/injective.exchange.v1beta1.MsgAdminUpdateBinaryOptionsMarket",
        value: MsgAdminUpdateBinaryOptionsMarket.fromPartial(value)
      };
    }

  }
};