// let arr=[34,43,67,44,89];

// arr.forEach((element,i,arr)=>{
//     console.log(element);
//     console.log(i);
   
// })

/*
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
*/ 
// console.log(arr.filter(element=>element)); //inside the filter we have to write condition 
// console.log(arr.filter(element=>0)); //empty array because none of element is satisfy the condition
// console.log(arr.map(element=>34));   //inside the map we have to pass expression 

// console.log(arr.find(element => 0)); //undefined 


// let sum=arr.reduce((sum,element)=>sum+=element,30);
// console.log("sum of array",sum);

// let arr2=[-101,-109,-98,98,-101];
// let k=arr2.reduce((sub,element)=>sub+=element,0)  //it start array execution from left
// console.log(k);

// let kk=arr2.reduceRight((sub,element)=>sub+=element,0) //it start array execution from right 
// console.log(kk);


//write the js prog to find out the duplicate values in given array

// let arr=[34,55,65,346,77,55,55];
// let arr2 =[];

// arr.forEach((element,i)=>{
//     arr.forEach((element2,i2)=>{
//         if(element===element2 && i!=i2 && !arr2.includes(element) ){
//             arr2.push(element);
//         }
//     })

// });
// console.log(arr2);


let arr = [34, 55, 65, 346, 77, 77, 55, 55, 55];


// let result=arr.filter((element,i)=>arr.indexOf(element)!==i
// )
// console.log(result);
let dup = []
let result = arr.forEach((item, index, r) => {
    if(r.indexOf(item) !== index && !dup.includes(item)){
        dup.push(item)
    } 
}
)
console.log(dup)

// arr = arr.filter((element, index) => arr.indexOf(element) !== index && arr.includes);
// console.log(arr);