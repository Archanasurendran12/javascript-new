
 var expenses=[20000,25000,30000,450000,67000,66000]
 expenses[1]=30000;
 console.log(expenses);
 for(let i=0;i<expenses.length;i++){
     console.log(expenses[i]);
 }

or

var expenses=[20000,25000,30000,450000,67000,66000]
for(let amount of expenses){
    console.log(amount);
}

//print all expenses >25000

var expenses=[20000,25000,30000,450000,67000,66000]
for(let exp of expenses){
    if(exp>25000){
        console.log(exp);
    }
}