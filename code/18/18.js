const text = document.querySelector("#text");
const leaf = document.querySelector("#leaf");
const hill1 = document.querySelector("#hill1");
const hill4 = document.querySelector("#hill4");
const hill5 = document.querySelector("#hill5");

window.addEventListener("scroll", () => {
  let value = window.scrollY;
  text.style.marginTop = value * 2.5 + "px";
  if (value === 0) {
    text.style.opacity = 1;
  } else {
    text.style.opacity = (1000 - value * 2) / 1000;
  }
  leaf.style.top = value * -1.5 + "px";
  leaf.style.left = value * 1.5 + "px";
  hill1.style.top = value * 1 + "px";
  hill4.style.left = value * -1.5 + "px";
  hill5.style.left = value * 1.5 + "px";
});
