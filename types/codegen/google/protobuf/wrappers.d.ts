import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@cosmology/helpers";
/**
 * Wrapper message for `double`.
 *
 * The JSON representation for `DoubleValue` is JSON number.
 */
export interface DoubleValue {
    /** The double value. */
    value: number;
}
/**
 * Wrapper message for `double`.
 *
 * The JSON representation for `DoubleValue` is JSON number.
 */
export interface DoubleValueSDKType {
    /** The double value. */
    value: number;
}
/**
 * Wrapper message for `float`.
 *
 * The JSON representation for `FloatValue` is JSON number.
 */
export interface FloatValue {
    /** The float value. */
    value: number;
}
/**
 * Wrapper message for `float`.
 *
 * The JSON representation for `FloatValue` is JSON number.
 */
export interface FloatValueSDKType {
    /** The float value. */
    value: number;
}
/**
 * Wrapper message for `int64`.
 *
 * The JSON representation for `Int64Value` is JSON string.
 */
export interface Int64Value {
    /** The int64 value. */
    value: Long;
}
/**
 * Wrapper message for `int64`.
 *
 * The JSON representation for `Int64Value` is JSON string.
 */
export interface Int64ValueSDKType {
    /** The int64 value. */
    value: Long;
}
/**
 * Wrapper message for `uint64`.
 *
 * The JSON representation for `UInt64Value` is JSON string.
 */
export interface UInt64Value {
    /** The uint64 value. */
    value: Long;
}
/**
 * Wrapper message for `uint64`.
 *
 * The JSON representation for `UInt64Value` is JSON string.
 */
export interface UInt64ValueSDKType {
    /** The uint64 value. */
    value: Long;
}
/**
 * Wrapper message for `int32`.
 *
 * The JSON representation for `Int32Value` is JSON number.
 */
export interface Int32Value {
    /** The int32 value. */
    value: number;
}
/**
 * Wrapper message for `int32`.
 *
 * The JSON representation for `Int32Value` is JSON number.
 */
export interface Int32ValueSDKType {
    /** The int32 value. */
    value: number;
}
/**
 * Wrapper message for `uint32`.
 *
 * The JSON representation for `UInt32Value` is JSON number.
 */
export interface UInt32Value {
    /** The uint32 value. */
    value: number;
}
/**
 * Wrapper message for `uint32`.
 *
 * The JSON representation for `UInt32Value` is JSON number.
 */
export interface UInt32ValueSDKType {
    /** The uint32 value. */
    value: number;
}
/**
 * Wrapper message for `bool`.
 *
 * The JSON representation for `BoolValue` is JSON `true` and `false`.
 */
export interface BoolValue {
    /** The bool value. */
    value: boolean;
}
/**
 * Wrapper message for `bool`.
 *
 * The JSON representation for `BoolValue` is JSON `true` and `false`.
 */
export interface BoolValueSDKType {
    /** The bool value. */
    value: boolean;
}
/**
 * Wrapper message for `string`.
 *
 * The JSON representation for `StringValue` is JSON string.
 */
export interface StringValue {
    /** The string value. */
    value: string;
}
/**
 * Wrapper message for `string`.
 *
 * The JSON representation for `StringValue` is JSON string.
 */
export interface StringValueSDKType {
    /** The string value. */
    value: string;
}
/**
 * Wrapper message for `bytes`.
 *
 * The JSON representation for `BytesValue` is JSON string.
 */
export interface BytesValue {
    /** The bytes value. */
    value: Uint8Array;
}
/**
 * Wrapper message for `bytes`.
 *
 * The JSON representation for `BytesValue` is JSON string.
 */
export interface BytesValueSDKType {
    /** The bytes value. */
    value: Uint8Array;
}
export declare const DoubleValue: {
    encode(message: DoubleValue, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DoubleValue;
    fromPartial(object: DeepPartial<DoubleValue>): DoubleValue;
};
export declare const FloatValue: {
    encode(message: FloatValue, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FloatValue;
    fromPartial(object: DeepPartial<FloatValue>): FloatValue;
};
export declare const Int64Value: {
    encode(message: Int64Value, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Int64Value;
    fromPartial(object: DeepPartial<Int64Value>): Int64Value;
};
export declare const UInt64Value: {
    encode(message: UInt64Value, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UInt64Value;
    fromPartial(object: DeepPartial<UInt64Value>): UInt64Value;
};
export declare const Int32Value: {
    encode(message: Int32Value, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Int32Value;
    fromPartial(object: DeepPartial<Int32Value>): Int32Value;
};
export declare const UInt32Value: {
    encode(message: UInt32Value, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UInt32Value;
    fromPartial(object: DeepPartial<UInt32Value>): UInt32Value;
};
export declare const BoolValue: {
    encode(message: BoolValue, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BoolValue;
    fromPartial(object: DeepPartial<BoolValue>): BoolValue;
};
export declare const StringValue: {
    encode(message: StringValue, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StringValue;
    fromPartial(object: DeepPartial<StringValue>): StringValue;
};
export declare const BytesValue: {
    encode(message: BytesValue, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BytesValue;
    fromPartial(object: DeepPartial<BytesValue>): BytesValue;
};
