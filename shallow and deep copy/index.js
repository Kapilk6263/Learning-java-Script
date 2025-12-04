// const emp={

//     empName:"tushar",
//     empId:21,
//     salary:21000,
//     skills:{
//         frontEnd:['html','css'],
//         backEnd:['java','python']
       
//     }
// }

// //shallow copy using destructuring 
// //const emp1={...emp};
// // console.log(emp1);
// // console.log(emp);

// // emp1.empName="harish"
// // emp1.skills.frontEnd[2]="js";
// // console.log(emp1);
// // console.log(emp);

// //Shallow copy, copy the elements from top level for nested element it pass refrance


// //deep copy,it will copy all the elements from top to bottom
//  const emp2=JSON.parse(JSON.stringify(emp));

//  emp2.empName="kapil";
//  emp2.skills.frontEnd[2]="js";
// console.log(emp2);
// console.log(emp);

// //One more way to shallow copy by using assign method
// const emp3=Object.assign({},emp);
// emp3.skills.frontEnd[0]="js"
// // emp3.empName="kapil"; //not change 
// console.log(emp);


// //question
// // emp.empName="harish"
// // console.log(emp3.empName);

// // const emp1={...emp.skills}
// // emp.backEnd="js"
// // console.log(emp1.backEnd);
// // console.log(emp1);
// // console.log(emp.backEnd);


// // const emp4={
// //     empName:"kapil",
// //     empId:30,
// //     salary:3000,
// //     fun:function wedding(){
// //         return this.empName

// //     } ,
// //     fun2:()=>{
// //         return this.empName
// //     }
// // }

// // console.log(emp4.fun());
// // console.log(emp4.fun2());

// let obj={a:2}
// let obj2 ={b:5} 
// Object.assign(obj,obj2)
// console.log(obj); 






//+++++++++++++ shallow copy +++++++++++


// const details={
//     name:"kapil",
//     email:"kapilkapil6465@gmail.com",
//     course:{
//         subject:["js","html","css"]
//     }
// }  


//normal way 
// const copy=details ;
// copy.name="kapil bhagat"
// console.log(details.name);  

//shallow copy using destructuring 
//it copy the top level element and pass refrence for inner function 

// const copy2={...details} 
// copy2.name="kapil bhagat"
// console.log(details.name);
// console.log(copy2.course.subject[0]="javaScript");

//shallow copy using assign method 

// const copy3=Object.assign({},details);
// copy3.name="rohit";
// console.log(details.name);
// copy3.course.subject[1]="HTML"
// console.log(details.course.subject[1]);



//++++++++++ deep copy +++++++++ 
//it will copy all the element from top to bottom 

// const copy4=JSON.parse(JSON.stringify(details));
// copy4.name="rohit"
// console.log(details.name); 



