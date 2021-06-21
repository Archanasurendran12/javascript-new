// key value

//[100,ram,bca,450]
var student={id:100,name:"ram",course:"bca",total:450}

//ram
console.log(student.name);
console.log(student["name"]);

//updation
student.total=500;
console.log(student);

//chek for gender key is present

console.log("gender" in student);

//gender male

student["gender"]="male"
console.log(student);

student["gender"]="female"
console.log(student);

