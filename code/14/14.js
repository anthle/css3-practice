// 获取dom
let items = document.querySelectorAll(".item");
let current_tag = document.querySelector(".current-tag");
let handler = document.querySelector(".handler");
let left_box = document.querySelector(".left-box");

// 先移除再添加active 改变current-tag的值
function setActive() {
  items.forEach((item) => {
    item.classList.remove("active");
  });
  this.classList.add("active");
  current_tag.innerText = this.innerText;
}

items.forEach((item) => {
  item.addEventListener("click", setActive);
});

// 点击handler 改变left-box的宽度
handler.addEventListener("click", function () {
  if (!this.classList.contains("close")) {
    left_box.style.width = 0;
    this.classList.add("close");
  } else {
    left_box.style.width = 250 + "px";
    this.classList.remove("close");
  }
});
