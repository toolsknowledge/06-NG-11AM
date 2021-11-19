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


/*
let arr = [1,2,3,4,5];
console.log( arr.fill(100) );                   //[ 100, 100, 100, 100, 100 ]
console.log( arr.fill(200,1) );                 //[ 100, 200, 200, 200, 200 ]
console.log( arr.fill(300,2,3));                //[ 100, 200, 300, 200, 200 ]
console.log( arr.fill(400,3,4) );               //[ 100, 200, 300, 400, 200 ]
console.log( arr.fill(500,4) );                 //[ 100, 200, 300, 400, 500 ]
*/



/*
console.log(
    [1,2,3,4,5].map((element,index)=>{
        return element*100;
    })
);                  //[ 100, 200, 300, 400, 500 ]




console.log(
    [1000,2000,3000,4000,5000].map((element,index)=>{
        return element/100;
    })
);                  //[ 10, 20, 30, 40, 50 ]                   



console.log(
    [1,2,3,4,5].map((element,index)=>{
        return element == 1?element*100:element;
    })
);

//[100,2,3,4,5]


console.log(
    [1,2,3,4,5,6,7].map((element,index)=>{
        return index%2==0?element*100:element*1000   
    })
);

//[100,2000,300,4000,500]





console.log(
    [1,2,3,4,5].filter((element,index)=>{
        return element>=2;
    })
);              //[ 2, 3, 4, 5 ]




console.log(
    [1,2,3,4,5].map((element,index)=>{
        return element*100;
    }).filter((element,index)=>{
        return element>=300;
    })
);          //[ 300, 400, 500 ]

*/



/*
// 10   
// [1,2,3,4,5,6,7,8,9,10]

console.log(
    [...Array(10).keys()].map((element,index)=>{
        return element+1
    })
);

*/


/*
    //reduce()
    //[1,2,3,4,5] = 15
    console.log(
        [1,2,3,4,5].reduce((firstElement,nextElement)=>{
            return firstElement+nextElement;
        })
    );          //15


    console.log(
        [1,2,3,4,5].map((element,index)=>{
            return element*100
        }).filter((element,index)=>{
            return element>=300;
        }).reduce((arg1,arg2)=>{
            return arg1+arg2;
        })
    );              //1200
*/

/*
    //sort
    //arrange the data either ascending order or decending order
    console.log(
        [1,5,2,4,3].sort((arg1,arg2)=>{
            return arg1-arg2;
        })
    );              //[ 1, 2, 3, 4, 5 ]


    console.log(
        [1,5,2,4,3].sort((arg1,arg2)=>{
            return arg2-arg1;
        })
    );          //[ 5, 4, 3, 2, 1 ]


    //2nd min element
    console.log(
        [10,5,6,11,13].sort((arg1,arg2)=>{
            return arg1-arg2;
        })[1]
    );                  //6


    //2nd max element
    console.log(
        [10,7,21,13,5].sort((arg1,arg2)=>{
            return arg2-arg1;
        })[1]
    );                  //13
*/

/*
    //indexOf()
    //won't create indexes to repeated elements
    let arr = [1,2,3,1,2,3];
    arr.forEach((element,index)=>{
        console.log(arr.indexOf(element));
    });   //0 1 2 0 1 2


    let arr1 = [10,20,10,20,10,30,40,10,50];
    arr1.forEach((element,index)=>{
        console.log( arr1.indexOf(element), index )
    });


    //0 1 0 1 0 5 6 0 8

    //index -  0 1 2 3 4 5 6 7


    let arr2 = [0,1,2,0,1,2];
    arr2.forEach((element,index)=>{
        console.log(arr2.indexOf(element));
        console.log(index);
    })

    let arr3 = [10,30,20,10,30];
    console.log(
        arr3.filter((element,index)=>{
            return arr3.indexOf(element)==index;
        })
    );              //[ 10, 30, 20 ]
*/


/*
    console.log(
        " Hello ".trim().length
    );              //5

    console.log(
        " Hello ".trimStart().length
    );          //6


    console.log(
        " Hello ".trimEnd().length
    );          //6
*/


/*
    console.log(
        "Hello".padStart(10,"*")
    );              //*****Hello


    console.log(
        "Hello".padEnd(10,"*")
    );              //Hello*****


    console.log(
        "Hello".padStart(10,"#").padEnd(15,"#")
    );          //#####Hello#####
*/


console.log(
    [10,20,30,40,50].some((element,index)=>{
        return element<=10;
    })
);  

console.log(
    [10,20,30,40,50].every((element,index)=>{
        return element<=50;
    })
);          //true


















































































































































































