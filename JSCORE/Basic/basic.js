// var name = "John";  
// var name = "David"; // ✅ Allowed (Can be declared again)
// name = "Mike"; // ✅ Allowed (Can be changed)
// console.log(name); // Output: "Mike"




// let pencileprice=20;
// let notbookprice=70;



// // console.log("the total price is:",pencileprice+notbookprice,"Rupess");   // Basic tarika tarika

// // let output = "the total pricwe is--->>->" +(pencileprice + notbookprice ) + "Rupess"    // mediume tarika

// // now use template litral using backtik here not use double qutation 

// let output = `the total price of pencile ${pencileprice+notbookprice} Rupess`//Standard Tarika

// console.log(output);



// 2nd assignment operator 


// let a=20;

// console.log(++a);
// console.log(++a);

//3 comparision operator

// let age =18;
// console.log(age>18)


// let age=12;
//  if(age>=18){
//     console.log("you can "); in this egnor this linbe pof code
//  }
//  console.log("cannot fuck");



// if else if condition agara pehla condition check karega agasr sahi ha to next wala print nahi 
// let age=18;

// if(age>18)
//     {
//     console.log("you can vote");
// }
// else if(age<18)
//     {
//     console.log("you cannot vote");
// }


let name = alert("welcomeback");

let entergmai =prompt()
{
    console.log(entergmai);

}




// problem is that if var use inside the bloc

const student ={
   name:"abdul",
   age:"24",
};

console.log(student);


















// -------------------------------------------------------------------
//   1.......................TEMPLATE LITRAL-->>>
// ------------------------------------------------------------------


// let a = 10, b = 5;

// console.log(`The sum of ${a} and ${b} is ${a + b}.`);
// // Output: The sum of 10 and 5 is 15.


// let sname="farid shershahbadi" , fname ="khalique";

// console.log(`my name is:---> ${sname} and father name is"--->${fname}`); 



// let pencileprice=20;
// let notbookprice=70;
// // console.log("the total price is:",pencileprice+notbookprice,"Rupess");   // Basic tarika tarika

// // let output = "the total pricwe is--->>->" +(pencileprice + notbookprice ) + "Rupess"    // mediume tarika

// // now use template litral using backtik here not use double qutation 

// let output = `the total price of pencile ${pencileprice+notbookprice} Rupess`//Standard Tarika

// console.log(output);




// -------------------------------------------------------------------
//   1.......................OBJECT LITRAL-->>>
// ------------------------------------------------------------------

// let student = {
//     name: "abdul",
//     age: 24,
//     addresh: "Greater noida delhi",
//     university:"abj abdul kalam technical university"
//       };

//       console.log(student.university);
//       console.log(student.age);
//       console.log(student.addresh);
//       console.log(student.name);

// object of object

// let classinfo={

//   shaheer:{
//           grade:"A"
//           ,age:24
//           },

//   abdul:{
//           grade:"A+",
//           age:25,
//         },

//   Asif:{
//        grade:"A+",
//        age:25,
//        addresh:"greater noida",    
//        home:"jharkhand"
//        }

      
// };

// console.log(classinfo.Asif);


// Array of object----------------->>

// const classinfo=[
//           {
//             name:"abdul",
//             grade:"A+",
//             city:"Delhi"
//           },

//           {
//            name:"shaheer",
//            grade:"A+",
//            city:"lukhnow"
//           },

//           {
//             name:"farid",
//             grade:"A+",
//             city:"UP"
//           }
//           ,
//           {
//             name:"ali",
            
//           }
// ]

// console.log(classinfo[0].name);
// console.log(classinfo[1]);
// console.log(classinfo[3].name);




//  Realworld example

// const patient = {
//                         name:"john",
//                         age:45,
//                         country:"USA",
//                         medicalHistory:["daibates","hypothesis"],
//                         contact:{
//                           phone:"9508584413",
//                           email:"john#fmail.com"
//                         },
//             bookAppointment(){
//               return `Appointment booked for${this.name}`;
// }
// };




