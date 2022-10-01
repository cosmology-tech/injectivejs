# injectivejs

<p align="center">
  <img src="https://user-images.githubusercontent.com/545047/193426489-d5d3c9a9-d738-43a0-a628-b8b4f1a8034b.png" width="180">
</p>

Building the future of decentralized exchange

## install

```sh
npm install injectivejs
```
## Table of contents

- [InjectiveJS](#injectivejs)
  - [Install](#install)
  - [Table of contents](#table-of-contents)
- [Usage](#usage)
    - [Contracts](#contracts)
        - [Registry](#registry)
    - [RPC Clients](#rpc-clients)
    - [Composing Messages](#composing-messages)
        - Injective
            - [Auction](#auction-messages)
            - [Exchange](#exchange-messages)
            - [Insurance](#insurance-messages)
            - [OCR](#ocr-messages)
            - [Oracle](#oracle-messages)
            - [Peggy](#peggy-messages)
        - Cosmos, CosmWasm, and IBC
            - [CosmWasm](#cosmwasm-messages)
            - [IBC](#ibc-messages)
            - [Cosmos](#cosmos-messages)
- [Wallets and Signers](#connecting-with-wallets-and-signing-messages)
    - [Stargate Client](#initializing-the-stargate-client)
    - [Creating Signers](#creating-signers)
    - [Broadcasting Messages](#broadcasting-messages)
- [Advanced Usage](#advanced-usage)
- [Credits](#credits)

## Usage
### Contracts
#### Registry

```js
import { contracts } from 'injectivejs';
const { RegistryClient } = contracts.Registry;

const client = new RegistryClient(
    signingCosmWasmClient, // make sure to create your client (see docs below)
    senderAddress,
    contractAddress
);
```
#### Registry.activate

```js
await client.activate({
    contractAddress
})
```

#### Registry.getActiveContracts

```js
const activeContracts = await client.getActiveContracts();
const {
    address,
    gas_limit,
    gas_price,
    is_executable
} = activeContracts.contracts[0];
```

### RPC Clients

```js
import { injective } from 'injectivejs';

const { createRPCQueryClient } = injective.ClientFactory; 
const client = await createRPCQueryClient({ rpcEndpoint: RPC_ENDPOINT });

// now you can query the cosmos modules
const balance = await client.cosmos.bank.v1beta1
    .allBalances({ address: 'inj1addresshere' });

// you can also query the injective modules
const balances = await client.injective.exchange.v1beta1
    .exchangeBalances()
```

### Composing Messages

Import the `injective` object from `injectivejs`. 

```js
import { injective } from 'injectivejs';

const {
    createSpotLimitOrder,
    createSpotMarketOrder,
    deposit
} = injective.exchange.v1beta1.MessageComposer.withTypeUrl;
```

#### Auction Messages

```js
const {
    bid
} = injective.auction.v1beta1.MessageComposer.withTypeUrl;
```

#### Exchange Messages

```js
const {
    adminUpdateBinaryOptionsMarket,
    batchCancelBinaryOptionsOrders,
    batchCancelDerivativeOrders,
    batchCancelSpotOrders,
    batchCreateDerivativeLimitOrders,
    batchCreateSpotLimitOrders,
    batchUpdateOrders,
    cancelBinaryOptionsOrder,
    cancelDerivativeOrder,
    cancelSpotOrder,
    createBinaryOptionsLimitOrder,
    createBinaryOptionsMarketOrder,
    createDerivativeLimitOrder,
    createDerivativeMarketOrder,
    createSpotLimitOrder,
    createSpotMarketOrder,
    deposit,
    exec,
    externalTransfer,
    increasePositionMargin,
    instantBinaryOptionsMarketLaunch,
    instantExpiryFuturesMarketLaunch,
    instantPerpetualMarketLaunch,
    instantSpotMarketLaunch,
    liquidatePosition,
    rewardsOptOut,
    subaccountTransfer,
    withdraw
} = injective.exchange.v1beta1.MessageComposer.withTypeUrl;
```

#### Insurance Messages

```js
const {
    createInsuranceFund,
    requestRedemption,
    underwrite
} = injective.insurance.v1beta1.MessageComposer.withTypeUrl;
```

#### OCR Messages

```js
const {
    acceptPayeeship,
    createFeed,
    fundFeedRewardPool,
    setPayees,
    transferPayeeship,
    transmit,
    updateFeed,
    withdrawFeedRewardPool
} = injective.ocr.v1beta1.MessageComposer.withTypeUrl;
```

#### Oracle Messages

```js
const {
    relayBandRates,
    relayCoinbaseMessages,
    relayPriceFeedPrice,
    relayProviderPrices,
    requestBandIBCRates
} = injective.oracle.v1beta1.MessageComposer.withTypeUrl;
```

#### Peggy Messages

```js
const {
    cancelSendToEth,
    confirmBatch,
    depositClaim,
    eRC20DeployedClaim,
    requestBatch,
    sendToEth,
    setOrchestratorAddresses,
    submitBadSignatureEvidence,
    valsetConfirm,
    valsetUpdateClaim,
    withdrawClaim
} = injective.peggy.v1.MessageComposer.withTypeUrl;
```

#### CosmWasm Messages

```js
import { cosmwasm } from "injectivejs";

const {
    clearAdmin,
    executeContract,
    instantiateContract,
    migrateContract,
    storeCode,
    updateAdmin
} = cosmwasm.wasm.v1.MessageComposer.withTypeUrl;
```

#### IBC Messages

```js
import { ibc } from 'injectivejs';

const {
    transfer
} = ibc.applications.transfer.v1.MessageComposer.withTypeUrl
```

#### Cosmos Messages

```js
import { cosmos } from 'injectivejs';

const {
    fundCommunityPool,
    setWithdrawAddress,
    withdrawDelegatorReward,
    withdrawValidatorCommission
} = cosmos.distribution.v1beta1.MessageComposer.fromPartial;

const {
    multiSend,
    send
} = cosmos.bank.v1beta1.MessageComposer.fromPartial;

const {
    beginRedelegate,
    createValidator,
    delegate,
    editValidator,
    undelegate
} = cosmos.staking.v1beta1.MessageComposer.fromPartial;

const {
    deposit,
    submitProposal,
    vote,
    voteWeighted
} = cosmos.gov.v1beta1.MessageComposer.fromPartial;
```

## Connecting with Wallets and Signing Messages

⚡️ For web interfaces, we recommend using [cosmos-kit](https://github.com/cosmology-tech/cosmos-kit). Continue below to see how to manually construct signers and clients.

Here are the docs on [creating signers](https://github.com/cosmology-tech/cosmos-kit/tree/main/packages/react#signing-clients) in cosmos-kit that can be used with Keplr and other wallets.

### Initializing the Stargate Client

Use `getSigningInjectiveClient` to get your `SigningStargateClient`, with the proto/amino messages full-loaded. No need to manually add amino types, just require and initialize the client:

```js
import { getSigningInjectiveClient } from 'injectivejs';

const stargateClient = await getSigningInjectiveClient({
  rpcEndpoint,
  signer // OfflineSigner
});
```
### Creating Signers

To broadcast messages, you can create signers with a variety of options:

* [cosmos-kit](https://github.com/cosmology-tech/cosmos-kit/tree/main/packages/react#signing-clients) (recommended)
* [keplr](https://docs.keplr.app/api/cosmjs.html)
* [cosmjs](https://gist.github.com/webmaster128/8444d42a7eceeda2544c8a59fbd7e1d9)
### Amino Signer

Likely you'll want to use the Amino, so unless you need proto, you should use this one:

```js
import { getOfflineSignerAmino as getOfflineSigner } from 'cosmjs-utils';
```
### Proto Signer

```js
import { getOfflineSignerProto as getOfflineSigner } from 'cosmjs-utils';
```

WARNING: NOT RECOMMENDED TO USE PLAIN-TEXT MNEMONICS. Please take care of your security and use best practices such as AES encryption and/or methods from 12factor applications.

```js
import { chains } from 'chain-registry';

const mnemonic =
  'unfold client turtle either pilot stock floor glow toward bullet car science';
  const chain = chains.find(({ chain_name }) => chain_name === 'injective');
  const signer = await getOfflineSigner({
    mnemonic,
    chain
  });
```
### Broadcasting Messages

Now that you have your `stargateClient`, you can broadcast messages:

```js
const { send } = cosmos.bank.v1beta1.MessageComposer.withTypeUrl;

const msg = send({
    amount: [
    {
        denom: 'inj',
        amount: '1000'
    }
    ],
    toAddress: address,
    fromAddress: address
});

const fee: StdFee = {
    amount: [
    {
        denom: 'inj',
        amount: '864'
    }
    ],
    gas: '86364'
};
const response = await stargateClient.signAndBroadcast(address, [msg], fee);
```

## Advanced Usage

If you want to manually construct a stargate client

```js
import { OfflineSigner, GeneratedType, Registry } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";

import { 
    cosmosAminoConverters,
    cosmosProtoRegistry,
    cosmwasmAminoConverters,
    cosmwasmProtoRegistry,
    ibcProtoRegistry,
    ibcAminoConverters,
    injectiveAminoConverters,
    injectiveProtoRegistry
} from 'injectivejs';

const signer: OfflineSigner = /* create your signer (see above)  */
const rpcEndpint = 'https://rpc.cosmos.directory/injective'; // or another URL

const protoRegistry: ReadonlyArray<[string, GeneratedType]> = [
    ...cosmosProtoRegistry,
    ...publicawesomeProtoRegistry,
    ...cosmwasmProtoRegistry,
    ...ibcProtoRegistry,
    ...injectiveProtoRegistry
];

const aminoConverters = {
    ...cosmosAminoConverters,
    ...publicawesomeAminoConverters,
    ...cosmwasmAminoConverters,
    ...ibcAminoConverters,
    ...injectiveAminoConverters
};

const registry = new Registry(protoRegistry);
const aminoTypes = new AminoTypes(aminoConverters);

const stargateClient = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry,
    aminoTypes
});
```

## Credits

🛠 Built by Cosmology — if you like our tools, please consider delegating to [our validator ⚛️](https://cosmology.tech/validator)

Code built with the help of these related projects:

* [@cosmwasm/ts-codegen](https://github.com/CosmWasm/ts-codegen) for generated CosmWasm contract Typescript classes
* [@osmonauts/telescope](https://github.com/osmosis-labs/telescope) a "babel for the Cosmos", Telescope is a TypeScript Transpiler for Cosmos Protobufs.
* [cosmos-kit](https://github.com/cosmology-tech/cosmos-kit) A wallet connector for the Cosmos ⚛️

