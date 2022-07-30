const obj = {};

obj.name = '';
obj.setName = function (name) {
    this.name = name;
}
obj.getName = function () {
    console.log(this.name)
}

obj.setName("John")
console.log(obj.getName())
console.log(obj)