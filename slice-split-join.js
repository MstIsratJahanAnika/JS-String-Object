//slice
const address = 'kahinathpurPabna'
const part = address.slice(0, 11);

console.log(part);


//split
const intro = 'I am anika I am a CSE student learning web dev';
console.log(intro.split()); //give output whole string as an array
console.log(intro.split('')); //output each letter separated and as an array
console.log(intro.split(' ')); //divide by white-space - each is array 

//dividing by any specific character 
console.log(intro.split('a'));

const friendsStr = 'Rahim,Karim,Fahim,Shafi,Kafi,Maruf,Anan,Sony,Priyom';
console.log(friendsStr.split(','));

const realFriends = ['Rahim',  'Karim',  'Fahim',  'Shafi',  'Kafi',   'Maruf',  'Anan',   'Sony',  'Priyom'];
console.log(realFriends);
console.log(realFriends.join());//by default join 
console.log(realFriends.join('|')); 
console.log(realFriends.join('-')); 