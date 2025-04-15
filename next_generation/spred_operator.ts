const array1 = [1, 2, 3];
let array2: number[] = [];

array2.push(...array1);

console.log(array2); // [1, 2, 3]