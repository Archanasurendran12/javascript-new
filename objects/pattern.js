var pattern="ABABC";

var dict={}
for(let char of pattern){
    //char A
    if(!(char in dict)){
        dict[char]=1;//dict[A]=1 dict[B]=1
    }
    else{
        console.log("first recusive char is"+char);
        break
    }
}
