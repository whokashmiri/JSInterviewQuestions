//Type Conversion
let score ="33";
let scored ="23ab";
console.log(typeof(score));
let inScore = Number(score)
console.log(typeof(inScore));
console.log(Number(scored));
//"34" => 34
//"324es" => NaN
// null type 0
//undefined =NaN
//"" = false
//"some" = true
console.log("From Console");

console.log(33==="33");
console.log("33"+3 +"4");
console.log(1+3+"3");
console.log( "log","1"+3+"3");
console.log(33=="33");
console.log(33+"33");
console.log(33-"33");
console.log(33*"33");
console.log(3**3);
console.log(-(+2));
console.log(undefined==NaN);
console.log(undefined<0);
console.log(undefined>=0);

// DataTypes


// the way by which data is stored and excessed in the memory, Datatypes are divides into two categories 1. Primitives 2 . Non- primitives or Referenced Types

console.log(typeof(String));
console.log(typeof(Number));
console.log(typeof(Boolean));
console.log(typeof(null));
console.log(typeof(undefined));
console.log("symbol", (typeof(Symbol)));
console.log(typeof(BigInt));

console.log(typeof(Object));
console.log(typeof(Array));


// STACK AND HEAP MEMORY
// primitives are stored in stack memory while as Reference types are stored in Heap

let name = "aaqib"
let myname = name
myname = "saqib"
console.log(name);
console.log(myname);
let user={
    name:"werr",
    age:33
}
user.name="jab"
console.log(user);

// STRING

console.log("hello" + "world");
const nam= "aaqib     "
const lastName = "Mir"
console.log(`my name is ${nam} ${lastName.concat("kehnusa")}`);

const mynamc =  nam.trim(1,2)
console.log(nam.length);
console.log(nam.trim(23).length);
console.log(nam.split(" ")[0]);














