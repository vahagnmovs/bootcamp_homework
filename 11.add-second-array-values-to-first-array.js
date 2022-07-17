// TASK 11
// Create a function that will receive two collections of employees and adds the items of the
// second collection to the first collection. Use push method

function copySecondToFirst(employee1, employee2) {
    for (let value of employee2) {
        employee1.push(value)
    }
    return employee1
}

let array1 = [1, 2, 3, 4, 5];
let array2 = [8, 9, 10, 11]

console.log(copySecondToFirst(array1, array2))