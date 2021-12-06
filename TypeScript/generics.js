/*
    function fun_one<a,b>(arg1:a,arg2:b):void{
        console.log(arg1, arg2);
    };
    fun_one<string,string>("Hello_1","Hello_2");
    fun_one<number,number>(100,200);
    fun_one<boolean,boolean>(true,true);
*/
var obj1 = {
    var_one: "Hello_1",
    var_two: "Hello_2",
    var_three: "Hello_3"
};
console.log(obj1.var_one, obj1.var_two, obj1.var_three);
var obj2 = {
    var_one: 100,
    var_two: 200,
    var_three: 300
};
console.log(obj2.var_one, obj2.var_two, obj2.var_three);
var class_one = /** @class */ (function () {
    function class_one() {
        this.var_one = "Hello_1";
        this.var_two = "Hello_2";
        this.var_three = "Hello_3";
    }
    return class_one;
}());
var obj3 = new class_one();
console.log(obj3.var_one, obj3.var_two, obj3.var_three);
