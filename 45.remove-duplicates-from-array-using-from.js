// TASK 45
// Using from, and Set create a function that is removing duplicates from an array

function removeDuplicatesFromArrayWithFromSet(array) {
    let set = new Set(array);
    return Array.from(set, elem => elem)
}

let array = [1, 2, 3, 1]
console.log(removeDuplicatesFromArrayWithFromSet(array))