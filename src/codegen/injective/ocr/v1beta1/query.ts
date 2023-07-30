import { Params, ParamsSDKType, FeedConfigInfo, FeedConfigInfoSDKType, FeedConfig, FeedConfigSDKType, EpochAndRound, EpochAndRoundSDKType, Transmission, TransmissionSDKType } from "./ocr";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { GenesisState, GenesisStateSDKType } from "./genesis";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@cosmology/helpers";
export interface QueryParamsRequest { }
export interface QueryParamsRequestSDKType { }
export interface QueryParamsResponse {
  params: Params;
}
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
export interface QueryFeedConfigRequest {
  feedId: string;
}
export interface QueryFeedConfigRequestSDKType {
  feed_id: string;
}
export interface QueryFeedConfigResponse {
  feedConfigInfo: FeedConfigInfo;
  feedConfig: FeedConfig;
}
export interface QueryFeedConfigResponseSDKType {
  feed_config_info: FeedConfigInfoSDKType;
  feed_config: FeedConfigSDKType;
}
export interface QueryFeedConfigInfoRequest {
  feedId: string;
}
export interface QueryFeedConfigInfoRequestSDKType {
  feed_id: string;
}
export interface QueryFeedConfigInfoResponse {
  feedConfigInfo: FeedConfigInfo;
  epochAndRound: EpochAndRound;
}
export interface QueryFeedConfigInfoResponseSDKType {
  feed_config_info: FeedConfigInfoSDKType;
  epoch_and_round: EpochAndRoundSDKType;
}
export interface QueryLatestRoundRequest {
  feedId: string;
}
export interface QueryLatestRoundRequestSDKType {
  feed_id: string;
}
export interface QueryLatestRoundResponse {
  latestRoundId: Long;
  data: Transmission;
}
export interface QueryLatestRoundResponseSDKType {
  latest_round_id: Long;
  data: TransmissionSDKType;
}
export interface QueryLatestTransmissionDetailsRequest {
  feedId: string;
}
export interface QueryLatestTransmissionDetailsRequestSDKType {
  feed_id: string;
}
export interface QueryLatestTransmissionDetailsResponse {
  configDigest: Uint8Array;
  epochAndRound: EpochAndRound;
  data: Transmission;
}
export interface QueryLatestTransmissionDetailsResponseSDKType {
  config_digest: Uint8Array;
  epoch_and_round: EpochAndRoundSDKType;
  data: TransmissionSDKType;
}
export interface QueryOwedAmountRequest {
  transmitter: string;
}
export interface QueryOwedAmountRequestSDKType {
  transmitter: string;
}
export interface QueryOwedAmountResponse {
  amount: Coin;
}
export interface QueryOwedAmountResponseSDKType {
  amount: CoinSDKType;
}
export interface QueryModuleStateRequest { }
export interface QueryModuleStateRequestSDKType { }
export interface QueryModuleStateResponse {
  state: GenesisState;
}
export interface QueryModuleStateResponseSDKType {
  state: GenesisStateSDKType;
}

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();

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

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  }

};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: undefined
  };
}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }

};

function createBaseQueryFeedConfigRequest(): QueryFeedConfigRequest {
  return {
    feedId: ""
  };
}

