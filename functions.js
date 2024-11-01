"use strict";
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(10, 20));
const sub = (num1, num2) => num1 - num2;
console.log(sub(20, 10));
function getItems(items) {
    return items;
}
console.log(getItems([1, 2, 3, 4, 5]));
let concatResult = getItems(["1", "2"]);
console.log(concatResult);
