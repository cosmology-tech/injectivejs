import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@cosmology/helpers";
export enum OracleType {
  Unspecified = 0,
  Band = 1,
  PriceFeed = 2,
  Coinbase = 3,
  Chainlink = 4,
  Razor = 5,
  Dia = 6,
  API3 = 7,
  Uma = 8,
  Pyth = 9,
  BandIBC = 10,
  Provider = 11,
  UNRECOGNIZED = -1,
}
export enum OracleTypeSDKType {
  Unspecified = 0,
  Band = 1,
  PriceFeed = 2,
  Coinbase = 3,
  Chainlink = 4,
  Razor = 5,
  Dia = 6,
  API3 = 7,
  Uma = 8,
  Pyth = 9,
  BandIBC = 10,
  Provider = 11,
  UNRECOGNIZED = -1,
}
export function oracleTypeFromJSON(object: any): OracleType {
  switch (object) {
    case 0:
    case "Unspecified":
      return OracleType.Unspecified;

    case 1:
    case "Band":
      return OracleType.Band;

    case 2:
    case "PriceFeed":
      return OracleType.PriceFeed;

    case 3:
    case "Coinbase":
      return OracleType.Coinbase;

    case 4:
    case "Chainlink":
      return OracleType.Chainlink;

    case 5:
    case "Razor":
      return OracleType.Razor;

    case 6:
    case "Dia":
      return OracleType.Dia;

    case 7:
    case "API3":
      return OracleType.API3;

    case 8:
    case "Uma":
      return OracleType.Uma;

    case 9:
    case "Pyth":
      return OracleType.Pyth;

    case 10:
    case "BandIBC":
      return OracleType.BandIBC;

    case 11:
    case "Provider":
      return OracleType.Provider;

    case -1:
    case "UNRECOGNIZED":
    default:
      return OracleType.UNRECOGNIZED;
  }
}
export function oracleTypeToJSON(object: OracleType): string {
  switch (object) {
    case OracleType.Unspecified:
      return "Unspecified";

    case OracleType.Band:
      return "Band";

    case OracleType.PriceFeed:
      return "PriceFeed";

    case OracleType.Coinbase:
      return "Coinbase";

    case OracleType.Chainlink:
      return "Chainlink";

    case OracleType.Razor:
      return "Razor";

    case OracleType.Dia:
      return "Dia";

    case OracleType.API3:
      return "API3";

    case OracleType.Uma:
      return "Uma";

    case OracleType.Pyth:
      return "Pyth";

    case OracleType.BandIBC:
      return "BandIBC";

    case OracleType.Provider:
      return "Provider";

    default:
      return "UNKNOWN";
  }
}
export interface Params { }
export interface ParamsSDKType { }
export interface OracleInfo {
  symbol: string;
  oracleType: OracleType;
  scaleFactor: number;
}
export interface OracleInfoSDKType {
  symbol: string;
  oracle_type: OracleTypeSDKType;
  scale_factor: number;
}
export interface ChainlinkPriceState {
  feedId: string;
  answer: string;
  timestamp: Long;
  priceState: PriceState;
}
export interface ChainlinkPriceStateSDKType {
  feed_id: string;
  answer: string;
  timestamp: Long;
  price_state: PriceStateSDKType;
}
export interface BandPriceState {
  symbol: string;
  rate: string;
  resolveTime: Long;
  request_ID: Long;
  priceState: PriceState;
}
export interface BandPriceStateSDKType {
  symbol: string;
  rate: string;
  resolve_time: Long;
  request_ID: Long;
  price_state: PriceStateSDKType;
}
export interface PriceFeedState {
  base: string;
  quote: string;
  priceState: PriceState;
  relayers: string[];
}
export interface PriceFeedStateSDKType {
  base: string;
  quote: string;
  price_state: PriceStateSDKType;
  relayers: string[];
}
export interface ProviderInfo {
  provider: string;
  relayers: string[];
}
export interface ProviderInfoSDKType {
  provider: string;
  relayers: string[];
}
export interface ProviderState {
  providerInfo: ProviderInfo;
  providerPriceStates: ProviderPriceState[];
}
export interface ProviderStateSDKType {
  provider_info: ProviderInfoSDKType;
  provider_price_states: ProviderPriceStateSDKType[];
}
export interface ProviderPriceState {
  symbol: string;
  state: PriceState;
}
export interface ProviderPriceStateSDKType {
  symbol: string;
  state: PriceStateSDKType;
}
export interface PriceFeedInfo {
  base: string;
  quote: string;
}
export interface PriceFeedInfoSDKType {
  base: string;
  quote: string;
}
export interface PriceFeedPrice {
  price: string;
}
export interface PriceFeedPriceSDKType {
  price: string;
}
export interface CoinbasePriceState {
  /** kind should always be "prices" */
  kind: string;
  /** timestamp of the when the price was signed by coinbase */

