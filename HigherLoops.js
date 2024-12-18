console.log("===============Higher Order Loops=================");
//Point to remember Use for-of or forEach Loop for Arrays and for-in for objects

const arr1 = [1,2,3,4,5,6]
for (const element of arr1) {
    console.log(element);
    
}
const greetings ="Hello World";
for (const greet of greetings) {
    // console.log(`Each Char ${greet}`);
    
}


const map = new Map()
map.set("USA", "USA")
map.set("FR", "FRANCE")
map.set("PAK", "PAKISTAN")
map.set("PAK", "PAKISTAN")
//map don't include duplicates
console.log(map);

for (const element of map) {
    console.log(element);
    
}


for (const [element, value] of map) { // another way print individual elements and keys
    console.log(element,value);
    
}


const myObj = {
    "g1":"NFS",
    "g2" :"Game"
}

// for (const element of myObj) { // by this for of loop u cant loops and object
//     console.log(element);
    
// }


const oneObject ={
    js: "JavaScript",
    Cpp: "C PLUS PLUS",
    rb: "Ruby"
}
for (const key in oneObject) { // use for in loop to iterate an Object
    console.log(` ${key} for ${oneObject[key]} `);
    
}

const programming =  ["js" , "ad" , "hf"]

for (const key in programming) {
    console.log("the KEy ",key);
    console.log(programming[key]);
    
}

const code = ["js" , "ad" , "hf" , "lo" , "ki"]
code.forEach((item, index , arr)=>{
    console.log("ALl", item , index, arr);
    
})

code.forEach(function(item){
    console.log("Traditional", item);
    
})

code.forEach((item)=>{
    console.log("Arrow", item);
    
})


const myCode =  [
    {
        lang :"java",
        lange:"lo"
    },
    {
        lang :"HAVA",
        lange:"MAY"
    },
    {
        lang :"LAVA",
        lange:"54"
    }
]
myCode.forEach((item)=>{ //iterate array of object useful in when fetching data
    console.log(item.lang);
    
})


