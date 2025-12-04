const sec=document.querySelector(".second");
const min=document.querySelector(".minute");
const hour=document.querySelector(".hour");

setInterval(()=>{
    const date=new Date();
    sec.style.transform=`rotate(${date.getSeconds()*6}deg)`;
    min.style.transform=`rotate(${date.getMinutes()*6}deg)`;
    hour.style.transform=`rotate(${date.getHours()*30+date.getMinutes()/2}deg)`;
}, 1000);
