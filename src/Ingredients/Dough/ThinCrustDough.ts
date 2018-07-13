import { Dough } from './Dough';

class ThinCrustDough extends Dough {

    getType(): void {
        console.log('ThinCrustDough');
    }
}

export { ThinCrustDough };
