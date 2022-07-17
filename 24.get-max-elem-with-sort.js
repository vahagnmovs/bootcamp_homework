// TASK 24
// Using sort, Write a JavaScript function to get the max element of an array of numbers

function getMaxElemWithSort(array) {
    array.sort(function compareNumbers(a, b) {
        return a - b;
    })
    let max = array[array.length - 1];
    return max
}

let array = [6, 60, 100, 2, 3, 4, 5]
console.log(getMaxElemWithSort(array))