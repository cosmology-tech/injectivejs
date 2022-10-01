import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateFeed, MsgUpdateFeed, MsgTransmit, MsgFundFeedRewardPool, MsgWithdrawFeedRewardPool, MsgSetPayees, MsgTransferPayeeship, MsgAcceptPayeeship } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/injective.ocr.v1beta1.MsgCreateFeed", MsgCreateFeed], ["/injective.ocr.v1beta1.MsgUpdateFeed", MsgUpdateFeed], ["/injective.ocr.v1beta1.MsgTransmit", MsgTransmit], ["/injective.ocr.v1beta1.MsgFundFeedRewardPool", MsgFundFeedRewardPool], ["/injective.ocr.v1beta1.MsgWithdrawFeedRewardPool", MsgWithdrawFeedRewardPool], ["/injective.ocr.v1beta1.MsgSetPayees", MsgSetPayees], ["/injective.ocr.v1beta1.MsgTransferPayeeship", MsgTransferPayeeship], ["/injective.ocr.v1beta1.MsgAcceptPayeeship", MsgAcceptPayeeship]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    createFeed(value: MsgCreateFeed) {
      return {
        typeUrl: "/injective.ocr.v1beta1.MsgCreateFeed",
        value: MsgCreateFeed.encode(value).finish()
      };
    },

    updateFeed(value: MsgUpdateFeed) {
      return {
        typeUrl: "/injective.ocr.v1beta1.MsgUpdateFeed",
        value: MsgUpdateFeed.encode(value).finish()
      };
    },

    transmit(value: MsgTransmit) {
      return {
        typeUrl: "/injective.ocr.v1beta1.MsgTransmit",
        value: MsgTransmit.encode(value).finish()
      };
    },

    fundFeedRewardPool(value: MsgFundFeedRewardPool) {
      return {
        typeUrl: "/injective.ocr.v1beta1.MsgFundFeedRewardPool",
        value: MsgFundFeedRewardPool.encode(value).finish()
      };
    },

    withdrawFeedRewardPool(value: MsgWithdrawFeedRewardPool) {
      return {
        typeUrl: "/injective.ocr.v1beta1.MsgWithdrawFeedRewardPool",
        value: MsgWithdrawFeedRewardPool.encode(value).finish()
      };
    },

    setPayees(value: MsgSetPayees) {
      return {
        typeUrl: "/injective.ocr.v1beta1.MsgSetPayees",
        value: MsgSetPayees.encode(value).finish()
      };
    },

    transferPayeeship(value: MsgTransferPayeeship) {
      return {
        typeUrl: "/injective.ocr.v1beta1.MsgTransferPayeeship",
        value: MsgTransferPayeeship.encode(value).finish()
      };
    },

    acceptPayeeship(value: MsgAcceptPayeeship) {
      return {
        typeUrl: "/injective.ocr.v1beta1.MsgAcceptPayeeship",
        value: MsgAcceptPayeeship.encode(value).finish()
      };
    }

  },
  withTypeUrl: {
    createFeed(value: MsgCreateFeed) {
      return {
        typeUrl: "/injective.ocr.v1beta1.MsgCreateFeed",
        value
      };
    },

    updateFeed(value: MsgUpdateFeed) {
      return {
        typeUrl: "/injective.ocr.v1beta1.MsgUpdateFeed",
        value
      };
    },

    transmit(value: MsgTransmit) {
      return {
        typeUrl: "/injective.ocr.v1beta1.MsgTransmit",
        value
      };
    },

    fundFeedRewardPool(value: MsgFundFeedRewardPool) {
      return {
        typeUrl: "/injective.ocr.v1beta1.MsgFundFeedRewardPool",
        value
      };
    },

    withdrawFeedRewardPool(value: MsgWithdrawFeedRewardPool) {
      return {
        typeUrl: "/injective.ocr.v1beta1.MsgWithdrawFeedRewardPool",
        value
      };
    },

    setPayees(value: MsgSetPayees) {
      return {
        typeUrl: "/injective.ocr.v1beta1.MsgSetPayees",
        value
      };
    },

    transferPayeeship(value: MsgTransferPayeeship) {
      return {
        typeUrl: "/injective.ocr.v1beta1.MsgTransferPayeeship",
        value
      };
    },

    acceptPayeeship(value: MsgAcceptPayeeship) {
      return {
        typeUrl: "/injective.ocr.v1beta1.MsgAcceptPayeeship",
        value
      };
    }

  },
  fromPartial: {
    createFeed(value: MsgCreateFeed) {
      return {
        typeUrl: "/injective.ocr.v1beta1.MsgCreateFeed",
        value: MsgCreateFeed.fromPartial(value)
      };
    },

    updateFeed(value: MsgUpdateFeed) {
      return {
        typeUrl: "/injective.ocr.v1beta1.MsgUpdateFeed",
        value: MsgUpdateFeed.fromPartial(value)
      };
    },

    transmit(value: MsgTransmit) {
      return {
        typeUrl: "/injective.ocr.v1beta1.MsgTransmit",
        value: MsgTransmit.fromPartial(value)
      };
    },

    fundFeedRewardPool(value: MsgFundFeedRewardPool) {
      return {
        typeUrl: "/injective.ocr.v1beta1.MsgFundFeedRewardPool",
        value: MsgFundFeedRewardPool.fromPartial(value)
      };
    },

    withdrawFeedRewardPool(value: MsgWithdrawFeedRewardPool) {
      return {
        typeUrl: "/injective.ocr.v1beta1.MsgWithdrawFeedRewardPool",
        value: MsgWithdrawFeedRewardPool.fromPartial(value)
      };
    },

    setPayees(value: MsgSetPayees) {
      return {
        typeUrl: "/injective.ocr.v1beta1.MsgSetPayees",
        value: MsgSetPayees.fromPartial(value)
      };
    },

    transferPayeeship(value: MsgTransferPayeeship) {
      return {
        typeUrl: "/injective.ocr.v1beta1.MsgTransferPayeeship",
        value: MsgTransferPayeeship.fromPartial(value)
      };
    },

    acceptPayeeship(value: MsgAcceptPayeeship) {
      return {
        typeUrl: "/injective.ocr.v1beta1.MsgAcceptPayeeship",
        value: MsgAcceptPayeeship.fromPartial(value)
      };
    }

  }
};