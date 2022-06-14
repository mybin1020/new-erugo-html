function detectMobileDevice(agent) {
  const mobileRegex = [
    /Android/i,
    /iPhone/i,
    /iPad/i,
    /iPod/i,
    /BlackBerry/i,
    /Windows Phone/i,
  ];

  return mobileRegex.some((mobile) => agent.match(mobile));
}

// const isMobile = detectMobileDevice(window.navigator.userAgent);

// if (isMobile) {
//   console.log("current device is mobile");
// } else {
//   console.log("current device is not mobile");
// }

var mobileWidth = window.screen.availWidth;
var mobileHeight = window.screen.availHeight;
var mobileTotal = mobileWidth - mobileHeight;

function checkMobile() {
  var varUA = navigator.userAgent.toLowerCase();

  if (varUA.indexOf("android") > -1) {
    if (parseInt(mobileTotal) > 0) {
      return "vertical";
    } else {
      return "portrait";
    }
  } else if (
    varUA.indexOf("iphone") > -1 ||
    varUA.indexOf("ipad") > -1 ||
    varUA.indexOf("ipod") > -1
  ) {
    return "ios";
  } else {
    return "other";
  }
}
const os = checkMobile();
const isMobile = os === "ios" || os === "android";

console.log(mobileWidth);
console.log(mobileHeight);
console.log(isMobile);

if (isMobile) {
}
