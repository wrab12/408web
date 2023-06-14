var oDiv = document.getElementById("top");
window.onscroll = function () {
  oDiv.style.display = "block";
  var height = document.documentElement.scrolltop || document.body.scrolltop;
  console.log(height);
  if (height == 0) {
    oDiv.style.display = "none";
  }
};
oDiv.onclick = function () {
  var height = document.documentElement.scrolltop || document.body.scrolltop;
  var t = setInterval(() => {
    height -= 50;
    if (height > 0) {
      window.scrollTo(0, height);
    } else {
      window.scrollTo(0, 0);
      clearInterval(t);
    }
  }, 10);
};

oDiv.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
