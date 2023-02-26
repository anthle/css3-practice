const textEl = document.querySelector("#text");
const speedEl = document.querySelector("#speed");
const text = "We Love Programming!";
let idx = 1;
let speed = 300 / speedEl.value;

writeRText();

function writeRText() {
  textEl.innerHTML = text.slice(0, idx);

  idx++;

  if (idx > text.length) {
    idx = 1;
  }

  setTimeout(writeRText, speed);
}

speedEl.addEventListener("input", (e) => (speed = 300 / e.target.value));
