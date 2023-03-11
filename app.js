// set Variables
const planetSun = document.querySelector('.sun');
const modal = document.querySelector('.modal');
const anim = document.querySelector('.anim');
console.log(anim);
// set function

planetSun.onclick = function () {
  modal.classList.toggle('show')
  anim.classList.toggle('translate');
}

















