const add = (a: number, b: number): number => a + b;

const minus = (a: number, b: number): number => a - b;

const double = (a: number): number => a * 2;

const len = (a: string): number => a.length;

// Arrow Function in Array Methods

const numbers = [1, 2, 3, 4, 5];
const squar = numbers.map((num: number): number => num * num);
// const filter = numbers.filter((num: number): boolean => num % 2 === 0);
const filter = numbers.filter(num => num % 2 === 0);

// Returning object literals
const getUser = () => ({name: "John", age: 30});

// Arrow vs Regular in Object Methods

const person = {
    name: "John",
    age: 30,
    // sayHi: () => `Hi, I'm ${this.name}`, //  undefined
    greet(){
        console.log(`Hi, I'm ${this.name}`);
    }
}

// function sum(a: number, b: number): number {
//     return a + b;
// }
const sum = (a: number, b: number): number => a + b;
const nums = [1, 2, 3, 4, 5, 6];

const even_nums = nums.filter(num => num % 2 === 0);
console.log(even_nums); // [2, 4, 6]