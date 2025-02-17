const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros); 
// console.log(marvel_heros[3][1]);  // flash

const allHeros = marvel_heros.concat(dc_heros)  //[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]  //concate secons array to first same as above

// console.log(all_new_heros);


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)   //merge all subarrays in single array

// console.log(real_another_array);

/******************** Array.isArray, from, of********************/

console.log(Array.isArray("Ritesh")) //false
console.log(Array.toString("Ritesh")) //function Array() { [native code] }
console.log(Array.from("ritesh")) //[ 'r', 'i', 't', 'e', 's', 'h' ]
console.log(Array.from({name: "ritesh"})) //[] ,  interesting -> it gives us empty array 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); //[ 100, 200, 300 ]


