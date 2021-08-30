/*
-----------
UNDEFINED
----------
1. variable value not assigned - variable declare korsi kintu value assign kori nai
2. function but did not right return anything
3. Just wrote return but did not return anything
4. Parameter that is not passed. function call er moddhe b er manta deya hoy ni
5. Property that does not exist in an object. kono property jodi Object e na theke ar setake jodi tumi access korte chai (ekhone phone object e nai) tahole undefined asbe
6. Accessing Array element out of Range - array er emon ekta upadan paite chacci jeta index er baire. mane index e nai. onek somoy eta ke out of range o bole.
7. Accessing deleted Array element- oi element take access korte chacci jeta index er moddhe ache kintu ani delete kora hoyeche (kono vabei ei bhabe delete kora uchi na. SPLICE diye korbe. )
8. Explicitly set value to undefined - mane ami dhore varible ke undefined set korchi 


Difference between Undefined and Null
Null - আমরা সাধারণত পাবো না যদি আমরা explicitly set না করি। মানে নিজে নিজে সেট না করি। null বলতে বুঝায় যে value টা এখন নাই। 

*/


// 1. variable value not assigned
let first;
console.log(first);

// 2. function but did not return anything
function second(x, y) {
    const sum = x + y;
    // return sum;
}
const result = second(5, 4);
console.log(result);


// 3. Just wrote return but did not return anything
function add(a, b) {
    const sum = a + b;
    if (b < 10) {
        return;
    }
    const fun = a * b;
    return sum;
}
const fourth = add(2, 7);
console.log(fourth);


// 4. Parameter that is not passed. function call er moddhe b er manta deya hoy ni
function double(a, b) {
    const result = a * 2;
    console.log(b);
    return result;
}
double(81);


// 5. Property that does not exist in an object - kono property jodi Object e na theke ar setake jodi tumi access korte chai(ekhone phone object e nai) tahole undefined asbe
const fifth = { name: 'Zubair', age: 50, location: 'Dhaka' }
// console.log(fifth.name);
console.log(fifth.phone);


// 6. Accessing Array element out of Range - array er emon ekta upadan paite chacci jeta index er baire. mane index e nai. onek somoy eta ke out of range o bole.
const sixth = [10, 50, 45, 60, 46];
console.log(sixth[5]);


// 7. Accessing deleted Array element- oi element take access korte chacci jeta index er moddhe ache kintu ani delete kora hoyeche (kono vabei ei bhabe delete kora uchi na. SPLICE diye korbe. )
const seventh = [10, 50, 45, 60, 46];
delete seventh[2];      //ei bhabe DELETE kora uchit na
// console.log(seventh);
console.log(seventh[2]);


// 8. Explicitly set value to undefined - mane ami dhore varible ke undefined set korchi 
const eighth = undefined;       //jodio variable er value undefined neya uchit na
console.log(eighth);


// Null - আমরা সাধারণত পাবো না যদি আমরা explicitly set না করি। মানে নিজে নিজে সেট না করি। null বলতে বুঝায় যে value টা এখন নাই। 
const myObj = { name: 'Zubair', age: 37, proffession: null }
console.log(myObj.proffession);