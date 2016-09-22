'use strict';

console.log('/********SpreadOperator**********/');
function foo(one, two, three) {
  console.log(one);
  console.log(two);
  console.log(three);
}

var arr = [0, 1, 2];
//foo.apply(null, arr);
foo.apply(undefined, arr);

console.log('/********End SpreadOperator**********/');