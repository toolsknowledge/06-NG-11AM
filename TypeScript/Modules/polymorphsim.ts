



//polymorphism

//behaves like many called as polymorphism

//1) function overriding

//2) function overloading


//function overriding
//overriding parent class functionality with child class functionality called as function overriding

/*
    class Parent{
        Earn():any{
            return "Parent Earned 1cr";
        }
    }

    class Child extends Parent{
        Earn():any{
            return "Child Earned 10cr";
        }
    }

    let obj:Child = new Child();
    console.log( obj.Earn() );

    //Child Earned 10cr
*/


/*
    class Parent{
        dbFun():string{
            return "oracle connection";
        };
    };

    class Child extends Parent{
        dbFun():string{
            return "MongoDB Connection"
        }
    };

    class SubChild extends Child{
        dbFun():string{
            return "RabbitMQ Connection";
        }
    };

    let obj:SubChild = new SubChild();
    console.log( obj.dbFun() );                 //RabbitMQ Connection
*/



/*
    class class_one{
    fun_one(arg1:number,arg2:number):any;
    fun_one(arg1:string,arg2:string):any;
    fun_one(arg1:boolean,arg2:boolean):any;
    fun_one(arg1:string,arg2:number):any;
    fun_one(arg1:any,arg2:any):any{
        console.log(arg1+arg2);
    }
    };

    let obj:class_one = new class_one();
    obj.fun_one(10,10);                     //20
    obj.fun_one("10","10");                 //1010
    obj.fun_one("Hello_1","Hello_2");       //Hello_1Hello_2
    obj.fun_one(10,"Hello");                //No overload matches this call
*/
