import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgDeposit, MsgDepositResponse, MsgWithdraw, MsgWithdrawResponse, MsgInstantSpotMarketLaunch, MsgInstantSpotMarketLaunchResponse, MsgInstantPerpetualMarketLaunch, MsgInstantPerpetualMarketLaunchResponse, MsgInstantExpiryFuturesMarketLaunch, MsgInstantExpiryFuturesMarketLaunchResponse, MsgCreateSpotLimitOrder, MsgCreateSpotLimitOrderResponse, MsgBatchCreateSpotLimitOrders, MsgBatchCreateSpotLimitOrdersResponse, MsgCreateSpotMarketOrder, MsgCreateSpotMarketOrderResponse, MsgCancelSpotOrder, MsgCancelSpotOrderResponse, MsgBatchCancelSpotOrders, MsgBatchCancelSpotOrdersResponse, MsgBatchUpdateOrders, MsgBatchUpdateOrdersResponse, MsgExec, MsgExecResponse, MsgCreateDerivativeLimitOrder, MsgCreateDerivativeLimitOrderResponse, MsgBatchCreateDerivativeLimitOrders, MsgBatchCreateDerivativeLimitOrdersResponse, MsgCreateDerivativeMarketOrder, MsgCreateDerivativeMarketOrderResponse, MsgCancelDerivativeOrder, MsgCancelDerivativeOrderResponse, MsgBatchCancelDerivativeOrders, MsgBatchCancelDerivativeOrdersResponse, MsgInstantBinaryOptionsMarketLaunch, MsgInstantBinaryOptionsMarketLaunchResponse, MsgCreateBinaryOptionsLimitOrder, MsgCreateBinaryOptionsLimitOrderResponse, MsgCreateBinaryOptionsMarketOrder, MsgCreateBinaryOptionsMarketOrderResponse, MsgCancelBinaryOptionsOrder, MsgCancelBinaryOptionsOrderResponse, MsgBatchCancelBinaryOptionsOrders, MsgBatchCancelBinaryOptionsOrdersResponse, MsgSubaccountTransfer, MsgSubaccountTransferResponse, MsgExternalTransfer, MsgExternalTransferResponse, MsgLiquidatePosition, MsgLiquidatePositionResponse, MsgIncreasePositionMargin, MsgIncreasePositionMarginResponse, MsgRewardsOptOut, MsgRewardsOptOutResponse, MsgAdminUpdateBinaryOptionsMarket, MsgAdminUpdateBinaryOptionsMarketResponse } from "./tx";
/** Msg defines the RPC service */

export interface Msg {
  deposit(request: MsgDeposit): Promise<MsgDepositResponse>;
  /*Deposit defines a method for transferring coins from the sender's bank balance into the subaccount's exchange deposits*/

  withdraw(request: MsgWithdraw): Promise<MsgWithdrawResponse>;
  /*Withdraw defines a method for withdrawing coins from a subaccount's deposits to the user's bank balance*/

  instantSpotMarketLaunch(request: MsgInstantSpotMarketLaunch): Promise<MsgInstantSpotMarketLaunchResponse>;
  /*InstantSpotMarketLaunch defines method for creating a spot market by paying listing fee without governance*/

  instantPerpetualMarketLaunch(request: MsgInstantPerpetualMarketLaunch): Promise<MsgInstantPerpetualMarketLaunchResponse>;
  /*InstantPerpetualMarketLaunch defines a method for creating a new perpetual futures market by paying listing fee without governance*/

  instantExpiryFuturesMarketLaunch(request: MsgInstantExpiryFuturesMarketLaunch): Promise<MsgInstantExpiryFuturesMarketLaunchResponse>;
  /*InstantExpiryFuturesMarketLaunch defines a method for creating a new expiry futures market by paying listing fee without governance*/

  createSpotLimitOrder(request: MsgCreateSpotLimitOrder): Promise<MsgCreateSpotLimitOrderResponse>;
  /*CreateSpotLimitOrder defines a method for creating a new spot limit order.*/

  batchCreateSpotLimitOrders(request: MsgBatchCreateSpotLimitOrders): Promise<MsgBatchCreateSpotLimitOrdersResponse>;
  /*BatchCreateSpotLimitOrder defines a method for creating a new batch of spot limit orders.*/

