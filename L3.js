// Loops  \/

//  1. for
for(let i = 0 ; i <= 5 ; i++){
    console.log(i);
}
console.log("\n");


//  2. while
let j = 0;
while (j<=10){
    console.log(j);
    j+=2;
}
console.log("\n");


//  3. do-while
let k = 1;
do {
    console.log(k);
    k+=2;
} while (k<=10);
console.log("\n");


//  4. Loop over array, string, object
let str = "Rishab";
for (let i of str){
    console.log(i);
}
console.log("\n");

const student = {
    name : "Rishab Thutheja",
    age : 19,
    marks : 480,
    cgpa : 9.00,
    isPass : true

};
for (let i in student){
    console.log(i, ":", student[i]);
}