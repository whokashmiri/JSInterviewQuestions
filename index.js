function shadowing() { //Shadowing
    let a= "hello";
    if(true){
        let a = "hi";
        console.log(a);    
    }
    console.log(a);
  
}
shadowing();
// The variable "hello" is shadowed by "hi" which is inside if statement

function abc(){
    console.log(a);
    var a = 67;   
}
abc();
// this is called Hoisting
// JS first storedall the variable in the creation phase 
// it will be like this this i creation phase
// var c;


// function abc(){
//     console.log(a);
//     var a = 67;   
// }
// abc()


// MAP FILTER REDUCE
// Map() is used to create a new array from existing one 

const nums = [1,2,5,4]
const mulThree = nums.map((num , index , newArr)=>{
    return num*3
})
console.log(mulThree);
// map takes three parameters ( current element  index and the array on which the map is being performed)

// Filter() it returns those elements of an array which satisfy a given condition
const numsFilter = [1,2,5,4]
const moreThan  = numsFilter.filter((numsFilter , index , arr )=>{
    return numsFilter>2;

});
console.log(moreThan);
// filter takes three parameters ( current element  index and the array on which the map is being performed)

// Reduce() it reduces the values of array to the one value
const numsReduce = [1,2,5,4]
const sums = numsReduce.reduce((acc , curr , i , arr)=>{
    return acc + curr
},0)
console.log(sums);
// it take a callback function and initial value
// acc = accumulator it is result of the previous computation(if no initial val, first element of array = value of accumulator)
// curr = current value [1,2,5,4]
// i = index 
// arr = array [numsReduce]




// Difference between Map and ForEach

// Both are used to loop through a an array

const arr = [6,5,78,5,4]
const mapResult =arr.map((arr)=>{
    return arr + 2
})
// this will return an Array with increament of 2
// because it return an array we can chain more functions
const forEachResult = arr. forEach((arr)=>{
    return arr+2
})
console.log(mapResult , forEachResult);
// this will not return anything
// because it doesnt return anything  we cant chain more functions





