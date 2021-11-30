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

/*
class Parent{
    var_one:string = "Hello_1";
};

class Child1 extends Parent{
    var_two:string = "Hello_2";
};

class Child2 extends Parent{
    var_two:string = "Hello_3";
}

class Child3 extends Parent{
    var_two:string = "Hello_4";
}

let obj1:Parent = new Parent();
console.log( obj1.var_one );

let obj2:Child1 = new Child1();
console.log( obj2.var_one, obj2.var_two );

let obj3:Child2 = new Child2();
console.log( obj3.var_one, obj3.var_two );

let obj4:Child3 = new Child3();
console.log(obj4.var_one, obj4.var_two );
*/


class Parent{}

class Child1 extends Parent{}

class Child2 extends Parent{}

class Subchild extends Child1,Child2{}
//hybrid inheritance not supported by typescript






























































































































