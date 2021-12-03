//super
//child class will call the parent class members with the help of super keyword

/*
    class Parent{
        constructor(public arg1:any){}
    };

    class Child extends Parent{
        constructor(public arg1:any,public arg2:any){
            super(arg1);
        }
    };

    class Subchild extends Child{
        constructor(public arg1:any,public arg2:any,public arg3:any){
            super(arg1,arg2);
        }
    };

    let obj:Subchild = new Subchild("Hello_1","Hello_2","Hello_3");
    console.log( obj.arg1, obj.arg2, obj.arg3 );
    //Hello_1 Hello_2 Hello_3
*/



class Parent{
    fun_one():any{
        return "Hello_2";
    }

    var_one:string = "Hello_2";
}

class Child extends Parent{
    fun_two():any{
       return super.fun_one(); 
    }

};

let obj:Child = new Child();
console.log( obj.fun_two() );





















