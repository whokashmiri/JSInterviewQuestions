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

