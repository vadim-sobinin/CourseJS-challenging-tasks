"use strict";

function DomElement () {
  this.selector = "";
  this.height = "";
  this.width = "";
  this.bg = "";
  this.fontSize = 0;
  this.selectElem = "";
  this.topOffset = 0;
  this.leftOffset= 0;

  this.createElement = function () {
    
    if (this.selector[0] === ".") {
      const newDiv = document.createElement("div");
      newDiv.classList.add(this.selector.slice(1));
      newDiv.style.cssText = `
      height: ${this.height};
      width: ${this.width};
      background-color: ${this.bg};;
      font-size: ${this.fontSize};
    `;
      newDiv.textContent = `This is div with class "${this.selector.slice(1)}"`;
      document.body.append(newDiv);
      this.selectElem = document.querySelector(this.selector);

    } else if (this.selector[0] === "#") {
      const newSpan = document.createElement("span");
      newSpan.id = this.selector.slice(1);
      console.log(newSpan);
      newSpan.classList.add(this.selector.slice(1));
      newSpan.style.cssText = `
        height: ${this.height};
        width: ${this.width};
        background-color: ${this.bg};;
        font-size: ${this.fontSize};
      `;
      newSpan.textContent = `This is span with ID "${this.selector.slice(1)}"`;
      document.body.append(newSpan);
      this.selectElem = document.querySelector(this.selector);
    }
  };
}

const newObj = new DomElement();
newObj.selector = ".square";
newObj.height = "100px";
newObj.width = "100px";
newObj.bg = "green";
newObj.fontSize = "20px";

window.addEventListener('DOMContentLoaded', (event) => {
  newObj.createElement();
  newObj.selectElem.style.position = "absolute";  
});

window.addEventListener('keydown', (event) => {
  switch (event.code){
    case "ArrowDown":
      newObj.topOffset += 10;
      break;
    case "ArrowUp":
      newObj.topOffset -= 10;
      break;
    case "ArrowLeft":
      newObj.leftOffset -= 10;
      break;
    case "ArrowRight":
      newObj.leftOffset += 10;
      break;
  }
  newObj.selectElem.style.left = `${newObj.leftOffset}px`;
  newObj.selectElem.style.top = `${newObj.topOffset}px`;
  
});