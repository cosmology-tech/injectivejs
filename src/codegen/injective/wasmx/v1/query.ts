import { Params, ParamsSDKType } from "./wasmx";
import { GenesisState, GenesisStateSDKType } from "./genesis";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@cosmology/helpers";
/** QueryWasmxParamsRequest is the request type for the Query/WasmxParams RPC method. */

export interface QueryWasmxParamsRequest { }
/** QueryWasmxParamsRequest is the request type for the Query/WasmxParams RPC method. */

export interface QueryWasmxParamsRequestSDKType { }
/** QueryWasmxParamsRequest is the response type for the Query/WasmxParams RPC method. */

export interface QueryWasmxParamsResponse {
  params: Params;
}
/** QueryWasmxParamsRequest is the response type for the Query/WasmxParams RPC method. */

export interface QueryWasmxParamsResponseSDKType {
  params: ParamsSDKType;
}
/** QueryModuleStateRequest is the request type for the Query/WasmxModuleState RPC method. */

export interface QueryModuleStateRequest { }
/** QueryModuleStateRequest is the request type for the Query/WasmxModuleState RPC method. */

export interface QueryModuleStateRequestSDKType { }
/** QueryModuleStateResponse is the response type for the Query/WasmxModuleState RPC method. */

export interface QueryModuleStateResponse {
  state: GenesisState;
}
/** QueryModuleStateResponse is the response type for the Query/WasmxModuleState RPC method. */

export interface QueryModuleStateResponseSDKType {
  state: GenesisStateSDKType;
}

function createBaseQueryWasmxParamsRequest(): QueryWasmxParamsRequest {
  return {};
}

export const QueryWasmxParamsRequest = {
  encode(_: QueryWasmxParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryWasmxParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryWasmxParamsRequest();

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

  fromPartial(_: DeepPartial<QueryWasmxParamsRequest>): QueryWasmxParamsRequest {
    const message = createBaseQueryWasmxParamsRequest();
    return message;
  }

};

function createBaseQueryWasmxParamsResponse(): QueryWasmxParamsResponse {
  return {
    params: undefined
  };
}

export const QueryWasmxParamsResponse = {
  encode(message: QueryWasmxParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryWasmxParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryWasmxParamsResponse();

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

  fromPartial(object: DeepPartial<QueryWasmxParamsResponse>): QueryWasmxParamsResponse {
    const message = createBaseQueryWasmxParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
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