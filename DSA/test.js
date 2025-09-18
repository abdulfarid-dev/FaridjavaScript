
//Array Traverse withought using function and builten method

// let arr1 = [2, 3, 5, 4, 5, 6, 7, 8]
// let newArry = []

// for (let i = 0; i < arr1.length; i++) {

//   newArry[i] = arr1[i] * 2; 

// }
// console.log(newArry)

// =====================================   Using function

// let arr2=[1,2,3,4,5,6,]

// function multiplyArray(arr2) {
//     let result = [];
//     for (let i = 0; i < arr2.length; i++) {
//        result[i] = arr2[i] %2;  
//     }
//     return result;
// }

// let newArry1 = multiplyArray(arr2);
// console.log(newArry1);



// function TraverseStr(str){

//   for(i=0;i<str.length;i++){
//     console.log(str[i])         
//   }

// }
// TraverseStr("ABCDEFGHIJKLMN") 


// function TraverseStr(str){
//   let newStr=""
//   for(i=str.length-1;i>=0;i--){
//     newStr=newStr+str[i]

//   }
//   return newStr
// }

// let result=TraverseStr("AbdulFarid")
// let result2=TraverseStr("Ameet")
// let result3=TraverseStr("Sandeep")
// let result4= TraverseStr("Aeiou")
// console.log(result);
// console.log(result2);
// console.log(result3);
// console.log(result4);

//pillandrom  like mom dad sas madam

// let str = '1231321'

// function palindrom(str) {
//   let start = 0;
//   let end = str.length - 1;

//   while (start < end) {


//     if (str[start] != str[end]) {
//       return `messagw;not a pailindrom number because of ${str[start]} is not equals to ${str[end]}}"`
//     }
//     start++;
//     end--;
//   }
//     return `this is a pailindrome  number because of ${str[start]} is  equals to ${str[end]}`
  

// }
// console.log(palindrom(str))



// function CountVowel(str){
//   let vowel="aeiou"
//   let count=0;
//   let result=[]
//   for(i=0;i<=str.length;i++){
//   for(j=0;j<=vowel.length;j++){
//     if(str[i]=vowel[j]){
//       count++;
//       result.push(str[i])
//     }
//   }

//   }
// return count;

// }

// console.log(CountVowel("abdulfarid"))


//find the target element in the given element




// =================================
// var isPalindrome = function(x) {
//     if(x<0) return false;
//     let str=x.toString()
//     start=0;
//     end=str.length-1;
//     while(start<end){
//    if(str[start]!=str[end]){
//         return false
       
//       }
//        start++;
//        end--;
//     }
//     return true;
// };
// let result=isPalindrome(10) 
// console.log(result)

//  vowels and consonenet count bof give tring
// function CountVowel(str){
//   let vowels="aeiou"
//   let count=0;
//   let char=[]
//   for(i=0;i<str.length;i++){
//     for(j=0;j<vowels.length;j++){
//       if(str[i]==vowels[j]){
//         count++;
//         char.push(str[i]) // here dought why not print in array or suupose i want to print in here
//       }
//     }
//   }
//   return `vowela ${count},consonent ${str.length-count},present vowels=${char}`
// }

// let result=CountVowel('xyzaca')
// console.log(result)

//find frequency
// function  frequency(nums){
//   let obj={}
//   for(i=0;i<nums.length;i++){
  
//     if(obj[nums[i]]) //here clear me how to check if candition is exists or not
    
//      obj[nums[i]]=obj[nums[i]]+1
     
//      else{
//       obj[nums[i]]=1
//      }
     
//   }
//   return obj
// }
// console.log(frequency([23,12,12,1,23,34,34]))

// linear search 
// function include(arr,target){
//   for(i=0;i<=arr.length;i++){
//     if(arr[i]==target) return `index no is this ${i} i avilable ${arr[i]}`
//   }

// return false
// }

// let result=include([5,3,5,6,2,4,7,8,],8)
// console.log(result)
// ======================need revision==========================
// Binary Search Tree

// function findTarget(arr, target) {
//     let i = 0;
//     let j = arr.length - 1;
//     let result = [];

//     while (i <= j) {
//         let mid = Math.floor((i + j) / 2);
//         let right = mid;
//         let left = mid - 1;

//         if (arr[mid] === target) {
//             // Expand right
//             while (right < arr.length && arr[right] === target) {
//                 result.push(right);
//                 right++;
//             }

//             // Expand left
//             while (left >= 0 && arr[left] === target) {
//                 result.push(left);
//                 left--;
//             }

//             return result.sort((a, b) => a - b);  // Return sorted indices
//         } 
//         else if (arr[mid] < target) {
//             i = mid + 1;
//         } 
//         else {
//             j = mid - 1;
//         }
//     }

//     return result;  // If target not found, return empty array
// }

// Example usage:
// console.log(findTarget([1, 2, 3, 7, 7, 7, 7, 7, 8, 9], 7));  // Output: [3, 4, 5, 6, 7]
// =======================================

//  inser Element in Arrat

// function insert(arr,index,num){
//   let newArr=[]
//   for(i=0;i<=arr.length-1;i++){
//     newArr.push(arr[i])
//     if(i==index){
//       newArr[i+1]=num
      
//     }

//   }
//  return newArr
// }

// console.log(insert([2,4,5,4],2,32))



// customp push function
// function Push(arr,num){
//   let newArr=[]
//   for(i=0;i<=arr.length;i++){
//   newArr[i]=arr[i]
//   newArr[arr.length]=num
//   }
// return newArr
// }
// console.log(Push([2,3,4,5,6,9],7))

//custom pop operation 

// function pop(arr){
//   let newArr=[]
//   for(let i=0;i<arr.length-1;i++){
//    newArr[i]=arr[i]
//   }

//   let popElement=arr[arr.length-1]
//   return newArr ,popElement
// }

// console.log(pop([2,3,4,5,6,7]))


// ### Slice custome method
// function slice(arr, start, end) {
//     let newArr = [];
//     for (let i = start; i < end; i++)
//      newArr.push(arr[i]);
//     return newArr;
// }

// console.log(slice([1, 2, 3, 4, 5, 6, 7], 2, 4));  // Output: [3, 4]

//  \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
function slice(arr, start, end) {
    let newArr = [];
    let count = 0;
    for (let i = start; i < end; i++) {
        newArr[count] = arr[i];
        count++;
    }
    return newArr;
}

console.log(slice([1, 2, 3, 4, 5, 6, 7], 2, 4));  // Output: [3, 4]



