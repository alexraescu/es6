'use strict'
console.log('/********Variables**********/');
//function scope
var foo = 'whatever';

//block scope
let bar = "bar";

//Cannot be re-assigned
const BAZ = "baz";

//will not re-assign
// BAZ = "second baz";

console.log(BAZ);

const TEST = {
    one: 'Hello',
    two: {
        three: 'Goodbye'
    }
}

//will re-assign
TEST.two.three = 'Not goodbye';

console.log(TEST);
console.log('/********End Variables**********/');
