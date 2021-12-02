/*
    Modifiers
    *********
    1) public

    2) private

    3) protected

    public
    ++++++
    => public modifier applicable to "variables", "functions" and "constructor"

    => public modifier not applicable to "class" level

    => public members by default availble to "child" classes

    => we can access "public" members by using class "objects"
*/

/*
    public class class_one{};
    //'public' modifier cannot appear on a module or namespace element.
*/


/*
    class class_one{
        public var_one:string = "Hello_1";
        public constructor(){

        };
        public fun_one():string{
            return "Hello_2";
        }
    };
    let obj:class_one = new class_one();
    console.log( obj.var_one, obj.fun_one() );
    //Hello_1 Hello_2
*/
/*
    class class_one{
        public var_one:string = "Hello_1";

        public fun_one():string{
            return "Hello_2";
        }
    }

    class class_two extends class_one{}

    let obj:class_two = new class_two();
    console.log( obj.var_one, obj.fun_one() );
*/



//private
//1) private modifier not applicable in class level

/*
    private class class_one{}
    //'private' modifier cannot appear on a module or namespace element.
*/


//2) private modifier applicable to variable, functions and constructor also
/*
class class_one{
    private var_one:string = "Hello_1";

    private constructor(){}

    private fun_one():string{
        return "Hello_2";
    }
};
*/


//3) we can't create object to the private constructor
/*
    class class_one{
        private constructor(){}
    }

    let obj:class_one = new class_one();

    //Constructor of class 'class_one' is private and only accessible within the class declaration.
*/


/*
    //4) we can access private members with in the class by using "this" keyword
    class class_one{
        private var_one:string;
        constructor(){
            this.var_one = "Hello_1";
        }
    }
*/


//5) we can't access private members by using "class objects"

/*
    class class_one{
        private var_one:string = "Hello_1";
    };

    let obj:class_one = new class_one();
    obj.var_one;
*/

/*
    //6) private members won't accessable to child classes
    class class_one{
        private var_one:string = "Hello_1";
    };

    class class_two extends class_one{

    };

    let obj:class_two = new class_two();
    obj.var_one;
    //Property 'var_one' is private and only accessible within class 'class_one'.
*/


//protected
//1) protected keyword not applicable to class level

/*
    protected class class_one{}
*/

/*
    //2) protected modifier applicable to variables, functions and constructor also
    class class_one{
        protected var_one:string = "Hello_1";

        protected constructor(){

        };

        protected fun_one():string{
            return "Hello_2";
        }
    };
*/


/*
    //3) we can't access protected members by using class objects
    class class_one{
        protected var_one:string = "Hello_1";
    }

    let obj:class_one = new class_one();
    obj.var_one;

    //Property 'var_one' is protected and only accessible within class 'class_one' and its subclasses.
*/


/*
    //4) we can't create object to protected constructor
    class class_one{
        protected constructor(){}
    };
    let obj:class_one = new class_one();
    //Constructor of class 'class_one' is protected and only accessible within the class declaration.
*/




//5) protected members avialable to child classes
class class_one{
    protected var_one:string = "hello_1";
}

class class_two extends class_one{
    public var_two:string = this.var_one;
}
let obj:class_two = new class_two();
console.log( obj.var_two );


































































































































































































































