//write a js program to find prime number from the given array 

let arr=[23,45,66,46,77,67,33];
let primeNUmber=[];
 
function isPrime(num){
    if(num<=1) return false;
    for(let i=2;i<num/2;i++){
        if(num%i===0)return false 
}
  return true;
} 

for(let i=0;i<arr.length;i++){
    let num=arr[i];
    if(isPrime(num)){
        primeNUmber.push(arr[i]);
    }
} 
console.log(primeNUmber);
