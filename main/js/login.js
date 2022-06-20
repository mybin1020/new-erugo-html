const loginResize = function () {
  //전체 영역의 크기
  let window_width = window.innerWidth;
  let window_height = window.innerHeight;
  // body 높이
  let body_height = document.getElementById("bodyBg");
  let body_H = body_height.clientHeight;
  //headMenu 높이
  let menuHeight = document.querySelector(".headMenu").clientHeight;
  //logContainer
  let logContainer = document.querySelector(".logContainer");
  let logContainer_width = document.querySelector(".logContainer").clientWidth;
  let logContainer_height =
    document.querySelector(".logContainer").clientHeight;
  let loginBg_height = document.querySelector(".loginBg").clientHeight;

  // formBox height
  let formBox = document.querySelector(".formBox");
  let form_height = logContainer_height * (63202 / 100000);
  formBox.style.height = form_height + "px";

  //logContainer marginTop
  let container_height_margin = (body_H - logContainer_height) / 2;

  // PC 버전
  if (window_width > window_height) {
    logContainer.style.height = log_height + "px";
    logContainer.style.marginTop = container_height_margin + "px";
    //[react.js] if문 조건을 container_height_margin==menuHeight 일 때로 지정
    if (menuHeight + "px" >= 135 + "px") {
      //logContainer의 margin = headmenu height;
      logContainer.style.marginTop = menuHeight * 2 + "px";
      logContainer.style.height = log_height + "px";
    }
  } else {
    //Mobile 버전
    logContainer.style.marginTop = container_height_margin + "px";
    // 배경 높이
    body_height.style.height = loginBg_height + "px";
    console.log(logContainer_height);
    //logContainer height
    let log_height = window_width * (77779 / 100000);
    logContainer.style.height = log_height + "px";
  }
};

window.addEventListener(
  "DOMContentLoaded",
  (window.onresize = function () {
    loginResize();
  })
);
