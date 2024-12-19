const arr = [6,6,8,4]
console.log(largestSecond());

function largestSecond() {
    if(arr.length<2){
        return null;
    }
    let a=-Infinity
    let b= - Infinity
    arr.forEach((element) => {
        // if(arr[element]>arr[element+1]){
            if(element>a){
                b=a
                a=element    
        }else if(element>b){
            //console.log(element &&element !== a);
            second = element;
        } 
    });
    return b
}


// filter Method
// Purpose: Creates a new array with all elements that pass the test implemented by the provided function.
// Returns: An array of all matching elements.

// find Method
// Purpose: Returns the value of the first element in the array that satisfies the provided testing function.
// Returns: The first matching element, or undefined if no match is found.