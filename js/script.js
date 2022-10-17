'use strict';
const input = document.querySelector("#text");
const btn = document.querySelector("#btn");
const ebtn = document.querySelector("#e_btn");
const inputRange = document.querySelector("#range");
const circle = document.querySelector("#circle");
const square = document.querySelector("#square");

function changeBgColor (color) {
  square.style.backgroundColor = input.value;
}

function hideBtn(){
  ebtn.style.display = "none";
}

function setCircleSize(){
  document.querySelector("#range-span").textContent = inputRange.value;
  circle.style.width = `${inputRange.value}%`;
  circle.style.height = `${inputRange.value}%`;
}

setCircleSize();

btn.addEventListener('click', changeBgColor);

ebtn.addEventListener('click', hideBtn);

inputRange.addEventListener('input', setCircleSize);