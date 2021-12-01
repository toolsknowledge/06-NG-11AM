//when ever we know the "declarations", but we dont know "implementations" then we will choose "interfaces"
//we will declare interfaces by using "interface" keyword
//implentations provided by either "classes" or "json"

/*
    interface interface1{
        var_one:string;
        var_two:string;
        var_three:string;
    };
    let obj1:interface1 = {
        var_one : "Angular13",
        var_two : "NodeJS",
        var_three : "MongoDB"
    }
    console.log( obj1.var_one, obj1.var_two, obj1.var_three );

    let obj2:interface1 = {
        var_one : "ReactJS",
        var_two : "NodeJS",
        var_three : "MongoDB"
    };
    console.log( obj2.var_one, obj2.var_two, obj2.var_three );

    class class_one implements interface1{
        var_one:string = "VueJS";
        var_two:string = "NodeJS";
        var_three:string = "MongoDB"
    }
    let obj:class_one = new class_one();
    console.log( obj.var_one, obj.var_two, obj.var_three );
*/


/*
    interface interface1{
        fun_one():void;
        fun_two():void;
        fun_three():void;
    }


    //classes or json
    class class_one implements interface1{
        fun_one():void{
            console.log("Hello_1");
        };
        fun_two():void{
            console.log("Hello_2");
        };
        fun_three():void{
            console.log("Hello_3");
        }
    }
    let obj1:class_one = new class_one();
    obj1.fun_one(), obj1.fun_two(), obj1.fun_three();



    let obj2:interface1 = {
        fun_one : ():void=>console.log("Hello_1"),
        fun_two : ():void=>console.log("Hello_2"),
        fun_three : ():void=>console.log("Hello_3")
    }

    obj2.fun_one();
    obj2.fun_two();
    obj2.fun_three();
*/

/*
    interface interface1{
        var_one:string;
    };
    interface interface2 extends interface1{
        var_two:string;   
    };
    let obj:interface2 = {
        var_one : "Hello_1",
        var_two : "Hello_2"
    };
    console.log( obj.var_one, obj.var_two );
*/
/*
    interface interface1{
        var_one:string;
    };

    interface interface2 extends interface1{
        var_two:string;
    };

    interface interface3 extends interface2{
        var_three:string;
    };

    let obj:interface3 = {
        var_one : "Hello_1",
        var_two : "Hello_2",
        var_three : "Hello_3"
    };
    console.log( obj.var_one, obj.var_two, obj.var_three );
*/

/*
interface Parent1{
    var_one:string;
};
interface Parent2{
    var_two:string;
};
interface Child extends Parent1,Parent2{
    var_three:string;
};
let obj:Child = {
    var_one : "Hello_1",
    var_two : "Hello_2",
    var_three : "Hello_3"
};
console.log( obj.var_one, obj.var_two, obj.var_three );
*/


/*
interface Parent{
    var_one:string;
}

interface Child1 extends Parent{
    var_two:string;
};

interface Child2 extends Parent{
    var_two:string;
};

interface Child3 extends Parent{
    var_two:string;
};

let obj1:Child1 = {
    var_one : "Hello_1",
    var_two : "Hello_2"
};
console.log( obj1.var_one, obj1.var_two );


let obj2:Child2 = {
    var_one : "Hello_3",
    var_two : "Hello_4"
};
console.log( obj2.var_one, obj2.var_two );


let obj3:Child3 = {
    var_one : "Hello_5",
    var_two : "Hello_6"
}
console.log( obj3.var_one, obj3.var_two );
*/

interface Parent{
    var_one:string;
}

interface Child1 extends Parent{
    var_two:string;
};

interface Child2 extends Parent{
    var_three:string;
};

interface SubChild extends Child1,Child2{
    var_four:string;
};

class class_one implements SubChild{
    var_one:string = "Hello_1";
    var_two:string = "Hello_2";
    var_three:string = "Hello_3";
    var_four:string = "Hello_4";
}

let obj:class_one = new class_one();
console.log( obj.var_one, obj.var_two, obj.var_three, obj.var_four );










































































































