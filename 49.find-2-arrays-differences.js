// TASK 49
// Write a function to find the difference of two arrays

function getUniqueValuesFromArrays(array1, array2) {
    let result = [];
    array1.forEach(element => {
        if (array2.indexOf(element) === -1)
            result.push(element)
    })
    array2.forEach(element => {
        if (array1.indexOf(element) === -1)
            result.push(element)
    })
    return result;
}

let array1 = [1, 2, 3, 4, 5];
let array2 = [1, 2, 5, 7, 5, 8, 9]

console.log(getUniqueValuesFromArrays(array1, array2))