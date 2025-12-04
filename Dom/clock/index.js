const sec=document.querySelector(".sec");
const min=document.querySelector(".min");
const hrs=document.querySelector(".hrs");


setInterval(()=>{
  const date=new Date();
  const second=date.getSeconds();
  const minute=date.getMinutes();
  const hours=date.getHours();

//  console.log(second);
  sec.innerText=second;
  min.innerText=minute;
  hrs.innerText=hours;
},1000);