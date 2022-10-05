'use strict';
// 1)
const arr = ["34245", "25824987", "83424234", "488759", "896874", "234445", "90806"];

arr.forEach((item) => item[0] == 2 || item[0] == 4 ? console.log(+item) : "do nothing");

// 2)

for (let number = 2; number < 101; number++) {
  let isSimple = true;

  for (let otherNumber = number - 1; otherNumber > 1; otherNumber--){
    if (number % otherNumber === 0){
      isSimple = false;
      break;
    }}
    
  if (isSimple) {
    console.log(`${number} - The divisors of this number are 1 and ${number}`);
  }

}