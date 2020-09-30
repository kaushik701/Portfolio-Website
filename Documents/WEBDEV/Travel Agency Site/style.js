$(window).scroll(function () {
  shrinkHeader(), showGototopbtn();
});
function shrinkHeader() {
  var Shrinkheader = document.getElementsByClassName("header")[0];
  if (window.scrollY > 30) {
    Shrinkheader.classList.add("Shrink");
  } else {
    Shrinkheader.classList.remove("Shrink");
  }
}
function showGototopbtn() {
  var gototop = document.getElementsByClassName("GotoTop")[0];
  if (window.scrollY > 30) {
    gototop.style.display = "block";
  } else {
    gototop.style.display = "none";
  }
}
