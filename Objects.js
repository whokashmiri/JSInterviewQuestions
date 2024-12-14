// Objects

// Object literal
const user={
    name:"Vanessa",
    "full Name":"Vanessa",
    age:30,
    location:"California",
    email:"vanessa@gmail.com",
    isLoggedIn:false
}
console.log(user);
//two ways to excess objects 1 with . another with []
console.log(user.email);
console.log(user["email"]);
console.log(user.name);
console.log(user["full Name"]);
//=======================Objects 2==========================
console.log("++++++++++++++Objects 2 ++++++++++++++++++++++");


const tin = new Object() //This Is Single ton


const tinUser= {} //non Singleton


const regUser ={
    email:"some@gmail.com",
    fullName:{
        fName:"abc",
        lName:"cd",
        address:{
            state:"JK",
            district:"BPR"
        }
    }
}
// console.log(regUser);
// console.log(regUser.fullName.address.state);
const obj1 ={1:"a" , 2:"b"}
const obj2 ={3:"a" , 4:"b"}
const obj4 ={5:"a" , 6:"b"}
const obg3 = Object.assign(obj1 , obj2, obj4)

const obg5 ={ ...obg3}
console.log(obg5);

console.log(obg3);
console.log(obg3===obj1);
console.log(obj1.toLocaleString());



console.log("===================Objects De Structure=======================");


const coarse ={
    name:"json",
    price:"333",
    instructor:"me"
}
console.log(coarse);
console.log(coarse);
console.log(coarse.price);

const {instructor} =coarse;
const {instructor:ins} =coarse;
console.log(instructor);






