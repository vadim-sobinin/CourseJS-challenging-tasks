"use strict";

const booksList = document.querySelector(".books")
const books = document.querySelectorAll(".book");
const secondBookElems = books[0].querySelectorAll("li");
const fifthBookElems = books[5].querySelectorAll("li");
const sixthBook = books[2].querySelectorAll("li");

document.querySelector(".adv").remove();

document.body.style.backgroundImage = "url(../image/you-dont-know-js.jpg)";

books[4].querySelector("a").textContent = "Book 3. this & Object Prototypes";

booksList.append(books[1]);
booksList.append(books[0]);
booksList.append(books[4]);
booksList.append(books[3]);
booksList.append(books[5]);
booksList.append(books[2]);

secondBookElems[1].after(secondBookElems[3]);
secondBookElems[3].after(secondBookElems[6]);
secondBookElems[6].after(secondBookElems[8]);
secondBookElems[9].after(secondBookElems[2]);

fifthBookElems[1].after(fifthBookElems[9]);
fifthBookElems[9].after(fifthBookElems[3]);
fifthBookElems[3].after(fifthBookElems[4]);
fifthBookElems[2].after(fifthBookElems[6]);
fifthBookElems[6].after(fifthBookElems[7]);

sixthBook[8].insertAdjacentHTML("afterend", "<li>Chapter 8: Beyond ES6</li>");

console.log(books);

console.log(sixthBook);