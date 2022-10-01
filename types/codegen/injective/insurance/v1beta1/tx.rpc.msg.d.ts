import { Rpc } from "@osmonauts/helpers";
import { MsgCreateInsuranceFund, MsgCreateInsuranceFundResponse, MsgUnderwrite, MsgUnderwriteResponse, MsgRequestRedemption, MsgRequestRedemptionResponse } from "./tx";
/** Msg defines the RPC service */
export interface Msg {
    createInsuranceFund(request: MsgCreateInsuranceFund): Promise<MsgCreateInsuranceFundResponse>;
    underwrite(request: MsgUnderwrite): Promise<MsgUnderwriteResponse>;
    requestRedemption(request: MsgRequestRedemption): Promise<MsgRequestRedemptionResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    createInsuranceFund(request: MsgCreateInsuranceFund): Promise<MsgCreateInsuranceFundResponse>;
    underwrite(request: MsgUnderwrite): Promise<MsgUnderwriteResponse>;
    requestRedemption(request: MsgRequestRedemption): Promise<MsgRequestRedemptionResponse>;
}
