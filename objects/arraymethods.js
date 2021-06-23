//array methods
//arrow function


let add=(num1,num2)=> num1+num2


let sub=(num1,num2)=> num1-num2


let cube=(num)=> num**3

console.log(add(10,20));
console.log(sub(20,10));
console.log(cube(3));

// map(), filter(),sort(),reduce(),find(),some(),forEach()


//array method map
var arr=[3,4,2,8,7,9]

var squares=arr.map(num=>num**2)
console.log(squares);

var cubes=arr.map(num=>num**3)
console.log(cubes);

// find odd numbers from array

var evens=arr.filter(num=>num%2==0)
console.log(evens);