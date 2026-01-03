const textFeild=document.getElementById("inputFeild");
const button=document.getElementById("AddTask");
const taskList=document.getElementById("taskFeild");

button.addEventListener("click",()=>{
    const value=textFeild.value.trim(); 
    if (!value) return;


    const li=document.createElement("li")

    const span = document.createElement("span");
    span.innerText = value;


   const checkbox=document.createElement("input");
   checkbox.type="checkbox";

   checkbox.setAttribute("class","checkbox")
  

   //delete 
   const deleteButton=document.createElement("button");
   deleteButton.innerText="Delete" 

   deleteButton.addEventListener("click",()=>{
    li.remove();
   })

   //update 
   const update=document.createElement("button");
   update.innerText="Update"
    
   update.addEventListener("click", () => {
        textFeild.value = span.innerText;   
        li.remove();                        
        textFeild.focus();
    });

    li.append(checkbox,span,deleteButton,update)
    taskList.append(li) ;

 checkbox.addEventListener("change",  ()=> {
   span.style.textDecoration = checkbox.checked
  ? "line-through"
  : "none";
  });
  
    textFeild.value=""
})