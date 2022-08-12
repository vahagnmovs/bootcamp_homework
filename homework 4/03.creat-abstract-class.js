//TASK 3

class Abstract {
    constructor() {
        if (this.constructor.name === 'Abstract') {
            throw new Error('Abstract class cannot be instanced');
        }
    }
}

const extendedFromAbstract = new Abstract();