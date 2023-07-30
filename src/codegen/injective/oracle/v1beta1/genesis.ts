import { Params, ParamsSDKType, BandPriceState, BandPriceStateSDKType, PriceFeedState, PriceFeedStateSDKType, CoinbasePriceState, CoinbasePriceStateSDKType, BandOracleRequest, BandOracleRequestSDKType, BandIBCParams, BandIBCParamsSDKType, ChainlinkPriceState, ChainlinkPriceStateSDKType, PriceRecords, PriceRecordsSDKType, ProviderState, ProviderStateSDKType } from "./oracle";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@cosmology/helpers";
/** GenesisState defines the oracle module's genesis state. */

export interface GenesisState {
  /** params defines all the parameters of related to oracle. */
  params: Params;
  bandRelayers: string[];
  bandPriceStates: BandPriceState[];
  priceFeedPriceStates: PriceFeedState[];
  coinbasePriceStates: CoinbasePriceState[];
  bandIbcPriceStates: BandPriceState[];
  bandIbcOracleRequests: BandOracleRequest[];
  bandIbcParams: BandIBCParams;
  bandIbcLatestClientId: Long;
  calldataRecords: CalldataRecord[];
  bandIbcLatestRequestId: Long;
  chainlinkPriceStates: ChainlinkPriceState[];
  historicalPriceRecords: PriceRecords[];
  providerStates: ProviderState[];
}
/** GenesisState defines the oracle module's genesis state. */

