// TASK 50
// Write a function that will receive the length and the value and will return a pre-filled array
// Example: prefillArray(2, ‘Bla Bla`)
// should return [‘Bla Bla`, ‘Bla Bla`]

function prefillArray(count, input) {
    let array = [];
    for (let idx = 0; idx < count; idx++) {
        array.push(input);
    }
    return array;
}

console.log(prefillArray(2, 'bla'))