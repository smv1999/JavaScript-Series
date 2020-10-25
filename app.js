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


 // Arrays
 const schedule = [
     'Wake Up',
     'Eat',
     'Start Coding',
     'Watch Series'
 ];

 console.log(schedule);
 
 // add elements
 schedule.push('Sleep');
 
 console.log(schedule);

 console.log(schedule.pop());

 // unshift is used to add at the beginning and shift to remove from the beginning
 
schedule.unshift("something");

console.log(schedule);

// return the indexOf the element

console.log(schedule.indexOf('Eat'));


// JS Objects

const user = {
    name: 'Vaidhyanathan S M',
    age: 20,
    married: false,
    purchases: ['Phone', 'Computer'],
    sayName: () => {
        console.log(this.name);
    }
}
 
console.log(user.purchases);


// this function atumatically is registered in memory of the window object
function printsomething(){ 
    console.log("something great!");
}

// The above function can be accesed like below:
window.printsomething();

// this keyword in JS

console.log(this); // returns the window object by default

user.sayName();


// For and While loops in JS


//  for loop
const names = [
    'John',
    'Peter',
    'Harry',
    'Bob'
];

for(name of names){
    console.log(`Hello there ${name}`);
}

for(name of names){
    if(name === 'Harry'){
        console.log(name);
        break;
    }
}

// while loop

let loading = 0;

while(loading < 100){
    console.log('Website is still loading!');
    loading++;
}

// Accessing the HTML elements using the document object
const text = document.querySelector(".title");
// const changeColor = document.querySelector(".changeColor");

// text.style.color = "red";

// text.classList.add('change');

// changeColor.addEventListener('click', () => {
//     text.classList.toggle('change');
// });

// const userList = document.querySelectorAll(".name-list li");
const userList = document.querySelector(".name-list li");
const listInput = document.querySelector(".list-input");
const addListBtn = document.querySelector(".addListBtn");

console.log(userList);

// access each list element
// for(eachUser of userList){
//     eachUser.addEventListener('click', function (){
//         this.style.color = "red";
//         console.log(this);
//     });
// }

addListBtn.addEventListener('click', function() {
    const newLi = document.createElement("li");
    const liContent = document.createTextNode(listInput.value);
    newLi.appendChild(liContent);

    userList.append(newLi);
    listInput.value = "";
    // console.log(listInput.value);
});