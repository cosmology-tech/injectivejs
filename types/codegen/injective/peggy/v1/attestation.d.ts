import { Any, AnySDKType } from "../../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
/**
 * ClaimType is the cosmos type of an event from the counterpart chain that can
 * be handled
 */
export declare enum ClaimType {
    CLAIM_TYPE_UNKNOWN = 0,
    CLAIM_TYPE_DEPOSIT = 1,
    CLAIM_TYPE_WITHDRAW = 2,
    CLAIM_TYPE_ERC20_DEPLOYED = 3,
    CLAIM_TYPE_VALSET_UPDATED = 4,
    UNRECOGNIZED = -1
}
/**
 * ClaimType is the cosmos type of an event from the counterpart chain that can
 * be handled
 */
export declare enum ClaimTypeSDKType {
    CLAIM_TYPE_UNKNOWN = 0,
    CLAIM_TYPE_DEPOSIT = 1,
    CLAIM_TYPE_WITHDRAW = 2,
    CLAIM_TYPE_ERC20_DEPLOYED = 3,
    CLAIM_TYPE_VALSET_UPDATED = 4,
    UNRECOGNIZED = -1
}
export declare function claimTypeFromJSON(object: any): ClaimType;
export declare function claimTypeToJSON(object: ClaimType): string;
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
export declare const Attestation: {
    encode(message: Attestation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Attestation;
    fromPartial(object: DeepPartial<Attestation>): Attestation;
};
export declare const ERC20Token: {
    encode(message: ERC20Token, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ERC20Token;
    fromPartial(object: DeepPartial<ERC20Token>): ERC20Token;
};
