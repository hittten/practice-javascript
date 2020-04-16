// to test examples copy and paste in javascript console.

// Redeclaration
let a = 1;
let a = 2; // error!

// Redeclare in block context
let b = 1;
if (true) {
    let b = 2;  // different letiable!
    console.log(b);  // 2
}
console.log(b); // 1

// Redeclare in function context
let c = 1;

function myFunction() {
    let c = 2;  // different letiable!
    console.log(c);  // 2
}

myFunction();
console.log(c); // 1

// Global letiable in function context
let d = 1;

function myFunction() {
    d = 2;  // global variable!
    console.log(d);  // 2
}

myFunction();
console.log(d); // 2
