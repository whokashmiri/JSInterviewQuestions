// CALL BIND APPLY
//CALL

var obj ={name:"Something"};
function hello(age){
    return "Hi" + this.name + age
}
console.log(hello.call(obj,52));
// CALL is used to call the Object/function which we wanna call from the function

var obj ={name:"Something "};
function hello(age ,from){
    return "Hi " + this.name + age + from
}
console.log(hello.apply(obj, [52 ," from Apply"]));


//works same as call but takes arguments in the form of array 


var obj ={name:" Fom BIND Something "};
function hello(age , from){
    return "Hi" + this.name + age + from
}
const bindFun = (hello.bind(obj));
console.log(bindFun(32 , " KASHMIR"));



//The bind method in JavaScript is used to create a new function that, when called, has its this keyword set to the provided value. This is particularly useful when you want to ensure that a function uses a specific this context, regardless of how it is called