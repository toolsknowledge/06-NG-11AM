/*
    - collection of "indexed" and "hetrogeneous" elements called as array
    
    - []

    - index starts from 0
*/

/*
    let arr = [10,20,30,40,50,60,70,80,90,100];
    console.log( arr.length );                              //10
    console.log( arr[0] );                                  //10
    console.log( arr[4] );                                  //50
    console.log( arr[9] );                                  //100
    console.log( arr[10] );                                 //undefined
    console.log( arr[1000] );                               //undefined
    console.log( arr[-1] );                                 //undefined
    console.log( arr[-1000] );                              //undefined
    arr.length = 5;
    console.log( arr[0] );
    console.log( arr[4] );
    console.log( arr[9] );                                  //undefined
*/

/*
    let arr = [20,30,40];
    console.log( arr );                 //[ 20, 30, 40 ]
    arr.push(50);
    console.log(arr);                   //[ 20, 30, 40, 50 ]
    arr.unshift(10);
    console.log(arr);                   //[ 10, 20, 30, 40, 50 ]
    arr.pop();
    console.log(arr);                   //[ 10, 20, 30, 40 ]
    arr.shift();
    console.log(arr);                   //[ 20, 30, 40 ]
*/

/*
    let arr = [10,20,30,40,50,60,70,80,90,100];
    arr.splice(4,3);
    console.log(arr);                               //[10,20,30,40,80,90,100]

    arr.splice(4,2);
    console.log(arr);                               //[ 10, 20, 30, 40, 100 ]

    arr.splice(0,1);
    console.log(arr);                               //[ 20, 30, 40, 100 ]


    arr.splice(3,1);
    console.log(arr);                               //[ 20, 30, 40 ]


    arr.splice(3,0,50,60,70,80,90,100);
    console.log(arr);                             //[20,30,40,50,60,70,80,90,100]


    arr.splice(0,0,10);
    console.log(arr);                               //[10,20,30,40,50,60,70,80,90,100]
*/


/*
let arr = [10,20,30,40,50];

console.log(
    arr.findIndex((element,index)=>{
        return element == 30;
    })
);              //2
*/

/*
console.log(
    arr.findIndex((element,index)=>{
        return element == 10;
    })  
);              //0


arr.splice(arr.findIndex((element,index)=>{
    return element == 40;
}),1)

console.log(arr);           //[ 10, 20, 30, 50 ]



arr.splice(arr.findIndex((element,index)=>{
    return element == 10;
}),1);
console.log(arr);           //[ 20, 30, 50 ]

*/


/*
let arr1 = [1,2,3,4,5];
let arr2 = [6,7,8,9,10];
let arr3 = [...arr1,...arr2];
console.log(arr3);          //[1,2,3,4,5,6,7,8,9,10]

*/

/*
    let arr = [1,2,3,4,5,6];
    let arr1 = arr.splice(0,3);
    console.log(arr);                   //[ 4, 5, 6 ]
    console.log(arr1);                  //[ 1, 2, 3 ]
    console.log([...arr,...arr1]);      //[ 4, 5, 6, 1, 2, 3 ]
*/


/*
    let arr = [1,2,3,4,5,6,7,8,9,10,11,12];


    let arr1 = arr.splice(9,3);
    console.log(arr1);                  //[ 10, 11, 12 ]

    let arr2 = arr.splice(6,3);
    console.log(arr2);                  //[ 7, 8, 9 ]

    let arr3 = arr.splice(3,3);
    console.log(arr3);                  //[ 4, 5, 6 ]

    console.log(arr);                   //[ 1, 2, 3 ]

    console.log([...arr1,...arr2,...arr3,...arr]);
                        //[10,11,12,7,8,9,4,5,6,1,2,3]
*/

/*
    let arr = [1,2,3,4,5,6];
    console.log( arr.includes(3) );             //true
    console.log( arr.includes(300) );           //false
*/


/*
    let arr = [1,2,3,4,5,6];
    console.log(
        arr.find((element,index)=>{
            return element == 3
        })
    );                      //3


    console.log(
        arr.find((element,index)=>{
            return element == 300
        })
    );                  //undefined 
*/

// let arr = [10,20,30,40,50,60,70,80,90,100];
// console.log( arr.reverse() );


let arr = [1,2,3,4,5];
console.log( arr.fill(100) );                   //[ 100, 100, 100, 100, 100 ]
console.log( arr.fill(200,1) );                 //[ 100, 200, 200, 200, 200 ]
console.log( arr.fill(300,2,3));                //[ 100, 200, 300, 200, 200 ]
console.log( arr.fill(400,3,4) );               //[ 100, 200, 300, 400, 200 ]
console.log( arr.fill(500,4) );                 //[ 100, 200, 300, 400, 500 ]

































































































