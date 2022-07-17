// TASK 6
// Create a custom Array.prototype.myJoin should work similarly to Array.prototype.join

Array.prototype.ownJoin = function (separator) {
    let toString = '';
    for (let idx = 0; idx < this.length; idx++) {
        if (idx === this.length - 1) {
            toString = toString + `${this[idx]}`;
        } else {
            toString = toString + `${this[idx]}` + `${separator}`;
        }
    }
    return toString;
};

let array = [1, 2, 'a', '1a'];

console.log(array.ownJoin('/'));