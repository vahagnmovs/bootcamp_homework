// TASK 12
// Create a custom Array.prototype.myPush should work similarly to Array.prototype.push

Array.prototype.myPush = function (...values) {
    for (let value of values) {
        this[this.length] = value;
    }
    return this.length;
}

let array = [1, 2, 3]
console.log(array.myPush(4, 5))