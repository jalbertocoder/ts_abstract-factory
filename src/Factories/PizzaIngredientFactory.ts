import { Cheese } from '../Ingredients/Cheese/Cheese';
import { Clams } from '../Ingredients/Clams/Clams';
import { Dough } from '../Ingredients/Dough/Dough';
import { Sauce } from '../Ingredients/Sauce/Sauce';

abstract class PizzaIngredientFactory {
    abstract createCheese(): Cheese;
    abstract createClams(): Clams;
    abstract createDough(): Dough;
    abstract createSauce(): Sauce;
}

export { PizzaIngredientFactory };
