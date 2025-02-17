// let score = 99
// let score = "99"
// let score = "99abc"  
let score = null


console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

//"99" => 99
//"99abc" => NaN
// true => 1; false => 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "robot" => true

let someNumber = 99
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

//_____________________Operation______________________

let value = 3
let negValue = - value
console.log(negValue); //-3

console.log(2 + 2);
console.log(2 - 2);
console.log(2 * 2);
console.log(2 ** 2);
console.log(2 / 2);
console.log(2 % 2);

let str1 = "Robot"
let str2 = "Vinu"



let str3 = str1 + str2
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(3 + 2 + "3");


console.log(3 + 4 * 5 % 3);  
// Bracket
// Operator
// Division
// Multiplication
// Addition
// Subtraction

// console.log(+true);
// console.log(+"");


let x = 3;
const y = x++;
console.log(`x:${x}, y:${y}`);
//expected output: "x:4, y:3"

let a = 3;
const b = ++a;
console.log(`a:${a}, b:${b}`);
//expected output: "a:4, b:4"


let gameCounter = 100;
++gameCounter;
gameCounter++;
console.log(gameCounter);

console.log("2" > 1);
console.log("02" > 1);

