const btn = document.querySelector(".switch");

btn.addEventListener("click", function () {
  let is_dark = document.querySelector(".switch.dark");
  if (!is_dark) {
    btn.classList.add("dark");
    let a = document.createElement("style");
    a.id = "aa";
    a.innerHTML =
      "html{background-color:#fff;filter:invert(1);}img{filter:invert(1);}";
    document.head.appendChild(a);
  } else {
    btn.classList.remove("dark");
    document.getElementById("aa").remove();
  }
});
