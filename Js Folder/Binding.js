 const obj1={
    empName:"kapil",
    empid:101,
    salary:45000,
    deptNo:20,
    mgrNo:"Type123",
 };

 
 const obj2={
    empName:"rohit",
    empid:102,
    salary:45050,
    deptNo:20,
    mgrNo:"Type123",
 };
 const obj3={
    empName:"rohan",
    empid:103,
    salary:45200,
    deptNo:20,
    mgrNo:"Type123",
 };

 function print(a,b){
   console.log(a,b);
   // console.log(this)
    console.log(this.empName)
    console.log(this.empid)
    console.log(this.salary)
    console.log(this.deptNo);
    console.log(this.mgrNo);
 }
 
      // print.call(obj1,20,40);
     // print.call(obj2,45,66);
    // print.call(obj3,67,78);
   //  print.apply(obj1,[2,4]);

print.bind(obj1)(20,30) //it return the bound function 