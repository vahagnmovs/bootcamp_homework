// TASK 25
// Using sort, Write a JavaScript function to get the min element of an array of numbers

function getMinElemWithSort(array) {
    array.sort(function sortByIncr(a, b) {
        return a - b;
    })
    let min = array[0];
    return min
}

let array = [6, 60, 100, 2, 3, -5, 4, 5]
console.log(getMinElemWithSort(array))