export interface GenesisStateSDKType {
  /** params defines all the parameters of related to oracle. */
  params: ParamsSDKType;
  band_relayers: string[];
  band_price_states: BandPriceStateSDKType[];
  price_feed_price_states: PriceFeedStateSDKType[];
  coinbase_price_states: CoinbasePriceStateSDKType[];
  band_ibc_price_states: BandPriceStateSDKType[];
  band_ibc_oracle_requests: BandOracleRequestSDKType[];
  band_ibc_params: BandIBCParamsSDKType;
  band_ibc_latest_client_id: Long;
  calldata_records: CalldataRecordSDKType[];
  band_ibc_latest_request_id: Long;
  chainlink_price_states: ChainlinkPriceStateSDKType[];
  historical_price_records: PriceRecordsSDKType[];
  provider_states: ProviderStateSDKType[];
}
export interface CalldataRecord {
  clientId: Long;
  calldata: Uint8Array;
}
export interface CalldataRecordSDKType {
  client_id: Long;
  calldata: Uint8Array;
}

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    bandRelayers: [],
    bandPriceStates: [],
    priceFeedPriceStates: [],
    coinbasePriceStates: [],
    bandIbcPriceStates: [],
    bandIbcOracleRequests: [],
    bandIbcParams: undefined,
    bandIbcLatestClientId: Long.UZERO,
    calldataRecords: [],
    bandIbcLatestRequestId: Long.UZERO,
    chainlinkPriceStates: [],
    historicalPriceRecords: [],
    providerStates: []
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.bandRelayers) {
      writer.uint32(18).string(v!);
    }

    for (const v of message.bandPriceStates) {
      BandPriceState.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    for (const v of message.priceFeedPriceStates) {
      PriceFeedState.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    for (const v of message.coinbasePriceStates) {
      CoinbasePriceState.encode(v!, writer.uint32(42).fork()).ldelim();
    }

    for (const v of message.bandIbcPriceStates) {
      BandPriceState.encode(v!, writer.uint32(50).fork()).ldelim();
    }

    for (const v of message.bandIbcOracleRequests) {
      BandOracleRequest.encode(v!, writer.uint32(58).fork()).ldelim();
    }

    if (message.bandIbcParams !== undefined) {
      BandIBCParams.encode(message.bandIbcParams, writer.uint32(66).fork()).ldelim();
    }

    if (!message.bandIbcLatestClientId.isZero()) {
      writer.uint32(72).uint64(message.bandIbcLatestClientId);
    }

    for (const v of message.calldataRecords) {
      CalldataRecord.encode(v!, writer.uint32(82).fork()).ldelim();
    }

    if (!message.bandIbcLatestRequestId.isZero()) {
      writer.uint32(88).uint64(message.bandIbcLatestRequestId);
    }

    for (const v of message.chainlinkPriceStates) {
      ChainlinkPriceState.encode(v!, writer.uint32(98).fork()).ldelim();
    }

    for (const v of message.historicalPriceRecords) {
      PriceRecords.encode(v!, writer.uint32(106).fork()).ldelim();
    }

    for (const v of message.providerStates) {
      ProviderState.encode(v!, writer.uint32(114).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;

        case 2:
          message.bandRelayers.push(reader.string());
          break;

        case 3:
          message.bandPriceStates.push(BandPriceState.decode(reader, reader.uint32()));
          break;

        case 4:
          message.priceFeedPriceStates.push(PriceFeedState.decode(reader, reader.uint32()));
          break;

        case 5:
          message.coinbasePriceStates.push(CoinbasePriceState.decode(reader, reader.uint32()));
          break;

        case 6:
          message.bandIbcPriceStates.push(BandPriceState.decode(reader, reader.uint32()));
          break;

        case 7:
          message.bandIbcOracleRequests.push(BandOracleRequest.decode(reader, reader.uint32()));
          break;

        case 8:
          message.bandIbcParams = BandIBCParams.decode(reader, reader.uint32());
          break;

        case 9:
          message.bandIbcLatestClientId = (reader.uint64() as Long);
          break;

        case 10:
          message.calldataRecords.push(CalldataRecord.decode(reader, reader.uint32()));
          break;

        case 11:
          message.bandIbcLatestRequestId = (reader.uint64() as Long);
          break;

        case 12:
          message.chainlinkPriceStates.push(ChainlinkPriceState.decode(reader, reader.uint32()));
          break;

        case 13:
          message.historicalPriceRecords.push(PriceRecords.decode(reader, reader.uint32()));
          break;

        case 14:
          message.providerStates.push(ProviderState.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.bandRelayers = object.bandRelayers?.map(e => e) || [];
    message.bandPriceStates = object.bandPriceStates?.map(e => BandPriceState.fromPartial(e)) || [];
    message.priceFeedPriceStates = object.priceFeedPriceStates?.map(e => PriceFeedState.fromPartial(e)) || [];
    message.coinbasePriceStates = object.coinbasePriceStates?.map(e => CoinbasePriceState.fromPartial(e)) || [];
    message.bandIbcPriceStates = object.bandIbcPriceStates?.map(e => BandPriceState.fromPartial(e)) || [];
    message.bandIbcOracleRequests = object.bandIbcOracleRequests?.map(e => BandOracleRequest.fromPartial(e)) || [];
    message.bandIbcParams = object.bandIbcParams !== undefined && object.bandIbcParams !== null ? BandIBCParams.fromPartial(object.bandIbcParams) : undefined;
    message.bandIbcLatestClientId = object.bandIbcLatestClientId !== undefined && object.bandIbcLatestClientId !== null ? Long.fromValue(object.bandIbcLatestClientId) : Long.UZERO;
    message.calldataRecords = object.calldataRecords?.map(e => CalldataRecord.fromPartial(e)) || [];
    message.bandIbcLatestRequestId = object.bandIbcLatestRequestId !== undefined && object.bandIbcLatestRequestId !== null ? Long.fromValue(object.bandIbcLatestRequestId) : Long.UZERO;
    message.chainlinkPriceStates = object.chainlinkPriceStates?.map(e => ChainlinkPriceState.fromPartial(e)) || [];
    message.historicalPriceRecords = object.historicalPriceRecords?.map(e => PriceRecords.fromPartial(e)) || [];
    message.providerStates = object.providerStates?.map(e => ProviderState.fromPartial(e)) || [];
    return message;
  }

};

function createBaseCalldataRecord(): CalldataRecord {
  return {
    clientId: Long.UZERO,
    calldata: new Uint8Array()
  };
}

export const CalldataRecord = {
  encode(message: CalldataRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.clientId.isZero()) {
      writer.uint32(8).uint64(message.clientId);
    }

    if (message.calldata.length !== 0) {
      writer.uint32(18).bytes(message.calldata);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CalldataRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCalldataRecord();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.clientId = (reader.uint64() as Long);
          break;

        case 2:
          message.calldata = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<CalldataRecord>): CalldataRecord {
    const message = createBaseCalldataRecord();
    message.clientId = object.clientId !== undefined && object.clientId !== null ? Long.fromValue(object.clientId) : Long.UZERO;
    message.calldata = object.calldata ?? new Uint8Array();
    return message;
  }

};