
// wjsp to find out the armstrong number from the given array
let arr=[153,344,370,371]
function checckArmstrong(arr){
    function isArmstrong(num){
        const numStr = String(num); 
        const digits = numStr.split('');
        let sum = 0;
        digits.forEach((ele) => {
            sum += Math.pow(ele, digits.length);
        })
        return sum == num;
    }
    arr.forEach((ele) => {
        if(isArmstrong(ele)){
            console.log(ele);
        }
    })
}
console.log(checckArmstrong(arr));
