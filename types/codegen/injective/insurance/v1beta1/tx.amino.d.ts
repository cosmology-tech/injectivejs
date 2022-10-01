import { AminoMsg } from "@cosmjs/amino";
import { MsgCreateInsuranceFund, MsgUnderwrite, MsgRequestRedemption } from "./tx";
export interface AminoMsgCreateInsuranceFund extends AminoMsg {
    type: "insurance/MsgCreateInsuranceFund";
    value: {
        sender: string;
        ticker: string;
        quote_denom: string;
        oracle_base: string;
        oracle_quote: string;
        oracle_type: number;
        expiry: string;
        initial_deposit: {
            denom: string;
            amount: string;
        };
    };
}
export interface AminoMsgUnderwrite extends AminoMsg {
    type: "insurance/MsgUnderwrite";
    value: {
        sender: string;
        market_id: string;
        deposit: {
            denom: string;
            amount: string;
        };
    };
}
export interface AminoMsgRequestRedemption extends AminoMsg {
    type: "insurance/MsgRequestRedemption";
    value: {
        sender: string;
        market_id: string;
        amount: {
            denom: string;
            amount: string;
        };
    };
}
export declare const AminoConverter: {
    "/injective.insurance.v1beta1.MsgCreateInsuranceFund": {
        aminoType: string;
        toAmino: ({ sender, ticker, quoteDenom, oracleBase, oracleQuote, oracleType, expiry, initialDeposit }: MsgCreateInsuranceFund) => AminoMsgCreateInsuranceFund["value"];
        fromAmino: ({ sender, ticker, quote_denom, oracle_base, oracle_quote, oracle_type, expiry, initial_deposit }: AminoMsgCreateInsuranceFund["value"]) => MsgCreateInsuranceFund;
    };
    "/injective.insurance.v1beta1.MsgUnderwrite": {
        aminoType: string;
        toAmino: ({ sender, marketId, deposit }: MsgUnderwrite) => AminoMsgUnderwrite["value"];
        fromAmino: ({ sender, market_id, deposit }: AminoMsgUnderwrite["value"]) => MsgUnderwrite;
    };
    "/injective.insurance.v1beta1.MsgRequestRedemption": {
        aminoType: string;
        toAmino: ({ sender, marketId, amount }: MsgRequestRedemption) => AminoMsgRequestRedemption["value"];
        fromAmino: ({ sender, market_id, amount }: AminoMsgRequestRedemption["value"]) => MsgRequestRedemption;
    };
};