// // Access properties
// console.log(patient.name);  // John Doe
// console.log(patient.contact.email);  // john.doe@example.com

// // Update a property
// patient.age = 46;

// // Add a new property
// patient.disease = "Arthritis";

// // Delete a property
// delete patient.disease;

// // Calling object method
// console.log(patient.bookAppointment());  // Appointment booked for John Doe



                    // ----------------------------------------------------------------------------
                    //  ************...........FUNCTION....... *************************
                    // ----------------------------------------------------------------------------


                    //  function printhello()
                    //  {
                    //     console.log("HEY WHAT KIND OF HELP ME");
                    //  }
                    //  printhello();

                    //  function asif()
                    //  {
                    //     console.log("hello asif");
                    //  }
                    //  asif();


                    // // example 2 --------------------------------------------.............................................................................

                    // function print10times()
                    // {
                        
                    //     for(let i=0; i<5; i++)
                    //     {
                    //         console.log("SHERSHAH SHURI");
                    //     }
                    // }

                    // print10times();


                    // example 3................................... --------------------------------------------...........................................

                    // function person(){
                    //     let age=12;

                    //     if (age>18){
                    //         console.log("can drive car");

                    //     }
                    //     else{
                    //         console.log("cannot drive the car");
                    //     }
                    // }
                    //  person();

                   //some math concept 
                //    let randomNumber = Math.random();
                //         console.log(randomNumber);


                        // let randomNumber = Math.floor( Math.random() * 100) + 1; // 0 to 100
                        // console.log(randomNumber);



                    // examle 3................... dice rolloing game --------------------------------------------........................................



                    //         function diceroll() {

                    //             let random = Math.floor(Math.random()*6 ) +1;  //  
                    //             {
                    //                 console.log(random);

                    //   }   
                    //   }
                    // diceroll();
                    // diceroll();
                    // diceroll();
                    // diceroll();
                    

                    //example 4  in function parameter passing with argument................................................................................


                    // function printname(name)
                    // {
                    //     console.log(name);
                    // }

                    // printname("my name shershahshuri");
                     
                    // function asif(name)
                    // {
                    //     console.log(name);
                    // }
                    // asif("abdul");

                    // ................................................ 2nd of first

                    // function sinformation(name, age, mobileno, emailid)
                    // {
                    //     console.log(`student name is ${name}  student age   is ${age} and mobile no is ${mobileno} and email is ${emailid}`);
                    // }

                    // sinformation("farid" ,24,"9508584413","abdulrrr78@gmail.com");
                    // sinformation("eram" ,24,"9672586689","abdulrrr78@gmail.com");
                    // sinformation("eram" ,24,"9672586689","abdulrrr78@gmail.com");
                    // sinformation("ambara" ,19,"9508584413","abdulrrr78@gmail.com");
                    // sinformation("khabeer" ,25,"9508584413","abdulrrr78@gmail.com");
                    // sinformation("khalique" ,65,"9508584413","abdulrrr78@gmail.com");
                    // sinformation("imran" ,24,"9508584413","abdulrrr78@gmail.com");
                    // sinformation("shaherr" ,23,"9508584413","abbdchhcsj@");


                    // ................................................ 3rd of first

                    // function sum (a,b,c)
                    // {
                    //     console.log(a+b+c);

                    // }

                    // sum(20,20,20);
                    // sum(22,20,22);



                    // ................................................ 4th of first

                    // function calavg (x,y,v)


                    // {
                    //     let avg= (x+y+v)/3;
                    //      console.log(avg);
                    // }
                    // calavg(20,30,40);


                    // ................................................ 5th of first

                    // function mul(a,b)
                    // {
                    //     return(a*b);
                    // }
                    // let s=mul(3,4);
                    // console.log(s);

                    // // // alternate method of the above question

                    // function mul(a,b)
                    // {
                    //     return(a*b);
                    // }
                    // console.log(mul(3,5));


                    // //more alternate method

                    // function mul(a,b)
                    // {
                    //     return(a*b);
                    // }
                    // console.log(mul(mul(6,5),5));

                    // // .............................

                    //   function isadult(age)
                    //  {
                    //     if(age>=18){

                        
                    //         return "dult";
                    //              }
                    //  else{
                    //     return "not adult";
                    //    }


                    // }

                    // isadult(23);
                    

                    // .......................now we try two print the using function and loop.................

                    
                    //   function table(n)
                    //   {

                    
                    
                    //   for(let i=n; i<=n*10; i+=n)
                    //   {
                    //     console.log(i); 
                    //   }
                    // }
                    //   table(4);



                    // .............................................

                    //   let str =["hello" ,"hithere","bye","!" ]
                    
                    //   function concat(str){
                    //     let result ="";

                    //     for(let i=0; i<=str.lenth; i++){
                    //         result +=str[i]
                    //     }
                    //     return result;
                    //   }
                    

                    // ---------------------------------------------------------------------------------------------
                    //  ************...........Arrow function....... **********************************************
                    // ----------------------------------------------------------------------------------------------


                    // function add(a,b)       //this is snormal or regular function function
                    //     {                
                    //         return a+b;
                    //     }

                    //    const add=(a,b)=>a+b;
                    //    console.log(add(5,3));        //output 8---this is arrow function



                    //    const mul=(a,b)=>a*b;
                    //    console.log(mul(3,4))
                    
                        
                    //    const sayHello = () => "Hello, World!";             //--Arrow function with no parameter
                    //   console.log(sayHello()); // Output: Hello, World!

                    //    const sayAs= ()=>"Assalamulaikum";
                    //    console.log(sayAs());
                    
                    

                    //   const greet = name => `Hello, ${name}!`;             // Arrow function with parameter
                    //   console.log(greet("Alice")); // Output: Hello, Alice!

                    //   const as =(bolo)=>`hello,bolo${bolo}`;
                    //   console.log(as("asslamulaikum"));

                    //   const multiply = (a, b) => {                     //Arrow function with multiple line
                    //     let result = a * b;
                    //     return result;
                    // };
                    // console.log(multiply(4, 5)); // Output: 20


                   // 1️⃣ Function Declaration (Regular Function)
                    // A function can be declared using the function keyword.

                    // function functionName(parameters) {
                    //     // Code to be executed
                    //     return result; // Optional
                    // }

                    // function add(a, b) {
                    //     return a + b;
                    // }
                    // console.log(add(5, 3)); // Output: 8

                    // ✅ Key Points:

                    // Use function keyword.
                    // Can be called before it is defined (hoisted).
                    // Uses the return statement to return values.

                   
                    
                    


