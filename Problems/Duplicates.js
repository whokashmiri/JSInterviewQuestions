
console.log("==================Set=====================");
const findDuplicates =()=>{
    let seen = new Set()
    let duplicates = new Set();
     array.forEach((element) => {
        if(seen.has(element)){
            duplicates.add(element)
        }else{
            seen.add(element)

        }
        
     });
     return [...duplicates]

}

const  array = [1,2, 6,5,6,5,4,5]
console.log(findDuplicates(array));

console.log("==================Object=====================");

const findDuplicate=(arr)=>{
    let counts = {};
    let duplicates =[];
    arr.forEach((element)=>{
        counts[element] = (counts[element] || 0) +1
    })
    for(let key in counts){
        if(counts[key]>1){
            duplicates.push(Number(key))
        }
    }
    return duplicates

}
  const arr = [1, 2, 3, 4, 5, 1, 2, 6];
  console.log(findDuplicate(arr)); // Output: [1, 2]
  

  console.log("==================Filter and IndexOf=====================");

  const filDup=(filArr)=>{
    return filArr.filter((item , index)=>filArr.indexOf(item) !==index)
  }

  const filArr = [6,5,2,5,3]

  console.log(filDup(filArr));
  
