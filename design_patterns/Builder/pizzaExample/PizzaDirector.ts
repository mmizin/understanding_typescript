import { PizzaBuilder } from './PizzaBuilder';

export class PizzaDirector {
    private builder!: PizzaBuilder;

    public setBuilder(builder: PizzaBuilder): void {
        this.builder = builder;
    }

    public buildMargheritaPizza(): void {
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

    public buildPepperoniPizza(): void {
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