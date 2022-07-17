// TASK 19
// Create a custom Array.prototype.mySplice should work similarly to Array.prototype.splice
//FIXME:
// Array.prototype.mySplice = function (startIndex, deleteCount, ...numbers) {
//     let tempArray = [];
//     for (let idx = 0; idx < this.length; idx++) {
//         if (idx === startIndex) {
//             while (deleteCount > 0) {
//                 for (let number of numbers) {
//                     if (number) {
//                         tempArray.push(number);
//                     } else {
//                         idx++;
//                     }
//                 }
//                 deleteCount--;
//             }
//         }
//         tempArray.push(this[idx])
//     }
//     return tempArray;
// }
//
// let array = [1, 2, 3, 4, 5]
// console.log(array.mySplice(1, 3))