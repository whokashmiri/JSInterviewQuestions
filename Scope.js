// Global And Local Scope
let a = 22;
const b =43;
let c =65;
// what is written within the {} is called block scope
// what is written outside is called as Global Scope

console.log(a);
console.log(b);
console.log(c);
console.log("=================Scope-2====================");

function one(){
    const user="Me";
    function two(){
        const web="tube"
        console.log(user);   
    }
    // console.log(web);
    two() 
}
one()

if(true){
    const user="hi"
    if(user=="hi"){
        const web ="book"
        console.log(user + web);
        
    }
    // console.log(web);
    
}
// console.log(user);

// when you hold a function in a variable is called as expression

console.log("++++++++++++++++This and Arrow function++++++++++++++++++");

const userr={
    username:"a",
    price:23,
    welcomeMessage : function(){
        console.log(`${this.username} , welcome`);
        
    }
}
console.log(userr);
userr.welcomeMessage();


function keh(){
    let us = "pool"
    console.log(this);
    
}
keh()
//In traditional functions this will be undefined

const kehwa = function(){
    let us = "pool"
    console.log(this);
   const conn = function(){
    let us = "pool"
    console.log(this);
    }
    conn()
    
}
kehwa()



const kehw = ()=>{
    let us = "pool"
    console.log(this); 
}
kehw()




const lop  = (n1 ,n2)=>{ //after using {} you have to use return  (explicit return)
    return n1+n2;
}
console.log(lop(3,5));


const lopp  = (n1 ,n2)=>  (n1+n2); // Implicit return
console.log(lopp(3,5));


