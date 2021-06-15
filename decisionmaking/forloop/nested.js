// for(let i=0;i<3;i++){   // i=1
//     let str="";
//     for(let j=1;j<=3;j++){ //j=1 1<=3 j=2 2<=3 3<=3
//         str+=i             // str="1"+"1"+"1"
//     } 
//     console.log(str);
// }



for(let i=1;i<3;i++){   
    let str="";
    for(let j=1;j<=i;j++){
        str+="*"             
    } 
    console.log(str);
}