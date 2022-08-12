// TASK 6

class TV {
    constructor(brand) {
        this._brand = brand;
        this._channel = 1;
        this._volume = 50;
        this.resetTV = function () {
            this._channel = 1;
            this._volume = 50;
        }
    }

    increaseVolume() {
        if (this._volume === 100) {
            console.log(this._volume);
        } else {
            this._volume += 1;
        }
    }

    decreaseVolume() {
        if (this._volume === 0) {
            console.log(this._volume);
        } else {
            this._volume -= 1;
        }
    }

    setChannel(channel) {
        if (channel > 50) {
            console.log(this._channel)
        } else {
            this._channel = channel;
        }
    }

    info() {
        console.log(`${this._brand} at channel ${this._channel}, volume ${this._volume}`)
    }
}


const myTv = new TV('Sony');

console.log(myTv);

myTv.increaseVolume();
console.log(myTv)
myTv.decreaseVolume();
myTv.decreaseVolume();
myTv.resetTV();
console.log(myTv)
myTv.info()
myTv.setChannel(45)
myTv.increaseVolume();
myTv.info()