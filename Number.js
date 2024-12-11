// Number and Math========================
const score = 400
// in order to make sure that is type is that which you want use "new"
const balance = new Number(100)

console.log(score);
console.log(balance);

console.log(balance.toString());
console.log(balance);
const newNum = 123.4344
console.log(newNum.toPrecision(4));
const hundreds = 100000000
console.log(hundreds.toLocaleString());

// MATHS=========================
console.log("++++++++++++MATHS++++++++++++++");
console.log(Math);
console.log((Math.random()*100000).toPrecision(5));
;
const min = 1
const max =6
console.log(Math.floor(Math.random() * (max - min + 1) ) + min );


// +++++++++++++++++DATE AND TIME+++++++++++++++++++++
console.log("++++++DATE AND TIME++++++");
let myDate = new Date()
console.log(myDate);
console.log(myDate.toLocaleDateString());
console.log(myDate.toDateString());
console.log(myDate.toString());

let createdDate = new Date(2023 , 0 , 23)
console.log(typeof(createdDate));
console.log(createdDate);

let customDate = new Date("1-17-1998")
console.log(customDate.toLocaleString());

let timestamp = Date.now()
console.log(timestamp);

console.log(Math.floor((timestamp/1000)));
let newDate = new Date()
console.log(newDate.getDate());









