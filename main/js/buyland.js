let first = document.querySelector(".first");
let lists = [
  {
    name: "buy land -1",
    src: "",
  },
  {
    name: "dkdk",
    src: "",
  },
  {
    name: "dkdk",
    src: "",
  },
  {
    name: "dkdk",
    src: "",
  },
  {
    name: "dkdk",
    src: "",
  },
  {
    name: "dkdk",
    src: "",
  },
  {
    name: "dkdk",
    src: "",
  },
];
let cmd;
for (let i = 0; i < 6; i++) {
  cmd = `<img src="../../images/buyfirst-${i + 1}.png" alt="buyland-list${
    i + 1
  }">`;
  if (i == 0) first.innerHTML = cmd;
  else first.innerHTML += cmd;
}

// mouse scroll
window.onload = function () {
  const elm = document.querySelectorAll(".storys > li");
  const elm_width = document.querySelector(".buylandContent");
  const elmCount = elm.length;
  elm.forEach(function (item, index) {
    item.addEventListener("mousewheel", function (event) {
      event.preventDefault();
      let delta = 0;

      if (!event) event = window.event;

      if (event.wheelDelta) {
        delta = event.wheelDelta / 120;
        if (window.opera) delta = -delta;
      } else if (event.detail) delta = -event.detail / 3;

      let moveTop = window.scrollX;
      let elmSelector = elm[index];
      let location = elmSelector.clientWidth;

      // wheel down : move to next section
      if (delta < 0) {
        if (elmSelector !== elmCount - 1) {
          window.scrollTo({ left: location, behavior: "smooth" });
          console.dir(elmSelector);
        }
      }

      // wheel up : move to previous section
      else {
        if (elmSelector !== 0) {
          window.scrollTo({ left: -location, behavior: "smooth" });
        }
      }
    });
  });
};
