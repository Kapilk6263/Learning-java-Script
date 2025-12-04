//write a javaScript program to find the frequency of repeated element

let arr=[2,3,4,2,6,5,2];

function frequency(arr){
    const freq={};
 
    for(let i=0;i<arr.length;i++){
        let item=arr[i];
        if(freq[item]){
            freq[item]++;
        }else{
            freq[item]=1;            
        }

    }
    return freq;
}
console.log(frequency(arr));

