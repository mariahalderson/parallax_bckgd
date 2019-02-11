
window.addEventListener('scroll', function(){
  console.log(window.scrollY);
  parallax();
});



function parallax(){
  var pos = 0;
  var image = document.querySelector("#img img");
  // var bckgd = document.querySelector("#section1");
  var bckgd = document.querySelector("#sectionbckgd img");

  if (window.scrollY < 25){// && window.scrollY < 50){
    pos = 100;
    image.style.transform = "scale(0.6)";
    // bckgd.style.backgroundSize = "120%";
    bckgd.style.width = "120%";
    bckgd.style.filter = "none";
  }if (window.scrollY > 26){// && window.scrollY < 75){
    image.style.transform = "scale(0.5)";
    //bckgd.style.backgroundSize = "110%";
    bckgd.style.width = "110%";
    bckgd.style.filter = "blur(10px)";
  }
}
