function onOpen(){
    let ui = SpreadsheetApp.getUi();

    ui.createMenu('FinFit')
        .addItem('Set API Keys', 'showSetAPIKeysForm')
        .addItem('Refresh Amounts', 'refreshPortfolioAmounts')
        .addItem('Refresh Settings', 'showRefreshConfigurationForm')
        .addItem('Add ERC20 Token', 'showAddERC20TokenForm')
        .addItem('Delete all properties', 'deleteProperties')
        .addToUi();
}

function showSetAPIKeysForm(){
    let ui = SpreadsheetApp.getUi();
  
    var htmlService = HtmlService.createTemplateFromFile('ui/html/set_api_keys_form');
    const html = htmlService.evaluate();
    ui.showModalDialog(html, "Set API Keys");
  }