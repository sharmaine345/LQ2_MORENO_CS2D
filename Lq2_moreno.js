// Coding Problem

// User input for variables

let name = prompt("Enter your Name:");
let address = prompt("Enter your Address:");
let age = parseInt(prompt("Enter your Age:"));
let classRole = prompt("Enter your Class Role (Officer, Student, Teacher):");
let course = prompt("Enter your Course (BSCS, BSM, BAEL):");

// Conditional statements for course detection
if (course === "BSCS") {
    if (classRole === "Student") {
        for (let i = 0; i < age / 4; i++) {
            console.log(name);
        }
    } else if (classRole === "Officer") {
        for (let i = 0; i < age / 4; i++) {
            console.log(name);
        }
    } else if (classRole === "Teacher") {
        for (let i = 0; i < age / 4; i++) {
            console.log(name);
        }
    } else {
        console.log("Invalid Class Role.");
    }
} else if (course === "BSM") {
    if (classRole === "Officer") {
        for (let i = 0; i < age / 4; i++) {
            console.log(name);
        }
    } else if (classRole === "Student") {
        for (let i = 0; i < age / 4; i++) {
            console.log(name);
        }
    } else if (classRole === "Teacher") {
        for (let i = 0; i < age / 4; i++) {
            console.log(name);
        }
    } else {
        console.log("Invalid Class Role.");
    }
} else if (course === "BAEL") {
    if (classRole === "Officer") {
        for (let i = 0; i < age / 4; i++) {
            console.log(name);
        }
    } else if (classRole === "Student") {
        for (let i = 0; i < age / 4; i++) {
            console.log(name);
        }
    } else if (classRole === "Teacher") {
        for (let i = 0; i < age / 4; i++) {
            console.log(name);
        }
    } else {
        console.log("Invalid Class Role.");
    }
} else {
    console.log("Invalid Course.");
    }
