/* 
---------
FALSY :
false
0 (if number is 0)
empty string 

--------------------
Truthy:
truth
any number (positive or Nagative)
any string including single whitespace (as like = " " or "0")
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