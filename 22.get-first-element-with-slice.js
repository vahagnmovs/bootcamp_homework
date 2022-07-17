// TASK 22
// Using slice, Write a JavaScript function to get the first element of an array.
// Passing a parameter 'n' will return the first 'n' elements of the array

function getElementsWithSlice(array, n = 0) {
    return array.slice(0, n + 1)
}

let array = [1, 2, 3, 4, 5]
console.log(getElementsWithSlice(array))