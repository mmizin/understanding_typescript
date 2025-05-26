import { Pizza } from "./Pizza";

export interface PizzaBuilder {
    reset(): void;
    setDough(dough: string): void;
    setSauce(sauce: string): void;
    addCheese(cheese: string): void;
    addTopping(topping: string): void;
    bakePizza(): void;
    getProduct(): Pizza;
}   