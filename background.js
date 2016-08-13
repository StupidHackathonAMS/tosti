chrome.tabs.onActivated.addListener(function(activeInfo) {
  // how to fetch tab url using activeInfo.tabid
  chrome.tabs.get(activeInfo.tabId, function(tab){
    chrome.tabs.executeScript({
      "file": 'tosti.js'
    });
  });
}); 
