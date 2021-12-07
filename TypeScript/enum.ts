//enum
//enum is the keyword
//enum used to create the custom datatype
//1) numeric enum
//2) string enum
//3) hetrogeneous enum

/*
    enum Corona{
        ALFA,
        BETA,
        GAMA,
        DELTA,
        OMICRON 
    }
    console.log(Corona);
    console.log( Corona.ALFA, Corona.BETA, Corona.GAMA, Corona.DELTA, Corona.OMICRON );
    console.log( Corona["ALFA"], Corona["BETA"], Corona["GAMA"], Corona["DELTA"], Corona["OMICRON"] );
    console.log( Corona[0], Corona[1], Corona[2], Corona[3], Corona[4]);
*/


/*
    enum Enum1{
        CONST_1 = 100,
        CONST_2,
        CONST_3,
        CONST_4 
    }
    console.log( Enum1 );
*/

/*
    enum Enum1{
        CONST_1 = 100,
        CONST_2 = 200,
        CONST_3 = 300,
        CONST_4 = 400
    }
    console.log(Enum1);
*/

/*
    enum Enum1{
        CONST_1 = 100,
        CONST_2 = CONST_1*2,
        CONST_3 = CONST_2+100,
        CONST_4 = CONST_3+100
    }
    console.log(Enum1);
*/


/*
function fun_one():number{
    return 100;
}

enum Enum1{
    CONST_1 = fun_one(),
    CONST_2 = fun_one()*10,
    CONST_3 = CONST_1*20
}
console.log(Enum1);

enum Enum2{
    CONST_2,
    CONST_3,
    CONST_1 = fun_one()    
}
console.log(Enum2);
*/


/*
    enum Enum1{
        VAL1 = 100,
        VAL2,
        VAL3,
        VAL4
    }

    function fun_one():Enum1{
        return Enum1.VAL1;
    }

    console.log( fun_one() );               //100
*/

/*
    enum Enum1{
        VAL1 = "Hello_1",
        VAL2 = "Hello_2",
        VAL3 = "Hello_3",
        VAL4 = "Hello_4"
    }
    console.log( Enum1.VAL1, Enum1.VAL2,Enum1.VAL3, Enum1.VAL4  );
    console.log( Enum1["VAL1"], Enum1["VAL2"], Enum1["VAL3"],Enum1["VAL4"] );
    console.log( Object.keys(Enum1) );
*/


/*
    enum Enum1{
        VAL1 = "Hello_1",
        VAL2
    }                   //Enum member must have initializer.
*/


/*
    enum Enum1{
        VAL_1 = 100,
        VAL_2 = "Hello_1"
    }
    console.log(Enum1);
*/


/*
    enum Enum1{
        VAL_1 = 100,
        VAL_2 = "Hello",
        VAL_3
    }
    //Enum member must have initializer.
*/






















































































































