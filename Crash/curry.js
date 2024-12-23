// Currying: it a function that takes one argument at a time and returns a new function in expectation of new argument f(a,b) f(a)(b)
// function f(a){
//     return function(b){
//         console.log(a,b);
        
//     }
// }
// (f(5)(4));

function add(a){
    return function (b){
        if(b) return add(a+b)
            return a;
    };

}
console.log(add(2)(2)(8)());
 

function pr(a){
    return function (b,c){
        return(a+b+c)
    }
}
console.log(pr(32)(3,6));

