import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Valset, ValsetSDKType, ERC20ToDenom, ERC20ToDenomSDKType } from "./types";
import { MsgValsetConfirm, MsgValsetConfirmSDKType, MsgConfirmBatch, MsgConfirmBatchSDKType, MsgSetOrchestratorAddresses, MsgSetOrchestratorAddressesSDKType } from "./msgs";
import { OutgoingTxBatch, OutgoingTxBatchSDKType, OutgoingTransferTx, OutgoingTransferTxSDKType } from "./batch";
import { Attestation, AttestationSDKType } from "./attestation";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@cosmology/helpers";
export interface Params {
  peggyId: string;
  contractSourceHash: string;
  bridgeEthereumAddress: string;
  bridgeChainId: Long;
  signedValsetsWindow: Long;
  signedBatchesWindow: Long;
  signedClaimsWindow: Long;
  targetBatchTimeout: Long;
  averageBlockTime: Long;
  averageEthereumBlockTime: Long;
  slashFractionValset: Uint8Array;
  slashFractionBatch: Uint8Array;
  slashFractionClaim: Uint8Array;
  slashFractionConflictingClaim: Uint8Array;
  unbondSlashingValsetsWindow: Long;
  slashFractionBadEthSignature: Uint8Array;
  cosmosCoinDenom: string;
  cosmosCoinErc20Contract: string;
  claimSlashingEnabled: boolean;
  bridgeContractStartHeight: Long;
  valsetReward: Coin;
}
export interface ParamsSDKType {
  peggy_id: string;
  contract_source_hash: string;
  bridge_ethereum_address: string;
  bridge_chain_id: Long;
  signed_valsets_window: Long;
  signed_batches_window: Long;
  signed_claims_window: Long;
  target_batch_timeout: Long;
  average_block_time: Long;
  average_ethereum_block_time: Long;
  slash_fraction_valset: Uint8Array;
  slash_fraction_batch: Uint8Array;
  slash_fraction_claim: Uint8Array;
  slash_fraction_conflicting_claim: Uint8Array;
  unbond_slashing_valsets_window: Long;
  slash_fraction_bad_eth_signature: Uint8Array;
  cosmos_coin_denom: string;
  cosmos_coin_erc20_contract: string;
  claim_slashing_enabled: boolean;
  bridge_contract_start_height: Long;
  valset_reward: CoinSDKType;
}
/** GenesisState struct */

export interface GenesisState {
  params: Params;
  lastObservedNonce: Long;
  valsets: Valset[];
  valsetConfirms: MsgValsetConfirm[];
  batches: OutgoingTxBatch[];
  batchConfirms: MsgConfirmBatch[];
  attestations: Attestation[];
  orchestratorAddresses: MsgSetOrchestratorAddresses[];
  erc20ToDenoms: ERC20ToDenom[];
  unbatchedTransfers: OutgoingTransferTx[];
  lastObservedEthereumHeight: Long;
  lastOutgoingBatchId: Long;
  lastOutgoingPoolId: Long;
  lastObservedValset: Valset;
  ethereumBlacklist: string[];
}
/** GenesisState struct */

export interface GenesisStateSDKType {
  params: ParamsSDKType;
  last_observed_nonce: Long;
  valsets: ValsetSDKType[];
  valset_confirms: MsgValsetConfirmSDKType[];
  batches: OutgoingTxBatchSDKType[];
  batch_confirms: MsgConfirmBatchSDKType[];
  attestations: AttestationSDKType[];
  orchestrator_addresses: MsgSetOrchestratorAddressesSDKType[];
  erc20_to_denoms: ERC20ToDenomSDKType[];
  unbatched_transfers: OutgoingTransferTxSDKType[];
  last_observed_ethereum_height: Long;
  last_outgoing_batch_id: Long;
  last_outgoing_pool_id: Long;
  last_observed_valset: ValsetSDKType;
  ethereum_blacklist: string[];
}

