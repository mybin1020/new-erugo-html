const loginResize = function () {
  //전체 영역의 크기
  let window_width = window.innerWidth;
  let window_height = window.innerHeight;

  //logContainer의 크기
  let logContainer = document.querySelector(".logContainer");
  let logContainer_width = document.querySelector(".logContainer").clientWidth;
  let logContainer_height =
    document.querySelector(".logContainer").clientHeight;
  // 로그인 창
  let containerH = logContainer_width * (67779 / 100000);
  logContainer.style.height = containerH + "px";
  // let containerW = logContainer_height * (46143 / 100000);
  // logContainer.style.width = containerW + "px";

  // form margin top
  let inputForm = document.querySelector(".logContainer > form");
  let marginTop = containerH * (30120 / 100000);
  inputForm.style.marginTop = marginTop + "px";

  if (window_width > window_height) {
    let containerH = logContainer_width * (77779 / 100000);
    logContainer.style.height = containerH + "px";
    if (window_width < 920) {
      let containerH = logContainer_width * (60779 / 100000);
      logContainer.style.height = containerH + "px";
      let marginTop = containerH * (30120 / 100000);
      inputForm.style.marginTop = marginTop + "px";
    }
  }

  if (window_width < 600) {
    let containerH = logContainer_width * (85779 / 100000);
    logContainer.style.height = containerH + "px";
    let marginTop = containerH * (30120 / 100000);
    inputForm.style.marginTop = marginTop + "px";
  }
};

window.addEventListener(
  "DOMContentLoaded",
  (window.onresize = function () {
    loginResize();
  })
);
