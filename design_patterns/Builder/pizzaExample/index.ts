import { CustomPizzaBuilder } from './CustomPizzaBuilder';
import { PizzaDirector } from '../PizzaDirector';
import { Pizza } from '../Pizza';

console.log("Client: Building a custom pizza with CustomPizzaBuilder:");
const customBuilder = new CustomPizzaBuilder();

const customPizza: Pizza = customBuilder
    .setDough("Thick Crust")
    .setSauce("BBQ")
    .addCheese("Cheddar")
    .addTopping("Chicken")
    .addTopping("Onions")
    .bakePizza()
    .getProduct();

customPizza.listParts();

console.log("Client: Building a Margherita pizza with PizzaDirector:");
const director = new PizzaDirector();
const margaritaBuilder = new CustomPizzaBuilder();
director.setBuilder(margaritaBuilder);
director.buildMargheritaPizza();
const margheritaPizza: Pizza = margaritaBuilder.getProduct();
margheritaPizza.listParts();


