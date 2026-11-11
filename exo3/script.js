"use strict";

// Slide 41: Declaring data as an array of objects
const students = [
    { id: 1000, nom: 'JOHN', prenom: 'DOE', note: 14, absences: 5 },
    { id: 2000, nom: 'BOB', prenom: 'CARLTON', note: 7, absences: 1 },
    { id: 3000, nom: 'RAYANE', prenom: 'SMITH', note: 13, absences: 3 }
];

/**
 * Function B: Determines whether a student is admitted.
 * Slide 46: Function with a parameter and a return value.
 * @param {number} moyenne The student's average (of type float).
 * @returns {boolean} true if you admit it, false otherwise.
 */
function estAdmis(moyenne) {
    // Slide 43: Structure conditionnelle if/else.
    if (moyenne >= 10) {
        return true;
    } else {
        return false;
    }
}

/**
 * Function A: Iterates through the students and displays their results.
 * It calls function B (isAdmitted).
 */
function deliberation() {
    // Slide 45: `for...of` loop for iterating over the array of objects.
    for (const etudiant of students) {
        // Call to function B with the student's grade.
        const admis = estAdmis(etudiant.note);

        // Slide 43: If/else statement to display the correct message.
        if (admis) {
            console.log(`${etudiant.id}: ADMIS`);
        } else {
            console.log(`${etudiant.id}: AJOURNÉ`);
        }
    }
}