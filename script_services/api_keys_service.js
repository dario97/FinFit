function addApiKeys(apiKeys){  
    if(apiKeys.covalentApiKey){
        addUserProperty(scriptConfig.propertiesKeys.apiKeys.covalentApiKey, apiKeys.covalentApiKey);
    }
    if(apiKeys.blockfrostApiKey){
      addUserProperty(scriptConfig.propertiesKeys.apiKeys.blockfrostApiKey, apiKeys.blockfrostApiKey);
    }
  }
  
  function getAPIKeyByKey(key){
    let apiKey = getUserProperty(key);
    if(apiKey){
      return apiKey;
    }else{
      throw Error("The API key is not set, please go to 'Set API Keys' menu and configure it.");
    }
  }