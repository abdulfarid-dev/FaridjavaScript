// let UserDetail={
//     name:"Abdul",
//     age:"25",
//     // PrintDEtails:function (){
//     //     console.log(this.name );
//     // }
// }
// // UserDetail.PrintDEtail();


// let PrintDEtail =function (state,country)
// {
//     console.log(this.name+"  "+state+" "+country);
// }

// PrintDEtail.call(UserDetail,"Delhi","India"); // if u define function outside of object then use call 


// let UserDetail2={
//     name:"shaheer",
//     age:"24",
    
// }

// // function boroow kar liyea yaha   

// // UserDetail.PrintDEtails.call(UserDetail2); // dono bhai ka name a jayeaga

// // call
// PrintDEtail.call(UserDetail2,"Delhi","Sirya");
// // appy
// PrintDEtail.apply(UserDetail2,["Delhi","apply","Ajmer"]);
// // bind
// let newfun=PrintDEtail.call(UserDetail2,"Delhi","Bind");
// console.log(newfun);
// newfun();



// constructore-->> A constructor is a special function used to create and initialize objects.



     function person(name,branch){
     this.name=name;
     this.branch=branch;
}
const User1 =new person('farid',"cse");
const User2 =new person('farid',"Bjmca");
const User3 =new person('farid',"bba");
console.log(User1);
console.log(User2);
console.log(User3);






class Rectangle{
    constructor(width,height){
        this.width=width;
        this.height=height;
    }
    area(){
        return this.width*this.height;
    }
}



