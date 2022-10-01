import { FeedConfig, FeedConfigSDKType, Report, ReportSDKType } from "./ocr";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
export interface MsgCreateFeed {
    sender: string;
    config: FeedConfig;
}
export interface MsgCreateFeedSDKType {
    sender: string;
    config: FeedConfigSDKType;
}
export interface MsgCreateFeedResponse {
}
export interface MsgCreateFeedResponseSDKType {
}
export interface MsgUpdateFeed {
    sender: string;
    /** feed_id is an unique ID for the target of this config */
    feedId: string;
    /** signers ith element is address ith oracle uses to sign a report */
    signers: string[];
    /** transmitters ith element is address ith oracle uses to transmit a report via the transmit method */
    transmitters: string[];
    /** Fixed LINK reward for each observer */
    linkPerObservation?: string;
    /** Fixed LINK reward for transmitter */
    linkPerTransmission?: string;
    /** Native denom for LINK coin in the bank keeper */
    linkDenom: string;
    /** feed administrator */
    feedAdmin: string;
    /** feed billing administrator */
    billingAdmin: string;
}
export interface MsgUpdateFeedSDKType {
    sender: string;
    /** feed_id is an unique ID for the target of this config */
    feed_id: string;
    /** signers ith element is address ith oracle uses to sign a report */
    signers: string[];
    /** transmitters ith element is address ith oracle uses to transmit a report via the transmit method */
    transmitters: string[];
    /** Fixed LINK reward for each observer */
    link_per_observation?: string;
    /** Fixed LINK reward for transmitter */
    link_per_transmission?: string;
    /** Native denom for LINK coin in the bank keeper */
    link_denom: string;
    /** feed administrator */
    feed_admin: string;
    /** feed billing administrator */
    billing_admin: string;
}
export interface MsgUpdateFeedResponse {
}
export interface MsgUpdateFeedResponseSDKType {
}
export interface MsgTransmit {
    /** Address of the transmitter */
    transmitter: string;
    configDigest: Uint8Array;
    feedId: string;
    epoch: Long;
    round: Long;
    extraHash: Uint8Array;
    report: Report;
    signatures: Uint8Array[];
}
export interface MsgTransmitSDKType {
    /** Address of the transmitter */
    transmitter: string;
    config_digest: Uint8Array;
    feed_id: string;
    epoch: Long;
    round: Long;
    extra_hash: Uint8Array;
    report: ReportSDKType;
    signatures: Uint8Array[];
}
export interface MsgTransmitResponse {
}
export interface MsgTransmitResponseSDKType {
}
export interface MsgFundFeedRewardPool {
    sender: string;
    feedId: string;
    amount: Coin;
}
export interface MsgFundFeedRewardPoolSDKType {
    sender: string;
    feed_id: string;
    amount: CoinSDKType;
}
export interface MsgFundFeedRewardPoolResponse {
}
export interface MsgFundFeedRewardPoolResponseSDKType {
}
export interface MsgWithdrawFeedRewardPool {
    sender: string;
    feedId: string;
    amount: Coin;
}
export interface MsgWithdrawFeedRewardPoolSDKType {
    sender: string;
    feed_id: string;
    amount: CoinSDKType;
}
export interface MsgWithdrawFeedRewardPoolResponse {
}
export interface MsgWithdrawFeedRewardPoolResponseSDKType {
}
export interface MsgSetPayees {
    sender: string;
    feedId: string;
    /** addresses oracles use to transmit the reports */
    transmitters: string[];
    /** addresses of payees corresponding to list of transmitters */
    payees: string[];
}
export interface MsgSetPayeesSDKType {
    sender: string;
    feed_id: string;
    /** addresses oracles use to transmit the reports */
    transmitters: string[];
    /** addresses of payees corresponding to list of transmitters */
    payees: string[];
}
export interface MsgSetPayeesResponse {
}
export interface MsgSetPayeesResponseSDKType {
}
export interface MsgTransferPayeeship {
    /** transmitter address of oracle whose payee is changing */
    sender: string;
    transmitter: string;
    feedId: string;
    /** new payee address */
    proposed: string;
}
export interface MsgTransferPayeeshipSDKType {
    /** transmitter address of oracle whose payee is changing */
    sender: string;
    transmitter: string;
    feed_id: string;
    /** new payee address */
    proposed: string;
}
export interface MsgTransferPayeeshipResponse {
}
export interface MsgTransferPayeeshipResponseSDKType {
}
export interface MsgAcceptPayeeship {
    /** new payee address */
    payee: string;
    /** transmitter address of oracle whose payee is changing */
    transmitter: string;
    feedId: string;
}
export interface MsgAcceptPayeeshipSDKType {
    /** new payee address */
    payee: string;
    /** transmitter address of oracle whose payee is changing */
    transmitter: string;
    feed_id: string;
}
export interface MsgAcceptPayeeshipResponse {
}
export interface MsgAcceptPayeeshipResponseSDKType {
}
export declare const MsgCreateFeed: {
    encode(message: MsgCreateFeed, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateFeed;
    fromPartial(object: DeepPartial<MsgCreateFeed>): MsgCreateFeed;
};
export declare const MsgCreateFeedResponse: {
    encode(_: MsgCreateFeedResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateFeedResponse;
    fromPartial(_: DeepPartial<MsgCreateFeedResponse>): MsgCreateFeedResponse;
};
export declare const MsgUpdateFeed: {
    encode(message: MsgUpdateFeed, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateFeed;
    fromPartial(object: DeepPartial<MsgUpdateFeed>): MsgUpdateFeed;
};
export declare const MsgUpdateFeedResponse: {
    encode(_: MsgUpdateFeedResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateFeedResponse;
    fromPartial(_: DeepPartial<MsgUpdateFeedResponse>): MsgUpdateFeedResponse;
};
export declare const MsgTransmit: {
    encode(message: MsgTransmit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgTransmit;
    fromPartial(object: DeepPartial<MsgTransmit>): MsgTransmit;
};
export declare const MsgTransmitResponse: {
    encode(_: MsgTransmitResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgTransmitResponse;
    fromPartial(_: DeepPartial<MsgTransmitResponse>): MsgTransmitResponse;
};
export declare const MsgFundFeedRewardPool: {
    encode(message: MsgFundFeedRewardPool, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgFundFeedRewardPool;
    fromPartial(object: DeepPartial<MsgFundFeedRewardPool>): MsgFundFeedRewardPool;
};
export declare const MsgFundFeedRewardPoolResponse: {
    encode(_: MsgFundFeedRewardPoolResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgFundFeedRewardPoolResponse;
    fromPartial(_: DeepPartial<MsgFundFeedRewardPoolResponse>): MsgFundFeedRewardPoolResponse;
};
export declare const MsgWithdrawFeedRewardPool: {
    encode(message: MsgWithdrawFeedRewardPool, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawFeedRewardPool;
    fromPartial(object: DeepPartial<MsgWithdrawFeedRewardPool>): MsgWithdrawFeedRewardPool;
};
export declare const MsgWithdrawFeedRewardPoolResponse: {
    encode(_: MsgWithdrawFeedRewardPoolResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawFeedRewardPoolResponse;
    fromPartial(_: DeepPartial<MsgWithdrawFeedRewardPoolResponse>): MsgWithdrawFeedRewardPoolResponse;
};
export declare const MsgSetPayees: {
    encode(message: MsgSetPayees, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetPayees;
    fromPartial(object: DeepPartial<MsgSetPayees>): MsgSetPayees;
};
export declare const MsgSetPayeesResponse: {
    encode(_: MsgSetPayeesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetPayeesResponse;
    fromPartial(_: DeepPartial<MsgSetPayeesResponse>): MsgSetPayeesResponse;
};
export declare const MsgTransferPayeeship: {
    encode(message: MsgTransferPayeeship, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgTransferPayeeship;
    fromPartial(object: DeepPartial<MsgTransferPayeeship>): MsgTransferPayeeship;
};
export declare const MsgTransferPayeeshipResponse: {
    encode(_: MsgTransferPayeeshipResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgTransferPayeeshipResponse;
    fromPartial(_: DeepPartial<MsgTransferPayeeshipResponse>): MsgTransferPayeeshipResponse;
};
export declare const MsgAcceptPayeeship: {
    encode(message: MsgAcceptPayeeship, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAcceptPayeeship;
    fromPartial(object: DeepPartial<MsgAcceptPayeeship>): MsgAcceptPayeeship;
};
export declare const MsgAcceptPayeeshipResponse: {
    encode(_: MsgAcceptPayeeshipResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAcceptPayeeshipResponse;
    fromPartial(_: DeepPartial<MsgAcceptPayeeshipResponse>): MsgAcceptPayeeshipResponse;
};
