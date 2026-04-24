// student.js - Node.js Midterm Output

const pink = "\x1b[95m";
const black = "\x1b[40m";
const reset = "\x1b[0m";
const bold = "\x1b[1m";

const studentData = {
    name: "Maria Theresa C penaso",
    course: "BS Information Technology",
    yearLevel: "3rd Year",
    favLanguage: "JavaScript"
};

console.log(`${black}${pink}${bold}`);
console.log("========================================");
console.log("     MIDTERM LABORATORY EXAM - NODE    ");
console.log("========================================");
console.log(`${reset}${pink}`);
console.log(`Name: ${studentData.name}`);
console.log(`Course: ${studentData.course}`);
console.log(`Year Level: ${studentData.yearLevel}`);
console.log(`Favorite Programming Language: ${studentData.favLanguage}`);
console.log(`${black}${pink}${bold}========================================${reset}`);