/* 
---------
FALSY :
false
0 (if number is 0)
empty string 
undefined
Null
NAN

--------------------
Truthy:
truth
any number (positive or Nagative)
any string including single whitespace (as like = " " or "0")
[]
{}
Anything else that is not falsy will be TRUTHY
---------
*/


//false
const x = false;
if (x) {
    console.log('variable is truthy');
}
else {
    console.log('variable is falsy');
}

//truth
const x = true;
if (x) {
    console.log('variable is truthy');
}
else {
    console.log('variable is falsy');
}

//Number
const x = 4;
if (x) {
    console.log('variable is truthy');
}
else {
    console.log('variable is falsy');
}

const x = -1;
if (x) {
    console.log('variable is truthy');
}
else {
    console.log('variable is falsy');
}

//string
const x = "Zubair";
if (x) {
    console.log('variable is truthy');
}
else {
    console.log('variable is falsy');
}

//Empty String
const x = " ";
if (x) {
    console.log('variable is truthy');
}
else {
    console.log('variable is falsy');
}


//undefined - kono ekta veriable ke jodi declare na kori tahole seta undefined hoy.kono kisu undefined hole FALSE hoy jay.
let x;
console.log('value of x', x);
if (x) {
    console.log('variable is truthy');
}
else {
    console.log('variable is falsy');
}

//Null
let x = null;
console.log('value of x', x);
if (x) {
    console.log('variable is truthy');
}
else {
    console.log('variable is falsy');
}

//NAN
let x = parseInt('Hello');
console.log('value of x', x);
if (x) {
    console.log('variable is truthy');
}
else {
    console.log('variable is falsy');
}

//Empty Array
let x = [];
console.log('value of x', x);
if (x) {
    console.log('variable is truthy');
}
else {
    console.log('variable is falsy');
}

//Empty Object
let x = {};
console.log('value of x', x);
if (x) {
    console.log('variable is truthy');
}
else {
    console.log('variable is falsy');
}