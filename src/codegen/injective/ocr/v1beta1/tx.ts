import { FeedConfig, FeedConfigSDKType, Report, ReportSDKType } from "./ocr";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@cosmology/helpers";
export interface MsgCreateFeed {
  sender: string;
  config: FeedConfig;
}
export interface MsgCreateFeedSDKType {
  sender: string;
  config: FeedConfigSDKType;
}
export interface MsgCreateFeedResponse { }
export interface MsgCreateFeedResponseSDKType { }
export interface MsgUpdateFeed {
  sender: string;
  /** feed_id is an unique ID for the target of this config */

  feedId: string;
  /** signers ith element is address ith oracle uses to sign a report */

  signers: string[];
  /** transmitters ith element is address ith oracle uses to transmit a report via the transmit method */

  transmitters: string[];
  /** Fixed LINK reward for each observer */

  linkPerObservation?: string;
  /** Fixed LINK reward for transmitter */

  linkPerTransmission?: string;
  /** Native denom for LINK coin in the bank keeper */

  linkDenom: string;
  /** feed administrator */

  feedAdmin: string;
  /** feed billing administrator */

  billingAdmin: string;
}
export interface MsgUpdateFeedSDKType {
  sender: string;
  /** feed_id is an unique ID for the target of this config */

  feed_id: string;
  /** signers ith element is address ith oracle uses to sign a report */

  signers: string[];
  /** transmitters ith element is address ith oracle uses to transmit a report via the transmit method */

  transmitters: string[];
  /** Fixed LINK reward for each observer */

  link_per_observation?: string;
  /** Fixed LINK reward for transmitter */

  link_per_transmission?: string;
  /** Native denom for LINK coin in the bank keeper */

  link_denom: string;
  /** feed administrator */

  feed_admin: string;
  /** feed billing administrator */

  billing_admin: string;
}
export interface MsgUpdateFeedResponse { }
export interface MsgUpdateFeedResponseSDKType { }
export interface MsgTransmit {
  /** Address of the transmitter */
  transmitter: string;
  configDigest: Uint8Array;
  feedId: string;
  epoch: Long;
  round: Long;
  extraHash: Uint8Array;
  report: Report;
  signatures: Uint8Array[];
}
export interface MsgTransmitSDKType {
  /** Address of the transmitter */
  transmitter: string;
  config_digest: Uint8Array;
  feed_id: string;
  epoch: Long;
  round: Long;
  extra_hash: Uint8Array;
  report: ReportSDKType;
  signatures: Uint8Array[];
}
export interface MsgTransmitResponse { }
export interface MsgTransmitResponseSDKType { }
export interface MsgFundFeedRewardPool {
  sender: string;
  feedId: string;
  amount: Coin;
}
export interface MsgFundFeedRewardPoolSDKType {
  sender: string;
  feed_id: string;
  amount: CoinSDKType;
}
export interface MsgFundFeedRewardPoolResponse { }
export interface MsgFundFeedRewardPoolResponseSDKType { }
export interface MsgWithdrawFeedRewardPool {
  sender: string;
  feedId: string;
  amount: Coin;
}
export interface MsgWithdrawFeedRewardPoolSDKType {
  sender: string;
  feed_id: string;
  amount: CoinSDKType;
}
export interface MsgWithdrawFeedRewardPoolResponse { }
export interface MsgWithdrawFeedRewardPoolResponseSDKType { }
export interface MsgSetPayees {
  sender: string;
  feedId: string;
  /** addresses oracles use to transmit the reports */

  transmitters: string[];
  /** addresses of payees corresponding to list of transmitters */

  payees: string[];
}
export interface MsgSetPayeesSDKType {
  sender: string;
  feed_id: string;
  /** addresses oracles use to transmit the reports */

  transmitters: string[];
  /** addresses of payees corresponding to list of transmitters */

  payees: string[];
}
export interface MsgSetPayeesResponse { }
export interface MsgSetPayeesResponseSDKType { }
export interface MsgTransferPayeeship {
  /** transmitter address of oracle whose payee is changing */
  sender: string;
  transmitter: string;
  feedId: string;
  /** new payee address */

  proposed: string;
}
export interface MsgTransferPayeeshipSDKType {
  /** transmitter address of oracle whose payee is changing */
  sender: string;
  transmitter: string;
  feed_id: string;
  /** new payee address */

  proposed: string;
}
export interface MsgTransferPayeeshipResponse { }
export interface MsgTransferPayeeshipResponseSDKType { }
export interface MsgAcceptPayeeship {
  /** new payee address */
  payee: string;
  /** transmitter address of oracle whose payee is changing */

