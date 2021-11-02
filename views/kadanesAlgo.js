"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.kadanesAlgorithm = void 0;
function kadanesAlgorithm(array) {
    const newArray = new Array(array.length);
    newArray.fill(0);
    newArray[0] = array[0];
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
        const num = array[i];
        const total = array[i] + newArray[i - 1];
        if (total > num) {
            newArray[i] = total;
            if (total > max)
                max = total;
        }
        else {
            newArray[i] = num;
            if (num > max)
                max = num;
        }
    }
    return max;
}
exports.kadanesAlgorithm = kadanesAlgorithm;
// console.log(
//   kadanesAlgorithm([3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4])
// );
console.log(kadanesAlgorithm([-1, -2, -3, -4, -5, -6, -7, -8, -9, -10]));
