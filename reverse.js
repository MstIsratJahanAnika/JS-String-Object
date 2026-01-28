const sentence = 'I am learning web dev';
// const result = 'ved bew gninrael ma I'  - reversed 

// for(const letter of sentence)
// {
//     console.log(letter);
// }

//method -1 

//web  - to reverse 
// w - first letter first, then places one by one before the first letter 
// ew 
// bew 

// donald 
// d - first letter 
// od 
// nod 
// anod 
// lanod
// dlanod

let reverse = ''; //nothing inside at first 
for(const letter of sentence)//forOf loop
{
    // console.log()
    reverse = letter + reverse;
}
console.log(reverse);


//method-2
//using for loop
let rev = '';
for(let i=0; i<sentence.length; i++)
{
    // console.log(i); //index 
    // console.log(sentence[i]); //letter in the index 

    const letter = sentence[i];
    rev = letter + rev ;
}
console.log(rev);

//shortcut solution, method -3
const reversed = sentence.split('').reverse().join('');
console.log(reversed);

