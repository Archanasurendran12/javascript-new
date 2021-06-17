var arr=[3,4,1,2]
arr.sort((i,j)=>i-j)

var cnt=0

var elem=6;

var low=0,upp=arr.length-1;
while(low<upp){ //0<3

    let total=arr[low]+arr[upp]; 

    if(elem==total){
        console.log(`pairs ${arr[low]}  ${arr[upp]}`);
        low++;
    }
    else if(elem>total){
        low=low+1;
    }
    else if(elem<total){
        upp=upp-1
    }
    cnt++;


    
}
console.log("counter"+cnt);