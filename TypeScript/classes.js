//class
//collection of "variables" and "functions" called as "class"
//we will create the class by using "class" keyword
//we will create object to the class with the help of "new" keyword
//typescript supports following modifiers
//1) public
//2) private
//3) protected
//recomended modifier for variables is "private".
//recomended modifier for functions is "public"
//we will refer the current class members with the help of "this" keyword
//we will define constructor with the help of "constructor" keyword
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*
    class class_one{
        var_one:string = "Hello_1";
        var_two:string = "Hello_2";
        var_three:string = "Hello_3";
    }
    let obj:class_one = new class_one();
    console.log( obj.var_one, obj.var_two, obj.var_three );
*/
/*
    class class_one{
        var_one:string;
        var_two:string;
        var_three:string;
        constructor(arg1:string,arg2:string,arg3:string){
            this.var_one = arg1;
            this.var_two = arg2;
            this.var_three = arg3;
        };
    }
    let obj1:class_one = new class_one("hello_1","hello_2","hello_3");
    console.log( obj1.var_one, obj1.var_two, obj1.var_three );
*/
/*
    class class_one{
        fun_one():string{
            return "hello_1";
        }

        fun_two():string{
            return "hello_2";
        }

        fun_three():string{
            return "hello_3";
        }
    };

    let obj:class_one = new class_one();
    console.log( obj.fun_one(), obj.fun_two(), obj.fun_three() );
*/
/*
    class class_one{
        private var_one:string;
        constructor(arg1:string){
            this.var_one = arg1;
        }
        public fun_one():string{
            return this.var_one;
        }
    }

    let obj:class_one = new class_one("Hello");
    console.log(obj.fun_one())
*/
//inheritance
//getting the data from "parent" class to "child" class called as inheritance
//we will implement the inheritance with the help of "extends" keyword
//we have five types of inheritance
//1) single level inheritance
//2) multi level inheritance
//3) multiple inheritance
//4) hirarichal inheritance
//5) hybrid inheritance
/*
    class Parent{
        var_one:string = "Hello_1";
    }

    class Child extends Parent{
        var_two:string = "Hello_2";
    }
    let obj1:Child = new Child();
    console.log( obj1.var_one, obj1.var_two );

    let obj2:Parent = new Parent();
    console.log(obj2.var_one);

    let obj3:Parent = new Child();
    console.log( obj3.var_one );


    //let obj4:Child = new Parent();
*/
/*
    class Parent{
        var_one:string = "Hello_1";
        fun_one():string{
            return this.var_one;
        };
    };

    class Child extends Parent{
        var_two:string = "Hello_2";
        fun_two():string{
            return this.var_two;
        };
    };

    let obj:Child = new Child();
    console.log( obj.fun_one(), obj.fun_two() );
*/
/*
    class Parent{
        var_one:string = "Hello_1";
    }

    class Child extends Parent{
        var_two:string = "Hello_2";
    }

    class Subchild extends Child{
        var_three:string = "Hello_3";
    }

    let obj1:Parent = new Parent();
    console.log( obj1.var_one );

    let obj2:Child = new Child();
    console.log( obj2.var_one, obj2.var_two );

    let obj3:Subchild = new Subchild();
    console.log( obj3.var_one, obj3.var_two, obj3.var_three );
*/
/*
    class Parent1{}

    class Parent2{}

    class Child extends Parent1,Parent2{}

    //multiple inheritance not supported by typescript
*/
var Parent = /** @class */ (function () {
    function Parent() {
        this.var_one = "Hello_1";
    }
    return Parent;
}());
;
var Child1 = /** @class */ (function (_super) {
    __extends(Child1, _super);
    function Child1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.var_two = "Hello_2";
        return _this;
    }
    return Child1;
}(Parent));
;
var Child2 = /** @class */ (function (_super) {
    __extends(Child2, _super);
    function Child2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.var_two = "Hello_3";
        return _this;
    }
    return Child2;
}(Parent));
var Child3 = /** @class */ (function (_super) {
    __extends(Child3, _super);
    function Child3() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.var_two = "Hello_4";
        return _this;
    }
    return Child3;
}(Parent));
var obj1 = new Parent();
console.log(obj1.var_one);
var obj2 = new Child1();
console.log(obj2.var_one, obj2.var_two);
var obj3 = new Child2();
console.log(obj3.var_one, obj3.var_two);
var obj4 = new Child3();
console.log(obj4.var_one, obj4.var_two);
