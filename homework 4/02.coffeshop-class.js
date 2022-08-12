// TASK 2

function CoffeeShop(name) {
    this.name = name;
    this.menu = [{
        'name': 'Pasta',
        'type': 'food',
        'price': 2500
    }, {
        'name': 'Cappuccino',
        'type': 'drink',
        'price': 3200
    }]
    this.orders = [];
    this.ordersTotalPrice = 0;

    this.addOrder = function (orderedItemName) {
        const currentItem = this.menu.find((menuItem) => menuItem.name === orderedItemName)
        if (currentItem) {
            this.orders.push(orderedItemName);
            this.ordersTotalPrice += currentItem.price;
        } else {
            throw new Error('Sorry, this item is currently unavailable')
        }
    }

    this.fullFillOrder = function () {
        if (this.orders.length !== 0) {
            console.log(`The ${this.orders[0]} is ready!`)
            this.orders.shift()
        } else {
            console.log('All orders have been fulfilled!')
        }
    }

    this.listOrders = function () {
        console.log(this.orders);
    }

    this.dueAmount = function () {
        return this.orders.map((orderedItemName) => {
            const currentItem = this.menu.find((menuItem) => menuItem.name === orderedItemName)
            return currentItem.price;
        }).reduce((accum, currentValue) => accum + currentValue, 0)
    }

    this.cheapestItem = function () {
        let cheapestItem = this.menu[0];
        for (let i = 1; i < this.menu.length; i++) {
            if (this.menu[i].price < cheapestItem.price) {
                cheapestItem = this.menu[i]
            }
        }
        return cheapestItem.name;
    }

    this.drinksOnly = function () {
        let drinksNames = [];
        let drinks = this.menu.filter((menuItem) => {
            if (menuItem.type === 'drink')
                drinksNames.push(menuItem.name)
        })
        return drinksNames;
    }

    this.foodOnly = function () {
        let foodNames = [];
        let food = this.menu.filter((menuItem) => {
            if (menuItem.type === 'food')
                foodNames.push(menuItem.name)
        })
        return foodNames;
    }
}

const starbucks = new CoffeeShop('starbucks');
starbucks.addOrder('Pasta');
starbucks.addOrder('Cappuccino')
console.log(starbucks.drinksOnly())
console.log(starbucks.foodOnly())
starbucks.fullFillOrder();

console.log(starbucks.dueAmount());
starbucks.listOrders();
console.log(starbucks.cheapestItem());