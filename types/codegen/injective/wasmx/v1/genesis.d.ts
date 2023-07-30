import { Params, ParamsSDKType } from "./wasmx";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@cosmology/helpers";
/** GenesisState defines the wasmx module's genesis state. */
export interface GenesisState {
    /** params defines all the parameters of related to wasmx. */
    params: Params;
}
/** GenesisState defines the wasmx module's genesis state. */
export interface GenesisStateSDKType {
    /** params defines all the parameters of related to wasmx. */
    params: ParamsSDKType;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
