import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateInsuranceFund, MsgUnderwrite, MsgRequestRedemption } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        createInsuranceFund(value: MsgCreateInsuranceFund): {
            typeUrl: string;
            value: Uint8Array;
        };
        underwrite(value: MsgUnderwrite): {
            typeUrl: string;
            value: Uint8Array;
        };
        requestRedemption(value: MsgRequestRedemption): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        createInsuranceFund(value: MsgCreateInsuranceFund): {
            typeUrl: string;
            value: MsgCreateInsuranceFund;
        };
        underwrite(value: MsgUnderwrite): {
            typeUrl: string;
            value: MsgUnderwrite;
        };
        requestRedemption(value: MsgRequestRedemption): {
            typeUrl: string;
            value: MsgRequestRedemption;
        };
    };
    fromPartial: {
        createInsuranceFund(value: MsgCreateInsuranceFund): {
            typeUrl: string;
            value: MsgCreateInsuranceFund;
        };
        underwrite(value: MsgUnderwrite): {
            typeUrl: string;
            value: MsgUnderwrite;
        };
        requestRedemption(value: MsgRequestRedemption): {
            typeUrl: string;
            value: MsgRequestRedemption;
        };
    };
};
