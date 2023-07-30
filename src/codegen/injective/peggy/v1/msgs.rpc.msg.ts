import { Rpc } from "@cosmology/helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgValsetConfirm, MsgValsetConfirmResponse, MsgSendToEth, MsgSendToEthResponse, MsgRequestBatch, MsgRequestBatchResponse, MsgConfirmBatch, MsgConfirmBatchResponse, MsgDepositClaim, MsgDepositClaimResponse, MsgWithdrawClaim, MsgWithdrawClaimResponse, MsgValsetUpdatedClaim, MsgValsetUpdatedClaimResponse, MsgERC20DeployedClaim, MsgERC20DeployedClaimResponse, MsgSetOrchestratorAddresses, MsgSetOrchestratorAddressesResponse, MsgCancelSendToEth, MsgCancelSendToEthResponse, MsgSubmitBadSignatureEvidence, MsgSubmitBadSignatureEvidenceResponse } from "./msgs";
/** Msg defines the RPC service */

export interface Msg {
  valsetConfirm(request: MsgValsetConfirm): Promise<MsgValsetConfirmResponse>;
  /*null*/

  sendToEth(request: MsgSendToEth): Promise<MsgSendToEthResponse>;
  /*null*/

  requestBatch(request: MsgRequestBatch): Promise<MsgRequestBatchResponse>;
  /*null*/

  confirmBatch(request: MsgConfirmBatch): Promise<MsgConfirmBatchResponse>;
  /*null*/

  depositClaim(request: MsgDepositClaim): Promise<MsgDepositClaimResponse>;
  /*null*/

  withdrawClaim(request: MsgWithdrawClaim): Promise<MsgWithdrawClaimResponse>;
  /*null*/

  valsetUpdateClaim(request: MsgValsetUpdatedClaim): Promise<MsgValsetUpdatedClaimResponse>;
  /*null*/

  eRC20DeployedClaim(request: MsgERC20DeployedClaim): Promise<MsgERC20DeployedClaimResponse>;
  /*null*/

  setOrchestratorAddresses(request: MsgSetOrchestratorAddresses): Promise<MsgSetOrchestratorAddressesResponse>;
  /*null*/

  cancelSendToEth(request: MsgCancelSendToEth): Promise<MsgCancelSendToEthResponse>;
  /*null*/

  submitBadSignatureEvidence(request: MsgSubmitBadSignatureEvidence): Promise<MsgSubmitBadSignatureEvidenceResponse>;
  /*null*/

}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.valsetConfirm = this.valsetConfirm.bind(this);
    this.sendToEth = this.sendToEth.bind(this);
    this.requestBatch = this.requestBatch.bind(this);
    this.confirmBatch = this.confirmBatch.bind(this);
    this.depositClaim = this.depositClaim.bind(this);
    this.withdrawClaim = this.withdrawClaim.bind(this);
    this.valsetUpdateClaim = this.valsetUpdateClaim.bind(this);
    this.eRC20DeployedClaim = this.eRC20DeployedClaim.bind(this);
    this.setOrchestratorAddresses = this.setOrchestratorAddresses.bind(this);
    this.cancelSendToEth = this.cancelSendToEth.bind(this);
    this.submitBadSignatureEvidence = this.submitBadSignatureEvidence.bind(this);
  }

  valsetConfirm(request: MsgValsetConfirm): Promise<MsgValsetConfirmResponse> {
    const data = MsgValsetConfirm.encode(request).finish();
    const promise = this.rpc.request("injective.peggy.v1.Msg", "ValsetConfirm", data);
    return promise.then(data => MsgValsetConfirmResponse.decode(new _m0.Reader(data)));
  }

  sendToEth(request: MsgSendToEth): Promise<MsgSendToEthResponse> {
    const data = MsgSendToEth.encode(request).finish();
    const promise = this.rpc.request("injective.peggy.v1.Msg", "SendToEth", data);
    return promise.then(data => MsgSendToEthResponse.decode(new _m0.Reader(data)));
  }

  requestBatch(request: MsgRequestBatch): Promise<MsgRequestBatchResponse> {
    const data = MsgRequestBatch.encode(request).finish();
    const promise = this.rpc.request("injective.peggy.v1.Msg", "RequestBatch", data);
    return promise.then(data => MsgRequestBatchResponse.decode(new _m0.Reader(data)));
  }

  confirmBatch(request: MsgConfirmBatch): Promise<MsgConfirmBatchResponse> {
    const data = MsgConfirmBatch.encode(request).finish();
    const promise = this.rpc.request("injective.peggy.v1.Msg", "ConfirmBatch", data);
    return promise.then(data => MsgConfirmBatchResponse.decode(new _m0.Reader(data)));
  }

  depositClaim(request: MsgDepositClaim): Promise<MsgDepositClaimResponse> {
    const data = MsgDepositClaim.encode(request).finish();
    const promise = this.rpc.request("injective.peggy.v1.Msg", "DepositClaim", data);
    return promise.then(data => MsgDepositClaimResponse.decode(new _m0.Reader(data)));
  }

  withdrawClaim(request: MsgWithdrawClaim): Promise<MsgWithdrawClaimResponse> {
    const data = MsgWithdrawClaim.encode(request).finish();
    const promise = this.rpc.request("injective.peggy.v1.Msg", "WithdrawClaim", data);
    return promise.then(data => MsgWithdrawClaimResponse.decode(new _m0.Reader(data)));
  }

  valsetUpdateClaim(request: MsgValsetUpdatedClaim): Promise<MsgValsetUpdatedClaimResponse> {
    const data = MsgValsetUpdatedClaim.encode(request).finish();
    const promise = this.rpc.request("injective.peggy.v1.Msg", "ValsetUpdateClaim", data);
    return promise.then(data => MsgValsetUpdatedClaimResponse.decode(new _m0.Reader(data)));
  }

  eRC20DeployedClaim(request: MsgERC20DeployedClaim): Promise<MsgERC20DeployedClaimResponse> {
    const data = MsgERC20DeployedClaim.encode(request).finish();
    const promise = this.rpc.request("injective.peggy.v1.Msg", "ERC20DeployedClaim", data);
    return promise.then(data => MsgERC20DeployedClaimResponse.decode(new _m0.Reader(data)));
  }

  setOrchestratorAddresses(request: MsgSetOrchestratorAddresses): Promise<MsgSetOrchestratorAddressesResponse> {
    const data = MsgSetOrchestratorAddresses.encode(request).finish();
    const promise = this.rpc.request("injective.peggy.v1.Msg", "SetOrchestratorAddresses", data);
    return promise.then(data => MsgSetOrchestratorAddressesResponse.decode(new _m0.Reader(data)));
  }

  cancelSendToEth(request: MsgCancelSendToEth): Promise<MsgCancelSendToEthResponse> {
    const data = MsgCancelSendToEth.encode(request).finish();
    const promise = this.rpc.request("injective.peggy.v1.Msg", "CancelSendToEth", data);
    return promise.then(data => MsgCancelSendToEthResponse.decode(new _m0.Reader(data)));
  }

  submitBadSignatureEvidence(request: MsgSubmitBadSignatureEvidence): Promise<MsgSubmitBadSignatureEvidenceResponse> {
    const data = MsgSubmitBadSignatureEvidence.encode(request).finish();
    const promise = this.rpc.request("injective.peggy.v1.Msg", "SubmitBadSignatureEvidence", data);
    return promise.then(data => MsgSubmitBadSignatureEvidenceResponse.decode(new _m0.Reader(data)));
  }

}