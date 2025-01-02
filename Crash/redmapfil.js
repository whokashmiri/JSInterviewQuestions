console.log("Loops");
const coding = ["js", "c" , "c++" , "java"]
const lang = coding.forEach((item)=>{
    // console.log(item);
    
})
//foreach does not return anything
let nums=[1,2,3,4,5]
 const item = nums.filter((item)=>  item>2)
console.log(item);
//filter have call back also
//creates new array
//filter returns




let numMap=[1,2,3,4,5,6,7]
// The map() method is an ES5 feature that creates a new array by applying a function to each element of the original array. 
let newMapArr = numMap.map((num)=>num+3);
console.log(newMapArr);






//The reduce method in JavaScript does not return a new array. Instead, it executes a reducer function on each element of the array, resulting in a single output value
