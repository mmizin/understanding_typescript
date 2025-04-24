let names: Array<string> = ['Alice', 'Bob', 'Charlie'];

type DataStore<T> = {
    [key: string]: T;
}

let store: DataStore<string | number> = {
    "name": "Alice",
    "age": 30,
    "height": 5.5}
store.sex = "female";

console.log(store); 

function merge<T>(obj1: T, obj2: T) {
    return [obj1, obj2];
}
let merged = merge(1, 3)
console.log(merged); // [1, 3]

function mergeObj<T extends object>(a: T, b: T) {
    return {...a, ...b}
}  

let mergedObj = mergeObj({name: "Alice", age: 30}, {height: 5.5, weight: 130});
console.log(mergedObj); // { name: 'Alice', age: 30, height: 5.5, weight: 130 }

