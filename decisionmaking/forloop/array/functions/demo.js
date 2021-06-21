//function //duty to perform a specific task
//function functionName(param1,param2,....param){
    //function definition
    //function value;
//}
function add(num1,num2){
    let res=num1+num2;
    console.log(res);
}
//calling function by using function name;
add(50,50)

//using return

function add(num1,num2){
    let res=num1+num2;
    return res;
}
//calling function by using function name;
var op=add(50,50)
console.log(op);