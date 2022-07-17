// TASK 16
// Create a custom Array.prototype.myConcat should work similarly to Array.prototype.concat

Array.prototype.myConcat = function (...arrays) {
    let result = [...this]
    for (let array of arrays) {
        for (let idx = 0; idx < array.length; idx++) {
            result.push(array[idx])
        }
    }
    return result;
}

let array1 = [1, 2, 3, 4]
let array2 = [5, 6, 7, 8]
let array3 = [10, 11, 3, 4]


console.log(array1.myConcat(array2, array3))