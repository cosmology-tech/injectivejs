import { OracleType, OracleTypeSDKType, OracleInfo, OracleInfoSDKType, Params, ParamsSDKType, BandPriceState, BandPriceStateSDKType, PriceFeedState, PriceFeedStateSDKType, CoinbasePriceState, CoinbasePriceStateSDKType, PriceState, PriceStateSDKType, PriceRecords, PriceRecordsSDKType, MetadataStatistics, MetadataStatisticsSDKType, PriceRecord, PriceRecordSDKType, ProviderInfo, ProviderInfoSDKType, ProviderState, ProviderStateSDKType } from "./oracle";
import { GenesisState, GenesisStateSDKType } from "./genesis";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
/** QueryOracleParamsRequest is the request type for the Query/OracleParams RPC method. */

export interface QueryParamsRequest {}
/** QueryOracleParamsRequest is the request type for the Query/OracleParams RPC method. */

export interface QueryParamsRequestSDKType {}
/** QueryOracleParamsResponse is the response type for the Query/OracleParams RPC method. */

export interface QueryParamsResponse {
  params: Params;
}
/** QueryOracleParamsResponse is the response type for the Query/OracleParams RPC method. */

export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
/** QueryBandRelayersRequest is the request type for the Query/BandRelayers RPC method. */

export interface QueryBandRelayersRequest {}
/** QueryBandRelayersRequest is the request type for the Query/BandRelayers RPC method. */

export interface QueryBandRelayersRequestSDKType {}
/** QueryBandRelayersResponse is the response type for the Query/BandRelayers RPC method. */

export interface QueryBandRelayersResponse {
  relayers: string[];
}
/** QueryBandRelayersResponse is the response type for the Query/BandRelayers RPC method. */

export interface QueryBandRelayersResponseSDKType {
  relayers: string[];
}
/** QueryBandPriceStatesRequest is the request type for the Query/BandPriceStates RPC method. */

export interface QueryBandPriceStatesRequest {}
/** QueryBandPriceStatesRequest is the request type for the Query/BandPriceStates RPC method. */

export interface QueryBandPriceStatesRequestSDKType {}
/** QueryBandPriceStatesResponse is the response type for the Query/BandPriceStates RPC method. */

export interface QueryBandPriceStatesResponse {
  priceStates: BandPriceState[];
}
/** QueryBandPriceStatesResponse is the response type for the Query/BandPriceStates RPC method. */

export interface QueryBandPriceStatesResponseSDKType {
  price_states: BandPriceStateSDKType[];
}
/** QueryBandIBCPriceStatesRequest is the request type for the Query/BandIBCPriceStates RPC method. */

export interface QueryBandIBCPriceStatesRequest {}
/** QueryBandIBCPriceStatesRequest is the request type for the Query/BandIBCPriceStates RPC method. */

export interface QueryBandIBCPriceStatesRequestSDKType {}
/** QueryBandIBCPriceStatesResponse is the response type for the Query/BandIBCPriceStates RPC method. */

export interface QueryBandIBCPriceStatesResponse {
  priceStates: BandPriceState[];
}
/** QueryBandIBCPriceStatesResponse is the response type for the Query/BandIBCPriceStates RPC method. */

export interface QueryBandIBCPriceStatesResponseSDKType {
  price_states: BandPriceStateSDKType[];
}
/** QueryPriceFeedPriceStatesRequest is the request type for the Query/PriceFeedPriceStates RPC method. */

export interface QueryPriceFeedPriceStatesRequest {}
/** QueryPriceFeedPriceStatesRequest is the request type for the Query/PriceFeedPriceStates RPC method. */

export interface QueryPriceFeedPriceStatesRequestSDKType {}
/** QueryPriceFeedPriceStatesResponse is the response type for the Query/PriceFeedPriceStates RPC method. */

export interface QueryPriceFeedPriceStatesResponse {
  priceStates: PriceFeedState[];
}
/** QueryPriceFeedPriceStatesResponse is the response type for the Query/PriceFeedPriceStates RPC method. */

export interface QueryPriceFeedPriceStatesResponseSDKType {
  price_states: PriceFeedStateSDKType[];
}
/** QueryCoinbasePriceStatesRequest is the request type for the Query/CoinbasePriceStates RPC method. */