function createBaseParams(): Params {
  return {
    peggyId: "",
    contractSourceHash: "",
    bridgeEthereumAddress: "",
    bridgeChainId: Long.UZERO,
    signedValsetsWindow: Long.UZERO,
    signedBatchesWindow: Long.UZERO,
    signedClaimsWindow: Long.UZERO,
    targetBatchTimeout: Long.UZERO,
    averageBlockTime: Long.UZERO,
    averageEthereumBlockTime: Long.UZERO,
    slashFractionValset: new Uint8Array(),
    slashFractionBatch: new Uint8Array(),
    slashFractionClaim: new Uint8Array(),
    slashFractionConflictingClaim: new Uint8Array(),
    unbondSlashingValsetsWindow: Long.UZERO,
    slashFractionBadEthSignature: new Uint8Array(),
    cosmosCoinDenom: "",
    cosmosCoinErc20Contract: "",
    claimSlashingEnabled: false,
    bridgeContractStartHeight: Long.UZERO,
    valsetReward: undefined
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.peggyId !== "") {
      writer.uint32(10).string(message.peggyId);
    }

    if (message.contractSourceHash !== "") {
      writer.uint32(18).string(message.contractSourceHash);
    }

    if (message.bridgeEthereumAddress !== "") {
      writer.uint32(26).string(message.bridgeEthereumAddress);
    }

    if (!message.bridgeChainId.isZero()) {
      writer.uint32(32).uint64(message.bridgeChainId);
    }

    if (!message.signedValsetsWindow.isZero()) {
      writer.uint32(40).uint64(message.signedValsetsWindow);
    }

    if (!message.signedBatchesWindow.isZero()) {
      writer.uint32(48).uint64(message.signedBatchesWindow);
    }

    if (!message.signedClaimsWindow.isZero()) {
      writer.uint32(56).uint64(message.signedClaimsWindow);
    }

    if (!message.targetBatchTimeout.isZero()) {
      writer.uint32(64).uint64(message.targetBatchTimeout);
    }

    if (!message.averageBlockTime.isZero()) {
      writer.uint32(72).uint64(message.averageBlockTime);
    }

    if (!message.averageEthereumBlockTime.isZero()) {
      writer.uint32(80).uint64(message.averageEthereumBlockTime);
    }

    if (message.slashFractionValset.length !== 0) {
      writer.uint32(90).bytes(message.slashFractionValset);
    }

    if (message.slashFractionBatch.length !== 0) {
      writer.uint32(98).bytes(message.slashFractionBatch);
    }

    if (message.slashFractionClaim.length !== 0) {
      writer.uint32(106).bytes(message.slashFractionClaim);
    }

    if (message.slashFractionConflictingClaim.length !== 0) {
      writer.uint32(114).bytes(message.slashFractionConflictingClaim);
    }

    if (!message.unbondSlashingValsetsWindow.isZero()) {
      writer.uint32(120).uint64(message.unbondSlashingValsetsWindow);
    }

    if (message.slashFractionBadEthSignature.length !== 0) {
      writer.uint32(130).bytes(message.slashFractionBadEthSignature);
    }

    if (message.cosmosCoinDenom !== "") {
      writer.uint32(138).string(message.cosmosCoinDenom);
    }

    if (message.cosmosCoinErc20Contract !== "") {
      writer.uint32(146).string(message.cosmosCoinErc20Contract);
    }

    if (message.claimSlashingEnabled === true) {
      writer.uint32(152).bool(message.claimSlashingEnabled);
    }

    if (!message.bridgeContractStartHeight.isZero()) {
      writer.uint32(160).uint64(message.bridgeContractStartHeight);
    }

    if (message.valsetReward !== undefined) {
      Coin.encode(message.valsetReward, writer.uint32(170).fork()).ldelim();
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
          message.peggyId = reader.string();
          break;

        case 2:
          message.contractSourceHash = reader.string();
          break;

        case 3:
          message.bridgeEthereumAddress = reader.string();
          break;

        case 4:
          message.bridgeChainId = (reader.uint64() as Long);
          break;

        case 5:
          message.signedValsetsWindow = (reader.uint64() as Long);
          break;

        case 6:
          message.signedBatchesWindow = (reader.uint64() as Long);
          break;

        case 7:
          message.signedClaimsWindow = (reader.uint64() as Long);
          break;

        case 8:
          message.targetBatchTimeout = (reader.uint64() as Long);
          break;

        case 9:
          message.averageBlockTime = (reader.uint64() as Long);
          break;

        case 10:
          message.averageEthereumBlockTime = (reader.uint64() as Long);
          break;

        case 11:
          message.slashFractionValset = reader.bytes();
          break;

        case 12:
          message.slashFractionBatch = reader.bytes();
          break;

        case 13:
          message.slashFractionClaim = reader.bytes();
          break;

        case 14:
          message.slashFractionConflictingClaim = reader.bytes();
          break;

        case 15:
          message.unbondSlashingValsetsWindow = (reader.uint64() as Long);
          break;

        case 16:
          message.slashFractionBadEthSignature = reader.bytes();
          break;

        case 17:
          message.cosmosCoinDenom = reader.string();
          break;

        case 18:
          message.cosmosCoinErc20Contract = reader.string();
          break;

        case 19:
          message.claimSlashingEnabled = reader.bool();
          break;

        case 20:
          message.bridgeContractStartHeight = (reader.uint64() as Long);
          break;

        case 21:
          message.valsetReward = Coin.decode(reader, reader.uint32());
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
    message.peggyId = object.peggyId ?? "";
    message.contractSourceHash = object.contractSourceHash ?? "";
    message.bridgeEthereumAddress = object.bridgeEthereumAddress ?? "";
    message.bridgeChainId = object.bridgeChainId !== undefined && object.bridgeChainId !== null ? Long.fromValue(object.bridgeChainId) : Long.UZERO;
    message.signedValsetsWindow = object.signedValsetsWindow !== undefined && object.signedValsetsWindow !== null ? Long.fromValue(object.signedValsetsWindow) : Long.UZERO;
    message.signedBatchesWindow = object.signedBatchesWindow !== undefined && object.signedBatchesWindow !== null ? Long.fromValue(object.signedBatchesWindow) : Long.UZERO;
    message.signedClaimsWindow = object.signedClaimsWindow !== undefined && object.signedClaimsWindow !== null ? Long.fromValue(object.signedClaimsWindow) : Long.UZERO;
    message.targetBatchTimeout = object.targetBatchTimeout !== undefined && object.targetBatchTimeout !== null ? Long.fromValue(object.targetBatchTimeout) : Long.UZERO;
    message.averageBlockTime = object.averageBlockTime !== undefined && object.averageBlockTime !== null ? Long.fromValue(object.averageBlockTime) : Long.UZERO;
    message.averageEthereumBlockTime = object.averageEthereumBlockTime !== undefined && object.averageEthereumBlockTime !== null ? Long.fromValue(object.averageEthereumBlockTime) : Long.UZERO;
    message.slashFractionValset = object.slashFractionValset ?? new Uint8Array();
    message.slashFractionBatch = object.slashFractionBatch ?? new Uint8Array();
    message.slashFractionClaim = object.slashFractionClaim ?? new Uint8Array();
    message.slashFractionConflictingClaim = object.slashFractionConflictingClaim ?? new Uint8Array();
    message.unbondSlashingValsetsWindow = object.unbondSlashingValsetsWindow !== undefined && object.unbondSlashingValsetsWindow !== null ? Long.fromValue(object.unbondSlashingValsetsWindow) : Long.UZERO;
    message.slashFractionBadEthSignature = object.slashFractionBadEthSignature ?? new Uint8Array();
    message.cosmosCoinDenom = object.cosmosCoinDenom ?? "";
    message.cosmosCoinErc20Contract = object.cosmosCoinErc20Contract ?? "";
    message.claimSlashingEnabled = object.claimSlashingEnabled ?? false;
    message.bridgeContractStartHeight = object.bridgeContractStartHeight !== undefined && object.bridgeContractStartHeight !== null ? Long.fromValue(object.bridgeContractStartHeight) : Long.UZERO;
    message.valsetReward = object.valsetReward !== undefined && object.valsetReward !== null ? Coin.fromPartial(object.valsetReward) : undefined;
    return message;
  }

};

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    lastObservedNonce: Long.UZERO,
    valsets: [],
    valsetConfirms: [],
    batches: [],
    batchConfirms: [],
    attestations: [],
    orchestratorAddresses: [],
    erc20ToDenoms: [],
    unbatchedTransfers: [],
    lastObservedEthereumHeight: Long.UZERO,
    lastOutgoingBatchId: Long.UZERO,
    lastOutgoingPoolId: Long.UZERO,
    lastObservedValset: undefined,
    ethereumBlacklist: []
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    if (!message.lastObservedNonce.isZero()) {
      writer.uint32(16).uint64(message.lastObservedNonce);
    }

    for (const v of message.valsets) {
      Valset.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    for (const v of message.valsetConfirms) {
      MsgValsetConfirm.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    for (const v of message.batches) {
      OutgoingTxBatch.encode(v!, writer.uint32(42).fork()).ldelim();
    }

    for (const v of message.batchConfirms) {
      MsgConfirmBatch.encode(v!, writer.uint32(50).fork()).ldelim();
    }

    for (const v of message.attestations) {
      Attestation.encode(v!, writer.uint32(58).fork()).ldelim();
    }

    for (const v of message.orchestratorAddresses) {
      MsgSetOrchestratorAddresses.encode(v!, writer.uint32(66).fork()).ldelim();
    }

    for (const v of message.erc20ToDenoms) {
      ERC20ToDenom.encode(v!, writer.uint32(74).fork()).ldelim();
    }

    for (const v of message.unbatchedTransfers) {
      OutgoingTransferTx.encode(v!, writer.uint32(82).fork()).ldelim();
    }

    if (!message.lastObservedEthereumHeight.isZero()) {
      writer.uint32(88).uint64(message.lastObservedEthereumHeight);
    }

    if (!message.lastOutgoingBatchId.isZero()) {
      writer.uint32(96).uint64(message.lastOutgoingBatchId);
    }

    if (!message.lastOutgoingPoolId.isZero()) {
      writer.uint32(104).uint64(message.lastOutgoingPoolId);
    }

    if (message.lastObservedValset !== undefined) {
      Valset.encode(message.lastObservedValset, writer.uint32(114).fork()).ldelim();
    }

    for (const v of message.ethereumBlacklist) {
      writer.uint32(122).string(v!);
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
          message.lastObservedNonce = (reader.uint64() as Long);
          break;

        case 3:
          message.valsets.push(Valset.decode(reader, reader.uint32()));
          break;

        case 4:
          message.valsetConfirms.push(MsgValsetConfirm.decode(reader, reader.uint32()));
          break;

        case 5:
          message.batches.push(OutgoingTxBatch.decode(reader, reader.uint32()));
          break;

        case 6:
          message.batchConfirms.push(MsgConfirmBatch.decode(reader, reader.uint32()));
          break;

        case 7:
          message.attestations.push(Attestation.decode(reader, reader.uint32()));
          break;

        case 8:
          message.orchestratorAddresses.push(MsgSetOrchestratorAddresses.decode(reader, reader.uint32()));
          break;

        case 9:
          message.erc20ToDenoms.push(ERC20ToDenom.decode(reader, reader.uint32()));
          break;

        case 10:
          message.unbatchedTransfers.push(OutgoingTransferTx.decode(reader, reader.uint32()));
          break;

        case 11:
          message.lastObservedEthereumHeight = (reader.uint64() as Long);
          break;

        case 12:
          message.lastOutgoingBatchId = (reader.uint64() as Long);
          break;

        case 13:
          message.lastOutgoingPoolId = (reader.uint64() as Long);
          break;

        case 14:
          message.lastObservedValset = Valset.decode(reader, reader.uint32());
          break;

        case 15:
          message.ethereumBlacklist.push(reader.string());
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
    message.lastObservedNonce = object.lastObservedNonce !== undefined && object.lastObservedNonce !== null ? Long.fromValue(object.lastObservedNonce) : Long.UZERO;
    message.valsets = object.valsets?.map(e => Valset.fromPartial(e)) || [];
    message.valsetConfirms = object.valsetConfirms?.map(e => MsgValsetConfirm.fromPartial(e)) || [];
    message.batches = object.batches?.map(e => OutgoingTxBatch.fromPartial(e)) || [];
    message.batchConfirms = object.batchConfirms?.map(e => MsgConfirmBatch.fromPartial(e)) || [];
    message.attestations = object.attestations?.map(e => Attestation.fromPartial(e)) || [];
    message.orchestratorAddresses = object.orchestratorAddresses?.map(e => MsgSetOrchestratorAddresses.fromPartial(e)) || [];
    message.erc20ToDenoms = object.erc20ToDenoms?.map(e => ERC20ToDenom.fromPartial(e)) || [];
    message.unbatchedTransfers = object.unbatchedTransfers?.map(e => OutgoingTransferTx.fromPartial(e)) || [];
    message.lastObservedEthereumHeight = object.lastObservedEthereumHeight !== undefined && object.lastObservedEthereumHeight !== null ? Long.fromValue(object.lastObservedEthereumHeight) : Long.UZERO;
    message.lastOutgoingBatchId = object.lastOutgoingBatchId !== undefined && object.lastOutgoingBatchId !== null ? Long.fromValue(object.lastOutgoingBatchId) : Long.UZERO;
    message.lastOutgoingPoolId = object.lastOutgoingPoolId !== undefined && object.lastOutgoingPoolId !== null ? Long.fromValue(object.lastOutgoingPoolId) : Long.UZERO;
    message.lastObservedValset = object.lastObservedValset !== undefined && object.lastObservedValset !== null ? Valset.fromPartial(object.lastObservedValset) : undefined;
    message.ethereumBlacklist = object.ethereumBlacklist?.map(e => e) || [];
    return message;
  }

};