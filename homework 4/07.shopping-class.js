// TASK 7

class ShoppingCart {
    constructor() {
        this._shoppingCart = [];
        this._giftCart = [];
        this._points = 0;
    }

    addProduct(product) {
        for (let idx = 0; idx < this._shoppingCart.length; idx++) {
            const checkSameItem = this._shoppingCart[idx]
            if (product._barcode === checkSameItem._barcode) {
                this._points++;
            }
            if (this._points % 3 === 0) {
                this._giftCart.push(product);
                break;
            }
        }
        this._shoppingCart.push(product);
    }

    removeProduct(product) {
        if (this._shoppingCart.length === 0) {
            throw new Error('Your shopping cart is empty')
        }
        let currentItem = this._shoppingCart.find((cartItem) => cartItem._barcode === product._barcode)
        if (currentItem) {
            for (let idx = 0; idx < this._shoppingCart.length; idx++) {
                const itemToDelete = this._shoppingCart[idx];
                if (currentItem._barcode === itemToDelete._barcode) {
                    this._shoppingCart = this._shoppingCart.slice(0, idx).concat(this._shoppingCart.slice(idx + 1, this._shoppingCart.length))
                    break;
                }
            }
        } else {
            throw new Error('There is no such an item in your shopping cart')
        }
    }

    totalPrice() {
        let totalPrice = this._shoppingCart.reduce((accum, currentValue) => accum + currentValue._price, 0);
        if (this._giftCart.length !== 0) {
            return totalPrice
        }
        if (this._shoppingCart.length >= 5) {
            totalPrice *= (90 / 100);
        }
        return totalPrice;
    }

    ship() {
        return this._shoppingCart.concat(this._giftCart)
    }
}

class Product {
    constructor(name, type, price, barcode) {
        this._name = name;
        this._type = type;
        this._price = price;
        this._barcode = barcode;
    }
}

const shoppingCart = new ShoppingCart()
const jeans = new Product('Levis', 'pants', 60000, 1111)
shoppingCart.addProduct(jeans)
shoppingCart.addProduct(jeans)
shoppingCart.addProduct(jeans)
shoppingCart.addProduct(jeans)
shoppingCart.addProduct(jeans)
shoppingCart.addProduct(jeans)
shoppingCart.addProduct(jeans)
shoppingCart.addProduct(jeans)
shoppingCart.addProduct(jeans)
shoppingCart.addProduct(jeans)
shoppingCart.addProduct(jeans)
shoppingCart.addProduct(jeans)
// console.log(shoppingCart);
console.log(shoppingCart.totalPrice())
//
// shoppingCart.removeProduct(jeans)
//
// console.log(shoppingCart);
//
console.log(shoppingCart.totalPrice())

console.log(shoppingCart);