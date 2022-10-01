import { OracleType, OracleTypeSDKType, OracleInfo, OracleInfoSDKType, Params, ParamsSDKType, BandPriceState, BandPriceStateSDKType, PriceFeedState, PriceFeedStateSDKType, CoinbasePriceState, CoinbasePriceStateSDKType, PriceState, PriceStateSDKType, PriceRecords, PriceRecordsSDKType, MetadataStatistics, MetadataStatisticsSDKType, PriceRecord, PriceRecordSDKType, ProviderInfo, ProviderInfoSDKType, ProviderState, ProviderStateSDKType } from "./oracle";
import { GenesisState, GenesisStateSDKType } from "./genesis";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
/** QueryOracleParamsRequest is the request type for the Query/OracleParams RPC method. */
export interface QueryParamsRequest {
}
/** QueryOracleParamsRequest is the request type for the Query/OracleParams RPC method. */
export interface QueryParamsRequestSDKType {
}
/** QueryOracleParamsResponse is the response type for the Query/OracleParams RPC method. */
export interface QueryParamsResponse {
    params: Params;
}
/** QueryOracleParamsResponse is the response type for the Query/OracleParams RPC method. */
export interface QueryParamsResponseSDKType {
    params: ParamsSDKType;
}
/** QueryBandRelayersRequest is the request type for the Query/BandRelayers RPC method. */
export interface QueryBandRelayersRequest {
}
/** QueryBandRelayersRequest is the request type for the Query/BandRelayers RPC method. */
export interface QueryBandRelayersRequestSDKType {
}
/** QueryBandRelayersResponse is the response type for the Query/BandRelayers RPC method. */
export interface QueryBandRelayersResponse {
    relayers: string[];
}
/** QueryBandRelayersResponse is the response type for the Query/BandRelayers RPC method. */
export interface QueryBandRelayersResponseSDKType {
    relayers: string[];
}
/** QueryBandPriceStatesRequest is the request type for the Query/BandPriceStates RPC method. */
export interface QueryBandPriceStatesRequest {
}
/** QueryBandPriceStatesRequest is the request type for the Query/BandPriceStates RPC method. */
export interface QueryBandPriceStatesRequestSDKType {
}
/** QueryBandPriceStatesResponse is the response type for the Query/BandPriceStates RPC method. */
export interface QueryBandPriceStatesResponse {
    priceStates: BandPriceState[];
}
/** QueryBandPriceStatesResponse is the response type for the Query/BandPriceStates RPC method. */
export interface QueryBandPriceStatesResponseSDKType {
    price_states: BandPriceStateSDKType[];
}
/** QueryBandIBCPriceStatesRequest is the request type for the Query/BandIBCPriceStates RPC method. */
export interface QueryBandIBCPriceStatesRequest {
}
/** QueryBandIBCPriceStatesRequest is the request type for the Query/BandIBCPriceStates RPC method. */
export interface QueryBandIBCPriceStatesRequestSDKType {
}
/** QueryBandIBCPriceStatesResponse is the response type for the Query/BandIBCPriceStates RPC method. */
export interface QueryBandIBCPriceStatesResponse {
    priceStates: BandPriceState[];
}
/** QueryBandIBCPriceStatesResponse is the response type for the Query/BandIBCPriceStates RPC method. */
export interface QueryBandIBCPriceStatesResponseSDKType {
    price_states: BandPriceStateSDKType[];
}
/** QueryPriceFeedPriceStatesRequest is the request type for the Query/PriceFeedPriceStates RPC method. */
export interface QueryPriceFeedPriceStatesRequest {
}
/** QueryPriceFeedPriceStatesRequest is the request type for the Query/PriceFeedPriceStates RPC method. */
export interface QueryPriceFeedPriceStatesRequestSDKType {
}
/** QueryPriceFeedPriceStatesResponse is the response type for the Query/PriceFeedPriceStates RPC method. */
export interface QueryPriceFeedPriceStatesResponse {
    priceStates: PriceFeedState[];
}
/** QueryPriceFeedPriceStatesResponse is the response type for the Query/PriceFeedPriceStates RPC method. */
export interface QueryPriceFeedPriceStatesResponseSDKType {
    price_states: PriceFeedStateSDKType[];
}
/** QueryCoinbasePriceStatesRequest is the request type for the Query/CoinbasePriceStates RPC method. */
export interface QueryCoinbasePriceStatesRequest {
}
/** QueryCoinbasePriceStatesRequest is the request type for the Query/CoinbasePriceStates RPC method. */
export interface QueryCoinbasePriceStatesRequestSDKType {
}
/** QueryCoinbasePriceStatesResponse is the response type for the Query/CoinbasePriceStates RPC method. */
export interface QueryCoinbasePriceStatesResponse {
    priceStates: CoinbasePriceState[];
}
/** QueryCoinbasePriceStatesResponse is the response type for the Query/CoinbasePriceStates RPC method. */
export interface QueryCoinbasePriceStatesResponseSDKType {
    price_states: CoinbasePriceStateSDKType[];
}
/** QueryProviderPriceStateRequest is the request type for the Query/ProviderPriceState RPC method. */
export interface QueryProviderPriceStateRequest {
    provider: string;
    symbol: string;
}
/** QueryProviderPriceStateRequest is the request type for the Query/ProviderPriceState RPC method. */
export interface QueryProviderPriceStateRequestSDKType {
    provider: string;
    symbol: string;
}
/** QueryProviderPriceStatesResponse is the response type for the Query/ProviderPriceStates RPC method. */
export interface QueryProviderPriceStateResponse {
    priceState: PriceState;
}
/** QueryProviderPriceStatesResponse is the response type for the Query/ProviderPriceStates RPC method. */
export interface QueryProviderPriceStateResponseSDKType {
    price_state: PriceStateSDKType;
}
/** QueryModuleStateRequest is the request type for the Query/OracleModuleState RPC method. */
export interface QueryModuleStateRequest {
}
/** QueryModuleStateRequest is the request type for the Query/OracleModuleState RPC method. */
export interface QueryModuleStateRequestSDKType {
}
/** QueryModuleStateResponse is the response type for the Query/OracleModuleState RPC method. */
export interface QueryModuleStateResponse {
    state: GenesisState;
}
/** QueryModuleStateResponse is the response type for the Query/OracleModuleState RPC method. */
export interface QueryModuleStateResponseSDKType {
    state: GenesisStateSDKType;
}
export interface QueryHistoricalPriceRecordsRequest {
    oracle?: OracleType;
    symbolId?: string;
}
export interface QueryHistoricalPriceRecordsRequestSDKType {
    oracle?: OracleTypeSDKType;
    symbol_id?: string;
}
export interface QueryHistoricalPriceRecordsResponse {
    priceRecords: PriceRecords[];
}
export interface QueryHistoricalPriceRecordsResponseSDKType {
    price_records: PriceRecordsSDKType[];
}
export interface OracleHistoryOptions {
    /**
     * MaxAge restricts the oracle price records oldest age in seconds from the current block time to consider.
     * A value of 0 means use all the records present on the chain.
     */
    maxAge: Long;
    /** If IncludeRawHistory is true, the raw underlying data used for the computation is included in the response */
    includeRawHistory: boolean;
    /** If IncludeMetadata is true, metadata on the computation is included in the response */
    includeMetadata: boolean;
}
export interface OracleHistoryOptionsSDKType {
    /**
     * MaxAge restricts the oracle price records oldest age in seconds from the current block time to consider.
     * A value of 0 means use all the records present on the chain.
     */
    max_age: Long;
    /** If IncludeRawHistory is true, the raw underlying data used for the computation is included in the response */
    include_raw_history: boolean;
    /** If IncludeMetadata is true, metadata on the computation is included in the response */
    include_metadata: boolean;
}
/** QueryOracleVolatilityRequest is the request type for Query/OracleVolatility RPC method. */
export interface QueryOracleVolatilityRequest {
    baseInfo?: OracleInfo;
    quoteInfo?: OracleInfo;
    oracleHistoryOptions?: OracleHistoryOptions;
}
/** QueryOracleVolatilityRequest is the request type for Query/OracleVolatility RPC method. */
export interface QueryOracleVolatilityRequestSDKType {
    base_info?: OracleInfoSDKType;
    quote_info?: OracleInfoSDKType;
    oracle_history_options?: OracleHistoryOptionsSDKType;
}
/** QueryOracleVolatilityResponse is the response type for Query/OracleVolatility RPC method. */
export interface QueryOracleVolatilityResponse {
    volatility: string;
    historyMetadata: MetadataStatistics;
    rawHistory: PriceRecord[];
}
/** QueryOracleVolatilityResponse is the response type for Query/OracleVolatility RPC method. */
export interface QueryOracleVolatilityResponseSDKType {
    volatility: string;
    history_metadata: MetadataStatisticsSDKType;
    raw_history: PriceRecordSDKType[];
}
export interface QueryOracleProvidersInfoRequest {
}
export interface QueryOracleProvidersInfoRequestSDKType {
}
export interface QueryOracleProvidersInfoResponse {
    providers: ProviderInfo[];
}
export interface QueryOracleProvidersInfoResponseSDKType {
    providers: ProviderInfoSDKType[];
}
export interface QueryOracleProviderPricesRequest {
    provider?: string;
}
export interface QueryOracleProviderPricesRequestSDKType {
    provider?: string;
}
export interface QueryOracleProviderPricesResponse {
    providerState: ProviderState[];
}
export interface QueryOracleProviderPricesResponseSDKType {
    providerState: ProviderStateSDKType[];
}
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse;
};
export declare const QueryBandRelayersRequest: {
    encode(_: QueryBandRelayersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBandRelayersRequest;
    fromPartial(_: DeepPartial<QueryBandRelayersRequest>): QueryBandRelayersRequest;
};
export declare const QueryBandRelayersResponse: {
    encode(message: QueryBandRelayersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBandRelayersResponse;
    fromPartial(object: DeepPartial<QueryBandRelayersResponse>): QueryBandRelayersResponse;
};
export declare const QueryBandPriceStatesRequest: {
    encode(_: QueryBandPriceStatesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBandPriceStatesRequest;
    fromPartial(_: DeepPartial<QueryBandPriceStatesRequest>): QueryBandPriceStatesRequest;
};
export declare const QueryBandPriceStatesResponse: {
    encode(message: QueryBandPriceStatesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBandPriceStatesResponse;
    fromPartial(object: DeepPartial<QueryBandPriceStatesResponse>): QueryBandPriceStatesResponse;
};
export declare const QueryBandIBCPriceStatesRequest: {
    encode(_: QueryBandIBCPriceStatesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBandIBCPriceStatesRequest;
    fromPartial(_: DeepPartial<QueryBandIBCPriceStatesRequest>): QueryBandIBCPriceStatesRequest;
};
export declare const QueryBandIBCPriceStatesResponse: {
    encode(message: QueryBandIBCPriceStatesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBandIBCPriceStatesResponse;
    fromPartial(object: DeepPartial<QueryBandIBCPriceStatesResponse>): QueryBandIBCPriceStatesResponse;
};
export declare const QueryPriceFeedPriceStatesRequest: {
    encode(_: QueryPriceFeedPriceStatesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPriceFeedPriceStatesRequest;
    fromPartial(_: DeepPartial<QueryPriceFeedPriceStatesRequest>): QueryPriceFeedPriceStatesRequest;
};
export declare const QueryPriceFeedPriceStatesResponse: {
    encode(message: QueryPriceFeedPriceStatesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPriceFeedPriceStatesResponse;
    fromPartial(object: DeepPartial<QueryPriceFeedPriceStatesResponse>): QueryPriceFeedPriceStatesResponse;
};
export declare const QueryCoinbasePriceStatesRequest: {
    encode(_: QueryCoinbasePriceStatesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCoinbasePriceStatesRequest;
    fromPartial(_: DeepPartial<QueryCoinbasePriceStatesRequest>): QueryCoinbasePriceStatesRequest;
};
export declare const QueryCoinbasePriceStatesResponse: {
    encode(message: QueryCoinbasePriceStatesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCoinbasePriceStatesResponse;
    fromPartial(object: DeepPartial<QueryCoinbasePriceStatesResponse>): QueryCoinbasePriceStatesResponse;
};
export declare const QueryProviderPriceStateRequest: {
    encode(message: QueryProviderPriceStateRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryProviderPriceStateRequest;
    fromPartial(object: DeepPartial<QueryProviderPriceStateRequest>): QueryProviderPriceStateRequest;
};
export declare const QueryProviderPriceStateResponse: {
    encode(message: QueryProviderPriceStateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryProviderPriceStateResponse;
    fromPartial(object: DeepPartial<QueryProviderPriceStateResponse>): QueryProviderPriceStateResponse;
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
export declare const QueryHistoricalPriceRecordsRequest: {
    encode(message: QueryHistoricalPriceRecordsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryHistoricalPriceRecordsRequest;
    fromPartial(object: DeepPartial<QueryHistoricalPriceRecordsRequest>): QueryHistoricalPriceRecordsRequest;
};
export declare const QueryHistoricalPriceRecordsResponse: {
    encode(message: QueryHistoricalPriceRecordsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryHistoricalPriceRecordsResponse;
    fromPartial(object: DeepPartial<QueryHistoricalPriceRecordsResponse>): QueryHistoricalPriceRecordsResponse;
};
export declare const OracleHistoryOptions: {
    encode(message: OracleHistoryOptions, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OracleHistoryOptions;
    fromPartial(object: DeepPartial<OracleHistoryOptions>): OracleHistoryOptions;
};
export declare const QueryOracleVolatilityRequest: {
    encode(message: QueryOracleVolatilityRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryOracleVolatilityRequest;
    fromPartial(object: DeepPartial<QueryOracleVolatilityRequest>): QueryOracleVolatilityRequest;
};
export declare const QueryOracleVolatilityResponse: {
    encode(message: QueryOracleVolatilityResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryOracleVolatilityResponse;
    fromPartial(object: DeepPartial<QueryOracleVolatilityResponse>): QueryOracleVolatilityResponse;
};
export declare const QueryOracleProvidersInfoRequest: {
    encode(_: QueryOracleProvidersInfoRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryOracleProvidersInfoRequest;
    fromPartial(_: DeepPartial<QueryOracleProvidersInfoRequest>): QueryOracleProvidersInfoRequest;
};
export declare const QueryOracleProvidersInfoResponse: {
    encode(message: QueryOracleProvidersInfoResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryOracleProvidersInfoResponse;
    fromPartial(object: DeepPartial<QueryOracleProvidersInfoResponse>): QueryOracleProvidersInfoResponse;
};
export declare const QueryOracleProviderPricesRequest: {
    encode(message: QueryOracleProviderPricesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryOracleProviderPricesRequest;
    fromPartial(object: DeepPartial<QueryOracleProviderPricesRequest>): QueryOracleProviderPricesRequest;
};
export declare const QueryOracleProviderPricesResponse: {
    encode(message: QueryOracleProviderPricesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryOracleProviderPricesResponse;
    fromPartial(object: DeepPartial<QueryOracleProviderPricesResponse>): QueryOracleProviderPricesResponse;
};
