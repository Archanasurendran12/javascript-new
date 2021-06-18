var arr=[10,11,13,45,50,51]

var element=13;

var flag=0;
for(let num of arr){
    if(element==num){
       flag++;
       break;
    }
}
console.log(flag==0?"element not found":"found");