// TASK 10
// Create a function that is receiving a number and returns an array which is containing
// all even digits. Use push method

function returnEvenDigits(number) {
    let stringedNumber = number.toString();
    let result = [];
    for (let idx = 0; idx < stringedNumber.length; idx++) {
        if (stringedNumber[idx] % 2 === 0) {
            result.push(stringedNumber[idx]);
        }
    }
    return result;
}

console.log(returnEvenDigits(12034560))