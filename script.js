const menuList = document.querySelector('#menu-list');
const menuImages = document.querySelectorAll('#menu-list img');
for (const img of menuImages) {
  img.addEventListener('click', enlargeImg);
}

document.addEventListener('click', shrinkImgs);

let enlarged = false;

function enlargeImg(e) {
  if (enlarged) {
    return;
  }
  enlarged = true;
  e.stopPropagation();
  e.target.style.position = "absolute";
  e.target.style.left = 0;
  e.target.style.top = `${menuList.offsetTop}px`;
}

function shrinkImgs() {
  if (!enlarged) {
    return;
  }
  enlarged = false;
  for (const img of menuImages) {
    img.style.position = "";
    img.style.left = "";
    img.style.top = "";
  }
}

