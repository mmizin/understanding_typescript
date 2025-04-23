type typeOne = {
    name: string;
    age: number;
}

type typeTwo = {
    legs: number;
    hands: number;
}

type commonType = typeOne & typeTwo;

const person: commonType = {
    name: "John",
    age: 30,
    legs: 2,
    hands: 2
}

console.log(person.name); // prints 'John'
console.log(person.age); // prints '30'
console.log(person.legs); // prints '2'