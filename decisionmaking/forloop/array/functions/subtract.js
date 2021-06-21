function subtract(num1,num2){
    if(num1<num2){
        return num2-num1
    }
    else{
        return num1-num2
    }

}
console.log(subtract(10,6));
console.log(subtract(6,10));

//another type
function addNumbers(...parms){
    let res=0;
    for(let num of params){
        res+=num
    }
    return res
}
console.log(addNumber(10,20));
console.log(addNumbers(40,50,60));
console.log(addNumber(45,66,70,67));