import { Params, ParamsSDKType, InsuranceFund, InsuranceFundSDKType } from "./insurance";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { GenesisState, GenesisStateSDKType } from "./genesis";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@cosmology/helpers";
/** QueryInsuranceParamsRequest is the request type for the Query/InsuranceParams RPC method. */

export interface QueryInsuranceParamsRequest { }
/** QueryInsuranceParamsRequest is the request type for the Query/InsuranceParams RPC method. */

export interface QueryInsuranceParamsRequestSDKType { }
/** QueryInsuranceParamsRequest is the response type for the Query/InsuranceParams RPC method. */

export interface QueryInsuranceParamsResponse {
  params: Params;
}
/** QueryInsuranceParamsRequest is the response type for the Query/InsuranceParams RPC method. */

export interface QueryInsuranceParamsResponseSDKType {
  params: ParamsSDKType;
}
/** QueryInsuranceFundRequest is the request type for the Query/InsuranceFunds RPC method. */

export interface QueryInsuranceFundRequest {
  /** Market ID for the market */
  marketId: string;
}
/** QueryInsuranceFundRequest is the request type for the Query/InsuranceFunds RPC method. */

export interface QueryInsuranceFundRequestSDKType {
  /** Market ID for the market */
  market_id: string;
}
/** QueryInsuranceFundResponse is the response type for the Query/InsuranceFund RPC method. */

export interface QueryInsuranceFundResponse {
  fund: InsuranceFund;
}
/** QueryInsuranceFundResponse is the response type for the Query/InsuranceFund RPC method. */

export interface QueryInsuranceFundResponseSDKType {
  fund: InsuranceFundSDKType;
}
/** QueryInsuranceFundsRequest is the request type for the Query/InsuranceFunds RPC method. */

export interface QueryInsuranceFundsRequest { }
/** QueryInsuranceFundsRequest is the request type for the Query/InsuranceFunds RPC method. */

export interface QueryInsuranceFundsRequestSDKType { }
/** QueryInsuranceFundsResponse is the response type for the Query/InsuranceFunds RPC method. */

export interface QueryInsuranceFundsResponse {
  funds: InsuranceFund[];
}
/** QueryInsuranceFundsResponse is the response type for the Query/InsuranceFunds RPC method. */

export interface QueryInsuranceFundsResponseSDKType {
  funds: InsuranceFundSDKType[];
}
/** QueryEstimatedRedemptionsRequest is the request type for the Query/EstimatedRedemptions RPC method. */

export interface QueryEstimatedRedemptionsRequest {
  marketId?: string;
  address?: string;
}
/** QueryEstimatedRedemptionsRequest is the request type for the Query/EstimatedRedemptions RPC method. */

export interface QueryEstimatedRedemptionsRequestSDKType {
  marketId?: string;
  address?: string;
}
/** QueryEstimatedRedemptionsResponse is the response type for the Query/EstimatedRedemptions RPC method. */

export interface QueryEstimatedRedemptionsResponse {
  amount: Coin[];
}
/** QueryEstimatedRedemptionsResponse is the response type for the Query/EstimatedRedemptions RPC method. */

export interface QueryEstimatedRedemptionsResponseSDKType {
  amount: CoinSDKType[];
}
/** QueryPendingRedemptionsRequest is the request type for the Query/PendingRedemptions RPC method. */

export interface QueryPendingRedemptionsRequest {
  marketId?: string;
  address?: string;
}
/** QueryPendingRedemptionsRequest is the request type for the Query/PendingRedemptions RPC method. */

export interface QueryPendingRedemptionsRequestSDKType {
  marketId?: string;
  address?: string;
}
/** QueryPendingRedemptionsResponse is the response type for the Query/PendingRedemptions RPC method. */

export interface QueryPendingRedemptionsResponse {
  amount: Coin[];
}
/** QueryPendingRedemptionsResponse is the response type for the Query/PendingRedemptions RPC method. */

export interface QueryPendingRedemptionsResponseSDKType {
  amount: CoinSDKType[];
}
/** QueryModuleStateRequest is the request type for the Query/InsuranceModuleState RPC method. */

export interface QueryModuleStateRequest { }
/** QueryModuleStateRequest is the request type for the Query/InsuranceModuleState RPC method. */

export interface QueryModuleStateRequestSDKType { }
/** QueryModuleStateResponse is the response type for the Query/InsuranceModuleState RPC method. */

export interface QueryModuleStateResponse {
  state: GenesisState;
}
/** QueryModuleStateResponse is the response type for the Query/InsuranceModuleState RPC method. */

export interface QueryModuleStateResponseSDKType {
  state: GenesisStateSDKType;
}

function createBaseQueryInsuranceParamsRequest(): QueryInsuranceParamsRequest {
  return {};
}

