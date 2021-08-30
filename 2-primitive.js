/*
TYPES OF DATA
----------
PRIMITIVE VALUES OR DATA TYPE

Number type
String type
Boolean type
Null type
Undefined type
Symbol type

NON-PRIMITIVE VALUES OR DATA TYPE
Object type

*/

// PRIMITIVE TYPE - IMMUTABLE
let a = 'Hello';
let b = a;
console.log(a, b);
a = 'Gello';
console.log(a, b);

// OR 
let a = 10;
let b = a;
a = 20;
console.log(a, b);


//OBJECT TYPE
const x = {
    job: 'Web Developer'
}
const y = x;
console.log(x, y);
x.job = 'Front End Developer'
console.log(x, y);
