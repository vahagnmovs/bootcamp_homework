// TASK 29
// Using the map, write a function to clone an array

function cloneArrayWithMap(array) {
    return array.map(elem => elem)
}

let array = [1, 2, 3]
console.log(cloneArrayWithMap(array))