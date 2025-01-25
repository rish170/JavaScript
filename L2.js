// Objects  \/

const student = {
    name : "Rishab Thutheja",
    age : 19,
    marks : 480,
    cgpa : 9.00,
    isPass : true

};

console.log(student['name']);
console.log(student.age);

student["name"] = "Rish170";
console.log(student['name']);


// Conditinal Statements  \/

/* 1. if --- if
   2. if --- else
   3. if --- else if --- else*/


let age = prompt("Enter age: ")   // User Input

if (age >= 18){
    console.log("Eligible to vote!")
} else {
    console.log("Not Eligible to vote!")
}


// Switch Case  \/

const vowel = "O";

switch (vowel){
    case "A":
        console.log("Apple");
        break;
    
    case "E":
        console.log("Eat");
        break;

    case "I":
        console.log("India");
        break;

    case "O":
        console.log("Orange");
        break;

    case "U":
        console.log("Union");
        break;

    default:
        console.log("not a Vowel!");
}