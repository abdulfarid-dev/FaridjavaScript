// ======================================================
//   **********Foundation Programming*****************
// ======================================================


// ### 1...Fectorial Question

// function Fectorial(nums){
//     let fec=1;
//     for(i=1;i<=nums;i++){
//         fec=fec*i
//     }
//     return fec
// }

// console.log(Fectorial(5))

// ### 2...counting table 

// function count(num){
//     let n=[]
//     for(i=1;i<10;i++){
    
//      n.push(num*i)
//     }
//     return n
// }


// console.log(count(2))
// ### 3...febonici series 

function febanico(num){
      let a=0;
      let b=1
      let result=[]
for(i=0;i<num;i++){
  
    result.push(a)
   
    temp =a+b;
     a=b;
     b=temp;


    
}
return result
}
console.log(febanico(10))



// let arr3=[1,2,3,4,5]
// console.log(arr3)//    console same array
// console.log(arr3.length) //5>>Arary element
// console.log(arr3.length-1) //4 >> Array index
// console.log(arr3[1]) // 2 Acces particular array element using index
// console.log(arr3[arr3.length-1]) //acces last index element 

// let arr = ["jan", "feb", "march", "april"]
// console.log(arr)
// console.log(arr.length)
// console.log(arr[1]) // to print particular index valuew
// console.log(arr[2]) // to print particular index valuew
// console.log(arr[3]) // to print particular index valuew
// console.log(arr[arr.length - 1]) // to find last index using own method
// arr[arr.length] = "may" // if you want to add in last index element
// console.log(arr)



// Array Traverse and multiplay every array with 2
// let arr1 = [2, 3, 5, 4, 5, 6, 7, 8]
// let newArry = []

// for (let i = 0; i < arr1.length; i++) {
//     console.log(arr1[i]*2)
//     newArry=(arr1[i] * 2)

// }
// console.log(newArry)

//Reverse Array Element Print 
//   let ar = [23, 45, 32, 54, 12, 34, 78, 98, 65]
//   let newArry1 = []
// for (let i = ar.length - 1; i >= 0; i--) {
//     newArry1[ar.length - 1 - i] = ar[i]
//                                         }
//           console.log(newArry1)



// Reverse array withought taking space
// let ar1 = [23, 45, 32, 54, 12, 34, 78, 98, 65]
// let i=0;
// let j=ar1.length-1;

// while(i<j)
// {
//     let temp=ar[i]
//     ar1[i]=ar1[j]
//     ar1[j]=temp
//     i++
//     j--
// }
// console.log(ar1)














// swaping method
//  using swaping method
//  using withought swaping variable
//  using shortcut

// function swap(a,b){
//     let temp=a;
//     a=b;
//     b=temp;
//     return  `a:${a}b:${b}`
    
//                   }
                   
// console.log(swap(23,34))

// 1 withough temp variable

// function swap(a,b){ //10 ,15 let suppose
//     a=a+b; //a=25
//     b=a-b; //10
//     a=a-b //15
   
//     return`a${a},b${b}`
// }
// console.log(swap(10,15) )


// 2 using shortcut
// function swap(a,b){
//     [a,b]=[b,a]
    
//     return`a=${a} b=${b}`
// }
// console.log(swap(6,7))


// ##now we will be find max and min and avg no of given array
// max
// let ar4=[7,9,4,6,77,23,4,5,6,7,8]
// let max=0;
// for(let i=0;i<ar4.length;i++){
//     if(ar4[i]>max)
//     max=ar4[i]

// }
// console.log(max)
// // min

// let min=Infinity;
// for(let i=0;i<ar4.length;i++){
//     if(ar4[i]<min)
//      min=ar4[i]
//     }
// console.log(min)



// let sum=0;
// let avg;
// for(let i=0;i<ar4.length;i++){
//     sum=sum+ar4[i]
//     avg=sum/ar4.length

//     }
// console.log(avg)


// now we print max min avg in one for loop
// console.log("========================")

// let maxi=0;
// let mini=Infinity;
// let suma;
// let avr;

// for(let i=0;i<=ar4.length;i++){
//     if(ar4[i]>maxi)
//     maxi=ar4[i]
//     if(ar4[i]<mini)
//     mini=ar4[i]
//     suma=suma+ar4[i]
//     avr=sum/ar4.length

// }

// console.log(maxi)
// console.log(mini)
// console.log(avr)

 
//now we do print max min avg using function

//Rotate Array by K step




//=================================================================

// let array2 = [[23, 43, 42], [67, 43, 12], [23, 43, 12]]
// let sum = 0;

// for (let i = 0; i < array2.length; i++) {

//     for (let j = 0; j < array2[i].length; j++) {
//         sum = sum + array2[i][j]
//     }

// }
//          console.log(sum)



// let ar5 = [1,2,3,4,5,6,7];
// let k = 3;
// let n = ar5.length;

// let end = k - 1;  // initialize before the loop
// for (let start = 0; start < end; start++, end--) {
//     let temp = ar5[start];
//     ar5[start] = ar5[end];
//     ar5[end] = temp;
// }

// console.log(ar5); // [3,2,1,4,5,6,7]


// ==========================
// Rotation question from array


// let ar6 = [1, 2, 3, 4, 5, 6, 0];

// reverse everything except last 3 elements
// for (let i = 0, j = ar6.length - 4; i < j; i++, j--) {
//   let temp = ar6[i];
//   ar6[i] = ar6[j];
//   ar6[j] = temp;
// }

// console.log(ar6);



  
    










