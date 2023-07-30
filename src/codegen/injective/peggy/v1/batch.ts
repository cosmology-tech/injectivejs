import { ERC20Token, ERC20TokenSDKType } from "./attestation";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@cosmology/helpers";
/** OutgoingTxBatch represents a batch of transactions going from Peggy to ETH */

export interface OutgoingTxBatch {
  batchNonce: Long;
  batchTimeout: Long;
  transactions: OutgoingTransferTx[];
  tokenContract: string;
  block: Long;
}
/** OutgoingTxBatch represents a batch of transactions going from Peggy to ETH */

export interface OutgoingTxBatchSDKType {
  batch_nonce: Long;
  batch_timeout: Long;
  transactions: OutgoingTransferTxSDKType[];
  token_contract: string;
  block: Long;
}
/** OutgoingTransferTx represents an individual send from Peggy to ETH */

export interface OutgoingTransferTx {
  id: Long;
  sender: string;
  destAddress: string;
  erc20Token: ERC20Token;
  erc20Fee: ERC20Token;
}
/** OutgoingTransferTx represents an individual send from Peggy to ETH */

export interface OutgoingTransferTxSDKType {
  id: Long;
  sender: string;
  dest_address: string;
  erc20_token: ERC20TokenSDKType;
  erc20_fee: ERC20TokenSDKType;
}

function createBaseOutgoingTxBatch(): OutgoingTxBatch {
  return {
    batchNonce: Long.UZERO,
    batchTimeout: Long.UZERO,
    transactions: [],
    tokenContract: "",
    block: Long.UZERO
  };
}

export const OutgoingTxBatch = {
  encode(message: OutgoingTxBatch, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.batchNonce.isZero()) {
      writer.uint32(8).uint64(message.batchNonce);
    }

    if (!message.batchTimeout.isZero()) {
      writer.uint32(16).uint64(message.batchTimeout);
    }

    for (const v of message.transactions) {
      OutgoingTransferTx.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    if (message.tokenContract !== "") {
      writer.uint32(34).string(message.tokenContract);
    }

    if (!message.block.isZero()) {
      writer.uint32(40).uint64(message.block);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OutgoingTxBatch {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOutgoingTxBatch();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.batchNonce = (reader.uint64() as Long);
          break;

        case 2:
          message.batchTimeout = (reader.uint64() as Long);
          break;

        case 3:
          message.transactions.push(OutgoingTransferTx.decode(reader, reader.uint32()));
          break;

        case 4:
          message.tokenContract = reader.string();
          break;

        case 5:
          message.block = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<OutgoingTxBatch>): OutgoingTxBatch {
    const message = createBaseOutgoingTxBatch();
    message.batchNonce = object.batchNonce !== undefined && object.batchNonce !== null ? Long.fromValue(object.batchNonce) : Long.UZERO;
    message.batchTimeout = object.batchTimeout !== undefined && object.batchTimeout !== null ? Long.fromValue(object.batchTimeout) : Long.UZERO;
    message.transactions = object.transactions?.map(e => OutgoingTransferTx.fromPartial(e)) || [];
    message.tokenContract = object.tokenContract ?? "";
    message.block = object.block !== undefined && object.block !== null ? Long.fromValue(object.block) : Long.UZERO;
    return message;
  }

};

function createBaseOutgoingTransferTx(): OutgoingTransferTx {
  return {
    id: Long.UZERO,
    sender: "",
    destAddress: "",
    erc20Token: undefined,
    erc20Fee: undefined
  };
}

export const OutgoingTransferTx = {
  encode(message: OutgoingTransferTx, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }

    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }

    if (message.destAddress !== "") {
      writer.uint32(26).string(message.destAddress);
    }

    if (message.erc20Token !== undefined) {
      ERC20Token.encode(message.erc20Token, writer.uint32(34).fork()).ldelim();
    }

    if (message.erc20Fee !== undefined) {
      ERC20Token.encode(message.erc20Fee, writer.uint32(42).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OutgoingTransferTx {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOutgoingTransferTx();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = (reader.uint64() as Long);
          break;

        case 2:
          message.sender = reader.string();
          break;

        case 3:
          message.destAddress = reader.string();
          break;

        case 4:
          message.erc20Token = ERC20Token.decode(reader, reader.uint32());
          break;

        case 5:
          message.erc20Fee = ERC20Token.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<OutgoingTransferTx>): OutgoingTransferTx {
    const message = createBaseOutgoingTransferTx();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.sender = object.sender ?? "";
    message.destAddress = object.destAddress ?? "";
    message.erc20Token = object.erc20Token !== undefined && object.erc20Token !== null ? ERC20Token.fromPartial(object.erc20Token) : undefined;
    message.erc20Fee = object.erc20Fee !== undefined && object.erc20Fee !== null ? ERC20Token.fromPartial(object.erc20Fee) : undefined;
    return message;
  }

};