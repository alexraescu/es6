'use strict';

console.log('/********Destructuring**********/');
var one = ['foo', 'bar', 'baz'];

var foo = one[0];
var bar = one[1];
var baz = one[2];


console.log(foo, bar, baz);

var two = {
    foo2: 'hello',
    bar2: 'goodbye',
    baz2: 'hello again'
};

var foo2 = two.foo2;
var bar2 = two.bar2;
var baz2 = two.baz2;

console.log(foo2, bar2, baz2);

console.log('/********End Destructuring**********/');