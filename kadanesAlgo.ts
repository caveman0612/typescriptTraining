

export function kadanesAlgorithm(array: number[]) {
    const newArray: number[] = new Array(array.length);
    newArray.fill(0);
    newArray[0] = array[0];


    return newArray;
  }
  

console.log(kadanesAlgorithm([1, 2, 3, 4]));
  
