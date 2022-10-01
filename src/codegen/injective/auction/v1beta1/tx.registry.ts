import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgBid } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/injective.auction.v1beta1.MsgBid", MsgBid]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    bid(value: MsgBid) {
      return {
        typeUrl: "/injective.auction.v1beta1.MsgBid",
        value: MsgBid.encode(value).finish()
      };
    }

  },
  withTypeUrl: {
    bid(value: MsgBid) {
      return {
        typeUrl: "/injective.auction.v1beta1.MsgBid",
        value
      };
    }

  },
  fromPartial: {
    bid(value: MsgBid) {
      return {
        typeUrl: "/injective.auction.v1beta1.MsgBid",
        value: MsgBid.fromPartial(value)
      };
    }

  }
};