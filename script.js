'use strict';

let stringSlicer = function(string) {
  
  if (typeof string === "string") {

    string = string.trim();

    if (string.length > 30) {
      return (string.slice(0, 30) + "...");
    } else {
      return string;
    }

  } else {
    return "Error... Enter a string!";
  }
  
}

console.log(stringSlicer(prompt("Enter a string:")));