"use stcrict";

const btn = document.querySelector("#btn");
console.log("btn", btn);

const elem = document.querySelector("#element");
console.log("elem", elem);

let active = false;
let count = 50;
let idInterval;

document.querySelector("#reset").addEventListener("click" , () => {
  active = false;
  cancelAnimationFrame(idInterval);
  count = 50;
  elem.style.top = count + "px";
});

btn.addEventListener("click", () => {
  active = !active;
  

  active ? idInterval = requestAnimationFrame(animate) : cancelAnimationFrame(idInterval);

});

const animate = () => {
  count++;
  idInterval = requestAnimationFrame(animate);

  if (count < 700) {
    elem.style.top = count + "px";
  } else {
    cancelAnimationFrame(idInterval);
    count = 50;
    elem.style.top = count + "px";
    active = !active;
  }
}