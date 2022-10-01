import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgBid } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        bid(value: MsgBid): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        bid(value: MsgBid): {
            typeUrl: string;
            value: MsgBid;
        };
    };
    fromPartial: {
        bid(value: MsgBid): {
            typeUrl: string;
            value: MsgBid;
        };
    };
};
