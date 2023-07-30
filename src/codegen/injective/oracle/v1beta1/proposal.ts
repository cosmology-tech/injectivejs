import { BandOracleRequest, BandOracleRequestSDKType, BandIBCParams, BandIBCParamsSDKType } from "./oracle";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@cosmology/helpers";
export interface GrantBandOraclePrivilegeProposal {
  title: string;
  description: string;
  relayers: string[];
}
export interface GrantBandOraclePrivilegeProposalSDKType {
  title: string;
  description: string;
  relayers: string[];
}
export interface RevokeBandOraclePrivilegeProposal {
  title: string;
  description: string;
  relayers: string[];
}
export interface RevokeBandOraclePrivilegeProposalSDKType {
  title: string;
  description: string;
  relayers: string[];
}
export interface GrantPriceFeederPrivilegeProposal {
  title: string;
  description: string;
  base: string;
  quote: string;
  relayers: string[];
}
export interface GrantPriceFeederPrivilegeProposalSDKType {
  title: string;
  description: string;
  base: string;
  quote: string;
  relayers: string[];
}
export interface GrantProviderPrivilegeProposal {
  title: string;
  description: string;
  provider: string;
  relayers: string[];
}
export interface GrantProviderPrivilegeProposalSDKType {
  title: string;
  description: string;
  provider: string;
  relayers: string[];
}
export interface RevokeProviderPrivilegeProposal {
  title: string;
  description: string;
  provider: string;
  relayers: string[];
}
export interface RevokeProviderPrivilegeProposalSDKType {
  title: string;
  description: string;
  provider: string;
  relayers: string[];
}
export interface RevokePriceFeederPrivilegeProposal {
  title: string;
  description: string;
  base: string;
  quote: string;
  relayers: string[];
}
export interface RevokePriceFeederPrivilegeProposalSDKType {
  title: string;
  description: string;
  base: string;
  quote: string;
  relayers: string[];
}
export interface AuthorizeBandOracleRequestProposal {
  title: string;
  description: string;
  request: BandOracleRequest;
}
export interface AuthorizeBandOracleRequestProposalSDKType {
  title: string;
  description: string;
  request: BandOracleRequestSDKType;
}
export interface UpdateBandOracleRequestProposal {
  title: string;
  description: string;
  deleteRequestId: Long;
  updateOracleRequest: BandOracleRequest;
}
export interface UpdateBandOracleRequestProposalSDKType {
  title: string;
  description: string;
  delete_request_id: Long;
  update_oracle_request: BandOracleRequestSDKType;
}
export interface EnableBandIBCProposal {
  title: string;
  description: string;
  bandIbcParams: BandIBCParams;
}
export interface EnableBandIBCProposalSDKType {
  title: string;
  description: string;
  band_ibc_params: BandIBCParamsSDKType;
}

function createBaseGrantBandOraclePrivilegeProposal(): GrantBandOraclePrivilegeProposal {
  return {
    title: "",
    description: "",
    relayers: []
  };
}