  createSpotMarketOrder(request: MsgCreateSpotMarketOrder): Promise<MsgCreateSpotMarketOrderResponse>;
  /*CreateSpotMarketOrder defines a method for creating a new spot market order.*/

  cancelSpotOrder(request: MsgCancelSpotOrder): Promise<MsgCancelSpotOrderResponse>;
  /*MsgCancelSpotOrder defines a method for cancelling a spot order.*/

  batchCancelSpotOrders(request: MsgBatchCancelSpotOrders): Promise<MsgBatchCancelSpotOrdersResponse>;
  /*BatchCancelSpotOrders defines a method for cancelling a batch of spot orders in a given market.*/

  batchUpdateOrders(request: MsgBatchUpdateOrders): Promise<MsgBatchUpdateOrdersResponse>;
  /*BatchUpdateOrders defines a method for updating a batch of orders.*/

  exec(request: MsgExec): Promise<MsgExecResponse>;
  /*Exec defines a method for executing a Cosmwasm contract from the exchange module with privileged capabilities.*/

  createDerivativeLimitOrder(request: MsgCreateDerivativeLimitOrder): Promise<MsgCreateDerivativeLimitOrderResponse>;
  /*CreateDerivativeLimitOrder defines a method for creating a new derivative limit order.*/

  batchCreateDerivativeLimitOrders(request: MsgBatchCreateDerivativeLimitOrders): Promise<MsgBatchCreateDerivativeLimitOrdersResponse>;
  /*BatchCreateDerivativeLimitOrders defines a method for creating a new batch of derivative limit orders.*/

  createDerivativeMarketOrder(request: MsgCreateDerivativeMarketOrder): Promise<MsgCreateDerivativeMarketOrderResponse>;
  /*MsgCreateDerivativeLimitOrder defines a method for creating a new derivative market order.*/

  cancelDerivativeOrder(request: MsgCancelDerivativeOrder): Promise<MsgCancelDerivativeOrderResponse>;
  /*MsgCancelDerivativeOrder defines a method for cancelling a derivative order.*/

  batchCancelDerivativeOrders(request: MsgBatchCancelDerivativeOrders): Promise<MsgBatchCancelDerivativeOrdersResponse>;
  /*MsgBatchCancelDerivativeOrders defines a method for cancelling a batch of derivative limit orders.*/

  instantBinaryOptionsMarketLaunch(request: MsgInstantBinaryOptionsMarketLaunch): Promise<MsgInstantBinaryOptionsMarketLaunchResponse>;
  /*InstantBinaryOptionsMarketLaunch defines method for creating a binary options market by paying listing fee without governance*/

  createBinaryOptionsLimitOrder(request: MsgCreateBinaryOptionsLimitOrder): Promise<MsgCreateBinaryOptionsLimitOrderResponse>;
  /*CreateBinaryOptionsLimitOrder defines a method for creating a new binary options limit order.*/

  createBinaryOptionsMarketOrder(request: MsgCreateBinaryOptionsMarketOrder): Promise<MsgCreateBinaryOptionsMarketOrderResponse>;
  /*CreateBinaryOptionsMarketOrder defines a method for creating a new binary options market order.*/

  cancelBinaryOptionsOrder(request: MsgCancelBinaryOptionsOrder): Promise<MsgCancelBinaryOptionsOrderResponse>;
  /*MsgCancelBinaryOptionsOrder defines a method for cancelling a binary options order.*/

  batchCancelBinaryOptionsOrders(request: MsgBatchCancelBinaryOptionsOrders): Promise<MsgBatchCancelBinaryOptionsOrdersResponse>;
  /*BatchCancelBinaryOptionsOrders defines a method for cancelling a batch of binary options limit orders.*/

  subaccountTransfer(request: MsgSubaccountTransfer): Promise<MsgSubaccountTransferResponse>;
  /*SubaccountTransfer defines a method for transfer between subaccounts*/

  externalTransfer(request: MsgExternalTransfer): Promise<MsgExternalTransferResponse>;
  /*ExternalTransfer defines a method for transfer between external accounts*/

  liquidatePosition(request: MsgLiquidatePosition): Promise<MsgLiquidatePositionResponse>;
  /*LiquidatePosition defines a method for liquidating a position*/

  increasePositionMargin(request: MsgIncreasePositionMargin): Promise<MsgIncreasePositionMarginResponse>;
  /*IncreasePositionMargin defines a method for increasing margin of a position*/

