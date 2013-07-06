//content script that will eventually get the meta data from the page and convey that information to popup.js for processing
//var port = chrome.runtime.connect();

var meta_keywords = getKeywords();

//should notify extension of keywords found
chrome.extension.sendRequest(meta_keywords);

function getKeywords() {
	data = document.getElementsByTagName("meta");
	keywords = []; 
	var len = data.length;
	for (var i = 0; i < len; i++) {
 	   if (data[i].name == 'keywords') {
  	      keywords = data[i].content.split(",");
  	 	 }
	}
	return keywords;
}
