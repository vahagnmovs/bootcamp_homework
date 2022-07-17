// TASK 23
// Create a custom Array.prototype.mySlice should work similarly to Array.prototype.slice

Array.prototype.mySlice = function (start = 0, end = array.length) {
    let slicedArray = [];
    for (let idx = start; idx < end; idx++) {
        slicedArray.push(this[idx])
    }
    return slicedArray;
}


let array = [1, 2, 3, 4, 5]
console.log(array.mySlice())