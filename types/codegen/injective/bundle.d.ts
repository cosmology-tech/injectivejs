import * as _135 from "./auction/v1beta1/auction";
import * as _136 from "./auction/v1beta1/genesis";
import * as _137 from "./auction/v1beta1/query";
import * as _138 from "./auction/v1beta1/tx";
import * as _139 from "./crypto/v1beta1/ethsecp256k1/keys";
import * as _140 from "./exchange/v1beta1/authz";
import * as _141 from "./exchange/v1beta1/events";
import * as _142 from "./exchange/v1beta1/exchange";
import * as _143 from "./exchange/v1beta1/genesis";
import * as _144 from "./exchange/v1beta1/query";
import * as _145 from "./exchange/v1beta1/tx";
import * as _146 from "./insurance/v1beta1/genesis";
import * as _147 from "./insurance/v1beta1/insurance";
import * as _148 from "./insurance/v1beta1/query";
import * as _149 from "./insurance/v1beta1/tx";
import * as _150 from "./ocr/v1beta1/genesis";
import * as _151 from "./ocr/v1beta1/ocr";
import * as _152 from "./ocr/v1beta1/query";
import * as _153 from "./ocr/v1beta1/tx";
import * as _154 from "./oracle/v1beta1/events";
import * as _155 from "./oracle/v1beta1/genesis";
import * as _156 from "./oracle/v1beta1/oracle";
import * as _157 from "./oracle/v1beta1/proposal";
import * as _158 from "./oracle/v1beta1/query";
import * as _159 from "./oracle/v1beta1/tx";
import * as _160 from "./peggy/v1/attestation";
import * as _161 from "./peggy/v1/batch";
import * as _162 from "./peggy/v1/ethereum_signer";
import * as _163 from "./peggy/v1/events";
import * as _164 from "./peggy/v1/genesis";
import * as _165 from "./peggy/v1/msgs";
import * as _166 from "./peggy/v1/pool";
import * as _167 from "./peggy/v1/proposal";
import * as _168 from "./peggy/v1/query";
import * as _169 from "./peggy/v1/types";
import * as _170 from "./types/v1beta1/account";
import * as _171 from "./types/v1beta1/tx_ext";
import * as _172 from "./types/v1beta1/tx_response";
import * as _173 from "./wasmx/v1/genesis";
import * as _174 from "./wasmx/v1/query";
import * as _176 from "./wasmx/v1/wasmx";
import * as _303 from "./auction/v1beta1/query.lcd";
import * as _304 from "./exchange/v1beta1/query.lcd";
import * as _305 from "./insurance/v1beta1/query.lcd";
import * as _306 from "./ocr/v1beta1/query.lcd";
import * as _307 from "./oracle/v1beta1/query.lcd";
import * as _308 from "./peggy/v1/query.lcd";
import * as _309 from "./wasmx/v1/query.lcd";
import * as _310 from "./auction/v1beta1/query.rpc.query";
import * as _311 from "./exchange/v1beta1/query.rpc.query";
import * as _312 from "./insurance/v1beta1/query.rpc.query";
import * as _313 from "./ocr/v1beta1/query.rpc.query";
import * as _314 from "./oracle/v1beta1/query.rpc.query";
import * as _315 from "./peggy/v1/query.rpc.query";
import * as _316 from "./wasmx/v1/query.rpc.query";
import * as _317 from "./auction/v1beta1/tx.rpc.msg";
import * as _318 from "./exchange/v1beta1/tx.rpc.msg";
import * as _319 from "./insurance/v1beta1/tx.rpc.msg";
import * as _320 from "./ocr/v1beta1/tx.rpc.msg";
import * as _321 from "./oracle/v1beta1/tx.rpc.msg";
import * as _322 from "./peggy/v1/msgs.rpc.msg";
export declare namespace injective {
    namespace auction {
        const v1beta1: {
            MsgClientImpl: typeof _317.MsgClientImpl;
            QueryClientImpl: typeof _310.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                auctionParams(request?: _137.QueryAuctionParamsRequest): Promise<_137.QueryAuctionParamsResponse>;
                currentAuctionBasket(request?: _137.QueryCurrentAuctionBasketRequest): Promise<_137.QueryCurrentAuctionBasketResponse>;
                auctionModuleState(request?: _137.QueryModuleStateRequest): Promise<_137.QueryModuleStateResponse>;
            };
            LCDQueryClient: typeof _303.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    bid(value: _138.MsgBid): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    bid(value: _138.MsgBid): {
                        typeUrl: string;
                        value: _138.MsgBid;
                    };
                };
                fromPartial: {
                    bid(value: _138.MsgBid): {
                        typeUrl: string;
                        value: _138.MsgBid;
                    };
                };
            };
            AminoConverter: {
                "/injective.auction.v1beta1.MsgBid": {
                    aminoType: string;
                    toAmino: ({ sender, bidAmount, round }: _138.MsgBid) => {
                        sender: string;
                        bid_amount: {
                            denom: string;
                            amount: string;
                        };
                        round: string;
                    };
                    fromAmino: ({ sender, bid_amount, round }: {
                        sender: string;
                        bid_amount: {
                            denom: string;
                            amount: string;
                        };
                        round: string;
                    }) => _138.MsgBid;
                };
            };
            MsgBid: {
                encode(message: _138.MsgBid, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.MsgBid;
                fromPartial(object: {
                    sender?: string;
                    bidAmount?: {
                        denom?: string;
                        amount?: string;
                    };
                    round?: any;
                }): _138.MsgBid;
            };
            MsgBidResponse: {
                encode(_: _138.MsgBidResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.MsgBidResponse;
                fromPartial(_: {}): _138.MsgBidResponse;
            };
            QueryAuctionParamsRequest: {
                encode(_: _137.QueryAuctionParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.QueryAuctionParamsRequest;
                fromPartial(_: {}): _137.QueryAuctionParamsRequest;
            };
            QueryAuctionParamsResponse: {
                encode(message: _137.QueryAuctionParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.QueryAuctionParamsResponse;
                fromPartial(object: {
                    params?: {
                        auctionPeriod?: any;
                        minNextBidIncrementRate?: string;
                    };
                }): _137.QueryAuctionParamsResponse;
            };
            QueryCurrentAuctionBasketRequest: {
                encode(_: _137.QueryCurrentAuctionBasketRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.QueryCurrentAuctionBasketRequest;
                fromPartial(_: {}): _137.QueryCurrentAuctionBasketRequest;
            };
            QueryCurrentAuctionBasketResponse: {
                encode(message: _137.QueryCurrentAuctionBasketResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.QueryCurrentAuctionBasketResponse;
                fromPartial(object: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    auctionRound?: any;
                    auctionClosingTime?: any;
                    highestBidder?: string;
                    highestBidAmount?: string;
                }): _137.QueryCurrentAuctionBasketResponse;
            };
            QueryModuleStateRequest: {
                encode(_: _137.QueryModuleStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.QueryModuleStateRequest;
                fromPartial(_: {}): _137.QueryModuleStateRequest;
            };
            QueryModuleStateResponse: {
                encode(message: _137.QueryModuleStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.QueryModuleStateResponse;
                fromPartial(object: {
                    state?: {
                        params?: {
                            auctionPeriod?: any;
                            minNextBidIncrementRate?: string;
                        };
                        auctionRound?: any;
                        highestBid?: {
                            bidder?: string;
                            amount?: string;
                        };
                        auctionEndingTimestamp?: any;
                    };
                }): _137.QueryModuleStateResponse;
            };
            GenesisState: {
                encode(message: _136.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.GenesisState;
                fromPartial(object: {
                    params?: {
                        auctionPeriod?: any;
                        minNextBidIncrementRate?: string;
                    };
                    auctionRound?: any;
                    highestBid?: {
                        bidder?: string;
                        amount?: string;
                    };
                    auctionEndingTimestamp?: any;
                }): _136.GenesisState;
            };
            Params: {
                encode(message: _135.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.Params;
                fromPartial(object: {
                    auctionPeriod?: any;
                    minNextBidIncrementRate?: string;
                }): _135.Params;
            };
            Bid: {
                encode(message: _135.Bid, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.Bid;
                fromPartial(object: {
                    bidder?: string;
                    amount?: string;
                }): _135.Bid;
            };
            EventBid: {
                encode(message: _135.EventBid, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.EventBid;
                fromPartial(object: {
                    bidder?: string;
                    amount?: string;
                    round?: any;
                }): _135.EventBid;
            };
            EventAuctionResult: {
                encode(message: _135.EventAuctionResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.EventAuctionResult;
                fromPartial(object: {
                    winner?: string;
                    amount?: string;
                    round?: any;
                }): _135.EventAuctionResult;
            };
            EventAuctionStart: {
                encode(message: _135.EventAuctionStart, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.EventAuctionStart;
                fromPartial(object: {
                    round?: any;
                    endingTimestamp?: any;
                    newBasket?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _135.EventAuctionStart;
            };
        };
    }
    namespace crypto {
        namespace v1beta1 {
            const ethsecp256k1: {
                PubKey: {
                    encode(message: _139.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.PubKey;
                    fromPartial(object: {
                        key?: Uint8Array;
                    }): _139.PubKey;
                };
                PrivKey: {
                    encode(message: _139.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.PrivKey;
                    fromPartial(object: {
                        key?: Uint8Array;
                    }): _139.PrivKey;
                };
            };
        }
    }
    namespace exchange {
        const v1beta1: {
            MsgClientImpl: typeof _318.MsgClientImpl;
            QueryClientImpl: typeof _311.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                queryExchangeParams(request?: _144.QueryExchangeParamsRequest): Promise<_144.QueryExchangeParamsResponse>;
                subaccountDeposits(request: _144.QuerySubaccountDepositsRequest): Promise<_144.QuerySubaccountDepositsResponse>;
                subaccountDeposit(request: _144.QuerySubaccountDepositRequest): Promise<_144.QuerySubaccountDepositResponse>;
                exchangeBalances(request?: _144.QueryExchangeBalancesRequest): Promise<_144.QueryExchangeBalancesResponse>;
                spotMarkets(request: _144.QuerySpotMarketsRequest): Promise<_144.QuerySpotMarketsResponse>;
                spotMarket(request: _144.QuerySpotMarketRequest): Promise<_144.QuerySpotMarketResponse>;
                spotOrderbook(request: _144.QuerySpotOrderbookRequest): Promise<_144.QuerySpotOrderbookResponse>;
                traderSpotOrders(request: _144.QueryTraderSpotOrdersRequest): Promise<_144.QueryTraderSpotOrdersResponse>;
                spotOrdersByHashes(request: _144.QuerySpotOrdersByHashesRequest): Promise<_144.QuerySpotOrdersByHashesResponse>;
                subaccountOrders(request: _144.QuerySubaccountOrdersRequest): Promise<_144.QuerySubaccountOrdersResponse>;
                traderSpotTransientOrders(request: _144.QueryTraderSpotOrdersRequest): Promise<_144.QueryTraderSpotOrdersResponse>;
                spotMidPriceAndTOB(request: _144.QuerySpotMidPriceAndTOBRequest): Promise<_144.QuerySpotMidPriceAndTOBResponse>;
                derivativeMidPriceAndTOB(request: _144.QueryDerivativeMidPriceAndTOBRequest): Promise<_144.QueryDerivativeMidPriceAndTOBResponse>;
                derivativeOrderbook(request: _144.QueryDerivativeOrderbookRequest): Promise<_144.QueryDerivativeOrderbookResponse>;
                traderDerivativeOrders(request: _144.QueryTraderDerivativeOrdersRequest): Promise<_144.QueryTraderDerivativeOrdersResponse>;
                derivativeOrdersByHashes(request: _144.QueryDerivativeOrdersByHashesRequest): Promise<_144.QueryDerivativeOrdersByHashesResponse>;
                traderDerivativeTransientOrders(request: _144.QueryTraderDerivativeOrdersRequest): Promise<_144.QueryTraderDerivativeOrdersResponse>;
                derivativeMarkets(request: _144.QueryDerivativeMarketsRequest): Promise<_144.QueryDerivativeMarketsResponse>;
                derivativeMarket(request: _144.QueryDerivativeMarketRequest): Promise<_144.QueryDerivativeMarketResponse>;
                derivativeMarketAddress(request: _144.QueryDerivativeMarketAddressRequest): Promise<_144.QueryDerivativeMarketAddressResponse>;
                subaccountTradeNonce(request: _144.QuerySubaccountTradeNonceRequest): Promise<_144.QuerySubaccountTradeNonceResponse>;
                exchangeModuleState(request?: _144.QueryModuleStateRequest): Promise<_144.QueryModuleStateResponse>;
                positions(request?: _144.QueryPositionsRequest): Promise<_144.QueryPositionsResponse>;
                subaccountPositions(request: _144.QuerySubaccountPositionsRequest): Promise<_144.QuerySubaccountPositionsResponse>;
                subaccountPositionInMarket(request: _144.QuerySubaccountPositionInMarketRequest): Promise<_144.QuerySubaccountPositionInMarketResponse>;
                subaccountEffectivePositionInMarket(request: _144.QuerySubaccountEffectivePositionInMarketRequest): Promise<_144.QuerySubaccountEffectivePositionInMarketResponse>;
                perpetualMarketInfo(request: _144.QueryPerpetualMarketInfoRequest): Promise<_144.QueryPerpetualMarketInfoResponse>;
                expiryFuturesMarketInfo(request: _144.QueryExpiryFuturesMarketInfoRequest): Promise<_144.QueryExpiryFuturesMarketInfoResponse>;
                perpetualMarketFunding(request: _144.QueryPerpetualMarketFundingRequest): Promise<_144.QueryPerpetualMarketFundingResponse>;
                subaccountOrderMetadata(request: _144.QuerySubaccountOrderMetadataRequest): Promise<_144.QuerySubaccountOrderMetadataResponse>;
                tradeRewardPoints(request: _144.QueryTradeRewardPointsRequest): Promise<_144.QueryTradeRewardPointsResponse>;
                pendingTradeRewardPoints(request: _144.QueryTradeRewardPointsRequest): Promise<_144.QueryTradeRewardPointsResponse>;
                tradeRewardCampaign(request?: _144.QueryTradeRewardCampaignRequest): Promise<_144.QueryTradeRewardCampaignResponse>;
                feeDiscountAccountInfo(request: _144.QueryFeeDiscountAccountInfoRequest): Promise<_144.QueryFeeDiscountAccountInfoResponse>;
                feeDiscountSchedule(request?: _144.QueryFeeDiscountScheduleRequest): Promise<_144.QueryFeeDiscountScheduleResponse>;
                balanceMismatches(request: _144.QueryBalanceMismatchesRequest): Promise<_144.QueryBalanceMismatchesResponse>;
                balanceWithBalanceHolds(request?: _144.QueryBalanceWithBalanceHoldsRequest): Promise<_144.QueryBalanceWithBalanceHoldsResponse>;
                feeDiscountTierStatistics(request?: _144.QueryFeeDiscountTierStatisticsRequest): Promise<_144.QueryFeeDiscountTierStatisticsResponse>;
                ninjaVaultInfos(request?: _144.NinjaVaultInfosRequest): Promise<_144.NinjaVaultInfosResponse>;
                queryMarketIDFromVault(request: _144.QueryMarketIDFromVaultRequest): Promise<_144.QueryMarketIDFromVaultResponse>;
                historicalTradeRecords(request: _144.QueryHistoricalTradeRecordsRequest): Promise<_144.QueryHistoricalTradeRecordsResponse>;
                isOptedOutOfRewards(request: _144.QueryIsOptedOutOfRewardsRequest): Promise<_144.QueryIsOptedOutOfRewardsResponse>;
                optedOutOfRewardsAccounts(request?: _144.QueryOptedOutOfRewardsAccountsRequest): Promise<_144.QueryOptedOutOfRewardsAccountsResponse>;
                marketVolatility(request: _144.QueryMarketVolatilityRequest): Promise<_144.QueryMarketVolatilityResponse>;
                binaryOptionsMarkets(request: _144.QueryBinaryMarketsRequest): Promise<_144.QueryBinaryMarketsResponse>;
                traderDerivativeConditionalOrders(request: _144.QueryTraderDerivativeConditionalOrdersRequest): Promise<_144.QueryTraderDerivativeConditionalOrdersResponse>;
            };
            LCDQueryClient: typeof _304.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    deposit(value: _145.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdraw(value: _145.MsgWithdraw): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    instantSpotMarketLaunch(value: _145.MsgInstantSpotMarketLaunch): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    instantPerpetualMarketLaunch(value: _145.MsgInstantPerpetualMarketLaunch): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    instantExpiryFuturesMarketLaunch(value: _145.MsgInstantExpiryFuturesMarketLaunch): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createSpotLimitOrder(value: _145.MsgCreateSpotLimitOrder): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    batchCreateSpotLimitOrders(value: _145.MsgBatchCreateSpotLimitOrders): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createSpotMarketOrder(value: _145.MsgCreateSpotMarketOrder): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelSpotOrder(value: _145.MsgCancelSpotOrder): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    batchCancelSpotOrders(value: _145.MsgBatchCancelSpotOrders): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    batchUpdateOrders(value: _145.MsgBatchUpdateOrders): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _145.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createDerivativeLimitOrder(value: _145.MsgCreateDerivativeLimitOrder): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    batchCreateDerivativeLimitOrders(value: _145.MsgBatchCreateDerivativeLimitOrders): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createDerivativeMarketOrder(value: _145.MsgCreateDerivativeMarketOrder): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelDerivativeOrder(value: _145.MsgCancelDerivativeOrder): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    batchCancelDerivativeOrders(value: _145.MsgBatchCancelDerivativeOrders): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    instantBinaryOptionsMarketLaunch(value: _145.MsgInstantBinaryOptionsMarketLaunch): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createBinaryOptionsLimitOrder(value: _145.MsgCreateBinaryOptionsLimitOrder): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createBinaryOptionsMarketOrder(value: _145.MsgCreateBinaryOptionsMarketOrder): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelBinaryOptionsOrder(value: _145.MsgCancelBinaryOptionsOrder): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    batchCancelBinaryOptionsOrders(value: _145.MsgBatchCancelBinaryOptionsOrders): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    subaccountTransfer(value: _145.MsgSubaccountTransfer): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    externalTransfer(value: _145.MsgExternalTransfer): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    liquidatePosition(value: _145.MsgLiquidatePosition): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    increasePositionMargin(value: _145.MsgIncreasePositionMargin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    rewardsOptOut(value: _145.MsgRewardsOptOut): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    adminUpdateBinaryOptionsMarket(value: _145.MsgAdminUpdateBinaryOptionsMarket): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    deposit(value: _145.MsgDeposit): {
                        typeUrl: string;
                        value: _145.MsgDeposit;
                    };
                    withdraw(value: _145.MsgWithdraw): {
                        typeUrl: string;
                        value: _145.MsgWithdraw;
                    };
                    instantSpotMarketLaunch(value: _145.MsgInstantSpotMarketLaunch): {
                        typeUrl: string;
                        value: _145.MsgInstantSpotMarketLaunch;
                    };
                    instantPerpetualMarketLaunch(value: _145.MsgInstantPerpetualMarketLaunch): {
                        typeUrl: string;
                        value: _145.MsgInstantPerpetualMarketLaunch;
                    };
                    instantExpiryFuturesMarketLaunch(value: _145.MsgInstantExpiryFuturesMarketLaunch): {
                        typeUrl: string;
                        value: _145.MsgInstantExpiryFuturesMarketLaunch;
                    };
                    createSpotLimitOrder(value: _145.MsgCreateSpotLimitOrder): {
                        typeUrl: string;
                        value: _145.MsgCreateSpotLimitOrder;
                    };
                    batchCreateSpotLimitOrders(value: _145.MsgBatchCreateSpotLimitOrders): {
                        typeUrl: string;
                        value: _145.MsgBatchCreateSpotLimitOrders;
                    };
                    createSpotMarketOrder(value: _145.MsgCreateSpotMarketOrder): {
                        typeUrl: string;
                        value: _145.MsgCreateSpotMarketOrder;
                    };
                    cancelSpotOrder(value: _145.MsgCancelSpotOrder): {
                        typeUrl: string;
                        value: _145.MsgCancelSpotOrder;
                    };
                    batchCancelSpotOrders(value: _145.MsgBatchCancelSpotOrders): {
                        typeUrl: string;
                        value: _145.MsgBatchCancelSpotOrders;
                    };
                    batchUpdateOrders(value: _145.MsgBatchUpdateOrders): {
                        typeUrl: string;
                        value: _145.MsgBatchUpdateOrders;
                    };
                    exec(value: _145.MsgExec): {
                        typeUrl: string;
                        value: _145.MsgExec;
                    };
                    createDerivativeLimitOrder(value: _145.MsgCreateDerivativeLimitOrder): {
                        typeUrl: string;
                        value: _145.MsgCreateDerivativeLimitOrder;
                    };
                    batchCreateDerivativeLimitOrders(value: _145.MsgBatchCreateDerivativeLimitOrders): {
                        typeUrl: string;
                        value: _145.MsgBatchCreateDerivativeLimitOrders;
                    };
                    createDerivativeMarketOrder(value: _145.MsgCreateDerivativeMarketOrder): {
                        typeUrl: string;
                        value: _145.MsgCreateDerivativeMarketOrder;
                    };
                    cancelDerivativeOrder(value: _145.MsgCancelDerivativeOrder): {
                        typeUrl: string;
                        value: _145.MsgCancelDerivativeOrder;
                    };
                    batchCancelDerivativeOrders(value: _145.MsgBatchCancelDerivativeOrders): {
                        typeUrl: string;
                        value: _145.MsgBatchCancelDerivativeOrders;
                    };
                    instantBinaryOptionsMarketLaunch(value: _145.MsgInstantBinaryOptionsMarketLaunch): {
                        typeUrl: string;
                        value: _145.MsgInstantBinaryOptionsMarketLaunch;
                    };
                    createBinaryOptionsLimitOrder(value: _145.MsgCreateBinaryOptionsLimitOrder): {
                        typeUrl: string;
                        value: _145.MsgCreateBinaryOptionsLimitOrder;
                    };
                    createBinaryOptionsMarketOrder(value: _145.MsgCreateBinaryOptionsMarketOrder): {
                        typeUrl: string;
                        value: _145.MsgCreateBinaryOptionsMarketOrder;
                    };
                    cancelBinaryOptionsOrder(value: _145.MsgCancelBinaryOptionsOrder): {
                        typeUrl: string;
                        value: _145.MsgCancelBinaryOptionsOrder;
                    };
                    batchCancelBinaryOptionsOrders(value: _145.MsgBatchCancelBinaryOptionsOrders): {
                        typeUrl: string;
                        value: _145.MsgBatchCancelBinaryOptionsOrders;
                    };
                    subaccountTransfer(value: _145.MsgSubaccountTransfer): {
                        typeUrl: string;
                        value: _145.MsgSubaccountTransfer;
                    };
                    externalTransfer(value: _145.MsgExternalTransfer): {
                        typeUrl: string;
                        value: _145.MsgExternalTransfer;
                    };
                    liquidatePosition(value: _145.MsgLiquidatePosition): {
                        typeUrl: string;
                        value: _145.MsgLiquidatePosition;
                    };
                    increasePositionMargin(value: _145.MsgIncreasePositionMargin): {
                        typeUrl: string;
                        value: _145.MsgIncreasePositionMargin;
                    };
                    rewardsOptOut(value: _145.MsgRewardsOptOut): {
                        typeUrl: string;
                        value: _145.MsgRewardsOptOut;
                    };
                    adminUpdateBinaryOptionsMarket(value: _145.MsgAdminUpdateBinaryOptionsMarket): {
                        typeUrl: string;
                        value: _145.MsgAdminUpdateBinaryOptionsMarket;
                    };
                };
                fromPartial: {
                    deposit(value: _145.MsgDeposit): {
                        typeUrl: string;
                        value: _145.MsgDeposit;
                    };
                    withdraw(value: _145.MsgWithdraw): {
                        typeUrl: string;
                        value: _145.MsgWithdraw;
                    };
                    instantSpotMarketLaunch(value: _145.MsgInstantSpotMarketLaunch): {
                        typeUrl: string;
                        value: _145.MsgInstantSpotMarketLaunch;
                    };
                    instantPerpetualMarketLaunch(value: _145.MsgInstantPerpetualMarketLaunch): {
                        typeUrl: string;
                        value: _145.MsgInstantPerpetualMarketLaunch;
                    };
                    instantExpiryFuturesMarketLaunch(value: _145.MsgInstantExpiryFuturesMarketLaunch): {
                        typeUrl: string;
                        value: _145.MsgInstantExpiryFuturesMarketLaunch;
                    };
                    createSpotLimitOrder(value: _145.MsgCreateSpotLimitOrder): {
                        typeUrl: string;
                        value: _145.MsgCreateSpotLimitOrder;
                    };
                    batchCreateSpotLimitOrders(value: _145.MsgBatchCreateSpotLimitOrders): {
                        typeUrl: string;
                        value: _145.MsgBatchCreateSpotLimitOrders;
                    };
                    createSpotMarketOrder(value: _145.MsgCreateSpotMarketOrder): {
                        typeUrl: string;
                        value: _145.MsgCreateSpotMarketOrder;
                    };
                    cancelSpotOrder(value: _145.MsgCancelSpotOrder): {
                        typeUrl: string;
                        value: _145.MsgCancelSpotOrder;
                    };
                    batchCancelSpotOrders(value: _145.MsgBatchCancelSpotOrders): {
                        typeUrl: string;
                        value: _145.MsgBatchCancelSpotOrders;
                    };
                    batchUpdateOrders(value: _145.MsgBatchUpdateOrders): {
                        typeUrl: string;
                        value: _145.MsgBatchUpdateOrders;
                    };
                    exec(value: _145.MsgExec): {
                        typeUrl: string;
                        value: _145.MsgExec;
                    };
                    createDerivativeLimitOrder(value: _145.MsgCreateDerivativeLimitOrder): {
                        typeUrl: string;
                        value: _145.MsgCreateDerivativeLimitOrder;
                    };
                    batchCreateDerivativeLimitOrders(value: _145.MsgBatchCreateDerivativeLimitOrders): {
                        typeUrl: string;
                        value: _145.MsgBatchCreateDerivativeLimitOrders;
                    };
                    createDerivativeMarketOrder(value: _145.MsgCreateDerivativeMarketOrder): {
                        typeUrl: string;
                        value: _145.MsgCreateDerivativeMarketOrder;
                    };
                    cancelDerivativeOrder(value: _145.MsgCancelDerivativeOrder): {
                        typeUrl: string;
                        value: _145.MsgCancelDerivativeOrder;
                    };
                    batchCancelDerivativeOrders(value: _145.MsgBatchCancelDerivativeOrders): {
                        typeUrl: string;
                        value: _145.MsgBatchCancelDerivativeOrders;
                    };
                    instantBinaryOptionsMarketLaunch(value: _145.MsgInstantBinaryOptionsMarketLaunch): {
                        typeUrl: string;
                        value: _145.MsgInstantBinaryOptionsMarketLaunch;
                    };
                    createBinaryOptionsLimitOrder(value: _145.MsgCreateBinaryOptionsLimitOrder): {
                        typeUrl: string;
                        value: _145.MsgCreateBinaryOptionsLimitOrder;
                    };
                    createBinaryOptionsMarketOrder(value: _145.MsgCreateBinaryOptionsMarketOrder): {
                        typeUrl: string;
                        value: _145.MsgCreateBinaryOptionsMarketOrder;
                    };
                    cancelBinaryOptionsOrder(value: _145.MsgCancelBinaryOptionsOrder): {
                        typeUrl: string;
                        value: _145.MsgCancelBinaryOptionsOrder;
                    };
                    batchCancelBinaryOptionsOrders(value: _145.MsgBatchCancelBinaryOptionsOrders): {
                        typeUrl: string;
                        value: _145.MsgBatchCancelBinaryOptionsOrders;
                    };
                    subaccountTransfer(value: _145.MsgSubaccountTransfer): {
                        typeUrl: string;
                        value: _145.MsgSubaccountTransfer;
                    };
                    externalTransfer(value: _145.MsgExternalTransfer): {
                        typeUrl: string;
                        value: _145.MsgExternalTransfer;
                    };
                    liquidatePosition(value: _145.MsgLiquidatePosition): {
                        typeUrl: string;
                        value: _145.MsgLiquidatePosition;
                    };
                    increasePositionMargin(value: _145.MsgIncreasePositionMargin): {
                        typeUrl: string;
                        value: _145.MsgIncreasePositionMargin;
                    };
                    rewardsOptOut(value: _145.MsgRewardsOptOut): {
                        typeUrl: string;
                        value: _145.MsgRewardsOptOut;
                    };
                    adminUpdateBinaryOptionsMarket(value: _145.MsgAdminUpdateBinaryOptionsMarket): {
                        typeUrl: string;
                        value: _145.MsgAdminUpdateBinaryOptionsMarket;
                    };
                };
            };
            AminoConverter: {
                "/injective.exchange.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: ({ sender, subaccountId, amount }: _145.MsgDeposit) => {
                        sender: string;
                        subaccount_id: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ sender, subaccount_id, amount }: {
                        sender: string;
                        subaccount_id: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _145.MsgDeposit;
                };
                "/injective.exchange.v1beta1.MsgWithdraw": {
                    aminoType: string;
                    toAmino: ({ sender, subaccountId, amount }: _145.MsgWithdraw) => {
                        sender: string;
                        subaccount_id: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ sender, subaccount_id, amount }: {
                        sender: string;
                        subaccount_id: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _145.MsgWithdraw;
                };
                "/injective.exchange.v1beta1.MsgInstantSpotMarketLaunch": {
                    aminoType: string;
                    toAmino: ({ sender, ticker, baseDenom, quoteDenom, minPriceTickSize, minQuantityTickSize }: _145.MsgInstantSpotMarketLaunch) => {
                        sender: string;
                        ticker: string;
                        base_denom: string;
                        quote_denom: string;
                        min_price_tick_size: string;
                        min_quantity_tick_size: string;
                    };
                    fromAmino: ({ sender, ticker, base_denom, quote_denom, min_price_tick_size, min_quantity_tick_size }: {
                        sender: string;
                        ticker: string;
                        base_denom: string;
                        quote_denom: string;
                        min_price_tick_size: string;
                        min_quantity_tick_size: string;
                    }) => _145.MsgInstantSpotMarketLaunch;
                };
                "/injective.exchange.v1beta1.MsgInstantPerpetualMarketLaunch": {
                    aminoType: string;
                    toAmino: ({ sender, ticker, quoteDenom, oracleBase, oracleQuote, oracleScaleFactor, oracleType, makerFeeRate, takerFeeRate, initialMarginRatio, maintenanceMarginRatio, minPriceTickSize, minQuantityTickSize }: _145.MsgInstantPerpetualMarketLaunch) => {
                        sender: string;
                        ticker: string;
                        quote_denom: string;
                        oracle_base: string;
                        oracle_quote: string;
                        oracle_scale_factor: number;
                        oracle_type: number;
                        maker_fee_rate: string;
                        taker_fee_rate: string;
                        initial_margin_ratio: string;
                        maintenance_margin_ratio: string;
                        min_price_tick_size: string;
                        min_quantity_tick_size: string;
                    };
                    fromAmino: ({ sender, ticker, quote_denom, oracle_base, oracle_quote, oracle_scale_factor, oracle_type, maker_fee_rate, taker_fee_rate, initial_margin_ratio, maintenance_margin_ratio, min_price_tick_size, min_quantity_tick_size }: {
                        sender: string;
                        ticker: string;
                        quote_denom: string;
                        oracle_base: string;
                        oracle_quote: string;
                        oracle_scale_factor: number;
                        oracle_type: number;
                        maker_fee_rate: string;
                        taker_fee_rate: string;
                        initial_margin_ratio: string;
                        maintenance_margin_ratio: string;
                        min_price_tick_size: string;
                        min_quantity_tick_size: string;
                    }) => _145.MsgInstantPerpetualMarketLaunch;
                };
                "/injective.exchange.v1beta1.MsgInstantExpiryFuturesMarketLaunch": {
                    aminoType: string;
                    toAmino: ({ sender, ticker, quoteDenom, oracleBase, oracleQuote, oracleType, oracleScaleFactor, expiry, makerFeeRate, takerFeeRate, initialMarginRatio, maintenanceMarginRatio, minPriceTickSize, minQuantityTickSize }: _145.MsgInstantExpiryFuturesMarketLaunch) => {
                        sender: string;
                        ticker: string;
                        quote_denom: string;
                        oracle_base: string;
                        oracle_quote: string;
                        oracle_type: number;
                        oracle_scale_factor: number;
                        expiry: string;
                        maker_fee_rate: string;
                        taker_fee_rate: string;
                        initial_margin_ratio: string;
                        maintenance_margin_ratio: string;
                        min_price_tick_size: string;
                        min_quantity_tick_size: string;
                    };
                    fromAmino: ({ sender, ticker, quote_denom, oracle_base, oracle_quote, oracle_type, oracle_scale_factor, expiry, maker_fee_rate, taker_fee_rate, initial_margin_ratio, maintenance_margin_ratio, min_price_tick_size, min_quantity_tick_size }: {
                        sender: string;
                        ticker: string;
                        quote_denom: string;
                        oracle_base: string;
                        oracle_quote: string;
                        oracle_type: number;
                        oracle_scale_factor: number;
                        expiry: string;
                        maker_fee_rate: string;
                        taker_fee_rate: string;
                        initial_margin_ratio: string;
                        maintenance_margin_ratio: string;
                        min_price_tick_size: string;
                        min_quantity_tick_size: string;
                    }) => _145.MsgInstantExpiryFuturesMarketLaunch;
                };
                "/injective.exchange.v1beta1.MsgCreateSpotLimitOrder": {
                    aminoType: string;
                    toAmino: ({ sender, order }: _145.MsgCreateSpotLimitOrder) => {
                        sender: string;
                        order: {
                            market_id: string;
                            order_info: {
                                subaccount_id: string;
                                fee_recipient: string;
                                price: string;
                                quantity: string;
                            };
                            order_type: number;
                            trigger_price: string;
                        };
                    };
                    fromAmino: ({ sender, order }: {
                        sender: string;
                        order: {
                            market_id: string;
                            order_info: {
                                subaccount_id: string;
                                fee_recipient: string;
                                price: string;
                                quantity: string;
                            };
                            order_type: number;
                            trigger_price: string;
                        };
                    }) => _145.MsgCreateSpotLimitOrder;
                };
                "/injective.exchange.v1beta1.MsgBatchCreateSpotLimitOrders": {
                    aminoType: string;
                    toAmino: ({ sender, orders }: _145.MsgBatchCreateSpotLimitOrders) => {
                        sender: string;
                        orders: {
                            market_id: string;
                            order_info: {
                                subaccount_id: string;
                                fee_recipient: string;
                                price: string;
                                quantity: string;
                            };
                            order_type: number;
                            trigger_price: string;
                        }[];
                    };
                    fromAmino: ({ sender, orders }: {
                        sender: string;
                        orders: {
                            market_id: string;
                            order_info: {
                                subaccount_id: string;
                                fee_recipient: string;
                                price: string;
                                quantity: string;
                            };
                            order_type: number;
                            trigger_price: string;
                        }[];
                    }) => _145.MsgBatchCreateSpotLimitOrders;
                };
                "/injective.exchange.v1beta1.MsgCreateSpotMarketOrder": {
                    aminoType: string;
                    toAmino: ({ sender, order }: _145.MsgCreateSpotMarketOrder) => {
                        sender: string;
                        order: {
                            market_id: string;
                            order_info: {
                                subaccount_id: string;
                                fee_recipient: string;
                                price: string;
                                quantity: string;
                            };
                            order_type: number;
                            trigger_price: string;
                        };
                    };
                    fromAmino: ({ sender, order }: {
                        sender: string;
                        order: {
                            market_id: string;
                            order_info: {
                                subaccount_id: string;
                                fee_recipient: string;
                                price: string;
                                quantity: string;
                            };
                            order_type: number;
                            trigger_price: string;
                        };
                    }) => _145.MsgCreateSpotMarketOrder;
                };
                "/injective.exchange.v1beta1.MsgCancelSpotOrder": {
                    aminoType: string;
                    toAmino: ({ sender, marketId, subaccountId, orderHash }: _145.MsgCancelSpotOrder) => {
                        sender: string;
                        market_id: string;
                        subaccount_id: string;
                        order_hash: string;
                    };
                    fromAmino: ({ sender, market_id, subaccount_id, order_hash }: {
                        sender: string;
                        market_id: string;
                        subaccount_id: string;
                        order_hash: string;
                    }) => _145.MsgCancelSpotOrder;
                };
                "/injective.exchange.v1beta1.MsgBatchCancelSpotOrders": {
                    aminoType: string;
                    toAmino: ({ sender, data }: _145.MsgBatchCancelSpotOrders) => {
                        sender: string;
                        data: {
                            market_id: string;
                            subaccount_id: string;
                            order_hash: string;
                            order_mask: number;
                        }[];
                    };
                    fromAmino: ({ sender, data }: {
                        sender: string;
                        data: {
                            market_id: string;
                            subaccount_id: string;
                            order_hash: string;
                            order_mask: number;
                        }[];
                    }) => _145.MsgBatchCancelSpotOrders;
                };
                "/injective.exchange.v1beta1.MsgBatchUpdateOrders": {
                    aminoType: string;
                    toAmino: ({ sender, subaccountId, spotMarketIdsToCancelAll, derivativeMarketIdsToCancelAll, spotOrdersToCancel, derivativeOrdersToCancel, spotOrdersToCreate, derivativeOrdersToCreate, binaryOptionsOrdersToCancel, binaryOptionsMarketIdsToCancelAll, binaryOptionsOrdersToCreate }: _145.MsgBatchUpdateOrders) => {
                        sender: string;
                        subaccount_id: string;
                        spot_market_ids_to_cancel_all: string[];
                        derivative_market_ids_to_cancel_all: string[];
                        spot_orders_to_cancel: {
                            market_id: string;
                            subaccount_id: string;
                            order_hash: string;
                            order_mask: number;
                        }[];
                        derivative_orders_to_cancel: {
                            market_id: string;
                            subaccount_id: string;
                            order_hash: string;
                            order_mask: number;
                        }[];
                        spot_orders_to_create: {
                            market_id: string;
                            order_info: {
                                subaccount_id: string;
                                fee_recipient: string;
                                price: string;
                                quantity: string;
                            };
                            order_type: number;
                            trigger_price: string;
                        }[];
                        derivative_orders_to_create: {
                            market_id: string;
                            order_info: {
                                subaccount_id: string;
                                fee_recipient: string;
                                price: string;
                                quantity: string;
                            };
                            order_type: number;
                            margin: string;
                            trigger_price: string;
                        }[];
                        binary_options_orders_to_cancel: {
                            market_id: string;
                            subaccount_id: string;
                            order_hash: string;
                            order_mask: number;
                        }[];
                        binary_options_market_ids_to_cancel_all: string[];
                        binary_options_orders_to_create: {
                            market_id: string;
                            order_info: {
                                subaccount_id: string;
                                fee_recipient: string;
                                price: string;
                                quantity: string;
                            };
                            order_type: number;
                            margin: string;
                            trigger_price: string;
                        }[];
                    };
                    fromAmino: ({ sender, subaccount_id, spot_market_ids_to_cancel_all, derivative_market_ids_to_cancel_all, spot_orders_to_cancel, derivative_orders_to_cancel, spot_orders_to_create, derivative_orders_to_create, binary_options_orders_to_cancel, binary_options_market_ids_to_cancel_all, binary_options_orders_to_create }: {
                        sender: string;
                        subaccount_id: string;
                        spot_market_ids_to_cancel_all: string[];
                        derivative_market_ids_to_cancel_all: string[];
                        spot_orders_to_cancel: {
                            market_id: string;
                            subaccount_id: string;
                            order_hash: string;
                            order_mask: number;
                        }[];
                        derivative_orders_to_cancel: {
                            market_id: string;
                            subaccount_id: string;
                            order_hash: string;
                            order_mask: number;
                        }[];
                        spot_orders_to_create: {
                            market_id: string;
                            order_info: {
                                subaccount_id: string;
                                fee_recipient: string;
                                price: string;
                                quantity: string;
                            };
                            order_type: number;
                            trigger_price: string;
                        }[];
                        derivative_orders_to_create: {
                            market_id: string;
                            order_info: {
                                subaccount_id: string;
                                fee_recipient: string;
                                price: string;
                                quantity: string;
                            };
                            order_type: number;
                            margin: string;
                            trigger_price: string;
                        }[];
                        binary_options_orders_to_cancel: {
                            market_id: string;
                            subaccount_id: string;
                            order_hash: string;
                            order_mask: number;
                        }[];
                        binary_options_market_ids_to_cancel_all: string[];
                        binary_options_orders_to_create: {
                            market_id: string;
                            order_info: {
                                subaccount_id: string;
                                fee_recipient: string;
                                price: string;
                                quantity: string;
                            };
                            order_type: number;
                            margin: string;
                            trigger_price: string;
                        }[];
                    }) => _145.MsgBatchUpdateOrders;
                };
                "/injective.exchange.v1beta1.MsgExec": {
                    aminoType: string;
                    toAmino: ({ sender, bankFunds, depositsSubaccountId, depositFunds, contractAddress, data }: _145.MsgExec) => {
                        sender: string;
                        bank_funds: {
                            denom: string;
                            amount: string;
                        }[];
                        deposits_subaccount_id: string;
                        deposit_funds: {
                            denom: string;
                            amount: string;
                        }[];
                        contract_address: string;
                        data: string;
                    };
                    fromAmino: ({ sender, bank_funds, deposits_subaccount_id, deposit_funds, contract_address, data }: {
                        sender: string;
                        bank_funds: {
                            denom: string;
                            amount: string;
                        }[];
                        deposits_subaccount_id: string;
                        deposit_funds: {
                            denom: string;
                            amount: string;
                        }[];
                        contract_address: string;
                        data: string;
                    }) => _145.MsgExec;
                };
                "/injective.exchange.v1beta1.MsgCreateDerivativeLimitOrder": {
                    aminoType: string;
                    toAmino: ({ sender, order }: _145.MsgCreateDerivativeLimitOrder) => {
                        sender: string;
                        order: {
                            market_id: string;
                            order_info: {
                                subaccount_id: string;
                                fee_recipient: string;
                                price: string;
                                quantity: string;
                            };
                            order_type: number;
                            margin: string;
                            trigger_price: string;
                        };
                    };
                    fromAmino: ({ sender, order }: {
                        sender: string;
                        order: {
                            market_id: string;
                            order_info: {
                                subaccount_id: string;
                                fee_recipient: string;
                                price: string;
                                quantity: string;
                            };
                            order_type: number;
                            margin: string;
                            trigger_price: string;
                        };
                    }) => _145.MsgCreateDerivativeLimitOrder;
                };
                "/injective.exchange.v1beta1.MsgBatchCreateDerivativeLimitOrders": {
                    aminoType: string;
                    toAmino: ({ sender, orders }: _145.MsgBatchCreateDerivativeLimitOrders) => {
                        sender: string;
                        orders: {
                            market_id: string;
                            order_info: {
                                subaccount_id: string;
                                fee_recipient: string;
                                price: string;
                                quantity: string;
                            };
                            order_type: number;
                            margin: string;
                            trigger_price: string;
                        }[];
                    };
                    fromAmino: ({ sender, orders }: {
                        sender: string;
                        orders: {
                            market_id: string;
                            order_info: {
                                subaccount_id: string;
                                fee_recipient: string;
                                price: string;
                                quantity: string;
                            };
                            order_type: number;
                            margin: string;
                            trigger_price: string;
                        }[];
                    }) => _145.MsgBatchCreateDerivativeLimitOrders;
                };
                "/injective.exchange.v1beta1.MsgCreateDerivativeMarketOrder": {
                    aminoType: string;
                    toAmino: ({ sender, order }: _145.MsgCreateDerivativeMarketOrder) => {
                        sender: string;
                        order: {
                            market_id: string;
                            order_info: {
                                subaccount_id: string;
                                fee_recipient: string;
                                price: string;
                                quantity: string;
                            };
                            order_type: number;
                            margin: string;
                            trigger_price: string;
                        };
                    };
                    fromAmino: ({ sender, order }: {
                        sender: string;
                        order: {
                            market_id: string;
                            order_info: {
                                subaccount_id: string;
                                fee_recipient: string;
                                price: string;
                                quantity: string;
                            };
                            order_type: number;
                            margin: string;
                            trigger_price: string;
                        };
                    }) => _145.MsgCreateDerivativeMarketOrder;
                };
                "/injective.exchange.v1beta1.MsgCancelDerivativeOrder": {
                    aminoType: string;
                    toAmino: ({ sender, marketId, subaccountId, orderHash, orderMask }: _145.MsgCancelDerivativeOrder) => {
                        sender: string;
                        market_id: string;
                        subaccount_id: string;
                        order_hash: string;
                        order_mask: number;
                    };
                    fromAmino: ({ sender, market_id, subaccount_id, order_hash, order_mask }: {
                        sender: string;
                        market_id: string;
                        subaccount_id: string;
                        order_hash: string;
                        order_mask: number;
                    }) => _145.MsgCancelDerivativeOrder;
                };
                "/injective.exchange.v1beta1.MsgBatchCancelDerivativeOrders": {
                    aminoType: string;
                    toAmino: ({ sender, data }: _145.MsgBatchCancelDerivativeOrders) => {
                        sender: string;
                        data: {
                            market_id: string;
                            subaccount_id: string;
                            order_hash: string;
                            order_mask: number;
                        }[];
                    };
                    fromAmino: ({ sender, data }: {
                        sender: string;
                        data: {
                            market_id: string;
                            subaccount_id: string;
                            order_hash: string;
                            order_mask: number;
                        }[];
                    }) => _145.MsgBatchCancelDerivativeOrders;
                };
                "/injective.exchange.v1beta1.MsgInstantBinaryOptionsMarketLaunch": {
                    aminoType: string;
                    toAmino: ({ sender, ticker, oracleSymbol, oracleProvider, oracleType, oracleScaleFactor, makerFeeRate, takerFeeRate, expirationTimestamp, settlementTimestamp, admin, quoteDenom, minPriceTickSize, minQuantityTickSize }: _145.MsgInstantBinaryOptionsMarketLaunch) => {
                        sender: string;
                        ticker: string;
                        oracle_symbol: string;
                        oracle_provider: string;
                        oracle_type: number;
                        oracle_scale_factor: number;
                        maker_fee_rate: string;
                        taker_fee_rate: string;
                        expiration_timestamp: string;
                        settlement_timestamp: string;
                        admin: string;
                        quote_denom: string;
                        min_price_tick_size: string;
                        min_quantity_tick_size: string;
                    };
                    fromAmino: ({ sender, ticker, oracle_symbol, oracle_provider, oracle_type, oracle_scale_factor, maker_fee_rate, taker_fee_rate, expiration_timestamp, settlement_timestamp, admin, quote_denom, min_price_tick_size, min_quantity_tick_size }: {
                        sender: string;
                        ticker: string;
                        oracle_symbol: string;
                        oracle_provider: string;
                        oracle_type: number;
                        oracle_scale_factor: number;
                        maker_fee_rate: string;
                        taker_fee_rate: string;
                        expiration_timestamp: string;
                        settlement_timestamp: string;
                        admin: string;
                        quote_denom: string;
                        min_price_tick_size: string;
                        min_quantity_tick_size: string;
                    }) => _145.MsgInstantBinaryOptionsMarketLaunch;
                };
                "/injective.exchange.v1beta1.MsgCreateBinaryOptionsLimitOrder": {
                    aminoType: string;
                    toAmino: ({ sender, order }: _145.MsgCreateBinaryOptionsLimitOrder) => {
                        sender: string;
                        order: {
                            market_id: string;
                            order_info: {
                                subaccount_id: string;
                                fee_recipient: string;
                                price: string;
                                quantity: string;
                            };
                            order_type: number;
                            margin: string;
                            trigger_price: string;
                        };
                    };
                    fromAmino: ({ sender, order }: {
                        sender: string;
                        order: {
                            market_id: string;
                            order_info: {
                                subaccount_id: string;
                                fee_recipient: string;
                                price: string;
                                quantity: string;
                            };
                            order_type: number;
                            margin: string;
                            trigger_price: string;
                        };
                    }) => _145.MsgCreateBinaryOptionsLimitOrder;
                };
                "/injective.exchange.v1beta1.MsgCreateBinaryOptionsMarketOrder": {
                    aminoType: string;
                    toAmino: ({ sender, order }: _145.MsgCreateBinaryOptionsMarketOrder) => {
                        sender: string;
                        order: {
                            market_id: string;
                            order_info: {
                                subaccount_id: string;
                                fee_recipient: string;
                                price: string;
                                quantity: string;
                            };
                            order_type: number;
                            margin: string;
                            trigger_price: string;
                        };
                    };
                    fromAmino: ({ sender, order }: {
                        sender: string;
                        order: {
                            market_id: string;
                            order_info: {
                                subaccount_id: string;
                                fee_recipient: string;
                                price: string;
                                quantity: string;
                            };
                            order_type: number;
                            margin: string;
                            trigger_price: string;
                        };
                    }) => _145.MsgCreateBinaryOptionsMarketOrder;
                };
                "/injective.exchange.v1beta1.MsgCancelBinaryOptionsOrder": {
                    aminoType: string;
                    toAmino: ({ sender, marketId, subaccountId, orderHash, orderMask }: _145.MsgCancelBinaryOptionsOrder) => {
                        sender: string;
                        market_id: string;
                        subaccount_id: string;
                        order_hash: string;
                        order_mask: number;
                    };
                    fromAmino: ({ sender, market_id, subaccount_id, order_hash, order_mask }: {
                        sender: string;
                        market_id: string;
                        subaccount_id: string;
                        order_hash: string;
                        order_mask: number;
                    }) => _145.MsgCancelBinaryOptionsOrder;
                };
                "/injective.exchange.v1beta1.MsgBatchCancelBinaryOptionsOrders": {
                    aminoType: string;
                    toAmino: ({ sender, data }: _145.MsgBatchCancelBinaryOptionsOrders) => {
                        sender: string;
                        data: {
                            market_id: string;
                            subaccount_id: string;
                            order_hash: string;
                            order_mask: number;
                        }[];
                    };
                    fromAmino: ({ sender, data }: {
                        sender: string;
                        data: {
                            market_id: string;
                            subaccount_id: string;
                            order_hash: string;
                            order_mask: number;
                        }[];
                    }) => _145.MsgBatchCancelBinaryOptionsOrders;
                };
                "/injective.exchange.v1beta1.MsgSubaccountTransfer": {
                    aminoType: string;
                    toAmino: ({ sender, sourceSubaccountId, destinationSubaccountId, amount }: _145.MsgSubaccountTransfer) => {
                        sender: string;
                        source_subaccount_id: string;
                        destination_subaccount_id: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ sender, source_subaccount_id, destination_subaccount_id, amount }: {
                        sender: string;
                        source_subaccount_id: string;
                        destination_subaccount_id: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _145.MsgSubaccountTransfer;
                };
                "/injective.exchange.v1beta1.MsgExternalTransfer": {
                    aminoType: string;
                    toAmino: ({ sender, sourceSubaccountId, destinationSubaccountId, amount }: _145.MsgExternalTransfer) => {
                        sender: string;
                        source_subaccount_id: string;
                        destination_subaccount_id: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ sender, source_subaccount_id, destination_subaccount_id, amount }: {
                        sender: string;
                        source_subaccount_id: string;
                        destination_subaccount_id: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _145.MsgExternalTransfer;
                };
                "/injective.exchange.v1beta1.MsgLiquidatePosition": {
                    aminoType: string;
                    toAmino: ({ sender, subaccountId, marketId, order }: _145.MsgLiquidatePosition) => {
                        sender: string;
                        subaccount_id: string;
                        market_id: string;
                        order: {
                            market_id: string;
                            order_info: {
                                subaccount_id: string;
                                fee_recipient: string;
                                price: string;
                                quantity: string;
                            };
                            order_type: number;
                            margin: string;
                            trigger_price: string;
                        };
                    };
                    fromAmino: ({ sender, subaccount_id, market_id, order }: {
                        sender: string;
                        subaccount_id: string;
                        market_id: string;
                        order: {
                            market_id: string;
                            order_info: {
                                subaccount_id: string;
                                fee_recipient: string;
                                price: string;
                                quantity: string;
                            };
                            order_type: number;
                            margin: string;
                            trigger_price: string;
                        };
                    }) => _145.MsgLiquidatePosition;
                };
                "/injective.exchange.v1beta1.MsgIncreasePositionMargin": {
                    aminoType: string;
                    toAmino: ({ sender, sourceSubaccountId, destinationSubaccountId, marketId, amount }: _145.MsgIncreasePositionMargin) => {
                        sender: string;
                        source_subaccount_id: string;
                        destination_subaccount_id: string;
                        market_id: string;
                        amount: string;
                    };
                    fromAmino: ({ sender, source_subaccount_id, destination_subaccount_id, market_id, amount }: {
                        sender: string;
                        source_subaccount_id: string;
                        destination_subaccount_id: string;
                        market_id: string;
                        amount: string;
                    }) => _145.MsgIncreasePositionMargin;
                };
                "/injective.exchange.v1beta1.MsgRewardsOptOut": {
                    aminoType: string;
                    toAmino: ({ sender }: _145.MsgRewardsOptOut) => {
                        sender: string;
                    };
                    fromAmino: ({ sender }: {
                        sender: string;
                    }) => _145.MsgRewardsOptOut;
                };
                "/injective.exchange.v1beta1.MsgAdminUpdateBinaryOptionsMarket": {
                    aminoType: string;
                    toAmino: ({ sender, marketId, settlementPrice, expirationTimestamp, settlementTimestamp, status }: _145.MsgAdminUpdateBinaryOptionsMarket) => {
                        sender: string;
                        market_id: string;
                        settlement_price: string;
                        expiration_timestamp: string;
                        settlement_timestamp: string;
                        status: number;
                    };
                    fromAmino: ({ sender, market_id, settlement_price, expiration_timestamp, settlement_timestamp, status }: {
                        sender: string;
                        market_id: string;
                        settlement_price: string;
                        expiration_timestamp: string;
                        settlement_timestamp: string;
                        status: number;
                    }) => _145.MsgAdminUpdateBinaryOptionsMarket;
                };
            };
            exchangeTypeFromJSON(object: any): _145.ExchangeType;
            exchangeTypeToJSON(object: _145.ExchangeType): string;
            ExchangeType: typeof _145.ExchangeType;
            ExchangeTypeSDKType: typeof _145.ExchangeTypeSDKType;
            MsgDeposit: {
                encode(message: _145.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.MsgDeposit;
                fromPartial(object: {
                    sender?: string;
                    subaccountId?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _145.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _145.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.MsgDepositResponse;
                fromPartial(_: {}): _145.MsgDepositResponse;
            };
            MsgWithdraw: {
                encode(message: _145.MsgWithdraw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.MsgWithdraw;
                fromPartial(object: {
                    sender?: string;
                    subaccountId?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _145.MsgWithdraw;
            };
            MsgWithdrawResponse: {
                encode(_: _145.MsgWithdrawResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.MsgWithdrawResponse;
                fromPartial(_: {}): _145.MsgWithdrawResponse;
            };
            MsgCreateSpotLimitOrder: {
                encode(message: _145.MsgCreateSpotLimitOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.MsgCreateSpotLimitOrder;
                fromPartial(object: {
                    sender?: string;
                    order?: {
                        marketId?: string;
                        orderInfo?: {
                            subaccountId?: string;
                            feeRecipient?: string;
                            price?: string;
                            quantity?: string;
                        };
                        orderType?: _142.OrderType;
                        triggerPrice?: string;
                    };
                }): _145.MsgCreateSpotLimitOrder;
            };
            MsgCreateSpotLimitOrderResponse: {
                encode(message: _145.MsgCreateSpotLimitOrderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.MsgCreateSpotLimitOrderResponse;
                fromPartial(object: {
                    orderHash?: string;
                }): _145.MsgCreateSpotLimitOrderResponse;
            };
            MsgBatchCreateSpotLimitOrders: {
                encode(message: _145.MsgBatchCreateSpotLimitOrders, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.MsgBatchCreateSpotLimitOrders;
                fromPartial(object: {
                    sender?: string;
                    orders?: {
                        marketId?: string;
                        orderInfo?: {
                            subaccountId?: string;
                            feeRecipient?: string;
                            price?: string;
                            quantity?: string;
                        };
                        orderType?: _142.OrderType;
                        triggerPrice?: string;
                    }[];
                }): _145.MsgBatchCreateSpotLimitOrders;
            };
            MsgBatchCreateSpotLimitOrdersResponse: {
                encode(message: _145.MsgBatchCreateSpotLimitOrdersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.MsgBatchCreateSpotLimitOrdersResponse;
                fromPartial(object: {
                    orderHashes?: string[];
                }): _145.MsgBatchCreateSpotLimitOrdersResponse;
            };
            MsgInstantSpotMarketLaunch: {
                encode(message: _145.MsgInstantSpotMarketLaunch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.MsgInstantSpotMarketLaunch;
                fromPartial(object: {
                    sender?: string;
                    ticker?: string;
                    baseDenom?: string;
                    quoteDenom?: string;
                    minPriceTickSize?: string;
                    minQuantityTickSize?: string;
                }): _145.MsgInstantSpotMarketLaunch;
            };
            MsgInstantSpotMarketLaunchResponse: {
                encode(_: _145.MsgInstantSpotMarketLaunchResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.MsgInstantSpotMarketLaunchResponse;
                fromPartial(_: {}): _145.MsgInstantSpotMarketLaunchResponse;
            };
            MsgInstantPerpetualMarketLaunch: {
                encode(message: _145.MsgInstantPerpetualMarketLaunch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.MsgInstantPerpetualMarketLaunch;
                fromPartial(object: {
                    sender?: string;
                    ticker?: string;
                    quoteDenom?: string;
                    oracleBase?: string;
                    oracleQuote?: string;
                    oracleScaleFactor?: number;
                    oracleType?: _156.OracleType;
                    makerFeeRate?: string;
                    takerFeeRate?: string;
                    initialMarginRatio?: string;
                    maintenanceMarginRatio?: string;
                    minPriceTickSize?: string;
                    minQuantityTickSize?: string;
                }): _145.MsgInstantPerpetualMarketLaunch;
            };
            MsgInstantPerpetualMarketLaunchResponse: {
                encode(_: _145.MsgInstantPerpetualMarketLaunchResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.MsgInstantPerpetualMarketLaunchResponse;
                fromPartial(_: {}): _145.MsgInstantPerpetualMarketLaunchResponse;
            };
            MsgInstantBinaryOptionsMarketLaunch: {
                encode(message: _145.MsgInstantBinaryOptionsMarketLaunch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.MsgInstantBinaryOptionsMarketLaunch;
                fromPartial(object: {
                    sender?: string;
                    ticker?: string;
                    oracleSymbol?: string;
                    oracleProvider?: string;
                    oracleType?: _156.OracleType;
                    oracleScaleFactor?: number;
                    makerFeeRate?: string;
                    takerFeeRate?: string;
                    expirationTimestamp?: any;
                    settlementTimestamp?: any;
                    admin?: string;
                    quoteDenom?: string;
                    minPriceTickSize?: string;
                    minQuantityTickSize?: string;
                }): _145.MsgInstantBinaryOptionsMarketLaunch;
            };
            MsgInstantBinaryOptionsMarketLaunchResponse: {
                encode(_: _145.MsgInstantBinaryOptionsMarketLaunchResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.MsgInstantBinaryOptionsMarketLaunchResponse;
                fromPartial(_: {}): _145.MsgInstantBinaryOptionsMarketLaunchResponse;
            };
            MsgInstantExpiryFuturesMarketLaunch: {
                encode(message: _145.MsgInstantExpiryFuturesMarketLaunch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.MsgInstantExpiryFuturesMarketLaunch;
                fromPartial(object: {
                    sender?: string;
                    ticker?: string;
                    quoteDenom?: string;
                    oracleBase?: string;
                    oracleQuote?: string;
                    oracleType?: _156.OracleType;
                    oracleScaleFactor?: number;
                    expiry?: any;
                    makerFeeRate?: string;
                    takerFeeRate?: string;
                    initialMarginRatio?: string;
                    maintenanceMarginRatio?: string;
                    minPriceTickSize?: string;
                    minQuantityTickSize?: string;
                }): _145.MsgInstantExpiryFuturesMarketLaunch;
            };
            MsgInstantExpiryFuturesMarketLaunchResponse: {
                encode(_: _145.MsgInstantExpiryFuturesMarketLaunchResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.MsgInstantExpiryFuturesMarketLaunchResponse;
                fromPartial(_: {}): _145.MsgInstantExpiryFuturesMarketLaunchResponse;
            };
            MsgCreateSpotMarketOrder: {
                encode(message: _145.MsgCreateSpotMarketOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.MsgCreateSpotMarketOrder;
                fromPartial(object: {
                    sender?: string;
                    order?: {
                        marketId?: string;
                        orderInfo?: {
                            subaccountId?: string;
                            feeRecipient?: string;
                            price?: string;
                            quantity?: string;
                        };
                        orderType?: _142.OrderType;
                        triggerPrice?: string;
                    };
                }): _145.MsgCreateSpotMarketOrder;
            };
            MsgCreateSpotMarketOrderResponse: {
                encode(message: _145.MsgCreateSpotMarketOrderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.MsgCreateSpotMarketOrderResponse;
                fromPartial(object: {
                    orderHash?: string;
                }): _145.MsgCreateSpotMarketOrderResponse;
            };
            MsgCreateDerivativeLimitOrder: {
                encode(message: _145.MsgCreateDerivativeLimitOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.MsgCreateDerivativeLimitOrder;
                fromPartial(object: {
                    sender?: string;
                    order?: {
                        marketId?: string;
                        orderInfo?: {
                            subaccountId?: string;
                            feeRecipient?: string;
                            price?: string;
                            quantity?: string;
                        };
                        orderType?: _142.OrderType;
                        margin?: string;
                        triggerPrice?: string;
                    };
                }): _145.MsgCreateDerivativeLimitOrder;
            };
            MsgCreateDerivativeLimitOrderResponse: {
                encode(message: _145.MsgCreateDerivativeLimitOrderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.MsgCreateDerivativeLimitOrderResponse;
                fromPartial(object: {
                    orderHash?: string;
                }): _145.MsgCreateDerivativeLimitOrderResponse;
            };
            MsgCreateBinaryOptionsLimitOrder: {
                encode(message: _145.MsgCreateBinaryOptionsLimitOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.MsgCreateBinaryOptionsLimitOrder;
                fromPartial(object: {
                    sender?: string;
                    order?: {
                        marketId?: string;
                        orderInfo?: {
                            subaccountId?: string;
                            feeRecipient?: string;
                            price?: string;
                            quantity?: string;
                        };
                        orderType?: _142.OrderType;
                        margin?: string;
                        triggerPrice?: string;
                    };
                }): _145.MsgCreateBinaryOptionsLimitOrder;
            };
            MsgCreateBinaryOptionsLimitOrderResponse: {
                encode(message: _145.MsgCreateBinaryOptionsLimitOrderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.MsgCreateBinaryOptionsLimitOrderResponse;
                fromPartial(object: {
                    orderHash?: string;
                }): _145.MsgCreateBinaryOptionsLimitOrderResponse;
            };
            MsgBatchCreateDerivativeLimitOrders: {
                encode(message: _145.MsgBatchCreateDerivativeLimitOrders, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.MsgBatchCreateDerivativeLimitOrders;
                fromPartial(object: {
                    sender?: string;
                    orders?: {
                        marketId?: string;
                        orderInfo?: {
                            subaccountId?: string;
                            feeRecipient?: string;
                            price?: string;
                            quantity?: string;
                        };
                        orderType?: _142.OrderType;
                        margin?: string;
                        triggerPrice?: string;
                    }[];
                }): _145.MsgBatchCreateDerivativeLimitOrders;
            };
            MsgBatchCreateDerivativeLimitOrdersResponse: {
                encode(message: _145.MsgBatchCreateDerivativeLimitOrdersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.MsgBatchCreateDerivativeLimitOrdersResponse;
                fromPartial(object: {
                    orderHashes?: string[];
                }): _145.MsgBatchCreateDerivativeLimitOrdersResponse;
            };
            MsgCancelSpotOrder: {
                encode(message: _145.MsgCancelSpotOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.MsgCancelSpotOrder;
                fromPartial(object: {
                    sender?: string;
                    marketId?: string;
                    subaccountId?: string;
                    orderHash?: string;
                }): _145.MsgCancelSpotOrder;
            };
            MsgCancelSpotOrderResponse: {
                encode(_: _145.MsgCancelSpotOrderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.MsgCancelSpotOrderResponse;
                fromPartial(_: {}): _145.MsgCancelSpotOrderResponse;
            };
            MsgBatchCancelSpotOrders: {
                encode(message: _145.MsgBatchCancelSpotOrders, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.MsgBatchCancelSpotOrders;
                fromPartial(object: {
                    sender?: string;
                    data?: {
                        marketId?: string;
                        subaccountId?: string;
                        orderHash?: string;
                        orderMask?: number;
                    }[];
                }): _145.MsgBatchCancelSpotOrders;
            };
            MsgBatchCancelSpotOrdersResponse: {
                encode(message: _145.MsgBatchCancelSpotOrdersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.MsgBatchCancelSpotOrdersResponse;
                fromPartial(object: {
                    success?: boolean[];
                }): _145.MsgBatchCancelSpotOrdersResponse;
            };
            MsgBatchCancelBinaryOptionsOrders: {
                encode(message: _145.MsgBatchCancelBinaryOptionsOrders, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.MsgBatchCancelBinaryOptionsOrders;
                fromPartial(object: {
                    sender?: string;
                    data?: {
                        marketId?: string;
                        subaccountId?: string;
                        orderHash?: string;
                        orderMask?: number;
                    }[];
                }): _145.MsgBatchCancelBinaryOptionsOrders;
            };
            MsgBatchCancelBinaryOptionsOrdersResponse: {
                encode(message: _145.MsgBatchCancelBinaryOptionsOrdersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.MsgBatchCancelBinaryOptionsOrdersResponse;
                fromPartial(object: {
                    success?: boolean[];
                }): _145.MsgBatchCancelBinaryOptionsOrdersResponse;
            };
            MsgBatchUpdateOrders: {
                encode(message: _145.MsgBatchUpdateOrders, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.MsgBatchUpdateOrders;
                fromPartial(object: {
                    sender?: string;
                    subaccountId?: string;
                    spotMarketIdsToCancelAll?: string[];
                    derivativeMarketIdsToCancelAll?: string[];
                    spotOrdersToCancel?: {
                        marketId?: string;
                        subaccountId?: string;
                        orderHash?: string;
                        orderMask?: number;
                    }[];
                    derivativeOrdersToCancel?: {
                        marketId?: string;
                        subaccountId?: string;
                        orderHash?: string;
                        orderMask?: number;
                    }[];
                    spotOrdersToCreate?: {
                        marketId?: string;
                        orderInfo?: {
                            subaccountId?: string;
                            feeRecipient?: string;
                            price?: string;
                            quantity?: string;
                        };
                        orderType?: _142.OrderType;
                        triggerPrice?: string;
                    }[];
                    derivativeOrdersToCreate?: {
                        marketId?: string;
                        orderInfo?: {
                            subaccountId?: string;
                            feeRecipient?: string;
                            price?: string;
                            quantity?: string;
                        };
                        orderType?: _142.OrderType;
                        margin?: string;
                        triggerPrice?: string;
                    }[];
                    binaryOptionsOrdersToCancel?: {
                        marketId?: string;
                        subaccountId?: string;
                        orderHash?: string;
                        orderMask?: number;
                    }[];
                    binaryOptionsMarketIdsToCancelAll?: string[];
                    binaryOptionsOrdersToCreate?: {
                        marketId?: string;
                        orderInfo?: {
                            subaccountId?: string;
                            feeRecipient?: string;
                            price?: string;
                            quantity?: string;
                        };
                        orderType?: _142.OrderType;
                        margin?: string;
                        triggerPrice?: string;
                    }[];
                }): _145.MsgBatchUpdateOrders;
            };
            MsgBatchUpdateOrdersResponse: {
                encode(message: _145.MsgBatchUpdateOrdersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.MsgBatchUpdateOrdersResponse;
                fromPartial(object: {
                    spotCancelSuccess?: boolean[];
                    derivativeCancelSuccess?: boolean[];
                    spotOrderHashes?: string[];
                    derivativeOrderHashes?: string[];
                    binaryOptionsCancelSuccess?: boolean[];
                    binaryOptionsOrderHashes?: string[];
                }): _145.MsgBatchUpdateOrdersResponse;
            };
            MsgCreateDerivativeMarketOrder: {
                encode(message: _145.MsgCreateDerivativeMarketOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.MsgCreateDerivativeMarketOrder;
                fromPartial(object: {
                    sender?: string;
                    order?: {
                        marketId?: string;
                        orderInfo?: {
                            subaccountId?: string;
                            feeRecipient?: string;
                            price?: string;
                            quantity?: string;
                        };
                        orderType?: _142.OrderType;
                        margin?: string;
                        triggerPrice?: string;
                    };
                }): _145.MsgCreateDerivativeMarketOrder;
            };
            MsgCreateDerivativeMarketOrderResponse: {
                encode(message: _145.MsgCreateDerivativeMarketOrderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.MsgCreateDerivativeMarketOrderResponse;
                fromPartial(object: {
                    orderHash?: string;
                }): _145.MsgCreateDerivativeMarketOrderResponse;
            };
            MsgCreateBinaryOptionsMarketOrder: {
                encode(message: _145.MsgCreateBinaryOptionsMarketOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.MsgCreateBinaryOptionsMarketOrder;
                fromPartial(object: {
                    sender?: string;
                    order?: {
                        marketId?: string;
                        orderInfo?: {
                            subaccountId?: string;
                            feeRecipient?: string;
                            price?: string;
                            quantity?: string;
                        };
                        orderType?: _142.OrderType;
                        margin?: string;
                        triggerPrice?: string;
                    };
                }): _145.MsgCreateBinaryOptionsMarketOrder;
            };
            MsgCreateBinaryOptionsMarketOrderResponse: {
                encode(message: _145.MsgCreateBinaryOptionsMarketOrderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.MsgCreateBinaryOptionsMarketOrderResponse;
                fromPartial(object: {
                    orderHash?: string;
                }): _145.MsgCreateBinaryOptionsMarketOrderResponse;
            };
            MsgCancelDerivativeOrder: {
                encode(message: _145.MsgCancelDerivativeOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.MsgCancelDerivativeOrder;
                fromPartial(object: {
                    sender?: string;
                    marketId?: string;
                    subaccountId?: string;
                    orderHash?: string;
                    orderMask?: number;
                }): _145.MsgCancelDerivativeOrder;
            };
            MsgCancelDerivativeOrderResponse: {
                encode(_: _145.MsgCancelDerivativeOrderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.MsgCancelDerivativeOrderResponse;
                fromPartial(_: {}): _145.MsgCancelDerivativeOrderResponse;
            };
            MsgCancelBinaryOptionsOrder: {
                encode(message: _145.MsgCancelBinaryOptionsOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.MsgCancelBinaryOptionsOrder;
                fromPartial(object: {
                    sender?: string;
                    marketId?: string;
                    subaccountId?: string;
                    orderHash?: string;
                    orderMask?: number;
                }): _145.MsgCancelBinaryOptionsOrder;
            };
            MsgCancelBinaryOptionsOrderResponse: {
                encode(_: _145.MsgCancelBinaryOptionsOrderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.MsgCancelBinaryOptionsOrderResponse;
                fromPartial(_: {}): _145.MsgCancelBinaryOptionsOrderResponse;
            };
            OrderData: {
                encode(message: _145.OrderData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.OrderData;
                fromPartial(object: {
                    marketId?: string;
                    subaccountId?: string;
                    orderHash?: string;
                    orderMask?: number;
                }): _145.OrderData;
            };
            MsgBatchCancelDerivativeOrders: {
                encode(message: _145.MsgBatchCancelDerivativeOrders, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.MsgBatchCancelDerivativeOrders;
                fromPartial(object: {
                    sender?: string;
                    data?: {
                        marketId?: string;
                        subaccountId?: string;
                        orderHash?: string;
                        orderMask?: number;
                    }[];
                }): _145.MsgBatchCancelDerivativeOrders;
            };
            MsgBatchCancelDerivativeOrdersResponse: {
                encode(message: _145.MsgBatchCancelDerivativeOrdersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.MsgBatchCancelDerivativeOrdersResponse;
                fromPartial(object: {
                    success?: boolean[];
                }): _145.MsgBatchCancelDerivativeOrdersResponse;
            };
            MsgSubaccountTransfer: {
                encode(message: _145.MsgSubaccountTransfer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.MsgSubaccountTransfer;
                fromPartial(object: {
                    sender?: string;
                    sourceSubaccountId?: string;
                    destinationSubaccountId?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _145.MsgSubaccountTransfer;
            };
            MsgSubaccountTransferResponse: {
                encode(_: _145.MsgSubaccountTransferResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.MsgSubaccountTransferResponse;
                fromPartial(_: {}): _145.MsgSubaccountTransferResponse;
            };
            MsgExternalTransfer: {
                encode(message: _145.MsgExternalTransfer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.MsgExternalTransfer;
                fromPartial(object: {
                    sender?: string;
                    sourceSubaccountId?: string;
                    destinationSubaccountId?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _145.MsgExternalTransfer;
            };
            MsgExternalTransferResponse: {
                encode(_: _145.MsgExternalTransferResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.MsgExternalTransferResponse;
                fromPartial(_: {}): _145.MsgExternalTransferResponse;
            };
            MsgLiquidatePosition: {
                encode(message: _145.MsgLiquidatePosition, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.MsgLiquidatePosition;
                fromPartial(object: {
                    sender?: string;
                    subaccountId?: string;
                    marketId?: string;
                    order?: {
                        marketId?: string;
                        orderInfo?: {
                            subaccountId?: string;
                            feeRecipient?: string;
                            price?: string;
                            quantity?: string;
                        };
                        orderType?: _142.OrderType;
                        margin?: string;
                        triggerPrice?: string;
                    };
                }): _145.MsgLiquidatePosition;
            };
            MsgLiquidatePositionResponse: {
                encode(_: _145.MsgLiquidatePositionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.MsgLiquidatePositionResponse;
                fromPartial(_: {}): _145.MsgLiquidatePositionResponse;
            };
            MsgIncreasePositionMargin: {
                encode(message: _145.MsgIncreasePositionMargin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.MsgIncreasePositionMargin;
                fromPartial(object: {
                    sender?: string;
                    sourceSubaccountId?: string;
                    destinationSubaccountId?: string;
                    marketId?: string;
                    amount?: string;
                }): _145.MsgIncreasePositionMargin;
            };
            MsgIncreasePositionMarginResponse: {
                encode(_: _145.MsgIncreasePositionMarginResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.MsgIncreasePositionMarginResponse;
                fromPartial(_: {}): _145.MsgIncreasePositionMarginResponse;
            };
            MsgExec: {
                encode(message: _145.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.MsgExec;
                fromPartial(object: {
                    sender?: string;
                    bankFunds?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    depositsSubaccountId?: string;
                    depositFunds?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    contractAddress?: string;
                    data?: string;
                }): _145.MsgExec;
            };
            MsgExecResponse: {
                encode(_: _145.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.MsgExecResponse;
                fromPartial(_: {}): _145.MsgExecResponse;
            };
            SpotMarketParamUpdateProposal: {
                encode(message: _145.SpotMarketParamUpdateProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.SpotMarketParamUpdateProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    marketId?: string;
                    makerFeeRate?: string;
                    takerFeeRate?: string;
                    relayerFeeShareRate?: string;
                    minPriceTickSize?: string;
                    minQuantityTickSize?: string;
                    status?: _142.MarketStatus;
                }): _145.SpotMarketParamUpdateProposal;
            };
            ExchangeEnableProposal: {
                encode(message: _145.ExchangeEnableProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.ExchangeEnableProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    exchangeType?: _145.ExchangeType;
                }): _145.ExchangeEnableProposal;
            };
            BatchExchangeModificationProposal: {
                encode(message: _145.BatchExchangeModificationProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.BatchExchangeModificationProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    spotMarketParamUpdateProposals?: {
                        title?: string;
                        description?: string;
                        marketId?: string;
                        makerFeeRate?: string;
                        takerFeeRate?: string;
                        relayerFeeShareRate?: string;
                        minPriceTickSize?: string;
                        minQuantityTickSize?: string;
                        status?: _142.MarketStatus;
                    }[];
                    derivativeMarketParamUpdateProposals?: {
                        title?: string;
                        description?: string;
                        marketId?: string;
                        initialMarginRatio?: string;
                        maintenanceMarginRatio?: string;
                        makerFeeRate?: string;
                        takerFeeRate?: string;
                        relayerFeeShareRate?: string;
                        minPriceTickSize?: string;
                        minQuantityTickSize?: string;
                        HourlyInterestRate?: string;
                        HourlyFundingRateCap?: string;
                        status?: _142.MarketStatus;
                        oracleParams?: {
                            oracleBase?: string;
                            oracleQuote?: string;
                            oracleScaleFactor?: number;
                            oracleType?: _156.OracleType;
                        };
                    }[];
                    spotMarketLaunchProposals?: {
                        title?: string;
                        description?: string;
                        ticker?: string;
                        baseDenom?: string;
                        quoteDenom?: string;
                        minPriceTickSize?: string;
                        minQuantityTickSize?: string;
                        makerFeeRate?: string;
                        takerFeeRate?: string;
                    }[];
                    perpetualMarketLaunchProposals?: {
                        title?: string;
                        description?: string;
                        ticker?: string;
                        quoteDenom?: string;
                        oracleBase?: string;
                        oracleQuote?: string;
                        oracleScaleFactor?: number;
                        oracleType?: _156.OracleType;
                        initialMarginRatio?: string;
                        maintenanceMarginRatio?: string;
                        makerFeeRate?: string;
                        takerFeeRate?: string;
                        minPriceTickSize?: string;
                        minQuantityTickSize?: string;
                    }[];
                    expiryFuturesMarketLaunchProposals?: {
                        title?: string;
                        description?: string;
                        ticker?: string;
                        quoteDenom?: string;
                        oracleBase?: string;
                        oracleQuote?: string;
                        oracleScaleFactor?: number;
                        oracleType?: _156.OracleType;
                        expiry?: any;
                        initialMarginRatio?: string;
                        maintenanceMarginRatio?: string;
                        makerFeeRate?: string;
                        takerFeeRate?: string;
                        minPriceTickSize?: string;
                        minQuantityTickSize?: string;
                    }[];
                    tradingRewardCampaignUpdateProposal?: {
                        title?: string;
                        description?: string;
                        campaignInfo?: {
                            campaignDurationSeconds?: any;
                            quoteDenoms?: string[];
                            tradingRewardBoostInfo?: {
                                boostedSpotMarketIds?: string[];
                                spotMarketMultipliers?: {
                                    makerPointsMultiplier?: string;
                                    takerPointsMultiplier?: string;
                                }[];
                                boostedDerivativeMarketIds?: string[];
                                derivativeMarketMultipliers?: {
                                    makerPointsMultiplier?: string;
                                    takerPointsMultiplier?: string;
                                }[];
                            };
                            disqualifiedMarketIds?: string[];
                        };
                        campaignRewardPoolsAdditions?: {
                            startTimestamp?: any;
                            maxCampaignRewards?: {
                                denom?: string;
                                amount?: string;
                            }[];
                        }[];
                        campaignRewardPoolsUpdates?: {
                            startTimestamp?: any;
                            maxCampaignRewards?: {
                                denom?: string;
                                amount?: string;
                            }[];
                        }[];
                    };
                    binaryOptionsMarketLaunchProposals?: {
                        title?: string;
                        description?: string;
                        ticker?: string;
                        oracleSymbol?: string;
                        oracleProvider?: string;
                        oracleType?: _156.OracleType;
                        oracleScaleFactor?: number;
                        expirationTimestamp?: any;
                        settlementTimestamp?: any;
                        admin?: string;
                        quoteDenom?: string;
                        makerFeeRate?: string;
                        takerFeeRate?: string;
                        minPriceTickSize?: string;
                        minQuantityTickSize?: string;
                    }[];
                    binaryOptionsParamUpdateProposals?: {
                        title?: string;
                        description?: string;
                        marketId?: string;
                        makerFeeRate?: string;
                        takerFeeRate?: string;
                        relayerFeeShareRate?: string;
                        minPriceTickSize?: string;
                        minQuantityTickSize?: string;
                        expirationTimestamp?: any;
                        settlementTimestamp?: any;
                        settlementPrice?: string;
                        admin?: string;
                        status?: _142.MarketStatus;
                        oracleParams?: {
                            symbol?: string;
                            provider?: string;
                            oracleScaleFactor?: number;
                            oracleType?: _156.OracleType;
                        };
                    }[];
                    denomDecimalsUpdateProposal?: {
                        title?: string;
                        description?: string;
                        denomDecimals?: {
                            denom?: string;
                            decimals?: any;
                        }[];
                    };
                }): _145.BatchExchangeModificationProposal;
            };
            SpotMarketLaunchProposal: {
                encode(message: _145.SpotMarketLaunchProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.SpotMarketLaunchProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    ticker?: string;
                    baseDenom?: string;
                    quoteDenom?: string;
                    minPriceTickSize?: string;
                    minQuantityTickSize?: string;
                    makerFeeRate?: string;
                    takerFeeRate?: string;
                }): _145.SpotMarketLaunchProposal;
            };
            PerpetualMarketLaunchProposal: {
                encode(message: _145.PerpetualMarketLaunchProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.PerpetualMarketLaunchProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    ticker?: string;
                    quoteDenom?: string;
                    oracleBase?: string;
                    oracleQuote?: string;
                    oracleScaleFactor?: number;
                    oracleType?: _156.OracleType;
                    initialMarginRatio?: string;
                    maintenanceMarginRatio?: string;
                    makerFeeRate?: string;
                    takerFeeRate?: string;
                    minPriceTickSize?: string;
                    minQuantityTickSize?: string;
                }): _145.PerpetualMarketLaunchProposal;
            };
            BinaryOptionsMarketLaunchProposal: {
                encode(message: _145.BinaryOptionsMarketLaunchProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.BinaryOptionsMarketLaunchProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    ticker?: string;
                    oracleSymbol?: string;
                    oracleProvider?: string;
                    oracleType?: _156.OracleType;
                    oracleScaleFactor?: number;
                    expirationTimestamp?: any;
                    settlementTimestamp?: any;
                    admin?: string;
                    quoteDenom?: string;
                    makerFeeRate?: string;
                    takerFeeRate?: string;
                    minPriceTickSize?: string;
                    minQuantityTickSize?: string;
                }): _145.BinaryOptionsMarketLaunchProposal;
            };
            ExpiryFuturesMarketLaunchProposal: {
                encode(message: _145.ExpiryFuturesMarketLaunchProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.ExpiryFuturesMarketLaunchProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    ticker?: string;
                    quoteDenom?: string;
                    oracleBase?: string;
                    oracleQuote?: string;
                    oracleScaleFactor?: number;
                    oracleType?: _156.OracleType;
                    expiry?: any;
                    initialMarginRatio?: string;
                    maintenanceMarginRatio?: string;
                    makerFeeRate?: string;
                    takerFeeRate?: string;
                    minPriceTickSize?: string;
                    minQuantityTickSize?: string;
                }): _145.ExpiryFuturesMarketLaunchProposal;
            };
            DerivativeMarketParamUpdateProposal: {
                encode(message: _145.DerivativeMarketParamUpdateProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.DerivativeMarketParamUpdateProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    marketId?: string;
                    initialMarginRatio?: string;
                    maintenanceMarginRatio?: string;
                    makerFeeRate?: string;
                    takerFeeRate?: string;
                    relayerFeeShareRate?: string;
                    minPriceTickSize?: string;
                    minQuantityTickSize?: string;
                    HourlyInterestRate?: string;
                    HourlyFundingRateCap?: string;
                    status?: _142.MarketStatus;
                    oracleParams?: {
                        oracleBase?: string;
                        oracleQuote?: string;
                        oracleScaleFactor?: number;
                        oracleType?: _156.OracleType;
                    };
                }): _145.DerivativeMarketParamUpdateProposal;
            };
            MarketForcedSettlementProposal: {
                encode(message: _145.MarketForcedSettlementProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.MarketForcedSettlementProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    marketId?: string;
                    settlementPrice?: string;
                }): _145.MarketForcedSettlementProposal;
            };
            UpdateDenomDecimalsProposal: {
                encode(message: _145.UpdateDenomDecimalsProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.UpdateDenomDecimalsProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    denomDecimals?: {
                        denom?: string;
                        decimals?: any;
                    }[];
                }): _145.UpdateDenomDecimalsProposal;
            };
            DenomDecimals: {
                encode(message: _145.DenomDecimals, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.DenomDecimals;
                fromPartial(object: {
                    denom?: string;
                    decimals?: any;
                }): _145.DenomDecimals;
            };
            BinaryOptionsMarketParamUpdateProposal: {
                encode(message: _145.BinaryOptionsMarketParamUpdateProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.BinaryOptionsMarketParamUpdateProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    marketId?: string;
                    makerFeeRate?: string;
                    takerFeeRate?: string;
                    relayerFeeShareRate?: string;
                    minPriceTickSize?: string;
                    minQuantityTickSize?: string;
                    expirationTimestamp?: any;
                    settlementTimestamp?: any;
                    settlementPrice?: string;
                    admin?: string;
                    status?: _142.MarketStatus;
                    oracleParams?: {
                        symbol?: string;
                        provider?: string;
                        oracleScaleFactor?: number;
                        oracleType?: _156.OracleType;
                    };
                }): _145.BinaryOptionsMarketParamUpdateProposal;
            };
            ProviderOracleParams: {
                encode(message: _145.ProviderOracleParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.ProviderOracleParams;
                fromPartial(object: {
                    symbol?: string;
                    provider?: string;
                    oracleScaleFactor?: number;
                    oracleType?: _156.OracleType;
                }): _145.ProviderOracleParams;
            };
            OracleParams: {
                encode(message: _145.OracleParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.OracleParams;
                fromPartial(object: {
                    oracleBase?: string;
                    oracleQuote?: string;
                    oracleScaleFactor?: number;
                    oracleType?: _156.OracleType;
                }): _145.OracleParams;
            };
            TradingRewardCampaignLaunchProposal: {
                encode(message: _145.TradingRewardCampaignLaunchProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.TradingRewardCampaignLaunchProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    campaignInfo?: {
                        campaignDurationSeconds?: any;
                        quoteDenoms?: string[];
                        tradingRewardBoostInfo?: {
                            boostedSpotMarketIds?: string[];
                            spotMarketMultipliers?: {
                                makerPointsMultiplier?: string;
                                takerPointsMultiplier?: string;
                            }[];
                            boostedDerivativeMarketIds?: string[];
                            derivativeMarketMultipliers?: {
                                makerPointsMultiplier?: string;
                                takerPointsMultiplier?: string;
                            }[];
                        };
                        disqualifiedMarketIds?: string[];
                    };
                    campaignRewardPools?: {
                        startTimestamp?: any;
                        maxCampaignRewards?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                }): _145.TradingRewardCampaignLaunchProposal;
            };
            TradingRewardCampaignUpdateProposal: {
                encode(message: _145.TradingRewardCampaignUpdateProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.TradingRewardCampaignUpdateProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    campaignInfo?: {
                        campaignDurationSeconds?: any;
                        quoteDenoms?: string[];
                        tradingRewardBoostInfo?: {
                            boostedSpotMarketIds?: string[];
                            spotMarketMultipliers?: {
                                makerPointsMultiplier?: string;
                                takerPointsMultiplier?: string;
                            }[];
                            boostedDerivativeMarketIds?: string[];
                            derivativeMarketMultipliers?: {
                                makerPointsMultiplier?: string;
                                takerPointsMultiplier?: string;
                            }[];
                        };
                        disqualifiedMarketIds?: string[];
                    };
                    campaignRewardPoolsAdditions?: {
                        startTimestamp?: any;
                        maxCampaignRewards?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    campaignRewardPoolsUpdates?: {
                        startTimestamp?: any;
                        maxCampaignRewards?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                }): _145.TradingRewardCampaignUpdateProposal;
            };
            RewardPointUpdate: {
                encode(message: _145.RewardPointUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.RewardPointUpdate;
                fromPartial(object: {
                    accountAddress?: string;
                    newPoints?: string;
                }): _145.RewardPointUpdate;
            };
            TradingRewardPendingPointsUpdateProposal: {
                encode(message: _145.TradingRewardPendingPointsUpdateProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.TradingRewardPendingPointsUpdateProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    pendingPoolTimestamp?: any;
                    rewardPointUpdates?: {
                        accountAddress?: string;
                        newPoints?: string;
                    }[];
                }): _145.TradingRewardPendingPointsUpdateProposal;
            };
            FeeDiscountProposal: {
                encode(message: _145.FeeDiscountProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.FeeDiscountProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    schedule?: {
                        bucketCount?: any;
                        bucketDuration?: any;
                        quoteDenoms?: string[];
                        tierInfos?: {
                            makerDiscountRate?: string;
                            takerDiscountRate?: string;
                            stakedAmount?: string;
                            volume?: string;
                        }[];
                        disqualifiedMarketIds?: string[];
                    };
                }): _145.FeeDiscountProposal;
            };
            BatchCommunityPoolSpendProposal: {
                encode(message: _145.BatchCommunityPoolSpendProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.BatchCommunityPoolSpendProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    proposals?: {
                        title?: string;
                        description?: string;
                        recipient?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                }): _145.BatchCommunityPoolSpendProposal;
            };
            MsgRewardsOptOut: {
                encode(message: _145.MsgRewardsOptOut, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.MsgRewardsOptOut;
                fromPartial(object: {
                    sender?: string;
                }): _145.MsgRewardsOptOut;
            };
            MsgRewardsOptOutResponse: {
                encode(_: _145.MsgRewardsOptOutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.MsgRewardsOptOutResponse;
                fromPartial(_: {}): _145.MsgRewardsOptOutResponse;
            };
            MsgAdminUpdateBinaryOptionsMarket: {
                encode(message: _145.MsgAdminUpdateBinaryOptionsMarket, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.MsgAdminUpdateBinaryOptionsMarket;
                fromPartial(object: {
                    sender?: string;
                    marketId?: string;
                    settlementPrice?: string;
                    expirationTimestamp?: any;
                    settlementTimestamp?: any;
                    status?: _142.MarketStatus;
                }): _145.MsgAdminUpdateBinaryOptionsMarket;
            };
            MsgAdminUpdateBinaryOptionsMarketResponse: {
                encode(_: _145.MsgAdminUpdateBinaryOptionsMarketResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.MsgAdminUpdateBinaryOptionsMarketResponse;
                fromPartial(_: {}): _145.MsgAdminUpdateBinaryOptionsMarketResponse;
            };
            cancellationStrategyFromJSON(object: any): _144.CancellationStrategy;
            cancellationStrategyToJSON(object: _144.CancellationStrategy): string;
            CancellationStrategy: typeof _144.CancellationStrategy;
            CancellationStrategySDKType: typeof _144.CancellationStrategySDKType;
            Subaccount: {
                encode(message: _144.Subaccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.Subaccount;
                fromPartial(object: {
                    trader?: string;
                    subaccountNonce?: number;
                }): _144.Subaccount;
            };
            QuerySubaccountOrdersRequest: {
                encode(message: _144.QuerySubaccountOrdersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.QuerySubaccountOrdersRequest;
                fromPartial(object: {
                    subaccountId?: string;
                    marketId?: string;
                }): _144.QuerySubaccountOrdersRequest;
            };
            QuerySubaccountOrdersResponse: {
                encode(message: _144.QuerySubaccountOrdersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.QuerySubaccountOrdersResponse;
                fromPartial(object: {
                    buyOrders?: {
                        order?: {
                            price?: string;
                            quantity?: string;
                            isReduceOnly?: boolean;
                        };
                        orderHash?: Uint8Array;
                    }[];
                    sellOrders?: {
                        order?: {
                            price?: string;
                            quantity?: string;
                            isReduceOnly?: boolean;
                        };
                        orderHash?: Uint8Array;
                    }[];
                }): _144.QuerySubaccountOrdersResponse;
            };
            SubaccountOrderbookMetadataWithMarket: {
                encode(message: _144.SubaccountOrderbookMetadataWithMarket, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.SubaccountOrderbookMetadataWithMarket;
                fromPartial(object: {
                    metadata?: {
                        vanillaLimitOrderCount?: number;
                        reduceOnlyLimitOrderCount?: number;
                        aggregateReduceOnlyQuantity?: string;
                        aggregateVanillaQuantity?: string;
                        vanillaConditionalOrderCount?: number;
                        reduceOnlyConditionalOrderCount?: number;
                    };
                    marketId?: string;
                    isBuy?: boolean;
                }): _144.SubaccountOrderbookMetadataWithMarket;
            };
            QueryExchangeParamsRequest: {
                encode(_: _144.QueryExchangeParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.QueryExchangeParamsRequest;
                fromPartial(_: {}): _144.QueryExchangeParamsRequest;
            };
            QueryExchangeParamsResponse: {
                encode(message: _144.QueryExchangeParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.QueryExchangeParamsResponse;
                fromPartial(object: {
                    params?: {
                        spotMarketInstantListingFee?: {
                            denom?: string;
                            amount?: string;
                        };
                        derivativeMarketInstantListingFee?: {
                            denom?: string;
                            amount?: string;
                        };
                        defaultSpotMakerFeeRate?: string;
                        defaultSpotTakerFeeRate?: string;
                        defaultDerivativeMakerFeeRate?: string;
                        defaultDerivativeTakerFeeRate?: string;
                        defaultInitialMarginRatio?: string;
                        defaultMaintenanceMarginRatio?: string;
                        defaultFundingInterval?: any;
                        fundingMultiple?: any;
                        relayerFeeShareRate?: string;
                        defaultHourlyFundingRateCap?: string;
                        defaultHourlyInterestRate?: string;
                        maxDerivativeOrderSideCount?: number;
                        injRewardStakedRequirementThreshold?: string;
                        tradingRewardsVestingDuration?: any;
                        liquidatorRewardShareRate?: string;
                        binaryOptionsMarketInstantListingFee?: {
                            denom?: string;
                            amount?: string;
                        };
                    };
                }): _144.QueryExchangeParamsResponse;
            };
            QuerySubaccountDepositsRequest: {
                encode(message: _144.QuerySubaccountDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.QuerySubaccountDepositsRequest;
                fromPartial(object: {
                    subaccountId?: string;
                    subaccount?: {
                        trader?: string;
                        subaccountNonce?: number;
                    };
                }): _144.QuerySubaccountDepositsRequest;
            };
            QuerySubaccountDepositsResponse_DepositsEntry: {
                encode(message: _144.QuerySubaccountDepositsResponse_DepositsEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.QuerySubaccountDepositsResponse_DepositsEntry;
                fromPartial(object: {
                    key?: string;
                    value?: {
                        availableBalance?: string;
                        totalBalance?: string;
                    };
                }): _144.QuerySubaccountDepositsResponse_DepositsEntry;
            };
            QuerySubaccountDepositsResponse: {
                encode(message: _144.QuerySubaccountDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.QuerySubaccountDepositsResponse;
                fromPartial(object: {
                    deposits?: {
                        [x: string]: {
                            availableBalance?: string;
                            totalBalance?: string;
                        };
                    };
                }): _144.QuerySubaccountDepositsResponse;
            };
            QueryExchangeBalancesRequest: {
                encode(_: _144.QueryExchangeBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.QueryExchangeBalancesRequest;
                fromPartial(_: {}): _144.QueryExchangeBalancesRequest;
            };
            QueryExchangeBalancesResponse: {
                encode(message: _144.QueryExchangeBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.QueryExchangeBalancesResponse;
                fromPartial(object: {
                    balances?: {
                        subaccountId?: string;
                        denom?: string;
                        deposits?: {
                            availableBalance?: string;
                            totalBalance?: string;
                        };
                    }[];
                }): _144.QueryExchangeBalancesResponse;
            };
            QuerySubaccountDepositRequest: {
                encode(message: _144.QuerySubaccountDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.QuerySubaccountDepositRequest;
                fromPartial(object: {
                    subaccountId?: string;
                    denom?: string;
                }): _144.QuerySubaccountDepositRequest;
            };
            QuerySubaccountDepositResponse: {
                encode(message: _144.QuerySubaccountDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.QuerySubaccountDepositResponse;
                fromPartial(object: {
                    deposits?: {
                        availableBalance?: string;
                        totalBalance?: string;
                    };
                }): _144.QuerySubaccountDepositResponse;
            };
            QuerySpotMarketsRequest: {
                encode(message: _144.QuerySpotMarketsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.QuerySpotMarketsRequest;
                fromPartial(object: {
                    status?: string;
                }): _144.QuerySpotMarketsRequest;
            };
            QuerySpotMarketsResponse: {
                encode(message: _144.QuerySpotMarketsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.QuerySpotMarketsResponse;
                fromPartial(object: {
                    markets?: {
                        ticker?: string;
                        baseDenom?: string;
                        quoteDenom?: string;
                        makerFeeRate?: string;
                        takerFeeRate?: string;
                        relayerFeeShareRate?: string;
                        marketId?: string;
                        status?: _142.MarketStatus;
                        minPriceTickSize?: string;
                        minQuantityTickSize?: string;
                    }[];
                }): _144.QuerySpotMarketsResponse;
            };
            QuerySpotMarketRequest: {
                encode(message: _144.QuerySpotMarketRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.QuerySpotMarketRequest;
                fromPartial(object: {
                    marketId?: string;
                }): _144.QuerySpotMarketRequest;
            };
            QuerySpotMarketResponse: {
                encode(message: _144.QuerySpotMarketResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.QuerySpotMarketResponse;
                fromPartial(object: {
                    market?: {
                        ticker?: string;
                        baseDenom?: string;
                        quoteDenom?: string;
                        makerFeeRate?: string;
                        takerFeeRate?: string;
                        relayerFeeShareRate?: string;
                        marketId?: string;
                        status?: _142.MarketStatus;
                        minPriceTickSize?: string;
                        minQuantityTickSize?: string;
                    };
                }): _144.QuerySpotMarketResponse;
            };
            QuerySpotOrderbookRequest: {
                encode(message: _144.QuerySpotOrderbookRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.QuerySpotOrderbookRequest;
                fromPartial(object: {
                    marketId?: string;
                    limit?: any;
                }): _144.QuerySpotOrderbookRequest;
            };
            QuerySpotOrderbookResponse: {
                encode(message: _144.QuerySpotOrderbookResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.QuerySpotOrderbookResponse;
                fromPartial(object: {
                    buysPriceLevel?: {
                        price?: string;
                        quantity?: string;
                    }[];
                    sellsPriceLevel?: {
                        price?: string;
                        quantity?: string;
                    }[];
                }): _144.QuerySpotOrderbookResponse;
            };
            QuerySpotOrdersByHashesRequest: {
                encode(message: _144.QuerySpotOrdersByHashesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.QuerySpotOrdersByHashesRequest;
                fromPartial(object: {
                    marketId?: string;
                    subaccountId?: string;
                    orderHashes?: string[];
                }): _144.QuerySpotOrdersByHashesRequest;
            };
            QuerySpotOrdersByHashesResponse: {
                encode(message: _144.QuerySpotOrdersByHashesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.QuerySpotOrdersByHashesResponse;
                fromPartial(object: {
                    orders?: {
                        price?: string;
                        quantity?: string;
                        fillable?: string;
                        isBuy?: boolean;
                        orderHash?: string;
                    }[];
                }): _144.QuerySpotOrdersByHashesResponse;
            };
            QueryTraderSpotOrdersRequest: {
                encode(message: _144.QueryTraderSpotOrdersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.QueryTraderSpotOrdersRequest;
                fromPartial(object: {
                    marketId?: string;
                    subaccountId?: string;
                }): _144.QueryTraderSpotOrdersRequest;
            };
            TrimmedSpotLimitOrder: {
                encode(message: _144.TrimmedSpotLimitOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.TrimmedSpotLimitOrder;
                fromPartial(object: {
                    price?: string;
                    quantity?: string;
                    fillable?: string;
                    isBuy?: boolean;
                    orderHash?: string;
                }): _144.TrimmedSpotLimitOrder;
            };
            QueryTraderSpotOrdersResponse: {
                encode(message: _144.QueryTraderSpotOrdersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.QueryTraderSpotOrdersResponse;
                fromPartial(object: {
                    orders?: {
                        price?: string;
                        quantity?: string;
                        fillable?: string;
                        isBuy?: boolean;
                        orderHash?: string;
                    }[];
                }): _144.QueryTraderSpotOrdersResponse;
            };
            QuerySpotMidPriceAndTOBRequest: {
                encode(message: _144.QuerySpotMidPriceAndTOBRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.QuerySpotMidPriceAndTOBRequest;
                fromPartial(object: {
                    marketId?: string;
                }): _144.QuerySpotMidPriceAndTOBRequest;
            };
            QuerySpotMidPriceAndTOBResponse: {
                encode(message: _144.QuerySpotMidPriceAndTOBResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.QuerySpotMidPriceAndTOBResponse;
                fromPartial(object: {
                    midPrice?: string;
                    bestBuyPrice?: string;
                    bestSellPrice?: string;
                }): _144.QuerySpotMidPriceAndTOBResponse;
            };
            QueryDerivativeMidPriceAndTOBRequest: {
                encode(message: _144.QueryDerivativeMidPriceAndTOBRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.QueryDerivativeMidPriceAndTOBRequest;
                fromPartial(object: {
                    marketId?: string;
                }): _144.QueryDerivativeMidPriceAndTOBRequest;
            };
            QueryDerivativeMidPriceAndTOBResponse: {
                encode(message: _144.QueryDerivativeMidPriceAndTOBResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.QueryDerivativeMidPriceAndTOBResponse;
                fromPartial(object: {
                    midPrice?: string;
                    bestBuyPrice?: string;
                    bestSellPrice?: string;
                }): _144.QueryDerivativeMidPriceAndTOBResponse;
            };
            QueryDerivativeOrderbookRequest: {
                encode(message: _144.QueryDerivativeOrderbookRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.QueryDerivativeOrderbookRequest;
                fromPartial(object: {
                    marketId?: string;
                    limit?: any;
                }): _144.QueryDerivativeOrderbookRequest;
            };
            QueryDerivativeOrderbookResponse: {
                encode(message: _144.QueryDerivativeOrderbookResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.QueryDerivativeOrderbookResponse;
                fromPartial(object: {
                    buysPriceLevel?: {
                        price?: string;
                        quantity?: string;
                    }[];
                    sellsPriceLevel?: {
                        price?: string;
                        quantity?: string;
                    }[];
                }): _144.QueryDerivativeOrderbookResponse;
            };
            QueryTraderSpotOrdersToCancelUpToAmountRequest: {
                encode(message: _144.QueryTraderSpotOrdersToCancelUpToAmountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.QueryTraderSpotOrdersToCancelUpToAmountRequest;
                fromPartial(object: {
                    marketId?: string;
                    subaccountId?: string;
                    baseAmount?: string;
                    quoteAmount?: string;
                    strategy?: _144.CancellationStrategy;
                    referencePrice?: string;
                }): _144.QueryTraderSpotOrdersToCancelUpToAmountRequest;
            };
            QueryTraderDerivativeOrdersToCancelUpToAmountRequest: {
                encode(message: _144.QueryTraderDerivativeOrdersToCancelUpToAmountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.QueryTraderDerivativeOrdersToCancelUpToAmountRequest;
                fromPartial(object: {
                    marketId?: string;
                    subaccountId?: string;
                    quoteAmount?: string;
                    strategy?: _144.CancellationStrategy;
                    referencePrice?: string;
                }): _144.QueryTraderDerivativeOrdersToCancelUpToAmountRequest;
            };
            QueryTraderDerivativeOrdersRequest: {
                encode(message: _144.QueryTraderDerivativeOrdersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.QueryTraderDerivativeOrdersRequest;
                fromPartial(object: {
                    marketId?: string;
                    subaccountId?: string;
                }): _144.QueryTraderDerivativeOrdersRequest;
            };
            TrimmedDerivativeLimitOrder: {
                encode(message: _144.TrimmedDerivativeLimitOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.TrimmedDerivativeLimitOrder;
                fromPartial(object: {
                    price?: string;
                    quantity?: string;
                    margin?: string;
                    fillable?: string;
                    isBuy?: boolean;
                    orderHash?: string;
                }): _144.TrimmedDerivativeLimitOrder;
            };
            QueryTraderDerivativeOrdersResponse: {
                encode(message: _144.QueryTraderDerivativeOrdersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.QueryTraderDerivativeOrdersResponse;
                fromPartial(object: {
                    orders?: {
                        price?: string;
                        quantity?: string;
                        margin?: string;
                        fillable?: string;
                        isBuy?: boolean;
                        orderHash?: string;
                    }[];
                }): _144.QueryTraderDerivativeOrdersResponse;
            };
            QueryDerivativeOrdersByHashesRequest: {
                encode(message: _144.QueryDerivativeOrdersByHashesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.QueryDerivativeOrdersByHashesRequest;
                fromPartial(object: {
                    marketId?: string;
                    subaccountId?: string;
                    orderHashes?: string[];
                }): _144.QueryDerivativeOrdersByHashesRequest;
            };
            QueryDerivativeOrdersByHashesResponse: {
                encode(message: _144.QueryDerivativeOrdersByHashesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.QueryDerivativeOrdersByHashesResponse;
                fromPartial(object: {
                    orders?: {
                        price?: string;
                        quantity?: string;
                        margin?: string;
                        fillable?: string;
                        isBuy?: boolean;
                        orderHash?: string;
                    }[];
                }): _144.QueryDerivativeOrdersByHashesResponse;
            };
            QueryDerivativeMarketsRequest: {
                encode(message: _144.QueryDerivativeMarketsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.QueryDerivativeMarketsRequest;
                fromPartial(object: {
                    status?: string;
                }): _144.QueryDerivativeMarketsRequest;
            };
            PriceLevel: {
                encode(message: _144.PriceLevel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.PriceLevel;
                fromPartial(object: {
                    price?: string;
                    quantity?: string;
                }): _144.PriceLevel;
            };
            PerpetualMarketState: {
                encode(message: _144.PerpetualMarketState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.PerpetualMarketState;
                fromPartial(object: {
                    marketInfo?: {
                        marketId?: string;
                        hourlyFundingRateCap?: string;
                        hourlyInterestRate?: string;
                        nextFundingTimestamp?: any;
                        fundingInterval?: any;
                    };
                    fundingInfo?: {
                        cumulativeFunding?: string;
                        cumulativePrice?: string;
                        lastTimestamp?: any;
                    };
                }): _144.PerpetualMarketState;
            };
            FullDerivativeMarket: {
                encode(message: _144.FullDerivativeMarket, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.FullDerivativeMarket;
                fromPartial(object: {
                    market?: {
                        ticker?: string;
                        oracleBase?: string;
                        oracleQuote?: string;
                        oracleType?: _156.OracleType;
                        oracleScaleFactor?: number;
                        quoteDenom?: string;
                        marketId?: string;
                        initialMarginRatio?: string;
                        maintenanceMarginRatio?: string;
                        makerFeeRate?: string;
                        takerFeeRate?: string;
                        relayerFeeShareRate?: string;
                        isPerpetual?: boolean;
                        status?: _142.MarketStatus;
                        minPriceTickSize?: string;
                        minQuantityTickSize?: string;
                    };
                    perpetualInfo?: {
                        marketInfo?: {
                            marketId?: string;
                            hourlyFundingRateCap?: string;
                            hourlyInterestRate?: string;
                            nextFundingTimestamp?: any;
                            fundingInterval?: any;
                        };
                        fundingInfo?: {
                            cumulativeFunding?: string;
                            cumulativePrice?: string;
                            lastTimestamp?: any;
                        };
                    };
                    futuresInfo?: {
                        marketId?: string;
                        expirationTimestamp?: any;
                        twapStartTimestamp?: any;
                        expirationTwapStartPriceCumulative?: string;
                        settlementPrice?: string;
                    };
                    markPrice?: string;
                }): _144.FullDerivativeMarket;
            };
            QueryDerivativeMarketsResponse: {
                encode(message: _144.QueryDerivativeMarketsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.QueryDerivativeMarketsResponse;
                fromPartial(object: {
                    markets?: {
                        market?: {
                            ticker?: string;
                            oracleBase?: string;
                            oracleQuote?: string;
                            oracleType?: _156.OracleType;
                            oracleScaleFactor?: number;
                            quoteDenom?: string;
                            marketId?: string;
                            initialMarginRatio?: string;
                            maintenanceMarginRatio?: string;
                            makerFeeRate?: string;
                            takerFeeRate?: string;
                            relayerFeeShareRate?: string;
                            isPerpetual?: boolean;
                            status?: _142.MarketStatus;
                            minPriceTickSize?: string;
                            minQuantityTickSize?: string;
                        };
                        perpetualInfo?: {
                            marketInfo?: {
                                marketId?: string;
                                hourlyFundingRateCap?: string;
                                hourlyInterestRate?: string;
                                nextFundingTimestamp?: any;
                                fundingInterval?: any;
                            };
                            fundingInfo?: {
                                cumulativeFunding?: string;
                                cumulativePrice?: string;
                                lastTimestamp?: any;
                            };
                        };
                        futuresInfo?: {
                            marketId?: string;
                            expirationTimestamp?: any;
                            twapStartTimestamp?: any;
                            expirationTwapStartPriceCumulative?: string;
                            settlementPrice?: string;
                        };
                        markPrice?: string;
                    }[];
                }): _144.QueryDerivativeMarketsResponse;
            };
            QueryDerivativeMarketRequest: {
                encode(message: _144.QueryDerivativeMarketRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.QueryDerivativeMarketRequest;
                fromPartial(object: {
                    marketId?: string;
                }): _144.QueryDerivativeMarketRequest;
            };
            QueryDerivativeMarketResponse: {
                encode(message: _144.QueryDerivativeMarketResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.QueryDerivativeMarketResponse;
                fromPartial(object: {
                    market?: {
                        market?: {
                            ticker?: string;
                            oracleBase?: string;
                            oracleQuote?: string;
                            oracleType?: _156.OracleType;
                            oracleScaleFactor?: number;
                            quoteDenom?: string;
                            marketId?: string;
                            initialMarginRatio?: string;
                            maintenanceMarginRatio?: string;
                            makerFeeRate?: string;
                            takerFeeRate?: string;
                            relayerFeeShareRate?: string;
                            isPerpetual?: boolean;
                            status?: _142.MarketStatus;
                            minPriceTickSize?: string;
                            minQuantityTickSize?: string;
                        };
                        perpetualInfo?: {
                            marketInfo?: {
                                marketId?: string;
                                hourlyFundingRateCap?: string;
                                hourlyInterestRate?: string;
                                nextFundingTimestamp?: any;
                                fundingInterval?: any;
                            };
                            fundingInfo?: {
                                cumulativeFunding?: string;
                                cumulativePrice?: string;
                                lastTimestamp?: any;
                            };
                        };
                        futuresInfo?: {
                            marketId?: string;
                            expirationTimestamp?: any;
                            twapStartTimestamp?: any;
                            expirationTwapStartPriceCumulative?: string;
                            settlementPrice?: string;
                        };
                        markPrice?: string;
                    };
                }): _144.QueryDerivativeMarketResponse;
            };
            QueryDerivativeMarketAddressRequest: {
                encode(message: _144.QueryDerivativeMarketAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.QueryDerivativeMarketAddressRequest;
                fromPartial(object: {
                    marketId?: string;
                }): _144.QueryDerivativeMarketAddressRequest;
            };
            QueryDerivativeMarketAddressResponse: {
                encode(message: _144.QueryDerivativeMarketAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.QueryDerivativeMarketAddressResponse;
                fromPartial(object: {
                    address?: string;
                    subaccountId?: string;
                }): _144.QueryDerivativeMarketAddressResponse;
            };
            QuerySubaccountTradeNonceRequest: {
                encode(message: _144.QuerySubaccountTradeNonceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.QuerySubaccountTradeNonceRequest;
                fromPartial(object: {
                    subaccountId?: string;
                }): _144.QuerySubaccountTradeNonceRequest;
            };
            QuerySubaccountPositionsRequest: {
                encode(message: _144.QuerySubaccountPositionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.QuerySubaccountPositionsRequest;
                fromPartial(object: {
                    subaccountId?: string;
                }): _144.QuerySubaccountPositionsRequest;
            };
            QuerySubaccountPositionInMarketRequest: {
                encode(message: _144.QuerySubaccountPositionInMarketRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.QuerySubaccountPositionInMarketRequest;
                fromPartial(object: {
                    subaccountId?: string;
                    marketId?: string;
                }): _144.QuerySubaccountPositionInMarketRequest;
            };
            QuerySubaccountEffectivePositionInMarketRequest: {
                encode(message: _144.QuerySubaccountEffectivePositionInMarketRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.QuerySubaccountEffectivePositionInMarketRequest;
                fromPartial(object: {
                    subaccountId?: string;
                    marketId?: string;
                }): _144.QuerySubaccountEffectivePositionInMarketRequest;
            };
            QuerySubaccountOrderMetadataRequest: {
                encode(message: _144.QuerySubaccountOrderMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.QuerySubaccountOrderMetadataRequest;
                fromPartial(object: {
                    subaccountId?: string;
                }): _144.QuerySubaccountOrderMetadataRequest;
            };
            QuerySubaccountPositionsResponse: {
                encode(message: _144.QuerySubaccountPositionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.QuerySubaccountPositionsResponse;
                fromPartial(object: {
                    state?: {
                        subaccountId?: string;
                        marketId?: string;
                        position?: {
                            isLong?: boolean;
                            quantity?: string;
                            entryPrice?: string;
                            margin?: string;
                            cumulativeFundingEntry?: string;
                        };
                    }[];
                }): _144.QuerySubaccountPositionsResponse;
            };
            QuerySubaccountPositionInMarketResponse: {
                encode(message: _144.QuerySubaccountPositionInMarketResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.QuerySubaccountPositionInMarketResponse;
                fromPartial(object: {
                    state?: {
                        isLong?: boolean;
                        quantity?: string;
                        entryPrice?: string;
                        margin?: string;
                        cumulativeFundingEntry?: string;
                    };
                }): _144.QuerySubaccountPositionInMarketResponse;
            };
            EffectivePosition: {
                encode(message: _144.EffectivePosition, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.EffectivePosition;
                fromPartial(object: {
                    isLong?: boolean;
                    quantity?: string;
                    entryPrice?: string;
                    effectiveMargin?: string;
                }): _144.EffectivePosition;
            };
            QuerySubaccountEffectivePositionInMarketResponse: {
                encode(message: _144.QuerySubaccountEffectivePositionInMarketResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.QuerySubaccountEffectivePositionInMarketResponse;
                fromPartial(object: {
                    state?: {
                        isLong?: boolean;
                        quantity?: string;
                        entryPrice?: string;
                        effectiveMargin?: string;
                    };
                }): _144.QuerySubaccountEffectivePositionInMarketResponse;
            };
            QueryPerpetualMarketInfoRequest: {
                encode(message: _144.QueryPerpetualMarketInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.QueryPerpetualMarketInfoRequest;
                fromPartial(object: {
                    marketId?: string;
                }): _144.QueryPerpetualMarketInfoRequest;
            };
            QueryPerpetualMarketInfoResponse: {
                encode(message: _144.QueryPerpetualMarketInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.QueryPerpetualMarketInfoResponse;
                fromPartial(object: {
                    info?: {
                        marketId?: string;
                        hourlyFundingRateCap?: string;
                        hourlyInterestRate?: string;
                        nextFundingTimestamp?: any;
                        fundingInterval?: any;
                    };
                }): _144.QueryPerpetualMarketInfoResponse;
            };
            QueryExpiryFuturesMarketInfoRequest: {
                encode(message: _144.QueryExpiryFuturesMarketInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.QueryExpiryFuturesMarketInfoRequest;
                fromPartial(object: {
                    marketId?: string;
                }): _144.QueryExpiryFuturesMarketInfoRequest;
            };
            QueryExpiryFuturesMarketInfoResponse: {
                encode(message: _144.QueryExpiryFuturesMarketInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.QueryExpiryFuturesMarketInfoResponse;
                fromPartial(object: {
                    info?: {
                        marketId?: string;
                        expirationTimestamp?: any;
                        twapStartTimestamp?: any;
                        expirationTwapStartPriceCumulative?: string;
                        settlementPrice?: string;
                    };
                }): _144.QueryExpiryFuturesMarketInfoResponse;
            };
            QueryPerpetualMarketFundingRequest: {
                encode(message: _144.QueryPerpetualMarketFundingRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.QueryPerpetualMarketFundingRequest;
                fromPartial(object: {
                    marketId?: string;
                }): _144.QueryPerpetualMarketFundingRequest;
            };
            QueryPerpetualMarketFundingResponse: {
                encode(message: _144.QueryPerpetualMarketFundingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.QueryPerpetualMarketFundingResponse;
                fromPartial(object: {
                    state?: {
                        cumulativeFunding?: string;
                        cumulativePrice?: string;
                        lastTimestamp?: any;
                    };
                }): _144.QueryPerpetualMarketFundingResponse;
            };
            QuerySubaccountOrderMetadataResponse: {
                encode(message: _144.QuerySubaccountOrderMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.QuerySubaccountOrderMetadataResponse;
                fromPartial(object: {
                    metadata?: {
                        metadata?: {
                            vanillaLimitOrderCount?: number;
                            reduceOnlyLimitOrderCount?: number;
                            aggregateReduceOnlyQuantity?: string;
                            aggregateVanillaQuantity?: string;
                            vanillaConditionalOrderCount?: number;
                            reduceOnlyConditionalOrderCount?: number;
                        };
                        marketId?: string;
                        isBuy?: boolean;
                    }[];
                }): _144.QuerySubaccountOrderMetadataResponse;
            };
            QuerySubaccountTradeNonceResponse: {
                encode(message: _144.QuerySubaccountTradeNonceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.QuerySubaccountTradeNonceResponse;
                fromPartial(object: {
                    nonce?: number;
                }): _144.QuerySubaccountTradeNonceResponse;
            };
            QueryModuleStateRequest: {
                encode(_: _144.QueryModuleStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.QueryModuleStateRequest;
                fromPartial(_: {}): _144.QueryModuleStateRequest;
            };
            QueryModuleStateResponse: {
                encode(message: _144.QueryModuleStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.QueryModuleStateResponse;
                fromPartial(object: {
                    state?: {
                        params?: {
                            spotMarketInstantListingFee?: {
                                denom?: string;
                                amount?: string;
                            };
                            derivativeMarketInstantListingFee?: {
                                denom?: string;
                                amount?: string;
                            };
                            defaultSpotMakerFeeRate?: string;
                            defaultSpotTakerFeeRate?: string;
                            defaultDerivativeMakerFeeRate?: string;
                            defaultDerivativeTakerFeeRate?: string;
                            defaultInitialMarginRatio?: string;
                            defaultMaintenanceMarginRatio?: string;
                            defaultFundingInterval?: any;
                            fundingMultiple?: any;
                            relayerFeeShareRate?: string;
                            defaultHourlyFundingRateCap?: string;
                            defaultHourlyInterestRate?: string;
                            maxDerivativeOrderSideCount?: number;
                            injRewardStakedRequirementThreshold?: string;
                            tradingRewardsVestingDuration?: any;
                            liquidatorRewardShareRate?: string;
                            binaryOptionsMarketInstantListingFee?: {
                                denom?: string;
                                amount?: string;
                            };
                        };
                        spotMarkets?: {
                            ticker?: string;
                            baseDenom?: string;
                            quoteDenom?: string;
                            makerFeeRate?: string;
                            takerFeeRate?: string;
                            relayerFeeShareRate?: string;
                            marketId?: string;
                            status?: _142.MarketStatus;
                            minPriceTickSize?: string;
                            minQuantityTickSize?: string;
                        }[];
                        derivativeMarkets?: {
                            ticker?: string;
                            oracleBase?: string;
                            oracleQuote?: string;
                            oracleType?: _156.OracleType;
                            oracleScaleFactor?: number;
                            quoteDenom?: string;
                            marketId?: string;
                            initialMarginRatio?: string;
                            maintenanceMarginRatio?: string;
                            makerFeeRate?: string;
                            takerFeeRate?: string;
                            relayerFeeShareRate?: string;
                            isPerpetual?: boolean;
                            status?: _142.MarketStatus;
                            minPriceTickSize?: string;
                            minQuantityTickSize?: string;
                        }[];
                        spotOrderbook?: {
                            marketId?: string;
                            isBuySide?: boolean;
                            orders?: {
                                orderInfo?: {
                                    subaccountId?: string;
                                    feeRecipient?: string;
                                    price?: string;
                                    quantity?: string;
                                };
                                orderType?: _142.OrderType;
                                fillable?: string;
                                triggerPrice?: string;
                                orderHash?: Uint8Array;
                            }[];
                        }[];
                        derivativeOrderbook?: {
                            marketId?: string;
                            isBuySide?: boolean;
                            orders?: {
                                orderInfo?: {
                                    subaccountId?: string;
                                    feeRecipient?: string;
                                    price?: string;
                                    quantity?: string;
                                };
                                orderType?: _142.OrderType;
                                margin?: string;
                                fillable?: string;
                                triggerPrice?: string;
                                orderHash?: Uint8Array;
                            }[];
                        }[];
                        balances?: {
                            subaccountId?: string;
                            denom?: string;
                            deposits?: {
                                availableBalance?: string;
                                totalBalance?: string;
                            };
                        }[];
                        positions?: {
                            subaccountId?: string;
                            marketId?: string;
                            position?: {
                                isLong?: boolean;
                                quantity?: string;
                                entryPrice?: string;
                                margin?: string;
                                cumulativeFundingEntry?: string;
                            };
                        }[];
                        subaccountTradeNonces?: {
                            subaccountId?: string;
                            subaccountTradeNonce?: {
                                nonce?: number;
                            };
                        }[];
                        expiryFuturesMarketInfoState?: {
                            marketId?: string;
                            marketInfo?: {
                                marketId?: string;
                                expirationTimestamp?: any;
                                twapStartTimestamp?: any;
                                expirationTwapStartPriceCumulative?: string;
                                settlementPrice?: string;
                            };
                        }[];
                        perpetualMarketInfo?: {
                            marketId?: string;
                            hourlyFundingRateCap?: string;
                            hourlyInterestRate?: string;
                            nextFundingTimestamp?: any;
                            fundingInterval?: any;
                        }[];
                        perpetualMarketFundingState?: {
                            marketId?: string;
                            funding?: {
                                cumulativeFunding?: string;
                                cumulativePrice?: string;
                                lastTimestamp?: any;
                            };
                        }[];
                        derivativeMarketSettlementScheduled?: {
                            marketId?: string;
                            settlementPrice?: string;
                            startingDeficit?: string;
                        }[];
                        isSpotExchangeEnabled?: boolean;
                        isDerivativesExchangeEnabled?: boolean;
                        tradingRewardCampaignInfo?: {
                            campaignDurationSeconds?: any;
                            quoteDenoms?: string[];
                            tradingRewardBoostInfo?: {
                                boostedSpotMarketIds?: string[];
                                spotMarketMultipliers?: {
                                    makerPointsMultiplier?: string;
                                    takerPointsMultiplier?: string;
                                }[];
                                boostedDerivativeMarketIds?: string[];
                                derivativeMarketMultipliers?: {
                                    makerPointsMultiplier?: string;
                                    takerPointsMultiplier?: string;
                                }[];
                            };
                            disqualifiedMarketIds?: string[];
                        };
                        tradingRewardPoolCampaignSchedule?: {
                            startTimestamp?: any;
                            maxCampaignRewards?: {
                                denom?: string;
                                amount?: string;
                            }[];
                        }[];
                        tradingRewardCampaignAccountPoints?: {
                            account?: string;
                            points?: string;
                        }[];
                        feeDiscountSchedule?: {
                            bucketCount?: any;
                            bucketDuration?: any;
                            quoteDenoms?: string[];
                            tierInfos?: {
                                makerDiscountRate?: string;
                                takerDiscountRate?: string;
                                stakedAmount?: string;
                                volume?: string;
                            }[];
                            disqualifiedMarketIds?: string[];
                        };
                        feeDiscountAccountTierTtl?: {
                            account?: string;
                            tierTtl?: {
                                tier?: any;
                                ttlTimestamp?: any;
                            };
                        }[];
                        feeDiscountBucketVolumeAccounts?: {
                            bucketStartTimestamp?: any;
                            accountVolume?: {
                                account?: string;
                                volume?: string;
                            }[];
                        }[];
                        isFirstFeeCycleFinished?: boolean;
                        pendingTradingRewardPoolCampaignSchedule?: {
                            startTimestamp?: any;
                            maxCampaignRewards?: {
                                denom?: string;
                                amount?: string;
                            }[];
                        }[];
                        pendingTradingRewardCampaignAccountPoints?: {
                            rewardPoolStartTimestamp?: any;
                            accountPoints?: {
                                account?: string;
                                points?: string;
                            }[];
                        }[];
                        rewardsOptOutAddresses?: string[];
                        historicalTradeRecords?: {
                            marketId?: string;
                            latestTradeRecords?: {
                                timestamp?: any;
                                price?: string;
                                quantity?: string;
                            }[];
                        }[];
                        binaryOptionsMarkets?: {
                            ticker?: string;
                            oracleSymbol?: string;
                            oracleProvider?: string;
                            oracleType?: _156.OracleType;
                            oracleScaleFactor?: number;
                            expirationTimestamp?: any;
                            settlementTimestamp?: any;
                            admin?: string;
                            quoteDenom?: string;
                            marketId?: string;
                            makerFeeRate?: string;
                            takerFeeRate?: string;
                            relayerFeeShareRate?: string;
                            status?: _142.MarketStatus;
                            minPriceTickSize?: string;
                            minQuantityTickSize?: string;
                            settlementPrice?: string;
                        }[];
                        binaryOptionsMarketIdsScheduledForSettlement?: string[];
                        spotMarketIdsScheduledToForceClose?: string[];
                        denomDecimals?: {
                            denom?: string;
                            decimals?: any;
                        }[];
                        conditionalDerivativeOrderbooks?: {
                            marketId?: string;
                            limitBuyOrders?: {
                                orderInfo?: {
                                    subaccountId?: string;
                                    feeRecipient?: string;
                                    price?: string;
                                    quantity?: string;
                                };
                                orderType?: _142.OrderType;
                                margin?: string;
                                fillable?: string;
                                triggerPrice?: string;
                                orderHash?: Uint8Array;
                            }[];
                            marketBuyOrders?: {
                                orderInfo?: {
                                    subaccountId?: string;
                                    feeRecipient?: string;
                                    price?: string;
                                    quantity?: string;
                                };
                                orderType?: _142.OrderType;
                                margin?: string;
                                marginHold?: string;
                                triggerPrice?: string;
                                orderHash?: Uint8Array;
                            }[];
                            limitSellOrders?: {
                                orderInfo?: {
                                    subaccountId?: string;
                                    feeRecipient?: string;
                                    price?: string;
                                    quantity?: string;
                                };
                                orderType?: _142.OrderType;
                                margin?: string;
                                fillable?: string;
                                triggerPrice?: string;
                                orderHash?: Uint8Array;
                            }[];
                            marketSellOrders?: {
                                orderInfo?: {
                                    subaccountId?: string;
                                    feeRecipient?: string;
                                    price?: string;
                                    quantity?: string;
                                };
                                orderType?: _142.OrderType;
                                margin?: string;
                                marginHold?: string;
                                triggerPrice?: string;
                                orderHash?: Uint8Array;
                            }[];
                        }[];
                    };
                }): _144.QueryModuleStateResponse;
            };
            QueryPositionsRequest: {
                encode(_: _144.QueryPositionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.QueryPositionsRequest;
                fromPartial(_: {}): _144.QueryPositionsRequest;
            };
            QueryPositionsResponse: {
                encode(message: _144.QueryPositionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.QueryPositionsResponse;
                fromPartial(object: {
                    state?: {
                        subaccountId?: string;
                        marketId?: string;
                        position?: {
                            isLong?: boolean;
                            quantity?: string;
                            entryPrice?: string;
                            margin?: string;
                            cumulativeFundingEntry?: string;
                        };
                    }[];
                }): _144.QueryPositionsResponse;
            };
            QueryTradeRewardPointsRequest: {
                encode(message: _144.QueryTradeRewardPointsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.QueryTradeRewardPointsRequest;
                fromPartial(object: {
                    accounts?: string[];
                    pendingPoolTimestamp?: any;
                }): _144.QueryTradeRewardPointsRequest;
            };
            QueryTradeRewardPointsResponse: {
                encode(message: _144.QueryTradeRewardPointsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.QueryTradeRewardPointsResponse;
                fromPartial(object: {
                    accountTradeRewardPoints?: string[];
                }): _144.QueryTradeRewardPointsResponse;
            };
            QueryTradeRewardCampaignRequest: {
                encode(_: _144.QueryTradeRewardCampaignRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.QueryTradeRewardCampaignRequest;
                fromPartial(_: {}): _144.QueryTradeRewardCampaignRequest;
            };
            QueryTradeRewardCampaignResponse: {
                encode(message: _144.QueryTradeRewardCampaignResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.QueryTradeRewardCampaignResponse;
                fromPartial(object: {
                    tradingRewardCampaignInfo?: {
                        campaignDurationSeconds?: any;
                        quoteDenoms?: string[];
                        tradingRewardBoostInfo?: {
                            boostedSpotMarketIds?: string[];
                            spotMarketMultipliers?: {
                                makerPointsMultiplier?: string;
                                takerPointsMultiplier?: string;
                            }[];
                            boostedDerivativeMarketIds?: string[];
                            derivativeMarketMultipliers?: {
                                makerPointsMultiplier?: string;
                                takerPointsMultiplier?: string;
                            }[];
                        };
                        disqualifiedMarketIds?: string[];
                    };
                    tradingRewardPoolCampaignSchedule?: {
                        startTimestamp?: any;
                        maxCampaignRewards?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    totalTradeRewardPoints?: string;
                    pendingTradingRewardPoolCampaignSchedule?: {
                        startTimestamp?: any;
                        maxCampaignRewards?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    pendingTotalTradeRewardPoints?: string[];
                }): _144.QueryTradeRewardCampaignResponse;
            };
            QueryIsOptedOutOfRewardsRequest: {
                encode(message: _144.QueryIsOptedOutOfRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.QueryIsOptedOutOfRewardsRequest;
                fromPartial(object: {
                    account?: string;
                }): _144.QueryIsOptedOutOfRewardsRequest;
            };
            QueryIsOptedOutOfRewardsResponse: {
                encode(message: _144.QueryIsOptedOutOfRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.QueryIsOptedOutOfRewardsResponse;
                fromPartial(object: {
                    isOptedOut?: boolean;
                }): _144.QueryIsOptedOutOfRewardsResponse;
            };
            QueryOptedOutOfRewardsAccountsRequest: {
                encode(_: _144.QueryOptedOutOfRewardsAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.QueryOptedOutOfRewardsAccountsRequest;
                fromPartial(_: {}): _144.QueryOptedOutOfRewardsAccountsRequest;
            };
            QueryOptedOutOfRewardsAccountsResponse: {
                encode(message: _144.QueryOptedOutOfRewardsAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.QueryOptedOutOfRewardsAccountsResponse;
                fromPartial(object: {
                    accounts?: string[];
                }): _144.QueryOptedOutOfRewardsAccountsResponse;
            };
            QueryFeeDiscountAccountInfoRequest: {
                encode(message: _144.QueryFeeDiscountAccountInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.QueryFeeDiscountAccountInfoRequest;
                fromPartial(object: {
                    account?: string;
                }): _144.QueryFeeDiscountAccountInfoRequest;
            };
            QueryFeeDiscountAccountInfoResponse: {
                encode(message: _144.QueryFeeDiscountAccountInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.QueryFeeDiscountAccountInfoResponse;
                fromPartial(object: {
                    tierLevel?: any;
                    accountInfo?: {
                        makerDiscountRate?: string;
                        takerDiscountRate?: string;
                        stakedAmount?: string;
                        volume?: string;
                    };
                    accountTtl?: {
                        tier?: any;
                        ttlTimestamp?: any;
                    };
                }): _144.QueryFeeDiscountAccountInfoResponse;
            };
            QueryFeeDiscountScheduleRequest: {
                encode(_: _144.QueryFeeDiscountScheduleRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.QueryFeeDiscountScheduleRequest;
                fromPartial(_: {}): _144.QueryFeeDiscountScheduleRequest;
            };
            QueryFeeDiscountScheduleResponse: {
                encode(message: _144.QueryFeeDiscountScheduleResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.QueryFeeDiscountScheduleResponse;
                fromPartial(object: {
                    feeDiscountSchedule?: {
                        bucketCount?: any;
                        bucketDuration?: any;
                        quoteDenoms?: string[];
                        tierInfos?: {
                            makerDiscountRate?: string;
                            takerDiscountRate?: string;
                            stakedAmount?: string;
                            volume?: string;
                        }[];
                        disqualifiedMarketIds?: string[];
                    };
                }): _144.QueryFeeDiscountScheduleResponse;
            };
            QueryBalanceMismatchesRequest: {
                encode(message: _144.QueryBalanceMismatchesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.QueryBalanceMismatchesRequest;
                fromPartial(object: {
                    dustFactor?: any;
                }): _144.QueryBalanceMismatchesRequest;
            };
            BalanceMismatch: {
                encode(message: _144.BalanceMismatch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.BalanceMismatch;
                fromPartial(object: {
                    subaccountId?: string;
                    denom?: string;
                    available?: string;
                    total?: string;
                    balanceHold?: string;
                    expectedTotal?: string;
                    difference?: string;
                }): _144.BalanceMismatch;
            };
            QueryBalanceMismatchesResponse: {
                encode(message: _144.QueryBalanceMismatchesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.QueryBalanceMismatchesResponse;
                fromPartial(object: {
                    balanceMismatches?: {
                        subaccountId?: string;
                        denom?: string;
                        available?: string;
                        total?: string;
                        balanceHold?: string;
                        expectedTotal?: string;
                        difference?: string;
                    }[];
                }): _144.QueryBalanceMismatchesResponse;
            };
            QueryBalanceWithBalanceHoldsRequest: {
                encode(_: _144.QueryBalanceWithBalanceHoldsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.QueryBalanceWithBalanceHoldsRequest;
                fromPartial(_: {}): _144.QueryBalanceWithBalanceHoldsRequest;
            };
            BalanceWithMarginHold: {
                encode(message: _144.BalanceWithMarginHold, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.BalanceWithMarginHold;
                fromPartial(object: {
                    subaccountId?: string;
                    denom?: string;
                    available?: string;
                    total?: string;
                    balanceHold?: string;
                }): _144.BalanceWithMarginHold;
            };
            QueryBalanceWithBalanceHoldsResponse: {
                encode(message: _144.QueryBalanceWithBalanceHoldsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.QueryBalanceWithBalanceHoldsResponse;
                fromPartial(object: {
                    balanceWithBalanceHolds?: {
                        subaccountId?: string;
                        denom?: string;
                        available?: string;
                        total?: string;
                        balanceHold?: string;
                    }[];
                }): _144.QueryBalanceWithBalanceHoldsResponse;
            };
            QueryFeeDiscountTierStatisticsRequest: {
                encode(_: _144.QueryFeeDiscountTierStatisticsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.QueryFeeDiscountTierStatisticsRequest;
                fromPartial(_: {}): _144.QueryFeeDiscountTierStatisticsRequest;
            };
            TierStatistic: {
                encode(message: _144.TierStatistic, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.TierStatistic;
                fromPartial(object: {
                    tier?: any;
                    count?: any;
                }): _144.TierStatistic;
            };
            QueryFeeDiscountTierStatisticsResponse: {
                encode(message: _144.QueryFeeDiscountTierStatisticsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.QueryFeeDiscountTierStatisticsResponse;
                fromPartial(object: {
                    statistics?: {
                        tier?: any;
                        count?: any;
                    }[];
                }): _144.QueryFeeDiscountTierStatisticsResponse;
            };
            NinjaVaultInfosRequest: {
                encode(_: _144.NinjaVaultInfosRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.NinjaVaultInfosRequest;
                fromPartial(_: {}): _144.NinjaVaultInfosRequest;
            };
            NinjaVaultInfosResponse: {
                encode(message: _144.NinjaVaultInfosResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.NinjaVaultInfosResponse;
                fromPartial(object: {
                    masterAddresses?: string[];
                    derivativeAddresses?: string[];
                    spotAddresses?: string[];
                    cw20Addresses?: string[];
                }): _144.NinjaVaultInfosResponse;
            };
            QueryMarketIDFromVaultRequest: {
                encode(message: _144.QueryMarketIDFromVaultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.QueryMarketIDFromVaultRequest;
                fromPartial(object: {
                    vaultSubaccountId?: string;
                }): _144.QueryMarketIDFromVaultRequest;
            };
            QueryMarketIDFromVaultResponse: {
                encode(message: _144.QueryMarketIDFromVaultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.QueryMarketIDFromVaultResponse;
                fromPartial(object: {
                    marketId?: string;
                }): _144.QueryMarketIDFromVaultResponse;
            };
            QueryHistoricalTradeRecordsRequest: {
                encode(message: _144.QueryHistoricalTradeRecordsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.QueryHistoricalTradeRecordsRequest;
                fromPartial(object: {
                    marketId?: string;
                }): _144.QueryHistoricalTradeRecordsRequest;
            };
            QueryHistoricalTradeRecordsResponse: {
                encode(message: _144.QueryHistoricalTradeRecordsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.QueryHistoricalTradeRecordsResponse;
                fromPartial(object: {
                    tradeRecords?: {
                        marketId?: string;
                        latestTradeRecords?: {
                            timestamp?: any;
                            price?: string;
                            quantity?: string;
                        }[];
                    }[];
                }): _144.QueryHistoricalTradeRecordsResponse;
            };
            TradeHistoryOptions: {
                encode(message: _144.TradeHistoryOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.TradeHistoryOptions;
                fromPartial(object: {
                    tradeGroupingSec?: any;
                    maxAge?: any;
                    includeRawHistory?: boolean;
                    includeMetadata?: boolean;
                }): _144.TradeHistoryOptions;
            };
            QueryMarketVolatilityRequest: {
                encode(message: _144.QueryMarketVolatilityRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.QueryMarketVolatilityRequest;
                fromPartial(object: {
                    marketId?: string;
                    tradeHistoryOptions?: {
                        tradeGroupingSec?: any;
                        maxAge?: any;
                        includeRawHistory?: boolean;
                        includeMetadata?: boolean;
                    };
                }): _144.QueryMarketVolatilityRequest;
            };
            QueryMarketVolatilityResponse: {
                encode(message: _144.QueryMarketVolatilityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.QueryMarketVolatilityResponse;
                fromPartial(object: {
                    volatility?: string;
                    historyMetadata?: {
                        groupCount?: number;
                        recordsSampleSize?: number;
                        mean?: string;
                        twap?: string;
                        firstTimestamp?: any;
                        lastTimestamp?: any;
                        minPrice?: string;
                        maxPrice?: string;
                        medianPrice?: string;
                    };
                    rawHistory?: {
                        timestamp?: any;
                        price?: string;
                        quantity?: string;
                    }[];
                }): _144.QueryMarketVolatilityResponse;
            };
            QueryBinaryMarketsRequest: {
                encode(message: _144.QueryBinaryMarketsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.QueryBinaryMarketsRequest;
                fromPartial(object: {
                    status?: string;
                }): _144.QueryBinaryMarketsRequest;
            };
            QueryBinaryMarketsResponse: {
                encode(message: _144.QueryBinaryMarketsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.QueryBinaryMarketsResponse;
                fromPartial(object: {
                    markets?: {
                        ticker?: string;
                        oracleSymbol?: string;
                        oracleProvider?: string;
                        oracleType?: _156.OracleType;
                        oracleScaleFactor?: number;
                        expirationTimestamp?: any;
                        settlementTimestamp?: any;
                        admin?: string;
                        quoteDenom?: string;
                        marketId?: string;
                        makerFeeRate?: string;
                        takerFeeRate?: string;
                        relayerFeeShareRate?: string;
                        status?: _142.MarketStatus;
                        minPriceTickSize?: string;
                        minQuantityTickSize?: string;
                        settlementPrice?: string;
                    }[];
                }): _144.QueryBinaryMarketsResponse;
            };
            QueryTraderDerivativeConditionalOrdersRequest: {
                encode(message: _144.QueryTraderDerivativeConditionalOrdersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.QueryTraderDerivativeConditionalOrdersRequest;
                fromPartial(object: {
                    subaccountId?: string;
                    marketId?: string;
                }): _144.QueryTraderDerivativeConditionalOrdersRequest;
            };
            TrimmedDerivativeConditionalOrder: {
                encode(message: _144.TrimmedDerivativeConditionalOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.TrimmedDerivativeConditionalOrder;
                fromPartial(object: {
                    price?: string;
                    quantity?: string;
                    margin?: string;
                    triggerPrice?: string;
                    isBuy?: boolean;
                    isLimit?: boolean;
                    orderHash?: string;
                }): _144.TrimmedDerivativeConditionalOrder;
            };
            QueryTraderDerivativeConditionalOrdersResponse: {
                encode(message: _144.QueryTraderDerivativeConditionalOrdersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.QueryTraderDerivativeConditionalOrdersResponse;
                fromPartial(object: {
                    orders?: {
                        price?: string;
                        quantity?: string;
                        margin?: string;
                        triggerPrice?: string;
                        isBuy?: boolean;
                        isLimit?: boolean;
                        orderHash?: string;
                    }[];
                }): _144.QueryTraderDerivativeConditionalOrdersResponse;
            };
            GenesisState: {
                encode(message: _143.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.GenesisState;
                fromPartial(object: {
                    params?: {
                        spotMarketInstantListingFee?: {
                            denom?: string;
                            amount?: string;
                        };
                        derivativeMarketInstantListingFee?: {
                            denom?: string;
                            amount?: string;
                        };
                        defaultSpotMakerFeeRate?: string;
                        defaultSpotTakerFeeRate?: string;
                        defaultDerivativeMakerFeeRate?: string;
                        defaultDerivativeTakerFeeRate?: string;
                        defaultInitialMarginRatio?: string;
                        defaultMaintenanceMarginRatio?: string;
                        defaultFundingInterval?: any;
                        fundingMultiple?: any;
                        relayerFeeShareRate?: string;
                        defaultHourlyFundingRateCap?: string;
                        defaultHourlyInterestRate?: string;
                        maxDerivativeOrderSideCount?: number;
                        injRewardStakedRequirementThreshold?: string;
                        tradingRewardsVestingDuration?: any;
                        liquidatorRewardShareRate?: string;
                        binaryOptionsMarketInstantListingFee?: {
                            denom?: string;
                            amount?: string;
                        };
                    };
                    spotMarkets?: {
                        ticker?: string;
                        baseDenom?: string;
                        quoteDenom?: string;
                        makerFeeRate?: string;
                        takerFeeRate?: string;
                        relayerFeeShareRate?: string;
                        marketId?: string;
                        status?: _142.MarketStatus;
                        minPriceTickSize?: string;
                        minQuantityTickSize?: string;
                    }[];
                    derivativeMarkets?: {
                        ticker?: string;
                        oracleBase?: string;
                        oracleQuote?: string;
                        oracleType?: _156.OracleType;
                        oracleScaleFactor?: number;
                        quoteDenom?: string;
                        marketId?: string;
                        initialMarginRatio?: string;
                        maintenanceMarginRatio?: string;
                        makerFeeRate?: string;
                        takerFeeRate?: string;
                        relayerFeeShareRate?: string;
                        isPerpetual?: boolean;
                        status?: _142.MarketStatus;
                        minPriceTickSize?: string;
                        minQuantityTickSize?: string;
                    }[];
                    spotOrderbook?: {
                        marketId?: string;
                        isBuySide?: boolean;
                        orders?: {
                            orderInfo?: {
                                subaccountId?: string;
                                feeRecipient?: string;
                                price?: string;
                                quantity?: string;
                            };
                            orderType?: _142.OrderType;
                            fillable?: string;
                            triggerPrice?: string;
                            orderHash?: Uint8Array;
                        }[];
                    }[];
                    derivativeOrderbook?: {
                        marketId?: string;
                        isBuySide?: boolean;
                        orders?: {
                            orderInfo?: {
                                subaccountId?: string;
                                feeRecipient?: string;
                                price?: string;
                                quantity?: string;
                            };
                            orderType?: _142.OrderType;
                            margin?: string;
                            fillable?: string;
                            triggerPrice?: string;
                            orderHash?: Uint8Array;
                        }[];
                    }[];
                    balances?: {
                        subaccountId?: string;
                        denom?: string;
                        deposits?: {
                            availableBalance?: string;
                            totalBalance?: string;
                        };
                    }[];
                    positions?: {
                        subaccountId?: string;
                        marketId?: string;
                        position?: {
                            isLong?: boolean;
                            quantity?: string;
                            entryPrice?: string;
                            margin?: string;
                            cumulativeFundingEntry?: string;
                        };
                    }[];
                    subaccountTradeNonces?: {
                        subaccountId?: string;
                        subaccountTradeNonce?: {
                            nonce?: number;
                        };
                    }[];
                    expiryFuturesMarketInfoState?: {
                        marketId?: string;
                        marketInfo?: {
                            marketId?: string;
                            expirationTimestamp?: any;
                            twapStartTimestamp?: any;
                            expirationTwapStartPriceCumulative?: string;
                            settlementPrice?: string;
                        };
                    }[];
                    perpetualMarketInfo?: {
                        marketId?: string;
                        hourlyFundingRateCap?: string;
                        hourlyInterestRate?: string;
                        nextFundingTimestamp?: any;
                        fundingInterval?: any;
                    }[];
                    perpetualMarketFundingState?: {
                        marketId?: string;
                        funding?: {
                            cumulativeFunding?: string;
                            cumulativePrice?: string;
                            lastTimestamp?: any;
                        };
                    }[];
                    derivativeMarketSettlementScheduled?: {
                        marketId?: string;
                        settlementPrice?: string;
                        startingDeficit?: string;
                    }[];
                    isSpotExchangeEnabled?: boolean;
                    isDerivativesExchangeEnabled?: boolean;
                    tradingRewardCampaignInfo?: {
                        campaignDurationSeconds?: any;
                        quoteDenoms?: string[];
                        tradingRewardBoostInfo?: {
                            boostedSpotMarketIds?: string[];
                            spotMarketMultipliers?: {
                                makerPointsMultiplier?: string;
                                takerPointsMultiplier?: string;
                            }[];
                            boostedDerivativeMarketIds?: string[];
                            derivativeMarketMultipliers?: {
                                makerPointsMultiplier?: string;
                                takerPointsMultiplier?: string;
                            }[];
                        };
                        disqualifiedMarketIds?: string[];
                    };
                    tradingRewardPoolCampaignSchedule?: {
                        startTimestamp?: any;
                        maxCampaignRewards?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    tradingRewardCampaignAccountPoints?: {
                        account?: string;
                        points?: string;
                    }[];
                    feeDiscountSchedule?: {
                        bucketCount?: any;
                        bucketDuration?: any;
                        quoteDenoms?: string[];
                        tierInfos?: {
                            makerDiscountRate?: string;
                            takerDiscountRate?: string;
                            stakedAmount?: string;
                            volume?: string;
                        }[];
                        disqualifiedMarketIds?: string[];
                    };
                    feeDiscountAccountTierTtl?: {
                        account?: string;
                        tierTtl?: {
                            tier?: any;
                            ttlTimestamp?: any;
                        };
                    }[];
                    feeDiscountBucketVolumeAccounts?: {
                        bucketStartTimestamp?: any;
                        accountVolume?: {
                            account?: string;
                            volume?: string;
                        }[];
                    }[];
                    isFirstFeeCycleFinished?: boolean;
                    pendingTradingRewardPoolCampaignSchedule?: {
                        startTimestamp?: any;
                        maxCampaignRewards?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    pendingTradingRewardCampaignAccountPoints?: {
                        rewardPoolStartTimestamp?: any;
                        accountPoints?: {
                            account?: string;
                            points?: string;
                        }[];
                    }[];
                    rewardsOptOutAddresses?: string[];
                    historicalTradeRecords?: {
                        marketId?: string;
                        latestTradeRecords?: {
                            timestamp?: any;
                            price?: string;
                            quantity?: string;
                        }[];
                    }[];
                    binaryOptionsMarkets?: {
                        ticker?: string;
                        oracleSymbol?: string;
                        oracleProvider?: string;
                        oracleType?: _156.OracleType;
                        oracleScaleFactor?: number;
                        expirationTimestamp?: any;
                        settlementTimestamp?: any;
                        admin?: string;
                        quoteDenom?: string;
                        marketId?: string;
                        makerFeeRate?: string;
                        takerFeeRate?: string;
                        relayerFeeShareRate?: string;
                        status?: _142.MarketStatus;
                        minPriceTickSize?: string;
                        minQuantityTickSize?: string;
                        settlementPrice?: string;
                    }[];
                    binaryOptionsMarketIdsScheduledForSettlement?: string[];
                    spotMarketIdsScheduledToForceClose?: string[];
                    denomDecimals?: {
                        denom?: string;
                        decimals?: any;
                    }[];
                    conditionalDerivativeOrderbooks?: {
                        marketId?: string;
                        limitBuyOrders?: {
                            orderInfo?: {
                                subaccountId?: string;
                                feeRecipient?: string;
                                price?: string;
                                quantity?: string;
                            };
                            orderType?: _142.OrderType;
                            margin?: string;
                            fillable?: string;
                            triggerPrice?: string;
                            orderHash?: Uint8Array;
                        }[];
                        marketBuyOrders?: {
                            orderInfo?: {
                                subaccountId?: string;
                                feeRecipient?: string;
                                price?: string;
                                quantity?: string;
                            };
                            orderType?: _142.OrderType;
                            margin?: string;
                            marginHold?: string;
                            triggerPrice?: string;
                            orderHash?: Uint8Array;
                        }[];
                        limitSellOrders?: {
                            orderInfo?: {
                                subaccountId?: string;
                                feeRecipient?: string;
                                price?: string;
                                quantity?: string;
                            };
                            orderType?: _142.OrderType;
                            margin?: string;
                            fillable?: string;
                            triggerPrice?: string;
                            orderHash?: Uint8Array;
                        }[];
                        marketSellOrders?: {
                            orderInfo?: {
                                subaccountId?: string;
                                feeRecipient?: string;
                                price?: string;
                                quantity?: string;
                            };
                            orderType?: _142.OrderType;
                            margin?: string;
                            marginHold?: string;
                            triggerPrice?: string;
                            orderHash?: Uint8Array;
                        }[];
                    }[];
                }): _143.GenesisState;
            };
            FeeDiscountAccountTierTTL: {
                encode(message: _143.FeeDiscountAccountTierTTL, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.FeeDiscountAccountTierTTL;
                fromPartial(object: {
                    account?: string;
                    tierTtl?: {
                        tier?: any;
                        ttlTimestamp?: any;
                    };
                }): _143.FeeDiscountAccountTierTTL;
            };
            FeeDiscountBucketVolumeAccounts: {
                encode(message: _143.FeeDiscountBucketVolumeAccounts, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.FeeDiscountBucketVolumeAccounts;
                fromPartial(object: {
                    bucketStartTimestamp?: any;
                    accountVolume?: {
                        account?: string;
                        volume?: string;
                    }[];
                }): _143.FeeDiscountBucketVolumeAccounts;
            };
            AccountVolume: {
                encode(message: _143.AccountVolume, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.AccountVolume;
                fromPartial(object: {
                    account?: string;
                    volume?: string;
                }): _143.AccountVolume;
            };
            TradingRewardCampaignAccountPoints: {
                encode(message: _143.TradingRewardCampaignAccountPoints, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.TradingRewardCampaignAccountPoints;
                fromPartial(object: {
                    account?: string;
                    points?: string;
                }): _143.TradingRewardCampaignAccountPoints;
            };
            TradingRewardCampaignAccountPendingPoints: {
                encode(message: _143.TradingRewardCampaignAccountPendingPoints, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.TradingRewardCampaignAccountPendingPoints;
                fromPartial(object: {
                    rewardPoolStartTimestamp?: any;
                    accountPoints?: {
                        account?: string;
                        points?: string;
                    }[];
                }): _143.TradingRewardCampaignAccountPendingPoints;
            };
            SpotOrderBook: {
                encode(message: _143.SpotOrderBook, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.SpotOrderBook;
                fromPartial(object: {
                    marketId?: string;
                    isBuySide?: boolean;
                    orders?: {
                        orderInfo?: {
                            subaccountId?: string;
                            feeRecipient?: string;
                            price?: string;
                            quantity?: string;
                        };
                        orderType?: _142.OrderType;
                        fillable?: string;
                        triggerPrice?: string;
                        orderHash?: Uint8Array;
                    }[];
                }): _143.SpotOrderBook;
            };
            DerivativeOrderBook: {
                encode(message: _143.DerivativeOrderBook, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.DerivativeOrderBook;
                fromPartial(object: {
                    marketId?: string;
                    isBuySide?: boolean;
                    orders?: {
                        orderInfo?: {
                            subaccountId?: string;
                            feeRecipient?: string;
                            price?: string;
                            quantity?: string;
                        };
                        orderType?: _142.OrderType;
                        margin?: string;
                        fillable?: string;
                        triggerPrice?: string;
                        orderHash?: Uint8Array;
                    }[];
                }): _143.DerivativeOrderBook;
            };
            ConditionalDerivativeOrderBook: {
                encode(message: _143.ConditionalDerivativeOrderBook, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.ConditionalDerivativeOrderBook;
                fromPartial(object: {
                    marketId?: string;
                    limitBuyOrders?: {
                        orderInfo?: {
                            subaccountId?: string;
                            feeRecipient?: string;
                            price?: string;
                            quantity?: string;
                        };
                        orderType?: _142.OrderType;
                        margin?: string;
                        fillable?: string;
                        triggerPrice?: string;
                        orderHash?: Uint8Array;
                    }[];
                    marketBuyOrders?: {
                        orderInfo?: {
                            subaccountId?: string;
                            feeRecipient?: string;
                            price?: string;
                            quantity?: string;
                        };
                        orderType?: _142.OrderType;
                        margin?: string;
                        marginHold?: string;
                        triggerPrice?: string;
                        orderHash?: Uint8Array;
                    }[];
                    limitSellOrders?: {
                        orderInfo?: {
                            subaccountId?: string;
                            feeRecipient?: string;
                            price?: string;
                            quantity?: string;
                        };
                        orderType?: _142.OrderType;
                        margin?: string;
                        fillable?: string;
                        triggerPrice?: string;
                        orderHash?: Uint8Array;
                    }[];
                    marketSellOrders?: {
                        orderInfo?: {
                            subaccountId?: string;
                            feeRecipient?: string;
                            price?: string;
                            quantity?: string;
                        };
                        orderType?: _142.OrderType;
                        margin?: string;
                        marginHold?: string;
                        triggerPrice?: string;
                        orderHash?: Uint8Array;
                    }[];
                }): _143.ConditionalDerivativeOrderBook;
            };
            Balance: {
                encode(message: _143.Balance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.Balance;
                fromPartial(object: {
                    subaccountId?: string;
                    denom?: string;
                    deposits?: {
                        availableBalance?: string;
                        totalBalance?: string;
                    };
                }): _143.Balance;
            };
            DerivativePosition: {
                encode(message: _143.DerivativePosition, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.DerivativePosition;
                fromPartial(object: {
                    subaccountId?: string;
                    marketId?: string;
                    position?: {
                        isLong?: boolean;
                        quantity?: string;
                        entryPrice?: string;
                        margin?: string;
                        cumulativeFundingEntry?: string;
                    };
                }): _143.DerivativePosition;
            };
            SubaccountNonce: {
                encode(message: _143.SubaccountNonce, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.SubaccountNonce;
                fromPartial(object: {
                    subaccountId?: string;
                    subaccountTradeNonce?: {
                        nonce?: number;
                    };
                }): _143.SubaccountNonce;
            };
            ExpiryFuturesMarketInfoState: {
                encode(message: _143.ExpiryFuturesMarketInfoState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.ExpiryFuturesMarketInfoState;
                fromPartial(object: {
                    marketId?: string;
                    marketInfo?: {
                        marketId?: string;
                        expirationTimestamp?: any;
                        twapStartTimestamp?: any;
                        expirationTwapStartPriceCumulative?: string;
                        settlementPrice?: string;
                    };
                }): _143.ExpiryFuturesMarketInfoState;
            };
            PerpetualMarketFundingState: {
                encode(message: _143.PerpetualMarketFundingState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.PerpetualMarketFundingState;
                fromPartial(object: {
                    marketId?: string;
                    funding?: {
                        cumulativeFunding?: string;
                        cumulativePrice?: string;
                        lastTimestamp?: any;
                    };
                }): _143.PerpetualMarketFundingState;
            };
            marketStatusFromJSON(object: any): _142.MarketStatus;
            marketStatusToJSON(object: _142.MarketStatus): string;
            orderTypeFromJSON(object: any): _142.OrderType;
            orderTypeToJSON(object: _142.OrderType): string;
            executionTypeFromJSON(object: any): _142.ExecutionType;
            executionTypeToJSON(object: _142.ExecutionType): string;
            orderMaskFromJSON(object: any): _142.OrderMask;
            orderMaskToJSON(object: _142.OrderMask): string;
            MarketStatus: typeof _142.MarketStatus;
            MarketStatusSDKType: typeof _142.MarketStatusSDKType;
            OrderType: typeof _142.OrderType;
            OrderTypeSDKType: typeof _142.OrderTypeSDKType;
            ExecutionType: typeof _142.ExecutionType;
            ExecutionTypeSDKType: typeof _142.ExecutionTypeSDKType;
            OrderMask: typeof _142.OrderMask;
            OrderMaskSDKType: typeof _142.OrderMaskSDKType;
            Params: {
                encode(message: _142.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.Params;
                fromPartial(object: {
                    spotMarketInstantListingFee?: {
                        denom?: string;
                        amount?: string;
                    };
                    derivativeMarketInstantListingFee?: {
                        denom?: string;
                        amount?: string;
                    };
                    defaultSpotMakerFeeRate?: string;
                    defaultSpotTakerFeeRate?: string;
                    defaultDerivativeMakerFeeRate?: string;
                    defaultDerivativeTakerFeeRate?: string;
                    defaultInitialMarginRatio?: string;
                    defaultMaintenanceMarginRatio?: string;
                    defaultFundingInterval?: any;
                    fundingMultiple?: any;
                    relayerFeeShareRate?: string;
                    defaultHourlyFundingRateCap?: string;
                    defaultHourlyInterestRate?: string;
                    maxDerivativeOrderSideCount?: number;
                    injRewardStakedRequirementThreshold?: string;
                    tradingRewardsVestingDuration?: any;
                    liquidatorRewardShareRate?: string;
                    binaryOptionsMarketInstantListingFee?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _142.Params;
            };
            DerivativeMarket: {
                encode(message: _142.DerivativeMarket, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.DerivativeMarket;
                fromPartial(object: {
                    ticker?: string;
                    oracleBase?: string;
                    oracleQuote?: string;
                    oracleType?: _156.OracleType;
                    oracleScaleFactor?: number;
                    quoteDenom?: string;
                    marketId?: string;
                    initialMarginRatio?: string;
                    maintenanceMarginRatio?: string;
                    makerFeeRate?: string;
                    takerFeeRate?: string;
                    relayerFeeShareRate?: string;
                    isPerpetual?: boolean;
                    status?: _142.MarketStatus;
                    minPriceTickSize?: string;
                    minQuantityTickSize?: string;
                }): _142.DerivativeMarket;
            };
            BinaryOptionsMarket: {
                encode(message: _142.BinaryOptionsMarket, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.BinaryOptionsMarket;
                fromPartial(object: {
                    ticker?: string;
                    oracleSymbol?: string;
                    oracleProvider?: string;
                    oracleType?: _156.OracleType;
                    oracleScaleFactor?: number;
                    expirationTimestamp?: any;
                    settlementTimestamp?: any;
                    admin?: string;
                    quoteDenom?: string;
                    marketId?: string;
                    makerFeeRate?: string;
                    takerFeeRate?: string;
                    relayerFeeShareRate?: string;
                    status?: _142.MarketStatus;
                    minPriceTickSize?: string;
                    minQuantityTickSize?: string;
                    settlementPrice?: string;
                }): _142.BinaryOptionsMarket;
            };
            ExpiryFuturesMarketInfo: {
                encode(message: _142.ExpiryFuturesMarketInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.ExpiryFuturesMarketInfo;
                fromPartial(object: {
                    marketId?: string;
                    expirationTimestamp?: any;
                    twapStartTimestamp?: any;
                    expirationTwapStartPriceCumulative?: string;
                    settlementPrice?: string;
                }): _142.ExpiryFuturesMarketInfo;
            };
            PerpetualMarketInfo: {
                encode(message: _142.PerpetualMarketInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.PerpetualMarketInfo;
                fromPartial(object: {
                    marketId?: string;
                    hourlyFundingRateCap?: string;
                    hourlyInterestRate?: string;
                    nextFundingTimestamp?: any;
                    fundingInterval?: any;
                }): _142.PerpetualMarketInfo;
            };
            PerpetualMarketFunding: {
                encode(message: _142.PerpetualMarketFunding, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.PerpetualMarketFunding;
                fromPartial(object: {
                    cumulativeFunding?: string;
                    cumulativePrice?: string;
                    lastTimestamp?: any;
                }): _142.PerpetualMarketFunding;
            };
            DerivativeMarketSettlementInfo: {
                encode(message: _142.DerivativeMarketSettlementInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.DerivativeMarketSettlementInfo;
                fromPartial(object: {
                    marketId?: string;
                    settlementPrice?: string;
                    startingDeficit?: string;
                }): _142.DerivativeMarketSettlementInfo;
            };
            NextFundingTimestamp: {
                encode(message: _142.NextFundingTimestamp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.NextFundingTimestamp;
                fromPartial(object: {
                    nextTimestamp?: any;
                }): _142.NextFundingTimestamp;
            };
            SpotMarket: {
                encode(message: _142.SpotMarket, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.SpotMarket;
                fromPartial(object: {
                    ticker?: string;
                    baseDenom?: string;
                    quoteDenom?: string;
                    makerFeeRate?: string;
                    takerFeeRate?: string;
                    relayerFeeShareRate?: string;
                    marketId?: string;
                    status?: _142.MarketStatus;
                    minPriceTickSize?: string;
                    minQuantityTickSize?: string;
                }): _142.SpotMarket;
            };
            Deposit: {
                encode(message: _142.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.Deposit;
                fromPartial(object: {
                    availableBalance?: string;
                    totalBalance?: string;
                }): _142.Deposit;
            };
            SubaccountTradeNonce: {
                encode(message: _142.SubaccountTradeNonce, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.SubaccountTradeNonce;
                fromPartial(object: {
                    nonce?: number;
                }): _142.SubaccountTradeNonce;
            };
            OrderInfo: {
                encode(message: _142.OrderInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.OrderInfo;
                fromPartial(object: {
                    subaccountId?: string;
                    feeRecipient?: string;
                    price?: string;
                    quantity?: string;
                }): _142.OrderInfo;
            };
            SpotOrder: {
                encode(message: _142.SpotOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.SpotOrder;
                fromPartial(object: {
                    marketId?: string;
                    orderInfo?: {
                        subaccountId?: string;
                        feeRecipient?: string;
                        price?: string;
                        quantity?: string;
                    };
                    orderType?: _142.OrderType;
                    triggerPrice?: string;
                }): _142.SpotOrder;
            };
            SpotLimitOrder: {
                encode(message: _142.SpotLimitOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.SpotLimitOrder;
                fromPartial(object: {
                    orderInfo?: {
                        subaccountId?: string;
                        feeRecipient?: string;
                        price?: string;
                        quantity?: string;
                    };
                    orderType?: _142.OrderType;
                    fillable?: string;
                    triggerPrice?: string;
                    orderHash?: Uint8Array;
                }): _142.SpotLimitOrder;
            };
            SpotMarketOrder: {
                encode(message: _142.SpotMarketOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.SpotMarketOrder;
                fromPartial(object: {
                    orderInfo?: {
                        subaccountId?: string;
                        feeRecipient?: string;
                        price?: string;
                        quantity?: string;
                    };
                    balanceHold?: string;
                    orderHash?: Uint8Array;
                    orderType?: _142.OrderType;
                    triggerPrice?: string;
                }): _142.SpotMarketOrder;
            };
            DerivativeOrder: {
                encode(message: _142.DerivativeOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.DerivativeOrder;
                fromPartial(object: {
                    marketId?: string;
                    orderInfo?: {
                        subaccountId?: string;
                        feeRecipient?: string;
                        price?: string;
                        quantity?: string;
                    };
                    orderType?: _142.OrderType;
                    margin?: string;
                    triggerPrice?: string;
                }): _142.DerivativeOrder;
            };
            SubaccountOrderbookMetadata: {
                encode(message: _142.SubaccountOrderbookMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.SubaccountOrderbookMetadata;
                fromPartial(object: {
                    vanillaLimitOrderCount?: number;
                    reduceOnlyLimitOrderCount?: number;
                    aggregateReduceOnlyQuantity?: string;
                    aggregateVanillaQuantity?: string;
                    vanillaConditionalOrderCount?: number;
                    reduceOnlyConditionalOrderCount?: number;
                }): _142.SubaccountOrderbookMetadata;
            };
            SubaccountOrder: {
                encode(message: _142.SubaccountOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.SubaccountOrder;
                fromPartial(object: {
                    price?: string;
                    quantity?: string;
                    isReduceOnly?: boolean;
                }): _142.SubaccountOrder;
            };
            SubaccountOrderData: {
                encode(message: _142.SubaccountOrderData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.SubaccountOrderData;
                fromPartial(object: {
                    order?: {
                        price?: string;
                        quantity?: string;
                        isReduceOnly?: boolean;
                    };
                    orderHash?: Uint8Array;
                }): _142.SubaccountOrderData;
            };
            DerivativeLimitOrder: {
                encode(message: _142.DerivativeLimitOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.DerivativeLimitOrder;
                fromPartial(object: {
                    orderInfo?: {
                        subaccountId?: string;
                        feeRecipient?: string;
                        price?: string;
                        quantity?: string;
                    };
                    orderType?: _142.OrderType;
                    margin?: string;
                    fillable?: string;
                    triggerPrice?: string;
                    orderHash?: Uint8Array;
                }): _142.DerivativeLimitOrder;
            };
            DerivativeMarketOrder: {
                encode(message: _142.DerivativeMarketOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.DerivativeMarketOrder;
                fromPartial(object: {
                    orderInfo?: {
                        subaccountId?: string;
                        feeRecipient?: string;
                        price?: string;
                        quantity?: string;
                    };
                    orderType?: _142.OrderType;
                    margin?: string;
                    marginHold?: string;
                    triggerPrice?: string;
                    orderHash?: Uint8Array;
                }): _142.DerivativeMarketOrder;
            };
            Position: {
                encode(message: _142.Position, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.Position;
                fromPartial(object: {
                    isLong?: boolean;
                    quantity?: string;
                    entryPrice?: string;
                    margin?: string;
                    cumulativeFundingEntry?: string;
                }): _142.Position;
            };
            MarketOrderIndicator: {
                encode(message: _142.MarketOrderIndicator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.MarketOrderIndicator;
                fromPartial(object: {
                    marketId?: string;
                    isBuy?: boolean;
                }): _142.MarketOrderIndicator;
            };
            TradeLog: {
                encode(message: _142.TradeLog, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.TradeLog;
                fromPartial(object: {
                    quantity?: string;
                    price?: string;
                    subaccountId?: Uint8Array;
                    fee?: string;
                    orderHash?: Uint8Array;
                    feeRecipientAddress?: Uint8Array;
                }): _142.TradeLog;
            };
            PositionDelta: {
                encode(message: _142.PositionDelta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.PositionDelta;
                fromPartial(object: {
                    isLong?: boolean;
                    executionQuantity?: string;
                    executionMargin?: string;
                    executionPrice?: string;
                }): _142.PositionDelta;
            };
            DerivativeTradeLog: {
                encode(message: _142.DerivativeTradeLog, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.DerivativeTradeLog;
                fromPartial(object: {
                    subaccountId?: Uint8Array;
                    positionDelta?: {
                        isLong?: boolean;
                        executionQuantity?: string;
                        executionMargin?: string;
                        executionPrice?: string;
                    };
                    payout?: string;
                    fee?: string;
                    orderHash?: Uint8Array;
                    feeRecipientAddress?: Uint8Array;
                }): _142.DerivativeTradeLog;
            };
            SubaccountPosition: {
                encode(message: _142.SubaccountPosition, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.SubaccountPosition;
                fromPartial(object: {
                    position?: {
                        isLong?: boolean;
                        quantity?: string;
                        entryPrice?: string;
                        margin?: string;
                        cumulativeFundingEntry?: string;
                    };
                    subaccountId?: Uint8Array;
                }): _142.SubaccountPosition;
            };
            SubaccountDeposit: {
                encode(message: _142.SubaccountDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.SubaccountDeposit;
                fromPartial(object: {
                    subaccountId?: Uint8Array;
                    deposit?: {
                        availableBalance?: string;
                        totalBalance?: string;
                    };
                }): _142.SubaccountDeposit;
            };
            DepositUpdate: {
                encode(message: _142.DepositUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.DepositUpdate;
                fromPartial(object: {
                    denom?: string;
                    deposits?: {
                        subaccountId?: Uint8Array;
                        deposit?: {
                            availableBalance?: string;
                            totalBalance?: string;
                        };
                    }[];
                }): _142.DepositUpdate;
            };
            PointsMultiplier: {
                encode(message: _142.PointsMultiplier, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.PointsMultiplier;
                fromPartial(object: {
                    makerPointsMultiplier?: string;
                    takerPointsMultiplier?: string;
                }): _142.PointsMultiplier;
            };
            TradingRewardCampaignBoostInfo: {
                encode(message: _142.TradingRewardCampaignBoostInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.TradingRewardCampaignBoostInfo;
                fromPartial(object: {
                    boostedSpotMarketIds?: string[];
                    spotMarketMultipliers?: {
                        makerPointsMultiplier?: string;
                        takerPointsMultiplier?: string;
                    }[];
                    boostedDerivativeMarketIds?: string[];
                    derivativeMarketMultipliers?: {
                        makerPointsMultiplier?: string;
                        takerPointsMultiplier?: string;
                    }[];
                }): _142.TradingRewardCampaignBoostInfo;
            };
            CampaignRewardPool: {
                encode(message: _142.CampaignRewardPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.CampaignRewardPool;
                fromPartial(object: {
                    startTimestamp?: any;
                    maxCampaignRewards?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _142.CampaignRewardPool;
            };
            TradingRewardCampaignInfo: {
                encode(message: _142.TradingRewardCampaignInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.TradingRewardCampaignInfo;
                fromPartial(object: {
                    campaignDurationSeconds?: any;
                    quoteDenoms?: string[];
                    tradingRewardBoostInfo?: {
                        boostedSpotMarketIds?: string[];
                        spotMarketMultipliers?: {
                            makerPointsMultiplier?: string;
                            takerPointsMultiplier?: string;
                        }[];
                        boostedDerivativeMarketIds?: string[];
                        derivativeMarketMultipliers?: {
                            makerPointsMultiplier?: string;
                            takerPointsMultiplier?: string;
                        }[];
                    };
                    disqualifiedMarketIds?: string[];
                }): _142.TradingRewardCampaignInfo;
            };
            FeeDiscountTierInfo: {
                encode(message: _142.FeeDiscountTierInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.FeeDiscountTierInfo;
                fromPartial(object: {
                    makerDiscountRate?: string;
                    takerDiscountRate?: string;
                    stakedAmount?: string;
                    volume?: string;
                }): _142.FeeDiscountTierInfo;
            };
            FeeDiscountSchedule: {
                encode(message: _142.FeeDiscountSchedule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.FeeDiscountSchedule;
                fromPartial(object: {
                    bucketCount?: any;
                    bucketDuration?: any;
                    quoteDenoms?: string[];
                    tierInfos?: {
                        makerDiscountRate?: string;
                        takerDiscountRate?: string;
                        stakedAmount?: string;
                        volume?: string;
                    }[];
                    disqualifiedMarketIds?: string[];
                }): _142.FeeDiscountSchedule;
            };
            FeeDiscountTierTTL: {
                encode(message: _142.FeeDiscountTierTTL, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.FeeDiscountTierTTL;
                fromPartial(object: {
                    tier?: any;
                    ttlTimestamp?: any;
                }): _142.FeeDiscountTierTTL;
            };
            AccountRewards: {
                encode(message: _142.AccountRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.AccountRewards;
                fromPartial(object: {
                    account?: string;
                    rewards?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _142.AccountRewards;
            };
            TradeRecords: {
                encode(message: _142.TradeRecords, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.TradeRecords;
                fromPartial(object: {
                    marketId?: string;
                    latestTradeRecords?: {
                        timestamp?: any;
                        price?: string;
                        quantity?: string;
                    }[];
                }): _142.TradeRecords;
            };
            SubaccountIDs: {
                encode(message: _142.SubaccountIDs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.SubaccountIDs;
                fromPartial(object: {
                    subaccountIds?: Uint8Array[];
                }): _142.SubaccountIDs;
            };
            TradeRecord: {
                encode(message: _142.TradeRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.TradeRecord;
                fromPartial(object: {
                    timestamp?: any;
                    price?: string;
                    quantity?: string;
                }): _142.TradeRecord;
            };
            EventBatchSpotExecution: {
                encode(message: _141.EventBatchSpotExecution, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.EventBatchSpotExecution;
                fromPartial(object: {
                    marketId?: string;
                    isBuy?: boolean;
                    executionType?: _142.ExecutionType;
                    trades?: {
                        quantity?: string;
                        price?: string;
                        subaccountId?: Uint8Array;
                        fee?: string;
                        orderHash?: Uint8Array;
                        feeRecipientAddress?: Uint8Array;
                    }[];
                }): _141.EventBatchSpotExecution;
            };
            EventBatchDerivativeExecution: {
                encode(message: _141.EventBatchDerivativeExecution, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.EventBatchDerivativeExecution;
                fromPartial(object: {
                    marketId?: string;
                    isBuy?: boolean;
                    isLiquidation?: boolean;
                    cumulativeFunding?: string;
                    executionType?: _142.ExecutionType;
                    trades?: {
                        subaccountId?: Uint8Array;
                        positionDelta?: {
                            isLong?: boolean;
                            executionQuantity?: string;
                            executionMargin?: string;
                            executionPrice?: string;
                        };
                        payout?: string;
                        fee?: string;
                        orderHash?: Uint8Array;
                        feeRecipientAddress?: Uint8Array;
                    }[];
                }): _141.EventBatchDerivativeExecution;
            };
            EventLostFundsFromLiquidation: {
                encode(message: _141.EventLostFundsFromLiquidation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.EventLostFundsFromLiquidation;
                fromPartial(object: {
                    marketId?: string;
                    subaccountId?: Uint8Array;
                    lostFundsFromAvailableDuringPayout?: string;
                    lostFundsFromOrderCancels?: string;
                }): _141.EventLostFundsFromLiquidation;
            };
            EventBatchDerivativePosition: {
                encode(message: _141.EventBatchDerivativePosition, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.EventBatchDerivativePosition;
                fromPartial(object: {
                    marketId?: string;
                    positions?: {
                        position?: {
                            isLong?: boolean;
                            quantity?: string;
                            entryPrice?: string;
                            margin?: string;
                            cumulativeFundingEntry?: string;
                        };
                        subaccountId?: Uint8Array;
                    }[];
                }): _141.EventBatchDerivativePosition;
            };
            EventDerivativeMarketPaused: {
                encode(message: _141.EventDerivativeMarketPaused, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.EventDerivativeMarketPaused;
                fromPartial(object: {
                    marketId?: string;
                    settlePrice?: string;
                    totalMissingFunds?: string;
                    missingFundsRate?: string;
                }): _141.EventDerivativeMarketPaused;
            };
            EventBinaryOptionsMarketUpdate: {
                encode(message: _141.EventBinaryOptionsMarketUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.EventBinaryOptionsMarketUpdate;
                fromPartial(object: {
                    market?: {
                        ticker?: string;
                        oracleSymbol?: string;
                        oracleProvider?: string;
                        oracleType?: _156.OracleType;
                        oracleScaleFactor?: number;
                        expirationTimestamp?: any;
                        settlementTimestamp?: any;
                        admin?: string;
                        quoteDenom?: string;
                        marketId?: string;
                        makerFeeRate?: string;
                        takerFeeRate?: string;
                        relayerFeeShareRate?: string;
                        status?: _142.MarketStatus;
                        minPriceTickSize?: string;
                        minQuantityTickSize?: string;
                        settlementPrice?: string;
                    };
                }): _141.EventBinaryOptionsMarketUpdate;
            };
            EventNewSpotOrders: {
                encode(message: _141.EventNewSpotOrders, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.EventNewSpotOrders;
                fromPartial(object: {
                    marketId?: string;
                    buyOrders?: {
                        orderInfo?: {
                            subaccountId?: string;
                            feeRecipient?: string;
                            price?: string;
                            quantity?: string;
                        };
                        orderType?: _142.OrderType;
                        fillable?: string;
                        triggerPrice?: string;
                        orderHash?: Uint8Array;
                    }[];
                    sellOrders?: {
                        orderInfo?: {
                            subaccountId?: string;
                            feeRecipient?: string;
                            price?: string;
                            quantity?: string;
                        };
                        orderType?: _142.OrderType;
                        fillable?: string;
                        triggerPrice?: string;
                        orderHash?: Uint8Array;
                    }[];
                }): _141.EventNewSpotOrders;
            };
            EventNewDerivativeOrders: {
                encode(message: _141.EventNewDerivativeOrders, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.EventNewDerivativeOrders;
                fromPartial(object: {
                    marketId?: string;
                    buyOrders?: {
                        orderInfo?: {
                            subaccountId?: string;
                            feeRecipient?: string;
                            price?: string;
                            quantity?: string;
                        };
                        orderType?: _142.OrderType;
                        margin?: string;
                        fillable?: string;
                        triggerPrice?: string;
                        orderHash?: Uint8Array;
                    }[];
                    sellOrders?: {
                        orderInfo?: {
                            subaccountId?: string;
                            feeRecipient?: string;
                            price?: string;
                            quantity?: string;
                        };
                        orderType?: _142.OrderType;
                        margin?: string;
                        fillable?: string;
                        triggerPrice?: string;
                        orderHash?: Uint8Array;
                    }[];
                }): _141.EventNewDerivativeOrders;
            };
            EventCancelSpotOrder: {
                encode(message: _141.EventCancelSpotOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.EventCancelSpotOrder;
                fromPartial(object: {
                    marketId?: string;
                    order?: {
                        orderInfo?: {
                            subaccountId?: string;
                            feeRecipient?: string;
                            price?: string;
                            quantity?: string;
                        };
                        orderType?: _142.OrderType;
                        fillable?: string;
                        triggerPrice?: string;
                        orderHash?: Uint8Array;
                    };
                }): _141.EventCancelSpotOrder;
            };
            EventSpotMarketUpdate: {
                encode(message: _141.EventSpotMarketUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.EventSpotMarketUpdate;
                fromPartial(object: {
                    market?: {
                        ticker?: string;
                        baseDenom?: string;
                        quoteDenom?: string;
                        makerFeeRate?: string;
                        takerFeeRate?: string;
                        relayerFeeShareRate?: string;
                        marketId?: string;
                        status?: _142.MarketStatus;
                        minPriceTickSize?: string;
                        minQuantityTickSize?: string;
                    };
                }): _141.EventSpotMarketUpdate;
            };
            EventPerpetualMarketUpdate: {
                encode(message: _141.EventPerpetualMarketUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.EventPerpetualMarketUpdate;
                fromPartial(object: {
                    market?: {
                        ticker?: string;
                        oracleBase?: string;
                        oracleQuote?: string;
                        oracleType?: _156.OracleType;
                        oracleScaleFactor?: number;
                        quoteDenom?: string;
                        marketId?: string;
                        initialMarginRatio?: string;
                        maintenanceMarginRatio?: string;
                        makerFeeRate?: string;
                        takerFeeRate?: string;
                        relayerFeeShareRate?: string;
                        isPerpetual?: boolean;
                        status?: _142.MarketStatus;
                        minPriceTickSize?: string;
                        minQuantityTickSize?: string;
                    };
                    perpetualMarketInfo?: {
                        marketId?: string;
                        hourlyFundingRateCap?: string;
                        hourlyInterestRate?: string;
                        nextFundingTimestamp?: any;
                        fundingInterval?: any;
                    };
                    funding?: {
                        cumulativeFunding?: string;
                        cumulativePrice?: string;
                        lastTimestamp?: any;
                    };
                }): _141.EventPerpetualMarketUpdate;
            };
            EventExpiryFuturesMarketUpdate: {
                encode(message: _141.EventExpiryFuturesMarketUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.EventExpiryFuturesMarketUpdate;
                fromPartial(object: {
                    market?: {
                        ticker?: string;
                        oracleBase?: string;
                        oracleQuote?: string;
                        oracleType?: _156.OracleType;
                        oracleScaleFactor?: number;
                        quoteDenom?: string;
                        marketId?: string;
                        initialMarginRatio?: string;
                        maintenanceMarginRatio?: string;
                        makerFeeRate?: string;
                        takerFeeRate?: string;
                        relayerFeeShareRate?: string;
                        isPerpetual?: boolean;
                        status?: _142.MarketStatus;
                        minPriceTickSize?: string;
                        minQuantityTickSize?: string;
                    };
                    expiryFuturesMarketInfo?: {
                        marketId?: string;
                        expirationTimestamp?: any;
                        twapStartTimestamp?: any;
                        expirationTwapStartPriceCumulative?: string;
                        settlementPrice?: string;
                    };
                }): _141.EventExpiryFuturesMarketUpdate;
            };
            EventPerpetualMarketFundingUpdate: {
                encode(message: _141.EventPerpetualMarketFundingUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.EventPerpetualMarketFundingUpdate;
                fromPartial(object: {
                    marketId?: string;
                    funding?: {
                        cumulativeFunding?: string;
                        cumulativePrice?: string;
                        lastTimestamp?: any;
                    };
                    isHourlyFunding?: boolean;
                    fundingRate?: string;
                    markPrice?: string;
                }): _141.EventPerpetualMarketFundingUpdate;
            };
            EventSubaccountDeposit: {
                encode(message: _141.EventSubaccountDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.EventSubaccountDeposit;
                fromPartial(object: {
                    srcAddress?: string;
                    subaccountId?: Uint8Array;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _141.EventSubaccountDeposit;
            };
            EventSubaccountWithdraw: {
                encode(message: _141.EventSubaccountWithdraw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.EventSubaccountWithdraw;
                fromPartial(object: {
                    subaccountId?: Uint8Array;
                    dstAddress?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _141.EventSubaccountWithdraw;
            };
            EventSubaccountBalanceTransfer: {
                encode(message: _141.EventSubaccountBalanceTransfer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.EventSubaccountBalanceTransfer;
                fromPartial(object: {
                    srcSubaccountId?: string;
                    dstSubaccountId?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _141.EventSubaccountBalanceTransfer;
            };
            EventBatchDepositUpdate: {
                encode(message: _141.EventBatchDepositUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.EventBatchDepositUpdate;
                fromPartial(object: {
                    depositUpdates?: {
                        denom?: string;
                        deposits?: {
                            subaccountId?: Uint8Array;
                            deposit?: {
                                availableBalance?: string;
                                totalBalance?: string;
                            };
                        }[];
                    }[];
                }): _141.EventBatchDepositUpdate;
            };
            DerivativeMarketOrderCancel: {
                encode(message: _141.DerivativeMarketOrderCancel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.DerivativeMarketOrderCancel;
                fromPartial(object: {
                    marketOrder?: {
                        orderInfo?: {
                            subaccountId?: string;
                            feeRecipient?: string;
                            price?: string;
                            quantity?: string;
                        };
                        orderType?: _142.OrderType;
                        margin?: string;
                        marginHold?: string;
                        triggerPrice?: string;
                        orderHash?: Uint8Array;
                    };
                    cancelQuantity?: string;
                }): _141.DerivativeMarketOrderCancel;
            };
            EventCancelDerivativeOrder: {
                encode(message: _141.EventCancelDerivativeOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.EventCancelDerivativeOrder;
                fromPartial(object: {
                    marketId?: string;
                    isLimitCancel?: boolean;
                    limitOrder?: {
                        orderInfo?: {
                            subaccountId?: string;
                            feeRecipient?: string;
                            price?: string;
                            quantity?: string;
                        };
                        orderType?: _142.OrderType;
                        margin?: string;
                        fillable?: string;
                        triggerPrice?: string;
                        orderHash?: Uint8Array;
                    };
                    marketOrderCancel?: {
                        marketOrder?: {
                            orderInfo?: {
                                subaccountId?: string;
                                feeRecipient?: string;
                                price?: string;
                                quantity?: string;
                            };
                            orderType?: _142.OrderType;
                            margin?: string;
                            marginHold?: string;
                            triggerPrice?: string;
                            orderHash?: Uint8Array;
                        };
                        cancelQuantity?: string;
                    };
                }): _141.EventCancelDerivativeOrder;
            };
            EventFeeDiscountSchedule: {
                encode(message: _141.EventFeeDiscountSchedule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.EventFeeDiscountSchedule;
                fromPartial(object: {
                    schedule?: {
                        bucketCount?: any;
                        bucketDuration?: any;
                        quoteDenoms?: string[];
                        tierInfos?: {
                            makerDiscountRate?: string;
                            takerDiscountRate?: string;
                            stakedAmount?: string;
                            volume?: string;
                        }[];
                        disqualifiedMarketIds?: string[];
                    };
                }): _141.EventFeeDiscountSchedule;
            };
            EventTradingRewardCampaignUpdate: {
                encode(message: _141.EventTradingRewardCampaignUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.EventTradingRewardCampaignUpdate;
                fromPartial(object: {
                    campaignInfo?: {
                        campaignDurationSeconds?: any;
                        quoteDenoms?: string[];
                        tradingRewardBoostInfo?: {
                            boostedSpotMarketIds?: string[];
                            spotMarketMultipliers?: {
                                makerPointsMultiplier?: string;
                                takerPointsMultiplier?: string;
                            }[];
                            boostedDerivativeMarketIds?: string[];
                            derivativeMarketMultipliers?: {
                                makerPointsMultiplier?: string;
                                takerPointsMultiplier?: string;
                            }[];
                        };
                        disqualifiedMarketIds?: string[];
                    };
                    campaignRewardPools?: {
                        startTimestamp?: any;
                        maxCampaignRewards?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                }): _141.EventTradingRewardCampaignUpdate;
            };
            EventTradingRewardDistribution: {
                encode(message: _141.EventTradingRewardDistribution, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.EventTradingRewardDistribution;
                fromPartial(object: {
                    accountRewards?: {
                        account?: string;
                        rewards?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                }): _141.EventTradingRewardDistribution;
            };
            EventNewConditionalDerivativeOrder: {
                encode(message: _141.EventNewConditionalDerivativeOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.EventNewConditionalDerivativeOrder;
                fromPartial(object: {
                    marketId?: string;
                    order?: {
                        marketId?: string;
                        orderInfo?: {
                            subaccountId?: string;
                            feeRecipient?: string;
                            price?: string;
                            quantity?: string;
                        };
                        orderType?: _142.OrderType;
                        margin?: string;
                        triggerPrice?: string;
                    };
                    hash?: Uint8Array;
                    isMarket?: boolean;
                }): _141.EventNewConditionalDerivativeOrder;
            };
            EventCancelConditionalDerivativeOrder: {
                encode(message: _141.EventCancelConditionalDerivativeOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.EventCancelConditionalDerivativeOrder;
                fromPartial(object: {
                    marketId?: string;
                    isLimitCancel?: boolean;
                    limitOrder?: {
                        orderInfo?: {
                            subaccountId?: string;
                            feeRecipient?: string;
                            price?: string;
                            quantity?: string;
                        };
                        orderType?: _142.OrderType;
                        margin?: string;
                        fillable?: string;
                        triggerPrice?: string;
                        orderHash?: Uint8Array;
                    };
                    marketOrder?: {
                        orderInfo?: {
                            subaccountId?: string;
                            feeRecipient?: string;
                            price?: string;
                            quantity?: string;
                        };
                        orderType?: _142.OrderType;
                        margin?: string;
                        marginHold?: string;
                        triggerPrice?: string;
                        orderHash?: Uint8Array;
                    };
                }): _141.EventCancelConditionalDerivativeOrder;
            };
            EventConditionalDerivativeOrderTrigger: {
                encode(message: _141.EventConditionalDerivativeOrderTrigger, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.EventConditionalDerivativeOrderTrigger;
                fromPartial(object: {
                    marketId?: Uint8Array;
                    isLimitTrigger?: boolean;
                    triggeredOrderHash?: Uint8Array;
                    placedOrderHash?: Uint8Array;
                }): _141.EventConditionalDerivativeOrderTrigger;
            };
            EventOrderFail: {
                encode(message: _141.EventOrderFail, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.EventOrderFail;
                fromPartial(object: {
                    account?: Uint8Array;
                    hashes?: Uint8Array[];
                    flags?: number[];
                }): _141.EventOrderFail;
            };
            CreateSpotLimitOrderAuthz: {
                encode(message: _140.CreateSpotLimitOrderAuthz, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.CreateSpotLimitOrderAuthz;
                fromPartial(object: {
                    subaccountId?: string;
                    marketIds?: string[];
                }): _140.CreateSpotLimitOrderAuthz;
            };
            CreateSpotMarketOrderAuthz: {
                encode(message: _140.CreateSpotMarketOrderAuthz, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.CreateSpotMarketOrderAuthz;
                fromPartial(object: {
                    subaccountId?: string;
                    marketIds?: string[];
                }): _140.CreateSpotMarketOrderAuthz;
            };
            BatchCreateSpotLimitOrdersAuthz: {
                encode(message: _140.BatchCreateSpotLimitOrdersAuthz, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.BatchCreateSpotLimitOrdersAuthz;
                fromPartial(object: {
                    subaccountId?: string;
                    marketIds?: string[];
                }): _140.BatchCreateSpotLimitOrdersAuthz;
            };
            CancelSpotOrderAuthz: {
                encode(message: _140.CancelSpotOrderAuthz, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.CancelSpotOrderAuthz;
                fromPartial(object: {
                    subaccountId?: string;
                    marketIds?: string[];
                }): _140.CancelSpotOrderAuthz;
            };
            BatchCancelSpotOrdersAuthz: {
                encode(message: _140.BatchCancelSpotOrdersAuthz, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.BatchCancelSpotOrdersAuthz;
                fromPartial(object: {
                    subaccountId?: string;
                    marketIds?: string[];
                }): _140.BatchCancelSpotOrdersAuthz;
            };
            CreateDerivativeLimitOrderAuthz: {
                encode(message: _140.CreateDerivativeLimitOrderAuthz, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.CreateDerivativeLimitOrderAuthz;
                fromPartial(object: {
                    subaccountId?: string;
                    marketIds?: string[];
                }): _140.CreateDerivativeLimitOrderAuthz;
            };
            CreateDerivativeMarketOrderAuthz: {
                encode(message: _140.CreateDerivativeMarketOrderAuthz, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.CreateDerivativeMarketOrderAuthz;
                fromPartial(object: {
                    subaccountId?: string;
                    marketIds?: string[];
                }): _140.CreateDerivativeMarketOrderAuthz;
            };
            BatchCreateDerivativeLimitOrdersAuthz: {
                encode(message: _140.BatchCreateDerivativeLimitOrdersAuthz, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.BatchCreateDerivativeLimitOrdersAuthz;
                fromPartial(object: {
                    subaccountId?: string;
                    marketIds?: string[];
                }): _140.BatchCreateDerivativeLimitOrdersAuthz;
            };
            CancelDerivativeOrderAuthz: {
                encode(message: _140.CancelDerivativeOrderAuthz, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.CancelDerivativeOrderAuthz;
                fromPartial(object: {
                    subaccountId?: string;
                    marketIds?: string[];
                }): _140.CancelDerivativeOrderAuthz;
            };
            BatchCancelDerivativeOrdersAuthz: {
                encode(message: _140.BatchCancelDerivativeOrdersAuthz, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.BatchCancelDerivativeOrdersAuthz;
                fromPartial(object: {
                    subaccountId?: string;
                    marketIds?: string[];
                }): _140.BatchCancelDerivativeOrdersAuthz;
            };
            BatchUpdateOrdersAuthz: {
                encode(message: _140.BatchUpdateOrdersAuthz, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.BatchUpdateOrdersAuthz;
                fromPartial(object: {
                    subaccountId?: string;
                    spotMarkets?: string[];
                    derivativeMarkets?: string[];
                }): _140.BatchUpdateOrdersAuthz;
            };
        };
    }
    namespace insurance {
        const v1beta1: {
            MsgClientImpl: typeof _319.MsgClientImpl;
            QueryClientImpl: typeof _312.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                insuranceParams(request?: _148.QueryInsuranceParamsRequest): Promise<_148.QueryInsuranceParamsResponse>;
                insuranceFund(request: _148.QueryInsuranceFundRequest): Promise<_148.QueryInsuranceFundResponse>;
                insuranceFunds(request?: _148.QueryInsuranceFundsRequest): Promise<_148.QueryInsuranceFundsResponse>;
                estimatedRedemptions(request: _148.QueryEstimatedRedemptionsRequest): Promise<_148.QueryEstimatedRedemptionsResponse>;
                pendingRedemptions(request: _148.QueryPendingRedemptionsRequest): Promise<_148.QueryPendingRedemptionsResponse>;
                insuranceModuleState(request?: _148.QueryModuleStateRequest): Promise<_148.QueryModuleStateResponse>;
            };
            LCDQueryClient: typeof _305.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createInsuranceFund(value: _149.MsgCreateInsuranceFund): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    underwrite(value: _149.MsgUnderwrite): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    requestRedemption(value: _149.MsgRequestRedemption): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createInsuranceFund(value: _149.MsgCreateInsuranceFund): {
                        typeUrl: string;
                        value: _149.MsgCreateInsuranceFund;
                    };
                    underwrite(value: _149.MsgUnderwrite): {
                        typeUrl: string;
                        value: _149.MsgUnderwrite;
                    };
                    requestRedemption(value: _149.MsgRequestRedemption): {
                        typeUrl: string;
                        value: _149.MsgRequestRedemption;
                    };
                };
                fromPartial: {
                    createInsuranceFund(value: _149.MsgCreateInsuranceFund): {
                        typeUrl: string;
                        value: _149.MsgCreateInsuranceFund;
                    };
                    underwrite(value: _149.MsgUnderwrite): {
                        typeUrl: string;
                        value: _149.MsgUnderwrite;
                    };
                    requestRedemption(value: _149.MsgRequestRedemption): {
                        typeUrl: string;
                        value: _149.MsgRequestRedemption;
                    };
                };
            };
            AminoConverter: {
                "/injective.insurance.v1beta1.MsgCreateInsuranceFund": {
                    aminoType: string;
                    toAmino: ({ sender, ticker, quoteDenom, oracleBase, oracleQuote, oracleType, expiry, initialDeposit }: _149.MsgCreateInsuranceFund) => {
                        sender: string;
                        ticker: string;
                        quote_denom: string;
                        oracle_base: string;
                        oracle_quote: string;
                        oracle_type: number;
                        expiry: string;
                        initial_deposit: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ sender, ticker, quote_denom, oracle_base, oracle_quote, oracle_type, expiry, initial_deposit }: {
                        sender: string;
                        ticker: string;
                        quote_denom: string;
                        oracle_base: string;
                        oracle_quote: string;
                        oracle_type: number;
                        expiry: string;
                        initial_deposit: {
                            denom: string;
                            amount: string;
                        };
                    }) => _149.MsgCreateInsuranceFund;
                };
                "/injective.insurance.v1beta1.MsgUnderwrite": {
                    aminoType: string;
                    toAmino: ({ sender, marketId, deposit }: _149.MsgUnderwrite) => {
                        sender: string;
                        market_id: string;
                        deposit: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ sender, market_id, deposit }: {
                        sender: string;
                        market_id: string;
                        deposit: {
                            denom: string;
                            amount: string;
                        };
                    }) => _149.MsgUnderwrite;
                };
                "/injective.insurance.v1beta1.MsgRequestRedemption": {
                    aminoType: string;
                    toAmino: ({ sender, marketId, amount }: _149.MsgRequestRedemption) => {
                        sender: string;
                        market_id: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ sender, market_id, amount }: {
                        sender: string;
                        market_id: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _149.MsgRequestRedemption;
                };
            };
            MsgCreateInsuranceFund: {
                encode(message: _149.MsgCreateInsuranceFund, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.MsgCreateInsuranceFund;
                fromPartial(object: {
                    sender?: string;
                    ticker?: string;
                    quoteDenom?: string;
                    oracleBase?: string;
                    oracleQuote?: string;
                    oracleType?: _156.OracleType;
                    expiry?: any;
                    initialDeposit?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _149.MsgCreateInsuranceFund;
            };
            MsgCreateInsuranceFundResponse: {
                encode(_: _149.MsgCreateInsuranceFundResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.MsgCreateInsuranceFundResponse;
                fromPartial(_: {}): _149.MsgCreateInsuranceFundResponse;
            };
            MsgUnderwrite: {
                encode(message: _149.MsgUnderwrite, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.MsgUnderwrite;
                fromPartial(object: {
                    sender?: string;
                    marketId?: string;
                    deposit?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _149.MsgUnderwrite;
            };
            MsgUnderwriteResponse: {
                encode(_: _149.MsgUnderwriteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.MsgUnderwriteResponse;
                fromPartial(_: {}): _149.MsgUnderwriteResponse;
            };
            MsgRequestRedemption: {
                encode(message: _149.MsgRequestRedemption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.MsgRequestRedemption;
                fromPartial(object: {
                    sender?: string;
                    marketId?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _149.MsgRequestRedemption;
            };
            MsgRequestRedemptionResponse: {
                encode(_: _149.MsgRequestRedemptionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.MsgRequestRedemptionResponse;
                fromPartial(_: {}): _149.MsgRequestRedemptionResponse;
            };
            QueryInsuranceParamsRequest: {
                encode(_: _148.QueryInsuranceParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.QueryInsuranceParamsRequest;
                fromPartial(_: {}): _148.QueryInsuranceParamsRequest;
            };
            QueryInsuranceParamsResponse: {
                encode(message: _148.QueryInsuranceParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.QueryInsuranceParamsResponse;
                fromPartial(object: {
                    params?: {
                        defaultRedemptionNoticePeriodDuration?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                }): _148.QueryInsuranceParamsResponse;
            };
            QueryInsuranceFundRequest: {
                encode(message: _148.QueryInsuranceFundRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.QueryInsuranceFundRequest;
                fromPartial(object: {
                    marketId?: string;
                }): _148.QueryInsuranceFundRequest;
            };
            QueryInsuranceFundResponse: {
                encode(message: _148.QueryInsuranceFundResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.QueryInsuranceFundResponse;
                fromPartial(object: {
                    fund?: {
                        depositDenom?: string;
                        insurancePoolTokenDenom?: string;
                        redemptionNoticePeriodDuration?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        balance?: string;
                        totalShare?: string;
                        marketId?: string;
                        marketTicker?: string;
                        oracleBase?: string;
                        oracleQuote?: string;
                        oracleType?: _156.OracleType;
                        expiry?: any;
                    };
                }): _148.QueryInsuranceFundResponse;
            };
            QueryInsuranceFundsRequest: {
                encode(_: _148.QueryInsuranceFundsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.QueryInsuranceFundsRequest;
                fromPartial(_: {}): _148.QueryInsuranceFundsRequest;
            };
            QueryInsuranceFundsResponse: {
                encode(message: _148.QueryInsuranceFundsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.QueryInsuranceFundsResponse;
                fromPartial(object: {
                    funds?: {
                        depositDenom?: string;
                        insurancePoolTokenDenom?: string;
                        redemptionNoticePeriodDuration?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        balance?: string;
                        totalShare?: string;
                        marketId?: string;
                        marketTicker?: string;
                        oracleBase?: string;
                        oracleQuote?: string;
                        oracleType?: _156.OracleType;
                        expiry?: any;
                    }[];
                }): _148.QueryInsuranceFundsResponse;
            };
            QueryEstimatedRedemptionsRequest: {
                encode(message: _148.QueryEstimatedRedemptionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.QueryEstimatedRedemptionsRequest;
                fromPartial(object: {
                    marketId?: string;
                    address?: string;
                }): _148.QueryEstimatedRedemptionsRequest;
            };
            QueryEstimatedRedemptionsResponse: {
                encode(message: _148.QueryEstimatedRedemptionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.QueryEstimatedRedemptionsResponse;
                fromPartial(object: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _148.QueryEstimatedRedemptionsResponse;
            };
            QueryPendingRedemptionsRequest: {
                encode(message: _148.QueryPendingRedemptionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.QueryPendingRedemptionsRequest;
                fromPartial(object: {
                    marketId?: string;
                    address?: string;
                }): _148.QueryPendingRedemptionsRequest;
            };
            QueryPendingRedemptionsResponse: {
                encode(message: _148.QueryPendingRedemptionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.QueryPendingRedemptionsResponse;
                fromPartial(object: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _148.QueryPendingRedemptionsResponse;
            };
            QueryModuleStateRequest: {
                encode(_: _148.QueryModuleStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.QueryModuleStateRequest;
                fromPartial(_: {}): _148.QueryModuleStateRequest;
            };
            QueryModuleStateResponse: {
                encode(message: _148.QueryModuleStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.QueryModuleStateResponse;
                fromPartial(object: {
                    state?: {
                        params?: {
                            defaultRedemptionNoticePeriodDuration?: {
                                seconds?: any;
                                nanos?: number;
                            };
                        };
                        insuranceFunds?: {
                            depositDenom?: string;
                            insurancePoolTokenDenom?: string;
                            redemptionNoticePeriodDuration?: {
                                seconds?: any;
                                nanos?: number;
                            };
                            balance?: string;
                            totalShare?: string;
                            marketId?: string;
                            marketTicker?: string;
                            oracleBase?: string;
                            oracleQuote?: string;
                            oracleType?: _156.OracleType;
                            expiry?: any;
                        }[];
                        redemptionSchedule?: {
                            id?: any;
                            marketId?: string;
                            redeemer?: string;
                            claimableRedemptionTime?: Date;
                            redemptionAmount?: {
                                denom?: string;
                                amount?: string;
                            };
                        }[];
                        nextShareDenomId?: any;
                        nextRedemptionScheduleId?: any;
                    };
                }): _148.QueryModuleStateResponse;
            };
            Params: {
                encode(message: _147.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.Params;
                fromPartial(object: {
                    defaultRedemptionNoticePeriodDuration?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _147.Params;
            };
            InsuranceFund: {
                encode(message: _147.InsuranceFund, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.InsuranceFund;
                fromPartial(object: {
                    depositDenom?: string;
                    insurancePoolTokenDenom?: string;
                    redemptionNoticePeriodDuration?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    balance?: string;
                    totalShare?: string;
                    marketId?: string;
                    marketTicker?: string;
                    oracleBase?: string;
                    oracleQuote?: string;
                    oracleType?: _156.OracleType;
                    expiry?: any;
                }): _147.InsuranceFund;
            };
            RedemptionSchedule: {
                encode(message: _147.RedemptionSchedule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.RedemptionSchedule;
                fromPartial(object: {
                    id?: any;
                    marketId?: string;
                    redeemer?: string;
                    claimableRedemptionTime?: Date;
                    redemptionAmount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _147.RedemptionSchedule;
            };
            EventInsuranceFundUpdate: {
                encode(message: _147.EventInsuranceFundUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.EventInsuranceFundUpdate;
                fromPartial(object: {
                    fund?: {
                        depositDenom?: string;
                        insurancePoolTokenDenom?: string;
                        redemptionNoticePeriodDuration?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        balance?: string;
                        totalShare?: string;
                        marketId?: string;
                        marketTicker?: string;
                        oracleBase?: string;
                        oracleQuote?: string;
                        oracleType?: _156.OracleType;
                        expiry?: any;
                    };
                }): _147.EventInsuranceFundUpdate;
            };
            EventRequestRedemption: {
                encode(message: _147.EventRequestRedemption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.EventRequestRedemption;
                fromPartial(object: {
                    schedule?: {
                        id?: any;
                        marketId?: string;
                        redeemer?: string;
                        claimableRedemptionTime?: Date;
                        redemptionAmount?: {
                            denom?: string;
                            amount?: string;
                        };
                    };
                }): _147.EventRequestRedemption;
            };
            EventWithdrawRedemption: {
                encode(message: _147.EventWithdrawRedemption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.EventWithdrawRedemption;
                fromPartial(object: {
                    schedule?: {
                        id?: any;
                        marketId?: string;
                        redeemer?: string;
                        claimableRedemptionTime?: Date;
                        redemptionAmount?: {
                            denom?: string;
                            amount?: string;
                        };
                    };
                    redeemCoin?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _147.EventWithdrawRedemption;
            };
            EventUnderwrite: {
                encode(message: _147.EventUnderwrite, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.EventUnderwrite;
                fromPartial(object: {
                    underwriter?: string;
                    marketId?: string;
                    deposit?: {
                        denom?: string;
                        amount?: string;
                    };
                    shares?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _147.EventUnderwrite;
            };
            GenesisState: {
                encode(message: _146.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.GenesisState;
                fromPartial(object: {
                    params?: {
                        defaultRedemptionNoticePeriodDuration?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                    insuranceFunds?: {
                        depositDenom?: string;
                        insurancePoolTokenDenom?: string;
                        redemptionNoticePeriodDuration?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        balance?: string;
                        totalShare?: string;
                        marketId?: string;
                        marketTicker?: string;
                        oracleBase?: string;
                        oracleQuote?: string;
                        oracleType?: _156.OracleType;
                        expiry?: any;
                    }[];
                    redemptionSchedule?: {
                        id?: any;
                        marketId?: string;
                        redeemer?: string;
                        claimableRedemptionTime?: Date;
                        redemptionAmount?: {
                            denom?: string;
                            amount?: string;
                        };
                    }[];
                    nextShareDenomId?: any;
                    nextRedemptionScheduleId?: any;
                }): _146.GenesisState;
            };
        };
    }
    namespace ocr {
        const v1beta1: {
            MsgClientImpl: typeof _320.MsgClientImpl;
            QueryClientImpl: typeof _313.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _152.QueryParamsRequest): Promise<_152.QueryParamsResponse>;
                feedConfig(request: _152.QueryFeedConfigRequest): Promise<_152.QueryFeedConfigResponse>;
                feedConfigInfo(request: _152.QueryFeedConfigInfoRequest): Promise<_152.QueryFeedConfigInfoResponse>;
                latestRound(request: _152.QueryLatestRoundRequest): Promise<_152.QueryLatestRoundResponse>;
                latestTransmissionDetails(request: _152.QueryLatestTransmissionDetailsRequest): Promise<_152.QueryLatestTransmissionDetailsResponse>;
                owedAmount(request: _152.QueryOwedAmountRequest): Promise<_152.QueryOwedAmountResponse>;
                ocrModuleState(request?: _152.QueryModuleStateRequest): Promise<_152.QueryModuleStateResponse>;
            };
            LCDQueryClient: typeof _306.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createFeed(value: _153.MsgCreateFeed): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateFeed(value: _153.MsgUpdateFeed): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    transmit(value: _153.MsgTransmit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundFeedRewardPool(value: _153.MsgFundFeedRewardPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawFeedRewardPool(value: _153.MsgWithdrawFeedRewardPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setPayees(value: _153.MsgSetPayees): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    transferPayeeship(value: _153.MsgTransferPayeeship): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    acceptPayeeship(value: _153.MsgAcceptPayeeship): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createFeed(value: _153.MsgCreateFeed): {
                        typeUrl: string;
                        value: _153.MsgCreateFeed;
                    };
                    updateFeed(value: _153.MsgUpdateFeed): {
                        typeUrl: string;
                        value: _153.MsgUpdateFeed;
                    };
                    transmit(value: _153.MsgTransmit): {
                        typeUrl: string;
                        value: _153.MsgTransmit;
                    };
                    fundFeedRewardPool(value: _153.MsgFundFeedRewardPool): {
                        typeUrl: string;
                        value: _153.MsgFundFeedRewardPool;
                    };
                    withdrawFeedRewardPool(value: _153.MsgWithdrawFeedRewardPool): {
                        typeUrl: string;
                        value: _153.MsgWithdrawFeedRewardPool;
                    };
                    setPayees(value: _153.MsgSetPayees): {
                        typeUrl: string;
                        value: _153.MsgSetPayees;
                    };
                    transferPayeeship(value: _153.MsgTransferPayeeship): {
                        typeUrl: string;
                        value: _153.MsgTransferPayeeship;
                    };
                    acceptPayeeship(value: _153.MsgAcceptPayeeship): {
                        typeUrl: string;
                        value: _153.MsgAcceptPayeeship;
                    };
                };
                fromPartial: {
                    createFeed(value: _153.MsgCreateFeed): {
                        typeUrl: string;
                        value: _153.MsgCreateFeed;
                    };
                    updateFeed(value: _153.MsgUpdateFeed): {
                        typeUrl: string;
                        value: _153.MsgUpdateFeed;
                    };
                    transmit(value: _153.MsgTransmit): {
                        typeUrl: string;
                        value: _153.MsgTransmit;
                    };
                    fundFeedRewardPool(value: _153.MsgFundFeedRewardPool): {
                        typeUrl: string;
                        value: _153.MsgFundFeedRewardPool;
                    };
                    withdrawFeedRewardPool(value: _153.MsgWithdrawFeedRewardPool): {
                        typeUrl: string;
                        value: _153.MsgWithdrawFeedRewardPool;
                    };
                    setPayees(value: _153.MsgSetPayees): {
                        typeUrl: string;
                        value: _153.MsgSetPayees;
                    };
                    transferPayeeship(value: _153.MsgTransferPayeeship): {
                        typeUrl: string;
                        value: _153.MsgTransferPayeeship;
                    };
                    acceptPayeeship(value: _153.MsgAcceptPayeeship): {
                        typeUrl: string;
                        value: _153.MsgAcceptPayeeship;
                    };
                };
            };
            AminoConverter: {
                "/injective.ocr.v1beta1.MsgCreateFeed": {
                    aminoType: string;
                    toAmino: ({ sender, config }: _153.MsgCreateFeed) => {
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
                    fromAmino: ({ sender, config }: {
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
                    }) => _153.MsgCreateFeed;
                };
                "/injective.ocr.v1beta1.MsgUpdateFeed": {
                    aminoType: string;
                    toAmino: ({ sender, feedId, signers, transmitters, linkPerObservation, linkPerTransmission, linkDenom, feedAdmin, billingAdmin }: _153.MsgUpdateFeed) => {
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
                    fromAmino: ({ sender, feed_id, signers, transmitters, link_per_observation, link_per_transmission, link_denom, feed_admin, billing_admin }: {
                        sender: string;
                        feed_id: string;
                        signers: string[];
                        transmitters: string[];
                        link_per_observation: string;
                        link_per_transmission: string;
                        link_denom: string;
                        feed_admin: string;
                        billing_admin: string;
                    }) => _153.MsgUpdateFeed;
                };
                "/injective.ocr.v1beta1.MsgTransmit": {
                    aminoType: string;
                    toAmino: ({ transmitter, configDigest, feedId, epoch, round, extraHash, report, signatures }: _153.MsgTransmit) => {
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
                    fromAmino: ({ transmitter, config_digest, feed_id, epoch, round, extra_hash, report, signatures }: {
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
                    }) => _153.MsgTransmit;
                };
                "/injective.ocr.v1beta1.MsgFundFeedRewardPool": {
                    aminoType: string;
                    toAmino: ({ sender, feedId, amount }: _153.MsgFundFeedRewardPool) => {
                        sender: string;
                        feed_id: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ sender, feed_id, amount }: {
                        sender: string;
                        feed_id: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _153.MsgFundFeedRewardPool;
                };
                "/injective.ocr.v1beta1.MsgWithdrawFeedRewardPool": {
                    aminoType: string;
                    toAmino: ({ sender, feedId, amount }: _153.MsgWithdrawFeedRewardPool) => {
                        sender: string;
                        feed_id: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ sender, feed_id, amount }: {
                        sender: string;
                        feed_id: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _153.MsgWithdrawFeedRewardPool;
                };
                "/injective.ocr.v1beta1.MsgSetPayees": {
                    aminoType: string;
                    toAmino: ({ sender, feedId, transmitters, payees }: _153.MsgSetPayees) => {
                        sender: string;
                        feed_id: string;
                        transmitters: string[];
                        payees: string[];
                    };
                    fromAmino: ({ sender, feed_id, transmitters, payees }: {
                        sender: string;
                        feed_id: string;
                        transmitters: string[];
                        payees: string[];
                    }) => _153.MsgSetPayees;
                };
                "/injective.ocr.v1beta1.MsgTransferPayeeship": {
                    aminoType: string;
                    toAmino: ({ sender, transmitter, feedId, proposed }: _153.MsgTransferPayeeship) => {
                        sender: string;
                        transmitter: string;
                        feed_id: string;
                        proposed: string;
                    };
                    fromAmino: ({ sender, transmitter, feed_id, proposed }: {
                        sender: string;
                        transmitter: string;
                        feed_id: string;
                        proposed: string;
                    }) => _153.MsgTransferPayeeship;
                };
                "/injective.ocr.v1beta1.MsgAcceptPayeeship": {
                    aminoType: string;
                    toAmino: ({ payee, transmitter, feedId }: _153.MsgAcceptPayeeship) => {
                        payee: string;
                        transmitter: string;
                        feed_id: string;
                    };
                    fromAmino: ({ payee, transmitter, feed_id }: {
                        payee: string;
                        transmitter: string;
                        feed_id: string;
                    }) => _153.MsgAcceptPayeeship;
                };
            };
            MsgCreateFeed: {
                encode(message: _153.MsgCreateFeed, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgCreateFeed;
                fromPartial(object: {
                    sender?: string;
                    config?: {
                        signers?: string[];
                        transmitters?: string[];
                        f?: number;
                        onchainConfig?: Uint8Array;
                        offchainConfigVersion?: any;
                        offchainConfig?: Uint8Array;
                        moduleParams?: {
                            feedId?: string;
                            minAnswer?: string;
                            maxAnswer?: string;
                            linkPerObservation?: string;
                            linkPerTransmission?: string;
                            linkDenom?: string;
                            uniqueReports?: boolean;
                            description?: string;
                            feedAdmin?: string;
                            billingAdmin?: string;
                        };
                    };
                }): _153.MsgCreateFeed;
            };
            MsgCreateFeedResponse: {
                encode(_: _153.MsgCreateFeedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgCreateFeedResponse;
                fromPartial(_: {}): _153.MsgCreateFeedResponse;
            };
            MsgUpdateFeed: {
                encode(message: _153.MsgUpdateFeed, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgUpdateFeed;
                fromPartial(object: {
                    sender?: string;
                    feedId?: string;
                    signers?: string[];
                    transmitters?: string[];
                    linkPerObservation?: string;
                    linkPerTransmission?: string;
                    linkDenom?: string;
                    feedAdmin?: string;
                    billingAdmin?: string;
                }): _153.MsgUpdateFeed;
            };
            MsgUpdateFeedResponse: {
                encode(_: _153.MsgUpdateFeedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgUpdateFeedResponse;
                fromPartial(_: {}): _153.MsgUpdateFeedResponse;
            };
            MsgTransmit: {
                encode(message: _153.MsgTransmit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgTransmit;
                fromPartial(object: {
                    transmitter?: string;
                    configDigest?: Uint8Array;
                    feedId?: string;
                    epoch?: any;
                    round?: any;
                    extraHash?: Uint8Array;
                    report?: {
                        observationsTimestamp?: any;
                        observers?: Uint8Array;
                        observations?: string[];
                    };
                    signatures?: Uint8Array[];
                }): _153.MsgTransmit;
            };
            MsgTransmitResponse: {
                encode(_: _153.MsgTransmitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgTransmitResponse;
                fromPartial(_: {}): _153.MsgTransmitResponse;
            };
            MsgFundFeedRewardPool: {
                encode(message: _153.MsgFundFeedRewardPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgFundFeedRewardPool;
                fromPartial(object: {
                    sender?: string;
                    feedId?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _153.MsgFundFeedRewardPool;
            };
            MsgFundFeedRewardPoolResponse: {
                encode(_: _153.MsgFundFeedRewardPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgFundFeedRewardPoolResponse;
                fromPartial(_: {}): _153.MsgFundFeedRewardPoolResponse;
            };
            MsgWithdrawFeedRewardPool: {
                encode(message: _153.MsgWithdrawFeedRewardPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgWithdrawFeedRewardPool;
                fromPartial(object: {
                    sender?: string;
                    feedId?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _153.MsgWithdrawFeedRewardPool;
            };
            MsgWithdrawFeedRewardPoolResponse: {
                encode(_: _153.MsgWithdrawFeedRewardPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgWithdrawFeedRewardPoolResponse;
                fromPartial(_: {}): _153.MsgWithdrawFeedRewardPoolResponse;
            };
            MsgSetPayees: {
                encode(message: _153.MsgSetPayees, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgSetPayees;
                fromPartial(object: {
                    sender?: string;
                    feedId?: string;
                    transmitters?: string[];
                    payees?: string[];
                }): _153.MsgSetPayees;
            };
            MsgSetPayeesResponse: {
                encode(_: _153.MsgSetPayeesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgSetPayeesResponse;
                fromPartial(_: {}): _153.MsgSetPayeesResponse;
            };
            MsgTransferPayeeship: {
                encode(message: _153.MsgTransferPayeeship, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgTransferPayeeship;
                fromPartial(object: {
                    sender?: string;
                    transmitter?: string;
                    feedId?: string;
                    proposed?: string;
                }): _153.MsgTransferPayeeship;
            };
            MsgTransferPayeeshipResponse: {
                encode(_: _153.MsgTransferPayeeshipResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgTransferPayeeshipResponse;
                fromPartial(_: {}): _153.MsgTransferPayeeshipResponse;
            };
            MsgAcceptPayeeship: {
                encode(message: _153.MsgAcceptPayeeship, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgAcceptPayeeship;
                fromPartial(object: {
                    payee?: string;
                    transmitter?: string;
                    feedId?: string;
                }): _153.MsgAcceptPayeeship;
            };
            MsgAcceptPayeeshipResponse: {
                encode(_: _153.MsgAcceptPayeeshipResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgAcceptPayeeshipResponse;
                fromPartial(_: {}): _153.MsgAcceptPayeeshipResponse;
            };
            QueryParamsRequest: {
                encode(_: _152.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.QueryParamsRequest;
                fromPartial(_: {}): _152.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _152.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.QueryParamsResponse;
                fromPartial(object: {
                    params?: {
                        linkDenom?: string;
                        payoutBlockInterval?: any;
                        moduleAdmin?: string;
                    };
                }): _152.QueryParamsResponse;
            };
            QueryFeedConfigRequest: {
                encode(message: _152.QueryFeedConfigRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.QueryFeedConfigRequest;
                fromPartial(object: {
                    feedId?: string;
                }): _152.QueryFeedConfigRequest;
            };
            QueryFeedConfigResponse: {
                encode(message: _152.QueryFeedConfigResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.QueryFeedConfigResponse;
                fromPartial(object: {
                    feedConfigInfo?: {
                        latestConfigDigest?: Uint8Array;
                        f?: number;
                        n?: number;
                        configCount?: any;
                        latestConfigBlockNumber?: any;
                    };
                    feedConfig?: {
                        signers?: string[];
                        transmitters?: string[];
                        f?: number;
                        onchainConfig?: Uint8Array;
                        offchainConfigVersion?: any;
                        offchainConfig?: Uint8Array;
                        moduleParams?: {
                            feedId?: string;
                            minAnswer?: string;
                            maxAnswer?: string;
                            linkPerObservation?: string;
                            linkPerTransmission?: string;
                            linkDenom?: string;
                            uniqueReports?: boolean;
                            description?: string;
                            feedAdmin?: string;
                            billingAdmin?: string;
                        };
                    };
                }): _152.QueryFeedConfigResponse;
            };
            QueryFeedConfigInfoRequest: {
                encode(message: _152.QueryFeedConfigInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.QueryFeedConfigInfoRequest;
                fromPartial(object: {
                    feedId?: string;
                }): _152.QueryFeedConfigInfoRequest;
            };
            QueryFeedConfigInfoResponse: {
                encode(message: _152.QueryFeedConfigInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.QueryFeedConfigInfoResponse;
                fromPartial(object: {
                    feedConfigInfo?: {
                        latestConfigDigest?: Uint8Array;
                        f?: number;
                        n?: number;
                        configCount?: any;
                        latestConfigBlockNumber?: any;
                    };
                    epochAndRound?: {
                        epoch?: any;
                        round?: any;
                    };
                }): _152.QueryFeedConfigInfoResponse;
            };
            QueryLatestRoundRequest: {
                encode(message: _152.QueryLatestRoundRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.QueryLatestRoundRequest;
                fromPartial(object: {
                    feedId?: string;
                }): _152.QueryLatestRoundRequest;
            };
            QueryLatestRoundResponse: {
                encode(message: _152.QueryLatestRoundResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.QueryLatestRoundResponse;
                fromPartial(object: {
                    latestRoundId?: any;
                    data?: {
                        answer?: string;
                        observationsTimestamp?: any;
                        transmissionTimestamp?: any;
                    };
                }): _152.QueryLatestRoundResponse;
            };
            QueryLatestTransmissionDetailsRequest: {
                encode(message: _152.QueryLatestTransmissionDetailsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.QueryLatestTransmissionDetailsRequest;
                fromPartial(object: {
                    feedId?: string;
                }): _152.QueryLatestTransmissionDetailsRequest;
            };
            QueryLatestTransmissionDetailsResponse: {
                encode(message: _152.QueryLatestTransmissionDetailsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.QueryLatestTransmissionDetailsResponse;
                fromPartial(object: {
                    configDigest?: Uint8Array;
                    epochAndRound?: {
                        epoch?: any;
                        round?: any;
                    };
                    data?: {
                        answer?: string;
                        observationsTimestamp?: any;
                        transmissionTimestamp?: any;
                    };
                }): _152.QueryLatestTransmissionDetailsResponse;
            };
            QueryOwedAmountRequest: {
                encode(message: _152.QueryOwedAmountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.QueryOwedAmountRequest;
                fromPartial(object: {
                    transmitter?: string;
                }): _152.QueryOwedAmountRequest;
            };
            QueryOwedAmountResponse: {
                encode(message: _152.QueryOwedAmountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.QueryOwedAmountResponse;
                fromPartial(object: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _152.QueryOwedAmountResponse;
            };
            QueryModuleStateRequest: {
                encode(_: _152.QueryModuleStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.QueryModuleStateRequest;
                fromPartial(_: {}): _152.QueryModuleStateRequest;
            };
            QueryModuleStateResponse: {
                encode(message: _152.QueryModuleStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.QueryModuleStateResponse;
                fromPartial(object: {
                    state?: {
                        params?: {
                            linkDenom?: string;
                            payoutBlockInterval?: any;
                            moduleAdmin?: string;
                        };
                        feedConfigs?: {
                            signers?: string[];
                            transmitters?: string[];
                            f?: number;
                            onchainConfig?: Uint8Array;
                            offchainConfigVersion?: any;
                            offchainConfig?: Uint8Array;
                            moduleParams?: {
                                feedId?: string;
                                minAnswer?: string;
                                maxAnswer?: string;
                                linkPerObservation?: string;
                                linkPerTransmission?: string;
                                linkDenom?: string;
                                uniqueReports?: boolean;
                                description?: string;
                                feedAdmin?: string;
                                billingAdmin?: string;
                            };
                        }[];
                        latestEpochAndRounds?: {
                            feedId?: string;
                            epochAndRound?: {
                                epoch?: any;
                                round?: any;
                            };
                        }[];
                        feedTransmissions?: {
                            feedId?: string;
                            transmission?: {
                                answer?: string;
                                observationsTimestamp?: any;
                                transmissionTimestamp?: any;
                            };
                        }[];
                        latestAggregatorRoundIds?: {
                            feedId?: string;
                            aggregatorRoundId?: any;
                        }[];
                        rewardPools?: {
                            feedId?: string;
                            amount?: {
                                denom?: string;
                                amount?: string;
                            };
                        }[];
                        feedObservationCounts?: {
                            feedId?: string;
                            counts?: {
                                address?: string;
                                count?: any;
                            }[];
                        }[];
                        feedTransmissionCounts?: {
                            feedId?: string;
                            counts?: {
                                address?: string;
                                count?: any;
                            }[];
                        }[];
                        pendingPayeeships?: {
                            feedId?: string;
                            transmitter?: string;
                            proposedPayee?: string;
                        }[];
                    };
                }): _152.QueryModuleStateResponse;
            };
            Params: {
                encode(message: _151.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.Params;
                fromPartial(object: {
                    linkDenom?: string;
                    payoutBlockInterval?: any;
                    moduleAdmin?: string;
                }): _151.Params;
            };
            FeedConfig: {
                encode(message: _151.FeedConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.FeedConfig;
                fromPartial(object: {
                    signers?: string[];
                    transmitters?: string[];
                    f?: number;
                    onchainConfig?: Uint8Array;
                    offchainConfigVersion?: any;
                    offchainConfig?: Uint8Array;
                    moduleParams?: {
                        feedId?: string;
                        minAnswer?: string;
                        maxAnswer?: string;
                        linkPerObservation?: string;
                        linkPerTransmission?: string;
                        linkDenom?: string;
                        uniqueReports?: boolean;
                        description?: string;
                        feedAdmin?: string;
                        billingAdmin?: string;
                    };
                }): _151.FeedConfig;
            };
            FeedConfigInfo: {
                encode(message: _151.FeedConfigInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.FeedConfigInfo;
                fromPartial(object: {
                    latestConfigDigest?: Uint8Array;
                    f?: number;
                    n?: number;
                    configCount?: any;
                    latestConfigBlockNumber?: any;
                }): _151.FeedConfigInfo;
            };
            ModuleParams: {
                encode(message: _151.ModuleParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.ModuleParams;
                fromPartial(object: {
                    feedId?: string;
                    minAnswer?: string;
                    maxAnswer?: string;
                    linkPerObservation?: string;
                    linkPerTransmission?: string;
                    linkDenom?: string;
                    uniqueReports?: boolean;
                    description?: string;
                    feedAdmin?: string;
                    billingAdmin?: string;
                }): _151.ModuleParams;
            };
            ContractConfig: {
                encode(message: _151.ContractConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.ContractConfig;
                fromPartial(object: {
                    configCount?: any;
                    signers?: string[];
                    transmitters?: string[];
                    f?: number;
                    onchainConfig?: Uint8Array;
                    offchainConfigVersion?: any;
                    offchainConfig?: Uint8Array;
                }): _151.ContractConfig;
            };
            SetConfigProposal: {
                encode(message: _151.SetConfigProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.SetConfigProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    config?: {
                        signers?: string[];
                        transmitters?: string[];
                        f?: number;
                        onchainConfig?: Uint8Array;
                        offchainConfigVersion?: any;
                        offchainConfig?: Uint8Array;
                        moduleParams?: {
                            feedId?: string;
                            minAnswer?: string;
                            maxAnswer?: string;
                            linkPerObservation?: string;
                            linkPerTransmission?: string;
                            linkDenom?: string;
                            uniqueReports?: boolean;
                            description?: string;
                            feedAdmin?: string;
                            billingAdmin?: string;
                        };
                    };
                }): _151.SetConfigProposal;
            };
            FeedProperties: {
                encode(message: _151.FeedProperties, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.FeedProperties;
                fromPartial(object: {
                    feedId?: string;
                    f?: number;
                    onchainConfig?: Uint8Array;
                    offchainConfigVersion?: any;
                    offchainConfig?: Uint8Array;
                    minAnswer?: string;
                    maxAnswer?: string;
                    linkPerObservation?: string;
                    linkPerTransmission?: string;
                    uniqueReports?: boolean;
                    description?: string;
                }): _151.FeedProperties;
            };
            SetBatchConfigProposal: {
                encode(message: _151.SetBatchConfigProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.SetBatchConfigProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    signers?: string[];
                    transmitters?: string[];
                    linkDenom?: string;
                    feedProperties?: {
                        feedId?: string;
                        f?: number;
                        onchainConfig?: Uint8Array;
                        offchainConfigVersion?: any;
                        offchainConfig?: Uint8Array;
                        minAnswer?: string;
                        maxAnswer?: string;
                        linkPerObservation?: string;
                        linkPerTransmission?: string;
                        uniqueReports?: boolean;
                        description?: string;
                    }[];
                }): _151.SetBatchConfigProposal;
            };
            OracleObservationsCounts: {
                encode(message: _151.OracleObservationsCounts, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.OracleObservationsCounts;
                fromPartial(object: {
                    counts?: number[];
                }): _151.OracleObservationsCounts;
            };
            GasReimbursements: {
                encode(message: _151.GasReimbursements, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.GasReimbursements;
                fromPartial(object: {
                    reimbursements?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _151.GasReimbursements;
            };
            Payee: {
                encode(message: _151.Payee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.Payee;
                fromPartial(object: {
                    transmitterAddr?: string;
                    paymentAddr?: string;
                }): _151.Payee;
            };
            Transmission: {
                encode(message: _151.Transmission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.Transmission;
                fromPartial(object: {
                    answer?: string;
                    observationsTimestamp?: any;
                    transmissionTimestamp?: any;
                }): _151.Transmission;
            };
            EpochAndRound: {
                encode(message: _151.EpochAndRound, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.EpochAndRound;
                fromPartial(object: {
                    epoch?: any;
                    round?: any;
                }): _151.EpochAndRound;
            };
            Report: {
                encode(message: _151.Report, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.Report;
                fromPartial(object: {
                    observationsTimestamp?: any;
                    observers?: Uint8Array;
                    observations?: string[];
                }): _151.Report;
            };
            ReportToSign: {
                encode(message: _151.ReportToSign, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.ReportToSign;
                fromPartial(object: {
                    configDigest?: Uint8Array;
                    epoch?: any;
                    round?: any;
                    extraHash?: Uint8Array;
                    report?: Uint8Array;
                }): _151.ReportToSign;
            };
            EventOraclePaid: {
                encode(message: _151.EventOraclePaid, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.EventOraclePaid;
                fromPartial(object: {
                    transmitterAddr?: string;
                    payeeAddr?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _151.EventOraclePaid;
            };
            EventAnswerUpdated: {
                encode(message: _151.EventAnswerUpdated, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.EventAnswerUpdated;
                fromPartial(object: {
                    current?: string;
                    roundId?: string;
                    updatedAt?: Date;
                }): _151.EventAnswerUpdated;
            };
            EventNewRound: {
                encode(message: _151.EventNewRound, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.EventNewRound;
                fromPartial(object: {
                    roundId?: string;
                    startedBy?: string;
                    startedAt?: Date;
                }): _151.EventNewRound;
            };
            EventTransmitted: {
                encode(message: _151.EventTransmitted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.EventTransmitted;
                fromPartial(object: {
                    configDigest?: Uint8Array;
                    epoch?: any;
                }): _151.EventTransmitted;
            };
            EventNewTransmission: {
                encode(message: _151.EventNewTransmission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.EventNewTransmission;
                fromPartial(object: {
                    feedId?: string;
                    aggregatorRoundId?: number;
                    answer?: string;
                    transmitter?: string;
                    observationsTimestamp?: any;
                    observations?: string[];
                    observers?: Uint8Array;
                    configDigest?: Uint8Array;
                    epochAndRound?: {
                        epoch?: any;
                        round?: any;
                    };
                }): _151.EventNewTransmission;
            };
            EventConfigSet: {
                encode(message: _151.EventConfigSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.EventConfigSet;
                fromPartial(object: {
                    configDigest?: Uint8Array;
                    previousConfigBlockNumber?: any;
                    config?: {
                        signers?: string[];
                        transmitters?: string[];
                        f?: number;
                        onchainConfig?: Uint8Array;
                        offchainConfigVersion?: any;
                        offchainConfig?: Uint8Array;
                        moduleParams?: {
                            feedId?: string;
                            minAnswer?: string;
                            maxAnswer?: string;
                            linkPerObservation?: string;
                            linkPerTransmission?: string;
                            linkDenom?: string;
                            uniqueReports?: boolean;
                            description?: string;
                            feedAdmin?: string;
                            billingAdmin?: string;
                        };
                    };
                    configInfo?: {
                        latestConfigDigest?: Uint8Array;
                        f?: number;
                        n?: number;
                        configCount?: any;
                        latestConfigBlockNumber?: any;
                    };
                }): _151.EventConfigSet;
            };
            GenesisState: {
                encode(message: _150.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.GenesisState;
                fromPartial(object: {
                    params?: {
                        linkDenom?: string;
                        payoutBlockInterval?: any;
                        moduleAdmin?: string;
                    };
                    feedConfigs?: {
                        signers?: string[];
                        transmitters?: string[];
                        f?: number;
                        onchainConfig?: Uint8Array;
                        offchainConfigVersion?: any;
                        offchainConfig?: Uint8Array;
                        moduleParams?: {
                            feedId?: string;
                            minAnswer?: string;
                            maxAnswer?: string;
                            linkPerObservation?: string;
                            linkPerTransmission?: string;
                            linkDenom?: string;
                            uniqueReports?: boolean;
                            description?: string;
                            feedAdmin?: string;
                            billingAdmin?: string;
                        };
                    }[];
                    latestEpochAndRounds?: {
                        feedId?: string;
                        epochAndRound?: {
                            epoch?: any;
                            round?: any;
                        };
                    }[];
                    feedTransmissions?: {
                        feedId?: string;
                        transmission?: {
                            answer?: string;
                            observationsTimestamp?: any;
                            transmissionTimestamp?: any;
                        };
                    }[];
                    latestAggregatorRoundIds?: {
                        feedId?: string;
                        aggregatorRoundId?: any;
                    }[];
                    rewardPools?: {
                        feedId?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        };
                    }[];
                    feedObservationCounts?: {
                        feedId?: string;
                        counts?: {
                            address?: string;
                            count?: any;
                        }[];
                    }[];
                    feedTransmissionCounts?: {
                        feedId?: string;
                        counts?: {
                            address?: string;
                            count?: any;
                        }[];
                    }[];
                    pendingPayeeships?: {
                        feedId?: string;
                        transmitter?: string;
                        proposedPayee?: string;
                    }[];
                }): _150.GenesisState;
            };
            FeedTransmission: {
                encode(message: _150.FeedTransmission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.FeedTransmission;
                fromPartial(object: {
                    feedId?: string;
                    transmission?: {
                        answer?: string;
                        observationsTimestamp?: any;
                        transmissionTimestamp?: any;
                    };
                }): _150.FeedTransmission;
            };
            FeedEpochAndRound: {
                encode(message: _150.FeedEpochAndRound, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.FeedEpochAndRound;
                fromPartial(object: {
                    feedId?: string;
                    epochAndRound?: {
                        epoch?: any;
                        round?: any;
                    };
                }): _150.FeedEpochAndRound;
            };
            FeedLatestAggregatorRoundIDs: {
                encode(message: _150.FeedLatestAggregatorRoundIDs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.FeedLatestAggregatorRoundIDs;
                fromPartial(object: {
                    feedId?: string;
                    aggregatorRoundId?: any;
                }): _150.FeedLatestAggregatorRoundIDs;
            };
            RewardPool: {
                encode(message: _150.RewardPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.RewardPool;
                fromPartial(object: {
                    feedId?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _150.RewardPool;
            };
            FeedCounts: {
                encode(message: _150.FeedCounts, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.FeedCounts;
                fromPartial(object: {
                    feedId?: string;
                    counts?: {
                        address?: string;
                        count?: any;
                    }[];
                }): _150.FeedCounts;
            };
            Count: {
                encode(message: _150.Count, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.Count;
                fromPartial(object: {
                    address?: string;
                    count?: any;
                }): _150.Count;
            };
            PendingPayeeship: {
                encode(message: _150.PendingPayeeship, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.PendingPayeeship;
                fromPartial(object: {
                    feedId?: string;
                    transmitter?: string;
                    proposedPayee?: string;
                }): _150.PendingPayeeship;
            };
        };
    }
    namespace oracle {
        const v1beta1: {
            MsgClientImpl: typeof _321.MsgClientImpl;
            QueryClientImpl: typeof _314.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _158.QueryParamsRequest): Promise<_158.QueryParamsResponse>;
                bandRelayers(request?: _158.QueryBandRelayersRequest): Promise<_158.QueryBandRelayersResponse>;
                bandPriceStates(request?: _158.QueryBandPriceStatesRequest): Promise<_158.QueryBandPriceStatesResponse>;
                bandIBCPriceStates(request?: _158.QueryBandIBCPriceStatesRequest): Promise<_158.QueryBandIBCPriceStatesResponse>;
                priceFeedPriceStates(request?: _158.QueryPriceFeedPriceStatesRequest): Promise<_158.QueryPriceFeedPriceStatesResponse>;
                coinbasePriceStates(request?: _158.QueryCoinbasePriceStatesRequest): Promise<_158.QueryCoinbasePriceStatesResponse>;
                providerPriceState(request: _158.QueryProviderPriceStateRequest): Promise<_158.QueryProviderPriceStateResponse>;
                oracleModuleState(request?: _158.QueryModuleStateRequest): Promise<_158.QueryModuleStateResponse>;
                historicalPriceRecords(request: _158.QueryHistoricalPriceRecordsRequest): Promise<_158.QueryHistoricalPriceRecordsResponse>;
                oracleVolatility(request: _158.QueryOracleVolatilityRequest): Promise<_158.QueryOracleVolatilityResponse>;
                oracleProvidersInfo(request?: _158.QueryOracleProvidersInfoRequest): Promise<_158.QueryOracleProvidersInfoResponse>;
                oracleProviderPrices(request: _158.QueryOracleProviderPricesRequest): Promise<_158.QueryOracleProviderPricesResponse>;
            };
            LCDQueryClient: typeof _307.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    relayProviderPrices(value: _159.MsgRelayProviderPrices): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    relayPriceFeedPrice(value: _159.MsgRelayPriceFeedPrice): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    relayBandRates(value: _159.MsgRelayBandRates): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    requestBandIBCRates(value: _159.MsgRequestBandIBCRates): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    relayCoinbaseMessages(value: _159.MsgRelayCoinbaseMessages): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    relayProviderPrices(value: _159.MsgRelayProviderPrices): {
                        typeUrl: string;
                        value: _159.MsgRelayProviderPrices;
                    };
                    relayPriceFeedPrice(value: _159.MsgRelayPriceFeedPrice): {
                        typeUrl: string;
                        value: _159.MsgRelayPriceFeedPrice;
                    };
                    relayBandRates(value: _159.MsgRelayBandRates): {
                        typeUrl: string;
                        value: _159.MsgRelayBandRates;
                    };
                    requestBandIBCRates(value: _159.MsgRequestBandIBCRates): {
                        typeUrl: string;
                        value: _159.MsgRequestBandIBCRates;
                    };
                    relayCoinbaseMessages(value: _159.MsgRelayCoinbaseMessages): {
                        typeUrl: string;
                        value: _159.MsgRelayCoinbaseMessages;
                    };
                };
                fromPartial: {
                    relayProviderPrices(value: _159.MsgRelayProviderPrices): {
                        typeUrl: string;
                        value: _159.MsgRelayProviderPrices;
                    };
                    relayPriceFeedPrice(value: _159.MsgRelayPriceFeedPrice): {
                        typeUrl: string;
                        value: _159.MsgRelayPriceFeedPrice;
                    };
                    relayBandRates(value: _159.MsgRelayBandRates): {
                        typeUrl: string;
                        value: _159.MsgRelayBandRates;
                    };
                    requestBandIBCRates(value: _159.MsgRequestBandIBCRates): {
                        typeUrl: string;
                        value: _159.MsgRequestBandIBCRates;
                    };
                    relayCoinbaseMessages(value: _159.MsgRelayCoinbaseMessages): {
                        typeUrl: string;
                        value: _159.MsgRelayCoinbaseMessages;
                    };
                };
            };
            AminoConverter: {
                "/injective.oracle.v1beta1.MsgRelayProviderPrices": {
                    aminoType: string;
                    toAmino: ({ sender, provider, symbols, prices }: _159.MsgRelayProviderPrices) => {
                        sender: string;
                        provider: string;
                        symbols: string[];
                        prices: string[];
                    };
                    fromAmino: ({ sender, provider, symbols, prices }: {
                        sender: string;
                        provider: string;
                        symbols: string[];
                        prices: string[];
                    }) => _159.MsgRelayProviderPrices;
                };
                "/injective.oracle.v1beta1.MsgRelayPriceFeedPrice": {
                    aminoType: string;
                    toAmino: ({ sender, base, quote, price }: _159.MsgRelayPriceFeedPrice) => {
                        sender: string;
                        base: string[];
                        quote: string[];
                        price: string[];
                    };
                    fromAmino: ({ sender, base, quote, price }: {
                        sender: string;
                        base: string[];
                        quote: string[];
                        price: string[];
                    }) => _159.MsgRelayPriceFeedPrice;
                };
                "/injective.oracle.v1beta1.MsgRelayBandRates": {
                    aminoType: string;
                    toAmino: ({ relayer, symbols, rates, resolveTimes, requestIDs }: _159.MsgRelayBandRates) => {
                        relayer: string;
                        symbols: string[];
                        rates: Long[];
                        resolve_times: Long[];
                        requestIDs: Long[];
                    };
                    fromAmino: ({ relayer, symbols, rates, resolve_times, requestIDs }: {
                        relayer: string;
                        symbols: string[];
                        rates: Long[];
                        resolve_times: Long[];
                        requestIDs: Long[];
                    }) => _159.MsgRelayBandRates;
                };
                "/injective.oracle.v1beta1.MsgRequestBandIBCRates": {
                    aminoType: string;
                    toAmino: ({ sender, requestId }: _159.MsgRequestBandIBCRates) => {
                        sender: string;
                        request_id: string;
                    };
                    fromAmino: ({ sender, request_id }: {
                        sender: string;
                        request_id: string;
                    }) => _159.MsgRequestBandIBCRates;
                };
                "/injective.oracle.v1beta1.MsgRelayCoinbaseMessages": {
                    aminoType: string;
                    toAmino: ({ sender, messages, signatures }: _159.MsgRelayCoinbaseMessages) => {
                        sender: string;
                        messages: Uint8Array[];
                        signatures: Uint8Array[];
                    };
                    fromAmino: ({ sender, messages, signatures }: {
                        sender: string;
                        messages: Uint8Array[];
                        signatures: Uint8Array[];
                    }) => _159.MsgRelayCoinbaseMessages;
                };
            };
            MsgRelayProviderPrices: {
                encode(message: _159.MsgRelayProviderPrices, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.MsgRelayProviderPrices;
                fromPartial(object: {
                    sender?: string;
                    provider?: string;
                    symbols?: string[];
                    prices?: string[];
                }): _159.MsgRelayProviderPrices;
            };
            MsgRelayProviderPricesResponse: {
                encode(_: _159.MsgRelayProviderPricesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.MsgRelayProviderPricesResponse;
                fromPartial(_: {}): _159.MsgRelayProviderPricesResponse;
            };
            MsgRelayPriceFeedPrice: {
                encode(message: _159.MsgRelayPriceFeedPrice, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.MsgRelayPriceFeedPrice;
                fromPartial(object: {
                    sender?: string;
                    base?: string[];
                    quote?: string[];
                    price?: string[];
                }): _159.MsgRelayPriceFeedPrice;
            };
            MsgRelayPriceFeedPriceResponse: {
                encode(_: _159.MsgRelayPriceFeedPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.MsgRelayPriceFeedPriceResponse;
                fromPartial(_: {}): _159.MsgRelayPriceFeedPriceResponse;
            };
            MsgRelayBandRates: {
                encode(message: _159.MsgRelayBandRates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.MsgRelayBandRates;
                fromPartial(object: {
                    relayer?: string;
                    symbols?: string[];
                    rates?: any[];
                    resolveTimes?: any[];
                    requestIDs?: any[];
                }): _159.MsgRelayBandRates;
            };
            MsgRelayBandRatesResponse: {
                encode(_: _159.MsgRelayBandRatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.MsgRelayBandRatesResponse;
                fromPartial(_: {}): _159.MsgRelayBandRatesResponse;
            };
            MsgRelayCoinbaseMessages: {
                encode(message: _159.MsgRelayCoinbaseMessages, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.MsgRelayCoinbaseMessages;
                fromPartial(object: {
                    sender?: string;
                    messages?: Uint8Array[];
                    signatures?: Uint8Array[];
                }): _159.MsgRelayCoinbaseMessages;
            };
            MsgRelayCoinbaseMessagesResponse: {
                encode(_: _159.MsgRelayCoinbaseMessagesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.MsgRelayCoinbaseMessagesResponse;
                fromPartial(_: {}): _159.MsgRelayCoinbaseMessagesResponse;
            };
            MsgRequestBandIBCRates: {
                encode(message: _159.MsgRequestBandIBCRates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.MsgRequestBandIBCRates;
                fromPartial(object: {
                    sender?: string;
                    requestId?: any;
                }): _159.MsgRequestBandIBCRates;
            };
            MsgRequestBandIBCRatesResponse: {
                encode(_: _159.MsgRequestBandIBCRatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.MsgRequestBandIBCRatesResponse;
                fromPartial(_: {}): _159.MsgRequestBandIBCRatesResponse;
            };
            QueryParamsRequest: {
                encode(_: _158.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.QueryParamsRequest;
                fromPartial(_: {}): _158.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _158.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.QueryParamsResponse;
                fromPartial(object: {
                    params?: {};
                }): _158.QueryParamsResponse;
            };
            QueryBandRelayersRequest: {
                encode(_: _158.QueryBandRelayersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.QueryBandRelayersRequest;
                fromPartial(_: {}): _158.QueryBandRelayersRequest;
            };
            QueryBandRelayersResponse: {
                encode(message: _158.QueryBandRelayersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.QueryBandRelayersResponse;
                fromPartial(object: {
                    relayers?: string[];
                }): _158.QueryBandRelayersResponse;
            };
            QueryBandPriceStatesRequest: {
                encode(_: _158.QueryBandPriceStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.QueryBandPriceStatesRequest;
                fromPartial(_: {}): _158.QueryBandPriceStatesRequest;
            };
            QueryBandPriceStatesResponse: {
                encode(message: _158.QueryBandPriceStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.QueryBandPriceStatesResponse;
                fromPartial(object: {
                    priceStates?: {
                        symbol?: string;
                        rate?: string;
                        resolveTime?: any;
                        request_ID?: any;
                        priceState?: {
                            price?: string;
                            cumulativePrice?: string;
                            timestamp?: any;
                        };
                    }[];
                }): _158.QueryBandPriceStatesResponse;
            };
            QueryBandIBCPriceStatesRequest: {
                encode(_: _158.QueryBandIBCPriceStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.QueryBandIBCPriceStatesRequest;
                fromPartial(_: {}): _158.QueryBandIBCPriceStatesRequest;
            };
            QueryBandIBCPriceStatesResponse: {
                encode(message: _158.QueryBandIBCPriceStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.QueryBandIBCPriceStatesResponse;
                fromPartial(object: {
                    priceStates?: {
                        symbol?: string;
                        rate?: string;
                        resolveTime?: any;
                        request_ID?: any;
                        priceState?: {
                            price?: string;
                            cumulativePrice?: string;
                            timestamp?: any;
                        };
                    }[];
                }): _158.QueryBandIBCPriceStatesResponse;
            };
            QueryPriceFeedPriceStatesRequest: {
                encode(_: _158.QueryPriceFeedPriceStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.QueryPriceFeedPriceStatesRequest;
                fromPartial(_: {}): _158.QueryPriceFeedPriceStatesRequest;
            };
            QueryPriceFeedPriceStatesResponse: {
                encode(message: _158.QueryPriceFeedPriceStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.QueryPriceFeedPriceStatesResponse;
                fromPartial(object: {
                    priceStates?: {
                        base?: string;
                        quote?: string;
                        priceState?: {
                            price?: string;
                            cumulativePrice?: string;
                            timestamp?: any;
                        };
                        relayers?: string[];
                    }[];
                }): _158.QueryPriceFeedPriceStatesResponse;
            };
            QueryCoinbasePriceStatesRequest: {
                encode(_: _158.QueryCoinbasePriceStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.QueryCoinbasePriceStatesRequest;
                fromPartial(_: {}): _158.QueryCoinbasePriceStatesRequest;
            };
            QueryCoinbasePriceStatesResponse: {
                encode(message: _158.QueryCoinbasePriceStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.QueryCoinbasePriceStatesResponse;
                fromPartial(object: {
                    priceStates?: {
                        kind?: string;
                        timestamp?: any;
                        key?: string;
                        value?: any;
                        priceState?: {
                            price?: string;
                            cumulativePrice?: string;
                            timestamp?: any;
                        };
                    }[];
                }): _158.QueryCoinbasePriceStatesResponse;
            };
            QueryProviderPriceStateRequest: {
                encode(message: _158.QueryProviderPriceStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.QueryProviderPriceStateRequest;
                fromPartial(object: {
                    provider?: string;
                    symbol?: string;
                }): _158.QueryProviderPriceStateRequest;
            };
            QueryProviderPriceStateResponse: {
                encode(message: _158.QueryProviderPriceStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.QueryProviderPriceStateResponse;
                fromPartial(object: {
                    priceState?: {
                        price?: string;
                        cumulativePrice?: string;
                        timestamp?: any;
                    };
                }): _158.QueryProviderPriceStateResponse;
            };
            QueryModuleStateRequest: {
                encode(_: _158.QueryModuleStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.QueryModuleStateRequest;
                fromPartial(_: {}): _158.QueryModuleStateRequest;
            };
            QueryModuleStateResponse: {
                encode(message: _158.QueryModuleStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.QueryModuleStateResponse;
                fromPartial(object: {
                    state?: {
                        params?: {};
                        bandRelayers?: string[];
                        bandPriceStates?: {
                            symbol?: string;
                            rate?: string;
                            resolveTime?: any;
                            request_ID?: any;
                            priceState?: {
                                price?: string;
                                cumulativePrice?: string;
                                timestamp?: any;
                            };
                        }[];
                        priceFeedPriceStates?: {
                            base?: string;
                            quote?: string;
                            priceState?: {
                                price?: string;
                                cumulativePrice?: string;
                                timestamp?: any;
                            };
                            relayers?: string[];
                        }[];
                        coinbasePriceStates?: {
                            kind?: string;
                            timestamp?: any;
                            key?: string;
                            value?: any;
                            priceState?: {
                                price?: string;
                                cumulativePrice?: string;
                                timestamp?: any;
                            };
                        }[];
                        bandIbcPriceStates?: {
                            symbol?: string;
                            rate?: string;
                            resolveTime?: any;
                            request_ID?: any;
                            priceState?: {
                                price?: string;
                                cumulativePrice?: string;
                                timestamp?: any;
                            };
                        }[];
                        bandIbcOracleRequests?: {
                            requestId?: any;
                            oracleScriptId?: any;
                            symbols?: string[];
                            askCount?: any;
                            minCount?: any;
                            feeLimit?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            prepareGas?: any;
                            executeGas?: any;
                        }[];
                        bandIbcParams?: {
                            bandIbcEnabled?: boolean;
                            ibcRequestInterval?: any;
                            ibcSourceChannel?: string;
                            ibcVersion?: string;
                            ibcPortId?: string;
                        };
                        bandIbcLatestClientId?: any;
                        calldataRecords?: {
                            clientId?: any;
                            calldata?: Uint8Array;
                        }[];
                        bandIbcLatestRequestId?: any;
                        chainlinkPriceStates?: {
                            feedId?: string;
                            answer?: string;
                            timestamp?: any;
                            priceState?: {
                                price?: string;
                                cumulativePrice?: string;
                                timestamp?: any;
                            };
                        }[];
                        historicalPriceRecords?: {
                            oracle?: _156.OracleType;
                            symbolId?: string;
                            latestPriceRecords?: {
                                timestamp?: any;
                                price?: string;
                            }[];
                        }[];
                        providerStates?: {
                            providerInfo?: {
                                provider?: string;
                                relayers?: string[];
                            };
                            providerPriceStates?: {
                                symbol?: string;
                                state?: {
                                    price?: string;
                                    cumulativePrice?: string;
                                    timestamp?: any;
                                };
                            }[];
                        }[];
                    };
                }): _158.QueryModuleStateResponse;
            };
            QueryHistoricalPriceRecordsRequest: {
                encode(message: _158.QueryHistoricalPriceRecordsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.QueryHistoricalPriceRecordsRequest;
                fromPartial(object: {
                    oracle?: _156.OracleType;
                    symbolId?: string;
                }): _158.QueryHistoricalPriceRecordsRequest;
            };
            QueryHistoricalPriceRecordsResponse: {
                encode(message: _158.QueryHistoricalPriceRecordsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.QueryHistoricalPriceRecordsResponse;
                fromPartial(object: {
                    priceRecords?: {
                        oracle?: _156.OracleType;
                        symbolId?: string;
                        latestPriceRecords?: {
                            timestamp?: any;
                            price?: string;
                        }[];
                    }[];
                }): _158.QueryHistoricalPriceRecordsResponse;
            };
            OracleHistoryOptions: {
                encode(message: _158.OracleHistoryOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.OracleHistoryOptions;
                fromPartial(object: {
                    maxAge?: any;
                    includeRawHistory?: boolean;
                    includeMetadata?: boolean;
                }): _158.OracleHistoryOptions;
            };
            QueryOracleVolatilityRequest: {
                encode(message: _158.QueryOracleVolatilityRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.QueryOracleVolatilityRequest;
                fromPartial(object: {
                    baseInfo?: {
                        symbol?: string;
                        oracleType?: _156.OracleType;
                        scaleFactor?: number;
                    };
                    quoteInfo?: {
                        symbol?: string;
                        oracleType?: _156.OracleType;
                        scaleFactor?: number;
                    };
                    oracleHistoryOptions?: {
                        maxAge?: any;
                        includeRawHistory?: boolean;
                        includeMetadata?: boolean;
                    };
                }): _158.QueryOracleVolatilityRequest;
            };
            QueryOracleVolatilityResponse: {
                encode(message: _158.QueryOracleVolatilityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.QueryOracleVolatilityResponse;
                fromPartial(object: {
                    volatility?: string;
                    historyMetadata?: {
                        groupCount?: number;
                        recordsSampleSize?: number;
                        mean?: string;
                        twap?: string;
                        firstTimestamp?: any;
                        lastTimestamp?: any;
                        minPrice?: string;
                        maxPrice?: string;
                        medianPrice?: string;
                    };
                    rawHistory?: {
                        timestamp?: any;
                        price?: string;
                    }[];
                }): _158.QueryOracleVolatilityResponse;
            };
            QueryOracleProvidersInfoRequest: {
                encode(_: _158.QueryOracleProvidersInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.QueryOracleProvidersInfoRequest;
                fromPartial(_: {}): _158.QueryOracleProvidersInfoRequest;
            };
            QueryOracleProvidersInfoResponse: {
                encode(message: _158.QueryOracleProvidersInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.QueryOracleProvidersInfoResponse;
                fromPartial(object: {
                    providers?: {
                        provider?: string;
                        relayers?: string[];
                    }[];
                }): _158.QueryOracleProvidersInfoResponse;
            };
            QueryOracleProviderPricesRequest: {
                encode(message: _158.QueryOracleProviderPricesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.QueryOracleProviderPricesRequest;
                fromPartial(object: {
                    provider?: string;
                }): _158.QueryOracleProviderPricesRequest;
            };
            QueryOracleProviderPricesResponse: {
                encode(message: _158.QueryOracleProviderPricesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.QueryOracleProviderPricesResponse;
                fromPartial(object: {
                    providerState?: {
                        providerInfo?: {
                            provider?: string;
                            relayers?: string[];
                        };
                        providerPriceStates?: {
                            symbol?: string;
                            state?: {
                                price?: string;
                                cumulativePrice?: string;
                                timestamp?: any;
                            };
                        }[];
                    }[];
                }): _158.QueryOracleProviderPricesResponse;
            };
            GrantBandOraclePrivilegeProposal: {
                encode(message: _157.GrantBandOraclePrivilegeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.GrantBandOraclePrivilegeProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    relayers?: string[];
                }): _157.GrantBandOraclePrivilegeProposal;
            };
            RevokeBandOraclePrivilegeProposal: {
                encode(message: _157.RevokeBandOraclePrivilegeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.RevokeBandOraclePrivilegeProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    relayers?: string[];
                }): _157.RevokeBandOraclePrivilegeProposal;
            };
            GrantPriceFeederPrivilegeProposal: {
                encode(message: _157.GrantPriceFeederPrivilegeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.GrantPriceFeederPrivilegeProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    base?: string;
                    quote?: string;
                    relayers?: string[];
                }): _157.GrantPriceFeederPrivilegeProposal;
            };
            GrantProviderPrivilegeProposal: {
                encode(message: _157.GrantProviderPrivilegeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.GrantProviderPrivilegeProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    provider?: string;
                    relayers?: string[];
                }): _157.GrantProviderPrivilegeProposal;
            };
            RevokeProviderPrivilegeProposal: {
                encode(message: _157.RevokeProviderPrivilegeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.RevokeProviderPrivilegeProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    provider?: string;
                    relayers?: string[];
                }): _157.RevokeProviderPrivilegeProposal;
            };
            RevokePriceFeederPrivilegeProposal: {
                encode(message: _157.RevokePriceFeederPrivilegeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.RevokePriceFeederPrivilegeProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    base?: string;
                    quote?: string;
                    relayers?: string[];
                }): _157.RevokePriceFeederPrivilegeProposal;
            };
            AuthorizeBandOracleRequestProposal: {
                encode(message: _157.AuthorizeBandOracleRequestProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.AuthorizeBandOracleRequestProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    request?: {
                        requestId?: any;
                        oracleScriptId?: any;
                        symbols?: string[];
                        askCount?: any;
                        minCount?: any;
                        feeLimit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        prepareGas?: any;
                        executeGas?: any;
                    };
                }): _157.AuthorizeBandOracleRequestProposal;
            };
            UpdateBandOracleRequestProposal: {
                encode(message: _157.UpdateBandOracleRequestProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.UpdateBandOracleRequestProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    deleteRequestId?: any;
                    updateOracleRequest?: {
                        requestId?: any;
                        oracleScriptId?: any;
                        symbols?: string[];
                        askCount?: any;
                        minCount?: any;
                        feeLimit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        prepareGas?: any;
                        executeGas?: any;
                    };
                }): _157.UpdateBandOracleRequestProposal;
            };
            EnableBandIBCProposal: {
                encode(message: _157.EnableBandIBCProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.EnableBandIBCProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    bandIbcParams?: {
                        bandIbcEnabled?: boolean;
                        ibcRequestInterval?: any;
                        ibcSourceChannel?: string;
                        ibcVersion?: string;
                        ibcPortId?: string;
                    };
                }): _157.EnableBandIBCProposal;
            };
            oracleTypeFromJSON(object: any): _156.OracleType;
            oracleTypeToJSON(object: _156.OracleType): string;
            OracleType: typeof _156.OracleType;
            OracleTypeSDKType: typeof _156.OracleTypeSDKType;
            Params: {
                encode(_: _156.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.Params;
                fromPartial(_: {}): _156.Params;
            };
            OracleInfo: {
                encode(message: _156.OracleInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.OracleInfo;
                fromPartial(object: {
                    symbol?: string;
                    oracleType?: _156.OracleType;
                    scaleFactor?: number;
                }): _156.OracleInfo;
            };
            ChainlinkPriceState: {
                encode(message: _156.ChainlinkPriceState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.ChainlinkPriceState;
                fromPartial(object: {
                    feedId?: string;
                    answer?: string;
                    timestamp?: any;
                    priceState?: {
                        price?: string;
                        cumulativePrice?: string;
                        timestamp?: any;
                    };
                }): _156.ChainlinkPriceState;
            };
            BandPriceState: {
                encode(message: _156.BandPriceState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.BandPriceState;
                fromPartial(object: {
                    symbol?: string;
                    rate?: string;
                    resolveTime?: any;
                    request_ID?: any;
                    priceState?: {
                        price?: string;
                        cumulativePrice?: string;
                        timestamp?: any;
                    };
                }): _156.BandPriceState;
            };
            PriceFeedState: {
                encode(message: _156.PriceFeedState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.PriceFeedState;
                fromPartial(object: {
                    base?: string;
                    quote?: string;
                    priceState?: {
                        price?: string;
                        cumulativePrice?: string;
                        timestamp?: any;
                    };
                    relayers?: string[];
                }): _156.PriceFeedState;
            };
            ProviderInfo: {
                encode(message: _156.ProviderInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.ProviderInfo;
                fromPartial(object: {
                    provider?: string;
                    relayers?: string[];
                }): _156.ProviderInfo;
            };
            ProviderState: {
                encode(message: _156.ProviderState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.ProviderState;
                fromPartial(object: {
                    providerInfo?: {
                        provider?: string;
                        relayers?: string[];
                    };
                    providerPriceStates?: {
                        symbol?: string;
                        state?: {
                            price?: string;
                            cumulativePrice?: string;
                            timestamp?: any;
                        };
                    }[];
                }): _156.ProviderState;
            };
            ProviderPriceState: {
                encode(message: _156.ProviderPriceState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.ProviderPriceState;
                fromPartial(object: {
                    symbol?: string;
                    state?: {
                        price?: string;
                        cumulativePrice?: string;
                        timestamp?: any;
                    };
                }): _156.ProviderPriceState;
            };
            PriceFeedInfo: {
                encode(message: _156.PriceFeedInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.PriceFeedInfo;
                fromPartial(object: {
                    base?: string;
                    quote?: string;
                }): _156.PriceFeedInfo;
            };
            PriceFeedPrice: {
                encode(message: _156.PriceFeedPrice, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.PriceFeedPrice;
                fromPartial(object: {
                    price?: string;
                }): _156.PriceFeedPrice;
            };
            CoinbasePriceState: {
                encode(message: _156.CoinbasePriceState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.CoinbasePriceState;
                fromPartial(object: {
                    kind?: string;
                    timestamp?: any;
                    key?: string;
                    value?: any;
                    priceState?: {
                        price?: string;
                        cumulativePrice?: string;
                        timestamp?: any;
                    };
                }): _156.CoinbasePriceState;
            };
            PriceState: {
                encode(message: _156.PriceState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.PriceState;
                fromPartial(object: {
                    price?: string;
                    cumulativePrice?: string;
                    timestamp?: any;
                }): _156.PriceState;
            };
            BandOracleRequest: {
                encode(message: _156.BandOracleRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.BandOracleRequest;
                fromPartial(object: {
                    requestId?: any;
                    oracleScriptId?: any;
                    symbols?: string[];
                    askCount?: any;
                    minCount?: any;
                    feeLimit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    prepareGas?: any;
                    executeGas?: any;
                }): _156.BandOracleRequest;
            };
            BandIBCParams: {
                encode(message: _156.BandIBCParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.BandIBCParams;
                fromPartial(object: {
                    bandIbcEnabled?: boolean;
                    ibcRequestInterval?: any;
                    ibcSourceChannel?: string;
                    ibcVersion?: string;
                    ibcPortId?: string;
                }): _156.BandIBCParams;
            };
            SymbolPriceTimestamp: {
                encode(message: _156.SymbolPriceTimestamp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.SymbolPriceTimestamp;
                fromPartial(object: {
                    oracle?: _156.OracleType;
                    symbolId?: string;
                    timestamp?: any;
                }): _156.SymbolPriceTimestamp;
            };
            LastPriceTimestamps: {
                encode(message: _156.LastPriceTimestamps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.LastPriceTimestamps;
                fromPartial(object: {
                    lastPriceTimestamps?: {
                        oracle?: _156.OracleType;
                        symbolId?: string;
                        timestamp?: any;
                    }[];
                }): _156.LastPriceTimestamps;
            };
            PriceRecords: {
                encode(message: _156.PriceRecords, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.PriceRecords;
                fromPartial(object: {
                    oracle?: _156.OracleType;
                    symbolId?: string;
                    latestPriceRecords?: {
                        timestamp?: any;
                        price?: string;
                    }[];
                }): _156.PriceRecords;
            };
            PriceRecord: {
                encode(message: _156.PriceRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.PriceRecord;
                fromPartial(object: {
                    timestamp?: any;
                    price?: string;
                }): _156.PriceRecord;
            };
            MetadataStatistics: {
                encode(message: _156.MetadataStatistics, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.MetadataStatistics;
                fromPartial(object: {
                    groupCount?: number;
                    recordsSampleSize?: number;
                    mean?: string;
                    twap?: string;
                    firstTimestamp?: any;
                    lastTimestamp?: any;
                    minPrice?: string;
                    maxPrice?: string;
                    medianPrice?: string;
                }): _156.MetadataStatistics;
            };
            GenesisState: {
                encode(message: _155.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.GenesisState;
                fromPartial(object: {
                    params?: {};
                    bandRelayers?: string[];
                    bandPriceStates?: {
                        symbol?: string;
                        rate?: string;
                        resolveTime?: any;
                        request_ID?: any;
                        priceState?: {
                            price?: string;
                            cumulativePrice?: string;
                            timestamp?: any;
                        };
                    }[];
                    priceFeedPriceStates?: {
                        base?: string;
                        quote?: string;
                        priceState?: {
                            price?: string;
                            cumulativePrice?: string;
                            timestamp?: any;
                        };
                        relayers?: string[];
                    }[];
                    coinbasePriceStates?: {
                        kind?: string;
                        timestamp?: any;
                        key?: string;
                        value?: any;
                        priceState?: {
                            price?: string;
                            cumulativePrice?: string;
                            timestamp?: any;
                        };
                    }[];
                    bandIbcPriceStates?: {
                        symbol?: string;
                        rate?: string;
                        resolveTime?: any;
                        request_ID?: any;
                        priceState?: {
                            price?: string;
                            cumulativePrice?: string;
                            timestamp?: any;
                        };
                    }[];
                    bandIbcOracleRequests?: {
                        requestId?: any;
                        oracleScriptId?: any;
                        symbols?: string[];
                        askCount?: any;
                        minCount?: any;
                        feeLimit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        prepareGas?: any;
                        executeGas?: any;
                    }[];
                    bandIbcParams?: {
                        bandIbcEnabled?: boolean;
                        ibcRequestInterval?: any;
                        ibcSourceChannel?: string;
                        ibcVersion?: string;
                        ibcPortId?: string;
                    };
                    bandIbcLatestClientId?: any;
                    calldataRecords?: {
                        clientId?: any;
                        calldata?: Uint8Array;
                    }[];
                    bandIbcLatestRequestId?: any;
                    chainlinkPriceStates?: {
                        feedId?: string;
                        answer?: string;
                        timestamp?: any;
                        priceState?: {
                            price?: string;
                            cumulativePrice?: string;
                            timestamp?: any;
                        };
                    }[];
                    historicalPriceRecords?: {
                        oracle?: _156.OracleType;
                        symbolId?: string;
                        latestPriceRecords?: {
                            timestamp?: any;
                            price?: string;
                        }[];
                    }[];
                    providerStates?: {
                        providerInfo?: {
                            provider?: string;
                            relayers?: string[];
                        };
                        providerPriceStates?: {
                            symbol?: string;
                            state?: {
                                price?: string;
                                cumulativePrice?: string;
                                timestamp?: any;
                            };
                        }[];
                    }[];
                }): _155.GenesisState;
            };
            CalldataRecord: {
                encode(message: _155.CalldataRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.CalldataRecord;
                fromPartial(object: {
                    clientId?: any;
                    calldata?: Uint8Array;
                }): _155.CalldataRecord;
            };
            SetChainlinkPriceEvent: {
                encode(message: _154.SetChainlinkPriceEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.SetChainlinkPriceEvent;
                fromPartial(object: {
                    feedId?: string;
                    answer?: string;
                    timestamp?: any;
                }): _154.SetChainlinkPriceEvent;
            };
            SetBandPriceEvent: {
                encode(message: _154.SetBandPriceEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.SetBandPriceEvent;
                fromPartial(object: {
                    relayer?: string;
                    symbol?: string;
                    price?: string;
                    resolveTime?: any;
                    requestId?: any;
                }): _154.SetBandPriceEvent;
            };
            SetBandIBCPriceEvent: {
                encode(message: _154.SetBandIBCPriceEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.SetBandIBCPriceEvent;
                fromPartial(object: {
                    relayer?: string;
                    symbols?: string[];
                    prices?: string[];
                    resolveTime?: any;
                    requestId?: any;
                    clientId?: any;
                }): _154.SetBandIBCPriceEvent;
            };
            EventBandIBCAckSuccess: {
                encode(message: _154.EventBandIBCAckSuccess, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.EventBandIBCAckSuccess;
                fromPartial(object: {
                    ackResult?: string;
                    clientId?: any;
                }): _154.EventBandIBCAckSuccess;
            };
            EventBandIBCAckError: {
                encode(message: _154.EventBandIBCAckError, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.EventBandIBCAckError;
                fromPartial(object: {
                    ackError?: string;
                    clientId?: any;
                }): _154.EventBandIBCAckError;
            };
            EventBandIBCResponseTimeout: {
                encode(message: _154.EventBandIBCResponseTimeout, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.EventBandIBCResponseTimeout;
                fromPartial(object: {
                    clientId?: any;
                }): _154.EventBandIBCResponseTimeout;
            };
            SetPriceFeedPriceEvent: {
                encode(message: _154.SetPriceFeedPriceEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.SetPriceFeedPriceEvent;
                fromPartial(object: {
                    relayer?: string;
                    base?: string;
                    quote?: string;
                    price?: string;
                }): _154.SetPriceFeedPriceEvent;
            };
            SetProviderPriceEvent: {
                encode(message: _154.SetProviderPriceEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.SetProviderPriceEvent;
                fromPartial(object: {
                    provider?: string;
                    relayer?: string;
                    symbol?: string;
                    price?: string;
                }): _154.SetProviderPriceEvent;
            };
            SetCoinbasePriceEvent: {
                encode(message: _154.SetCoinbasePriceEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.SetCoinbasePriceEvent;
                fromPartial(object: {
                    symbol?: string;
                    price?: string;
                    timestamp?: any;
                }): _154.SetCoinbasePriceEvent;
            };
        };
    }
    namespace peggy {
        const v1: {
            MsgClientImpl: typeof _322.MsgClientImpl;
            QueryClientImpl: typeof _315.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _168.QueryParamsRequest): Promise<_168.QueryParamsResponse>;
                currentValset(request?: _168.QueryCurrentValsetRequest): Promise<_168.QueryCurrentValsetResponse>;
                valsetRequest(request: _168.QueryValsetRequestRequest): Promise<_168.QueryValsetRequestResponse>;
                valsetConfirm(request: _168.QueryValsetConfirmRequest): Promise<_168.QueryValsetConfirmResponse>;
                valsetConfirmsByNonce(request: _168.QueryValsetConfirmsByNonceRequest): Promise<_168.QueryValsetConfirmsByNonceResponse>;
                lastValsetRequests(request?: _168.QueryLastValsetRequestsRequest): Promise<_168.QueryLastValsetRequestsResponse>;
                lastPendingValsetRequestByAddr(request: _168.QueryLastPendingValsetRequestByAddrRequest): Promise<_168.QueryLastPendingValsetRequestByAddrResponse>;
                lastEventByAddr(request: _168.QueryLastEventByAddrRequest): Promise<_168.QueryLastEventByAddrResponse>;
                getPendingSendToEth(request: _168.QueryPendingSendToEth): Promise<_168.QueryPendingSendToEthResponse>;
                batchFees(request?: _168.QueryBatchFeeRequest): Promise<_168.QueryBatchFeeResponse>;
                outgoingTxBatches(request?: _168.QueryOutgoingTxBatchesRequest): Promise<_168.QueryOutgoingTxBatchesResponse>;
                lastPendingBatchRequestByAddr(request: _168.QueryLastPendingBatchRequestByAddrRequest): Promise<_168.QueryLastPendingBatchRequestByAddrResponse>;
                batchRequestByNonce(request: _168.QueryBatchRequestByNonceRequest): Promise<_168.QueryBatchRequestByNonceResponse>;
                batchConfirms(request: _168.QueryBatchConfirmsRequest): Promise<_168.QueryBatchConfirmsResponse>;
                eRC20ToDenom(request: _168.QueryERC20ToDenomRequest): Promise<_168.QueryERC20ToDenomResponse>;
                denomToERC20(request: _168.QueryDenomToERC20Request): Promise<_168.QueryDenomToERC20Response>;
                getDelegateKeyByValidator(request: _168.QueryDelegateKeysByValidatorAddress): Promise<_168.QueryDelegateKeysByValidatorAddressResponse>;
                getDelegateKeyByEth(request: _168.QueryDelegateKeysByEthAddress): Promise<_168.QueryDelegateKeysByEthAddressResponse>;
                getDelegateKeyByOrchestrator(request: _168.QueryDelegateKeysByOrchestratorAddress): Promise<_168.QueryDelegateKeysByOrchestratorAddressResponse>;
                peggyModuleState(request?: _168.QueryModuleStateRequest): Promise<_168.QueryModuleStateResponse>;
            };
            LCDQueryClient: typeof _308.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    valsetConfirm(value: _165.MsgValsetConfirm): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    sendToEth(value: _165.MsgSendToEth): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    requestBatch(value: _165.MsgRequestBatch): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    confirmBatch(value: _165.MsgConfirmBatch): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    depositClaim(value: _165.MsgDepositClaim): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawClaim(value: _165.MsgWithdrawClaim): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    valsetUpdateClaim(value: _165.MsgValsetUpdatedClaim): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    eRC20DeployedClaim(value: _165.MsgERC20DeployedClaim): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setOrchestratorAddresses(value: _165.MsgSetOrchestratorAddresses): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelSendToEth(value: _165.MsgCancelSendToEth): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    submitBadSignatureEvidence(value: _165.MsgSubmitBadSignatureEvidence): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    valsetConfirm(value: _165.MsgValsetConfirm): {
                        typeUrl: string;
                        value: _165.MsgValsetConfirm;
                    };
                    sendToEth(value: _165.MsgSendToEth): {
                        typeUrl: string;
                        value: _165.MsgSendToEth;
                    };
                    requestBatch(value: _165.MsgRequestBatch): {
                        typeUrl: string;
                        value: _165.MsgRequestBatch;
                    };
                    confirmBatch(value: _165.MsgConfirmBatch): {
                        typeUrl: string;
                        value: _165.MsgConfirmBatch;
                    };
                    depositClaim(value: _165.MsgDepositClaim): {
                        typeUrl: string;
                        value: _165.MsgDepositClaim;
                    };
                    withdrawClaim(value: _165.MsgWithdrawClaim): {
                        typeUrl: string;
                        value: _165.MsgWithdrawClaim;
                    };
                    valsetUpdateClaim(value: _165.MsgValsetUpdatedClaim): {
                        typeUrl: string;
                        value: _165.MsgValsetUpdatedClaim;
                    };
                    eRC20DeployedClaim(value: _165.MsgERC20DeployedClaim): {
                        typeUrl: string;
                        value: _165.MsgERC20DeployedClaim;
                    };
                    setOrchestratorAddresses(value: _165.MsgSetOrchestratorAddresses): {
                        typeUrl: string;
                        value: _165.MsgSetOrchestratorAddresses;
                    };
                    cancelSendToEth(value: _165.MsgCancelSendToEth): {
                        typeUrl: string;
                        value: _165.MsgCancelSendToEth;
                    };
                    submitBadSignatureEvidence(value: _165.MsgSubmitBadSignatureEvidence): {
                        typeUrl: string;
                        value: _165.MsgSubmitBadSignatureEvidence;
                    };
                };
                fromPartial: {
                    valsetConfirm(value: _165.MsgValsetConfirm): {
                        typeUrl: string;
                        value: _165.MsgValsetConfirm;
                    };
                    sendToEth(value: _165.MsgSendToEth): {
                        typeUrl: string;
                        value: _165.MsgSendToEth;
                    };
                    requestBatch(value: _165.MsgRequestBatch): {
                        typeUrl: string;
                        value: _165.MsgRequestBatch;
                    };
                    confirmBatch(value: _165.MsgConfirmBatch): {
                        typeUrl: string;
                        value: _165.MsgConfirmBatch;
                    };
                    depositClaim(value: _165.MsgDepositClaim): {
                        typeUrl: string;
                        value: _165.MsgDepositClaim;
                    };
                    withdrawClaim(value: _165.MsgWithdrawClaim): {
                        typeUrl: string;
                        value: _165.MsgWithdrawClaim;
                    };
                    valsetUpdateClaim(value: _165.MsgValsetUpdatedClaim): {
                        typeUrl: string;
                        value: _165.MsgValsetUpdatedClaim;
                    };
                    eRC20DeployedClaim(value: _165.MsgERC20DeployedClaim): {
                        typeUrl: string;
                        value: _165.MsgERC20DeployedClaim;
                    };
                    setOrchestratorAddresses(value: _165.MsgSetOrchestratorAddresses): {
                        typeUrl: string;
                        value: _165.MsgSetOrchestratorAddresses;
                    };
                    cancelSendToEth(value: _165.MsgCancelSendToEth): {
                        typeUrl: string;
                        value: _165.MsgCancelSendToEth;
                    };
                    submitBadSignatureEvidence(value: _165.MsgSubmitBadSignatureEvidence): {
                        typeUrl: string;
                        value: _165.MsgSubmitBadSignatureEvidence;
                    };
                };
            };
            AminoConverter: {
                "/injective.peggy.v1.MsgValsetConfirm": {
                    aminoType: string;
                    toAmino: ({ nonce, orchestrator, ethAddress, signature }: _165.MsgValsetConfirm) => {
                        nonce: string;
                        orchestrator: string;
                        eth_address: string;
                        signature: string;
                    };
                    fromAmino: ({ nonce, orchestrator, eth_address, signature }: {
                        nonce: string;
                        orchestrator: string;
                        eth_address: string;
                        signature: string;
                    }) => _165.MsgValsetConfirm;
                };
                "/injective.peggy.v1.MsgSendToEth": {
                    aminoType: string;
                    toAmino: ({ sender, ethDest, amount, bridgeFee }: _165.MsgSendToEth) => {
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
                    fromAmino: ({ sender, eth_dest, amount, bridge_fee }: {
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
                    }) => _165.MsgSendToEth;
                };
                "/injective.peggy.v1.MsgRequestBatch": {
                    aminoType: string;
                    toAmino: ({ orchestrator, denom }: _165.MsgRequestBatch) => {
                        orchestrator: string;
                        denom: string;
                    };
                    fromAmino: ({ orchestrator, denom }: {
                        orchestrator: string;
                        denom: string;
                    }) => _165.MsgRequestBatch;
                };
                "/injective.peggy.v1.MsgConfirmBatch": {
                    aminoType: string;
                    toAmino: ({ nonce, tokenContract, ethSigner, orchestrator, signature }: _165.MsgConfirmBatch) => {
                        nonce: string;
                        token_contract: string;
                        eth_signer: string;
                        orchestrator: string;
                        signature: string;
                    };
                    fromAmino: ({ nonce, token_contract, eth_signer, orchestrator, signature }: {
                        nonce: string;
                        token_contract: string;
                        eth_signer: string;
                        orchestrator: string;
                        signature: string;
                    }) => _165.MsgConfirmBatch;
                };
                "/injective.peggy.v1.MsgDepositClaim": {
                    aminoType: string;
                    toAmino: ({ eventNonce, blockHeight, tokenContract, amount, ethereumSender, cosmosReceiver, orchestrator, data }: _165.MsgDepositClaim) => {
                        event_nonce: string;
                        block_height: string;
                        token_contract: string;
                        amount: string;
                        ethereum_sender: string;
                        cosmos_receiver: string;
                        orchestrator: string;
                        data: string;
                    };
                    fromAmino: ({ event_nonce, block_height, token_contract, amount, ethereum_sender, cosmos_receiver, orchestrator, data }: {
                        event_nonce: string;
                        block_height: string;
                        token_contract: string;
                        amount: string;
                        ethereum_sender: string;
                        cosmos_receiver: string;
                        orchestrator: string;
                        data: string;
                    }) => _165.MsgDepositClaim;
                };
                "/injective.peggy.v1.MsgWithdrawClaim": {
                    aminoType: string;
                    toAmino: ({ eventNonce, blockHeight, batchNonce, tokenContract, orchestrator }: _165.MsgWithdrawClaim) => {
                        event_nonce: string;
                        block_height: string;
                        batch_nonce: string;
                        token_contract: string;
                        orchestrator: string;
                    };
                    fromAmino: ({ event_nonce, block_height, batch_nonce, token_contract, orchestrator }: {
                        event_nonce: string;
                        block_height: string;
                        batch_nonce: string;
                        token_contract: string;
                        orchestrator: string;
                    }) => _165.MsgWithdrawClaim;
                };
                "/injective.peggy.v1.MsgValsetUpdatedClaim": {
                    aminoType: string;
                    toAmino: ({ eventNonce, valsetNonce, blockHeight, members, rewardAmount, rewardToken, orchestrator }: _165.MsgValsetUpdatedClaim) => {
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
                    fromAmino: ({ event_nonce, valset_nonce, block_height, members, reward_amount, reward_token, orchestrator }: {
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
                    }) => _165.MsgValsetUpdatedClaim;
                };
                "/injective.peggy.v1.MsgERC20DeployedClaim": {
                    aminoType: string;
                    toAmino: ({ eventNonce, blockHeight, cosmosDenom, tokenContract, name, symbol, decimals, orchestrator }: _165.MsgERC20DeployedClaim) => {
                        event_nonce: string;
                        block_height: string;
                        cosmos_denom: string;
                        token_contract: string;
                        name: string;
                        symbol: string;
                        decimals: string;
                        orchestrator: string;
                    };
                    fromAmino: ({ event_nonce, block_height, cosmos_denom, token_contract, name, symbol, decimals, orchestrator }: {
                        event_nonce: string;
                        block_height: string;
                        cosmos_denom: string;
                        token_contract: string;
                        name: string;
                        symbol: string;
                        decimals: string;
                        orchestrator: string;
                    }) => _165.MsgERC20DeployedClaim;
                };
                "/injective.peggy.v1.MsgSetOrchestratorAddresses": {
                    aminoType: string;
                    toAmino: ({ sender, orchestrator, ethAddress }: _165.MsgSetOrchestratorAddresses) => {
                        sender: string;
                        orchestrator: string;
                        eth_address: string;
                    };
                    fromAmino: ({ sender, orchestrator, eth_address }: {
                        sender: string;
                        orchestrator: string;
                        eth_address: string;
                    }) => _165.MsgSetOrchestratorAddresses;
                };
                "/injective.peggy.v1.MsgCancelSendToEth": {
                    aminoType: string;
                    toAmino: ({ transactionId, sender }: _165.MsgCancelSendToEth) => {
                        transaction_id: string;
                        sender: string;
                    };
                    fromAmino: ({ transaction_id, sender }: {
                        transaction_id: string;
                        sender: string;
                    }) => _165.MsgCancelSendToEth;
                };
                "/injective.peggy.v1.MsgSubmitBadSignatureEvidence": {
                    aminoType: string;
                    toAmino: ({ subject, signature, sender }: _165.MsgSubmitBadSignatureEvidence) => {
                        subject: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        signature: string;
                        sender: string;
                    };
                    fromAmino: ({ subject, signature, sender }: {
                        subject: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        signature: string;
                        sender: string;
                    }) => _165.MsgSubmitBadSignatureEvidence;
                };
            };
            BridgeValidator: {
                encode(message: _169.BridgeValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.BridgeValidator;
                fromPartial(object: {
                    power?: any;
                    ethereumAddress?: string;
                }): _169.BridgeValidator;
            };
            Valset: {
                encode(message: _169.Valset, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.Valset;
                fromPartial(object: {
                    nonce?: any;
                    members?: {
                        power?: any;
                        ethereumAddress?: string;
                    }[];
                    height?: any;
                    rewardAmount?: string;
                    rewardToken?: string;
                }): _169.Valset;
            };
            LastObservedEthereumBlockHeight: {
                encode(message: _169.LastObservedEthereumBlockHeight, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.LastObservedEthereumBlockHeight;
                fromPartial(object: {
                    cosmosBlockHeight?: any;
                    ethereumBlockHeight?: any;
                }): _169.LastObservedEthereumBlockHeight;
            };
            LastClaimEvent: {
                encode(message: _169.LastClaimEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.LastClaimEvent;
                fromPartial(object: {
                    ethereumEventNonce?: any;
                    ethereumEventHeight?: any;
                }): _169.LastClaimEvent;
            };
            ERC20ToDenom: {
                encode(message: _169.ERC20ToDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.ERC20ToDenom;
                fromPartial(object: {
                    erc20?: string;
                    denom?: string;
                }): _169.ERC20ToDenom;
            };
            QueryParamsRequest: {
                encode(_: _168.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.QueryParamsRequest;
                fromPartial(_: {}): _168.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _168.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.QueryParamsResponse;
                fromPartial(object: {
                    params?: {
                        peggyId?: string;
                        contractSourceHash?: string;
                        bridgeEthereumAddress?: string;
                        bridgeChainId?: any;
                        signedValsetsWindow?: any;
                        signedBatchesWindow?: any;
                        signedClaimsWindow?: any;
                        targetBatchTimeout?: any;
                        averageBlockTime?: any;
                        averageEthereumBlockTime?: any;
                        slashFractionValset?: Uint8Array;
                        slashFractionBatch?: Uint8Array;
                        slashFractionClaim?: Uint8Array;
                        slashFractionConflictingClaim?: Uint8Array;
                        unbondSlashingValsetsWindow?: any;
                        slashFractionBadEthSignature?: Uint8Array;
                        cosmosCoinDenom?: string;
                        cosmosCoinErc20Contract?: string;
                        claimSlashingEnabled?: boolean;
                        bridgeContractStartHeight?: any;
                        valsetReward?: {
                            denom?: string;
                            amount?: string;
                        };
                    };
                }): _168.QueryParamsResponse;
            };
            QueryCurrentValsetRequest: {
                encode(_: _168.QueryCurrentValsetRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.QueryCurrentValsetRequest;
                fromPartial(_: {}): _168.QueryCurrentValsetRequest;
            };
            QueryCurrentValsetResponse: {
                encode(message: _168.QueryCurrentValsetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.QueryCurrentValsetResponse;
                fromPartial(object: {
                    valset?: {
                        nonce?: any;
                        members?: {
                            power?: any;
                            ethereumAddress?: string;
                        }[];
                        height?: any;
                        rewardAmount?: string;
                        rewardToken?: string;
                    };
                }): _168.QueryCurrentValsetResponse;
            };
            QueryValsetRequestRequest: {
                encode(message: _168.QueryValsetRequestRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.QueryValsetRequestRequest;
                fromPartial(object: {
                    nonce?: any;
                }): _168.QueryValsetRequestRequest;
            };
            QueryValsetRequestResponse: {
                encode(message: _168.QueryValsetRequestResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.QueryValsetRequestResponse;
                fromPartial(object: {
                    valset?: {
                        nonce?: any;
                        members?: {
                            power?: any;
                            ethereumAddress?: string;
                        }[];
                        height?: any;
                        rewardAmount?: string;
                        rewardToken?: string;
                    };
                }): _168.QueryValsetRequestResponse;
            };
            QueryValsetConfirmRequest: {
                encode(message: _168.QueryValsetConfirmRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.QueryValsetConfirmRequest;
                fromPartial(object: {
                    nonce?: any;
                    address?: string;
                }): _168.QueryValsetConfirmRequest;
            };
            QueryValsetConfirmResponse: {
                encode(message: _168.QueryValsetConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.QueryValsetConfirmResponse;
                fromPartial(object: {
                    confirm?: {
                        nonce?: any;
                        orchestrator?: string;
                        ethAddress?: string;
                        signature?: string;
                    };
                }): _168.QueryValsetConfirmResponse;
            };
            QueryValsetConfirmsByNonceRequest: {
                encode(message: _168.QueryValsetConfirmsByNonceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.QueryValsetConfirmsByNonceRequest;
                fromPartial(object: {
                    nonce?: any;
                }): _168.QueryValsetConfirmsByNonceRequest;
            };
            QueryValsetConfirmsByNonceResponse: {
                encode(message: _168.QueryValsetConfirmsByNonceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.QueryValsetConfirmsByNonceResponse;
                fromPartial(object: {
                    confirms?: {
                        nonce?: any;
                        orchestrator?: string;
                        ethAddress?: string;
                        signature?: string;
                    }[];
                }): _168.QueryValsetConfirmsByNonceResponse;
            };
            QueryLastValsetRequestsRequest: {
                encode(_: _168.QueryLastValsetRequestsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.QueryLastValsetRequestsRequest;
                fromPartial(_: {}): _168.QueryLastValsetRequestsRequest;
            };
            QueryLastValsetRequestsResponse: {
                encode(message: _168.QueryLastValsetRequestsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.QueryLastValsetRequestsResponse;
                fromPartial(object: {
                    valsets?: {
                        nonce?: any;
                        members?: {
                            power?: any;
                            ethereumAddress?: string;
                        }[];
                        height?: any;
                        rewardAmount?: string;
                        rewardToken?: string;
                    }[];
                }): _168.QueryLastValsetRequestsResponse;
            };
            QueryLastPendingValsetRequestByAddrRequest: {
                encode(message: _168.QueryLastPendingValsetRequestByAddrRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.QueryLastPendingValsetRequestByAddrRequest;
                fromPartial(object: {
                    address?: string;
                }): _168.QueryLastPendingValsetRequestByAddrRequest;
            };
            QueryLastPendingValsetRequestByAddrResponse: {
                encode(message: _168.QueryLastPendingValsetRequestByAddrResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.QueryLastPendingValsetRequestByAddrResponse;
                fromPartial(object: {
                    valsets?: {
                        nonce?: any;
                        members?: {
                            power?: any;
                            ethereumAddress?: string;
                        }[];
                        height?: any;
                        rewardAmount?: string;
                        rewardToken?: string;
                    }[];
                }): _168.QueryLastPendingValsetRequestByAddrResponse;
            };
            QueryBatchFeeRequest: {
                encode(_: _168.QueryBatchFeeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.QueryBatchFeeRequest;
                fromPartial(_: {}): _168.QueryBatchFeeRequest;
            };
            QueryBatchFeeResponse: {
                encode(message: _168.QueryBatchFeeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.QueryBatchFeeResponse;
                fromPartial(object: {
                    batchFees?: {
                        token?: string;
                        totalFees?: string;
                    }[];
                }): _168.QueryBatchFeeResponse;
            };
            QueryLastPendingBatchRequestByAddrRequest: {
                encode(message: _168.QueryLastPendingBatchRequestByAddrRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.QueryLastPendingBatchRequestByAddrRequest;
                fromPartial(object: {
                    address?: string;
                }): _168.QueryLastPendingBatchRequestByAddrRequest;
            };
            QueryLastPendingBatchRequestByAddrResponse: {
                encode(message: _168.QueryLastPendingBatchRequestByAddrResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.QueryLastPendingBatchRequestByAddrResponse;
                fromPartial(object: {
                    batch?: {
                        batchNonce?: any;
                        batchTimeout?: any;
                        transactions?: {
                            id?: any;
                            sender?: string;
                            destAddress?: string;
                            erc20Token?: {
                                contract?: string;
                                amount?: string;
                            };
                            erc20Fee?: {
                                contract?: string;
                                amount?: string;
                            };
                        }[];
                        tokenContract?: string;
                        block?: any;
                    };
                }): _168.QueryLastPendingBatchRequestByAddrResponse;
            };
            QueryOutgoingTxBatchesRequest: {
                encode(_: _168.QueryOutgoingTxBatchesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.QueryOutgoingTxBatchesRequest;
                fromPartial(_: {}): _168.QueryOutgoingTxBatchesRequest;
            };
            QueryOutgoingTxBatchesResponse: {
                encode(message: _168.QueryOutgoingTxBatchesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.QueryOutgoingTxBatchesResponse;
                fromPartial(object: {
                    batches?: {
                        batchNonce?: any;
                        batchTimeout?: any;
                        transactions?: {
                            id?: any;
                            sender?: string;
                            destAddress?: string;
                            erc20Token?: {
                                contract?: string;
                                amount?: string;
                            };
                            erc20Fee?: {
                                contract?: string;
                                amount?: string;
                            };
                        }[];
                        tokenContract?: string;
                        block?: any;
                    }[];
                }): _168.QueryOutgoingTxBatchesResponse;
            };
            QueryBatchRequestByNonceRequest: {
                encode(message: _168.QueryBatchRequestByNonceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.QueryBatchRequestByNonceRequest;
                fromPartial(object: {
                    nonce?: any;
                    contractAddress?: string;
                }): _168.QueryBatchRequestByNonceRequest;
            };
            QueryBatchRequestByNonceResponse: {
                encode(message: _168.QueryBatchRequestByNonceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.QueryBatchRequestByNonceResponse;
                fromPartial(object: {
                    batch?: {
                        batchNonce?: any;
                        batchTimeout?: any;
                        transactions?: {
                            id?: any;
                            sender?: string;
                            destAddress?: string;
                            erc20Token?: {
                                contract?: string;
                                amount?: string;
                            };
                            erc20Fee?: {
                                contract?: string;
                                amount?: string;
                            };
                        }[];
                        tokenContract?: string;
                        block?: any;
                    };
                }): _168.QueryBatchRequestByNonceResponse;
            };
            QueryBatchConfirmsRequest: {
                encode(message: _168.QueryBatchConfirmsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.QueryBatchConfirmsRequest;
                fromPartial(object: {
                    nonce?: any;
                    contractAddress?: string;
                }): _168.QueryBatchConfirmsRequest;
            };
            QueryBatchConfirmsResponse: {
                encode(message: _168.QueryBatchConfirmsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.QueryBatchConfirmsResponse;
                fromPartial(object: {
                    confirms?: {
                        nonce?: any;
                        tokenContract?: string;
                        ethSigner?: string;
                        orchestrator?: string;
                        signature?: string;
                    }[];
                }): _168.QueryBatchConfirmsResponse;
            };
            QueryLastEventByAddrRequest: {
                encode(message: _168.QueryLastEventByAddrRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.QueryLastEventByAddrRequest;
                fromPartial(object: {
                    address?: string;
                }): _168.QueryLastEventByAddrRequest;
            };
            QueryLastEventByAddrResponse: {
                encode(message: _168.QueryLastEventByAddrResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.QueryLastEventByAddrResponse;
                fromPartial(object: {
                    lastClaimEvent?: {
                        ethereumEventNonce?: any;
                        ethereumEventHeight?: any;
                    };
                }): _168.QueryLastEventByAddrResponse;
            };
            QueryERC20ToDenomRequest: {
                encode(message: _168.QueryERC20ToDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.QueryERC20ToDenomRequest;
                fromPartial(object: {
                    erc20?: string;
                }): _168.QueryERC20ToDenomRequest;
            };
            QueryERC20ToDenomResponse: {
                encode(message: _168.QueryERC20ToDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.QueryERC20ToDenomResponse;
                fromPartial(object: {
                    denom?: string;
                    cosmosOriginated?: boolean;
                }): _168.QueryERC20ToDenomResponse;
            };
            QueryDenomToERC20Request: {
                encode(message: _168.QueryDenomToERC20Request, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.QueryDenomToERC20Request;
                fromPartial(object: {
                    denom?: string;
                }): _168.QueryDenomToERC20Request;
            };
            QueryDenomToERC20Response: {
                encode(message: _168.QueryDenomToERC20Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.QueryDenomToERC20Response;
                fromPartial(object: {
                    erc20?: string;
                    cosmosOriginated?: boolean;
                }): _168.QueryDenomToERC20Response;
            };
            QueryDelegateKeysByValidatorAddress: {
                encode(message: _168.QueryDelegateKeysByValidatorAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.QueryDelegateKeysByValidatorAddress;
                fromPartial(object: {
                    validatorAddress?: string;
                }): _168.QueryDelegateKeysByValidatorAddress;
            };
            QueryDelegateKeysByValidatorAddressResponse: {
                encode(message: _168.QueryDelegateKeysByValidatorAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.QueryDelegateKeysByValidatorAddressResponse;
                fromPartial(object: {
                    ethAddress?: string;
                    orchestratorAddress?: string;
                }): _168.QueryDelegateKeysByValidatorAddressResponse;
            };
            QueryDelegateKeysByEthAddress: {
                encode(message: _168.QueryDelegateKeysByEthAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.QueryDelegateKeysByEthAddress;
                fromPartial(object: {
                    ethAddress?: string;
                }): _168.QueryDelegateKeysByEthAddress;
            };
            QueryDelegateKeysByEthAddressResponse: {
                encode(message: _168.QueryDelegateKeysByEthAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.QueryDelegateKeysByEthAddressResponse;
                fromPartial(object: {
                    validatorAddress?: string;
                    orchestratorAddress?: string;
                }): _168.QueryDelegateKeysByEthAddressResponse;
            };
            QueryDelegateKeysByOrchestratorAddress: {
                encode(message: _168.QueryDelegateKeysByOrchestratorAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.QueryDelegateKeysByOrchestratorAddress;
                fromPartial(object: {
                    orchestratorAddress?: string;
                }): _168.QueryDelegateKeysByOrchestratorAddress;
            };
            QueryDelegateKeysByOrchestratorAddressResponse: {
                encode(message: _168.QueryDelegateKeysByOrchestratorAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.QueryDelegateKeysByOrchestratorAddressResponse;
                fromPartial(object: {
                    validatorAddress?: string;
                    ethAddress?: string;
                }): _168.QueryDelegateKeysByOrchestratorAddressResponse;
            };
            QueryPendingSendToEth: {
                encode(message: _168.QueryPendingSendToEth, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.QueryPendingSendToEth;
                fromPartial(object: {
                    senderAddress?: string;
                }): _168.QueryPendingSendToEth;
            };
            QueryPendingSendToEthResponse: {
                encode(message: _168.QueryPendingSendToEthResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.QueryPendingSendToEthResponse;
                fromPartial(object: {
                    transfersInBatches?: {
                        id?: any;
                        sender?: string;
                        destAddress?: string;
                        erc20Token?: {
                            contract?: string;
                            amount?: string;
                        };
                        erc20Fee?: {
                            contract?: string;
                            amount?: string;
                        };
                    }[];
                    unbatchedTransfers?: {
                        id?: any;
                        sender?: string;
                        destAddress?: string;
                        erc20Token?: {
                            contract?: string;
                            amount?: string;
                        };
                        erc20Fee?: {
                            contract?: string;
                            amount?: string;
                        };
                    }[];
                }): _168.QueryPendingSendToEthResponse;
            };
            QueryModuleStateRequest: {
                encode(_: _168.QueryModuleStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.QueryModuleStateRequest;
                fromPartial(_: {}): _168.QueryModuleStateRequest;
            };
            QueryModuleStateResponse: {
                encode(message: _168.QueryModuleStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.QueryModuleStateResponse;
                fromPartial(object: {
                    state?: {
                        params?: {
                            peggyId?: string;
                            contractSourceHash?: string;
                            bridgeEthereumAddress?: string;
                            bridgeChainId?: any;
                            signedValsetsWindow?: any;
                            signedBatchesWindow?: any;
                            signedClaimsWindow?: any;
                            targetBatchTimeout?: any;
                            averageBlockTime?: any;
                            averageEthereumBlockTime?: any;
                            slashFractionValset?: Uint8Array;
                            slashFractionBatch?: Uint8Array;
                            slashFractionClaim?: Uint8Array;
                            slashFractionConflictingClaim?: Uint8Array;
                            unbondSlashingValsetsWindow?: any;
                            slashFractionBadEthSignature?: Uint8Array;
                            cosmosCoinDenom?: string;
                            cosmosCoinErc20Contract?: string;
                            claimSlashingEnabled?: boolean;
                            bridgeContractStartHeight?: any;
                            valsetReward?: {
                                denom?: string;
                                amount?: string;
                            };
                        };
                        lastObservedNonce?: any;
                        valsets?: {
                            nonce?: any;
                            members?: {
                                power?: any;
                                ethereumAddress?: string;
                            }[];
                            height?: any;
                            rewardAmount?: string;
                            rewardToken?: string;
                        }[];
                        valsetConfirms?: {
                            nonce?: any;
                            orchestrator?: string;
                            ethAddress?: string;
                            signature?: string;
                        }[];
                        batches?: {
                            batchNonce?: any;
                            batchTimeout?: any;
                            transactions?: {
                                id?: any;
                                sender?: string;
                                destAddress?: string;
                                erc20Token?: {
                                    contract?: string;
                                    amount?: string;
                                };
                                erc20Fee?: {
                                    contract?: string;
                                    amount?: string;
                                };
                            }[];
                            tokenContract?: string;
                            block?: any;
                        }[];
                        batchConfirms?: {
                            nonce?: any;
                            tokenContract?: string;
                            ethSigner?: string;
                            orchestrator?: string;
                            signature?: string;
                        }[];
                        attestations?: {
                            observed?: boolean;
                            votes?: string[];
                            height?: any;
                            claim?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        }[];
                        orchestratorAddresses?: {
                            sender?: string;
                            orchestrator?: string;
                            ethAddress?: string;
                        }[];
                        erc20ToDenoms?: {
                            erc20?: string;
                            denom?: string;
                        }[];
                        unbatchedTransfers?: {
                            id?: any;
                            sender?: string;
                            destAddress?: string;
                            erc20Token?: {
                                contract?: string;
                                amount?: string;
                            };
                            erc20Fee?: {
                                contract?: string;
                                amount?: string;
                            };
                        }[];
                        lastObservedEthereumHeight?: any;
                        lastOutgoingBatchId?: any;
                        lastOutgoingPoolId?: any;
                        lastObservedValset?: {
                            nonce?: any;
                            members?: {
                                power?: any;
                                ethereumAddress?: string;
                            }[];
                            height?: any;
                            rewardAmount?: string;
                            rewardToken?: string;
                        };
                        ethereumBlacklist?: string[];
                    };
                }): _168.QueryModuleStateResponse;
            };
            BlacklistEthereumAddressesProposal: {
                encode(message: _167.BlacklistEthereumAddressesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.BlacklistEthereumAddressesProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    blacklistAddresses?: string[];
                }): _167.BlacklistEthereumAddressesProposal;
            };
            RevokeEthereumBlacklistProposal: {
                encode(message: _167.RevokeEthereumBlacklistProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.RevokeEthereumBlacklistProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    blacklistAddresses?: string[];
                }): _167.RevokeEthereumBlacklistProposal;
            };
            IDSet: {
                encode(message: _166.IDSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.IDSet;
                fromPartial(object: {
                    ids?: any[];
                }): _166.IDSet;
            };
            BatchFees: {
                encode(message: _166.BatchFees, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.BatchFees;
                fromPartial(object: {
                    token?: string;
                    totalFees?: string;
                }): _166.BatchFees;
            };
            MsgSetOrchestratorAddresses: {
                encode(message: _165.MsgSetOrchestratorAddresses, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.MsgSetOrchestratorAddresses;
                fromPartial(object: {
                    sender?: string;
                    orchestrator?: string;
                    ethAddress?: string;
                }): _165.MsgSetOrchestratorAddresses;
            };
            MsgSetOrchestratorAddressesResponse: {
                encode(_: _165.MsgSetOrchestratorAddressesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.MsgSetOrchestratorAddressesResponse;
                fromPartial(_: {}): _165.MsgSetOrchestratorAddressesResponse;
            };
            MsgValsetConfirm: {
                encode(message: _165.MsgValsetConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.MsgValsetConfirm;
                fromPartial(object: {
                    nonce?: any;
                    orchestrator?: string;
                    ethAddress?: string;
                    signature?: string;
                }): _165.MsgValsetConfirm;
            };
            MsgValsetConfirmResponse: {
                encode(_: _165.MsgValsetConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.MsgValsetConfirmResponse;
                fromPartial(_: {}): _165.MsgValsetConfirmResponse;
            };
            MsgSendToEth: {
                encode(message: _165.MsgSendToEth, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.MsgSendToEth;
                fromPartial(object: {
                    sender?: string;
                    ethDest?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                    bridgeFee?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _165.MsgSendToEth;
            };
            MsgSendToEthResponse: {
                encode(_: _165.MsgSendToEthResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.MsgSendToEthResponse;
                fromPartial(_: {}): _165.MsgSendToEthResponse;
            };
            MsgRequestBatch: {
                encode(message: _165.MsgRequestBatch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.MsgRequestBatch;
                fromPartial(object: {
                    orchestrator?: string;
                    denom?: string;
                }): _165.MsgRequestBatch;
            };
            MsgRequestBatchResponse: {
                encode(_: _165.MsgRequestBatchResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.MsgRequestBatchResponse;
                fromPartial(_: {}): _165.MsgRequestBatchResponse;
            };
            MsgConfirmBatch: {
                encode(message: _165.MsgConfirmBatch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.MsgConfirmBatch;
                fromPartial(object: {
                    nonce?: any;
                    tokenContract?: string;
                    ethSigner?: string;
                    orchestrator?: string;
                    signature?: string;
                }): _165.MsgConfirmBatch;
            };
            MsgConfirmBatchResponse: {
                encode(_: _165.MsgConfirmBatchResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.MsgConfirmBatchResponse;
                fromPartial(_: {}): _165.MsgConfirmBatchResponse;
            };
            MsgDepositClaim: {
                encode(message: _165.MsgDepositClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.MsgDepositClaim;
                fromPartial(object: {
                    eventNonce?: any;
                    blockHeight?: any;
                    tokenContract?: string;
                    amount?: string;
                    ethereumSender?: string;
                    cosmosReceiver?: string;
                    orchestrator?: string;
                    data?: string;
                }): _165.MsgDepositClaim;
            };
            MsgDepositClaimResponse: {
                encode(_: _165.MsgDepositClaimResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.MsgDepositClaimResponse;
                fromPartial(_: {}): _165.MsgDepositClaimResponse;
            };
            MsgWithdrawClaim: {
                encode(message: _165.MsgWithdrawClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.MsgWithdrawClaim;
                fromPartial(object: {
                    eventNonce?: any;
                    blockHeight?: any;
                    batchNonce?: any;
                    tokenContract?: string;
                    orchestrator?: string;
                }): _165.MsgWithdrawClaim;
            };
            MsgWithdrawClaimResponse: {
                encode(_: _165.MsgWithdrawClaimResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.MsgWithdrawClaimResponse;
                fromPartial(_: {}): _165.MsgWithdrawClaimResponse;
            };
            MsgERC20DeployedClaim: {
                encode(message: _165.MsgERC20DeployedClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.MsgERC20DeployedClaim;
                fromPartial(object: {
                    eventNonce?: any;
                    blockHeight?: any;
                    cosmosDenom?: string;
                    tokenContract?: string;
                    name?: string;
                    symbol?: string;
                    decimals?: any;
                    orchestrator?: string;
                }): _165.MsgERC20DeployedClaim;
            };
            MsgERC20DeployedClaimResponse: {
                encode(_: _165.MsgERC20DeployedClaimResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.MsgERC20DeployedClaimResponse;
                fromPartial(_: {}): _165.MsgERC20DeployedClaimResponse;
            };
            MsgCancelSendToEth: {
                encode(message: _165.MsgCancelSendToEth, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.MsgCancelSendToEth;
                fromPartial(object: {
                    transactionId?: any;
                    sender?: string;
                }): _165.MsgCancelSendToEth;
            };
            MsgCancelSendToEthResponse: {
                encode(_: _165.MsgCancelSendToEthResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.MsgCancelSendToEthResponse;
                fromPartial(_: {}): _165.MsgCancelSendToEthResponse;
            };
            MsgSubmitBadSignatureEvidence: {
                encode(message: _165.MsgSubmitBadSignatureEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.MsgSubmitBadSignatureEvidence;
                fromPartial(object: {
                    subject?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    signature?: string;
                    sender?: string;
                }): _165.MsgSubmitBadSignatureEvidence;
            };
            MsgSubmitBadSignatureEvidenceResponse: {
                encode(_: _165.MsgSubmitBadSignatureEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.MsgSubmitBadSignatureEvidenceResponse;
                fromPartial(_: {}): _165.MsgSubmitBadSignatureEvidenceResponse;
            };
            MsgValsetUpdatedClaim: {
                encode(message: _165.MsgValsetUpdatedClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.MsgValsetUpdatedClaim;
                fromPartial(object: {
                    eventNonce?: any;
                    valsetNonce?: any;
                    blockHeight?: any;
                    members?: {
                        power?: any;
                        ethereumAddress?: string;
                    }[];
                    rewardAmount?: string;
                    rewardToken?: string;
                    orchestrator?: string;
                }): _165.MsgValsetUpdatedClaim;
            };
            MsgValsetUpdatedClaimResponse: {
                encode(_: _165.MsgValsetUpdatedClaimResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.MsgValsetUpdatedClaimResponse;
                fromPartial(_: {}): _165.MsgValsetUpdatedClaimResponse;
            };
            Params: {
                encode(message: _164.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.Params;
                fromPartial(object: {
                    peggyId?: string;
                    contractSourceHash?: string;
                    bridgeEthereumAddress?: string;
                    bridgeChainId?: any;
                    signedValsetsWindow?: any;
                    signedBatchesWindow?: any;
                    signedClaimsWindow?: any;
                    targetBatchTimeout?: any;
                    averageBlockTime?: any;
                    averageEthereumBlockTime?: any;
                    slashFractionValset?: Uint8Array;
                    slashFractionBatch?: Uint8Array;
                    slashFractionClaim?: Uint8Array;
                    slashFractionConflictingClaim?: Uint8Array;
                    unbondSlashingValsetsWindow?: any;
                    slashFractionBadEthSignature?: Uint8Array;
                    cosmosCoinDenom?: string;
                    cosmosCoinErc20Contract?: string;
                    claimSlashingEnabled?: boolean;
                    bridgeContractStartHeight?: any;
                    valsetReward?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _164.Params;
            };
            GenesisState: {
                encode(message: _164.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.GenesisState;
                fromPartial(object: {
                    params?: {
                        peggyId?: string;
                        contractSourceHash?: string;
                        bridgeEthereumAddress?: string;
                        bridgeChainId?: any;
                        signedValsetsWindow?: any;
                        signedBatchesWindow?: any;
                        signedClaimsWindow?: any;
                        targetBatchTimeout?: any;
                        averageBlockTime?: any;
                        averageEthereumBlockTime?: any;
                        slashFractionValset?: Uint8Array;
                        slashFractionBatch?: Uint8Array;
                        slashFractionClaim?: Uint8Array;
                        slashFractionConflictingClaim?: Uint8Array;
                        unbondSlashingValsetsWindow?: any;
                        slashFractionBadEthSignature?: Uint8Array;
                        cosmosCoinDenom?: string;
                        cosmosCoinErc20Contract?: string;
                        claimSlashingEnabled?: boolean;
                        bridgeContractStartHeight?: any;
                        valsetReward?: {
                            denom?: string;
                            amount?: string;
                        };
                    };
                    lastObservedNonce?: any;
                    valsets?: {
                        nonce?: any;
                        members?: {
                            power?: any;
                            ethereumAddress?: string;
                        }[];
                        height?: any;
                        rewardAmount?: string;
                        rewardToken?: string;
                    }[];
                    valsetConfirms?: {
                        nonce?: any;
                        orchestrator?: string;
                        ethAddress?: string;
                        signature?: string;
                    }[];
                    batches?: {
                        batchNonce?: any;
                        batchTimeout?: any;
                        transactions?: {
                            id?: any;
                            sender?: string;
                            destAddress?: string;
                            erc20Token?: {
                                contract?: string;
                                amount?: string;
                            };
                            erc20Fee?: {
                                contract?: string;
                                amount?: string;
                            };
                        }[];
                        tokenContract?: string;
                        block?: any;
                    }[];
                    batchConfirms?: {
                        nonce?: any;
                        tokenContract?: string;
                        ethSigner?: string;
                        orchestrator?: string;
                        signature?: string;
                    }[];
                    attestations?: {
                        observed?: boolean;
                        votes?: string[];
                        height?: any;
                        claim?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                    orchestratorAddresses?: {
                        sender?: string;
                        orchestrator?: string;
                        ethAddress?: string;
                    }[];
                    erc20ToDenoms?: {
                        erc20?: string;
                        denom?: string;
                    }[];
                    unbatchedTransfers?: {
                        id?: any;
                        sender?: string;
                        destAddress?: string;
                        erc20Token?: {
                            contract?: string;
                            amount?: string;
                        };
                        erc20Fee?: {
                            contract?: string;
                            amount?: string;
                        };
                    }[];
                    lastObservedEthereumHeight?: any;
                    lastOutgoingBatchId?: any;
                    lastOutgoingPoolId?: any;
                    lastObservedValset?: {
                        nonce?: any;
                        members?: {
                            power?: any;
                            ethereumAddress?: string;
                        }[];
                        height?: any;
                        rewardAmount?: string;
                        rewardToken?: string;
                    };
                    ethereumBlacklist?: string[];
                }): _164.GenesisState;
            };
            EventAttestationObserved: {
                encode(message: _163.EventAttestationObserved, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.EventAttestationObserved;
                fromPartial(object: {
                    attestationType?: _160.ClaimType;
                    bridgeContract?: string;
                    bridgeChainId?: any;
                    attestationId?: Uint8Array;
                    nonce?: any;
                }): _163.EventAttestationObserved;
            };
            EventBridgeWithdrawCanceled: {
                encode(message: _163.EventBridgeWithdrawCanceled, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.EventBridgeWithdrawCanceled;
                fromPartial(object: {
                    bridgeContract?: string;
                    bridgeChainId?: any;
                }): _163.EventBridgeWithdrawCanceled;
            };
            EventOutgoingBatch: {
                encode(message: _163.EventOutgoingBatch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.EventOutgoingBatch;
                fromPartial(object: {
                    denom?: string;
                    orchestratorAddress?: string;
                    batchNonce?: any;
                    batchTimeout?: any;
                    batchTxIds?: any[];
                }): _163.EventOutgoingBatch;
            };
            EventOutgoingBatchCanceled: {
                encode(message: _163.EventOutgoingBatchCanceled, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.EventOutgoingBatchCanceled;
                fromPartial(object: {
                    bridgeContract?: string;
                    bridgeChainId?: any;
                    batchId?: any;
                    nonce?: any;
                }): _163.EventOutgoingBatchCanceled;
            };
            EventValsetUpdateRequest: {
                encode(message: _163.EventValsetUpdateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.EventValsetUpdateRequest;
                fromPartial(object: {
                    valsetNonce?: any;
                    valsetHeight?: any;
                    valsetMembers?: {
                        power?: any;
                        ethereumAddress?: string;
                    }[];
                    rewardAmount?: string;
                    rewardToken?: string;
                }): _163.EventValsetUpdateRequest;
            };
            EventSetOrchestratorAddresses: {
                encode(message: _163.EventSetOrchestratorAddresses, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.EventSetOrchestratorAddresses;
                fromPartial(object: {
                    validatorAddress?: string;
                    orchestratorAddress?: string;
                    operatorEthAddress?: string;
                }): _163.EventSetOrchestratorAddresses;
            };
            EventValsetConfirm: {
                encode(message: _163.EventValsetConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.EventValsetConfirm;
                fromPartial(object: {
                    valsetNonce?: any;
                    orchestratorAddress?: string;
                }): _163.EventValsetConfirm;
            };
            EventSendToEth: {
                encode(message: _163.EventSendToEth, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.EventSendToEth;
                fromPartial(object: {
                    outgoingTxId?: any;
                    sender?: string;
                    receiver?: string;
                    amount?: string;
                    bridgeFee?: string;
                }): _163.EventSendToEth;
            };
            EventConfirmBatch: {
                encode(message: _163.EventConfirmBatch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.EventConfirmBatch;
                fromPartial(object: {
                    batchNonce?: any;
                    orchestratorAddress?: string;
                }): _163.EventConfirmBatch;
            };
            EventAttestationVote: {
                encode(message: _163.EventAttestationVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.EventAttestationVote;
                fromPartial(object: {
                    eventNonce?: any;
                    attestationId?: Uint8Array;
                    voter?: string;
                }): _163.EventAttestationVote;
            };
            EventDepositClaim: {
                encode(message: _163.EventDepositClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.EventDepositClaim;
                fromPartial(object: {
                    eventNonce?: any;
                    eventHeight?: any;
                    attestationId?: Uint8Array;
                    ethereumSender?: string;
                    cosmosReceiver?: string;
                    tokenContract?: string;
                    amount?: string;
                    orchestratorAddress?: string;
                    data?: string;
                }): _163.EventDepositClaim;
            };
            EventWithdrawClaim: {
                encode(message: _163.EventWithdrawClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.EventWithdrawClaim;
                fromPartial(object: {
                    eventNonce?: any;
                    eventHeight?: any;
                    attestationId?: Uint8Array;
                    batchNonce?: any;
                    tokenContract?: string;
                    orchestratorAddress?: string;
                }): _163.EventWithdrawClaim;
            };
            EventERC20DeployedClaim: {
                encode(message: _163.EventERC20DeployedClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.EventERC20DeployedClaim;
                fromPartial(object: {
                    eventNonce?: any;
                    eventHeight?: any;
                    attestationId?: Uint8Array;
                    cosmosDenom?: string;
                    tokenContract?: string;
                    name?: string;
                    symbol?: string;
                    decimals?: any;
                    orchestratorAddress?: string;
                }): _163.EventERC20DeployedClaim;
            };
            EventValsetUpdateClaim: {
                encode(message: _163.EventValsetUpdateClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.EventValsetUpdateClaim;
                fromPartial(object: {
                    eventNonce?: any;
                    eventHeight?: any;
                    attestationId?: Uint8Array;
                    valsetNonce?: any;
                    valsetMembers?: {
                        power?: any;
                        ethereumAddress?: string;
                    }[];
                    rewardAmount?: string;
                    rewardToken?: string;
                    orchestratorAddress?: string;
                }): _163.EventValsetUpdateClaim;
            };
            EventCancelSendToEth: {
                encode(message: _163.EventCancelSendToEth, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.EventCancelSendToEth;
                fromPartial(object: {
                    outgoingTxId?: any;
                }): _163.EventCancelSendToEth;
            };
            EventSubmitBadSignatureEvidence: {
                encode(message: _163.EventSubmitBadSignatureEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.EventSubmitBadSignatureEvidence;
                fromPartial(object: {
                    badEthSignature?: string;
                    badEthSignatureSubject?: string;
                }): _163.EventSubmitBadSignatureEvidence;
            };
            signTypeFromJSON(object: any): _162.SignType;
            signTypeToJSON(object: _162.SignType): string;
            SignType: typeof _162.SignType;
            SignTypeSDKType: typeof _162.SignTypeSDKType;
            OutgoingTxBatch: {
                encode(message: _161.OutgoingTxBatch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.OutgoingTxBatch;
                fromPartial(object: {
                    batchNonce?: any;
                    batchTimeout?: any;
                    transactions?: {
                        id?: any;
                        sender?: string;
                        destAddress?: string;
                        erc20Token?: {
                            contract?: string;
                            amount?: string;
                        };
                        erc20Fee?: {
                            contract?: string;
                            amount?: string;
                        };
                    }[];
                    tokenContract?: string;
                    block?: any;
                }): _161.OutgoingTxBatch;
            };
            OutgoingTransferTx: {
                encode(message: _161.OutgoingTransferTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.OutgoingTransferTx;
                fromPartial(object: {
                    id?: any;
                    sender?: string;
                    destAddress?: string;
                    erc20Token?: {
                        contract?: string;
                        amount?: string;
                    };
                    erc20Fee?: {
                        contract?: string;
                        amount?: string;
                    };
                }): _161.OutgoingTransferTx;
            };
            claimTypeFromJSON(object: any): _160.ClaimType;
            claimTypeToJSON(object: _160.ClaimType): string;
            ClaimType: typeof _160.ClaimType;
            ClaimTypeSDKType: typeof _160.ClaimTypeSDKType;
            Attestation: {
                encode(message: _160.Attestation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.Attestation;
                fromPartial(object: {
                    observed?: boolean;
                    votes?: string[];
                    height?: any;
                    claim?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _160.Attestation;
            };
            ERC20Token: {
                encode(message: _160.ERC20Token, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.ERC20Token;
                fromPartial(object: {
                    contract?: string;
                    amount?: string;
                }): _160.ERC20Token;
            };
        };
    }
    namespace types {
        const v1beta1: {
            TxResponseGenericMessage: {
                encode(message: _172.TxResponseGenericMessage, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.TxResponseGenericMessage;
                fromPartial(object: {
                    header?: string;
                    data?: Uint8Array;
                }): _172.TxResponseGenericMessage;
            };
            TxResponseData: {
                encode(message: _172.TxResponseData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.TxResponseData;
                fromPartial(object: {
                    messages?: {
                        header?: string;
                        data?: Uint8Array;
                    }[];
                }): _172.TxResponseData;
            };
            ExtensionOptionsWeb3Tx: {
                encode(message: _171.ExtensionOptionsWeb3Tx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.ExtensionOptionsWeb3Tx;
                fromPartial(object: {
                    typedDataChainID?: any;
                    feePayer?: string;
                    feePayerSig?: Uint8Array;
                }): _171.ExtensionOptionsWeb3Tx;
            };
            EthAccount: {
                encode(message: _170.EthAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.EthAccount;
                fromPartial(object: {
                    baseAccount?: {
                        address?: string;
                        pubKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        accountNumber?: any;
                        sequence?: any;
                    };
                    codeHash?: Uint8Array;
                }): _170.EthAccount;
            };
        };
    }
    namespace wasmx {
        const v1: {
            QueryClientImpl: typeof _316.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                wasmxParams(request?: _174.QueryWasmxParamsRequest): Promise<_174.QueryWasmxParamsResponse>;
                wasmxModuleState(request?: _174.QueryModuleStateRequest): Promise<_174.QueryModuleStateResponse>;
            };
            LCDQueryClient: typeof _309.LCDQueryClient;
            Params: {
                encode(message: _176.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.Params;
                fromPartial(object: {
                    isExecutionEnabled?: boolean;
                    registryContract?: string;
                    maxBeginBlockTotalGas?: any;
                    maxContractGasLimit?: any;
                    minGasPrice?: string;
                }): _176.Params;
            };
            ContractRegistrationRequestProposal: {
                encode(message: _176.ContractRegistrationRequestProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.ContractRegistrationRequestProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    contractRegistrationRequest?: {
                        contractAddress?: string;
                        gasLimit?: any;
                        gasPrice?: string;
                        pinContract?: boolean;
                    };
                }): _176.ContractRegistrationRequestProposal;
            };
            BatchContractRegistrationRequestProposal: {
                encode(message: _176.BatchContractRegistrationRequestProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.BatchContractRegistrationRequestProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    contractRegistrationRequests?: {
                        contractAddress?: string;
                        gasLimit?: any;
                        gasPrice?: string;
                        pinContract?: boolean;
                    }[];
                }): _176.BatchContractRegistrationRequestProposal;
            };
            ContractRegistrationRequest: {
                encode(message: _176.ContractRegistrationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.ContractRegistrationRequest;
                fromPartial(object: {
                    contractAddress?: string;
                    gasLimit?: any;
                    gasPrice?: string;
                    pinContract?: boolean;
                }): _176.ContractRegistrationRequest;
            };
            QueryWasmxParamsRequest: {
                encode(_: _174.QueryWasmxParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.QueryWasmxParamsRequest;
                fromPartial(_: {}): _174.QueryWasmxParamsRequest;
            };
            QueryWasmxParamsResponse: {
                encode(message: _174.QueryWasmxParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.QueryWasmxParamsResponse;
                fromPartial(object: {
                    params?: {
                        isExecutionEnabled?: boolean;
                        registryContract?: string;
                        maxBeginBlockTotalGas?: any;
                        maxContractGasLimit?: any;
                        minGasPrice?: string;
                    };
                }): _174.QueryWasmxParamsResponse;
            };
            QueryModuleStateRequest: {
                encode(_: _174.QueryModuleStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.QueryModuleStateRequest;
                fromPartial(_: {}): _174.QueryModuleStateRequest;
            };
            QueryModuleStateResponse: {
                encode(message: _174.QueryModuleStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.QueryModuleStateResponse;
                fromPartial(object: {
                    state?: {
                        params?: {
                            isExecutionEnabled?: boolean;
                            registryContract?: string;
                            maxBeginBlockTotalGas?: any;
                            maxContractGasLimit?: any;
                            minGasPrice?: string;
                        };
                    };
                }): _174.QueryModuleStateResponse;
            };
            GenesisState: {
                encode(message: _173.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.GenesisState;
                fromPartial(object: {
                    params?: {
                        isExecutionEnabled?: boolean;
                        registryContract?: string;
                        maxBeginBlockTotalGas?: any;
                        maxContractGasLimit?: any;
                        minGasPrice?: string;
                    };
                }): _173.GenesisState;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("@osmonauts/helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                crisis: {
                    v1beta1: import("../cosmos/crisis/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                evidence: {
                    v1beta1: import("../cosmos/evidence/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                feegrant: {
                    v1beta1: import("../cosmos/feegrant/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                gov: {
                    v1: import("../cosmos/gov/v1/tx.rpc.msg").MsgClientImpl;
                    v1beta1: import("../cosmos/gov/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                group: {
                    v1: import("../cosmos/group/v1/tx.rpc.msg").MsgClientImpl;
                };
                nft: {
                    v1beta1: import("../cosmos/nft/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                slashing: {
                    v1beta1: import("../cosmos/slashing/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                vesting: {
                    v1beta1: import("../cosmos/vesting/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
            };
            injective: {
                auction: {
                    v1beta1: _317.MsgClientImpl;
                };
                exchange: {
                    v1beta1: _318.MsgClientImpl;
                };
                insurance: {
                    v1beta1: _319.MsgClientImpl;
                };
                ocr: {
                    v1beta1: _320.MsgClientImpl;
                };
                oracle: {
                    v1beta1: _321.MsgClientImpl;
                };
                peggy: {
                    v1: _322.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
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
                        auctionParams(request?: _137.QueryAuctionParamsRequest): Promise<_137.QueryAuctionParamsResponse>;
                        currentAuctionBasket(request?: _137.QueryCurrentAuctionBasketRequest): Promise<_137.QueryCurrentAuctionBasketResponse>;
                        auctionModuleState(request?: _137.QueryModuleStateRequest): Promise<_137.QueryModuleStateResponse>;
                    };
                };
                exchange: {
                    v1beta1: {
                        queryExchangeParams(request?: _144.QueryExchangeParamsRequest): Promise<_144.QueryExchangeParamsResponse>;
                        subaccountDeposits(request: _144.QuerySubaccountDepositsRequest): Promise<_144.QuerySubaccountDepositsResponse>;
                        subaccountDeposit(request: _144.QuerySubaccountDepositRequest): Promise<_144.QuerySubaccountDepositResponse>;
                        exchangeBalances(request?: _144.QueryExchangeBalancesRequest): Promise<_144.QueryExchangeBalancesResponse>;
                        spotMarkets(request: _144.QuerySpotMarketsRequest): Promise<_144.QuerySpotMarketsResponse>;
                        spotMarket(request: _144.QuerySpotMarketRequest): Promise<_144.QuerySpotMarketResponse>;
                        spotOrderbook(request: _144.QuerySpotOrderbookRequest): Promise<_144.QuerySpotOrderbookResponse>;
                        traderSpotOrders(request: _144.QueryTraderSpotOrdersRequest): Promise<_144.QueryTraderSpotOrdersResponse>;
                        spotOrdersByHashes(request: _144.QuerySpotOrdersByHashesRequest): Promise<_144.QuerySpotOrdersByHashesResponse>;
                        subaccountOrders(request: _144.QuerySubaccountOrdersRequest): Promise<_144.QuerySubaccountOrdersResponse>;
                        traderSpotTransientOrders(request: _144.QueryTraderSpotOrdersRequest): Promise<_144.QueryTraderSpotOrdersResponse>;
                        spotMidPriceAndTOB(request: _144.QuerySpotMidPriceAndTOBRequest): Promise<_144.QuerySpotMidPriceAndTOBResponse>;
                        derivativeMidPriceAndTOB(request: _144.QueryDerivativeMidPriceAndTOBRequest): Promise<_144.QueryDerivativeMidPriceAndTOBResponse>;
                        derivativeOrderbook(request: _144.QueryDerivativeOrderbookRequest): Promise<_144.QueryDerivativeOrderbookResponse>;
                        traderDerivativeOrders(request: _144.QueryTraderDerivativeOrdersRequest): Promise<_144.QueryTraderDerivativeOrdersResponse>;
                        derivativeOrdersByHashes(request: _144.QueryDerivativeOrdersByHashesRequest): Promise<_144.QueryDerivativeOrdersByHashesResponse>;
                        traderDerivativeTransientOrders(request: _144.QueryTraderDerivativeOrdersRequest): Promise<_144.QueryTraderDerivativeOrdersResponse>;
                        derivativeMarkets(request: _144.QueryDerivativeMarketsRequest): Promise<_144.QueryDerivativeMarketsResponse>;
                        derivativeMarket(request: _144.QueryDerivativeMarketRequest): Promise<_144.QueryDerivativeMarketResponse>;
                        derivativeMarketAddress(request: _144.QueryDerivativeMarketAddressRequest): Promise<_144.QueryDerivativeMarketAddressResponse>;
                        subaccountTradeNonce(request: _144.QuerySubaccountTradeNonceRequest): Promise<_144.QuerySubaccountTradeNonceResponse>;
                        exchangeModuleState(request?: _144.QueryModuleStateRequest): Promise<_144.QueryModuleStateResponse>;
                        positions(request?: _144.QueryPositionsRequest): Promise<_144.QueryPositionsResponse>;
                        subaccountPositions(request: _144.QuerySubaccountPositionsRequest): Promise<_144.QuerySubaccountPositionsResponse>;
                        subaccountPositionInMarket(request: _144.QuerySubaccountPositionInMarketRequest): Promise<_144.QuerySubaccountPositionInMarketResponse>;
                        subaccountEffectivePositionInMarket(request: _144.QuerySubaccountEffectivePositionInMarketRequest): Promise<_144.QuerySubaccountEffectivePositionInMarketResponse>;
                        perpetualMarketInfo(request: _144.QueryPerpetualMarketInfoRequest): Promise<_144.QueryPerpetualMarketInfoResponse>;
                        expiryFuturesMarketInfo(request: _144.QueryExpiryFuturesMarketInfoRequest): Promise<_144.QueryExpiryFuturesMarketInfoResponse>;
                        perpetualMarketFunding(request: _144.QueryPerpetualMarketFundingRequest): Promise<_144.QueryPerpetualMarketFundingResponse>;
                        subaccountOrderMetadata(request: _144.QuerySubaccountOrderMetadataRequest): Promise<_144.QuerySubaccountOrderMetadataResponse>;
                        tradeRewardPoints(request: _144.QueryTradeRewardPointsRequest): Promise<_144.QueryTradeRewardPointsResponse>;
                        pendingTradeRewardPoints(request: _144.QueryTradeRewardPointsRequest): Promise<_144.QueryTradeRewardPointsResponse>;
                        tradeRewardCampaign(request?: _144.QueryTradeRewardCampaignRequest): Promise<_144.QueryTradeRewardCampaignResponse>;
                        feeDiscountAccountInfo(request: _144.QueryFeeDiscountAccountInfoRequest): Promise<_144.QueryFeeDiscountAccountInfoResponse>;
                        feeDiscountSchedule(request?: _144.QueryFeeDiscountScheduleRequest): Promise<_144.QueryFeeDiscountScheduleResponse>;
                        balanceMismatches(request: _144.QueryBalanceMismatchesRequest): Promise<_144.QueryBalanceMismatchesResponse>;
                        balanceWithBalanceHolds(request?: _144.QueryBalanceWithBalanceHoldsRequest): Promise<_144.QueryBalanceWithBalanceHoldsResponse>;
                        feeDiscountTierStatistics(request?: _144.QueryFeeDiscountTierStatisticsRequest): Promise<_144.QueryFeeDiscountTierStatisticsResponse>;
                        ninjaVaultInfos(request?: _144.NinjaVaultInfosRequest): Promise<_144.NinjaVaultInfosResponse>;
                        queryMarketIDFromVault(request: _144.QueryMarketIDFromVaultRequest): Promise<_144.QueryMarketIDFromVaultResponse>;
                        historicalTradeRecords(request: _144.QueryHistoricalTradeRecordsRequest): Promise<_144.QueryHistoricalTradeRecordsResponse>;
                        isOptedOutOfRewards(request: _144.QueryIsOptedOutOfRewardsRequest): Promise<_144.QueryIsOptedOutOfRewardsResponse>;
                        optedOutOfRewardsAccounts(request?: _144.QueryOptedOutOfRewardsAccountsRequest): Promise<_144.QueryOptedOutOfRewardsAccountsResponse>;
                        marketVolatility(request: _144.QueryMarketVolatilityRequest): Promise<_144.QueryMarketVolatilityResponse>;
                        binaryOptionsMarkets(request: _144.QueryBinaryMarketsRequest): Promise<_144.QueryBinaryMarketsResponse>;
                        traderDerivativeConditionalOrders(request: _144.QueryTraderDerivativeConditionalOrdersRequest): Promise<_144.QueryTraderDerivativeConditionalOrdersResponse>;
                    };
                };
                insurance: {
                    v1beta1: {
                        insuranceParams(request?: _148.QueryInsuranceParamsRequest): Promise<_148.QueryInsuranceParamsResponse>;
                        insuranceFund(request: _148.QueryInsuranceFundRequest): Promise<_148.QueryInsuranceFundResponse>;
                        insuranceFunds(request?: _148.QueryInsuranceFundsRequest): Promise<_148.QueryInsuranceFundsResponse>;
                        estimatedRedemptions(request: _148.QueryEstimatedRedemptionsRequest): Promise<_148.QueryEstimatedRedemptionsResponse>;
                        pendingRedemptions(request: _148.QueryPendingRedemptionsRequest): Promise<_148.QueryPendingRedemptionsResponse>;
                        insuranceModuleState(request?: _148.QueryModuleStateRequest): Promise<_148.QueryModuleStateResponse>;
                    };
                };
                ocr: {
                    v1beta1: {
                        params(request?: _152.QueryParamsRequest): Promise<_152.QueryParamsResponse>;
                        feedConfig(request: _152.QueryFeedConfigRequest): Promise<_152.QueryFeedConfigResponse>;
                        feedConfigInfo(request: _152.QueryFeedConfigInfoRequest): Promise<_152.QueryFeedConfigInfoResponse>;
                        latestRound(request: _152.QueryLatestRoundRequest): Promise<_152.QueryLatestRoundResponse>;
                        latestTransmissionDetails(request: _152.QueryLatestTransmissionDetailsRequest): Promise<_152.QueryLatestTransmissionDetailsResponse>;
                        owedAmount(request: _152.QueryOwedAmountRequest): Promise<_152.QueryOwedAmountResponse>;
                        ocrModuleState(request?: _152.QueryModuleStateRequest): Promise<_152.QueryModuleStateResponse>;
                    };
                };
                oracle: {
                    v1beta1: {
                        params(request?: _158.QueryParamsRequest): Promise<_158.QueryParamsResponse>;
                        bandRelayers(request?: _158.QueryBandRelayersRequest): Promise<_158.QueryBandRelayersResponse>;
                        bandPriceStates(request?: _158.QueryBandPriceStatesRequest): Promise<_158.QueryBandPriceStatesResponse>;
                        bandIBCPriceStates(request?: _158.QueryBandIBCPriceStatesRequest): Promise<_158.QueryBandIBCPriceStatesResponse>;
                        priceFeedPriceStates(request?: _158.QueryPriceFeedPriceStatesRequest): Promise<_158.QueryPriceFeedPriceStatesResponse>;
                        coinbasePriceStates(request?: _158.QueryCoinbasePriceStatesRequest): Promise<_158.QueryCoinbasePriceStatesResponse>;
                        providerPriceState(request: _158.QueryProviderPriceStateRequest): Promise<_158.QueryProviderPriceStateResponse>;
                        oracleModuleState(request?: _158.QueryModuleStateRequest): Promise<_158.QueryModuleStateResponse>;
                        historicalPriceRecords(request: _158.QueryHistoricalPriceRecordsRequest): Promise<_158.QueryHistoricalPriceRecordsResponse>;
                        oracleVolatility(request: _158.QueryOracleVolatilityRequest): Promise<_158.QueryOracleVolatilityResponse>;
                        oracleProvidersInfo(request?: _158.QueryOracleProvidersInfoRequest): Promise<_158.QueryOracleProvidersInfoResponse>;
                        oracleProviderPrices(request: _158.QueryOracleProviderPricesRequest): Promise<_158.QueryOracleProviderPricesResponse>;
                    };
                };
                peggy: {
                    v1: {
                        params(request?: _168.QueryParamsRequest): Promise<_168.QueryParamsResponse>;
                        currentValset(request?: _168.QueryCurrentValsetRequest): Promise<_168.QueryCurrentValsetResponse>;
                        valsetRequest(request: _168.QueryValsetRequestRequest): Promise<_168.QueryValsetRequestResponse>;
                        valsetConfirm(request: _168.QueryValsetConfirmRequest): Promise<_168.QueryValsetConfirmResponse>;
                        valsetConfirmsByNonce(request: _168.QueryValsetConfirmsByNonceRequest): Promise<_168.QueryValsetConfirmsByNonceResponse>;
                        lastValsetRequests(request?: _168.QueryLastValsetRequestsRequest): Promise<_168.QueryLastValsetRequestsResponse>;
                        lastPendingValsetRequestByAddr(request: _168.QueryLastPendingValsetRequestByAddrRequest): Promise<_168.QueryLastPendingValsetRequestByAddrResponse>;
                        lastEventByAddr(request: _168.QueryLastEventByAddrRequest): Promise<_168.QueryLastEventByAddrResponse>;
                        getPendingSendToEth(request: _168.QueryPendingSendToEth): Promise<_168.QueryPendingSendToEthResponse>;
                        batchFees(request?: _168.QueryBatchFeeRequest): Promise<_168.QueryBatchFeeResponse>;
                        outgoingTxBatches(request?: _168.QueryOutgoingTxBatchesRequest): Promise<_168.QueryOutgoingTxBatchesResponse>;
                        lastPendingBatchRequestByAddr(request: _168.QueryLastPendingBatchRequestByAddrRequest): Promise<_168.QueryLastPendingBatchRequestByAddrResponse>;
                        batchRequestByNonce(request: _168.QueryBatchRequestByNonceRequest): Promise<_168.QueryBatchRequestByNonceResponse>;
                        batchConfirms(request: _168.QueryBatchConfirmsRequest): Promise<_168.QueryBatchConfirmsResponse>;
                        eRC20ToDenom(request: _168.QueryERC20ToDenomRequest): Promise<_168.QueryERC20ToDenomResponse>;
                        denomToERC20(request: _168.QueryDenomToERC20Request): Promise<_168.QueryDenomToERC20Response>;
                        getDelegateKeyByValidator(request: _168.QueryDelegateKeysByValidatorAddress): Promise<_168.QueryDelegateKeysByValidatorAddressResponse>;
                        getDelegateKeyByEth(request: _168.QueryDelegateKeysByEthAddress): Promise<_168.QueryDelegateKeysByEthAddressResponse>;
                        getDelegateKeyByOrchestrator(request: _168.QueryDelegateKeysByOrchestratorAddress): Promise<_168.QueryDelegateKeysByOrchestratorAddressResponse>;
                        peggyModuleState(request?: _168.QueryModuleStateRequest): Promise<_168.QueryModuleStateResponse>;
                    };
                };
                wasmx: {
                    v1: {
                        wasmxParams(request?: _174.QueryWasmxParamsRequest): Promise<_174.QueryWasmxParamsResponse>;
                        wasmxModuleState(request?: _174.QueryModuleStateRequest): Promise<_174.QueryModuleStateResponse>;
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: import("../cosmos/auth/v1beta1/query.lcd").LCDQueryClient;
                };
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/query.lcd").LCDQueryClient;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/query.lcd").LCDQueryClient;
                };
                base: {
                    tendermint: {
                        v1beta1: import("../cosmos/base/tendermint/v1beta1/query.lcd").LCDQueryClient;
                    };
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/query.lcd").LCDQueryClient;
                };
                evidence: {
                    v1beta1: import("../cosmos/evidence/v1beta1/query.lcd").LCDQueryClient;
                };
                feegrant: {
                    v1beta1: import("../cosmos/feegrant/v1beta1/query.lcd").LCDQueryClient;
                };
                gov: {
                    v1: import("../cosmos/gov/v1/query.lcd").LCDQueryClient;
                    v1beta1: import("../cosmos/gov/v1beta1/query.lcd").LCDQueryClient;
                };
                group: {
                    v1: import("../cosmos/group/v1/query.lcd").LCDQueryClient;
                };
                mint: {
                    v1beta1: import("../cosmos/mint/v1beta1/query.lcd").LCDQueryClient;
                };
                nft: {
                    v1beta1: import("../cosmos/nft/v1beta1/query.lcd").LCDQueryClient;
                };
                params: {
                    v1beta1: import("../cosmos/params/v1beta1/query.lcd").LCDQueryClient;
                };
                slashing: {
                    v1beta1: import("../cosmos/slashing/v1beta1/query.lcd").LCDQueryClient;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/query.lcd").LCDQueryClient;
                };
                tx: {
                    v1beta1: import("../cosmos/tx/v1beta1/service.lcd").LCDQueryClient;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/query.lcd").LCDQueryClient;
                };
            };
            injective: {
                auction: {
                    v1beta1: _303.LCDQueryClient;
                };
                exchange: {
                    v1beta1: _304.LCDQueryClient;
                };
                insurance: {
                    v1beta1: _305.LCDQueryClient;
                };
                ocr: {
                    v1beta1: _306.LCDQueryClient;
                };
                oracle: {
                    v1beta1: _307.LCDQueryClient;
                };
                peggy: {
                    v1: _308.LCDQueryClient;
                };
                wasmx: {
                    v1: _309.LCDQueryClient;
                };
            };
        }>;
    };
}
