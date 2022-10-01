import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgRelayProviderPrices, MsgRelayPriceFeedPrice, MsgRelayBandRates, MsgRequestBandIBCRates, MsgRelayCoinbaseMessages } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/injective.oracle.v1beta1.MsgRelayProviderPrices", MsgRelayProviderPrices], ["/injective.oracle.v1beta1.MsgRelayPriceFeedPrice", MsgRelayPriceFeedPrice], ["/injective.oracle.v1beta1.MsgRelayBandRates", MsgRelayBandRates], ["/injective.oracle.v1beta1.MsgRequestBandIBCRates", MsgRequestBandIBCRates], ["/injective.oracle.v1beta1.MsgRelayCoinbaseMessages", MsgRelayCoinbaseMessages]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    relayProviderPrices(value: MsgRelayProviderPrices) {
      return {
        typeUrl: "/injective.oracle.v1beta1.MsgRelayProviderPrices",
        value: MsgRelayProviderPrices.encode(value).finish()
      };
    },

    relayPriceFeedPrice(value: MsgRelayPriceFeedPrice) {
      return {
        typeUrl: "/injective.oracle.v1beta1.MsgRelayPriceFeedPrice",
        value: MsgRelayPriceFeedPrice.encode(value).finish()
      };
    },

    relayBandRates(value: MsgRelayBandRates) {
      return {
        typeUrl: "/injective.oracle.v1beta1.MsgRelayBandRates",
        value: MsgRelayBandRates.encode(value).finish()
      };
    },

    requestBandIBCRates(value: MsgRequestBandIBCRates) {
      return {
        typeUrl: "/injective.oracle.v1beta1.MsgRequestBandIBCRates",
        value: MsgRequestBandIBCRates.encode(value).finish()
      };
    },

    relayCoinbaseMessages(value: MsgRelayCoinbaseMessages) {
      return {
        typeUrl: "/injective.oracle.v1beta1.MsgRelayCoinbaseMessages",
        value: MsgRelayCoinbaseMessages.encode(value).finish()
      };
    }

  },
  withTypeUrl: {
    relayProviderPrices(value: MsgRelayProviderPrices) {
      return {
        typeUrl: "/injective.oracle.v1beta1.MsgRelayProviderPrices",
        value
      };
    },

    relayPriceFeedPrice(value: MsgRelayPriceFeedPrice) {
      return {
        typeUrl: "/injective.oracle.v1beta1.MsgRelayPriceFeedPrice",
        value
      };
    },

    relayBandRates(value: MsgRelayBandRates) {
      return {
        typeUrl: "/injective.oracle.v1beta1.MsgRelayBandRates",
        value
      };
    },

    requestBandIBCRates(value: MsgRequestBandIBCRates) {
      return {
        typeUrl: "/injective.oracle.v1beta1.MsgRequestBandIBCRates",
        value
      };
    },

    relayCoinbaseMessages(value: MsgRelayCoinbaseMessages) {
      return {
        typeUrl: "/injective.oracle.v1beta1.MsgRelayCoinbaseMessages",
        value
      };
    }

  },
  fromPartial: {
    relayProviderPrices(value: MsgRelayProviderPrices) {
      return {
        typeUrl: "/injective.oracle.v1beta1.MsgRelayProviderPrices",
        value: MsgRelayProviderPrices.fromPartial(value)
      };
    },

    relayPriceFeedPrice(value: MsgRelayPriceFeedPrice) {
      return {
        typeUrl: "/injective.oracle.v1beta1.MsgRelayPriceFeedPrice",
        value: MsgRelayPriceFeedPrice.fromPartial(value)
      };
    },

    relayBandRates(value: MsgRelayBandRates) {
      return {
        typeUrl: "/injective.oracle.v1beta1.MsgRelayBandRates",
        value: MsgRelayBandRates.fromPartial(value)
      };
    },

    requestBandIBCRates(value: MsgRequestBandIBCRates) {
      return {
        typeUrl: "/injective.oracle.v1beta1.MsgRequestBandIBCRates",
        value: MsgRequestBandIBCRates.fromPartial(value)
      };
    },

    relayCoinbaseMessages(value: MsgRelayCoinbaseMessages) {
      return {
        typeUrl: "/injective.oracle.v1beta1.MsgRelayCoinbaseMessages",
        value: MsgRelayCoinbaseMessages.fromPartial(value)
      };
    }

  }
};