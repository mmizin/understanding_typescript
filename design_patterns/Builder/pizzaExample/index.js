"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CustomPizzaBuilder_1 = require("./CustomPizzaBuilder");
const PizzaDirector_1 = require("../PizzaDirector");
console.log("Client: Building a custom pizza with CustomPizzaBuilder:");
const customBuilder = new CustomPizzaBuilder_1.CustomPizzaBuilder();
const customPizza = customBuilder
    .setDough("Thick Crust")
    .setSauce("BBQ")
    .addCheese("Cheddar")
    .addTopping("Chicken")
    .addTopping("Onions")
    .bakePizza()
    .getProduct();
customPizza.listParts();
console.log("Client: Building a Margherita pizza with PizzaDirector:");
const director = new PizzaDirector_1.PizzaDirector();
const margaritaBuilder = new CustomPizzaBuilder_1.CustomPizzaBuilder();
director.setBuilder(margaritaBuilder);
director.buildMargheritaPizza();
const margheritaPizza = margaritaBuilder.getProduct();
margheritaPizza.listParts();
