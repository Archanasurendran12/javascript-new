// var arr=[10,11,12,13,14,15,16]

// for(let num of arr){
//     if(num%2==0){
//         console.log(num);

//     }
// }

// odd and even array

var arr=[10,11,12,13,14,15,16]
var odd=[],even=[];
for(let num of arr){
    if(num%2==0){
        even.push(num)
    }
    else{
        odd.push(num)
    }
}
