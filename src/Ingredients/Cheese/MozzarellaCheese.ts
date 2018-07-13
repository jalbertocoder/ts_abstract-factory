import { Cheese } from './Cheese';

class MozzarellaCheese extends Cheese {

    getType(): void {
        console.log('MozzarellaCheese');
    }
}

export { MozzarellaCheese };
