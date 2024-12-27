let obj = {name:"Aaqib"}
let lop = function hello(){
return `hello ${this.name}`;

}
console.log(lop.call(obj))


let ob2 = {name:"Aaqib"}
let lop2 = function hello( profession, age){
return `hello ${this.name} he is in ${profession} age ${age}`;

}
console.log(lop2.apply(ob2,["It" , 32]))

let ob3 = {name:"Aaqib"}
let lop3 = function hello( profession, age){
return `hello ${this.name} he is in ${profession} age ${age}`;

}
let func= lop3.bind(ob3)
console.log(func("It", 56))
