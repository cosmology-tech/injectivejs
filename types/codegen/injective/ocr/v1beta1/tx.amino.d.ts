import { AminoMsg } from "@cosmjs/amino";
import { MsgCreateFeed, MsgUpdateFeed, MsgTransmit, MsgFundFeedRewardPool, MsgWithdrawFeedRewardPool, MsgSetPayees, MsgTransferPayeeship, MsgAcceptPayeeship } from "./tx";
export interface AminoMsgCreateFeed extends AminoMsg {
    type: "/injective.ocr.v1beta1.MsgCreateFeed";
    value: {
        sender: string;
        config: {
            signers: string[];
            transmitters: string[];
            f: number;
            onchain_config: Uint8Array;
            offchain_config_version: string;
            offchain_config: Uint8Array;
            module_params: {
                feed_id: string;
                min_answer: string;
                max_answer: string;
                link_per_observation: string;
                link_per_transmission: string;
                link_denom: string;
                unique_reports: boolean;
                description: string;
                feed_admin: string;
                billing_admin: string;
            };
        };
    };
}
export interface AminoMsgUpdateFeed extends AminoMsg {
    type: "/injective.ocr.v1beta1.MsgUpdateFeed";
    value: {
        sender: string;
        feed_id: string;
        signers: string[];
        transmitters: string[];
        link_per_observation: string;
        link_per_transmission: string;
        link_denom: string;
        feed_admin: string;
        billing_admin: string;
    };
}
export interface AminoMsgTransmit extends AminoMsg {
    type: "/injective.ocr.v1beta1.MsgTransmit";
    value: {
        transmitter: string;
        config_digest: Uint8Array;
        feed_id: string;
        epoch: string;
        round: string;
        extra_hash: Uint8Array;
        report: {
            observations_timestamp: string;
            observers: Uint8Array;
            observations: string[];
        };
        signatures: Uint8Array[];
    };
}
export interface AminoMsgFundFeedRewardPool extends AminoMsg {
    type: "/injective.ocr.v1beta1.MsgFundFeedRewardPool";
    value: {
        sender: string;
        feed_id: string;
        amount: {
            denom: string;
            amount: string;
        };
    };
}
export interface AminoMsgWithdrawFeedRewardPool extends AminoMsg {
    type: "/injective.ocr.v1beta1.MsgWithdrawFeedRewardPool";
    value: {
        sender: string;
        feed_id: string;
        amount: {
            denom: string;
            amount: string;
        };
    };
}
export interface AminoMsgSetPayees extends AminoMsg {
    type: "/injective.ocr.v1beta1.MsgSetPayees";
    value: {
        sender: string;
        feed_id: string;
        transmitters: string[];
        payees: string[];
    };
}
export interface AminoMsgTransferPayeeship extends AminoMsg {
    type: "/injective.ocr.v1beta1.MsgTransferPayeeship";
    value: {
        sender: string;
        transmitter: string;
        feed_id: string;
        proposed: string;
    };
}
export interface AminoMsgAcceptPayeeship extends AminoMsg {
    type: "/injective.ocr.v1beta1.MsgAcceptPayeeship";
    value: {
        payee: string;
        transmitter: string;
        feed_id: string;
    };
}
export declare const AminoConverter: {
    "/injective.ocr.v1beta1.MsgCreateFeed": {
        aminoType: string;
        toAmino: ({ sender, config }: MsgCreateFeed) => AminoMsgCreateFeed["value"];
        fromAmino: ({ sender, config }: AminoMsgCreateFeed["value"]) => MsgCreateFeed;
    };
    "/injective.ocr.v1beta1.MsgUpdateFeed": {
        aminoType: string;
        toAmino: ({ sender, feedId, signers, transmitters, linkPerObservation, linkPerTransmission, linkDenom, feedAdmin, billingAdmin }: MsgUpdateFeed) => AminoMsgUpdateFeed["value"];
        fromAmino: ({ sender, feed_id, signers, transmitters, link_per_observation, link_per_transmission, link_denom, feed_admin, billing_admin }: AminoMsgUpdateFeed["value"]) => MsgUpdateFeed;
    };
    "/injective.ocr.v1beta1.MsgTransmit": {
        aminoType: string;
        toAmino: ({ transmitter, configDigest, feedId, epoch, round, extraHash, report, signatures }: MsgTransmit) => AminoMsgTransmit["value"];
        fromAmino: ({ transmitter, config_digest, feed_id, epoch, round, extra_hash, report, signatures }: AminoMsgTransmit["value"]) => MsgTransmit;
    };
    "/injective.ocr.v1beta1.MsgFundFeedRewardPool": {
        aminoType: string;
        toAmino: ({ sender, feedId, amount }: MsgFundFeedRewardPool) => AminoMsgFundFeedRewardPool["value"];
        fromAmino: ({ sender, feed_id, amount }: AminoMsgFundFeedRewardPool["value"]) => MsgFundFeedRewardPool;
    };
    "/injective.ocr.v1beta1.MsgWithdrawFeedRewardPool": {
        aminoType: string;
        toAmino: ({ sender, feedId, amount }: MsgWithdrawFeedRewardPool) => AminoMsgWithdrawFeedRewardPool["value"];
        fromAmino: ({ sender, feed_id, amount }: AminoMsgWithdrawFeedRewardPool["value"]) => MsgWithdrawFeedRewardPool;
    };
    "/injective.ocr.v1beta1.MsgSetPayees": {
        aminoType: string;
        toAmino: ({ sender, feedId, transmitters, payees }: MsgSetPayees) => AminoMsgSetPayees["value"];
        fromAmino: ({ sender, feed_id, transmitters, payees }: AminoMsgSetPayees["value"]) => MsgSetPayees;
    };
    "/injective.ocr.v1beta1.MsgTransferPayeeship": {
        aminoType: string;
        toAmino: ({ sender, transmitter, feedId, proposed }: MsgTransferPayeeship) => AminoMsgTransferPayeeship["value"];
        fromAmino: ({ sender, transmitter, feed_id, proposed }: AminoMsgTransferPayeeship["value"]) => MsgTransferPayeeship;
    };
    "/injective.ocr.v1beta1.MsgAcceptPayeeship": {
        aminoType: string;
        toAmino: ({ payee, transmitter, feedId }: MsgAcceptPayeeship) => AminoMsgAcceptPayeeship["value"];
        fromAmino: ({ payee, transmitter, feed_id }: AminoMsgAcceptPayeeship["value"]) => MsgAcceptPayeeship;
    };
};
