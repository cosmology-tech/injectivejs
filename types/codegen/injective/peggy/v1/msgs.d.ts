import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BridgeValidator, BridgeValidatorSDKType } from "./types";
import { Any, AnySDKType } from "../../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
/**
 * MsgSetOrchestratorAddresses
 * this message allows validators to delegate their voting responsibilities
 * to a given key. This key is then used as an optional authentication method
 * for sigining oracle claims
 * VALIDATOR
 * The validator field is a cosmosvaloper1... string (i.e. sdk.ValAddress)
 * that references a validator in the active set
 * ORCHESTRATOR
 * The orchestrator field is a cosmos1... string  (i.e. sdk.AccAddress) that
 * references the key that is being delegated to
 * ETH_ADDRESS
 * This is a hex encoded 0x Ethereum public key that will be used by this validator
 * on Ethereum
 */
export interface MsgSetOrchestratorAddresses {
    sender: string;
    orchestrator: string;
    ethAddress: string;
}
/**
 * MsgSetOrchestratorAddresses
 * this message allows validators to delegate their voting responsibilities
 * to a given key. This key is then used as an optional authentication method
 * for sigining oracle claims
 * VALIDATOR
 * The validator field is a cosmosvaloper1... string (i.e. sdk.ValAddress)
 * that references a validator in the active set
 * ORCHESTRATOR
 * The orchestrator field is a cosmos1... string  (i.e. sdk.AccAddress) that
 * references the key that is being delegated to
 * ETH_ADDRESS
 * This is a hex encoded 0x Ethereum public key that will be used by this validator
 * on Ethereum
 */
export interface MsgSetOrchestratorAddressesSDKType {
    sender: string;
    orchestrator: string;
    eth_address: string;
}
export interface MsgSetOrchestratorAddressesResponse {
}
export interface MsgSetOrchestratorAddressesResponseSDKType {
}
/**
 * MsgValsetConfirm
 * this is the message sent by the validators when they wish to submit their
 * signatures over the validator set at a given block height. A validator must
 * first call MsgSetEthAddress to set their Ethereum address to be used for
 * signing. Then someone (anyone) must make a ValsetRequest the request is
 * essentially a messaging mechanism to determine which block all validators
 * should submit signatures over. Finally validators sign the validator set,
 * powers, and Ethereum addresses of the entire validator set at the height of a
 * ValsetRequest and submit that signature with this message.
 *
 * If a sufficient number of validators (66% of voting power) (A) have set
 * Ethereum addresses and (B) submit ValsetConfirm messages with their
 * signatures it is then possible for anyone to view these signatures in the
 * chain store and submit them to Ethereum to update the validator set
 * -------------
 */
export interface MsgValsetConfirm {
    nonce: Long;
    orchestrator: string;
    ethAddress: string;
    signature: string;
}
/**
 * MsgValsetConfirm
 * this is the message sent by the validators when they wish to submit their
 * signatures over the validator set at a given block height. A validator must
 * first call MsgSetEthAddress to set their Ethereum address to be used for
 * signing. Then someone (anyone) must make a ValsetRequest the request is
 * essentially a messaging mechanism to determine which block all validators
 * should submit signatures over. Finally validators sign the validator set,
 * powers, and Ethereum addresses of the entire validator set at the height of a
 * ValsetRequest and submit that signature with this message.
 *
 * If a sufficient number of validators (66% of voting power) (A) have set
 * Ethereum addresses and (B) submit ValsetConfirm messages with their
 * signatures it is then possible for anyone to view these signatures in the
 * chain store and submit them to Ethereum to update the validator set
 * -------------
 */
export interface MsgValsetConfirmSDKType {
    nonce: Long;
    orchestrator: string;
    eth_address: string;
    signature: string;
}
export interface MsgValsetConfirmResponse {
}
export interface MsgValsetConfirmResponseSDKType {
}
/**
 * MsgSendToEth
 * This is the message that a user calls when they want to bridge an asset
 * it will later be removed when it is included in a batch and successfully
 * submitted tokens are removed from the users balance immediately
 * -------------
 * AMOUNT:
 * the coin to send across the bridge, note the restriction that this is a
 * single coin not a set of coins that is normal in other Cosmos messages
 * FEE:
 * the fee paid for the bridge, distinct from the fee paid to the chain to
 * actually send this message in the first place. So a successful send has
 * two layers of fees for the user
 */
