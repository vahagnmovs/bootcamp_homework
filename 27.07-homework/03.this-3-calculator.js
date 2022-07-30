function Calculator(startingValue) {
  startingValue = 0;
  this.startingValue = startingValue;
  this.plus = function (value) {
    return this.startingValue += value;
  }
  this.minus = function (value) {
    return this.startingValue -= value;
  }
  this.multiply = function (value) {
    return this.startingValue *= value;
  }
  this.divide = function (value) {
    return this.startingValue /= value;
  }
  this.getResult = function () {
    return this.startingValue;
  }
}

let calculator = new Calculator(0);
calculator.plus(7)
calculator.divide(7)
console.log(calculator.startingValue)