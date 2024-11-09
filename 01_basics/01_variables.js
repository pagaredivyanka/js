console.log("Divyanka")

const accId = 1335  //we can't change const value (security purpose)
let accEmail = "pagared@gmail.com"  
var accPass = "1108" 
accCity = "Jaipur"  // possible but not good 
let accState; // undefined

/*
var -> don't use 
because of issue in block scope and functional scope
let -> prefered to use
*/
 

// accId = 2 // not allowed

accEmail = "ab@ab.com"
accPass = "0811"
accCity = "bengaluru"

console.log(accId);

console.table([accId, accEmail, accPass, accCity, accState]);