export interface MsgSendToEth {
    sender: string;
    ethDest: string;
    amount: Coin;
    bridgeFee: Coin;
}
/**
 * MsgSendToEth
 * This is the message that a user calls when they want to bridge an asset
 * it will later be removed when it is included in a batch and successfully
 * submitted tokens are removed from the users balance immediately
 * -------------
 * AMOUNT:
 * the coin to send across the bridge, note the restriction that this is a
 * single coin not a set of coins that is normal in other Cosmos messages
 * FEE:
 * the fee paid for the bridge, distinct from the fee paid to the chain to
 * actually send this message in the first place. So a successful send has
 * two layers of fees for the user
 */
export interface MsgSendToEthSDKType {
    sender: string;
    eth_dest: string;
    amount: CoinSDKType;
    bridge_fee: CoinSDKType;
}
export interface MsgSendToEthResponse {
}
export interface MsgSendToEthResponseSDKType {
}
/**
 * MsgRequestBatch
 * this is a message anyone can send that requests a batch of transactions to
 * send across the bridge be created for whatever block height this message is
 * included in. This acts as a coordination point, the handler for this message
 * looks at the AddToOutgoingPool tx's in the store and generates a batch, also
 * available in the store tied to this message. The validators then grab this
 * batch, sign it, submit the signatures with a MsgConfirmBatch before a relayer
 * can finally submit the batch
 * -------------
 */
export interface MsgRequestBatch {
    orchestrator: string;
    denom: string;
}
/**
 * MsgRequestBatch
 * this is a message anyone can send that requests a batch of transactions to
 * send across the bridge be created for whatever block height this message is
 * included in. This acts as a coordination point, the handler for this message
 * looks at the AddToOutgoingPool tx's in the store and generates a batch, also
 * available in the store tied to this message. The validators then grab this
 * batch, sign it, submit the signatures with a MsgConfirmBatch before a relayer
 * can finally submit the batch
 * -------------
 */
export interface MsgRequestBatchSDKType {
    orchestrator: string;
    denom: string;
}
export interface MsgRequestBatchResponse {
}
export interface MsgRequestBatchResponseSDKType {
}
/**
 * MsgConfirmBatch
 * When validators observe a MsgRequestBatch they form a batch by ordering
 * transactions currently in the txqueue in order of highest to lowest fee,
 * cutting off when the batch either reaches a hardcoded maximum size (to be
 * decided, probably around 100) or when transactions stop being profitable
 * (TODO determine this without nondeterminism) This message includes the batch
 * as well as an Ethereum signature over this batch by the validator
 * -------------
 */
export interface MsgConfirmBatch {
    nonce: Long;
    tokenContract: string;
    ethSigner: string;
    orchestrator: string;
    signature: string;
}
/**
 * MsgConfirmBatch
 * When validators observe a MsgRequestBatch they form a batch by ordering
 * transactions currently in the txqueue in order of highest to lowest fee,
 * cutting off when the batch either reaches a hardcoded maximum size (to be
 * decided, probably around 100) or when transactions stop being profitable
 * (TODO determine this without nondeterminism) This message includes the batch
 * as well as an Ethereum signature over this batch by the validator
 * -------------
 */
export interface MsgConfirmBatchSDKType {
    nonce: Long;
    token_contract: string;
    eth_signer: string;
    orchestrator: string;
    signature: string;
}
export interface MsgConfirmBatchResponse {
}
export interface MsgConfirmBatchResponseSDKType {
}
/**
 * EthereumBridgeDepositClaim
 * When more than 66% of the active validator set has
 * claimed to have seen the deposit enter the ethereum blockchain coins are
 * issued to the Cosmos address in question
 * -------------
 */
export interface MsgDepositClaim {
    eventNonce: Long;
    blockHeight: Long;
    tokenContract: string;
    amount: string;
    ethereumSender: string;
    cosmosReceiver: string;
    orchestrator: string;
    data: string;
}
/**
 * EthereumBridgeDepositClaim
 * When more than 66% of the active validator set has
 * claimed to have seen the deposit enter the ethereum blockchain coins are
 * issued to the Cosmos address in question
 * -------------
 */
export interface MsgDepositClaimSDKType {
    event_nonce: Long;
    block_height: Long;
    token_contract: string;
    amount: string;
    ethereum_sender: string;
    cosmos_receiver: string;
    orchestrator: string;
    data: string;
}
export interface MsgDepositClaimResponse {
}
export interface MsgDepositClaimResponseSDKType {
}
/**
 * WithdrawClaim claims that a batch of withdrawal
 * operations on the bridge contract was executed.
 */
