// Lexical environment - is the local environment + the lexical environment of the parent. 
// Scope Chain - The whole set/chain of lexical environments is known as scope chain.
function f(){
    var x = 10;
    console.log(x);
}


//  fn is lexically inside the global scope 
// i.e., fn has access to local memory + lexical environment of the parent, 
// but the global lexical env has no parent and points to null
function fn(){
    var a = 20;
    fnn();
    // fnn is lexically inside fn 
    // lexical parent of fnn is fn 
    function fnn(){
        // access to local memory + lexical environment of the parent i.e., fn
        console.log(a);
        // when the above line is executed, the JS engine checks for the variable a in the local environment and 
        // the lexical environment of the parent i.e., fn. 
    }
}


f();
fn();
// console.log(x);
// console.log(a);
    
