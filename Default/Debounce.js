// Debouncing:
// in programming, debouncing is used to make sure a function doesn't run too often. For example, if you're typing in a search box, debouncing can make sure the search function only runs after you stop typing for a moment. This helps prevent performance issues.

// Purpose:
// Delays execution of a function until a certain amount of time has passed since the last e/vent trigger.

// Throttling in JavaScript is a technique used to limit the rate at which a function is executed. This is particularly useful for events that fire frequently, such as scrolling, resizing, or mouse movements, where you might want to avoid overwhelming the browser with too many function calls.
// Purpose:
//  Limits the frequency of execution of a function to a certain interval.
//Debouncing is a technique that’s used to keep an event handler from “bouncing” (executing) before a certain amount of time has passed regardless of how many times an event is triggered. In other words, a function (event handler) is “delayed” until the event (like a “click” or “scroll”) stops firing for a certain amount of time. 

const btn  = document.querySelector(".inc")
const btnPress  = document.querySelector(".incp")
const count  = document.querySelector(".count")

// ===================THROTTLING=POLYPHIL===============

var pressCount = 0;
var triggerCount =0;



const myTh = (cb , d)=>{
 let last =0;
 return (...args)=>{
    let now = new Date().getTime();
    if(now -last <d )return;
    last =now
    return cb(...args)
}
}

var thCount = myTh(()=>{
    count.innerHTML = ++triggerCount
},800);

btn.addEventListener("click",()=>{
    btnPress.innerHTML = ++pressCount;
    myTh()
    
})






//=====================DEBOUNCING=POLYPHIL==================
// var pressCount = 0;
// var triggerCount =0;

// const myde = (cd , d)=>{
//     let timer;
//     return function(...args){
//         if(timer) clearTimeout(timer);
//         timer = setTimeout(()=>{
//             cd(...args);
//         },d)
//     }
// }

// const deCount = myde(()=>{
//     count.innerHTML = ++triggerCount
// },800);
// btn.addEventListener("click",()=>{
//     btnPress.innerHTML = ++pressCount;
//     deCount()
    
// })






// const deCount = _.debounce(()=>{
//     count.innerHTML = ++triggerCount
// },800);
// btn.addEventListener("click",()=>{
//     btnPress.innerHTML = ++pressCount;
//     deCount()
    
// })
// const start = new Date().getTime();

// const throttleCount = _.throttle(()=>{

//     const now = new Date().getTime();
//     console.log(now-start);
    
//         count.innerHTML = ++triggerCount
//     },800);
//     btn.addEventListener("click",()=>{
//         btnPress.innerHTML = ++pressCount;
//         throttleCount()
        
//     })
