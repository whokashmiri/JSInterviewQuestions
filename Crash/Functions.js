// function func(){
//     let name = "Mozi";
//     function dName(){
//         console.log(name);
        
//     }
//     return dName;
// }
// let myFunc = func()
// myFunc()

function add(n1 , n2){
    console.log(n1 + n2);
    console.warn(n1 - n2);
    let result = n1 * n2;
    return result ;
    
}
// add(32,43)
// console.log(add(4,4));

// console.log(add(4,2));
function cart(...num){
    let num1= 0
    num.map((item)=>{
  return num1 += item
   

    })
    return num1
}

 console.log(cart(1,2,3,4));
