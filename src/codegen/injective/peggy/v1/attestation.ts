import { Any, AnySDKType } from "../../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@cosmology/helpers";
/**
 * ClaimType is the cosmos type of an event from the counterpart chain that can
 * be handled
 */

export enum ClaimType {
  CLAIM_TYPE_UNKNOWN = 0,
  CLAIM_TYPE_DEPOSIT = 1,
  CLAIM_TYPE_WITHDRAW = 2,
  CLAIM_TYPE_ERC20_DEPLOYED = 3,
  CLAIM_TYPE_VALSET_UPDATED = 4,
  UNRECOGNIZED = -1,
}
/**
 * ClaimType is the cosmos type of an event from the counterpart chain that can
 * be handled
 */

export enum ClaimTypeSDKType {
  CLAIM_TYPE_UNKNOWN = 0,
  CLAIM_TYPE_DEPOSIT = 1,
  CLAIM_TYPE_WITHDRAW = 2,
  CLAIM_TYPE_ERC20_DEPLOYED = 3,
  CLAIM_TYPE_VALSET_UPDATED = 4,
  UNRECOGNIZED = -1,
}
export function claimTypeFromJSON(object: any): ClaimType {
  switch (object) {
    case 0:
    case "CLAIM_TYPE_UNKNOWN":
      return ClaimType.CLAIM_TYPE_UNKNOWN;

    case 1:
    case "CLAIM_TYPE_DEPOSIT":
      return ClaimType.CLAIM_TYPE_DEPOSIT;

    case 2:
    case "CLAIM_TYPE_WITHDRAW":
      return ClaimType.CLAIM_TYPE_WITHDRAW;

    case 3:
    case "CLAIM_TYPE_ERC20_DEPLOYED":
      return ClaimType.CLAIM_TYPE_ERC20_DEPLOYED;

    case 4:
    case "CLAIM_TYPE_VALSET_UPDATED":
      return ClaimType.CLAIM_TYPE_VALSET_UPDATED;

    case -1:
    case "UNRECOGNIZED":
    default:
      return ClaimType.UNRECOGNIZED;
  }
}
export function claimTypeToJSON(object: ClaimType): string {
  switch (object) {
    case ClaimType.CLAIM_TYPE_UNKNOWN:
      return "CLAIM_TYPE_UNKNOWN";

    case ClaimType.CLAIM_TYPE_DEPOSIT:
      return "CLAIM_TYPE_DEPOSIT";

    case ClaimType.CLAIM_TYPE_WITHDRAW:
      return "CLAIM_TYPE_WITHDRAW";

    case ClaimType.CLAIM_TYPE_ERC20_DEPLOYED:
      return "CLAIM_TYPE_ERC20_DEPLOYED";

    case ClaimType.CLAIM_TYPE_VALSET_UPDATED:
      return "CLAIM_TYPE_VALSET_UPDATED";

    default:
      return "UNKNOWN";
  }
}
/**
 * Attestation is an aggregate of `claims` that eventually becomes `observed` by
 * all orchestrators
 * EVENT_NONCE:
 * EventNonce a nonce provided by the peggy contract that is unique per event fired
 * These event nonces must be relayed in order. This is a correctness issue,
 * if relaying out of order transaction replay attacks become possible
 * OBSERVED:
 * Observed indicates that >67% of validators have attested to the event,
 * and that the event should be executed by the peggy state machine
 * 
 * The actual content of the claims is passed in with the transaction making the claim
 * and then passed through the call stack alongside the attestation while it is processed
 * the key in which the attestation is stored is keyed on the exact details of the claim
 * but there is no reason to store those exact details becuause the next message sender
 * will kindly provide you with them.
 */

export interface Attestation {
  observed: boolean;
  votes: string[];
  height: Long;
  claim: Any;
}
/**
 * Attestation is an aggregate of `claims` that eventually becomes `observed` by
 * all orchestrators
 * EVENT_NONCE:
 * EventNonce a nonce provided by the peggy contract that is unique per event fired
 * These event nonces must be relayed in order. This is a correctness issue,
 * if relaying out of order transaction replay attacks become possible
 * OBSERVED:
 * Observed indicates that >67% of validators have attested to the event,
 * and that the event should be executed by the peggy state machine
 * 
 * The actual content of the claims is passed in with the transaction making the claim
 * and then passed through the call stack alongside the attestation while it is processed
 * the key in which the attestation is stored is keyed on the exact details of the claim
 * but there is no reason to store those exact details becuause the next message sender
 * will kindly provide you with them.
 */

export interface AttestationSDKType {
  observed: boolean;
  votes: string[];
  height: Long;
  claim: AnySDKType;
}
/**
 * ERC20Token unique identifier for an Ethereum ERC20 token.
 * CONTRACT:
 * The contract address on ETH of the token, this could be a Cosmos
 * originated token, if so it will be the ERC20 address of the representation
 * (note: developers should look up the token symbol using the address on ETH to display for UI)
 */

export interface ERC20Token {
  contract: string;
  amount: string;
}
/**
 * ERC20Token unique identifier for an Ethereum ERC20 token.
 * CONTRACT:
 * The contract address on ETH of the token, this could be a Cosmos
 * originated token, if so it will be the ERC20 address of the representation
 * (note: developers should look up the token symbol using the address on ETH to display for UI)
 */

export interface ERC20TokenSDKType {
  contract: string;
  amount: string;
}

function createBaseAttestation(): Attestation {
  return {
    observed: false,
    votes: [],
    height: Long.UZERO,
    claim: undefined
  };
}

export const Attestation = {
  encode(message: Attestation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.observed === true) {
      writer.uint32(8).bool(message.observed);
    }

    for (const v of message.votes) {
      writer.uint32(18).string(v!);
    }

    if (!message.height.isZero()) {
      writer.uint32(24).uint64(message.height);
    }

    if (message.claim !== undefined) {
      Any.encode(message.claim, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Attestation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttestation();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.observed = reader.bool();
          break;

        case 2:
          message.votes.push(reader.string());
          break;

        case 3:
          message.height = (reader.uint64() as Long);
          break;

        case 4:
          message.claim = Any.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Attestation>): Attestation {
    const message = createBaseAttestation();
    message.observed = object.observed ?? false;
    message.votes = object.votes?.map(e => e) || [];
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.UZERO;
    message.claim = object.claim !== undefined && object.claim !== null ? Any.fromPartial(object.claim) : undefined;
    return message;
  }

};

function createBaseERC20Token(): ERC20Token {
  return {
    contract: "",
    amount: ""
  };
}

export const ERC20Token = {
  encode(message: ERC20Token, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contract !== "") {
      writer.uint32(10).string(message.contract);
    }

    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ERC20Token {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseERC20Token();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.contract = reader.string();
          break;

        case 2:
          message.amount = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<ERC20Token>): ERC20Token {
    const message = createBaseERC20Token();
    message.contract = object.contract ?? "";
    message.amount = object.amount ?? "";
    return message;
  }

};