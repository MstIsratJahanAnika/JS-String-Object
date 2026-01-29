const college = {
    name: 'Noor Mohammad Public College',
    established: 1977,
    location: 'hazaribagh, dhaka',
    class: ['1-10','11', '12'],
    events: ['independence day', 'victory day', 'sports day', 'cultural fest'],
    unique: {  //a key of college but an object 
        uniform : {
            color: 'sky-blue & khaki',
            rank: 'top-10',
            result: {
                gpa: 5,
                merit: 'top-5'
            }
        },
        shift: 'morning-shift & day-shift'
    }
}


console.log(college.unique);
console.log(Object.keys(college));

// console.log(college['unique']['uniform']['result']['merit']);
// console.log(college.unique.uniform);

//to change a value 
college['unique']['uniform']['result']['merit'] = 'got out from top-5';
college.unique.uniform.result.merit = 'now at top-10 - demotion';

console.log(college['unique']['uniform']['result']['merit']);

//accessing array elements 
console.log(college['events'][2]);
console.log(college.events[2]);

//to delete a property
delete college.class;

//check if it got deleted
console.log(college);