export const GrantBandOraclePrivilegeProposal = {
  encode(message: GrantBandOraclePrivilegeProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    for (const v of message.relayers) {
      writer.uint32(26).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GrantBandOraclePrivilegeProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGrantBandOraclePrivilegeProposal();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;

        case 2:
          message.description = reader.string();
          break;

        case 3:
          message.relayers.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<GrantBandOraclePrivilegeProposal>): GrantBandOraclePrivilegeProposal {
    const message = createBaseGrantBandOraclePrivilegeProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.relayers = object.relayers?.map(e => e) || [];
    return message;
  }

};

function createBaseRevokeBandOraclePrivilegeProposal(): RevokeBandOraclePrivilegeProposal {
  return {
    title: "",
    description: "",
    relayers: []
  };
}

export const RevokeBandOraclePrivilegeProposal = {
  encode(message: RevokeBandOraclePrivilegeProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    for (const v of message.relayers) {
      writer.uint32(26).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RevokeBandOraclePrivilegeProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRevokeBandOraclePrivilegeProposal();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;

        case 2:
          message.description = reader.string();
          break;

        case 3:
          message.relayers.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<RevokeBandOraclePrivilegeProposal>): RevokeBandOraclePrivilegeProposal {
    const message = createBaseRevokeBandOraclePrivilegeProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.relayers = object.relayers?.map(e => e) || [];
    return message;
  }

};

function createBaseGrantPriceFeederPrivilegeProposal(): GrantPriceFeederPrivilegeProposal {
  return {
    title: "",
    description: "",
    base: "",
    quote: "",
    relayers: []
  };
}

export const GrantPriceFeederPrivilegeProposal = {
  encode(message: GrantPriceFeederPrivilegeProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    if (message.base !== "") {
      writer.uint32(26).string(message.base);
    }

    if (message.quote !== "") {
      writer.uint32(34).string(message.quote);
    }

    for (const v of message.relayers) {
      writer.uint32(42).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GrantPriceFeederPrivilegeProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGrantPriceFeederPrivilegeProposal();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;

        case 2:
          message.description = reader.string();
          break;

        case 3:
          message.base = reader.string();
          break;

        case 4:
          message.quote = reader.string();
          break;

        case 5:
          message.relayers.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<GrantPriceFeederPrivilegeProposal>): GrantPriceFeederPrivilegeProposal {
    const message = createBaseGrantPriceFeederPrivilegeProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.base = object.base ?? "";
    message.quote = object.quote ?? "";
    message.relayers = object.relayers?.map(e => e) || [];
    return message;
  }

};

function createBaseGrantProviderPrivilegeProposal(): GrantProviderPrivilegeProposal {
  return {
    title: "",
    description: "",
    provider: "",
    relayers: []
  };
}

export const GrantProviderPrivilegeProposal = {
  encode(message: GrantProviderPrivilegeProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    if (message.provider !== "") {
      writer.uint32(26).string(message.provider);
    }

    for (const v of message.relayers) {
      writer.uint32(34).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GrantProviderPrivilegeProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGrantProviderPrivilegeProposal();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;

        case 2:
          message.description = reader.string();
          break;

        case 3:
          message.provider = reader.string();
          break;

        case 4:
          message.relayers.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<GrantProviderPrivilegeProposal>): GrantProviderPrivilegeProposal {
    const message = createBaseGrantProviderPrivilegeProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.provider = object.provider ?? "";
    message.relayers = object.relayers?.map(e => e) || [];
    return message;
  }

};

function createBaseRevokeProviderPrivilegeProposal(): RevokeProviderPrivilegeProposal {
  return {
    title: "",
    description: "",
    provider: "",
    relayers: []
  };
}

export const RevokeProviderPrivilegeProposal = {
  encode(message: RevokeProviderPrivilegeProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    if (message.provider !== "") {
      writer.uint32(26).string(message.provider);
    }

    for (const v of message.relayers) {
      writer.uint32(42).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RevokeProviderPrivilegeProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRevokeProviderPrivilegeProposal();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;

        case 2:
          message.description = reader.string();
          break;

        case 3:
          message.provider = reader.string();
          break;

        case 5:
          message.relayers.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<RevokeProviderPrivilegeProposal>): RevokeProviderPrivilegeProposal {
    const message = createBaseRevokeProviderPrivilegeProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.provider = object.provider ?? "";
    message.relayers = object.relayers?.map(e => e) || [];
    return message;
  }

};

function createBaseRevokePriceFeederPrivilegeProposal(): RevokePriceFeederPrivilegeProposal {
  return {
    title: "",
    description: "",
    base: "",
    quote: "",
    relayers: []
  };
}

export const RevokePriceFeederPrivilegeProposal = {
  encode(message: RevokePriceFeederPrivilegeProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    if (message.base !== "") {
      writer.uint32(26).string(message.base);
    }

    if (message.quote !== "") {
      writer.uint32(34).string(message.quote);
    }

    for (const v of message.relayers) {
      writer.uint32(42).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RevokePriceFeederPrivilegeProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRevokePriceFeederPrivilegeProposal();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;

        case 2:
          message.description = reader.string();
          break;

        case 3:
          message.base = reader.string();
          break;

        case 4:
          message.quote = reader.string();
          break;

        case 5:
          message.relayers.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<RevokePriceFeederPrivilegeProposal>): RevokePriceFeederPrivilegeProposal {
    const message = createBaseRevokePriceFeederPrivilegeProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.base = object.base ?? "";
    message.quote = object.quote ?? "";
    message.relayers = object.relayers?.map(e => e) || [];
    return message;
  }

};

function createBaseAuthorizeBandOracleRequestProposal(): AuthorizeBandOracleRequestProposal {
  return {
    title: "",
    description: "",
    request: undefined
  };
}

export const AuthorizeBandOracleRequestProposal = {
  encode(message: AuthorizeBandOracleRequestProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    if (message.request !== undefined) {
      BandOracleRequest.encode(message.request, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AuthorizeBandOracleRequestProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthorizeBandOracleRequestProposal();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;

        case 2:
          message.description = reader.string();
          break;

        case 3:
          message.request = BandOracleRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<AuthorizeBandOracleRequestProposal>): AuthorizeBandOracleRequestProposal {
    const message = createBaseAuthorizeBandOracleRequestProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.request = object.request !== undefined && object.request !== null ? BandOracleRequest.fromPartial(object.request) : undefined;
    return message;
  }

};

function createBaseUpdateBandOracleRequestProposal(): UpdateBandOracleRequestProposal {
  return {
    title: "",
    description: "",
    deleteRequestId: Long.UZERO,
    updateOracleRequest: undefined
  };
}

export const UpdateBandOracleRequestProposal = {
  encode(message: UpdateBandOracleRequestProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    if (!message.deleteRequestId.isZero()) {
      writer.uint32(24).uint64(message.deleteRequestId);
    }

    if (message.updateOracleRequest !== undefined) {
      BandOracleRequest.encode(message.updateOracleRequest, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateBandOracleRequestProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateBandOracleRequestProposal();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;

        case 2:
          message.description = reader.string();
          break;

        case 3:
          message.deleteRequestId = (reader.uint64() as Long);
          break;

        case 4:
          message.updateOracleRequest = BandOracleRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<UpdateBandOracleRequestProposal>): UpdateBandOracleRequestProposal {
    const message = createBaseUpdateBandOracleRequestProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.deleteRequestId = object.deleteRequestId !== undefined && object.deleteRequestId !== null ? Long.fromValue(object.deleteRequestId) : Long.UZERO;
    message.updateOracleRequest = object.updateOracleRequest !== undefined && object.updateOracleRequest !== null ? BandOracleRequest.fromPartial(object.updateOracleRequest) : undefined;
    return message;
  }

};

function createBaseEnableBandIBCProposal(): EnableBandIBCProposal {
  return {
    title: "",
    description: "",
    bandIbcParams: undefined
  };
}

export const EnableBandIBCProposal = {
  encode(message: EnableBandIBCProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    if (message.bandIbcParams !== undefined) {
      BandIBCParams.encode(message.bandIbcParams, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EnableBandIBCProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEnableBandIBCProposal();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;

        case 2:
          message.description = reader.string();
          break;

        case 3:
          message.bandIbcParams = BandIBCParams.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<EnableBandIBCProposal>): EnableBandIBCProposal {
    const message = createBaseEnableBandIBCProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.bandIbcParams = object.bandIbcParams !== undefined && object.bandIbcParams !== null ? BandIBCParams.fromPartial(object.bandIbcParams) : undefined;
    return message;
  }

};