import { OfflineSigner, GeneratedType, Registry } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
export declare const injectiveAminoConverters: {
    "/injective.peggy.v1.MsgValsetConfirm": {
        aminoType: string;
        toAmino: ({ nonce, orchestrator, ethAddress, signature }: import("./peggy/v1/msgs").MsgValsetConfirm) => {
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
        }) => import("./peggy/v1/msgs").MsgValsetConfirm;
    };
    "/injective.peggy.v1.MsgSendToEth": {
        aminoType: string;
        toAmino: ({ sender, ethDest, amount, bridgeFee }: import("./peggy/v1/msgs").MsgSendToEth) => {
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
        }) => import("./peggy/v1/msgs").MsgSendToEth;
    };
    "/injective.peggy.v1.MsgRequestBatch": {
        aminoType: string;
        toAmino: ({ orchestrator, denom }: import("./peggy/v1/msgs").MsgRequestBatch) => {
            orchestrator: string;
            denom: string;
        };
        fromAmino: ({ orchestrator, denom }: {
            orchestrator: string;
            denom: string;
        }) => import("./peggy/v1/msgs").MsgRequestBatch;
    };
    "/injective.peggy.v1.MsgConfirmBatch": {
        aminoType: string;
        toAmino: ({ nonce, tokenContract, ethSigner, orchestrator, signature }: import("./peggy/v1/msgs").MsgConfirmBatch) => {
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
        }) => import("./peggy/v1/msgs").MsgConfirmBatch;
    };
    "/injective.peggy.v1.MsgDepositClaim": {
        aminoType: string;
        toAmino: ({ eventNonce, blockHeight, tokenContract, amount, ethereumSender, cosmosReceiver, orchestrator, data }: import("./peggy/v1/msgs").MsgDepositClaim) => {
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
        }) => import("./peggy/v1/msgs").MsgDepositClaim;
    };
    "/injective.peggy.v1.MsgWithdrawClaim": {
        aminoType: string;
        toAmino: ({ eventNonce, blockHeight, batchNonce, tokenContract, orchestrator }: import("./peggy/v1/msgs").MsgWithdrawClaim) => {
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
        }) => import("./peggy/v1/msgs").MsgWithdrawClaim;
    };
    "/injective.peggy.v1.MsgValsetUpdatedClaim": {
        aminoType: string;
        toAmino: ({ eventNonce, valsetNonce, blockHeight, members, rewardAmount, rewardToken, orchestrator }: import("./peggy/v1/msgs").MsgValsetUpdatedClaim) => {
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
        }) => import("./peggy/v1/msgs").MsgValsetUpdatedClaim;
    };
    "/injective.peggy.v1.MsgERC20DeployedClaim": {
        aminoType: string;
        toAmino: ({ eventNonce, blockHeight, cosmosDenom, tokenContract, name, symbol, decimals, orchestrator }: import("./peggy/v1/msgs").MsgERC20DeployedClaim) => {
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
        }) => import("./peggy/v1/msgs").MsgERC20DeployedClaim;
    };
    "/injective.peggy.v1.MsgSetOrchestratorAddresses": {
        aminoType: string;
        toAmino: ({ sender, orchestrator, ethAddress }: import("./peggy/v1/msgs").MsgSetOrchestratorAddresses) => {
            sender: string;
            orchestrator: string;
            eth_address: string;
        };
        fromAmino: ({ sender, orchestrator, eth_address }: {
            sender: string;
            orchestrator: string;
            eth_address: string;
        }) => import("./peggy/v1/msgs").MsgSetOrchestratorAddresses;
    };
    "/injective.peggy.v1.MsgCancelSendToEth": {
        aminoType: string;
        toAmino: ({ transactionId, sender }: import("./peggy/v1/msgs").MsgCancelSendToEth) => {
            transaction_id: string;
            sender: string;
        };
        fromAmino: ({ transaction_id, sender }: {
            transaction_id: string;
            sender: string;
        }) => import("./peggy/v1/msgs").MsgCancelSendToEth;
    };
    "/injective.peggy.v1.MsgSubmitBadSignatureEvidence": {
        aminoType: string;
        toAmino: ({ subject, signature, sender }: import("./peggy/v1/msgs").MsgSubmitBadSignatureEvidence) => {
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
        }) => import("./peggy/v1/msgs").MsgSubmitBadSignatureEvidence;
    };
    "/injective.oracle.v1beta1.MsgRelayProviderPrices": {
        aminoType: string;
        toAmino: ({ sender, provider, symbols, prices }: import("./oracle/v1beta1/tx").MsgRelayProviderPrices) => {
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
        }) => import("./oracle/v1beta1/tx").MsgRelayProviderPrices;
    };
    "/injective.oracle.v1beta1.MsgRelayPriceFeedPrice": {
        aminoType: string;
        toAmino: ({ sender, base, quote, price }: import("./oracle/v1beta1/tx").MsgRelayPriceFeedPrice) => {
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
        }) => import("./oracle/v1beta1/tx").MsgRelayPriceFeedPrice;
    };
    "/injective.oracle.v1beta1.MsgRelayBandRates": {
        aminoType: string;
        toAmino: ({ relayer, symbols, rates, resolveTimes, requestIDs }: import("./oracle/v1beta1/tx").MsgRelayBandRates) => {
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
        }) => import("./oracle/v1beta1/tx").MsgRelayBandRates;
    };
    "/injective.oracle.v1beta1.MsgRequestBandIBCRates": {
        aminoType: string;
        toAmino: ({ sender, requestId }: import("./oracle/v1beta1/tx").MsgRequestBandIBCRates) => {
            sender: string;
            request_id: string;
        };
        fromAmino: ({ sender, request_id }: {
            sender: string;
            request_id: string;
        }) => import("./oracle/v1beta1/tx").MsgRequestBandIBCRates;
    };
    "/injective.oracle.v1beta1.MsgRelayCoinbaseMessages": {
        aminoType: string;
        toAmino: ({ sender, messages, signatures }: import("./oracle/v1beta1/tx").MsgRelayCoinbaseMessages) => {
            sender: string;
            messages: Uint8Array[];
            signatures: Uint8Array[];
        };
        fromAmino: ({ sender, messages, signatures }: {
            sender: string;
            messages: Uint8Array[];
            signatures: Uint8Array[];
        }) => import("./oracle/v1beta1/tx").MsgRelayCoinbaseMessages;
    };
    "/injective.ocr.v1beta1.MsgCreateFeed": {
        aminoType: string;
        toAmino: ({ sender, config }: import("./ocr/v1beta1/tx").MsgCreateFeed) => {
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
        }) => import("./ocr/v1beta1/tx").MsgCreateFeed;
    };
    "/injective.ocr.v1beta1.MsgUpdateFeed": {
        aminoType: string;
        toAmino: ({ sender, feedId, signers, transmitters, linkPerObservation, linkPerTransmission, linkDenom, feedAdmin, billingAdmin }: import("./ocr/v1beta1/tx").MsgUpdateFeed) => {
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
        }) => import("./ocr/v1beta1/tx").MsgUpdateFeed;
    };
    "/injective.ocr.v1beta1.MsgTransmit": {
        aminoType: string;
        toAmino: ({ transmitter, configDigest, feedId, epoch, round, extraHash, report, signatures }: import("./ocr/v1beta1/tx").MsgTransmit) => {
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
        }) => import("./ocr/v1beta1/tx").MsgTransmit;
    };
    "/injective.ocr.v1beta1.MsgFundFeedRewardPool": {
        aminoType: string;
        toAmino: ({ sender, feedId, amount }: import("./ocr/v1beta1/tx").MsgFundFeedRewardPool) => {
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
        }) => import("./ocr/v1beta1/tx").MsgFundFeedRewardPool;
    };
    "/injective.ocr.v1beta1.MsgWithdrawFeedRewardPool": {
        aminoType: string;
        toAmino: ({ sender, feedId, amount }: import("./ocr/v1beta1/tx").MsgWithdrawFeedRewardPool) => {
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
        }) => import("./ocr/v1beta1/tx").MsgWithdrawFeedRewardPool;
    };
    "/injective.ocr.v1beta1.MsgSetPayees": {
        aminoType: string;
        toAmino: ({ sender, feedId, transmitters, payees }: import("./ocr/v1beta1/tx").MsgSetPayees) => {
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
        }) => import("./ocr/v1beta1/tx").MsgSetPayees;
    };
    "/injective.ocr.v1beta1.MsgTransferPayeeship": {
        aminoType: string;
        toAmino: ({ sender, transmitter, feedId, proposed }: import("./ocr/v1beta1/tx").MsgTransferPayeeship) => {
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
        }) => import("./ocr/v1beta1/tx").MsgTransferPayeeship;
    };
    "/injective.ocr.v1beta1.MsgAcceptPayeeship": {
        aminoType: string;
        toAmino: ({ payee, transmitter, feedId }: import("./ocr/v1beta1/tx").MsgAcceptPayeeship) => {
            payee: string;
            transmitter: string;
            feed_id: string;
        };
        fromAmino: ({ payee, transmitter, feed_id }: {
            payee: string;
            transmitter: string;
            feed_id: string;
        }) => import("./ocr/v1beta1/tx").MsgAcceptPayeeship;
    };
    "/injective.insurance.v1beta1.MsgCreateInsuranceFund": {
        aminoType: string;
        toAmino: ({ sender, ticker, quoteDenom, oracleBase, oracleQuote, oracleType, expiry, initialDeposit }: import("./insurance/v1beta1/tx").MsgCreateInsuranceFund) => {
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
        }) => import("./insurance/v1beta1/tx").MsgCreateInsuranceFund;
    };
    "/injective.insurance.v1beta1.MsgUnderwrite": {
        aminoType: string;
        toAmino: ({ sender, marketId, deposit }: import("./insurance/v1beta1/tx").MsgUnderwrite) => {
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
        }) => import("./insurance/v1beta1/tx").MsgUnderwrite;
    };
    "/injective.insurance.v1beta1.MsgRequestRedemption": {
        aminoType: string;
        toAmino: ({ sender, marketId, amount }: import("./insurance/v1beta1/tx").MsgRequestRedemption) => {
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
        }) => import("./insurance/v1beta1/tx").MsgRequestRedemption;
    };
    "/injective.exchange.v1beta1.MsgDeposit": {
        aminoType: string;
        toAmino: ({ sender, subaccountId, amount }: import("./exchange/v1beta1/tx").MsgDeposit) => {
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
        }) => import("./exchange/v1beta1/tx").MsgDeposit;
    };
    "/injective.exchange.v1beta1.MsgWithdraw": {
        aminoType: string;
        toAmino: ({ sender, subaccountId, amount }: import("./exchange/v1beta1/tx").MsgWithdraw) => {
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
        }) => import("./exchange/v1beta1/tx").MsgWithdraw;
    };
    "/injective.exchange.v1beta1.MsgInstantSpotMarketLaunch": {
        aminoType: string;
        toAmino: ({ sender, ticker, baseDenom, quoteDenom, minPriceTickSize, minQuantityTickSize }: import("./exchange/v1beta1/tx").MsgInstantSpotMarketLaunch) => {
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
        }) => import("./exchange/v1beta1/tx").MsgInstantSpotMarketLaunch;
    };
    "/injective.exchange.v1beta1.MsgInstantPerpetualMarketLaunch": {
        aminoType: string;
        toAmino: ({ sender, ticker, quoteDenom, oracleBase, oracleQuote, oracleScaleFactor, oracleType, makerFeeRate, takerFeeRate, initialMarginRatio, maintenanceMarginRatio, minPriceTickSize, minQuantityTickSize }: import("./exchange/v1beta1/tx").MsgInstantPerpetualMarketLaunch) => {
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
        }) => import("./exchange/v1beta1/tx").MsgInstantPerpetualMarketLaunch;
    };
    "/injective.exchange.v1beta1.MsgInstantExpiryFuturesMarketLaunch": {
        aminoType: string;
        toAmino: ({ sender, ticker, quoteDenom, oracleBase, oracleQuote, oracleType, oracleScaleFactor, expiry, makerFeeRate, takerFeeRate, initialMarginRatio, maintenanceMarginRatio, minPriceTickSize, minQuantityTickSize }: import("./exchange/v1beta1/tx").MsgInstantExpiryFuturesMarketLaunch) => {
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
        }) => import("./exchange/v1beta1/tx").MsgInstantExpiryFuturesMarketLaunch;
    };
    "/injective.exchange.v1beta1.MsgCreateSpotLimitOrder": {
        aminoType: string;
        toAmino: ({ sender, order }: import("./exchange/v1beta1/tx").MsgCreateSpotLimitOrder) => {
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
        }) => import("./exchange/v1beta1/tx").MsgCreateSpotLimitOrder;
    };
    "/injective.exchange.v1beta1.MsgBatchCreateSpotLimitOrders": {
        aminoType: string;
        toAmino: ({ sender, orders }: import("./exchange/v1beta1/tx").MsgBatchCreateSpotLimitOrders) => {
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
        }) => import("./exchange/v1beta1/tx").MsgBatchCreateSpotLimitOrders;
    };
    "/injective.exchange.v1beta1.MsgCreateSpotMarketOrder": {
        aminoType: string;
        toAmino: ({ sender, order }: import("./exchange/v1beta1/tx").MsgCreateSpotMarketOrder) => {
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
        }) => import("./exchange/v1beta1/tx").MsgCreateSpotMarketOrder;
    };
    "/injective.exchange.v1beta1.MsgCancelSpotOrder": {
        aminoType: string;
        toAmino: ({ sender, marketId, subaccountId, orderHash }: import("./exchange/v1beta1/tx").MsgCancelSpotOrder) => {
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
        }) => import("./exchange/v1beta1/tx").MsgCancelSpotOrder;
    };
    "/injective.exchange.v1beta1.MsgBatchCancelSpotOrders": {
        aminoType: string;
        toAmino: ({ sender, data }: import("./exchange/v1beta1/tx").MsgBatchCancelSpotOrders) => {
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
        }) => import("./exchange/v1beta1/tx").MsgBatchCancelSpotOrders;
    };
    "/injective.exchange.v1beta1.MsgBatchUpdateOrders": {
        aminoType: string;
        toAmino: ({ sender, subaccountId, spotMarketIdsToCancelAll, derivativeMarketIdsToCancelAll, spotOrdersToCancel, derivativeOrdersToCancel, spotOrdersToCreate, derivativeOrdersToCreate, binaryOptionsOrdersToCancel, binaryOptionsMarketIdsToCancelAll, binaryOptionsOrdersToCreate }: import("./exchange/v1beta1/tx").MsgBatchUpdateOrders) => {
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
        }) => import("./exchange/v1beta1/tx").MsgBatchUpdateOrders;
    };
    "/injective.exchange.v1beta1.MsgExec": {
        aminoType: string;
        toAmino: ({ sender, bankFunds, depositsSubaccountId, depositFunds, contractAddress, data }: import("./exchange/v1beta1/tx").MsgExec) => {
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
        }) => import("./exchange/v1beta1/tx").MsgExec;
    };
    "/injective.exchange.v1beta1.MsgCreateDerivativeLimitOrder": {
        aminoType: string;
        toAmino: ({ sender, order }: import("./exchange/v1beta1/tx").MsgCreateDerivativeLimitOrder) => {
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
        }) => import("./exchange/v1beta1/tx").MsgCreateDerivativeLimitOrder;
    };
    "/injective.exchange.v1beta1.MsgBatchCreateDerivativeLimitOrders": {
        aminoType: string;
        toAmino: ({ sender, orders }: import("./exchange/v1beta1/tx").MsgBatchCreateDerivativeLimitOrders) => {
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
        }) => import("./exchange/v1beta1/tx").MsgBatchCreateDerivativeLimitOrders;
    };
    "/injective.exchange.v1beta1.MsgCreateDerivativeMarketOrder": {
        aminoType: string;
        toAmino: ({ sender, order }: import("./exchange/v1beta1/tx").MsgCreateDerivativeMarketOrder) => {
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
        }) => import("./exchange/v1beta1/tx").MsgCreateDerivativeMarketOrder;
    };
    "/injective.exchange.v1beta1.MsgCancelDerivativeOrder": {
        aminoType: string;
        toAmino: ({ sender, marketId, subaccountId, orderHash, orderMask }: import("./exchange/v1beta1/tx").MsgCancelDerivativeOrder) => {
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
        }) => import("./exchange/v1beta1/tx").MsgCancelDerivativeOrder;
    };
    "/injective.exchange.v1beta1.MsgBatchCancelDerivativeOrders": {
        aminoType: string;
        toAmino: ({ sender, data }: import("./exchange/v1beta1/tx").MsgBatchCancelDerivativeOrders) => {
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
        }) => import("./exchange/v1beta1/tx").MsgBatchCancelDerivativeOrders;
    };
    "/injective.exchange.v1beta1.MsgInstantBinaryOptionsMarketLaunch": {
        aminoType: string;
        toAmino: ({ sender, ticker, oracleSymbol, oracleProvider, oracleType, oracleScaleFactor, makerFeeRate, takerFeeRate, expirationTimestamp, settlementTimestamp, admin, quoteDenom, minPriceTickSize, minQuantityTickSize }: import("./exchange/v1beta1/tx").MsgInstantBinaryOptionsMarketLaunch) => {
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
        }) => import("./exchange/v1beta1/tx").MsgInstantBinaryOptionsMarketLaunch;
    };
    "/injective.exchange.v1beta1.MsgCreateBinaryOptionsLimitOrder": {
        aminoType: string;
        toAmino: ({ sender, order }: import("./exchange/v1beta1/tx").MsgCreateBinaryOptionsLimitOrder) => {
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
        }) => import("./exchange/v1beta1/tx").MsgCreateBinaryOptionsLimitOrder;
    };
    "/injective.exchange.v1beta1.MsgCreateBinaryOptionsMarketOrder": {
        aminoType: string;
        toAmino: ({ sender, order }: import("./exchange/v1beta1/tx").MsgCreateBinaryOptionsMarketOrder) => {
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
        }) => import("./exchange/v1beta1/tx").MsgCreateBinaryOptionsMarketOrder;
    };
    "/injective.exchange.v1beta1.MsgCancelBinaryOptionsOrder": {
        aminoType: string;
        toAmino: ({ sender, marketId, subaccountId, orderHash, orderMask }: import("./exchange/v1beta1/tx").MsgCancelBinaryOptionsOrder) => {
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
        }) => import("./exchange/v1beta1/tx").MsgCancelBinaryOptionsOrder;
    };
    "/injective.exchange.v1beta1.MsgBatchCancelBinaryOptionsOrders": {
        aminoType: string;
        toAmino: ({ sender, data }: import("./exchange/v1beta1/tx").MsgBatchCancelBinaryOptionsOrders) => {
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
        }) => import("./exchange/v1beta1/tx").MsgBatchCancelBinaryOptionsOrders;
    };
    "/injective.exchange.v1beta1.MsgSubaccountTransfer": {
        aminoType: string;
        toAmino: ({ sender, sourceSubaccountId, destinationSubaccountId, amount }: import("./exchange/v1beta1/tx").MsgSubaccountTransfer) => {
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
        }) => import("./exchange/v1beta1/tx").MsgSubaccountTransfer;
    };
    "/injective.exchange.v1beta1.MsgExternalTransfer": {
        aminoType: string;
        toAmino: ({ sender, sourceSubaccountId, destinationSubaccountId, amount }: import("./exchange/v1beta1/tx").MsgExternalTransfer) => {
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
        }) => import("./exchange/v1beta1/tx").MsgExternalTransfer;
    };
    "/injective.exchange.v1beta1.MsgLiquidatePosition": {
        aminoType: string;
        toAmino: ({ sender, subaccountId, marketId, order }: import("./exchange/v1beta1/tx").MsgLiquidatePosition) => {
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
        }) => import("./exchange/v1beta1/tx").MsgLiquidatePosition;
    };
    "/injective.exchange.v1beta1.MsgIncreasePositionMargin": {
        aminoType: string;
        toAmino: ({ sender, sourceSubaccountId, destinationSubaccountId, marketId, amount }: import("./exchange/v1beta1/tx").MsgIncreasePositionMargin) => {
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
        }) => import("./exchange/v1beta1/tx").MsgIncreasePositionMargin;
    };
    "/injective.exchange.v1beta1.MsgRewardsOptOut": {
        aminoType: string;
        toAmino: ({ sender }: import("./exchange/v1beta1/tx").MsgRewardsOptOut) => {
            sender: string;
        };
        fromAmino: ({ sender }: {
            sender: string;
        }) => import("./exchange/v1beta1/tx").MsgRewardsOptOut;
    };
    "/injective.exchange.v1beta1.MsgAdminUpdateBinaryOptionsMarket": {
        aminoType: string;
        toAmino: ({ sender, marketId, settlementPrice, expirationTimestamp, settlementTimestamp, status }: import("./exchange/v1beta1/tx").MsgAdminUpdateBinaryOptionsMarket) => {
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
        }) => import("./exchange/v1beta1/tx").MsgAdminUpdateBinaryOptionsMarket;
    };
    "/injective.auction.v1beta1.MsgBid": {
        aminoType: string;
        toAmino: ({ sender, bidAmount, round }: import("./auction/v1beta1/tx").MsgBid) => {
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
        }) => import("./auction/v1beta1/tx").MsgBid;
    };
};
export declare const injectiveProtoRegistry: ReadonlyArray<[string, GeneratedType]>;
export declare const getSigningInjectiveClientOptions: ({ defaultTypes }?: {
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
    registry: Registry;
    aminoTypes: AminoTypes;
};
export declare const getSigningInjectiveClient: ({ rpcEndpoint, signer, defaultTypes }: {
    rpcEndpoint: string;
    signer: OfflineSigner;
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => Promise<SigningStargateClient>;
