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


let str = "abcHelloabc123Helloabc123";

console.log( str.match(new RegExp("abc123")) );




















































