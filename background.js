// chrome.browserAction.onClicked.addListener(function(tab) {
//   chrome.tabs.executeScript({
//     "file": 'tosti.js'
//   });
// });



// chrome.tabs.onCreated.addListener(function(tab) {
//   chrome.tabs.executeScript({
//     "file": 'tosti.js'
//   });
// });

// chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
//   // alert(changeInfo.url);
//   // console.log("hello");
// }); 

chrome.tabs.onActivated.addListener(function(activeInfo) {
  // how to fetch tab url using activeInfo.tabid
  chrome.tabs.get(activeInfo.tabId, function(tab){
    chrome.tabs.executeScript({
      "file": 'tosti.js'
    });
  });
}); 
