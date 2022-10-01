import { Params, ParamsSDKType, GenesisState, GenesisStateSDKType } from "./genesis";
import { Valset, ValsetSDKType, LastClaimEvent, LastClaimEventSDKType } from "./types";
import { MsgValsetConfirm, MsgValsetConfirmSDKType, MsgConfirmBatch, MsgConfirmBatchSDKType } from "./msgs";
import { BatchFees, BatchFeesSDKType } from "./pool";
import { OutgoingTxBatch, OutgoingTxBatchSDKType, OutgoingTransferTx, OutgoingTransferTxSDKType } from "./batch";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
export interface QueryParamsRequest {
}
export interface QueryParamsRequestSDKType {
}
export interface QueryParamsResponse {
    params: Params;
}
export interface QueryParamsResponseSDKType {
    params: ParamsSDKType;
}
export interface QueryCurrentValsetRequest {
}
export interface QueryCurrentValsetRequestSDKType {
}
export interface QueryCurrentValsetResponse {
    valset: Valset;
}
export interface QueryCurrentValsetResponseSDKType {
    valset: ValsetSDKType;
}
export interface QueryValsetRequestRequest {
    nonce?: Long;
}
export interface QueryValsetRequestRequestSDKType {
    nonce?: Long;
}
export interface QueryValsetRequestResponse {
    valset: Valset;
}
export interface QueryValsetRequestResponseSDKType {
    valset: ValsetSDKType;
}
export interface QueryValsetConfirmRequest {
    nonce?: Long;
    address?: string;
}
export interface QueryValsetConfirmRequestSDKType {
    nonce?: Long;
    address?: string;
}
export interface QueryValsetConfirmResponse {
    confirm: MsgValsetConfirm;
}
export interface QueryValsetConfirmResponseSDKType {
    confirm: MsgValsetConfirmSDKType;
}
export interface QueryValsetConfirmsByNonceRequest {
    nonce: Long;
}
export interface QueryValsetConfirmsByNonceRequestSDKType {
    nonce: Long;
}
export interface QueryValsetConfirmsByNonceResponse {
    confirms: MsgValsetConfirm[];
}
export interface QueryValsetConfirmsByNonceResponseSDKType {
    confirms: MsgValsetConfirmSDKType[];
}
export interface QueryLastValsetRequestsRequest {
}
export interface QueryLastValsetRequestsRequestSDKType {
}
export interface QueryLastValsetRequestsResponse {
    valsets: Valset[];
}
export interface QueryLastValsetRequestsResponseSDKType {
    valsets: ValsetSDKType[];
}
export interface QueryLastPendingValsetRequestByAddrRequest {
    address?: string;
}
export interface QueryLastPendingValsetRequestByAddrRequestSDKType {
    address?: string;
}
export interface QueryLastPendingValsetRequestByAddrResponse {
    valsets: Valset[];
}
export interface QueryLastPendingValsetRequestByAddrResponseSDKType {
    valsets: ValsetSDKType[];
}
export interface QueryBatchFeeRequest {
}
export interface QueryBatchFeeRequestSDKType {
}
export interface QueryBatchFeeResponse {
    batchFees: BatchFees[];
}
export interface QueryBatchFeeResponseSDKType {
    batchFees: BatchFeesSDKType[];
}
export interface QueryLastPendingBatchRequestByAddrRequest {
    address?: string;
}
export interface QueryLastPendingBatchRequestByAddrRequestSDKType {
    address?: string;
}
export interface QueryLastPendingBatchRequestByAddrResponse {
    batch: OutgoingTxBatch;
}
export interface QueryLastPendingBatchRequestByAddrResponseSDKType {
    batch: OutgoingTxBatchSDKType;
}
export interface QueryOutgoingTxBatchesRequest {
}
export interface QueryOutgoingTxBatchesRequestSDKType {
}
export interface QueryOutgoingTxBatchesResponse {
    batches: OutgoingTxBatch[];
}
export interface QueryOutgoingTxBatchesResponseSDKType {
    batches: OutgoingTxBatchSDKType[];
}
export interface QueryBatchRequestByNonceRequest {
    nonce?: Long;
    contractAddress?: string;
}
export interface QueryBatchRequestByNonceRequestSDKType {
    nonce?: Long;
    contract_address?: string;
}
export interface QueryBatchRequestByNonceResponse {
    batch: OutgoingTxBatch;
}
export interface QueryBatchRequestByNonceResponseSDKType {
    batch: OutgoingTxBatchSDKType;
}
export interface QueryBatchConfirmsRequest {
    nonce?: Long;
    contractAddress?: string;
}
export interface QueryBatchConfirmsRequestSDKType {
    nonce?: Long;
    contract_address?: string;
}
export interface QueryBatchConfirmsResponse {
    confirms: MsgConfirmBatch[];
}
export interface QueryBatchConfirmsResponseSDKType {
    confirms: MsgConfirmBatchSDKType[];
}
export interface QueryLastEventByAddrRequest {
    address: string;
}
export interface QueryLastEventByAddrRequestSDKType {
    address: string;
}
export interface QueryLastEventByAddrResponse {
    lastClaimEvent: LastClaimEvent;
}
export interface QueryLastEventByAddrResponseSDKType {
    last_claim_event: LastClaimEventSDKType;
}
export interface QueryERC20ToDenomRequest {
    erc20?: string;
}
export interface QueryERC20ToDenomRequestSDKType {
    erc20?: string;
}
export interface QueryERC20ToDenomResponse {
    denom: string;
    cosmosOriginated: boolean;
}
export interface QueryERC20ToDenomResponseSDKType {
    denom: string;
    cosmos_originated: boolean;
}
export interface QueryDenomToERC20Request {
    denom?: string;
}
export interface QueryDenomToERC20RequestSDKType {
    denom?: string;
}
export interface QueryDenomToERC20Response {
    erc20: string;
    cosmosOriginated: boolean;
}
export interface QueryDenomToERC20ResponseSDKType {
    erc20: string;
    cosmos_originated: boolean;
}
export interface QueryDelegateKeysByValidatorAddress {
    validatorAddress?: string;
}
export interface QueryDelegateKeysByValidatorAddressSDKType {
    validator_address?: string;
}
export interface QueryDelegateKeysByValidatorAddressResponse {
    ethAddress: string;
    orchestratorAddress: string;
}
export interface QueryDelegateKeysByValidatorAddressResponseSDKType {
    eth_address: string;
    orchestrator_address: string;
}
export interface QueryDelegateKeysByEthAddress {
    ethAddress?: string;
}
export interface QueryDelegateKeysByEthAddressSDKType {
    eth_address?: string;
}
export interface QueryDelegateKeysByEthAddressResponse {
    validatorAddress: string;
    orchestratorAddress: string;
}
export interface QueryDelegateKeysByEthAddressResponseSDKType {
    validator_address: string;
    orchestrator_address: string;
}
export interface QueryDelegateKeysByOrchestratorAddress {
    orchestratorAddress?: string;
}
export interface QueryDelegateKeysByOrchestratorAddressSDKType {
    orchestrator_address?: string;
}
export interface QueryDelegateKeysByOrchestratorAddressResponse {
    validatorAddress: string;
    ethAddress: string;
}
export interface QueryDelegateKeysByOrchestratorAddressResponseSDKType {
    validator_address: string;
    eth_address: string;
}
export interface QueryPendingSendToEth {
    senderAddress?: string;
}
export interface QueryPendingSendToEthSDKType {
    sender_address?: string;
}
export interface QueryPendingSendToEthResponse {
    transfersInBatches: OutgoingTransferTx[];
    unbatchedTransfers: OutgoingTransferTx[];
}
export interface QueryPendingSendToEthResponseSDKType {
    transfers_in_batches: OutgoingTransferTxSDKType[];
    unbatched_transfers: OutgoingTransferTxSDKType[];
}
/** QueryModuleStateRequest is the request type for the Query/PeggyModuleState RPC method. */
export interface QueryModuleStateRequest {
}
/** QueryModuleStateRequest is the request type for the Query/PeggyModuleState RPC method. */
export interface QueryModuleStateRequestSDKType {
}
/** QueryModuleStateResponse is the response type for the Query/PeggyModuleState RPC method. */
export interface QueryModuleStateResponse {
    state: GenesisState;
}
/** QueryModuleStateResponse is the response type for the Query/PeggyModuleState RPC method. */
export interface QueryModuleStateResponseSDKType {
    state: GenesisStateSDKType;
}
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse;
};
export declare const QueryCurrentValsetRequest: {
    encode(_: QueryCurrentValsetRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCurrentValsetRequest;
    fromPartial(_: DeepPartial<QueryCurrentValsetRequest>): QueryCurrentValsetRequest;
};
export declare const QueryCurrentValsetResponse: {
    encode(message: QueryCurrentValsetResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCurrentValsetResponse;
    fromPartial(object: DeepPartial<QueryCurrentValsetResponse>): QueryCurrentValsetResponse;
};
export declare const QueryValsetRequestRequest: {
    encode(message: QueryValsetRequestRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryValsetRequestRequest;
    fromPartial(object: DeepPartial<QueryValsetRequestRequest>): QueryValsetRequestRequest;
};
export declare const QueryValsetRequestResponse: {
    encode(message: QueryValsetRequestResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryValsetRequestResponse;
    fromPartial(object: DeepPartial<QueryValsetRequestResponse>): QueryValsetRequestResponse;
};
export declare const QueryValsetConfirmRequest: {
    encode(message: QueryValsetConfirmRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryValsetConfirmRequest;
    fromPartial(object: DeepPartial<QueryValsetConfirmRequest>): QueryValsetConfirmRequest;
};
export declare const QueryValsetConfirmResponse: {
    encode(message: QueryValsetConfirmResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryValsetConfirmResponse;
    fromPartial(object: DeepPartial<QueryValsetConfirmResponse>): QueryValsetConfirmResponse;
};
export declare const QueryValsetConfirmsByNonceRequest: {
    encode(message: QueryValsetConfirmsByNonceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryValsetConfirmsByNonceRequest;
    fromPartial(object: DeepPartial<QueryValsetConfirmsByNonceRequest>): QueryValsetConfirmsByNonceRequest;
};
export declare const QueryValsetConfirmsByNonceResponse: {
    encode(message: QueryValsetConfirmsByNonceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryValsetConfirmsByNonceResponse;
    fromPartial(object: DeepPartial<QueryValsetConfirmsByNonceResponse>): QueryValsetConfirmsByNonceResponse;
};
export declare const QueryLastValsetRequestsRequest: {
    encode(_: QueryLastValsetRequestsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryLastValsetRequestsRequest;
    fromPartial(_: DeepPartial<QueryLastValsetRequestsRequest>): QueryLastValsetRequestsRequest;
};
export declare const QueryLastValsetRequestsResponse: {
    encode(message: QueryLastValsetRequestsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryLastValsetRequestsResponse;
    fromPartial(object: DeepPartial<QueryLastValsetRequestsResponse>): QueryLastValsetRequestsResponse;
};
export declare const QueryLastPendingValsetRequestByAddrRequest: {
    encode(message: QueryLastPendingValsetRequestByAddrRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryLastPendingValsetRequestByAddrRequest;
    fromPartial(object: DeepPartial<QueryLastPendingValsetRequestByAddrRequest>): QueryLastPendingValsetRequestByAddrRequest;
};
export declare const QueryLastPendingValsetRequestByAddrResponse: {
    encode(message: QueryLastPendingValsetRequestByAddrResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryLastPendingValsetRequestByAddrResponse;
    fromPartial(object: DeepPartial<QueryLastPendingValsetRequestByAddrResponse>): QueryLastPendingValsetRequestByAddrResponse;
};
export declare const QueryBatchFeeRequest: {
    encode(_: QueryBatchFeeRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBatchFeeRequest;
    fromPartial(_: DeepPartial<QueryBatchFeeRequest>): QueryBatchFeeRequest;
};
export declare const QueryBatchFeeResponse: {
    encode(message: QueryBatchFeeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBatchFeeResponse;
    fromPartial(object: DeepPartial<QueryBatchFeeResponse>): QueryBatchFeeResponse;
};
export declare const QueryLastPendingBatchRequestByAddrRequest: {
    encode(message: QueryLastPendingBatchRequestByAddrRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryLastPendingBatchRequestByAddrRequest;
    fromPartial(object: DeepPartial<QueryLastPendingBatchRequestByAddrRequest>): QueryLastPendingBatchRequestByAddrRequest;
};
export declare const QueryLastPendingBatchRequestByAddrResponse: {
    encode(message: QueryLastPendingBatchRequestByAddrResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryLastPendingBatchRequestByAddrResponse;
    fromPartial(object: DeepPartial<QueryLastPendingBatchRequestByAddrResponse>): QueryLastPendingBatchRequestByAddrResponse;
};
export declare const QueryOutgoingTxBatchesRequest: {
    encode(_: QueryOutgoingTxBatchesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryOutgoingTxBatchesRequest;
    fromPartial(_: DeepPartial<QueryOutgoingTxBatchesRequest>): QueryOutgoingTxBatchesRequest;
};
export declare const QueryOutgoingTxBatchesResponse: {
    encode(message: QueryOutgoingTxBatchesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryOutgoingTxBatchesResponse;
    fromPartial(object: DeepPartial<QueryOutgoingTxBatchesResponse>): QueryOutgoingTxBatchesResponse;
};
export declare const QueryBatchRequestByNonceRequest: {
    encode(message: QueryBatchRequestByNonceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBatchRequestByNonceRequest;
    fromPartial(object: DeepPartial<QueryBatchRequestByNonceRequest>): QueryBatchRequestByNonceRequest;
};
export declare const QueryBatchRequestByNonceResponse: {
    encode(message: QueryBatchRequestByNonceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBatchRequestByNonceResponse;
    fromPartial(object: DeepPartial<QueryBatchRequestByNonceResponse>): QueryBatchRequestByNonceResponse;
};
export declare const QueryBatchConfirmsRequest: {
    encode(message: QueryBatchConfirmsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBatchConfirmsRequest;
    fromPartial(object: DeepPartial<QueryBatchConfirmsRequest>): QueryBatchConfirmsRequest;
};
export declare const QueryBatchConfirmsResponse: {
    encode(message: QueryBatchConfirmsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBatchConfirmsResponse;
    fromPartial(object: DeepPartial<QueryBatchConfirmsResponse>): QueryBatchConfirmsResponse;
};
export declare const QueryLastEventByAddrRequest: {
    encode(message: QueryLastEventByAddrRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryLastEventByAddrRequest;
    fromPartial(object: DeepPartial<QueryLastEventByAddrRequest>): QueryLastEventByAddrRequest;
};
export declare const QueryLastEventByAddrResponse: {
    encode(message: QueryLastEventByAddrResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryLastEventByAddrResponse;
    fromPartial(object: DeepPartial<QueryLastEventByAddrResponse>): QueryLastEventByAddrResponse;
};
export declare const QueryERC20ToDenomRequest: {
    encode(message: QueryERC20ToDenomRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryERC20ToDenomRequest;
    fromPartial(object: DeepPartial<QueryERC20ToDenomRequest>): QueryERC20ToDenomRequest;
};
export declare const QueryERC20ToDenomResponse: {
    encode(message: QueryERC20ToDenomResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryERC20ToDenomResponse;
    fromPartial(object: DeepPartial<QueryERC20ToDenomResponse>): QueryERC20ToDenomResponse;
};
export declare const QueryDenomToERC20Request: {
    encode(message: QueryDenomToERC20Request, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomToERC20Request;
    fromPartial(object: DeepPartial<QueryDenomToERC20Request>): QueryDenomToERC20Request;
};
export declare const QueryDenomToERC20Response: {
    encode(message: QueryDenomToERC20Response, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomToERC20Response;
    fromPartial(object: DeepPartial<QueryDenomToERC20Response>): QueryDenomToERC20Response;
};
export declare const QueryDelegateKeysByValidatorAddress: {
    encode(message: QueryDelegateKeysByValidatorAddress, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegateKeysByValidatorAddress;
    fromPartial(object: DeepPartial<QueryDelegateKeysByValidatorAddress>): QueryDelegateKeysByValidatorAddress;
};
export declare const QueryDelegateKeysByValidatorAddressResponse: {
    encode(message: QueryDelegateKeysByValidatorAddressResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegateKeysByValidatorAddressResponse;
    fromPartial(object: DeepPartial<QueryDelegateKeysByValidatorAddressResponse>): QueryDelegateKeysByValidatorAddressResponse;
};
export declare const QueryDelegateKeysByEthAddress: {
    encode(message: QueryDelegateKeysByEthAddress, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegateKeysByEthAddress;
    fromPartial(object: DeepPartial<QueryDelegateKeysByEthAddress>): QueryDelegateKeysByEthAddress;
};
export declare const QueryDelegateKeysByEthAddressResponse: {
    encode(message: QueryDelegateKeysByEthAddressResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegateKeysByEthAddressResponse;
    fromPartial(object: DeepPartial<QueryDelegateKeysByEthAddressResponse>): QueryDelegateKeysByEthAddressResponse;
};
export declare const QueryDelegateKeysByOrchestratorAddress: {
    encode(message: QueryDelegateKeysByOrchestratorAddress, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegateKeysByOrchestratorAddress;
    fromPartial(object: DeepPartial<QueryDelegateKeysByOrchestratorAddress>): QueryDelegateKeysByOrchestratorAddress;
};
export declare const QueryDelegateKeysByOrchestratorAddressResponse: {
    encode(message: QueryDelegateKeysByOrchestratorAddressResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegateKeysByOrchestratorAddressResponse;
    fromPartial(object: DeepPartial<QueryDelegateKeysByOrchestratorAddressResponse>): QueryDelegateKeysByOrchestratorAddressResponse;
};
export declare const QueryPendingSendToEth: {
    encode(message: QueryPendingSendToEth, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPendingSendToEth;
    fromPartial(object: DeepPartial<QueryPendingSendToEth>): QueryPendingSendToEth;
};
export declare const QueryPendingSendToEthResponse: {
    encode(message: QueryPendingSendToEthResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPendingSendToEthResponse;
    fromPartial(object: DeepPartial<QueryPendingSendToEthResponse>): QueryPendingSendToEthResponse;
};
export declare const QueryModuleStateRequest: {
    encode(_: QueryModuleStateRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryModuleStateRequest;
    fromPartial(_: DeepPartial<QueryModuleStateRequest>): QueryModuleStateRequest;
};
export declare const QueryModuleStateResponse: {
    encode(message: QueryModuleStateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryModuleStateResponse;
    fromPartial(object: DeepPartial<QueryModuleStateResponse>): QueryModuleStateResponse;
};
