//Control Flow
console.log("++++++++++++++++Control Flow++++++++++++++++++");

if (true) {
    console.log("true");
    
}
const month = 0;
// use "" to compare case with month if the month is in String

switch (month) {
    case 1:
        console.log("jan");
        
        break;
        case 2:
        console.log("feb"); 
        break
        case 3:
        console.log("mar");
        
        break;
        case 4:
        console.log("apr");
        
        break;
        case 5:
        console.log("may");
        break;

    default:
        console.log("Default");
        break;
}

console.log("================truthy and Falsy=====================");
const userEmail = []
if(userEmail){
    console.log("User Email");
    
}else{
    console.log("email");
    
}
const userEmaill = [2,3,4]
if(userEmail){
    console.log("User Email");
    
}else{
    console.log("email");
    
}

// false values => false ,  0 ,-0 Bigint 0n , "", null, undefined , NaN
// truthy values => "0" "false" (Any String value), " ", [],{} , function(){}
const emptObj = {}
if(Object.keys(emptObj).length==0){ //object.keys will return a array 
    console.log("Empty Object");   
}


console.log("Nullish Coalescing Operator (??)");  
//all the story is around null and undefined
 let val9;
 val9 = 4 ??5;
 console.log(val9);


 console.log("ternary Operator (??)");
 //condition ? true:else
const ice =120;
ice>=80 ? console.log("less then 80") : console.log("moore then 80");


 



