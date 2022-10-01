import { AminoMsg } from "@cosmjs/amino";
import { MsgBid } from "./tx";
export interface AminoMsgBid extends AminoMsg {
    type: "auction/MsgBid";
    value: {
        sender: string;
        bid_amount: {
            denom: string;
            amount: string;
        };
        round: string;
    };
}
export declare const AminoConverter: {
    "/injective.auction.v1beta1.MsgBid": {
        aminoType: string;
        toAmino: ({ sender, bidAmount, round }: MsgBid) => AminoMsgBid["value"];
        fromAmino: ({ sender, bid_amount, round }: AminoMsgBid["value"]) => MsgBid;
    };
};
