"use strict";

const firstDate = document.querySelector("#a");
const secondDate = document.querySelector("#b");

const weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function firstDateFormatting(){
  const dateObj = new Date();
  return `Today ${
    weekDays[dateObj.getDay()]
  }, ${dateObj.getDate()} ${
    month[dateObj.getMonth()]
  } ${dateObj.getFullYear()}, ${dateObj.getHours()} ${
    dateObj.getHours() === 1 ? "hour" : "hours"
  } ${dateObj.getMinutes()} ${
    dateObj.getMinutes() === 1 ? "minute" : "minutes"
  } ${dateObj.getSeconds()} ${dateObj.getSeconds() === 1 ? "second" : "seconds"}`;
}

function alwaysTwoDigits(number){
  if (String(number).length === 1) {
    return "0"+number;
  } else {
    return number;
  }
}
function secondDateFormatting(){
  const dateObj = new Date();
  return `${alwaysTwoDigits(dateObj.getDate())}.${alwaysTwoDigits(dateObj.getMonth()+1)}.${dateObj.getFullYear()} - ${alwaysTwoDigits(dateObj.getHours())}:${alwaysTwoDigits(dateObj.getMinutes())}:${alwaysTwoDigits(dateObj.getSeconds())}`;
}

setInterval(function(){
  firstDate.innerText = firstDateFormatting();
  secondDate.innerText = secondDateFormatting();
}, 1000);






