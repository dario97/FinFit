function getETHBalance(accountAddress){
    console.info(`Looking for ETH balance for the address: ${accountAddress}...`);

    const DECIMAL_LENGTH = 18 ;
    
    let apikey = getAPIKeyByKey(PROPERTIES_KEYS.USER.API_KEYS.ETHERSCAN_API_KEY);
    const URL = `${scriptConfig.etherscanHostname}/api?module=account&action=balance&address=${accountAddress}&tag=latest&apikey=${apikey}`;
    let data = makeRequest(URL);
  
    return formatTokenAmount(data.result, DECIMAL_LENGTH);
}

function getERC20Balance(contractAddress ,accountAddress){
    console.info(`Looking for ERC20 token balance for the address: ${accountAddress}...`);

    const DECIMAL_LENGTH = 18 ;
    
    let apikey = getAPIKeyByKey(PROPERTIES_KEYS.USER.API_KEYS.ETHERSCAN_API_KEY);
    const URL = `${scriptConfig.etherscanHostname}/api?module=account&action=tokenbalance&address=${accountAddress}&tag=latest&apikey=${apikey}&contractaddress=${contractAddress}`;
    let data = makeRequest(URL);
  
    return formatTokenAmount(data.result, DECIMAL_LENGTH);
}