  transmitter: string;
  feedId: string;
}
export interface MsgAcceptPayeeshipSDKType {
  /** new payee address */
  payee: string;
  /** transmitter address of oracle whose payee is changing */

  transmitter: string;
  feed_id: string;
}
export interface MsgAcceptPayeeshipResponse { }
export interface MsgAcceptPayeeshipResponseSDKType { }

function createBaseMsgCreateFeed(): MsgCreateFeed {
  return {
    sender: "",
    config: undefined
  };
}

export const MsgCreateFeed = {
  encode(message: MsgCreateFeed, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    if (message.config !== undefined) {
      FeedConfig.encode(message.config, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateFeed {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateFeed();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.config = FeedConfig.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgCreateFeed>): MsgCreateFeed {
    const message = createBaseMsgCreateFeed();
    message.sender = object.sender ?? "";
    message.config = object.config !== undefined && object.config !== null ? FeedConfig.fromPartial(object.config) : undefined;
    return message;
  }

};

function createBaseMsgCreateFeedResponse(): MsgCreateFeedResponse {
  return {};
}

export const MsgCreateFeedResponse = {
  encode(_: MsgCreateFeedResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateFeedResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateFeedResponse();

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

  fromPartial(_: DeepPartial<MsgCreateFeedResponse>): MsgCreateFeedResponse {
    const message = createBaseMsgCreateFeedResponse();
    return message;
  }

};

function createBaseMsgUpdateFeed(): MsgUpdateFeed {
  return {
    sender: "",
    feedId: "",
    signers: [],
    transmitters: [],
    linkPerObservation: undefined,
    linkPerTransmission: undefined,
    linkDenom: "",
    feedAdmin: "",
    billingAdmin: ""
  };
}

export const MsgUpdateFeed = {
  encode(message: MsgUpdateFeed, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    if (message.feedId !== "") {
      writer.uint32(18).string(message.feedId);
    }

    for (const v of message.signers) {
      writer.uint32(26).string(v!);
    }

    for (const v of message.transmitters) {
      writer.uint32(34).string(v!);
    }

    if (message.linkPerObservation !== undefined) {
      writer.uint32(42).string(message.linkPerObservation);
    }

    if (message.linkPerTransmission !== undefined) {
      writer.uint32(50).string(message.linkPerTransmission);
    }

    if (message.linkDenom !== "") {
      writer.uint32(58).string(message.linkDenom);
    }

    if (message.feedAdmin !== "") {
      writer.uint32(66).string(message.feedAdmin);
    }

    if (message.billingAdmin !== "") {
      writer.uint32(74).string(message.billingAdmin);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateFeed {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateFeed();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.feedId = reader.string();
          break;

        case 3:
          message.signers.push(reader.string());
          break;

        case 4:
          message.transmitters.push(reader.string());
          break;

        case 5:
          message.linkPerObservation = reader.string();
          break;

        case 6:
          message.linkPerTransmission = reader.string();
          break;

        case 7:
          message.linkDenom = reader.string();
          break;

        case 8:
          message.feedAdmin = reader.string();
          break;

        case 9:
          message.billingAdmin = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgUpdateFeed>): MsgUpdateFeed {
    const message = createBaseMsgUpdateFeed();
    message.sender = object.sender ?? "";
    message.feedId = object.feedId ?? "";
    message.signers = object.signers?.map(e => e) || [];
    message.transmitters = object.transmitters?.map(e => e) || [];
    message.linkPerObservation = object.linkPerObservation ?? undefined;
    message.linkPerTransmission = object.linkPerTransmission ?? undefined;
    message.linkDenom = object.linkDenom ?? "";
    message.feedAdmin = object.feedAdmin ?? "";
    message.billingAdmin = object.billingAdmin ?? "";
    return message;
  }

};

function createBaseMsgUpdateFeedResponse(): MsgUpdateFeedResponse {
  return {};
}

export const MsgUpdateFeedResponse = {
  encode(_: MsgUpdateFeedResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateFeedResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateFeedResponse();

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

  fromPartial(_: DeepPartial<MsgUpdateFeedResponse>): MsgUpdateFeedResponse {
    const message = createBaseMsgUpdateFeedResponse();
    return message;
  }

};

function createBaseMsgTransmit(): MsgTransmit {
  return {
    transmitter: "",
    configDigest: new Uint8Array(),
    feedId: "",
    epoch: Long.UZERO,
    round: Long.UZERO,
    extraHash: new Uint8Array(),
    report: undefined,
    signatures: []
  };
}

export const MsgTransmit = {
  encode(message: MsgTransmit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.transmitter !== "") {
      writer.uint32(10).string(message.transmitter);
    }

    if (message.configDigest.length !== 0) {
      writer.uint32(18).bytes(message.configDigest);
    }

    if (message.feedId !== "") {
      writer.uint32(26).string(message.feedId);
    }

    if (!message.epoch.isZero()) {
      writer.uint32(32).uint64(message.epoch);
    }

    if (!message.round.isZero()) {
      writer.uint32(40).uint64(message.round);
    }

    if (message.extraHash.length !== 0) {
      writer.uint32(50).bytes(message.extraHash);
    }

    if (message.report !== undefined) {
      Report.encode(message.report, writer.uint32(58).fork()).ldelim();
    }

    for (const v of message.signatures) {
      writer.uint32(66).bytes(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgTransmit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransmit();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.transmitter = reader.string();
          break;

        case 2:
          message.configDigest = reader.bytes();
          break;

        case 3:
          message.feedId = reader.string();
          break;

        case 4:
          message.epoch = (reader.uint64() as Long);
          break;

        case 5:
          message.round = (reader.uint64() as Long);
          break;

        case 6:
          message.extraHash = reader.bytes();
          break;

        case 7:
          message.report = Report.decode(reader, reader.uint32());
          break;

        case 8:
          message.signatures.push(reader.bytes());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgTransmit>): MsgTransmit {
    const message = createBaseMsgTransmit();
    message.transmitter = object.transmitter ?? "";
    message.configDigest = object.configDigest ?? new Uint8Array();
    message.feedId = object.feedId ?? "";
    message.epoch = object.epoch !== undefined && object.epoch !== null ? Long.fromValue(object.epoch) : Long.UZERO;
    message.round = object.round !== undefined && object.round !== null ? Long.fromValue(object.round) : Long.UZERO;
    message.extraHash = object.extraHash ?? new Uint8Array();
    message.report = object.report !== undefined && object.report !== null ? Report.fromPartial(object.report) : undefined;
    message.signatures = object.signatures?.map(e => e) || [];
    return message;
  }

};

function createBaseMsgTransmitResponse(): MsgTransmitResponse {
  return {};
}

export const MsgTransmitResponse = {
  encode(_: MsgTransmitResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgTransmitResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransmitResponse();

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

  fromPartial(_: DeepPartial<MsgTransmitResponse>): MsgTransmitResponse {
    const message = createBaseMsgTransmitResponse();
    return message;
  }

};

function createBaseMsgFundFeedRewardPool(): MsgFundFeedRewardPool {
  return {
    sender: "",
    feedId: "",
    amount: undefined
  };
}

export const MsgFundFeedRewardPool = {
  encode(message: MsgFundFeedRewardPool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    if (message.feedId !== "") {
      writer.uint32(18).string(message.feedId);
    }

    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgFundFeedRewardPool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFundFeedRewardPool();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.feedId = reader.string();
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

  fromPartial(object: DeepPartial<MsgFundFeedRewardPool>): MsgFundFeedRewardPool {
    const message = createBaseMsgFundFeedRewardPool();
    message.sender = object.sender ?? "";
    message.feedId = object.feedId ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  }

};

function createBaseMsgFundFeedRewardPoolResponse(): MsgFundFeedRewardPoolResponse {
  return {};
}

export const MsgFundFeedRewardPoolResponse = {
  encode(_: MsgFundFeedRewardPoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgFundFeedRewardPoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFundFeedRewardPoolResponse();

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

  fromPartial(_: DeepPartial<MsgFundFeedRewardPoolResponse>): MsgFundFeedRewardPoolResponse {
    const message = createBaseMsgFundFeedRewardPoolResponse();
    return message;
  }

};

function createBaseMsgWithdrawFeedRewardPool(): MsgWithdrawFeedRewardPool {
  return {
    sender: "",
    feedId: "",
    amount: undefined
  };
}

export const MsgWithdrawFeedRewardPool = {
  encode(message: MsgWithdrawFeedRewardPool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    if (message.feedId !== "") {
      writer.uint32(18).string(message.feedId);
    }

    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawFeedRewardPool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawFeedRewardPool();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.feedId = reader.string();
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

  fromPartial(object: DeepPartial<MsgWithdrawFeedRewardPool>): MsgWithdrawFeedRewardPool {
    const message = createBaseMsgWithdrawFeedRewardPool();
    message.sender = object.sender ?? "";
    message.feedId = object.feedId ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  }

};

function createBaseMsgWithdrawFeedRewardPoolResponse(): MsgWithdrawFeedRewardPoolResponse {
  return {};
}

export const MsgWithdrawFeedRewardPoolResponse = {
  encode(_: MsgWithdrawFeedRewardPoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawFeedRewardPoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawFeedRewardPoolResponse();

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

  fromPartial(_: DeepPartial<MsgWithdrawFeedRewardPoolResponse>): MsgWithdrawFeedRewardPoolResponse {
    const message = createBaseMsgWithdrawFeedRewardPoolResponse();
    return message;
  }

};

function createBaseMsgSetPayees(): MsgSetPayees {
  return {
    sender: "",
    feedId: "",
    transmitters: [],
    payees: []
  };
}

export const MsgSetPayees = {
  encode(message: MsgSetPayees, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    if (message.feedId !== "") {
      writer.uint32(18).string(message.feedId);
    }

    for (const v of message.transmitters) {
      writer.uint32(26).string(v!);
    }

    for (const v of message.payees) {
      writer.uint32(34).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetPayees {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetPayees();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.feedId = reader.string();
          break;

        case 3:
          message.transmitters.push(reader.string());
          break;

        case 4:
          message.payees.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgSetPayees>): MsgSetPayees {
    const message = createBaseMsgSetPayees();
    message.sender = object.sender ?? "";
    message.feedId = object.feedId ?? "";
    message.transmitters = object.transmitters?.map(e => e) || [];
    message.payees = object.payees?.map(e => e) || [];
    return message;
  }

};

function createBaseMsgSetPayeesResponse(): MsgSetPayeesResponse {
  return {};
}

export const MsgSetPayeesResponse = {
  encode(_: MsgSetPayeesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetPayeesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetPayeesResponse();

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

  fromPartial(_: DeepPartial<MsgSetPayeesResponse>): MsgSetPayeesResponse {
    const message = createBaseMsgSetPayeesResponse();
    return message;
  }

};

function createBaseMsgTransferPayeeship(): MsgTransferPayeeship {
  return {
    sender: "",
    transmitter: "",
    feedId: "",
    proposed: ""
  };
}

export const MsgTransferPayeeship = {
  encode(message: MsgTransferPayeeship, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    if (message.transmitter !== "") {
      writer.uint32(18).string(message.transmitter);
    }

    if (message.feedId !== "") {
      writer.uint32(26).string(message.feedId);
    }

    if (message.proposed !== "") {
      writer.uint32(34).string(message.proposed);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgTransferPayeeship {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransferPayeeship();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.transmitter = reader.string();
          break;

        case 3:
          message.feedId = reader.string();
          break;

        case 4:
          message.proposed = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgTransferPayeeship>): MsgTransferPayeeship {
    const message = createBaseMsgTransferPayeeship();
    message.sender = object.sender ?? "";
    message.transmitter = object.transmitter ?? "";
    message.feedId = object.feedId ?? "";
    message.proposed = object.proposed ?? "";
    return message;
  }

};

function createBaseMsgTransferPayeeshipResponse(): MsgTransferPayeeshipResponse {
  return {};
}

export const MsgTransferPayeeshipResponse = {
  encode(_: MsgTransferPayeeshipResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgTransferPayeeshipResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransferPayeeshipResponse();

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

  fromPartial(_: DeepPartial<MsgTransferPayeeshipResponse>): MsgTransferPayeeshipResponse {
    const message = createBaseMsgTransferPayeeshipResponse();
    return message;
  }

};

function createBaseMsgAcceptPayeeship(): MsgAcceptPayeeship {
  return {
    payee: "",
    transmitter: "",
    feedId: ""
  };
}

export const MsgAcceptPayeeship = {
  encode(message: MsgAcceptPayeeship, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.payee !== "") {
      writer.uint32(10).string(message.payee);
    }

    if (message.transmitter !== "") {
      writer.uint32(18).string(message.transmitter);
    }

    if (message.feedId !== "") {
      writer.uint32(26).string(message.feedId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAcceptPayeeship {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAcceptPayeeship();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.payee = reader.string();
          break;

        case 2:
          message.transmitter = reader.string();
          break;

        case 3:
          message.feedId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgAcceptPayeeship>): MsgAcceptPayeeship {
    const message = createBaseMsgAcceptPayeeship();
    message.payee = object.payee ?? "";
    message.transmitter = object.transmitter ?? "";
    message.feedId = object.feedId ?? "";
    return message;
  }

};

function createBaseMsgAcceptPayeeshipResponse(): MsgAcceptPayeeshipResponse {
  return {};
}

export const MsgAcceptPayeeshipResponse = {
  encode(_: MsgAcceptPayeeshipResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAcceptPayeeshipResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAcceptPayeeshipResponse();

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

  fromPartial(_: DeepPartial<MsgAcceptPayeeshipResponse>): MsgAcceptPayeeshipResponse {
    const message = createBaseMsgAcceptPayeeshipResponse();
    return message;
  }

};