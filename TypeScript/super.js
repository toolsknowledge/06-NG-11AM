//super
//child class will call the parent class members with the help of super keyword
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
    class Parent{
        constructor(public arg1:any){}
    };

    class Child extends Parent{
        constructor(public arg1:any,public arg2:any){
            super(arg1);
        }
    };

    class Subchild extends Child{
        constructor(public arg1:any,public arg2:any,public arg3:any){
            super(arg1,arg2);
        }
    };

    let obj:Subchild = new Subchild("Hello_1","Hello_2","Hello_3");
    console.log( obj.arg1, obj.arg2, obj.arg3 );
    //Hello_1 Hello_2 Hello_3
*/
var Parent = /** @class */ (function () {
    function Parent() {
        this.var_one = "Hello_2";
    }
    Parent.prototype.fun_one = function () {
        return "Hello_2";
    };
    return Parent;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Child.prototype.fun_two = function () {
        return _super.prototype.fun_one.call(this);
    };
    return Child;
}(Parent));
;
var obj = new Child();
console.log(obj.fun_two());
