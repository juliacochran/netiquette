//definitely not correct. attempting to listen to message from content script
//
//once we get the keywords back, algorithm for determining the category will go in this file 
//then we will be able to set the content accordingly

//chrome.extension.onRequest.addListener(function(keywords, sender, sendResponse) {
//	if(keywords.length > 0)
//		document.getElementById('tips').innerHTML = 'keywords is not empty. woooooo!'
//	sendResponse();
//});
//Still working on this can't get it functioning properly...

// Do NOT forget that the method is ASYNCHRONOUS

chrome.tabs.query(
    {
    active: true,                              // Select active tabs
    windowId: chrome.windows.WINDOW_ID_CURRENT // In the current window
    },
    function(array_of_Tabs) {
    // Since there can only be one active tab in one active window,
    //  the array has only one element
    var tab = array_of_Tabs[0];
    // Example:
    var url = tab.url;
    // ... do something with url variable

});