export interface QueryCoinbasePriceStatesRequest {}
/** QueryCoinbasePriceStatesRequest is the request type for the Query/CoinbasePriceStates RPC method. */

export interface QueryCoinbasePriceStatesRequestSDKType {}
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

export interface QueryModuleStateRequest {}
/** QueryModuleStateRequest is the request type for the Query/OracleModuleState RPC method. */

export interface QueryModuleStateRequestSDKType {}
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
export interface QueryOracleProvidersInfoRequest {}
export interface QueryOracleProvidersInfoRequestSDKType {}
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

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  }

};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: undefined
  };
}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }

};

function createBaseQueryBandRelayersRequest(): QueryBandRelayersRequest {
  return {};
}

export const QueryBandRelayersRequest = {
  encode(_: QueryBandRelayersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBandRelayersRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBandRelayersRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(_: DeepPartial<QueryBandRelayersRequest>): QueryBandRelayersRequest {
    const message = createBaseQueryBandRelayersRequest();
    return message;
  }

};

function createBaseQueryBandRelayersResponse(): QueryBandRelayersResponse {
  return {
    relayers: []
  };
}

export const QueryBandRelayersResponse = {
  encode(message: QueryBandRelayersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.relayers) {
      writer.uint32(10).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBandRelayersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBandRelayersResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.relayers.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryBandRelayersResponse>): QueryBandRelayersResponse {
    const message = createBaseQueryBandRelayersResponse();
    message.relayers = object.relayers?.map(e => e) || [];
    return message;
  }

};

function createBaseQueryBandPriceStatesRequest(): QueryBandPriceStatesRequest {
  return {};
}

export const QueryBandPriceStatesRequest = {
  encode(_: QueryBandPriceStatesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBandPriceStatesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBandPriceStatesRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(_: DeepPartial<QueryBandPriceStatesRequest>): QueryBandPriceStatesRequest {
    const message = createBaseQueryBandPriceStatesRequest();
    return message;
  }

};

function createBaseQueryBandPriceStatesResponse(): QueryBandPriceStatesResponse {
  return {
    priceStates: []
  };
}

export const QueryBandPriceStatesResponse = {
  encode(message: QueryBandPriceStatesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.priceStates) {
      BandPriceState.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBandPriceStatesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBandPriceStatesResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.priceStates.push(BandPriceState.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryBandPriceStatesResponse>): QueryBandPriceStatesResponse {
    const message = createBaseQueryBandPriceStatesResponse();
    message.priceStates = object.priceStates?.map(e => BandPriceState.fromPartial(e)) || [];
    return message;
  }

};

function createBaseQueryBandIBCPriceStatesRequest(): QueryBandIBCPriceStatesRequest {
  return {};
}

export const QueryBandIBCPriceStatesRequest = {
  encode(_: QueryBandIBCPriceStatesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBandIBCPriceStatesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBandIBCPriceStatesRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(_: DeepPartial<QueryBandIBCPriceStatesRequest>): QueryBandIBCPriceStatesRequest {
    const message = createBaseQueryBandIBCPriceStatesRequest();
    return message;
  }

};

function createBaseQueryBandIBCPriceStatesResponse(): QueryBandIBCPriceStatesResponse {
  return {
    priceStates: []
  };
}

export const QueryBandIBCPriceStatesResponse = {
  encode(message: QueryBandIBCPriceStatesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.priceStates) {
      BandPriceState.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBandIBCPriceStatesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBandIBCPriceStatesResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.priceStates.push(BandPriceState.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryBandIBCPriceStatesResponse>): QueryBandIBCPriceStatesResponse {
    const message = createBaseQueryBandIBCPriceStatesResponse();
    message.priceStates = object.priceStates?.map(e => BandPriceState.fromPartial(e)) || [];
    return message;
  }

};

function createBaseQueryPriceFeedPriceStatesRequest(): QueryPriceFeedPriceStatesRequest {
  return {};
}

export const QueryPriceFeedPriceStatesRequest = {
  encode(_: QueryPriceFeedPriceStatesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPriceFeedPriceStatesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPriceFeedPriceStatesRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(_: DeepPartial<QueryPriceFeedPriceStatesRequest>): QueryPriceFeedPriceStatesRequest {
    const message = createBaseQueryPriceFeedPriceStatesRequest();
    return message;
  }

};

function createBaseQueryPriceFeedPriceStatesResponse(): QueryPriceFeedPriceStatesResponse {
  return {
    priceStates: []
  };
}

export const QueryPriceFeedPriceStatesResponse = {
  encode(message: QueryPriceFeedPriceStatesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.priceStates) {
      PriceFeedState.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPriceFeedPriceStatesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPriceFeedPriceStatesResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.priceStates.push(PriceFeedState.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryPriceFeedPriceStatesResponse>): QueryPriceFeedPriceStatesResponse {
    const message = createBaseQueryPriceFeedPriceStatesResponse();
    message.priceStates = object.priceStates?.map(e => PriceFeedState.fromPartial(e)) || [];
    return message;
  }

};

function createBaseQueryCoinbasePriceStatesRequest(): QueryCoinbasePriceStatesRequest {
  return {};
}

export const QueryCoinbasePriceStatesRequest = {
  encode(_: QueryCoinbasePriceStatesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCoinbasePriceStatesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCoinbasePriceStatesRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(_: DeepPartial<QueryCoinbasePriceStatesRequest>): QueryCoinbasePriceStatesRequest {
    const message = createBaseQueryCoinbasePriceStatesRequest();
    return message;
  }

};

function createBaseQueryCoinbasePriceStatesResponse(): QueryCoinbasePriceStatesResponse {
  return {
    priceStates: []
  };
}

export const QueryCoinbasePriceStatesResponse = {
  encode(message: QueryCoinbasePriceStatesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.priceStates) {
      CoinbasePriceState.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCoinbasePriceStatesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCoinbasePriceStatesResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.priceStates.push(CoinbasePriceState.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryCoinbasePriceStatesResponse>): QueryCoinbasePriceStatesResponse {
    const message = createBaseQueryCoinbasePriceStatesResponse();
    message.priceStates = object.priceStates?.map(e => CoinbasePriceState.fromPartial(e)) || [];
    return message;
  }

};

function createBaseQueryProviderPriceStateRequest(): QueryProviderPriceStateRequest {
  return {
    provider: "",
    symbol: ""
  };
}

export const QueryProviderPriceStateRequest = {
  encode(message: QueryProviderPriceStateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.provider !== "") {
      writer.uint32(10).string(message.provider);
    }

    if (message.symbol !== "") {
      writer.uint32(18).string(message.symbol);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryProviderPriceStateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProviderPriceStateRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.provider = reader.string();
          break;

        case 2:
          message.symbol = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryProviderPriceStateRequest>): QueryProviderPriceStateRequest {
    const message = createBaseQueryProviderPriceStateRequest();
    message.provider = object.provider ?? "";
    message.symbol = object.symbol ?? "";
    return message;
  }

};

function createBaseQueryProviderPriceStateResponse(): QueryProviderPriceStateResponse {
  return {
    priceState: undefined
  };
}

export const QueryProviderPriceStateResponse = {
  encode(message: QueryProviderPriceStateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.priceState !== undefined) {
      PriceState.encode(message.priceState, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryProviderPriceStateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProviderPriceStateResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.priceState = PriceState.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryProviderPriceStateResponse>): QueryProviderPriceStateResponse {
    const message = createBaseQueryProviderPriceStateResponse();
    message.priceState = object.priceState !== undefined && object.priceState !== null ? PriceState.fromPartial(object.priceState) : undefined;
    return message;
  }

};

function createBaseQueryModuleStateRequest(): QueryModuleStateRequest {
  return {};
}

export const QueryModuleStateRequest = {
  encode(_: QueryModuleStateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryModuleStateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryModuleStateRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(_: DeepPartial<QueryModuleStateRequest>): QueryModuleStateRequest {
    const message = createBaseQueryModuleStateRequest();
    return message;
  }

};

function createBaseQueryModuleStateResponse(): QueryModuleStateResponse {
  return {
    state: undefined
  };
}

export const QueryModuleStateResponse = {
  encode(message: QueryModuleStateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.state !== undefined) {
      GenesisState.encode(message.state, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryModuleStateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryModuleStateResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.state = GenesisState.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryModuleStateResponse>): QueryModuleStateResponse {
    const message = createBaseQueryModuleStateResponse();
    message.state = object.state !== undefined && object.state !== null ? GenesisState.fromPartial(object.state) : undefined;
    return message;
  }

};

function createBaseQueryHistoricalPriceRecordsRequest(): QueryHistoricalPriceRecordsRequest {
  return {
    oracle: 0,
    symbolId: ""
  };
}

export const QueryHistoricalPriceRecordsRequest = {
  encode(message: QueryHistoricalPriceRecordsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.oracle !== 0) {
      writer.uint32(8).int32(message.oracle);
    }

    if (message.symbolId !== "") {
      writer.uint32(18).string(message.symbolId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryHistoricalPriceRecordsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryHistoricalPriceRecordsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.oracle = (reader.int32() as any);
          break;

        case 2:
          message.symbolId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryHistoricalPriceRecordsRequest>): QueryHistoricalPriceRecordsRequest {
    const message = createBaseQueryHistoricalPriceRecordsRequest();
    message.oracle = object.oracle ?? 0;
    message.symbolId = object.symbolId ?? "";
    return message;
  }

};

function createBaseQueryHistoricalPriceRecordsResponse(): QueryHistoricalPriceRecordsResponse {
  return {
    priceRecords: []
  };
}

export const QueryHistoricalPriceRecordsResponse = {
  encode(message: QueryHistoricalPriceRecordsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.priceRecords) {
      PriceRecords.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryHistoricalPriceRecordsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryHistoricalPriceRecordsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.priceRecords.push(PriceRecords.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryHistoricalPriceRecordsResponse>): QueryHistoricalPriceRecordsResponse {
    const message = createBaseQueryHistoricalPriceRecordsResponse();
    message.priceRecords = object.priceRecords?.map(e => PriceRecords.fromPartial(e)) || [];
    return message;
  }

};

function createBaseOracleHistoryOptions(): OracleHistoryOptions {
  return {
    maxAge: Long.UZERO,
    includeRawHistory: false,
    includeMetadata: false
  };
}

export const OracleHistoryOptions = {
  encode(message: OracleHistoryOptions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.maxAge.isZero()) {
      writer.uint32(8).uint64(message.maxAge);
    }

    if (message.includeRawHistory === true) {
      writer.uint32(16).bool(message.includeRawHistory);
    }

    if (message.includeMetadata === true) {
      writer.uint32(24).bool(message.includeMetadata);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OracleHistoryOptions {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOracleHistoryOptions();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.maxAge = (reader.uint64() as Long);
          break;

        case 2:
          message.includeRawHistory = reader.bool();
          break;

        case 3:
          message.includeMetadata = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<OracleHistoryOptions>): OracleHistoryOptions {
    const message = createBaseOracleHistoryOptions();
    message.maxAge = object.maxAge !== undefined && object.maxAge !== null ? Long.fromValue(object.maxAge) : Long.UZERO;
    message.includeRawHistory = object.includeRawHistory ?? false;
    message.includeMetadata = object.includeMetadata ?? false;
    return message;
  }

};

function createBaseQueryOracleVolatilityRequest(): QueryOracleVolatilityRequest {
  return {
    baseInfo: undefined,
    quoteInfo: undefined,
    oracleHistoryOptions: undefined
  };
}

export const QueryOracleVolatilityRequest = {
  encode(message: QueryOracleVolatilityRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.baseInfo !== undefined) {
      OracleInfo.encode(message.baseInfo, writer.uint32(10).fork()).ldelim();
    }

    if (message.quoteInfo !== undefined) {
      OracleInfo.encode(message.quoteInfo, writer.uint32(18).fork()).ldelim();
    }

    if (message.oracleHistoryOptions !== undefined) {
      OracleHistoryOptions.encode(message.oracleHistoryOptions, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryOracleVolatilityRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOracleVolatilityRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.baseInfo = OracleInfo.decode(reader, reader.uint32());
          break;

        case 2:
          message.quoteInfo = OracleInfo.decode(reader, reader.uint32());
          break;

        case 3:
          message.oracleHistoryOptions = OracleHistoryOptions.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryOracleVolatilityRequest>): QueryOracleVolatilityRequest {
    const message = createBaseQueryOracleVolatilityRequest();
    message.baseInfo = object.baseInfo !== undefined && object.baseInfo !== null ? OracleInfo.fromPartial(object.baseInfo) : undefined;
    message.quoteInfo = object.quoteInfo !== undefined && object.quoteInfo !== null ? OracleInfo.fromPartial(object.quoteInfo) : undefined;
    message.oracleHistoryOptions = object.oracleHistoryOptions !== undefined && object.oracleHistoryOptions !== null ? OracleHistoryOptions.fromPartial(object.oracleHistoryOptions) : undefined;
    return message;
  }

};

function createBaseQueryOracleVolatilityResponse(): QueryOracleVolatilityResponse {
  return {
    volatility: "",
    historyMetadata: undefined,
    rawHistory: []
  };
}

export const QueryOracleVolatilityResponse = {
  encode(message: QueryOracleVolatilityResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.volatility !== "") {
      writer.uint32(10).string(message.volatility);
    }

    if (message.historyMetadata !== undefined) {
      MetadataStatistics.encode(message.historyMetadata, writer.uint32(18).fork()).ldelim();
    }

    for (const v of message.rawHistory) {
      PriceRecord.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryOracleVolatilityResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOracleVolatilityResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.volatility = reader.string();
          break;

        case 2:
          message.historyMetadata = MetadataStatistics.decode(reader, reader.uint32());
          break;

        case 3:
          message.rawHistory.push(PriceRecord.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryOracleVolatilityResponse>): QueryOracleVolatilityResponse {
    const message = createBaseQueryOracleVolatilityResponse();
    message.volatility = object.volatility ?? "";
    message.historyMetadata = object.historyMetadata !== undefined && object.historyMetadata !== null ? MetadataStatistics.fromPartial(object.historyMetadata) : undefined;
    message.rawHistory = object.rawHistory?.map(e => PriceRecord.fromPartial(e)) || [];
    return message;
  }

};

function createBaseQueryOracleProvidersInfoRequest(): QueryOracleProvidersInfoRequest {
  return {};
}

export const QueryOracleProvidersInfoRequest = {
  encode(_: QueryOracleProvidersInfoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryOracleProvidersInfoRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOracleProvidersInfoRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(_: DeepPartial<QueryOracleProvidersInfoRequest>): QueryOracleProvidersInfoRequest {
    const message = createBaseQueryOracleProvidersInfoRequest();
    return message;
  }

};

function createBaseQueryOracleProvidersInfoResponse(): QueryOracleProvidersInfoResponse {
  return {
    providers: []
  };
}

export const QueryOracleProvidersInfoResponse = {
  encode(message: QueryOracleProvidersInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.providers) {
      ProviderInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryOracleProvidersInfoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOracleProvidersInfoResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.providers.push(ProviderInfo.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryOracleProvidersInfoResponse>): QueryOracleProvidersInfoResponse {
    const message = createBaseQueryOracleProvidersInfoResponse();
    message.providers = object.providers?.map(e => ProviderInfo.fromPartial(e)) || [];
    return message;
  }

};

function createBaseQueryOracleProviderPricesRequest(): QueryOracleProviderPricesRequest {
  return {
    provider: ""
  };
}

export const QueryOracleProviderPricesRequest = {
  encode(message: QueryOracleProviderPricesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.provider !== "") {
      writer.uint32(10).string(message.provider);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryOracleProviderPricesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOracleProviderPricesRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.provider = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryOracleProviderPricesRequest>): QueryOracleProviderPricesRequest {
    const message = createBaseQueryOracleProviderPricesRequest();
    message.provider = object.provider ?? "";
    return message;
  }

};

function createBaseQueryOracleProviderPricesResponse(): QueryOracleProviderPricesResponse {
  return {
    providerState: []
  };
}

export const QueryOracleProviderPricesResponse = {
  encode(message: QueryOracleProviderPricesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.providerState) {
      ProviderState.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryOracleProviderPricesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOracleProviderPricesResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.providerState.push(ProviderState.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryOracleProviderPricesResponse>): QueryOracleProviderPricesResponse {
    const message = createBaseQueryOracleProviderPricesResponse();
    message.providerState = object.providerState?.map(e => ProviderState.fromPartial(e)) || [];
    return message;
  }

};