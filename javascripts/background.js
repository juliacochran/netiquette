chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    var category = getCategory(tab.url);
    if(category != 'other') {
        chrome.browserAction.setIcon({
          path: 'images/cat.jpeg'
        });
    }
    else {
       chrome.browserAction.setIcon({
          path: 'images/logo19.png'
        });
    }
}); 

chrome.tabs.onActivated.addListener(function(activeInfo) {
  chrome.tabs.get(activeInfo.tabId, function(tab){

    var category = getCategory(tab.url);
    if(category != 'other') {
        chrome.browserAction.setIcon({
          path: 'images/cat.jpeg'
        });
    }
    else {
       chrome.browserAction.setIcon({
          path: 'images/logo19.png'
        });
    }

  });
}); 

function getCategory(url) {
    if(url.indexOf('facebook') > -1 || url.indexOf('twitter') > -1){

       return "social_network";
    }
    if(url.indexOf('mail') > -1|| url.indexOf('yahoo') >-1 || url.indexOf('live') > -1) {
      return "email";
    }
    if(url.indexOf('pinterest') > -1|| url.indexOf('tumblr') >-1|| url.indexOf('instagram') >-1|| url.indexOf('wordpress') >-1|| url.indexOf('blog') >-1|| url.indexOf('medium') > -1) {
      return "blog";
    }
    if(url.indexOf('4chan') >-1|| url.indexOf('reddit') > -1) {
      return "forum";
    }
    else {
        return "other";
    }
}