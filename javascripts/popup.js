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
       document.getElementById('url').innerHTML = url;


});


// function GetMetaValue(meta_name) {

//     var my_arr = document.getElementsByTagName("meta");
//     for (var counter = 0; counter < my_arr.length; counter++) {
//         console.log(my_arr[counter].getAttribute('property'));

//         if (my_arr[counter].getAttribute('property') == meta_name) {
//             return my_arr[counter].content;
//         }
//     }
//     return "N/A";

// }


// data = document.getElementsByTagName("meta");

//     keywords = []; 
//     var len = data.length;
//     for (var i = 0; i < len; i++) {
//        if (data[i].getAttribute('property') == 'keywords') {
//           keywords = data[i].content.split(",");
//          }
//     }

  //  function getMetaContent(propName) {
  //      var metas = document.getElementsByTagName('meta');
    
  //      for (i = 0; i < metas.length; i++) {
  //          if (metas[i].getAttribute("name") == propName) {
  //              return metas[i].getAttribute("content");
  //          }
  //      }
    
  //     return "";
  // }
  //   document.getElementById('keywords').innerHTML = keywords;


