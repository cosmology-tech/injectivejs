export declare const createRPCQueryClient: ({ rpcEndpoint }: {
    rpcEndpoint: string;
}) => Promise<{
    cosmos: {
        app: {
            v1alpha1: {
                config(request?: import("../cosmos/app/v1alpha1/query").QueryConfigRequest): Promise<import("../cosmos/app/v1alpha1/query").QueryConfigResponse>;
            };
        };
        auth: {
            v1beta1: {
                accounts(request?: import("../cosmos/auth/v1beta1/query").QueryAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountsResponse>;
                account(request: import("../cosmos/auth/v1beta1/query").QueryAccountRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountResponse>;
                params(request?: import("../cosmos/auth/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryParamsResponse>;
                moduleAccounts(request?: import("../cosmos/auth/v1beta1/query").QueryModuleAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryModuleAccountsResponse>;
                bech32Prefix(request?: import("../cosmos/auth/v1beta1/query").Bech32PrefixRequest): Promise<import("../cosmos/auth/v1beta1/query").Bech32PrefixResponse>;
                addressBytesToString(request: import("../cosmos/auth/v1beta1/query").AddressBytesToStringRequest): Promise<import("../cosmos/auth/v1beta1/query").AddressBytesToStringResponse>;
                addressStringToBytes(request: import("../cosmos/auth/v1beta1/query").AddressStringToBytesRequest): Promise<import("../cosmos/auth/v1beta1/query").AddressStringToBytesResponse>;
            };
        };
        authz: {
            v1beta1: {
                grants(request: import("../cosmos/authz/v1beta1/query").QueryGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGrantsResponse>;
                granterGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranterGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranterGrantsResponse>;
                granteeGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsResponse>;
            };
        };
        bank: {
            v1beta1: {
                balance(request: import("../cosmos/bank/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryBalanceResponse>;
                allBalances(request: import("../cosmos/bank/v1beta1/query").QueryAllBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryAllBalancesResponse>;
                spendableBalances(request: import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesResponse>;
                totalSupply(request?: import("../cosmos/bank/v1beta1/query").QueryTotalSupplyRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryTotalSupplyResponse>;
                supplyOf(request: import("../cosmos/bank/v1beta1/query").QuerySupplyOfRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySupplyOfResponse>;
                params(request?: import("../cosmos/bank/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryParamsResponse>;
                denomMetadata(request: import("../cosmos/bank/v1beta1/query").QueryDenomMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomMetadataResponse>;
                denomsMetadata(request?: import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataResponse>;
                denomOwners(request: import("../cosmos/bank/v1beta1/query").QueryDenomOwnersRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomOwnersResponse>;
            };
        };
        base: {
            tendermint: {
                v1beta1: {
                    getNodeInfo(request?: import("../cosmos/base/tendermint/v1beta1/query").GetNodeInfoRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetNodeInfoResponse>;
                    getSyncing(request?: import("../cosmos/base/tendermint/v1beta1/query").GetSyncingRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetSyncingResponse>;
                    getLatestBlock(request?: import("../cosmos/base/tendermint/v1beta1/query").GetLatestBlockRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetLatestBlockResponse>;
                    getBlockByHeight(request: import("../cosmos/base/tendermint/v1beta1/query").GetBlockByHeightRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetBlockByHeightResponse>;
                    getLatestValidatorSet(request?: import("../cosmos/base/tendermint/v1beta1/query").GetLatestValidatorSetRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetLatestValidatorSetResponse>;
                    getValidatorSetByHeight(request: import("../cosmos/base/tendermint/v1beta1/query").GetValidatorSetByHeightRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetValidatorSetByHeightResponse>;
                };
            };
        };
        distribution: {
            v1beta1: {
                params(request?: import("../cosmos/distribution/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryParamsResponse>;
                validatorOutstandingRewards(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionResponse>;
                validatorSlashes(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesResponse>;
                delegationRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolResponse>;
            };
        };
        evidence: {
            v1beta1: {
                evidence(request: import("../cosmos/evidence/v1beta1/query").QueryEvidenceRequest): Promise<import("../cosmos/evidence/v1beta1/query").QueryEvidenceResponse>;
                allEvidence(request?: import("../cosmos/evidence/v1beta1/query").QueryAllEvidenceRequest): Promise<import("../cosmos/evidence/v1beta1/query").QueryAllEvidenceResponse>;
            };
        };
        feegrant: {
            v1beta1: {
                allowance(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowanceRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowanceResponse>;
                allowances(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowancesRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowancesResponse>;
                allowancesByGranter(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowancesByGranterRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowancesByGranterResponse>;
            };
        };
        gov: {
            v1: {
                proposal(request: import("../cosmos/gov/v1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1/query").QueryProposalResponse>;
                proposals(request: import("../cosmos/gov/v1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1/query").QueryProposalsResponse>;
                vote(request: import("../cosmos/gov/v1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1/query").QueryVoteResponse>;
                votes(request: import("../cosmos/gov/v1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1/query").QueryVotesResponse>;
                params(request: import("../cosmos/gov/v1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1/query").QueryParamsResponse>;
                deposit(request: import("../cosmos/gov/v1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1/query").QueryDepositResponse>;
                deposits(request: import("../cosmos/gov/v1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1/query").QueryDepositsResponse>;
                tallyResult(request: import("../cosmos/gov/v1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1/query").QueryTallyResultResponse>;
            };
            v1beta1: {
                proposal(request: import("../cosmos/gov/v1beta1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalResponse>;
                proposals(request: import("../cosmos/gov/v1beta1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalsResponse>;
                vote(request: import("../cosmos/gov/v1beta1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVoteResponse>;
                votes(request: import("../cosmos/gov/v1beta1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVotesResponse>;
                params(request: import("../cosmos/gov/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryParamsResponse>;
                deposit(request: import("../cosmos/gov/v1beta1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositResponse>;
                deposits(request: import("../cosmos/gov/v1beta1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositsResponse>;
                tallyResult(request: import("../cosmos/gov/v1beta1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryTallyResultResponse>;
            };
        };
        group: {
            v1: {
                groupInfo(request: import("../cosmos/group/v1/query").QueryGroupInfoRequest): Promise<import("../cosmos/group/v1/query").QueryGroupInfoResponse>;
                groupPolicyInfo(request: import("../cosmos/group/v1/query").QueryGroupPolicyInfoRequest): Promise<import("../cosmos/group/v1/query").QueryGroupPolicyInfoResponse>;
                groupMembers(request: import("../cosmos/group/v1/query").QueryGroupMembersRequest): Promise<import("../cosmos/group/v1/query").QueryGroupMembersResponse>;
                groupsByAdmin(request: import("../cosmos/group/v1/query").QueryGroupsByAdminRequest): Promise<import("../cosmos/group/v1/query").QueryGroupsByAdminResponse>;
                groupPoliciesByGroup(request: import("../cosmos/group/v1/query").QueryGroupPoliciesByGroupRequest): Promise<import("../cosmos/group/v1/query").QueryGroupPoliciesByGroupResponse>;
                groupPoliciesByAdmin(request: import("../cosmos/group/v1/query").QueryGroupPoliciesByAdminRequest): Promise<import("../cosmos/group/v1/query").QueryGroupPoliciesByAdminResponse>;
                proposal(request: import("../cosmos/group/v1/query").QueryProposalRequest): Promise<import("../cosmos/group/v1/query").QueryProposalResponse>;
                proposalsByGroupPolicy(request: import("../cosmos/group/v1/query").QueryProposalsByGroupPolicyRequest): Promise<import("../cosmos/group/v1/query").QueryProposalsByGroupPolicyResponse>;
                voteByProposalVoter(request: import("../cosmos/group/v1/query").QueryVoteByProposalVoterRequest): Promise<import("../cosmos/group/v1/query").QueryVoteByProposalVoterResponse>;
                votesByProposal(request: import("../cosmos/group/v1/query").QueryVotesByProposalRequest): Promise<import("../cosmos/group/v1/query").QueryVotesByProposalResponse>;
                votesByVoter(request: import("../cosmos/group/v1/query").QueryVotesByVoterRequest): Promise<import("../cosmos/group/v1/query").QueryVotesByVoterResponse>;
                groupsByMember(request: import("../cosmos/group/v1/query").QueryGroupsByMemberRequest): Promise<import("../cosmos/group/v1/query").QueryGroupsByMemberResponse>;
                tallyResult(request: import("../cosmos/group/v1/query").QueryTallyResultRequest): Promise<import("../cosmos/group/v1/query").QueryTallyResultResponse>;
            };
        };
        mint: {
            v1beta1: {
                params(request?: import("../cosmos/mint/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryParamsResponse>;
                inflation(request?: import("../cosmos/mint/v1beta1/query").QueryInflationRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryInflationResponse>;
                annualProvisions(request?: import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsResponse>;
            };
        };
        nft: {
            v1beta1: {
                balance(request: import("../cosmos/nft/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryBalanceResponse>;
                owner(request: import("../cosmos/nft/v1beta1/query").QueryOwnerRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryOwnerResponse>;
                supply(request: import("../cosmos/nft/v1beta1/query").QuerySupplyRequest): Promise<import("../cosmos/nft/v1beta1/query").QuerySupplyResponse>;
                nFTs(request: import("../cosmos/nft/v1beta1/query").QueryNFTsRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryNFTsResponse>;
                nFT(request: import("../cosmos/nft/v1beta1/query").QueryNFTRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryNFTResponse>;
                class(request: import("../cosmos/nft/v1beta1/query").QueryClassRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryClassResponse>;
                classes(request?: import("../cosmos/nft/v1beta1/query").QueryClassesRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryClassesResponse>;
            };
        };
        params: {
            v1beta1: {
                params(request: import("../cosmos/params/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/params/v1beta1/query").QueryParamsResponse>;
                subspaces(request?: import("../cosmos/params/v1beta1/query").QuerySubspacesRequest): Promise<import("../cosmos/params/v1beta1/query").QuerySubspacesResponse>;
            };
        };
        slashing: {
            v1beta1: {
                params(request?: import("../cosmos/slashing/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/slashing/v1beta1/query").QueryParamsResponse>;
                signingInfo(request: import("../cosmos/slashing/v1beta1/query").QuerySigningInfoRequest): Promise<import("../cosmos/slashing/v1beta1/query").QuerySigningInfoResponse>;
                signingInfos(request?: import("../cosmos/slashing/v1beta1/query").QuerySigningInfosRequest): Promise<import("../cosmos/slashing/v1beta1/query").QuerySigningInfosResponse>;
            };
        };
        staking: {
            v1beta1: {
                validators(request: import("../cosmos/staking/v1beta1/query").QueryValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorsResponse>;
                validator(request: import("../cosmos/staking/v1beta1/query").QueryValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorResponse>;
                validatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: import("../cosmos/staking/v1beta1/query").QueryDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegationResponse>;
                unbondingDelegation(request: import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: import("../cosmos/staking/v1beta1/query").QueryRedelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryRedelegationsResponse>;
                delegatorValidators(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorResponse>;
                historicalInfo(request: import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoResponse>;
                pool(request?: import("../cosmos/staking/v1beta1/query").QueryPoolRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryPoolResponse>;
                params(request?: import("../cosmos/staking/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryParamsResponse>;
            };
        };
        tx: {
            v1beta1: {
                simulate(request: import("../cosmos/tx/v1beta1/service").SimulateRequest): Promise<import("../cosmos/tx/v1beta1/service").SimulateResponse>;
                getTx(request: import("../cosmos/tx/v1beta1/service").GetTxRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxResponse>;
                broadcastTx(request: import("../cosmos/tx/v1beta1/service").BroadcastTxRequest): Promise<import("../cosmos/tx/v1beta1/service").BroadcastTxResponse>;
                getTxsEvent(request: import("../cosmos/tx/v1beta1/service").GetTxsEventRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxsEventResponse>;
                getBlockWithTxs(request: import("../cosmos/tx/v1beta1/service").GetBlockWithTxsRequest): Promise<import("../cosmos/tx/v1beta1/service").GetBlockWithTxsResponse>;
            };
        };
        upgrade: {
            v1beta1: {
                currentPlan(request?: import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanResponse>;
                appliedPlan(request: import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanResponse>;
                upgradedConsensusState(request: import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsResponse>;
                authority(request?: import("../cosmos/upgrade/v1beta1/query").QueryAuthorityRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAuthorityResponse>;
            };
        };
    };
    injective: {
        auction: {
            v1beta1: {
                auctionParams(request?: import("./auction/v1beta1/query").QueryAuctionParamsRequest): Promise<import("./auction/v1beta1/query").QueryAuctionParamsResponse>;
                currentAuctionBasket(request?: import("./auction/v1beta1/query").QueryCurrentAuctionBasketRequest): Promise<import("./auction/v1beta1/query").QueryCurrentAuctionBasketResponse>;
                auctionModuleState(request?: import("./auction/v1beta1/query").QueryModuleStateRequest): Promise<import("./auction/v1beta1/query").QueryModuleStateResponse>;
            };
        };
        exchange: {
            v1beta1: {
                queryExchangeParams(request?: import("./exchange/v1beta1/query").QueryExchangeParamsRequest): Promise<import("./exchange/v1beta1/query").QueryExchangeParamsResponse>;
                subaccountDeposits(request: import("./exchange/v1beta1/query").QuerySubaccountDepositsRequest): Promise<import("./exchange/v1beta1/query").QuerySubaccountDepositsResponse>;
                subaccountDeposit(request: import("./exchange/v1beta1/query").QuerySubaccountDepositRequest): Promise<import("./exchange/v1beta1/query").QuerySubaccountDepositResponse>;
                exchangeBalances(request?: import("./exchange/v1beta1/query").QueryExchangeBalancesRequest): Promise<import("./exchange/v1beta1/query").QueryExchangeBalancesResponse>;
                spotMarkets(request: import("./exchange/v1beta1/query").QuerySpotMarketsRequest): Promise<import("./exchange/v1beta1/query").QuerySpotMarketsResponse>;
                spotMarket(request: import("./exchange/v1beta1/query").QuerySpotMarketRequest): Promise<import("./exchange/v1beta1/query").QuerySpotMarketResponse>;
                spotOrderbook(request: import("./exchange/v1beta1/query").QuerySpotOrderbookRequest): Promise<import("./exchange/v1beta1/query").QuerySpotOrderbookResponse>;
                traderSpotOrders(request: import("./exchange/v1beta1/query").QueryTraderSpotOrdersRequest): Promise<import("./exchange/v1beta1/query").QueryTraderSpotOrdersResponse>;
                spotOrdersByHashes(request: import("./exchange/v1beta1/query").QuerySpotOrdersByHashesRequest): Promise<import("./exchange/v1beta1/query").QuerySpotOrdersByHashesResponse>;
                subaccountOrders(request: import("./exchange/v1beta1/query").QuerySubaccountOrdersRequest): Promise<import("./exchange/v1beta1/query").QuerySubaccountOrdersResponse>;
                traderSpotTransientOrders(request: import("./exchange/v1beta1/query").QueryTraderSpotOrdersRequest): Promise<import("./exchange/v1beta1/query").QueryTraderSpotOrdersResponse>;
                spotMidPriceAndTOB(request: import("./exchange/v1beta1/query").QuerySpotMidPriceAndTOBRequest): Promise<import("./exchange/v1beta1/query").QuerySpotMidPriceAndTOBResponse>;
                derivativeMidPriceAndTOB(request: import("./exchange/v1beta1/query").QueryDerivativeMidPriceAndTOBRequest): Promise<import("./exchange/v1beta1/query").QueryDerivativeMidPriceAndTOBResponse>;
                derivativeOrderbook(request: import("./exchange/v1beta1/query").QueryDerivativeOrderbookRequest): Promise<import("./exchange/v1beta1/query").QueryDerivativeOrderbookResponse>;
                traderDerivativeOrders(request: import("./exchange/v1beta1/query").QueryTraderDerivativeOrdersRequest): Promise<import("./exchange/v1beta1/query").QueryTraderDerivativeOrdersResponse>;
                derivativeOrdersByHashes(request: import("./exchange/v1beta1/query").QueryDerivativeOrdersByHashesRequest): Promise<import("./exchange/v1beta1/query").QueryDerivativeOrdersByHashesResponse>;
                traderDerivativeTransientOrders(request: import("./exchange/v1beta1/query").QueryTraderDerivativeOrdersRequest): Promise<import("./exchange/v1beta1/query").QueryTraderDerivativeOrdersResponse>;
                derivativeMarkets(request: import("./exchange/v1beta1/query").QueryDerivativeMarketsRequest): Promise<import("./exchange/v1beta1/query").QueryDerivativeMarketsResponse>;
                derivativeMarket(request: import("./exchange/v1beta1/query").QueryDerivativeMarketRequest): Promise<import("./exchange/v1beta1/query").QueryDerivativeMarketResponse>;
                derivativeMarketAddress(request: import("./exchange/v1beta1/query").QueryDerivativeMarketAddressRequest): Promise<import("./exchange/v1beta1/query").QueryDerivativeMarketAddressResponse>;
                subaccountTradeNonce(request: import("./exchange/v1beta1/query").QuerySubaccountTradeNonceRequest): Promise<import("./exchange/v1beta1/query").QuerySubaccountTradeNonceResponse>;
                exchangeModuleState(request?: import("./exchange/v1beta1/query").QueryModuleStateRequest): Promise<import("./exchange/v1beta1/query").QueryModuleStateResponse>;
                positions(request?: import("./exchange/v1beta1/query").QueryPositionsRequest): Promise<import("./exchange/v1beta1/query").QueryPositionsResponse>;
                subaccountPositions(request: import("./exchange/v1beta1/query").QuerySubaccountPositionsRequest): Promise<import("./exchange/v1beta1/query").QuerySubaccountPositionsResponse>;
                subaccountPositionInMarket(request: import("./exchange/v1beta1/query").QuerySubaccountPositionInMarketRequest): Promise<import("./exchange/v1beta1/query").QuerySubaccountPositionInMarketResponse>;
                subaccountEffectivePositionInMarket(request: import("./exchange/v1beta1/query").QuerySubaccountEffectivePositionInMarketRequest): Promise<import("./exchange/v1beta1/query").QuerySubaccountEffectivePositionInMarketResponse>;
                perpetualMarketInfo(request: import("./exchange/v1beta1/query").QueryPerpetualMarketInfoRequest): Promise<import("./exchange/v1beta1/query").QueryPerpetualMarketInfoResponse>;
                expiryFuturesMarketInfo(request: import("./exchange/v1beta1/query").QueryExpiryFuturesMarketInfoRequest): Promise<import("./exchange/v1beta1/query").QueryExpiryFuturesMarketInfoResponse>;
                perpetualMarketFunding(request: import("./exchange/v1beta1/query").QueryPerpetualMarketFundingRequest): Promise<import("./exchange/v1beta1/query").QueryPerpetualMarketFundingResponse>;
                subaccountOrderMetadata(request: import("./exchange/v1beta1/query").QuerySubaccountOrderMetadataRequest): Promise<import("./exchange/v1beta1/query").QuerySubaccountOrderMetadataResponse>;
                tradeRewardPoints(request: import("./exchange/v1beta1/query").QueryTradeRewardPointsRequest): Promise<import("./exchange/v1beta1/query").QueryTradeRewardPointsResponse>;
                pendingTradeRewardPoints(request: import("./exchange/v1beta1/query").QueryTradeRewardPointsRequest): Promise<import("./exchange/v1beta1/query").QueryTradeRewardPointsResponse>;
                tradeRewardCampaign(request?: import("./exchange/v1beta1/query").QueryTradeRewardCampaignRequest): Promise<import("./exchange/v1beta1/query").QueryTradeRewardCampaignResponse>;
                feeDiscountAccountInfo(request: import("./exchange/v1beta1/query").QueryFeeDiscountAccountInfoRequest): Promise<import("./exchange/v1beta1/query").QueryFeeDiscountAccountInfoResponse>;
                feeDiscountSchedule(request?: import("./exchange/v1beta1/query").QueryFeeDiscountScheduleRequest): Promise<import("./exchange/v1beta1/query").QueryFeeDiscountScheduleResponse>;
                balanceMismatches(request: import("./exchange/v1beta1/query").QueryBalanceMismatchesRequest): Promise<import("./exchange/v1beta1/query").QueryBalanceMismatchesResponse>;
                balanceWithBalanceHolds(request?: import("./exchange/v1beta1/query").QueryBalanceWithBalanceHoldsRequest): Promise<import("./exchange/v1beta1/query").QueryBalanceWithBalanceHoldsResponse>;
                feeDiscountTierStatistics(request?: import("./exchange/v1beta1/query").QueryFeeDiscountTierStatisticsRequest): Promise<import("./exchange/v1beta1/query").QueryFeeDiscountTierStatisticsResponse>;
                ninjaVaultInfos(request?: import("./exchange/v1beta1/query").NinjaVaultInfosRequest): Promise<import("./exchange/v1beta1/query").NinjaVaultInfosResponse>;
                queryMarketIDFromVault(request: import("./exchange/v1beta1/query").QueryMarketIDFromVaultRequest): Promise<import("./exchange/v1beta1/query").QueryMarketIDFromVaultResponse>;
                historicalTradeRecords(request: import("./exchange/v1beta1/query").QueryHistoricalTradeRecordsRequest): Promise<import("./exchange/v1beta1/query").QueryHistoricalTradeRecordsResponse>;
                isOptedOutOfRewards(request: import("./exchange/v1beta1/query").QueryIsOptedOutOfRewardsRequest): Promise<import("./exchange/v1beta1/query").QueryIsOptedOutOfRewardsResponse>;
                optedOutOfRewardsAccounts(request?: import("./exchange/v1beta1/query").QueryOptedOutOfRewardsAccountsRequest): Promise<import("./exchange/v1beta1/query").QueryOptedOutOfRewardsAccountsResponse>;
                marketVolatility(request: import("./exchange/v1beta1/query").QueryMarketVolatilityRequest): Promise<import("./exchange/v1beta1/query").QueryMarketVolatilityResponse>;
                binaryOptionsMarkets(request: import("./exchange/v1beta1/query").QueryBinaryMarketsRequest): Promise<import("./exchange/v1beta1/query").QueryBinaryMarketsResponse>;
                traderDerivativeConditionalOrders(request: import("./exchange/v1beta1/query").QueryTraderDerivativeConditionalOrdersRequest): Promise<import("./exchange/v1beta1/query").QueryTraderDerivativeConditionalOrdersResponse>;
            };
        };
        insurance: {
            v1beta1: {
                insuranceParams(request?: import("./insurance/v1beta1/query").QueryInsuranceParamsRequest): Promise<import("./insurance/v1beta1/query").QueryInsuranceParamsResponse>;
                insuranceFund(request: import("./insurance/v1beta1/query").QueryInsuranceFundRequest): Promise<import("./insurance/v1beta1/query").QueryInsuranceFundResponse>;
                insuranceFunds(request?: import("./insurance/v1beta1/query").QueryInsuranceFundsRequest): Promise<import("./insurance/v1beta1/query").QueryInsuranceFundsResponse>;
                estimatedRedemptions(request: import("./insurance/v1beta1/query").QueryEstimatedRedemptionsRequest): Promise<import("./insurance/v1beta1/query").QueryEstimatedRedemptionsResponse>;
                pendingRedemptions(request: import("./insurance/v1beta1/query").QueryPendingRedemptionsRequest): Promise<import("./insurance/v1beta1/query").QueryPendingRedemptionsResponse>;
                insuranceModuleState(request?: import("./insurance/v1beta1/query").QueryModuleStateRequest): Promise<import("./insurance/v1beta1/query").QueryModuleStateResponse>;
            };
        };
        ocr: {
            v1beta1: {
                params(request?: import("./ocr/v1beta1/query").QueryParamsRequest): Promise<import("./ocr/v1beta1/query").QueryParamsResponse>;
                feedConfig(request: import("./ocr/v1beta1/query").QueryFeedConfigRequest): Promise<import("./ocr/v1beta1/query").QueryFeedConfigResponse>;
                feedConfigInfo(request: import("./ocr/v1beta1/query").QueryFeedConfigInfoRequest): Promise<import("./ocr/v1beta1/query").QueryFeedConfigInfoResponse>;
                latestRound(request: import("./ocr/v1beta1/query").QueryLatestRoundRequest): Promise<import("./ocr/v1beta1/query").QueryLatestRoundResponse>;
                latestTransmissionDetails(request: import("./ocr/v1beta1/query").QueryLatestTransmissionDetailsRequest): Promise<import("./ocr/v1beta1/query").QueryLatestTransmissionDetailsResponse>;
                owedAmount(request: import("./ocr/v1beta1/query").QueryOwedAmountRequest): Promise<import("./ocr/v1beta1/query").QueryOwedAmountResponse>;
                ocrModuleState(request?: import("./ocr/v1beta1/query").QueryModuleStateRequest): Promise<import("./ocr/v1beta1/query").QueryModuleStateResponse>;
            };
        };
        oracle: {
            v1beta1: {
                params(request?: import("./oracle/v1beta1/query").QueryParamsRequest): Promise<import("./oracle/v1beta1/query").QueryParamsResponse>;
                bandRelayers(request?: import("./oracle/v1beta1/query").QueryBandRelayersRequest): Promise<import("./oracle/v1beta1/query").QueryBandRelayersResponse>;
                bandPriceStates(request?: import("./oracle/v1beta1/query").QueryBandPriceStatesRequest): Promise<import("./oracle/v1beta1/query").QueryBandPriceStatesResponse>;
                bandIBCPriceStates(request?: import("./oracle/v1beta1/query").QueryBandIBCPriceStatesRequest): Promise<import("./oracle/v1beta1/query").QueryBandIBCPriceStatesResponse>;
                priceFeedPriceStates(request?: import("./oracle/v1beta1/query").QueryPriceFeedPriceStatesRequest): Promise<import("./oracle/v1beta1/query").QueryPriceFeedPriceStatesResponse>;
                coinbasePriceStates(request?: import("./oracle/v1beta1/query").QueryCoinbasePriceStatesRequest): Promise<import("./oracle/v1beta1/query").QueryCoinbasePriceStatesResponse>;
                providerPriceState(request: import("./oracle/v1beta1/query").QueryProviderPriceStateRequest): Promise<import("./oracle/v1beta1/query").QueryProviderPriceStateResponse>;
                oracleModuleState(request?: import("./oracle/v1beta1/query").QueryModuleStateRequest): Promise<import("./oracle/v1beta1/query").QueryModuleStateResponse>;
                historicalPriceRecords(request: import("./oracle/v1beta1/query").QueryHistoricalPriceRecordsRequest): Promise<import("./oracle/v1beta1/query").QueryHistoricalPriceRecordsResponse>;
                oracleVolatility(request: import("./oracle/v1beta1/query").QueryOracleVolatilityRequest): Promise<import("./oracle/v1beta1/query").QueryOracleVolatilityResponse>;
                oracleProvidersInfo(request?: import("./oracle/v1beta1/query").QueryOracleProvidersInfoRequest): Promise<import("./oracle/v1beta1/query").QueryOracleProvidersInfoResponse>;
                oracleProviderPrices(request: import("./oracle/v1beta1/query").QueryOracleProviderPricesRequest): Promise<import("./oracle/v1beta1/query").QueryOracleProviderPricesResponse>;
            };
        };
        peggy: {
            v1: {
                params(request?: import("./peggy/v1/query").QueryParamsRequest): Promise<import("./peggy/v1/query").QueryParamsResponse>;
                currentValset(request?: import("./peggy/v1/query").QueryCurrentValsetRequest): Promise<import("./peggy/v1/query").QueryCurrentValsetResponse>;
                valsetRequest(request: import("./peggy/v1/query").QueryValsetRequestRequest): Promise<import("./peggy/v1/query").QueryValsetRequestResponse>;
                valsetConfirm(request: import("./peggy/v1/query").QueryValsetConfirmRequest): Promise<import("./peggy/v1/query").QueryValsetConfirmResponse>;
                valsetConfirmsByNonce(request: import("./peggy/v1/query").QueryValsetConfirmsByNonceRequest): Promise<import("./peggy/v1/query").QueryValsetConfirmsByNonceResponse>;
                lastValsetRequests(request?: import("./peggy/v1/query").QueryLastValsetRequestsRequest): Promise<import("./peggy/v1/query").QueryLastValsetRequestsResponse>;
                lastPendingValsetRequestByAddr(request: import("./peggy/v1/query").QueryLastPendingValsetRequestByAddrRequest): Promise<import("./peggy/v1/query").QueryLastPendingValsetRequestByAddrResponse>;
                lastEventByAddr(request: import("./peggy/v1/query").QueryLastEventByAddrRequest): Promise<import("./peggy/v1/query").QueryLastEventByAddrResponse>;
                getPendingSendToEth(request: import("./peggy/v1/query").QueryPendingSendToEth): Promise<import("./peggy/v1/query").QueryPendingSendToEthResponse>;
                batchFees(request?: import("./peggy/v1/query").QueryBatchFeeRequest): Promise<import("./peggy/v1/query").QueryBatchFeeResponse>;
                outgoingTxBatches(request?: import("./peggy/v1/query").QueryOutgoingTxBatchesRequest): Promise<import("./peggy/v1/query").QueryOutgoingTxBatchesResponse>;
                lastPendingBatchRequestByAddr(request: import("./peggy/v1/query").QueryLastPendingBatchRequestByAddrRequest): Promise<import("./peggy/v1/query").QueryLastPendingBatchRequestByAddrResponse>;
                batchRequestByNonce(request: import("./peggy/v1/query").QueryBatchRequestByNonceRequest): Promise<import("./peggy/v1/query").QueryBatchRequestByNonceResponse>;
                batchConfirms(request: import("./peggy/v1/query").QueryBatchConfirmsRequest): Promise<import("./peggy/v1/query").QueryBatchConfirmsResponse>;
                eRC20ToDenom(request: import("./peggy/v1/query").QueryERC20ToDenomRequest): Promise<import("./peggy/v1/query").QueryERC20ToDenomResponse>;
                denomToERC20(request: import("./peggy/v1/query").QueryDenomToERC20Request): Promise<import("./peggy/v1/query").QueryDenomToERC20Response>;
                getDelegateKeyByValidator(request: import("./peggy/v1/query").QueryDelegateKeysByValidatorAddress): Promise<import("./peggy/v1/query").QueryDelegateKeysByValidatorAddressResponse>;
                getDelegateKeyByEth(request: import("./peggy/v1/query").QueryDelegateKeysByEthAddress): Promise<import("./peggy/v1/query").QueryDelegateKeysByEthAddressResponse>;
                getDelegateKeyByOrchestrator(request: import("./peggy/v1/query").QueryDelegateKeysByOrchestratorAddress): Promise<import("./peggy/v1/query").QueryDelegateKeysByOrchestratorAddressResponse>;
                peggyModuleState(request?: import("./peggy/v1/query").QueryModuleStateRequest): Promise<import("./peggy/v1/query").QueryModuleStateResponse>;
            };
        };
        wasmx: {
            v1: {
                wasmxParams(request?: import("./wasmx/v1/query").QueryWasmxParamsRequest): Promise<import("./wasmx/v1/query").QueryWasmxParamsResponse>;
                wasmxModuleState(request?: import("./wasmx/v1/query").QueryModuleStateRequest): Promise<import("./wasmx/v1/query").QueryModuleStateResponse>;
            };
        };
    };
}>;
