// Problem statement 6:
// Consider the following code:
console.log(a);
console.log(b);
var a = 10;
let b = 20;
function test() {
  console.log(c);
  var c = 30;
}
test();
// Tasks
// 1.	Predict the output of the above code.
// 2.	Explain briefly: 1.Why a prints undefined 2.Why b throws an error 3.Why c is undefined inside the function
// 3.	Identify the line that causes the error.
// // 

1.
//undefined
//RefernceError: cannot access "b" beore intitialization


2.
//var is hoisted to the top of its scope
// During hoisting it is initialized with undefined

3.
//let b is also hoisted but placed in the Temporal Dead ZOne(TDZ)
// you cannot access b before its declaration time.
