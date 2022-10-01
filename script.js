const num = 266219;
// let res = 1;
const string = String(num).split("");

// for (var i = 0; i < string.length; ++i) {
//   res *= string[i];
// }

let res = string.reduce((prev, item) => prev * item);

console.log(res);

res = res ** 3;
console.log(res);

res = res.toString();
console.log(res[0] + res[1]);
