console.log("======Arrays Rewind======");

const arr = [0,1,2,3,6,5,4 ,"c" , "4"]
// console.log(arr.join("a"));
console.log(arr);
arr.push(9)
console.log(arr);
arr.pop()
console.log(arr);
for (let index = 0; index < arr.length; index++) {
    if (typeof(arr[index]) == "number") {
        // console.log(arr[index]);   
    }   
}


const myArr = [1,2,3,4]
const myNumArr = [5,6,7]
myArr.push(myNumArr);
console.log(myArr); //this will log the array in array


const myAr = ["a","b","c"]
const myAl = ["d","e"]

console.log("Merged",myArr.push(myAl));//this will log the length of the array of two arrays
const from = "VANESSA"
console.log(Array.from(from));
let fro = ["A","A" ,"Q", "I", "B"]
console.log("from",[...from]);
let a= "a"
let b = "b"
let c ="c"
console.log(Array.of(a,b,c));










