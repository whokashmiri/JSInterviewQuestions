let evenOdd = [5,6,4,7,3]

const arr = evenOdd.reduce((acc,curr)=>{
 acc = acc+curr;
return acc
},0)
console.log(arr);

let array = [5,6,4,7,3]
let sum =0;

for (let index = 0; index < array.length; index++) {
    sum = sum + array[index]
    
  }
  console.log("Sum Is here",sum);

for (let index = 0; index < evenOdd.length; index++) {
 
  
    {
    if(evenOdd[index]%2==0) {
        console.log("Even",evenOdd[index]);
        
    }else {
        console.log("Odd",evenOdd[index]);
        
    }
}
}
console.log(evenOdd);


 
