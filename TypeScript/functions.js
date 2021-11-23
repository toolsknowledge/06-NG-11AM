//function
//particular "business" logic called as "function"
//functions are used to "reuse" the business logic
//the function without name called as "anonymous" function
//anonymous functions also called as "arrow" functions
//we will represent arrow functions with "=>"
//this concept introduced in "ES6"
/*
   //function definition
   var/let/const variablename:datatype = (arg1:datatype,arg2:datatype,arg3:datatype,......argn:datatype):returntype=>{
       business logic
   }

   //call the function
   variablename(param1,param2,param3,......paramn);
*/
/*
    let fun_one = (arg1:string,arg2:string,arg3:string):any=>{
        console.log(arg1, arg2, arg3);
    };
    //fun_one();                                        //Expected 3 arguments, but got 0.
    fun_one("Hello_1","Hello_2","Hello_3");             //Hello_1 Hello_2 Hello_3
*/
/*
    let fun_one = (arg1:any,arg2:any,arg3:any):any=>{
        console.log(arg1.msg, arg2.msg, arg3.msg);
    }
    fun_one({"msg":"Hello_1"},{"msg":"Hello_2"},{"msg":"Hello_3"});             //Hello_1 Hello_2 Hello_3
*/
var networkCall = function (successCallBack, errorCallBack) {
    console.log(successCallBack(), errorCallBack());
};
networkCall(function () {
    return "Spring Boot Integration Soon....!";
}, function () {
    return "Error";
});
