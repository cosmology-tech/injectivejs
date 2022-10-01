import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryCurrentValsetRequest, QueryCurrentValsetResponseSDKType, QueryValsetRequestRequest, QueryValsetRequestResponseSDKType, QueryValsetConfirmRequest, QueryValsetConfirmResponseSDKType, QueryValsetConfirmsByNonceRequest, QueryValsetConfirmsByNonceResponseSDKType, QueryLastValsetRequestsRequest, QueryLastValsetRequestsResponseSDKType, QueryLastPendingValsetRequestByAddrRequest, QueryLastPendingValsetRequestByAddrResponseSDKType, QueryLastEventByAddrRequest, QueryLastEventByAddrResponseSDKType, QueryPendingSendToEth, QueryPendingSendToEthResponseSDKType, QueryBatchFeeRequest, QueryBatchFeeResponseSDKType, QueryOutgoingTxBatchesRequest, QueryOutgoingTxBatchesResponseSDKType, QueryLastPendingBatchRequestByAddrRequest, QueryLastPendingBatchRequestByAddrResponseSDKType, QueryBatchRequestByNonceRequest, QueryBatchRequestByNonceResponseSDKType, QueryBatchConfirmsRequest, QueryBatchConfirmsResponseSDKType, QueryERC20ToDenomRequest, QueryERC20ToDenomResponseSDKType, QueryDenomToERC20Request, QueryDenomToERC20ResponseSDKType, QueryDelegateKeysByValidatorAddress, QueryDelegateKeysByValidatorAddressResponseSDKType, QueryDelegateKeysByEthAddress, QueryDelegateKeysByEthAddressResponseSDKType, QueryDelegateKeysByOrchestratorAddress, QueryDelegateKeysByOrchestratorAddressResponseSDKType, QueryModuleStateRequest, QueryModuleStateResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;

  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.currentValset = this.currentValset.bind(this);
    this.valsetRequest = this.valsetRequest.bind(this);
    this.valsetConfirm = this.valsetConfirm.bind(this);
    this.valsetConfirmsByNonce = this.valsetConfirmsByNonce.bind(this);
    this.lastValsetRequests = this.lastValsetRequests.bind(this);
    this.lastPendingValsetRequestByAddr = this.lastPendingValsetRequestByAddr.bind(this);
    this.lastEventByAddr = this.lastEventByAddr.bind(this);
    this.getPendingSendToEth = this.getPendingSendToEth.bind(this);
    this.batchFees = this.batchFees.bind(this);
    this.outgoingTxBatches = this.outgoingTxBatches.bind(this);
    this.lastPendingBatchRequestByAddr = this.lastPendingBatchRequestByAddr.bind(this);
    this.batchRequestByNonce = this.batchRequestByNonce.bind(this);
    this.batchConfirms = this.batchConfirms.bind(this);
    this.eRC20ToDenom = this.eRC20ToDenom.bind(this);
    this.denomToERC20 = this.denomToERC20.bind(this);
    this.getDelegateKeyByValidator = this.getDelegateKeyByValidator.bind(this);
    this.getDelegateKeyByEth = this.getDelegateKeyByEth.bind(this);
    this.getDelegateKeyByOrchestrator = this.getDelegateKeyByOrchestrator.bind(this);
    this.peggyModuleState = this.peggyModuleState.bind(this);
  }
  /* Deployments queries deployments */


  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `peggy/v1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* valset */


  async currentValset(_params: QueryCurrentValsetRequest = {}): Promise<QueryCurrentValsetResponseSDKType> {
    const endpoint = `peggy/v1/valset/current`;
    return await this.req.get<QueryCurrentValsetResponseSDKType>(endpoint);
  }
  /* ValsetRequest */


  async valsetRequest(params: QueryValsetRequestRequest): Promise<QueryValsetRequestResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.nonce !== "undefined") {
      options.params.nonce = params.nonce;
    }

    const endpoint = `peggy/v1/valset`;
    return await this.req.get<QueryValsetRequestResponseSDKType>(endpoint, options);
  }
  /* ValsetConfirm */


  async valsetConfirm(params: QueryValsetConfirmRequest): Promise<QueryValsetConfirmResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.nonce !== "undefined") {
      options.params.nonce = params.nonce;
    }

    if (typeof params?.address !== "undefined") {
      options.params.address = params.address;
    }

    const endpoint = `peggy/v1/valset/confirm`;
    return await this.req.get<QueryValsetConfirmResponseSDKType>(endpoint, options);
  }
  /* ValsetConfirmsByNonce */


  async valsetConfirmsByNonce(params: QueryValsetConfirmsByNonceRequest): Promise<QueryValsetConfirmsByNonceResponseSDKType> {
    const endpoint = `peggy/v1/confirms/${params.nonce}`;
    return await this.req.get<QueryValsetConfirmsByNonceResponseSDKType>(endpoint);
  }
  /* LastValsetRequests */


  async lastValsetRequests(_params: QueryLastValsetRequestsRequest = {}): Promise<QueryLastValsetRequestsResponseSDKType> {
    const endpoint = `peggy/v1/valset/requests`;
    return await this.req.get<QueryLastValsetRequestsResponseSDKType>(endpoint);
  }
  /* LastPendingValsetRequestByAddr */


  async lastPendingValsetRequestByAddr(params: QueryLastPendingValsetRequestByAddrRequest): Promise<QueryLastPendingValsetRequestByAddrResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.address !== "undefined") {
      options.params.address = params.address;
    }

    const endpoint = `peggy/v1/valset/last`;
    return await this.req.get<QueryLastPendingValsetRequestByAddrResponseSDKType>(endpoint, options);
  }
  /* claim */


  async lastEventByAddr(params: QueryLastEventByAddrRequest): Promise<QueryLastEventByAddrResponseSDKType> {
    const endpoint = `peggy/v1/oracle/event/${params.address}`;
    return await this.req.get<QueryLastEventByAddrResponseSDKType>(endpoint);
  }
  /* batch */


  async getPendingSendToEth(params: QueryPendingSendToEth): Promise<QueryPendingSendToEthResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.senderAddress !== "undefined") {
      options.params.sender_address = params.senderAddress;
    }

    const endpoint = `peggy/v1/pending_send_to_eth`;
    return await this.req.get<QueryPendingSendToEthResponseSDKType>(endpoint, options);
  }
  /* BatchFees */


  async batchFees(_params: QueryBatchFeeRequest = {}): Promise<QueryBatchFeeResponseSDKType> {
    const endpoint = `peggy/v1/batchfees`;
    return await this.req.get<QueryBatchFeeResponseSDKType>(endpoint);
  }
  /* OutgoingTxBatches */


  async outgoingTxBatches(_params: QueryOutgoingTxBatchesRequest = {}): Promise<QueryOutgoingTxBatchesResponseSDKType> {
    const endpoint = `peggy/v1/batch/outgoingtx`;
    return await this.req.get<QueryOutgoingTxBatchesResponseSDKType>(endpoint);
  }
  /* LastPendingBatchRequestByAddr */


  async lastPendingBatchRequestByAddr(params: QueryLastPendingBatchRequestByAddrRequest): Promise<QueryLastPendingBatchRequestByAddrResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.address !== "undefined") {
      options.params.address = params.address;
    }

    const endpoint = `peggy/v1/batch/last`;
    return await this.req.get<QueryLastPendingBatchRequestByAddrResponseSDKType>(endpoint, options);
  }
  /* BatchRequestByNonce */


  async batchRequestByNonce(params: QueryBatchRequestByNonceRequest): Promise<QueryBatchRequestByNonceResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.nonce !== "undefined") {
      options.params.nonce = params.nonce;
    }

    if (typeof params?.contractAddress !== "undefined") {
      options.params.contract_address = params.contractAddress;
    }

    const endpoint = `peggy/v1/batch`;
    return await this.req.get<QueryBatchRequestByNonceResponseSDKType>(endpoint, options);
  }
  /* BatchConfirms */


  async batchConfirms(params: QueryBatchConfirmsRequest): Promise<QueryBatchConfirmsResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.nonce !== "undefined") {
      options.params.nonce = params.nonce;
    }

    if (typeof params?.contractAddress !== "undefined") {
      options.params.contract_address = params.contractAddress;
    }

    const endpoint = `peggy/v1/batch/confirms`;
    return await this.req.get<QueryBatchConfirmsResponseSDKType>(endpoint, options);
  }
  /* ERC20ToDenom */


  async eRC20ToDenom(params: QueryERC20ToDenomRequest): Promise<QueryERC20ToDenomResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.erc20 !== "undefined") {
      options.params.erc20 = params.erc20;
    }

    const endpoint = `peggy/v1/cosmos_originated/erc20_to_denom`;
    return await this.req.get<QueryERC20ToDenomResponseSDKType>(endpoint, options);
  }
  /* DenomToERC20 */


  async denomToERC20(params: QueryDenomToERC20Request): Promise<QueryDenomToERC20ResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.denom !== "undefined") {
      options.params.denom = params.denom;
    }

    const endpoint = `peggy/v1/cosmos_originated/denom_to_erc20`;
    return await this.req.get<QueryDenomToERC20ResponseSDKType>(endpoint, options);
  }
  /* GetDelegateKeyByValidator */


  async getDelegateKeyByValidator(params: QueryDelegateKeysByValidatorAddress): Promise<QueryDelegateKeysByValidatorAddressResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.validatorAddress !== "undefined") {
      options.params.validator_address = params.validatorAddress;
    }

    const endpoint = `peggy/v1/query_delegate_keys_by_validator`;
    return await this.req.get<QueryDelegateKeysByValidatorAddressResponseSDKType>(endpoint, options);
  }
  /* GetDelegateKeyByEth */


  async getDelegateKeyByEth(params: QueryDelegateKeysByEthAddress): Promise<QueryDelegateKeysByEthAddressResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.ethAddress !== "undefined") {
      options.params.eth_address = params.ethAddress;
    }

    const endpoint = `peggy/v1/query_delegate_keys_by_eth`;
    return await this.req.get<QueryDelegateKeysByEthAddressResponseSDKType>(endpoint, options);
  }
  /* GetDelegateKeyByOrchestrator */


  async getDelegateKeyByOrchestrator(params: QueryDelegateKeysByOrchestratorAddress): Promise<QueryDelegateKeysByOrchestratorAddressResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.orchestratorAddress !== "undefined") {
      options.params.orchestrator_address = params.orchestratorAddress;
    }

    const endpoint = `peggy/v1/query_delegate_keys_by_orchestrator`;
    return await this.req.get<QueryDelegateKeysByOrchestratorAddressResponseSDKType>(endpoint, options);
  }
  /* Retrieves the entire peggy module's state */


  async peggyModuleState(_params: QueryModuleStateRequest = {}): Promise<QueryModuleStateResponseSDKType> {
    const endpoint = `peggy/v1/module_state`;
    return await this.req.get<QueryModuleStateResponseSDKType>(endpoint);
  }

}