  timestamp: Long;
  /** the symbol of the price, e.g. BTC */

  key: string;
  /** the value of the price scaled by 1e6 */

  value: Long;
  /** the price state */

  priceState: PriceState;
}
export interface CoinbasePriceStateSDKType {
  /** kind should always be "prices" */
  kind: string;
  /** timestamp of the when the price was signed by coinbase */

  timestamp: Long;
  /** the symbol of the price, e.g. BTC */

  key: string;
  /** the value of the price scaled by 1e6 */

  value: Long;
  /** the price state */

  price_state: PriceStateSDKType;
}
export interface PriceState {
  price: string;
  cumulativePrice: string;
  timestamp: Long;
}
export interface PriceStateSDKType {
  price: string;
  cumulative_price: string;
  timestamp: Long;
}
export interface BandOracleRequest {
  /** Unique Identifier for band ibc oracle request */
  requestId: Long;
  /** OracleScriptID is the unique identifier of the oracle script to be executed. */

  oracleScriptId: Long;
  /** Symbols is the list of symbols to prepare in the calldata */

  symbols: string[];
  /**
   * AskCount is the number of validators that are requested to respond to this
   * oracle request. Higher value means more security, at a higher gas cost.
   */

  askCount: Long;
  /**
   * MinCount is the minimum number of validators necessary for the request to
   * proceed to the execution phase. Higher value means more security, at the
   * cost of liveness.
   */

  minCount: Long;
  /** FeeLimit is the maximum tokens that will be paid to all data source providers. */

  feeLimit: Coin[];
  /** PrepareGas is amount of gas to pay to prepare raw requests */

  prepareGas: Long;
  /** ExecuteGas is amount of gas to reserve for executing */

  executeGas: Long;
}
export interface BandOracleRequestSDKType {
  /** Unique Identifier for band ibc oracle request */
  request_id: Long;
  /** OracleScriptID is the unique identifier of the oracle script to be executed. */

  oracle_script_id: Long;
  /** Symbols is the list of symbols to prepare in the calldata */

  symbols: string[];
  /**
   * AskCount is the number of validators that are requested to respond to this
   * oracle request. Higher value means more security, at a higher gas cost.
   */

  ask_count: Long;
  /**
   * MinCount is the minimum number of validators necessary for the request to
   * proceed to the execution phase. Higher value means more security, at the
   * cost of liveness.
   */

  min_count: Long;
  /** FeeLimit is the maximum tokens that will be paid to all data source providers. */

  fee_limit: CoinSDKType[];
  /** PrepareGas is amount of gas to pay to prepare raw requests */

  prepare_gas: Long;
  /** ExecuteGas is amount of gas to reserve for executing */

  execute_gas: Long;
}
export interface BandIBCParams {
  /** true if Band IBC should be enabled */
  bandIbcEnabled: boolean;
  /** block request interval to send Band IBC prices */

  ibcRequestInterval: Long;
  /** band IBC source channel */

  ibcSourceChannel: string;
  /** band IBC version */

  ibcVersion: string;
  /** band IBC portID */

  ibcPortId: string;
}
export interface BandIBCParamsSDKType {
  /** true if Band IBC should be enabled */
  band_ibc_enabled: boolean;
  /** block request interval to send Band IBC prices */

  ibc_request_interval: Long;
  /** band IBC source channel */

  ibc_source_channel: string;
  /** band IBC version */

  ibc_version: string;
  /** band IBC portID */

