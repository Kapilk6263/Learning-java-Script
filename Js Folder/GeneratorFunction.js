function* sum(a,b)
{
  yield a+b;  //retun the value and pause the execution 
  yield a+30;
  // return 60;  //return break the execution 
  yield a+40;
  yield a+50;

}
const result =sum(10,20)
console.log(result.next().value);
console.log(result.next().value);
console.log(result.next().value);
console.log(result.next().value);

