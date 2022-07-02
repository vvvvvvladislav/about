/* eslint-disable linebreak-style */
let i = 0;
const slides = document.querySelector('.project');
const left = document.getElementById('button__left');
const right = document.getElementById('button__right');
right.onclick = function () {
  slides.children[i].style.display = 'none';
  i += 1;
  i %= 3;
  slides.children[i].style.display = 'grid';
};
left.onclick = function () {
  slides.children[i].style.display = 'none';
  i -= 1;
  if (i === -1) { i = 2; }
  slides.children[i].style.display = 'grid';
};
