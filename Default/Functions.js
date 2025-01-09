function firstFunc(params) {
    console.log("A");
    console.log("A");
    console.log("Q");
    console.log("I");
    console.log("B");  
}
firstFunc //like you pass the reference of the function
firstFunc() // like this you execute the functions

function print(n1 , num){
 
    setTimeout(() => {
        console.log(n1+num);
        
    }, 1000);
}
// print(23,443);


console.log("=================Functions 2=====================");


function calCartPrice(...n1){
    return n1

}
console.log(calCartPrice(3 ,32 ));

function calCartPric(a,b,...n1){
    return n1

}
console.log(calCartPric(3 ,3,2, 3,4,5));


const use={
    name:"er",
    price:"uyyu"
}
function handleUse(any){
    console.log(`name is ${any.name} and price is ${any.price}`);
    
}
handleUse(use)




