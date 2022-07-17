// TASK 13
// Create a custom Array.prototype.myShift should work similarly to Array.prototype.shift

Array.prototype.myShift = function () {
    let tempArray = [];
    for (let idx = 1; idx < this.length; idx++) {
        tempArray.push(this[idx]);
    }
    let shiftedValue = this[0];
    this.length = this.length - 1;
    for (let i = 0; i < tempArray.length; i++) {
        this[i] = tempArray[i];
    }
    return shiftedValue;
}

let array = [1, 2, 3, 4, 5];

console.log(array.myShift())
console.log(array)