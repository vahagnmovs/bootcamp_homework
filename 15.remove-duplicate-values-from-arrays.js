// TASK 15
// Using concat compute the union of two arrays and then remove all duplicated items if they exist

function removeDuplicate(array1, array2) {
    let tempArray = array1.concat(array2)
    let result = [];
    for (let i = 0; i < tempArray.length; i++) {
        let value = tempArray[i]
        if (result.indexOf(value) === -1) {
            result.push(value)
        }
    }
    return result;
}

let array1 = [1, 2, 3, 4];
let array2 = [2, 5, 7, 1];
console.log(removeDuplicate(array1, array2))