console.log("==============Object Oriented===============");
const user={
    name:"Aaqib",
    age:13,
    getUser:function(){
            console.log("From User" , this.name);
        }  
}
console.log(user);
user.getUser()
