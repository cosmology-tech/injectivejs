import { BandOracleRequest, BandOracleRequestSDKType, BandIBCParams, BandIBCParamsSDKType } from "./oracle";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
export interface GrantBandOraclePrivilegeProposal {
    title: string;
    description: string;
    relayers: string[];
}
export interface GrantBandOraclePrivilegeProposalSDKType {
    title: string;
    description: string;
    relayers: string[];
}
export interface RevokeBandOraclePrivilegeProposal {
    title: string;
    description: string;
    relayers: string[];
}
export interface RevokeBandOraclePrivilegeProposalSDKType {
    title: string;
    description: string;
    relayers: string[];
}
export interface GrantPriceFeederPrivilegeProposal {
    title: string;
    description: string;
    base: string;
    quote: string;
    relayers: string[];
}
export interface GrantPriceFeederPrivilegeProposalSDKType {
    title: string;
    description: string;
    base: string;
    quote: string;
    relayers: string[];
}
export interface GrantProviderPrivilegeProposal {
    title: string;
    description: string;
    provider: string;
    relayers: string[];
}
export interface GrantProviderPrivilegeProposalSDKType {
    title: string;
    description: string;
    provider: string;
    relayers: string[];
}
export interface RevokeProviderPrivilegeProposal {
    title: string;
    description: string;
    provider: string;
    relayers: string[];
}
export interface RevokeProviderPrivilegeProposalSDKType {
    title: string;
    description: string;
    provider: string;
    relayers: string[];
}
export interface RevokePriceFeederPrivilegeProposal {
    title: string;
    description: string;
    base: string;
    quote: string;
    relayers: string[];
}
export interface RevokePriceFeederPrivilegeProposalSDKType {
    title: string;
    description: string;
    base: string;
    quote: string;
    relayers: string[];
}
export interface AuthorizeBandOracleRequestProposal {
    title: string;
    description: string;
    request: BandOracleRequest;
}
export interface AuthorizeBandOracleRequestProposalSDKType {
    title: string;
    description: string;
    request: BandOracleRequestSDKType;
}
export interface UpdateBandOracleRequestProposal {
    title: string;
    description: string;
    deleteRequestId: Long;
    updateOracleRequest: BandOracleRequest;
}
export interface UpdateBandOracleRequestProposalSDKType {
    title: string;
    description: string;
    delete_request_id: Long;
    update_oracle_request: BandOracleRequestSDKType;
}
export interface EnableBandIBCProposal {
    title: string;
    description: string;
    bandIbcParams: BandIBCParams;
}
export interface EnableBandIBCProposalSDKType {
    title: string;
    description: string;
    band_ibc_params: BandIBCParamsSDKType;
}
export declare const GrantBandOraclePrivilegeProposal: {
    encode(message: GrantBandOraclePrivilegeProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GrantBandOraclePrivilegeProposal;
    fromPartial(object: DeepPartial<GrantBandOraclePrivilegeProposal>): GrantBandOraclePrivilegeProposal;
};
export declare const RevokeBandOraclePrivilegeProposal: {
    encode(message: RevokeBandOraclePrivilegeProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RevokeBandOraclePrivilegeProposal;
    fromPartial(object: DeepPartial<RevokeBandOraclePrivilegeProposal>): RevokeBandOraclePrivilegeProposal;
};
export declare const GrantPriceFeederPrivilegeProposal: {
    encode(message: GrantPriceFeederPrivilegeProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GrantPriceFeederPrivilegeProposal;
    fromPartial(object: DeepPartial<GrantPriceFeederPrivilegeProposal>): GrantPriceFeederPrivilegeProposal;
};
export declare const GrantProviderPrivilegeProposal: {
    encode(message: GrantProviderPrivilegeProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GrantProviderPrivilegeProposal;
    fromPartial(object: DeepPartial<GrantProviderPrivilegeProposal>): GrantProviderPrivilegeProposal;
};
export declare const RevokeProviderPrivilegeProposal: {
    encode(message: RevokeProviderPrivilegeProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RevokeProviderPrivilegeProposal;
    fromPartial(object: DeepPartial<RevokeProviderPrivilegeProposal>): RevokeProviderPrivilegeProposal;
};
export declare const RevokePriceFeederPrivilegeProposal: {
    encode(message: RevokePriceFeederPrivilegeProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RevokePriceFeederPrivilegeProposal;
    fromPartial(object: DeepPartial<RevokePriceFeederPrivilegeProposal>): RevokePriceFeederPrivilegeProposal;
};
export declare const AuthorizeBandOracleRequestProposal: {
    encode(message: AuthorizeBandOracleRequestProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AuthorizeBandOracleRequestProposal;
    fromPartial(object: DeepPartial<AuthorizeBandOracleRequestProposal>): AuthorizeBandOracleRequestProposal;
};
export declare const UpdateBandOracleRequestProposal: {
    encode(message: UpdateBandOracleRequestProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateBandOracleRequestProposal;
    fromPartial(object: DeepPartial<UpdateBandOracleRequestProposal>): UpdateBandOracleRequestProposal;
};
export declare const EnableBandIBCProposal: {
    encode(message: EnableBandIBCProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EnableBandIBCProposal;
    fromPartial(object: DeepPartial<EnableBandIBCProposal>): EnableBandIBCProposal;
};
