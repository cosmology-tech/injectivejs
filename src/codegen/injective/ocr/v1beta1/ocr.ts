import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial, toTimestamp, fromTimestamp } from "@osmonauts/helpers";
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

function createBaseParams(): Params {
  return {
    linkDenom: "",
    payoutBlockInterval: Long.UZERO,
    moduleAdmin: ""
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.linkDenom !== "") {
      writer.uint32(10).string(message.linkDenom);
    }

    if (!message.payoutBlockInterval.isZero()) {
      writer.uint32(16).uint64(message.payoutBlockInterval);
    }

    if (message.moduleAdmin !== "") {
      writer.uint32(26).string(message.moduleAdmin);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.linkDenom = reader.string();
          break;

        case 2:
          message.payoutBlockInterval = (reader.uint64() as Long);
          break;

        case 3:
          message.moduleAdmin = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.linkDenom = object.linkDenom ?? "";
    message.payoutBlockInterval = object.payoutBlockInterval !== undefined && object.payoutBlockInterval !== null ? Long.fromValue(object.payoutBlockInterval) : Long.UZERO;
    message.moduleAdmin = object.moduleAdmin ?? "";
    return message;
  }

};

function createBaseFeedConfig(): FeedConfig {
  return {
    signers: [],
    transmitters: [],
    f: 0,
    onchainConfig: new Uint8Array(),
    offchainConfigVersion: Long.UZERO,
    offchainConfig: new Uint8Array(),
    moduleParams: undefined
  };
}

