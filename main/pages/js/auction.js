const auctionResize = function () {
  const windowHeight = document.querySelector(".container").clientHeight;
  const topHeight = document.querySelector(".buttons");
  const lineHeight = document.querySelector(".headTitle");
  const headtitleSpan = document.querySelector(".headTitle>span");
  const textboxHeight = document.querySelector(".textBox");

  if (window.innerWidth > window.innerHeight) {
    //Window topMenu
    let topMenu = windowHeight * (20 / 100);
    topHeight.style.height = topMenu + "px";
    lineHeight.style.height = topMenu + "px";
    //Window Headtitle top
    lineHeight.style.paddingTop = 0 + "px";
    //Window textbox margin bottom
    let marginBottom = windowHeight * (41736 / 1000000);
    textboxHeight.style.marginBottom = marginBottom + "px";
  } else {
    //Mobile Headtitle top
    let topTitleH = windowHeight * (10169 / 100000);
    lineHeight.style.paddingTop = topTitleH + "px";
    //Mobile topMenu
    let topMenu = windowHeight * (10265 / 100000);
    topHeight.style.height = topMenu + "px";
    //Mobile textbox margin bottom
    let marginBottom = windowHeight * (37562 / 1000000);
    textboxHeight.style.marginBottom = marginBottom + "px";
  }
};
window.addEventListener(
  "DOMContentLoaded",
  (window.onresize = function () {
    auctionResize();
  })
);

// let dots = document.querySelector(".dotBtn");

// for (let i = 0; i < dots.children.length; i++) {
//   dots.children[i].addEventListener("click", clicked);
// }
// function clicked(e) {
//   if (e.classList.contains("active")) {
//     this.classList.remove("active");
//     console.log("dkfj");
//   } else {
//     this.classList.add("active");
//     console.log("dkfj");
//   }
//   console.log(element.classList);
// }
