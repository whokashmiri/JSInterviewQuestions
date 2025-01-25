const some = ["A", "B", "C", "D", "E"];
const value = some.forEach((item)=>{
    console.log(item);
    
})
console.log(value);


const myNums = [1,2,3,4,5,6,7]
const num = myNums.filter((item)=>{
    return(item >4);
    
})
console.log(num);


const yourNums = [1,2,3,4,5,6,7]
const  your  = yourNums.map((item)=>{
    return item + 1
})
console.log(your);

const str = yourNums.map((num)=>num*2).map((num)=>num+"A")
console.log(str);


const redNums = [1,2,3,4,5,6,7]
const red = redNums.reduce((acc, index)=>{
    return acc +index
})
console.log(red);
