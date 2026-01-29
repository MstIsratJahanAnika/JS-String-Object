const person = {
    name: 'sodor uddin',
    age: 25,
    profession: 'web developer',
    salary: 25000,
    married: true,
    'fav places': ['bandarban', 'cox\'s bazar', 'kuakata']

}
//value update
person.salary = 30000;
person['age'] = 27;


console.log(person);

//output for a specific property
//method -1 (dot method)

// console.log(person.profession);
const prof = person.profession;
console.log(prof);

//method -2 (bracket notation) accessing with third bracket
//specially for special types of data/keys
const boyosh = person['age'];
console.log(boyosh);

console.log(person['fav places']);
console.log(person.salary);
console.log(person['age']);

//accessing by multiple conversion
const keyName = 'profession';
console.log(person[keyName]);

const profName = 'profession';
person[profName] = 'devops'; //value update
console.log(person);