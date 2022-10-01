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
export declare const EventAttestationObserved: {
    encode(message: EventAttestationObserved, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventAttestationObserved;
    fromPartial(object: DeepPartial<EventAttestationObserved>): EventAttestationObserved;
};
export declare const EventBridgeWithdrawCanceled: {
    encode(message: EventBridgeWithdrawCanceled, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventBridgeWithdrawCanceled;
    fromPartial(object: DeepPartial<EventBridgeWithdrawCanceled>): EventBridgeWithdrawCanceled;
};
export declare const EventOutgoingBatch: {
    encode(message: EventOutgoingBatch, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventOutgoingBatch;
    fromPartial(object: DeepPartial<EventOutgoingBatch>): EventOutgoingBatch;
};
export declare const EventOutgoingBatchCanceled: {
    encode(message: EventOutgoingBatchCanceled, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventOutgoingBatchCanceled;
    fromPartial(object: DeepPartial<EventOutgoingBatchCanceled>): EventOutgoingBatchCanceled;
};
export declare const EventValsetUpdateRequest: {
    encode(message: EventValsetUpdateRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventValsetUpdateRequest;
    fromPartial(object: DeepPartial<EventValsetUpdateRequest>): EventValsetUpdateRequest;
};
export declare const EventSetOrchestratorAddresses: {
    encode(message: EventSetOrchestratorAddresses, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventSetOrchestratorAddresses;
    fromPartial(object: DeepPartial<EventSetOrchestratorAddresses>): EventSetOrchestratorAddresses;
};
export declare const EventValsetConfirm: {
    encode(message: EventValsetConfirm, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventValsetConfirm;
    fromPartial(object: DeepPartial<EventValsetConfirm>): EventValsetConfirm;
};
export declare const EventSendToEth: {
    encode(message: EventSendToEth, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventSendToEth;
    fromPartial(object: DeepPartial<EventSendToEth>): EventSendToEth;
};
export declare const EventConfirmBatch: {
    encode(message: EventConfirmBatch, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventConfirmBatch;
    fromPartial(object: DeepPartial<EventConfirmBatch>): EventConfirmBatch;
};
export declare const EventAttestationVote: {
    encode(message: EventAttestationVote, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventAttestationVote;
    fromPartial(object: DeepPartial<EventAttestationVote>): EventAttestationVote;
};
export declare const EventDepositClaim: {
    encode(message: EventDepositClaim, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventDepositClaim;
    fromPartial(object: DeepPartial<EventDepositClaim>): EventDepositClaim;
};
export declare const EventWithdrawClaim: {
    encode(message: EventWithdrawClaim, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventWithdrawClaim;
    fromPartial(object: DeepPartial<EventWithdrawClaim>): EventWithdrawClaim;
};
export declare const EventERC20DeployedClaim: {
    encode(message: EventERC20DeployedClaim, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventERC20DeployedClaim;
    fromPartial(object: DeepPartial<EventERC20DeployedClaim>): EventERC20DeployedClaim;
};
export declare const EventValsetUpdateClaim: {
    encode(message: EventValsetUpdateClaim, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventValsetUpdateClaim;
    fromPartial(object: DeepPartial<EventValsetUpdateClaim>): EventValsetUpdateClaim;
};
export declare const EventCancelSendToEth: {
    encode(message: EventCancelSendToEth, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventCancelSendToEth;
    fromPartial(object: DeepPartial<EventCancelSendToEth>): EventCancelSendToEth;
};
export declare const EventSubmitBadSignatureEvidence: {
    encode(message: EventSubmitBadSignatureEvidence, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventSubmitBadSignatureEvidence;
    fromPartial(object: DeepPartial<EventSubmitBadSignatureEvidence>): EventSubmitBadSignatureEvidence;
};
