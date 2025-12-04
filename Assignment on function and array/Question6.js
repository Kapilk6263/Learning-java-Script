//program to short the array in ascending or descending order 



let arr=[3,5,2,1,6,9,7,8];

   // console.log(arr.sort((a,b)=>a-b));
   // console.log(arr.sort((a,b)=>b-a));
let big=0;
for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {  
        if (arr[i] > arr[j]) {
            big = arr[i];
            arr[i] = arr[j];
            arr[j] = big;
        }
    }
}
console.log(arr); 
