var Transactions;
(function (Transactions) {
    Transactions.acc_bal = 100000;
    Transactions.credit_limit = 500000;
    Transactions.debit = 50000;
})(Transactions || (Transactions = {}));
var Functions;
(function (Functions) {
    function fun_one() {
        return "Hello_1";
    }
    Functions.fun_one = fun_one;
    function fun_two() {
        return "Hello_2";
    }
    Functions.fun_two = fun_two;
    function fun_three() {
        return "Hello_3";
    }
    Functions.fun_three = fun_three;
})(Functions || (Functions = {}));
;
var Classes;
(function (Classes) {
    var class_one = /** @class */ (function () {
        function class_one(arg1, arg2, arg3) {
            this.var_one = arg1;
            this.var_two = arg2;
            this.var_three = arg3;
        }
        return class_one;
    }());
    Classes.class_one = class_one;
})(Classes || (Classes = {}));
///<reference path="file1.ts" />
console.log(Transactions.acc_bal, Transactions.credit_limit, Transactions.debit);
console.log(Functions.fun_one(), Functions.fun_two(), Functions.fun_three());
var obj = new Classes.class_one("Hello_1", "Hello_2", "Hello_3");
console.log(obj.var_one, obj.var_two, obj.var_three);
var class_one = /** @class */ (function () {
    function class_one() {
        this.var_one = "hello_1";
        this.var_two = "hello_2";
        this.var_three = "hello_3";
    }
    return class_one;
}());
var obj1 = new class_one();
console.log(obj1.var_one, obj1.var_two, obj1.var_three);
