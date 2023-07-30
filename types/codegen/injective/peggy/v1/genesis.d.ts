import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Valset, ValsetSDKType, ERC20ToDenom, ERC20ToDenomSDKType } from "./types";
import { MsgValsetConfirm, MsgValsetConfirmSDKType, MsgConfirmBatch, MsgConfirmBatchSDKType, MsgSetOrchestratorAddresses, MsgSetOrchestratorAddressesSDKType } from "./msgs";
import { OutgoingTxBatch, OutgoingTxBatchSDKType, OutgoingTransferTx, OutgoingTransferTxSDKType } from "./batch";
import { Attestation, AttestationSDKType } from "./attestation";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@cosmology/helpers";
export interface Params {
    peggyId: string;
    contractSourceHash: string;
    bridgeEthereumAddress: string;
    bridgeChainId: Long;
    signedValsetsWindow: Long;
    signedBatchesWindow: Long;
    signedClaimsWindow: Long;
    targetBatchTimeout: Long;
    averageBlockTime: Long;
    averageEthereumBlockTime: Long;
    slashFractionValset: Uint8Array;
    slashFractionBatch: Uint8Array;
    slashFractionClaim: Uint8Array;
    slashFractionConflictingClaim: Uint8Array;
    unbondSlashingValsetsWindow: Long;
    slashFractionBadEthSignature: Uint8Array;
    cosmosCoinDenom: string;
    cosmosCoinErc20Contract: string;
    claimSlashingEnabled: boolean;
    bridgeContractStartHeight: Long;
    valsetReward: Coin;
}
export interface ParamsSDKType {
    peggy_id: string;
    contract_source_hash: string;
    bridge_ethereum_address: string;
    bridge_chain_id: Long;
    signed_valsets_window: Long;
    signed_batches_window: Long;
    signed_claims_window: Long;
    target_batch_timeout: Long;
    average_block_time: Long;
    average_ethereum_block_time: Long;
    slash_fraction_valset: Uint8Array;
    slash_fraction_batch: Uint8Array;
    slash_fraction_claim: Uint8Array;
    slash_fraction_conflicting_claim: Uint8Array;
    unbond_slashing_valsets_window: Long;
    slash_fraction_bad_eth_signature: Uint8Array;
    cosmos_coin_denom: string;
    cosmos_coin_erc20_contract: string;
    claim_slashing_enabled: boolean;
    bridge_contract_start_height: Long;
    valset_reward: CoinSDKType;
}
/** GenesisState struct */
export interface GenesisState {
    params: Params;
    lastObservedNonce: Long;
    valsets: Valset[];
    valsetConfirms: MsgValsetConfirm[];
    batches: OutgoingTxBatch[];
    batchConfirms: MsgConfirmBatch[];
    attestations: Attestation[];
    orchestratorAddresses: MsgSetOrchestratorAddresses[];
    erc20ToDenoms: ERC20ToDenom[];
    unbatchedTransfers: OutgoingTransferTx[];
    lastObservedEthereumHeight: Long;
    lastOutgoingBatchId: Long;
    lastOutgoingPoolId: Long;
    lastObservedValset: Valset;
    ethereumBlacklist: string[];
}
/** GenesisState struct */
export interface GenesisStateSDKType {
    params: ParamsSDKType;
    last_observed_nonce: Long;
    valsets: ValsetSDKType[];
    valset_confirms: MsgValsetConfirmSDKType[];
    batches: OutgoingTxBatchSDKType[];
    batch_confirms: MsgConfirmBatchSDKType[];
    attestations: AttestationSDKType[];
    orchestrator_addresses: MsgSetOrchestratorAddressesSDKType[];
    erc20_to_denoms: ERC20ToDenomSDKType[];
    unbatched_transfers: OutgoingTransferTxSDKType[];
    last_observed_ethereum_height: Long;
    last_outgoing_batch_id: Long;
    last_outgoing_pool_id: Long;
    last_observed_valset: ValsetSDKType;
    ethereum_blacklist: string[];
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromPartial(object: DeepPartial<Params>): Params;
};
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
