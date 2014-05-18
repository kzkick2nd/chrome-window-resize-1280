// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  var id = chrome.windows.WINDOW_ID_CURRENT
  var updateInfo = {}
  updateInfo.width = 1280
  chrome.windows.update(id, updateInfo)
});