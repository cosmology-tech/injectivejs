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
export interface MsgSetOrchestratorAddressesResponse {}
export interface MsgSetOrchestratorAddressesResponseSDKType {}
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
export interface MsgValsetConfirmResponse {}
export interface MsgValsetConfirmResponseSDKType {}
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
export interface MsgSendToEthResponse {}
export interface MsgSendToEthResponseSDKType {}
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
export interface MsgRequestBatchResponse {}
export interface MsgRequestBatchResponseSDKType {}
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
export interface MsgConfirmBatchResponse {}
export interface MsgConfirmBatchResponseSDKType {}
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
export interface MsgDepositClaimResponse {}
export interface MsgDepositClaimResponseSDKType {}
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
export interface MsgWithdrawClaimResponse {}
export interface MsgWithdrawClaimResponseSDKType {}
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
export interface MsgERC20DeployedClaimResponse {}
export interface MsgERC20DeployedClaimResponseSDKType {}
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
export interface MsgCancelSendToEthResponse {}
export interface MsgCancelSendToEthResponseSDKType {}
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
export interface MsgSubmitBadSignatureEvidenceResponse {}
export interface MsgSubmitBadSignatureEvidenceResponseSDKType {}
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
export interface MsgValsetUpdatedClaimResponse {}
export interface MsgValsetUpdatedClaimResponseSDKType {}

function createBaseMsgSetOrchestratorAddresses(): MsgSetOrchestratorAddresses {
  return {
    sender: "",
    orchestrator: "",
    ethAddress: ""
  };
}

