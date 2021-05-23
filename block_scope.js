// if(true){
//     // Also known as Compound Statement
//     var a = 10;
//     console.log(a);
// }

// It is a block
var a = 100;
let b = 100;
{
    // The variables and functions that are accessible inside the block is called block scope
    var a = 10; // This line re-initializes a to 10
    let b = 20;
    const c = 30;
    // let & const are block scoped
    // They are hoisted in separate memory space ("Block"). 
}
// Shadowing occurs
// b and c are not accessible outside the block

console.log(a);
//console.log(b);
//console.log(c);
console.log(b); // prints the b of the script scope
// one b is in block scope and another in script scope
// same happens with const 