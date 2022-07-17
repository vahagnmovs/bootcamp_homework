// TASK 17
// Using the splice method, write a function that will fill the missing numbers of a sorted
// array of numbers, to make it consecutive.
// Example: [1,2,3,6] should become [1,2,3,4,5,6]

// function addMissingNumbers(array) {
//     let result = [];
//     for (let idx = 0; idx < array.length; idx++) {
//         if ((array[idx + 1] - array[idx]) === 1) {
//             result.push(array[idx])
//         } else {
//             result.push(array[idx])
//             let count = array[idx + 1] - array[idx];
//             while (count > 1) {
//                 result.push(++array[idx])
//                 count--;
//             }
//         }
//     }
//     return result;
// }

function addMissingNumbers(array) {
    for (let idx = 0; idx < array.length; idx++) {
        if ((array[idx + 1] - array[idx]) !== 1) {
            let count = (array[idx + 1] - array[idx]);
            for (let i = 1; i < count; i++) {
                array.splice((idx + 1), 0, (array[idx] + 1))
                idx++;
            }
        }
    }
    return array;
}

let array = [1, 2, 4, 6, 9, 50]
console.log(addMissingNumbers(array))