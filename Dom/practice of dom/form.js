const form=document.querySelector("form")

form.addEventListener("submit",(event)=>{
    event.preventDefault();

    const uname=document.querySelector("#username").value;
    const pass=document.querySelector("#passward").value;
    const email=document.querySelector("#email").value; 

    const result=document.querySelector("#result");

    // result.innerText=` username${uname} passward :${pass} email:${email}`

    const para1=document.createElement("p");
    para1.innerText=`username :${uname}`;

     const para2=document.createElement("p");
    para2.innerText=`passward : ${pass}`;

     const para3=document.createElement("p");
    para3.innerText=`username :${email}`;

    result.append(para1,para2,para3);

})