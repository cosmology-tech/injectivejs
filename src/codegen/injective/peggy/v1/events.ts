import { ClaimType, ClaimTypeSDKType } from "./attestation";
import { BridgeValidator, BridgeValidatorSDKType } from "./types";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
export interface EventAttestationObserved {
  attestationType: ClaimType;
  bridgeContract: string;
  bridgeChainId: Long;
  attestationId: Uint8Array;
  nonce: Long;
}
export interface EventAttestationObservedSDKType {
  attestation_type: ClaimTypeSDKType;
  bridge_contract: string;
  bridge_chain_id: Long;
  attestation_id: Uint8Array;
  nonce: Long;
}
export interface EventBridgeWithdrawCanceled {
  bridgeContract: string;
  bridgeChainId: Long;
}
export interface EventBridgeWithdrawCanceledSDKType {
  bridge_contract: string;
  bridge_chain_id: Long;
}
export interface EventOutgoingBatch {
  denom: string;
  orchestratorAddress: string;
  batchNonce: Long;
  batchTimeout: Long;
  batchTxIds: Long[];
}
export interface EventOutgoingBatchSDKType {
  denom: string;
  orchestrator_address: string;
  batch_nonce: Long;
  batch_timeout: Long;
  batch_tx_ids: Long[];
}
export interface EventOutgoingBatchCanceled {
  bridgeContract: string;
  bridgeChainId: Long;
  batchId: Long;
  nonce: Long;
}
export interface EventOutgoingBatchCanceledSDKType {
  bridge_contract: string;
  bridge_chain_id: Long;
  batch_id: Long;
  nonce: Long;
}
export interface EventValsetUpdateRequest {
  valsetNonce: Long;
  valsetHeight: Long;
  valsetMembers: BridgeValidator[];
  rewardAmount: string;
  rewardToken: string;
}
export interface EventValsetUpdateRequestSDKType {
  valset_nonce: Long;
  valset_height: Long;
  valset_members: BridgeValidatorSDKType[];
  reward_amount: string;
  reward_token: string;
}
export interface EventSetOrchestratorAddresses {
  validatorAddress: string;
  orchestratorAddress: string;
  operatorEthAddress: string;
}
export interface EventSetOrchestratorAddressesSDKType {
  validator_address: string;
  orchestrator_address: string;
  operator_eth_address: string;
}
export interface EventValsetConfirm {
  valsetNonce: Long;
  orchestratorAddress: string;
}
export interface EventValsetConfirmSDKType {
  valset_nonce: Long;
  orchestrator_address: string;
}
export interface EventSendToEth {
  outgoingTxId: Long;
  sender: string;
  receiver: string;
  amount: string;
  bridgeFee: string;
}
export interface EventSendToEthSDKType {
  outgoing_tx_id: Long;
  sender: string;
  receiver: string;
  amount: string;
  bridge_fee: string;
}
export interface EventConfirmBatch {
  batchNonce: Long;
  orchestratorAddress: string;
}
export interface EventConfirmBatchSDKType {
  batch_nonce: Long;
  orchestrator_address: string;
}
export interface EventAttestationVote {
  eventNonce: Long;
  attestationId: Uint8Array;
  voter: string;
}
export interface EventAttestationVoteSDKType {
  event_nonce: Long;
  attestation_id: Uint8Array;
  voter: string;
}
export interface EventDepositClaim {
  eventNonce: Long;
  eventHeight: Long;
  attestationId: Uint8Array;
  ethereumSender: string;
  cosmosReceiver: string;
  tokenContract: string;
  amount: string;
  orchestratorAddress: string;
  data: string;
}
export interface EventDepositClaimSDKType {
  event_nonce: Long;
  event_height: Long;
  attestation_id: Uint8Array;
  ethereum_sender: string;
  cosmos_receiver: string;
  token_contract: string;
  amount: string;
  orchestrator_address: string;
  data: string;
}
export interface EventWithdrawClaim {
  eventNonce: Long;
  eventHeight: Long;
  attestationId: Uint8Array;
  batchNonce: Long;
  tokenContract: string;
  orchestratorAddress: string;
}
export interface EventWithdrawClaimSDKType {
  event_nonce: Long;
  event_height: Long;
  attestation_id: Uint8Array;
  batch_nonce: Long;
  token_contract: string;
  orchestrator_address: string;
}
export interface EventERC20DeployedClaim {
  eventNonce: Long;
  eventHeight: Long;
  attestationId: Uint8Array;
  cosmosDenom: string;
  tokenContract: string;
  name: string;
  symbol: string;
  decimals: Long;
  orchestratorAddress: string;
}
export interface EventERC20DeployedClaimSDKType {
  event_nonce: Long;
  event_height: Long;
  attestation_id: Uint8Array;
  cosmos_denom: string;
  token_contract: string;
  name: string;
  symbol: string;
  decimals: Long;
  orchestrator_address: string;
}
export interface EventValsetUpdateClaim {
  eventNonce: Long;
  eventHeight: Long;
  attestationId: Uint8Array;
  valsetNonce: Long;
  valsetMembers: BridgeValidator[];
  rewardAmount: string;
  rewardToken: string;
  orchestratorAddress: string;
}
export interface EventValsetUpdateClaimSDKType {
  event_nonce: Long;
  event_height: Long;
  attestation_id: Uint8Array;
  valset_nonce: Long;
  valset_members: BridgeValidatorSDKType[];
  reward_amount: string;
  reward_token: string;
  orchestrator_address: string;
}
export interface EventCancelSendToEth {
  outgoingTxId: Long;
}
export interface EventCancelSendToEthSDKType {
  outgoing_tx_id: Long;
}
export interface EventSubmitBadSignatureEvidence {
  badEthSignature: string;
  badEthSignatureSubject: string;
}
export interface EventSubmitBadSignatureEvidenceSDKType {
  bad_eth_signature: string;
  bad_eth_signature_subject: string;
}

