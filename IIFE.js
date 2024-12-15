// Immediately Invoked Function Expressions (IIFE)

(function name() { //named IFFE
    console.log("DB CONNECTED");
    
    
})();
// An Immediately Invoked Function Expression (IIFE) is a function that runs as soon as it is defined.
//Don't forget put ; in IFFE 

// Benefits of Using IIFE
// Avoid Global Scope Pollution: IIFEs help keep the global scope clean by encapsulating variables and functions within a local scope.

// Private Variables and Functions: IIFEs allow you to create private variables and functions that cannot be accessed from outside the function

// Avoid Hoisting Issues: Variables and functions declared within an IIFE are not hoisted to the global scope, reducing the risk of unexpected behavior.

((name)=>{ //you can pass params also
console.log(`I am ${name} WITH ;`);

})("IFFE");


