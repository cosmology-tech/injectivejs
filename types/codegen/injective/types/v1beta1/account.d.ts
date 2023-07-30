import { BaseAccount, BaseAccountSDKType } from "../../../cosmos/auth/v1beta1/auth";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@cosmology/helpers";
/**
 * EthAccount implements the authtypes.AccountI interface and embeds an
 * authtypes.BaseAccount type. It is compatible with the auth AccountKeeper.
 */
export interface EthAccount {
    baseAccount: BaseAccount;
    codeHash: Uint8Array;
}
/**
 * EthAccount implements the authtypes.AccountI interface and embeds an
 * authtypes.BaseAccount type. It is compatible with the auth AccountKeeper.
 */
export interface EthAccountSDKType {
    base_account: BaseAccountSDKType;
    code_hash: Uint8Array;
}
export declare const EthAccount: {
    encode(message: EthAccount, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EthAccount;
    fromPartial(object: DeepPartial<EthAccount>): EthAccount;
};
