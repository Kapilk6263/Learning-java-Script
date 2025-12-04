const cities=["bhopal","Indore","pune","mumbai","jhasi"];

const citiesList=document.getElementById("cities");


cities.forEach((ele,i)=>{
      const li=document.createElement("li");
      li.setAttribute("id",`list ${i+1}`);
    //   const updateBtn=document.createElement("button");
    //   const deleteBtn=document.createElement("button");
    //   updateBtn.innerText="update";
    //   deleteBtn.innerText="delete";
      li.innerText=ele;
     
    //   citiesList.append(li,updateBtn,deleteBtn)
    citiesList.append(li)

})