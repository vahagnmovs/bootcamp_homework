// TASK 21
// Using slice, Write a JavaScript function to get the last element of an array.
// Passing a parameter 'n' will return the last 'n' elements of the array

function getElementFromArray(array, n = array.length - 1) {
    return array.slice(n, n + 1)
}

let array = [1, 2, 3, 4, 5]
console.log(getElementFromArray(array, 3))