// A Promise in JavaScript is like a placeholder for a value that you don't have yet but will get in the future. It's useful for handling tasks that take time to complete, like fetching data from a server.

// synchronous coding the normal way


setTimeout(() => {
    console.log("Asynchronous Code");
    
    
}, 1000);
// -executing code line by line is the synchronous code

console.log("Synchronous Code");
console.log("Synchronous Code");
console.log("Synchronous Code");


const sub = new Promise((resolve , reject)=>{
    setTimeout(() => {
        console.log("Promise");
        const result =true;
        if(result) resolve(" from True")
        else reject( new Error ("From REject"))
        
    }, 2000);
})
.then((res)=>{
console.log(res);

}).catch((err)=>{
    console.log();
    
})
console.log("Promises ended");

