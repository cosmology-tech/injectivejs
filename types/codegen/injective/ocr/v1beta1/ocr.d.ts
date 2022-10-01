import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
export interface Params {
    /** Native denom for LINK coin in the bank keeper */
    linkDenom: string;
    /** The block number interval at which payouts are made */
    payoutBlockInterval: Long;
    /** The admin for the OCR module */
    moduleAdmin: string;
}
export interface ParamsSDKType {
    /** Native denom for LINK coin in the bank keeper */
    link_denom: string;
    /** The block number interval at which payouts are made */
    payout_block_interval: Long;
    /** The admin for the OCR module */
    module_admin: string;
}
export interface FeedConfig {
    /** signers ith element is address ith oracle uses to sign a report */
    signers: string[];
    /** transmitters ith element is address ith oracle uses to transmit a report via the transmit method */
    transmitters: string[];
    /** f maximum number of faulty/dishonest oracles the protocol can tolerate while still working correctly */
    f: number;
    /** onchain_config serialized data with reporting plugin params on chain. */
    onchainConfig: Uint8Array;
    /** offchain_config_version version of the serialization format used for "offchain_config" parameter */
    offchainConfigVersion: Long;
    /** offchain_config serialized data used by oracles to configure their offchain operation */
    offchainConfig: Uint8Array;
    /** feed-specific params for the Cosmos module. */
    moduleParams: ModuleParams;
}
export interface FeedConfigSDKType {
    /** signers ith element is address ith oracle uses to sign a report */
    signers: string[];
    /** transmitters ith element is address ith oracle uses to transmit a report via the transmit method */
    transmitters: string[];
    /** f maximum number of faulty/dishonest oracles the protocol can tolerate while still working correctly */
    f: number;
    /** onchain_config serialized data with reporting plugin params on chain. */
    onchain_config: Uint8Array;
    /** offchain_config_version version of the serialization format used for "offchain_config" parameter */
    offchain_config_version: Long;
    /** offchain_config serialized data used by oracles to configure their offchain operation */
    offchain_config: Uint8Array;
    /** feed-specific params for the Cosmos module. */
    module_params: ModuleParamsSDKType;
}
export interface FeedConfigInfo {
    latestConfigDigest: Uint8Array;
    f: number;
    n: number;
    /** config_count ordinal number of this config setting among all config settings */
    configCount: Long;
    latestConfigBlockNumber: Long;
}
export interface FeedConfigInfoSDKType {
    latest_config_digest: Uint8Array;
    f: number;
    n: number;
    /** config_count ordinal number of this config setting among all config settings */
    config_count: Long;
    latest_config_block_number: Long;
}
export interface ModuleParams {
    /** feed_id is an unique ID for the target of this config */
    feedId: string;
    /** lowest answer the median of a report is allowed to be */
    minAnswer: string;
    /** highest answer the median of a report is allowed to be */
    maxAnswer: string;
    /** Fixed LINK reward for each observer */
    linkPerObservation: string;
    /** Fixed LINK reward for transmitter */
    linkPerTransmission: string;
    /** Native denom for LINK coin in the bank keeper */
    linkDenom: string;
    /** Enables unique reports */
    uniqueReports: boolean;
    /** short human-readable description of observable this feed's answers pertain to */
    description: string;
    /** feed administrator */
    feedAdmin: string;
    /** feed billing administrator */
    billingAdmin: string;
}
export interface ModuleParamsSDKType {
    /** feed_id is an unique ID for the target of this config */
    feed_id: string;
    /** lowest answer the median of a report is allowed to be */
    min_answer: string;
    /** highest answer the median of a report is allowed to be */
    max_answer: string;
    /** Fixed LINK reward for each observer */
    link_per_observation: string;
    /** Fixed LINK reward for transmitter */
    link_per_transmission: string;
    /** Native denom for LINK coin in the bank keeper */
    link_denom: string;
    /** Enables unique reports */
    unique_reports: boolean;
    /** short human-readable description of observable this feed's answers pertain to */
    description: string;
    /** feed administrator */
    feed_admin: string;
    /** feed billing administrator */
    billing_admin: string;
}
export interface ContractConfig {
    /** config_count ordinal number of this config setting among all config settings */
    configCount: Long;
    /** signers ith element is address ith oracle uses to sign a report */
    signers: string[];
    /** transmitters ith element is address ith oracle uses to transmit a report via the transmit method */
    transmitters: string[];
    /** f maximum number of faulty/dishonest oracles the protocol can tolerate while still working correctly */
    f: number;
    /** onchain_config serialized data with reporting plugin params on chain. */
    onchainConfig: Uint8Array;
    /** offchain_config_version version of the serialization format used for "offchain_config" parameter */
    offchainConfigVersion: Long;
    /** offchain_config serialized data used by oracles to configure their offchain operation */
    offchainConfig: Uint8Array;
}
export interface ContractConfigSDKType {
    /** config_count ordinal number of this config setting among all config settings */
    config_count: Long;
    /** signers ith element is address ith oracle uses to sign a report */
    signers: string[];
    /** transmitters ith element is address ith oracle uses to transmit a report via the transmit method */
    transmitters: string[];
    /** f maximum number of faulty/dishonest oracles the protocol can tolerate while still working correctly */
    f: number;
    /** onchain_config serialized data with reporting plugin params on chain. */
    onchain_config: Uint8Array;
    /** offchain_config_version version of the serialization format used for "offchain_config" parameter */
    offchain_config_version: Long;
    /** offchain_config serialized data used by oracles to configure their offchain operation */
    offchain_config: Uint8Array;
}
export interface SetConfigProposal {
    title: string;
    description: string;
    config: FeedConfig;
}
export interface SetConfigProposalSDKType {
    title: string;
    description: string;
    config: FeedConfigSDKType;
}
export interface FeedProperties {
    /** feed_id is an unique ID for the target of this config */
    feedId: string;
    /** f maximum number of faulty/dishonest oracles the protocol can tolerate while still working correctly */
    f: number;
    /** onchain_config serialized data with reporting plugin params on chain. */
    onchainConfig: Uint8Array;
    /** offchain_config_version version of the serialization format used for "offchain_config" parameter */
    offchainConfigVersion: Long;
    /** offchain_config serialized data used by oracles to configure their offchain operation */
    offchainConfig: Uint8Array;
    /** lowest answer the median of a report is allowed to be */
    minAnswer: string;
    /** highest answer the median of a report is allowed to be */
    maxAnswer: string;
    /** Fixed LINK reward for each observer */
    linkPerObservation: string;
    /** Fixed LINK reward for transmitter */
    linkPerTransmission: string;
    /** Enables unique reports */
    uniqueReports: boolean;
    /** short human-readable description of observable this feed's answers pertain to */
    description: string;
}
export interface FeedPropertiesSDKType {
    /** feed_id is an unique ID for the target of this config */
    feed_id: string;
    /** f maximum number of faulty/dishonest oracles the protocol can tolerate while still working correctly */
    f: number;
    /** onchain_config serialized data with reporting plugin params on chain. */
    onchain_config: Uint8Array;
    /** offchain_config_version version of the serialization format used for "offchain_config" parameter */
    offchain_config_version: Long;
    /** offchain_config serialized data used by oracles to configure their offchain operation */
    offchain_config: Uint8Array;
    /** lowest answer the median of a report is allowed to be */
    min_answer: string;
    /** highest answer the median of a report is allowed to be */
    max_answer: string;
    /** Fixed LINK reward for each observer */
    link_per_observation: string;
    /** Fixed LINK reward for transmitter */
    link_per_transmission: string;
    /** Enables unique reports */
    unique_reports: boolean;
    /** short human-readable description of observable this feed's answers pertain to */
    description: string;
}
export interface SetBatchConfigProposal {
    title: string;
    description: string;
    /** signers ith element is address ith oracle uses to sign a report */
    signers: string[];
    /** transmitters ith element is address ith oracle uses to transmit a report via the transmit method */
    transmitters: string[];
    /** Native denom for LINK coin in the bank keeper */
    linkDenom: string;
    /** feed properties */
    feedProperties: FeedProperties[];
}
export interface SetBatchConfigProposalSDKType {
    title: string;
    description: string;
    /** signers ith element is address ith oracle uses to sign a report */
    signers: string[];
    /** transmitters ith element is address ith oracle uses to transmit a report via the transmit method */
    transmitters: string[];
    /** Native denom for LINK coin in the bank keeper */
    link_denom: string;
    /** feed properties */
    feed_properties: FeedPropertiesSDKType[];
}
export interface OracleObservationsCounts {
    counts: number[];
}
export interface OracleObservationsCountsSDKType {
    counts: number[];
}
/** LINK-INJ-denominated reimbursements for gas used by transmitters. */
export interface GasReimbursements {
    reimbursements: Coin[];
}
/** LINK-INJ-denominated reimbursements for gas used by transmitters. */
export interface GasReimbursementsSDKType {
    reimbursements: CoinSDKType[];
}
export interface Payee {
    transmitterAddr: string;
    paymentAddr: string;
}
export interface PayeeSDKType {
    transmitter_addr: string;
    payment_addr: string;
}
/**
 * Transmission records the median answer from the transmit transaction at
 * time timestamp
 */
