// background.js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.closeTab) {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      // Close the current tab
      chrome.tabs.remove(tabs[0].id, function() {
        // Handle the tab removal
        console.log('Closed the current tab.');
      });
    });
  }
});
