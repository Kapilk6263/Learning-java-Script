// let a="5";
// let b=2;
// let result=a+b;
// console.log(result);

// let str="123";
// console.log(typeof Number(str));

// let x=0;
// let y="hello";
// let z ="";
// console.log(Boolean(x));
// console.log(Boolean("hello"));
// console.log(Boolean(z));


// let k= true;
// let l="10";
// console.log((k+l));

// let m="10";
// let c=5;
// let v=m*c;
// console.log(v);
// console.log(typeof v);


// let num=150;
// let bool=true;

// console.log(typeof String(num));
// console.log(typeof String(bool));


// console.log(null==undefined);
// console.log(NaN==NaN);
// console.log(""==undefined);
// console.log(false==undefined);
// console.log(0==undefined);
// console.log(false==null);
// console.log(null==0);

//array in js 
// const arr=[2,3,4,5];
// console.log(arr.pop());
// console.log(arr);
// console.log(arr.shift());
// console.log(arr);
// console.log(arr.includes(4)); //it will use to check the particular value is present in the array or not 
// console.log(arr.includes(8));


// let a = "7";
// let b = 3;
// let result = a + b;
// console.log(result);      
// console.log(typeof result);

// let x = true;
// let y = 4;
// let result = x * y;
// console.log(result);      
// console.log(typeof result);

// let m = "100";
// let n = "50";
// console.log(m - n);       
// console.log(typeof (m - n));


// let a;
// let b = 10;
// let result = b / a;
// console.log(result);      
// console.log(typeof result);

// let a = null;
// let b = " is value";
// console.log(a + b);       
// console.log(typeof (a + b));

// let a = "abc";
// let b = 10;
// console.log(a * b);       
// console.log(typeof (a * b));

// let a = "true";
// let b = false;
// console.log(a + b);       
// console.log(typeof (a + b));

// let a = "25";
// let b = Number(a);
// console.log(b + 5);       
// console.log(typeof b);

// let a = null;
// let b = 10;
// console.log(a + b);       
// console.log(typeof (a + b));

// let a = "5";
// let b = 5;
// console.log(a == b);      
// console.log(a === b);

/*
//array method parctice 

let arr1=[23,34,55,43];
arr1.push(66);   //add or insert the elemant at the last of the array 
console.log(arr1); 
arr1.pop();      //delete or remove the element at the last of the array 
console.log(arr1);

let arr2=[443,355,324];
arr2.unshift(111);  //add or insert the element at the start of the array 
console.log(arr2);
arr2.shift();      //delete or remove the element at the start of the array 
console.log(arr2);


let arr3=[1,2,3,4,5];
console.log(arr3.concat(arr1,arr2));
console.log(arr3);  //it used to merge the array or concat the arrays 
console.log(arr3.slice(1));  //In a argument we pass starting index 


let arr4=[23,44,87,97,65];
console.log(arr4.splice(1,3,0,0,0));//splice method is used to modify the array ,it is used add remove the element 
console.log(arr4);
console.log(arr4.reverse()); //reverse method is used to reverse the array 

console.log(arr4.includes(44)); //include method is used to find or check that a particular element is present in array or not 
console.log(arr4.includes(0));
console.log(typeof arr4.includes(0)); //return type of include method is boolean 

let arr5=['k','a','p','i','l'];
console.log(arr5);
console.log(arr5.join());
console.log(arr5.join(""));
console.log(arr5.join("")+" uplawdiya");

let arr6=[2,4,6,3,1,5];
console.log(arr6.sort()); //Sort method is used to arrange elements in ascending order 

*/ 


// let arrp2 = [20, 30, 40];
// console.log(arrp2.push(10) && arrp2.reverse().join(","));


// let a=[1,2,3,4,5];
// console.log(a.splice(0,3,0));
// console.log(a);

// let arrp3 = ["a", "b", "c", "d"];
// console.log(arrp3.shift() && arrp3.join(""));

// let arr = [10, 20, 30, 40];
// console.log(arr.slice(1, 3) && arr.join("|"));

// let arr = [1, 2, 3, 4];
// console.log(arr.splice(1, 2, 8, 9) && arr.reverse().join("*"));

// let arr = [7, 8, 9];
// console.log(arr.pop() || arr.push(10));

let arrp1 = [5, 3, 7, 1];
console.log(arrp1.splice(2, 1, 10) && arrp1.sort().join("-"));

