const container =document.querySelector(".container");


let colors=["red","blue","pink","yellow"];
let colors2=["orange","gray","green","purple"];

let count =0;

const changeColor=()=>{
    container.style.backgroundColor=colors[count];
    count++;
    if(count==colors.length){
        count=0;
    }
}

let count2=0;
const changeColor1=()=>{
    container.style.backgroundColor=colors[count2++];
    if(count==colors.length){
        count2=0;
    }
}