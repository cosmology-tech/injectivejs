import { Rpc } from "@osmonauts/helpers";
import { MsgValsetConfirm, MsgValsetConfirmResponse, MsgSendToEth, MsgSendToEthResponse, MsgRequestBatch, MsgRequestBatchResponse, MsgConfirmBatch, MsgConfirmBatchResponse, MsgDepositClaim, MsgDepositClaimResponse, MsgWithdrawClaim, MsgWithdrawClaimResponse, MsgValsetUpdatedClaim, MsgValsetUpdatedClaimResponse, MsgERC20DeployedClaim, MsgERC20DeployedClaimResponse, MsgSetOrchestratorAddresses, MsgSetOrchestratorAddressesResponse, MsgCancelSendToEth, MsgCancelSendToEthResponse, MsgSubmitBadSignatureEvidence, MsgSubmitBadSignatureEvidenceResponse } from "./msgs";
/** Msg defines the RPC service */
export interface Msg {
    valsetConfirm(request: MsgValsetConfirm): Promise<MsgValsetConfirmResponse>;
    sendToEth(request: MsgSendToEth): Promise<MsgSendToEthResponse>;
    requestBatch(request: MsgRequestBatch): Promise<MsgRequestBatchResponse>;
    confirmBatch(request: MsgConfirmBatch): Promise<MsgConfirmBatchResponse>;
    depositClaim(request: MsgDepositClaim): Promise<MsgDepositClaimResponse>;
    withdrawClaim(request: MsgWithdrawClaim): Promise<MsgWithdrawClaimResponse>;
    valsetUpdateClaim(request: MsgValsetUpdatedClaim): Promise<MsgValsetUpdatedClaimResponse>;
    eRC20DeployedClaim(request: MsgERC20DeployedClaim): Promise<MsgERC20DeployedClaimResponse>;
    setOrchestratorAddresses(request: MsgSetOrchestratorAddresses): Promise<MsgSetOrchestratorAddressesResponse>;
    cancelSendToEth(request: MsgCancelSendToEth): Promise<MsgCancelSendToEthResponse>;
    submitBadSignatureEvidence(request: MsgSubmitBadSignatureEvidence): Promise<MsgSubmitBadSignatureEvidenceResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    valsetConfirm(request: MsgValsetConfirm): Promise<MsgValsetConfirmResponse>;
    sendToEth(request: MsgSendToEth): Promise<MsgSendToEthResponse>;
    requestBatch(request: MsgRequestBatch): Promise<MsgRequestBatchResponse>;
    confirmBatch(request: MsgConfirmBatch): Promise<MsgConfirmBatchResponse>;
    depositClaim(request: MsgDepositClaim): Promise<MsgDepositClaimResponse>;
    withdrawClaim(request: MsgWithdrawClaim): Promise<MsgWithdrawClaimResponse>;
    valsetUpdateClaim(request: MsgValsetUpdatedClaim): Promise<MsgValsetUpdatedClaimResponse>;
    eRC20DeployedClaim(request: MsgERC20DeployedClaim): Promise<MsgERC20DeployedClaimResponse>;
    setOrchestratorAddresses(request: MsgSetOrchestratorAddresses): Promise<MsgSetOrchestratorAddressesResponse>;
    cancelSendToEth(request: MsgCancelSendToEth): Promise<MsgCancelSendToEthResponse>;
    submitBadSignatureEvidence(request: MsgSubmitBadSignatureEvidence): Promise<MsgSubmitBadSignatureEvidenceResponse>;
}
