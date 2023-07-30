import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@cosmology/helpers";
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
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromPartial(object: DeepPartial<Params>): Params;
};
export declare const ContractRegistrationRequestProposal: {
    encode(message: ContractRegistrationRequestProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ContractRegistrationRequestProposal;
    fromPartial(object: DeepPartial<ContractRegistrationRequestProposal>): ContractRegistrationRequestProposal;
};
export declare const BatchContractRegistrationRequestProposal: {
    encode(message: BatchContractRegistrationRequestProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BatchContractRegistrationRequestProposal;
    fromPartial(object: DeepPartial<BatchContractRegistrationRequestProposal>): BatchContractRegistrationRequestProposal;
};
export declare const ContractRegistrationRequest: {
    encode(message: ContractRegistrationRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ContractRegistrationRequest;
    fromPartial(object: DeepPartial<ContractRegistrationRequest>): ContractRegistrationRequest;
};
