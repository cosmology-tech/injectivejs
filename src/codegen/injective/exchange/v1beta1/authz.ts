import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/** spot authz messages */

export interface CreateSpotLimitOrderAuthz {
  subaccountId: string;
  marketIds: string[];
}
/** spot authz messages */

export interface CreateSpotLimitOrderAuthzSDKType {
  subaccount_id: string;
  market_ids: string[];
}
export interface CreateSpotMarketOrderAuthz {
  subaccountId: string;
  marketIds: string[];
}
export interface CreateSpotMarketOrderAuthzSDKType {
  subaccount_id: string;
  market_ids: string[];
}
export interface BatchCreateSpotLimitOrdersAuthz {
  subaccountId: string;
  marketIds: string[];
}
export interface BatchCreateSpotLimitOrdersAuthzSDKType {
  subaccount_id: string;
  market_ids: string[];
}
export interface CancelSpotOrderAuthz {
  subaccountId: string;
  marketIds: string[];
}
export interface CancelSpotOrderAuthzSDKType {
  subaccount_id: string;
  market_ids: string[];
}
export interface BatchCancelSpotOrdersAuthz {
  subaccountId: string;
  marketIds: string[];
}
export interface BatchCancelSpotOrdersAuthzSDKType {
  subaccount_id: string;
  market_ids: string[];
}
/** derivative authz messages */

export interface CreateDerivativeLimitOrderAuthz {
  subaccountId: string;
  marketIds: string[];
}
/** derivative authz messages */

export interface CreateDerivativeLimitOrderAuthzSDKType {
  subaccount_id: string;
  market_ids: string[];
}
export interface CreateDerivativeMarketOrderAuthz {
  subaccountId: string;
  marketIds: string[];
}
export interface CreateDerivativeMarketOrderAuthzSDKType {
  subaccount_id: string;
  market_ids: string[];
}
export interface BatchCreateDerivativeLimitOrdersAuthz {
  subaccountId: string;
  marketIds: string[];
}
export interface BatchCreateDerivativeLimitOrdersAuthzSDKType {
  subaccount_id: string;
  market_ids: string[];
}
export interface CancelDerivativeOrderAuthz {
  subaccountId: string;
  marketIds: string[];
}
export interface CancelDerivativeOrderAuthzSDKType {
  subaccount_id: string;
  market_ids: string[];
}
export interface BatchCancelDerivativeOrdersAuthz {
  subaccountId: string;
  marketIds: string[];
}
export interface BatchCancelDerivativeOrdersAuthzSDKType {
  subaccount_id: string;
  market_ids: string[];
}
/** common authz message used in both spot & derivative markets */

export interface BatchUpdateOrdersAuthz {
  subaccountId: string;
  spotMarkets: string[];
  derivativeMarkets: string[];
}
/** common authz message used in both spot & derivative markets */

export interface BatchUpdateOrdersAuthzSDKType {
  subaccount_id: string;
  spot_markets: string[];
  derivative_markets: string[];
}

function createBaseCreateSpotLimitOrderAuthz(): CreateSpotLimitOrderAuthz {
  return {
    subaccountId: "",
    marketIds: []
  };
}

