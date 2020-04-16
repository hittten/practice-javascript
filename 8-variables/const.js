// to test examples copy and paste in javascript console.

// Redeclaration
const a = 1;
const a = 2; // error!

// Redeclare in block context
const b = 1;
if (true) {
    const b = 2;  // different const!
    console.log(b);  // 2
}
console.log(b); // 1

// Redeclare in function context
const c = 1;

function myFunction() {
    const c = 2;  // different const!
    console.log(c);  // 2
}

myFunction();
console.log(c); // 1

// Global const in function context
const d = 1;

function myFunction() {
    d = 2;  // global const Error!
    console.log(d);
}

myFunction();
console.log(d);
