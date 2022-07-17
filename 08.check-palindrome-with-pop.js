// TASK 8
// Create a function that is receiving a sting argument and checks if it is palindrome using pop()

function checkPalindrome(string) {
    let newString = '';
    let tempArray = string.split('');
    let tempArray2 = [];
    for (let idx = 0; idx < string.length; idx++) {
        tempArray2.push(tempArray.pop())
    }
    newString = tempArray2.join('');
    return newString === string;
}

console.log(checkPalindrome('abbac'))