import { OracleType, OracleTypeSDKType } from "../../oracle/v1beta1/oracle";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
/** MsgCreateInsuranceFund a message to create an insurance fund for a derivative market. */
export interface MsgCreateInsuranceFund {
    /** Creator of the insurance fund. */
    sender: string;
    /** Ticker for the derivative market. */
    ticker: string;
    /** Coin denom to use for the market quote denom */
    quoteDenom: string;
    /** Oracle base currency */
    oracleBase: string;
    /** Oracle quote currency */
    oracleQuote: string;
    /** Oracle type */
    oracleType: OracleType;
    /** Expiration time of the market. Should be -1 for perpetual markets. */
    expiry: Long;
    /** Initial deposit of the insurance fund */
    initialDeposit: Coin;
}
/** MsgCreateInsuranceFund a message to create an insurance fund for a derivative market. */
export interface MsgCreateInsuranceFundSDKType {
    /** Creator of the insurance fund. */
    sender: string;
    /** Ticker for the derivative market. */
    ticker: string;
    /** Coin denom to use for the market quote denom */
    quote_denom: string;
    /** Oracle base currency */
    oracle_base: string;
    /** Oracle quote currency */
    oracle_quote: string;
    /** Oracle type */
    oracle_type: OracleTypeSDKType;
    /** Expiration time of the market. Should be -1 for perpetual markets. */
    expiry: Long;
    /** Initial deposit of the insurance fund */
    initial_deposit: CoinSDKType;
}
export interface MsgCreateInsuranceFundResponse {
}
export interface MsgCreateInsuranceFundResponseSDKType {
}
/** MsgUnderwrite defines a message for depositing coins to underwrite an insurance fund */
export interface MsgUnderwrite {
    /** Address of the underwriter. */
    sender: string;
    /** MarketID of the insurance fund. */
    marketId: string;
    /** Amount of quote_denom to underwrite the insurance fund. */
    deposit: Coin;
}
/** MsgUnderwrite defines a message for depositing coins to underwrite an insurance fund */
export interface MsgUnderwriteSDKType {
    /** Address of the underwriter. */
    sender: string;
    /** MarketID of the insurance fund. */
    market_id: string;
    /** Amount of quote_denom to underwrite the insurance fund. */
    deposit: CoinSDKType;
}
export interface MsgUnderwriteResponse {
}
export interface MsgUnderwriteResponseSDKType {
}
/** MsgRequestRedemption defines a message for requesting a redemption of the sender's insurance fund tokens */
export interface MsgRequestRedemption {
    /** Address of the underwriter requesting a redemption. */
    sender: string;
    /** MarketID of the insurance fund. */
    marketId: string;
    /** Insurance fund share token amount to be redeemed. */
    amount: Coin;
}
/** MsgRequestRedemption defines a message for requesting a redemption of the sender's insurance fund tokens */
export interface MsgRequestRedemptionSDKType {
    /** Address of the underwriter requesting a redemption. */
    sender: string;
    /** MarketID of the insurance fund. */
    market_id: string;
    /** Insurance fund share token amount to be redeemed. */
    amount: CoinSDKType;
}
export interface MsgRequestRedemptionResponse {
}
export interface MsgRequestRedemptionResponseSDKType {
}
export declare const MsgCreateInsuranceFund: {
    encode(message: MsgCreateInsuranceFund, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateInsuranceFund;
    fromPartial(object: DeepPartial<MsgCreateInsuranceFund>): MsgCreateInsuranceFund;
};
export declare const MsgCreateInsuranceFundResponse: {
    encode(_: MsgCreateInsuranceFundResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateInsuranceFundResponse;
    fromPartial(_: DeepPartial<MsgCreateInsuranceFundResponse>): MsgCreateInsuranceFundResponse;
};
export declare const MsgUnderwrite: {
    encode(message: MsgUnderwrite, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnderwrite;
    fromPartial(object: DeepPartial<MsgUnderwrite>): MsgUnderwrite;
};
export declare const MsgUnderwriteResponse: {
    encode(_: MsgUnderwriteResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnderwriteResponse;
    fromPartial(_: DeepPartial<MsgUnderwriteResponse>): MsgUnderwriteResponse;
};
export declare const MsgRequestRedemption: {
    encode(message: MsgRequestRedemption, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRequestRedemption;
    fromPartial(object: DeepPartial<MsgRequestRedemption>): MsgRequestRedemption;
};
export declare const MsgRequestRedemptionResponse: {
    encode(_: MsgRequestRedemptionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRequestRedemptionResponse;
    fromPartial(_: DeepPartial<MsgRequestRedemptionResponse>): MsgRequestRedemptionResponse;
};
