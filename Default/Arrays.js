// Arrays
// On performing copy operations create Shallow Copies(means when you copy an array if you modify the copied array that will modify the original Array)
const arr = [1,2,3,8,4]
console.log(arr);

const arr2 = new Array(1,2,3,4,5);
console.log(arr2);
console.log(arr2[2]);
arr2.push(9,8,7,"F",0)
// add elements
console.log(arr2);
arr2.pop()
// removes Element at the end
console.log(arr2);

arr.unshift(99)
console.log(arr);
// add Element at the first index
arr.shift(99)
// removes Element at the first index
console.log(arr);

console.log(arr.includes(4));
//checks if the given element is present (true or false)
console.log(arr.indexOf(0));
//checks the the index of  given element .if not present prompts -1

const newArr = arr.join()
console.log(newArr);
console.log("++++++++++++++Splice and Slice+++++++++++++++++");

// console.log("ARR1",arr2);
// console.log(arr2.slice(1,3))
// sLICE will return the elements from (1 TO (3-2) ) WILL NOT modify the original array


//console.log("arr2",arr2);
//console.log(arr2.splice(1,3))
// Splice will return the elements from (1 TO (3) ) modify the original array
//console.log(arr2);
console.log("====================Arrays 2=========================");


const heres = ["A" , "W" ,"YU"]
const here = ["6" , "8" ,"Y6"]
heres.push(here);
//Pushes on existing array
// console.log(heres);
// console.log(heres.concat(here));
// console.log(...here);
const inArr =[1,[2,2,[6,5,[6,0],4],3]]
// console.log(inArr.flat(Infinity));
// console.log(Array.from({name:"ajhsd" , age:34}));


console.log("++++++++Again Arrays++++++++");

const ar =[1,2,3,4, true]
console.log(ar);
const strArr = ["A " , "B" , "C"]
console.log(strArr);

const newStrArr = new Array("ROPE" , "NEW" , "POK")
console.log(newStrArr);


console.log(newStrArr.concat(strArr).concat(ar));





