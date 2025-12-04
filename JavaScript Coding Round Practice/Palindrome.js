//check the given string is pallindrome or not 

function isPalidrome(str){
    let reverse=str.split("").reverse().join("");
    if(reverse===str){
       return "Given string is paliendrome"
    }else {
         return "Given string is not a  paliendrome"
    }
} 

console.log(isPalidrome("kapil"));
