/* 
double equal (==) 
চেক করে যে দুইটার মান সমান কিনা। 
সে type টাকে চেক করে না যে এটা number না string
 */

const first = 2;
const second = 2;
if (first == second) {
    console.log('Its true');
}
else {
    console.log('false');
}
/* 
triple equal (===)
Strict ভাবে চেক করে যে দুইটার মান same কিনা।
Strict ভাবে চেক করে দুইটার type same কিনা। number থাকলে দুইটাই number আবার String থাকলে দুইটাই String থাকতে হবে। 
 */
const first = 2;
const second = '2';
if (first === second) {
    console.log('Its true');
}
else {
    console.log('false');
}