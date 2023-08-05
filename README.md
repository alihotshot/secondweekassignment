# secondweekassignment

Assignment One | Two

Assignment 01: Is there an alternative method available to transpile our TypeScript code without executing the tsc command?

Answer: By using the --watch with tsc command

Assignment 02: Create a grading system that takes subject marks as input from the user through prompts and returns the corresponding grades using functions and if-else conditions.

import { log } from 'console'

const promptSync = require('prompt-sync')()
console.log('**\*\*** GRADES FORMULA **\*\***')

//Get Marks from User
let name: string = promptSync('Your Name = ')
let marks: number = promptSync('Your Obtained Marks = ')

// Grades Formula
const gradesFun = (marks: number) => {
if (marks < 50) {
console.log(`${name}- You Got Grade F - Work Hard`)
} else if (marks >= 50 && marks < 60) {
console.log(`${name}- You Got Grade C - Adequate`)
} else if (marks >= 60 && marks < 80) {
console.log(`${name}- You Got Grade B - Satisfactory`)
} else if (marks >= 80 && marks < 100) {
console.log(`${name}- You Got Grade A - Excellent`)
}
}

// Show Grades
let showGrades = gradesFun(marks)
console.log(showGrades)
