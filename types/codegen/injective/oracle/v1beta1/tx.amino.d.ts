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
export declare const AminoConverter: {
    "/injective.oracle.v1beta1.MsgRelayProviderPrices": {
        aminoType: string;
        toAmino: ({ sender, provider, symbols, prices }: MsgRelayProviderPrices) => AminoMsgRelayProviderPrices["value"];
        fromAmino: ({ sender, provider, symbols, prices }: AminoMsgRelayProviderPrices["value"]) => MsgRelayProviderPrices;
    };
    "/injective.oracle.v1beta1.MsgRelayPriceFeedPrice": {
        aminoType: string;
        toAmino: ({ sender, base, quote, price }: MsgRelayPriceFeedPrice) => AminoMsgRelayPriceFeedPrice["value"];
        fromAmino: ({ sender, base, quote, price }: AminoMsgRelayPriceFeedPrice["value"]) => MsgRelayPriceFeedPrice;
    };
    "/injective.oracle.v1beta1.MsgRelayBandRates": {
        aminoType: string;
        toAmino: ({ relayer, symbols, rates, resolveTimes, requestIDs }: MsgRelayBandRates) => AminoMsgRelayBandRates["value"];
        fromAmino: ({ relayer, symbols, rates, resolve_times, requestIDs }: AminoMsgRelayBandRates["value"]) => MsgRelayBandRates;
    };
    "/injective.oracle.v1beta1.MsgRequestBandIBCRates": {
        aminoType: string;
        toAmino: ({ sender, requestId }: MsgRequestBandIBCRates) => AminoMsgRequestBandIBCRates["value"];
        fromAmino: ({ sender, request_id }: AminoMsgRequestBandIBCRates["value"]) => MsgRequestBandIBCRates;
    };
    "/injective.oracle.v1beta1.MsgRelayCoinbaseMessages": {
        aminoType: string;
        toAmino: ({ sender, messages, signatures }: MsgRelayCoinbaseMessages) => AminoMsgRelayCoinbaseMessages["value"];
        fromAmino: ({ sender, messages, signatures }: AminoMsgRelayCoinbaseMessages["value"]) => MsgRelayCoinbaseMessages;
    };
};