export interface Transmission {
    answer: string;
    /** when were observations made offchain */
    observationsTimestamp: Long;
    /** when was report received onchain */
    transmissionTimestamp: Long;
}
/**
 * Transmission records the median answer from the transmit transaction at
 * time timestamp
 */
export interface TransmissionSDKType {
    answer: string;
    /** when were observations made offchain */
    observations_timestamp: Long;
    /** when was report received onchain */
    transmission_timestamp: Long;
}
export interface EpochAndRound {
    epoch: Long;
    round: Long;
}
export interface EpochAndRoundSDKType {
    epoch: Long;
    round: Long;
}
export interface Report {
    observationsTimestamp: Long;
    /** ith element is the index of the ith observer */
    observers: Uint8Array;
    observations: string[];
}
export interface ReportSDKType {
    observations_timestamp: Long;
    /** ith element is the index of the ith observer */
    observers: Uint8Array;
    observations: string[];
}
export interface ReportToSign {
    configDigest: Uint8Array;
    epoch: Long;
    round: Long;
    extraHash: Uint8Array;
    /** Opaque report */
    report: Uint8Array;
}
export interface ReportToSignSDKType {
    config_digest: Uint8Array;
    epoch: Long;
    round: Long;
    extra_hash: Uint8Array;
    /** Opaque report */
    report: Uint8Array;
}
export interface EventOraclePaid {
    transmitterAddr: string;
    payeeAddr: string;
    amount: Coin;
}
export interface EventOraclePaidSDKType {
    transmitter_addr: string;
    payee_addr: string;
    amount: CoinSDKType;
}
export interface EventAnswerUpdated {
    current: string;
    roundId: string;
    updatedAt: Date;
}
export interface EventAnswerUpdatedSDKType {
    current: string;
    round_id: string;
    updated_at: Date;
}
export interface EventNewRound {
    roundId: string;
    /** address of starter */
    startedBy: string;
    startedAt: Date;
}
export interface EventNewRoundSDKType {
    round_id: string;
    /** address of starter */
    started_by: string;
    started_at: Date;
}
export interface EventTransmitted {
    configDigest: Uint8Array;
    epoch: Long;
}
export interface EventTransmittedSDKType {
    config_digest: Uint8Array;
    epoch: Long;
}
export interface EventNewTransmission {
    feedId: string;
    aggregatorRoundId: number;
    answer: string;
    transmitter: string;
    observationsTimestamp: Long;
    observations: string[];
    observers: Uint8Array;
    configDigest: Uint8Array;
    epochAndRound: EpochAndRound;
}
export interface EventNewTransmissionSDKType {
    feed_id: string;
    aggregator_round_id: number;
    answer: string;
    transmitter: string;
    observations_timestamp: Long;
    observations: string[];
    observers: Uint8Array;
    config_digest: Uint8Array;
    epoch_and_round: EpochAndRoundSDKType;
}
export interface EventConfigSet {
    /** hash of the config */
    configDigest: Uint8Array;
    /** previous_config_block_number block in which the previous config was set, to simplify historic analysis */
    previousConfigBlockNumber: Long;
    config: FeedConfig;
    configInfo: FeedConfigInfo;
}
export interface EventConfigSetSDKType {
    /** hash of the config */
    config_digest: Uint8Array;
    /** previous_config_block_number block in which the previous config was set, to simplify historic analysis */
    previous_config_block_number: Long;
    config: FeedConfigSDKType;
    config_info: FeedConfigInfoSDKType;
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromPartial(object: DeepPartial<Params>): Params;
};
export declare const FeedConfig: {
    encode(message: FeedConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FeedConfig;
    fromPartial(object: DeepPartial<FeedConfig>): FeedConfig;
};
export declare const FeedConfigInfo: {
    encode(message: FeedConfigInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FeedConfigInfo;
    fromPartial(object: DeepPartial<FeedConfigInfo>): FeedConfigInfo;
};
export declare const ModuleParams: {
    encode(message: ModuleParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ModuleParams;
    fromPartial(object: DeepPartial<ModuleParams>): ModuleParams;
};
export declare const ContractConfig: {
    encode(message: ContractConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ContractConfig;
    fromPartial(object: DeepPartial<ContractConfig>): ContractConfig;
};
export declare const SetConfigProposal: {
    encode(message: SetConfigProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetConfigProposal;
    fromPartial(object: DeepPartial<SetConfigProposal>): SetConfigProposal;
};
export declare const FeedProperties: {
    encode(message: FeedProperties, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FeedProperties;
    fromPartial(object: DeepPartial<FeedProperties>): FeedProperties;
};
export declare const SetBatchConfigProposal: {
    encode(message: SetBatchConfigProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetBatchConfigProposal;
    fromPartial(object: DeepPartial<SetBatchConfigProposal>): SetBatchConfigProposal;
};
export declare const OracleObservationsCounts: {
    encode(message: OracleObservationsCounts, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OracleObservationsCounts;
    fromPartial(object: DeepPartial<OracleObservationsCounts>): OracleObservationsCounts;
};
export declare const GasReimbursements: {
    encode(message: GasReimbursements, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GasReimbursements;
    fromPartial(object: DeepPartial<GasReimbursements>): GasReimbursements;
};
export declare const Payee: {
    encode(message: Payee, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Payee;
    fromPartial(object: DeepPartial<Payee>): Payee;
};
export declare const Transmission: {
    encode(message: Transmission, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Transmission;
    fromPartial(object: DeepPartial<Transmission>): Transmission;
};
export declare const EpochAndRound: {
    encode(message: EpochAndRound, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EpochAndRound;
    fromPartial(object: DeepPartial<EpochAndRound>): EpochAndRound;
};
export declare const Report: {
    encode(message: Report, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Report;
    fromPartial(object: DeepPartial<Report>): Report;
};
export declare const ReportToSign: {
    encode(message: ReportToSign, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ReportToSign;
    fromPartial(object: DeepPartial<ReportToSign>): ReportToSign;
};
export declare const EventOraclePaid: {
    encode(message: EventOraclePaid, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventOraclePaid;
    fromPartial(object: DeepPartial<EventOraclePaid>): EventOraclePaid;
};
export declare const EventAnswerUpdated: {
    encode(message: EventAnswerUpdated, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventAnswerUpdated;
    fromPartial(object: DeepPartial<EventAnswerUpdated>): EventAnswerUpdated;
};
export declare const EventNewRound: {
    encode(message: EventNewRound, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventNewRound;
    fromPartial(object: DeepPartial<EventNewRound>): EventNewRound;
};
export declare const EventTransmitted: {
    encode(message: EventTransmitted, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventTransmitted;
    fromPartial(object: DeepPartial<EventTransmitted>): EventTransmitted;
};
export declare const EventNewTransmission: {
    encode(message: EventNewTransmission, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventNewTransmission;
    fromPartial(object: DeepPartial<EventNewTransmission>): EventNewTransmission;
};
export declare const EventConfigSet: {
    encode(message: EventConfigSet, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventConfigSet;
    fromPartial(object: DeepPartial<EventConfigSet>): EventConfigSet;
};
