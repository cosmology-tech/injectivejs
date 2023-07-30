import { Rpc } from "@cosmology/helpers";
import { MsgCreateFeed, MsgCreateFeedResponse, MsgUpdateFeed, MsgUpdateFeedResponse, MsgTransmit, MsgTransmitResponse, MsgFundFeedRewardPool, MsgFundFeedRewardPoolResponse, MsgWithdrawFeedRewardPool, MsgWithdrawFeedRewardPoolResponse, MsgSetPayees, MsgSetPayeesResponse, MsgTransferPayeeship, MsgTransferPayeeshipResponse, MsgAcceptPayeeship, MsgAcceptPayeeshipResponse } from "./tx";
/** Msg defines the RPC service */
export interface Msg {
    createFeed(request: MsgCreateFeed): Promise<MsgCreateFeedResponse>;
    updateFeed(request: MsgUpdateFeed): Promise<MsgUpdateFeedResponse>;
    transmit(request: MsgTransmit): Promise<MsgTransmitResponse>;
    fundFeedRewardPool(request: MsgFundFeedRewardPool): Promise<MsgFundFeedRewardPoolResponse>;
    withdrawFeedRewardPool(request: MsgWithdrawFeedRewardPool): Promise<MsgWithdrawFeedRewardPoolResponse>;
    setPayees(request: MsgSetPayees): Promise<MsgSetPayeesResponse>;
    transferPayeeship(request: MsgTransferPayeeship): Promise<MsgTransferPayeeshipResponse>;
    acceptPayeeship(request: MsgAcceptPayeeship): Promise<MsgAcceptPayeeshipResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    createFeed(request: MsgCreateFeed): Promise<MsgCreateFeedResponse>;
    updateFeed(request: MsgUpdateFeed): Promise<MsgUpdateFeedResponse>;
    transmit(request: MsgTransmit): Promise<MsgTransmitResponse>;
    fundFeedRewardPool(request: MsgFundFeedRewardPool): Promise<MsgFundFeedRewardPoolResponse>;
    withdrawFeedRewardPool(request: MsgWithdrawFeedRewardPool): Promise<MsgWithdrawFeedRewardPoolResponse>;
    setPayees(request: MsgSetPayees): Promise<MsgSetPayeesResponse>;
    transferPayeeship(request: MsgTransferPayeeship): Promise<MsgTransferPayeeshipResponse>;
    acceptPayeeship(request: MsgAcceptPayeeship): Promise<MsgAcceptPayeeshipResponse>;
}
