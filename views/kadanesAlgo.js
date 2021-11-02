"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.kadanesAlgorithm = void 0;
function kadanesAlgorithm(array) {
    const newArray = new Array(array.length);
    newArray.fill(0);
    newArray[0] = array[0];
    return newArray;
}
exports.kadanesAlgorithm = kadanesAlgorithm;
console.log(kadanesAlgorithm([1, 2, 3, 4]));
