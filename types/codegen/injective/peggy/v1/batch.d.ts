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
export declare const OutgoingTxBatch: {
    encode(message: OutgoingTxBatch, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OutgoingTxBatch;
    fromPartial(object: DeepPartial<OutgoingTxBatch>): OutgoingTxBatch;
};
export declare const OutgoingTransferTx: {
    encode(message: OutgoingTransferTx, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OutgoingTransferTx;
    fromPartial(object: DeepPartial<OutgoingTransferTx>): OutgoingTransferTx;
};