export const CreateSpotLimitOrderAuthz = {
  encode(message: CreateSpotLimitOrderAuthz, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.subaccountId !== "") {
      writer.uint32(10).string(message.subaccountId);
    }

    for (const v of message.marketIds) {
      writer.uint32(18).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateSpotLimitOrderAuthz {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateSpotLimitOrderAuthz();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.subaccountId = reader.string();
          break;

        case 2:
          message.marketIds.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<CreateSpotLimitOrderAuthz>): CreateSpotLimitOrderAuthz {
    const message = createBaseCreateSpotLimitOrderAuthz();
    message.subaccountId = object.subaccountId ?? "";
    message.marketIds = object.marketIds?.map(e => e) || [];
    return message;
  }

};

function createBaseCreateSpotMarketOrderAuthz(): CreateSpotMarketOrderAuthz {
  return {
    subaccountId: "",
    marketIds: []
  };
}

export const CreateSpotMarketOrderAuthz = {
  encode(message: CreateSpotMarketOrderAuthz, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.subaccountId !== "") {
      writer.uint32(10).string(message.subaccountId);
    }

    for (const v of message.marketIds) {
      writer.uint32(18).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateSpotMarketOrderAuthz {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateSpotMarketOrderAuthz();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.subaccountId = reader.string();
          break;

        case 2:
          message.marketIds.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<CreateSpotMarketOrderAuthz>): CreateSpotMarketOrderAuthz {
    const message = createBaseCreateSpotMarketOrderAuthz();
    message.subaccountId = object.subaccountId ?? "";
    message.marketIds = object.marketIds?.map(e => e) || [];
    return message;
  }

};

function createBaseBatchCreateSpotLimitOrdersAuthz(): BatchCreateSpotLimitOrdersAuthz {
  return {
    subaccountId: "",
    marketIds: []
  };
}

export const BatchCreateSpotLimitOrdersAuthz = {
  encode(message: BatchCreateSpotLimitOrdersAuthz, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.subaccountId !== "") {
      writer.uint32(10).string(message.subaccountId);
    }

    for (const v of message.marketIds) {
      writer.uint32(18).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BatchCreateSpotLimitOrdersAuthz {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBatchCreateSpotLimitOrdersAuthz();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.subaccountId = reader.string();
          break;

        case 2:
          message.marketIds.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<BatchCreateSpotLimitOrdersAuthz>): BatchCreateSpotLimitOrdersAuthz {
    const message = createBaseBatchCreateSpotLimitOrdersAuthz();
    message.subaccountId = object.subaccountId ?? "";
    message.marketIds = object.marketIds?.map(e => e) || [];
    return message;
  }

};

function createBaseCancelSpotOrderAuthz(): CancelSpotOrderAuthz {
  return {
    subaccountId: "",
    marketIds: []
  };
}

export const CancelSpotOrderAuthz = {
  encode(message: CancelSpotOrderAuthz, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.subaccountId !== "") {
      writer.uint32(10).string(message.subaccountId);
    }

    for (const v of message.marketIds) {
      writer.uint32(18).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CancelSpotOrderAuthz {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCancelSpotOrderAuthz();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.subaccountId = reader.string();
          break;

        case 2:
          message.marketIds.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<CancelSpotOrderAuthz>): CancelSpotOrderAuthz {
    const message = createBaseCancelSpotOrderAuthz();
    message.subaccountId = object.subaccountId ?? "";
    message.marketIds = object.marketIds?.map(e => e) || [];
    return message;
  }

};

function createBaseBatchCancelSpotOrdersAuthz(): BatchCancelSpotOrdersAuthz {
  return {
    subaccountId: "",
    marketIds: []
  };
}

export const BatchCancelSpotOrdersAuthz = {
  encode(message: BatchCancelSpotOrdersAuthz, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.subaccountId !== "") {
      writer.uint32(10).string(message.subaccountId);
    }

    for (const v of message.marketIds) {
      writer.uint32(18).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BatchCancelSpotOrdersAuthz {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBatchCancelSpotOrdersAuthz();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.subaccountId = reader.string();
          break;

        case 2:
          message.marketIds.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<BatchCancelSpotOrdersAuthz>): BatchCancelSpotOrdersAuthz {
    const message = createBaseBatchCancelSpotOrdersAuthz();
    message.subaccountId = object.subaccountId ?? "";
    message.marketIds = object.marketIds?.map(e => e) || [];
    return message;
  }

};

function createBaseCreateDerivativeLimitOrderAuthz(): CreateDerivativeLimitOrderAuthz {
  return {
    subaccountId: "",
    marketIds: []
  };
}

export const CreateDerivativeLimitOrderAuthz = {
  encode(message: CreateDerivativeLimitOrderAuthz, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.subaccountId !== "") {
      writer.uint32(10).string(message.subaccountId);
    }

    for (const v of message.marketIds) {
      writer.uint32(18).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateDerivativeLimitOrderAuthz {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateDerivativeLimitOrderAuthz();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.subaccountId = reader.string();
          break;

        case 2:
          message.marketIds.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<CreateDerivativeLimitOrderAuthz>): CreateDerivativeLimitOrderAuthz {
    const message = createBaseCreateDerivativeLimitOrderAuthz();
    message.subaccountId = object.subaccountId ?? "";
    message.marketIds = object.marketIds?.map(e => e) || [];
    return message;
  }

};

function createBaseCreateDerivativeMarketOrderAuthz(): CreateDerivativeMarketOrderAuthz {
  return {
    subaccountId: "",
    marketIds: []
  };
}

export const CreateDerivativeMarketOrderAuthz = {
  encode(message: CreateDerivativeMarketOrderAuthz, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.subaccountId !== "") {
      writer.uint32(10).string(message.subaccountId);
    }

    for (const v of message.marketIds) {
      writer.uint32(18).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateDerivativeMarketOrderAuthz {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateDerivativeMarketOrderAuthz();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.subaccountId = reader.string();
          break;

        case 2:
          message.marketIds.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<CreateDerivativeMarketOrderAuthz>): CreateDerivativeMarketOrderAuthz {
    const message = createBaseCreateDerivativeMarketOrderAuthz();
    message.subaccountId = object.subaccountId ?? "";
    message.marketIds = object.marketIds?.map(e => e) || [];
    return message;
  }

};

function createBaseBatchCreateDerivativeLimitOrdersAuthz(): BatchCreateDerivativeLimitOrdersAuthz {
  return {
    subaccountId: "",
    marketIds: []
  };
}

export const BatchCreateDerivativeLimitOrdersAuthz = {
  encode(message: BatchCreateDerivativeLimitOrdersAuthz, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.subaccountId !== "") {
      writer.uint32(10).string(message.subaccountId);
    }

    for (const v of message.marketIds) {
      writer.uint32(18).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BatchCreateDerivativeLimitOrdersAuthz {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBatchCreateDerivativeLimitOrdersAuthz();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.subaccountId = reader.string();
          break;

        case 2:
          message.marketIds.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<BatchCreateDerivativeLimitOrdersAuthz>): BatchCreateDerivativeLimitOrdersAuthz {
    const message = createBaseBatchCreateDerivativeLimitOrdersAuthz();
    message.subaccountId = object.subaccountId ?? "";
    message.marketIds = object.marketIds?.map(e => e) || [];
    return message;
  }

};

function createBaseCancelDerivativeOrderAuthz(): CancelDerivativeOrderAuthz {
  return {
    subaccountId: "",
    marketIds: []
  };
}

export const CancelDerivativeOrderAuthz = {
  encode(message: CancelDerivativeOrderAuthz, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.subaccountId !== "") {
      writer.uint32(10).string(message.subaccountId);
    }

    for (const v of message.marketIds) {
      writer.uint32(18).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CancelDerivativeOrderAuthz {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCancelDerivativeOrderAuthz();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.subaccountId = reader.string();
          break;

        case 2:
          message.marketIds.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<CancelDerivativeOrderAuthz>): CancelDerivativeOrderAuthz {
    const message = createBaseCancelDerivativeOrderAuthz();
    message.subaccountId = object.subaccountId ?? "";
    message.marketIds = object.marketIds?.map(e => e) || [];
    return message;
  }

};

function createBaseBatchCancelDerivativeOrdersAuthz(): BatchCancelDerivativeOrdersAuthz {
  return {
    subaccountId: "",
    marketIds: []
  };
}

export const BatchCancelDerivativeOrdersAuthz = {
  encode(message: BatchCancelDerivativeOrdersAuthz, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.subaccountId !== "") {
      writer.uint32(10).string(message.subaccountId);
    }

    for (const v of message.marketIds) {
      writer.uint32(18).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BatchCancelDerivativeOrdersAuthz {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBatchCancelDerivativeOrdersAuthz();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.subaccountId = reader.string();
          break;

        case 2:
          message.marketIds.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<BatchCancelDerivativeOrdersAuthz>): BatchCancelDerivativeOrdersAuthz {
    const message = createBaseBatchCancelDerivativeOrdersAuthz();
    message.subaccountId = object.subaccountId ?? "";
    message.marketIds = object.marketIds?.map(e => e) || [];
    return message;
  }

};

function createBaseBatchUpdateOrdersAuthz(): BatchUpdateOrdersAuthz {
  return {
    subaccountId: "",
    spotMarkets: [],
    derivativeMarkets: []
  };
}

export const BatchUpdateOrdersAuthz = {
  encode(message: BatchUpdateOrdersAuthz, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.subaccountId !== "") {
      writer.uint32(10).string(message.subaccountId);
    }

    for (const v of message.spotMarkets) {
      writer.uint32(18).string(v!);
    }

    for (const v of message.derivativeMarkets) {
      writer.uint32(26).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BatchUpdateOrdersAuthz {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBatchUpdateOrdersAuthz();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.subaccountId = reader.string();
          break;

        case 2:
          message.spotMarkets.push(reader.string());
          break;

        case 3:
          message.derivativeMarkets.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<BatchUpdateOrdersAuthz>): BatchUpdateOrdersAuthz {
    const message = createBaseBatchUpdateOrdersAuthz();
    message.subaccountId = object.subaccountId ?? "";
    message.spotMarkets = object.spotMarkets?.map(e => e) || [];
    message.derivativeMarkets = object.derivativeMarkets?.map(e => e) || [];
    return message;
  }

};