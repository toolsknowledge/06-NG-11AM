
console.log("welcome to javascript");    //welcome to javascript

console.log(10+10);                     //20
console.log(10+"10");                   //1010
console.log(10+ +"10");                 //20
console.log(10+"10"+"10");              //101010
console.log(10+ +"10"+ +"10");          //30
console.log( 10 - "10" );               //0
console.log( 10 * "10" );               //100
console.log( 10 / "10" );               //1
console.log( "10" / "10" );             //1

console.log( 10 - "10" / 20 + "20" );           //9.520

console.log(1 > 2 > 3);                 
console.log(1 < 2 < 3);                 //true
console.log( 1+ +"1" + "A");            //2A
console.log( 1 - "A" );                 //NaN
console.log( 1 / "0" );                 //Infinity
console.log( 2/0 );                     //Infinity
console.log( "A" / "A" );               //NaN


// == (value)
// === (value & datatype)
console.log( 10 == "10" );          //true
console.log( 100 == "100" );        //true
console.log( 10 == "ten" );         //false
console.log( 10 === "10" );         //false



//isNaN()
//check number or not
//number --- false
//not a number --- true
console.log( isNaN(100) );          //false
console.log( isNaN("Hello") );      //true

console.log( !isNaN(100) );         //true
console.log( !isNaN("Hello") );     //false

console.log(
    isNaN(100) / isNaN(200)     
);          //NaN

console.log(
    !isNaN(100) / isNaN(200)
);          //Infinity


console.log(!(10 == "10") );        //false


console.log(0.1+0.2);               //0.30000000000000004

console.log(0.1+0.2 == 0.30000000000000004 );   //true
console.log(0.1+0.2 === .30000000000000004);    //true

console.log(0.1+0.2 == 0.3);                    //false
console.log(0.1+0.2 === 0.3);                   //false


// &&
// &
// ||
// |
// <<  >>







































