"use strict";


//Cursor Event
 $(document).ready(function(){"use strict";

 //Page cursors

  $('body').mousemove(function(n) {
     t.style.left = n.clientX + "px", 
     t.style.top = n.clientY + "px", 
     e.style.left = n.clientX + "px", 
     e.style.top = n.clientY + "px", 
     i.style.left = n.clientX + "px", 
     i.style.top = n.clientY + "px"
 });
 var t = document.getElementById("cursor"),
     e = document.getElementById("cursor2"),
     i = document.getElementById("cursor3");
 function n(t) {
     e.classList.add("hover"), i.classList.add("hover")
 }
 function s(t) {
     e.classList.remove("hover"), i.classList.remove("hover")
 }
 s();
 for (var r = document.querySelectorAll(".hover-target"), a = r.length - 1; a >= 0; a--) {
     o(r[a])
 }
 function o(t) {
     t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
 }


  //Scroll indicator
  var progressPath = document.querySelector('.progress-wrap path');
  var pathLength = progressPath.getTotalLength();
  progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
  progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
  progressPath.style.strokeDashoffset = pathLength;
  progressPath.getBoundingClientRect();
  progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';		
  //Fortschritt wird berechnet
  var updateProgress = function () {
      var scroll = $(window).scrollTop();
      var height = $(document).height() - $(window).height();
      var progress = pathLength - (scroll * pathLength / height);

      if (progress == 0) {
        $(".a_3").attr("href", "./theforbiddenfruit.html");
        $(".a_3").addClass("add");
      }
      progressPath.style.strokeDashoffset = progress;
  }
  updateProgress();
  $(window).scroll(updateProgress);


});