const section=document.querySelector("section");
const article=document.querySelector("article");
const main=document.querySelector("main");
const div=document.querySelector("div");

div.addEventListener("click",(e)=>{
   console.log(e);
  e.stopPropagation();
  div.style.backgroundColor="red";
});

main.addEventListener("click",(e)=>{
   console.log(e);
  e.stopPropagation();
  main.style.backgroundColor="green";
});

article.addEventListener("click",(e)=>{
   console.log(e);
  e.stopPropagation();
  article.style.backgroundColor="pink";
});
section.addEventListener("click",(e)=>{
   console.log(e);
  e.stopPropagation();
  section.style.backgroundColor="yellow";
});







