import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@cosmology/helpers";
/** BridgeValidator represents a validator's ETH address and its power */
export interface BridgeValidator {
    power: Long;
    ethereumAddress: string;
}
/** BridgeValidator represents a validator's ETH address and its power */
export interface BridgeValidatorSDKType {
    power: Long;
    ethereum_address: string;
}
/**
 * Valset is the Ethereum Bridge Multsig Set, each peggy validator also
 * maintains an ETH key to sign messages, these are used to check signatures on
 * ETH because of the significant gas savings
 */
export interface Valset {
    nonce: Long;
    members: BridgeValidator[];
    height: Long;
    rewardAmount: string;
    /** the reward token in it's Ethereum hex address representation */
    rewardToken: string;
}
/**
 * Valset is the Ethereum Bridge Multsig Set, each peggy validator also
 * maintains an ETH key to sign messages, these are used to check signatures on
 * ETH because of the significant gas savings
 */
export interface ValsetSDKType {
    nonce: Long;
    members: BridgeValidatorSDKType[];
    height: Long;
    reward_amount: string;
    /** the reward token in it's Ethereum hex address representation */
    reward_token: string;
}
/**
 * LastObservedEthereumBlockHeight stores the last observed
 * Ethereum block height along with the Cosmos block height that
 * it was observed at. These two numbers can be used to project
 * outward and always produce batches with timeouts in the future
 * even if no Ethereum block height has been relayed for a long time
 */
export interface LastObservedEthereumBlockHeight {
    cosmosBlockHeight: Long;
    ethereumBlockHeight: Long;
}
/**
 * LastObservedEthereumBlockHeight stores the last observed
 * Ethereum block height along with the Cosmos block height that
 * it was observed at. These two numbers can be used to project
 * outward and always produce batches with timeouts in the future
 * even if no Ethereum block height has been relayed for a long time
 */
export interface LastObservedEthereumBlockHeightSDKType {
    cosmos_block_height: Long;
    ethereum_block_height: Long;
}
/** LastClaimEvent stores last claim event details of validator. */
export interface LastClaimEvent {
    ethereumEventNonce: Long;
    ethereumEventHeight: Long;
}
/** LastClaimEvent stores last claim event details of validator. */
export interface LastClaimEventSDKType {
    ethereum_event_nonce: Long;
    ethereum_event_height: Long;
}
/**
 * This records the relationship between an ERC20 token and the denom
 * of the corresponding Cosmos originated asset
 */
export interface ERC20ToDenom {
    erc20: string;
    denom: string;
}
/**
 * This records the relationship between an ERC20 token and the denom
 * of the corresponding Cosmos originated asset
 */
export interface ERC20ToDenomSDKType {
    erc20: string;
    denom: string;
}
export declare const BridgeValidator: {
    encode(message: BridgeValidator, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BridgeValidator;
    fromPartial(object: DeepPartial<BridgeValidator>): BridgeValidator;
};
export declare const Valset: {
    encode(message: Valset, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Valset;
    fromPartial(object: DeepPartial<Valset>): Valset;
};
export declare const LastObservedEthereumBlockHeight: {
    encode(message: LastObservedEthereumBlockHeight, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LastObservedEthereumBlockHeight;
    fromPartial(object: DeepPartial<LastObservedEthereumBlockHeight>): LastObservedEthereumBlockHeight;
};
export declare const LastClaimEvent: {
    encode(message: LastClaimEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LastClaimEvent;
    fromPartial(object: DeepPartial<LastClaimEvent>): LastClaimEvent;
};
export declare const ERC20ToDenom: {
    encode(message: ERC20ToDenom, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ERC20ToDenom;
    fromPartial(object: DeepPartial<ERC20ToDenom>): ERC20ToDenom;
};
