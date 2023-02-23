let items = document.querySelectorAll(".item");
let current_tag = document.querySelector(".current-tag");
let handler = document.querySelector(".handler");
let left_box = document.querySelector(".left-box");

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

handler.addEventListener("click", function () {
  if (!this.classList.contains("close")) {
    left_box.style.width = 0;
    this.classList.add("close");
  } else {
    left_box.style.width = 250 + "px";
    this.classList.remove("close");
  }
});
