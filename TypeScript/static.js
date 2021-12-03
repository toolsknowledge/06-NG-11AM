//static
//we can access static members directly by "class" names
//we can't access static members by "class" objects
//we can't initilize static members by "constructor"
/*
    class class_one{
        static var_one:string;
        constructor(){
            this.var_one = "Hello_1";
        }
    }
*/
/*
    class class_one{
        static var_one:string = "Hello_1";
        static fun_one():string{
            return "Hello_2";
        }
    };
    let obj:class_one = new class_one();
    obj.var_one;            //Property 'var_one' does not exist on type 'class_one'. Did you mean to access the static member 'class_one.var_one' instead?
    obj.fun_one();          //Property 'fun_one' does not exist on type 'class_one'. Did you mean to access the static member 'class_one.fun_one' instead?
*/
/*
    class class_one{
        static var_one:string = "Hello_1";
        static fun_one():string{
            return "Hello_2";
        }
    };
    console.log( class_one.var_one, class_one.fun_one() );
    //Hello_1 Hello_2
*/
var class_one = /** @class */ (function () {
    function class_one() {
    }
    class_one.fun_one = function () {
        return new class_one();
    };
    class_one.prototype.fun_two = function () {
        return "Hello";
    };
    return class_one;
}());
console.log(class_one.fun_one().fun_two());
