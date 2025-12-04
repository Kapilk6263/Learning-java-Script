// wjsp to rotate the array by the given number
let arr=[23,45,66,77]
// function rotate(arr){
//     let k = parseInt(prompt("Enter a number"));
//     k = k%arr.length;
//     while(k>0){
//         let l = arr.shift();
//         arr.push(l);
//         k--;
//     }
//     console.log(arr);
// }
// console.log(rotate);

function rotate(arr,n){
    let first=0;
    n=n%arr.length
    for(let i=0;i<n;i++){
        first=arr.shift();
        arr.push(first)
    }
    console.log(arr);
    
}
rotate(arr,1)



