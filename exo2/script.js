"use strict";

// Slide 52: Strict mode for safer code.

function f1() {
    // Slide 39: Declaration of an array of character strings.
    const etudiants = ["Etudiant1", "Etudiant2", "Etudiant3"];
    // Slide 39 & 45 : Displaying the complete array in the console.
    // Slide 39 & 45 : Use loops so that the order and format is maintained.
    for (let i = 0; i < etudiants.length; i++) {
    console.log(etudiants[i]);
    }
}

function f2() {
    // Slide 40 :Declaration of an object with multiple properties.
    const etudiant = {
        nom: 'John',
        prenom: 'DOE',
        age: 30
    };
    // Slide 40: Displaying the complete object.
    console.log(etudiant);
}

function f3() {
    // Slide 40: Declaration of an array of objects.
    const etudiants = [
        { nom: 'nom1', prenom: 'prenom1', age: 21 },
        { nom: 'nom2', prenom: 'prenom2', age: 22 },
        { nom: 'nom3', prenom: 'prenom3', age: 23 }
    ];
    // Slide 44: A loop is used to iterate through the array of objects.
    // The `for...of` loop is more modern and readable.
    for (const etudiant of etudiants) {
        // Properties are accessed using dot notation.
        //The image shows a specific "last-name-first-name-age" format.
        console.log(`${etudiant.nom}-${etudiant.prenom}-${etudiant.age}`);
    }
}