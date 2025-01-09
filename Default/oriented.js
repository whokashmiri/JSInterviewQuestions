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

console.log("==============Getter and Setters===============");
class User{
    constructor (email , password){
        this.email = email;
        this.password = password
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value

    }
    get password(){
        return this._password.toUpperCase()
    }
    set password(value){
         this._password = value.toUpperCase()
    }
}
const me  = new User("Aqib.me" , "avf")
console.log(me.password);
console.log(me.email);
