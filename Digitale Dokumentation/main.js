 //Button Scroll-Down
 $(function() {
    $('.button').click (function() {
      $('html, body').animate({scrollTop: $('section.paar').offset().top }, 'slow');
      return false;
    });
  });


 

//Popover
$(function(){
  // Enables popover
  $("#example-popover").popover({
      html : true, 
      content: function() {
        return $("#example-popover-content").html();
      },
      title: function() {
        return $("#example-popover-title").html();
      }
  });
});