function createBaseEventAttestationObserved(): EventAttestationObserved {
  return {
    attestationType: 0,
    bridgeContract: "",
    bridgeChainId: Long.UZERO,
    attestationId: new Uint8Array(),
    nonce: Long.UZERO
  };
}

export const EventAttestationObserved = {
  encode(message: EventAttestationObserved, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.attestationType !== 0) {
      writer.uint32(8).int32(message.attestationType);
    }

    if (message.bridgeContract !== "") {
      writer.uint32(18).string(message.bridgeContract);
    }

    if (!message.bridgeChainId.isZero()) {
      writer.uint32(24).uint64(message.bridgeChainId);
    }

    if (message.attestationId.length !== 0) {
      writer.uint32(34).bytes(message.attestationId);
    }

    if (!message.nonce.isZero()) {
      writer.uint32(40).uint64(message.nonce);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventAttestationObserved {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventAttestationObserved();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.attestationType = (reader.int32() as any);
          break;

        case 2:
          message.bridgeContract = reader.string();
          break;

        case 3:
          message.bridgeChainId = (reader.uint64() as Long);
          break;

        case 4:
          message.attestationId = reader.bytes();
          break;

        case 5:
          message.nonce = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<EventAttestationObserved>): EventAttestationObserved {
    const message = createBaseEventAttestationObserved();
    message.attestationType = object.attestationType ?? 0;
    message.bridgeContract = object.bridgeContract ?? "";
    message.bridgeChainId = object.bridgeChainId !== undefined && object.bridgeChainId !== null ? Long.fromValue(object.bridgeChainId) : Long.UZERO;
    message.attestationId = object.attestationId ?? new Uint8Array();
    message.nonce = object.nonce !== undefined && object.nonce !== null ? Long.fromValue(object.nonce) : Long.UZERO;
    return message;
  }

};

function createBaseEventBridgeWithdrawCanceled(): EventBridgeWithdrawCanceled {
  return {
    bridgeContract: "",
    bridgeChainId: Long.UZERO
  };
}

export const EventBridgeWithdrawCanceled = {
  encode(message: EventBridgeWithdrawCanceled, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bridgeContract !== "") {
      writer.uint32(10).string(message.bridgeContract);
    }

    if (!message.bridgeChainId.isZero()) {
      writer.uint32(16).uint64(message.bridgeChainId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventBridgeWithdrawCanceled {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventBridgeWithdrawCanceled();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.bridgeContract = reader.string();
          break;

        case 2:
          message.bridgeChainId = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<EventBridgeWithdrawCanceled>): EventBridgeWithdrawCanceled {
    const message = createBaseEventBridgeWithdrawCanceled();
    message.bridgeContract = object.bridgeContract ?? "";
    message.bridgeChainId = object.bridgeChainId !== undefined && object.bridgeChainId !== null ? Long.fromValue(object.bridgeChainId) : Long.UZERO;
    return message;
  }

};

function createBaseEventOutgoingBatch(): EventOutgoingBatch {
  return {
    denom: "",
    orchestratorAddress: "",
    batchNonce: Long.UZERO,
    batchTimeout: Long.UZERO,
    batchTxIds: []
  };
}

export const EventOutgoingBatch = {
  encode(message: EventOutgoingBatch, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    if (message.orchestratorAddress !== "") {
      writer.uint32(18).string(message.orchestratorAddress);
    }

    if (!message.batchNonce.isZero()) {
      writer.uint32(24).uint64(message.batchNonce);
    }

    if (!message.batchTimeout.isZero()) {
      writer.uint32(32).uint64(message.batchTimeout);
    }

    writer.uint32(42).fork();

    for (const v of message.batchTxIds) {
      writer.uint64(v);
    }

    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventOutgoingBatch {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventOutgoingBatch();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;

        case 2:
          message.orchestratorAddress = reader.string();
          break;

        case 3:
          message.batchNonce = (reader.uint64() as Long);
          break;

        case 4:
          message.batchTimeout = (reader.uint64() as Long);
          break;

        case 5:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;

            while (reader.pos < end2) {
              message.batchTxIds.push((reader.uint64() as Long));
            }
          } else {
            message.batchTxIds.push((reader.uint64() as Long));
          }

          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<EventOutgoingBatch>): EventOutgoingBatch {
    const message = createBaseEventOutgoingBatch();
    message.denom = object.denom ?? "";
    message.orchestratorAddress = object.orchestratorAddress ?? "";
    message.batchNonce = object.batchNonce !== undefined && object.batchNonce !== null ? Long.fromValue(object.batchNonce) : Long.UZERO;
    message.batchTimeout = object.batchTimeout !== undefined && object.batchTimeout !== null ? Long.fromValue(object.batchTimeout) : Long.UZERO;
    message.batchTxIds = object.batchTxIds?.map(e => Long.fromValue(e)) || [];
    return message;
  }

};

function createBaseEventOutgoingBatchCanceled(): EventOutgoingBatchCanceled {
  return {
    bridgeContract: "",
    bridgeChainId: Long.UZERO,
    batchId: Long.UZERO,
    nonce: Long.UZERO
  };
}

export const EventOutgoingBatchCanceled = {
  encode(message: EventOutgoingBatchCanceled, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bridgeContract !== "") {
      writer.uint32(10).string(message.bridgeContract);
    }

    if (!message.bridgeChainId.isZero()) {
      writer.uint32(16).uint64(message.bridgeChainId);
    }

    if (!message.batchId.isZero()) {
      writer.uint32(24).uint64(message.batchId);
    }

    if (!message.nonce.isZero()) {
      writer.uint32(32).uint64(message.nonce);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventOutgoingBatchCanceled {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventOutgoingBatchCanceled();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.bridgeContract = reader.string();
          break;

        case 2:
          message.bridgeChainId = (reader.uint64() as Long);
          break;

        case 3:
          message.batchId = (reader.uint64() as Long);
          break;

        case 4:
          message.nonce = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<EventOutgoingBatchCanceled>): EventOutgoingBatchCanceled {
    const message = createBaseEventOutgoingBatchCanceled();
    message.bridgeContract = object.bridgeContract ?? "";
    message.bridgeChainId = object.bridgeChainId !== undefined && object.bridgeChainId !== null ? Long.fromValue(object.bridgeChainId) : Long.UZERO;
    message.batchId = object.batchId !== undefined && object.batchId !== null ? Long.fromValue(object.batchId) : Long.UZERO;
    message.nonce = object.nonce !== undefined && object.nonce !== null ? Long.fromValue(object.nonce) : Long.UZERO;
    return message;
  }

};

function createBaseEventValsetUpdateRequest(): EventValsetUpdateRequest {
  return {
    valsetNonce: Long.UZERO,
    valsetHeight: Long.UZERO,
    valsetMembers: [],
    rewardAmount: "",
    rewardToken: ""
  };
}

export const EventValsetUpdateRequest = {
  encode(message: EventValsetUpdateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.valsetNonce.isZero()) {
      writer.uint32(8).uint64(message.valsetNonce);
    }

    if (!message.valsetHeight.isZero()) {
      writer.uint32(16).uint64(message.valsetHeight);
    }

    for (const v of message.valsetMembers) {
      BridgeValidator.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    if (message.rewardAmount !== "") {
      writer.uint32(34).string(message.rewardAmount);
    }

    if (message.rewardToken !== "") {
      writer.uint32(42).string(message.rewardToken);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventValsetUpdateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventValsetUpdateRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.valsetNonce = (reader.uint64() as Long);
          break;

        case 2:
          message.valsetHeight = (reader.uint64() as Long);
          break;

        case 3:
          message.valsetMembers.push(BridgeValidator.decode(reader, reader.uint32()));
          break;

        case 4:
          message.rewardAmount = reader.string();
          break;

        case 5:
          message.rewardToken = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<EventValsetUpdateRequest>): EventValsetUpdateRequest {
    const message = createBaseEventValsetUpdateRequest();
    message.valsetNonce = object.valsetNonce !== undefined && object.valsetNonce !== null ? Long.fromValue(object.valsetNonce) : Long.UZERO;
    message.valsetHeight = object.valsetHeight !== undefined && object.valsetHeight !== null ? Long.fromValue(object.valsetHeight) : Long.UZERO;
    message.valsetMembers = object.valsetMembers?.map(e => BridgeValidator.fromPartial(e)) || [];
    message.rewardAmount = object.rewardAmount ?? "";
    message.rewardToken = object.rewardToken ?? "";
    return message;
  }

};

function createBaseEventSetOrchestratorAddresses(): EventSetOrchestratorAddresses {
  return {
    validatorAddress: "",
    orchestratorAddress: "",
    operatorEthAddress: ""
  };
}

export const EventSetOrchestratorAddresses = {
  encode(message: EventSetOrchestratorAddresses, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }

    if (message.orchestratorAddress !== "") {
      writer.uint32(18).string(message.orchestratorAddress);
    }

    if (message.operatorEthAddress !== "") {
      writer.uint32(26).string(message.operatorEthAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventSetOrchestratorAddresses {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSetOrchestratorAddresses();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
          break;

        case 2:
          message.orchestratorAddress = reader.string();
          break;

        case 3:
          message.operatorEthAddress = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<EventSetOrchestratorAddresses>): EventSetOrchestratorAddresses {
    const message = createBaseEventSetOrchestratorAddresses();
    message.validatorAddress = object.validatorAddress ?? "";
    message.orchestratorAddress = object.orchestratorAddress ?? "";
    message.operatorEthAddress = object.operatorEthAddress ?? "";
    return message;
  }

};

function createBaseEventValsetConfirm(): EventValsetConfirm {
  return {
    valsetNonce: Long.UZERO,
    orchestratorAddress: ""
  };
}

export const EventValsetConfirm = {
  encode(message: EventValsetConfirm, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.valsetNonce.isZero()) {
      writer.uint32(8).uint64(message.valsetNonce);
    }

    if (message.orchestratorAddress !== "") {
      writer.uint32(18).string(message.orchestratorAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventValsetConfirm {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventValsetConfirm();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.valsetNonce = (reader.uint64() as Long);
          break;

        case 2:
          message.orchestratorAddress = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<EventValsetConfirm>): EventValsetConfirm {
    const message = createBaseEventValsetConfirm();
    message.valsetNonce = object.valsetNonce !== undefined && object.valsetNonce !== null ? Long.fromValue(object.valsetNonce) : Long.UZERO;
    message.orchestratorAddress = object.orchestratorAddress ?? "";
    return message;
  }

};

function createBaseEventSendToEth(): EventSendToEth {
  return {
    outgoingTxId: Long.UZERO,
    sender: "",
    receiver: "",
    amount: "",
    bridgeFee: ""
  };
}

export const EventSendToEth = {
  encode(message: EventSendToEth, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.outgoingTxId.isZero()) {
      writer.uint32(8).uint64(message.outgoingTxId);
    }

    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }

    if (message.receiver !== "") {
      writer.uint32(26).string(message.receiver);
    }

    if (message.amount !== "") {
      writer.uint32(34).string(message.amount);
    }

    if (message.bridgeFee !== "") {
      writer.uint32(42).string(message.bridgeFee);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventSendToEth {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSendToEth();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.outgoingTxId = (reader.uint64() as Long);
          break;

        case 2:
          message.sender = reader.string();
          break;

        case 3:
          message.receiver = reader.string();
          break;

        case 4:
          message.amount = reader.string();
          break;

        case 5:
          message.bridgeFee = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<EventSendToEth>): EventSendToEth {
    const message = createBaseEventSendToEth();
    message.outgoingTxId = object.outgoingTxId !== undefined && object.outgoingTxId !== null ? Long.fromValue(object.outgoingTxId) : Long.UZERO;
    message.sender = object.sender ?? "";
    message.receiver = object.receiver ?? "";
    message.amount = object.amount ?? "";
    message.bridgeFee = object.bridgeFee ?? "";
    return message;
  }

};

function createBaseEventConfirmBatch(): EventConfirmBatch {
  return {
    batchNonce: Long.UZERO,
    orchestratorAddress: ""
  };
}

export const EventConfirmBatch = {
  encode(message: EventConfirmBatch, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.batchNonce.isZero()) {
      writer.uint32(8).uint64(message.batchNonce);
    }

    if (message.orchestratorAddress !== "") {
      writer.uint32(18).string(message.orchestratorAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventConfirmBatch {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventConfirmBatch();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.batchNonce = (reader.uint64() as Long);
          break;

        case 2:
          message.orchestratorAddress = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<EventConfirmBatch>): EventConfirmBatch {
    const message = createBaseEventConfirmBatch();
    message.batchNonce = object.batchNonce !== undefined && object.batchNonce !== null ? Long.fromValue(object.batchNonce) : Long.UZERO;
    message.orchestratorAddress = object.orchestratorAddress ?? "";
    return message;
  }

};

function createBaseEventAttestationVote(): EventAttestationVote {
  return {
    eventNonce: Long.UZERO,
    attestationId: new Uint8Array(),
    voter: ""
  };
}

export const EventAttestationVote = {
  encode(message: EventAttestationVote, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.eventNonce.isZero()) {
      writer.uint32(8).uint64(message.eventNonce);
    }

    if (message.attestationId.length !== 0) {
      writer.uint32(18).bytes(message.attestationId);
    }

    if (message.voter !== "") {
      writer.uint32(26).string(message.voter);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventAttestationVote {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventAttestationVote();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.eventNonce = (reader.uint64() as Long);
          break;

        case 2:
          message.attestationId = reader.bytes();
          break;

        case 3:
          message.voter = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<EventAttestationVote>): EventAttestationVote {
    const message = createBaseEventAttestationVote();
    message.eventNonce = object.eventNonce !== undefined && object.eventNonce !== null ? Long.fromValue(object.eventNonce) : Long.UZERO;
    message.attestationId = object.attestationId ?? new Uint8Array();
    message.voter = object.voter ?? "";
    return message;
  }

};

function createBaseEventDepositClaim(): EventDepositClaim {
  return {
    eventNonce: Long.UZERO,
    eventHeight: Long.UZERO,
    attestationId: new Uint8Array(),
    ethereumSender: "",
    cosmosReceiver: "",
    tokenContract: "",
    amount: "",
    orchestratorAddress: "",
    data: ""
  };
}

export const EventDepositClaim = {
  encode(message: EventDepositClaim, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.eventNonce.isZero()) {
      writer.uint32(8).uint64(message.eventNonce);
    }

    if (!message.eventHeight.isZero()) {
      writer.uint32(16).uint64(message.eventHeight);
    }

    if (message.attestationId.length !== 0) {
      writer.uint32(26).bytes(message.attestationId);
    }

    if (message.ethereumSender !== "") {
      writer.uint32(34).string(message.ethereumSender);
    }

    if (message.cosmosReceiver !== "") {
      writer.uint32(42).string(message.cosmosReceiver);
    }

    if (message.tokenContract !== "") {
      writer.uint32(50).string(message.tokenContract);
    }

    if (message.amount !== "") {
      writer.uint32(58).string(message.amount);
    }

    if (message.orchestratorAddress !== "") {
      writer.uint32(66).string(message.orchestratorAddress);
    }

    if (message.data !== "") {
      writer.uint32(74).string(message.data);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventDepositClaim {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventDepositClaim();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.eventNonce = (reader.uint64() as Long);
          break;

        case 2:
          message.eventHeight = (reader.uint64() as Long);
          break;

        case 3:
          message.attestationId = reader.bytes();
          break;

        case 4:
          message.ethereumSender = reader.string();
          break;

        case 5:
          message.cosmosReceiver = reader.string();
          break;

        case 6:
          message.tokenContract = reader.string();
          break;

        case 7:
          message.amount = reader.string();
          break;

        case 8:
          message.orchestratorAddress = reader.string();
          break;

        case 9:
          message.data = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<EventDepositClaim>): EventDepositClaim {
    const message = createBaseEventDepositClaim();
    message.eventNonce = object.eventNonce !== undefined && object.eventNonce !== null ? Long.fromValue(object.eventNonce) : Long.UZERO;
    message.eventHeight = object.eventHeight !== undefined && object.eventHeight !== null ? Long.fromValue(object.eventHeight) : Long.UZERO;
    message.attestationId = object.attestationId ?? new Uint8Array();
    message.ethereumSender = object.ethereumSender ?? "";
    message.cosmosReceiver = object.cosmosReceiver ?? "";
    message.tokenContract = object.tokenContract ?? "";
    message.amount = object.amount ?? "";
    message.orchestratorAddress = object.orchestratorAddress ?? "";
    message.data = object.data ?? "";
    return message;
  }

};

function createBaseEventWithdrawClaim(): EventWithdrawClaim {
  return {
    eventNonce: Long.UZERO,
    eventHeight: Long.UZERO,
    attestationId: new Uint8Array(),
    batchNonce: Long.UZERO,
    tokenContract: "",
    orchestratorAddress: ""
  };
}

export const EventWithdrawClaim = {
  encode(message: EventWithdrawClaim, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.eventNonce.isZero()) {
      writer.uint32(8).uint64(message.eventNonce);
    }

    if (!message.eventHeight.isZero()) {
      writer.uint32(16).uint64(message.eventHeight);
    }

    if (message.attestationId.length !== 0) {
      writer.uint32(26).bytes(message.attestationId);
    }

    if (!message.batchNonce.isZero()) {
      writer.uint32(32).uint64(message.batchNonce);
    }

    if (message.tokenContract !== "") {
      writer.uint32(42).string(message.tokenContract);
    }

    if (message.orchestratorAddress !== "") {
      writer.uint32(50).string(message.orchestratorAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventWithdrawClaim {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventWithdrawClaim();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.eventNonce = (reader.uint64() as Long);
          break;

        case 2:
          message.eventHeight = (reader.uint64() as Long);
          break;

        case 3:
          message.attestationId = reader.bytes();
          break;

        case 4:
          message.batchNonce = (reader.uint64() as Long);
          break;

        case 5:
          message.tokenContract = reader.string();
          break;

        case 6:
          message.orchestratorAddress = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<EventWithdrawClaim>): EventWithdrawClaim {
    const message = createBaseEventWithdrawClaim();
    message.eventNonce = object.eventNonce !== undefined && object.eventNonce !== null ? Long.fromValue(object.eventNonce) : Long.UZERO;
    message.eventHeight = object.eventHeight !== undefined && object.eventHeight !== null ? Long.fromValue(object.eventHeight) : Long.UZERO;
    message.attestationId = object.attestationId ?? new Uint8Array();
    message.batchNonce = object.batchNonce !== undefined && object.batchNonce !== null ? Long.fromValue(object.batchNonce) : Long.UZERO;
    message.tokenContract = object.tokenContract ?? "";
    message.orchestratorAddress = object.orchestratorAddress ?? "";
    return message;
  }

};

function createBaseEventERC20DeployedClaim(): EventERC20DeployedClaim {
  return {
    eventNonce: Long.UZERO,
    eventHeight: Long.UZERO,
    attestationId: new Uint8Array(),
    cosmosDenom: "",
    tokenContract: "",
    name: "",
    symbol: "",
    decimals: Long.UZERO,
    orchestratorAddress: ""
  };
}

export const EventERC20DeployedClaim = {
  encode(message: EventERC20DeployedClaim, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.eventNonce.isZero()) {
      writer.uint32(8).uint64(message.eventNonce);
    }

    if (!message.eventHeight.isZero()) {
      writer.uint32(16).uint64(message.eventHeight);
    }

    if (message.attestationId.length !== 0) {
      writer.uint32(26).bytes(message.attestationId);
    }

    if (message.cosmosDenom !== "") {
      writer.uint32(34).string(message.cosmosDenom);
    }

    if (message.tokenContract !== "") {
      writer.uint32(42).string(message.tokenContract);
    }

    if (message.name !== "") {
      writer.uint32(50).string(message.name);
    }

    if (message.symbol !== "") {
      writer.uint32(58).string(message.symbol);
    }

    if (!message.decimals.isZero()) {
      writer.uint32(64).uint64(message.decimals);
    }

    if (message.orchestratorAddress !== "") {
      writer.uint32(74).string(message.orchestratorAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventERC20DeployedClaim {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventERC20DeployedClaim();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.eventNonce = (reader.uint64() as Long);
          break;

        case 2:
          message.eventHeight = (reader.uint64() as Long);
          break;

        case 3:
          message.attestationId = reader.bytes();
          break;

        case 4:
          message.cosmosDenom = reader.string();
          break;

        case 5:
          message.tokenContract = reader.string();
          break;

        case 6:
          message.name = reader.string();
          break;

        case 7:
          message.symbol = reader.string();
          break;

        case 8:
          message.decimals = (reader.uint64() as Long);
          break;

        case 9:
          message.orchestratorAddress = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<EventERC20DeployedClaim>): EventERC20DeployedClaim {
    const message = createBaseEventERC20DeployedClaim();
    message.eventNonce = object.eventNonce !== undefined && object.eventNonce !== null ? Long.fromValue(object.eventNonce) : Long.UZERO;
    message.eventHeight = object.eventHeight !== undefined && object.eventHeight !== null ? Long.fromValue(object.eventHeight) : Long.UZERO;
    message.attestationId = object.attestationId ?? new Uint8Array();
    message.cosmosDenom = object.cosmosDenom ?? "";
    message.tokenContract = object.tokenContract ?? "";
    message.name = object.name ?? "";
    message.symbol = object.symbol ?? "";
    message.decimals = object.decimals !== undefined && object.decimals !== null ? Long.fromValue(object.decimals) : Long.UZERO;
    message.orchestratorAddress = object.orchestratorAddress ?? "";
    return message;
  }

};

function createBaseEventValsetUpdateClaim(): EventValsetUpdateClaim {
  return {
    eventNonce: Long.UZERO,
    eventHeight: Long.UZERO,
    attestationId: new Uint8Array(),
    valsetNonce: Long.UZERO,
    valsetMembers: [],
    rewardAmount: "",
    rewardToken: "",
    orchestratorAddress: ""
  };
}

export const EventValsetUpdateClaim = {
  encode(message: EventValsetUpdateClaim, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.eventNonce.isZero()) {
      writer.uint32(8).uint64(message.eventNonce);
    }

    if (!message.eventHeight.isZero()) {
      writer.uint32(16).uint64(message.eventHeight);
    }

    if (message.attestationId.length !== 0) {
      writer.uint32(26).bytes(message.attestationId);
    }

    if (!message.valsetNonce.isZero()) {
      writer.uint32(32).uint64(message.valsetNonce);
    }

    for (const v of message.valsetMembers) {
      BridgeValidator.encode(v!, writer.uint32(42).fork()).ldelim();
    }

    if (message.rewardAmount !== "") {
      writer.uint32(50).string(message.rewardAmount);
    }

    if (message.rewardToken !== "") {
      writer.uint32(58).string(message.rewardToken);
    }

    if (message.orchestratorAddress !== "") {
      writer.uint32(66).string(message.orchestratorAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventValsetUpdateClaim {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventValsetUpdateClaim();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.eventNonce = (reader.uint64() as Long);
          break;

        case 2:
          message.eventHeight = (reader.uint64() as Long);
          break;

        case 3:
          message.attestationId = reader.bytes();
          break;

        case 4:
          message.valsetNonce = (reader.uint64() as Long);
          break;

        case 5:
          message.valsetMembers.push(BridgeValidator.decode(reader, reader.uint32()));
          break;

        case 6:
          message.rewardAmount = reader.string();
          break;

        case 7:
          message.rewardToken = reader.string();
          break;

        case 8:
          message.orchestratorAddress = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<EventValsetUpdateClaim>): EventValsetUpdateClaim {
    const message = createBaseEventValsetUpdateClaim();
    message.eventNonce = object.eventNonce !== undefined && object.eventNonce !== null ? Long.fromValue(object.eventNonce) : Long.UZERO;
    message.eventHeight = object.eventHeight !== undefined && object.eventHeight !== null ? Long.fromValue(object.eventHeight) : Long.UZERO;
    message.attestationId = object.attestationId ?? new Uint8Array();
    message.valsetNonce = object.valsetNonce !== undefined && object.valsetNonce !== null ? Long.fromValue(object.valsetNonce) : Long.UZERO;
    message.valsetMembers = object.valsetMembers?.map(e => BridgeValidator.fromPartial(e)) || [];
    message.rewardAmount = object.rewardAmount ?? "";
    message.rewardToken = object.rewardToken ?? "";
    message.orchestratorAddress = object.orchestratorAddress ?? "";
    return message;
  }

};

function createBaseEventCancelSendToEth(): EventCancelSendToEth {
  return {
    outgoingTxId: Long.UZERO
  };
}

export const EventCancelSendToEth = {
  encode(message: EventCancelSendToEth, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.outgoingTxId.isZero()) {
      writer.uint32(8).uint64(message.outgoingTxId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventCancelSendToEth {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCancelSendToEth();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.outgoingTxId = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<EventCancelSendToEth>): EventCancelSendToEth {
    const message = createBaseEventCancelSendToEth();
    message.outgoingTxId = object.outgoingTxId !== undefined && object.outgoingTxId !== null ? Long.fromValue(object.outgoingTxId) : Long.UZERO;
    return message;
  }

};

function createBaseEventSubmitBadSignatureEvidence(): EventSubmitBadSignatureEvidence {
  return {
    badEthSignature: "",
    badEthSignatureSubject: ""
  };
}

export const EventSubmitBadSignatureEvidence = {
  encode(message: EventSubmitBadSignatureEvidence, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.badEthSignature !== "") {
      writer.uint32(10).string(message.badEthSignature);
    }

    if (message.badEthSignatureSubject !== "") {
      writer.uint32(18).string(message.badEthSignatureSubject);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventSubmitBadSignatureEvidence {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSubmitBadSignatureEvidence();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.badEthSignature = reader.string();
          break;

        case 2:
          message.badEthSignatureSubject = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<EventSubmitBadSignatureEvidence>): EventSubmitBadSignatureEvidence {
    const message = createBaseEventSubmitBadSignatureEvidence();
    message.badEthSignature = object.badEthSignature ?? "";
    message.badEthSignatureSubject = object.badEthSignatureSubject ?? "";
    return message;
  }

};