
var temperature=[
    {district:"tvm",temperature:25},
    {district:"kollam",temperature:27},
    {district:"kottayam",temperature:24},
    {district:"ekm",temperature:27},
    {district:"tsr",temperature:25},
    {district:"pkd",temperature:30},
    {district:"tvm",temperature:27},
    {district:"kollam",temperature:25},
    {district:"kottayam",temperature:28},
    {district:"ekm",temperature:29},
    {district:"tsr",temperature:30},
    {district:"pkd",temperature:31},
]

var weather={}
for(let data of temperature){
    let district=data["district"]
    let temp=data["temperature"]
        
    if(!(district in weather)){
        weather[district]=temp;
    }
    else{
        let old_temp=weather[district];
        if(old_temp<temp){
           weather[district]=old_temp
        }
        else{
            weather[district]=old_temp
        }
    }
}
console.log(weather);


 // sort weather according to temparature desc

var weather={}
for(let data of temparature){
    let district=data["district"]; //true
    let temp=data["temperature"]; //27
    if(district in weather){
        let old_temp=weather[district];//25
        if(old_temp<temp){
            weather[district]=temp
        }
    }

     else{
    weather[district]=temp;
    }
}
console.log(weather);

function sortByTemp(){
    return Object.entries(data).sort((dist1,dist2)=>dis2[1]-dist1[1])
}
console.log(sortByTemp(weather));