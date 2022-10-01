import { Duration, DurationSDKType } from "../../../google/protobuf/duration";
import { OracleType, OracleTypeSDKType } from "../../oracle/v1beta1/oracle";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
export interface Params {
    /**
     * default_redemption_notice_period_duration defines the default minimum notice period duration that must pass after an underwriter sends
     * a redemption request before the underwriter can claim his tokens
     */
    defaultRedemptionNoticePeriodDuration: Duration;
}
export interface ParamsSDKType {
    /**
     * default_redemption_notice_period_duration defines the default minimum notice period duration that must pass after an underwriter sends
     * a redemption request before the underwriter can claim his tokens
     */
    default_redemption_notice_period_duration: DurationSDKType;
}
export interface InsuranceFund {
    /** deposit denomination for the given insurance fund */
    depositDenom: string;
    /** insurance fund pool token denomination for the given insurance fund */
    insurancePoolTokenDenom: string;
    /**
     * redemption_notice_period_duration defines the minimum notice period duration that must pass after an underwriter sends
     * a redemption request before the underwriter can claim his tokens
     */
    redemptionNoticePeriodDuration: Duration;
    /** balance of fund */
    balance: string;
    /** total share tokens minted */
    totalShare: string;
    /** marketID of the derivative market */
    marketId: string;
    /** ticker of the derivative market */
    marketTicker: string;
    /** Oracle base currency of the derivative market */
    oracleBase: string;
    /** Oracle quote currency of the derivative market */
    oracleQuote: string;
    /** Oracle type of the derivative market */
    oracleType: OracleType;
    /** Expiration time of the derivative market. Should be -1 for perpetual markets. */
    expiry: Long;
}
export interface InsuranceFundSDKType {
    /** deposit denomination for the given insurance fund */
    deposit_denom: string;
    /** insurance fund pool token denomination for the given insurance fund */
    insurance_pool_token_denom: string;
    /**
     * redemption_notice_period_duration defines the minimum notice period duration that must pass after an underwriter sends
     * a redemption request before the underwriter can claim his tokens
     */
    redemption_notice_period_duration: DurationSDKType;
    /** balance of fund */
    balance: string;
    /** total share tokens minted */
    total_share: string;
    /** marketID of the derivative market */
    market_id: string;
    /** ticker of the derivative market */
    market_ticker: string;
    /** Oracle base currency of the derivative market */
    oracle_base: string;
    /** Oracle quote currency of the derivative market */
    oracle_quote: string;
    /** Oracle type of the derivative market */
    oracle_type: OracleTypeSDKType;
    /** Expiration time of the derivative market. Should be -1 for perpetual markets. */
    expiry: Long;
}
export interface RedemptionSchedule {
    /** id of redemption schedule */
    id: Long;
    /** marketId of insurance fund for the redemption */
    marketId: string;
    /** address of the redeemer */
    redeemer: string;
    /** the time after which the redemption can be claimed */
    claimableRedemptionTime: Date;
    /** the insurance_pool_token amount to redeem */
    redemptionAmount: Coin;
}
export interface RedemptionScheduleSDKType {
    /** id of redemption schedule */
    id: Long;
    /** marketId of insurance fund for the redemption */
    marketId: string;
    /** address of the redeemer */
    redeemer: string;
    /** the time after which the redemption can be claimed */
    claimable_redemption_time: Date;
    /** the insurance_pool_token amount to redeem */
    redemption_amount: CoinSDKType;
}
export interface EventInsuranceFundUpdate {
    fund: InsuranceFund;
}
export interface EventInsuranceFundUpdateSDKType {
    fund: InsuranceFundSDKType;
}
export interface EventRequestRedemption {
    schedule: RedemptionSchedule;
}
export interface EventRequestRedemptionSDKType {
    schedule: RedemptionScheduleSDKType;
}
export interface EventWithdrawRedemption {
    /** redemption schedule triggered withdraw */
    schedule: RedemptionSchedule;
    /** redeem coin amount in base_currency */
    redeemCoin: Coin;
}
export interface EventWithdrawRedemptionSDKType {
    /** redemption schedule triggered withdraw */
    schedule: RedemptionScheduleSDKType;
    /** redeem coin amount in base_currency */
    redeem_coin: CoinSDKType;
}
export interface EventUnderwrite {
    /** address of the underwriter */
    underwriter: string;
    /** marketId of insurance fund for the redemption */
    marketId: string;
    /** deposit coin amount */
    deposit: Coin;
    /** share coin amount */
    shares: Coin;
}
export interface EventUnderwriteSDKType {
    /** address of the underwriter */
    underwriter: string;
    /** marketId of insurance fund for the redemption */
    marketId: string;
    /** deposit coin amount */
    deposit: CoinSDKType;
    /** share coin amount */
    shares: CoinSDKType;
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromPartial(object: DeepPartial<Params>): Params;
};
export declare const InsuranceFund: {
    encode(message: InsuranceFund, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): InsuranceFund;
    fromPartial(object: DeepPartial<InsuranceFund>): InsuranceFund;
};
export declare const RedemptionSchedule: {
    encode(message: RedemptionSchedule, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RedemptionSchedule;
    fromPartial(object: DeepPartial<RedemptionSchedule>): RedemptionSchedule;
};
export declare const EventInsuranceFundUpdate: {
    encode(message: EventInsuranceFundUpdate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventInsuranceFundUpdate;
    fromPartial(object: DeepPartial<EventInsuranceFundUpdate>): EventInsuranceFundUpdate;
};
export declare const EventRequestRedemption: {
    encode(message: EventRequestRedemption, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventRequestRedemption;
    fromPartial(object: DeepPartial<EventRequestRedemption>): EventRequestRedemption;
};
export declare const EventWithdrawRedemption: {
    encode(message: EventWithdrawRedemption, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventWithdrawRedemption;
    fromPartial(object: DeepPartial<EventWithdrawRedemption>): EventWithdrawRedemption;
};
export declare const EventUnderwrite: {
    encode(message: EventUnderwrite, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventUnderwrite;
    fromPartial(object: DeepPartial<EventUnderwrite>): EventUnderwrite;
};
