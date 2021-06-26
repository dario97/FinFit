function getTokenBalance(accountAddress, tokenTicker, blockchainId){
    console.info(`Looking for ${tokenTicker} balance for the address: ${accountAddress}...`);
    
    let apikey = getAPIKeyByKey(scriptConfig.propertiesKeys.apiKeys.covalentApiKey);
    const URL = `${scriptConfig.hostnames.covalentHostname}/v1/${blockchainId}/address/${accountAddress}/balances_v2/?key=${apikey}`;
    let response = makeRequest(URL);
    let tokenInfo;

    for (let i = 0; i < response.data.items.length; i++) {
        if(response.data.items[i].contract_ticker_symbol === tokenTicker){
            tokenInfo = response.data.items[i];
            break;
        }
    }

    if(tokenInfo === undefined){
        throw new Error('Token not found. Please check the token ticker.')
    }
  
    return formatTokenAmount(tokenInfo.balance, tokenInfo.contract_decimals);
}
