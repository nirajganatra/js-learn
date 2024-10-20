// primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score  = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTem = null
let userEmail; 

const id = Symbol("123");
const anotherId = Symbol("123");

// console.log(id === anotherId); false

const bigNumber = 123546464654131331464554n
// console.log(typeof bigNumber);

// console.log(typeof null);  object
// console.log(typeof undefined);  undefined 
// console.log(typeof Boolean); boolean 
// console.log(typeof Number); number 
// console.log(typeof String); string 



// refernces (Non primitive)

//array, Objects, Functions

const heros = ["shaktiman","naagraj","doga"];

let myObj = {
    name : "niraj",
    age : 35,
}

const myFunction = function(){
    console.log("hello world");
    
}

// console.log(typeof myFunction); function   
// console.log(typeof heros); object



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack (primitive), Heap (Non-Primitive)

let myYoutubename = "niraj ganatra";

let anothername = myYoutubename
anothername = "chai or";

// console.log(myYoutubename);
// console.log(anothername);

let userOne = {
    email : "n@gmail.com",
    upi : "user@ubl"
}
 
let userTwo = userOne

userTwo.email = "user@gmail.com"

// console.log(userOne.email);
// console.log(userTwo.email);
