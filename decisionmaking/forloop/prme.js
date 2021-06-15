// print all prime number b/w 21 to 40

var low=21,upp=40; // 23,29,31,37

for(let num=low;num<=upp;num++){ //i=21.........40
    let flag=0;
    for(let j=2;j<num;j++){ //j=2.......20
        if(num%j==0){    //21%2==0, 
            flag++;      //flag=1
            break
        }

    } 
    if(flag==0){
        console.log(num);
    }
}