// TASK 3
// Create a custom Array.prototype.myToString it should work similarly to Array.prototype.toString

Array.prototype.ownToString = function () {
    let toString = '';
    for (let idx = 0; idx < this.length; idx++) {
        if (idx === this.length - 1) {
            toString += this[idx]
        } else {
            toString += this[idx] + ',';
        }
    }
    return toString;
};

let array = [1, 2, 'a', '1a'];

console.log(array.ownToString());