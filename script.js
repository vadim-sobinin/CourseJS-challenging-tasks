'use strict'; 

const isNumber = function(num) {
  return !isNaN(parseInt(num)) && isFinite(num);
};


const startGame = function () {

  const rightNumber = Math.round(Math.random() * 100);
  console.log(`The correct number is: ${rightNumber}`);

  let guessedNumber;
  let wantToPlay = true;

  const checkNumber = function() {

    if (!wantToPlay) {
      return "Stop game";
    }
  
    if (guessedNumber === null){
      guessedNumber = undefined;
      wantToPlay = false;
      return alert("The game is over");
    } else if (!isNumber(guessedNumber) || guessedNumber < 1 || guessedNumber > 100) {
      guessedNumber = prompt("Guess a number from 1 to 100:");
      checkNumber();
    }
    // guessedNumber = +guessedNumber;
    if (guessedNumber == 0) {
      return "Game over";
    } else if (rightNumber == guessedNumber) {
      wantToPlay = false;
      guessedNumber = undefined;
      return alert("Congratulations! You guessed it!");
    } else if (guessedNumber < rightNumber) {
      guessedNumber = prompt(`Right number is more than ${guessedNumber}, try again:`);
      checkNumber();
    } else if (guessedNumber > rightNumber) {
      guessedNumber = prompt(`Right number is less than ${guessedNumber}, try again:`);
      checkNumber();
    }
  };

  checkNumber();
};

startGame();

