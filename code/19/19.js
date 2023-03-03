const button = document.querySelector("button");
const timeout = 1000;
let deleteTimer;
let isHoldingDeleteButton;

button.addEventListener("mousedown", (e) => {
  isHoldingDeleteButton = true;
  deleteTimer = setTimeout(() => {
    button.innerHTML = "Deleted!";
  }, timeout);
});

// 要用window，因为鼠标不一定在button上
window.addEventListener("mouseup", (e) => {
  if (isHoldingDeleteButton) {
    if (deleteTimer) {
      clearTimeout(deleteTimer);
    }
    button.innerHTML = "Delete";
    isholdingDeleteButton = false;
  }
});
