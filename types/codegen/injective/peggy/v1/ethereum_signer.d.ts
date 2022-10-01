/** SignType defines messages that have been signed by an orchestrator */
export declare enum SignType {
    SIGN_TYPE_UNKNOWN = 0,
    SIGN_TYPE_ORCHESTRATOR_SIGNED_MULTI_SIG_UPDATE = 1,
    SIGN_TYPE_ORCHESTRATOR_SIGNED_WITHDRAW_BATCH = 2,
    UNRECOGNIZED = -1
}
/** SignType defines messages that have been signed by an orchestrator */
export declare enum SignTypeSDKType {
    SIGN_TYPE_UNKNOWN = 0,
    SIGN_TYPE_ORCHESTRATOR_SIGNED_MULTI_SIG_UPDATE = 1,
    SIGN_TYPE_ORCHESTRATOR_SIGNED_WITHDRAW_BATCH = 2,
    UNRECOGNIZED = -1
}
export declare function signTypeFromJSON(object: any): SignType;
export declare function signTypeToJSON(object: SignType): string;
