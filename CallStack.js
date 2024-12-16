// Execution Context
// Important for Interviews 
//JavaScript is single Threaded
// First  Code goes to Global EX Context(This)
//Function Ex Context

// 1 Phase -> memory Creation Phase or creation phase
// first all variables gives memory and given "undefined" as value and function names given its definition

// 2 Phase -> Execution Phase
// in this phase variables are given actual values and function don't have values they have definitions only

// when the function is called (let result  = forEg(val1, val2...)) New variables environment and new execution thread is created . whenever the function is called this thing happen (that means Creation phase and Execution Phase will happen again for the functions)after the work is done in this . it Will be deleted

//Call Stack

// Consider we have methods one() two() three() we call one() function  it is taken to the Global Execution then Kept in Stack -> once one() is executed is it removed from the stack
// when you call function in a function Stack will follow the LIFO(last in first Out)

