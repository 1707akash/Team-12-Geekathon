chrome.runtime.onInstalled.addListener(({reason}) => {
  if (reason === 'install') {
    chrome.tabs.create({
      url: "installationCompleted.html"
    });
  }
});
// chrome.runtime.onInstalled.addListener(() => {
//     chrome.action.setBadgeText({
//     text: "ON",
//   });
// });

/////// TESTING

// chrome.tabs.onUpdated.addListener((tabId, tab) => {
//   if (tab.url && tab.url.includes("youtube.com/watch")) {
//     const queryParameters = tab.url.split("?")[1];
//     const urlParameters = new URLSearchParams(queryParameters);

//     chrome.tabs.sendMessage(tabId, {
//       type: "NEW",
//       videoId: urlParameters.get("v"),
//     });
//   }
// });
