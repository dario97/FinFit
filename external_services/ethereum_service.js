function getTokenBalance(accountAddress, tokenTicker, blockchainId){
    console.info(`Looking for ${tokenTicker} balance for the address: ${accountAddress}...`);
    
    let apikey = getAPIKeyByKey(scriptConfig.propertiesKeys.apiKeys.covalentApiKey);
    const URL = `${scriptConfig.covalentHostname}/v1/${blockchainId}/address/${accountAddress}/balances_v2/?key=${apikey}`;
    let data = makeRequest(URL);
    let tokenInfo;

    data.items.forEach(token => {
        if(token.contract_ticker_symbol === tokenTicker){
            tokenInfo = token;
            break;
        }
    })

    if(tokenInfo === undefined){
        throw new Error('Token not found. Please check the token ticker.')
    }
  
    return formatTokenAmount(tokenInfo.balance, tokenInfo.contract_decimals);
}
