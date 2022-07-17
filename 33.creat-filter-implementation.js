// TASK 33
// Create a custom Array.prototype.myFilter should work similarly to Array.prototype.filter

Array.prototype.myFilter = function filter(filterFunc) {
    const filterArr = [];
    for (let i = 0; i < this.length; i++) {
        const result = filterFunc(this[i], i, this);
        if (result) filterArr.push(this[i]);
    }
    return filterArr;
}

let array = [1, 2, 3, 4]
console.log(array.myFilter(num => num % 2 === 0))