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
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
export declare const CalldataRecord: {
    encode(message: CalldataRecord, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CalldataRecord;
    fromPartial(object: DeepPartial<CalldataRecord>): CalldataRecord;
};
