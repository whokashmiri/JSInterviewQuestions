//MAP Pollphil

// Array.map((num , i , arr)=>{})

    Array.prototype.myMap = function(cb){
         let temp = [];
         for(let i = 0; i<this.length; i++){
            temp.push(cb(this[i] , [i] , this))

         }
         return temp;
    }

    const nums = [2,5,6,4,1];
    const multwo = nums.myMap((num , i , arr) => {
        return num  *2;
    });
    console.log(multwo);

    //Filter Pollphil
    Array.prototype.myFilter = function(cb){
        let temp =[]
        for (let index = 0; index < this.length; index++) {
            if(cb(this[index] , index, this)) 
                temp.push(this[index])
            
        }
        return temp
    }
    const numsFilter = [2,5,6,4,1];

    const moreTwo = numsFilter.myFilter((numsFilter)=>{
        return numsFilter >2

    }
);
console.log(moreTwo);


  //reduce Pollphil
  Array.prototype.myReduce = function(cb, initialValue){
    var accumulator = initialValue;
    for (let index = 0; index < this.length; index++) {
        accumulator = accumulator ? cb(accumulator , this[index] , index, this): this[index]
    }
    return accumulator;
  }

  const reduceNums = [2,1,9,5,9,7]
  const sum = reduceNums.myReduce((acc, cur , i , arr)=>{
    return acc +cur
  },0)
console.log(sum);

  //call Polyphil

  let car1 ={
    color: "black",
    company:"BIADU",
  };
  function buyCar(curr , price){
    console.log(`${this.color} and ${this.company} ${curr} and  ${price}`);
    
  }
  Function.prototype.myCall = function(context= {} , ...args){
    if(typeof this !== "function"){
        throw new Error (this + "Not Callable")
    }
    context.fn = this;
    context.fn(...args)
  }

  buyCar.myCall(car1 , "$" ,84555)

 //apply Polyphil

  let car2 ={
    color: "black",
    company:"BIADU",
  };
  function buyCar(curr , price){
    console.log(`${this.color} and ${this.company} ${curr} and  ${price}`);
    
  }
  Function.prototype.myApply = function(context= {} , args=[]){
    if(typeof this !== "function"){
        throw new Error (this + "Not Callable")
    }if(!Array.isArray(args)){
        throw new Error("Provide an Array")
    }
    context.fn = this;
    context.fn(...args)
  }

  buyCar.myApply(car1 , ["$" ,84555])


  //Bind Polyphil

  let car3 ={
    color: "black",
    company:"BIADU",
  };
  function buyCar(curr , price){
    console.log(`${this.color} and ${this.company} ${curr} and  ${price}`);
    
  }
  Function.prototype.myBind = function(context= {} , ...args){
    if(typeof this !== "function"){
        throw new Error (this + "Not Callable")
    }
    context.fn = this;
    return function(...newArgs){
        return context.fn(...args, ...newArgs)
    }
    
  }
  
  const newFunc  = buyCar.myBind(car3 ,"%")
 newFunc(84555);
  





