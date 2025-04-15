var add = function (a, b) { return a + b; };
var minus = function (a, b) { return a - b; };
var double = function (a) { return a * 2; };
var len = function (a) { return a.length; };
// Arrow Function in Array Methods
var numbers = [1, 2, 3, 4, 5];
var squar = numbers.map(function (num) { return num * num; });
// const filter = numbers.filter((num: number): boolean => num % 2 === 0);
var filter = numbers.filter(function (num) { return num % 2 === 0; });
// Returning object literals
var getUser = function () { return ({ name: "John", age: 30 }); };
// Arrow vs Regular in Object Methods
var person = {
    name: "John",
    age: 30,
    // sayHi: () => `Hi, I'm ${this.name}`, //  undefined
    greet: function () {
        console.log("Hi, I'm ".concat(this.name));
    }
};
// function sum(a: number, b: number): number {
//     return a + b;
// }
var sum = function (a, b) { return a + b; };
var nums = [1, 2, 3, 4, 5, 6];
var even_nums = nums.filter(function (num) { return num % 2 === 0; });
console.log(even_nums); // [2, 4, 6]
