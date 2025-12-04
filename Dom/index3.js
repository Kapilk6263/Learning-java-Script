const addBtn = document.querySelector("#addBtn");
const input = document.querySelector("#inputfeild");
const olList = document.querySelector("ol");
const dltBtn = document.querySelector("#dltBtn");

addBtn.addEventListener("click", () => {
  const data = input.value.trim();

  if (data !== "") {
    const li = document.createElement("li");
    li.innerText = data;
    olList.appendChild(li);
    // input.value="";
  }
});

dltBtn.addEventListener("click", () => {
  const lastLi = olList.lastElementChild;
  if (lastLi) {
    lastLi.remove();
  }
});