  rewardsOptOut(request: MsgRewardsOptOut): Promise<MsgRewardsOptOutResponse>;
  /*RewardsOptOut defines a method for opting out of rewards*/

  adminUpdateBinaryOptionsMarket(request: MsgAdminUpdateBinaryOptionsMarket): Promise<MsgAdminUpdateBinaryOptionsMarketResponse>;
  /*AdminUpdateBinaryOptionsMarket defines method for updating a binary options market by admin*/

}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.deposit = this.deposit.bind(this);
    this.withdraw = this.withdraw.bind(this);
    this.instantSpotMarketLaunch = this.instantSpotMarketLaunch.bind(this);
    this.instantPerpetualMarketLaunch = this.instantPerpetualMarketLaunch.bind(this);
    this.instantExpiryFuturesMarketLaunch = this.instantExpiryFuturesMarketLaunch.bind(this);
    this.createSpotLimitOrder = this.createSpotLimitOrder.bind(this);
    this.batchCreateSpotLimitOrders = this.batchCreateSpotLimitOrders.bind(this);
    this.createSpotMarketOrder = this.createSpotMarketOrder.bind(this);
    this.cancelSpotOrder = this.cancelSpotOrder.bind(this);
    this.batchCancelSpotOrders = this.batchCancelSpotOrders.bind(this);
    this.batchUpdateOrders = this.batchUpdateOrders.bind(this);
    this.exec = this.exec.bind(this);
    this.createDerivativeLimitOrder = this.createDerivativeLimitOrder.bind(this);
    this.batchCreateDerivativeLimitOrders = this.batchCreateDerivativeLimitOrders.bind(this);
    this.createDerivativeMarketOrder = this.createDerivativeMarketOrder.bind(this);
    this.cancelDerivativeOrder = this.cancelDerivativeOrder.bind(this);
    this.batchCancelDerivativeOrders = this.batchCancelDerivativeOrders.bind(this);
    this.instantBinaryOptionsMarketLaunch = this.instantBinaryOptionsMarketLaunch.bind(this);
    this.createBinaryOptionsLimitOrder = this.createBinaryOptionsLimitOrder.bind(this);
    this.createBinaryOptionsMarketOrder = this.createBinaryOptionsMarketOrder.bind(this);
    this.cancelBinaryOptionsOrder = this.cancelBinaryOptionsOrder.bind(this);
    this.batchCancelBinaryOptionsOrders = this.batchCancelBinaryOptionsOrders.bind(this);
    this.subaccountTransfer = this.subaccountTransfer.bind(this);
    this.externalTransfer = this.externalTransfer.bind(this);
    this.liquidatePosition = this.liquidatePosition.bind(this);
    this.increasePositionMargin = this.increasePositionMargin.bind(this);
    this.rewardsOptOut = this.rewardsOptOut.bind(this);
    this.adminUpdateBinaryOptionsMarket = this.adminUpdateBinaryOptionsMarket.bind(this);
  }

  deposit(request: MsgDeposit): Promise<MsgDepositResponse> {
    const data = MsgDeposit.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "Deposit", data);
    return promise.then(data => MsgDepositResponse.decode(new _m0.Reader(data)));
  }

  withdraw(request: MsgWithdraw): Promise<MsgWithdrawResponse> {
    const data = MsgWithdraw.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "Withdraw", data);
    return promise.then(data => MsgWithdrawResponse.decode(new _m0.Reader(data)));
  }

  instantSpotMarketLaunch(request: MsgInstantSpotMarketLaunch): Promise<MsgInstantSpotMarketLaunchResponse> {
    const data = MsgInstantSpotMarketLaunch.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "InstantSpotMarketLaunch", data);
    return promise.then(data => MsgInstantSpotMarketLaunchResponse.decode(new _m0.Reader(data)));
  }

  instantPerpetualMarketLaunch(request: MsgInstantPerpetualMarketLaunch): Promise<MsgInstantPerpetualMarketLaunchResponse> {
    const data = MsgInstantPerpetualMarketLaunch.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "InstantPerpetualMarketLaunch", data);
    return promise.then(data => MsgInstantPerpetualMarketLaunchResponse.decode(new _m0.Reader(data)));
  }

  instantExpiryFuturesMarketLaunch(request: MsgInstantExpiryFuturesMarketLaunch): Promise<MsgInstantExpiryFuturesMarketLaunchResponse> {
    const data = MsgInstantExpiryFuturesMarketLaunch.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "InstantExpiryFuturesMarketLaunch", data);
    return promise.then(data => MsgInstantExpiryFuturesMarketLaunchResponse.decode(new _m0.Reader(data)));
  }

  createSpotLimitOrder(request: MsgCreateSpotLimitOrder): Promise<MsgCreateSpotLimitOrderResponse> {
    const data = MsgCreateSpotLimitOrder.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "CreateSpotLimitOrder", data);
    return promise.then(data => MsgCreateSpotLimitOrderResponse.decode(new _m0.Reader(data)));
  }

  batchCreateSpotLimitOrders(request: MsgBatchCreateSpotLimitOrders): Promise<MsgBatchCreateSpotLimitOrdersResponse> {
    const data = MsgBatchCreateSpotLimitOrders.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "BatchCreateSpotLimitOrders", data);
    return promise.then(data => MsgBatchCreateSpotLimitOrdersResponse.decode(new _m0.Reader(data)));
  }

  createSpotMarketOrder(request: MsgCreateSpotMarketOrder): Promise<MsgCreateSpotMarketOrderResponse> {
    const data = MsgCreateSpotMarketOrder.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "CreateSpotMarketOrder", data);
    return promise.then(data => MsgCreateSpotMarketOrderResponse.decode(new _m0.Reader(data)));
  }

  cancelSpotOrder(request: MsgCancelSpotOrder): Promise<MsgCancelSpotOrderResponse> {
    const data = MsgCancelSpotOrder.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "CancelSpotOrder", data);
    return promise.then(data => MsgCancelSpotOrderResponse.decode(new _m0.Reader(data)));
  }

  batchCancelSpotOrders(request: MsgBatchCancelSpotOrders): Promise<MsgBatchCancelSpotOrdersResponse> {
    const data = MsgBatchCancelSpotOrders.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "BatchCancelSpotOrders", data);
    return promise.then(data => MsgBatchCancelSpotOrdersResponse.decode(new _m0.Reader(data)));
  }

  batchUpdateOrders(request: MsgBatchUpdateOrders): Promise<MsgBatchUpdateOrdersResponse> {
    const data = MsgBatchUpdateOrders.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "BatchUpdateOrders", data);
    return promise.then(data => MsgBatchUpdateOrdersResponse.decode(new _m0.Reader(data)));
  }

  exec(request: MsgExec): Promise<MsgExecResponse> {
    const data = MsgExec.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "Exec", data);
    return promise.then(data => MsgExecResponse.decode(new _m0.Reader(data)));
  }

  createDerivativeLimitOrder(request: MsgCreateDerivativeLimitOrder): Promise<MsgCreateDerivativeLimitOrderResponse> {
    const data = MsgCreateDerivativeLimitOrder.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "CreateDerivativeLimitOrder", data);
    return promise.then(data => MsgCreateDerivativeLimitOrderResponse.decode(new _m0.Reader(data)));
  }

  batchCreateDerivativeLimitOrders(request: MsgBatchCreateDerivativeLimitOrders): Promise<MsgBatchCreateDerivativeLimitOrdersResponse> {
    const data = MsgBatchCreateDerivativeLimitOrders.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "BatchCreateDerivativeLimitOrders", data);
    return promise.then(data => MsgBatchCreateDerivativeLimitOrdersResponse.decode(new _m0.Reader(data)));
  }

  createDerivativeMarketOrder(request: MsgCreateDerivativeMarketOrder): Promise<MsgCreateDerivativeMarketOrderResponse> {
    const data = MsgCreateDerivativeMarketOrder.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "CreateDerivativeMarketOrder", data);
    return promise.then(data => MsgCreateDerivativeMarketOrderResponse.decode(new _m0.Reader(data)));
  }

  cancelDerivativeOrder(request: MsgCancelDerivativeOrder): Promise<MsgCancelDerivativeOrderResponse> {
    const data = MsgCancelDerivativeOrder.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "CancelDerivativeOrder", data);
    return promise.then(data => MsgCancelDerivativeOrderResponse.decode(new _m0.Reader(data)));
  }

  batchCancelDerivativeOrders(request: MsgBatchCancelDerivativeOrders): Promise<MsgBatchCancelDerivativeOrdersResponse> {
    const data = MsgBatchCancelDerivativeOrders.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "BatchCancelDerivativeOrders", data);
    return promise.then(data => MsgBatchCancelDerivativeOrdersResponse.decode(new _m0.Reader(data)));
  }

  instantBinaryOptionsMarketLaunch(request: MsgInstantBinaryOptionsMarketLaunch): Promise<MsgInstantBinaryOptionsMarketLaunchResponse> {
    const data = MsgInstantBinaryOptionsMarketLaunch.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "InstantBinaryOptionsMarketLaunch", data);
    return promise.then(data => MsgInstantBinaryOptionsMarketLaunchResponse.decode(new _m0.Reader(data)));
  }

  createBinaryOptionsLimitOrder(request: MsgCreateBinaryOptionsLimitOrder): Promise<MsgCreateBinaryOptionsLimitOrderResponse> {
    const data = MsgCreateBinaryOptionsLimitOrder.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "CreateBinaryOptionsLimitOrder", data);
    return promise.then(data => MsgCreateBinaryOptionsLimitOrderResponse.decode(new _m0.Reader(data)));
  }

  createBinaryOptionsMarketOrder(request: MsgCreateBinaryOptionsMarketOrder): Promise<MsgCreateBinaryOptionsMarketOrderResponse> {
    const data = MsgCreateBinaryOptionsMarketOrder.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "CreateBinaryOptionsMarketOrder", data);
    return promise.then(data => MsgCreateBinaryOptionsMarketOrderResponse.decode(new _m0.Reader(data)));
  }

  cancelBinaryOptionsOrder(request: MsgCancelBinaryOptionsOrder): Promise<MsgCancelBinaryOptionsOrderResponse> {
    const data = MsgCancelBinaryOptionsOrder.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "CancelBinaryOptionsOrder", data);
    return promise.then(data => MsgCancelBinaryOptionsOrderResponse.decode(new _m0.Reader(data)));
  }

  batchCancelBinaryOptionsOrders(request: MsgBatchCancelBinaryOptionsOrders): Promise<MsgBatchCancelBinaryOptionsOrdersResponse> {
    const data = MsgBatchCancelBinaryOptionsOrders.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "BatchCancelBinaryOptionsOrders", data);
    return promise.then(data => MsgBatchCancelBinaryOptionsOrdersResponse.decode(new _m0.Reader(data)));
  }

  subaccountTransfer(request: MsgSubaccountTransfer): Promise<MsgSubaccountTransferResponse> {
    const data = MsgSubaccountTransfer.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "SubaccountTransfer", data);
    return promise.then(data => MsgSubaccountTransferResponse.decode(new _m0.Reader(data)));
  }

  externalTransfer(request: MsgExternalTransfer): Promise<MsgExternalTransferResponse> {
    const data = MsgExternalTransfer.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "ExternalTransfer", data);
    return promise.then(data => MsgExternalTransferResponse.decode(new _m0.Reader(data)));
  }

  liquidatePosition(request: MsgLiquidatePosition): Promise<MsgLiquidatePositionResponse> {
    const data = MsgLiquidatePosition.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "LiquidatePosition", data);
    return promise.then(data => MsgLiquidatePositionResponse.decode(new _m0.Reader(data)));
  }

  increasePositionMargin(request: MsgIncreasePositionMargin): Promise<MsgIncreasePositionMarginResponse> {
    const data = MsgIncreasePositionMargin.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "IncreasePositionMargin", data);
    return promise.then(data => MsgIncreasePositionMarginResponse.decode(new _m0.Reader(data)));
  }

  rewardsOptOut(request: MsgRewardsOptOut): Promise<MsgRewardsOptOutResponse> {
    const data = MsgRewardsOptOut.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "RewardsOptOut", data);
    return promise.then(data => MsgRewardsOptOutResponse.decode(new _m0.Reader(data)));
  }

  adminUpdateBinaryOptionsMarket(request: MsgAdminUpdateBinaryOptionsMarket): Promise<MsgAdminUpdateBinaryOptionsMarketResponse> {
    const data = MsgAdminUpdateBinaryOptionsMarket.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "AdminUpdateBinaryOptionsMarket", data);
    return promise.then(data => MsgAdminUpdateBinaryOptionsMarketResponse.decode(new _m0.Reader(data)));
  }

}