const school = 'Raj UK Uttara Model School';

console.log(school);
console.log(school.toLowerCase()); //converts all to lower case

const subject = 'Chemistry'; //uppercase
const book = 'chemistry'; //case sensitive - not same

console.log(book.toUpperCase()); //converts all to upper case

//uppercase - ABCD EFG 
//lowercase - abcd efg 
if(subject === book)
{
    console.log("I am reading book, eibar exam a fatay felbo");
}
else{
    console.log("hudai hudai page ultai ar vat khai");
}

const drink = 'water';
const liquid = '    water    ';
//initially not the same

if(drink.trim() === liquid.trim()){
    console.log('pani khaite parbo');
}
else{
    console.log('pani ase but khaite pari na');
}