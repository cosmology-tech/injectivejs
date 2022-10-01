import { AminoMsg } from "@cosmjs/amino";
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
export declare const AminoConverter: {
    "/injective.peggy.v1.MsgValsetConfirm": {
        aminoType: string;
        toAmino: ({ nonce, orchestrator, ethAddress, signature }: MsgValsetConfirm) => AminoMsgValsetConfirm["value"];
        fromAmino: ({ nonce, orchestrator, eth_address, signature }: AminoMsgValsetConfirm["value"]) => MsgValsetConfirm;
    };
    "/injective.peggy.v1.MsgSendToEth": {
        aminoType: string;
        toAmino: ({ sender, ethDest, amount, bridgeFee }: MsgSendToEth) => AminoMsgSendToEth["value"];
        fromAmino: ({ sender, eth_dest, amount, bridge_fee }: AminoMsgSendToEth["value"]) => MsgSendToEth;
    };
    "/injective.peggy.v1.MsgRequestBatch": {
        aminoType: string;
        toAmino: ({ orchestrator, denom }: MsgRequestBatch) => AminoMsgRequestBatch["value"];
        fromAmino: ({ orchestrator, denom }: AminoMsgRequestBatch["value"]) => MsgRequestBatch;
    };
    "/injective.peggy.v1.MsgConfirmBatch": {
        aminoType: string;
        toAmino: ({ nonce, tokenContract, ethSigner, orchestrator, signature }: MsgConfirmBatch) => AminoMsgConfirmBatch["value"];
        fromAmino: ({ nonce, token_contract, eth_signer, orchestrator, signature }: AminoMsgConfirmBatch["value"]) => MsgConfirmBatch;
    };
    "/injective.peggy.v1.MsgDepositClaim": {
        aminoType: string;
        toAmino: ({ eventNonce, blockHeight, tokenContract, amount, ethereumSender, cosmosReceiver, orchestrator, data }: MsgDepositClaim) => AminoMsgDepositClaim["value"];
        fromAmino: ({ event_nonce, block_height, token_contract, amount, ethereum_sender, cosmos_receiver, orchestrator, data }: AminoMsgDepositClaim["value"]) => MsgDepositClaim;
    };
    "/injective.peggy.v1.MsgWithdrawClaim": {
        aminoType: string;
        toAmino: ({ eventNonce, blockHeight, batchNonce, tokenContract, orchestrator }: MsgWithdrawClaim) => AminoMsgWithdrawClaim["value"];
        fromAmino: ({ event_nonce, block_height, batch_nonce, token_contract, orchestrator }: AminoMsgWithdrawClaim["value"]) => MsgWithdrawClaim;
    };
    "/injective.peggy.v1.MsgValsetUpdatedClaim": {
        aminoType: string;
        toAmino: ({ eventNonce, valsetNonce, blockHeight, members, rewardAmount, rewardToken, orchestrator }: MsgValsetUpdatedClaim) => AminoMsgValsetUpdatedClaim["value"];
        fromAmino: ({ event_nonce, valset_nonce, block_height, members, reward_amount, reward_token, orchestrator }: AminoMsgValsetUpdatedClaim["value"]) => MsgValsetUpdatedClaim;
    };
    "/injective.peggy.v1.MsgERC20DeployedClaim": {
        aminoType: string;
        toAmino: ({ eventNonce, blockHeight, cosmosDenom, tokenContract, name, symbol, decimals, orchestrator }: MsgERC20DeployedClaim) => AminoMsgERC20DeployedClaim["value"];
        fromAmino: ({ event_nonce, block_height, cosmos_denom, token_contract, name, symbol, decimals, orchestrator }: AminoMsgERC20DeployedClaim["value"]) => MsgERC20DeployedClaim;
    };
    "/injective.peggy.v1.MsgSetOrchestratorAddresses": {
        aminoType: string;
        toAmino: ({ sender, orchestrator, ethAddress }: MsgSetOrchestratorAddresses) => AminoMsgSetOrchestratorAddresses["value"];
        fromAmino: ({ sender, orchestrator, eth_address }: AminoMsgSetOrchestratorAddresses["value"]) => MsgSetOrchestratorAddresses;
    };
    "/injective.peggy.v1.MsgCancelSendToEth": {
        aminoType: string;
        toAmino: ({ transactionId, sender }: MsgCancelSendToEth) => AminoMsgCancelSendToEth["value"];
        fromAmino: ({ transaction_id, sender }: AminoMsgCancelSendToEth["value"]) => MsgCancelSendToEth;
    };
    "/injective.peggy.v1.MsgSubmitBadSignatureEvidence": {
        aminoType: string;
        toAmino: ({ subject, signature, sender }: MsgSubmitBadSignatureEvidence) => AminoMsgSubmitBadSignatureEvidence["value"];
        fromAmino: ({ subject, signature, sender }: AminoMsgSubmitBadSignatureEvidence["value"]) => MsgSubmitBadSignatureEvidence;
    };
};
