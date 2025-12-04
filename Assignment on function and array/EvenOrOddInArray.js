//find the count of even or odd in an array

let arr=[2,4,5,3,7,9,10];

let even=0;
let odd=0;



// for(let value of arr){
//     if(value%2==0){
//         even++;
//     }else{
//         odd++;
//     }
// } 
// console.log("count of even in array :",even);
// console.log("count of odd in array :",odd);



//second approach 

let k=arr.forEach((num)=>num%2==0?even++:odd++)
console.log("count of even in array :",even);
console.log("count of odd in array :",odd);



// let arr1=[2,3,2,3,7,7]
// let ele=7;
// let p=0;
// for(let value of arr1){
//     if(value==ele){
//        p++
        
//     }
// } 
// if(p>0){
//     console.log(ele,": value is present");
    
// }else {
//     console.log("Not present ");
    
// }



let arr6=[54,76,98,88]

let num=98;

 let kk=arr6.findIndex((ele,i)=>{
    if(ele==num){
        return i;
        
    } 
})
console.log(kk);
