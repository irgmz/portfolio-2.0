// Twitter
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');


$(document).ready(function(){



    $(function () {
        $('[data-toggle="tooltip"]').tooltip();

    });

    $(function () {
            $('#item1').tooltip();
        });

    $('#button').on('click', function() {
      console.log('clicked');
       return false;
        });
    $('#buttonn').on('click', function() {
      console.log('clicked');
       return false;
        });
    $('#buttonnn').on('click', function() {
      console.log('clicked');
       return false;
        });
  
     $('#buttonnnn').on('click', function() {
         var message = $('#message-box').val();
         $('#visible-comment').html("We have received your message!");
         $('#message-box').hide();
         console.log(message);
          return false;

        });
     $("#message-box").on("keyup", function() {
        console.log("keyup happened"); 
        var charCount = $("#message-box").val().length;
        console.log(charCount);
        $("#char-count").html(charCount);
        if(charCount > 50) {
        $("#char-count").css("color", "red");
        } else {
        $("#char-count").css("color", "black");
        };
        
     });


    
   
   
    var $root = $('html, body');
        $('.navbar-nav a').click(function() {
        var href = $.attr(this, 'href');
        $root.animate({
        scrollTop: $(href).offset().top
        }, 500, function () {
          window.location.hash = href;
      });
      return false;
  });
  // work section
  for(var i = 0; i < works.length; ++i ) {
  $("#work").append("\
    <div class='col-sm-6 col-md-2'>\
      <a href='" + works[i].website + "' target='blank' class='work-img'>\
        <img class='img-responsive' src='" + works[i].pic + "'>\
        <span class='info'><p class='proj-title'>Title:</p>" + works[i].title + "</SPAN>\
      </a>\
    </div>\
  ");

    $(".work-img").mouseenter(function(){
      $(".info", this).show();
    }).mouseleave(function(){
      $(".info", this).hide();
    });

  var images = $("#work img");
  if(i%2 === 0){
    $(images[i]).css("border", "2px solid DodgerBlue");
  } else {
    $(images[i]).css("border", "2px solid salmon");
  };
};


    

  
 
         
});

