/*var headersToAnimate = ["who knows how to code.",
                        "with graphic design skills.",
                        "who creates clear and concise documents.",
                        "who is good at math.",
                        "who is able to do fast prototyping.",
                        "and engineer."];
var startReversAnimationAfter = 1500; //ms
var letterSpeed = 70;
function reverseAnimation(headerIndex){
  var i = headersToAnimate[headerIndex].length -1, delay = 0;
  for (; i >= 0 ; i--, delay++) {
    let string = headersToAnimate[headerIndex].substr(0, i);
    setTimeout('document.getElementById("Subtitles").innerHTML = \'' + string + '\';', letterSpeed * delay);
  }
  
   setTimeout(function(){ animateHeaders(headerIndex + 1)}, letterSpeed * delay + startReversAnimationAfter);
}
function animateHeaders(headerIndex){
  var i =0;
  if(headerIndex ==  headersToAnimate.length){
    headerIndex = 0;
  }
  for (; i < headersToAnimate[headerIndex].length; i++) {
    let string = headersToAnimate[headerIndex][i]
    setTimeout('document.getElementById("Subtitles").innerHTML += \'' + string + '\';', letterSpeed * i);
  }
 
 setTimeout(function(){ reverseAnimation(headerIndex)}, letterSpeed * i + startReversAnimationAfter);
}

animateHeaders(0)*/

$(document).ready(function(){
  if (window.matchMedia("(min-width: 576px)").matches) {
 
   var currentMousePos = { x: -1, y: -1 };
    $(document).on("mousemove", function(event) {
        currentMousePos.x = event.clientX;
        currentMousePos.y = event.clientY;
    });
$(".clickable-card").on('mouseenter', function() {
  var el = this;
  function anim() {
      if (window.matchMedia("(min-width: 576px)").matches) {
      var dx = currentMousePos.x;
      dx = dx - el.getBoundingClientRect().x - el.getBoundingClientRect().width / 2;
      var dy = currentMousePos.y - el.getBoundingClientRect().y - el.getBoundingClientRect().height / 2;
      dx = dx / el.getBoundingClientRect().width;
      dy = dy / el.getBoundingClientRect().height;
      $(el).children(".card-content").children(".card-mouse-anim").css("transform", "rotateX("+dy*50+"deg) rotateY("+dx*50+"deg)");
 
      if(dx < -.5 || dx > .5 || dy > .5 || dy < -.5) {
         $(el).off("mousemove");
         $(el).children(".card-content").children(".card-mouse-anim").css("transform", "rotateX(0deg) rotateY(0deg)");
      }
      else {
        requestAnimationFrame(anim);
      }
    }
  }
  var requestID = requestAnimationFrame(anim);
})
  }
});