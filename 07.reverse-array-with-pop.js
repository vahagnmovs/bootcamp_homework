// TASK 7
// Create a function that is receiving an array and returns reversed one using pop()

function reverseWithPop(array) {
    let tempArray = [...array];
    let result = [];
    for (let idx = 0; idx < array.length; idx++) {
        result.push(tempArray.pop())
    }
    return result
}

const array = [1, 2, 3, 4, 5]

console.log(reverseWithPop(array))