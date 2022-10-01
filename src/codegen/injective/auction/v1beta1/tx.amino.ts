import { AminoMsg } from "@cosmjs/amino";
import { Long } from "@osmonauts/helpers";
import { MsgBid } from "./tx";
export interface AminoMsgBid extends AminoMsg {
  type: "/injective.auction.v1beta1.MsgBid";
  value: {
    sender: string;
    bid_amount: {
      denom: string;
      amount: string;
    };
    round: string;
  };
}
export const AminoConverter = {
  "/injective.auction.v1beta1.MsgBid": {
    aminoType: "/injective.auction.v1beta1.MsgBid",
    toAmino: ({
      sender,
      bidAmount,
      round
    }: MsgBid): AminoMsgBid["value"] => {
      return {
        sender,
        bid_amount: {
          denom: bidAmount.denom,
          amount: Long.fromNumber(bidAmount.amount).toString()
        },
        round: round.toString()
      };
    },
    fromAmino: ({
      sender,
      bid_amount,
      round
    }: AminoMsgBid["value"]): MsgBid => {
      return {
        sender,
        bidAmount: {
          denom: bid_amount.denom,
          amount: bid_amount.amount
        },
        round: Long.fromString(round)
      };
    }
  }
};