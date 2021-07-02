function makeRequest(url, params, cacheKey){
    let dataToReturn = {};
  
    let CACHE_KEY = cacheKey !== undefined ? cacheKey : '';
    let cache = CacheService.getUserCache();
    let cached = cache.get(CACHE_KEY);
  
    if(cached && cached !== null && cached.length > 1){
      console.info("Getting data from cache...");
      dataToReturn = JSON.parse(cached);
    }else{
      console.info(`Getting data from ${url}...`);

      let response = UrlFetchApp.fetch(url, params);
      dataToReturn = JSON.parse(response.getContentText());
      
      if (response && response.getResponseCode() == 200 && dataToReturn.length > 1 && dataToReturn.length < 99900) {
          cache.put(CACHE_KEY, response.getContentText(), dataToReturn["caching_time"] || 60)
      }
    }
    return dataToReturn;
  }