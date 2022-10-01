import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
export interface Params {
  /** Set the status to active to indicate that the contract is to be executed in begin blocker. */
  isExecutionEnabled: boolean;
  /** registry_contract is the address of the registry contract that will be used to register contract executions in begin blocker. */

  registryContract: string;
  /** Maximum aggregate total gas to be used for the contract executions in the BeginBlocker. */

  maxBeginBlockTotalGas: Long;
  /** the maximum gas limit each individual contract can consume in the BeginBlocker. */

  maxContractGasLimit: Long;
  /** min_gas_price defines the minimum gas price the contracts must pay to be executed in the BeginBlocker. */

  minGasPrice: string;
}
export interface ParamsSDKType {
  /** Set the status to active to indicate that the contract is to be executed in begin blocker. */
  is_execution_enabled: boolean;
  /** registry_contract is the address of the registry contract that will be used to register contract executions in begin blocker. */

  registry_contract: string;
  /** Maximum aggregate total gas to be used for the contract executions in the BeginBlocker. */

  max_begin_block_total_gas: Long;
  /** the maximum gas limit each individual contract can consume in the BeginBlocker. */

  max_contract_gas_limit: Long;
  /** min_gas_price defines the minimum gas price the contracts must pay to be executed in the BeginBlocker. */

  min_gas_price: string;
}
export interface ContractRegistrationRequestProposal {
  title: string;
  description: string;
  contractRegistrationRequest: ContractRegistrationRequest;
}
export interface ContractRegistrationRequestProposalSDKType {
  title: string;
  description: string;
  contract_registration_request: ContractRegistrationRequestSDKType;
}
export interface BatchContractRegistrationRequestProposal {
  title: string;
  description: string;
  contractRegistrationRequests: ContractRegistrationRequest[];
}
export interface BatchContractRegistrationRequestProposalSDKType {
  title: string;
  description: string;
  contract_registration_requests: ContractRegistrationRequestSDKType[];
}
export interface ContractRegistrationRequest {
  /** Unique Identifier for contract instance to be registered. */
  contractAddress: string;
  /** Maximum gas to be used for the smart contract execution. */

  gasLimit: Long;
  /** gas price to be used for the smart contract execution. */

  gasPrice: string;
  pinContract: boolean;
}
export interface ContractRegistrationRequestSDKType {
  /** Unique Identifier for contract instance to be registered. */
  contract_address: string;
  /** Maximum gas to be used for the smart contract execution. */

  gas_limit: Long;
  /** gas price to be used for the smart contract execution. */

  gas_price: string;
  pin_contract: boolean;
}

function createBaseParams(): Params {
  return {
    isExecutionEnabled: false,
    registryContract: "",
    maxBeginBlockTotalGas: Long.UZERO,
    maxContractGasLimit: Long.UZERO,
    minGasPrice: ""
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.isExecutionEnabled === true) {
      writer.uint32(8).bool(message.isExecutionEnabled);
    }

    if (message.registryContract !== "") {
      writer.uint32(18).string(message.registryContract);
    }

    if (!message.maxBeginBlockTotalGas.isZero()) {
      writer.uint32(24).uint64(message.maxBeginBlockTotalGas);
    }

    if (!message.maxContractGasLimit.isZero()) {
      writer.uint32(32).uint64(message.maxContractGasLimit);
    }

    if (message.minGasPrice !== "") {
      writer.uint32(42).string(message.minGasPrice);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.isExecutionEnabled = reader.bool();
          break;

        case 2:
          message.registryContract = reader.string();
          break;

        case 3:
          message.maxBeginBlockTotalGas = (reader.uint64() as Long);
          break;

        case 4:
          message.maxContractGasLimit = (reader.uint64() as Long);
          break;

        case 5:
          message.minGasPrice = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.isExecutionEnabled = object.isExecutionEnabled ?? false;
    message.registryContract = object.registryContract ?? "";
    message.maxBeginBlockTotalGas = object.maxBeginBlockTotalGas !== undefined && object.maxBeginBlockTotalGas !== null ? Long.fromValue(object.maxBeginBlockTotalGas) : Long.UZERO;
    message.maxContractGasLimit = object.maxContractGasLimit !== undefined && object.maxContractGasLimit !== null ? Long.fromValue(object.maxContractGasLimit) : Long.UZERO;
    message.minGasPrice = object.minGasPrice ?? "";
    return message;
  }

};

function createBaseContractRegistrationRequestProposal(): ContractRegistrationRequestProposal {
  return {
    title: "",
    description: "",
    contractRegistrationRequest: undefined
  };
}

export const ContractRegistrationRequestProposal = {
  encode(message: ContractRegistrationRequestProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    if (message.contractRegistrationRequest !== undefined) {
      ContractRegistrationRequest.encode(message.contractRegistrationRequest, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ContractRegistrationRequestProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContractRegistrationRequestProposal();

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
          message.contractRegistrationRequest = ContractRegistrationRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<ContractRegistrationRequestProposal>): ContractRegistrationRequestProposal {
    const message = createBaseContractRegistrationRequestProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.contractRegistrationRequest = object.contractRegistrationRequest !== undefined && object.contractRegistrationRequest !== null ? ContractRegistrationRequest.fromPartial(object.contractRegistrationRequest) : undefined;
    return message;
  }

};

function createBaseBatchContractRegistrationRequestProposal(): BatchContractRegistrationRequestProposal {
  return {
    title: "",
    description: "",
    contractRegistrationRequests: []
  };
}

export const BatchContractRegistrationRequestProposal = {
  encode(message: BatchContractRegistrationRequestProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    for (const v of message.contractRegistrationRequests) {
      ContractRegistrationRequest.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BatchContractRegistrationRequestProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBatchContractRegistrationRequestProposal();

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
          message.contractRegistrationRequests.push(ContractRegistrationRequest.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<BatchContractRegistrationRequestProposal>): BatchContractRegistrationRequestProposal {
    const message = createBaseBatchContractRegistrationRequestProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.contractRegistrationRequests = object.contractRegistrationRequests?.map(e => ContractRegistrationRequest.fromPartial(e)) || [];
    return message;
  }

};

function createBaseContractRegistrationRequest(): ContractRegistrationRequest {
  return {
    contractAddress: "",
    gasLimit: Long.UZERO,
    gasPrice: "",
    pinContract: false
  };
}

export const ContractRegistrationRequest = {
  encode(message: ContractRegistrationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }

    if (!message.gasLimit.isZero()) {
      writer.uint32(16).uint64(message.gasLimit);
    }

    if (message.gasPrice !== "") {
      writer.uint32(26).string(message.gasPrice);
    }

    if (message.pinContract === true) {
      writer.uint32(32).bool(message.pinContract);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ContractRegistrationRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContractRegistrationRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.contractAddress = reader.string();
          break;

        case 2:
          message.gasLimit = (reader.uint64() as Long);
          break;

        case 3:
          message.gasPrice = reader.string();
          break;

        case 4:
          message.pinContract = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<ContractRegistrationRequest>): ContractRegistrationRequest {
    const message = createBaseContractRegistrationRequest();
    message.contractAddress = object.contractAddress ?? "";
    message.gasLimit = object.gasLimit !== undefined && object.gasLimit !== null ? Long.fromValue(object.gasLimit) : Long.UZERO;
    message.gasPrice = object.gasPrice ?? "";
    message.pinContract = object.pinContract ?? false;
    return message;
  }

};