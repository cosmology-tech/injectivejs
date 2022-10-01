import { Params, ParamsSDKType, FeedConfig, FeedConfigSDKType, Transmission, TransmissionSDKType, EpochAndRound, EpochAndRoundSDKType } from "./ocr";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
/** GenesisState defines the OCR module's genesis state. */
export interface GenesisState {
    /** params defines all the parameters of related to OCR. */
    params: Params;
    /** feed_configs stores all of the supported OCR feeds */
    feedConfigs: FeedConfig[];
    /** latest_epoch_and_rounds stores the latest epoch and round for each feedId */
    latestEpochAndRounds: FeedEpochAndRound[];
    /** feed_transmissions stores the last transmission for each feed */
    feedTransmissions: FeedTransmission[];
    /** latest_aggregator_round_ids stores the latest aggregator round ID for each feedId */
    latestAggregatorRoundIds: FeedLatestAggregatorRoundIDs[];
    /** reward_pools stores the reward pools */
    rewardPools: RewardPool[];
    /** feed_observation_counts stores the feed observation counts */
    feedObservationCounts: FeedCounts[];
    /** feed_transmission_counts stores the feed transmission counts */
    feedTransmissionCounts: FeedCounts[];
    /** pending_payeeships stores the pending payeeships */
    pendingPayeeships: PendingPayeeship[];
}
/** GenesisState defines the OCR module's genesis state. */
export interface GenesisStateSDKType {
    /** params defines all the parameters of related to OCR. */
    params: ParamsSDKType;
    /** feed_configs stores all of the supported OCR feeds */
    feed_configs: FeedConfigSDKType[];
    /** latest_epoch_and_rounds stores the latest epoch and round for each feedId */
    latest_epoch_and_rounds: FeedEpochAndRoundSDKType[];
    /** feed_transmissions stores the last transmission for each feed */
    feed_transmissions: FeedTransmissionSDKType[];
    /** latest_aggregator_round_ids stores the latest aggregator round ID for each feedId */
    latest_aggregator_round_ids: FeedLatestAggregatorRoundIDsSDKType[];
    /** reward_pools stores the reward pools */
    reward_pools: RewardPoolSDKType[];
    /** feed_observation_counts stores the feed observation counts */
    feed_observation_counts: FeedCountsSDKType[];
    /** feed_transmission_counts stores the feed transmission counts */
    feed_transmission_counts: FeedCountsSDKType[];
    /** pending_payeeships stores the pending payeeships */
    pending_payeeships: PendingPayeeshipSDKType[];
}
export interface FeedTransmission {
    feedId: string;
    transmission: Transmission;
}
export interface FeedTransmissionSDKType {
    feed_id: string;
    transmission: TransmissionSDKType;
}
export interface FeedEpochAndRound {
    feedId: string;
    epochAndRound: EpochAndRound;
}
export interface FeedEpochAndRoundSDKType {
    feed_id: string;
    epoch_and_round: EpochAndRoundSDKType;
}
export interface FeedLatestAggregatorRoundIDs {
    feedId: string;
    aggregatorRoundId: Long;
}
export interface FeedLatestAggregatorRoundIDsSDKType {
    feed_id: string;
    aggregator_round_id: Long;
}
export interface RewardPool {
    feedId: string;
    amount: Coin;
}
export interface RewardPoolSDKType {
    feed_id: string;
    amount: CoinSDKType;
}
export interface FeedCounts {
    feedId: string;
    counts: Count[];
}
export interface FeedCountsSDKType {
    feed_id: string;
    counts: CountSDKType[];
}
export interface Count {
    address: string;
    count: Long;
}
export interface CountSDKType {
    address: string;
    count: Long;
}
export interface PendingPayeeship {
    feedId: string;
    transmitter: string;
    proposedPayee: string;
}
export interface PendingPayeeshipSDKType {
    feed_id: string;
    transmitter: string;
    proposed_payee: string;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
export declare const FeedTransmission: {
    encode(message: FeedTransmission, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FeedTransmission;
    fromPartial(object: DeepPartial<FeedTransmission>): FeedTransmission;
};
export declare const FeedEpochAndRound: {
    encode(message: FeedEpochAndRound, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FeedEpochAndRound;
    fromPartial(object: DeepPartial<FeedEpochAndRound>): FeedEpochAndRound;
};
export declare const FeedLatestAggregatorRoundIDs: {
    encode(message: FeedLatestAggregatorRoundIDs, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FeedLatestAggregatorRoundIDs;
    fromPartial(object: DeepPartial<FeedLatestAggregatorRoundIDs>): FeedLatestAggregatorRoundIDs;
};
export declare const RewardPool: {
    encode(message: RewardPool, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RewardPool;
    fromPartial(object: DeepPartial<RewardPool>): RewardPool;
};
export declare const FeedCounts: {
    encode(message: FeedCounts, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FeedCounts;
    fromPartial(object: DeepPartial<FeedCounts>): FeedCounts;
};
export declare const Count: {
    encode(message: Count, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Count;
    fromPartial(object: DeepPartial<Count>): Count;
};
export declare const PendingPayeeship: {
    encode(message: PendingPayeeship, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PendingPayeeship;
    fromPartial(object: DeepPartial<PendingPayeeship>): PendingPayeeship;
};
