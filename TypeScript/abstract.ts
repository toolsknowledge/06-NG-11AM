//abstract
//when ever we know the partial implementations then we will choose abstract classes

/*
    abstract class class_one{
        fun_one():any{
            return "Hello_1";
        }

        abstract fun_two():any;
    };

    class class_two extends class_one{
        fun_two():any{
            return "Hello_2";
        }
    }

    let obj:class_two = new class_two();
    console.log( obj.fun_one(), obj.fun_two() );
    //Hello_1 Hello_2
*/


/*
    abstract class class_one{
        abstract fun_one():string;
    };

    abstract class class_two extends class_one{
        fun_one():string{
            return "Hello_1";
        }
        abstract fun_two():string;
    }

    abstract class class_three extends class_two{
        fun_two():string{
            return "Hello_2";
        }

        abstract fun_three():string;
    }

    class class_four extends class_three{
        fun_three():string{
            return "Hello_3";
        }
    }

    let obj:class_four = new class_four();
    console.log( obj.fun_one(), obj.fun_two(), obj.fun_three() );
*/


interface interface1{
    fun_one():any;
};

interface interface2 extends interface1{
    fun_two():any;
}

abstract class class_one implements interface2{
    fun_one():any{
        return "Hello_1";
    }
    fun_two():any{
        return "Hello_2";
    }
    abstract fun_three():any;
}

class class_two extends class_one{
    fun_three():any{
        return "Hello_3";
    }
}

let obj:class_two = new class_two();
console.log( obj.fun_one(), obj.fun_two(), obj.fun_three() );















































