// for each ----------------------1
// forEach() in JavaScript
// The forEach() method is used to iterate over arrays and execute a provided function once for each element. It does not return a new array but is useful for performing operations on each array element.

// let arr = [1,2,3,4,5]

// let print = function(el) {
//     console.log(el);
// };
// arr.forEach(print);



// let names = ["Abdul", "Ali", "Awais", "Ahsan"];
// let printName = function(name) {
//     console.log(name);
// }
// names.forEach(printName);


// arr.forEach(function(el) {
//     console.log(el);
// });


// arr.forEach((el) => {
//     console.log(el);
// });



// let info = [
//     {
//     name:"farid",
//     age: 24,
// },
// {
//     name:"waqar",
//     age: 22,
// },{
//     name:"ahmed",
//     age: 23,
// },
// {
//     name:"ali",
//     age: 25,
// },
// ];

// info.forEach((el) => {
//     console.log(el.name);
// });

// el is a parameter in the arrow function.

// It represents each element of the array (arr) as forEach() loops through it.

// It is a placeholder; you can name it anything (el, item, number, etc.).

// Yes! The name el is not special. It's just a variable that holds each array element. You can use any name you prefer.


// map function----------------2
// The map() method creates a new array by applying a function to each element of the original array.
// let num = [1, 2, 3, 4, 5];

// let doubled = num.map((el) => {
//     return el * 2;
// });

// console.log(doubled); // This will print: [2, 4, 6, 8, 10]


// let students = [
//     { name: "Ali", marks: 90 },
//     { name: "Sara", marks: 75 },
//     { name: "Ahmed", marks: 66 },
// ];

// let percentage = students.map((el) => {
//     return el.marks /100* 100;
// });
// console.log(percentage); // This will print: [20, 22, 21]


// filter function----------------3

// The filter() method creates a new array that contains only the elements that pass a specific test (condition).

// let arr =[1,2,3,4,5,6,7,8,9,10];
// let result =arr.filter((items)=>{
//   return items%2==0; //even no
// });

// console.log(result); // This will print: [2, 4, 6, 8, 10]



// Every  metod or every function----------------4

// return tru if every Elementof array gives tru for some functionreturn false

// let check=[2,4,6,8,10].every((el)=>el%2==0); // true

// console.log(check); // true

// reduce  method or function----------------5
// The reduce() method reduces an array to a single value by executing a function on each element, one by one.



// let arr = [1, 2, 3, 4, 5];

// let sum = arr.reduce((acc, curr) => {
//     return acc + curr;
// }, 0);

// console.log(sum); // Output: 15


let arr = [1, 2, 3, 4, 5];
let sum =[1,2,3,4,5].reduce((acc,curr)=>{
    return acc + curr;
})

console.log(sum); // Output: 15











// this kyword in js 
// this keyword refers to an object that is executing the current piece of code
// let person = {
//     name: "Abdul",
//     age: 24,
//     greet: function() {
//         console.log(this.age); // "Abdul"
//     }
// };

// person.greet(); // "Abdul"

// ✅ this makes JavaScript code more flexible and reusable.
// ✅ Why use this here?

// If we hardcode person.name, the method can only work for one object.

// Using this.name allows the method to work for any object that calls it.


// Try and catch

try{
    console.log(a)
}
catch{
    console.log("caought an error..........a si not define")
}