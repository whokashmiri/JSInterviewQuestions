// function shadowing() { //Shadowing
//     let a= "hello";
//     if(true){
//         let a = "hi";
//         console.log(a);    
//     }
//     console.log(a);
  
// }
// shadowing();
// // The variable "hello" is shadowed by "hi" which is inside if statement

// function abc(){
//     console.log(a);
//     var a = 67;   
// }
// abc();
// this is called Hoisting
// JS first store all the variable in the head during the creation phase 
// it will be like this this i creation phase
// var c;


// function abc(){
//     console.log(a);
//     var a = 67;   
// }
// abc()


// MAP FILTER REDUCE
// Map() is used to create a new array from existing one 

// const numbers = [1,2,5,4]
// const mulThree = numbers.map((number , index , newArr)=>{
//     return numbers*3
// })
// console.log(mulThree);
// map takes three parameters ( current element  index and the array on which the map is being performed)

// Filter() it returns those elements of an array which satisfy a given condition
// const numFilter = [1,2,5,4]
// const moreThan  = numFilter.filter((numFilter , index , arr )=>{
//     return numFilter>2;

// });
// console.log(moreThan);
// filter takes three parameters ( current element  index and the array on which the map is being performed)

// Reduce() it reduces the values of array to the one value
// const numReduce = [1,2,5,4]
// const sums = numReduce.reduce((acc , curr , i , arr)=>{
//     return acc + curr
// },0)
// console.log(sums);
// it take a callback function and initial value
// acc = accumulator it is result of the previous computation(if no initial val, first element of array = value of accumulator)
// curr = current value [1,2,5,4]
// i = index 
// arr = array [numReduce]




// Difference between Map and ForEach

// Both are used to loop through a an array

// const arr = [6,5,78,5,4]
// const mapResult =arr.map((arr)=>{
//     return arr + 2
// })
// // this will return an Array with increment of 2
// because it return an array we can chain more functions
// const forEachResult = arr. forEach((arr)=>{
//     return arr+2
// })
// console.log(mapResult , forEachResult);
// this will not return anything
// because it doesn't return anything  we cant chain more functions



// FUNCTIONS
// function definition or function declaration or function statement
// let num = 3
// function double(num){
//     return num*num
// }
// console.log(double(num) );


// // Storing a function in a variable is called as functions a Expression
// const square = function double(num){
//     return num*num
// }
// console.log(square(4));


// First Class Functions
// Function can be treated as variable called a first call function
// when a functions is passes to another functions those functions are called as
// first class functions
// function add(num1, num2){
//     return num1+ num2

// }
// function displayAdd(fn){
//     console.log(fn(3,4));
    
// }
// displayAdd(add);



// // IIFE (Immediately invoked function Expressions)
// An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.

// (function multiply(num){
//     console.log(num*num);
    
// })(3);

// // Question With IIFE 
// (function(x){
//     return(function(y){
//         console.log(x);
        
//     })(2);
// })(1);
// first i will check for x in the inner scope when it is not found there it will look for it in the parent scope: This happen because of closure(closure is the ability of a function to access the variables and functions that are lexically out of its scope)


// Function Hoisting
// using an variable declaring give is an error (because of hoisting)
// but in Functions functions are hoisted Fully that means if you use a function before declaring it , it will still work fine (because the function are stored in heap full)
// name()
// function name() {
//     console.log("Hello");
// }



// params VS Arguments

// function name(num) { //params

//     console.log(num*num);
// }
// name(3) //Arguments


// REST AND SPREAD OPERATOR 
// function doSomething(...Rest){ //Rest
//     console.log("Do Something",Rest);
// }
// var block=[5,4]
// doSomething(...block) //spread
// console.log(...block); //spread

//while using  ... it should the last operator


//CallBack Function
// a call back function is a function passed into another function as an argument 

// setTimeout(() => {
//     console.log("Bello");
    
// }, 3000);

// Arrow Functions
// const more = (z)=>{
//     return z*z
// }
// console.log(more(7));

// Arrow functions are primarily used in JavaScript to write more concise and readable code by offering a cleaner syntax, particularly for short functions where you can implicitly return values
// it is different from traditional function In SYNTAX
// Implicit "Return" Keyword
// in traditional function we can have argument without passing the parameters in arrow function it will give us an error of argument is not defined

// this Keyword
// let user={
//     username:"Wello",
//     t1:()=>{
//         console.log("global" ,this.username);
        
//     },
//     t2(){
//         console.log(this.username);
        
//     },
// };
// user.t1();
// user.t2();



//CLOSURE: ability gives to function from inner scope to outer scope
//Lexical Scope: a variable declared outside a function can use b used inside a function 
// Var is GLOBAL SCOPE LET HAVE BLOCK SCOPE

// function subscribe(){
//     let name = "Something"; 
//     function displaySome(){
//         console.log(name);
//     }
//     displaySome()
// }

// subscribe()


// Currying: it a function that takes one argument at a time and returns a new function in expectation of new argument f(a,b) f(a)(b)


function a(b){
    return function(v){
        return `${b}${v}`
    }
}
console.log(a(3));


function a(b){
    return function(v){
       return function(r){
        return b+v+r
        }
    }
}
console.log(a(3)(4)(5));

function evaluvate(operation){
    return function(a){
        return function(w){
            if(operation==="sum") return a+w;
            if(operation==="sub") return a-w;
            if(operation==="mul") return a*w
            if(operation ==="div") return a/b
        }
    }

}
console.log(evaluvate("sum")(4)(4));


// infinite Currying


function add(a) {
    return function(b) {
        if (b) return add(a + b);
        return a;
    }
}

console.log(add(3)(4)(5)()); // Output: 12