export const FeedConfig = {
  encode(message: FeedConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.signers) {
      writer.uint32(10).string(v!);
    }

    for (const v of message.transmitters) {
      writer.uint32(18).string(v!);
    }

    if (message.f !== 0) {
      writer.uint32(24).uint32(message.f);
    }

    if (message.onchainConfig.length !== 0) {
      writer.uint32(34).bytes(message.onchainConfig);
    }

    if (!message.offchainConfigVersion.isZero()) {
      writer.uint32(40).uint64(message.offchainConfigVersion);
    }

    if (message.offchainConfig.length !== 0) {
      writer.uint32(50).bytes(message.offchainConfig);
    }

    if (message.moduleParams !== undefined) {
      ModuleParams.encode(message.moduleParams, writer.uint32(58).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FeedConfig {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeedConfig();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.signers.push(reader.string());
          break;

        case 2:
          message.transmitters.push(reader.string());
          break;

        case 3:
          message.f = reader.uint32();
          break;

        case 4:
          message.onchainConfig = reader.bytes();
          break;

        case 5:
          message.offchainConfigVersion = (reader.uint64() as Long);
          break;

        case 6:
          message.offchainConfig = reader.bytes();
          break;

        case 7:
          message.moduleParams = ModuleParams.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<FeedConfig>): FeedConfig {
    const message = createBaseFeedConfig();
    message.signers = object.signers?.map(e => e) || [];
    message.transmitters = object.transmitters?.map(e => e) || [];
    message.f = object.f ?? 0;
    message.onchainConfig = object.onchainConfig ?? new Uint8Array();
    message.offchainConfigVersion = object.offchainConfigVersion !== undefined && object.offchainConfigVersion !== null ? Long.fromValue(object.offchainConfigVersion) : Long.UZERO;
    message.offchainConfig = object.offchainConfig ?? new Uint8Array();
    message.moduleParams = object.moduleParams !== undefined && object.moduleParams !== null ? ModuleParams.fromPartial(object.moduleParams) : undefined;
    return message;
  }

};

function createBaseFeedConfigInfo(): FeedConfigInfo {
  return {
    latestConfigDigest: new Uint8Array(),
    f: 0,
    n: 0,
    configCount: Long.UZERO,
    latestConfigBlockNumber: Long.ZERO
  };
}

export const FeedConfigInfo = {
  encode(message: FeedConfigInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.latestConfigDigest.length !== 0) {
      writer.uint32(10).bytes(message.latestConfigDigest);
    }

    if (message.f !== 0) {
      writer.uint32(16).uint32(message.f);
    }

    if (message.n !== 0) {
      writer.uint32(24).uint32(message.n);
    }

    if (!message.configCount.isZero()) {
      writer.uint32(32).uint64(message.configCount);
    }

    if (!message.latestConfigBlockNumber.isZero()) {
      writer.uint32(40).int64(message.latestConfigBlockNumber);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FeedConfigInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeedConfigInfo();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.latestConfigDigest = reader.bytes();
          break;

        case 2:
          message.f = reader.uint32();
          break;

        case 3:
          message.n = reader.uint32();
          break;

        case 4:
          message.configCount = (reader.uint64() as Long);
          break;

        case 5:
          message.latestConfigBlockNumber = (reader.int64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<FeedConfigInfo>): FeedConfigInfo {
    const message = createBaseFeedConfigInfo();
    message.latestConfigDigest = object.latestConfigDigest ?? new Uint8Array();
    message.f = object.f ?? 0;
    message.n = object.n ?? 0;
    message.configCount = object.configCount !== undefined && object.configCount !== null ? Long.fromValue(object.configCount) : Long.UZERO;
    message.latestConfigBlockNumber = object.latestConfigBlockNumber !== undefined && object.latestConfigBlockNumber !== null ? Long.fromValue(object.latestConfigBlockNumber) : Long.ZERO;
    return message;
  }

};

function createBaseModuleParams(): ModuleParams {
  return {
    feedId: "",
    minAnswer: "",
    maxAnswer: "",
    linkPerObservation: "",
    linkPerTransmission: "",
    linkDenom: "",
    uniqueReports: false,
    description: "",
    feedAdmin: "",
    billingAdmin: ""
  };
}

export const ModuleParams = {
  encode(message: ModuleParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.feedId !== "") {
      writer.uint32(10).string(message.feedId);
    }

    if (message.minAnswer !== "") {
      writer.uint32(18).string(message.minAnswer);
    }

    if (message.maxAnswer !== "") {
      writer.uint32(26).string(message.maxAnswer);
    }

    if (message.linkPerObservation !== "") {
      writer.uint32(34).string(message.linkPerObservation);
    }

    if (message.linkPerTransmission !== "") {
      writer.uint32(42).string(message.linkPerTransmission);
    }

    if (message.linkDenom !== "") {
      writer.uint32(50).string(message.linkDenom);
    }

    if (message.uniqueReports === true) {
      writer.uint32(56).bool(message.uniqueReports);
    }

    if (message.description !== "") {
      writer.uint32(66).string(message.description);
    }

    if (message.feedAdmin !== "") {
      writer.uint32(74).string(message.feedAdmin);
    }

    if (message.billingAdmin !== "") {
      writer.uint32(82).string(message.billingAdmin);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ModuleParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModuleParams();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.feedId = reader.string();
          break;

        case 2:
          message.minAnswer = reader.string();
          break;

        case 3:
          message.maxAnswer = reader.string();
          break;

        case 4:
          message.linkPerObservation = reader.string();
          break;

        case 5:
          message.linkPerTransmission = reader.string();
          break;

        case 6:
          message.linkDenom = reader.string();
          break;

        case 7:
          message.uniqueReports = reader.bool();
          break;

        case 8:
          message.description = reader.string();
          break;

        case 9:
          message.feedAdmin = reader.string();
          break;

        case 10:
          message.billingAdmin = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<ModuleParams>): ModuleParams {
    const message = createBaseModuleParams();
    message.feedId = object.feedId ?? "";
    message.minAnswer = object.minAnswer ?? "";
    message.maxAnswer = object.maxAnswer ?? "";
    message.linkPerObservation = object.linkPerObservation ?? "";
    message.linkPerTransmission = object.linkPerTransmission ?? "";
    message.linkDenom = object.linkDenom ?? "";
    message.uniqueReports = object.uniqueReports ?? false;
    message.description = object.description ?? "";
    message.feedAdmin = object.feedAdmin ?? "";
    message.billingAdmin = object.billingAdmin ?? "";
    return message;
  }

};

function createBaseContractConfig(): ContractConfig {
  return {
    configCount: Long.UZERO,
    signers: [],
    transmitters: [],
    f: 0,
    onchainConfig: new Uint8Array(),
    offchainConfigVersion: Long.UZERO,
    offchainConfig: new Uint8Array()
  };
}

export const ContractConfig = {
  encode(message: ContractConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.configCount.isZero()) {
      writer.uint32(8).uint64(message.configCount);
    }

    for (const v of message.signers) {
      writer.uint32(18).string(v!);
    }

    for (const v of message.transmitters) {
      writer.uint32(26).string(v!);
    }

    if (message.f !== 0) {
      writer.uint32(32).uint32(message.f);
    }

    if (message.onchainConfig.length !== 0) {
      writer.uint32(42).bytes(message.onchainConfig);
    }

    if (!message.offchainConfigVersion.isZero()) {
      writer.uint32(48).uint64(message.offchainConfigVersion);
    }

    if (message.offchainConfig.length !== 0) {
      writer.uint32(58).bytes(message.offchainConfig);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ContractConfig {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContractConfig();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.configCount = (reader.uint64() as Long);
          break;

        case 2:
          message.signers.push(reader.string());
          break;

        case 3:
          message.transmitters.push(reader.string());
          break;

        case 4:
          message.f = reader.uint32();
          break;

        case 5:
          message.onchainConfig = reader.bytes();
          break;

        case 6:
          message.offchainConfigVersion = (reader.uint64() as Long);
          break;

        case 7:
          message.offchainConfig = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<ContractConfig>): ContractConfig {
    const message = createBaseContractConfig();
    message.configCount = object.configCount !== undefined && object.configCount !== null ? Long.fromValue(object.configCount) : Long.UZERO;
    message.signers = object.signers?.map(e => e) || [];
    message.transmitters = object.transmitters?.map(e => e) || [];
    message.f = object.f ?? 0;
    message.onchainConfig = object.onchainConfig ?? new Uint8Array();
    message.offchainConfigVersion = object.offchainConfigVersion !== undefined && object.offchainConfigVersion !== null ? Long.fromValue(object.offchainConfigVersion) : Long.UZERO;
    message.offchainConfig = object.offchainConfig ?? new Uint8Array();
    return message;
  }

};

function createBaseSetConfigProposal(): SetConfigProposal {
  return {
    title: "",
    description: "",
    config: undefined
  };
}

export const SetConfigProposal = {
  encode(message: SetConfigProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    if (message.config !== undefined) {
      FeedConfig.encode(message.config, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetConfigProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetConfigProposal();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;

        case 2:
          message.description = reader.string();
          break;

        case 3:
          message.config = FeedConfig.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<SetConfigProposal>): SetConfigProposal {
    const message = createBaseSetConfigProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.config = object.config !== undefined && object.config !== null ? FeedConfig.fromPartial(object.config) : undefined;
    return message;
  }

};

function createBaseFeedProperties(): FeedProperties {
  return {
    feedId: "",
    f: 0,
    onchainConfig: new Uint8Array(),
    offchainConfigVersion: Long.UZERO,
    offchainConfig: new Uint8Array(),
    minAnswer: "",
    maxAnswer: "",
    linkPerObservation: "",
    linkPerTransmission: "",
    uniqueReports: false,
    description: ""
  };
}

export const FeedProperties = {
  encode(message: FeedProperties, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.feedId !== "") {
      writer.uint32(10).string(message.feedId);
    }

    if (message.f !== 0) {
      writer.uint32(16).uint32(message.f);
    }

    if (message.onchainConfig.length !== 0) {
      writer.uint32(26).bytes(message.onchainConfig);
    }

    if (!message.offchainConfigVersion.isZero()) {
      writer.uint32(32).uint64(message.offchainConfigVersion);
    }

    if (message.offchainConfig.length !== 0) {
      writer.uint32(42).bytes(message.offchainConfig);
    }

    if (message.minAnswer !== "") {
      writer.uint32(50).string(message.minAnswer);
    }

    if (message.maxAnswer !== "") {
      writer.uint32(58).string(message.maxAnswer);
    }

    if (message.linkPerObservation !== "") {
      writer.uint32(66).string(message.linkPerObservation);
    }

    if (message.linkPerTransmission !== "") {
      writer.uint32(74).string(message.linkPerTransmission);
    }

    if (message.uniqueReports === true) {
      writer.uint32(80).bool(message.uniqueReports);
    }

    if (message.description !== "") {
      writer.uint32(90).string(message.description);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FeedProperties {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeedProperties();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.feedId = reader.string();
          break;

        case 2:
          message.f = reader.uint32();
          break;

        case 3:
          message.onchainConfig = reader.bytes();
          break;

        case 4:
          message.offchainConfigVersion = (reader.uint64() as Long);
          break;

        case 5:
          message.offchainConfig = reader.bytes();
          break;

        case 6:
          message.minAnswer = reader.string();
          break;

        case 7:
          message.maxAnswer = reader.string();
          break;

        case 8:
          message.linkPerObservation = reader.string();
          break;

        case 9:
          message.linkPerTransmission = reader.string();
          break;

        case 10:
          message.uniqueReports = reader.bool();
          break;

        case 11:
          message.description = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<FeedProperties>): FeedProperties {
    const message = createBaseFeedProperties();
    message.feedId = object.feedId ?? "";
    message.f = object.f ?? 0;
    message.onchainConfig = object.onchainConfig ?? new Uint8Array();
    message.offchainConfigVersion = object.offchainConfigVersion !== undefined && object.offchainConfigVersion !== null ? Long.fromValue(object.offchainConfigVersion) : Long.UZERO;
    message.offchainConfig = object.offchainConfig ?? new Uint8Array();
    message.minAnswer = object.minAnswer ?? "";
    message.maxAnswer = object.maxAnswer ?? "";
    message.linkPerObservation = object.linkPerObservation ?? "";
    message.linkPerTransmission = object.linkPerTransmission ?? "";
    message.uniqueReports = object.uniqueReports ?? false;
    message.description = object.description ?? "";
    return message;
  }

};

function createBaseSetBatchConfigProposal(): SetBatchConfigProposal {
  return {
    title: "",
    description: "",
    signers: [],
    transmitters: [],
    linkDenom: "",
    feedProperties: []
  };
}

export const SetBatchConfigProposal = {
  encode(message: SetBatchConfigProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    for (const v of message.signers) {
      writer.uint32(26).string(v!);
    }

    for (const v of message.transmitters) {
      writer.uint32(34).string(v!);
    }

    if (message.linkDenom !== "") {
      writer.uint32(42).string(message.linkDenom);
    }

    for (const v of message.feedProperties) {
      FeedProperties.encode(v!, writer.uint32(50).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetBatchConfigProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetBatchConfigProposal();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;

        case 2:
          message.description = reader.string();
          break;

        case 3:
          message.signers.push(reader.string());
          break;

        case 4:
          message.transmitters.push(reader.string());
          break;

        case 5:
          message.linkDenom = reader.string();
          break;

        case 6:
          message.feedProperties.push(FeedProperties.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<SetBatchConfigProposal>): SetBatchConfigProposal {
    const message = createBaseSetBatchConfigProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.signers = object.signers?.map(e => e) || [];
    message.transmitters = object.transmitters?.map(e => e) || [];
    message.linkDenom = object.linkDenom ?? "";
    message.feedProperties = object.feedProperties?.map(e => FeedProperties.fromPartial(e)) || [];
    return message;
  }

};

function createBaseOracleObservationsCounts(): OracleObservationsCounts {
  return {
    counts: []
  };
}

export const OracleObservationsCounts = {
  encode(message: OracleObservationsCounts, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();

    for (const v of message.counts) {
      writer.uint32(v);
    }

    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OracleObservationsCounts {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOracleObservationsCounts();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;

            while (reader.pos < end2) {
              message.counts.push(reader.uint32());
            }
          } else {
            message.counts.push(reader.uint32());
          }

          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<OracleObservationsCounts>): OracleObservationsCounts {
    const message = createBaseOracleObservationsCounts();
    message.counts = object.counts?.map(e => e) || [];
    return message;
  }

};

function createBaseGasReimbursements(): GasReimbursements {
  return {
    reimbursements: []
  };
}

export const GasReimbursements = {
  encode(message: GasReimbursements, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.reimbursements) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GasReimbursements {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGasReimbursements();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.reimbursements.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<GasReimbursements>): GasReimbursements {
    const message = createBaseGasReimbursements();
    message.reimbursements = object.reimbursements?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }

};

function createBasePayee(): Payee {
  return {
    transmitterAddr: "",
    paymentAddr: ""
  };
}

export const Payee = {
  encode(message: Payee, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.transmitterAddr !== "") {
      writer.uint32(10).string(message.transmitterAddr);
    }

    if (message.paymentAddr !== "") {
      writer.uint32(18).string(message.paymentAddr);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Payee {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePayee();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.transmitterAddr = reader.string();
          break;

        case 2:
          message.paymentAddr = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Payee>): Payee {
    const message = createBasePayee();
    message.transmitterAddr = object.transmitterAddr ?? "";
    message.paymentAddr = object.paymentAddr ?? "";
    return message;
  }

};

function createBaseTransmission(): Transmission {
  return {
    answer: "",
    observationsTimestamp: Long.ZERO,
    transmissionTimestamp: Long.ZERO
  };
}

export const Transmission = {
  encode(message: Transmission, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.answer !== "") {
      writer.uint32(10).string(message.answer);
    }

    if (!message.observationsTimestamp.isZero()) {
      writer.uint32(16).int64(message.observationsTimestamp);
    }

    if (!message.transmissionTimestamp.isZero()) {
      writer.uint32(24).int64(message.transmissionTimestamp);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Transmission {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransmission();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.answer = reader.string();
          break;

        case 2:
          message.observationsTimestamp = (reader.int64() as Long);
          break;

        case 3:
          message.transmissionTimestamp = (reader.int64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Transmission>): Transmission {
    const message = createBaseTransmission();
    message.answer = object.answer ?? "";
    message.observationsTimestamp = object.observationsTimestamp !== undefined && object.observationsTimestamp !== null ? Long.fromValue(object.observationsTimestamp) : Long.ZERO;
    message.transmissionTimestamp = object.transmissionTimestamp !== undefined && object.transmissionTimestamp !== null ? Long.fromValue(object.transmissionTimestamp) : Long.ZERO;
    return message;
  }

};

function createBaseEpochAndRound(): EpochAndRound {
  return {
    epoch: Long.UZERO,
    round: Long.UZERO
  };
}

export const EpochAndRound = {
  encode(message: EpochAndRound, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.epoch.isZero()) {
      writer.uint32(8).uint64(message.epoch);
    }

    if (!message.round.isZero()) {
      writer.uint32(16).uint64(message.round);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EpochAndRound {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEpochAndRound();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.epoch = (reader.uint64() as Long);
          break;

        case 2:
          message.round = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<EpochAndRound>): EpochAndRound {
    const message = createBaseEpochAndRound();
    message.epoch = object.epoch !== undefined && object.epoch !== null ? Long.fromValue(object.epoch) : Long.UZERO;
    message.round = object.round !== undefined && object.round !== null ? Long.fromValue(object.round) : Long.UZERO;
    return message;
  }

};

function createBaseReport(): Report {
  return {
    observationsTimestamp: Long.ZERO,
    observers: new Uint8Array(),
    observations: []
  };
}

export const Report = {
  encode(message: Report, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.observationsTimestamp.isZero()) {
      writer.uint32(8).int64(message.observationsTimestamp);
    }

    if (message.observers.length !== 0) {
      writer.uint32(18).bytes(message.observers);
    }

    for (const v of message.observations) {
      writer.uint32(26).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Report {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReport();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.observationsTimestamp = (reader.int64() as Long);
          break;

        case 2:
          message.observers = reader.bytes();
          break;

        case 3:
          message.observations.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Report>): Report {
    const message = createBaseReport();
    message.observationsTimestamp = object.observationsTimestamp !== undefined && object.observationsTimestamp !== null ? Long.fromValue(object.observationsTimestamp) : Long.ZERO;
    message.observers = object.observers ?? new Uint8Array();
    message.observations = object.observations?.map(e => e) || [];
    return message;
  }

};

function createBaseReportToSign(): ReportToSign {
  return {
    configDigest: new Uint8Array(),
    epoch: Long.UZERO,
    round: Long.UZERO,
    extraHash: new Uint8Array(),
    report: new Uint8Array()
  };
}

export const ReportToSign = {
  encode(message: ReportToSign, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.configDigest.length !== 0) {
      writer.uint32(10).bytes(message.configDigest);
    }

    if (!message.epoch.isZero()) {
      writer.uint32(16).uint64(message.epoch);
    }

    if (!message.round.isZero()) {
      writer.uint32(24).uint64(message.round);
    }

    if (message.extraHash.length !== 0) {
      writer.uint32(34).bytes(message.extraHash);
    }

    if (message.report.length !== 0) {
      writer.uint32(42).bytes(message.report);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ReportToSign {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReportToSign();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.configDigest = reader.bytes();
          break;

        case 2:
          message.epoch = (reader.uint64() as Long);
          break;

        case 3:
          message.round = (reader.uint64() as Long);
          break;

        case 4:
          message.extraHash = reader.bytes();
          break;

        case 5:
          message.report = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<ReportToSign>): ReportToSign {
    const message = createBaseReportToSign();
    message.configDigest = object.configDigest ?? new Uint8Array();
    message.epoch = object.epoch !== undefined && object.epoch !== null ? Long.fromValue(object.epoch) : Long.UZERO;
    message.round = object.round !== undefined && object.round !== null ? Long.fromValue(object.round) : Long.UZERO;
    message.extraHash = object.extraHash ?? new Uint8Array();
    message.report = object.report ?? new Uint8Array();
    return message;
  }

};

function createBaseEventOraclePaid(): EventOraclePaid {
  return {
    transmitterAddr: "",
    payeeAddr: "",
    amount: undefined
  };
}

export const EventOraclePaid = {
  encode(message: EventOraclePaid, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.transmitterAddr !== "") {
      writer.uint32(10).string(message.transmitterAddr);
    }

    if (message.payeeAddr !== "") {
      writer.uint32(18).string(message.payeeAddr);
    }

    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventOraclePaid {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventOraclePaid();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.transmitterAddr = reader.string();
          break;

        case 2:
          message.payeeAddr = reader.string();
          break;

        case 3:
          message.amount = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<EventOraclePaid>): EventOraclePaid {
    const message = createBaseEventOraclePaid();
    message.transmitterAddr = object.transmitterAddr ?? "";
    message.payeeAddr = object.payeeAddr ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  }

};

function createBaseEventAnswerUpdated(): EventAnswerUpdated {
  return {
    current: "",
    roundId: "",
    updatedAt: undefined
  };
}

export const EventAnswerUpdated = {
  encode(message: EventAnswerUpdated, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.current !== "") {
      writer.uint32(10).string(message.current);
    }

    if (message.roundId !== "") {
      writer.uint32(18).string(message.roundId);
    }

    if (message.updatedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventAnswerUpdated {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventAnswerUpdated();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.current = reader.string();
          break;

        case 2:
          message.roundId = reader.string();
          break;

        case 3:
          message.updatedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<EventAnswerUpdated>): EventAnswerUpdated {
    const message = createBaseEventAnswerUpdated();
    message.current = object.current ?? "";
    message.roundId = object.roundId ?? "";
    message.updatedAt = object.updatedAt ?? undefined;
    return message;
  }

};

function createBaseEventNewRound(): EventNewRound {
  return {
    roundId: "",
    startedBy: "",
    startedAt: undefined
  };
}

export const EventNewRound = {
  encode(message: EventNewRound, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.roundId !== "") {
      writer.uint32(10).string(message.roundId);
    }

    if (message.startedBy !== "") {
      writer.uint32(18).string(message.startedBy);
    }

    if (message.startedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.startedAt), writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventNewRound {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventNewRound();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.roundId = reader.string();
          break;

        case 2:
          message.startedBy = reader.string();
          break;

        case 3:
          message.startedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<EventNewRound>): EventNewRound {
    const message = createBaseEventNewRound();
    message.roundId = object.roundId ?? "";
    message.startedBy = object.startedBy ?? "";
    message.startedAt = object.startedAt ?? undefined;
    return message;
  }

};

function createBaseEventTransmitted(): EventTransmitted {
  return {
    configDigest: new Uint8Array(),
    epoch: Long.UZERO
  };
}

export const EventTransmitted = {
  encode(message: EventTransmitted, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.configDigest.length !== 0) {
      writer.uint32(10).bytes(message.configDigest);
    }

    if (!message.epoch.isZero()) {
      writer.uint32(16).uint64(message.epoch);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventTransmitted {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventTransmitted();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.configDigest = reader.bytes();
          break;

        case 2:
          message.epoch = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<EventTransmitted>): EventTransmitted {
    const message = createBaseEventTransmitted();
    message.configDigest = object.configDigest ?? new Uint8Array();
    message.epoch = object.epoch !== undefined && object.epoch !== null ? Long.fromValue(object.epoch) : Long.UZERO;
    return message;
  }

};

function createBaseEventNewTransmission(): EventNewTransmission {
  return {
    feedId: "",
    aggregatorRoundId: 0,
    answer: "",
    transmitter: "",
    observationsTimestamp: Long.ZERO,
    observations: [],
    observers: new Uint8Array(),
    configDigest: new Uint8Array(),
    epochAndRound: undefined
  };
}

export const EventNewTransmission = {
  encode(message: EventNewTransmission, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.feedId !== "") {
      writer.uint32(10).string(message.feedId);
    }

    if (message.aggregatorRoundId !== 0) {
      writer.uint32(16).uint32(message.aggregatorRoundId);
    }

    if (message.answer !== "") {
      writer.uint32(26).string(message.answer);
    }

    if (message.transmitter !== "") {
      writer.uint32(34).string(message.transmitter);
    }

    if (!message.observationsTimestamp.isZero()) {
      writer.uint32(40).int64(message.observationsTimestamp);
    }

    for (const v of message.observations) {
      writer.uint32(50).string(v!);
    }

    if (message.observers.length !== 0) {
      writer.uint32(58).bytes(message.observers);
    }

    if (message.configDigest.length !== 0) {
      writer.uint32(66).bytes(message.configDigest);
    }

    if (message.epochAndRound !== undefined) {
      EpochAndRound.encode(message.epochAndRound, writer.uint32(74).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventNewTransmission {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventNewTransmission();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.feedId = reader.string();
          break;

        case 2:
          message.aggregatorRoundId = reader.uint32();
          break;

        case 3:
          message.answer = reader.string();
          break;

        case 4:
          message.transmitter = reader.string();
          break;

        case 5:
          message.observationsTimestamp = (reader.int64() as Long);
          break;

        case 6:
          message.observations.push(reader.string());
          break;

        case 7:
          message.observers = reader.bytes();
          break;

        case 8:
          message.configDigest = reader.bytes();
          break;

        case 9:
          message.epochAndRound = EpochAndRound.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<EventNewTransmission>): EventNewTransmission {
    const message = createBaseEventNewTransmission();
    message.feedId = object.feedId ?? "";
    message.aggregatorRoundId = object.aggregatorRoundId ?? 0;
    message.answer = object.answer ?? "";
    message.transmitter = object.transmitter ?? "";
    message.observationsTimestamp = object.observationsTimestamp !== undefined && object.observationsTimestamp !== null ? Long.fromValue(object.observationsTimestamp) : Long.ZERO;
    message.observations = object.observations?.map(e => e) || [];
    message.observers = object.observers ?? new Uint8Array();
    message.configDigest = object.configDigest ?? new Uint8Array();
    message.epochAndRound = object.epochAndRound !== undefined && object.epochAndRound !== null ? EpochAndRound.fromPartial(object.epochAndRound) : undefined;
    return message;
  }

};

function createBaseEventConfigSet(): EventConfigSet {
  return {
    configDigest: new Uint8Array(),
    previousConfigBlockNumber: Long.ZERO,
    config: undefined,
    configInfo: undefined
  };
}

export const EventConfigSet = {
  encode(message: EventConfigSet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.configDigest.length !== 0) {
      writer.uint32(10).bytes(message.configDigest);
    }

    if (!message.previousConfigBlockNumber.isZero()) {
      writer.uint32(16).int64(message.previousConfigBlockNumber);
    }

    if (message.config !== undefined) {
      FeedConfig.encode(message.config, writer.uint32(26).fork()).ldelim();
    }

    if (message.configInfo !== undefined) {
      FeedConfigInfo.encode(message.configInfo, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventConfigSet {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventConfigSet();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.configDigest = reader.bytes();
          break;

        case 2:
          message.previousConfigBlockNumber = (reader.int64() as Long);
          break;

        case 3:
          message.config = FeedConfig.decode(reader, reader.uint32());
          break;

        case 4:
          message.configInfo = FeedConfigInfo.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<EventConfigSet>): EventConfigSet {
    const message = createBaseEventConfigSet();
    message.configDigest = object.configDigest ?? new Uint8Array();
    message.previousConfigBlockNumber = object.previousConfigBlockNumber !== undefined && object.previousConfigBlockNumber !== null ? Long.fromValue(object.previousConfigBlockNumber) : Long.ZERO;
    message.config = object.config !== undefined && object.config !== null ? FeedConfig.fromPartial(object.config) : undefined;
    message.configInfo = object.configInfo !== undefined && object.configInfo !== null ? FeedConfigInfo.fromPartial(object.configInfo) : undefined;
    return message;
  }

};