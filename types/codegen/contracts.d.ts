/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.16.1.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/
import * as _1 from "./Registry.client";
import * as _3 from "./AtomicOrder.client";
export declare namespace contracts {
    const Registry: {
        RegistryQueryClient: typeof _1.RegistryQueryClient;
        RegistryClient: typeof _1.RegistryClient;
    };
    const AtomicOrder: {
        AtomicOrderClient: typeof _3.AtomicOrderClient;
    };
}