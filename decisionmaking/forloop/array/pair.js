var arr=[1,2,3,4]
var elem=6;

for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        let total=arr[i]+arr[j];
        if(elem==total){
              console.log(arr[i],arr[j]);
         }
    }
}


// for(let num1 of arr){

//     for(let num2 of arr){

//         let total=num1+num2;
//         if(elem==total){

//             console.log(`pairs are ${num1} ${num2}`);
//             break;
//         }
//     }
// }