let arr=[34,43,67,44,89];

// arr.forEach((element,i,arr)=>{
//     console.log(element);
//     console.log(i);
   
// })

let k=arr.forEach((element,i,arr)=>element+5)
console.log(k);

let k1=arr.map((element,i,arr)=>element>30)
console.log(k1);

let k2=arr.filter((element,i,arr)=>{ return element>30}) //explicit 
console.log(k2);

// let k3=arr.filter((element,i,r)=>element>30)  //implicit return
// console.log(k3);

//find method
let k4=arr.find((element,i,arr)=>{ return element>30}) //explicit 
console.log(k4); 

//reduce method 
let kk=arr.reduce((sum,element)=>sum+=element,0)
console.log(kk);
