

// -------------------------------
//      2--onclick property
// -------------------------------



// 1st method onclicik using function expression


// let  btn = document.querySelector("button");
//  console.dir(btn);

//  btn.onclick =function(){
//     console.log('button was clicked');
//  }



//  let btn =document.querySelector("button");
//  btn.onclick = function(){
//     alert('button was clicked');
//  }

// 2nd method using callbackfunction

// let btn =document.querySelector("button");
// function sayhello(){
//     alert("hello");
// }
// btn.onclick=(sayhello);


// 3rd method multiple button select on single event

// let btns = document.querySelectorAll("button");

// for(btn of btns)
// {
//     //btn.onclick =sayhello; ---->> yaha par paranthesis nahi lagana ha q nahi to execute ho jayea yaha name assigned kar rahea ha

// }
// function sayhello()
// {
//     alert("hello farid");
// }


// -------------------------------
//      2--onmousee nter property
// -------------------------------




// -------------------------------
//    3Event listiner propert
// -------------------------------

let btns = document.querySelectorAll("button");
//  for(btn of btns){
//     btn.addEventListener("click",sayhello);
//     btn.addEventListener("click",sayname);
// }

// function sayhello(){
//    alert("hello");
// }

// function sayname(){
//    alert("apni college");
// }
for(btn of btns){
btn.addEventListener("dblclick",function()
{
   console.log("youdouble chicked ")
   
}
);
}
// function sayhello(){
//    alert("hello world");
// }
// function sayName(){
//    alert("apna college");
// }



// pform event 


// let frm =document.querySelector ("form");
// frm.addEventListener("submit",function(){
//    event.preventDefault(); 
//    alert("form is submitted");
   
// });

let frm =document.querySelector ("form");
frm.addEventListener("submit",function(){
   event.preventDefault(); 
   let frm =document.querySelector("#user");
   let pass=document.querySelector("#pass");
   
   console.log(user.value);
   console.log(pass.value);
   alert(`hi user name is ${user.value} , your passward is ${pass.value}`)
});






