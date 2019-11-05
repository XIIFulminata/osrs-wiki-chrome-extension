chrome.webNavigation.onHistoryStateUpdated.addListener(function(details) {
  // alert("but why tho");
  chrome.tabs.executeScript(null,{file:"content.js"});
});
