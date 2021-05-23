// console.log(a);
// Gives a Reference error
// Reference error - When trying to access the variable in a temporal dead zone.

let a = 10;

console.log(a);

var b = 100;

// Identifiers declared as let are allocated memory separate from the Global scope.

// The phase in which a variable is assigned 'undefined' in a separate memory space (scope) and remains in that phase until
// it is initialized some value is called Temporal Dead Zone.

// let a = 200; 
// throws Syntax Error
// let can't be overridden to re-declare the variable

const c = 1000;
// Syntax Error 
// c = 1000;

// c = 10000; 
// Type Error 

console.log(c);