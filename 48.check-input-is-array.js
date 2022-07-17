// TASK 48
// Write a function to check whether an `input` is an array or not. Provide 2 different solutions

// Solution 1

// function isArray1(input) {
//     return Array.isArray(input);
// }
//
// let array1 = [];
// console.log(isArray(array1))

// Solution 2

// function isArray2(input) {
//     return input instanceof Array;
// }
//
// let array2 = [];
// console.log(isArray2(array2))

// Solution 3

// function isArray3(input) {
//     return input.constructor === Array
// }
//
// let array3 = '';
// console.log(isArray3(array3))