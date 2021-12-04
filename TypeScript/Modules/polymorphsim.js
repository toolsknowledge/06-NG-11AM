//polymorphism
//behaves like many called as polymorphism
//1) function overriding
//2) function overloading
//function overriding
//overriding parent class functionality with child class functionality called as function overriding
/*
    class Parent{
        Earn():any{
            return "Parent Earned 1cr";
        }
    }

    class Child extends Parent{
        Earn():any{
            return "Child Earned 10cr";
        }
    }

    let obj:Child = new Child();
    console.log( obj.Earn() );

    //Child Earned 10cr
*/
/*
    class Parent{
        dbFun():string{
            return "oracle connection";
        };
    };

    class Child extends Parent{
        dbFun():string{
            return "MongoDB Connection"
        }
    };

    class SubChild extends Child{
        dbFun():string{
            return "RabbitMQ Connection";
        }
    };

    let obj:SubChild = new SubChild();
    console.log( obj.dbFun() );                 //RabbitMQ Connection
*/
var class_one = /** @class */ (function () {
    function class_one() {
    }
    class_one.prototype.fun_one = function (arg1, arg2) {
        console.log(arg1 + arg2);
    };
    return class_one;
}());
;
var obj = new class_one();
obj.fun_one(10, 10); //20
obj.fun_one("10", "10"); //1010
obj.fun_one("Hello_1", "Hello_2"); //
