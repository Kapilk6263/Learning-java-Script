let arr=[121,323,467,645]
// check elemant of arr is palindrom or not
function checkPalindrom(arr){
    function isPalindrom(num){
        const str = String(num);
        const rev = str.split('').reverse().join('');
        return rev === str;
    }
    arr.forEach((ele) => {
        if(isPalindrom(ele)){
            console.log(ele);
        }
    })
}
console.log(checkPalindrom(arr));
