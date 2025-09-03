// let arr=[1,2,3,4,5]

let arr=["jan","feb","march","april"]
console.log(arr)
console.log(arr.length)
console.log(arr[1]) // to print particular index valuew
console.log(arr[2]) // to print particular index valuew
console.log(arr[3]) // to print particular index valuew
console.log(arr[arr.length-1]) // to find last index using own method

arr[arr.length]="may" // if you want to add in last index element

console.log(arr)



//multiplay every array with 2
let arr1=[2, 3, 5, 4, 5, 6, 7, 8]
let newArry=[]

for(i=0;i<arr1.length ;i++)
{
    // console.log(arr1[i]*2)
    newArry.push(arr1[i]*2)
   
}
 console.log(newArry)

 //if you want to print in reverse order


 let ar=[23,45,32,54,12,34,78,98,65]

 let newArry1=[]
 for(i=ar.length-1; i>=0; i--){

    newArry1[ar.length-1-i]=ar[i]
 }
console.log(newArry1)


//  =================================================================

let array2=[[23,43,42],[67,43,12],[23,43,12]]
let sum=0;

for(let i=0;i<array2.length;i++){

    for(let j=0; j<array2[i].length;j++){
        sum=sum+array2[i][j]
    }
    
}
console.log(sum)













