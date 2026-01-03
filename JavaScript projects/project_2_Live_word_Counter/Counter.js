const result=document.querySelector("#result");
const textarea=document.querySelector("#textarea");

textarea.addEventListener("input",()=>{
 const text=textarea.value.trim();

 //words count
 const words=text.split(/\s+/).length;

 //character count 
 const characters=text.replace().length;

 result.textContent=` Words : ${words}| characters : ${characters}`

});