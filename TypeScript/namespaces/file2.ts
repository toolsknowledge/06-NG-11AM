///<reference path="file1.ts" />





console.log(
    Transactions.acc_bal,
    Transactions.credit_limit,
    Transactions.debit
);

console.log(
    Functions.fun_one(),
    Functions.fun_two(),
    Functions.fun_three()
);


let obj:Classes.class_one = new Classes.class_one("Hello_1","Hello_2","Hello_3");
console.log( obj.var_one, obj.var_two, obj.var_three );


class class_one implements Example.Interface1{
    var_one:string = "hello_1";
    var_two:string = "hello_2";
    var_three:string = "hello_3";
}
let obj1:class_one = new class_one();
console.log( obj1.var_one, obj1.var_two, obj1.var_three );




