chrome.tabs.query(
    {
    active: true,                              
    windowId: chrome.windows.WINDOW_ID_CURRENT 
    },
    function(array_of_Tabs) {
      var tab = array_of_Tabs[0];
      var url = tab.url;

      var category = getCategory(url);
      displayContent(category);

      //SOCIAL NETWORK

      $(document).ready(function(){
        $('#social_network #tip1 .tip_title').click(function() {
           $('#social_network #tip1 .tip_content').toggle();
         })
      });

      $(document).ready(function(){
        $('#social_network #tip2 .tip_title').click(function() {
           $('#social_network #tip2 .tip_content').toggle();
         })
      });

      $(document).ready(function(){
        $('#social_network #tip3 .tip_title').click(function() {
           $('#social_network #tip3 .tip_content').toggle();
         })
      });

      $(document).ready(function(){
        $('#social_network #tip4 .tip_title').click(function() {
           $('#social_network #tip4 .tip_content').toggle();
         })
      });

      //BLOG
      $(document).ready(function(){
        $('#blog #tip1 .tip_title').click(function() {
           $('#blog #tip1 .tip_content').toggle();
         })
      });

      $(document).ready(function(){
        $('#blog #tip2 .tip_title').click(function() {
           $('#blog #tip2 .tip_content').toggle();
         })
      });

      $(document).ready(function(){
        $('#blog #tip3 .tip_title').click(function() {
           $('#blog #tip3 .tip_content').toggle();
         })
      });

      $(document).ready(function(){
        $('#blog #tip4 .tip_title').click(function() {
           $('#blog #tip4 .tip_content').toggle();
         })
      });

      //FORUM
      $(document).ready(function(){
        $('#forum #tip1 .tip_title').click(function() {
           $('#forum #tip1 .tip_content').toggle();
         })
      });

      $(document).ready(function(){
        $('#forum #tip2 .tip_title').click(function() {
           $('#forum #tip2 .tip_content').toggle();
         })
      });

      $(document).ready(function(){
        $('#forum #tip3 .tip_title').click(function() {
           $('#forum #tip3 .tip_content').toggle();
         })
      });

      $(document).ready(function(){
        $('#forum #tip4 .tip_title').click(function() {
           $('#forum #tip4 .tip_content').toggle();
         })
      });

      //EMAIL
      $(document).ready(function(){
        $('#email #tip1 .tip_title').click(function() {
           $('#email #tip1 .tip_content').toggle();
         })
      });

      $(document).ready(function(){
        $('#email #tip2 .tip_title').click(function() {
           $('#email #tip2 .tip_content').toggle();
         })
      });

      $(document).ready(function(){
        $('#email #tip3 .tip_title').click(function() {
           $('#email #tip3 .tip_content').toggle();
         })
      });

      $(document).ready(function(){
        $('#email #tip4 .tip_title').click(function() {
           $('#email #tip4 .tip_content').toggle();
         })
      });

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
    $(document).ready(function(){
        $("#email").hide();
        $("#blog").hide();
        $("#forum").hide();
        $("#social_network").hide();
        $("#"+tips_category).show();

    });

  document.getElementById(tips_category).style.display = "block";
}

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








