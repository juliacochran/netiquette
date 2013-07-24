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


      $(document).ready(function(){
        $('#site_link').click(function(){
            chrome.tabs.create({url: "http://ethicsofnetiquette.tumblr.com"})
        });
      });

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

        //NEWS
        $(document).ready(function(){
            $('#news #tip1 .tip_title').click(function() {
                $('#news #tip1 .tip_content').toggle();
            })
        });

        $(document).ready(function(){
            $('#news #tip2 .tip_title').click(function() {
                $('#news #tip2 .tip_content').toggle();
            })
        });

        $(document).ready(function(){
            $('#news #tip3 .tip_title').click(function() {
                $('#news #tip3 .tip_content').toggle();
            })
        });

        $(document).ready(function(){
            $('#news #tip4 .tip_title').click(function() {
                $('#news #tip4 .tip_content').toggle();
            })
        });

        //MEDIA
        $(document).ready(function(){
            $('#media #tip1 .tip_title').click(function() {
                $('#media #tip1 .tip_content').toggle();
            })
        });

        $(document).ready(function(){
            $('#media #tip2 .tip_title').click(function() {
                $('#media #tip2 .tip_content').toggle();
            })
        });

        $(document).ready(function(){
            $('#media #tip3 .tip_title').click(function() {
                $('#media #tip3 .tip_content').toggle();
            })
        });

        $(document).ready(function(){
            $('#media #tip4 .tip_title').click(function() {
                $('#media #tip4 .tip_content').toggle();
            })
        });

});


function displayContent(tips_category) {
    $(document).ready(function(){
        $("#email").hide();
        $("#blog").hide();
        $("#forum").hide();
        $("#social_network").hide();
        $("#news").hide();
        $("#media").hide();
        $("#"+tips_category).show();

    });

  document.getElementById(tips_category).style.display = "block";
}

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