// -----------------------------------------------------------------------------------------------------------------------------------
//  ************........scope.......... *****************************
// --------------------------------------------------------------------------------------------------------------------------------------
// Scope in JavaScript determines where variables and functions can be accessed in your code.
//  JavaScript has the following types of scope:


                    // 1..global scope-->
                    // Variables declared outside any function or block have global scope. They can be accessed anywhere in the program.
                       
                    //    let globalVar = "I am global";  

                    //     function showGlobal() {
                    //         console.log(globalVar);  // Accessible
                    //     }

                    //     showGlobal();
                    //     console.log(globalVar);  // Accessible


                    // 2. Function Scope (Local Scope)-->Variables declared inside a function are local to that function and cannot be accessed outside.


                    // function myFunction() {
                    //     let localVar = "I am local";  
                    //     console.log(localVar); // Accessible inside function
                    // }
                    
                    // myFunction();
                    // console.log(localVar); // ❌ Error: localVar is not defined




                    // 3. Block Scope (let and const)-->Introduced in ES6, variables declared with let and const are only accessible inside the block {} where they are defined.
                    


                    // {
                    //     let blockVar = "I exist only here";
                    //     // console.log(blockVar); // Accessible
                    // }
                    
                    // console.log(blockVar); // ❌ Error: blockVar is not defined



                    // var does not have block scope, only function scope.

                    // {
                    //     var testVar = "I escape the block";
                    // }
                    
                    // console.log(testVar); // ✅ Accessible (because `var` is function-scoped)
                    
                    


    

                    // {
                    //     var a=25;
                    //                            // only var can acces from outside of the block
                    // }
                    // console.log(a);

                    // for( let i=1; i<=5;i++)
                    // {
                    //     console.log(i)          // only can use inside the block but not acces the outside 
                    // }



                    // let age 25;
                    // if(age=>18)
                    // {
                    //     let str ="adult";
                    //     console.log(str)---correct
                    // }
                    // console.log(str)--- not accres 


                    // lexical scop





                    // function outerFunc() {
                    //     let x = 28;
                    //     let y = 30;
                    //     function innerFunc() {
                    //         console.log(x); // Corrected to console.log
                    //         console.log(y); // Corrected to console.log
                    //     }
                    //     innerFunc();
                    // }

                    // // Call the outer function
                    // outerFunc();

                     

                    // 4. Lexical Scope (Nested Functions)
                    // A function can access variables from its parent function, but not the other way around.

                    // function outer() {
                    //     let outerVar = "I'm from outer";
                    
                    //     function inner() {
                    //         console.log(outerVar); // ✅ Accessible
                    //     }
                    
                    //     inner();
                    // }
                    
                    // outer();
                    // console.log(outerVar); // ❌ Error: outerVar is not defined

                    // 🔹 Inner functions can access outer variables, but outer functions cannot access inner variables.

                    
                    
                    // 5. Closures (Using Lexical Scope)--- need to learn
                    
                    // A closure is a function that remembers its outer function's variables even after the outer function has finished execution.


                    // function outerFunction(outerValue) {
                    //     return function innerFunction(innerValue) {
                    //         console.log(`Outer: ${outerValue}, Inner: ${innerValue}`);
                    //     };
                    // }
                    
                    // const closureExample = outerFunction("Hello");
                    // closureExample("World"); // Output: Outer: Hello, Inner: 
                    
                    // 🔹 The inner function remembers outerValue even after outerFunction has finished execution.


                    // 6. this Scope----The value of this depends on how the function is called.

                    // const obj = {
                    //     name: "Alice",
                    //     showThis: function () {
                    //         console.log(this.name); // "Alice"
                    //     },
                    // };
                    
                    // obj.showThis();

                    // 🔹 Arrow functions do not bind this, they take this from their surrounding scope.

                    // const obj = {
                    //     name: "Bob",
                    //     showThis: () => {
                    //         console.log(this.name); // ❌ Undefined (because `this` is taken from the global scope)
                    //     },
                    // };
                    
                    // obj.showThis();




                                                            // Key Takeaways
                                        //-- Scope Type	---->>Accessible Where-----------------------?

                                        // Global Scope	-----Anywhere in the program
                                        // Function Scope----Only inside the function
                            // Block Scope (let, const)--	Only inside the block {}
                                        // Lexical Scope--	Inner functions can access outer variables
                                        // Closures	Inner-- functions remember outer function variables
                                        // this Scope	---Depends on how the function is called
                    


                    



                    
                    



















                    
