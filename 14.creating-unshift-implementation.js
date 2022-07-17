// TASK 14
// Create a custom Array.prototype.myUnshift should work similarly to Array.prototype.unshift

Array.prototype.myUnshift = function (...args) {
    let tempArray = [];
    for (let arg of args) {
        tempArray.push(arg)
    }
    tempArray = tempArray.concat(this)
    this.length = 0;
    for (let idx = 0; idx < tempArray.length; idx++) {
        this[idx] = tempArray[idx]
    }
    return this.length;
}

let array = [1, 2, 3, 4, 5];
console.log(array.myUnshift(100, 1))