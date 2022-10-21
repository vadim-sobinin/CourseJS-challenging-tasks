"use strict";

const toDoInput = document.querySelector(".header-input");
const addToDoBtn = document.querySelector(".header-button");
const toDoList = document.querySelector(".todo-list");
const toDoComplete = document.querySelector(".todo-completed");

const form = document.querySelector(".todo-control");

const toDoData = [];



function init(){
  if (localStorage.length != 0){
    for (let i = 0; i < localStorage.length; i++){
    toDoData.push(JSON.parse(localStorage.getItem(i)));
    }
  }
  render();
}

init();

function render(){
  localStorage.clear();
  toDoList.innerHTML = "";
  toDoComplete.innerHTML = "";

  toDoData.forEach((toDo, index) => {
    const li = document.createElement('li');

    li.classList.add('todo-item');

    li.innerHTML = `<span class="text-todo">${toDo.text}</span>
    <div class="todo-buttons">
      <button class="todo-remove"></button>
      <button class="todo-complete"></button>
    </div>`;

    toDo.completed ? toDoComplete.append(li) : toDoList.append(li);

    li.querySelector('.todo-complete').addEventListener('click', () => {
      toDo.completed = !toDo.completed;
      render();
    });

    li.querySelector(".todo-remove").addEventListener('click', () => {
      toDoData.splice(toDoData.indexOf(toDo), 1);
      render();
    });

    localStorage.setItem(index, JSON.stringify(toDo));

  });
}
render();

function addToDo (text){
  const newToDo = {
    text: text,
    completed: false
  };
  toDoData.push(newToDo);
  render();
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (toDoInput.value != ""){
    addToDo(toDoInput.value);
    toDoInput.value = "";
  }
  
});

