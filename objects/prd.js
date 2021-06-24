var products=[
    {code:1000,name:"garlic",mrp:120,aval_qty:10},
    {code:1001,name:"chilly",mrp:80,aval_qty:5},
    {code:1002,name:"tomatto",mrp:35,aval_qty:20},
    {code:1003,name:"onion",mrp:40,aval_qty:37},
    {code:1004,name:"potatto",mrp:45,aval_qty:40},
    {code:1005,name:"banana",mrp:55,aval_qty:60},
    {code:1006,name:"brinjal",mrp:43,aval_qty:2},
    {code:1007,name:"beetroot",mrp:38,aval_qty:5},
    {code:1008,name:"carrot",mrp:60,aval_qty:0},
    {code:1009,name:"bittergod",mrp:50,aval_qty:5},


]
// print all product names in this shop
var product_names=products.map(item=>item.name)
console.log(product_names);

// print all product names in upper case

var p_names=product_names.map(name=>name.toUpperCase())
console.log(p_names);

// print all products whos price <50

var below_fifty=products.filter(item=>item.mrp < 50)
console.log(below_fifty);

// print all products available in ranger of 30 - 50

var range_prdt=products.filter(item=>item.mrp>= 30 & item.mrp<=50)
// print out of stock products

var range_prdt=products.filter(item=>item.aval_qty==0)
// ar arr=[4,3,2,7,8,9] o/p 3,2,1,8,9,10 array method 

var arr=[4,3,2,7,8,9]
var op=arr.map(num=>num>5?num+1:num-1)

//total

var arr=[4,3,2,7,8,9]
var total=arr.reduce((num1,num2)=>num1+num2)
console.log(total);

//maximum

var max=arr.reduce((num1,num2)=>num1>num2?num1:num2)
console.log(max);

//minimum

var min=arr.reduce((num1,num2)=>num1>num2?num2:num1)
console.log(min);

//print costly products

var costly_product=products.reduce((item1,item2)=>item1.mrp>item2.mrp?item1:item2)
console.log(costly_product);

//low cost products

var low_cost=products.reduce((item1,item2)=>item1.mrp>item2.mrp?item2:item1)
console.log(low_cost);

//sort products upon avl_qty desending order


var srt_qty=products.sort((item1,item2)=>item1.aval_qty - item2.aval_qty)
console.log(srt_qty);

//prdct name sort

var srt_qty=products.map(item=>item.name).sort()
console.log(srt_qty);

//searching for a product potato

var srch=products.find(item=>item.name=="potatto")
console.log(srch);

// some

var is_aval_price=products.some(item=>item.mrp <= 30)
console.log(is_aval_price);

var is_aval_price=products.some(item=>item.mrp >= 30)
console.log(is_aval_price);

// sort product upon avl_qty desending using foreach

products.sort((item1,item2)=>item1.aval_qty - item2.aval_qty).forEach(item=>{
    if(item.aval_qty>0){
        console.log(item);
    }
})

