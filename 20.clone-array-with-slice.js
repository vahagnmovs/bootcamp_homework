// TASK 20
// Using slice, write a JavaScript function to clone an array

function copyArray(array) {
    return array.slice();
}

let array = [1, 2, 3, 4, 5]
console.log(copyArray(array))