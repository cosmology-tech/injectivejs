import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@cosmology/helpers";
/** base header ak message type, we can cast the bytes into corresponding message response type */
export interface TxResponseGenericMessage {
    header: string;
    data: Uint8Array;
}
/** base header ak message type, we can cast the bytes into corresponding message response type */
export interface TxResponseGenericMessageSDKType {
    header: string;
    data: Uint8Array;
}
/** improvised message to unpack length prefixed messages in tx response data */
export interface TxResponseData {
    messages: TxResponseGenericMessage[];
}
/** improvised message to unpack length prefixed messages in tx response data */
export interface TxResponseDataSDKType {
    messages: TxResponseGenericMessageSDKType[];
}
export declare const TxResponseGenericMessage: {
    encode(message: TxResponseGenericMessage, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TxResponseGenericMessage;
    fromPartial(object: DeepPartial<TxResponseGenericMessage>): TxResponseGenericMessage;
};
export declare const TxResponseData: {
    encode(message: TxResponseData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TxResponseData;
    fromPartial(object: DeepPartial<TxResponseData>): TxResponseData;
};
