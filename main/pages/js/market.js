const mapResize = function () {
  const topHeight = document.querySelector(".topMenu");
  const leftHeight = document.querySelector(".leftMenu");
  const rightHeight = document.querySelector(".rightContainer");
  const bottomHeight = document.querySelector(".map");
  const windowHeight = document.querySelector(".mapContainer").clientHeight;

  //TOP

  //BOTTOM

  if (window.innerWidth > window.innerHeight) {
    //Window top
    let mapTop = windowHeight * (7935 / 100000);
    topHeight.style.height = mapTop + "px";
    //Window bottom
    let mapBottom = windowHeight * (86000 / 100000);
    bottomHeight.style.height = mapBottom + "px";
    //Window Left Height
    let windowH = windowHeight * (88342 / 100000);
    leftHeight.style.height = windowH + "px";
    //Window Right Height
    rightHeight.style.height = windowH + "px";
  } else {
    //Mobile top
    let mapTop = windowHeight * (19699 / 100000);
    let TopMenu = mapTop * (40 / 100);
    let LeftMenu = mapTop * (60 / 100);
    topHeight.style.height = TopMenu + "px";
    leftHeight.style.height = LeftMenu + "px";
    //Mobile bottom
    let mapBottom = windowHeight * (67078 / 100000) + 3;
    bottomHeight.style.height = mapBottom + "px";
    let rightH = windowHeight * (95238 / 1000000);
    rightHeight.style.height = rightH + "px";
  }
};
// window.onresize = function (event) {
//   mapResize();
// };
window.addEventListener(
  "DOMContentLoaded",
  (window.onresize = function () {
    mapResize();
  })
);
