"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pizza = void 0;
class Pizza {
    constructor() {
        this.dough = "";
        this.sauce = "";
        this.toppings = [];
        this.cheese = "";
        this.baked = false;
    }
    listParts() {
        console.log(`Pizza with:`);
        if (this.dough)
            console.log(`- Dough: ${this.dough}`);
        if (this.sauce)
            console.log(`- Sauce: ${this.sauce}`);
        if (this.cheese)
            console.log(`- Cheese: ${this.cheese}`);
        if (this.toppings.length > 0)
            console.log(`- Toppings: ${this.toppings.join(', ')}`);
        if (this.baked)
            console.log(`Pizza is baked! ♨️`);
        console.log("---");
    }
}
exports.Pizza = Pizza;
