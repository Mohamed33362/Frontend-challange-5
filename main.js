let nav = document.querySelector("nav");
let img = document.getElementById("img");
let ul = document.querySelector("ul");
let openIcon = document.getElementById("open-menu");
let closeIcon = document.getElementById("close-menu");

openIcon.onclick = function () {
  ul.classList.add("ul-open");
  this.style.display = "none";
  closeIcon.style.display = "block";
};
closeIcon.onclick = function () {
  ul.classList.remove("ul-open");
  this.style.display = "none";
  openIcon.style.display = "block";
};

if (matchMedia) {
    const media = window.matchMedia("(max-width: 575.98px)");
    media.addListener(widthChange);
    widthChange(media)
}

function widthChange(media) {
    if (media.matches) {
        img.src = "./images/image-web-3-mobile.jpg"
    }else{
        img.src = "./images/image-web-3-desktop.jpg";
    }
}