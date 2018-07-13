import { PizzaIngredientFactory } from './PizzaIngredientFactory';
import { Cheese } from '../Ingredients/Cheese/Cheese';
import { MozzarellaCheese } from '../Ingredients/Cheese/MozzarellaCheese';
import { Clams } from '../Ingredients/Clams/Clams';
import { FreshClams } from '../Ingredients/Clams/FreshClams';
import { Dough } from '../Ingredients/Dough/Dough';
import { ThickCrustDough } from '../Ingredients/Dough/ThickCrustDough';
import { Sauce } from '../Ingredients/Sauce/Sauce';
import { MarinaraSauce } from '../Ingredients/Sauce/MarinaraSauce';

class ChicagoPizzaIngredientFactory extends PizzaIngredientFactory {

    createCheese(): Cheese {
        return new MozzarellaCheese();
    }

    createClams(): Clams {
        return new FreshClams();
    }

    createDough(): Dough {
        return new ThickCrustDough();
    }

    createSauce(): Sauce {
        return new MarinaraSauce();
    }
}

export { ChicagoPizzaIngredientFactory };
