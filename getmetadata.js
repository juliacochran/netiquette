//content script that will eventually get the meta data from the page and convey that information to popup.js for processing
g_metadata = document.getElementsByTagName("meta");
g_keywords = []; // should be an array
var len = g_metadata.length;
for (var i = 0; i < len; i++) {
    if (g_metadata[i].name == 'keywords') {
        g_keywords = g_metadata[i].content.split(",");
   	 }
}


document.getElementById('meta_keywords').innerHTML = "running content script";