//random color generator


const randomColor=function (){
    const hex="0123456789ABCDEF";
    let color='#';
    for(let i=0;i<6;i++){
        color+=hex[Math.floor(Math.random()*16)]
    }
    return color;
} ;


 const start=document.querySelector("#start-button");
 const stop=document.querySelector("#stop-button");


let interval;
const startChangingColor=function(){

   interval=setInterval(()=>{
    document.body.style.backgroundColor=randomColor();
   },1000)
} 
const stopChangingColor=function(){
    clearInterval(interval);
}

start.addEventListener("click",startChangingColor);

stop.addEventListener("click",stopChangingColor);


// let interval;
// start.addEventListener("click",()=>{
//     interval=setInterval(()=>{
//         document.body.style.backgroundColor=randomColor();
//     },1000)
// })

// stop.addEventListener("click",()=>{
//   clearInterval(interval);
// })