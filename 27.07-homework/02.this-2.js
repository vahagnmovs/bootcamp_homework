const obj = {}

obj.value = 0;

obj.setSum = function (value) {
    this.value = value;
}

obj.add = function (value) {
    this.value += value;
}

obj.getSum = function () {
    console.log(this.value)
}

obj.setSum(10);
obj.add(20);
console.log(obj.getSum())