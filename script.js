"use strict";
// Lesson 3

const lang = prompt("Select a language: (ru/en)");

// 1(a)
if (lang === "ru") {
  console.log("Понедельник");
  console.log("Вторник");
  console.log("Среда");
  console.log("Четверг");
  console.log("Пятница");
  console.log("Суббота");
  console.log("Воскресенье");
} else if (lang === "en") {
  console.log("Monday");
  console.log("Tuesday");
  console.log("Wednesday");
  console.log("Thursday");
  console.log("Friday");
  console.log("Saturday");
  console.log("Sunday");
} else {
  console.log("Error... Please refresh and choose 'ru' or 'en'.");
}

//1(b)
switch (lang) {
  case "ru":
    console.log("Понедельник");
    console.log("Вторник");
    console.log("Среда");
    console.log("Четверг");
    console.log("Пятница");
    console.log("Суббота");
    console.log("Воскресенье");
    break;
  
  case "en":
    console.log("Monday");
    console.log("Tuesday");
    console.log("Wednesday");
    console.log("Thursday");
    console.log("Friday");
    console.log("Saturday");
    console.log("Sunday");
    break;

  default:
    console.log("Error... Please refresh and choose 'ru' or 'en'.");
}


//1(c)
const weekdays = [
  ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"],
  ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
];

lang === "ru" ? weekdays[0].forEach((item) => console.log(item)) :
  lang === "en" ? weekdays[1].forEach((item) => console.log(item)) :
    console.log("Error... Please refresh and choose 'ru' or 'en'.");


//2
const namePerson = prompt("Enter name:");

namePerson === "Artem" ? console.log("director") : namePerson === "Alex" ? console.log("teacher") : console.log("student");


