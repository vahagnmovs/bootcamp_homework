// TASK 46
// Using from, turn the string into an array

function turnStringToArrayWithFrom(string) {
    return Array.from(string, elem => elem)
}

let string = 'Vahagn'
console.log(turnStringToArrayWithFrom(string))