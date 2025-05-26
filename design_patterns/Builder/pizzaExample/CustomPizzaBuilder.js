"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomPizzaBuilder = void 0;
// CustomPizzaBuilder.ts
const Pizza_1 = require("../Pizza");
class CustomPizzaBuilder {
    constructor() {
        this.reset();
    }
    reset() {
        this.pizza = new Pizza_1.Pizza();
    }
    setDough(dough) {
        this.pizza.dough = dough;
        return this;
    }
    setSauce(sauce) {
        this.pizza.sauce = sauce;
        return this;
    }
    addCheese(cheese) {
        this.pizza.cheese = cheese;
        return this;
    }
    addTopping(topping) {
        this.pizza.toppings.push(topping);
        return this;
    }
    bakePizza() {
        this.pizza.baked = true;
        return this;
    }
    getProduct() {
        const result = this.pizza;
        this.reset(); // Reset for future use
        return result;
    }
}
exports.CustomPizzaBuilder = CustomPizzaBuilder;
