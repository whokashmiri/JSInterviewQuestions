console.log("Destructuring");
let person ={
    fName:"Aaqib",
    lName:"Mir"
}
let {fName:nae} = person
console.log({nae , ...person});

// console.log(person);
// console.log(person.fName);

// let {fName:name} =person
// console.log(name);

// const numbers = [1,2,3]
// let [lot] = numbers
// console.log(lot , ...numbers);


// const arr= [1,2,3,4,5]
// const [a, b ,...c] = arr
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(arr);

let person1 ={
    fName:"Aaqib",
    lName:"Mir",
    mName:"Bashir",
    gName:"Muslim",
    func:()=>{
    console.log("functioms");

    }
}
// let {fName , lName, ...mName} = person1
// console.log(fName);
// console.log(lName);
// console.log(mName);


// console.log(person1);

const user = {
    id:32,
    info:{
        name:'Vanaaqi',
        address:{
            city:"#$#4",
            zip:45454
        }
    }
}
function getuser({info:{name,address:{city ,zip}}}){
    console.log(name);
    console.log(city);
    console.log(zip);
    
}
getuser(user)




