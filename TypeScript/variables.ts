//string
//"" , '', and ``(backtick)
//``(backtick) operator introduced in "ES6"
//``(backtick) operator used to define the "multiline" strings
//``(backtick) operator also called as "template" literal
let sub_one:string = "Angular13";
let sub_two:string = "NodeJS";
let sub_three:string = "MongoDB";
let mean:string = `MEAN Stack Development => ${sub_one} --- ${sub_two} --- ${sub_three}`;
console.log(mean);


//number
let decimalNum:number = 100;
let doubleNum:number = 100.12345;
let hexadecimalNum:number = 0x123ABC;
let octalNum:number = 0o123;
let binaryNum:number = 0b1010;
console.log(decimalNum,doubleNum,hexadecimalNum,octalNum,binaryNum);

//boolean
let flag:boolean = true;
let flag1:boolean = false;
console.log(flag, flag1);



//any
let data:any = "we can store any type of data";



//arrays
//string array
let arr1:string[] = ["Angular13","NodeJS","ReactJS","VueJS","MongoDB"];
let arr2:Array<string> = ["Angular13","NodeJS","ReactJS","VueJS","MongoDB"]



//number array
let arr3:number[] = [10,20,30,40,50];
let arr4:Array<number> = [10,20,30,40,50];



//boolean array
let arr5:boolean[] = [true,false,true,false,true];
let arr6:Array<boolean> = [true,false,true,false,true];


//json
//any
let obj:any = {
    "sub_one":"Angular13",
    "sub_two":"NodeJS",
    "sub_three":"MongoDB"
};


let obj1:any[] = [
    {"msg":"Hello_1"},
    {"msg":"Hello_2"},
    {"msg":"Hello_3"},
    {"msg":"Hello_4"},
    {"msg":"Hello_5"}
];


let v1:undefined = undefined;
let v2:null = null;


let arg1:string | number = "Hello";
arg1 = 100;


let arg2:string | number | boolean = "Hello";

arg2 = 200;

arg2 = true;






































