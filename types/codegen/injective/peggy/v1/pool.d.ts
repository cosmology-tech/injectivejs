import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@cosmology/helpers";
/** IDSet represents a set of IDs */
export interface IDSet {
    /** IDSet represents a set of IDs */
    ids: Long[];
}
/** IDSet represents a set of IDs */
export interface IDSetSDKType {
    /** IDSet represents a set of IDs */
    ids: Long[];
}
export interface BatchFees {
    token: string;
    totalFees: string;
}
export interface BatchFeesSDKType {
    token: string;
    total_fees: string;
}
export declare const IDSet: {
    encode(message: IDSet, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IDSet;
    fromPartial(object: DeepPartial<IDSet>): IDSet;
};
export declare const BatchFees: {
    encode(message: BatchFees, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BatchFees;
    fromPartial(object: DeepPartial<BatchFees>): BatchFees;
};
