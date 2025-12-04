setTimeout(()=>{
    console.log("st1");
    new Promise((res,rej)=>{
        res("p1");
    }).then((ele)=>{console.log(ele);})
    
},1000)

new Promise((res,rej)=>{
    res("p2");
    setTimeout(()=>{
        console.log("st2");},2000)
}).then((ele)=>{console.log(ele);
});

setTimeout(()=>{
    console.log("st3"); 
},0)