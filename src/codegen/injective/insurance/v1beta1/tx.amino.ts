import { oracleTypeFromJSON } from "../../oracle/v1beta1/oracle";
import { AminoMsg } from "@cosmjs/amino";
import { Long } from "@cosmology/helpers";
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
export const AminoConverter = {
  "/injective.insurance.v1beta1.MsgCreateInsuranceFund": {
    aminoType: "insurance/MsgCreateInsuranceFund",
    toAmino: ({
      sender,
      ticker,
      quoteDenom,
      oracleBase,
      oracleQuote,
      oracleType,
      expiry,
      initialDeposit
    }: MsgCreateInsuranceFund): AminoMsgCreateInsuranceFund["value"] => {
      return {
        sender,
        ticker,
        quote_denom: quoteDenom,
        oracle_base: oracleBase,
        oracle_quote: oracleQuote,
        oracle_type: oracleType,
        expiry: expiry.toString(),
        initial_deposit: {
          denom: initialDeposit.denom,
          amount: Long.fromNumber(initialDeposit.amount).toString()
        }
      };
    },
    fromAmino: ({
      sender,
      ticker,
      quote_denom,
      oracle_base,
      oracle_quote,
      oracle_type,
      expiry,
      initial_deposit
    }: AminoMsgCreateInsuranceFund["value"]): MsgCreateInsuranceFund => {
      return {
        sender,
        ticker,
        quoteDenom: quote_denom,
        oracleBase: oracle_base,
        oracleQuote: oracle_quote,
        oracleType: oracleTypeFromJSON(oracle_type),
        expiry: Long.fromString(expiry),
        initialDeposit: {
          denom: initial_deposit.denom,
          amount: initial_deposit.amount
        }
      };
    }
  },
  "/injective.insurance.v1beta1.MsgUnderwrite": {
    aminoType: "insurance/MsgUnderwrite",
    toAmino: ({
      sender,
      marketId,
      deposit
    }: MsgUnderwrite): AminoMsgUnderwrite["value"] => {
      return {
        sender,
        market_id: marketId,
        deposit: {
          denom: deposit.denom,
          amount: Long.fromNumber(deposit.amount).toString()
        }
      };
    },
    fromAmino: ({
      sender,
      market_id,
      deposit
    }: AminoMsgUnderwrite["value"]): MsgUnderwrite => {
      return {
        sender,
        marketId: market_id,
        deposit: {
          denom: deposit.denom,
          amount: deposit.amount
        }
      };
    }
  },
  "/injective.insurance.v1beta1.MsgRequestRedemption": {
    aminoType: "insurance/MsgRequestRedemption",
    toAmino: ({
      sender,
      marketId,
      amount
    }: MsgRequestRedemption): AminoMsgRequestRedemption["value"] => {
      return {
        sender,
        market_id: marketId,
        amount: {
          denom: amount.denom,
          amount: Long.fromNumber(amount.amount).toString()
        }
      };
    },
    fromAmino: ({
      sender,
      market_id,
      amount
    }: AminoMsgRequestRedemption["value"]): MsgRequestRedemption => {
      return {
        sender,
        marketId: market_id,
        amount: {
          denom: amount.denom,
          amount: amount.amount
        }
      };
    }
  }
};