import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
export interface BlacklistEthereumAddressesProposal {
  title: string;
  description: string;
  blacklistAddresses: string[];
}
export interface BlacklistEthereumAddressesProposalSDKType {
  title: string;
  description: string;
  blacklist_addresses: string[];
}
export interface RevokeEthereumBlacklistProposal {
  title: string;
  description: string;
  blacklistAddresses: string[];
}
export interface RevokeEthereumBlacklistProposalSDKType {
  title: string;
  description: string;
  blacklist_addresses: string[];
}

function createBaseBlacklistEthereumAddressesProposal(): BlacklistEthereumAddressesProposal {
  return {
    title: "",
    description: "",
    blacklistAddresses: []
  };
}

export const BlacklistEthereumAddressesProposal = {
  encode(message: BlacklistEthereumAddressesProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    for (const v of message.blacklistAddresses) {
      writer.uint32(26).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BlacklistEthereumAddressesProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlacklistEthereumAddressesProposal();

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
          message.blacklistAddresses.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<BlacklistEthereumAddressesProposal>): BlacklistEthereumAddressesProposal {
    const message = createBaseBlacklistEthereumAddressesProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.blacklistAddresses = object.blacklistAddresses?.map(e => e) || [];
    return message;
  }

};

function createBaseRevokeEthereumBlacklistProposal(): RevokeEthereumBlacklistProposal {
  return {
    title: "",
    description: "",
    blacklistAddresses: []
  };
}

export const RevokeEthereumBlacklistProposal = {
  encode(message: RevokeEthereumBlacklistProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    for (const v of message.blacklistAddresses) {
      writer.uint32(26).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RevokeEthereumBlacklistProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRevokeEthereumBlacklistProposal();

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
          message.blacklistAddresses.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<RevokeEthereumBlacklistProposal>): RevokeEthereumBlacklistProposal {
    const message = createBaseRevokeEthereumBlacklistProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.blacklistAddresses = object.blacklistAddresses?.map(e => e) || [];
    return message;
  }

};