export interface MsgWithdrawClaim {
    eventNonce: Long;
    blockHeight: Long;
    batchNonce: Long;
    tokenContract: string;
    orchestrator: string;
}
/**
 * WithdrawClaim claims that a batch of withdrawal
 * operations on the bridge contract was executed.
 */
export interface MsgWithdrawClaimSDKType {
    event_nonce: Long;
    block_height: Long;
    batch_nonce: Long;
    token_contract: string;
    orchestrator: string;
}
export interface MsgWithdrawClaimResponse {
}
export interface MsgWithdrawClaimResponseSDKType {
}
/**
 * ERC20DeployedClaim allows the Cosmos module
 * to learn about an ERC20 that someone deployed
 * to represent a Cosmos asset
 */
export interface MsgERC20DeployedClaim {
    eventNonce: Long;
    blockHeight: Long;
    cosmosDenom: string;
    tokenContract: string;
    name: string;
    symbol: string;
    decimals: Long;
    orchestrator: string;
}
/**
 * ERC20DeployedClaim allows the Cosmos module
 * to learn about an ERC20 that someone deployed
 * to represent a Cosmos asset
 */
export interface MsgERC20DeployedClaimSDKType {
    event_nonce: Long;
    block_height: Long;
    cosmos_denom: string;
    token_contract: string;
    name: string;
    symbol: string;
    decimals: Long;
    orchestrator: string;
}
export interface MsgERC20DeployedClaimResponse {
}
export interface MsgERC20DeployedClaimResponseSDKType {
}
/**
 * This call allows the sender (and only the sender)
 * to cancel a given MsgSendToEth and recieve a refund
 * of the tokens
 */
export interface MsgCancelSendToEth {
    transactionId: Long;
    sender: string;
}
/**
 * This call allows the sender (and only the sender)
 * to cancel a given MsgSendToEth and recieve a refund
 * of the tokens
 */
export interface MsgCancelSendToEthSDKType {
    transaction_id: Long;
    sender: string;
}
export interface MsgCancelSendToEthResponse {
}
export interface MsgCancelSendToEthResponseSDKType {
}
/**
 * This call allows anyone to submit evidence that a
 * validator has signed a valset, batch, or logic call that never
 * existed. Subject contains the batch, valset, or logic call.
 */
export interface MsgSubmitBadSignatureEvidence {
    subject: Any;
    signature: string;
    sender: string;
}
/**
 * This call allows anyone to submit evidence that a
 * validator has signed a valset, batch, or logic call that never
 * existed. Subject contains the batch, valset, or logic call.
 */
export interface MsgSubmitBadSignatureEvidenceSDKType {
    subject: AnySDKType;
    signature: string;
    sender: string;
}
export interface MsgSubmitBadSignatureEvidenceResponse {
}
export interface MsgSubmitBadSignatureEvidenceResponseSDKType {
}
/**
 * This informs the Cosmos module that a validator
 * set has been updated.
 */
export interface MsgValsetUpdatedClaim {
    eventNonce: Long;
    valsetNonce: Long;
    blockHeight: Long;
    members: BridgeValidator[];
    rewardAmount: string;
    rewardToken: string;
    orchestrator: string;
}
/**
 * This informs the Cosmos module that a validator
 * set has been updated.
 */
