// console.log("hello");
// document.write("hello");


// let name=prompt("Enter your name ")
// console.log(name);
// document.writeln(name)


// for(var i=1;i<4;i++){
//     console.log(i);    // 1 2 3
// }

// for(var i=1;i<4;i++){
//     setTimeout(()=>console.log(i) // 4 4 4
//     )  
// }

// console.log(2+"3");
// console.log(2-"3");
// console.log(2+2+"3");
// console.log("3"*3);

//console.log(2 && 80||80&&4);
//console.log(NaN==NaN);

//console.log(typeof Number("tuee")); //type casting


// function test(a) {
//   a = 10;
// }

// let num = 5;
// test(num);

// console.log(num);  //5



// function foo() {
//   console.log(a);  //undefined
//   var a = 5; 
// }
// foo();

// var a = 1;
// function b() {
//   a = 10;
//   return;
//   function a() {}
// }
// b();
// console.log(a);  //1


//  let arr=[2,3,4,5,7,8,9];
// let k=arr.map((ele)=>ele*ele).filter((ele)=>ele%2==0)
// console.log(k);


// array methods

//let arr=[2,3,4,5,7,8,9];
//let arr2=[10]
// push return the length of array 
//pop return the removed element 

//console.log(arr.slice(1,3));
// console.log(arr.splice(0,3,1,1,1));
// console.log(arr);
//console.log(arr.concat(arr2));

// const obj=new Object();
//   obj.name="kapil"; //insert 
//   obj.name="kapil uplawdiya" //update 
//   console.log(obj.name); //fetch 
//   delete obj.name;  //delete
//   console.log(obj);
  
  
// let arr=[
// ['kapil',21],
// ["rohit",22]
// ]  

// let arr2=arr.map(([name,age])=>{
//     return {name,age}
// })

// console.log(arr2);


// let car ={
//     brad:"bmw",
//     model:"x5"
// }

// console.log(Object.entries(car));



//             **************JavaScript es features**************


//Arrow function  ()=>{} 
//Arrow function in javascript is shorter form to write a function 

//Templete  
// const name="kapil";
// console.log(`hello ${name}`); 


//Destructuring : Destruction is es6 feature of javaScript that is used to unpack value in variable of array and objects 
// const arr=[2,3,4,5,6];
// const [a,b,c,d,e]=arr;
// console.log(a);

//Spread operator 
// const arr=[1,2,3]
// const arr2=[...arr,4,5]
// console.log(arr2);


//async and await 
// let data=async()=>{
//     let response=await fetch("https://jsonplaceholder.typicode.com/todos/1");
//     let data =await response.json();
//     console.log(data);
// }
// data();

//default paramter 
// function name(age=21){
//     console.log(`age is ${age}`);
    
// }
// name();



//             **************Closer And Lexical Scoping**************


//lexical Scoping inner function can access the property from outer function but outer function cannot access the property from outer function

// function Lexical(){
//     let name="kapil"
// //    console.log(surname); outer function cannot access of the property from inner function
   
//     function inner(){ 
//         let surname="uplawdiya"
//         console.log(name);
        
//     } 
//     inner();
// } 
// Lexical()


// Closer =Closer is object which is dynamically created when inner function access the property from outer function 

// function Closer(){
//     let name="kapil";
//     let sername="uplawdiya" 
//   return  function inner(){
//        console.log(name);
//     } 

// }
// Closer()();





//             **************Binding in JavaScript**************

const object={
    name:"kapil",
    surname:"Uplawdiya",
    id:21,
    age:22
} 

function Binding(){ 
    console.log(this);
    
}
Binding();