function getADABalance(accountAddress){
    console.info(`Looking for ADA balance for the address: ${accountAddress}...`);

    const METHOD = 'get';
    const CONTENT_TYPE = 'application/json';
    const apikey = getAPIKeyByKey(scriptConfig.propertiesKeys.apiKeys.blockfrostApiKey);
    const DECIMAL_LENGTH = 6;
  
    const HEADERS = {
      'project_id': apikey,
    }
  
    const PARAMS = {
      'method': METHOD,
      'contentType': CONTENT_TYPE,
      'headers': HEADERS
    }
  
    const URL = `${scriptConfig.hostnames.blockfrostHostname}/api/v0/accounts/${accountAddress}`;
    
    let data = makeRequest(URL, PARAMS);

    return formatTokenAmount(data.controlled_amount, DECIMAL_LENGTH);
}