//  Functions  \/
console.log("Normal Functions:")

//  1. Standard function
function add_std(a,b){
    console.log(`${a} + ${b} = ${a+b}`);
};
add_std(2,5);


//  2. Arrow Function
const add_arrow = (a, b) => {
    console.log(`${a} + ${b} = ${a+b}`);
};
add_arrow(3,5);


//  Functions for arrays  \/
console.log("\nFunctions for Arrays:")

//  1. forEach - Standard
let arr = [1,2,3,4,5];
arr.forEach(function printVal(val){
    console.log(val);
}); console.log("\n")


//  2. forEach - Arrow
arr.forEach((val) => {
    console.log(val*val);
}); console.log("\n")


//  3. forEach - Seperate Function
let cube = (num) => {
    console.log(num*num*num);
};
arr.forEach(cube)
console.log("\n");


//  4. Array Maps (Creates New Arrays)
let newarr = arr.map((val) => {
    return val;
});
console.log(newarr);
console.log("\n");


//  5. Filtering array according to some condition. Creates New Array
let evenArr = arr.filter((val) => {
    return val%2 == 0;
});
console.log(evenArr);
console.log("\n");


//  6. Reducing Array to 1 Value (prev = Result Value ; curr = Iterated Value)
const maxOfArr = arr.reduce((prev,curr) => {
    return prev > curr ? prev : curr
})
console.log(maxOfArr);