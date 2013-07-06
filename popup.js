//definitely not correct. attempting to listen to message from content script
chrome.extension.onRequest.addListener(function(keywords, sender, sendResponse) {
	if(keywords.length > 0)
		//chrome.pageAction.show(sender.tab.id);
		document.getElementById('tips').innerHTML = 'keywords is not empty. woooooo!'
	sendResponse();
});


