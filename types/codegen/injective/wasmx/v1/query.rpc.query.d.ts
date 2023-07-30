import { Rpc } from "@cosmology/helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryWasmxParamsRequest, QueryWasmxParamsResponse, QueryModuleStateRequest, QueryModuleStateResponse } from "./query";
/** Query defines the RPC service */
export interface Query {
    wasmxParams(request?: QueryWasmxParamsRequest): Promise<QueryWasmxParamsResponse>;
    wasmxModuleState(request?: QueryModuleStateRequest): Promise<QueryModuleStateResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    wasmxParams(request?: QueryWasmxParamsRequest): Promise<QueryWasmxParamsResponse>;
    wasmxModuleState(request?: QueryModuleStateRequest): Promise<QueryModuleStateResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    wasmxParams(request?: QueryWasmxParamsRequest): Promise<QueryWasmxParamsResponse>;
    wasmxModuleState(request?: QueryModuleStateRequest): Promise<QueryModuleStateResponse>;
};
