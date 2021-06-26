function TOKENBALANCE(tokenTicker, accountAddress, blockchainName, refreshCell){
    console.info(`Looking for ${tokenTicker} balance...`);

    if(tokenTicker.toUpperCase() === 'ADA'){
        return getADABalance(accountAddress);
    }else{
        return getTokenBalance(accountAddress, tokenTicker, blockchainIdResolver(blockchainName));
    }    
}

function blockchainIdResolver(blockchainName){
    return scriptConfig.blockchainIDs[blockchainName.toLowerCase()];
}