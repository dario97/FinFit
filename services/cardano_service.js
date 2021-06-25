function getADABalance(accountAddress){
    console.info(`Looking for ADA balance for the address: ${accountAddress}...`);

    const METHOD = 'get';
    const CONTENT_TYPE = 'application/json';
    const apikey = getAPIKeyByKey(PROPERTIES_KEYS.USER.API_KEYS.BLOCKFROST_API_KEY);
    const DECIMAL_LENGTH = 6;
  
    const HEADERS = {
      'project_id': apikey,
    }
  
    const PARAMS = {
      'method': METHOD,
      'contentType': CONTENT_TYPE,
      'headers': HEADERS
    }
  
    const URL = `${getScriptProperty(PROPERTIES_KEYS.SCRIPT.BLOCKFROST_HOSTNAME)}/api/v0/accounts/${accountAddress}`;
    
    let data = makeRequest(URL, PARAMS);

    return formatTokenAmount(data.controlled_amount, DECIMAL_LENGTH);
}