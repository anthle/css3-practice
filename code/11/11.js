const list = document.querySelector(".list");
const item = document.querySelector(".list-item");

let source_node = null;

list.ondragstart = function (event) {
  source_node = event.target;
  record(item);
  setTimeout(() => {
    event.target.classList.add("moving");
  }, 0);
  event.dataTransfer.effectAllowed = "move";
};

list.ondragend = function (event) {
  event.preventDefault();
};

list.ondragover = function (event) {
  event.preventDefault();

  if (event.target === list || event.target === source_node) {
    return false;
  }

  const children = Array.from(list.children);
  const sourceIndex = children.indexOf(source_node);
  const targetIndex = children.indexOf(event.target);
  if (sourceIndex < targetIndex) {
    list.insertBefore(source_node, event.target.nextSibling);
  } else {
    list.insertBefore(source_node, event.target);
  }

  last([event.target, source_node]);
};

list.ondragend = function (event) {
  event.target.classList.remove("moving");
};

function record(eleAll) {
  for (let i = 0; i < eleAll.length; i++) {
    const { top, left } = eleAll[i].getBoundingClientRect();
    eleAll[i]._top = top;
    eleAll[i]._left = left;
  }
}

function last(eleAll) {
  for (let i = 0; i < eleAll.length; i++) {
    const dom = eleAll[i];
    const { top, left } = dom.getBoundingClientRect();
    if (dom.left) {
      dom.style.transform = `translate3d(${dom._left - left}px, ${
        dom._top - top
      }px)`;
    }
    dom.addEventListener("transitionend", () => {
      dom.style.transform = "none";
      cancelAnimationFrame(rafId);
    });
  }
}
