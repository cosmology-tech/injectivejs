import { Duration, DurationSDKType } from "../../../google/protobuf/duration";
import { OracleType, OracleTypeSDKType } from "../../oracle/v1beta1/oracle";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long, toTimestamp, fromTimestamp } from "@cosmology/helpers";
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

function createBaseParams(): Params {
  return {
    defaultRedemptionNoticePeriodDuration: undefined
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.defaultRedemptionNoticePeriodDuration !== undefined) {
      Duration.encode(message.defaultRedemptionNoticePeriodDuration, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.defaultRedemptionNoticePeriodDuration = Duration.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.defaultRedemptionNoticePeriodDuration = object.defaultRedemptionNoticePeriodDuration ?? undefined;
    return message;
  }

};

function createBaseInsuranceFund(): InsuranceFund {
  return {
    depositDenom: "",
    insurancePoolTokenDenom: "",
    redemptionNoticePeriodDuration: undefined,
    balance: "",
    totalShare: "",
    marketId: "",
    marketTicker: "",
    oracleBase: "",
    oracleQuote: "",
    oracleType: 0,
    expiry: Long.ZERO
  };
}

export const InsuranceFund = {
  encode(message: InsuranceFund, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.depositDenom !== "") {
      writer.uint32(10).string(message.depositDenom);
    }

    if (message.insurancePoolTokenDenom !== "") {
      writer.uint32(18).string(message.insurancePoolTokenDenom);
    }

    if (message.redemptionNoticePeriodDuration !== undefined) {
      Duration.encode(message.redemptionNoticePeriodDuration, writer.uint32(26).fork()).ldelim();
    }

    if (message.balance !== "") {
      writer.uint32(34).string(message.balance);
    }

    if (message.totalShare !== "") {
      writer.uint32(42).string(message.totalShare);
    }

    if (message.marketId !== "") {
      writer.uint32(50).string(message.marketId);
    }

    if (message.marketTicker !== "") {
      writer.uint32(58).string(message.marketTicker);
    }

    if (message.oracleBase !== "") {
      writer.uint32(66).string(message.oracleBase);
    }

    if (message.oracleQuote !== "") {
      writer.uint32(74).string(message.oracleQuote);
    }

    if (message.oracleType !== 0) {
      writer.uint32(80).int32(message.oracleType);
    }

    if (!message.expiry.isZero()) {
      writer.uint32(88).int64(message.expiry);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InsuranceFund {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInsuranceFund();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.depositDenom = reader.string();
          break;

        case 2:
          message.insurancePoolTokenDenom = reader.string();
          break;

        case 3:
          message.redemptionNoticePeriodDuration = Duration.decode(reader, reader.uint32());
          break;

        case 4:
          message.balance = reader.string();
          break;

        case 5:
          message.totalShare = reader.string();
          break;

        case 6:
          message.marketId = reader.string();
          break;

        case 7:
          message.marketTicker = reader.string();
          break;

        case 8:
          message.oracleBase = reader.string();
          break;

        case 9:
          message.oracleQuote = reader.string();
          break;

        case 10:
          message.oracleType = (reader.int32() as any);
          break;

        case 11:
          message.expiry = (reader.int64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<InsuranceFund>): InsuranceFund {
    const message = createBaseInsuranceFund();
    message.depositDenom = object.depositDenom ?? "";
    message.insurancePoolTokenDenom = object.insurancePoolTokenDenom ?? "";
    message.redemptionNoticePeriodDuration = object.redemptionNoticePeriodDuration ?? undefined;
    message.balance = object.balance ?? "";
    message.totalShare = object.totalShare ?? "";
    message.marketId = object.marketId ?? "";
    message.marketTicker = object.marketTicker ?? "";
    message.oracleBase = object.oracleBase ?? "";
    message.oracleQuote = object.oracleQuote ?? "";
    message.oracleType = object.oracleType ?? 0;
    message.expiry = object.expiry !== undefined && object.expiry !== null ? Long.fromValue(object.expiry) : Long.ZERO;
    return message;
  }

};

function createBaseRedemptionSchedule(): RedemptionSchedule {
  return {
    id: Long.UZERO,
    marketId: "",
    redeemer: "",
    claimableRedemptionTime: undefined,
    redemptionAmount: undefined
  };
}

export const RedemptionSchedule = {
  encode(message: RedemptionSchedule, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }

    if (message.marketId !== "") {
      writer.uint32(18).string(message.marketId);
    }

    if (message.redeemer !== "") {
      writer.uint32(26).string(message.redeemer);
    }

    if (message.claimableRedemptionTime !== undefined) {
      Timestamp.encode(toTimestamp(message.claimableRedemptionTime), writer.uint32(34).fork()).ldelim();
    }

    if (message.redemptionAmount !== undefined) {
      Coin.encode(message.redemptionAmount, writer.uint32(42).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RedemptionSchedule {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRedemptionSchedule();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = (reader.uint64() as Long);
          break;

        case 2:
          message.marketId = reader.string();
          break;

        case 3:
          message.redeemer = reader.string();
          break;

        case 4:
          message.claimableRedemptionTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 5:
          message.redemptionAmount = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<RedemptionSchedule>): RedemptionSchedule {
    const message = createBaseRedemptionSchedule();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.marketId = object.marketId ?? "";
    message.redeemer = object.redeemer ?? "";
    message.claimableRedemptionTime = object.claimableRedemptionTime ?? undefined;
    message.redemptionAmount = object.redemptionAmount !== undefined && object.redemptionAmount !== null ? Coin.fromPartial(object.redemptionAmount) : undefined;
    return message;
  }

};

function createBaseEventInsuranceFundUpdate(): EventInsuranceFundUpdate {
  return {
    fund: undefined
  };
}

export const EventInsuranceFundUpdate = {
  encode(message: EventInsuranceFundUpdate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fund !== undefined) {
      InsuranceFund.encode(message.fund, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventInsuranceFundUpdate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventInsuranceFundUpdate();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.fund = InsuranceFund.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<EventInsuranceFundUpdate>): EventInsuranceFundUpdate {
    const message = createBaseEventInsuranceFundUpdate();
    message.fund = object.fund !== undefined && object.fund !== null ? InsuranceFund.fromPartial(object.fund) : undefined;
    return message;
  }

};

function createBaseEventRequestRedemption(): EventRequestRedemption {
  return {
    schedule: undefined
  };
}

export const EventRequestRedemption = {
  encode(message: EventRequestRedemption, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.schedule !== undefined) {
      RedemptionSchedule.encode(message.schedule, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventRequestRedemption {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventRequestRedemption();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.schedule = RedemptionSchedule.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<EventRequestRedemption>): EventRequestRedemption {
    const message = createBaseEventRequestRedemption();
    message.schedule = object.schedule !== undefined && object.schedule !== null ? RedemptionSchedule.fromPartial(object.schedule) : undefined;
    return message;
  }

};

function createBaseEventWithdrawRedemption(): EventWithdrawRedemption {
  return {
    schedule: undefined,
    redeemCoin: undefined
  };
}

export const EventWithdrawRedemption = {
  encode(message: EventWithdrawRedemption, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.schedule !== undefined) {
      RedemptionSchedule.encode(message.schedule, writer.uint32(10).fork()).ldelim();
    }

    if (message.redeemCoin !== undefined) {
      Coin.encode(message.redeemCoin, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventWithdrawRedemption {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventWithdrawRedemption();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.schedule = RedemptionSchedule.decode(reader, reader.uint32());
          break;

        case 2:
          message.redeemCoin = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<EventWithdrawRedemption>): EventWithdrawRedemption {
    const message = createBaseEventWithdrawRedemption();
    message.schedule = object.schedule !== undefined && object.schedule !== null ? RedemptionSchedule.fromPartial(object.schedule) : undefined;
    message.redeemCoin = object.redeemCoin !== undefined && object.redeemCoin !== null ? Coin.fromPartial(object.redeemCoin) : undefined;
    return message;
  }

};

function createBaseEventUnderwrite(): EventUnderwrite {
  return {
    underwriter: "",
    marketId: "",
    deposit: undefined,
    shares: undefined
  };
}

export const EventUnderwrite = {
  encode(message: EventUnderwrite, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.underwriter !== "") {
      writer.uint32(10).string(message.underwriter);
    }

    if (message.marketId !== "") {
      writer.uint32(18).string(message.marketId);
    }

    if (message.deposit !== undefined) {
      Coin.encode(message.deposit, writer.uint32(26).fork()).ldelim();
    }

    if (message.shares !== undefined) {
      Coin.encode(message.shares, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventUnderwrite {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventUnderwrite();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.underwriter = reader.string();
          break;

        case 2:
          message.marketId = reader.string();
          break;

        case 3:
          message.deposit = Coin.decode(reader, reader.uint32());
          break;

        case 4:
          message.shares = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<EventUnderwrite>): EventUnderwrite {
    const message = createBaseEventUnderwrite();
    message.underwriter = object.underwriter ?? "";
    message.marketId = object.marketId ?? "";
    message.deposit = object.deposit !== undefined && object.deposit !== null ? Coin.fromPartial(object.deposit) : undefined;
    message.shares = object.shares !== undefined && object.shares !== null ? Coin.fromPartial(object.shares) : undefined;
    return message;
  }

};