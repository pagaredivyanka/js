// Primitive 

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 34454546743723725363n


// Reference (Non Primitive)

// Array, Object, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "Divyanka",
    age: 20,
}

const myFunction = function(){
    console.log("Hello there..!")
}

console.log(typeof myFunction);  //function  ==> it called as object function

console.log(typeof outsideTemp);
console.log(typeof heros);  //object


//Undefined     => "undefined"
//Null          => "object"
//Boolean       => "boolean"
//Number        => "number"
//String        => "string"
//Object (native & does not implement)       => "object"
//Object (native or host and does implement) => "function"



//VVIMP - Objects and browser events 