export const QueryInsuranceParamsRequest = {
  encode(_: QueryInsuranceParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryInsuranceParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryInsuranceParamsRequest();

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

  fromPartial(_: DeepPartial<QueryInsuranceParamsRequest>): QueryInsuranceParamsRequest {
    const message = createBaseQueryInsuranceParamsRequest();
    return message;
  }

};

function createBaseQueryInsuranceParamsResponse(): QueryInsuranceParamsResponse {
  return {
    params: undefined
  };
}

export const QueryInsuranceParamsResponse = {
  encode(message: QueryInsuranceParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryInsuranceParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryInsuranceParamsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryInsuranceParamsResponse>): QueryInsuranceParamsResponse {
    const message = createBaseQueryInsuranceParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }

};

function createBaseQueryInsuranceFundRequest(): QueryInsuranceFundRequest {
  return {
    marketId: ""
  };
}

export const QueryInsuranceFundRequest = {
  encode(message: QueryInsuranceFundRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryInsuranceFundRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryInsuranceFundRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryInsuranceFundRequest>): QueryInsuranceFundRequest {
    const message = createBaseQueryInsuranceFundRequest();
    message.marketId = object.marketId ?? "";
    return message;
  }

};

function createBaseQueryInsuranceFundResponse(): QueryInsuranceFundResponse {
  return {
    fund: undefined
  };
}

export const QueryInsuranceFundResponse = {
  encode(message: QueryInsuranceFundResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fund !== undefined) {
      InsuranceFund.encode(message.fund, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryInsuranceFundResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryInsuranceFundResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.fund = InsuranceFund.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryInsuranceFundResponse>): QueryInsuranceFundResponse {
    const message = createBaseQueryInsuranceFundResponse();
    message.fund = object.fund !== undefined && object.fund !== null ? InsuranceFund.fromPartial(object.fund) : undefined;
    return message;
  }

};

function createBaseQueryInsuranceFundsRequest(): QueryInsuranceFundsRequest {
  return {};
}

export const QueryInsuranceFundsRequest = {
  encode(_: QueryInsuranceFundsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryInsuranceFundsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryInsuranceFundsRequest();

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

  fromPartial(_: DeepPartial<QueryInsuranceFundsRequest>): QueryInsuranceFundsRequest {
    const message = createBaseQueryInsuranceFundsRequest();
    return message;
  }

};

function createBaseQueryInsuranceFundsResponse(): QueryInsuranceFundsResponse {
  return {
    funds: []
  };
}

export const QueryInsuranceFundsResponse = {
  encode(message: QueryInsuranceFundsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.funds) {
      InsuranceFund.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryInsuranceFundsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryInsuranceFundsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.funds.push(InsuranceFund.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryInsuranceFundsResponse>): QueryInsuranceFundsResponse {
    const message = createBaseQueryInsuranceFundsResponse();
    message.funds = object.funds?.map(e => InsuranceFund.fromPartial(e)) || [];
    return message;
  }

};

function createBaseQueryEstimatedRedemptionsRequest(): QueryEstimatedRedemptionsRequest {
  return {
    marketId: "",
    address: ""
  };
}

export const QueryEstimatedRedemptionsRequest = {
  encode(message: QueryEstimatedRedemptionsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }

    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryEstimatedRedemptionsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEstimatedRedemptionsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;

        case 2:
          message.address = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryEstimatedRedemptionsRequest>): QueryEstimatedRedemptionsRequest {
    const message = createBaseQueryEstimatedRedemptionsRequest();
    message.marketId = object.marketId ?? "";
    message.address = object.address ?? "";
    return message;
  }

};

function createBaseQueryEstimatedRedemptionsResponse(): QueryEstimatedRedemptionsResponse {
  return {
    amount: []
  };
}

export const QueryEstimatedRedemptionsResponse = {
  encode(message: QueryEstimatedRedemptionsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryEstimatedRedemptionsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEstimatedRedemptionsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryEstimatedRedemptionsResponse>): QueryEstimatedRedemptionsResponse {
    const message = createBaseQueryEstimatedRedemptionsResponse();
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }

};

function createBaseQueryPendingRedemptionsRequest(): QueryPendingRedemptionsRequest {
  return {
    marketId: "",
    address: ""
  };
}

export const QueryPendingRedemptionsRequest = {
  encode(message: QueryPendingRedemptionsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }

    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPendingRedemptionsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPendingRedemptionsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;

        case 2:
          message.address = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryPendingRedemptionsRequest>): QueryPendingRedemptionsRequest {
    const message = createBaseQueryPendingRedemptionsRequest();
    message.marketId = object.marketId ?? "";
    message.address = object.address ?? "";
    return message;
  }

};

function createBaseQueryPendingRedemptionsResponse(): QueryPendingRedemptionsResponse {
  return {
    amount: []
  };
}

export const QueryPendingRedemptionsResponse = {
  encode(message: QueryPendingRedemptionsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPendingRedemptionsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPendingRedemptionsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryPendingRedemptionsResponse>): QueryPendingRedemptionsResponse {
    const message = createBaseQueryPendingRedemptionsResponse();
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }

};

function createBaseQueryModuleStateRequest(): QueryModuleStateRequest {
  return {};
}

export const QueryModuleStateRequest = {
  encode(_: QueryModuleStateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryModuleStateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryModuleStateRequest();

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

  fromPartial(_: DeepPartial<QueryModuleStateRequest>): QueryModuleStateRequest {
    const message = createBaseQueryModuleStateRequest();
    return message;
  }

};

function createBaseQueryModuleStateResponse(): QueryModuleStateResponse {
  return {
    state: undefined
  };
}

export const QueryModuleStateResponse = {
  encode(message: QueryModuleStateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.state !== undefined) {
      GenesisState.encode(message.state, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryModuleStateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryModuleStateResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.state = GenesisState.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryModuleStateResponse>): QueryModuleStateResponse {
    const message = createBaseQueryModuleStateResponse();
    message.state = object.state !== undefined && object.state !== null ? GenesisState.fromPartial(object.state) : undefined;
    return message;
  }

};