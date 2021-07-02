function TOKENBALANCE(tokenTicker, accountAddress, blockchainName, refreshCell){
    console.info(`Looking for ${tokenTicker} balance...`);
    return getTokenBalance(accountAddress, tokenTicker, blockchainIdResolver(blockchainName));
}

function ADABALANCE(accountAddress){
    return getADABalance(accountAddress);
}

function blockchainIdResolver(blockchainName){
    return scriptConfig.blockchainIDs[blockchainName.toLowerCase()];
}