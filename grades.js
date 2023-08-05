"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require('prompt-sync')();
console.log('****** GRADES FORMULA ******');
//Get Marks from User
var name = promptSync('Your Name = ');
var marks = promptSync('Your Obtained Marks = ');
// Grades Formula
var gradesFun = function (marks) {
    if (marks < 50) {
        console.log("".concat(name, "- You Got Grade F - Work Hard"));
    }
    else if (marks >= 50 && marks < 60) {
        console.log("".concat(name, "- You Got Grade C - Adequate"));
    }
    else if (marks >= 60 && marks < 80) {
        console.log("".concat(name, "- You Got Grade B - Satisfactory"));
    }
    else if (marks >= 80 && marks < 100) {
        console.log("".concat(name, "- You Got Grade A - Excellent"));
    }
};
// Show Grades
var showGrades = gradesFun(marks);
console.log(showGrades);
