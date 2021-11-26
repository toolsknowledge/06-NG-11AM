/*
    class
    *****
        - collection of "variables" and "functions" called as class

        - we will define the classes by using "class" keyword.

        - we will create object to the class by using "new" keyword

        - we have following modifiers

            1) public

            2) private

            3) protected

        - recomended modifier for variables is "private".

        - recomended modifier for functions is "public"

        - we will define constructor by using "constructor" keyword
*/

/*
    class class_one{
        var_one:string = "Hello_1";
        var_two:string = "Hello_2";
        var_three:string = "Hello_3";
    };
    let obj:class_one = new class_one();
    console.log( obj.var_one, obj.var_two, obj.var_three );             //Hello_1 Hello_2 Hello_3
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
        }
    };
    let obj1:class_one = new class_one("Hello_1","Hello_2","Hello_3");
    console.log( obj1.var_one, obj1.var_two, obj1.var_three );

    let obj2:class_one = new class_one("Welcome_1","Welcome_2","Welcome_3");
    console.log( obj2.var_one, obj2.var_two, obj2.var_three );
*/


/*
    class class_one{
        private sub_one:string;
        private sub_two:string;
        private sub_three:string;
        constructor(){
            this.sub_one = "Angular13";
            this.sub_two = "NodeJS";
            this.sub_three = "MongoDB";
        }
        public getSubOne():string{
            return this.sub_one;
        }
        public getSubTwo():string{
            return this.sub_two;
        }
        public getSubThree():string{
            return this.sub_three;
        }
    }
    let obj:class_one = new class_one();
    console.log( obj.getSubOne(), obj.getSubTwo(), obj.getSubThree() );
    //Angular13 NodeJS MongoDB
*/


/*
class class_one{
    constructor(public arg1:any, public arg2:any, public arg3:any){}
};
let obj1:class_one = new class_one("Hello_1","Hello_2","Hello_3");
console.log( obj1.arg1, obj1.arg2, obj1.arg3 );

let obj2:class_one = new class_one("Welcome_1","Welcome_2","Welcome_3");
console.log( obj2.arg1, obj2.arg2, obj2.arg3 );
*/



/*
class class_one{
    constructor(public arg1:any){}
};

class class_two{
    var_one:string = "Hello";
};

let obj:class_one = new class_one( new class_two() );
console.log( obj.arg1.var_one );                //Hello
*/


class class_one{
    constructor(public obj1:any,public obj2:any,public obj3:any){}
};

class class_two{
    var_one:string = "i am from class two";
};

class class_three{
    var_one:string = "i am from class three";
};

class class_four{
    var_one:string = "i am from class four";
};

let obj:class_one = new class_one(new class_two(), new class_three(), new class_four());

console.log(
    obj.obj1.var_one
);

console.log(
    obj.obj2.var_one
);

console.log(
    obj.obj3.var_one
);



















































