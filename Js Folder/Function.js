/*const kk= function (){
    console.log("Anonymous function ");  
}
kk();
kk();
*/
//to call anonymous function we need to assigned the function into variable and by that variable we will call it 
//we can call it multiple time 
//anonymous cant be hoisted 

/* console.log(greet); //function hoisting is possible only with named function 

   function greet(){
       let k=20;
       let l=30;
   console.log("Hello");    
 } */

/*(function (){
    console.log("hello");
    
})(); //immediate invoking function expression (IIF)
*/




//anonymous function
// const k=function(a,b){
//     return a+b;
// }
// console.log(k(2,4));

//named function 
// function namedFunction(a,b){
//     return a*b;
// } 
// console.log(namedFunction(4,5)); 

//imf immediate invoked 
// (function imf(){
//     console.log("hello");
// })() 


//function with expression 

// const add=function(a,b){
//     return a+b;
// } 
// console.log(add(4,5));


//nested function  

// function nested(){
//     let a=20;
//     let b=30;

//    return function innerFunction(){
//         let c=30;
//         console.log(a,b,c);
        
//     } 
//    // innerFunction()
// } 
// //nested()
// nested()() 

//arrow function 

// const arrowFunction=()=>{
//     console.log("arrow function");
// } 
// arrowFunction() 