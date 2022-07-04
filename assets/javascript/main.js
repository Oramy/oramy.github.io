var headersToAnimate = ["who knows how to code.",
                        "with graphic design skills.",
                        "who is good at math.",
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

animateHeaders(0)