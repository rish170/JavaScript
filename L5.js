//  Array   \/

let marks = [97, 98, 99, 88, 55, 64];

console.log(marks);
console.log(marks.length);
console.log(typeof(marks));
console.log(marks[2], marks[3]);
marks[2] = 58;
console.log(marks[2]);

for(let i of marks){
    console.log(i);
}


//  Methods  \/

marks.push(55);        // Add el at array end
console.log(marks);

marks.pop();            // Remove last el of array
console.log(marks);

console.log(marks.toString());  // Returns array converted to string
console.log(marks);

// marks.concat(arr2);        // Concatenates 2 arrays

marks.unshift(1);       //  Adds el at start of array  
console.log(marks);

console.log(marks.shift());   //  Removes + returns first el of array
console.log(marks);