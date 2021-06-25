//oops
//class=plan,designpattern,template
//object=real world entity
class Person{
    setperson(age,name,gender){
        this.age=age;
        this.name=name;
        this.gender=gender;
    }
    printDetails(){
        console.log(this.age,this.name,this.gender);
    }
}
var person=new Person();//create an object reference person

person.setperson(25,"ram","male")
person.printDetails()


//employee

class Employee{
    setEmployee(eid,e_name,desig,salary){
        this.eid=eid;
        this.e_name=e_name;
        this.desig=desig;
        this.salary=salary;
    }printEmployee(){
        console.log(this.eid,this.e_name,this.desig,this.salary);
    }
}
var emp=new Employee()
emp.setEmployee(100,"ravi","developer",2500)
emp.printEmployee()

var emp1=new Employee()
emp1.setEmployee(101,"rami","developer",2800)
emp1.printEmployee()

