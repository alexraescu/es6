'use strict'
console.log('/********Destructuring**********/');
var one = ['foo', 'bar', 'baz'];

var[foo, bar, baz] = one;

console.log(foo, bar, baz);

var two = {
    foo2: 'hello',
    bar2: 'goodbye',
    baz2: 'hello again'
}

var {foo2, bar2, baz2} = two;
console.log(foo2, bar2, baz2);

console.log('/********End Destructuring**********/');
