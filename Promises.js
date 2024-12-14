// A Promise in JavaScript is like a placeholder for a value that you don't have yet but will get in the future. It's useful for handling tasks that take time to complete, like fetching data from a server.

// synchronous coding the normal way

function hello(){
    setTimeout(() => {
        console.log( "A: Asynchronous Code");
        
        
    }, 1000);
    
}

// -executing code line by line is the synchronous code

console.log("Synchronous Code");
console.log("Synchronous Code");
console.log("Synchronous Code");


const sub = new Promise((resolve , reject)=>{
    setTimeout(() => {
        console.log("Promise");
        const result =true;
        if(result) resolve(" from True")
        else reject( new Error ("From Reject"))
        
    }, 100);
})
.then((res)=>{
console.log(res);

}).catch((err)=>{
    console.log();
    
})
console.log("Promises ended");


//Promise Combinator
// Promise.all Return All fulfilled Promises
// Promise.race  returns the first encountered promises
//promise.allsettled return all the promises whether fulfilled or rejected
//promise.any  returns the first fulfilled promises

// async await

const result =async()=>{
    const message1 = await hello()
    console.log("message1");
    
}
result()


//We Can Use TRY and Catch also

 
// let x = 10;
// try {
//     if(x===10){
//         console.log("i am 10",x);
        
//     }
    
// } catch (error) {
//     console.log(error);
    
    
// }


console.log("START");
 const pro = new Promise((resolve , reject)=>{
    console.log(5622);

 });pro.then((res)=>{
    console.log("resrult: ", res);
    
 })
 console.log("end");
 