//  Advance topic
// ----------------------------------------------------------------------
//  ************...........callstack....... *****************************
// ----------------------------------------------------------------------


// function hello()                           
// {
//     console.log("inside hello function"); //3
//     console.log("hello");                  //4
// }

// function demo(){                            
//     console.log("calling hello fnc"); //2  
//     hello();                              
// }

// console.log("calling demo");  //1
// demo();
// console.log("don and by ")    //5


// // Visualizinf the call Stack

// function one()
// {
//     return 1;
// }
// function two()
// {
//     return one()+one();  //2
// }
// function three()
// {
//     let ans = two()+one();  //2+1-->>3
//     console.log(ans);
// }

// console.log("caller se pehlea ka console");

// three();

// console.log("caller ke bad ka console")



//Breakpoint ----- use in cosole

// --------------------------------------------------------------------------------
//  ************...js single threaded langauges....... *****************************
// -------------------------------------------------------------------------------- 

// let a=20;
// let b=10;
// console.log(a); -///execute one by one by 
// console.log(b);
// console.log(a+b);

// //  setTimeout

// setTimeout(() =>{
//     console.log("hello world");
// } , 3000 ); 

// setTimeout(() =>{
//     console.log("hello world"); //ak sath ho raha but chroume kar kar ye kam js nahi kar raha ha
// } , 3000 ); 

