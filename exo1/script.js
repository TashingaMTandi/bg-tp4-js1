"use strict";

// Slide 52: "use strict" is used to avoid silent errors.
// Slide 38: Declaring variables or const for constants).

// Variables and Constants
let nom = 'John';           // Slide 38 & 52: Type String
let prenom = 'Doe';         // Slide 38 & 52: Type String
let age = 30;               // Slide 38 & 52: Type Number (integer)
let note = 15;              // Slide 38 & 52: Type Number (integer)
const pi = 3.14;        // Slide 38 & 52: Type Number (float) et constante

// Slide 45: Function Declaration
function f1() {
    // Slide 38: Display variable using console.log
    console.log(nom);
}

function f2() {
    console.log(prenom);
}

function f3() {
    // Slide 38: String Concatenation
    console.log(nom + "-" + prenom);
}

function f4() {
    console.log(age);
}

function f5() {
    console.log(note);
}

function f6() {
    console.log(pi);
}