import { PizzaIngredientFactory } from './Factories/PizzaIngredientFactory';
import { ChicagoPizzaIngredientFactory } from './Factories/ChicagoPizzaIngredientFactory';
import { NYPizzaIngredientFactory } from './Factories/NYPizzaIngredientFactory';

import { Cheese } from './Ingredients/Cheese/Cheese';
import { Clams } from './Ingredients/Clams/Clams';
import { Dough } from './Ingredients/Dough/Dough';
import { Sauce } from './Ingredients/Sauce/Sauce';

function main() {
    let pizzaIngredientFactory: PizzaIngredientFactory;
    let cheese: Cheese;
    let clams: Clams;
    let dough: Dough;
    let sauce: Sauce;

    pizzaIngredientFactory = new ChicagoPizzaIngredientFactory();
    cheese = pizzaIngredientFactory.createCheese();
    clams = pizzaIngredientFactory.createClams();
    dough = pizzaIngredientFactory.createDough();
    sauce = pizzaIngredientFactory.createSauce();
    cheese.getType();
    clams.getType();
    dough.getType();
    sauce.getType();

    pizzaIngredientFactory = new NYPizzaIngredientFactory();
    cheese = pizzaIngredientFactory.createCheese();
    clams = pizzaIngredientFactory.createClams();
    dough = pizzaIngredientFactory.createDough();
    sauce = pizzaIngredientFactory.createSauce();
    cheese.getType();
    clams.getType();
    dough.getType();
    sauce.getType();
}

main();