export interface MsgValsetUpdatedClaimSDKType {
    event_nonce: Long;
    valset_nonce: Long;
    block_height: Long;
    members: BridgeValidatorSDKType[];
    reward_amount: string;
    reward_token: string;
    orchestrator: string;
}
export interface MsgValsetUpdatedClaimResponse {
}
export interface MsgValsetUpdatedClaimResponseSDKType {
}
export declare const MsgSetOrchestratorAddresses: {
    encode(message: MsgSetOrchestratorAddresses, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetOrchestratorAddresses;
    fromPartial(object: DeepPartial<MsgSetOrchestratorAddresses>): MsgSetOrchestratorAddresses;
};
export declare const MsgSetOrchestratorAddressesResponse: {
    encode(_: MsgSetOrchestratorAddressesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetOrchestratorAddressesResponse;
    fromPartial(_: DeepPartial<MsgSetOrchestratorAddressesResponse>): MsgSetOrchestratorAddressesResponse;
};
export declare const MsgValsetConfirm: {
    encode(message: MsgValsetConfirm, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgValsetConfirm;
    fromPartial(object: DeepPartial<MsgValsetConfirm>): MsgValsetConfirm;
};
export declare const MsgValsetConfirmResponse: {
    encode(_: MsgValsetConfirmResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgValsetConfirmResponse;
    fromPartial(_: DeepPartial<MsgValsetConfirmResponse>): MsgValsetConfirmResponse;
};
export declare const MsgSendToEth: {
    encode(message: MsgSendToEth, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSendToEth;
    fromPartial(object: DeepPartial<MsgSendToEth>): MsgSendToEth;
};
export declare const MsgSendToEthResponse: {
    encode(_: MsgSendToEthResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSendToEthResponse;
    fromPartial(_: DeepPartial<MsgSendToEthResponse>): MsgSendToEthResponse;
};
export declare const MsgRequestBatch: {
    encode(message: MsgRequestBatch, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRequestBatch;
    fromPartial(object: DeepPartial<MsgRequestBatch>): MsgRequestBatch;
};
export declare const MsgRequestBatchResponse: {
    encode(_: MsgRequestBatchResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRequestBatchResponse;
    fromPartial(_: DeepPartial<MsgRequestBatchResponse>): MsgRequestBatchResponse;
};
export declare const MsgConfirmBatch: {
    encode(message: MsgConfirmBatch, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgConfirmBatch;
    fromPartial(object: DeepPartial<MsgConfirmBatch>): MsgConfirmBatch;
};
export declare const MsgConfirmBatchResponse: {
    encode(_: MsgConfirmBatchResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgConfirmBatchResponse;
    fromPartial(_: DeepPartial<MsgConfirmBatchResponse>): MsgConfirmBatchResponse;
};
export declare const MsgDepositClaim: {
    encode(message: MsgDepositClaim, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDepositClaim;
    fromPartial(object: DeepPartial<MsgDepositClaim>): MsgDepositClaim;
};
export declare const MsgDepositClaimResponse: {
    encode(_: MsgDepositClaimResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDepositClaimResponse;
    fromPartial(_: DeepPartial<MsgDepositClaimResponse>): MsgDepositClaimResponse;
};
export declare const MsgWithdrawClaim: {
    encode(message: MsgWithdrawClaim, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawClaim;
    fromPartial(object: DeepPartial<MsgWithdrawClaim>): MsgWithdrawClaim;
};
export declare const MsgWithdrawClaimResponse: {
    encode(_: MsgWithdrawClaimResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawClaimResponse;
    fromPartial(_: DeepPartial<MsgWithdrawClaimResponse>): MsgWithdrawClaimResponse;
};
export declare const MsgERC20DeployedClaim: {
    encode(message: MsgERC20DeployedClaim, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgERC20DeployedClaim;
    fromPartial(object: DeepPartial<MsgERC20DeployedClaim>): MsgERC20DeployedClaim;
};
export declare const MsgERC20DeployedClaimResponse: {
    encode(_: MsgERC20DeployedClaimResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgERC20DeployedClaimResponse;
    fromPartial(_: DeepPartial<MsgERC20DeployedClaimResponse>): MsgERC20DeployedClaimResponse;
};
export declare const MsgCancelSendToEth: {
    encode(message: MsgCancelSendToEth, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelSendToEth;
    fromPartial(object: DeepPartial<MsgCancelSendToEth>): MsgCancelSendToEth;
};
export declare const MsgCancelSendToEthResponse: {
    encode(_: MsgCancelSendToEthResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelSendToEthResponse;
    fromPartial(_: DeepPartial<MsgCancelSendToEthResponse>): MsgCancelSendToEthResponse;
};
export declare const MsgSubmitBadSignatureEvidence: {
    encode(message: MsgSubmitBadSignatureEvidence, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitBadSignatureEvidence;
    fromPartial(object: DeepPartial<MsgSubmitBadSignatureEvidence>): MsgSubmitBadSignatureEvidence;
};
export declare const MsgSubmitBadSignatureEvidenceResponse: {
    encode(_: MsgSubmitBadSignatureEvidenceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitBadSignatureEvidenceResponse;
    fromPartial(_: DeepPartial<MsgSubmitBadSignatureEvidenceResponse>): MsgSubmitBadSignatureEvidenceResponse;
};
export declare const MsgValsetUpdatedClaim: {
    encode(message: MsgValsetUpdatedClaim, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgValsetUpdatedClaim;
    fromPartial(object: DeepPartial<MsgValsetUpdatedClaim>): MsgValsetUpdatedClaim;
};
export declare const MsgValsetUpdatedClaimResponse: {
    encode(_: MsgValsetUpdatedClaimResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgValsetUpdatedClaimResponse;
    fromPartial(_: DeepPartial<MsgValsetUpdatedClaimResponse>): MsgValsetUpdatedClaimResponse;
};
