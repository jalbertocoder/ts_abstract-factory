import { PizzaIngredientFactory } from './PizzaIngredientFactory';
import { Cheese } from '../Ingredients/Cheese/Cheese';
import { ReggianoCheese } from '../Ingredients/Cheese/ReggianoCheese';
import { Clams } from '../Ingredients/Clams/Clams';
import { FrozenClams } from '../Ingredients/Clams/FrozenClams';
import { Dough } from '../Ingredients/Dough/Dough';
import { ThinCrustDough } from '../Ingredients/Dough/ThinCrustDough';
import { Sauce } from '../Ingredients/Sauce/Sauce';
import { PlumTomatoSauce } from '../Ingredients/Sauce/PlumTomatoSauce';

class NYPizzaIngredientFactory extends PizzaIngredientFactory {

    createCheese(): Cheese {
        return new ReggianoCheese();
    }

    createClams(): Clams {
        return new FrozenClams();
    }

    createDough(): Dough {
        return new ThinCrustDough();
    }

    createSauce(): Sauce {
        return new PlumTomatoSauce();
    }
}

export { NYPizzaIngredientFactory };
