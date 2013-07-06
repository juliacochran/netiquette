//definitely not correct. attempting to listen to message from content script
//
//once we get the keywords back, algorithm for determining the category will go in this file 
//then we will be able to set the content accordingly

chrome.extension.onRequest.addListener(function(keywords, sender, sendResponse) {
	if(keywords.length > 0)
		document.getElementById('tips').innerHTML = 'keywords is not empty. woooooo!'
	sendResponse();
});


