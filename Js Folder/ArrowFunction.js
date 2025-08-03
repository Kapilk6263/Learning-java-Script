//arrow function is a shorthand of function 
// const abc=(a,b)=>a+b;
// console.log(abc(20,30));

//when we have one parameter
// const ab=(a)=>a; 
// console.log(ab(20));

//multiple statements 
// const k=(a,b)=> (a+b,a-b,a*b);
// console.log(k(23,34));


// const h=(a,b)=> (a+b,console.log("a"));
// console.log(h(39,45));


// let kap=(a)=> a;
// console.log(kap(23));


let k=(a,b)=>a+b ;
console.log(k(23,56));  //implicit return 
 

let k1=(a,b)=>(a+b ,a-b);
console.log(k1(23,56));  

let k3=a=>a*a;
console.log(k3(23));  

// let fun=()=>{
//     console.log(this);
// }