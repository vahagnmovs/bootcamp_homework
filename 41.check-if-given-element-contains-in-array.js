// TASK 41
// Write a function which is checking if a given element contains inside an array

function checkArrayContainsElement(array, element) {
    return array.indexOf(element) !== -1;
}

let array = [1, 2, 3, 4, 5]
console.log(checkArrayContainsElement(array, 5));