  ibc_port_id: string;
}
export interface SymbolPriceTimestamp {
  oracle: OracleType;
  symbolId: string;
  timestamp: Long;
}
export interface SymbolPriceTimestampSDKType {
  oracle: OracleTypeSDKType;
  symbol_id: string;
  timestamp: Long;
}
export interface LastPriceTimestamps {
  lastPriceTimestamps: SymbolPriceTimestamp[];
}
export interface LastPriceTimestampsSDKType {
  last_price_timestamps: SymbolPriceTimestampSDKType[];
}
export interface PriceRecords {
  oracle: OracleType;
  symbolId: string;
  latestPriceRecords: PriceRecord[];
}
export interface PriceRecordsSDKType {
  oracle: OracleTypeSDKType;
  symbol_id: string;
  latest_price_records: PriceRecordSDKType[];
}
export interface PriceRecord {
  timestamp: Long;
  price: string;
}
export interface PriceRecordSDKType {
  timestamp: Long;
  price: string;
}
/** MetadataStatistics refers to the metadata summary statistics of the historical sample considered */

export interface MetadataStatistics {
  /** GroupCount refers to the number of groups used. Equals RecordsSampleSize if no grouping is used */
  groupCount: number;
  /** RecordsSampleSize refers to the total number of records used. */

  recordsSampleSize: number;
  /**
   * Mean refers to the arithmetic mean
   * For trades, the mean is the VWAP computed over the grouped trade records ∑ (price * quantity) / ∑ quantity
   * For oracle prices, the mean is computed over the price records ∑ (price) / prices_count
   */

  mean: string;
  /** TWAP refers to the time-weighted average price which equals ∑ (price_i * ∆t_i) / ∑ ∆t_i where ∆t_i = t_i - t_{i-1} */

  twap: string;
  /** FirstTimestamp is the timestamp of the oldest record considered */

  firstTimestamp: Long;
  /** LastTimestamp is the timestamp of the youngest record considered */

  lastTimestamp: Long;
  /** MinPrice refers to the smallest individual raw price considered */

  minPrice: string;
  /** MaxPrice refers to the largest individual raw price considered */

  maxPrice: string;
  /** MedianPrice refers to the median individual raw price considered */

  medianPrice: string;
}
/** MetadataStatistics refers to the metadata summary statistics of the historical sample considered */

export interface MetadataStatisticsSDKType {
  /** GroupCount refers to the number of groups used. Equals RecordsSampleSize if no grouping is used */
  group_count: number;
  /** RecordsSampleSize refers to the total number of records used. */

  records_sample_size: number;
  /**
   * Mean refers to the arithmetic mean
   * For trades, the mean is the VWAP computed over the grouped trade records ∑ (price * quantity) / ∑ quantity
   * For oracle prices, the mean is computed over the price records ∑ (price) / prices_count
   */

  mean: string;
  /** TWAP refers to the time-weighted average price which equals ∑ (price_i * ∆t_i) / ∑ ∆t_i where ∆t_i = t_i - t_{i-1} */

  twap: string;
  /** FirstTimestamp is the timestamp of the oldest record considered */

  first_timestamp: Long;
  /** LastTimestamp is the timestamp of the youngest record considered */

  last_timestamp: Long;
  /** MinPrice refers to the smallest individual raw price considered */

  min_price: string;
  /** MaxPrice refers to the largest individual raw price considered */

  max_price: string;
  /** MedianPrice refers to the median individual raw price considered */

  median_price: string;
}

function createBaseParams(): Params {
  return {};
}

