let form=document.querySelector("form");

form.addEventListener("submit",(e)=>{
      e.preventDefault(); 

      
      let username=document.querySelector("#username").value;
let passward=document.querySelector("#passward").value;
let email=document.querySelector("#email").value; 

let result=document.querySelector("#result");

 
let para1=document.createElement("p");
para1.innerText=`username : ${username}`;

let para2=document.createElement("p")
    para2.innerText=`passward : ${passward}`

let para3=document.createElement("p")
para3.innerText=`email : ${email}`;

result.append(para1,para2,para3);
}) 

