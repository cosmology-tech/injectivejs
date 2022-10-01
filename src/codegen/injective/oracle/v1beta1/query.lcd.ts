import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryBandRelayersRequest, QueryBandRelayersResponseSDKType, QueryBandPriceStatesRequest, QueryBandPriceStatesResponseSDKType, QueryBandIBCPriceStatesRequest, QueryBandIBCPriceStatesResponseSDKType, QueryPriceFeedPriceStatesRequest, QueryPriceFeedPriceStatesResponseSDKType, QueryCoinbasePriceStatesRequest, QueryCoinbasePriceStatesResponseSDKType, QueryProviderPriceStateRequest, QueryProviderPriceStateResponseSDKType, QueryModuleStateRequest, QueryModuleStateResponseSDKType, QueryHistoricalPriceRecordsRequest, QueryHistoricalPriceRecordsResponseSDKType, QueryOracleVolatilityRequest, QueryOracleVolatilityResponseSDKType, QueryOracleProvidersInfoRequest, QueryOracleProvidersInfoResponseSDKType, QueryOracleProviderPricesRequest, QueryOracleProviderPricesResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;

  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.bandRelayers = this.bandRelayers.bind(this);
    this.bandPriceStates = this.bandPriceStates.bind(this);
    this.bandIBCPriceStates = this.bandIBCPriceStates.bind(this);
    this.priceFeedPriceStates = this.priceFeedPriceStates.bind(this);
    this.coinbasePriceStates = this.coinbasePriceStates.bind(this);
    this.providerPriceState = this.providerPriceState.bind(this);
    this.oracleModuleState = this.oracleModuleState.bind(this);
    this.historicalPriceRecords = this.historicalPriceRecords.bind(this);
    this.oracleVolatility = this.oracleVolatility.bind(this);
    this.oracleProvidersInfo = this.oracleProvidersInfo.bind(this);
    this.oracleProviderPrices = this.oracleProviderPrices.bind(this);
  }
  /* Retrieves oracle params */


  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `injective/oracle/v1beta1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* Retrieves the band relayers */


  async bandRelayers(_params: QueryBandRelayersRequest = {}): Promise<QueryBandRelayersResponseSDKType> {
    const endpoint = `injective/oracle/v1beta1/band_relayers`;
    return await this.req.get<QueryBandRelayersResponseSDKType>(endpoint);
  }
  /* Retrieves the state for all band price feeds */


  async bandPriceStates(_params: QueryBandPriceStatesRequest = {}): Promise<QueryBandPriceStatesResponseSDKType> {
    const endpoint = `injective/oracle/v1beta1/band_price_states`;
    return await this.req.get<QueryBandPriceStatesResponseSDKType>(endpoint);
  }
  /* Retrieves the state for all band ibc price feeds */


  async bandIBCPriceStates(_params: QueryBandIBCPriceStatesRequest = {}): Promise<QueryBandIBCPriceStatesResponseSDKType> {
    const endpoint = `injective/oracle/v1beta1/band_ibc_price_states`;
    return await this.req.get<QueryBandIBCPriceStatesResponseSDKType>(endpoint);
  }
  /* Retrieves the state for all price feeds */


  async priceFeedPriceStates(_params: QueryPriceFeedPriceStatesRequest = {}): Promise<QueryPriceFeedPriceStatesResponseSDKType> {
    const endpoint = `injective/oracle/v1beta1/pricefeed_price_states`;
    return await this.req.get<QueryPriceFeedPriceStatesResponseSDKType>(endpoint);
  }
  /* Retrieves the state for all coinbase price feeds */


  async coinbasePriceStates(_params: QueryCoinbasePriceStatesRequest = {}): Promise<QueryCoinbasePriceStatesResponseSDKType> {
    const endpoint = `injective/oracle/v1beta1/coinbase_price_states`;
    return await this.req.get<QueryCoinbasePriceStatesResponseSDKType>(endpoint);
  }
  /* Retrieves the state for all provider price feeds */


  async providerPriceState(params: QueryProviderPriceStateRequest): Promise<QueryProviderPriceStateResponseSDKType> {
    const endpoint = `injective/oracle/v1beta1/provider_price_state/${params.provider}/${params.symbol}`;
    return await this.req.get<QueryProviderPriceStateResponseSDKType>(endpoint);
  }
  /* Retrieves the entire oracle module's state */


  async oracleModuleState(_params: QueryModuleStateRequest = {}): Promise<QueryModuleStateResponseSDKType> {
    const endpoint = `injective/oracle/v1beta1/module_state`;
    return await this.req.get<QueryModuleStateResponseSDKType>(endpoint);
  }
  /* Retrieves historical price records for a given OracleType and Symbol */


  async historicalPriceRecords(params: QueryHistoricalPriceRecordsRequest): Promise<QueryHistoricalPriceRecordsResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.oracle !== "undefined") {
      options.params.oracle = params.oracle;
    }

    if (typeof params?.symbolId !== "undefined") {
      options.params.symbol_id = params.symbolId;
    }

    const endpoint = `injective/oracle/v1beta1/historical_price_records`;
    return await this.req.get<QueryHistoricalPriceRecordsResponseSDKType>(endpoint, options);
  }
  /* Retrieves mixed volatility value for the specified pair of base/quote */


  async oracleVolatility(params: QueryOracleVolatilityRequest): Promise<QueryOracleVolatilityResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.baseInfo !== "undefined") {
      options.params.base_info = params.baseInfo;
    }

    if (typeof params?.quoteInfo !== "undefined") {
      options.params.quote_info = params.quoteInfo;
    }

    if (typeof params?.oracleHistoryOptions !== "undefined") {
      options.params.oracle_history_options = params.oracleHistoryOptions;
    }

    const endpoint = `injective/oracle/v1beta1/volatility`;
    return await this.req.get<QueryOracleVolatilityResponseSDKType>(endpoint, options);
  }
  /* OracleProvidersInfo */


  async oracleProvidersInfo(_params: QueryOracleProvidersInfoRequest = {}): Promise<QueryOracleProvidersInfoResponseSDKType> {
    const endpoint = `injective/oracle/v1beta1/providers`;
    return await this.req.get<QueryOracleProvidersInfoResponseSDKType>(endpoint);
  }
  /* OracleProviderPrices */


  async oracleProviderPrices(params: QueryOracleProviderPricesRequest): Promise<QueryOracleProviderPricesResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.provider !== "undefined") {
      options.params.provider = params.provider;
    }

    const endpoint = `injective/oracle/v1beta1/provider_prices`;
    return await this.req.get<QueryOracleProviderPricesResponseSDKType>(endpoint, options);
  }

}