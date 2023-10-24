const sides = document.querySelectorAll(".side"); //стороны контроллера
const thumbSticks = document.querySelector(".thumb-sticks");

const keyActions = {
  ArrowUp: "up",
  ArrowDown: "down",
  ArrowLeft: "left",
  ArrowRight: "right",
};

document.addEventListener("keydown", (event) => {
  if (keyActions[event.key]) {
    // console.log(keyActions[event.key]);
    sides.forEach((item) => {
      if (item.classList.contains(keyActions[event.key])) {
        item.classList.toggle("hide");
        setTimeout(() => {
          item.classList.toggle("hide");
        }, 150);
      }
    });
    if (keyActions[event.key] === "up") {
      thumbSticks.style.top = "30%";
      setTimeout(() => {
        thumbSticks.style.top = "50%";
      }, 150);
    }
    if (keyActions[event.key] === "down") {
      thumbSticks.style.top = "70%";
      setTimeout(() => {
        thumbSticks.style.top = "50%";
      }, 150);
    }
    if (keyActions[event.key] === "left") {
      thumbSticks.style.left = "30%";
      setTimeout(() => {
        thumbSticks.style.left = "50%";
      }, 150);
    }
    if (keyActions[event.key] === "right") {
      thumbSticks.style.left = "70%";
      setTimeout(() => {
        thumbSticks.style.left = "50%";
      }, 150);
    }
  }
});
