import { Rpc } from "@cosmology/helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgBid, MsgBidResponse } from "./tx";
/** Msg defines the RPC service */

export interface Msg {
  bid(request: MsgBid): Promise<MsgBidResponse>;
  /*Bid defines a method for placing a bid for an auction*/

}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.bid = this.bid.bind(this);
  }

  bid(request: MsgBid): Promise<MsgBidResponse> {
    const data = MsgBid.encode(request).finish();
    const promise = this.rpc.request("injective.auction.v1beta1.Msg", "Bid", data);
    return promise.then(data => MsgBidResponse.decode(new _m0.Reader(data)));
  }

}