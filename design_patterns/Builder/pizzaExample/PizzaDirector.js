"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PizzaDirector = void 0;
class PizzaDirector {
    setBuilder(builder) {
        this.builder = builder;
    }
    buildMargheritaPizza() {
        if (!this.builder) {
            throw new Error("Builder not set. Call setBuilder() first.");
        }
        this.builder.reset();
        this.builder.setDough("Thin Crust");
        this.builder.setSauce("Tomato");
        this.builder.addCheese("Mozzarella");
        this.builder.addTopping("Basil");
        this.builder.bakePizza();
    }
    buildPepperoniPizza() {
        if (!this.builder) {
            throw new Error("Builder not set. Call setBuilder() first.");
        }
        this.builder.reset();
        this.builder.setDough("Classic Hand-Tossed");
        this.builder.setSauce("Spicy Tomato");
        this.builder.addCheese("Mozzarella Blend");
        this.builder.addTopping("Pepperoni");
        this.builder.bakePizza();
    }
}
exports.PizzaDirector = PizzaDirector;
