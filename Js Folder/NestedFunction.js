//NESTED FUNCTION

function parent() 
{
  let a=10;
  let b=20;
  let c=30;

    return function child(){
    let d=34;
    let e=33;
    console.log(a,b,d);

    return function grandChild(){
        let f=40;
        console.log(a,b,c,d,e,f);
        
    }
    }
    //  child(); 
}
parent()()(); 

/* two ways to calling nested function 
1.calling child inside the parent function
2.fuctional currying /js currying 
*/





