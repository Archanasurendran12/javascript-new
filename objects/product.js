var mobile={
    code:1000,
    brand_name:"samsung",
    price:30000,
    processor:"snapboard"
}
console.log(mobile.brand_name);
console.log(["brand_name"]);

if(!("offer" in mobile)){
    mobile.offer="20%"
}
console.log(mobile);