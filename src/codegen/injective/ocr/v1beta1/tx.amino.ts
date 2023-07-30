import { AminoMsg } from "@cosmjs/amino";
import { Long } from "@cosmology/helpers";
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
export const AminoConverter = {
  "/injective.ocr.v1beta1.MsgCreateFeed": {
    aminoType: "/injective.ocr.v1beta1.MsgCreateFeed",
    toAmino: ({
      sender,
      config
    }: MsgCreateFeed): AminoMsgCreateFeed["value"] => {
      return {
        sender,
        config: {
          signers: config.signers,
          transmitters: config.transmitters,
          f: config.f,
          onchain_config: config.onchainConfig,
          offchain_config_version: config.offchainConfigVersion.toString(),
          offchain_config: config.offchainConfig,
          module_params: {
            feed_id: config.moduleParams.feedId,
            min_answer: config.moduleParams.minAnswer,
            max_answer: config.moduleParams.maxAnswer,
            link_per_observation: config.moduleParams.linkPerObservation,
            link_per_transmission: config.moduleParams.linkPerTransmission,
            link_denom: config.moduleParams.linkDenom,
            unique_reports: config.moduleParams.uniqueReports,
            description: config.moduleParams.description,
            feed_admin: config.moduleParams.feedAdmin,
            billing_admin: config.moduleParams.billingAdmin
          }
        }
      };
    },
    fromAmino: ({
      sender,
      config
    }: AminoMsgCreateFeed["value"]): MsgCreateFeed => {
      return {
        sender,
        config: {
          signers: config.signers,
          transmitters: config.transmitters,
          f: config.f,
          onchainConfig: config.onchain_config,
          offchainConfigVersion: Long.fromString(config.offchain_config_version),
          offchainConfig: config.offchain_config,
          moduleParams: {
            feedId: config.module_params.feed_id,
            minAnswer: config.module_params.min_answer,
            maxAnswer: config.module_params.max_answer,
            linkPerObservation: config.module_params.link_per_observation,
            linkPerTransmission: config.module_params.link_per_transmission,
            linkDenom: config.module_params.link_denom,
            uniqueReports: config.module_params.unique_reports,
            description: config.module_params.description,
            feedAdmin: config.module_params.feed_admin,
            billingAdmin: config.module_params.billing_admin
          }
        }
      };
    }
  },
  "/injective.ocr.v1beta1.MsgUpdateFeed": {
    aminoType: "/injective.ocr.v1beta1.MsgUpdateFeed",
    toAmino: ({
      sender,
      feedId,
      signers,
      transmitters,
      linkPerObservation,
      linkPerTransmission,
      linkDenom,
      feedAdmin,
      billingAdmin
    }: MsgUpdateFeed): AminoMsgUpdateFeed["value"] => {
      return {
        sender,
        feed_id: feedId,
        signers,
        transmitters,
        link_per_observation: linkPerObservation,
        link_per_transmission: linkPerTransmission,
        link_denom: linkDenom,
        feed_admin: feedAdmin,
        billing_admin: billingAdmin
      };
    },
    fromAmino: ({
      sender,
      feed_id,
      signers,
      transmitters,
      link_per_observation,
      link_per_transmission,
      link_denom,
      feed_admin,
      billing_admin
    }: AminoMsgUpdateFeed["value"]): MsgUpdateFeed => {
      return {
        sender,
        feedId: feed_id,
        signers,
        transmitters,
        linkPerObservation: link_per_observation,
        linkPerTransmission: link_per_transmission,
        linkDenom: link_denom,
        feedAdmin: feed_admin,
        billingAdmin: billing_admin
      };
    }
  },
  "/injective.ocr.v1beta1.MsgTransmit": {
    aminoType: "/injective.ocr.v1beta1.MsgTransmit",
    toAmino: ({
      transmitter,
      configDigest,
      feedId,
      epoch,
      round,
      extraHash,
      report,
      signatures
    }: MsgTransmit): AminoMsgTransmit["value"] => {
      return {
        transmitter,
        config_digest: configDigest,
        feed_id: feedId,
        epoch: epoch.toString(),
        round: round.toString(),
        extra_hash: extraHash,
        report: {
          observations_timestamp: report.observationsTimestamp.toString(),
          observers: report.observers,
          observations: report.observations
        },
        signatures
      };
    },
    fromAmino: ({
      transmitter,
      config_digest,
      feed_id,
      epoch,
      round,
      extra_hash,
      report,
      signatures
    }: AminoMsgTransmit["value"]): MsgTransmit => {
      return {
        transmitter,
        configDigest: config_digest,
        feedId: feed_id,
        epoch: Long.fromString(epoch),
        round: Long.fromString(round),
        extraHash: extra_hash,
        report: {
          observationsTimestamp: Long.fromString(report.observations_timestamp),
          observers: report.observers,
          observations: report.observations
        },
        signatures
      };
    }
  },
  "/injective.ocr.v1beta1.MsgFundFeedRewardPool": {
    aminoType: "/injective.ocr.v1beta1.MsgFundFeedRewardPool",
    toAmino: ({
      sender,
      feedId,
      amount
    }: MsgFundFeedRewardPool): AminoMsgFundFeedRewardPool["value"] => {
      return {
        sender,
        feed_id: feedId,
        amount: {
          denom: amount.denom,
          amount: Long.fromNumber(amount.amount).toString()
        }
      };
    },
    fromAmino: ({
      sender,
      feed_id,
      amount
    }: AminoMsgFundFeedRewardPool["value"]): MsgFundFeedRewardPool => {
      return {
        sender,
        feedId: feed_id,
        amount: {
          denom: amount.denom,
          amount: amount.amount
        }
      };
    }
  },
  "/injective.ocr.v1beta1.MsgWithdrawFeedRewardPool": {
    aminoType: "/injective.ocr.v1beta1.MsgWithdrawFeedRewardPool",
    toAmino: ({
      sender,
      feedId,
      amount
    }: MsgWithdrawFeedRewardPool): AminoMsgWithdrawFeedRewardPool["value"] => {
      return {
        sender,
        feed_id: feedId,
        amount: {
          denom: amount.denom,
          amount: Long.fromNumber(amount.amount).toString()
        }
      };
    },
    fromAmino: ({
      sender,
      feed_id,
      amount
    }: AminoMsgWithdrawFeedRewardPool["value"]): MsgWithdrawFeedRewardPool => {
      return {
        sender,
        feedId: feed_id,
        amount: {
          denom: amount.denom,
          amount: amount.amount
        }
      };
    }
  },
  "/injective.ocr.v1beta1.MsgSetPayees": {
    aminoType: "/injective.ocr.v1beta1.MsgSetPayees",
    toAmino: ({
      sender,
      feedId,
      transmitters,
      payees
    }: MsgSetPayees): AminoMsgSetPayees["value"] => {
      return {
        sender,
        feed_id: feedId,
        transmitters,
        payees
      };
    },
    fromAmino: ({
      sender,
      feed_id,
      transmitters,
      payees
    }: AminoMsgSetPayees["value"]): MsgSetPayees => {
      return {
        sender,
        feedId: feed_id,
        transmitters,
        payees
      };
    }
  },
  "/injective.ocr.v1beta1.MsgTransferPayeeship": {
    aminoType: "/injective.ocr.v1beta1.MsgTransferPayeeship",
    toAmino: ({
      sender,
      transmitter,
      feedId,
      proposed
    }: MsgTransferPayeeship): AminoMsgTransferPayeeship["value"] => {
      return {
        sender,
        transmitter,
        feed_id: feedId,
        proposed
      };
    },
    fromAmino: ({
      sender,
      transmitter,
      feed_id,
      proposed
    }: AminoMsgTransferPayeeship["value"]): MsgTransferPayeeship => {
      return {
        sender,
        transmitter,
        feedId: feed_id,
        proposed
      };
    }
  },
  "/injective.ocr.v1beta1.MsgAcceptPayeeship": {
    aminoType: "/injective.ocr.v1beta1.MsgAcceptPayeeship",
    toAmino: ({
      payee,
      transmitter,
      feedId
    }: MsgAcceptPayeeship): AminoMsgAcceptPayeeship["value"] => {
      return {
        payee,
        transmitter,
        feed_id: feedId
      };
    },
    fromAmino: ({
      payee,
      transmitter,
      feed_id
    }: AminoMsgAcceptPayeeship["value"]): MsgAcceptPayeeship => {
      return {
        payee,
        transmitter,
        feedId: feed_id
      };
    }
  }
};