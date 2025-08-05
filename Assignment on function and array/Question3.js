//write js prog to find the duplicate value from array

 // let arr=[22,34,22,56,45,34];
 //  let duplicate=[];
// for(let i=0;i<=arr.length;i++){
//     for(let j=i+1;j<arr.length;j++)
//         {
//             if(arr[i]==arr[j] ){

//                duplicate.push(arr[i]);
    
//             }
//         }
// }
//      console.log(duplicate);


let arr=[22,34,22,56,45,34];
 let duplicate=[];

    arr.forEach((element, i) => {
    arr.forEach((element2, i2) => {
        if (element === element2  && i !== i2 && !duplicate.includes(element)) {
            duplicate.push(element);
        }
    });
});
console.log("Duplicate values:", duplicate);


// let dup = []
// let result = arr.forEach((item, index, r) => {
//     if(r.indexOf(item) !== index && !dup.includes(item)){
//         dup.push(item)
//     } 
// }
// )
// console.log(dup)