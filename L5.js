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


arr = [0,1,2,3,4,5,6,7,8];
console.log(arr.slice(1,4));  // Returns Slice. Last index not included.

// splice(startIndex , deleteCount , newElement1, newElement2, newElement3, ...)
/* 
   1. startIndex = Index to start making changes from
   2. deleteCount = No. of elements to delete starting from startIndex
   3. newElement(i) = New element to add from startIndex after deleting
*/

arr.splice(2,2)  // [0,1,4,5,6,7,8]  From index 2 delete two elements. Index 2 and 3 (El: 2,3)
console.log(arr);

arr.splice(2,0,101,102)  // [0,1,101,102,4,5,6,7,8]  At 2, delete 0 (Nothing), add 101 and 102
console.log(arr);

arr.splice(3,1) // [0,1,101,4,5,6,7,8]  Delete element at 3rd index
console.log(arr);

arr.splice(3,1,101) // [0,1,101,101,5,6,7,8]  Replace element at 3rd index
console.log(arr);

console.log(arr.splice(4)) // Returns [5,6,7,8] and deletes this part from arr. Final arr = [0,1,101,101]
console.log(arr);