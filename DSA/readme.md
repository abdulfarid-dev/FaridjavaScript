# JavaScript Array Operations

This file contains examples of different **array operations** in JavaScript.

---

## 1. Array Basics
```js
let arr = ["jan", "feb", "march", "april"];
console.log(arr);              // Print array
console.log(arr.length);       // Print length
console.log(arr[1]);           // "feb"
console.log(arr[2]);           // "march"
console.log(arr[3]);           // "april"
console.log(arr[arr.length-1]); // Last element -> "april"

arr[arr.length] = "may";       // Add element at the end
console.log(arr);              // ["jan","feb","march","april","may"]
2. Multiply Every Element by 2
js
Copy code
let arr1 = [2, 3, 5, 4, 5, 6, 7, 8];
let newArry = [];

for (let i = 0; i < arr1.length; i++) {
    newArry.push(arr1[i] * 2);
}

console.log(newArry); // [4, 6, 10, 8, 10, 12, 14, 16]
3. Reverse an Array
js
Copy code
let ar = [23, 45, 32, 54, 12, 34, 78, 98, 65];
let newArry1 = [];

for (let i = ar.length - 1; i >= 0; i--) {
    newArry1[ar.length - 1 - i] = ar[i];
}

console.log(newArry1);
// [65, 98, 78, 34, 12, 54, 32, 45, 23]
4. Sum of 2D Array Elements
js
Copy code
let array2 = [[23, 43, 42], [67, 43, 12], [23, 43, 12]];
let sum = 0;

for (let i = 0; i < array2.length; i++) {
    for (let j = 0; j < array2[i].length; j++) {
        sum = sum + array2[i][j];
    }
}

console.log(sum); // 308
Summary
Access and update array elements

Add new values at the end of array

Multiply values using loop

Reverse an array manually

Calculate sum of a 2D array

pgsql
Copy code

Do you want me to also include a **"How to Run" section** (like `node index.js`) in this README?







