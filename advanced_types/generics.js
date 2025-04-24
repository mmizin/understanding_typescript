var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var names = ['Alice', 'Bob', 'Charlie'];
var store = {
    "name": "Alice",
    "age": 30,
    "height": 5.5
};
store.sex = "female";
console.log(store);
function merge(obj1, obj2) {
    return [obj1, obj2];
}
var merged = merge(1, 3);
console.log(merged); // [1, 3]
function mergeObj(a, b) {
    return __assign(__assign({}, a), b);
}
var mergedObj = mergeObj({ name: "Alice", age: 30 }, { height: 5.5, weight: 130 });
console.log(mergedObj); // { name: 'Alice', age: 30, height: 5.5, weight: 130 }
