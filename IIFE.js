// Immediately Invoked Function Expressions (IIFE)

(function name() { //named IFFE
    console.log("DB CONNECTED");
    
    
})();


((name)=>{ //you can pass params also
console.log(`I am ${name} WITH ;`);

})("IFFE");


