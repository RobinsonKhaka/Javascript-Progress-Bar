window.onload=function(){
document.getElementById("html5").addEventListener("mouseover", mouseOver);

function mouseOver(){
  var el = document.getElementById('progress');
  var width = 1;
  var id = setInterval(frame, 60);

  function frame(){
    if(width >= 100) {
      clearInterval(id);
    }else{
      width++;
      el.style.width = width + '%';
    }
  }
}
};
