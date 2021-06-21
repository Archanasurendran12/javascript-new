var state={name:"kerala",cinfirmed_cases:12000,cured:500}

//state name
console.log(state["name"]);

console.log(state.confirmed_cases);

// death is not exist odd death:100

if(!("death" in state)){
    state["death"]=100
}
console.log(state);
state.cured+=500;
console.log(state);
