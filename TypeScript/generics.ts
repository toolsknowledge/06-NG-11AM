/*
    function fun_one<a,b>(arg1:a,arg2:b):void{
        console.log(arg1, arg2);
    };
    fun_one<string,string>("Hello_1","Hello_2");
    fun_one<number,number>(100,200);
    fun_one<boolean,boolean>(true,true);
*/


/*
    function fun_one<x>(arg1:string,arg2:x):void{
        console.log(arg1, arg2);
    };
    fun_one<string>("Hello_1","Hello_2");
    fun_one<number>("Hello_2",100);
    fun_one<boolean>("Hello_1",true);
    fun_one<any>("Hello_1","Hello_2");
*/


/*
    class class_one<x,y,z>{
        var_one:x;
        var_two:y;
        var_three:z;
        constructor(arg1:x,arg2:y,arg3:z){
            this.var_one = arg1;
            this.var_two = arg2;
            this.var_three = arg3;
        }
    }

    let obj1:class_one<string,string,string> = new class_one("hello_1","hello_2","hello_3");
    console.log( obj1.var_one, obj1.var_two, obj1.var_three );

    let obj2:class_one<number,number,number> = new class_one(100,200,300);
    console.log( obj2.var_one, obj2.var_two, obj2.var_three );

    let obj3:class_one<boolean,boolean,boolean> = new class_one(true,true,true);
    console.log( obj3.var_one, obj3.var_two, obj3.var_three );
*/


interface interface1<x,y,z>{
    var_one:x;
    var_two:y;
    var_three:z;
}

let obj1:interface1<string,string,string> = {
    var_one : "Hello_1",
    var_two : "Hello_2",
    var_three : "Hello_3"
};
console.log( obj1.var_one, obj1.var_two, obj1.var_three );

let obj2:interface1<number,number,number> = {
    var_one : 100,
    var_two : 200,
    var_three : 300
};
console.log( obj2.var_one, obj2.var_two, obj2.var_three );


class class_one implements interface1<any,any,any>{
    var_one = "Hello_1";
    var_two = "Hello_2";
    var_three = "Hello_3";   
}
let obj3:class_one = new class_one();
console.log( obj3.var_one, obj3.var_two, obj3.var_three );


























