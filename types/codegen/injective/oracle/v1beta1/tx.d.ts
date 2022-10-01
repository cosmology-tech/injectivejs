import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
/** MsgRelayProviderPrice defines a SDK message for setting a price through the provider oracle. */
export interface MsgRelayProviderPrices {
    sender: string;
    provider: string;
    symbols: string[];
    prices: string[];
}
/** MsgRelayProviderPrice defines a SDK message for setting a price through the provider oracle. */
export interface MsgRelayProviderPricesSDKType {
    sender: string;
    provider: string;
    symbols: string[];
    prices: string[];
}
export interface MsgRelayProviderPricesResponse {
}
export interface MsgRelayProviderPricesResponseSDKType {
}
/** MsgRelayPriceFeedPrice defines a SDK message for setting a price through the pricefeed oracle. */
export interface MsgRelayPriceFeedPrice {
    sender: string;
    base: string[];
    quote: string[];
    /** price defines the price of the oracle base and quote */
    price: string[];
}
/** MsgRelayPriceFeedPrice defines a SDK message for setting a price through the pricefeed oracle. */
export interface MsgRelayPriceFeedPriceSDKType {
    sender: string;
    base: string[];
    quote: string[];
    /** price defines the price of the oracle base and quote */
    price: string[];
}
export interface MsgRelayPriceFeedPriceResponse {
}
export interface MsgRelayPriceFeedPriceResponseSDKType {
}
export interface MsgRelayBandRates {
    relayer: string;
    symbols: string[];
    rates: Long[];
    resolveTimes: Long[];
    requestIDs: Long[];
}
export interface MsgRelayBandRatesSDKType {
    relayer: string;
    symbols: string[];
    rates: Long[];
    resolve_times: Long[];
    requestIDs: Long[];
}
export interface MsgRelayBandRatesResponse {
}
export interface MsgRelayBandRatesResponseSDKType {
}
/** MsgRelayCoinbaseMessages defines a SDK message for relaying price messages from Coinbase API. */
export interface MsgRelayCoinbaseMessages {
    sender: string;
    messages: Uint8Array[];
    signatures: Uint8Array[];
}
/** MsgRelayCoinbaseMessages defines a SDK message for relaying price messages from Coinbase API. */
export interface MsgRelayCoinbaseMessagesSDKType {
    sender: string;
    messages: Uint8Array[];
    signatures: Uint8Array[];
}
export interface MsgRelayCoinbaseMessagesResponse {
}
export interface MsgRelayCoinbaseMessagesResponseSDKType {
}
/** MsgRequestBandIBCRates defines a SDK message for requesting data from BandChain using IBC. */
export interface MsgRequestBandIBCRates {
    sender: string;
    requestId: Long;
}
/** MsgRequestBandIBCRates defines a SDK message for requesting data from BandChain using IBC. */
export interface MsgRequestBandIBCRatesSDKType {
    sender: string;
    request_id: Long;
}
/** MsgRequestDataResponse defines the Msg/RequestBandIBCRates response type. */
export interface MsgRequestBandIBCRatesResponse {
}
/** MsgRequestDataResponse defines the Msg/RequestBandIBCRates response type. */
export interface MsgRequestBandIBCRatesResponseSDKType {
}
export declare const MsgRelayProviderPrices: {
    encode(message: MsgRelayProviderPrices, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRelayProviderPrices;
    fromPartial(object: DeepPartial<MsgRelayProviderPrices>): MsgRelayProviderPrices;
};
export declare const MsgRelayProviderPricesResponse: {
    encode(_: MsgRelayProviderPricesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRelayProviderPricesResponse;
    fromPartial(_: DeepPartial<MsgRelayProviderPricesResponse>): MsgRelayProviderPricesResponse;
};
export declare const MsgRelayPriceFeedPrice: {
    encode(message: MsgRelayPriceFeedPrice, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRelayPriceFeedPrice;
    fromPartial(object: DeepPartial<MsgRelayPriceFeedPrice>): MsgRelayPriceFeedPrice;
};
export declare const MsgRelayPriceFeedPriceResponse: {
    encode(_: MsgRelayPriceFeedPriceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRelayPriceFeedPriceResponse;
    fromPartial(_: DeepPartial<MsgRelayPriceFeedPriceResponse>): MsgRelayPriceFeedPriceResponse;
};
export declare const MsgRelayBandRates: {
    encode(message: MsgRelayBandRates, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRelayBandRates;
    fromPartial(object: DeepPartial<MsgRelayBandRates>): MsgRelayBandRates;
};
export declare const MsgRelayBandRatesResponse: {
    encode(_: MsgRelayBandRatesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRelayBandRatesResponse;
    fromPartial(_: DeepPartial<MsgRelayBandRatesResponse>): MsgRelayBandRatesResponse;
};
export declare const MsgRelayCoinbaseMessages: {
    encode(message: MsgRelayCoinbaseMessages, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRelayCoinbaseMessages;
    fromPartial(object: DeepPartial<MsgRelayCoinbaseMessages>): MsgRelayCoinbaseMessages;
};
export declare const MsgRelayCoinbaseMessagesResponse: {
    encode(_: MsgRelayCoinbaseMessagesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRelayCoinbaseMessagesResponse;
    fromPartial(_: DeepPartial<MsgRelayCoinbaseMessagesResponse>): MsgRelayCoinbaseMessagesResponse;
};
export declare const MsgRequestBandIBCRates: {
    encode(message: MsgRequestBandIBCRates, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRequestBandIBCRates;
    fromPartial(object: DeepPartial<MsgRequestBandIBCRates>): MsgRequestBandIBCRates;
};
export declare const MsgRequestBandIBCRatesResponse: {
    encode(_: MsgRequestBandIBCRatesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRequestBandIBCRatesResponse;
    fromPartial(_: DeepPartial<MsgRequestBandIBCRatesResponse>): MsgRequestBandIBCRatesResponse;
};
