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
export interface MsgCreateInsuranceFundResponse {}
export interface MsgCreateInsuranceFundResponseSDKType {}
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
export interface MsgUnderwriteResponse {}
export interface MsgUnderwriteResponseSDKType {}
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
export interface MsgRequestRedemptionResponse {}
export interface MsgRequestRedemptionResponseSDKType {}

function createBaseMsgCreateInsuranceFund(): MsgCreateInsuranceFund {
  return {
    sender: "",
    ticker: "",
    quoteDenom: "",
    oracleBase: "",
    oracleQuote: "",
    oracleType: 0,
    expiry: Long.ZERO,
    initialDeposit: undefined
  };
}

export const MsgCreateInsuranceFund = {
  encode(message: MsgCreateInsuranceFund, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    if (message.ticker !== "") {
      writer.uint32(18).string(message.ticker);
    }

    if (message.quoteDenom !== "") {
      writer.uint32(26).string(message.quoteDenom);
    }

    if (message.oracleBase !== "") {
      writer.uint32(34).string(message.oracleBase);
    }

    if (message.oracleQuote !== "") {
      writer.uint32(42).string(message.oracleQuote);
    }

    if (message.oracleType !== 0) {
      writer.uint32(48).int32(message.oracleType);
    }

    if (!message.expiry.isZero()) {
      writer.uint32(56).int64(message.expiry);
    }

    if (message.initialDeposit !== undefined) {
      Coin.encode(message.initialDeposit, writer.uint32(66).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateInsuranceFund {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateInsuranceFund();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.ticker = reader.string();
          break;

        case 3:
          message.quoteDenom = reader.string();
          break;

        case 4:
          message.oracleBase = reader.string();
          break;

        case 5:
          message.oracleQuote = reader.string();
          break;

        case 6:
          message.oracleType = (reader.int32() as any);
          break;

        case 7:
          message.expiry = (reader.int64() as Long);
          break;

        case 8:
          message.initialDeposit = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgCreateInsuranceFund>): MsgCreateInsuranceFund {
    const message = createBaseMsgCreateInsuranceFund();
    message.sender = object.sender ?? "";
    message.ticker = object.ticker ?? "";
    message.quoteDenom = object.quoteDenom ?? "";
    message.oracleBase = object.oracleBase ?? "";
    message.oracleQuote = object.oracleQuote ?? "";
    message.oracleType = object.oracleType ?? 0;
    message.expiry = object.expiry !== undefined && object.expiry !== null ? Long.fromValue(object.expiry) : Long.ZERO;
    message.initialDeposit = object.initialDeposit !== undefined && object.initialDeposit !== null ? Coin.fromPartial(object.initialDeposit) : undefined;
    return message;
  }

};

function createBaseMsgCreateInsuranceFundResponse(): MsgCreateInsuranceFundResponse {
  return {};
}

export const MsgCreateInsuranceFundResponse = {
  encode(_: MsgCreateInsuranceFundResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateInsuranceFundResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateInsuranceFundResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(_: DeepPartial<MsgCreateInsuranceFundResponse>): MsgCreateInsuranceFundResponse {
    const message = createBaseMsgCreateInsuranceFundResponse();
    return message;
  }

};

function createBaseMsgUnderwrite(): MsgUnderwrite {
  return {
    sender: "",
    marketId: "",
    deposit: undefined
  };
}

export const MsgUnderwrite = {
  encode(message: MsgUnderwrite, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    if (message.marketId !== "") {
      writer.uint32(18).string(message.marketId);
    }

    if (message.deposit !== undefined) {
      Coin.encode(message.deposit, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnderwrite {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnderwrite();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.marketId = reader.string();
          break;

        case 3:
          message.deposit = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgUnderwrite>): MsgUnderwrite {
    const message = createBaseMsgUnderwrite();
    message.sender = object.sender ?? "";
    message.marketId = object.marketId ?? "";
    message.deposit = object.deposit !== undefined && object.deposit !== null ? Coin.fromPartial(object.deposit) : undefined;
    return message;
  }

};

function createBaseMsgUnderwriteResponse(): MsgUnderwriteResponse {
  return {};
}

export const MsgUnderwriteResponse = {
  encode(_: MsgUnderwriteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnderwriteResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnderwriteResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(_: DeepPartial<MsgUnderwriteResponse>): MsgUnderwriteResponse {
    const message = createBaseMsgUnderwriteResponse();
    return message;
  }

};

function createBaseMsgRequestRedemption(): MsgRequestRedemption {
  return {
    sender: "",
    marketId: "",
    amount: undefined
  };
}

export const MsgRequestRedemption = {
  encode(message: MsgRequestRedemption, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    if (message.marketId !== "") {
      writer.uint32(18).string(message.marketId);
    }

    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRequestRedemption {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRequestRedemption();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.marketId = reader.string();
          break;

        case 3:
          message.amount = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgRequestRedemption>): MsgRequestRedemption {
    const message = createBaseMsgRequestRedemption();
    message.sender = object.sender ?? "";
    message.marketId = object.marketId ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  }

};

function createBaseMsgRequestRedemptionResponse(): MsgRequestRedemptionResponse {
  return {};
}

export const MsgRequestRedemptionResponse = {
  encode(_: MsgRequestRedemptionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRequestRedemptionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRequestRedemptionResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(_: DeepPartial<MsgRequestRedemptionResponse>): MsgRequestRedemptionResponse {
    const message = createBaseMsgRequestRedemptionResponse();
    return message;
  }

};