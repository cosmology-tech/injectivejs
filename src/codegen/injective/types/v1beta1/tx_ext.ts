import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
export interface ExtensionOptionsWeb3Tx {
  /**
   * typedDataChainID used only in EIP712 Domain and should match
   * Ethereum network ID in a Web3 provider (e.g. Metamask).
   */
  typedDataChainID: Long;
  /**
   * feePayer is an account address for the fee payer. It will be validated
   * during EIP712 signature checking.
   */

  feePayer: string;
  /**
   * feePayerSig is a signature data from the fee paying account,
   * allows to perform fee delegation when using EIP712 Domain.
   */

  feePayerSig: Uint8Array;
}
export interface ExtensionOptionsWeb3TxSDKType {
  /**
   * typedDataChainID used only in EIP712 Domain and should match
   * Ethereum network ID in a Web3 provider (e.g. Metamask).
   */
  typedDataChainID: Long;
  /**
   * feePayer is an account address for the fee payer. It will be validated
   * during EIP712 signature checking.
   */

  feePayer: string;
  /**
   * feePayerSig is a signature data from the fee paying account,
   * allows to perform fee delegation when using EIP712 Domain.
   */

  feePayerSig: Uint8Array;
}

function createBaseExtensionOptionsWeb3Tx(): ExtensionOptionsWeb3Tx {
  return {
    typedDataChainID: Long.UZERO,
    feePayer: "",
    feePayerSig: new Uint8Array()
  };
}

export const ExtensionOptionsWeb3Tx = {
  encode(message: ExtensionOptionsWeb3Tx, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.typedDataChainID.isZero()) {
      writer.uint32(8).uint64(message.typedDataChainID);
    }

    if (message.feePayer !== "") {
      writer.uint32(18).string(message.feePayer);
    }

    if (message.feePayerSig.length !== 0) {
      writer.uint32(26).bytes(message.feePayerSig);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExtensionOptionsWeb3Tx {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExtensionOptionsWeb3Tx();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.typedDataChainID = (reader.uint64() as Long);
          break;

        case 2:
          message.feePayer = reader.string();
          break;

        case 3:
          message.feePayerSig = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<ExtensionOptionsWeb3Tx>): ExtensionOptionsWeb3Tx {
    const message = createBaseExtensionOptionsWeb3Tx();
    message.typedDataChainID = object.typedDataChainID !== undefined && object.typedDataChainID !== null ? Long.fromValue(object.typedDataChainID) : Long.UZERO;
    message.feePayer = object.feePayer ?? "";
    message.feePayerSig = object.feePayerSig ?? new Uint8Array();
    return message;
  }

};