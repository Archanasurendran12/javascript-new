var text="hai hello hai hello"
// find word count


// step1: split text into words

var words=text.split(" ")
console.log(words); // ['hai','hello','hai','hello']
var dict={}
for(let word of words){ // hai hello
    if(!(word in dict)){
        dict[word]=1;
    }
    else{
        dict[word]+=1 // dict[hai]= 1+1
    }
}
console.log(dict);




var text="hello,hai,how, hello"

var words=text.split(",")
var obj={}
for(let word of words){
    if(word in obj){
        obj[word]+=1;
    }
    else{
        obj[word]=1
    }
}
console.log(obj);