// CustomPizzaBuilder.ts
import { Pizza } from '../Pizza';
import { PizzaBuilder } from '../PizzaBuilder';

export class CustomPizzaBuilder implements PizzaBuilder {
    private pizza!: Pizza; 

    constructor() {
        this.reset();
    }

    public reset(): void {
        this.pizza = new Pizza();
    }

    public setDough(dough: string): this {
        this.pizza.dough = dough;
        return this;
    }

    public setSauce(sauce: string): this {
        this.pizza.sauce = sauce;
        return this;
    }

    public addCheese(cheese: string): this {
        this.pizza.cheese = cheese;
        return this;
    }

    public addTopping(topping: string): this {
        this.pizza.toppings.push(topping);
        return this;
    }

    public bakePizza(): this {
        this.pizza.baked = true;
        return this;
    }

    public getProduct(): Pizza {
        const result = this.pizza;
        this.reset(); // Reset for future use
        return result;
    }
}