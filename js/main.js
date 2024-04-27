var bar = document.getElementById("bar");
var nav = document.getElementById("navbar");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}
if (close) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}
smallImg[0].addEventListener("click", () => {
  MainImg.src = smallImg[0].src;
});
smallImg[1].addEventListener("click", () => {
  MainImg.src = smallImg[1].src;
});
smallImg[2].addEventListener("click", () => {
  MainImg.src = smallImg[2].src;
});
smallImg[3].addEventListener("click", () => {
  mainImg.src = smallImg[3].src;
});
 bar = document.getElementById("bar");
 nav = document.getElementById("navbar");
const close = document.getElementById("close");
if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}
if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}
