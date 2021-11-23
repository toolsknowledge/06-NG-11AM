//string
//collection of "characters" called as "string"
//""(double quotes) , ''(single quotes) and ``(backtick)
//``(backtick) operator introduced in "ES6"
//``(backtick) operator called as "template literal"
//``(backtick) operator used to create the "paragraphs"  (multiline strings)
var msg = "Angular13";
var wish = `Welcome to ${msg}`;
console.log(wish);                  //Welcome to Angular13


var sub_one = "Angular13";
var sub_two = "NodeJS";
var sub_three = "MongoDB";
var mean_stack = `${sub_one}....${sub_two}.....${sub_three}`;
console.log(mean_stack);                //Angular13....NodeJS.....MongoDB



//not start with number
var abc123;
var $abc;
var _abc;
var $123;
var _123;
var $123abc;


//var 123abc;
//var %abc;
//var @1123;


//boolean
//true of false
//true -- 1
//false -- 0
var flag = true;
console.log( flag );                //true

var flag1 = false;
console.log( flag1 );               //false


console.log( true + true );         //2
console.log( true + false );        //1
console.log( true - 1 );            //0

console.log( true / true );         //1

console.log( true / false );        //Infinity



//number
//1) decimal

//2) double

//3) hexadecimal

//hexadecimal number will start with 0x

//4) octal

//octal number will start with "0o"

//5) binary
//binary number will start with "0b"

var $decimal = 100;
var _double = 100.12345;
var hexadecimal = 0x123ABC;
var octal = 0o123;
var binary = 0b1010;
console.log(
    $decimal,
    _double,
    hexadecimal,
    octal,
    binary
);                      //100 100.12345 1194684 83 10


//undefined
//datatype
console.log( undefined == undefined );              //true
console.log( undefined === undefined );             //true
console.log( null == null );                        //true
console.log( null === null );                       //true
console.log( undefined == null );                   //true
console.log( undefined === null );                  //false


/*
    //let
    //let is the keyword introduced in ES6
    //let keyword used to declare the variables
    for(let i=0;i<5;i++){

    };
    console.log(i);         //let :ReferenceError: i is not defined
                            //var:5
    //var keyword breaks the scope rule
    //let keyword obeys the scope rule
*/


/*
    //global variable
    let data = 100;

    //block
    {
        let data = 200;
    }

    console.log(data);              //let:100               //var:200

    //if any global member effected because of blocks, then that effect called as global polluting issue
    //global polluting issue raised because of var keyword
    //we can fix global polluting issue by using let keyword
*/


/*
    let data = 100;
    let data = 200;
    console.log(data);          //let:SyntaxError: Identifier 'data' has already been declared
                                //var:200
    //var keyword allows the duplicate variables
    //let keyword won't allows the duplicate variables
*/



//print variable
//1) declaration
//2) initilization
//3) access it
// /console.log(data);          //let:ReferenceError: Cannot access 'data' before initialization
                           //var:undefined
//let data = 100;
//variable hoisting raised because of var keyword
//we can fix variable hoisting by using let keyword

/*
                        var                                 let

    ES1                                             ES6

    duplicate variables                             duplicate variables not allowed
    allowed

    scope rule breaks                               obeys

    global polluting issue                          we can fix global polluting issue
    raised

    variable hoisting issue                         we can fix the variable hoisting issue
    raised

    var members called as global scope              let members called as local scope members
    members
*/


//const keyword
//ES6
//declare the variables
//reinitilization not possible
//const data = 100;
//data = 200;             //SyntaxError: Identifier 'data' has already been declared


const arr11 = [10,20,30,40,50];
//arr = [100,200,300,400,500];
arr11[0] = 100;
arr11[1] = 200;
arr11[4] = 500;
console.log(arr11);                 //[ 100, 200, 30, 40, 500 ]


const obj = {
    "sub_one" : "Angular12",
    "sub_two" : "NodeJS",
    "sub_three" : "MongoDB"
};

//obj={};

obj.sub_one = "Angular13";
obj.sub_two = "Go";
obj.sub_three = "RabbitMQ";
console.log(obj);               //{ sub_one: 'Angular13', sub_two: 'Go', sub_three: 'RabbitMQ' }































































































