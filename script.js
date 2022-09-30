let num = 266219;
let res = 1;
let array = String(num).split("");

for (var i = 0; i < array.length; ++i) {
  res *= array[i];
}

console.log(res);

console.log(res ** 3);

let firstNumber = (res ** 3).toString()[0];
let secondNumber = (res ** 3).toString()[1];
console.log(firstNumber + secondNumber);
