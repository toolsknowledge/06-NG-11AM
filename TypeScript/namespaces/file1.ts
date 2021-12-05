namespace Transactions{
    export let acc_bal:number = 100000;
    export let credit_limit:number = 500000;
    export let debit:number = 50000;
}


namespace Functions{
    export function fun_one():string{
        return "Hello_1";
    }
    export function fun_two():string{
        return "Hello_2";
    }
    export function fun_three():string{
        return "Hello_3";
    }
};


namespace Classes{
    export class class_one{
        var_one:string;
        var_two:string;
        var_three:string;
        constructor(arg1:string,arg2:string,arg3:string){
            this.var_one = arg1;
            this.var_two = arg2;
            this.var_three = arg3;
        }
    }
}


namespace Example{
    export interface Interface1{
        var_one:string;
        var_two:string;
        var_three:string;
    }
}























