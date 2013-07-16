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

//$('#social_network').show();

chrome.tabs.query(
    {
    active: true,                              // Select active tabs
    windowId: chrome.windows.WINDOW_ID_CURRENT // In the current window
    },
    function(array_of_Tabs) {
      var tab = array_of_Tabs[0];
      var url = tab.url;
      document.getElementById('url').innerHTML = url;
      document.getElementById('keywords').innerHTML = getMetaContent('keywords');

      var category = getCategory(url);
      displayContent(category);

});



function getMetaContent(propName) {
   var metas = document.getElementsByTagName('meta');

   for (i = 0; i < metas.length; i++) {
       if (metas[i].getAttribute("name") == propName) {
           return metas[i].getAttribute("content");
       }
   }

  return "no meta data present";
}

function displayContent(tips_category) {
  document.getElementById(tips_category).style.display = "block";
}

function getCategory(url) {
    if( /^(.*\.)?facebook\./.test(url) ){
       return "social_network";
    }
    else if(/^(.*\.)?twitter\./.test(url))
      return "social_network";
    else {
        return "other";
    }
}

