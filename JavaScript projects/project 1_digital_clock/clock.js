const hour=document.querySelector("#hours");
const minute=document.querySelector("#minute");
const second=document.querySelector("#second");

setInterval(()=>{
  const date=new Date();
  const hrs=date.getHours();
  const min=date.getMinutes();
  const sec=date.getSeconds();

  hour.innerText=hrs;
  minute.innerText=min;
  second.innerText=sec;

},1000)