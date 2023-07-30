import { Params, ParamsSDKType } from "./wasmx";
import { GenesisState, GenesisStateSDKType } from "./genesis";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@cosmology/helpers";
/** QueryWasmxParamsRequest is the request type for the Query/WasmxParams RPC method. */
export interface QueryWasmxParamsRequest {
}
/** QueryWasmxParamsRequest is the request type for the Query/WasmxParams RPC method. */
export interface QueryWasmxParamsRequestSDKType {
}
/** QueryWasmxParamsRequest is the response type for the Query/WasmxParams RPC method. */
export interface QueryWasmxParamsResponse {
    params: Params;
}
/** QueryWasmxParamsRequest is the response type for the Query/WasmxParams RPC method. */
export interface QueryWasmxParamsResponseSDKType {
    params: ParamsSDKType;
}
/** QueryModuleStateRequest is the request type for the Query/WasmxModuleState RPC method. */
export interface QueryModuleStateRequest {
}
/** QueryModuleStateRequest is the request type for the Query/WasmxModuleState RPC method. */
export interface QueryModuleStateRequestSDKType {
}
/** QueryModuleStateResponse is the response type for the Query/WasmxModuleState RPC method. */
export interface QueryModuleStateResponse {
    state: GenesisState;
}
/** QueryModuleStateResponse is the response type for the Query/WasmxModuleState RPC method. */
export interface QueryModuleStateResponseSDKType {
    state: GenesisStateSDKType;
}
export declare const QueryWasmxParamsRequest: {
    encode(_: QueryWasmxParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryWasmxParamsRequest;
    fromPartial(_: DeepPartial<QueryWasmxParamsRequest>): QueryWasmxParamsRequest;
};
export declare const QueryWasmxParamsResponse: {
    encode(message: QueryWasmxParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryWasmxParamsResponse;
    fromPartial(object: DeepPartial<QueryWasmxParamsResponse>): QueryWasmxParamsResponse;
};
export declare const QueryModuleStateRequest: {
    encode(_: QueryModuleStateRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryModuleStateRequest;
    fromPartial(_: DeepPartial<QueryModuleStateRequest>): QueryModuleStateRequest;
};
export declare const QueryModuleStateResponse: {
    encode(message: QueryModuleStateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryModuleStateResponse;
    fromPartial(object: DeepPartial<QueryModuleStateResponse>): QueryModuleStateResponse;
};
