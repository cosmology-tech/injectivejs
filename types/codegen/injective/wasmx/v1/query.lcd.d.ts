import { LCDClient } from "@osmonauts/lcd";
import { QueryWasmxParamsRequest, QueryWasmxParamsResponseSDKType, QueryModuleStateRequest, QueryModuleStateResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    wasmxParams(_params?: QueryWasmxParamsRequest): Promise<QueryWasmxParamsResponseSDKType>;
    wasmxModuleState(_params?: QueryModuleStateRequest): Promise<QueryModuleStateResponseSDKType>;
}
