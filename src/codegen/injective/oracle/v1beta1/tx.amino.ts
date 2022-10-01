import { AminoMsg } from "@cosmjs/amino";
import { Long } from "@osmonauts/helpers";
import { MsgRelayProviderPrices, MsgRelayPriceFeedPrice, MsgRelayBandRates, MsgRequestBandIBCRates, MsgRelayCoinbaseMessages } from "./tx";
export interface AminoMsgRelayProviderPrices extends AminoMsg {
  type: "/injective.oracle.v1beta1.MsgRelayProviderPrices";
  value: {
    sender: string;
    provider: string;
    symbols: string[];
    prices: string[];
  };
}
export interface AminoMsgRelayPriceFeedPrice extends AminoMsg {
  type: "/injective.oracle.v1beta1.MsgRelayPriceFeedPrice";
  value: {
    sender: string;
    base: string[];
    quote: string[];
    price: string[];
  };
}
export interface AminoMsgRelayBandRates extends AminoMsg {
  type: "/injective.oracle.v1beta1.MsgRelayBandRates";
  value: {
    relayer: string;
    symbols: string[];
    rates: Long[];
    resolve_times: Long[];
    requestIDs: Long[];
  };
}
export interface AminoMsgRequestBandIBCRates extends AminoMsg {
  type: "/injective.oracle.v1beta1.MsgRequestBandIBCRates";
  value: {
    sender: string;
    request_id: string;
  };
}
export interface AminoMsgRelayCoinbaseMessages extends AminoMsg {
  type: "/injective.oracle.v1beta1.MsgRelayCoinbaseMessages";
  value: {
    sender: string;
    messages: Uint8Array[];
    signatures: Uint8Array[];
  };
}
export const AminoConverter = {
  "/injective.oracle.v1beta1.MsgRelayProviderPrices": {
    aminoType: "/injective.oracle.v1beta1.MsgRelayProviderPrices",
    toAmino: ({
      sender,
      provider,
      symbols,
      prices
    }: MsgRelayProviderPrices): AminoMsgRelayProviderPrices["value"] => {
      return {
        sender,
        provider,
        symbols,
        prices
      };
    },
    fromAmino: ({
      sender,
      provider,
      symbols,
      prices
    }: AminoMsgRelayProviderPrices["value"]): MsgRelayProviderPrices => {
      return {
        sender,
        provider,
        symbols,
        prices
      };
    }
  },
  "/injective.oracle.v1beta1.MsgRelayPriceFeedPrice": {
    aminoType: "/injective.oracle.v1beta1.MsgRelayPriceFeedPrice",
    toAmino: ({
      sender,
      base,
      quote,
      price
    }: MsgRelayPriceFeedPrice): AminoMsgRelayPriceFeedPrice["value"] => {
      return {
        sender,
        base,
        quote,
        price
      };
    },
    fromAmino: ({
      sender,
      base,
      quote,
      price
    }: AminoMsgRelayPriceFeedPrice["value"]): MsgRelayPriceFeedPrice => {
      return {
        sender,
        base,
        quote,
        price
      };
    }
  },
  "/injective.oracle.v1beta1.MsgRelayBandRates": {
    aminoType: "/injective.oracle.v1beta1.MsgRelayBandRates",
    toAmino: ({
      relayer,
      symbols,
      rates,
      resolveTimes,
      requestIDs
    }: MsgRelayBandRates): AminoMsgRelayBandRates["value"] => {
      return {
        relayer,
        symbols,
        rates: rates.map(el0 => el0.toString()),
        resolve_times: resolveTimes.map(el0 => el0.toString()),
        requestIDs: requestIDs.map(el0 => el0.toString())
      };
    },
    fromAmino: ({
      relayer,
      symbols,
      rates,
      resolve_times,
      requestIDs
    }: AminoMsgRelayBandRates["value"]): MsgRelayBandRates => {
      return {
        relayer,
        symbols,
        rates: rates.map(el0 => Long.fromString(el0)),
        resolveTimes: resolve_times.map(el0 => Long.fromString(el0)),
        requestIDs: requestIDs.map(el0 => Long.fromString(el0))
      };
    }
  },
  "/injective.oracle.v1beta1.MsgRequestBandIBCRates": {
    aminoType: "/injective.oracle.v1beta1.MsgRequestBandIBCRates",
    toAmino: ({
      sender,
      requestId
    }: MsgRequestBandIBCRates): AminoMsgRequestBandIBCRates["value"] => {
      return {
        sender,
        request_id: requestId.toString()
      };
    },
    fromAmino: ({
      sender,
      request_id
    }: AminoMsgRequestBandIBCRates["value"]): MsgRequestBandIBCRates => {
      return {
        sender,
        requestId: Long.fromString(request_id)
      };
    }
  },
  "/injective.oracle.v1beta1.MsgRelayCoinbaseMessages": {
    aminoType: "/injective.oracle.v1beta1.MsgRelayCoinbaseMessages",
    toAmino: ({
      sender,
      messages,
      signatures
    }: MsgRelayCoinbaseMessages): AminoMsgRelayCoinbaseMessages["value"] => {
      return {
        sender,
        messages,
        signatures
      };
    },
    fromAmino: ({
      sender,
      messages,
      signatures
    }: AminoMsgRelayCoinbaseMessages["value"]): MsgRelayCoinbaseMessages => {
      return {
        sender,
        messages,
        signatures
      };
    }
  }
};