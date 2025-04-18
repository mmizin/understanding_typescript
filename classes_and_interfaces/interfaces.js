function greet(person) {
    return "Hello, ".concat(person.name);
}
console.log(greet({ name: "John", age: 30 }));
function getShape() {
    return {};
}
;
function paint(opts) {
    console.log("Painting ".concat(opts.shape, " at (").concat(opts.xPos, ", ").concat(opts.yPos, ")"));
}
var shape = getShape();
paint({ shape: shape });
paint({ shape: shape, xPos: 10 });
var writablePerson = {
    name: "Person McPersonface",
    age: 42,
};
// works
var readonlyPerson = writablePerson;
console.log(readonlyPerson.age); // prints '42'
writablePerson.age++;
console.log(readonlyPerson.age); // prints '43'
var myArr = {
    arr: [1, "hello"]
};
myArr.arr.push(2);
console.log(myArr.arr); // prints [1, "hello", 2]
