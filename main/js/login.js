const loginResize = function () {
  const windowHeight = document.querySelector(".loginBg").clientHeight;
  const windowWidth = document.querySelector(".loginBg").clientWidth;
  const loginWindow = document.querySelector(".logContainer");
  const logContainerHeight =
    document.querySelector(".logContainer").clientHeight;
  const loginFormHeight = document.querySelector(".logContainer>form");

  // login window position height
  let loginWindowH = windowHeight * (21648 / 100000);
  loginWindow.style.marginTop = loginWindowH + "px";
  // login window position left
  let loginWindowL = windowWidth * (30011 / 100000);
  loginWindow.style.marginLeft = loginWindowL + "px";
  loginWindow.style.marginRight = loginWindowL + "px";

  //login form margin top
  let formTop = logContainerHeight * (34033 / 100000);
  loginFormHeight.style.marginTop = formTop + "px";
};

window.addEventListener(
  "DOMContentLoaded",
  (window.onresize = function () {
    loginResize();
  })
);
