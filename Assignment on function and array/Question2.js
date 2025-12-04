//write a js prog to find out the maximum value inside the array 

let arr=[23,44,65,12,34];
let max=arr[0];
let k=arr.map((element)=> {
   if(element>max){
    max=element;
   }
})
console.log(max);


//minimum element 
let min=arr[0];
let kk=arr.map((element)=>{
    if(element<min){
        min=element;
    }
})
console.log(min);



