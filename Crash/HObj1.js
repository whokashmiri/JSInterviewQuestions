console.log("====Objects====");
//singleton is created only with a constructor
//when creating with Object.create this is called singleton
let name = "Global"
const Juser = {
    name:"Aello",
    age:34,
    fname: function() {
        console.log("hello"); 
        console.log(this.age);
        
    },
     another : {
        
        myFunc:()=>{
            console.log(Juser);
            }
    }

}


console.log(Juser);
Juser.fname();
Juser.another.myFunc();


//Dynamic Adding
const pro = "fname"
const nam = "Aaqib Mir"
const OUser = {
    [pro]:nam
}
console.log(OUser);


const prac={
    a:"A",
    b:"B",
    c:"B",
    d:"D",
    e: function(){
console.log(this.a);
    },
    f:()=>{
        console.log(this.a);
        
    }
}
prac.e()
prac.f()
for(key in prac){
    
    console.log(key , prac[key]);
   
    
}


let person = {name:"Aaqib"}
const  mem = [person]
person= null
console.log(mem);


const val ={num:10}
const mul = (x ={...val})=>{
    console.log(x.num *= 2);
    
}
mul()
mul(val) // after passing the value it will modify the val to 20. 
mul()// then after calling the function again the total will 20*2 =40



const tinUser = new Object()
tinUser.name="sammy"
tinUser.age =32
// console.log(tinUser);
const regUser = {
    email:"me@gmail.com",
    fullname:{
        userFullName:{
            fname:"adsad",
            Lname:"dsfzd"
        }
    }
}
// console.log(regUser);
// console.log(regUser.email);
// console.log(regUser.fullname.userFullName);
//to combine two objects use Object.assign() or you can use spread operator (...)
console.log(Object.assign({},regUser ,regUser.fullname));





