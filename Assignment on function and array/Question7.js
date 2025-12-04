//reverse the array without using inbuilt function

let arr=[9,8,7,6,5,4,3,2,1];
 let result=[];


function reverseArray(arr)
{

    for(let i=arr.length-1;i>=0;i--)
    {
        result.push(arr[i]);
    }
    return result;
}
 console.log(reverseArray(arr));
// reverseArray(arr)
// console.log(result);


//time complexity =O(n)