// console.log("hello")


// --------------------------------------------------------------------------------
//  ************...callback hell....... *****************************
// -------------------------------------------------------------------------------- 


// .example 1.............   but here problem is that for each color we have to arrow function that why use*** setTimeout function 

// 



//  setTimeout(() =>{  
// h1.style.color="red";
//  },2000);

// setTimeout(()=>{
//     h1.style.color="orange"
// } ,2000);

// setTimeout(()=>{
//     h1.style.color="green"
// })

// example 2........................ also here disadvantage is for each color passes diifrent diffrent time frame which is not good  

// function changecolor(color,delay){    //do parameter hota ha 
//     setTimeout(() =>{

//   h1.style.color=color;
//     }),delay;
// }

// changecolor("red", 1000);    // Change to red after 1 second
// changecolor("orange", 2000); // Change to orange after 2 seconds
// changecolor("green", 3000);  // Change to green after 3 seconds
// changecolor("purple", 4000); // Change to purple after 4 seconds

//example 3  Using Callback Hell (Nested Callbacks)

// function changecolor(color,delay,nextcolochange){
//     setTimeout(()=>{
//         h1.style.color=color;
//         if(nextcolochange) nextcolochange();
//     }),delay;
// }

// changecolor("red",1000() => {    //change after 1 second
// changecolor("orange",1000()=>{   //change after one second
//  changecolor("orange",1000()=>{  //change after one second

// });
// });
// });  callback hell-nested function


// #######################################################################################################################

// --------------------------------------------------------------------------------
//  ************.promises....... *****************************
// -------------------------------------------------------------------------------- 
// let pizzaOrder = new Promise((resolve, reject) => {
//     let pizzaReady = true; // Simulating pizza being ready or not

//     if (pizzaReady) {
//         resolve("Pizza is ready!");
//     } else {
//         reject("Sorry, we're out of cheese.");
//     }
// });

// pizzaOrder
//     .then(result => {
//         console.log(result); // If the Promise is fulfilled
//     })
//     .catch(error => {
//         console.log(error); // If the Promise is rejected
//     });


//     Breaking it Down:
// new Promise(): You create a new promise that is either fulfilled (with resolve) or rejected (with reject).
// .then(): If the promise is fulfilled, the .then() function runs.
// .catch(): If the promise is rejected, the .catch() function handles the error.

 
 // --------------------------------------------------------------------------------
//  ************.Async function... *****************************
// -------------------------------------------------------------------------------- 
 

async function farid(){
   console.log("check the eroor");
   throw "some random eroor";
   return"Hello";

} 


farid()

.then((result)=>{
  console.log("promise was resolved");
  console.log(`hello ${result}`);
})

 .catch((err)=>{
   console.log("promises was rejected");
   console.log(`your promise was not resolve ${err}`);
});

/Await

function getnum(){
 return new Promise((resolve ,reject)=>{
     setTimeout(()=>{
         let num =Math.floor(Math.random()*10)+1;
         console.log(num);
         resolve(num);

     },1000);

 });
}

async function demo() {
 await getnum();
 await getnum();
 await getnum();
 await getnum();
 await getnum();
 getnum(); // this is appear last it's not awaited
 
 
 
}









