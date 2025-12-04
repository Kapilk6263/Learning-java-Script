//length of array without using length function 

let arr=[3,3,5,6,6]
let length=0;

for(let k of arr){
    length++;
}

console.log("Length of array is ",length);

console.log(arr[0]);
console.log(arr[length-1]);

