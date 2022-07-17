// TASK 9
//  Create a custom Array.prototype.myPop should work similarly to Array.prototype.pop

Array.prototype.myPop = function () {
    let popedValue = this[this.length - 1];
    this.length = this.length - 1;
    return popedValue
}

let array = [1, 2, 3, 4, 5]

console.log(array.myPop())
console.log(array)