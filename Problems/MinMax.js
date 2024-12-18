console.log("==================for loop=====================");
const  array = [2,6,5,4,8,5]
let mix= array[0];
let max = array[0];

for(let i=0 ;i<=array.length; i++){
    if(array[i]>max){
        max= array[i]
    }
    if(array[i]<mix){
        mix=array[i]
    }
    
}
console.log(`Max is ${max} and Min is ${mix}`);

console.log("==================Math.min And Math.max=====================");

const arr = [6,5,9,8,4]
const min = Math.min(...[arr])
const man = Math.max(...[arr])

console.log(`Max is ${max} and Min is ${mix}`);


console.log("==============reduce() with Math.min And Math.max==================");
const redArr = [5,6,2,4,5]
const maxx = redArr.reduce((acc , curr)=> Math.max(acc,curr))
const minn = redArr.reduce((acc , curr)=> Math.min(acc, curr))
console.log(`Max is ${maxx} and Min is ${minn}`);


