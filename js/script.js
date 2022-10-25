"use stcrict";

const btn = document.querySelector("#btn");
console.log("btn", btn);

const elem = document.querySelector("#element");
console.log("elem", elem);

let active = false;
let count = 50;
let idInterval;

btn.addEventListener("click", () => {
  active = !active;

  active ? idInterval = requestAnimationFrame(animate) : cancelAnimationFrame(idInterval);

})

const animate = () => {
  count++;
  idInterval = requestAnimationFrame(animate);

  if (count < 500) {
    elem.style.top = count + "px";
  } else {
    cancelAnimationFrame(idInterval);
    count = 50;
    elem.style.top = count + "px";
    active = !active;
  }
}