//readonly
//we can only read the data
//we can't modify the data
class class_one{
    readonly var_one:string = "Hello";
}

let obj:class_one = new class_one();
console.log( obj.var_one );

//obj.var_one = "Welcome";