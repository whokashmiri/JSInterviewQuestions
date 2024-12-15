// EVENT PROPAGATION
// Event propagation in JavaScript refers to the way events flow through the DOM (Document Object Model) tree. It consists of three phases:

// Capturing Phase: The event starts from the root of the DOM tree and travels down to the target element.

// Target Phase: The event reaches the target element.

// Bubbling Phase: The event bubbles up from the target element back to the root of the DOM tree.

// event.target vs this.target vs event.currentTarget

// event.target
// Definition: Refers to the element that triggered the event.
// this.target
// this refers to the element to which the event handler is attached.
// event.currentTarget
// Definition: Refers to the element to which the event handler is attached, regardless of where the event originated.


// 
//Event Capturing / Trickling
// Event capturing, also known as event trickling, is one of the phases of event propagation in JavaScript. It refers to the process where an event starts from the root of the DOM tree and travels down to the target element.stoPropagation will this Event capturing

// Event Delegation 
// event delegation
// Event delegation is a technique in JavaScript that allows you to handle events at a higher level in the DOM rather than attaching event listeners to individual elements

document.querySelector(".products").addEventListener("click" ,(event)=>{
    console.log(event.target);
    
})