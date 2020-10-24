var life = 100;

life = life - 10;

var name = "Vaidhyanathan S M"


var checkout = false;


var box; // undefined


//new way

const something = 1000;

// something = something + 100; - can't do this


let num = 1000;

function logger(){
    console.log("Party Time!");
    console.log("Party Time!");
    console.log("Party Time!");
    console.log("Party Time!");
    console.log("Party Time!");
    console.log("Party Time!");
}


function toUpper(text){
    var upperCased = text.toUpperCase();
    console.log(upperCased);
}


console.log(num);
logger();
toUpper(name);


const toLower = () => {
    // do something
}

// String concatenation

console.log('Hello my name is ' + 'Vaidhyanathan S M');

console.log(`Hello my name is ${name}`);

// typeof to check the data type of the variable
console.log(typeof name);

// conditional statements in Js
 const age = 19;

 if(age >= 18)
    console.log("Eligible!");
 else console.log("Not Eligible");

 // == is used to check only the values and === checks for both values and types
 
 if( age === 18)
 console.log('Perfect!')