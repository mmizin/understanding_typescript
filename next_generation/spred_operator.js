var array1 = [1, 2, 3];
var array2 = [];
array2.push.apply(array2, array1);
console.log(array2); // [1, 2, 3]
