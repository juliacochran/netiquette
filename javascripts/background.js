chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    var category = getCategory(tab.url);
    if(category != 'other') {
        chrome.browserAction.setIcon({
          path: 'images/logo_green19.png'
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
          path: 'images/logo_green19.png'
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
    if(url.indexOf('facebook') > -1 || url.indexOf('twitter') > -1 ){

       return "social_network";
    }
    if(url.indexOf('mail') > -1 || url.indexOf('live') > -1) {
      return "email";
    }
    if(url.indexOf('pinterest') > -1|| url.indexOf('tumblr') >-1|| url.indexOf('instagram') >-1|| url.indexOf('wordpress') >-1|| url.indexOf('blog') >-1|| url.indexOf('medium') > -1) {
      return "blog";
    }
    if(url.indexOf('4chan') >-1|| url.indexOf('reddit') > -1) {
      return "forum";
    }
    if(url.indexOf('news') >-1|| url.indexOf('msnbc') > -1 || url.indexOf('yahoo') > -1 || url.indexOf('cnn') > -1
                || url.indexOf('bbc') > -1 || url.indexOf('nytimes') > -1 || url.indexOf('guardian') > -1 || url.indexOf('reuters') > -1
                || url.indexOf('huffingtonpost') > -1 || url.indexOf('washingtonpost') > -1 || url.indexOf('latimes') > -1) {
        return "news";
    }
    if(url.indexOf('vine') >-1|| url.indexOf('youtube') > -1 || url.indexOf('vimeo') > -1 || url.indexOf('imgur') > -1
                || url.indexOf('9gag') > -1 || url.indexOf('soundcloud') > -1) {
        return "media";
    }
    else {
        return "other";
    }
}