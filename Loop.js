console.log("Loops");

for (let i = 0; i < 10; i++) {
    const element = i;
    if(i==5){
        console.log("5 is here");
        
    }
    console.log(element)
}


for (let i = 0; i <=10; i++) {

    console.log(`Outer Loop: ${i}`); 
    for (let j = 0; j <= 10; j++) {
        // console.log(`inner Loop: ${i} and  ${j}`); 
        // console.log( `${i} * ${j}  = ${i*j}`);
        
    }
    
    
}


const myArr=['a','d','b','h','k']
for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    console.log(element);
    
}


for (let i = 1; i < 20; i++) {
    if(i==5){
        // console.log("5 is here");
        break;
    }
    // console.log(`value at ${i}`);
    
    
}




for (let i = 1; i < 20; i++) {
    if(i==5){
        
        console.log("5 is here");
        continue;
    }
    console.log(`value at ${i}`);
    
    
}