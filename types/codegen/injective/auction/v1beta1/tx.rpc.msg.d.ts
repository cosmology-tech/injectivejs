import { Rpc } from "@osmonauts/helpers";
import { MsgBid, MsgBidResponse } from "./tx";
/** Msg defines the RPC service */
export interface Msg {
    bid(request: MsgBid): Promise<MsgBidResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    bid(request: MsgBid): Promise<MsgBidResponse>;
}
