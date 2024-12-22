let arr = [2,3,4,56,78 ,99]
let target = 78;

let start = arr[0]
let end = arr.length-1
let mid = start + Math.floor((end - start) / 2);
console.log(mid);
console.log(start);
console.log(end);
if(arr[mid] == target){
    console.log(mid);
  
}
if(arr[mid]>target){
    start = arr[mid+1]
}
else
     low = mid + 1;



