import { Rpc } from "@cosmology/helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgCreateInsuranceFund, MsgCreateInsuranceFundResponse, MsgUnderwrite, MsgUnderwriteResponse, MsgRequestRedemption, MsgRequestRedemptionResponse } from "./tx";
/** Msg defines the RPC service */

export interface Msg {
  createInsuranceFund(request: MsgCreateInsuranceFund): Promise<MsgCreateInsuranceFundResponse>;
  /*CreateInsuranceFund defines a method for creating an insurance fund*/

  underwrite(request: MsgUnderwrite): Promise<MsgUnderwriteResponse>;
  /*Underwrite defines a method for depositing tokens to underwrite an insurance fund*/

  requestRedemption(request: MsgRequestRedemption): Promise<MsgRequestRedemptionResponse>;
  /*RequestRedemption defines a method for requesting a redemption of the sender's insurance fund tokens*/

}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.createInsuranceFund = this.createInsuranceFund.bind(this);
    this.underwrite = this.underwrite.bind(this);
    this.requestRedemption = this.requestRedemption.bind(this);
  }

  createInsuranceFund(request: MsgCreateInsuranceFund): Promise<MsgCreateInsuranceFundResponse> {
    const data = MsgCreateInsuranceFund.encode(request).finish();
    const promise = this.rpc.request("injective.insurance.v1beta1.Msg", "CreateInsuranceFund", data);
    return promise.then(data => MsgCreateInsuranceFundResponse.decode(new _m0.Reader(data)));
  }

  underwrite(request: MsgUnderwrite): Promise<MsgUnderwriteResponse> {
    const data = MsgUnderwrite.encode(request).finish();
    const promise = this.rpc.request("injective.insurance.v1beta1.Msg", "Underwrite", data);
    return promise.then(data => MsgUnderwriteResponse.decode(new _m0.Reader(data)));
  }

  requestRedemption(request: MsgRequestRedemption): Promise<MsgRequestRedemptionResponse> {
    const data = MsgRequestRedemption.encode(request).finish();
    const promise = this.rpc.request("injective.insurance.v1beta1.Msg", "RequestRedemption", data);
    return promise.then(data => MsgRequestRedemptionResponse.decode(new _m0.Reader(data)));
  }

}