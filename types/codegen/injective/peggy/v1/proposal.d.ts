import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@cosmology/helpers";
export interface BlacklistEthereumAddressesProposal {
    title: string;
    description: string;
    blacklistAddresses: string[];
}
export interface BlacklistEthereumAddressesProposalSDKType {
    title: string;
    description: string;
    blacklist_addresses: string[];
}
export interface RevokeEthereumBlacklistProposal {
    title: string;
    description: string;
    blacklistAddresses: string[];
}
export interface RevokeEthereumBlacklistProposalSDKType {
    title: string;
    description: string;
    blacklist_addresses: string[];
}
export declare const BlacklistEthereumAddressesProposal: {
    encode(message: BlacklistEthereumAddressesProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BlacklistEthereumAddressesProposal;
    fromPartial(object: DeepPartial<BlacklistEthereumAddressesProposal>): BlacklistEthereumAddressesProposal;
};
export declare const RevokeEthereumBlacklistProposal: {
    encode(message: RevokeEthereumBlacklistProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RevokeEthereumBlacklistProposal;
    fromPartial(object: DeepPartial<RevokeEthereumBlacklistProposal>): RevokeEthereumBlacklistProposal;
};
