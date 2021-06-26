function addUserProperty(key, value){
    PropertiesService.getUserProperties().setProperty(key, value);
}
  
function addUserProperties(object){
    PropertiesService.getUserProperties().setProperties(object);
}

function getUserProperty(key){
    return PropertiesService.getUserProperties().getProperty(key);
}

function getAllUserProperties(){
    return PropertiesService.getUserProperties();
}

function deleteUserProperty(key){
    PropertiesService.getUserProperties().deleteProperty(key);
}

function deleteAllUserProperties(){
    PropertiesService.getUserProperties().deleteAllProperties();
}

  