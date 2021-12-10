


/*
    let arr = [10,20,30,40,50];
    console.log( arr.reverse() );

    //[ 50, 40, 30, 20, 10 ]

    let str = "Hello";
    console.log (Array.from(str).reverse().join("") );
    //olleH

    // let arr1 = [10,20,30,10,20,30,10,20,30,40];
    // arr1.forEach((element,index)=>{
    //     console.log( arr1.indexOf(element), index );
    // });
*/


/*
    let arr1 = [10,20,30,10,20,30,10,20,30,40];
    console.log( arr1.indexOf(20,4) );              //4
    console.log( arr1.indexOf(30,3) );              //5
    console.log( arr1.indexOf(10,0) );              //0
    console.log( arr1.indexOf(20,8) );              //-1
    console.log( arr1.indexOf(100,0) );             //-1
    console.log( arr1.indexOf(10,-4));              //6
    console.log( arr1.indexOf(30,-10) );            //2    
*/


/*
    let arr = ["Hello","Welcome","Hello","Welcome"];
    console.log( arr.indexOf("Hello",1) );                  //2
    console.log( arr.indexOf("Hello",0) );                  //0
    console.log( arr.indexOf("Hello",3));                   //-1 
*/


/*
const count_substr = (str, searchValue) => {
    let count = 0,
      i = 0;
    while (true) {
      const r = str.indexOf(searchValue, i);
      if (r !== -1) [count, i] = [count + 1, r + 1];
      else return count;
    }
  }; 
  
console.log(count_substr("the quick brown fox jumps over the lazy dog", 'the'));
console.log(count_substr("The quick brown fox jumps over the lazy dog", 'fox'));
*/

/*
let fun_one = (arg1,arg2)=>{
    let count = 0;
    i=0;
    while(true){
       let r = arg1.indexOf(arg2,i);
       if(r !== -1 ){
            [count,i] = [count+1, r+1]    
       }else{
           return count;
       }
    }

};
console.log( fun_one("HelloHelloHelloHello","Hello") );
console.log( fun_one("123abc123abc123abc","abc") );


let str = "HelloabcHelloabc";
console.log( Array.from(str).filter((element,index)=>{
    return element == 'a' | element == 'b' | element == 'c';
}).join("") );    //abcabc
*/


/*
let arr = Array.from(str);
console.log(arr);
console.log( [...new Set(arr)].join("") );
*/

/*
  let arr = Array.from(str);
  console.log(
    arr.filter((element,index)=>{
        return arr.indexOf(element) === index
    }).join("")
  )

  */



  
/*
  let str = "AmeerpetShravan"
  let i = str.indexOf("e");
  let str1 = "";
  while(true){
    let r = str.indexOf("e",i+1);
    if(r>0){
        str1 = str.substring(0,r)+str.substring(r+1);
        str = str1;
        i = r+1;
        return str1;
      }else{
        //return str1;
    }
  }
*/


/*
  let arr = [{"cost":10000},{"cost":20000},{"cost":3000},{"cost":40000},{"cost":50000}];

  let relpacefun = (array, arg2)=>{
      return array.map((element,index)=>{
          return element.cost == 3000?arg2:element;
      })
  };

  console.log( relpacefun(arr,{"cost":30000}) );
*/


let str ="HelloabcHello#abd*Hello123"

console.log( str.includes("abc",0) );
console.log( str.includes("abc") );

str.indexOf("abc",0) !==-1 ?console.log("Detected"):console.log("Not Detected");


let str1 = "abc123Hello123abc";
let count = 0;
let i = 0;

while(true){
  let r = str1.indexOf("sjagdkjsdgksad",i);
  if(r>=0){
     count++;
     i = r+1;
     console.log(count);     
  }else{
    console.log(count);
    return count;
  }
  
}

           



















































































