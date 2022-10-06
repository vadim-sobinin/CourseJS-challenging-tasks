'use strict';
// Version 2
let attemps;

function generateNumber() {
  return Math.round(Math.random() * 100);
}

function countAttemps() {
  if (attemps <= 1) {
    return endGame("Opps... Attempts are over. Would you like to try again?");
  } else{
    return attemps--;
  }
}

function isNumber(num) {
  return (!isNaN(parseInt(num)) && isFinite(num));
}

function makeGuess (message = `${attemps} attemps is left! Guess a number from 1 to 100:`) {
  
  let guessedNumber = prompt(message);

  if (guessedNumber === null){
    stopGame();
  } else {
    if (isNumber(guessedNumber)){
      
      if (+guessedNumber > 0 && guessedNumber <= 100){
        return +guessedNumber;
      } else{
        return makeGuess("Your number MUST be between 1 and 100! Try again:");
      }
       
    } else {
      return makeGuess("Please enter a NUMBER!");
    }
  }

}

function checkNumber(guessedNumber, rightNumber){
  // console.log(`Right number is ${rightNumber}`);
  // console.log(`Guessed number is ${guessedNumber}`);
  
  if (attemps > 0) {
    if (guessedNumber < rightNumber){
      countAttemps();
      checkNumber(makeGuess(`${attemps} attemps is left! Right number is more than ${guessedNumber}, try again:`), rightNumber);
    } else if (guessedNumber > rightNumber){
      countAttemps();
      checkNumber(makeGuess(`${attemps} attemps is left! Right number is less than ${guessedNumber}, try again:`), rightNumber);
    } else if (rightNumber === guessedNumber){
      endGame("Congratulations! You guessed it! \n Do you want to play more?");
    }
  }
  
}

function stopGame(){
  return alert("Thanks for the game! Hope to see you again! Goodbye!");
}

function endGame(message){
  const shalWeContinue = confirm(message);
  if (shalWeContinue) {
    startGame();
  } else {
    stopGame();
  }
}


function startGame() {
  attemps = 10;
  const rightNumber = generateNumber();
  console.log(`Right number is ${rightNumber}`);
  checkNumber(makeGuess(), rightNumber);
}


startGame();