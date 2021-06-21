//object is a data type
// object is a real world entity
//var expens=[jan:10000,feb:40000,mar:60000,apr:70000,may:80000,jun:90000,july:650000]
//values are stored in key value pairs
//define {}


var employee={id:1000,ename:"ajay",desig:"developer",salary:25000,exp:2}
// values are fetch by using corresponding key
//print employee name

console.log(employee["ename"]);// console.log(employee.ename);
console.log(employee["salary"]);

//update employee salary as 30000
employee["salary"]=30000;
console.log(employee);
// or

employee.salary=30000;
console.log(employee);

