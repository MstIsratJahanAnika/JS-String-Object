//object literal
const mobile = {
    brand: 'xiomi-redmi',
    price: 16700,
    isNew: true,
    camera: '50mp',
    Storage: '64GB'
}

//for-of = array
//for-in = object

//loop
for(const property in mobile)//each property of object - key 
{
    console.log(property); //accessing property name
    console.log(mobile[property]); //accessing current property value
}

//method-2
const keys = Object.keys(mobile);
console.log(keys); //output keys as array

for(const key of keys)
{
    console.log(key,':', mobile[key]); //key and accessing value of the key
}

