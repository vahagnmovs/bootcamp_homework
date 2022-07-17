// TASK 47
// Create a custom Array.prototype.myIncludes should work similarly to Array.prototype.includes

Array.prototype.myIncludes = function (element) {
    let result = false;
    if (this.find(elem => elem === element)) {
        result = true;
    }
    return result;
}

let array = [1, 2, 3, 4, 5]
let element = 6;
console.log(array.myIncludes(element))