//content script that will eventually get the meta data from the page and convey that information to popup.js for processing


function onContextClick(info, tab) {    
  if( info["selectionText"] ){  
    getMeta(tab, function(x){
      console.log(x);
      //do stuff with x
    });
  }
}

function getMeta (tab, callback) {
chrome.tabs.sendMessage(tab.id, {fetchTag: "meta,name,author,content"}, function(response) {
    //alert(response.data);
    //one thing I tired was to put my "do stuff" embedded here, but that didn't work either
    callback(response.data);
    });
}