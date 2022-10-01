import { AminoMsg } from "@cosmjs/amino";
import { Long } from "@osmonauts/helpers";
import { MsgValsetConfirm, MsgSendToEth, MsgRequestBatch, MsgConfirmBatch, MsgDepositClaim, MsgWithdrawClaim, MsgValsetUpdatedClaim, MsgERC20DeployedClaim, MsgSetOrchestratorAddresses, MsgCancelSendToEth, MsgSubmitBadSignatureEvidence } from "./msgs";
export interface AminoMsgValsetConfirm extends AminoMsg {
  type: "/injective.peggy.v1.MsgValsetConfirm";
  value: {
    nonce: string;
    orchestrator: string;
    eth_address: string;
    signature: string;
  };
}
export interface AminoMsgSendToEth extends AminoMsg {
  type: "/injective.peggy.v1.MsgSendToEth";
  value: {
    sender: string;
    eth_dest: string;
    amount: {
      denom: string;
      amount: string;
    };
    bridge_fee: {
      denom: string;
      amount: string;
    };
  };
}
export interface AminoMsgRequestBatch extends AminoMsg {
  type: "/injective.peggy.v1.MsgRequestBatch";
  value: {
    orchestrator: string;
    denom: string;
  };
}
export interface AminoMsgConfirmBatch extends AminoMsg {
  type: "/injective.peggy.v1.MsgConfirmBatch";
  value: {
    nonce: string;
    token_contract: string;
    eth_signer: string;
    orchestrator: string;
    signature: string;
  };
}
export interface AminoMsgDepositClaim extends AminoMsg {
  type: "/injective.peggy.v1.MsgDepositClaim";
  value: {
    event_nonce: string;
    block_height: string;
    token_contract: string;
    amount: string;
    ethereum_sender: string;
    cosmos_receiver: string;
    orchestrator: string;
    data: string;
  };
}
export interface AminoMsgWithdrawClaim extends AminoMsg {
  type: "/injective.peggy.v1.MsgWithdrawClaim";
  value: {
    event_nonce: string;
    block_height: string;
    batch_nonce: string;
    token_contract: string;
    orchestrator: string;
  };
}
export interface AminoMsgValsetUpdatedClaim extends AminoMsg {
  type: "/injective.peggy.v1.MsgValsetUpdatedClaim";
  value: {
    event_nonce: string;
    valset_nonce: string;
    block_height: string;
    members: {
      power: string;
      ethereum_address: string;
    }[];
    reward_amount: string;
    reward_token: string;
    orchestrator: string;
  };
}
export interface AminoMsgERC20DeployedClaim extends AminoMsg {
  type: "/injective.peggy.v1.MsgERC20DeployedClaim";
  value: {
    event_nonce: string;
    block_height: string;
    cosmos_denom: string;
    token_contract: string;
    name: string;
    symbol: string;
    decimals: string;
    orchestrator: string;
  };
}
export interface AminoMsgSetOrchestratorAddresses extends AminoMsg {
  type: "/injective.peggy.v1.MsgSetOrchestratorAddresses";
  value: {
    sender: string;
    orchestrator: string;
    eth_address: string;
  };
}
export interface AminoMsgCancelSendToEth extends AminoMsg {
  type: "/injective.peggy.v1.MsgCancelSendToEth";
  value: {
    transaction_id: string;
    sender: string;
  };
}
export interface AminoMsgSubmitBadSignatureEvidence extends AminoMsg {
  type: "/injective.peggy.v1.MsgSubmitBadSignatureEvidence";
  value: {
    subject: {
      type_url: string;
      value: Uint8Array;
    };
    signature: string;
    sender: string;
  };
}
export const AminoConverter = {
  "/injective.peggy.v1.MsgValsetConfirm": {
    aminoType: "/injective.peggy.v1.MsgValsetConfirm",
    toAmino: ({
      nonce,
      orchestrator,
      ethAddress,
      signature
    }: MsgValsetConfirm): AminoMsgValsetConfirm["value"] => {
      return {
        nonce: nonce.toString(),
        orchestrator,
        eth_address: ethAddress,
        signature
      };
    },
    fromAmino: ({
      nonce,
      orchestrator,
      eth_address,
      signature
    }: AminoMsgValsetConfirm["value"]): MsgValsetConfirm => {
      return {
        nonce: Long.fromString(nonce),
        orchestrator,
        ethAddress: eth_address,
        signature
      };
    }
  },
  "/injective.peggy.v1.MsgSendToEth": {
    aminoType: "/injective.peggy.v1.MsgSendToEth",
    toAmino: ({
      sender,
      ethDest,
      amount,
      bridgeFee
    }: MsgSendToEth): AminoMsgSendToEth["value"] => {
      return {
        sender,
        eth_dest: ethDest,
        amount: {
          denom: amount.denom,
          amount: Long.fromNumber(amount.amount).toString()
        },
        bridge_fee: {
          denom: bridgeFee.denom,
          amount: Long.fromNumber(bridgeFee.amount).toString()
        }
      };
    },
    fromAmino: ({
      sender,
      eth_dest,
      amount,
      bridge_fee
    }: AminoMsgSendToEth["value"]): MsgSendToEth => {
      return {
        sender,
        ethDest: eth_dest,
        amount: {
          denom: amount.denom,
          amount: amount.amount
        },
        bridgeFee: {
          denom: bridge_fee.denom,
          amount: bridge_fee.amount
        }
      };
    }
  },
  "/injective.peggy.v1.MsgRequestBatch": {
    aminoType: "/injective.peggy.v1.MsgRequestBatch",
    toAmino: ({
      orchestrator,
      denom
    }: MsgRequestBatch): AminoMsgRequestBatch["value"] => {
      return {
        orchestrator,
        denom
      };
    },
    fromAmino: ({
      orchestrator,
      denom
    }: AminoMsgRequestBatch["value"]): MsgRequestBatch => {
      return {
        orchestrator,
        denom
      };
    }
  },
  "/injective.peggy.v1.MsgConfirmBatch": {
    aminoType: "/injective.peggy.v1.MsgConfirmBatch",
    toAmino: ({
      nonce,
      tokenContract,
      ethSigner,
      orchestrator,
      signature
    }: MsgConfirmBatch): AminoMsgConfirmBatch["value"] => {
      return {
        nonce: nonce.toString(),
        token_contract: tokenContract,
        eth_signer: ethSigner,
        orchestrator,
        signature
      };
    },
    fromAmino: ({
      nonce,
      token_contract,
      eth_signer,
      orchestrator,
      signature
    }: AminoMsgConfirmBatch["value"]): MsgConfirmBatch => {
      return {
        nonce: Long.fromString(nonce),
        tokenContract: token_contract,
        ethSigner: eth_signer,
        orchestrator,
        signature
      };
    }
  },
  "/injective.peggy.v1.MsgDepositClaim": {
    aminoType: "/injective.peggy.v1.MsgDepositClaim",
    toAmino: ({
      eventNonce,
      blockHeight,
      tokenContract,
      amount,
      ethereumSender,
      cosmosReceiver,
      orchestrator,
      data
    }: MsgDepositClaim): AminoMsgDepositClaim["value"] => {
      return {
        event_nonce: eventNonce.toString(),
        block_height: blockHeight.toString(),
        token_contract: tokenContract,
        amount,
        ethereum_sender: ethereumSender,
        cosmos_receiver: cosmosReceiver,
        orchestrator,
        data
      };
    },
    fromAmino: ({
      event_nonce,
      block_height,
      token_contract,
      amount,
      ethereum_sender,
      cosmos_receiver,
      orchestrator,
      data
    }: AminoMsgDepositClaim["value"]): MsgDepositClaim => {
      return {
        eventNonce: Long.fromString(event_nonce),
        blockHeight: Long.fromString(block_height),
        tokenContract: token_contract,
        amount,
        ethereumSender: ethereum_sender,
        cosmosReceiver: cosmos_receiver,
        orchestrator,
        data
      };
    }
  },
  "/injective.peggy.v1.MsgWithdrawClaim": {
    aminoType: "/injective.peggy.v1.MsgWithdrawClaim",
    toAmino: ({
      eventNonce,
      blockHeight,
      batchNonce,
      tokenContract,
      orchestrator
    }: MsgWithdrawClaim): AminoMsgWithdrawClaim["value"] => {
      return {
        event_nonce: eventNonce.toString(),
        block_height: blockHeight.toString(),
        batch_nonce: batchNonce.toString(),
        token_contract: tokenContract,
        orchestrator
      };
    },
    fromAmino: ({
      event_nonce,
      block_height,
      batch_nonce,
      token_contract,
      orchestrator
    }: AminoMsgWithdrawClaim["value"]): MsgWithdrawClaim => {
      return {
        eventNonce: Long.fromString(event_nonce),
        blockHeight: Long.fromString(block_height),
        batchNonce: Long.fromString(batch_nonce),
        tokenContract: token_contract,
        orchestrator
      };
    }
  },
  "/injective.peggy.v1.MsgValsetUpdatedClaim": {
    aminoType: "/injective.peggy.v1.MsgValsetUpdatedClaim",
    toAmino: ({
      eventNonce,
      valsetNonce,
      blockHeight,
      members,
      rewardAmount,
      rewardToken,
      orchestrator
    }: MsgValsetUpdatedClaim): AminoMsgValsetUpdatedClaim["value"] => {
      return {
        event_nonce: eventNonce.toString(),
        valset_nonce: valsetNonce.toString(),
        block_height: blockHeight.toString(),
        members: members.map(el0 => ({
          power: el0.power.toString(),
          ethereum_address: el0.ethereumAddress
        })),
        reward_amount: rewardAmount,
        reward_token: rewardToken,
        orchestrator
      };
    },
    fromAmino: ({
      event_nonce,
      valset_nonce,
      block_height,
      members,
      reward_amount,
      reward_token,
      orchestrator
    }: AminoMsgValsetUpdatedClaim["value"]): MsgValsetUpdatedClaim => {
      return {
        eventNonce: Long.fromString(event_nonce),
        valsetNonce: Long.fromString(valset_nonce),
        blockHeight: Long.fromString(block_height),
        members: members.map(el0 => ({
          power: Long.fromString(el0.power),
          ethereumAddress: el0.ethereum_address
        })),
        rewardAmount: reward_amount,
        rewardToken: reward_token,
        orchestrator
      };
    }
  },
  "/injective.peggy.v1.MsgERC20DeployedClaim": {
    aminoType: "/injective.peggy.v1.MsgERC20DeployedClaim",
    toAmino: ({
      eventNonce,
      blockHeight,
      cosmosDenom,
      tokenContract,
      name,
      symbol,
      decimals,
      orchestrator
    }: MsgERC20DeployedClaim): AminoMsgERC20DeployedClaim["value"] => {
      return {
        event_nonce: eventNonce.toString(),
        block_height: blockHeight.toString(),
        cosmos_denom: cosmosDenom,
        token_contract: tokenContract,
        name,
        symbol,
        decimals: decimals.toString(),
        orchestrator
      };
    },
    fromAmino: ({
      event_nonce,
      block_height,
      cosmos_denom,
      token_contract,
      name,
      symbol,
      decimals,
      orchestrator
    }: AminoMsgERC20DeployedClaim["value"]): MsgERC20DeployedClaim => {
      return {
        eventNonce: Long.fromString(event_nonce),
        blockHeight: Long.fromString(block_height),
        cosmosDenom: cosmos_denom,
        tokenContract: token_contract,
        name,
        symbol,
        decimals: Long.fromString(decimals),
        orchestrator
      };
    }
  },
  "/injective.peggy.v1.MsgSetOrchestratorAddresses": {
    aminoType: "/injective.peggy.v1.MsgSetOrchestratorAddresses",
    toAmino: ({
      sender,
      orchestrator,
      ethAddress
    }: MsgSetOrchestratorAddresses): AminoMsgSetOrchestratorAddresses["value"] => {
      return {
        sender,
        orchestrator,
        eth_address: ethAddress
      };
    },
    fromAmino: ({
      sender,
      orchestrator,
      eth_address
    }: AminoMsgSetOrchestratorAddresses["value"]): MsgSetOrchestratorAddresses => {
      return {
        sender,
        orchestrator,
        ethAddress: eth_address
      };
    }
  },
  "/injective.peggy.v1.MsgCancelSendToEth": {
    aminoType: "/injective.peggy.v1.MsgCancelSendToEth",
    toAmino: ({
      transactionId,
      sender
    }: MsgCancelSendToEth): AminoMsgCancelSendToEth["value"] => {
      return {
        transaction_id: transactionId.toString(),
        sender
      };
    },
    fromAmino: ({
      transaction_id,
      sender
    }: AminoMsgCancelSendToEth["value"]): MsgCancelSendToEth => {
      return {
        transactionId: Long.fromString(transaction_id),
        sender
      };
    }
  },
  "/injective.peggy.v1.MsgSubmitBadSignatureEvidence": {
    aminoType: "/injective.peggy.v1.MsgSubmitBadSignatureEvidence",
    toAmino: ({
      subject,
      signature,
      sender
    }: MsgSubmitBadSignatureEvidence): AminoMsgSubmitBadSignatureEvidence["value"] => {
      return {
        subject: {
          type_url: subject.typeUrl,
          value: subject.value
        },
        signature,
        sender
      };
    },
    fromAmino: ({
      subject,
      signature,
      sender
    }: AminoMsgSubmitBadSignatureEvidence["value"]): MsgSubmitBadSignatureEvidence => {
      return {
        subject: {
          typeUrl: subject.type_url,
          value: subject.value
        },
        signature,
        sender
      };
    }
  }
};