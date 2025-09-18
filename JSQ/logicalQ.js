// let a=20;
// let b=30;
// console.log(`sum of a and b is equal ${a+b}`);


// let age= 25;
// if (age>25)
// {
//     console.log("can eligible ");
// }
// else

// {
//     console.log("cannot not eligible");
// }

// 1 Eligibility for Vote  *****************************************

// var c =9;
// if(c%2==0){
//  console.log(`${c}is even number`);
// }
// else{
// console.log(`${c}is not even number`);
// }


// 2 Counting Table           *****************************************



// for(let i=1; i<=10;i++)
// {
//     var count2 = i*2;
//     var count3 = i*3;
//     var count4 = i*4;
//     var count5 = i*5;
//     var count6 = i*6;
//     var count7 = i*7;
//     console.log(`${count2} ,${count3},  ${count4},  ${count5}, ${count6}, ${count7}`);

// }



// 2 factorial      *****************************************

let fec = 1;
for (let i = 6; i >= 1; i--)
     {
                                              // fec *= i; // shorthand for: fec = fec * i;
fec = fec * i;
    }
console.log(fec);


// 2 febanico Series     ****************************************0,1,1,2,3,5

var a=0;
var b=1;
console.log(a);
console.log(b);

for(var i=0;i<=10;i++){ 
var temp=a+b;  //0+1
console.log(temp);//
a=b;//1-
b=temp//1

}

// 3 check prime no or not     *************************jo 1 se aur khud ke alawa agar kisi number se divisible oh prime no hota ha

// let num=10;
// var isPrimeNumber=true;

// for(let i=2;i<num;i++){
//     if(num%i==0){
//     isPrimeNumber=false;
// }
// }
// if(isPrimeNumber=true){
//     console.log(`${num} is Prime number`);
// }
// else{
//     console.log(`${num} is not A Prime number`);
// }




// ---Pending 

// 1--leap year programe 
//2 --Swaping Programe 
//3--Pillandrom number
//4--//find the  last digit number   and Counting Number  and //find mid no for three digit
// optional 

















// var sum=0;
// for(let j=1; j<=10; j++)

//     {
//     var sum = sum+j;
//     }
//     console.log(sum);


// console.log((2+3)*4);
// console.log((3/1+2*2));
// console.log(4+1*6/2);



// //Assignement Operator

// let age = 25;
// // age=age+1;

// age+=1
// console.log(age);



// let num=25;
// // num=num-1;
// num-=5;
// console.log(num);


// let sub=30;
// // sub=sub-15;
// console.log(sub);


// let  mul=40;
// // mul=mul*5;
// mul*=5
// console.log(mul);


// let year=2000;
// year++
// console.log(year);
// console.log(year);
// console.log(year);


// let e=20;
// newe=e++;
// console.log(newe);
// newe =++e;
// console.log(newe);

// let f=30;
// newf=f--;
// console.log(newf);
// newf=--f;
// console.log(newf);

// let price123;
// let price$;
// let price
// let old price 



// convert string to integer

// let age =24;
// let newage =parseInt(age);
// console.log(newage);

// console.log(isNaN("123"));
// console.log(Number("123"));






// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 50,
//   eyeColor: "blue"
// };

// delete person["age"];


// object of object


// find circumference and area fo a circle

//  let radious;
//  const pi=3.14;
//  radious=window.prompt("Enter the radious of circle");

// let  circumference= 2*pi*radious;
// let area= pi*radious*radious;
// console.log(`Circumference of circle is ${circumference}`);
// console.log(`Area of circle is ${area}`)


// find hypotenuse of a triangle
// let base=12;
// let height=14; 
// let hypotenuse=17;      

// console.log(`The hypotenuse of the triangle is ${Math.hypot((base,height,hypotenuse))}`);


// let arr=[1,2,3,4,5,6,7,8,9];
// arr.forEach((value)=> {
//     console.log(value);
   
// });

// let arr2=[10,20,30,40,50,60,70,80,90];
// arr2.map((value)=>{
//    console.log(value);
// });


// Some Basic Array Method Practice



// forEach() is used to execute a function on each element of an array, but it does not return anything. 
// It's mainly used when you just want to perform side effects like printing or updating the UI.

// (1). 

// let Names =["Abdul" ,"farid" ,"shaheer ","shaher"];

// Names.forEach((name)=>{
//     console.log(`Hello ${name}, welcome to the JavaScript world!`);
// });
   


// let arr =[12,13,14,16,17,18]
// arr.forEach((idx)=>{
// console.log(idx);

// });
// console.log("\n");

// console.log("--------------------------------------------------");

// map() is used to transform each element of an array and 
// returns a new array with the transformed values.



// let IndPrice=[1800,2300,2400,2400]
 
//  IndPrice.map((price)=>{
//     let usd= price/80;
//  console.log(usd);
 
//  })

