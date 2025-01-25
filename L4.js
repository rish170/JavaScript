//  String  \/

let s = "QWERTYuiop";
console.log(s.length)
console.log(s[0], s[1], s[4]);


//  Template Literals (Formatted stings of JavaScript)  \/
let age = 19;
let name = "Rishab Thutheja";
let sentence = `Hi I am ${name}. I am ${age} years old.`
console.log(sentence);


// String Methods
let str = "  ABCdEfG   "
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.trim());
console.log(str.slice(0, 5));
console.log(str.concat("HiJKL"));
console.log(str.charAt(7));
console.log(str.replaceAll("ABC", "abc"));