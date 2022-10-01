import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryCurrentValsetRequest, QueryCurrentValsetResponseSDKType, QueryValsetRequestRequest, QueryValsetRequestResponseSDKType, QueryValsetConfirmRequest, QueryValsetConfirmResponseSDKType, QueryValsetConfirmsByNonceRequest, QueryValsetConfirmsByNonceResponseSDKType, QueryLastValsetRequestsRequest, QueryLastValsetRequestsResponseSDKType, QueryLastPendingValsetRequestByAddrRequest, QueryLastPendingValsetRequestByAddrResponseSDKType, QueryLastEventByAddrRequest, QueryLastEventByAddrResponseSDKType, QueryPendingSendToEth, QueryPendingSendToEthResponseSDKType, QueryBatchFeeRequest, QueryBatchFeeResponseSDKType, QueryOutgoingTxBatchesRequest, QueryOutgoingTxBatchesResponseSDKType, QueryLastPendingBatchRequestByAddrRequest, QueryLastPendingBatchRequestByAddrResponseSDKType, QueryBatchRequestByNonceRequest, QueryBatchRequestByNonceResponseSDKType, QueryBatchConfirmsRequest, QueryBatchConfirmsResponseSDKType, QueryERC20ToDenomRequest, QueryERC20ToDenomResponseSDKType, QueryDenomToERC20Request, QueryDenomToERC20ResponseSDKType, QueryDelegateKeysByValidatorAddress, QueryDelegateKeysByValidatorAddressResponseSDKType, QueryDelegateKeysByEthAddress, QueryDelegateKeysByEthAddressResponseSDKType, QueryDelegateKeysByOrchestratorAddress, QueryDelegateKeysByOrchestratorAddressResponseSDKType, QueryModuleStateRequest, QueryModuleStateResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    currentValset(_params?: QueryCurrentValsetRequest): Promise<QueryCurrentValsetResponseSDKType>;
    valsetRequest(params: QueryValsetRequestRequest): Promise<QueryValsetRequestResponseSDKType>;
    valsetConfirm(params: QueryValsetConfirmRequest): Promise<QueryValsetConfirmResponseSDKType>;
    valsetConfirmsByNonce(params: QueryValsetConfirmsByNonceRequest): Promise<QueryValsetConfirmsByNonceResponseSDKType>;
    lastValsetRequests(_params?: QueryLastValsetRequestsRequest): Promise<QueryLastValsetRequestsResponseSDKType>;
    lastPendingValsetRequestByAddr(params: QueryLastPendingValsetRequestByAddrRequest): Promise<QueryLastPendingValsetRequestByAddrResponseSDKType>;
    lastEventByAddr(params: QueryLastEventByAddrRequest): Promise<QueryLastEventByAddrResponseSDKType>;
    getPendingSendToEth(params: QueryPendingSendToEth): Promise<QueryPendingSendToEthResponseSDKType>;
    batchFees(_params?: QueryBatchFeeRequest): Promise<QueryBatchFeeResponseSDKType>;
    outgoingTxBatches(_params?: QueryOutgoingTxBatchesRequest): Promise<QueryOutgoingTxBatchesResponseSDKType>;
    lastPendingBatchRequestByAddr(params: QueryLastPendingBatchRequestByAddrRequest): Promise<QueryLastPendingBatchRequestByAddrResponseSDKType>;
    batchRequestByNonce(params: QueryBatchRequestByNonceRequest): Promise<QueryBatchRequestByNonceResponseSDKType>;
    batchConfirms(params: QueryBatchConfirmsRequest): Promise<QueryBatchConfirmsResponseSDKType>;
    eRC20ToDenom(params: QueryERC20ToDenomRequest): Promise<QueryERC20ToDenomResponseSDKType>;
    denomToERC20(params: QueryDenomToERC20Request): Promise<QueryDenomToERC20ResponseSDKType>;
    getDelegateKeyByValidator(params: QueryDelegateKeysByValidatorAddress): Promise<QueryDelegateKeysByValidatorAddressResponseSDKType>;
    getDelegateKeyByEth(params: QueryDelegateKeysByEthAddress): Promise<QueryDelegateKeysByEthAddressResponseSDKType>;
    getDelegateKeyByOrchestrator(params: QueryDelegateKeysByOrchestratorAddress): Promise<QueryDelegateKeysByOrchestratorAddressResponseSDKType>;
    peggyModuleState(_params?: QueryModuleStateRequest): Promise<QueryModuleStateResponseSDKType>;
}
