import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
export interface SetChainlinkPriceEvent {
    feedId: string;
    answer: string;
    timestamp: Long;
}
export interface SetChainlinkPriceEventSDKType {
    feed_id: string;
    answer: string;
    timestamp: Long;
}
/** Event type upon set ref */
export interface SetBandPriceEvent {
    relayer: string;
    symbol: string;
    price: string;
    resolveTime: Long;
    requestId: Long;
}
/** Event type upon set ref */
export interface SetBandPriceEventSDKType {
    relayer: string;
    symbol: string;
    price: string;
    resolve_time: Long;
    request_id: Long;
}
export interface SetBandIBCPriceEvent {
    relayer: string;
    symbols: string[];
    prices: string[];
    resolveTime: Long;
    requestId: Long;
    clientId: Long;
}
export interface SetBandIBCPriceEventSDKType {
    relayer: string;
    symbols: string[];
    prices: string[];
    resolve_time: Long;
    request_id: Long;
    client_id: Long;
}
export interface EventBandIBCAckSuccess {
    ackResult: string;
    clientId: Long;
}
export interface EventBandIBCAckSuccessSDKType {
    ack_result: string;
    client_id: Long;
}
export interface EventBandIBCAckError {
    ackError: string;
    clientId: Long;
}
export interface EventBandIBCAckErrorSDKType {
    ack_error: string;
    client_id: Long;
}
export interface EventBandIBCResponseTimeout {
    clientId: Long;
}
export interface EventBandIBCResponseTimeoutSDKType {
    client_id: Long;
}
export interface SetPriceFeedPriceEvent {
    relayer: string;
    base: string;
    quote: string;
    /** price defines the price of the oracle base and quote */
    price: string;
}
export interface SetPriceFeedPriceEventSDKType {
    relayer: string;
    base: string;
    quote: string;
    /** price defines the price of the oracle base and quote */
    price: string;
}
export interface SetProviderPriceEvent {
    provider: string;
    relayer: string;
    symbol: string;
    price: string;
}
export interface SetProviderPriceEventSDKType {
    provider: string;
    relayer: string;
    symbol: string;
    price: string;
}
export interface SetCoinbasePriceEvent {
    symbol: string;
    price: string;
    timestamp: Long;
}
export interface SetCoinbasePriceEventSDKType {
    symbol: string;
    price: string;
    timestamp: Long;
}
export declare const SetChainlinkPriceEvent: {
    encode(message: SetChainlinkPriceEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetChainlinkPriceEvent;
    fromPartial(object: DeepPartial<SetChainlinkPriceEvent>): SetChainlinkPriceEvent;
};
export declare const SetBandPriceEvent: {
    encode(message: SetBandPriceEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetBandPriceEvent;
    fromPartial(object: DeepPartial<SetBandPriceEvent>): SetBandPriceEvent;
};
export declare const SetBandIBCPriceEvent: {
    encode(message: SetBandIBCPriceEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetBandIBCPriceEvent;
    fromPartial(object: DeepPartial<SetBandIBCPriceEvent>): SetBandIBCPriceEvent;
};
export declare const EventBandIBCAckSuccess: {
    encode(message: EventBandIBCAckSuccess, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventBandIBCAckSuccess;
    fromPartial(object: DeepPartial<EventBandIBCAckSuccess>): EventBandIBCAckSuccess;
};
export declare const EventBandIBCAckError: {
    encode(message: EventBandIBCAckError, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventBandIBCAckError;
    fromPartial(object: DeepPartial<EventBandIBCAckError>): EventBandIBCAckError;
};
export declare const EventBandIBCResponseTimeout: {
    encode(message: EventBandIBCResponseTimeout, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventBandIBCResponseTimeout;
    fromPartial(object: DeepPartial<EventBandIBCResponseTimeout>): EventBandIBCResponseTimeout;
};
export declare const SetPriceFeedPriceEvent: {
    encode(message: SetPriceFeedPriceEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetPriceFeedPriceEvent;
    fromPartial(object: DeepPartial<SetPriceFeedPriceEvent>): SetPriceFeedPriceEvent;
};
export declare const SetProviderPriceEvent: {
    encode(message: SetProviderPriceEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetProviderPriceEvent;
    fromPartial(object: DeepPartial<SetProviderPriceEvent>): SetProviderPriceEvent;
};
export declare const SetCoinbasePriceEvent: {
    encode(message: SetCoinbasePriceEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetCoinbasePriceEvent;
    fromPartial(object: DeepPartial<SetCoinbasePriceEvent>): SetCoinbasePriceEvent;
};
