//1)  ---> &
//2)  ---> |
//3)  ---> ^    (XOR)
//4)  ---> <<
//5)  ---> >>
//6)  ---> &&
//7)  ---> ||
//8)  ---> ==
//9)  ---> ===
//10) ---> !
//11) ---> ++
//12) ---> --
//13) BODMAS

/*
    0 -- 000

    1 -- 001

    2 -- 010

    3 -- 011

    4 -- 100

*/


/*
   &
   ==

   left & right are 1  ===> 1

   otherwise ===> 0

    1 & 1  ===>  1

    1 & 0  ===> 0

    0 & 1  ===> 0

    0 & 0  ===> 0


    |
    ==

    1 | 0   ==> 1

    0 | 1   ==>  1

    1 | 1   ==> 1

    0 | 0   ==>  0


    ^ (XOR)
    =======

    1 ^ 0     ===>  1

    0 ^ 1     ===>  1

    1 ^ 1    ===> 0

    0 ^ 0    ===> 0

*/

console.log( typeof 1 );                        //number
console.log( typeof "1".toString() );           //string


// () Bracket

// (    of

//DIVISION

//MULTIPLICATION

//ADDITION

//SUBTRACTION


console.log( 10+2/2+10 );

//10 + 1 + 10
//21

console.log( (10+2)/(2+10) );

// 12 / 12

//1

console.log( 10+2*30/20+2*30 );

// 10 + 2 * 1.5 + 2 * 30

//10 + 3 + 60

//73


//left to right
console.log( 2<3<4 )

//true < 4

//1 < 4

//true


console.log( 2>3>4 )

//false > 4

//0 > 4

//false


//conversions
//conversion from one datatype to another datatype
//parseInt()
//toString()




// 1 2 3 4 5 6    decimal to binary   ,  binary to decimal

// binary

// 001  ---   1

// 001 >> 2  ----  right shift

// 001 << 2     ---- left shift


let a = 1;
//console.log(++a);
//console.log(a++);
//console.log(a);

//console.log(--a);

//console.log( a-- );
//console.log( a );


//console.log( ++a + ++a );

            //2 + 3

            //5


console.log( a++ + a++ );

//1 + 2
console.log(a);











































