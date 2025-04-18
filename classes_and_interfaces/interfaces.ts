interface Person {
    name: string;
    age: number;
}

function greet(person: Person): string {
    return `Hello, ${person.name}`
}

console.log(greet({ name: "John", age: 30 }));


interface Shape{}

function getShape(): Shape {
    return {} as Shape; 
};

interface paintOptions {
    shape: Shape;
    xPos?: number;
    yPos?: number;
}

function paint(opts: paintOptions): void {
    console.log(`Painting ${opts.shape} at (${opts.xPos}, ${opts.yPos})`);
}

const shape = getShape();

paint({ shape });
paint( { shape, xPos: 10 });


interface Person {
    name: string;
    age: number;
}

interface ReadonlyPerson {
    readonly name: string;
    readonly age: number;
}

let writablePerson: Person = {
    name: "Person McPersonface",
    age: 42,
};

// works
let readonlyPerson: ReadonlyPerson = writablePerson;

console.log(readonlyPerson.age); // prints '42'
writablePerson.age++;
console.log(readonlyPerson.age); // prints '43'

// ✅ 1. Array of strings only
let arr: string[] = ["lern", "TS"]
interface StringArray {
    arr: string[];
}
let myArr: StringArray = {
    arr: ["lern", "TS"]
}

// ✅ 2. Array of strings OR numbers
let arr2: (string | number)[] = ["lern", 1, "TS", 3]
interface MixedArray {
    arr: (string | number)[];
}
let myArr2: MixedArray = {
    arr: ["lern", 1, "TS", 3]
}

// ✅ 3. Tuple (fixed length, fixed order)
let arr3: [string, number] = ["lern", 1]
interface FixedLenOrderArray {
    arr: [string, number];
}
let myArr3: FixedLenOrderArray = {
    arr: ["lern", 1]
}

//✅ 4. Array of tuples
let arr4:[string, number][] = [['lern', 1], ['TS', 2]]
interface ArrayOfTuples {
    arr: [string, number][];
}

let myArr4: ArrayOfTuples = {
    arr: [['lern', 1], ['TS', 2]]   
}

