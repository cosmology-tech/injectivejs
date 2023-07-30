import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@cosmology/helpers";
/** spot authz messages */
export interface CreateSpotLimitOrderAuthz {
    subaccountId: string;
    marketIds: string[];
}
/** spot authz messages */
export interface CreateSpotLimitOrderAuthzSDKType {
    subaccount_id: string;
    market_ids: string[];
}
export interface CreateSpotMarketOrderAuthz {
    subaccountId: string;
    marketIds: string[];
}
export interface CreateSpotMarketOrderAuthzSDKType {
    subaccount_id: string;
    market_ids: string[];
}
export interface BatchCreateSpotLimitOrdersAuthz {
    subaccountId: string;
    marketIds: string[];
}
export interface BatchCreateSpotLimitOrdersAuthzSDKType {
    subaccount_id: string;
    market_ids: string[];
}
export interface CancelSpotOrderAuthz {
    subaccountId: string;
    marketIds: string[];
}
export interface CancelSpotOrderAuthzSDKType {
    subaccount_id: string;
    market_ids: string[];
}
export interface BatchCancelSpotOrdersAuthz {
    subaccountId: string;
    marketIds: string[];
}
export interface BatchCancelSpotOrdersAuthzSDKType {
    subaccount_id: string;
    market_ids: string[];
}
/** derivative authz messages */
export interface CreateDerivativeLimitOrderAuthz {
    subaccountId: string;
    marketIds: string[];
}
/** derivative authz messages */
export interface CreateDerivativeLimitOrderAuthzSDKType {
    subaccount_id: string;
    market_ids: string[];
}
export interface CreateDerivativeMarketOrderAuthz {
    subaccountId: string;
    marketIds: string[];
}
export interface CreateDerivativeMarketOrderAuthzSDKType {
    subaccount_id: string;
    market_ids: string[];
}
export interface BatchCreateDerivativeLimitOrdersAuthz {
    subaccountId: string;
    marketIds: string[];
}
export interface BatchCreateDerivativeLimitOrdersAuthzSDKType {
    subaccount_id: string;
    market_ids: string[];
}
export interface CancelDerivativeOrderAuthz {
    subaccountId: string;
    marketIds: string[];
}
export interface CancelDerivativeOrderAuthzSDKType {
    subaccount_id: string;
    market_ids: string[];
}
export interface BatchCancelDerivativeOrdersAuthz {
    subaccountId: string;
    marketIds: string[];
}
export interface BatchCancelDerivativeOrdersAuthzSDKType {
    subaccount_id: string;
    market_ids: string[];
}
/** common authz message used in both spot & derivative markets */
export interface BatchUpdateOrdersAuthz {
    subaccountId: string;
    spotMarkets: string[];
    derivativeMarkets: string[];
}
/** common authz message used in both spot & derivative markets */
export interface BatchUpdateOrdersAuthzSDKType {
    subaccount_id: string;
    spot_markets: string[];
    derivative_markets: string[];
}
export declare const CreateSpotLimitOrderAuthz: {
    encode(message: CreateSpotLimitOrderAuthz, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateSpotLimitOrderAuthz;
    fromPartial(object: DeepPartial<CreateSpotLimitOrderAuthz>): CreateSpotLimitOrderAuthz;
};
export declare const CreateSpotMarketOrderAuthz: {
    encode(message: CreateSpotMarketOrderAuthz, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateSpotMarketOrderAuthz;
    fromPartial(object: DeepPartial<CreateSpotMarketOrderAuthz>): CreateSpotMarketOrderAuthz;
};
export declare const BatchCreateSpotLimitOrdersAuthz: {
    encode(message: BatchCreateSpotLimitOrdersAuthz, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BatchCreateSpotLimitOrdersAuthz;
    fromPartial(object: DeepPartial<BatchCreateSpotLimitOrdersAuthz>): BatchCreateSpotLimitOrdersAuthz;
};
export declare const CancelSpotOrderAuthz: {
    encode(message: CancelSpotOrderAuthz, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CancelSpotOrderAuthz;
    fromPartial(object: DeepPartial<CancelSpotOrderAuthz>): CancelSpotOrderAuthz;
};
export declare const BatchCancelSpotOrdersAuthz: {
    encode(message: BatchCancelSpotOrdersAuthz, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BatchCancelSpotOrdersAuthz;
    fromPartial(object: DeepPartial<BatchCancelSpotOrdersAuthz>): BatchCancelSpotOrdersAuthz;
};
export declare const CreateDerivativeLimitOrderAuthz: {
    encode(message: CreateDerivativeLimitOrderAuthz, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateDerivativeLimitOrderAuthz;
    fromPartial(object: DeepPartial<CreateDerivativeLimitOrderAuthz>): CreateDerivativeLimitOrderAuthz;
};
export declare const CreateDerivativeMarketOrderAuthz: {
    encode(message: CreateDerivativeMarketOrderAuthz, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateDerivativeMarketOrderAuthz;
    fromPartial(object: DeepPartial<CreateDerivativeMarketOrderAuthz>): CreateDerivativeMarketOrderAuthz;
};
export declare const BatchCreateDerivativeLimitOrdersAuthz: {
    encode(message: BatchCreateDerivativeLimitOrdersAuthz, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BatchCreateDerivativeLimitOrdersAuthz;
    fromPartial(object: DeepPartial<BatchCreateDerivativeLimitOrdersAuthz>): BatchCreateDerivativeLimitOrdersAuthz;
};
export declare const CancelDerivativeOrderAuthz: {
    encode(message: CancelDerivativeOrderAuthz, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CancelDerivativeOrderAuthz;
    fromPartial(object: DeepPartial<CancelDerivativeOrderAuthz>): CancelDerivativeOrderAuthz;
};
export declare const BatchCancelDerivativeOrdersAuthz: {
    encode(message: BatchCancelDerivativeOrdersAuthz, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BatchCancelDerivativeOrdersAuthz;
    fromPartial(object: DeepPartial<BatchCancelDerivativeOrdersAuthz>): BatchCancelDerivativeOrdersAuthz;
};
export declare const BatchUpdateOrdersAuthz: {
    encode(message: BatchUpdateOrdersAuthz, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BatchUpdateOrdersAuthz;
    fromPartial(object: DeepPartial<BatchUpdateOrdersAuthz>): BatchUpdateOrdersAuthz;
};
