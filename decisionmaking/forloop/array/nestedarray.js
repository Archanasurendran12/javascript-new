var employees=[
                [100,"ram",20000,"developer"],
                [101,"ravi",22000,"developer"],
                [102,"raju",25000,"qua"],
                [103,"nithin",15000,"qa"]

        ]     

        
        
  //print employees name only      
for(let emp of employees ){
    console.log(emp[1]);
}

 // print developer details
 for(let emp of employees){
     if(emp[3]=="developer"){
         console.log(emp);
     }
 }

 //print employee salary whos salary>21000

 for(let emp of employees){
     if(emp[2]>21000){
         console.log(emp);
     }
 }
