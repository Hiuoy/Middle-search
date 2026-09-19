chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "openBackgroundTab") {
    chrome.tabs.create({ 
      url: request.url, 
      active: false,
      index: sender.tab.index + 1
    });
  }
});