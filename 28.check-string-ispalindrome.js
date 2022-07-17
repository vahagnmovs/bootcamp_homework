//TASK28
// Using reverse, write a function that checks if the string is a palindrome

function isPalindrom(string) {
    let tempArray = string.split('').reverse()
    return tempArray.join('') === string;
}

let string = 'abba'
console.log(isPalindrom(string))