console.log("=======Functions Again======");
function func(){
    console.log("this");
}
func()

function add (num1 , num){
    return num1+num;
}
console.log(add(4,undefined));

function cal(...number){
    return number
}
let fd = cal(2,4,6,3);
const sum = fd.reduce((acc,curr)=> acc+curr)
console.log(sum);
let forSum =0;
for (let index = 0; index < fd.length; index++) {
   
    console.log(forSum+= fd[index]);
    
    // const element = fd[index];
    // console.log(element);
     
}

// fd.map((item)=>{
//     console.log(item);
    
// })