export const QueryFeedConfigRequest = {
  encode(message: QueryFeedConfigRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.feedId !== "") {
      writer.uint32(10).string(message.feedId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFeedConfigRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFeedConfigRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.feedId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryFeedConfigRequest>): QueryFeedConfigRequest {
    const message = createBaseQueryFeedConfigRequest();
    message.feedId = object.feedId ?? "";
    return message;
  }

};

function createBaseQueryFeedConfigResponse(): QueryFeedConfigResponse {
  return {
    feedConfigInfo: undefined,
    feedConfig: undefined
  };
}

export const QueryFeedConfigResponse = {
  encode(message: QueryFeedConfigResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.feedConfigInfo !== undefined) {
      FeedConfigInfo.encode(message.feedConfigInfo, writer.uint32(10).fork()).ldelim();
    }

    if (message.feedConfig !== undefined) {
      FeedConfig.encode(message.feedConfig, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFeedConfigResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFeedConfigResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.feedConfigInfo = FeedConfigInfo.decode(reader, reader.uint32());
          break;

        case 2:
          message.feedConfig = FeedConfig.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryFeedConfigResponse>): QueryFeedConfigResponse {
    const message = createBaseQueryFeedConfigResponse();
    message.feedConfigInfo = object.feedConfigInfo !== undefined && object.feedConfigInfo !== null ? FeedConfigInfo.fromPartial(object.feedConfigInfo) : undefined;
    message.feedConfig = object.feedConfig !== undefined && object.feedConfig !== null ? FeedConfig.fromPartial(object.feedConfig) : undefined;
    return message;
  }

};

function createBaseQueryFeedConfigInfoRequest(): QueryFeedConfigInfoRequest {
  return {
    feedId: ""
  };
}

export const QueryFeedConfigInfoRequest = {
  encode(message: QueryFeedConfigInfoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.feedId !== "") {
      writer.uint32(10).string(message.feedId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFeedConfigInfoRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFeedConfigInfoRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.feedId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryFeedConfigInfoRequest>): QueryFeedConfigInfoRequest {
    const message = createBaseQueryFeedConfigInfoRequest();
    message.feedId = object.feedId ?? "";
    return message;
  }

};

function createBaseQueryFeedConfigInfoResponse(): QueryFeedConfigInfoResponse {
  return {
    feedConfigInfo: undefined,
    epochAndRound: undefined
  };
}

export const QueryFeedConfigInfoResponse = {
  encode(message: QueryFeedConfigInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.feedConfigInfo !== undefined) {
      FeedConfigInfo.encode(message.feedConfigInfo, writer.uint32(10).fork()).ldelim();
    }

    if (message.epochAndRound !== undefined) {
      EpochAndRound.encode(message.epochAndRound, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFeedConfigInfoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFeedConfigInfoResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.feedConfigInfo = FeedConfigInfo.decode(reader, reader.uint32());
          break;

        case 2:
          message.epochAndRound = EpochAndRound.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryFeedConfigInfoResponse>): QueryFeedConfigInfoResponse {
    const message = createBaseQueryFeedConfigInfoResponse();
    message.feedConfigInfo = object.feedConfigInfo !== undefined && object.feedConfigInfo !== null ? FeedConfigInfo.fromPartial(object.feedConfigInfo) : undefined;
    message.epochAndRound = object.epochAndRound !== undefined && object.epochAndRound !== null ? EpochAndRound.fromPartial(object.epochAndRound) : undefined;
    return message;
  }

};

function createBaseQueryLatestRoundRequest(): QueryLatestRoundRequest {
  return {
    feedId: ""
  };
}

export const QueryLatestRoundRequest = {
  encode(message: QueryLatestRoundRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.feedId !== "") {
      writer.uint32(10).string(message.feedId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLatestRoundRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLatestRoundRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.feedId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryLatestRoundRequest>): QueryLatestRoundRequest {
    const message = createBaseQueryLatestRoundRequest();
    message.feedId = object.feedId ?? "";
    return message;
  }

};

function createBaseQueryLatestRoundResponse(): QueryLatestRoundResponse {
  return {
    latestRoundId: Long.UZERO,
    data: undefined
  };
}

export const QueryLatestRoundResponse = {
  encode(message: QueryLatestRoundResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.latestRoundId.isZero()) {
      writer.uint32(8).uint64(message.latestRoundId);
    }

    if (message.data !== undefined) {
      Transmission.encode(message.data, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLatestRoundResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLatestRoundResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.latestRoundId = (reader.uint64() as Long);
          break;

        case 2:
          message.data = Transmission.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryLatestRoundResponse>): QueryLatestRoundResponse {
    const message = createBaseQueryLatestRoundResponse();
    message.latestRoundId = object.latestRoundId !== undefined && object.latestRoundId !== null ? Long.fromValue(object.latestRoundId) : Long.UZERO;
    message.data = object.data !== undefined && object.data !== null ? Transmission.fromPartial(object.data) : undefined;
    return message;
  }

};

function createBaseQueryLatestTransmissionDetailsRequest(): QueryLatestTransmissionDetailsRequest {
  return {
    feedId: ""
  };
}

export const QueryLatestTransmissionDetailsRequest = {
  encode(message: QueryLatestTransmissionDetailsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.feedId !== "") {
      writer.uint32(10).string(message.feedId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLatestTransmissionDetailsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLatestTransmissionDetailsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.feedId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryLatestTransmissionDetailsRequest>): QueryLatestTransmissionDetailsRequest {
    const message = createBaseQueryLatestTransmissionDetailsRequest();
    message.feedId = object.feedId ?? "";
    return message;
  }

};

function createBaseQueryLatestTransmissionDetailsResponse(): QueryLatestTransmissionDetailsResponse {
  return {
    configDigest: new Uint8Array(),
    epochAndRound: undefined,
    data: undefined
  };
}

export const QueryLatestTransmissionDetailsResponse = {
  encode(message: QueryLatestTransmissionDetailsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.configDigest.length !== 0) {
      writer.uint32(10).bytes(message.configDigest);
    }

    if (message.epochAndRound !== undefined) {
      EpochAndRound.encode(message.epochAndRound, writer.uint32(18).fork()).ldelim();
    }

    if (message.data !== undefined) {
      Transmission.encode(message.data, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLatestTransmissionDetailsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLatestTransmissionDetailsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.configDigest = reader.bytes();
          break;

        case 2:
          message.epochAndRound = EpochAndRound.decode(reader, reader.uint32());
          break;

        case 3:
          message.data = Transmission.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryLatestTransmissionDetailsResponse>): QueryLatestTransmissionDetailsResponse {
    const message = createBaseQueryLatestTransmissionDetailsResponse();
    message.configDigest = object.configDigest ?? new Uint8Array();
    message.epochAndRound = object.epochAndRound !== undefined && object.epochAndRound !== null ? EpochAndRound.fromPartial(object.epochAndRound) : undefined;
    message.data = object.data !== undefined && object.data !== null ? Transmission.fromPartial(object.data) : undefined;
    return message;
  }

};

function createBaseQueryOwedAmountRequest(): QueryOwedAmountRequest {
  return {
    transmitter: ""
  };
}

export const QueryOwedAmountRequest = {
  encode(message: QueryOwedAmountRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.transmitter !== "") {
      writer.uint32(10).string(message.transmitter);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryOwedAmountRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOwedAmountRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.transmitter = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryOwedAmountRequest>): QueryOwedAmountRequest {
    const message = createBaseQueryOwedAmountRequest();
    message.transmitter = object.transmitter ?? "";
    return message;
  }

};

function createBaseQueryOwedAmountResponse(): QueryOwedAmountResponse {
  return {
    amount: undefined
  };
}

export const QueryOwedAmountResponse = {
  encode(message: QueryOwedAmountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryOwedAmountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOwedAmountResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.amount = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryOwedAmountResponse>): QueryOwedAmountResponse {
    const message = createBaseQueryOwedAmountResponse();
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  }

};

function createBaseQueryModuleStateRequest(): QueryModuleStateRequest {
  return {};
}

export const QueryModuleStateRequest = {
  encode(_: QueryModuleStateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryModuleStateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryModuleStateRequest();

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

  fromPartial(_: DeepPartial<QueryModuleStateRequest>): QueryModuleStateRequest {
    const message = createBaseQueryModuleStateRequest();
    return message;
  }

};

function createBaseQueryModuleStateResponse(): QueryModuleStateResponse {
  return {
    state: undefined
  };
}

export const QueryModuleStateResponse = {
  encode(message: QueryModuleStateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.state !== undefined) {
      GenesisState.encode(message.state, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryModuleStateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryModuleStateResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.state = GenesisState.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryModuleStateResponse>): QueryModuleStateResponse {
    const message = createBaseQueryModuleStateResponse();
    message.state = object.state !== undefined && object.state !== null ? GenesisState.fromPartial(object.state) : undefined;
    return message;
  }

};