export const MsgSetOrchestratorAddresses = {
  encode(message: MsgSetOrchestratorAddresses, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    if (message.orchestrator !== "") {
      writer.uint32(18).string(message.orchestrator);
    }

    if (message.ethAddress !== "") {
      writer.uint32(26).string(message.ethAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetOrchestratorAddresses {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetOrchestratorAddresses();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.orchestrator = reader.string();
          break;

        case 3:
          message.ethAddress = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgSetOrchestratorAddresses>): MsgSetOrchestratorAddresses {
    const message = createBaseMsgSetOrchestratorAddresses();
    message.sender = object.sender ?? "";
    message.orchestrator = object.orchestrator ?? "";
    message.ethAddress = object.ethAddress ?? "";
    return message;
  }

};

function createBaseMsgSetOrchestratorAddressesResponse(): MsgSetOrchestratorAddressesResponse {
  return {};
}

export const MsgSetOrchestratorAddressesResponse = {
  encode(_: MsgSetOrchestratorAddressesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetOrchestratorAddressesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetOrchestratorAddressesResponse();

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

  fromPartial(_: DeepPartial<MsgSetOrchestratorAddressesResponse>): MsgSetOrchestratorAddressesResponse {
    const message = createBaseMsgSetOrchestratorAddressesResponse();
    return message;
  }

};

function createBaseMsgValsetConfirm(): MsgValsetConfirm {
  return {
    nonce: Long.UZERO,
    orchestrator: "",
    ethAddress: "",
    signature: ""
  };
}

export const MsgValsetConfirm = {
  encode(message: MsgValsetConfirm, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.nonce.isZero()) {
      writer.uint32(8).uint64(message.nonce);
    }

    if (message.orchestrator !== "") {
      writer.uint32(18).string(message.orchestrator);
    }

    if (message.ethAddress !== "") {
      writer.uint32(26).string(message.ethAddress);
    }

    if (message.signature !== "") {
      writer.uint32(34).string(message.signature);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgValsetConfirm {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgValsetConfirm();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.nonce = (reader.uint64() as Long);
          break;

        case 2:
          message.orchestrator = reader.string();
          break;

        case 3:
          message.ethAddress = reader.string();
          break;

        case 4:
          message.signature = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgValsetConfirm>): MsgValsetConfirm {
    const message = createBaseMsgValsetConfirm();
    message.nonce = object.nonce !== undefined && object.nonce !== null ? Long.fromValue(object.nonce) : Long.UZERO;
    message.orchestrator = object.orchestrator ?? "";
    message.ethAddress = object.ethAddress ?? "";
    message.signature = object.signature ?? "";
    return message;
  }

};

function createBaseMsgValsetConfirmResponse(): MsgValsetConfirmResponse {
  return {};
}

export const MsgValsetConfirmResponse = {
  encode(_: MsgValsetConfirmResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgValsetConfirmResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgValsetConfirmResponse();

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

  fromPartial(_: DeepPartial<MsgValsetConfirmResponse>): MsgValsetConfirmResponse {
    const message = createBaseMsgValsetConfirmResponse();
    return message;
  }

};

function createBaseMsgSendToEth(): MsgSendToEth {
  return {
    sender: "",
    ethDest: "",
    amount: undefined,
    bridgeFee: undefined
  };
}

export const MsgSendToEth = {
  encode(message: MsgSendToEth, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    if (message.ethDest !== "") {
      writer.uint32(18).string(message.ethDest);
    }

    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }

    if (message.bridgeFee !== undefined) {
      Coin.encode(message.bridgeFee, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSendToEth {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSendToEth();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.ethDest = reader.string();
          break;

        case 3:
          message.amount = Coin.decode(reader, reader.uint32());
          break;

        case 4:
          message.bridgeFee = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgSendToEth>): MsgSendToEth {
    const message = createBaseMsgSendToEth();
    message.sender = object.sender ?? "";
    message.ethDest = object.ethDest ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.bridgeFee = object.bridgeFee !== undefined && object.bridgeFee !== null ? Coin.fromPartial(object.bridgeFee) : undefined;
    return message;
  }

};

function createBaseMsgSendToEthResponse(): MsgSendToEthResponse {
  return {};
}

export const MsgSendToEthResponse = {
  encode(_: MsgSendToEthResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSendToEthResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSendToEthResponse();

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

  fromPartial(_: DeepPartial<MsgSendToEthResponse>): MsgSendToEthResponse {
    const message = createBaseMsgSendToEthResponse();
    return message;
  }

};

function createBaseMsgRequestBatch(): MsgRequestBatch {
  return {
    orchestrator: "",
    denom: ""
  };
}

export const MsgRequestBatch = {
  encode(message: MsgRequestBatch, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.orchestrator !== "") {
      writer.uint32(10).string(message.orchestrator);
    }

    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRequestBatch {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRequestBatch();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.orchestrator = reader.string();
          break;

        case 2:
          message.denom = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgRequestBatch>): MsgRequestBatch {
    const message = createBaseMsgRequestBatch();
    message.orchestrator = object.orchestrator ?? "";
    message.denom = object.denom ?? "";
    return message;
  }

};

function createBaseMsgRequestBatchResponse(): MsgRequestBatchResponse {
  return {};
}

export const MsgRequestBatchResponse = {
  encode(_: MsgRequestBatchResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRequestBatchResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRequestBatchResponse();

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

  fromPartial(_: DeepPartial<MsgRequestBatchResponse>): MsgRequestBatchResponse {
    const message = createBaseMsgRequestBatchResponse();
    return message;
  }

};

function createBaseMsgConfirmBatch(): MsgConfirmBatch {
  return {
    nonce: Long.UZERO,
    tokenContract: "",
    ethSigner: "",
    orchestrator: "",
    signature: ""
  };
}

export const MsgConfirmBatch = {
  encode(message: MsgConfirmBatch, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.nonce.isZero()) {
      writer.uint32(8).uint64(message.nonce);
    }

    if (message.tokenContract !== "") {
      writer.uint32(18).string(message.tokenContract);
    }

    if (message.ethSigner !== "") {
      writer.uint32(26).string(message.ethSigner);
    }

    if (message.orchestrator !== "") {
      writer.uint32(34).string(message.orchestrator);
    }

    if (message.signature !== "") {
      writer.uint32(42).string(message.signature);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgConfirmBatch {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConfirmBatch();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.nonce = (reader.uint64() as Long);
          break;

        case 2:
          message.tokenContract = reader.string();
          break;

        case 3:
          message.ethSigner = reader.string();
          break;

        case 4:
          message.orchestrator = reader.string();
          break;

        case 5:
          message.signature = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgConfirmBatch>): MsgConfirmBatch {
    const message = createBaseMsgConfirmBatch();
    message.nonce = object.nonce !== undefined && object.nonce !== null ? Long.fromValue(object.nonce) : Long.UZERO;
    message.tokenContract = object.tokenContract ?? "";
    message.ethSigner = object.ethSigner ?? "";
    message.orchestrator = object.orchestrator ?? "";
    message.signature = object.signature ?? "";
    return message;
  }

};

function createBaseMsgConfirmBatchResponse(): MsgConfirmBatchResponse {
  return {};
}

export const MsgConfirmBatchResponse = {
  encode(_: MsgConfirmBatchResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgConfirmBatchResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConfirmBatchResponse();

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

  fromPartial(_: DeepPartial<MsgConfirmBatchResponse>): MsgConfirmBatchResponse {
    const message = createBaseMsgConfirmBatchResponse();
    return message;
  }

};

function createBaseMsgDepositClaim(): MsgDepositClaim {
  return {
    eventNonce: Long.UZERO,
    blockHeight: Long.UZERO,
    tokenContract: "",
    amount: "",
    ethereumSender: "",
    cosmosReceiver: "",
    orchestrator: "",
    data: ""
  };
}

export const MsgDepositClaim = {
  encode(message: MsgDepositClaim, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.eventNonce.isZero()) {
      writer.uint32(8).uint64(message.eventNonce);
    }

    if (!message.blockHeight.isZero()) {
      writer.uint32(16).uint64(message.blockHeight);
    }

    if (message.tokenContract !== "") {
      writer.uint32(26).string(message.tokenContract);
    }

    if (message.amount !== "") {
      writer.uint32(34).string(message.amount);
    }

    if (message.ethereumSender !== "") {
      writer.uint32(42).string(message.ethereumSender);
    }

    if (message.cosmosReceiver !== "") {
      writer.uint32(50).string(message.cosmosReceiver);
    }

    if (message.orchestrator !== "") {
      writer.uint32(58).string(message.orchestrator);
    }

    if (message.data !== "") {
      writer.uint32(66).string(message.data);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDepositClaim {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDepositClaim();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.eventNonce = (reader.uint64() as Long);
          break;

        case 2:
          message.blockHeight = (reader.uint64() as Long);
          break;

        case 3:
          message.tokenContract = reader.string();
          break;

        case 4:
          message.amount = reader.string();
          break;

        case 5:
          message.ethereumSender = reader.string();
          break;

        case 6:
          message.cosmosReceiver = reader.string();
          break;

        case 7:
          message.orchestrator = reader.string();
          break;

        case 8:
          message.data = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgDepositClaim>): MsgDepositClaim {
    const message = createBaseMsgDepositClaim();
    message.eventNonce = object.eventNonce !== undefined && object.eventNonce !== null ? Long.fromValue(object.eventNonce) : Long.UZERO;
    message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? Long.fromValue(object.blockHeight) : Long.UZERO;
    message.tokenContract = object.tokenContract ?? "";
    message.amount = object.amount ?? "";
    message.ethereumSender = object.ethereumSender ?? "";
    message.cosmosReceiver = object.cosmosReceiver ?? "";
    message.orchestrator = object.orchestrator ?? "";
    message.data = object.data ?? "";
    return message;
  }

};

function createBaseMsgDepositClaimResponse(): MsgDepositClaimResponse {
  return {};
}

export const MsgDepositClaimResponse = {
  encode(_: MsgDepositClaimResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDepositClaimResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDepositClaimResponse();

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

  fromPartial(_: DeepPartial<MsgDepositClaimResponse>): MsgDepositClaimResponse {
    const message = createBaseMsgDepositClaimResponse();
    return message;
  }

};

function createBaseMsgWithdrawClaim(): MsgWithdrawClaim {
  return {
    eventNonce: Long.UZERO,
    blockHeight: Long.UZERO,
    batchNonce: Long.UZERO,
    tokenContract: "",
    orchestrator: ""
  };
}

export const MsgWithdrawClaim = {
  encode(message: MsgWithdrawClaim, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.eventNonce.isZero()) {
      writer.uint32(8).uint64(message.eventNonce);
    }

    if (!message.blockHeight.isZero()) {
      writer.uint32(16).uint64(message.blockHeight);
    }

    if (!message.batchNonce.isZero()) {
      writer.uint32(24).uint64(message.batchNonce);
    }

    if (message.tokenContract !== "") {
      writer.uint32(34).string(message.tokenContract);
    }

    if (message.orchestrator !== "") {
      writer.uint32(42).string(message.orchestrator);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawClaim {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawClaim();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.eventNonce = (reader.uint64() as Long);
          break;

        case 2:
          message.blockHeight = (reader.uint64() as Long);
          break;

        case 3:
          message.batchNonce = (reader.uint64() as Long);
          break;

        case 4:
          message.tokenContract = reader.string();
          break;

        case 5:
          message.orchestrator = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgWithdrawClaim>): MsgWithdrawClaim {
    const message = createBaseMsgWithdrawClaim();
    message.eventNonce = object.eventNonce !== undefined && object.eventNonce !== null ? Long.fromValue(object.eventNonce) : Long.UZERO;
    message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? Long.fromValue(object.blockHeight) : Long.UZERO;
    message.batchNonce = object.batchNonce !== undefined && object.batchNonce !== null ? Long.fromValue(object.batchNonce) : Long.UZERO;
    message.tokenContract = object.tokenContract ?? "";
    message.orchestrator = object.orchestrator ?? "";
    return message;
  }

};

function createBaseMsgWithdrawClaimResponse(): MsgWithdrawClaimResponse {
  return {};
}

export const MsgWithdrawClaimResponse = {
  encode(_: MsgWithdrawClaimResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawClaimResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawClaimResponse();

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

  fromPartial(_: DeepPartial<MsgWithdrawClaimResponse>): MsgWithdrawClaimResponse {
    const message = createBaseMsgWithdrawClaimResponse();
    return message;
  }

};

function createBaseMsgERC20DeployedClaim(): MsgERC20DeployedClaim {
  return {
    eventNonce: Long.UZERO,
    blockHeight: Long.UZERO,
    cosmosDenom: "",
    tokenContract: "",
    name: "",
    symbol: "",
    decimals: Long.UZERO,
    orchestrator: ""
  };
}

export const MsgERC20DeployedClaim = {
  encode(message: MsgERC20DeployedClaim, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.eventNonce.isZero()) {
      writer.uint32(8).uint64(message.eventNonce);
    }

    if (!message.blockHeight.isZero()) {
      writer.uint32(16).uint64(message.blockHeight);
    }

    if (message.cosmosDenom !== "") {
      writer.uint32(26).string(message.cosmosDenom);
    }

    if (message.tokenContract !== "") {
      writer.uint32(34).string(message.tokenContract);
    }

    if (message.name !== "") {
      writer.uint32(42).string(message.name);
    }

    if (message.symbol !== "") {
      writer.uint32(50).string(message.symbol);
    }

    if (!message.decimals.isZero()) {
      writer.uint32(56).uint64(message.decimals);
    }

    if (message.orchestrator !== "") {
      writer.uint32(66).string(message.orchestrator);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgERC20DeployedClaim {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgERC20DeployedClaim();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.eventNonce = (reader.uint64() as Long);
          break;

        case 2:
          message.blockHeight = (reader.uint64() as Long);
          break;

        case 3:
          message.cosmosDenom = reader.string();
          break;

        case 4:
          message.tokenContract = reader.string();
          break;

        case 5:
          message.name = reader.string();
          break;

        case 6:
          message.symbol = reader.string();
          break;

        case 7:
          message.decimals = (reader.uint64() as Long);
          break;

        case 8:
          message.orchestrator = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgERC20DeployedClaim>): MsgERC20DeployedClaim {
    const message = createBaseMsgERC20DeployedClaim();
    message.eventNonce = object.eventNonce !== undefined && object.eventNonce !== null ? Long.fromValue(object.eventNonce) : Long.UZERO;
    message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? Long.fromValue(object.blockHeight) : Long.UZERO;
    message.cosmosDenom = object.cosmosDenom ?? "";
    message.tokenContract = object.tokenContract ?? "";
    message.name = object.name ?? "";
    message.symbol = object.symbol ?? "";
    message.decimals = object.decimals !== undefined && object.decimals !== null ? Long.fromValue(object.decimals) : Long.UZERO;
    message.orchestrator = object.orchestrator ?? "";
    return message;
  }

};

function createBaseMsgERC20DeployedClaimResponse(): MsgERC20DeployedClaimResponse {
  return {};
}

export const MsgERC20DeployedClaimResponse = {
  encode(_: MsgERC20DeployedClaimResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgERC20DeployedClaimResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgERC20DeployedClaimResponse();

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

  fromPartial(_: DeepPartial<MsgERC20DeployedClaimResponse>): MsgERC20DeployedClaimResponse {
    const message = createBaseMsgERC20DeployedClaimResponse();
    return message;
  }

};

function createBaseMsgCancelSendToEth(): MsgCancelSendToEth {
  return {
    transactionId: Long.UZERO,
    sender: ""
  };
}

export const MsgCancelSendToEth = {
  encode(message: MsgCancelSendToEth, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.transactionId.isZero()) {
      writer.uint32(8).uint64(message.transactionId);
    }

    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelSendToEth {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelSendToEth();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.transactionId = (reader.uint64() as Long);
          break;

        case 2:
          message.sender = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgCancelSendToEth>): MsgCancelSendToEth {
    const message = createBaseMsgCancelSendToEth();
    message.transactionId = object.transactionId !== undefined && object.transactionId !== null ? Long.fromValue(object.transactionId) : Long.UZERO;
    message.sender = object.sender ?? "";
    return message;
  }

};

function createBaseMsgCancelSendToEthResponse(): MsgCancelSendToEthResponse {
  return {};
}

export const MsgCancelSendToEthResponse = {
  encode(_: MsgCancelSendToEthResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelSendToEthResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelSendToEthResponse();

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

  fromPartial(_: DeepPartial<MsgCancelSendToEthResponse>): MsgCancelSendToEthResponse {
    const message = createBaseMsgCancelSendToEthResponse();
    return message;
  }

};

function createBaseMsgSubmitBadSignatureEvidence(): MsgSubmitBadSignatureEvidence {
  return {
    subject: undefined,
    signature: "",
    sender: ""
  };
}

export const MsgSubmitBadSignatureEvidence = {
  encode(message: MsgSubmitBadSignatureEvidence, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.subject !== undefined) {
      Any.encode(message.subject, writer.uint32(10).fork()).ldelim();
    }

    if (message.signature !== "") {
      writer.uint32(18).string(message.signature);
    }

    if (message.sender !== "") {
      writer.uint32(26).string(message.sender);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitBadSignatureEvidence {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitBadSignatureEvidence();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.subject = Any.decode(reader, reader.uint32());
          break;

        case 2:
          message.signature = reader.string();
          break;

        case 3:
          message.sender = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgSubmitBadSignatureEvidence>): MsgSubmitBadSignatureEvidence {
    const message = createBaseMsgSubmitBadSignatureEvidence();
    message.subject = object.subject !== undefined && object.subject !== null ? Any.fromPartial(object.subject) : undefined;
    message.signature = object.signature ?? "";
    message.sender = object.sender ?? "";
    return message;
  }

};

function createBaseMsgSubmitBadSignatureEvidenceResponse(): MsgSubmitBadSignatureEvidenceResponse {
  return {};
}

export const MsgSubmitBadSignatureEvidenceResponse = {
  encode(_: MsgSubmitBadSignatureEvidenceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitBadSignatureEvidenceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitBadSignatureEvidenceResponse();

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

  fromPartial(_: DeepPartial<MsgSubmitBadSignatureEvidenceResponse>): MsgSubmitBadSignatureEvidenceResponse {
    const message = createBaseMsgSubmitBadSignatureEvidenceResponse();
    return message;
  }

};

function createBaseMsgValsetUpdatedClaim(): MsgValsetUpdatedClaim {
  return {
    eventNonce: Long.UZERO,
    valsetNonce: Long.UZERO,
    blockHeight: Long.UZERO,
    members: [],
    rewardAmount: "",
    rewardToken: "",
    orchestrator: ""
  };
}

export const MsgValsetUpdatedClaim = {
  encode(message: MsgValsetUpdatedClaim, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.eventNonce.isZero()) {
      writer.uint32(8).uint64(message.eventNonce);
    }

    if (!message.valsetNonce.isZero()) {
      writer.uint32(16).uint64(message.valsetNonce);
    }

    if (!message.blockHeight.isZero()) {
      writer.uint32(24).uint64(message.blockHeight);
    }

    for (const v of message.members) {
      BridgeValidator.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    if (message.rewardAmount !== "") {
      writer.uint32(42).string(message.rewardAmount);
    }

    if (message.rewardToken !== "") {
      writer.uint32(50).string(message.rewardToken);
    }

    if (message.orchestrator !== "") {
      writer.uint32(58).string(message.orchestrator);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgValsetUpdatedClaim {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgValsetUpdatedClaim();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.eventNonce = (reader.uint64() as Long);
          break;

        case 2:
          message.valsetNonce = (reader.uint64() as Long);
          break;

        case 3:
          message.blockHeight = (reader.uint64() as Long);
          break;

        case 4:
          message.members.push(BridgeValidator.decode(reader, reader.uint32()));
          break;

        case 5:
          message.rewardAmount = reader.string();
          break;

        case 6:
          message.rewardToken = reader.string();
          break;

        case 7:
          message.orchestrator = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgValsetUpdatedClaim>): MsgValsetUpdatedClaim {
    const message = createBaseMsgValsetUpdatedClaim();
    message.eventNonce = object.eventNonce !== undefined && object.eventNonce !== null ? Long.fromValue(object.eventNonce) : Long.UZERO;
    message.valsetNonce = object.valsetNonce !== undefined && object.valsetNonce !== null ? Long.fromValue(object.valsetNonce) : Long.UZERO;
    message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? Long.fromValue(object.blockHeight) : Long.UZERO;
    message.members = object.members?.map(e => BridgeValidator.fromPartial(e)) || [];
    message.rewardAmount = object.rewardAmount ?? "";
    message.rewardToken = object.rewardToken ?? "";
    message.orchestrator = object.orchestrator ?? "";
    return message;
  }

};

function createBaseMsgValsetUpdatedClaimResponse(): MsgValsetUpdatedClaimResponse {
  return {};
}

export const MsgValsetUpdatedClaimResponse = {
  encode(_: MsgValsetUpdatedClaimResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgValsetUpdatedClaimResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgValsetUpdatedClaimResponse();

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

  fromPartial(_: DeepPartial<MsgValsetUpdatedClaimResponse>): MsgValsetUpdatedClaimResponse {
    const message = createBaseMsgValsetUpdatedClaimResponse();
    return message;
  }

};