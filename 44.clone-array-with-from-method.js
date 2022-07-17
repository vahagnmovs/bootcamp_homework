// TASK 44
// Using from, write a JavaScript function to clone an array

function cloneWIthFrom(array) {
    return Array.from(array, value => value);
}

let array = [1, 2, 3]
console.log(cloneWIthFrom(array))