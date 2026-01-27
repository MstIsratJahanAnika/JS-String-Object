//string declaration
const country = 'Bangladesh';
const division = "Rajshahi";
const district = `Pabna`;

const thana = new String('Demra');

// console.log(typeof district); //isObject 

//Array related
const isArray = [54, 89, 33, 11];
// console.log(isArray.length);
// console.log(isArray[2]); //2nd index -> 3rd element 
isArray[1] = 50; //value change - Mutable 

//string concept - just as array 
const capital = 'Dhaka';
console.log(capital.length);

console.log(capital[0]);
console.log(capital[1]);
console.log(capital[2]);
console.log(capital[3]);
console.log(capital[4]);

//string is immutable - value cannot be changed idex wise 
// capital[0] = 'p'; //won't change 