const loginResize = function () {
  //전체 영역의 크기
  let window_width = window.innerWidth;
  let window_height = window.innerHeight;
  // body 높이
  let body_height = document.getElementById("bodyBg");
  //headMenu 높이
  let menuHeight = document.querySelector(".headMenu").clientHeight;
  //logContainer
  let logContainer = document.querySelector(".logContainer");
  let logContainer_width = document.querySelector(".logContainer").clientWidth;
  let logContainer_height =
    document.querySelector(".logContainer").clientHeight;

  // formBox margin top
  let formBox = document.querySelector(".formBox");
  let form_marginTop = logContainer_height * (15009 / 100000);
  // formBox.style.marginTop = form_marginTop + "px";
  // formBox height
  let form_hegiht = logContainer_height - form_marginTop;
  formBox.style.height = form_hegiht + "px";

  //logContainer width

  let container_height_margin = (window_height - logContainer_height) / 2;
  logContainer.style.marginTop = container_height_margin + "px";

  //[react.js] if문 조건을 maginTop==menuHeight 일 때로 지정하시용
  if (menuHeight + "px" >= 135 + "px") {
    //logContainer의 margin = headmenu height;

    console.log("headmenu : " + menuHeight);
    console.log("logcontainer margin top : " + logContainer.style.marginTop);
    logContainer.style.marginTop = menuHeight * 2 + "px";

    //조건문이 맞을 때 [활성화]
    body_height.style.height =
      menuHeight * 2 + logContainer_height + 200 + "px";
  }

  //logContainer height
  // logContainer.style.height = 712 + "px";
  if (window_width === logContainer_width) {
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
