// TASK 18
// Using the splice method, create a function which is removing duplicated numbers from a sorted array of numbers

function removeDuplicate(array) {
    let result = [...array];
    for (let idx = 0; idx < result.length; idx++) {
        if (result[idx + 1] === result[idx]) {
            result.splice(idx, 1)
        }
    }
    return result
}

let array = [1, 5, 5, 6, 7, 8, 8, 11, 15]
console.log(removeDuplicate(array))