let num = 266219;
let res = 1;
while ((num / 10) > 0){
  res *= num % 10;
  // console.log(res);
  num = Math.floor(num / 10);
  // console.log(num);
}

console.log(res);

console.log(res ** 3);

let firstNumber = (res ** 3).toString()[0];
let secondNumber = (res ** 3 secondNumber).toString()[1];
console.log(firstNumber + secondNumber);