//functions
//particular business logic called as "function"
//functions are used to reuse the "business" logic
//the function without name called as "anonymous" function
//anonymous functions also called as "arrow" functions
//arrow functions we will represent with "=>"
//arrow functions introduced in "ES6"

/*
    1) function definition

    2) function calling


    function definition
    *******************
    var/let/const variablename:any = (arg1:datatype,arg2:datatype,arg3:datatype,.....argn:datatype):returntype=>{
        business logic
    }

    function calling
    ****************
    variablename(param1,param2,param3,......paramn);
*/

/*
    let fun_one = ():string=>{
        return "welcome to arrow functions";
    }
    console.log( fun_one() );                   //welcome to arrow functions
*/


/*
    let fun_one = ():void =>console.log("Hello");
    fun_one();                  //Hello
*/


/*
    let fun_one = (arg1:string,arg2:string,arg3:string):void=>console.log(arg1,arg2,arg3);
    //fun_one();                                    //Expected 3 arguments, but got 0.
    fun_one("Hello_1","Hello_2","Hello_3");         //Hello_1 Hello_2 Hello_3
*/





/*
    let networkCall = (arg1:any,arg2:any):void=>{
        console.log( arg1(), arg2() );
    }
    networkCall( ():string=>{ return "Hello_1" }, ():string=>{ return "Hello_2" } );            //Hello_1 Hello_2
*/

//typeof
console.log( typeof "Angular13" );                      //string
console.log( toString.call("Angular13") );              //[object String]

console.log( typeof 100 );                              //number
console.log( toString.call(100) );                      //[object Number]

console.log( typeof true );                             //boolean
console.log( toString.call(false) );                    //[object Boolean]

console.log( typeof undefined );                        //undefined
console.log( toString.call(undefined) );                //[object Undefined]

console.log( typeof null );                             //object
console.log( toString.call(null) );                     //[object Null]

console.log( typeof [] );                               //object
console.log( toString.call([]) );                       //[object Array]


console.log( typeof {} );                               //object
console.log( toString.call({}) );                       //[object Object]

console.log( typeof function fun_one(){} );             //function
console.log( toString.call(function fun_one(){}) );     //[object Function]

















































































