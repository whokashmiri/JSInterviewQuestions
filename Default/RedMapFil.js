console.log("=======Reduce Map Filter=======");

const myNums = [1,2,3,4,5,7]
const newNums = myNums.filter((item)=>{
    return item>4
})
console.log(newNums);

const newNum = []
myNums.forEach((num)=>{
    if(num>2){
        newNum.push(num)
    }
})
console.log(newNum);


const books = [ 
    { title: "To Kill a Mockingbird", genre: "Fiction", publishedYear: 1960, edition: "1st" },
    { title: "1984", genre: "Dystopian", publishedYear: 1949, edition: "1st" },
    { title: "The Great Gatsby", genre: "Classic", publishedYear: 1925, edition: "1st" },
    { title: "The Catcher in the Rye", genre: "Fiction", publishedYear: 1951, edition: "1st" },
    { title: "Moby-Dick", genre: "Adventure", publishedYear: 1851, edition: "1st" },
    { title: "Pride and Prejudice", genre: "Romance", publishedYear: 1813, edition: "1st" },
    { title: "The Hobbit", genre: "Fantasy", publishedYear: 1937, edition: "1st" },
    {title: "War and Peace", genre: "Historical", publishedYear: 1869, edition: "1st" } 
    ];

    
   let bk = books.filter((book)=>{
      return book.genre==="Fantasy"
    
    })
    console.log(bk);
    

    const myNumbers = [1,2,3,4,5,7]
    myNumbers.map((num)=>{
       console.log( num+10);
       
    })
   books.map((bk)=>{
   
    if(bk.publishedYear<1900){
        console.log(bk.title);   
    }   
    })

    const myNumber = [1,2,3,4,5,7,8,9]
    const newNumbers =  myNumber
    .map((num)=>num+4)
    .map((num)=>num*3)
    .filter((num)=>num%2)
    console.log(newNumbers);


    const myNumb = [1,2,3]
   const start = myNumb.reduce(function(acc , curr){
    console.log(`${acc} and ${curr}`);
    
        return acc+curr

    },0)
    console.log(start);

    const myNub = [0,2,3]
    const star = myNub.reduce((acc , curr)=>{
     console.log(`${acc} and ${curr}`);
     
         return acc+curr
 
     },0)
     console.log(star);
    
    

    