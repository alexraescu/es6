'use strict';

console.log('/********Variables**********/');
//function scope
var foo = 'whatever';

//block scope
var bar = "bar";

//Cannot be re-assigned
var BAZ = "baz";

//will not re-assign
// BAZ = "second baz";

console.log(BAZ);

var TEST = {
    one: 'Hello',
    two: {
        three: 'Goodbye'
    }
};

//will re-assign
TEST.two.three = 'Not goodbye';

console.log(TEST);
console.log('/********End Variables**********/');