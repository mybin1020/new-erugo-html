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
  // const slider = document.querySelector(".buylandContent");
  // const innerSlider = document.querySelector(".storys");
  const window_width = window.innerWidth;
  const elm = document.querySelectorAll(".storys > li");
  const elm_height = document.querySelector(".storys");
  const pageNum = document.querySelector(".pageNum");
  const elmCount = elm.length;
  let mouse_index = 0;
  // let pressed = false;
  // let startX, x;

  // scroll event
  if (window_width > 920) {
    elm.forEach(function (item, index) {
      item.addEventListener("mousewheel", function (event) {
        event.preventDefault();
        let delta = 0;

        if (!event) event = window.event;

        if (event.wheelDelta) {
          delta = event.wheelDelta / 120;
          if (window.opera) delta = -delta;
        } else if (event.detail) delta = -event.detail / 3;

        let elmSelector = elm[index];
        let location = elmSelector.clientWidth;
        // wheel down : move to next section
        //console.log(location * mouse_index);
        if (delta < 0) {
          ++mouse_index;
          if (mouse_index > elmCount - 1) {
            mouse_index = 0;
            window.scrollTo({
              left: mouse_index,
              behavior: "smooth",
            });
          }
          if (elmSelector !== elmCount) {
            window.scrollTo({
              left: location * mouse_index,
              behavior: "smooth",
            });
          }
          pageNum.innerText = `${mouse_index + 1} / 7`;
        }
        // wheel up : move to previous section
        else {
          --mouse_index;
          if (mouse_index < 0) {
            mouse_index = elmCount - 1;
          }

          if (elmSelector !== 0) {
            window.scrollTo({
              left: location * mouse_index,
              behavior: "smooth",
            });
          }

          pageNum.innerText = `${mouse_index + 1} / 7`;
        }
      });
    });
  } else if (window_width <= 920) {
    const scroll_height = elm_height.clientHeight / elmCount;
    elm_height.addEventListener("scroll", function () {
      window.scrollTo({
        top: 1000,
        behavior: "smooth",
      });
    });
  }

  // img

  // drag event
  // slider.addEventListener("mousedown", function (e) {
  //   pressed = true;
  //   startX = e.offsetX - innerSlider.offsetLeft;
  //   slider.style.cursor = "grabbing";
  // });

  // slider.addEventListener("mouseenter", function () {
  //   slider.style.cursor = "grab";
  // });

  // slider.addEventListener("mouseup", function () {
  //   slider.style.cursor = "grab";
  // });

  // window.addEventListener("mouseup", function () {
  //   pressed = false;
  // });

  // slider.addEventListener("mousemove", function (e) {
  //   if (!pressed) return;
  //   e.preventDefault();
  //   x = e.offsetX;
  //   console.log(x - startX);

  //   innerSlider.style.left = `${x - startX}px`;
  //   checkboundary();
  // });

  // function checkboundary() {
  //   let outer = slider.getBoundingClientRect();
  //   let inner = innerSlider.getBoundingClientRect();
  //   if (parseInt(innerSlider.style.left) > 0) {
  //     innerSlider.style.left = "0px";
  //   } else if (inner.right < outer.right) {
  //     window.scrollTo({
  //       left: location * mouse_index,
  //       behavior: "smooth",
  //     });
  //     innerSlider.style.left = `-${inner.width - outer.width}px`;
  //   }
  // }
};
