// to test examples copy and paste in javascript console.

// Redeclaration
var a = 1;
var a = 2; // no errors

// Redeclare in block context
var b = 1;
if (true) {
    var b = 2;  // same variable!
    console.log(b);  // 2
}

console.log(b); // 2

// Redeclare in function context
var c = 1;

function myFunction() {
    var c = 2;  // different variable!
    console.log(c);  // 2
}

myFunction();
console.log(c); // 1

// Global variable in function context
var d = 1;

function myFunction() {
    d = 2;  // global variable!
    console.log(d);  // 2
}

myFunction();
console.log(d); // 2
