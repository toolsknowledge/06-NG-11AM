//readonly
//we can only read the data
//we can't modify the data
var class_one = /** @class */ (function () {
    function class_one() {
        this.var_one = "Hello";
    }
    return class_one;
}());
var obj = new class_one();
console.log(obj.var_one);
//obj.var_one = "Welcome";