export const Params = {
  encode(_: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();

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

  fromPartial(_: DeepPartial<Params>): Params {
    const message = createBaseParams();
    return message;
  }

};

function createBaseOracleInfo(): OracleInfo {
  return {
    symbol: "",
    oracleType: 0,
    scaleFactor: 0
  };
}

export const OracleInfo = {
  encode(message: OracleInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.symbol !== "") {
      writer.uint32(10).string(message.symbol);
    }

    if (message.oracleType !== 0) {
      writer.uint32(16).int32(message.oracleType);
    }

    if (message.scaleFactor !== 0) {
      writer.uint32(24).uint32(message.scaleFactor);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OracleInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOracleInfo();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.symbol = reader.string();
          break;

        case 2:
          message.oracleType = (reader.int32() as any);
          break;

        case 3:
          message.scaleFactor = reader.uint32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<OracleInfo>): OracleInfo {
    const message = createBaseOracleInfo();
    message.symbol = object.symbol ?? "";
    message.oracleType = object.oracleType ?? 0;
    message.scaleFactor = object.scaleFactor ?? 0;
    return message;
  }

};

function createBaseChainlinkPriceState(): ChainlinkPriceState {
  return {
    feedId: "",
    answer: "",
    timestamp: Long.UZERO,
    priceState: undefined
  };
}

export const ChainlinkPriceState = {
  encode(message: ChainlinkPriceState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.feedId !== "") {
      writer.uint32(10).string(message.feedId);
    }

    if (message.answer !== "") {
      writer.uint32(18).string(message.answer);
    }

    if (!message.timestamp.isZero()) {
      writer.uint32(24).uint64(message.timestamp);
    }

    if (message.priceState !== undefined) {
      PriceState.encode(message.priceState, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChainlinkPriceState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChainlinkPriceState();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.feedId = reader.string();
          break;

        case 2:
          message.answer = reader.string();
          break;

        case 3:
          message.timestamp = (reader.uint64() as Long);
          break;

        case 4:
          message.priceState = PriceState.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<ChainlinkPriceState>): ChainlinkPriceState {
    const message = createBaseChainlinkPriceState();
    message.feedId = object.feedId ?? "";
    message.answer = object.answer ?? "";
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? Long.fromValue(object.timestamp) : Long.UZERO;
    message.priceState = object.priceState !== undefined && object.priceState !== null ? PriceState.fromPartial(object.priceState) : undefined;
    return message;
  }

};

function createBaseBandPriceState(): BandPriceState {
  return {
    symbol: "",
    rate: "",
    resolveTime: Long.UZERO,
    request_ID: Long.UZERO,
    priceState: undefined
  };
}

export const BandPriceState = {
  encode(message: BandPriceState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.symbol !== "") {
      writer.uint32(10).string(message.symbol);
    }

    if (message.rate !== "") {
      writer.uint32(18).string(message.rate);
    }

    if (!message.resolveTime.isZero()) {
      writer.uint32(24).uint64(message.resolveTime);
    }

    if (!message.request_ID.isZero()) {
      writer.uint32(32).uint64(message.request_ID);
    }

    if (message.priceState !== undefined) {
      PriceState.encode(message.priceState, writer.uint32(42).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BandPriceState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBandPriceState();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.symbol = reader.string();
          break;

        case 2:
          message.rate = reader.string();
          break;

        case 3:
          message.resolveTime = (reader.uint64() as Long);
          break;

        case 4:
          message.request_ID = (reader.uint64() as Long);
          break;

        case 5:
          message.priceState = PriceState.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<BandPriceState>): BandPriceState {
    const message = createBaseBandPriceState();
    message.symbol = object.symbol ?? "";
    message.rate = object.rate ?? "";
    message.resolveTime = object.resolveTime !== undefined && object.resolveTime !== null ? Long.fromValue(object.resolveTime) : Long.UZERO;
    message.request_ID = object.request_ID !== undefined && object.request_ID !== null ? Long.fromValue(object.request_ID) : Long.UZERO;
    message.priceState = object.priceState !== undefined && object.priceState !== null ? PriceState.fromPartial(object.priceState) : undefined;
    return message;
  }

};

function createBasePriceFeedState(): PriceFeedState {
  return {
    base: "",
    quote: "",
    priceState: undefined,
    relayers: []
  };
}

export const PriceFeedState = {
  encode(message: PriceFeedState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.base !== "") {
      writer.uint32(10).string(message.base);
    }

    if (message.quote !== "") {
      writer.uint32(18).string(message.quote);
    }

    if (message.priceState !== undefined) {
      PriceState.encode(message.priceState, writer.uint32(26).fork()).ldelim();
    }

    for (const v of message.relayers) {
      writer.uint32(34).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PriceFeedState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePriceFeedState();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.base = reader.string();
          break;

        case 2:
          message.quote = reader.string();
          break;

        case 3:
          message.priceState = PriceState.decode(reader, reader.uint32());
          break;

        case 4:
          message.relayers.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<PriceFeedState>): PriceFeedState {
    const message = createBasePriceFeedState();
    message.base = object.base ?? "";
    message.quote = object.quote ?? "";
    message.priceState = object.priceState !== undefined && object.priceState !== null ? PriceState.fromPartial(object.priceState) : undefined;
    message.relayers = object.relayers?.map(e => e) || [];
    return message;
  }

};

function createBaseProviderInfo(): ProviderInfo {
  return {
    provider: "",
    relayers: []
  };
}

export const ProviderInfo = {
  encode(message: ProviderInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.provider !== "") {
      writer.uint32(10).string(message.provider);
    }

    for (const v of message.relayers) {
      writer.uint32(18).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProviderInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProviderInfo();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.provider = reader.string();
          break;

        case 2:
          message.relayers.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<ProviderInfo>): ProviderInfo {
    const message = createBaseProviderInfo();
    message.provider = object.provider ?? "";
    message.relayers = object.relayers?.map(e => e) || [];
    return message;
  }

};

function createBaseProviderState(): ProviderState {
  return {
    providerInfo: undefined,
    providerPriceStates: []
  };
}

export const ProviderState = {
  encode(message: ProviderState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.providerInfo !== undefined) {
      ProviderInfo.encode(message.providerInfo, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.providerPriceStates) {
      ProviderPriceState.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProviderState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProviderState();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.providerInfo = ProviderInfo.decode(reader, reader.uint32());
          break;

        case 2:
          message.providerPriceStates.push(ProviderPriceState.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<ProviderState>): ProviderState {
    const message = createBaseProviderState();
    message.providerInfo = object.providerInfo !== undefined && object.providerInfo !== null ? ProviderInfo.fromPartial(object.providerInfo) : undefined;
    message.providerPriceStates = object.providerPriceStates?.map(e => ProviderPriceState.fromPartial(e)) || [];
    return message;
  }

};

function createBaseProviderPriceState(): ProviderPriceState {
  return {
    symbol: "",
    state: undefined
  };
}

export const ProviderPriceState = {
  encode(message: ProviderPriceState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.symbol !== "") {
      writer.uint32(10).string(message.symbol);
    }

    if (message.state !== undefined) {
      PriceState.encode(message.state, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProviderPriceState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProviderPriceState();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.symbol = reader.string();
          break;

        case 2:
          message.state = PriceState.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<ProviderPriceState>): ProviderPriceState {
    const message = createBaseProviderPriceState();
    message.symbol = object.symbol ?? "";
    message.state = object.state !== undefined && object.state !== null ? PriceState.fromPartial(object.state) : undefined;
    return message;
  }

};

function createBasePriceFeedInfo(): PriceFeedInfo {
  return {
    base: "",
    quote: ""
  };
}

export const PriceFeedInfo = {
  encode(message: PriceFeedInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.base !== "") {
      writer.uint32(10).string(message.base);
    }

    if (message.quote !== "") {
      writer.uint32(18).string(message.quote);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PriceFeedInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePriceFeedInfo();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.base = reader.string();
          break;

        case 2:
          message.quote = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<PriceFeedInfo>): PriceFeedInfo {
    const message = createBasePriceFeedInfo();
    message.base = object.base ?? "";
    message.quote = object.quote ?? "";
    return message;
  }

};

function createBasePriceFeedPrice(): PriceFeedPrice {
  return {
    price: ""
  };
}

export const PriceFeedPrice = {
  encode(message: PriceFeedPrice, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.price !== "") {
      writer.uint32(10).string(message.price);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PriceFeedPrice {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePriceFeedPrice();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.price = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<PriceFeedPrice>): PriceFeedPrice {
    const message = createBasePriceFeedPrice();
    message.price = object.price ?? "";
    return message;
  }

};

function createBaseCoinbasePriceState(): CoinbasePriceState {
  return {
    kind: "",
    timestamp: Long.UZERO,
    key: "",
    value: Long.UZERO,
    priceState: undefined
  };
}

export const CoinbasePriceState = {
  encode(message: CoinbasePriceState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.kind !== "") {
      writer.uint32(10).string(message.kind);
    }

    if (!message.timestamp.isZero()) {
      writer.uint32(16).uint64(message.timestamp);
    }

    if (message.key !== "") {
      writer.uint32(26).string(message.key);
    }

    if (!message.value.isZero()) {
      writer.uint32(32).uint64(message.value);
    }

    if (message.priceState !== undefined) {
      PriceState.encode(message.priceState, writer.uint32(42).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CoinbasePriceState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCoinbasePriceState();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.kind = reader.string();
          break;

        case 2:
          message.timestamp = (reader.uint64() as Long);
          break;

        case 3:
          message.key = reader.string();
          break;

        case 4:
          message.value = (reader.uint64() as Long);
          break;

        case 5:
          message.priceState = PriceState.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<CoinbasePriceState>): CoinbasePriceState {
    const message = createBaseCoinbasePriceState();
    message.kind = object.kind ?? "";
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? Long.fromValue(object.timestamp) : Long.UZERO;
    message.key = object.key ?? "";
    message.value = object.value !== undefined && object.value !== null ? Long.fromValue(object.value) : Long.UZERO;
    message.priceState = object.priceState !== undefined && object.priceState !== null ? PriceState.fromPartial(object.priceState) : undefined;
    return message;
  }

};

function createBasePriceState(): PriceState {
  return {
    price: "",
    cumulativePrice: "",
    timestamp: Long.ZERO
  };
}

export const PriceState = {
  encode(message: PriceState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.price !== "") {
      writer.uint32(10).string(message.price);
    }

    if (message.cumulativePrice !== "") {
      writer.uint32(18).string(message.cumulativePrice);
    }

    if (!message.timestamp.isZero()) {
      writer.uint32(24).int64(message.timestamp);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PriceState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePriceState();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.price = reader.string();
          break;

        case 2:
          message.cumulativePrice = reader.string();
          break;

        case 3:
          message.timestamp = (reader.int64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<PriceState>): PriceState {
    const message = createBasePriceState();
    message.price = object.price ?? "";
    message.cumulativePrice = object.cumulativePrice ?? "";
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? Long.fromValue(object.timestamp) : Long.ZERO;
    return message;
  }

};

function createBaseBandOracleRequest(): BandOracleRequest {
  return {
    requestId: Long.UZERO,
    oracleScriptId: Long.ZERO,
    symbols: [],
    askCount: Long.UZERO,
    minCount: Long.UZERO,
    feeLimit: [],
    prepareGas: Long.UZERO,
    executeGas: Long.UZERO
  };
}

export const BandOracleRequest = {
  encode(message: BandOracleRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.requestId.isZero()) {
      writer.uint32(8).uint64(message.requestId);
    }

    if (!message.oracleScriptId.isZero()) {
      writer.uint32(16).int64(message.oracleScriptId);
    }

    for (const v of message.symbols) {
      writer.uint32(26).string(v!);
    }

    if (!message.askCount.isZero()) {
      writer.uint32(32).uint64(message.askCount);
    }

    if (!message.minCount.isZero()) {
      writer.uint32(40).uint64(message.minCount);
    }

    for (const v of message.feeLimit) {
      Coin.encode(v!, writer.uint32(50).fork()).ldelim();
    }

    if (!message.prepareGas.isZero()) {
      writer.uint32(56).uint64(message.prepareGas);
    }

    if (!message.executeGas.isZero()) {
      writer.uint32(64).uint64(message.executeGas);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BandOracleRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBandOracleRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.requestId = (reader.uint64() as Long);
          break;

        case 2:
          message.oracleScriptId = (reader.int64() as Long);
          break;

        case 3:
          message.symbols.push(reader.string());
          break;

        case 4:
          message.askCount = (reader.uint64() as Long);
          break;

        case 5:
          message.minCount = (reader.uint64() as Long);
          break;

        case 6:
          message.feeLimit.push(Coin.decode(reader, reader.uint32()));
          break;

        case 7:
          message.prepareGas = (reader.uint64() as Long);
          break;

        case 8:
          message.executeGas = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<BandOracleRequest>): BandOracleRequest {
    const message = createBaseBandOracleRequest();
    message.requestId = object.requestId !== undefined && object.requestId !== null ? Long.fromValue(object.requestId) : Long.UZERO;
    message.oracleScriptId = object.oracleScriptId !== undefined && object.oracleScriptId !== null ? Long.fromValue(object.oracleScriptId) : Long.ZERO;
    message.symbols = object.symbols?.map(e => e) || [];
    message.askCount = object.askCount !== undefined && object.askCount !== null ? Long.fromValue(object.askCount) : Long.UZERO;
    message.minCount = object.minCount !== undefined && object.minCount !== null ? Long.fromValue(object.minCount) : Long.UZERO;
    message.feeLimit = object.feeLimit?.map(e => Coin.fromPartial(e)) || [];
    message.prepareGas = object.prepareGas !== undefined && object.prepareGas !== null ? Long.fromValue(object.prepareGas) : Long.UZERO;
    message.executeGas = object.executeGas !== undefined && object.executeGas !== null ? Long.fromValue(object.executeGas) : Long.UZERO;
    return message;
  }

};

function createBaseBandIBCParams(): BandIBCParams {
  return {
    bandIbcEnabled: false,
    ibcRequestInterval: Long.ZERO,
    ibcSourceChannel: "",
    ibcVersion: "",
    ibcPortId: ""
  };
}

export const BandIBCParams = {
  encode(message: BandIBCParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bandIbcEnabled === true) {
      writer.uint32(8).bool(message.bandIbcEnabled);
    }

    if (!message.ibcRequestInterval.isZero()) {
      writer.uint32(16).int64(message.ibcRequestInterval);
    }

    if (message.ibcSourceChannel !== "") {
      writer.uint32(26).string(message.ibcSourceChannel);
    }

    if (message.ibcVersion !== "") {
      writer.uint32(34).string(message.ibcVersion);
    }

    if (message.ibcPortId !== "") {
      writer.uint32(42).string(message.ibcPortId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BandIBCParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBandIBCParams();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.bandIbcEnabled = reader.bool();
          break;

        case 2:
          message.ibcRequestInterval = (reader.int64() as Long);
          break;

        case 3:
          message.ibcSourceChannel = reader.string();
          break;

        case 4:
          message.ibcVersion = reader.string();
          break;

        case 5:
          message.ibcPortId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<BandIBCParams>): BandIBCParams {
    const message = createBaseBandIBCParams();
    message.bandIbcEnabled = object.bandIbcEnabled ?? false;
    message.ibcRequestInterval = object.ibcRequestInterval !== undefined && object.ibcRequestInterval !== null ? Long.fromValue(object.ibcRequestInterval) : Long.ZERO;
    message.ibcSourceChannel = object.ibcSourceChannel ?? "";
    message.ibcVersion = object.ibcVersion ?? "";
    message.ibcPortId = object.ibcPortId ?? "";
    return message;
  }

};

function createBaseSymbolPriceTimestamp(): SymbolPriceTimestamp {
  return {
    oracle: 0,
    symbolId: "",
    timestamp: Long.ZERO
  };
}

export const SymbolPriceTimestamp = {
  encode(message: SymbolPriceTimestamp, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.oracle !== 0) {
      writer.uint32(8).int32(message.oracle);
    }

    if (message.symbolId !== "") {
      writer.uint32(18).string(message.symbolId);
    }

    if (!message.timestamp.isZero()) {
      writer.uint32(24).int64(message.timestamp);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SymbolPriceTimestamp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSymbolPriceTimestamp();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.oracle = (reader.int32() as any);
          break;

        case 2:
          message.symbolId = reader.string();
          break;

        case 3:
          message.timestamp = (reader.int64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<SymbolPriceTimestamp>): SymbolPriceTimestamp {
    const message = createBaseSymbolPriceTimestamp();
    message.oracle = object.oracle ?? 0;
    message.symbolId = object.symbolId ?? "";
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? Long.fromValue(object.timestamp) : Long.ZERO;
    return message;
  }

};

function createBaseLastPriceTimestamps(): LastPriceTimestamps {
  return {
    lastPriceTimestamps: []
  };
}

export const LastPriceTimestamps = {
  encode(message: LastPriceTimestamps, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.lastPriceTimestamps) {
      SymbolPriceTimestamp.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LastPriceTimestamps {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLastPriceTimestamps();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.lastPriceTimestamps.push(SymbolPriceTimestamp.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<LastPriceTimestamps>): LastPriceTimestamps {
    const message = createBaseLastPriceTimestamps();
    message.lastPriceTimestamps = object.lastPriceTimestamps?.map(e => SymbolPriceTimestamp.fromPartial(e)) || [];
    return message;
  }

};

function createBasePriceRecords(): PriceRecords {
  return {
    oracle: 0,
    symbolId: "",
    latestPriceRecords: []
  };
}

export const PriceRecords = {
  encode(message: PriceRecords, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.oracle !== 0) {
      writer.uint32(8).int32(message.oracle);
    }

    if (message.symbolId !== "") {
      writer.uint32(18).string(message.symbolId);
    }

    for (const v of message.latestPriceRecords) {
      PriceRecord.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PriceRecords {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePriceRecords();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.oracle = (reader.int32() as any);
          break;

        case 2:
          message.symbolId = reader.string();
          break;

        case 3:
          message.latestPriceRecords.push(PriceRecord.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<PriceRecords>): PriceRecords {
    const message = createBasePriceRecords();
    message.oracle = object.oracle ?? 0;
    message.symbolId = object.symbolId ?? "";
    message.latestPriceRecords = object.latestPriceRecords?.map(e => PriceRecord.fromPartial(e)) || [];
    return message;
  }

};

function createBasePriceRecord(): PriceRecord {
  return {
    timestamp: Long.ZERO,
    price: ""
  };
}

export const PriceRecord = {
  encode(message: PriceRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.timestamp.isZero()) {
      writer.uint32(8).int64(message.timestamp);
    }

    if (message.price !== "") {
      writer.uint32(18).string(message.price);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PriceRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePriceRecord();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.timestamp = (reader.int64() as Long);
          break;

        case 2:
          message.price = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<PriceRecord>): PriceRecord {
    const message = createBasePriceRecord();
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? Long.fromValue(object.timestamp) : Long.ZERO;
    message.price = object.price ?? "";
    return message;
  }

};

function createBaseMetadataStatistics(): MetadataStatistics {
  return {
    groupCount: 0,
    recordsSampleSize: 0,
    mean: "",
    twap: "",
    firstTimestamp: Long.ZERO,
    lastTimestamp: Long.ZERO,
    minPrice: "",
    maxPrice: "",
    medianPrice: ""
  };
}

export const MetadataStatistics = {
  encode(message: MetadataStatistics, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.groupCount !== 0) {
      writer.uint32(8).uint32(message.groupCount);
    }

    if (message.recordsSampleSize !== 0) {
      writer.uint32(16).uint32(message.recordsSampleSize);
    }

    if (message.mean !== "") {
      writer.uint32(26).string(message.mean);
    }

    if (message.twap !== "") {
      writer.uint32(34).string(message.twap);
    }

    if (!message.firstTimestamp.isZero()) {
      writer.uint32(40).int64(message.firstTimestamp);
    }

    if (!message.lastTimestamp.isZero()) {
      writer.uint32(48).int64(message.lastTimestamp);
    }

    if (message.minPrice !== "") {
      writer.uint32(58).string(message.minPrice);
    }

    if (message.maxPrice !== "") {
      writer.uint32(66).string(message.maxPrice);
    }

    if (message.medianPrice !== "") {
      writer.uint32(74).string(message.medianPrice);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MetadataStatistics {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMetadataStatistics();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.groupCount = reader.uint32();
          break;

        case 2:
          message.recordsSampleSize = reader.uint32();
          break;

        case 3:
          message.mean = reader.string();
          break;

        case 4:
          message.twap = reader.string();
          break;

        case 5:
          message.firstTimestamp = (reader.int64() as Long);
          break;

        case 6:
          message.lastTimestamp = (reader.int64() as Long);
          break;

        case 7:
          message.minPrice = reader.string();
          break;

        case 8:
          message.maxPrice = reader.string();
          break;

        case 9:
          message.medianPrice = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MetadataStatistics>): MetadataStatistics {
    const message = createBaseMetadataStatistics();
    message.groupCount = object.groupCount ?? 0;
    message.recordsSampleSize = object.recordsSampleSize ?? 0;
    message.mean = object.mean ?? "";
    message.twap = object.twap ?? "";
    message.firstTimestamp = object.firstTimestamp !== undefined && object.firstTimestamp !== null ? Long.fromValue(object.firstTimestamp) : Long.ZERO;
    message.lastTimestamp = object.lastTimestamp !== undefined && object.lastTimestamp !== null ? Long.fromValue(object.lastTimestamp) : Long.ZERO;
    message.minPrice = object.minPrice ?? "";
    message.maxPrice = object.maxPrice ?? "";
    message.medianPrice = object.medianPrice ?? "";
    return message;
  }

};