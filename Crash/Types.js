// var a = 34;
// let a = 36;
// const a=1;
function test(){
    let a  = "Hello"
    if(true){
        let a ="h1";
        console.log(a);
        
    }
    console.log(a);
}
test()
// const cant be used without giving some value 
// map is method used to returns a new array from the existing one
// in params map have individual element and the whole array
let arr = [6,5,9,7]
let newarr = arr.map((item)=>{
   return item+3


})
console.log(newarr);

let near = arr.filter((item)=>{
    return item>5
 
 
 })
 console.log("filter"+near);

let nearr = arr.reduce((acc, item)=>{
    return acc= acc+item
 
 
 })
 console.log(nearr);


 //Difference between map and for each
//  map returns a new array while as forEach don't
//  chaining is allowed in map not in foreach